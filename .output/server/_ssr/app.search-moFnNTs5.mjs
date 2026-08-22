import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as useStore, E as formatMoney, N as searchMedicines, P as getProvider, d as Route$19 } from "./router-DnzDjJrL.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { N as Search, Zt as Check, i as X, xt as GitCompareArrows } from "../_libs/lucide-react.mjs";
import { d as demoPrices, f as Button, m as cn } from "./router-DnzDjJrL2.mjs";
import { d as RxPill, f as SafetyNotice, i as DemoBadge, l as PageHeader, o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.search-moFnNTs5.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/medicine/MedicineCard.tsx";
function MedicineCard({ medicine, lowestPrice, selected, onToggleCompare }) {
	const ingredient = medicine.activeIngredients[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: cn("surface flex flex-col gap-3 p-5 transition-shadow hover:shadow-soft", selected && "border-primary/50 ring-1 ring-primary/25"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/app/medicine/$medicineId",
						params: { medicineId: medicine.id },
						className: "font-display text-base font-bold text-ink hover:underline",
						children: medicine.brandName
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "truncate text-sm text-muted-foreground",
						children: [
							medicine.genericName,
							" · ",
							ingredient?.strength,
							" · ",
							medicine.form
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 37,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RxPill, { prescriptionOnly: medicine.prescriptionOnly }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 41,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
				className: "grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
					className: "text-muted-foreground",
					children: "Manufacturer"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 46,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
					className: "font-medium text-foreground",
					children: medicine.manufacturer
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 47,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 45,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
					className: "text-muted-foreground",
					children: "Pack size"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 52,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
					className: "font-medium text-foreground",
					children: medicine.packSize
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 53,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 51,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-auto flex items-center justify-between gap-3 border-t border-border pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm",
					children: lowestPrice != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "numeric font-semibold text-ink",
						children: formatMoney(lowestPrice)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted-foreground",
						children: [" ", "lowest demo listing"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 64,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 60,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted-foreground",
						children: "No listing in demo data"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 70,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 58,
					columnNumber: 9
				}, this), onToggleCompare && /* @__PURE__ */ (void 0)(Button, {
					variant: selected ? "secondary" : "outline",
					size: "sm",
					onClick: onToggleCompare,
					"aria-pressed": selected,
					children: selected ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(Check, {
						className: "size-3.5",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 84,
						columnNumber: 17
					}, this), " Selected"] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 83,
						columnNumber: 15
					}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(GitCompareArrows, {
						className: "size-3.5",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 88,
						columnNumber: 17
					}, this), " Compare"] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 87,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 76,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 57,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/app.search.tsx?tsr-split=component";
var lowestFor = (medicineId) => {
	const prices = demoPrices.filter((p) => p.medicineId === medicineId).map((p) => p.price);
	return prices.length ? Math.min(...prices) : void 0;
};
function SearchPage() {
	const { q, form, supply } = Route$19.useSearch();
	const navigate = useNavigate({ from: "/app/search" });
	const { state, toggleCompare, clearCompare } = useStore();
	const { data, isPending } = useQuery({
		queryKey: ["medicines", q],
		queryFn: () => searchMedicines(q)
	});
	const results = (data ?? []).filter((m) => (form === "all" || m.form === form) && (supply === "all" || (supply === "rx" ? m.prescriptionOnly : !m.prescriptionOnly)));
	const setParam = (key, value) => void navigate({
		to: ".",
		search: (prev) => ({
			...prev,
			[key]: value
		})
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Find a medicine",
				demo: true,
				description: "Search by brand name, generic name, active ingredient or manufacturer. Equivalence in Medora means the same active ingredient, strength and dosage form — never an assumption about quality."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface grid gap-4 p-5 sm:grid-cols-[1fr_170px_190px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "q",
							children: "Search"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
								className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "q",
								value: q,
								maxLength: 80,
								placeholder: "e.g. Paracetamol, Zyracet, Metformin",
								className: "pl-9",
								onChange: (e) => setParam("q", e.target.value)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "form",
							children: "Dosage form"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
							value: form,
							onValueChange: (v) => setParam("form", v),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
								id: "form",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
								"all",
								"Tablet",
								"Capsule",
								"Syrup",
								"Suspension",
								"Inhaler",
								"Injection"
							].map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
								value: f,
								children: f === "all" ? "All forms" : f
							}, f, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 101
							}, this)) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "supply",
							children: "Supply"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
							value: supply,
							onValueChange: (v) => setParam("supply", v),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
								id: "supply",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "all",
									children: "All products"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "otc",
									children: "Over the counter"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "rx",
									children: "Prescription-only"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 15
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			state.compareSelection.length > 0 && /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-lg border border-primary/35 bg-primary-soft px-4 py-3",
				children: [
					/* @__PURE__ */ (void 0)(GitCompareArrows, {
						className: "size-4 text-primary",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-sm font-medium text-ink",
						children: [
							state.compareSelection.length,
							" product",
							state.compareSelection.length > 1 ? "s" : "",
							" selected for comparison"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "ml-auto flex gap-2",
						children: [/* @__PURE__ */ (void 0)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: clearCompare,
							children: [/* @__PURE__ */ (void 0)(X, {
								className: "size-3.5",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 15
							}, this), " Clear"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (void 0)(Link, {
								to: "/app/compare",
								children: "Compare selected"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 45
			}, this),
			isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					0,
					1,
					2,
					3,
					4,
					5
				].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-44 w-full rounded-lg" }, i, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 40
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 20
			}, this) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
				icon: Search,
				title: "No products matched",
				description: "Try the generic name or active ingredient instead of the brand, or clear the filters.",
				action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					onClick: () => void navigate({
						to: ".",
						search: {
							q: "",
							form: "all",
							supply: "all"
						}
					}),
					children: "Reset search"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 207
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 41
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					results.length,
					" product",
					results.length > 1 ? "s" : "",
					" in the catalogue"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: results.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicineCard, {
					medicine: m,
					lowestPrice: lowestFor(m.id),
					selected: state.compareSelection.includes(m.id),
					onToggleCompare: () => toggleCompare(m.id)
				}, m.id, false, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 31
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 29
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				title: "What Medora will not do",
				children: "Medora does not recommend which medicine you should take, and it does not imply that products with the same composition are equal in quality, tolerability or suitability for you. A pharmacist decides whether a substitution is appropriate."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex justify-end",
				children: getProvider().isLive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Live catalogue" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 33
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Demo catalogue" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 72
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 10
	}, this);
}
//#endregion
export { SearchPage as component };
