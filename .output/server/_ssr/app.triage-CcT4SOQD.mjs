import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Stethoscope } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, m as cn, r as settle } from "./router-DnzDjJrL2.mjs";
import { a as EmergencyCallout, f as SafetyNotice, l as PageHeader, n as Badge, r as ClinicalDisclaimer, s as IntegrationNotConnected } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { t as Checkbox } from "./checkbox-BTQWJrf_.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.triage-CcT4SOQD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/slider.tsx";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderRange, { className: "absolute h-full bg-primary" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 19,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 21,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Slider.displayName = Slider$1.displayName;
var RED_FLAG_TERMS = [
	"chest pain",
	"difficulty breathing",
	"can't breathe",
	"cannot breathe",
	"shortness of breath",
	"unconscious",
	"fainting",
	"severe bleeding",
	"suicide",
	"stroke",
	"seizure",
	"anaphylaxis",
	"swollen tongue",
	"overdose",
	"blue lips"
];
var detectRedFlag = (text) => RED_FLAG_TERMS.filter((t) => text.toLowerCase().includes(t));
var runTriage = async (input) => {
	if (input.redFlags.length > 0 || detectRedFlag(input.freeText).length > 0) return settle({
		urgency: "emergency",
		headline: "Seek emergency care now",
		summary: "You selected or described one or more warning signs that Medora routes straight to emergency care. This tool cannot assess them.",
		possibleExplanations: [],
		monitorFor: [],
		seekCareIf: ["Immediately — call your local emergency number or go to an emergency department."],
		monitoringPlan: [],
		escalate: true
	});
	const days = Number(input.durationDays) || 0;
	const urgency = input.severity >= 8 || days > 14 ? "same_day" : input.severity >= 5 || days > 5 ? "routine" : "self_monitor";
	return settle({
		urgency,
		headline: urgency === "same_day" ? "Speak to a clinician today" : urgency === "routine" ? "Book a routine appointment" : "Monitor at home for now",
		summary: urgency === "same_day" ? "Based on the severity and duration you entered, Medora suggests speaking to a clinician today. This is a routing suggestion, not a diagnosis." : urgency === "routine" ? "Based on what you entered, a non-urgent appointment with a clinician or a pharmacist conversation is reasonable. This is a routing suggestion, not a diagnosis." : "What you entered does not match Medora's escalation rules. You can monitor at home and seek care if anything changes. This is a routing suggestion, not a diagnosis.",
		possibleExplanations: ["Medora does not produce a list of candidate conditions. Naming possible conditions from a symptom form is diagnosis, and this tool is not a diagnostic device.", "A clinician can interpret your symptoms alongside your history, examination and, if needed, tests."],
		monitorFor: [
			"Symptoms getting noticeably worse rather than steady or better",
			"A new symptom appearing that you did not have when you filled this in",
			"Anything on the emergency warning-sign list appearing at any point",
			"Difficulty keeping fluids down, or being unable to do your normal daily activities"
		],
		seekCareIf: [
			"Any emergency warning sign appears — do not use this tool, seek emergency care",
			`Your symptoms last longer than ${Math.max(days + 2, 3)} days in total without improving`,
			"You are pregnant, immunosuppressed, or managing a long-term condition and feel unwell",
			"You are unsure whether a medicine you already take is affecting how you feel"
		],
		monitoringPlan: [{
			day: "Next 24 hours",
			items: [
				"Write down your symptoms, the time they change, and your temperature if you can measure it",
				"Rest and keep up your normal fluids unless a clinician has told you otherwise",
				"Do not start any new medicine based on this output — ask a pharmacist or doctor first"
			]
		}, {
			day: "24–48 hours",
			items: [
				"Compare your notes with yesterday: better, the same, or worse?",
				"If the same or worse, contact a clinician or pharmacist and share your notes",
				"Keep taking any medicine already prescribed to you exactly as your prescriber instructed"
			]
		}],
		escalate: false
	}, 700);
};
var _jsxFileName = "/app/applet/src/routes/app.triage.tsx?tsr-split=component";
var commonSymptoms = [
	"Fever",
	"Cough",
	"Headache",
	"Sore throat",
	"Nausea",
	"Abdominal pain",
	"Rash",
	"Fatigue"
];
var redFlagOptions = [
	"Chest pain or pressure",
	"Difficulty breathing",
	"Fainting or unresponsiveness",
	"Severe bleeding",
	"Sudden weakness or slurred speech",
	"Swollen tongue or lips"
];
var urgencyTone = {
	emergency: {
		label: "Emergency",
		cls: "border-destructive/40 bg-destructive-soft text-destructive"
	},
	same_day: {
		label: "Same-day care",
		cls: "border-warning/40 bg-warning-soft text-warning-foreground"
	},
	routine: {
		label: "Routine appointment",
		cls: "border-primary/30 bg-primary-soft text-primary"
	},
	self_monitor: {
		label: "Monitor at home",
		cls: "border-success/35 bg-success-soft text-success"
	}
};
function TriagePage() {
	const { state } = useStore();
	const [symptoms, setSymptoms] = (0, import_react.useState)([]);
	const [freeText, setFreeText] = (0, import_react.useState)("");
	const [durationDays, setDurationDays] = (0, import_react.useState)("2");
	const [severity, setSeverity] = (0, import_react.useState)(4);
	const [redFlags, setRedFlags] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const toggle = (list, value, set) => set(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
	const submit = async () => {
		if (symptoms.length === 0 && !freeText.trim() && redFlags.length === 0) {
			toast.error("Select at least one symptom or describe what you feel.");
			return;
		}
		setLoading(true);
		const res = await runTriage({
			symptoms,
			freeText,
			durationDays,
			severity,
			ageBand: state.profile.ageBand,
			currentMedicines: state.profile.currentMedicines,
			allergies: state.profile.allergies,
			redFlags,
			pregnancy: state.profile.pregnancyStatus
		});
		setResult(res);
		setLoading(false);
		if (res.escalate) toast.warning("Warning signs selected — seek emergency care now.");
		else toast.success("Routing suggestion ready.");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Symptom check",
				demo: true,
				description: "Medora suggests where to seek care and what to watch for. It never names a condition, and it is not a diagnostic device."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmergencyCallout, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]",
				onSubmit: (e) => {
					e.preventDefault();
					submit();
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
						className: "surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
								className: "px-1 text-sm font-semibold text-ink",
								children: "What are you noticing?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: commonSymptoms.map((s) => {
									const active = symptoms.includes(s);
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										"aria-pressed": active,
										onClick: () => toggle(symptoms, s, setSymptoms),
										className: active ? "rounded-full border border-primary bg-primary-soft px-3 py-1.5 text-sm font-medium text-primary" : "rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong",
										children: s
									}, s, false, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 22
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "triage-text",
									children: "Describe it in your own words"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									id: "triage-text",
									rows: 3,
									className: "mt-2 resize-none",
									value: freeText,
									onChange: (e) => setFreeText(e.target.value),
									placeholder: "When it started, what makes it better or worse, anything unusual."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
						className: "surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
								className: "px-1 text-sm font-semibold text-ink",
								children: "Warning signs"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "If any of these apply, Medora stops and routes you straight to emergency care."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3 grid gap-2.5 sm:grid-cols-2",
								children: redFlagOptions.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "flex items-start gap-2.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
										checked: redFlags.includes(f),
										onCheckedChange: () => toggle(redFlags, f, setRedFlags),
										"aria-label": f
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: f }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 19
									}, this)]
								}, f, true, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 40
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
						className: "surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
							className: "px-1 text-sm font-semibold text-ink",
							children: "Context"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "triage-days",
									children: "How many days has this lasted?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "triage-days",
									type: "number",
									min: 0,
									max: 365,
									className: "mt-2",
									value: durationDays,
									onChange: (e) => setDurationDays(e.target.value)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "triage-severity",
									children: [
										"How severe does it feel? (",
										severity,
										"/10)"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slider, {
									id: "triage-severity",
									className: "mt-3",
									min: 1,
									max: 10,
									step: 1,
									value: [severity],
									onValueChange: (v) => setSeverity(v[0] ?? 1)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-md border border-border bg-secondary/60 p-3 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-medium text-foreground",
											children: "Used from your health profile"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-1",
											children: ["Age band ", state.profile.ageBand]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
											"Allergies:",
											" ",
											state.profile.allergies.join(", ") || "none recorded"
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 140,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
											"Medicines:",
											" ",
											state.profile.currentMedicines.join(", ") || "none recorded"
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 144,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/app/settings",
											className: "mt-2 inline-block font-medium text-primary underline",
											children: "Update health profile"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						className: "w-full",
						disabled: loading,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stethoscope, {
							className: "size-4",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 13
						}, this), loading ? "Working through your answers…" : "Get a routing suggestion"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			loading && /* @__PURE__ */ (void 0)("div", {
				className: "surface space-y-3 p-5",
				children: [
					/* @__PURE__ */ (void 0)(Skeleton, { className: "h-6 w-1/3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-full" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-4/5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 19
			}, this),
			!loading && result && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-5",
				"aria-live": "polite",
				children: [
					result.escalate && /* @__PURE__ */ (void 0)(EmergencyCallout, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 169,
						columnNumber: 31
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "surface p-5",
						children: [
							/* @__PURE__ */ (void 0)(Badge, {
								variant: "outline",
								className: urgencyTone[result.urgency].cls,
								children: urgencyTone[result.urgency].label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("h2", {
								className: "mt-3 text-xl font-bold",
								children: result.headline
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 174,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-2 text-sm leading-relaxed text-foreground/90",
								children: result.summary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 175,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 170,
						columnNumber: 11
					}, this),
					result.possibleExplanations.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "surface p-5",
						children: [/* @__PURE__ */ (void 0)("h3", {
							className: "text-sm font-semibold text-ink",
							children: "Why Medora does not name a condition"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("ul", {
							className: "mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground",
							children: result.possibleExplanations.map((p) => /* @__PURE__ */ (void 0)("li", { children: p }, p, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 55
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 54
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "grid gap-5 md:grid-cols-2",
						children: [result.monitorFor.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "surface p-5",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "text-sm font-semibold text-ink",
								children: "Watch for"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("ul", {
								className: "mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground",
								children: result.monitorFor.map((m) => /* @__PURE__ */ (void 0)("li", { children: m }, m, false, {
									fileName: _jsxFileName,
									lineNumber: 193,
									columnNumber: 47
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 46
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "surface p-5",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "text-sm font-semibold text-ink",
								children: "Seek care if"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("ul", {
								className: "mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground",
								children: result.seekCareIf.map((m) => /* @__PURE__ */ (void 0)("li", { children: m }, m, false, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 45
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 198,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this),
					result.monitoringPlan.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "surface p-5",
						children: [/* @__PURE__ */ (void 0)("h3", {
							className: "text-sm font-semibold text-ink",
							children: "A simple monitoring plan"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("ol", {
							className: "mt-3 space-y-4",
							children: result.monitoringPlan.map((step) => /* @__PURE__ */ (void 0)("li", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-primary",
								children: step.day
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 210,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("ul", {
								className: "mt-1.5 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
								children: step.items.map((i) => /* @__PURE__ */ (void 0)("li", { children: i }, i, false, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 44
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 21
							}, this)] }, step.day, true, {
								fileName: _jsxFileName,
								lineNumber: 209,
								columnNumber: 52
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 48
					}, this),
					/* @__PURE__ */ (void 0)(SafetyNotice, {
						tone: "warning",
						title: "This is a routing suggestion, not a diagnosis",
						children: "Medora cannot examine you. If you feel worse, or you are unsure, contact a clinician."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 168,
				columnNumber: 30
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationNotConnected, { integration: "assistant" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 226,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 227,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 10
	}, this);
}
//#endregion
export { TriagePage as component };
