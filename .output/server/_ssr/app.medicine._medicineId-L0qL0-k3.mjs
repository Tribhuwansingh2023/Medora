import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as useStore, D as getEquivalents, E as formatMoney, O as getMedicineSync, f as Route$2, k as getOffers } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { Q as Package, T as ShoppingCart, ct as MapPin, f as TriangleAlert, gn as ArrowLeft, v as Thermometer } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { d as RxPill, f as SafetyNotice, o as EmptyState, p as SectionHeading, r as ClinicalDisclaimer, t as AvailabilityPill, u as ProvenanceLine } from "./primitives-Dg_-FqLy.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.medicine._medicineId-L0qL0-k3.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.medicine.$medicineId.tsx?tsr-split=component";
function MedicineDetail() {
	const { medicineId } = Route$2.useParams();
	const { addToCart } = useStore();
	const medicine = getMedicineSync(medicineId);
	const { data: equivalents } = useQuery({
		queryKey: ["equivalents", medicineId],
		queryFn: () => getEquivalents(medicine)
	});
	const { data: offers, isPending } = useQuery({
		queryKey: ["offers", medicineId],
		queryFn: () => getOffers([medicineId])
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "ghost",
				size: "sm",
				className: "-ml-2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/app/search",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this), " Back to search"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-2xl font-bold tracking-tight",
							children: medicine.brandName
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-muted-foreground",
							children: [
								medicine.genericName,
								" · ",
								medicine.activeIngredients[0]?.strength,
								" ",
								"· ",
								medicine.form
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RxPill, { prescriptionOnly: medicine.prescriptionOnly }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => {
									addToCart({
										medicineId: medicine.id,
										name: medicine.brandName,
										qty: 1,
										price: offers?.[0]?.listing.price ?? 0,
										prescriptionOnly: medicine.prescriptionOnly
									});
									toast.success("Added to basket", { description: medicine.prescriptionOnly ? "A valid prescription is required before this can be dispensed." : "Reserve at a pharmacy from your basket." });
								},
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, {
									className: "size-4",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 15
								}, this), " Add to basket"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							["Active ingredient", medicine.activeIngredients.map((a) => a.name).join(" + ")],
							["Strength", medicine.activeIngredients.map((a) => a.strength).join(" / ")],
							["Pack size", medicine.packSize],
							["Manufacturer", medicine.manufacturer]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border border-border bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: k
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "mt-1 text-sm font-semibold text-ink",
								children: v
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 15
							}, this)]
						}, k, true, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 259
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProvenanceLine, { provenance: medicine.provenance }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "about",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "about",
							children: "About"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "prices",
							children: "Local prices"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "equivalents",
							children: "Equivalents"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 11
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "about",
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
								className: "surface p-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { title: "What it is used for" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm leading-relaxed text-foreground",
									children: medicine.usesSummary
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-5 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
									className: "surface p-6",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { title: "Commonly reported side effects" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "mt-3 space-y-1.5 text-sm text-foreground",
										children: medicine.commonSideEffects.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 102,
												columnNumber: 21
											}, this), s]
										}, s, true, {
											fileName: _jsxFileName,
											lineNumber: 101,
											columnNumber: 54
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
									className: "surface p-6",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { title: "Warnings" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 108,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "mt-3 space-y-1.5 text-sm text-foreground",
										children: medicine.warnings.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
												className: "mt-0.5 size-4 shrink-0 text-warning-foreground",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 111,
												columnNumber: 21
											}, this), s]
										}, s, true, {
											fileName: _jsxFileName,
											lineNumber: 110,
											columnNumber: 45
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 109,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
								className: "surface flex items-start gap-3 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thermometer, {
									className: "mt-0.5 size-5 text-primary",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-semibold text-ink",
									children: "Storage"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted-foreground",
									children: medicine.storage
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 15
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
								title: "No dosing guidance here — by design",
								children: "Medora never suggests a dose, a schedule, or whether this product is right for you. Dose comes from your prescriber; suitability is a pharmacist's call."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "prices",
						className: "mt-6 space-y-3",
						children: [
							isPending && [
								0,
								1,
								2
							].map((i) => /* @__PURE__ */ (void 0)(Skeleton, { className: "h-20 w-full rounded-lg" }, i, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 44
							}, this)),
							offers?.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "surface flex flex-wrap items-center gap-4 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
												className: "size-4 text-primary",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 138,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: "/app/pharmacies/$pharmacyId",
												params: { pharmacyId: o.pharmacy.id },
												className: "font-semibold text-ink hover:underline",
												children: o.pharmacy.name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 139,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvailabilityPill, { value: o.listing.availability }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 144,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [
											o.pharmacy.distanceKm,
											" km · pack of ",
											o.units,
											" ·",
											" ",
											formatMoney(o.unitPrice),
											" per unit · updated",
											" ",
											o.listing.updatedAt
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "numeric font-display text-xl font-bold text-ink",
									children: formatMoney(o.listing.price)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 15
								}, this)]
							}, o.listing.id, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 29
							}, this)),
							offers?.length === 0 && /* @__PURE__ */ (void 0)(EmptyState, {
								icon: Package,
								title: "No listings for this product",
								description: "No pharmacy in the catalogue lists this pack size right now."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 36
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "equivalents",
						className: "mt-6 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
							title: "How equivalence is decided",
							tone: "info",
							children: [
								"Products are grouped only when the active ingredient, strength and dosage form match exactly (",
								medicine.compositionKey,
								"). Excipients, coatings and tolerability can still differ — a pharmacist decides whether a swap is appropriate."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 11
						}, this), equivalents?.length ? equivalents.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app/medicine/$medicineId",
							params: { medicineId: m.id },
							className: "surface flex items-center justify-between gap-4 p-5 transition-shadow hover:shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-semibold text-ink",
								children: m.brandName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									m.manufacturer,
									" · ",
									m.packSize
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RxPill, { prescriptionOnly: m.prescriptionOnly }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 175,
								columnNumber: 17
							}, this)]
						}, m.id, true, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 55
						}, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
							icon: Package,
							title: "No equivalents in the catalogue",
							description: "Nothing else shares this exact composition key."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 176,
							columnNumber: 26
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 10
	}, this);
}
//#endregion
export { MedicineDetail as component };
