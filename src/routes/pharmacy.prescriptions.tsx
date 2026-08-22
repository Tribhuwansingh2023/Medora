import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/common/primitives";
import { DataTable, type DataColumn } from "@/components/workspace/DataTable";
import {
  AiAssistTag,
  AsyncSection,
  StatusPill,
  WorkspaceSection,
} from "@/components/workspace/parts";
import { SafetyNotice } from "@/components/common/primitives";
import { shortDateTime, useWorkspaceData } from "@/services/workspace";
import type { VerificationQueueRow } from "@/data/workspace-demo";

export const Route = createFileRoute("/pharmacy/prescriptions")({
  head: () => ({
    meta: [
      { title: "Verification queue — Medora Pharmacy workspace" },
      {
        name: "description",
        content:
          "Pharmacist verification queue for submitted prescriptions, with extracted lines shown as assistive suggestions requiring confirmation before dispensing.",
      },
      {
        property: "og:title",
        content: "Verification queue — Medora Pharmacy workspace",
      },
      {
        property: "og:description",
        content:
          "Review extracted prescription lines and record pharmacist approval or rejection decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VerificationQueuePage,
});

const statusMeta = {
  waiting: { label: "Waiting", tone: "warning" },
  in_review: { label: "In review", tone: "info" },
  approved: { label: "Approved by pharmacist", tone: "positive" },
  rejected: { label: "Rejected by pharmacist", tone: "danger" },
} as const;

function confidenceTone(confidence: number): "positive" | "warning" | "danger" {
  if (confidence >= 0.85) return "positive";
  if (confidence >= 0.65) return "warning";
  return "danger";
}

function VerificationQueuePage() {
  const queue = useWorkspaceData("verificationQueue");
  const [openId, setOpenId] = useState<string | null>(null);
  const [localState, setLocalState] = useState<
    Record<string, { status: "approved" | "rejected"; reason: string }>
  >({});
  const [reason, setReason] = useState("");

  const rows = queue.data ?? [];
  const open = useMemo(
    () => rows.find((r) => r.id === openId) ?? null,
    [rows, openId],
  );

  const columns: DataColumn<VerificationQueueRow>[] = [
    {
      key: "patient",
      header: "Patient / prescriber",
      sortValue: (r) => r.patient,
      render: (r) => (
        <div>
          <p className="font-medium text-ink">{r.patient}</p>
          <p className="text-xs text-muted-foreground">{r.prescriber}</p>
        </div>
      ),
    },
    {
      key: "prescriptionId",
      header: "Prescription",
      hideBelow: "md",
      sortValue: (r) => r.prescriptionId,
      render: (r) => (
        <span className="numeric text-sm">{r.prescriptionId}</span>
      ),
    },
    {
      key: "received",
      header: "Received",
      hideBelow: "sm",
      sortValue: (r) => r.receivedAt,
      render: (r) => shortDateTime(r.receivedAt),
    },
    {
      key: "items",
      header: "Lines",
      hideBelow: "lg",
      align: "right",
      sortValue: (r) => r.items,
      render: (r) => <span className="numeric">{r.items}</span>,
    },
    {
      key: "confidence",
      header: "Extraction confidence",
      hideBelow: "md",
      sortValue: (r) => r.confidence,
      render: (r) => (
        <div className="flex items-center gap-2">
          <StatusPill
            label={`${Math.round(r.confidence * 100)}%`}
            tone={confidenceTone(r.confidence)}
          />
          <AiAssistTag />
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      sortValue: (r) => localState[r.id]?.status ?? r.status,
      render: (r) => {
        const state = localState[r.id]?.status ?? r.status;
        return <StatusPill {...statusMeta[state]} />;
      },
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Verification queue"
        demo
        description="Submitted prescriptions arrive here with machine-extracted lines. Every line requires pharmacist confirmation before anything is dispensed."
      />

      <SafetyNotice
        tone="warning"
        title="The registered pharmacist makes every dispensing decision"
      >
        Extracted text and confidence scores are assistive only. They are never
        treated as verified, never auto-approved, and never used to infer a
        dose. Approving or rejecting a queue item records the decision as made
        by the reviewing pharmacist in this demo session.
      </SafetyNotice>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <WorkspaceSection
          title="Submitted prescriptions"
          description="Select an item to review its extracted lines and record a decision."
        >
          <AsyncSection
            query={queue}
            emptyIcon={ClipboardList}
            emptyTitle="Nothing to verify"
            emptyDescription="New prescription submissions will appear in this queue."
            isEmpty={(d) => d.length === 0}
          >
            {(data) => (
              <DataTable
                rows={data}
                columns={columns}
                getId={(r) => r.id}
                searchText={(r) =>
                  `${r.patient} ${r.prescriber} ${r.prescriptionId}`
                }
                searchPlaceholder="Search by patient, prescriber or prescription id…"
                initialSort={{ key: "received", direction: "desc" }}
                pageSize={6}
                onRowClick={(r) => {
                  setOpenId(r.id);
                  setReason("");
                }}
                filters={[
                  {
                    key: "status",
                    label: "Status",
                    options: Object.entries(statusMeta).map(
                      ([value, meta]) => ({
                        value,
                        label: meta.label,
                      }),
                    ),
                    predicate: (r, v) =>
                      (localState[r.id]?.status ?? r.status) === v,
                  },
                ]}
                rowActions={(r) => (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setOpenId(r.id);
                      setReason("");
                    }}
                  >
                    Review
                  </Button>
                )}
              />
            )}
          </AsyncSection>
        </WorkspaceSection>

        <div className="space-y-6">
          {open ? (
            <WorkspaceSection
              title={`Prescription ${open.prescriptionId}`}
              description={`${open.patient} · ${open.prescriber} · received ${shortDateTime(open.receivedAt)}`}
              actions={
                <StatusPill
                  {...statusMeta[localState[open.id]?.status ?? open.status]}
                />
              }
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-ink">
                    Extracted line count
                  </span>
                  <span className="numeric text-sm">{open.items}</span>
                  <AiAssistTag />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-ink">
                    Extraction confidence
                  </span>
                  <StatusPill
                    label={`${Math.round(open.confidence * 100)}%`}
                    tone={confidenceTone(open.confidence)}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  This score reflects how confidently the assistive layer read
                  the uploaded image. It is not a clinical judgement. The
                  pharmacist must confirm every line against the original
                  prescription before approving.
                </p>
                {open.note && (
                  <p className="rounded-md bg-secondary p-3 text-sm text-muted-foreground">
                    Note from the extraction pass: {open.note}
                  </p>
                )}
              </div>

              {localState[open.id]?.reason && (
                <p className="mt-4 rounded-md border border-border bg-secondary p-3 text-sm">
                  Pharmacist decision reason: {localState[open.id]?.reason}
                </p>
              )}

              <div className="mt-5 space-y-2">
                <Label htmlFor="verify-reason">
                  Decision reason (required to approve or reject)
                </Label>
                <Textarea
                  id="verify-reason"
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Record why you are approving or rejecting this prescription…"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  disabled={reason.trim().length < 4}
                  onClick={() => {
                    setLocalState((prev) => ({
                      ...prev,
                      [open.id]: { status: "approved", reason: reason.trim() },
                    }));
                    toast.success(
                      "Recorded as approved by you, the reviewing pharmacist (demo)",
                    );
                    setReason("");
                  }}
                >
                  <CheckCircle2 className="size-4" aria-hidden /> Approve as
                  pharmacist
                </Button>
                <Button
                  variant="outline"
                  disabled={reason.trim().length < 4}
                  onClick={() => {
                    setLocalState((prev) => ({
                      ...prev,
                      [open.id]: { status: "rejected", reason: reason.trim() },
                    }));
                    toast(
                      "Recorded as rejected by you, the reviewing pharmacist (demo)",
                    );
                    setReason("");
                  }}
                >
                  <XCircle className="size-4" aria-hidden /> Reject
                </Button>
              </div>
            </WorkspaceSection>
          ) : (
            <WorkspaceSection
              title="Prescription detail"
              description="Select a submission from the queue to review it."
            >
              <p className="text-sm text-muted-foreground">
                No prescription selected.
              </p>
            </WorkspaceSection>
          )}
        </div>
      </div>
    </div>
  );
}
