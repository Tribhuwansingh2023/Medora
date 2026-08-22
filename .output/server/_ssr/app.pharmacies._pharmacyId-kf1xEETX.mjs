import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { E as formatMoney, M as isOpenNow, j as getPharmacyStock, u as Route } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { O as ShieldCheck, Rt as Clock, ct as MapPin, gn as ArrowLeft, q as Phone } from "../_libs/lucide-react.mjs";
import { f as Button, l as demoPharmacies } from "./router-DnzDjJrL2.mjs";
import { o as EmptyState, p as SectionHeading, t as AvailabilityPill, u as ProvenanceLine } from "./primitives-Dg_-FqLy.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.pharmacies._pharmacyId-kf1xEETX.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.pharmacies.$pharmacyId.tsx?tsr-split=component";
function PharmacyDetail() {
	const { pharmacyId } = Route.useParams();
	const pharmacy = demoPharmacies.find((p) => p.id === pharmacyId);
	const { data: stock, isPending } = useQuery({
		queryKey: ["pharmacy-stock", pharmacyId],
		queryFn: () => getPharmacyStock(pharmacyId)
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
					to: "/app/pharmacies",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this), " All pharmacies"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-2xl font-bold tracking-tight",
						children: pharmacy.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-muted-foreground",
						children: [
							pharmacy.address,
							", ",
							pharmacy.city
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 38,
										columnNumber: 13
									}, this),
									" ",
									pharmacy.distanceKm,
									" km away"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 42,
										columnNumber: 13
									}, this),
									pharmacy.open24h ? "Open 24 hours" : `${pharmacy.opensAt} – ${pharmacy.closesAt}`,
									" ",
									"· ",
									isOpenNow(pharmacy) ? "open now" : "closed"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `tel:${pharmacy.phone}`,
								className: "inline-flex items-center gap-1.5 hover:underline",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 47,
										columnNumber: 13
									}, this),
									" ",
									pharmacy.phone
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, {
										className: "size-4 text-success",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 13
									}, this),
									" Licence",
									" ",
									pharmacy.licenseId
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProvenanceLine, { provenance: pharmacy.provenance }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { title: "Services" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: pharmacy.services.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground",
						children: s
					}, s, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 39
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, {
						title: "Listed stock",
						description: "Availability is reported by the pharmacy and can change before you arrive. Call ahead for prescription-only items."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 9
					}, this),
					isPending && [
						0,
						1,
						2
					].map((i) => /* @__PURE__ */ (void 0)(Skeleton, { className: "h-16 w-full rounded-lg" }, i, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 42
					}, this)),
					stock?.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface flex flex-wrap items-center gap-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/app/medicine/$medicineId",
									params: { medicineId: row.medicine.id },
									className: "font-medium text-ink hover:underline",
									children: row.medicine.brandName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										row.medicine.genericName,
										" · ",
										row.listing.packSize
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvailabilityPill, { value: row.listing.availability }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "numeric font-semibold",
								children: formatMoney(row.listing.price)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 13
							}, this)
						]
					}, row.listing.id, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 28
					}, this)),
					stock?.length === 0 && /* @__PURE__ */ (void 0)(EmptyState, {
						icon: MapPin,
						title: "No listings",
						description: "This pharmacy has no demo listings."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 33
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 10
	}, this);
}
//#endregion
export { PharmacyDetail as component };
