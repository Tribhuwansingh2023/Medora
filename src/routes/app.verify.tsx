import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, ScanLine } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  ClinicalDisclaimer,
  IntegrationNotConnected,
  PageHeader,
  ProvenanceLine,
  RxPill,
  SafetyNotice,
} from "@/components/common/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { demoMedicines } from "@/data/demo-catalog";
import type { Medicine } from "@/lib/domain";
import { settle } from "@/services/provider";

export const Route = createFileRoute("/app/verify")({
  head: () => ({
    meta: [
      { title: "Pack verification — Medora" },
      {
        name: "description",
        content:
          "Check a medicine pack code against Medora's demo catalogue. Real verification needs a connected serialisation registry.",
      },
      { property: "og:title", content: "Pack verification — Medora" },
      { property: "og:description", content: "Check a pack code, honestly labelled." },
    ],
  }),
  component: VerifyPage,
});

type VerifyState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "match"; medicine: Medicine }
  | { kind: "unknown"; code: string };

/** Demo codes map to catalogue entries deterministically: MD- + first 6 chars of the id. */
const demoCodeFor = (m: Medicine) =>
  `MD-${m.id
    .replace(/[^a-z0-9]/gi, "")
    .slice(0, 6)
    .toUpperCase()}`;

function VerifyPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<VerifyState>({ kind: "idle" });

  const verify = async (value: string) => {
    const trimmed = value.trim().toUpperCase();
    if (!trimmed) {
      toast.error("Enter a pack code to check.");
      return;
    }
    setResult({ kind: "loading" });
    const match = demoMedicines.find((m) => demoCodeFor(m) === trimmed);
    const next = await settle<VerifyState>(
      match ? { kind: "match", medicine: match } : { kind: "unknown", code: trimmed },
      700,
    );
    setResult(next);
    if (match) toast.success("Code matched a demo catalogue record.");
    else toast.warning("No demo record matches that code.");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pack verification"
        demo
        description="Enter the code printed on a medicine pack. Medora checks it against the demo catalogue and tells you plainly when it cannot verify anything."
      />

      <IntegrationNotConnected integration="barcode" />

      <form
        className="surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          void verify(code);
        }}
      >
        <Label htmlFor="pack-code">Pack code</Label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <Input
            id="pack-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g. MD-MEDPAR"
            className="font-mono"
          />
          <Button type="submit" disabled={result.kind === "loading"}>
            <ScanLine className="size-4" aria-hidden />
            {result.kind === "loading" ? "Checking…" : "Check pack"}
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Camera scanning needs a connected serialisation registry, so it is disabled here rather
          than faked. Try a demo code:{" "}
          {demoMedicines.slice(0, 3).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setCode(demoCodeFor(m));
                void verify(demoCodeFor(m));
              }}
              className="mr-2 font-mono font-medium text-primary underline"
            >
              {demoCodeFor(m)}
            </button>
          ))}
        </p>
      </form>

      {result.kind === "loading" && (
        <div className="surface space-y-3 p-5">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      )}

      {result.kind === "match" && (
        <section className="surface p-5" aria-live="polite">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/35 bg-success-soft px-2.5 py-0.5 text-xs font-semibold text-success">
              <BadgeCheck className="size-3.5" aria-hidden /> Matches a demo record
            </span>
            <RxPill prescriptionOnly={result.medicine.prescriptionOnly} />
          </div>
          <h2 className="mt-3 text-xl font-bold">{result.medicine.brandName}</h2>
          <p className="text-sm text-muted-foreground">
            {result.medicine.genericName} · {result.medicine.form} · {result.medicine.packSize}
          </p>
          <dl className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Manufacturer
              </dt>
              <dd className="text-sm">{result.medicine.manufacturer}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Storage</dt>
              <dd className="text-sm">{result.medicine.storage}</dd>
            </div>
          </dl>
          <ProvenanceLine provenance={result.medicine.provenance} />
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/app/medicine/$medicineId" params={{ medicineId: result.medicine.id }}>
                Open the medicine record
              </Link>
            </Button>
          </div>
        </section>
      )}

      {result.kind === "unknown" && (
        <SafetyNotice tone="warning" title={`Medora cannot verify ${result.code}`}>
          No record in the demo catalogue matches that code. This does not mean the pack is genuine
          or counterfeit — Medora has no live registry connected, so it cannot make that claim. If
          you are worried about a pack, take it back to the pharmacy that supplied it.
        </SafetyNotice>
      )}

      <ClinicalDisclaimer />
    </div>
  );
}
