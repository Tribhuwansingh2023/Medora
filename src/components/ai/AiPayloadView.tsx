import { Link } from "@tanstack/react-router";
import type { AiPayload } from "@/ai/schemas";
import { safetyNoticeOf } from "@/ai/render";
import { EmergencyCallout } from "@/components/common/primitives";
import { BulletList, FieldGrid } from "./ai-parts";

export function AiPayloadView({ payload }: { payload: AiPayload }) {
  const notice = safetyNoticeOf(payload);
  return (
    <div className="space-y-4">
      {payload.kind === "escalation" && (
        <>
          <EmergencyCallout />
          <p className="text-sm text-foreground">{payload.action}</p>
        </>
      )}

      {payload.kind === "medicine_explanation" && (
        <>
          <FieldGrid
            items={[
              { label: "Active ingredient", value: payload.activeIngredient },
              { label: "Strength", value: payload.strength },
              { label: "Dosage form", value: payload.form },
              {
                label: "Supply",
                value:
                  payload.supply === "prescription_only"
                    ? "Prescription-only"
                    : payload.supply === "over_the_counter"
                      ? "Over the counter"
                      : "Not recorded",
              },
            ]}
          />
          <BulletList title="Warnings" items={payload.warnings} />
          <BulletList title="Common side effects" items={payload.commonSideEffects} />
          {payload.storage && (
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Storage: </span>
              {payload.storage}
            </p>
          )}
        </>
      )}

      {payload.kind === "symptom_triage" && (
        <>
          <FieldGrid
            items={[
              { label: "Routing", value: payload.escalation.level.replace("_", " ") },
              { label: "Symptoms read", value: payload.symptoms.join(", ") || "—" },
            ]}
          />
          <BulletList title="Red flags matched" items={payload.redFlags} />
          <BulletList title="What Medora will not do" items={payload.possibleExplanations} />
          <BulletList title="Questions worth answering" items={payload.followUpQuestions} />
          {payload.monitoringPlan.map((block) => (
            <BulletList key={block.window} title={block.window} items={block.items} />
          ))}
        </>
      )}

      {payload.kind === "interaction_report" && (
        <div className="space-y-3">
          {payload.findings.map((finding) => (
            <div key={finding.title} className="rounded-lg border border-border bg-muted/30 p-3">
              <p className="text-sm font-medium text-foreground">{finding.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{finding.detail}</p>
              {finding.items.length > 0 && (
                <p className="mt-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                  {finding.items.join(" · ")}
                </p>
              )}
            </div>
          ))}
          <p className="text-xs text-muted-foreground">Assessed by: {payload.assessedBy}</p>
        </div>
      )}

      {payload.kind === "allergy_report" && (
        <BulletList
          title="Name-level matches"
          items={
            payload.matches.length
              ? payload.matches.map((m) => `${m.allergy} ↔ ${m.medicine} — ${m.basis}`)
              : ["No name-level matches. This is not a clearance."]
          }
        />
      )}

      {payload.kind === "medicine_comparison" && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Medicine</th>
                <th className="pb-2 pr-4 font-medium">Ingredient</th>
                <th className="pb-2 pr-4 font-medium">Strength</th>
                <th className="pb-2 pr-4 font-medium">Form</th>
                <th className="pb-2 font-medium">Supply</th>
              </tr>
            </thead>
            <tbody>
              {payload.rows.map((row) => (
                <tr key={row.medicine} className="border-t border-border">
                  <td className="py-2 pr-4 font-medium text-foreground">{row.medicine}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{row.activeIngredient}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{row.strength}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{row.form}</td>
                  <td className="py-2 text-muted-foreground">{row.supply}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm text-muted-foreground">{payload.equivalence}</p>
        </div>
      )}

      {payload.kind === "search_interpretation" && (
        <>
          <FieldGrid
            items={[
              { label: "Ingredient read", value: payload.interpretedAs.ingredient ?? "—" },
              { label: "Strength read", value: payload.interpretedAs.strength ?? "—" },
              { label: "Form read", value: payload.interpretedAs.form ?? "—" },
              {
                label: "Supply read",
                value: payload.interpretedAs.supply?.replace("_", " ") ?? "—",
              },
            ]}
          />
          <div className="flex flex-wrap gap-2">
            {payload.matches.map((match) => (
              <Link
                key={match.id}
                to="/app/medicine/$medicineId"
                params={{ medicineId: match.id }}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground hover:bg-muted"
                title={match.why}
              >
                {match.label}
              </Link>
            ))}
          </div>
        </>
      )}

      {payload.kind === "patient_summary" && (
        <>
          <BulletList title="Current medicines" items={payload.currentMedicines} />
          <BulletList title="Open items" items={payload.openItems} />
          <BulletList
            title="Questions for your clinician"
            items={payload.questionsForYourClinician}
          />
        </>
      )}

      {payload.kind === "lab_explanation" && (
        <p className="text-sm text-muted-foreground">{payload.whatThisIsNot}</p>
      )}

      {payload.kind === "ocr_extraction" && (
        <BulletList
          title="Extracted lines"
          items={payload.lines.map(
            (l) =>
              `${l.rawText} — ${Math.round(l.confidence * 100)}% confidence${l.needsReview ? " · needs review" : ""}`,
          )}
        />
      )}

      {payload.kind === "informational_answer" && (
        <FieldGrid items={payload.bullets.map((b) => ({ label: b.label, value: b.value }))} />
      )}

      {payload.kind === "unavailable" && (
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">What a connected provider would do: </span>
          {payload.whatALiveProviderWouldDo}
        </p>
      )}

      {notice && (
        <p className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
          {notice}
        </p>
      )}
    </div>
  );
}
