/**
 * Demo adapter.
 *
 * Grounded entirely in the bundled demo catalogue plus fixed Medora policy copy.
 * It never invents a price, a stock level, a diagnosis, a dose or a citation.
 * Everything it returns is labelled `mode: "demo"` so the UI can say so plainly.
 */
import { demoMedicines } from "@/data/demo-catalog";
import type { Medicine } from "@/lib/domain";
import { settle } from "@/services/provider";
import type {
  MedoraAiProvider,
  PatientSummaryRequest,
  ProviderOutput,
  TriageRequest,
} from "../provider-types";
import type {
  AiSource,
  AllergyReport,
  InformationalAnswer,
  InteractionReport,
  LabExplanation,
  MedicineComparison,
  MedicineExplanation,
  OcrExtraction,
  PatientSummary,
  SearchInterpretation,
  SymptomTriage,
} from "../schemas";
import { detectRedFlags } from "../safety";

const catalogueSource = (m: Medicine): AiSource => ({
  id: `catalogue:${m.id}`,
  label: `Demo catalogue · ${m.brandName}`,
  detail: `${m.provenance.source}. Sample record bundled with this build, not a live regulatory feed.`,
  kind: "catalogue",
  reference: m.id,
  updatedAt: m.provenance.updatedAt,
  verified: false,
});

const policySource = (label: string, detail: string): AiSource => ({
  id: `policy:${label.toLowerCase().replace(/\W+/g, "-")}`,
  label,
  detail,
  kind: "policy",
  verified: true,
});

const SAFETY = {
  medicine:
    "Informational only. Medora does not tell you how much to take or whether this medicine is right for you — that comes from your prescriber or the product label.",
  triage:
    "This is a routing suggestion, not a diagnosis. Medora cannot examine you and does not know your full history.",
  interaction:
    "A licensed interaction database is not connected, so Medora will not state whether these medicines interact. Ask a pharmacist for a full check.",
  generic:
    "Medora is an information tool, not a clinician. Confirm anything you act on with a pharmacist or doctor.",
};

const findMedicines = (text: string) => {
  const q = text.toLowerCase();
  return demoMedicines.filter(
    (m) =>
      q.includes(m.brandName.toLowerCase()) ||
      q.includes(m.genericName.toLowerCase()) ||
      m.activeIngredients.some((a) => q.includes(a.name.toLowerCase())),
  );
};

