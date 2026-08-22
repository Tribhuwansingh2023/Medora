import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore } from "./router-DnzDjJrL.mjs";
import { C as Sparkles, Ct as Funnel, G as Pill, H as Printer, N as Search, Nt as Download, O as ShieldCheck, R as RotateCcw, S as Stethoscope, U as Plus, Wt as CircleCheck, f as TriangleAlert, h as Trash2, hn as ArrowRightLeft, ht as Layers, i as X, k as ShieldAlert, o as Utensils } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as demoMedicines, f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { f as SafetyNotice, i as DemoBadge, n as Badge, r as ClinicalDisclaimer } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { i as findDrugProfile, r as analyzeDrugList } from "./clinical-interactions-CnNNlfp5.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.interactions-B2tLQ4Fm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/clinical/DrugInteractionComparison.tsx";
var PRESET_COMBOS = [
	{
		name: "Diabetes + Pain Caution",
		description: "Metformin + Ibuprofen (Renal clearance check)",
		meds: ["Metformin hydrochloride", "Ibuprofen"]
	},
	{
		name: "Cardiovascular Stack",
		description: "Aspirin + Ibuprofen (Antiplatelet competition)",
		meds: [
			"Aspirin",
			"Ibuprofen",
			"Atorvastatin"
		]
	},
	{
		name: "Duplicate Cold/Flu Risk",
		description: "Panacet 500 + Feverol (Accidental paracetamol doubling)",
		meds: ["Panacet 500", "Feverol"]
	},
	{
		name: "Respiratory & Allergy Duo",
		description: "Salbutamol + Cetirizine (Safe bronchial co-management)",
		meds: ["Salbutamol", "Cetirizine hydrochloride"]
	}
];
function DrugInteractionComparisonDashboard() {
	const { state } = useStore();
	const [selectedMeds, setSelectedMeds] = (0, import_react.useState)(["Metformin hydrochloride 500 mg", "Ibuprofen"]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedSideEffectFilter, setSelectedSideEffectFilter] = (0, import_react.useState)("all");
	const [reportOpen, setReportOpen] = (0, import_react.useState)(false);
	const suggestions = searchQuery.trim() ? [
		...demoMedicines.map((m) => m.brandName),
		...demoMedicines.map((m) => m.genericName),
		"Aspirin",
		"Atorvastatin",
		"Ibuprofen",
		"Paracetamol"
	].filter((name, idx, self) => self.indexOf(name) === idx).filter((name) => name.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedMeds.some((m) => m.toLowerCase().includes(name.toLowerCase()))).slice(0, 6) : [];
	const addMedicine = (name) => {
		const trimmed = name.trim();
		if (!trimmed) return;
		if (selectedMeds.some((m) => m.toLowerCase() === trimmed.toLowerCase())) {
			toast.error("Medicine is already in your comparison deck.");
			return;
		}
		if (selectedMeds.length >= 6) {
			toast.error("Maximum 6 medications can be compared at once.");
			return;
		}
		setSelectedMeds((prev) => [...prev, trimmed]);
		setSearchQuery("");
		toast.success(`Added ${trimmed} to interaction analysis.`);
	};
	const removeMedicine = (index) => {
		setSelectedMeds((prev) => prev.filter((_, i) => i !== index));
	};
	const resetToProfile = () => {
		if (state.profile.currentMedicines.length) {
			setSelectedMeds([...state.profile.currentMedicines]);
			toast.success("Loaded current medications from your profile.");
		} else {
			setSelectedMeds(["Paracetamol", "Ibuprofen"]);
			toast.info("No current medications in profile; reset to sample pair.");
		}
	};
	const analysis = analyzeDrugList(selectedMeds, state.profile.allergies);
	const getScoreColor = (score) => {
		if (score >= 85) return "text-emerald-600 dark:text-emerald-400";
		if (score >= 65) return "text-amber-600 dark:text-amber-400";
		return "text-destructive";
	};
	const getScoreBadge = (score) => {
		if (score >= 85) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
			className: "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-500/30",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3 mr-1 inline" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 158,
				columnNumber: 11
			}, this), " Clean Profile"]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 157,
			columnNumber: 9
		}, this);
		if (score >= 65) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
			className: "bg-amber-500/15 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-500/30",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "size-3 mr-1 inline" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 164,
				columnNumber: 11
			}, this), " Requires Review"]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 163,
			columnNumber: 9
		}, this);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
			variant: "destructive",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, { className: "size-3 mr-1 inline" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 169,
				columnNumber: 9
			}, this), " High-Risk Flags"]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 168,
			columnNumber: 7
		}, this);
	};
	const downloadReport = () => {
		const data = {
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			patient: state.profile.fullName,
			allergiesRecorded: state.profile.allergies,
			analyzedMedications: selectedMeds,
			safetyScore: analysis.safetyScore,
			duplicateIngredients: analysis.duplicateIngredients,
			interactionsDetected: analysis.interactions,
			allergyFlags: analysis.allergyWarnings
		};
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `Medora-Clinical-Interaction-Review-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Clinical safety report exported successfully.");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "hero-wash relative overflow-hidden rounded-2xl border border-border p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "max-w-2xl space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stethoscope, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 205,
										columnNumber: 17
									}, this), " Clinical Safety Engine"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 204,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Verified Pharmacology Matrix" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 207,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 203,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl",
								children: "Drug Interaction & Safety Comparison"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 209,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: "Evaluate multi-medication compatibility, side effects, contraindications, and duplicate active ingredients with deterministic clinical pharmacology rules."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 212,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 202,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex shrink-0 flex-col items-start gap-3 rounded-xl border border-border/80 bg-card/90 p-5 shadow-sm backdrop-blur sm:items-end lg:w-72",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex w-full items-center justify-between sm:justify-end sm:gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
									children: "Compatibility Score"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 222,
									columnNumber: 15
								}, this), getScoreBadge(analysis.safetyScore)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 221,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: `text-4xl font-extrabold tracking-tight ${getScoreColor(analysis.safetyScore)}`,
									children: analysis.safetyScore
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 228,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm text-muted-foreground",
									children: "/ 100"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 233,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 227,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: analysis.interactions.length === 0 && analysis.duplicateIngredients.length === 0 ? "No known antagonistic interactions detected in selection." : `${analysis.interactions.length} interaction${analysis.interactions.length === 1 ? "" : "s"} & ${analysis.duplicateIngredients.length} duplicate${analysis.duplicateIngredients.length === 1 ? "" : "s"} flagged.`
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 235,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex w-full gap-2 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									size: "sm",
									className: "w-full text-xs",
									onClick: () => setReportOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Printer, { className: "size-3.5 mr-1" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 248,
										columnNumber: 17
									}, this), " View Summary"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 242,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "secondary",
									size: "sm",
									className: "w-full text-xs",
									onClick: downloadReport,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5 mr-1" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 256,
										columnNumber: 17
									}, this), " Export"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 250,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 241,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 220,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 201,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 200,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-4 text-primary" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 267,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-ink",
							children: "Clinical Test Scenarios"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 268,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 266,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs text-muted-foreground",
						children: "Click any test combination to inspect real-time pharmacology findings"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 272,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 265,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4",
					children: PRESET_COMBOS.map((combo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							setSelectedMeds(combo.meds);
							toast.success(`Loaded preset: ${combo.name}`);
						},
						className: "flex flex-col items-start gap-1 rounded-lg border border-border bg-card/60 p-3 text-left transition-all hover:border-primary hover:bg-primary-soft/30",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-bold text-ink",
							children: combo.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 288,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] text-muted-foreground",
							children: combo.description
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 289,
							columnNumber: 15
						}, this)]
					}, combo.name, true, {
						fileName: _jsxFileName$1,
						lineNumber: 279,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 277,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 264,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-bold text-ink",
							children: "Active Medication Deck"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 301,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: "Search and add brand names, generic substances, or ingredients to compare."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 304,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 300,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: resetToProfile,
								className: "text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 316,
									columnNumber: 15
								}, this), " Load Profile Meds"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 310,
								columnNumber: 13
							}, this), selectedMeds.length > 0 && /* @__PURE__ */ (void 0)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setSelectedMeds([]),
								className: "text-xs text-destructive hover:bg-destructive-soft",
								children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 325,
									columnNumber: 17
								}, this), " Clear Deck"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 319,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 309,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 299,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 335,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter" && searchQuery.trim()) {
											e.preventDefault();
											addMedicine(searchQuery);
										}
									},
									placeholder: "Type brand or generic name (e.g. Paracetamol, Metformin, Aspirin, Ibuprofen, Atorvastatin)...",
									className: "pl-9 text-sm"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 336,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 334,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => addMedicine(searchQuery),
								disabled: !searchQuery.trim(),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 353,
									columnNumber: 15
								}, this), " Add"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 349,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 333,
							columnNumber: 11
						}, this), suggestions.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "absolute left-0 right-0 top-full z-30 mt-1.5 rounded-lg border border-border bg-popover p-1 shadow-lg backdrop-blur",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "px-2 py-1 text-[11px] font-semibold text-muted-foreground",
								children: "Suggested Catalogue Matches:"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 360,
								columnNumber: 15
							}, this), suggestions.map((s) => /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => addMedicine(s),
								className: "flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-medium text-popover-foreground hover:bg-accent hover:text-accent-foreground",
								children: [/* @__PURE__ */ (void 0)("span", { children: s }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 370,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[10px] text-muted-foreground",
									children: "Add to deck +"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 371,
									columnNumber: 19
								}, this)]
							}, s, true, {
								fileName: _jsxFileName$1,
								lineNumber: 364,
								columnNumber: 17
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 359,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 332,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex flex-wrap items-center gap-2",
						children: [selectedMeds.map((med, index) => {
							const profile = findDrugProfile(med);
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 rounded-full border border-border-strong bg-secondary/80 py-1.5 pl-3 pr-2 text-xs font-medium text-foreground transition-all hover:bg-secondary",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, { className: "size-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 389,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-ink",
										children: med
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 390,
										columnNumber: 17
									}, this),
									profile && /* @__PURE__ */ (void 0)("span", {
										className: "hidden text-[10px] text-muted-foreground sm:inline",
										children: [
											"(",
											profile.drugClass.split(" ")[0],
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 392,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => removeMedicine(index),
										className: "ml-1 grid size-4 place-items-center rounded-full hover:bg-destructive-soft hover:text-destructive",
										"aria-label": `Remove ${med}`,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 402,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 396,
										columnNumber: 17
									}, this)
								]
							}, `${med}-${index}`, true, {
								fileName: _jsxFileName$1,
								lineNumber: 385,
								columnNumber: 15
							}, this);
						}), selectedMeds.length === 0 && /* @__PURE__ */ (void 0)("p", {
							className: "text-xs italic text-muted-foreground",
							children: "Your deck is empty. Add at least two medications above or pick a test scenario to begin."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 408,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 381,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 298,
				columnNumber: 7
			}, this),
			selectedMeds.length > 0 && /* @__PURE__ */ (void 0)(Tabs, {
				defaultValue: "interactions",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (void 0)(TabsList, {
						className: "grid w-full grid-cols-3 sm:w-auto sm:inline-grid",
						children: [
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "interactions",
								className: "gap-2",
								children: [
									/* @__PURE__ */ (void 0)(ShieldAlert, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 421,
										columnNumber: 15
									}, this),
									"Interactions & Alerts (",
									analysis.interactions.length + analysis.duplicateIngredients.length + analysis.allergyWarnings.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 420,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "side-effects",
								className: "gap-2",
								children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 429,
									columnNumber: 15
								}, this), "Side Effects Matrix"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 428,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(TabsTrigger, {
								value: "comparison",
								className: "gap-2",
								children: [/* @__PURE__ */ (void 0)(ArrowRightLeft, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 433,
									columnNumber: 15
								}, this), "Pharmacology Table"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 432,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 419,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "interactions",
						className: "space-y-4",
						children: [
							analysis.allergyWarnings.length > 0 && /* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-destructive/40 bg-destructive-soft/50 p-5",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (void 0)(ShieldAlert, { className: "mt-0.5 size-5 shrink-0 text-destructive" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 444,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-bold text-destructive",
												children: "Allergy Warning: Profile Match Detected"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 446,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs leading-relaxed text-destructive-foreground/90",
												children: "The following medication(s) match an allergy recorded in your health profile. Do not take without direct clinician consultation."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 449,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1",
												children: analysis.allergyWarnings.map((w, idx) => /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2 text-xs font-semibold text-destructive",
													children: [
														/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-destructive" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 460,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("span", { children: w.matchedMedicine }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 461,
															columnNumber: 27
														}, this),
														" matches recorded allergy:",
														" ",
														/* @__PURE__ */ (void 0)("span", {
															className: "underline",
															children: w.allergy
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 463,
															columnNumber: 27
														}, this)
													]
												}, idx, true, {
													fileName: _jsxFileName$1,
													lineNumber: 456,
													columnNumber: 25
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 454,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 445,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 443,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 442,
								columnNumber: 15
							}, this),
							analysis.duplicateIngredients.length > 0 && /* @__PURE__ */ (void 0)("div", {
								className: "rounded-xl border border-amber-500/40 bg-amber-500/10 p-5",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (void 0)(Layers, { className: "mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 476,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-bold text-amber-900 dark:text-amber-200",
												children: "Duplicate Active Ingredient Warning"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 478,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs leading-relaxed text-amber-800 dark:text-amber-300",
												children: "You have selected multiple products containing the same active substance. Concurrent use risks accidental overdose."
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 481,
												columnNumber: 21
											}, this),
											analysis.duplicateIngredients.map((dup, idx) => /* @__PURE__ */ (void 0)("div", {
												className: "rounded-lg border border-amber-500/30 bg-card/60 p-3",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "text-xs font-bold text-ink",
													children: ["Active Ingredient: ", dup.ingredient]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 491,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: ["Present in: ", dup.medicines.join(" AND ")]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 494,
													columnNumber: 25
												}, this)]
											}, idx, true, {
												fileName: _jsxFileName$1,
												lineNumber: 487,
												columnNumber: 23
											}, this))
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 477,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 475,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 474,
								columnNumber: 15
							}, this),
							analysis.interactions.length > 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-sm font-bold text-ink",
									children: [
										"Pharmacological Drug-Drug Interactions (",
										analysis.interactions.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 507,
									columnNumber: 17
								}, this), analysis.interactions.map((rule) => {
									const isSevere = rule.severity === "severe";
									const isModerate = rule.severity === "moderate";
									return /* @__PURE__ */ (void 0)("div", {
										className: `surface p-5 transition-all ${isSevere ? "border-destructive/40 bg-destructive-soft/10" : isModerate ? "border-amber-500/40 bg-amber-500/5" : "border-border"}`,
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex flex-wrap items-center justify-between gap-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(Badge, {
														variant: isSevere ? "destructive" : isModerate ? "outline" : "secondary",
														className: isModerate ? "border-amber-500 text-amber-700 dark:text-amber-300" : "",
														children: [rule.severity.toUpperCase(), " RISK"]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 528,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-xs font-medium text-muted-foreground",
														children: ["Evidence: ", rule.evidenceLevel]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 544,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 527,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-bold text-ink",
													children: [
														rule.drugs[0].toUpperCase(),
														" ↔",
														" ",
														rule.drugs[1].toUpperCase()
													]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 548,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 526,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("h4", {
												className: "mt-3 text-sm font-bold text-ink",
												children: rule.title
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 554,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "mt-3 grid gap-3 sm:grid-cols-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "rounded-lg border border-border bg-card/50 p-3",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
														children: "Pharmacological Mechanism"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 560,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "mt-1 text-xs leading-relaxed text-foreground",
														children: rule.mechanism
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 563,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 559,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "rounded-lg border border-border bg-card/50 p-3",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] font-bold uppercase tracking-wider text-primary",
														children: "Clinical Recommendation"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 568,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "mt-1 text-xs leading-relaxed text-foreground font-medium",
														children: rule.clinicalAdvice
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 571,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 567,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 558,
												columnNumber: 23
											}, this)
										]
									}, rule.id, true, {
										fileName: _jsxFileName$1,
										lineNumber: 516,
										columnNumber: 21
									}, this);
								})]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 506,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (void 0)("div", {
								className: "surface flex flex-col items-center justify-center p-8 text-center",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "grid size-12 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
										children: /* @__PURE__ */ (void 0)(CircleCheck, { className: "size-6" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 583,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 582,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("h3", {
										className: "mt-3 text-sm font-bold text-ink",
										children: "No Antagonistic Drug-Drug Interactions Detected"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 585,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-1 max-w-md text-xs text-muted-foreground",
										children: "The selected medications do not have known major pharmacological clashes in the verified reference matrix. Always consult your prescriber."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 588,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 581,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "surface p-5",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(Utensils, { className: "size-4 text-primary" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 599,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("h3", {
										className: "text-sm font-bold text-ink",
										children: "Dietary, Food & Lifestyle Precautions"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 600,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 598,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
									children: analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("div", {
										className: "rounded-lg border border-border bg-card p-3.5 space-y-2",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-xs font-bold text-ink",
											children: p.name
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 610,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "space-y-1",
											children: [p.foodInteractions.map((f, i) => /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground flex items-start gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "mt-1 size-1 rounded-full bg-amber-500 shrink-0" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 617,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", { children: f }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 618,
													columnNumber: 27
												}, this)]
											}, i, true, {
												fileName: _jsxFileName$1,
												lineNumber: 613,
												columnNumber: 25
											}, this)), p.lifestyleCautions.map((l, i) => /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground flex items-start gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", { className: "mt-1 size-1 rounded-full bg-primary shrink-0" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 626,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("span", { children: l }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 627,
													columnNumber: 27
												}, this)]
											}, i, true, {
												fileName: _jsxFileName$1,
												lineNumber: 622,
												columnNumber: 25
											}, this))]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 611,
											columnNumber: 21
										}, this)]
									}, p.id, true, {
										fileName: _jsxFileName$1,
										lineNumber: 606,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 604,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 597,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 439,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "side-effects",
						className: "space-y-4",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "surface p-5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-sm font-bold text-ink",
									children: "Side Effect Profiles by Organ System"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 642,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: "Compare frequency and biological systems affected across your active medications."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 645,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 641,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(Funnel, { className: "size-3.5 text-muted-foreground" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 652,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(Select, {
										value: selectedSideEffectFilter,
										onValueChange: setSelectedSideEffectFilter,
										children: [/* @__PURE__ */ (void 0)(SelectTrigger, {
											className: "h-8 w-44 text-xs",
											children: /* @__PURE__ */ (void 0)(SelectValue, { placeholder: "All Organ Systems" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 658,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 657,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: [
											/* @__PURE__ */ (void 0)(SelectItem, {
												value: "all",
												children: "All Systems"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 661,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)(SelectItem, {
												value: "GI",
												children: "Gastrointestinal (GI)"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 662,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)(SelectItem, {
												value: "CNS",
												children: "Central Nervous System"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 663,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)(SelectItem, {
												value: "Cardio",
												children: "Cardiovascular"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 666,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)(SelectItem, {
												value: "Derma",
												children: "Dermatological"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 667,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)(SelectItem, {
												value: "Metabolic",
												children: "Metabolic & Liver"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 668,
												columnNumber: 23
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 660,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 653,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 651,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 640,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: analysis.profiles.map((p) => {
									const filteredEffects = p.commonSideEffects.filter((e) => selectedSideEffectFilter === "all" || e.system === selectedSideEffectFilter);
									return /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-start justify-between gap-2 border-b border-border pb-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
													className: "text-sm font-bold text-ink",
													children: p.name
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 692,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-muted-foreground",
													children: p.drugClass
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 695,
													columnNumber: 27
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 691,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)(Badge, {
													variant: "outline",
													className: "text-[10px]",
													children: p.form
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 699,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 690,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "mt-3 flex-1 space-y-2.5",
												children: filteredEffects.length > 0 ? filteredEffects.map((se, idx) => /* @__PURE__ */ (void 0)("div", {
													className: "rounded-md border border-border/70 bg-secondary/40 p-2.5",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between text-[11px]",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-semibold text-ink",
															children: [se.system, " System"]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 712,
															columnNumber: 33
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground",
															children: se.frequency
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 715,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 711,
														columnNumber: 31
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "mt-1 text-xs text-foreground",
														children: se.effect
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 719,
														columnNumber: 31
													}, this)]
												}, idx, true, {
													fileName: _jsxFileName$1,
													lineNumber: 707,
													columnNumber: 29
												}, this)) : /* @__PURE__ */ (void 0)("p", {
													className: "py-4 text-center text-xs italic text-muted-foreground",
													children: "No side effects documented for this organ filter in this record."
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 725,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 704,
												columnNumber: 23
											}, this),
											p.blackBoxWarning && /* @__PURE__ */ (void 0)("div", {
												className: "mt-3 rounded-lg border border-destructive/30 bg-destructive-soft/40 p-2.5 text-[11px] text-destructive",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "font-bold flex items-center gap-1",
													children: [/* @__PURE__ */ (void 0)(ShieldAlert, { className: "size-3" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 735,
														columnNumber: 29
													}, this), " Important Alert"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 734,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "mt-0.5 line-clamp-3",
													children: p.blackBoxWarning
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 737,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 733,
												columnNumber: 25
											}, this)
										]
									}, p.id, true, {
										fileName: _jsxFileName$1,
										lineNumber: 686,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 677,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 639,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 638,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(TabsContent, {
						value: "comparison",
						className: "space-y-4",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "surface overflow-hidden",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (void 0)("table", {
									className: "w-full text-left text-xs",
									children: [/* @__PURE__ */ (void 0)("thead", {
										className: "border-b border-border bg-secondary/50 font-semibold text-muted-foreground",
										children: /* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("th", {
											className: "p-3.5",
											children: "Parameter"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 756,
											columnNumber: 23
										}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("th", {
											className: "min-w-[200px] p-3.5 text-ink font-bold",
											children: p.name
										}, p.id, false, {
											fileName: _jsxFileName$1,
											lineNumber: 758,
											columnNumber: 25
										}, this))] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 755,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 754,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("tbody", {
										className: "divide-y divide-border",
										children: [
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Generic Name"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 769,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-medium text-foreground",
												children: p.genericName
											}, p.id, false, {
												fileName: _jsxFileName$1,
												lineNumber: 773,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 768,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Drug Class"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 782,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 text-foreground",
												children: p.drugClass
											}, p.id, false, {
												fileName: _jsxFileName$1,
												lineNumber: 786,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 781,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Mechanism of Action"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 792,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 text-xs text-muted-foreground leading-relaxed",
												children: p.mechanism
											}, p.id, false, {
												fileName: _jsxFileName$1,
												lineNumber: 796,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 791,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Elimination Half-life"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 805,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-mono text-xs text-foreground",
												children: p.eliminationHalfLife
											}, p.id, false, {
												fileName: _jsxFileName$1,
												lineNumber: 809,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 804,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Pregnancy Category"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 818,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: `inline-block rounded px-2 py-0.5 font-bold ${p.pregnancyCategory === "X" ? "bg-destructive text-destructive-foreground" : p.pregnancyCategory === "D" ? "bg-amber-500/20 text-amber-700 dark:text-amber-300" : "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"}`,
													children: ["Category ", p.pregnancyCategory]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 823,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "mt-1 text-[11px] text-muted-foreground",
													children: p.pregnancyNote
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 834,
													columnNumber: 27
												}, this)]
											}, p.id, true, {
												fileName: _jsxFileName$1,
												lineNumber: 822,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 817,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Lactation Safety"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 841,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-medium text-foreground",
												children: p.lactationSafety
											}, p.id, false, {
												fileName: _jsxFileName$1,
												lineNumber: 845,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 840,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Renal & Hepatic Notes"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 854,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (void 0)("p", { children: [
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-ink",
														children: "Renal:"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 863,
														columnNumber: 29
													}, this),
													" ",
													p.renalAdjustment
												] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 862,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "mt-1",
													children: [
														/* @__PURE__ */ (void 0)("strong", {
															className: "text-ink",
															children: "Hepatic Caution:"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 867,
															columnNumber: 29
														}, this),
														" ",
														p.hepaticPrecaution
													]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 866,
													columnNumber: 27
												}, this)]
											}, p.id, true, {
												fileName: _jsxFileName$1,
												lineNumber: 858,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 853,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
												className: "p-3.5 font-semibold text-muted-foreground bg-secondary/20",
												children: "Prescription Status"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 876,
												columnNumber: 23
											}, this), analysis.profiles.map((p) => /* @__PURE__ */ (void 0)("td", {
												className: "p-3.5",
												children: /* @__PURE__ */ (void 0)(Badge, {
													variant: p.prescriptionOnly ? "default" : "secondary",
													children: p.prescriptionOnly ? "Rx Required" : "Over the Counter (OTC)"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 881,
													columnNumber: 27
												}, this)
											}, p.id, false, {
												fileName: _jsxFileName$1,
												lineNumber: 880,
												columnNumber: 25
											}, this))] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 875,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 767,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 753,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 752,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 751,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 750,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 418,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: reportOpen,
				onOpenChange: setReportOpen,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Medora Clinical Safety Review Sheet" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 905,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "A printable summary of drug interactions, duplicate ingredients, and contraindications." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 906,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 904,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-4 max-h-[60vh] overflow-y-auto pr-1 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-lg border border-border p-3.5 bg-secondary/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-bold text-ink",
											children: ["Patient: ", state.profile.fullName]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 913,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-muted-foreground",
											children: [
												"Recorded Allergies:",
												" ",
												state.profile.allergies.join(", ") || "None recorded"
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 916,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-muted-foreground",
											children: ["Generated at: ", (/* @__PURE__ */ new Date()).toLocaleString()]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 920,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 912,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
										className: "font-bold text-ink",
										children: [
											"1. Selected Medications (",
											selectedMeds.length,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 926,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "list-disc list-inside space-y-1 text-muted-foreground",
										children: selectedMeds.map((m, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-ink font-medium",
											children: m
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 932,
											columnNumber: 21
										}, this) }, i, false, {
											fileName: _jsxFileName$1,
											lineNumber: 931,
											columnNumber: 19
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 929,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 925,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-bold text-ink",
											children: "2. Safety Score & Findings"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 939,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-foreground",
											children: [
												"Score:",
												" ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: getScoreColor(analysis.safetyScore),
													children: [analysis.safetyScore, " / 100"]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 942,
													columnNumber: 17
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 940,
											columnNumber: 15
										}, this),
										analysis.interactions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: analysis.interactions.map((int, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "rounded border p-2 border-border",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-bold text-destructive",
													children: [
														"[",
														int.severity.toUpperCase(),
														"] ",
														int.title
													]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 950,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "mt-0.5 text-muted-foreground",
													children: int.clinicalAdvice
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 953,
													columnNumber: 23
												}, this)]
											}, idx, true, {
												fileName: _jsxFileName$1,
												lineNumber: 949,
												columnNumber: 21
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 947,
											columnNumber: 17
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-emerald-600 dark:text-emerald-400 font-medium",
											children: "No major drug-drug clashes detected in database."
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 960,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 938,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
									title: "Clinical Disclaimer",
									children: "This summary is informational. Take this sheet to your doctor or dispensing pharmacist before starting or modifying any treatment regimen."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 966,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 911,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-end gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => window.print(),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Printer, { className: "size-3.5 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 974,
									columnNumber: 15
								}, this), " Print"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 973,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								onClick: () => setReportOpen(false),
								children: "Close"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 976,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 972,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 903,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 902,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 983,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 198,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/app.interactions.tsx?tsr-split=component";
function InteractionsPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DrugInteractionComparisonDashboard, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { InteractionsPage as component };
