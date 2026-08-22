import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, E as formatMoney, O as getMedicineSync, T as explainBestValue, k as getOffers } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { _t as Info, cn as Bookmark, en as ChartColumn, i as X, m as TrendingDown } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader, o as EmptyState, r as ClinicalDisclaimer, t as AvailabilityPill } from "./primitives-Dg_-FqLy.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-6PrvPBtG.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Switch } from "./switch-ZzRHu5Zc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.compare-BYI9Tsix.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.compare.tsx?tsr-split=component";
var availabilityRank = {
	in_stock: 0,
	low_stock: 1,
	out_of_stock: 2
};
var sortOffers = (rows, key) => [...rows].sort((a, b) => {
	if (key === "pack") return a.listing.price - b.listing.price;
	if (key === "distance") return a.pharmacy.distanceKm - b.pharmacy.distanceKm;
	if (key === "availability") return availabilityRank[a.listing.availability] - availabilityRank[b.listing.availability] || a.unitPrice - b.unitPrice;
	return a.unitPrice - b.unitPrice;
});
function ComparePage() {
	const { state, clearCompare, toggleCompare, saveComparison } = useStore();
	const ids = state.compareSelection;
	const [sort, setSort] = (0, import_react.useState)("unit");
	const [inStockOnly, setInStockOnly] = (0, import_react.useState)(false);
	const { data: offers, isPending } = useQuery({
		queryKey: ["compare", ids],
		queryFn: () => getOffers(ids),
		enabled: ids.length > 0
	});
	const rows = sortOffers((offers ?? []).filter((o) => !inStockOnly || o.listing.availability !== "out_of_stock"), sort);
	const best = offers ? explainBestValue(offers) : null;
	/** Savings on a full pack, comparing the cheapest and dearest available listing. */
	const packSaving = best && best.worst.listing.price > best.best.listing.price ? best.worst.listing.price - best.best.listing.price : 0;
	const compositions = Array.from(new Set(ids.map((id) => getMedicineSync(id)?.compositionKey).filter(Boolean)));
	const mixedComposition = compositions.length > 1;
	const selectedMedicines = ids.map(getMedicineSync).filter(Boolean);
	if (ids.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			title: "Compare prices",
			description: "Select products from search to compare them here."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			icon: ChartColumn,
			title: "Nothing selected yet",
			description: "Add two or more products with the same composition from search, then return here for a side-by-side view.",
			action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/app/search",
					children: "Find medicines"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 195
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Compare prices",
				demo: true,
				description: "Every row is one listing at one pharmacy. Pack prices are normalised to a price per unit so different pack sizes compare honestly.",
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "ghost",
					onClick: clearCompare,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 15
					}, this), " Clear"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					disabled: !offers?.length,
					onClick: () => {
						if (!offers?.length) return;
						const prices = offers.map((o) => o.listing.price);
						saveComparison({
							id: `cmp-${Date.now()}`,
							createdAt: (/* @__PURE__ */ new Date()).toISOString(),
							compositionKey: offers[0].medicine.compositionKey,
							label: Array.from(new Set(offers.map((o) => o.medicine.brandName))).join(" vs "),
							medicineIds: ids,
							lowest: Math.min(...prices),
							highest: Math.max(...prices)
						});
						toast.success("Comparison saved", { description: "It now appears on your dashboard and in your history." });
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 15
					}, this), " Save comparison"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 201
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "rounded-lg border border-border bg-secondary/50 p-5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, {
						className: "mt-0.5 size-4 shrink-0 text-primary",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-sm font-semibold text-ink",
							children: "How Medora matches these products"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: [
								"Products are grouped only when all three match exactly: the same",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "font-semibold text-foreground",
									children: "active ingredient"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this),
								", the same",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "font-semibold text-foreground",
									children: "strength"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 15
								}, this),
								", and the same",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "font-semibold text-foreground",
									children: "dosage form"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 15
								}, this),
								". Matching on those three does not mean the products are equally suitable for you — excipients, tolerability, manufacturing quality and clinical history all differ, and only a pharmacist or prescriber can judge a substitution."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: compositions.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-xs text-muted-foreground",
								children: c
							}, c, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 38
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			mixedComposition && /* @__PURE__ */ (void 0)(SafetyNotice, {
				tone: "warning",
				title: "These products are not equivalent to each other",
				children: "Your selection contains more than one composition, so this table compares different products rather than alternatives of the same one. Prices below are still per unit, but do not read them as substitution options."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 28
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: ids.map((id) => {
					const m = getMedicineSync(id);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => toggleCompare(id),
						"aria-label": `Remove ${m?.brandName ?? id} from the comparison`,
						className: "inline-flex min-h-9 items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-secondary",
						children: [m?.brandName ?? id, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {
							className: "size-3.5 text-muted-foreground",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 15
						}, this)]
					}, id, true, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 7
			}, this),
			selectedMedicines.length === 2 && /* @__PURE__ */ (void 0)("section", {
				className: "surface p-0 overflow-hidden",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "border-b border-border bg-muted/40 p-4",
					children: /* @__PURE__ */ (void 0)("h3", {
						className: "font-semibold text-sm",
						children: "Clinical Comparison"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 144,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (void 0)(Table, { children: [/* @__PURE__ */ (void 0)(TableHeader, { children: /* @__PURE__ */ (void 0)(TableRow, {
						className: "bg-secondary/20 hover:bg-secondary/20",
						children: [
							/* @__PURE__ */ (void 0)(TableHead, {
								className: "w-[150px] font-semibold text-muted-foreground",
								children: "Property"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableHead, {
								className: "font-bold text-ink w-1/2",
								children: selectedMedicines[0]?.brandName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableHead, {
								className: "font-bold text-ink w-1/2 border-l border-border",
								children: selectedMedicines[1]?.brandName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 149,
						columnNumber: 17
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)(TableBody, { children: [
						/* @__PURE__ */ (void 0)(TableRow, { children: [
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "font-medium text-muted-foreground",
								children: "Dosage & Form"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, { children: [
								selectedMedicines[0]?.form,
								" (",
								selectedMedicines[0]?.packSize,
								")"
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "border-l border-border",
								children: [
									selectedMedicines[1]?.form,
									" (",
									selectedMedicines[1]?.packSize,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(TableRow, { children: [
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "font-medium text-muted-foreground",
								children: "Active Ingredients"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, { children: selectedMedicines[0]?.activeIngredients.map((a) => /* @__PURE__ */ (void 0)("div", { children: [
								a.name,
								" ",
								/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground ml-1",
									children: a.strength
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 25
								}, this)
							] }, a.name, true, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 71
							}, this)) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "border-l border-border",
								children: selectedMedicines[1]?.activeIngredients.map((a) => /* @__PURE__ */ (void 0)("div", { children: [
									a.name,
									" ",
									/* @__PURE__ */ (void 0)("span", {
										className: "text-muted-foreground ml-1",
										children: a.strength
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 190,
										columnNumber: 25
									}, this)
								] }, a.name, true, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 71
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 187,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(TableRow, { children: [
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "font-medium text-muted-foreground",
								children: "Uses Summary"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "text-sm",
								children: selectedMedicines[0]?.usesSummary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "border-l border-border text-sm",
								children: selectedMedicines[1]?.usesSummary
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(TableRow, { children: [
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "font-medium text-muted-foreground",
								children: "Common Side Effects"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, { children: /* @__PURE__ */ (void 0)("ul", {
								className: "list-disc pl-4 text-sm space-y-1 text-muted-foreground",
								children: selectedMedicines[0]?.commonSideEffects.map((se) => /* @__PURE__ */ (void 0)("li", { children: se }, se, false, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 74
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 212,
								columnNumber: 21
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 211,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "border-l border-border",
								children: /* @__PURE__ */ (void 0)("ul", {
									className: "list-disc pl-4 text-sm space-y-1 text-muted-foreground",
									children: selectedMedicines[1]?.commonSideEffects.map((se) => /* @__PURE__ */ (void 0)("li", { children: se }, se, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 74
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (void 0)(TableRow, { children: [
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "font-medium text-muted-foreground",
								children: "Manufacturer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "text-sm",
								children: selectedMedicines[0]?.manufacturer
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 226,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)(TableCell, {
								className: "border-l border-border text-sm",
								children: selectedMedicines[1]?.manufacturer
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 229,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 142,
				columnNumber: 42
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-[200px_auto] sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: "cmp-sort",
						children: "Sort listings by"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 240,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
						value: sort,
						onValueChange: (v) => setSort(v),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
							id: "cmp-sort",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 243,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 242,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
								value: "unit",
								children: "Lowest price per unit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 246,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
								value: "pack",
								children: "Lowest pack price"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 247,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
								value: "distance",
								children: "Nearest pharmacy"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 248,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
								value: "availability",
								children: "In stock first"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 249,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 241,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 239,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
						id: "cmp-stock",
						checked: inStockOnly,
						onCheckedChange: setInStockOnly
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 254,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: "cmp-stock",
						children: "Hide out-of-stock listings"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 255,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 238,
				columnNumber: 7
			}, this),
			isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-64 w-full rounded-lg" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 259,
				columnNumber: 20
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [best && /* @__PURE__ */ (void 0)("section", {
				className: "surface border-primary/30 bg-primary-soft/50 p-6",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (void 0)(TrendingDown, {
						className: "mt-0.5 size-5 shrink-0 text-primary",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 262,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (void 0)("h2", {
								className: "font-display text-lg font-bold text-ink",
								children: [
									"Lowest unit price: ",
									best.best.medicine.brandName,
									" at",
									" ",
									best.best.pharmacy.name
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 264,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									formatMoney(best.savingPerUnit),
									" less per unit than the most expensive available listing (",
									Math.round(best.savingPercent),
									"% lower)",
									packSaving > 0 && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
										" — about ",
										formatMoney(packSaving),
										" on a full pack."
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 272,
										columnNumber: 40
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 268,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("ul", {
								className: "mt-3 space-y-1.5 text-sm text-foreground",
								children: best.reasons.map((r) => /* @__PURE__ */ (void 0)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 276,
										columnNumber: 25
									}, this), r]
								}, r, true, {
									fileName: _jsxFileName,
									lineNumber: 275,
									columnNumber: 44
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 274,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: "“Lowest unit price” describes this list only. It is not a quality, safety or suitability judgement, and it is not a recommendation to switch."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 280,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (void 0)(Button, {
									asChild: true,
									size: "sm",
									variant: "outline",
									children: /* @__PURE__ */ (void 0)(Link, {
										to: "/app/pharmacies/$pharmacyId",
										params: { pharmacyId: best.best.pharmacy.id },
										children: ["View ", best.best.pharmacy.name]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 287,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 286,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 285,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 263,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 261,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 260,
				columnNumber: 20
			}, this), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
				icon: ChartColumn,
				title: "No listings match this filter",
				description: "Every listing for the selected products is currently out of stock in the demo directory.",
				action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					onClick: () => setInStockOnly(false),
					children: "Show all listings"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 298,
					columnNumber: 210
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 298,
				columnNumber: 32
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface hidden overflow-x-auto md:block",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Product" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 306,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Manufacturer" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 307,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Pharmacy" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 308,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Pack size" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 309,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: "Pack price"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 310,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: "Per unit"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 311,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Availability" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 312,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
						className: "text-right",
						children: "Distance"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 313,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Source" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 23
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 305,
					columnNumber: 21
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 304,
					columnNumber: 19
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: rows.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/app/medicine/$medicineId",
						params: { medicineId: o.medicine.id },
						className: "font-medium text-ink hover:underline",
						children: o.medicine.brandName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 320,
						columnNumber: 27
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							o.medicine.genericName,
							" · ",
							o.medicine.form
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 325,
						columnNumber: 27
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 319,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "text-sm",
						children: o.medicine.manufacturer
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 329,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "text-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app/pharmacies/$pharmacyId",
							params: { pharmacyId: o.pharmacy.id },
							className: "hover:underline",
							children: o.pharmacy.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 333,
							columnNumber: 27
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "text-sm",
						children: o.listing.packSize
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 339,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "numeric text-right font-semibold",
						children: formatMoney(o.listing.price)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 342,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "numeric text-right",
						children: formatMoney(o.unitPrice)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 345,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvailabilityPill, { value: o.listing.availability }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 349,
						columnNumber: 27
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 348,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "numeric text-right text-sm",
						children: [o.pharmacy.distanceKm, " km"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 351,
						columnNumber: 25
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
						className: "max-w-40 text-xs text-muted-foreground",
						children: [o.listing.provenance.source, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block",
							children: [
								o.listing.provenance.verified ? "Verified feed" : "Unverified demo feed",
								" ",
								"· ",
								o.listing.provenance.updatedAt
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 356,
							columnNumber: 27
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 354,
						columnNumber: 25
					}, this)
				] }, o.listing.id, true, {
					fileName: _jsxFileName,
					lineNumber: 318,
					columnNumber: 36
				}, this)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 317,
					columnNumber: 19
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 303,
					columnNumber: 17
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 302,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "space-y-3 md:hidden",
				children: rows.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/app/medicine/$medicineId",
									params: { medicineId: o.medicine.id },
									className: "truncate font-semibold text-ink hover:underline",
									children: o.medicine.brandName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 371,
									columnNumber: 25
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										o.medicine.manufacturer,
										" · ",
										o.listing.packSize
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 376,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 370,
								columnNumber: 23
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "numeric font-semibold",
									children: formatMoney(o.listing.price)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 381,
									columnNumber: 25
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "numeric text-xs text-muted-foreground",
									children: [formatMoney(o.unitPrice), " / unit"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 384,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 380,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 369,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvailabilityPill, { value: o.listing.availability }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 390,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: o.pharmacy.name }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 391,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "numeric",
									children: [o.pharmacy.distanceKm, " km"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 392,
									columnNumber: 23
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 389,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								"Source: ",
								o.listing.provenance.source,
								" ·",
								" ",
								o.listing.provenance.verified ? "verified feed" : "unverified demo feed"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 396,
							columnNumber: 21
						}, this)
					]
				}, o.listing.id, true, {
					fileName: _jsxFileName,
					lineNumber: 368,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 367,
				columnNumber: 15
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 300,
				columnNumber: 33
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 259,
				columnNumber: 70
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				title: "Prices are demo data",
				children: "Listings in this environment are sample records with fixed timestamps. Connecting a live pricing provider replaces them with verified, timestamped pharmacy data."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 405,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 410,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 64,
		columnNumber: 10
	}, this);
}
//#endregion
export { ComparePage as component };
