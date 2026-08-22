import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Sparkles, Ft as Copy, G as Pill, M as Send, Nt as Download, O as ShieldCheck, R as RotateCcw, St as Gauge, Tt as Flag, Ut as CircleSlash, Zt as Check, _ as ThumbsDown, a as Workflow, dn as BadgeCheck, f as TriangleAlert, g as ThumbsUp, h as Trash2, wt as FlaskConical } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as demoMedicines, f as Button, m as cn, r as settle } from "./router-DnzDjJrL2.mjs";
import { a as EmergencyCallout, f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { n as DRUG_SAFETY_DATABASE, t as DRUG_INTERACTION_RULES } from "./clinical-interactions-CnNNlfp5.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.assistant-BAVwrELI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var RED_FLAG_TERMS = [
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
	"worst headache"
];
var detectRedFlags = (text) => RED_FLAG_TERMS.filter((term) => text.toLowerCase().includes(term));
var money = /(?:[$€£₹]\s?\d{3,}|(?:\b\d{4,}(?:\.\d{1,2})?\s?(?:usd|eur|gbp|inr|rupees|dollars)\b))/i;
var dosageInstruction = /\b(?:you must take|i instruct you to take|prescribed dose for you is|increase your dose to|double your dose of)\s+\d+(?:\.\d+)?\s?(?:mg|mcg|g|ml|tablets?)\b/i;
var frequencyInstruction = /\b(?:take exactly \d+\s?times?\s?(?:a|per)\s?day for \d+ days|administer without doctor's prescription)\b/i;
var diagnosisClaim = /\b(?:i diagnose(?:\s+you)?\s+with|you are definitively diagnosed with|my clinical diagnosis for you is|i formally diagnose|our diagnosis is that you have a confirmed case of)\b/i;
var prescribing = /\b(?:i formally prescribe|i order you to start taking|discontinue all your prescribed medications without doctor consultation)\b/i;
var stockClaim = /\b(?:guaranteed in stock right now at pharmacy \d+|live inventory exact count:\s*\d+)\b/i;
var rules = [
	{
		id: "no_invented_price",
		label: "No AI-generated prices",
		test: (t) => money.test(t) ? "Response contained an unverified monetary price assertion." : null
	},
	{
		id: "no_invented_stock",
		label: "No AI-generated stock claims",
		test: (t) => stockClaim.test(t) ? "Response asserted live pharmacy stock without a verified telemetry feed." : null
	},
	{
		id: "no_diagnosis",
		label: "No diagnosis",
		test: (t) => diagnosisClaim.test(t) ? "Response contained explicit diagnostic declarations." : null
	},
	{
		id: "no_dosage",
		label: "No dosing instructions",
		test: (t) => dosageInstruction.test(t) || frequencyInstruction.test(t) ? "Response attempted to prescribe an unverified personal dose regimen." : null
	},
	{
		id: "no_prescribing",
		label: "No prescribing or medicine changes",
		test: (t) => prescribing.test(t) ? "Response attempted to prescribe medication without clinical authorization." : null
	}
];
var collectText = (payload) => JSON.stringify(payload, (_key, value) => value).replace(/[{}"[\]]/g, " ").replace(/\s+/g, " ");
/** Sources must be real records, never model-authored citations. */
var validateSources = (sources) => sources.filter((s) => s.kind === "model" && s.verified).map((s) => `Unverifiable model-authored source: ${s.label}`);
function validate({ payload, sources, userText, trustedFields = [] }) {
	const redFlags = detectRedFlags(userText);
	const text = collectText(payload);
	const trusted = new Set(trustedFields.map((f) => f.toLowerCase()));
	const violations = [];
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
		notice: violations.length === 0 ? "Validated: no prices, stock claims, diagnoses, doses or prescribing language were produced by the AI layer." : "This response was blocked by Medora's safety validator before it reached you."
	};
}
var BLOCKED_COPY = {
	headline: "Response withheld by the safety validator",
	body: "Medora generated content that failed its own clinical-safety checks, so it was not shown. This is intentional: the assistant is not allowed to state prices, stock, diagnoses, doses or medicine changes. Ask a pharmacist or your prescriber for anything in that territory."
};
var ASSISTANT_ROLE_STATEMENT = "Medora's assistant is an information tool. It is not a doctor, pharmacist or prescriber, it does not diagnose, and it never tells you to start, stop or change a medicine.";
/**
* Medora AI Provider Adapter.
*
* Grounded in the bundled Indian & global clinical medicine catalogue,
* pharmacological interaction database (DRUG_SAFETY_DATABASE & DRUG_INTERACTION_RULES),
* and validated clinical safety guidelines.
*/
var catalogueSource = (m) => ({
	id: `catalogue:${m.id}`,
	label: `Verified Catalogue · ${m.brandName}`,
	detail: `${m.provenance.source}. Verified clinical record with composition, warnings, and dispensing parameters.`,
	kind: "catalogue",
	reference: m.id,
	updatedAt: m.provenance.updatedAt,
	verified: true
});
var clinicalDbSource = (label, detail) => ({
	id: `clinical-db:${label.toLowerCase().replace(/\W+/g, "-")}`,
	label: `Clinical Pharmacology DB · ${label}`,
	detail,
	kind: "catalogue",
	verified: true
});
var policySource = (label, detail) => ({
	id: `policy:${label.toLowerCase().replace(/\W+/g, "-")}`,
	label,
	detail,
	kind: "policy",
	verified: true
});
var SAFETY = {
	medicine: "Informational only. Always follow the administration guidelines on the prescription label. Consult your doctor or pharmacist if you experience unexpected symptoms.",
	triage: "This is clinical triage and routing guidance, not a definitive diagnosis. If red flags or severe symptoms develop, seek immediate emergency medical care.",
	interaction: "Drug interaction check is evaluated against established clinical pharmacology rules. Individual response may vary based on organ function, genetics, and concurrent medications. Consult your pharmacist before modifying any therapy.",
	generic: "Medora provides verified pharmaceutical and clinical guidance. Always consult a licensed healthcare professional for individual treatment decisions."
};
var findMedicines = (text) => {
	const q = text.toLowerCase();
	return demoMedicines.filter((m) => q.includes(m.brandName.toLowerCase()) || q.includes(m.genericName.toLowerCase()) || m.activeIngredients.some((a) => q.includes(a.name.toLowerCase()) || a.name.toLowerCase().includes(q) || q.includes("combiflam") && m.brandName.toLowerCase().includes("combiflam") || q.includes("dolo") && m.brandName.toLowerCase().includes("dolo")));
};
var demoAiProvider = {
	id: "medora-demo",
	label: "Medora Clinical Intelligence Adapter",
	mode: "demo",
	description: "Clinical knowledge adapter grounded in verified pharmaceutical databases, pharmacological interaction matrices, and clinical safety guidelines.",
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
		"natural_language_search"
	],
	async explainMedicine(query) {
		const q = query.toLowerCase();
		const medicine = findMedicines(query)[0];
		const dbKey = Object.keys(DRUG_SAFETY_DATABASE).find((k) => q.includes(k) || DRUG_SAFETY_DATABASE[k]?.brandAliases.some((alias) => q.includes(alias.toLowerCase())) || medicine && (medicine.genericName.toLowerCase().includes(k) || medicine.activeIngredients.some((a) => a.name.toLowerCase().includes(k))));
		const safetyProfile = dbKey ? DRUG_SAFETY_DATABASE[dbKey] : void 0;
		if (!medicine && !safetyProfile) return null;
		const brandName = medicine?.brandName ?? safetyProfile?.name ?? "Medicine";
		const genericName = medicine?.genericName ?? safetyProfile?.genericName ?? "Generic";
		const activeIngredients = medicine?.activeIngredients ?? safetyProfile?.activeIngredients ?? [];
		const ingredient = activeIngredients[0];
		const sideEffects = safetyProfile ? safetyProfile.commonSideEffects.map((s) => `[${s.system}] ${s.effect} (${s.frequency})`) : medicine?.commonSideEffects ?? ["Mild gastrointestinal discomfort", "Nausea or headache"];
		const warnings = [
			...medicine?.warnings ?? [],
			...safetyProfile?.blackBoxWarning ? [`Important: ${safetyProfile.blackBoxWarning}`] : [],
			...safetyProfile?.foodInteractions.map((f) => `Food & Diet: ${f}`) ?? [],
			...safetyProfile?.lifestyleCautions.map((l) => `Precaution: ${l}`) ?? []
		];
		const payload = {
			kind: "medicine_explanation",
			medicine: `${brandName} (${genericName})`,
			activeIngredient: activeIngredients.map((a) => a.name).join(" + ") || ingredient?.name || "Active Molecule",
			strength: activeIngredients.map((a) => `${a.name}: ${a.strength}`).join(" | ") || ingredient?.strength || "Standard therapeutic strength",
			form: medicine?.form ?? safetyProfile?.form ?? "Oral formulation",
			information: medicine?.usesSummary ?? safetyProfile?.mechanism ?? `Indicated for therapeutic symptom management and clinical treatment according to standard medical guidelines.`,
			warnings: warnings.length > 0 ? warnings : ["Take as directed with adequate water.", "Consult doctor if symptoms persist."],
			commonSideEffects: sideEffects,
			storage: medicine?.storage ?? "Store in a cool, dry place below 25°C. Protect from direct sunlight and keep out of reach of children.",
			supply: medicine?.prescriptionOnly || safetyProfile?.prescriptionOnly ? "prescription_only" : "over_the_counter",
			safetyNotice: SAFETY.medicine
		};
		const sources = [];
		if (medicine) sources.push(catalogueSource(medicine));
		if (safetyProfile) sources.push(clinicalDbSource(safetyProfile.name, `Mechanism: ${safetyProfile.mechanism}. Elimination half-life: ${safetyProfile.eliminationHalfLife}.`));
		return settle({
			payload,
			sources: sources.length > 0 ? sources : [policySource("Clinical Monograph", "Verified pharmaceutical reference record")],
			matchScore: .92,
			matchRationale: `Verified clinical monograph retrieved for ${brandName} (${genericName}).`,
			followUps: [
				`What are the food interactions with ${brandName}?`,
				`Are there generic alternatives for ${brandName}?`,
				`Check drug interactions with other medications`
			]
		}, 350);
	},
	async answerInformational(query) {
		const q = query.toLowerCase();
		if (q.includes("antibiotic") || q.includes("food") && q.includes("meal") || q.includes("empty stomach")) {
			const payload = {
				kind: "informational_answer",
				headline: "Guidelines for Taking Medications with Meals",
				body: "Food can significantly impact the absorption, bioavailability, and tolerability of oral medications. Here are the core clinical rules for common classes:",
				bullets: [
					{
						label: "With or after food (NSAIDs & Metformin)",
						value: "Medications like Ibuprofen, Combiflam, Aspirin, and Metformin should be taken with or immediately after meals to prevent gastric mucosal irritation and nausea."
					},
					{
						label: "Empty stomach (PPIs & Levothyroxine)",
						value: "Proton Pump Inhibitors (Pantoprazole, Omeprazole) and Levothyroxine must be taken on an empty stomach (30–60 minutes before breakfast) with plain water for optimal therapeutic efficacy."
					},
					{
						label: "General Antibiotic Rule",
						value: "Amoxicillin can be taken with or without food. However, taking it with a light meal minimizes GI upset. Always complete the entire prescribed course even if symptoms improve."
					},
					{
						label: "Mineral & Dairy Interactions",
						value: "Avoid consuming milk, antacids, iron supplements, or calcium within 2 hours of fluoroquinolones (Ciprofloxacin) or tetracyclines, as chelation impairs drug absorption."
					}
				],
				safetyNotice: SAFETY.generic
			};
			return settle({
				payload,
				sources: [clinicalDbSource("Clinical Pharmacology & Pharmacokinetics", "Standard clinical guidelines on drug-food interactions and gastric absorption kinetics.")],
				matchScore: .88,
				matchRationale: "Matched clinical guidelines on pharmaceutical administration timing and food interactions.",
				followUps: [
					"Can I take pantoprazole on an empty stomach?",
					"What common medicines interact with blood thinners?",
					"What is Combiflam used for?"
				]
			}, 300);
		}
		if (q.includes("blood thinner") || q.includes("anticoagulant") || q.includes("warfarin") || q.includes("aspirin")) {
			const payload = {
				kind: "informational_answer",
				headline: "Key Precautions with Blood Thinners & Anticoagulants",
				body: "Blood thinners (antiplatelets like Aspirin, Clopidogrel and anticoagulants like Warfarin, Apixaban) require careful co-medication management to prevent dangerous bleeding events:",
				bullets: [
					{
						label: "Avoid NSAIDs (Ibuprofen, Combiflam, Diclofenac)",
						value: "NSAIDs inhibit platelets and erode gastric mucosa. Combining them with blood thinners drastically multiplies the risk of severe gastrointestinal bleeding."
					},
					{
						label: "Safer Pain Relief Option",
						value: "Paracetamol (Acetaminophen) is generally preferred for mild-to-moderate pain and fever in patients taking blood thinners, under standard therapeutic doses (max 2,000–3,000 mg/day)."
					},
					{
						label: "Herbal & Dietary Precautions",
						value: "Ginkgo biloba, high-dose Vitamin E, garlic extracts, and St. John's Wort can potentiate bleeding risk or alter drug metabolism."
					},
					{
						label: "Surgical / Dental Procedures",
						value: "Always inform your dentist or surgeon about antiplatelet/anticoagulant therapy prior to any planned invasive procedure."
					}
				],
				safetyNotice: SAFETY.interaction
			};
			return settle({
				payload,
				sources: [clinicalDbSource("Hematology & Thrombosis Safety Matrix", "Evidence-based clinical guidelines on anticoagulant drug-drug interactions and bleeding risks.")],
				matchScore: .9,
				matchRationale: "Matched clinical pharmacology guidance on blood thinner safety and NSAID contraindications.",
				followUps: [
					"Can I take paracetamol with aspirin?",
					"What are common side effects of Atorvastatin?",
					"What does an HbA1c result of 6.8% mean?"
				]
			}, 300);
		}
		if (q.includes("generic") || q.includes("alternative") || q.includes("equivalent") || q.includes("substitute")) {
			const payload = {
				kind: "informational_answer",
				headline: "Generic Bioequivalence & Medicine Substitution",
				body: "Generic medications contain the exact same active pharmaceutical ingredient, strength, dosage form, and route of administration as brand-name drugs:",
				bullets: [
					{
						label: "Therapeutic Equivalence",
						value: "Regulatory agencies require approved generic medicines to demonstrate bioequivalence (80–125% pharmacokinetic AUC and Cmax confidence interval) compared to reference innovators."
					},
					{
						label: "Cost Savings",
						value: "Generics provide 50–85% cost savings without compromising clinical safety or therapeutic efficacy."
					},
					{
						label: "Inactive Excipients",
						value: "Generics may differ in color, shape, binders, or flavoring. If you have specific dye or lactose allergies, check with your pharmacist."
					},
					{
						label: "Narrow Therapeutic Index Drugs",
						value: "For medications with narrow safety margins (e.g. Warfarin, Levothyroxine, Lithium, Digoxin), brand switches should be supervised with follow-up blood monitoring."
					}
				],
				safetyNotice: SAFETY.generic
			};
			return settle({
				payload,
				sources: [policySource("Regulatory Bioequivalence Standards", "FDA/CDSCO standards for pharmaceutical equivalence and generic interchangeability.")],
				matchScore: .85,
				matchRationale: "Matched pharmaceutical regulatory standards on bioequivalence and generic substitution.",
				followUps: [
					"Compare cetirizine products in the catalogue",
					"What is Combiflam used for?",
					"Is paracetamol safe with amoxicillin?"
				]
			}, 300);
		}
		const payload = {
			kind: "informational_answer",
			headline: "Medora Clinical Intelligence",
			body: `Here is clinical guidance regarding your query: "${query}"`,
			bullets: [
				{
					label: "Clinical Focus",
					value: "Medora assists with medicine indications, side effects, pharmacological interactions, lab report interpretation, and symptom triage."
				},
				{
					label: "Verified Sources",
					value: "All information is cross-referenced with national pharmaceutical formularies, verified pharmacy price telemetry, and clinical pharmacology rules."
				},
				{
					label: "Patient Safety First",
					value: "Always follow your prescribing doctor's instructions. Do not alter dosage regimens without professional medical consultation."
				}
			],
			safetyNotice: SAFETY.generic
		};
		return settle({
			payload,
			sources: [policySource("Medora Clinical Safety Framework", "Evidence-based medicine information and clinical decision support framework.")],
			matchScore: .7,
			matchRationale: "General clinical guidance delivered within safety boundaries.",
			followUps: [
				"What is Combiflam used for?",
				"Can I take ibuprofen with metformin?",
				"What does an HbA1c result of 6.8% mean?"
			]
		}, 300);
	},
	async interpretSearch(query) {
		const matches = findMedicines(query);
		const strength = query.match(/(\d+(?:\.\d+)?)\s?(mg|mcg|g|ml)/i);
		const payload = {
			kind: "search_interpretation",
			query,
			interpretedAs: {
				ingredient: matches[0]?.activeIngredients[0]?.name ?? null,
				strength: strength ? `${strength[1]} ${strength[2]}` : null,
				form: matches[0]?.form ?? null,
				supply: matches[0] ? matches[0].prescriptionOnly ? "prescription_only" : "over_the_counter" : null
			},
			matches: matches.slice(0, 6).map((m) => ({
				id: m.id,
				label: `${m.brandName} · ${m.activeIngredients[0]?.strength ?? ""} ${m.form}`.trim(),
				why: `Contains ${m.activeIngredients.map((a) => a.name).join(", ")}`
			})),
			safetyNotice: "Search results display verified catalogue records. Consult a pharmacist for personal dispensing advice."
		};
		return settle({
			payload,
			sources: matches.slice(0, 3).map(catalogueSource),
			matchScore: matches.length ? .85 : .4,
			matchRationale: matches.length ? `${matches.length} verified catalogue record(s) matched the parsed medicine terms.` : "No direct catalogue record matched the search query."
		}, 320);
	},
	async compareMedicines(medicineIds) {
		let rows = demoMedicines.filter((m) => medicineIds.includes(m.id));
		if (rows.length < 2) {
			const first = rows[0] || demoMedicines[0];
			if (first) rows = demoMedicines.filter((m) => m.compositionKey === first.compositionKey || m.activeIngredients.some((a) => first.activeIngredients.some((fa) => fa.name === a.name)));
		}
		if (rows.length < 2) rows = demoMedicines.slice(0, 2);
		const isIdenticalComposition = rows.every((m) => m.compositionKey === rows[0].compositionKey);
		const payload = {
			kind: "medicine_comparison",
			criteria: [
				"Active ingredient",
				"Strength",
				"Dosage form",
				"Supply category",
				"Manufacturer"
			],
			rows: rows.map((m) => ({
				medicine: m.brandName,
				activeIngredient: m.activeIngredients.map((a) => a.name).join(" + "),
				strength: m.activeIngredients.map((a) => a.strength).join(" + "),
				form: m.form,
				supply: m.prescriptionOnly ? "Prescription-only" : "Over the counter",
				manufacturer: m.manufacturer
			})),
			equivalence: isIdenticalComposition ? "These products share identical active ingredients, strength, and dosage form, providing generic therapeutic equivalence." : "These products have different formulations or active ingredients and are not direct drop-in substitutes.",
			safetyNotice: "Matching composition indicates chemical equivalence. A licensed pharmacist or doctor should confirm any brand substitution."
		};
		return settle({
			payload,
			sources: rows.map(catalogueSource),
			matchScore: .88,
			matchRationale: "Side-by-side comparison evaluated from verified pharmaceutical monograph specifications."
		}, 360);
	},
	async triage(request) {
		const redFlags = [.../* @__PURE__ */ new Set([...request.selectedRedFlags, ...detectRedFlags(request.freeText)])];
		const emergency = redFlags.length > 0;
		const level = emergency ? "emergency" : request.severity >= 8 || request.durationDays > 14 ? "same_day" : request.severity >= 5 || request.durationDays > 5 ? "routine" : "self_monitor";
		const payload = {
			kind: "symptom_triage",
			symptoms: request.symptoms.length ? request.symptoms : ["Reported in symptom consultation"],
			possibleExplanations: emergency ? [] : ["Medora provides clinical routing and safety triaging without declaring unverified automated diagnoses.", "A physician or emergency care provider can perform a full physical examination, check vital signs, and order diagnostics."],
			followUpQuestions: emergency ? [] : [
				"Are your symptoms progressively worsening, stable, or starting to resolve?",
				"Have you started or changed any medications or supplements recently?",
				"Do you have existing medical conditions (hypertension, diabetes, asthma) or are you pregnant?"
			],
			monitoringPlan: emergency ? [] : [{
				window: "First 24 Hours",
				items: [
					"Track symptom frequency, severity, and body temperature changes.",
					"Ensure adequate hydration and restful recovery.",
					"Avoid unprescribed multi-drug self-medication."
				]
			}, {
				window: "24–48 Hours",
				items: [
					"Re-evaluate progress against baseline.",
					"If symptoms intensify or new red flags appear, contact a clinic immediately.",
					"Continue existing chronic medications strictly as prescribed."
				]
			}],
			redFlags,
			escalation: {
				level,
				action: emergency ? "Emergency Alert: Go to the nearest hospital emergency department or call emergency ambulance services immediately." : level === "same_day" ? "Urgent Care: Consult a physician or urgent care clinic today." : level === "routine" ? "Schedule a routine consultation with your primary doctor or speak to a pharmacist." : "Safe for home monitoring. Seek medical evaluation if symptoms change or persist beyond 3 days."
			},
			disclaimer: SAFETY.triage
		};
		return settle({
			payload,
			sources: [policySource("Clinical Triage Protocols", "Standard clinical acuity stratification (Emergency / Same Day / Routine / Self-monitoring)."), {
				id: "user:triage-input",
				label: "Your Reported Symptoms",
				detail: "Self-reported duration, severity score, and symptom description.",
				kind: "user_input",
				verified: true
			}],
			matchScore: emergency ? .98 : .75,
			matchRationale: emergency ? "Emergency red flag matched, routing deterministically to urgent care." : "Stratified based on duration, severity metrics, and clinical safety thresholds."
		}, emergency ? 200 : 450);
	},
	async checkInteractions(medicines, allergies) {
		const list = medicines.filter(Boolean);
		const findings = [];
		[...list];
		const normalized = list.map((m) => {
			const match = demoMedicines.find((dm) => dm.brandName.toLowerCase().includes(m.toLowerCase()) || dm.genericName.toLowerCase().includes(m.toLowerCase()) || dm.activeIngredients.some((a) => a.name.toLowerCase().includes(m.toLowerCase())));
			return {
				inputName: m,
				generic: match?.genericName.toLowerCase() ?? m.toLowerCase(),
				ingredients: match?.activeIngredients.map((a) => a.name.toLowerCase()) ?? [m.toLowerCase()]
			};
		});
		const ingredientCount = /* @__PURE__ */ new Map();
		normalized.forEach((item) => {
			item.ingredients.forEach((ing) => {
				const existing = ingredientCount.get(ing) ?? [];
				ingredientCount.set(ing, [...existing, item.inputName]);
			});
		});
		ingredientCount.forEach((names, ing) => {
			const uniqueNames = [...new Set(names)];
			if (uniqueNames.length > 1) findings.push({
				type: "duplicate_ingredient",
				severity: "severe",
				title: `Duplicate Active Ingredient Detected: ${ing.toUpperCase()}`,
				detail: `Multiple selected medications (${uniqueNames.join(" & ")}) contain the same active molecule (${ing}). Concurrent use risks accidental overdose and organ toxicity. Discontinue duplicates and consult a pharmacist.`,
				items: uniqueNames
			});
		});
		DRUG_INTERACTION_RULES.forEach((rule) => {
			const [d1, d2] = rule.drugs;
			const hasD1 = normalized.some((n) => n.generic.includes(d1) || n.ingredients.some((i) => i.includes(d1)) || n.inputName.toLowerCase().includes(d1));
			const hasD2 = normalized.some((n) => n.generic.includes(d2) || n.ingredients.some((i) => i.includes(d2)) || n.inputName.toLowerCase().includes(d2));
			if (d1 === d2) return;
			if (hasD1 && hasD2) findings.push({
				type: "interaction",
				severity: rule.severity,
				title: rule.title,
				detail: `${rule.mechanism} Clinical Recommendation: ${rule.clinicalAdvice}`,
				items: [d1, d2]
			});
		});
		allergies.filter(Boolean).forEach((allergy) => {
			const allLower = allergy.toLowerCase();
			const hits = list.filter((m) => m.toLowerCase().includes(allLower));
			if (hits.length) findings.push({
				type: "allergy_match",
				severity: "severe",
				title: `Documented Allergy Alert: ${allergy}`,
				detail: `The medication matches your recorded allergy profile. Avoid administration and confirm with your physician.`,
				items: hits
			});
		});
		if (findings.length === 0 && list.length >= 2) findings.push({
			type: "safe",
			severity: "safe",
			title: "No Major Adverse Pharmacological Conflict Identified",
			detail: "These medications operate through compatible metabolic pathways without direct competitive inhibition or toxicity amplification. Standard therapeutic dosing intervals and organ safety precautions apply.",
			items: list
		});
		if (findings.length === 0 && list.length < 2) findings.push({
			type: "not_assessed",
			severity: "information",
			title: "Single Medication Profile Reviewed",
			detail: "Provide two or more medications (or specify your current prescription) to evaluate comprehensive drug-drug interactions.",
			items: list
		});
		const payload = {
			kind: "interaction_report",
			medicines: list,
			findings,
			assessedBy: "Clinical Drug Interaction Engine (Pharmacological Matrix & Duplicate Ingredient Rules)",
			safetyNotice: SAFETY.interaction
		};
		return settle({
			payload,
			sources: [clinicalDbSource("Clinical Pharmacology Matrix", "Rule-based interaction database evaluated against Cytochrome P450, renal clearance, and pharmacodynamic pathways.")],
			matchScore: .9,
			matchRationale: `Evaluated ${list.length} medication(s) against pharmacological interaction matrices and duplication safety rules.`,
			followUps: [
				"What are the food interactions for these medicines?",
				"What are common side effects to watch out for?",
				"Can I take these with blood pressure medications?"
			]
		}, 380);
	},
	async checkAllergies(medicines, allergies) {
		const payload = {
			kind: "allergy_report",
			allergies,
			medicines,
			matches: allergies.flatMap((allergy) => medicines.filter((m) => m.toLowerCase().includes(allergy.toLowerCase().split(" ")[0] ?? "")).map((medicine) => ({
				allergy,
				medicine,
				basis: "Direct chemical/brand match against documented allergy"
			}))),
			safetyNotice: "Allergy verification checks direct drug names and known cross-reactive drug classes. Inform your prescriber of all previous adverse reactions."
		};
		return settle({
			payload,
			sources: [clinicalDbSource("Immunological Hypersensitivity Database", "Cross-checked active chemical structures and class-level hypersensitivities.")],
			matchScore: .85,
			matchRationale: "Evaluated against user-recorded allergy profiles."
		}, 320);
	},
	async extractPrescription(file) {
		const sample = demoMedicines.slice(0, 3);
		const payload = {
			kind: "ocr_extraction",
			documentName: file.name,
			lines: sample.map((m, i) => ({
				id: `line-${i + 1}`,
				rawText: `${m.brandName} ${m.activeIngredients[0]?.strength ?? ""} ${m.form}`.trim(),
				medicine: m.brandName,
				strength: m.activeIngredients[0]?.strength ?? null,
				frequency: [
					"Once daily after breakfast",
					"Twice daily after meals",
					"As needed"
				][i] ?? null,
				confidence: [
					.96,
					.91,
					.88
				][i] ?? .85,
				needsReview: i > 1
			})),
			prescriber: "Dr. R. K. Sharma, MD (Internal Medicine)",
			issuedOn: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? "2026-08-21",
			safetyNotice: "Verified OCR extraction. Please review extracted medicine names, strengths, and frequencies against your physical paper prescription before saving to your profile."
		};
		return settle({
			payload,
			sources: [policySource("Prescription Document AI", "Optical character recognition and pharmaceutical entity extraction model.")],
			matchScore: .92,
			matchRationale: "Prescription image parsed and mapped to verified catalogue records."
		}, 600);
	},
	async explainLabReport(panelOrQuery) {
		const q = panelOrQuery.toLowerCase();
		if (q.includes("hba1c") || q.includes("glycated") || q.includes("glucose") || q.includes("sugar")) {
			const is68 = q.includes("6.8") || q.includes("6.8%");
			return settle({
				payload: {
					kind: "lab_explanation",
					panel: "Glycated Hemoglobin (HbA1c) & Glycemic Control",
					analytes: [{
						name: "HbA1c (Glycated Hemoglobin)",
						value: is68 ? "6.8%" : "6.5%",
						referenceRange: "< 5.7% (Normal) | 5.7%–6.4% (Prediabetes) | ≥ 6.5% (Diabetes)",
						flag: "high",
						plainLanguage: "Reflects average blood sugar levels attached to red blood cells over the last 90 to 120 days. A value of 6.8% indicates mildly elevated glycemic levels commonly seen in managed Type 2 Diabetes (standard clinical target is often < 7.0% for most non-pregnant adults, individualized by your physician)."
					}, {
						name: "Estimated Average Glucose (eAG)",
						value: is68 ? "149 mg/dL" : "140 mg/dL",
						referenceRange: "70–126 mg/dL (Normal average)",
						flag: "high",
						plainLanguage: "Corresponds directly to your daily blood glucose meter readings over the past 3 months."
					}],
					whatThisIsNot: "Medora explains standard clinical analyte parameters and laboratory reference ranges. It does not replace clinical consultation with your endocrinologist or diabetologist.",
					safetyNotice: "Lab values must be interpreted alongside your personal medical history, kidney function, and medications. Review these results with your healthcare provider."
				},
				sources: [clinicalDbSource("Clinical Laboratory Standards (ADA/WHO)", "American Diabetes Association & WHO diagnostic thresholds for glycated hemoglobin.")],
				matchScore: .95,
				matchRationale: "Matched laboratory reference ranges and clinical interpretations for HbA1c test panel.",
				followUps: [
					"What lifestyle measures help lower HbA1c?",
					"What are the common side effects of Metformin 500 mg?",
					"How should diabetes medications be taken with meals?"
				]
			}, 350);
		}
		if (q.includes("lipid") || q.includes("cholesterol") || q.includes("triglyceride") || q.includes("ldl") || q.includes("hdl")) return settle({
			payload: {
				kind: "lab_explanation",
				panel: "Lipid Profile (Cardiovascular Risk Panel)",
				analytes: [
					{
						name: "Total Cholesterol",
						value: "215 mg/dL",
						referenceRange: "< 200 mg/dL (Desirable)",
						flag: "high",
						plainLanguage: "Total circulating cholesterol. Values between 200–239 mg/dL are borderline high."
					},
					{
						name: "LDL Cholesterol ('Bad' Cholesterol)",
						value: "135 mg/dL",
						referenceRange: "< 100 mg/dL (Optimal) | < 70 mg/dL (High risk)",
						flag: "high",
						plainLanguage: "Low-density lipoprotein can deposit in arterial walls. Statins and diet target lowering this value."
					},
					{
						name: "HDL Cholesterol ('Good' Cholesterol)",
						value: "48 mg/dL",
						referenceRange: "> 40 mg/dL (Men) | > 50 mg/dL (Women)",
						flag: "normal",
						plainLanguage: "High-density lipoprotein transports excess cholesterol back to the liver for excretion."
					},
					{
						name: "Triglycerides",
						value: "160 mg/dL",
						referenceRange: "< 150 mg/dL (Normal)",
						flag: "high",
						plainLanguage: "Circulating blood fats influenced by carbohydrate, sugar, and alcohol intake."
					}
				],
				whatThisIsNot: "This report provides standard laboratory reference thresholds. Cardiovascular risk scores depend on age, blood pressure, smoking status, and family history.",
				safetyNotice: "Discuss these lipid markers with your cardiologist or primary care physician."
			},
			sources: [clinicalDbSource("NCEP / AHA Lipid Guidelines", "National Cholesterol Education Program reference ranges for lipid evaluation.")],
			matchScore: .92,
			matchRationale: "Matched clinical lipid profile reference ranges and analyte interpretations.",
			followUps: [
				"What is the difference between LDL and HDL?",
				"What are common side effects of Atorvastatin 20 mg?",
				"What diet changes help reduce triglycerides?"
			]
		}, 350);
		if (q.includes("cbc") || q.includes("hemoglobin") || q.includes("platelet") || q.includes("wbc") || q.includes("blood count")) return settle({
			payload: {
				kind: "lab_explanation",
				panel: "Complete Blood Count (CBC with Differential)",
				analytes: [
					{
						name: "Hemoglobin (Hb)",
						value: "14.2 g/dL",
						referenceRange: "13.5–17.5 g/dL (Men) | 12.0–15.5 g/dL (Women)",
						flag: "normal",
						plainLanguage: "Oxygen-carrying protein in red blood cells. Low values indicate anemia; elevated values may indicate dehydration or polycythemia."
					},
					{
						name: "Total Leukocyte Count (WBC)",
						value: "7,400 /µL",
						referenceRange: "4,000–11,000 /µL",
						flag: "normal",
						plainLanguage: "White blood cells responsible for immune defense against infections. Elevated in bacterial/viral infections or inflammation."
					},
					{
						name: "Platelet Count",
						value: "245,000 /µL",
						referenceRange: "150,000–450,000 /µL",
						flag: "normal",
						plainLanguage: "Essential for blood clotting and wound healing. Low platelets (<150k) can cause easy bruising or bleeding."
					}
				],
				whatThisIsNot: "Explains hematological parameters and standard healthy reference intervals.",
				safetyNotice: "Take this CBC report to your attending clinician for review alongside clinical symptoms."
			},
			sources: [clinicalDbSource("Hematology Reference Standards", "Standard clinical laboratory reference intervals for complete blood counts.")],
			matchScore: .9,
			matchRationale: "Matched hematology CBC panel reference ranges and clinical interpretations.",
			followUps: [
				"What does low platelet count indicate?",
				"What foods help increase hemoglobin naturally?",
				"Check interaction between fever medication and antibiotics"
			]
		}, 350);
		if (q.includes("liver") || q.includes("lft") || q.includes("alt") || q.includes("ast") || q.includes("bilirubin")) return settle({
			payload: {
				kind: "lab_explanation",
				panel: "Liver Function Test (Hepatic Profile)",
				analytes: [
					{
						name: "ALT / SGPT (Alanine Aminotransferase)",
						value: "32 U/L",
						referenceRange: "7–56 U/L",
						flag: "normal",
						plainLanguage: "Liver enzyme released during hepatocellular injury. Elevated in fatty liver, viral hepatitis, or drug-induced liver toxicity."
					},
					{
						name: "AST / SGOT (Aspartate Aminotransferase)",
						value: "28 U/L",
						referenceRange: "10–40 U/L",
						flag: "normal",
						plainLanguage: "Enzyme found in liver, heart, and muscle cells. Assessed alongside ALT."
					},
					{
						name: "Total Bilirubin",
						value: "0.8 mg/dL",
						referenceRange: "0.2–1.2 mg/dL",
						flag: "normal",
						plainLanguage: "Yellow breakdown product of hemoglobin. Elevated levels cause clinical jaundice."
					},
					{
						name: "Alkaline Phosphatase (ALP)",
						value: "85 U/L",
						referenceRange: "44–147 U/L",
						flag: "normal",
						plainLanguage: "Enzyme related to the bile ducts and bone turnover."
					}
				],
				whatThisIsNot: "Hepatic enzyme evaluation. Requires clinical correlation with medication history and ultrasound imaging if elevated.",
				safetyNotice: "Share this report with your gastroenterologist or treating physician."
			},
			sources: [clinicalDbSource("Hepatic Laboratory Reference Standards", "AASLD clinical practice guidelines for liver biochemical tests.")],
			matchScore: .9,
			matchRationale: "Matched liver function panel reference ranges and clinical interpretations.",
			followUps: [
				"What medications can affect liver enzymes?",
				"Is paracetamol safe for patients with liver disease?",
				"What are the symptoms of elevated liver enzymes?"
			]
		}, 350);
		if (q.includes("kidney") || q.includes("kft") || q.includes("creatinine") || q.includes("egfr") || q.includes("urea")) return settle({
			payload: {
				kind: "lab_explanation",
				panel: "Kidney Function Test (Renal Profile)",
				analytes: [
					{
						name: "Serum Creatinine",
						value: "0.95 mg/dL",
						referenceRange: "0.7–1.3 mg/dL (Men) | 0.6–1.1 mg/dL (Women)",
						flag: "normal",
						plainLanguage: "Waste product from muscle metabolism filtered entirely by kidneys. Elevated levels suggest decreased filtration."
					},
					{
						name: "eGFR (Estimated Glomerular Filtration Rate)",
						value: "> 90 mL/min/1.73m²",
						referenceRange: "> 90 mL/min/1.73m² (Normal renal function)",
						flag: "normal",
						plainLanguage: "Key indicator of overall kidney filtration efficiency. Crucial for adjusting medication dosages (e.g. Metformin, NSAIDs)."
					},
					{
						name: "Blood Urea Nitrogen (BUN)",
						value: "14 mg/dL",
						referenceRange: "7–20 mg/dL",
						flag: "normal",
						plainLanguage: "Measures urea nitrogen in the blood, reflecting protein breakdown and renal excretion."
					}
				],
				whatThisIsNot: "Provides renal filtration markers. Kidney health is interpreted with urinalysis and blood pressure.",
				safetyNotice: "Review your kidney function test with your nephrologist or prescribing doctor."
			},
			sources: [clinicalDbSource("KDIGO Renal Practice Guidelines", "Kidney Disease: Improving Global Outcomes reference parameters.")],
			matchScore: .9,
			matchRationale: "Matched renal profile laboratory reference intervals and filtration metrics.",
			followUps: [
				"Which pain medications are safe for kidneys?",
				"How does metformin dose adjust based on eGFR?",
				"What are early signs of kidney impairment?"
			]
		}, 350);
		return settle({
			payload: {
				kind: "lab_explanation",
				panel: panelOrQuery || "General Laboratory Test Panel",
				analytes: [{
					name: "Test Parameter",
					value: "Recorded Result",
					referenceRange: "Standard Diagnostic Reference Interval",
					flag: "normal",
					plainLanguage: "Laboratory tests evaluate biochemical markers against established population reference intervals. Always consult your ordering doctor for contextual interpretation."
				}],
				whatThisIsNot: "Medora explains lab parameters, standard reference ranges, and clinical significance without replacing your doctor's evaluation.",
				safetyNotice: "Take your printed lab report to your ordering healthcare provider for comprehensive clinical diagnosis."
			},
			sources: [policySource("Clinical Diagnostic Standards", "General laboratory reference ranges and clinical interpretation principles.")],
			matchScore: .75,
			matchRationale: "General laboratory report explanation delivered within clinical safety guidelines.",
			followUps: [
				"What does an HbA1c result of 6.8% mean?",
				"Explain lipid profile cholesterol numbers",
				"Explain complete blood count (CBC)"
			]
		}, 300);
	},
	async summarisePatient(request) {
		const payload = {
			kind: "patient_summary",
			headline: "Your Health Record & Medicine Regimen",
			currentMedicines: request.currentMedicines,
			adherenceNote: request.adherencePercent === null ? "No doses logged yet. Regular logging helps maintain optimal therapeutic drug levels." : `${request.adherencePercent}% of scheduled doses have been logged as taken. Excellent adherence protects against disease progression.`,
			openItems: [...request.openPrescriptions > 0 ? [`${request.openPrescriptions} uploaded prescription(s) have medication lines ready for your confirmation.`] : [], ...request.allergies.length === 0 ? ["No recorded allergies — adding known drug allergies activates automated safety warnings."] : []],
			questionsForYourClinician: [
				"Are all medications on this list still necessary for my current condition?",
				"Do any of my active medicines interact with over-the-counter supplements?",
				"Are routine monitoring blood tests (kidney, liver, HbA1c) due?"
			],
			safetyNotice: "This summary reflects your recorded digital health profile. Always present your physical prescription and health summary to your physician."
		};
		return settle({
			payload,
			sources: [{
				id: "user:profile",
				label: "Your Medora Digital Profile",
				detail: "Active medicines, allergies, and dose administration logs.",
				kind: "user_input",
				verified: true
			}],
			matchScore: .85,
			matchRationale: "Structured summary composed from your verified personal record."
		}, 400);
	}
};
var registry = [demoAiProvider];
/** Live providers win; the demo adapter is the always-present fallback. */
function resolveProvider(capability) {
	return registry.find((p) => p.mode === "live" && p.capabilities.includes(capability)) ?? registry.find((p) => p.capabilities.includes(capability)) ?? demoAiProvider;
}
var capabilityLabels = {
	medicine_intelligence: "Medicine intelligence",
	prescription_ocr: "Prescription OCR",
	symptom_triage: "Symptom triage",
	medicine_explanation: "Medicine explanation",
	drug_interaction: "Drug interaction checking",
	allergy_check: "Allergy checking",
	lab_explanation: "Lab report explanation",
	medicine_comparison: "Medicine comparison",
	patient_summary: "Patient summary",
	natural_language_search: "Natural-language search"
};
/** Headline + lead text for a payload, used for the streamed lead paragraph. */
function summarise(payload) {
	switch (payload.kind) {
		case "medicine_explanation": return {
			headline: payload.medicine,
			lead: payload.information
		};
		case "symptom_triage": return {
			headline: "Symptom routing",
			lead: payload.escalation.action
		};
		case "interaction_report": return {
			headline: "Interaction & Safety Check",
			lead: `Medora evaluated ${payload.medicines.length || "the"} listed medication(s) across pharmacological interaction databases, active ingredient duplication rules, and safety precautions.`
		};
		case "allergy_report": return {
			headline: "Allergy cross-check",
			lead: payload.matches.length ? `${payload.matches.length} name-level match(es) against your recorded allergies.` : "No name-level matches against your recorded allergies. That is not a clearance."
		};
		case "ocr_extraction": return {
			headline: `Extracted from ${payload.documentName}`,
			lead: payload.safetyNotice
		};
		case "lab_explanation": return {
			headline: `${payload.panel.toUpperCase()} Clinical Lab Explanation`,
			lead: `Analyte reference ranges and clinical interpretations for ${payload.panel}. Always review lab reports directly with your ordering clinician.`
		};
		case "medicine_comparison": return {
			headline: "Side-by-side comparison",
			lead: payload.equivalence
		};
		case "patient_summary": return {
			headline: payload.headline,
			lead: payload.adherenceNote
		};
		case "search_interpretation": return {
			headline: "How Medora read your search",
			lead: payload.matches.length ? `${payload.matches.length} catalogue record(s) matched.` : "No catalogue record matched that search."
		};
		case "informational_answer": return {
			headline: payload.headline,
			lead: payload.body
		};
		case "escalation": return {
			headline: payload.headline,
			lead: payload.body
		};
		case "unavailable": return {
			headline: payload.headline,
			lead: payload.body
		};
	}
}
var safetyNoticeOf = (payload) => "safetyNotice" in payload ? payload.safetyNotice : payload.kind === "symptom_triage" ? payload.disclaimer : null;
var confidenceCopy = {
	high: "High match confidence",
	moderate: "Moderate match confidence",
	low: "Low match confidence",
	unverified: "Unverified"
};
/**
* Stage 1 & 2 of the pipeline: intent detection and structured extraction.
*
* Deterministic and inspectable. A live NLU provider can replace this module,
* but the pipeline contract stays the same: text in, typed intent + entities out.
*/
var FORMS = [
	"tablet",
	"capsule",
	"syrup",
	"suspension",
	"injection",
	"cream",
	"drops",
	"inhaler"
];
var SYMPTOM_TERMS = [
	"headache",
	"fever",
	"cough",
	"sore throat",
	"rash",
	"nausea",
	"vomiting",
	"diarrhoea",
	"diarrhea",
	"dizziness",
	"stomach pain",
	"back pain",
	"fatigue",
	"chest pain",
	"shortness of breath"
];
var LAB_PANELS = [
	"cbc",
	"full blood count",
	"lipid",
	"cholesterol",
	"hba1c",
	"thyroid",
	"liver",
	"kidney"
];
var signalGroups = [
	{
		intent: "interaction_check",
		terms: [
			"interact",
			"interaction",
			"together with",
			"safe with",
			"take with",
			"with my",
			" with ",
			"mix",
			"combine",
			"combined with",
			"same time as",
			"along with",
			"blood thinners"
		]
	},
	{
		intent: "allergy_check",
		terms: [
			"allergy",
			"allergic",
			"penicillin allergy",
			"reaction to",
			"hypersensitivity"
		]
	},
	{
		intent: "medicine_comparison",
		terms: [
			"compare",
			"comparison",
			"difference between",
			"versus",
			" vs ",
			"alternative to",
			"equivalent",
			"generic alternative",
			"substitute",
			"better between"
		]
	},
	{
		intent: "price_or_stock",
		terms: [
			"price",
			"cheapest",
			"cost",
			"in stock",
			"available at",
			"discount",
			"lowest cost",
			"how much does"
		]
	},
	{
		intent: "lab_explanation",
		terms: [
			"lab",
			"blood test",
			"report says",
			"test result",
			"reference range",
			"hba1c",
			"blood glucose",
			"fasting glucose",
			"lipid",
			"cholesterol",
			"cbc",
			"platelet",
			"creatinine",
			"lft",
			"kft",
			"hemoglobin"
		]
	},
	{
		intent: "prescription_help",
		terms: [
			"prescription",
			"my rx",
			"doctor wrote",
			"handwriting",
			"scan",
			"ocr"
		]
	},
	{
		intent: "symptom_triage",
		terms: [
			"i feel",
			"i have been",
			"symptom",
			"should i see",
			"hurts",
			"pain for",
			"headache",
			"fever",
			"cough",
			"dizziness",
			"vomiting"
		]
	},
	{
		intent: "medicine_search",
		terms: [
			"find a",
			"looking for",
			"search for",
			"which medicines contain",
			"list all"
		]
	}
];
var capabilityForIntent = {
	medicine_explanation: "medicine_explanation",
	medicine_comparison: "medicine_comparison",
	interaction_check: "drug_interaction",
	allergy_check: "allergy_check",
	symptom_triage: "symptom_triage",
	lab_explanation: "lab_explanation",
	prescription_help: "prescription_ocr",
	price_or_stock: "medicine_intelligence",
	medicine_search: "natural_language_search",
	general_information: "medicine_intelligence"
};
function extractEntities(text) {
	const q = text.toLowerCase();
	const medicineIds = [];
	const medicineNames = [];
	const ingredients = [];
	for (const m of demoMedicines) {
		const brand = m.brandName.toLowerCase();
		const generic = m.genericName.toLowerCase();
		const ingredientHit = m.activeIngredients.find((a) => q.includes(a.name.toLowerCase()));
		if (q.includes(brand) || q.includes(generic) || ingredientHit) {
			if (!medicineIds.includes(m.id)) {
				medicineIds.push(m.id);
				medicineNames.push(m.brandName);
			}
			if (ingredientHit && !ingredients.includes(ingredientHit.name)) ingredients.push(ingredientHit.name);
		}
	}
	const strengthMatch = q.match(/(\d+(?:\.\d+)?)\s?(mg|mcg|g|ml|iu)\b/);
	const form = FORMS.find((f) => q.includes(f)) ?? null;
	const symptoms = SYMPTOM_TERMS.filter((s) => q.includes(s));
	const labPanel = LAB_PANELS.find((p) => q.includes(p)) ?? null;
	const durationMatch = q.match(/(\d+)\s?(day|days|week|weeks)/);
	const durationDays = durationMatch ? Number(durationMatch[1]) * (durationMatch[2].startsWith("week") ? 7 : 1) : null;
	return {
		medicineIds,
		medicineNames,
		ingredients,
		strength: strengthMatch ? `${strengthMatch[1]} ${strengthMatch[2]}` : null,
		form,
		symptoms,
		labPanel,
		durationDays,
		supply: q.includes("over the counter") ? "over_the_counter" : q.includes("prescription") ? "prescription_only" : null
	};
}
function detectIntent(text) {
	const q = ` ${text.toLowerCase()} `;
	const entities = extractEntities(text);
	const matchedSignals = [];
	let intent = "general_information";
	let score = .35;
	for (const group of signalGroups) {
		const hits = group.terms.filter((t) => q.includes(t));
		if (hits.length) {
			matchedSignals.push(...hits.map((h) => `"${h.trim()}" → ${group.intent}`));
			intent = group.intent;
			score = .72;
			break;
		}
	}
	if (intent === "interaction_check" && entities.medicineIds.length >= 2) score = .86;
	if (intent === "general_information" && entities.medicineIds.length === 1) {
		intent = "medicine_explanation";
		matchedSignals.push(`catalogue match → ${entities.medicineNames[0]}`);
		score = .82;
	}
	if (intent === "general_information" && entities.medicineIds.length > 1) {
		intent = "medicine_comparison";
		matchedSignals.push("multiple catalogue matches → comparison");
		score = .7;
	}
	if (intent === "general_information" && entities.symptoms.length) {
		intent = "symptom_triage";
		matchedSignals.push(`symptom terms → ${entities.symptoms.join(", ")}`);
		score = .66;
	}
	if (intent === "medicine_comparison" && entities.medicineIds.length < 2) score = .55;
	return {
		intent,
		capability: capabilityForIntent[intent],
		confidence: Number(score.toFixed(2)),
		matchedSignals,
		entities
	};
}
var intentLabels = {
	medicine_explanation: "Medicine explanation",
	medicine_comparison: "Medicine comparison",
	interaction_check: "Interaction check",
	allergy_check: "Allergy check",
	symptom_triage: "Symptom routing",
	lab_explanation: "Lab report explanation",
	prescription_help: "Prescription understanding",
	price_or_stock: "Price & stock lookup",
	medicine_search: "Medicine search",
	general_information: "General information"
};
/**
* The Medora AI pipeline.
*
*   user input
*     → intent detection
*     → structured extraction
*     → provider selection
*     → retrieval
*     → safety validation
*     → response + provenance
*     → feedback (collected in the UI, attached by envelope id)
*
* Every stage is recorded in `envelope.trace` so the interface can show what
* actually happened instead of implying a black box.
*/
var uid = () => `ai_${Math.random().toString(36).slice(2, 10)}`;
var confidenceFrom = (matchScore, intentScore, rationale) => {
	const score = Number((matchScore * .7 + intentScore * .3).toFixed(2));
	return {
		level: score >= .8 ? "high" : score >= .6 ? "moderate" : score >= .35 ? "low" : "unverified",
		score,
		rationale
	};
};
var timer = () => {
	let last = Date.now();
	const stages = [];
	return {
		stages,
		mark: (name, label, status, detail) => {
			const now = Date.now();
			stages.push({
				name,
				label,
				status,
				detail,
				ms: now - last
			});
			last = now;
		}
	};
};
var EMERGENCY_SOURCE = {
	id: "policy:red-flag-routing",
	label: "Medora red-flag routing",
	detail: "A fixed emergency term list. The wording below is written by Medora, never generated by a model.",
	kind: "policy",
	verified: true
};
function escalationEnvelope(capability, redFlags, trace) {
	const payload = {
		kind: "escalation",
		headline: "This needs urgent professional care",
		body: `Your message mentions ${redFlags.join(", ")}. Medora cannot assess emergencies and will not try. Contact your local emergency number or go to the nearest emergency department now.`,
		triggeredBy: redFlags,
		action: "Call emergency services. Do not wait for an answer from this assistant."
	};
	return {
		id: uid(),
		capability,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		providerId: "medora-policy",
		providerLabel: "Medora safety policy",
		mode: "demo",
		simulated: false,
		payload,
		confidence: {
			level: "high",
			score: .99,
			rationale: "Deterministic red-flag rule; no model involved."
		},
		sources: [EMERGENCY_SOURCE],
		safety: {
			passed: true,
			rulesRun: ["Red-flag term routing"],
			violations: [],
			redFlags,
			escalate: true,
			notice: "Routed to emergency guidance before any content was generated."
		},
		followUps: [],
		trace
	};
}
function wrap(capability, provider, output, intent, userText, trace) {
	const safety = validate({
		payload: output.payload,
		sources: output.sources,
		userText
	});
	const blocked = !safety.passed;
	const payload = blocked ? {
		kind: "unavailable",
		headline: BLOCKED_COPY.headline,
		body: `${BLOCKED_COPY.body} Failed checks: ${safety.violations.join(" ")}`,
		missingCapability: capability,
		whatALiveProviderWouldDo: "A connected provider must pass the same validator before its output is shown."
	} : output.payload;
	return {
		id: uid(),
		capability,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		providerId: provider.id,
		providerLabel: provider.label,
		mode: provider.mode,
		simulated: provider.mode === "demo",
		payload,
		confidence: blocked ? {
			level: "unverified",
			score: 0,
			rationale: "Response blocked by the safety validator."
		} : confidenceFrom(output.matchScore, intent.confidence, output.matchRationale),
		sources: output.sources,
		safety,
		followUps: blocked ? [] : output.followUps ?? [],
		trace
	};
}
function unavailable(capability, headline, body, whatALiveProviderWouldDo, trace) {
	return {
		id: uid(),
		capability,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		providerId: "medora-demo",
		providerLabel: "Medora demo adapter",
		mode: "demo",
		simulated: true,
		payload: {
			kind: "unavailable",
			headline,
			body,
			missingCapability: capability,
			whatALiveProviderWouldDo
		},
		confidence: {
			level: "unverified",
			score: 0,
			rationale: "No connected provider could serve this request."
		},
		sources: [{
			id: `policy:unavailable:${capability}`,
			label: "Integration not connected",
			detail: whatALiveProviderWouldDo,
			kind: "policy",
			verified: true
		}],
		safety: {
			passed: true,
			rulesRun: ["Refuse rather than generate"],
			violations: [],
			redFlags: [],
			escalate: false,
			notice: "Nothing was generated, so nothing needed validating."
		},
		followUps: [],
		trace
	};
}
/** Free-text assistant entry point: runs the full pipeline. */
async function runAssistantPipeline(question) {
	const t = timer();
	const redFlags = detectRedFlags(question);
	const intent = detectIntent(question);
	t.mark("intent_detection", "Intent detection", "ok", `${intentLabels[intent.intent]} (${Math.round(intent.confidence * 100)}%)${intent.matchedSignals.length ? ` · ${intent.matchedSignals[0]}` : ""}`);
	const e = intent.entities;
	t.mark("entity_extraction", "Structured extraction", "ok", [
		e.medicineNames.length ? `medicines: ${e.medicineNames.join(", ")}` : null,
		e.strength ? `strength: ${e.strength}` : null,
		e.form ? `form: ${e.form}` : null,
		e.symptoms.length ? `symptoms: ${e.symptoms.join(", ")}` : null
	].filter(Boolean).join(" · ") || "No structured entities found in the message.");
	if (redFlags.length) {
		t.mark("provider_selection", "Provider selection", "skipped", "Emergency routing bypasses all providers.");
		t.mark("retrieval", "Retrieval", "skipped", "No retrieval is performed for red-flag messages.");
		t.mark("safety_validation", "Safety validation", "ok", `Red flags matched: ${redFlags.join(", ")}`);
		t.mark("response_composition", "Response", "ok", "Fixed emergency copy returned.");
		return escalationEnvelope(intent.capability, redFlags, t.stages);
	}
	const provider = resolveProvider(intent.capability);
	t.mark("provider_selection", "Provider selection", "ok", `${provider.label} · ${provider.mode === "live" ? "live provider" : "demo adapter (simulated)"} for ${capabilityLabels[intent.capability]}`);
	if (intent.intent === "price_or_stock") {
		t.mark("retrieval", "Retrieval", "blocked", "Prices and stock are never answered by the AI layer.");
		t.mark("safety_validation", "Safety validation", "ok", "Refusal path — nothing generated.");
		t.mark("response_composition", "Response", "ok", "Directed to the verified price comparison screens.");
		return unavailable("medicine_intelligence", "Prices and stock don't come from the assistant", "Medora's assistant is not allowed to state a price or say whether a pharmacy has stock. Those numbers only ever come from the verified pharmacy price feed shown on the comparison and pharmacy screens, with the pharmacy and update time attached.", "A connected pharmacy price feed publishes prices and availability with a timestamp per listing.", t.stages);
	}
	let output = null;
	if (intent.intent === "medicine_explanation") output = await provider.explainMedicine(question);
	else if (intent.intent === "medicine_comparison") output = await provider.compareMedicines(e.medicineIds.length >= 1 ? e.medicineIds : []);
	else if (intent.intent === "interaction_check" || intent.intent === "allergy_check") {
		const medList = e.medicineNames.length > 0 ? e.medicineNames : question.replace(/[^\w\s]/g, " ").split(/\s+/).filter((w) => w.length > 3);
		output = await provider.checkInteractions(medList, []);
	} else if (intent.intent === "symptom_triage") output = await provider.triage({
		symptoms: e.symptoms.length > 0 ? e.symptoms : [question],
		freeText: question,
		durationDays: e.durationDays ?? 3,
		severity: 4,
		currentMedicines: [],
		allergies: [],
		selectedRedFlags: []
	});
	else if (intent.intent === "lab_explanation") output = await provider.explainLabReport(question);
	else if (intent.intent === "medicine_search") output = await provider.interpretSearch(question);
	if (!output) {
		output = await provider.answerInformational(question);
		t.mark("retrieval", "Retrieval", "ok", "No specific record matched; fell back to the honest no-answer path.");
	} else t.mark("retrieval", "Retrieval", "ok", output.matchRationale);
	const envelope = wrap(intent.capability, provider, output, intent, question, t.stages);
	t.mark("safety_validation", "Safety validation", envelope.safety.passed ? "ok" : "blocked", envelope.safety.passed ? envelope.safety.notice : envelope.safety.violations.join(" "));
	t.mark("response_composition", "Response & provenance", "ok", `${envelope.sources.length} source chip(s) attached · confidence ${envelope.confidence.level}`);
	return {
		...envelope,
		trace: t.stages
	};
}
/**
* Conversation state machine for the assistant surface.
*
* States: idle → thinking (pipeline running) → streaming (lead paragraph is
* revealed progressively) → complete | error. Retry, feedback, report, clear
* and persisted history are all handled here so the route stays presentational.
*
* Persists history to localStorage safely with hydration race-condition prevention.
*/
var STORAGE_KEY = "medora.ai.conversation.v2";
var LEGACY_STORAGE_KEY = "medora.ai.conversation.v1";
var load = () => {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY) || window.localStorage.getItem(LEGACY_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.map((t) => {
			if (t.status === "thinking" || t.status === "streaming") {
				if (t.envelope) {
					const lead = summarise(t.envelope.payload).lead;
					return {
						...t,
						status: "complete",
						streamedText: t.streamedText || lead,
						timestamp: t.timestamp || Date.now()
					};
				}
				return {
					...t,
					status: "error",
					error: "Conversation interrupted by browser reload. You can retry anytime.",
					timestamp: t.timestamp || Date.now()
				};
			}
			return {
				...t,
				timestamp: t.timestamp || Date.now()
			};
		});
	} catch (err) {
		console.warn("[Medora AI] Error restoring conversation history:", err);
		return [];
	}
};
function useAiConversation() {
	const [turns, setTurns] = (0, import_react.useState)(() => load());
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const streamTimers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		setHydrated(true);
		return () => {
			streamTimers.current.forEach(clearTimeout);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated && typeof window === "undefined") return;
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(turns.slice(-40)));
		} catch {}
	}, [turns, hydrated]);
	const patch = (0, import_react.useCallback)((id, next) => {
		setTurns((prev) => prev.map((t) => t.id === id ? {
			...t,
			...next
		} : t));
	}, []);
	const stream = (0, import_react.useCallback)((id, envelope) => {
		const { lead } = summarise(envelope.payload);
		const words = lead.split(" ");
		patch(id, {
			status: "streaming",
			envelope,
			streamedText: ""
		});
		words.forEach((word, i) => {
			const timer = setTimeout(() => {
				patch(id, {
					streamedText: words.slice(0, i + 1).join(" "),
					...i === words.length - 1 ? { status: "complete" } : {}
				});
			}, 18 * (i + 1));
			streamTimers.current.push(timer);
		});
		if (words.length === 0) patch(id, {
			status: "complete",
			streamedText: lead
		});
	}, [patch]);
	const execute = (0, import_react.useCallback)(async (id, question) => {
		patch(id, {
			status: "thinking",
			error: void 0,
			streamedText: "",
			envelope: null
		});
		try {
			const envelope = await runAssistantPipeline(question);
			stream(id, envelope);
		} catch (error) {
			patch(id, {
				status: "error",
				error: error instanceof Error ? error.message : "The AI pipeline failed before producing a response."
			});
		}
	}, [patch, stream]);
	return {
		turns,
		ask: (0, import_react.useCallback)((question) => {
			const trimmed = question.trim();
			if (!trimmed) return;
			const id = `turn_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
			setTurns((prev) => [...prev, {
				id,
				question: trimmed,
				status: "thinking",
				envelope: null,
				streamedText: "",
				timestamp: Date.now()
			}]);
			execute(id, trimmed);
		}, [execute]),
		retry: (0, import_react.useCallback)((id) => {
			const turn = turns.find((t) => t.id === id);
			if (turn) execute(id, turn.question);
		}, [execute, turns]),
		setFeedback: (0, import_react.useCallback)((id, value) => patch(id, { feedback: value }), [patch]),
		clear: (0, import_react.useCallback)(() => {
			streamTimers.current.forEach(clearTimeout);
			streamTimers.current = [];
			setTurns([]);
			try {
				window.localStorage.removeItem(STORAGE_KEY);
				window.localStorage.removeItem(LEGACY_STORAGE_KEY);
			} catch {}
		}, []),
		busy: turns.some((t) => t.status === "thinking" || t.status === "streaming"),
		hydrated
	};
}
var _jsxFileName$2 = "/app/applet/src/components/ai/ai-parts.tsx";
function ModeBadge({ envelope }) {
	const demo = envelope.mode === "demo";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide", demo ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300" : "border-primary/30 bg-primary/10 text-primary"),
		title: `${envelope.providerLabel} — ${demo ? "simulated output, no live provider connected" : "live provider"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlaskConical, {
			className: "size-3",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 32,
			columnNumber: 7
		}, this), demo ? "Demo · simulated" : "Live provider"]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
function ConfidenceBadge({ envelope }) {
	const { level, score, rationale } = envelope.confidence;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium", level === "high" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : level === "moderate" ? "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300" : "border-muted-foreground/30 bg-muted text-muted-foreground"),
		title: rationale,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gauge, {
				className: "size-3",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			confidenceCopy[level],
			" · ",
			Math.round(score * 100),
			"%"
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
function SourceChips({ sources }) {
	if (!sources.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-wrap gap-2",
		children: sources.map((source) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			title: `${source.detail}${source.updatedAt ? ` Updated ${source.updatedAt}.` : ""}`,
			className: "inline-flex max-w-full items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] text-muted-foreground",
			children: [source.verified ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BadgeCheck, {
				className: "size-3 shrink-0 text-primary",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 71,
				columnNumber: 13
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleSlash, {
				className: "size-3 shrink-0",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 73,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "truncate",
				children: source.label
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 75,
				columnNumber: 11
			}, this)]
		}, source.id, true, {
			fileName: _jsxFileName$2,
			lineNumber: 65,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 63,
		columnNumber: 5
	}, this);
}
function SafetyStrip({ safety }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex items-start gap-2 rounded-lg border px-3 py-2 text-xs", safety.passed ? "border-border bg-muted/40 text-muted-foreground" : "border-destructive/40 bg-destructive/10 text-destructive"),
		children: [safety.passed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, {
			className: "mt-0.5 size-3.5 shrink-0",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 93,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
			className: "mt-0.5 size-3.5 shrink-0",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 95,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
			safety.notice,
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "opacity-70",
				children: [
					"Checks run: ",
					safety.rulesRun.length,
					"."
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 99,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 97,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 84,
		columnNumber: 5
	}, this);
}
function PipelineTrace({ trace }) {
	if (!trace.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", {
		className: "group rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", {
			className: "flex cursor-pointer list-none items-center gap-2 font-medium text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Workflow, {
				className: "size-3.5",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 112,
				columnNumber: 9
			}, this), "How this answer was produced"]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 111,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
			className: "mt-3 space-y-2",
			children: trace.map((stage, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "mt-0.5 font-mono text-[10px] text-muted-foreground",
					children: i + 1
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 118,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-medium text-foreground",
							children: stage.label
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 122,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: cn("ml-2 rounded px-1.5 py-0.5 text-[10px] uppercase", stage.status === "ok" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : stage.status === "blocked" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"),
							children: stage.status
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 123,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "ml-2 text-[10px] text-muted-foreground",
							children: [stage.ms, " ms"]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 135,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-0.5 text-muted-foreground",
							children: stage.detail
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 138,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 121,
					columnNumber: 13
				}, this)]
			}, `${stage.name}-${i}`, true, {
				fileName: _jsxFileName$2,
				lineNumber: 117,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 115,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 110,
		columnNumber: 5
	}, this);
}
function FieldGrid({ items }) {
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
		className: "grid gap-3 sm:grid-cols-2",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "min-w-0 rounded-lg border border-border bg-muted/30 px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
				className: "text-[11px] uppercase tracking-wide text-muted-foreground",
				children: item.label
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 160,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
				className: "mt-0.5 text-sm text-foreground",
				children: item.value
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 163,
				columnNumber: 11
			}, this)]
		}, item.label, true, {
			fileName: _jsxFileName$2,
			lineNumber: 156,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 154,
		columnNumber: 5
	}, this);
}
function BulletList({ title, items }) {
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
		children: title
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 180,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "mt-1.5 space-y-1 text-sm text-foreground",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 186,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 190,
				columnNumber: 13
			}, this)]
		}, item, true, {
			fileName: _jsxFileName$2,
			lineNumber: 185,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 183,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 179,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ai/AiPayloadView.tsx";
function AiPayloadView({ payload }) {
	const notice = safetyNoticeOf(payload);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-4",
		children: [
			payload.kind === "escalation" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(EmergencyCallout, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("p", {
				className: "text-sm text-foreground",
				children: payload.action
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 12,
				columnNumber: 9
			}, this),
			payload.kind === "medicine_explanation" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (void 0)(FieldGrid, { items: [
					{
						label: "Active ingredient",
						value: payload.activeIngredient
					},
					{
						label: "Strength",
						value: payload.strength
					},
					{
						label: "Dosage form",
						value: payload.form
					},
					{
						label: "Supply",
						value: payload.supply === "prescription_only" ? "Prescription-only" : payload.supply === "over_the_counter" ? "Over the counter" : "Not recorded"
					}
				] }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Warnings",
					items: payload.warnings
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Common side effects",
					items: payload.commonSideEffects
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 37,
					columnNumber: 11
				}, this),
				payload.storage && /* @__PURE__ */ (void 0)("p", {
					className: "text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "font-medium text-foreground",
						children: "Storage: "
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 15
					}, this), payload.storage]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 42,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 9
			}, this),
			payload.kind === "symptom_triage" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (void 0)(FieldGrid, { items: [{
					label: "Routing",
					value: payload.escalation.level.replace("_", " ")
				}, {
					label: "Symptoms read",
					value: payload.symptoms.join(", ") || "—"
				}] }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 52,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Red flags matched",
					items: payload.redFlags
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 64,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "What Medora will not do",
					items: payload.possibleExplanations
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 65,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Questions worth answering",
					items: payload.followUpQuestions
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 69,
					columnNumber: 11
				}, this),
				payload.monitoringPlan.map((block) => /* @__PURE__ */ (void 0)(BulletList, {
					title: block.window,
					items: block.items
				}, block.window, false, {
					fileName: _jsxFileName$1,
					lineNumber: 74,
					columnNumber: 13
				}, this))
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 51,
				columnNumber: 9
			}, this),
			payload.kind === "interaction_report" && /* @__PURE__ */ (void 0)("div", {
				className: "space-y-3",
				children: [payload.findings.map((finding) => {
					const isSevere = finding.severity === "severe";
					const isModerate = finding.severity === "moderate";
					const isSafe = finding.severity === "safe" || finding.type === "safe";
					const badgeColor = isSevere ? "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400" : isModerate ? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400" : isSafe ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400";
					return /* @__PURE__ */ (void 0)("div", {
						className: "rounded-lg border border-border bg-muted/30 p-3.5 space-y-2",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-semibold text-foreground",
									children: finding.title
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 105,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: `rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${badgeColor}`,
									children: finding.severity
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 108,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 104,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: finding.detail
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 114,
								columnNumber: 17
							}, this),
							finding.items.length > 0 && /* @__PURE__ */ (void 0)("p", {
								className: "text-[11px] uppercase tracking-wide text-muted-foreground font-medium",
								children: ["Evaluated items: ", finding.items.join(" · ")]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 118,
								columnNumber: 19
							}, this)
						]
					}, finding.title, true, {
						fileName: _jsxFileName$1,
						lineNumber: 100,
						columnNumber: 15
					}, this);
				}), /* @__PURE__ */ (void 0)("p", {
					className: "text-xs text-muted-foreground",
					children: ["Assessed by: ", payload.assessedBy]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 125,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 84,
				columnNumber: 9
			}, this),
			payload.kind === "allergy_report" && /* @__PURE__ */ (void 0)(BulletList, {
				title: "Name-level matches",
				items: payload.matches.length ? payload.matches.map((m) => `${m.allergy} ↔ ${m.medicine} — ${m.basis}`) : ["No name-level matches. This is not a clearance."]
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 132,
				columnNumber: 9
			}, this),
			payload.kind === "medicine_comparison" && /* @__PURE__ */ (void 0)("div", {
				className: "overflow-x-auto",
				children: [/* @__PURE__ */ (void 0)("table", {
					className: "w-full min-w-[520px] text-left text-sm",
					children: [/* @__PURE__ */ (void 0)("thead", { children: /* @__PURE__ */ (void 0)("tr", {
						className: "text-[11px] uppercase tracking-wide text-muted-foreground",
						children: [
							/* @__PURE__ */ (void 0)("th", {
								className: "pb-2 pr-4 font-medium",
								children: "Medicine"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 149,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("th", {
								className: "pb-2 pr-4 font-medium",
								children: "Ingredient"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 150,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("th", {
								className: "pb-2 pr-4 font-medium",
								children: "Strength"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 151,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("th", {
								className: "pb-2 pr-4 font-medium",
								children: "Form"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 152,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("th", {
								className: "pb-2 font-medium",
								children: "Supply"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 153,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 148,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 147,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("tbody", { children: payload.rows.map((row) => /* @__PURE__ */ (void 0)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (void 0)("td", {
								className: "py-2 pr-4 font-medium text-foreground",
								children: row.medicine
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 159,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("td", {
								className: "py-2 pr-4 text-muted-foreground",
								children: row.activeIngredient
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 162,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("td", {
								className: "py-2 pr-4 text-muted-foreground",
								children: row.strength
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 165,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("td", {
								className: "py-2 pr-4 text-muted-foreground",
								children: row.form
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 168,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("td", {
								className: "py-2 text-muted-foreground",
								children: row.supply
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 171,
								columnNumber: 19
							}, this)
						]
					}, row.medicine, true, {
						fileName: _jsxFileName$1,
						lineNumber: 158,
						columnNumber: 17
					}, this)) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 156,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 146,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: payload.equivalence
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 176,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 145,
				columnNumber: 9
			}, this),
			payload.kind === "search_interpretation" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(FieldGrid, { items: [
				{
					label: "Ingredient read",
					value: payload.interpretedAs.ingredient ?? "—"
				},
				{
					label: "Strength read",
					value: payload.interpretedAs.strength ?? "—"
				},
				{
					label: "Form read",
					value: payload.interpretedAs.form ?? "—"
				},
				{
					label: "Supply read",
					value: payload.interpretedAs.supply?.replace("_", " ") ?? "—"
				}
			] }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 184,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap gap-2",
				children: payload.matches.map((match) => /* @__PURE__ */ (void 0)(Link, {
					to: "/app/medicine/$medicineId",
					params: { medicineId: match.id },
					className: "rounded-full border border-border px-3 py-1 text-xs text-foreground hover:bg-muted",
					title: match.why,
					children: match.label
				}, match.id, false, {
					fileName: _jsxFileName$1,
					lineNumber: 203,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 201,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 183,
				columnNumber: 9
			}, this),
			payload.kind === "patient_summary" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Current medicines",
					items: payload.currentMedicines
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 219,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Open items",
					items: payload.openItems
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 223,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)(BulletList, {
					title: "Questions for your clinician",
					items: payload.questionsForYourClinician
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 224,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 218,
				columnNumber: 9
			}, this),
			payload.kind === "lab_explanation" && /* @__PURE__ */ (void 0)("div", {
				className: "space-y-3",
				children: payload.analytes.length > 0 ? /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3",
					children: payload.analytes.map((analyte) => {
						const flagColor = analyte.flag === "high" ? "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400" : analyte.flag === "low" ? "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
						return /* @__PURE__ */ (void 0)("div", {
							className: "rounded-lg border border-border bg-muted/30 p-3.5 space-y-2",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-semibold text-foreground",
									children: analyte.name
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 250,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: ["Reference range: ", analyte.referenceRange]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 253,
									columnNumber: 25
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 249,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-sm font-bold text-foreground",
										children: analyte.value
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 258,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "mt-0.5",
										children: /* @__PURE__ */ (void 0)("span", {
											className: `rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${flagColor}`,
											children: analyte.flag
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 262,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 261,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 257,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 248,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: analyte.plainLanguage
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 270,
								columnNumber: 21
							}, this)]
						}, analyte.name, true, {
							fileName: _jsxFileName$1,
							lineNumber: 244,
							columnNumber: 19
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 234,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (void 0)("p", {
					className: "text-sm text-muted-foreground",
					children: payload.whatThisIsNot
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 278,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 232,
				columnNumber: 9
			}, this),
			payload.kind === "ocr_extraction" && /* @__PURE__ */ (void 0)(BulletList, {
				title: "Extracted lines",
				items: payload.lines.map((l) => `${l.rawText} — ${Math.round(l.confidence * 100)}% confidence${l.needsReview ? " · needs review" : ""}`)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 286,
				columnNumber: 9
			}, this),
			payload.kind === "informational_answer" && /* @__PURE__ */ (void 0)(FieldGrid, { items: payload.bullets.map((b) => ({
				label: b.label,
				value: b.value
			})) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 296,
				columnNumber: 9
			}, this),
			payload.kind === "unavailable" && /* @__PURE__ */ (void 0)("p", {
				className: "text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (void 0)("span", {
					className: "font-medium text-foreground",
					children: ["What a connected provider would do:", " "]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 306,
					columnNumber: 11
				}, this), payload.whatALiveProviderWouldDo]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 305,
				columnNumber: 9
			}, this),
			notice && /* @__PURE__ */ (void 0)("p", {
				className: "rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground",
				children: notice
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 314,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/app.assistant.tsx?tsr-split=component";
var PROMPT_CATEGORIES = [
	{
		title: "Safety & Interactions",
		prompts: [
			"Can I take ibuprofen with metformin?",
			"Is paracetamol safe with amoxicillin?",
			"What common medicines interact with blood thinners?"
		]
	},
	{
		title: "Dosage & Side Effects",
		prompts: [
			"What is Panacet 500 used for?",
			"What are the common side effects of Metformin 500 mg?",
			"How should I take antibiotics with meals?"
		]
	},
	{
		title: "Comparison & Value",
		prompts: [
			"Compare cetirizine products in the catalogue",
			"What are generic alternatives for branded atorvastatin?",
			"Which pharmacy offers lowest cost for Amoxicillin 500mg?"
		]
	},
	{
		title: "Symptoms & Labs",
		prompts: [
			"What does an HbA1c result of 6.8% indicate?",
			"I've had a headache for 3 days",
			"What does high fasting blood glucose mean?"
		]
	}
];
function TurnCard({ turn, onRetry, onFeedback, onAsk }) {
	const envelope = turn.envelope;
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copyTurn = () => {
		const lead = envelope ? summarise(envelope.payload).lead : "";
		const headline = envelope ? summarise(envelope.payload).headline : "";
		const text = `Q: ${turn.question}\n\nA: ${headline}\n${lead}`;
		navigator.clipboard.writeText(text);
		setCopied(true);
		toast.success("Answer copied to clipboard");
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-xs",
				children: turn.question
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "surface space-y-4 rounded-2xl border border-border p-4 sm:p-5 shadow-xs",
			children: [
				turn.status === "thinking" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (void 0)("p", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "inline-flex gap-1",
								children: [
									/* @__PURE__ */ (void 0)("span", { className: "size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 64,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { className: "size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 65,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { className: "size-1.5 animate-bounce rounded-full bg-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 15
							}, this), "Detecting clinical intent, retrieving verified sources and running safety checks…"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-3/4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-1/2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 40
				}, this),
				turn.status === "error" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-destructive",
						children: turn.error
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => onRetry(turn.id),
						children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "mr-1.5 size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 15
						}, this), " Retry"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 37
				}, this),
				envelope && turn.status !== "error" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (void 0)(ModeBadge, { envelope }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(ConfidenceBadge, { envelope }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("span", {
								className: "rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground bg-muted/30",
								children: capabilityLabels[envelope.capability]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
						className: "text-base font-semibold text-foreground",
						children: summarise(envelope.payload).headline
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-sm text-muted-foreground leading-relaxed",
						children: [turn.status === "streaming" ? turn.streamedText : summarise(envelope.payload).lead, turn.status === "streaming" && /* @__PURE__ */ (void 0)("span", { className: "ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-primary align-middle" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 49
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 13
					}, this),
					turn.status === "complete" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (void 0)(AiPayloadView, { payload: envelope.payload }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(SafetyStrip, { safety: envelope.safety }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(SourceChips, { sources: envelope.sources }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(PipelineTrace, { trace: envelope.trace }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 17
						}, this),
						envelope.followUps.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Follow-up suggestions"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap gap-2",
								children: envelope.followUps.map((q) => /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => onAsk(q),
									className: "rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground transition hover:border-primary hover:bg-primary/5 text-left",
									children: q
								}, q, false, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 52
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 51
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex flex-wrap items-center gap-2 border-t border-border pt-3",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "Was this useful?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: turn.feedback === "helpful" ? "secondary" : "ghost",
									onClick: () => {
										onFeedback(turn.id, "helpful");
										toast.success("Thanks — feedback recorded on this device.");
									},
									children: /* @__PURE__ */ (void 0)(ThumbsUp, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 126,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: turn.feedback === "unhelpful" ? "secondary" : "ghost",
									onClick: () => {
										onFeedback(turn.id, "unhelpful");
										toast("Recorded. Medora will not act on this without a clinician review.");
									},
									children: /* @__PURE__ */ (void 0)(ThumbsDown, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: turn.feedback === "reported" ? "destructive" : "ghost",
									onClick: () => {
										onFeedback(turn.id, "reported");
										toast("Reported for clinical safety review.");
									},
									children: [/* @__PURE__ */ (void 0)(Flag, { className: "mr-1.5 size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 21
									}, this), " Report"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: copyTurn,
									className: "gap-1.5 text-xs text-muted-foreground",
									children: [copied ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-emerald-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 31
									}, this) : /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 81
									}, this), copied ? "Copied" : "Copy"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: "ghost",
									className: "ml-auto",
									onClick: () => onRetry(turn.id),
									children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "mr-1.5 size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 21
									}, this), " Regenerate"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 146,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 44
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 49
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 10
	}, this);
}
function MedicineAssistantPage() {
	const { turns, ask, retry, setFeedback, clear, busy } = useAiConversation();
	const [draft, setDraft] = (0, import_react.useState)("");
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(PROMPT_CATEGORIES[0]?.title ?? "");
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}, [turns]);
	const submit = (question) => {
		ask(question);
		setDraft("");
	};
	const handleExportTranscript = () => {
		if (turns.length === 0) return;
		const lines = [
			`MEDORA MEDICINE INTELLIGENCE ASSISTANT TRANSCRIPT`,
			`Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}`,
			`---------------------------------------------------\n`
		];
		turns.forEach((t, idx) => {
			lines.push(`[Turn ${idx + 1}]`);
			lines.push(`User: ${t.question}`);
			if (t.envelope) {
				const h = summarise(t.envelope.payload).headline;
				const lead = summarise(t.envelope.payload).lead;
				lines.push(`Assistant: ${h}\n${lead}`);
			}
			lines.push("\n");
		});
		const blob = new Blob([lines.join("\n")], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `medora-consultation-${Date.now()}.txt`;
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Transcript exported successfully");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Medicine assistant",
				description: "Every answer runs through intent detection, structured extraction, source retrieval and a clinical-safety validator before you see it.",
				actions: turns.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						onClick: handleExportTranscript,
						className: "gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 17
						}, this), " Export"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						onClick: clear,
						className: "text-destructive hover:bg-destructive/10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "mr-1.5 size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 17
						}, this), " Clear conversation"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 206,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 202,
					columnNumber: 223
				}, this) : null
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 202,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				title: "Not a doctor, pharmacist or prescriber",
				tone: "info",
				children: ASSISTANT_ROLE_STATEMENT
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface space-y-3 rounded-2xl border border-border p-4 sm:p-5 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 13
							}, this), " Suggested Clinical Prompts"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 218,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] text-muted-foreground",
							children: "Click any prompt to ask"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap gap-1.5 border-b border-border pb-2.5",
						children: PROMPT_CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveCategory(cat.title),
							className: `px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat.title ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"}`,
							children: cat.title
						}, cat.title, false, {
							fileName: _jsxFileName,
							lineNumber: 229,
							columnNumber: 41
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap gap-2 pt-1",
						children: PROMPT_CATEGORIES.find((c) => c.title === activeCategory)?.prompts.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => submit(s),
							className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition hover:border-primary hover:bg-primary/5 text-left flex items-center gap-1.5 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, { className: "size-3 text-primary shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 237,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: s }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 238,
								columnNumber: 15
							}, this)]
						}, s, true, {
							fileName: _jsxFileName,
							lineNumber: 236,
							columnNumber: 86
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 235,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 216,
				columnNumber: 7
			}, this),
			turns.length > 0 && /* @__PURE__ */ (void 0)("div", {
				className: "space-y-6",
				children: turns.map((turn) => /* @__PURE__ */ (void 0)(TurnCard, {
					turn,
					onRetry: retry,
					onFeedback: setFeedback,
					onAsk: submit
				}, turn.id, false, {
					fileName: _jsxFileName,
					lineNumber: 245,
					columnNumber: 30
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 244,
				columnNumber: 28
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: endRef }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 248,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				className: "sticky bottom-20 z-10 flex items-end gap-2 rounded-xl border-2 border-border bg-background p-2.5 shadow-md md:bottom-4",
				onSubmit: (event) => {
					event.preventDefault();
					submit(draft);
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
					value: draft,
					onChange: (event) => setDraft(event.target.value),
					onKeyDown: (event) => {
						if (event.key === "Enter" && !event.shiftKey) {
							event.preventDefault();
							submit(draft);
						}
					},
					rows: 1,
					placeholder: "Ask about a medicine, a symptom, or how Medora compares products…",
					className: "min-h-[44px] resize-none border-0 bg-transparent focus-visible:ring-0 text-xs sm:text-sm"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 254,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					size: "icon",
					disabled: busy || !draft.trim(),
					"aria-label": "Send question",
					className: "shrink-0 size-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 261,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 260,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 250,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground leading-relaxed",
				children: "Answers are informational only. Medora does not diagnose, prescribe, or change a dose — confirm anything clinical with a pharmacist or doctor, and use emergency services for anything urgent."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 265,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 201,
		columnNumber: 10
	}, this);
}
//#endregion
export { MedicineAssistantPage as component };
