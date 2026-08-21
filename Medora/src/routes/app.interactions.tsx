import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, ShieldAlert, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  ClinicalDisclaimer,
  EmptyState,
  IntegrationNotConnected,
  PageHeader,
  SafetyNotice,
} from "@/components/common/primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/lib/store";
import { checkInteractions, type InteractionFinding } from "@/services/clinical";

export const Route = createFileRoute("/app/interactions")({
  head: () => ({
    meta: [
      { title: "Interaction check — Medora" },
      {
        name: "description",
        content:
          "Review your medicine list for duplicate active ingredients and recorded allergy matches, with every check explained.",
      },
      { property: "og:title", content: "Interaction check — Medora" },
      {
        property: "og:description",
        content: "Duplicate ingredients and allergy matches, explained.",
      },
    ],
  }),
  component: InteractionsPage,
});

function InteractionsPage() {
  const { state } = useStore();
  const [medicines, setMedicines] = useState<string[]>(state.profile.currentMedicines);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [findings, setFindings] = useState<InteractionFinding[] | null>(null);

  const add = () => {
    const value = draft.trim();
    if (!value) return;
    if (medicines.some((m) => m.toLowerCase() === value.toLowerCase())) {
      toast.error("That medicine is already on the list.");
      return;
    }
    setMedicines((m) => [...m, value]);
    setDraft("");
    setFindings(null);
  };

  const run = async () => {
    if (medicines.length === 0) {
      toast.error("Add at least one medicine to review.");
      return;
    }
    setLoading(true);
    const result = await checkInteractions(medicines, state.profile.allergies);
    setFindings(result);
    setLoading(false);
    toast.success(
      `Review complete — ${result.length} point${result.length === 1 ? "" : "s"} to read.`,
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Interaction & allergy check"
        demo
        description="Medora only reports what it can explain: the same active ingredient appearing twice, and matches against the allergies in your profile. It does not claim pharmacological interactions."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="surface p-5">
          <h2 className="text-sm font-semibold text-ink">Medicines to review</h2>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              add();
            }}
          >
            <div className="flex-1">
              <Label htmlFor="interaction-add" className="sr-only">
                Add a medicine
              </Label>
              <Input
                id="interaction-add"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="e.g. Ibulief 400 or Paracetamol 500 mg"
              />
            </div>
            <Button type="submit" variant="outline">
              <Plus className="size-4" aria-hidden /> Add
            </Button>
          </form>

          {medicines.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              No medicines listed yet. Add the ones you are taking, including anything bought over
              the counter.
            </p>
          ) : (
            <ul className="mt-4 flex flex-wrap gap-2">
              {medicines.map((m) => (
                <li key={m}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-sm">
                    {m}
                    <button
                      type="button"
                      aria-label={`Remove ${m}`}
                      className="rounded-full p-0.5 text-muted-foreground hover:text-destructive"
                      onClick={() => {
                        setMedicines((list) => list.filter((x) => x !== m));
                        setFindings(null);
                      }}
                    >
                      <X className="size-3.5" aria-hidden />
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            <Button onClick={() => void run()} disabled={loading}>
              <ShieldAlert className="size-4" aria-hidden />
              {loading ? "Reviewing your list…" : "Run the review"}
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/app/settings">Edit profile allergies</Link>
            </Button>
          </div>
        </div>

        <div className="surface h-fit p-5">
          <h2 className="text-sm font-semibold text-ink">Allergies used in this check</h2>
          {state.profile.allergies.length === 0 ? (
            <p className="mt-2 text-sm text-muted-foreground">
              None recorded. Add allergies in settings so this check is meaningful.
            </p>
          ) : (
            <ul className="mt-3 space-y-2">
              {state.profile.allergies.map((a) => (
                <li key={a}>
                  <Badge
                    variant="outline"
                    className="border-destructive/35 bg-destructive-soft text-destructive"
                  >
                    {a}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {loading && (
        <div className="surface space-y-3 p-5">
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {!loading && findings && findings.length === 0 && (
        <EmptyState
          icon={ShieldAlert}
          title="Nothing flagged by these checks"
          description="No duplicate active ingredient and no allergy match was found in the demo catalogue. That is not the same as 'safe' — a pharmacist can review the full picture."
        />
      )}

      {!loading && findings && findings.length > 0 && (
        <section className="space-y-4" aria-live="polite">
          {findings.map((f) => (
            <div key={f.title} className="surface p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className={
                    f.severity === "review"
                      ? "border-warning/40 bg-warning-soft text-warning-foreground"
                      : "border-border bg-secondary text-muted-foreground"
                  }
                >
                  {f.severity === "review" ? "Ask a pharmacist" : "Information"}
                </Badge>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{f.detail}</p>
              {f.items.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {f.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <SafetyNotice tone="warning" title="This is a partial check">
            Medora only compares ingredient names and your recorded allergies. It cannot rule out
            interactions. Show this list to a pharmacist before changing anything.
          </SafetyNotice>
        </section>
      )}

      <IntegrationNotConnected integration="interactions" />
      <ClinicalDisclaimer />
    </div>
  );
}
