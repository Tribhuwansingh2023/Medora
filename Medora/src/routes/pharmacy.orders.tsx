import { createFileRoute } from "@tanstack/react-router";
import { Package, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/common/primitives";
import { DataTable, type DataColumn } from "@/components/workspace/DataTable";
import { AsyncSection, StatusPill, WorkspaceSection } from "@/components/workspace/parts";
import { money, shortDateTime, useWorkspaceData } from "@/services/workspace";
import type { PharmacyOrderRow } from "@/data/workspace-demo";

export const Route = createFileRoute("/pharmacy/orders")({
  head: () => ({
    meta: [
      { title: "Orders — Medora Pharmacy workspace" },
      {
        name: "description",
        content:
          "Review demo pharmacy orders, filter by status and fulfilment type, and update status for this session.",
      },
      { property: "og:title", content: "Orders — Medora Pharmacy workspace" },
      {
        property: "og:description",
        content:
          "Order queue, bulk status actions and order detail for the Medora pharmacy console.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrdersPage,
});

type OrderStatus = PharmacyOrderRow["status"];

const statusMeta: Record<
  OrderStatus,
  { label: string; tone: "neutral" | "positive" | "warning" | "danger" | "info" }
> = {
  awaiting_prescription: { label: "Awaiting prescription", tone: "warning" },
  verifying: { label: "Verifying", tone: "info" },
  accepted: { label: "Accepted", tone: "neutral" },
  preparing: { label: "Preparing", tone: "neutral" },
  ready: { label: "Ready for collection/delivery", tone: "positive" },
  completed: { label: "Completed", tone: "positive" },
  cancelled: { label: "Cancelled", tone: "danger" },
};

const channelLabel = {
  reservation: "Reservation",
  delivery: "Delivery",
  counter: "Counter",
} as const;

function OrdersPage() {
  const orders = useWorkspaceData("pharmacyOrders");
  const [localStatus, setLocalStatus] = useState<Record<string, OrderStatus>>({});
  const [viewing, setViewing] = useState<PharmacyOrderRow | null>(null);

  const effectiveStatus = (row: PharmacyOrderRow) => localStatus[row.id] ?? row.status;

  const columns: DataColumn<PharmacyOrderRow>[] = useMemo(
    () => [
      {
        key: "id",
        header: "Order",
        sortValue: (r) => r.id,
        render: (r) => (
          <div>
            <p className="font-medium text-ink">{r.id}</p>
            <p className="text-xs text-muted-foreground">{channelLabel[r.channel]}</p>
          </div>
        ),
      },
      {
        key: "customer",
        header: "Customer",
        sortValue: (r) => r.customer,
        render: (r) => r.customer,
      },
      {
        key: "items",
        header: "Items",
        align: "right",
        hideBelow: "sm",
        sortValue: (r) => r.items,
        render: (r) => <span className="numeric">{r.items}</span>,
      },
      {
        key: "total",
        header: "Total",
        align: "right",
        sortValue: (r) => r.total,
        render: (r) => <span className="numeric font-medium text-ink">{money(r.total)}</span>,
      },
      {
        key: "status",
        header: "Status",
        sortValue: (r) => effectiveStatus(r),
        render: (r) => {
          const meta = statusMeta[effectiveStatus(r)];
          return <StatusPill label={meta.label} tone={meta.tone} />;
        },
      },
      {
        key: "placedAt",
        header: "Placed",
        hideBelow: "md",
        sortValue: (r) => r.placedAt,
        render: (r) => shortDateTime(r.placedAt),
      },
    ],
    [localStatus],
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        demo
        description="Demo order queue across reservations, deliveries and counter sales. Status changes here are recorded for this session only."
      />

      <AsyncSection
        query={orders}
        emptyIcon={Package}
        emptyTitle="No orders"
        emptyDescription="Orders placed through Medora will appear in this queue."
        isEmpty={(d) => d.length === 0}
      >
        {(data) => (
          <WorkspaceSection
            title="All orders"
            description="Search, filter, bulk-update or open an order for detail."
          >
            <DataTable
              rows={data}
              columns={columns}
              getId={(r) => r.id}
              searchText={(r) => `${r.id} ${r.customer}`}
              searchPlaceholder="Search by reference or customer…"
              pageSize={8}
              initialSort={{ key: "placedAt", direction: "desc" }}
              filters={[
                {
                  key: "status",
                  label: "Status",
                  options: Object.entries(statusMeta).map(([value, meta]) => ({
                    value,
                    label: meta.label,
                  })),
                  predicate: (r, v) => effectiveStatus(r) === v,
                },
                {
                  key: "channel",
                  label: "Fulfilment",
                  options: Object.entries(channelLabel).map(([value, label]) => ({
                    value,
                    label,
                  })),
                  predicate: (r, v) => r.channel === v,
                },
              ]}
              rowActions={(r) => (
                <Button variant="outline" size="sm" onClick={() => setViewing(r)}>
                  View
                </Button>
              )}
              bulkActions={(ids, clear) => (
                <div className="flex items-center gap-2">
                  <Select
                    onValueChange={(value) => {
                      setLocalStatus((prev) => {
                        const next = { ...prev };
                        for (const id of ids) next[id] = value as OrderStatus;
                        return next;
                      });
                      toast.success(
                        `Recorded ${ids.length} order${ids.length === 1 ? "" : "s"} as "${statusMeta[value as OrderStatus].label}" for this demo session`,
                      );
                      clear();
                    }}
                  >
                    <SelectTrigger
                      className="h-8 w-[200px]"
                      aria-label="Set status for selected orders"
                    >
                      <SelectValue placeholder="Set status…" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(statusMeta).map(([value, meta]) => (
                        <SelectItem key={value} value={value}>
                          {meta.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </WorkspaceSection>
        )}
      </AsyncSection>

      <Dialog open={Boolean(viewing)} onOpenChange={(open) => !open && setViewing(null)}>
        <DialogContent>
          {viewing && (
            <>
              <DialogHeader>
                <DialogTitle>Order {viewing.id}</DialogTitle>
                <DialogDescription>
                  {viewing.customer} · placed {shortDateTime(viewing.placedAt)} ·{" "}
                  {channelLabel[viewing.channel]}
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-2">
                <StatusPill {...statusMeta[effectiveStatus(viewing)]} />
                {viewing.prescriptionRequired && (
                  <StatusPill label="Prescription required" tone="info" />
                )}
              </div>

              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Items</dt>
                  <dd className="numeric mt-1 font-medium text-ink">{viewing.items}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Order total
                  </dt>
                  <dd className="mt-1 font-medium text-ink">{money(viewing.total)}</dd>
                </div>
              </dl>
              <p className="text-xs text-muted-foreground">
                This demo dataset records order totals and item counts only — a per-line breakdown
                is not available in this sample provider.
              </p>

              <div className="flex flex-wrap justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setLocalStatus((prev) => ({ ...prev, [viewing.id]: "preparing" }));
                    toast.success(`Order ${viewing.id} recorded as preparing (demo session)`);
                  }}
                >
                  <Truck className="size-4" aria-hidden /> Mark preparing
                </Button>
                <Button
                  onClick={() => {
                    setLocalStatus((prev) => ({ ...prev, [viewing.id]: "completed" }));
                    toast.success(`Order ${viewing.id} recorded as completed (demo session)`);
                  }}
                >
                  Mark completed
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