export const demoAiProvider: MedoraAiProvider = {
  id: "medora-demo",
  label: "Medora demo adapter",
  mode: "demo",
  description:
    "Retrieval over the bundled demo catalogue with fixed Medora safety copy. No language model, OCR service or clinical database is connected.",
  capabilities: [
    "medicine_intelligence",
    "prescription_ocr",
    "symptom_triage",
    "medicine_explanation",
    "drug_interaction",
    "allergy_check",
    "lab_explanation",
    "medicine_comparison",
    "patient_summary",
    "natural_language_search",
  ],

  async explainMedicine(query) {
    const medicine = findMedicines(query)[0];
    if (!medicine) return null;
    const ingredient = medicine.activeIngredients[0];
    const payload: MedicineExplanation = {
      kind: "medicine_explanation",
      medicine: `${medicine.brandName} (${medicine.genericName})`,
      activeIngredient: ingredient?.name ?? "Not recorded",
      strength: ingredient?.strength ?? "Not recorded",
      form: medicine.form,
      information: medicine.usesSummary,
      warnings: medicine.warnings,
      commonSideEffects: medicine.commonSideEffects,
      storage: medicine.storage,
      supply: medicine.prescriptionOnly ? "prescription_only" : "over_the_counter",
      safetyNotice: SAFETY.medicine,
    };
    return settle<ProviderOutput<MedicineExplanation>>(
      {
        payload,
        sources: [catalogueSource(medicine)],
        matchScore: 0.88,
        matchRationale: `Exact catalogue match on ${medicine.brandName}; every field above is copied from that record.`,
        followUps: [
          `What else contains ${ingredient?.name ?? medicine.genericName}?`,
          `Compare ${medicine.brandName} with its equivalents`,
          "How does Medora decide two products are equivalent?",
        ],
      },
      520,
    );
  },

  async answerInformational(query) {
    const payload: InformationalAnswer = {
      kind: "informational_answer",
      headline: "I can only answer from connected sources",
      body: "No connected information provider matched that question. Medora will not generate clinical content from an unverified source, so nothing is being guessed here. You can ask about a medicine in the demo catalogue by brand, generic name or active ingredient.",
      bullets: [
        { label: "Your question", value: query.slice(0, 160) },
        { label: "Providers searched", value: "Demo catalogue" },
        { label: "Model used", value: "None — no language model is connected" },
      ],
      safetyNotice: SAFETY.generic,
    };
    return settle<ProviderOutput<InformationalAnswer>>(
      {
        payload,
        sources: [
          policySource(
            "Medora answering policy",
            "When no connected source matches, Medora says so instead of generating an answer.",
          ),
        ],
        matchScore: 0.15,
        matchRationale: "No catalogue record matched the question text.",
        followUps: [
          "What is Panacet 500 used for?",
          "Compare cetirizine products",
          "How does Medora decide two products are equivalent?",
        ],
      },
      420,
    );
  },

  async interpretSearch(query) {
    const matches = findMedicines(query);
    const strength = query.match(/(\d+(?:\.\d+)?)\s?(mg|mcg|g|ml)/i);
    const payload: SearchInterpretation = {
      kind: "search_interpretation",
      query,
      interpretedAs: {
        ingredient: matches[0]?.activeIngredients[0]?.name ?? null,
        strength: strength ? `${strength[1]} ${strength[2]}` : null,
        form: matches[0]?.form ?? null,
        supply: matches[0]
          ? matches[0].prescriptionOnly
            ? "prescription_only"
            : "over_the_counter"
          : null,
      },
      matches: matches.slice(0, 6).map((m) => ({
        id: m.id,
        label: `${m.brandName} · ${m.activeIngredients[0]?.strength ?? ""} ${m.form}`.trim(),
        why: `Matched on ${m.activeIngredients.map((a) => a.name).join(", ")}`,
      })),
      safetyNotice:
        "Search results are catalogue records. Medora does not rank them by quality or effectiveness.",
    };
    return settle<ProviderOutput<SearchInterpretation>>(
      {
        payload,
        sources: matches.slice(0, 3).map(catalogueSource),
        matchScore: matches.length ? 0.74 : 0.2,
        matchRationale: matches.length
          ? `${matches.length} catalogue record(s) matched the parsed ingredient and strength.`
          : "No catalogue record matched the parsed query.",
      },
      380,
    );
  },

  async compareMedicines(medicineIds) {
    const rows = demoMedicines.filter((m) => medicineIds.includes(m.id));
    if (rows.length < 2) return null;
    const payload: MedicineComparison = {
      kind: "medicine_comparison",
      criteria: ["Active ingredient", "Strength", "Dosage form", "Supply category", "Manufacturer"],
      rows: rows.map((m) => ({
        medicine: m.brandName,
        activeIngredient: m.activeIngredients.map((a) => a.name).join(" + "),
        strength: m.activeIngredients.map((a) => a.strength).join(" + "),
        form: m.form,
        supply: m.prescriptionOnly ? "Prescription-only" : "Over the counter",
        manufacturer: m.manufacturer,
      })),
      equivalence: rows.every((m) => m.compositionKey === rows[0]!.compositionKey)
        ? "These products share the same active ingredient, strength and dosage form in the demo catalogue."
        : "These products do not share the same composition key, so they are not interchangeable on composition alone.",
      safetyNotice:
        "Matching composition is not a statement about quality, tolerability or suitability for you. A pharmacist should confirm any switch.",
    };
    return settle<ProviderOutput<MedicineComparison>>(
      {
        payload,
        sources: rows.map(catalogueSource),
        matchScore: 0.8,
        matchRationale:
          "Comparison is a field-by-field read of catalogue records, with no scoring applied.",
      },
      460,
    );
  },

  async triage(request: TriageRequest) {
    const redFlags = [
      ...new Set([...request.selectedRedFlags, ...detectRedFlags(request.freeText)]),
    ];
    const emergency = redFlags.length > 0;
    const level: SymptomTriage["escalation"]["level"] = emergency
      ? "emergency"
      : request.severity >= 8 || request.durationDays > 14
        ? "same_day"
        : request.severity >= 5 || request.durationDays > 5
          ? "routine"
          : "self_monitor";

    const payload: SymptomTriage = {
      kind: "symptom_triage",
      symptoms: request.symptoms.length ? request.symptoms : ["Described in free text"],
      possibleExplanations: emergency
        ? []
        : [
            "Medora does not name candidate conditions. Listing conditions from a symptom form is diagnosis, and this is not a diagnostic device.",
            "A clinician can interpret these symptoms alongside your history and examination.",
          ],
      followUpQuestions: emergency
        ? []
        : [
            "Are the symptoms getting worse, staying the same, or improving?",
            "Have you started any new medicine since the symptoms began?",
            "Are you managing a long-term condition, pregnant, or immunosuppressed?",
          ],
      monitoringPlan: emergency
        ? []
        : [
            {
              window: "Next 24 hours",
              items: [
                "Note when symptoms change and record your temperature if you can measure it",
                "Rest and keep to your usual fluids unless a clinician has said otherwise",
                "Do not begin any new medicine on the basis of this output",
              ],
            },
            {
              window: "24–48 hours",
              items: [
                "Compare today with yesterday: better, the same, or worse?",
                "If the same or worse, contact a clinician or pharmacist and share your notes",
                "Continue anything already prescribed to you exactly as your prescriber instructed",
              ],
            },
          ],
      redFlags,
      escalation: {
        level,
        action: emergency
          ? "Contact emergency services or go to the nearest emergency department now. Do not wait for this tool."
          : level === "same_day"
            ? "Speak to a clinician today."
            : level === "routine"
              ? "Book a routine appointment, or speak to a pharmacist."
              : "Reasonable to monitor at home, and seek care if anything changes.",
      },
      disclaimer: SAFETY.triage,
    };

    return settle<ProviderOutput<SymptomTriage>>(
      {
        payload,
        sources: [
          policySource(
            "Medora routing rules",
            "Fixed severity/duration thresholds plus a red-flag list. Emergency wording is never model-generated.",
          ),
          {
            id: "user:triage-input",
            label: "Your answers",
            detail: "Symptoms, duration and severity you entered on this screen.",
            kind: "user_input",
            verified: true,
          },
        ],
        matchScore: emergency ? 0.95 : 0.6,
        matchRationale: emergency
          ? "A red-flag term was matched, which routes deterministically to emergency care."
          : "Routing is derived from your severity and duration answers only.",
      },
      emergency ? 260 : 680,
    );
  },

  async checkInteractions(medicines, allergies) {
    const ingredientMap = new Map<string, string[]>();
    medicines.forEach((name) => {
      const med = demoMedicines.find(
        (m) =>
          name.toLowerCase().includes(m.brandName.toLowerCase()) ||
          name.toLowerCase().includes(m.genericName.toLowerCase()),
      );
      med?.activeIngredients.forEach((a) => {
        ingredientMap.set(a.name, [...(ingredientMap.get(a.name) ?? []), name]);
      });
    });

    const findings: InteractionReport["findings"] = [];
    ingredientMap.forEach((names, ingredient) => {
      if (names.length > 1) {
        findings.push({
          type: "duplicate_ingredient",
          severity: "review",
          title: `Same active ingredient listed more than once: ${ingredient}`,
          detail:
            "Two or more entries contain this active ingredient according to the demo catalogue. Unintentional duplication is a common cause of harm — ask a pharmacist to review the list.",
          items: names,
        });
      }
    });

    allergies.filter(Boolean).forEach((allergy) => {
      const matches = medicines.filter((n) =>
        n.toLowerCase().includes(allergy.toLowerCase().split(" ")[0] ?? ""),
      );
      if (matches.length) {
        findings.push({
          type: "allergy_match",
          severity: "review",
          title: `A recorded allergy matches a listed medicine name: ${allergy}`,
          detail:
            "This is a text match against what you recorded, not a clinical allergy assessment.",
          items: matches,
        });
      }
    });

    findings.push({
      type: "not_assessed",
      severity: "information",
      title: "Drug–drug interactions were not assessed",
      detail: SAFETY.interaction,
      items: medicines,
    });

    const payload: InteractionReport = {
      kind: "interaction_report",
      medicines,
      findings,
      assessedBy: "Deterministic composition and text matching over the demo catalogue",
      safetyNotice: SAFETY.interaction,
    };

    return settle<ProviderOutput<InteractionReport>>(
      {
        payload,
        sources: [
          policySource(
            "Medora interaction policy",
            "Without a licensed interaction database, Medora reports only what it can prove: duplicate ingredients and text-level allergy matches.",
          ),
        ],
        matchScore: 0.5,
        matchRationale:
          "Composition-level checks only; pharmacological interactions were not evaluated.",
      },
      560,
    );
  },

  async checkAllergies(medicines, allergies) {
    const matches = allergies.flatMap((allergy) =>
      medicines
        .filter((m) => m.toLowerCase().includes(allergy.toLowerCase().split(" ")[0] ?? ""))
        .map((medicine) => ({
          allergy,
          medicine,
          basis: "Name-level text match against the allergy you recorded",
        })),
    );
    const payload: AllergyReport = {
      kind: "allergy_report",
      allergies,
      medicines,
      matches,
      safetyNotice:
        "A name match is not an allergy diagnosis, and no match is not a clearance. Cross-reactivity needs a pharmacist or prescriber.",
    };
    return settle<ProviderOutput<AllergyReport>>(
      {
        payload,
        sources: [
          policySource(
            "Medora allergy policy",
            "Text-level matching only; no allergen cross-reactivity database is connected.",
          ),
        ],
        matchScore: matches.length ? 0.55 : 0.3,
        matchRationale: "Matching is literal and deliberately conservative.",
      },
      420,
    );
  },

  async extractPrescription(file) {
    const sample = demoMedicines.slice(0, 3);
    const payload: OcrExtraction = {
      kind: "ocr_extraction",
      documentName: file.name,
      lines: sample.map((m, i) => ({
        id: `line-${i + 1}`,
        rawText: `${m.brandName} ${m.activeIngredients[0]?.strength ?? ""} ${m.form}`.trim(),
        medicine: m.brandName,
        strength: m.activeIngredients[0]?.strength ?? null,
        frequency: null,
        confidence: [0.94, 0.81, 0.62][i] ?? 0.6,
        needsReview: i > 0,
      })),
      prescriber: null,
      issuedOn: null,
      safetyNotice:
        "Simulated extraction. No OCR service is connected, so these lines are drawn from the demo catalogue and must be confirmed against your paper prescription before use.",
    };
    return settle<ProviderOutput<OcrExtraction>>(
      {
        payload,
        sources: [
          policySource(
            "Prescription OCR not connected",
            "A live document-AI provider would return text regions with per-field confidence and a scan of the original image.",
          ),
        ],
        matchScore: 0.3,
        matchRationale: "No document was actually read; the extraction is a structural simulation.",
      },
      900,
    );
  },

  async explainLabReport(panel) {
    if (!panel.trim()) return null;
    const payload: LabExplanation = {
      kind: "lab_explanation",
      panel,
      analytes: [],
      whatThisIsNot:
        "Medora explains what an analyte measures and whether a value sits inside the reference range printed on your report. It does not interpret what an out-of-range value means for you.",
      safetyNotice:
        "Lab values are interpreted alongside your history and examination. Take any flagged value to the clinician who ordered the test.",
    };
    return settle<ProviderOutput<LabExplanation>>(
      {
        payload,
        sources: [
          policySource(
            "Lab parsing not connected",
            "A live parser with LOINC mapping would supply analyte names, values and reference ranges from your report.",
          ),
        ],
        matchScore: 0.25,
        matchRationale: "No structured lab report was available to read.",
      },
      480,
    );
  },

  async summarisePatient(request: PatientSummaryRequest) {
    const payload: PatientSummary = {
      kind: "patient_summary",
      headline: "Your record at a glance",
      currentMedicines: request.currentMedicines,
      adherenceNote:
        request.adherencePercent === null
          ? "No doses have been logged yet, so adherence cannot be described."
          : `${request.adherencePercent}% of scheduled doses have been logged as taken in this demo record.`,
      openItems: [
        ...(request.openPrescriptions > 0
          ? [
              `${request.openPrescriptions} uploaded prescription(s) still have lines awaiting your confirmation.`,
            ]
          : []),
        ...(request.allergies.length === 0
          ? ["No allergies recorded — adding them improves the safety checks."]
          : []),
      ],
      questionsForYourClinician: [
        "Is everything on this list still needed?",
        "Do any of these interact with each other?",
        "Is there anything I should stop before my next appointment?",
      ],
      safetyNotice:
        "A summary of what you entered, not a clinical record. It does not replace your medical notes and contains no assessment of your health.",
    };
    return settle<ProviderOutput<PatientSummary>>(
      {
        payload,
        sources: [
          {
            id: "user:profile",
            label: "Your Medora profile",
            detail: "Medicines, allergies and dose logs stored on this device.",
            kind: "user_input",
            verified: true,
          },
        ],
        matchScore: 0.7,
        matchRationale: "Composed only from data you entered; nothing is inferred.",
      },
      500,
    );
  },
};
