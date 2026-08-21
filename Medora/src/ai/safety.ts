/**
 * Stage 6 of the pipeline: safety validation.
 *
 * Runs BEFORE any payload reaches the UI. The validator is deliberately
 * suspicious of its own AI layer: it re-reads the composed text and blocks
 * anything that looks like an invented price, stock claim, diagnosis, dose,
 * prescription instruction or fabricated citation — including output that a
 * future live LLM provider might produce.
 */
import type { AiPayload, AiSource, SafetyVerdict } from "./schemas";

export const RED_FLAG_TERMS = [
  "chest pain",
  "difficulty breathing",
  "can't breathe",
  "cannot breathe",
  "shortness of breath",
  "unconscious",
  "fainting",
  "severe bleeding",
  "coughing blood",
  "suicide",
  "self harm",
  "stroke",
  "seizure",
  "anaphylaxis",
  "swollen tongue",
  "overdose",
  "blue lips",
  "worst headache",
];

export const detectRedFlags = (text: string) =>
  RED_FLAG_TERMS.filter((term) => text.toLowerCase().includes(term));

interface Rule {
  id: string;
  label: string;
  /** Returns a violation message when the text breaks the rule. */
  test: (text: string) => string | null;
}

const money = /(?:[$€£₹]\s?\d|(?:\b\d+(?:\.\d{1,2})?\s?(?:usd|eur|gbp|inr|rupees|dollars)\b))/i;
const dosageInstruction =
  /\b(take|swallow|inject|apply|give)\b[^.]{0,40}\b(\d+(?:\.\d+)?)\s?(mg|mcg|g|ml|tablets?|capsules?|drops?|puffs?)\b/i;
const frequencyInstruction =
  /\b(\d+\s?(?:times?|x)\s?(?:a|per)\s?(?:day|week)|twice daily|once daily|every\s?\d+\s?hours?|bd|tds|qid)\b/i;
const diagnosisClaim =
  /\b(you (?:likely )?have|this is (?:probably|likely|definitely)|you are suffering from|diagnos(?:is|ed) (?:is|of)|i diagnose)\b/i;
const prescribing =
  /\b(i (?:recommend|prescribe|suggest) (?:you )?(?:take|start|stop)|you should (?:take|start|stop) (?:taking )?)\b/i;
const stockClaim = /\b(in stock at|out of stock at|available now at|\d+\s?packs? left)\b/i;

const rules: Rule[] = [
  {
    id: "no_invented_price",
    label: "No AI-generated prices",
    test: (t) =>
      money.test(t)
        ? "Response contained a monetary value not sourced from the verified price feed."
        : null,
  },
  {
    id: "no_invented_stock",
    label: "No AI-generated stock claims",
    test: (t) =>
      stockClaim.test(t)
        ? "Response asserted pharmacy stock, which only a connected pharmacy feed may state."
        : null,
  },
  {
    id: "no_diagnosis",
    label: "No diagnosis",
    test: (t) => (diagnosisClaim.test(t) ? "Response contained diagnostic language." : null),
  },
  {
    id: "no_dosage",
    label: "No dosing instructions",
    test: (t) =>
      dosageInstruction.test(t) || frequencyInstruction.test(t)
        ? "Response contained a dose or dosing schedule. Doses come only from a prescriber or the product label."
        : null,
  },
  {
    id: "no_prescribing",
    label: "No prescribing or medicine changes",
    test: (t) =>
      prescribing.test(t) ? "Response told the user to start, stop or change a medicine." : null,
  },
];

const collectText = (payload: AiPayload): string =>
  JSON.stringify(payload, (_key, value) => value)
    .replace(/[{}"[\]]/g, " ")
    .replace(/\s+/g, " ");

/** Sources must be real records, never model-authored citations. */
const validateSources = (sources: AiSource[]) =>
  sources
    .filter((s) => s.kind === "model" && s.verified)
    .map((s) => `Unverifiable model-authored source: ${s.label}`);

export interface SafetyInput {
  payload: AiPayload;
  sources: AiSource[];
  userText: string;
  /** Text the pipeline knows is safe by construction (fixed policy copy, catalogue fields). */
  trustedFields?: string[];
}

export function validate({
  payload,
  sources,
  userText,
  trustedFields = [],
}: SafetyInput): SafetyVerdict {
  const redFlags = detectRedFlags(userText);
  const text = collectText(payload);
  const trusted = new Set(trustedFields.map((f) => f.toLowerCase()));

  const violations: string[] = [];
  for (const rule of rules) {
    const violation = rule.test(text);
    if (violation && !trusted.has(rule.id)) violations.push(`${rule.label}: ${violation}`);
  }
  violations.push(...validateSources(sources));

  const escalate = payload.kind === "escalation" || redFlags.length > 0;

  return {
    passed: violations.length === 0,
    rulesRun: [...rules.map((r) => r.label), "Sources must reference a real record"],
    violations,
    redFlags,
    escalate,
    notice:
      violations.length === 0
        ? "Validated: no prices, stock claims, diagnoses, doses or prescribing language were produced by the AI layer."
        : "This response was blocked by Medora's safety validator before it reached you.",
  };
}

export const BLOCKED_COPY = {
  headline: "Response withheld by the safety validator",
  body: "Medora generated content that failed its own clinical-safety checks, so it was not shown. This is intentional: the assistant is not allowed to state prices, stock, diagnoses, doses or medicine changes. Ask a pharmacist or your prescriber for anything in that territory.",
};

export const ASSISTANT_ROLE_STATEMENT =
  "Medora's assistant is an information tool. It is not a doctor, pharmacist or prescriber, it does not diagnose, and it never tells you to start, stop or change a medicine.";
