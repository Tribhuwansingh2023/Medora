import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRightLeft,
  Building2,
  Check,
  CheckCircle2,
  DollarSign,
  FileText,
  HelpCircle,
  Info,
  Package,
  Pill,
  Plus,
  Shield,
  ShieldAlert,
  Sparkles,
  Tag,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusPill } from "@/components/workspace/parts";
import { demoMedicines } from "@/data/demo-catalog";
import { useStore } from "@/lib/store";
import { money } from "@/services/workspace";
import type { Medicine } from "@/lib/domain";
import { cn } from "@/lib/utils";

interface MedicineComparativeViewProps {
  initialMedAId?: string;
  initialMedBId?: string;
  onSelectMedicine?: (slot: "a" | "b", medicineId: string) => void;
  className?: string;
}

export function MedicineComparativeView({
  initialMedAId = "med-dolo-650-tab",
  initialMedBId = "med-calpol-650-tab",
  className,
}: MedicineComparativeViewProps) {
  const { logActivity, toggleCompare } = useStore();
  const [medAId, setMedAId] = useState<string>(initialMedAId);
  const [medBId, setMedBId] = useState<string>(initialMedBId);

  const medA = useMemo(
    () => demoMedicines.find((m) => m.id === medAId) ?? demoMedicines[0],
    [medAId],
  );

  const medB = useMemo(
    () => demoMedicines.find((m) => m.id === medBId) ?? demoMedicines[1],
    [medBId],
  );

  const handleSelectMedA = (id: string) => {
    setMedAId(id);
    const selected = demoMedicines.find((m) => m.id === id);
    if (selected) {
      logActivity({
        action: "compare",
        title: `Comparing ${selected.brandName} with ${medB?.brandName ?? "another"}`,
        detail: `Analyzed active ingredient equivalence and side effect differences.`,
      });
    }
  };

  const handleSelectMedB = (id: string) => {
    setMedBId(id);
    const selected = demoMedicines.find((m) => m.id === id);
    if (selected) {
      logActivity({
        action: "compare",
        title: `Comparing ${medA?.brandName ?? "First medicine"} with ${selected.brandName}`,
        detail: `Analyzed active ingredient equivalence and side effect differences.`,
      });
    }
  };

  const handleSwap = () => {
    const temp = medAId;
    setMedAId(medBId);
    setMedBId(temp);
  };

  // Active Ingredient Comparison
  const ingredientsComparison = useMemo(() => {
    if (!medA || !medB) return { identical: false, itemsA: [], itemsB: [] };

    const strA = medA.activeIngredients
      .map((i) => `${i.name.toLowerCase()}:${i.strength.toLowerCase()}`)
      .sort()
      .join("|");
    const strB = medB.activeIngredients
      .map((i) => `${i.name.toLowerCase()}:${i.strength.toLowerCase()}`)
      .sort()
      .join("|");

    const identical = strA === strB;

    const namesA = new Set(
      medA.activeIngredients.map((i) => i.name.toLowerCase()),
    );
    const namesB = new Set(
      medB.activeIngredients.map((i) => i.name.toLowerCase()),
    );

    return {
      identical,
      namesA,
      namesB,
    };
  }, [medA, medB]);

  // Side Effects Comparison (shared vs unique)
  const sideEffectsAnalysis = useMemo(() => {
    if (!medA || !medB) return { shared: [], uniqueA: [], uniqueB: [] };

    const seA = medA.commonSideEffects || [];
    const seB = medB.commonSideEffects || [];

    const normA = seA.map((s) => s.toLowerCase());
    const normB = seB.map((s) => s.toLowerCase());

    const shared: string[] = [];
    const uniqueA: string[] = [];
    const uniqueB: string[] = [];

    seA.forEach((effect) => {
      if (
        normB.some(
          (b) =>
            b.includes(effect.toLowerCase()) ||
            effect.toLowerCase().includes(b),
        )
      ) {
        shared.push(effect);
      } else {
        uniqueA.push(effect);
      }
    });

    seB.forEach((effect) => {
      if (
        !normA.some(
          (a) =>
            a.includes(effect.toLowerCase()) ||
            effect.toLowerCase().includes(a),
        )
      ) {
        uniqueB.push(effect);
      }
    });

    return { shared, uniqueA, uniqueB };
  }, [medA, medB]);

  return (
    <div
      id="medicine-comparative-view"
      className={cn("rise space-y-6", className)}
    >
      {/* Header Selector & Controls */}
      <div className="surface p-5 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-md bg-chart-2/15 text-chart-2">
                <ArrowRightLeft className="size-4" />
              </span>
              <h2 className="font-display text-base font-bold text-ink">
                Head-to-Head Comparative View
              </h2>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Compare active ingredients, therapeutic equivalents, dosing
              profiles, and side effect overlaps side-by-side.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              id="swap-medicines-btn"
              variant="outline"
              size="sm"
              onClick={handleSwap}
              className="text-xs"
            >
              <ArrowRightLeft className="mr-1.5 size-3.5" />
              Swap sides
            </Button>
          </div>
        </div>

        {/* Medicine Dropdown Selectors */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Medicine A Selector */}
          <div className="space-y-1.5">
            <label
              htmlFor="medicine-select-a"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Medicine 1 (Left)
            </label>
            <select
              id="medicine-select-a"
              value={medAId}
              onChange={(e) => handleSelectMedA(e.target.value)}
              className="h-9 w-full rounded-md border border-border bg-card px-3 text-xs font-medium text-ink focus:border-primary focus:outline-none"
            >
              {demoMedicines.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.brandName} ({m.genericName}) — {m.form}
                </option>
              ))}
            </select>
          </div>

          {/* Medicine B Selector */}
          <div className="space-y-1.5">
            <label
              htmlFor="medicine-select-b"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Medicine 2 (Right)
            </label>
            <select
              id="medicine-select-b"
              value={medBId}
              onChange={(e) => handleSelectMedB(e.target.value)}
              className="h-9 w-full rounded-md border border-border bg-card px-3 text-xs font-medium text-ink focus:border-primary focus:outline-none"
            >
              {demoMedicines.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.brandName} ({m.genericName}) — {m.form}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Composition Equivalence Verdict Banner */}
      <div
        id="equivalence-verdict-banner"
        className={cn(
          "flex items-start gap-3 rounded-lg border p-4 text-xs shadow-xs",
          ingredientsComparison.identical
            ? "border-primary/30 bg-primary-soft/50 text-ink"
            : "border-warning/30 bg-warning-soft/40 text-ink",
        )}
      >
        {ingredientsComparison.identical ? (
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
        ) : (
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" />
        )}
        <div className="space-y-0.5">
          <p className="font-semibold text-ink">
            {ingredientsComparison.identical
              ? "Therapeutically Equivalent Chemical Formulations"
              : "Different Chemical Compositions or Strengths"}
          </p>
          <p className="text-muted-foreground">
            {ingredientsComparison.identical
              ? `${medA.brandName} and ${medB.brandName} share identical active ingredients and concentrations. They can generally be interchanged under generic substitution protocols with pharmacist consultation.`
              : `${medA.brandName} and ${medB.brandName} contain different active pharmaceutical ingredients or ratios. Do not substitute without doctor guidance.`}
          </p>
        </div>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card A */}
        <div
          id="medicine-a-card"
          className="surface rise flex flex-col p-5 shadow-soft"
        >
          <div className="flex items-start justify-between gap-2 border-b border-border pb-4">
            <div>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Option A
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-ink">
                {medA.brandName}
              </h3>
              <p className="text-xs text-muted-foreground">
                {medA.genericName}
              </p>
            </div>
            <StatusPill
              label={medA.prescriptionOnly ? "Rx Prescription" : "OTC"}
              tone={medA.prescriptionOnly ? "warning" : "positive"}
            />
          </div>

          <div className="mt-4 flex-1 space-y-4 text-xs">
            {/* Active Ingredients */}
            <div className="rounded-md border border-border bg-secondary/20 p-3">
              <h4 className="flex items-center gap-1.5 font-semibold text-ink">
                <Pill className="size-3.5 text-primary" />
                Active Ingredients & Strengths
              </h4>
              <ul className="mt-2 space-y-1.5">
                {medA.activeIngredients.map((ing, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between rounded bg-card px-2.5 py-1.5 border border-border"
                  >
                    <span className="font-medium text-ink">{ing.name}</span>
                    <Badge
                      variant="outline"
                      className="font-mono text-[11px] font-semibold"
                    >
                      {ing.strength}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage & Packaging */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md border border-border bg-card p-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Dosage Form
                </span>
                <p className="mt-0.5 font-medium text-ink">{medA.form}</p>
              </div>
              <div className="rounded-md border border-border bg-card p-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Pack Size
                </span>
                <p className="mt-0.5 font-medium text-ink">{medA.packSize}</p>
              </div>
            </div>

            {/* Manufacturer */}
            <div className="flex items-center gap-2 rounded-md border border-border bg-card p-2.5">
              <Building2 className="size-3.5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Manufacturer
                </span>
                <p className="truncate font-medium text-ink">
                  {medA.manufacturer}
                </p>
              </div>
            </div>

            {/* Primary Indication */}
            <div className="rounded-md border border-border bg-card p-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Indications & Uses
              </span>
              <p className="mt-1 text-ink leading-relaxed">
                {medA.usesSummary}
              </p>
            </div>

            {/* Common Side Effects */}
            <div className="rounded-md border border-border bg-card p-3">
              <h4 className="flex items-center gap-1.5 font-semibold text-ink">
                <ShieldAlert className="size-3.5 text-warning" />
                Reported Side Effects
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {medA.commonSideEffects.map((se, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-secondary px-2 py-1 text-[11px] text-ink"
                  >
                    {se}
                  </span>
                ))}
              </div>
            </div>

            {/* Warnings */}
            {medA.warnings && medA.warnings.length > 0 && (
              <div className="rounded-md border border-warning/30 bg-warning-soft/30 p-3">
                <h4 className="flex items-center gap-1.5 font-semibold text-ink">
                  <AlertTriangle className="size-3.5 text-warning" />
                  Key Clinical Warnings
                </h4>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-muted-foreground">
                  {medA.warnings.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
            <Link
              to="/app/medicine/$medicineId"
              params={{ medicineId: medA.id }}
              className="text-xs font-medium text-primary hover:underline"
            >
              Full Clinical Monograph →
            </Link>
          </div>
        </div>

        {/* Card B */}
        <div
          id="medicine-b-card"
          className="surface rise flex flex-col p-5 shadow-soft"
        >
          <div className="flex items-start justify-between gap-2 border-b border-border pb-4">
            <div>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Option B
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-ink">
                {medB.brandName}
              </h3>
              <p className="text-xs text-muted-foreground">
                {medB.genericName}
              </p>
            </div>
            <StatusPill
              label={medB.prescriptionOnly ? "Rx Prescription" : "OTC"}
              tone={medB.prescriptionOnly ? "warning" : "positive"}
            />
          </div>

          <div className="mt-4 flex-1 space-y-4 text-xs">
            {/* Active Ingredients */}
            <div className="rounded-md border border-border bg-secondary/20 p-3">
              <h4 className="flex items-center gap-1.5 font-semibold text-ink">
                <Pill className="size-3.5 text-primary" />
                Active Ingredients & Strengths
              </h4>
              <ul className="mt-2 space-y-1.5">
                {medB.activeIngredients.map((ing, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between rounded bg-card px-2.5 py-1.5 border border-border"
                  >
                    <span className="font-medium text-ink">{ing.name}</span>
                    <Badge
                      variant="outline"
                      className="font-mono text-[11px] font-semibold"
                    >
                      {ing.strength}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage & Packaging */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md border border-border bg-card p-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Dosage Form
                </span>
                <p className="mt-0.5 font-medium text-ink">{medB.form}</p>
              </div>
              <div className="rounded-md border border-border bg-card p-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Pack Size
                </span>
                <p className="mt-0.5 font-medium text-ink">{medB.packSize}</p>
              </div>
            </div>

            {/* Manufacturer */}
            <div className="flex items-center gap-2 rounded-md border border-border bg-card p-2.5">
              <Building2 className="size-3.5 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Manufacturer
                </span>
                <p className="truncate font-medium text-ink">
                  {medB.manufacturer}
                </p>
              </div>
            </div>

            {/* Primary Indication */}
            <div className="rounded-md border border-border bg-card p-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Indications & Uses
              </span>
              <p className="mt-1 text-ink leading-relaxed">
                {medB.usesSummary}
              </p>
            </div>

            {/* Common Side Effects */}
            <div className="rounded-md border border-border bg-card p-3">
              <h4 className="flex items-center gap-1.5 font-semibold text-ink">
                <ShieldAlert className="size-3.5 text-warning" />
                Reported Side Effects
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {medB.commonSideEffects.map((se, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-secondary px-2 py-1 text-[11px] text-ink"
                  >
                    {se}
                  </span>
                ))}
              </div>
            </div>

            {/* Warnings */}
            {medB.warnings && medB.warnings.length > 0 && (
              <div className="rounded-md border border-warning/30 bg-warning-soft/30 p-3">
                <h4 className="flex items-center gap-1.5 font-semibold text-ink">
                  <AlertTriangle className="size-3.5 text-warning" />
                  Key Clinical Warnings
                </h4>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-muted-foreground">
                  {medB.warnings.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
            <Link
              to="/app/medicine/$medicineId"
              params={{ medicineId: medB.id }}
              className="text-xs font-medium text-primary hover:underline"
            >
              Full Clinical Monograph →
            </Link>
          </div>
        </div>
      </div>

      {/* Direct Differential Breakdown Table */}
      <div className="surface rise p-5 shadow-soft">
        <h3 className="font-display text-sm font-bold text-ink">
          Detailed Side Effects & Safety Matrix
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Identifies shared vs brand-specific adverse reactions observed in
          clinical trials.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Shared */}
          <div className="rounded-lg border border-border bg-card p-3.5">
            <div className="flex items-center gap-1.5 font-semibold text-xs text-ink">
              <CheckCircle2 className="size-3.5 text-primary" />
              Shared by Both ({sideEffectsAnalysis.shared.length})
            </div>
            {sideEffectsAnalysis.shared.length === 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">
                No overlapping side effects listed.
              </p>
            ) : (
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {sideEffectsAnalysis.shared.map((s, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="size-1 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Unique to A */}
          <div className="rounded-lg border border-border bg-card p-3.5">
            <div className="flex items-center gap-1.5 font-semibold text-xs text-ink">
              <span className="size-2 rounded-full bg-chart-1" />
              Reported for {medA.brandName} (
              {sideEffectsAnalysis.uniqueA.length})
            </div>
            {sideEffectsAnalysis.uniqueA.length === 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">
                No unique side effects reported.
              </p>
            ) : (
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {sideEffectsAnalysis.uniqueA.map((s, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="size-1 rounded-full bg-chart-1" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Unique to B */}
          <div className="rounded-lg border border-border bg-card p-3.5">
            <div className="flex items-center gap-1.5 font-semibold text-xs text-ink">
              <span className="size-2 rounded-full bg-chart-2" />
              Reported for {medB.brandName} (
              {sideEffectsAnalysis.uniqueB.length})
            </div>
            {sideEffectsAnalysis.uniqueB.length === 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">
                No unique side effects reported.
              </p>
            ) : (
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {sideEffectsAnalysis.uniqueB.map((s, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="size-1 rounded-full bg-chart-2" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
