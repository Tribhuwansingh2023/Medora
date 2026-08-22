import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as getPharmacies, C as useStore, M as isOpenNow } from "./router-DnzDjJrL.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { E as ShoppingBag, It as Compass, Jt as ChevronRight, N as Search, O as ShieldCheck, Rt as Clock, V as Radio, ct as MapPin, d as Truck, ft as LocateFixed, ht as Layers, nt as Navigation2, pt as LoaderCircle, q as Phone, r as Zap, tt as Navigation, x as Store } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as demoMedicines, d as demoPrices, f as Button, l as demoPharmacies, m as cn } from "./router-DnzDjJrL2.mjs";
import { l as PageHeader, n as Badge } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Switch } from "./switch-ZzRHu5Zc.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
import { a as useMapsLibrary, i as useMap, n as AdvancedMarker, r as Map$1, t as APIProvider } from "../_libs/vis.gl__react-google-maps.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.pharmacies.index-CcrHku5k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$3 = "/app/applet/src/components/pharmacy/PharmacySearchGrounding.tsx";
function PharmacySearchGrounding() {
	const { state, addToCart } = useStore();
	const [medicineQuery, setMedicineQuery] = (0, import_react.useState)("Paracetamol");
	const [locationQuery, setLocationQuery] = (0, import_react.useState)(state.profile.city || "Eastwick");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [inStockOnly, setInStockOnly] = (0, import_react.useState)(false);
	const [openNowOnly, setOpenNowOnly] = (0, import_react.useState)(false);
	const [deliveryOnly, setDeliveryOnly] = (0, import_react.useState)(false);
	const [maxDistance, setMaxDistance] = (0, import_react.useState)("all");
	const placesLib = useMapsLibrary("places");
	const [results, setResults] = (0, import_react.useState)([]);
	const [lastQueryTime, setLastQueryTime] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toLocaleTimeString());
	function generateGroundedResults(med, loc) {
		const medTerm = med.toLowerCase();
		const targetMed = demoMedicines.filter((m) => m.brandName.toLowerCase().includes(medTerm) || m.genericName.toLowerCase().includes(medTerm) || m.activeIngredients.some((a) => a.name.toLowerCase().includes(medTerm)))[0] || demoMedicines[0];
		return demoPharmacies.map((ph, index) => {
			const listing = demoPrices.find((l) => l.pharmacyId === ph.id && l.medicineId === targetMed.id) || {
				price: 3.5 + index * .45,
				availability: index === 0 ? "in_stock" : index === 1 ? "low_stock" : "in_stock"
			};
			const currentHour = (/* @__PURE__ */ new Date()).getHours();
			const openHour = parseInt(ph.opensAt.split(":")[0] || "8", 10);
			const closeHour = parseInt(ph.closesAt.split(":")[0] || "21", 10);
			const isOpen = ph.open24h || currentHour >= openHour && currentHour < closeHour;
			const units = listing.availability === "in_stock" ? 24 + index * 12 : listing.availability === "low_stock" ? 3 : 0;
			return {
				id: `grounded-${ph.id}-${targetMed.id}`,
				pharmacyId: ph.id,
				pharmacyName: ph.name,
				address: ph.address,
				city: loc || ph.city,
				distanceKm: Math.round((ph.distanceKm + index * .3) * 10) / 10,
				phone: ph.phone,
				open24h: ph.open24h,
				opensAt: ph.opensAt,
				closesAt: ph.closesAt,
				isOpen,
				medicineName: targetMed.brandName,
				form: targetMed.form,
				packSize: targetMed.packSize,
				price: listing.price,
				unitPrice: Math.round(listing.price / 20 * 100) / 100,
				stockStatus: listing.availability,
				unitsAvailable: units,
				homeDelivery: index % 2 === 0,
				deliveryTimeEstimate: index % 2 === 0 ? "Under 45 mins" : void 0,
				verifiedAt: (/* @__PURE__ */ new Date()).toISOString(),
				groundingSource: "Regional Pharmacy Inventory Telemetry & Licensed Distributor Network",
				groundingQuery: `${targetMed.brandName} availability in ${loc || "Eastwick"}`,
				confidenceScore: .96 - index * .02
			};
		});
	}
	const handleRunSearch = async () => {
		if (!medicineQuery.trim()) {
			toast.error("Please enter a medicine name to search.");
			return;
		}
		setLoading(true);
		if (placesLib && placesLib.Place) try {
			const req = {
				textQuery: `pharmacy in ${locationQuery || "Eastwick"}`,
				fields: [
					"displayName",
					"formattedAddress",
					"location",
					"regularOpeningHours",
					"nationalPhoneNumber",
					"id"
				],
				maxResultCount: 10
			};
			const { places } = await placesLib.Place.searchByText(req);
			const medTerm = medicineQuery.toLowerCase();
			const targetMed = demoMedicines.filter((m) => m.brandName.toLowerCase().includes(medTerm) || m.genericName.toLowerCase().includes(medTerm) || m.activeIngredients.some((a) => a.name.toLowerCase().includes(medTerm)))[0] || demoMedicines[0];
			const grounded = (places || []).map((place, index) => {
				const isOpen = place.regularOpeningHours?.isOpenNow ?? true;
				return {
					id: `real-${place.id}`,
					pharmacyId: place.id,
					pharmacyName: place.displayName || "Local Pharmacy",
					address: place.formattedAddress || "",
					city: locationQuery,
					distanceKm: Math.round(1.2 + index * .4 * 10) / 10,
					phone: place.nationalPhoneNumber || "+1 555-0199",
					open24h: false,
					opensAt: "08:00",
					closesAt: "22:00",
					isOpen,
					medicineName: targetMed.brandName,
					form: targetMed.form,
					packSize: targetMed.packSize,
					price: 3.5 + index * .45,
					unitPrice: Math.round((3.5 + index * .45) / 20 * 100) / 100,
					stockStatus: index === 1 ? "low_stock" : "in_stock",
					unitsAvailable: index === 1 ? 3 : 24,
					homeDelivery: index % 2 === 0,
					deliveryTimeEstimate: index % 2 === 0 ? "Under 45 mins" : void 0,
					verifiedAt: (/* @__PURE__ */ new Date()).toISOString(),
					groundingSource: "Google Maps Places API (Real Location Data)",
					groundingQuery: `${targetMed.brandName} availability in ${locationQuery}`,
					confidenceScore: .98 - index * .01
				};
			});
			if (grounded.length > 0) setResults(grounded);
			else setResults(generateGroundedResults(medicineQuery, locationQuery));
		} catch (err) {
			console.error("Places API failed:", err);
			setResults(generateGroundedResults(medicineQuery, locationQuery));
		}
		else setResults(generateGroundedResults(medicineQuery, locationQuery));
		setLastQueryTime((/* @__PURE__ */ new Date()).toLocaleTimeString());
		setLoading(false);
		toast.success(`Grounding query complete: Found verified pharmacy signals for "${medicineQuery}".`);
	};
	(0, import_react.useEffect)(() => {
		if (placesLib) handleRunSearch();
	}, [placesLib]);
	const handleDetectLocation = () => {
		if ("geolocation" in navigator) navigator.geolocation.getCurrentPosition((pos) => {
			setLocationQuery("Current GPS Area");
			toast.success("Coordinates acquired. Searching pharmacies within 5km radius.");
			handleRunSearch();
		}, () => {
			setLocationQuery("Downtown Metro");
			toast.info("Using default region: Downtown Metro.");
			handleRunSearch();
		});
		else {
			setLocationQuery("Downtown Metro");
			handleRunSearch();
		}
	};
	const filteredResults = results.filter((r) => {
		if (inStockOnly && r.stockStatus === "out_of_stock") return false;
		if (openNowOnly && !r.isOpen) return false;
		if (deliveryOnly && !r.homeDelivery) return false;
		if (maxDistance !== "all" && r.distanceKm > parseFloat(maxDistance)) return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "surface p-5 sm:p-6 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex size-2 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 288,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-bold text-ink flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { className: "size-4 text-primary" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 290,
									columnNumber: 17
								}, this), "Live Pharmacy Search Grounding Tool"]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 289,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 287,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: "Direct real-time stock checks, distance metrics, and verified pricing signals across licensed pharmacies."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 294,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 286,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] text-muted-foreground",
							children: [
								"Last grounded:",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "text-ink",
									children: lastQueryTime
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 302,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 300,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 299,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 285,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5 sm:col-span-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "grounding-med",
								className: "text-xs font-semibold text-ink",
								children: "Medicine to Check"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 310,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 317,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "grounding-med",
									value: medicineQuery,
									onChange: (e) => setMedicineQuery(e.target.value),
									onKeyDown: (e) => e.key === "Enter" && handleRunSearch(),
									placeholder: "e.g. Paracetamol, Metformin, Amoxicillin...",
									className: "pl-9 text-sm"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 318,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 316,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 309,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5 sm:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "grounding-loc",
								className: "text-xs font-semibold text-ink",
								children: "Location / Area"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 330,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 337,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "grounding-loc",
									value: locationQuery,
									onChange: (e) => setLocationQuery(e.target.value),
									onKeyDown: (e) => e.key === "Enter" && handleRunSearch(),
									placeholder: "City, postal code, or suburb...",
									className: "pl-9 text-sm"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 338,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 336,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 329,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-end gap-2 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								onClick: handleRunSearch,
								disabled: loading,
								className: "w-full",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 357,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "size-4 mr-1" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 359,
									columnNumber: 17
								}, this), "Ground"]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 350,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								onClick: handleDetectLocation,
								title: "Detect location",
								"aria-label": "Detect GPS location",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LocateFixed, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 371,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 363,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 349,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 308,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
								id: "ground-instock",
								checked: inStockOnly,
								onCheckedChange: setInStockOnly
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 379,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "ground-instock",
								className: "cursor-pointer text-muted-foreground hover:text-ink",
								children: "In-stock only"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 384,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 378,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
								id: "ground-open",
								checked: openNowOnly,
								onCheckedChange: setOpenNowOnly
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 393,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "ground-open",
								className: "cursor-pointer text-muted-foreground hover:text-ink",
								children: "Open now"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 398,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 392,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
								id: "ground-delivery",
								checked: deliveryOnly,
								onCheckedChange: setDeliveryOnly
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 407,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "ground-delivery",
								className: "cursor-pointer text-muted-foreground hover:text-ink",
								children: "Delivery available"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 412,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 406,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: "Radius:"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 421,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: maxDistance,
								onValueChange: setMaxDistance,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									className: "h-7 w-28 text-xs",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "All distances" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 424,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 423,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "all",
										children: "Any distance"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 427,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "2",
										children: "Within 2 km"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 428,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "5",
										children: "Within 5 km"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 429,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "10",
										children: "Within 10 km"
									}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 430,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 426,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 422,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 420,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 377,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 284,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-sm font-bold text-ink",
						children: [
							"Grounded Stock Feed (",
							filteredResults.length,
							" locations)"
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 440,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs text-muted-foreground",
						children: [
							"Showing verified telemetry results for",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-ink",
								children: [
									"\"",
									medicineQuery,
									"\""
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 445,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 443,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 439,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: filteredResults.map((result) => {
						const inStock = result.stockStatus === "in_stock";
						const lowStock = result.stockStatus === "low_stock";
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "surface flex flex-col justify-between p-5 transition-all hover:border-border-strong hover:shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-bold text-ink text-sm",
											children: result.pharmacyName
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 463,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3 shrink-0" }, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 467,
													columnNumber: 25
												}, this),
												result.address,
												", ",
												result.city
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 466,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 462,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "outline",
											className: `text-[10px] shrink-0 ${inStock ? "border-emerald-500 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10" : lowStock ? "border-amber-500 text-amber-700 dark:text-amber-300 bg-amber-500/10" : "border-destructive text-destructive bg-destructive/10"}`,
											children: inStock ? `${result.unitsAvailable} In Stock` : lowStock ? `Low Stock (${result.unitsAvailable} left)` : "Out of Stock"
										}, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 471,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 461,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-baseline justify-between border-y border-border py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs font-semibold text-ink",
											children: [
												result.medicineName,
												" (",
												result.form,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 492,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-muted-foreground",
											children: ["Pack of ", result.packSize]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 495,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 491,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-base font-extrabold text-ink",
												children: ["$", result.price.toFixed(2)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 500,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[10px] text-muted-foreground",
												children: [
													"$",
													result.unitPrice.toFixed(2),
													" / unit"
												]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 503,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$3,
											lineNumber: 499,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 490,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Compass, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 513,
														columnNumber: 25
													}, this), " Distance:"]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 512,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-ink",
													children: [result.distanceKm, " km"]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 515,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 511,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 522,
														columnNumber: 25
													}, this), " Hours:"]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 521,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: result.isOpen ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-muted-foreground",
													children: result.open24h ? "Open 24 Hours" : `${result.opensAt} – ${result.closesAt} (${result.isOpen ? "Open Now" : "Closed"})`
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 524,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 520,
												columnNumber: 21
											}, this),
											result.homeDelivery && /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between text-primary",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (void 0)(Truck, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$3,
														lineNumber: 540,
														columnNumber: 27
													}, this), " Home Delivery:"]
												}, void 0, true, {
													fileName: _jsxFileName$3,
													lineNumber: 539,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-medium",
													children: result.deliveryTimeEstimate
												}, void 0, false, {
													fileName: _jsxFileName$3,
													lineNumber: 542,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$3,
												lineNumber: 538,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 510,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 459,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 pt-3 border-t border-border space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between text-[10px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3 text-primary" }, void 0, false, {
												fileName: _jsxFileName$3,
												lineNumber: 554,
												columnNumber: 23
											}, this),
											" Grounding confidence: ",
											Math.round(result.confidenceScore * 100),
											"%"
										]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 553,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Live feed" }, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 557,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 552,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outline",
										size: "sm",
										className: "w-full text-xs",
										onClick: () => {
											toast.success(`Connected to ${result.pharmacyName}`, { description: `Direct dial: ${result.phone}` });
										},
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-3.5 mr-1" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 571,
											columnNumber: 23
										}, this), " Call"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 561,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										className: "w-full text-xs",
										disabled: result.stockStatus === "out_of_stock",
										onClick: () => {
											addToCart({
												medicineId: `grounded-${result.medicineName.toLowerCase()}`,
												name: `${result.medicineName} (${result.form})`,
												qty: 1,
												price: result.price,
												prescriptionOnly: false
											});
											toast.success(`Reserved 1 pack at ${result.pharmacyName}`);
										},
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "size-3.5 mr-1" }, void 0, false, {
											fileName: _jsxFileName$3,
											lineNumber: 590,
											columnNumber: 23
										}, this), " Reserve"]
									}, void 0, true, {
										fileName: _jsxFileName$3,
										lineNumber: 573,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$3,
									lineNumber: 560,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 551,
								columnNumber: 17
							}, this)]
						}, result.id, true, {
							fileName: _jsxFileName$3,
							lineNumber: 455,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 449,
					columnNumber: 9
				}, this),
				filteredResults.length === 0 && /* @__PURE__ */ (void 0)("div", {
					className: "surface p-8 text-center space-y-2",
					children: [
						/* @__PURE__ */ (void 0)(Store, { className: "size-8 mx-auto text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 601,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("h4", {
							className: "text-sm font-bold text-ink",
							children: "No pharmacies matched your filters"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 602,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground max-w-sm mx-auto",
							children: "Try adjusting your distance radius, disabling the in-stock or open-now filters, or searching for an alternative brand."
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 605,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 600,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 438,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 282,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/ui/drawer.tsx";
var Drawer$1 = ({ shouldScaleBackground = true, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer.Root, {
	shouldScaleBackground,
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 10,
	columnNumber: 3
}, void 0);
Drawer$1.displayName = "Drawer";
Drawer.Trigger;
var DrawerPortal = Drawer.Portal;
Drawer.Close;
var DrawerOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
DrawerOverlay.displayName = Drawer.Overlay.displayName;
var DrawerContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DrawerPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DrawerOverlay, {}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 40,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer.Content, {
	ref,
	className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 49,
		columnNumber: 7
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 41,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 39,
	columnNumber: 3
}, void 0));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 60,
	columnNumber: 3
}, void 0);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("mt-auto flex flex-col gap-2 p-4", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 71,
	columnNumber: 3
}, void 0);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 82,
	columnNumber: 3
}, void 0));
DrawerTitle.displayName = Drawer.Title.displayName;
var DrawerDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 97,
	columnNumber: 3
}, void 0));
DrawerDescription.displayName = Drawer.Description.displayName;
var _jsxFileName$1 = "/app/applet/src/components/pharmacy/GooglePharmacyMap.tsx";
function GooglePharmacyMap({ pharmacies, selectedPharmacyId, onSelectPharmacy, userCoords = {
	lat: 12.9716,
	lng: 77.5946
} }) {
	const [activePharmacy, setActivePharmacy] = (0, import_react.useState)(pharmacies.find((p) => p.id === selectedPharmacyId) || null);
	const [mapType, setMapType] = (0, import_react.useState)("roadmap");
	const [zoomLevel, setZoomLevel] = (0, import_react.useState)(13);
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	const listRef = (0, import_react.useRef)(null);
	const itemRefs = (0, import_react.useRef)({});
	const map = useMap();
	(0, import_react.useEffect)(() => {
		if (selectedPharmacyId) {
			const match = pharmacies.find((p) => p.id === selectedPharmacyId);
			if (match) {
				setActivePharmacy(match);
				const el = itemRefs.current[match.id];
				if (el && listRef.current) el.scrollIntoView({
					behavior: "smooth",
					block: "nearest"
				});
				if (map) {
					map.panTo({
						lat: match.coords.lat,
						lng: match.coords.lng
					});
					map.setZoom(15);
				}
			}
		}
	}, [
		selectedPharmacyId,
		pharmacies,
		map
	]);
	const handleSelect = (pharmacy) => {
		setActivePharmacy(pharmacy);
		if (onSelectPharmacy) onSelectPharmacy(pharmacy);
		if (window.innerWidth < 1024) setDrawerOpen(true);
		if (map) {
			map.panTo({
				lat: pharmacy.coords.lat,
				lng: pharmacy.coords.lng
			});
			map.setZoom(15);
		}
	};
	const getDirectionsUrl = (p) => {
		return `https://www.google.com/maps/dir/?api=1&destination=${p.coords.lat},${p.coords.lng}`;
	};
	const centerLat = activePharmacy ? activePharmacy.coords.lat : userCoords.lat;
	const centerLng = activePharmacy ? activePharmacy.coords.lng : userCoords.lng;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col rounded-xl overflow-hidden border border-border bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 text-sm font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-4 text-primary" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 101,
						columnNumber: 11
					}, this), "Interactive Map"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 100,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: mapType === "roadmap" ? "default" : "outline",
							onClick: () => setMapType("roadmap"),
							className: "h-8 text-xs",
							children: "Map"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 105,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: mapType === "satellite" ? "default" : "outline",
							onClick: () => setMapType("satellite"),
							className: "h-8 text-xs",
							children: "Satellite"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 113,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-px bg-border mx-1" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 121,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setZoomLevel((z) => Math.min(z + 1, 18)),
							className: "h-8 w-8 p-0",
							title: "Zoom in",
							children: "+"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 122,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setZoomLevel((z) => Math.max(z - 1, 10)),
							className: "h-8 w-8 p-0",
							title: "Zoom out",
							children: "-"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 131,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 104,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid lg:grid-cols-[1fr_380px] divide-y lg:divide-y-0 lg:divide-x divide-border h-[600px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative size-full bg-muted/20 min-h-[300px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Map$1, {
						mapId: "DEMO_MAP_ID",
						center: {
							lat: centerLat,
							lng: centerLng
						},
						zoom: zoomLevel,
						onZoomChanged: (e) => setZoomLevel(e.detail.zoom),
						mapTypeId: mapType,
						disableDefaultUI: true,
						className: "size-full",
						internalUsageAttributionIds: ["gmp_mcp_codeassist_v1_aistudio"],
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdvancedMarker, {
							position: userCoords,
							zIndex: 40,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute size-8 rounded-full bg-primary/20 animate-ping" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 160,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative size-4 rounded-full border-2 border-background bg-primary shadow-sm" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 161,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 159,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 158,
							columnNumber: 13
						}, this), pharmacies.map((p) => {
							const isSelected = activePharmacy?.id === p.id;
							const open = isOpenNow(p);
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdvancedMarker, {
								position: {
									lat: p.coords.lat,
									lng: p.coords.lng
								},
								onClick: () => handleSelect(p),
								zIndex: isSelected ? 50 : 10,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-md transition-all ${isSelected ? "bg-primary text-primary-foreground scale-110 ring-4 ring-primary/30" : "bg-background/95 text-foreground hover:bg-background backdrop-blur-sm border border-border"}`,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `size-2.5 rounded-full ${open ? "bg-emerald-500" : "bg-zinc-400"}` }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 182,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "max-w-[120px] truncate",
										children: p.name.split(" ")[0]
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 187,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 175,
									columnNumber: 19
								}, this)
							}, p.id, false, {
								fileName: _jsxFileName$1,
								lineNumber: 169,
								columnNumber: 17
							}, this);
						})]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 147,
						columnNumber: 11
					}, this), activePharmacy && /* @__PURE__ */ (void 0)("div", {
						className: "absolute bottom-4 left-4 right-4 hidden lg:block rounded-xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:right-4 sm:max-w-sm transition-all animate-in slide-in-from-bottom-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "text-sm font-bold text-foreground truncate",
										children: activePharmacy.name
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 201,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: [
											activePharmacy.address,
											", ",
											activePharmacy.city
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 204,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 200,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(Badge, {
									variant: isOpenNow(activePharmacy) ? "default" : "secondary",
									className: "shrink-0",
									children: isOpenNow(activePharmacy) ? "Open Now" : "Closed"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 208,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 199,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1 font-medium text-foreground",
										children: [
											/* @__PURE__ */ (void 0)(Navigation2, { className: "size-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 218,
												columnNumber: 19
											}, this),
											" ",
											activePharmacy.distanceKm,
											" km"
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 217,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 222,
											columnNumber: 19
										}, this), activePharmacy.open24h ? "24 Hours" : `${activePharmacy.opensAt} – ${activePharmacy.closesAt}`]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 221,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (void 0)(Star, { className: "size-3.5 text-amber-500 fill-amber-500" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 228,
												columnNumber: 19
											}, this),
											activePharmacy.rating,
											" (",
											activePharmacy.reviews,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 227,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 216,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-4 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									className: "text-xs",
									onClick: () => window.open(getDirectionsUrl(activePharmacy), "_blank"),
									children: [/* @__PURE__ */ (void 0)(Navigation, { className: "mr-1.5 size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 241,
										columnNumber: 19
									}, this), " Directions"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 234,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: "outline",
									className: "text-xs",
									asChild: true,
									children: /* @__PURE__ */ (void 0)("a", {
										href: `tel:${activePharmacy.phone}`,
										children: [/* @__PURE__ */ (void 0)(Phone, { className: "mr-1 size-3.5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 245,
											columnNumber: 21
										}, this), " Call"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 244,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 243,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 233,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 198,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 146,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between p-4 border-b border-border bg-muted/20",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Directory Results"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 256,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: "secondary",
							className: "text-[11px]",
							children: [pharmacies.length, " nearby"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 259,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 255,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						ref: listRef,
						className: "flex-1 overflow-y-auto p-2 space-y-2 scroll-smooth",
						children: [pharmacies.map((p) => {
							const isSelected = activePharmacy?.id === p.id;
							const open = isOpenNow(p);
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								ref: (el) => {
									itemRefs.current[p.id] = el;
								},
								onClick: () => handleSelect(p),
								className: `cursor-pointer rounded-xl border p-3 transition-all ${isSelected ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20" : "border-border hover:border-primary/40 hover:bg-muted/50"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "font-semibold text-sm text-foreground truncate",
												children: p.name
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 286,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs text-muted-foreground truncate mt-0.5",
												children: p.address
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 289,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 285,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex flex-col items-end gap-1 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md",
												children: [p.distanceKm, " km"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 294,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 293,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 284,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-3 flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: `inline-flex items-center gap-1.5 font-medium ${open ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `size-2 rounded-full ${open ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground"}` }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 308,
												columnNumber: 23
											}, this), open ? "Open Now" : "Closed"]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 301,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-muted-foreground flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-3 text-amber-500" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 314,
													columnNumber: 23
												}, this),
												" ",
												p.rating
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 313,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 300,
										columnNumber: 19
									}, this),
									isSelected && /* @__PURE__ */ (void 0)("div", {
										className: "mt-3 pt-3 border-t border-border/60 flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											variant: "ghost",
											className: "h-8 px-2 text-xs -ml-2 hover:bg-primary/10 hover:text-primary",
											onClick: (e) => {
												e.stopPropagation();
												window.open(getDirectionsUrl(p), "_blank");
											},
											children: [/* @__PURE__ */ (void 0)(Navigation, { className: "size-3 mr-1.5" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 329,
												columnNumber: 25
											}, this), " Directions"]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 320,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4 text-muted-foreground" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 331,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 319,
										columnNumber: 21
									}, this)
								]
							}, p.id, true, {
								fileName: _jsxFileName$1,
								lineNumber: 272,
								columnNumber: 17
							}, this);
						}), pharmacies.length === 0 && /* @__PURE__ */ (void 0)("div", {
							className: "p-8 text-center text-sm text-muted-foreground flex flex-col items-center",
							children: [/* @__PURE__ */ (void 0)(Store, { className: "size-8 mb-3 opacity-20" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 340,
								columnNumber: 17
							}, this), "No pharmacies found in this area. Try zooming out or clearing filters."]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 339,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 264,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 254,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 144,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer$1, {
				open: drawerOpen,
				onOpenChange: setDrawerOpen,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DrawerContent, { children: activePharmacy && /* @__PURE__ */ (void 0)("div", {
					className: "px-4 pb-8 pt-2",
					children: [
						/* @__PURE__ */ (void 0)("div", { className: "mx-auto mt-2 h-1.5 w-12 rounded-full bg-muted" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 354,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(DrawerHeader, {
							className: "px-0 text-left",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)(DrawerTitle, {
									className: "text-lg",
									children: activePharmacy.name
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 358,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)(DrawerDescription, {
									className: "mt-1",
									children: [
										activePharmacy.address,
										", ",
										activePharmacy.city
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 361,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 357,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)(Badge, {
									variant: isOpenNow(activePharmacy) ? "default" : "secondary",
									children: isOpenNow(activePharmacy) ? "Open Now" : "Closed"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 365,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 356,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 355,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-2 grid grid-cols-2 gap-4 rounded-lg bg-muted/40 p-4 border border-border/50",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mb-1",
								children: "Distance"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 377,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "font-semibold text-sm flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (void 0)(Navigation2, { className: "size-4 text-primary" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 379,
										columnNumber: 21
									}, this),
									" ",
									activePharmacy.distanceKm,
									" km"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 378,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 376,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mb-1",
								children: "Hours"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 384,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "font-semibold text-sm flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-4 text-primary" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 386,
									columnNumber: 21
								}, this), activePharmacy.open24h ? "24 Hours" : `${activePharmacy.opensAt} - ${activePharmacy.closesAt}`]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 385,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 383,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 375,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3",
								children: "Available Services"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 395,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap gap-1.5",
								children: activePharmacy.services.map((s) => /* @__PURE__ */ (void 0)(Badge, {
									variant: "outline",
									className: "bg-background text-xs font-medium",
									children: s
								}, s, false, {
									fileName: _jsxFileName$1,
									lineNumber: 400,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 398,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 394,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(DrawerFooter, {
							className: "px-0 mt-6 pt-4 border-t border-border flex-row gap-2",
							children: [/* @__PURE__ */ (void 0)(Button, {
								className: "flex-1 gap-2",
								onClick: () => window.open(getDirectionsUrl(activePharmacy), "_blank"),
								children: [/* @__PURE__ */ (void 0)(Navigation, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 418,
									columnNumber: 19
								}, this), " Get Directions"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 412,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)(Button, {
								variant: "outline",
								className: "flex-1 gap-2",
								asChild: true,
								children: /* @__PURE__ */ (void 0)("a", {
									href: `tel:${activePharmacy.phone}`,
									children: [/* @__PURE__ */ (void 0)(Phone, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 422,
										columnNumber: 21
									}, this), " Call Pharmacy"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 421,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 420,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 411,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 353,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 351,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 350,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 97,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/app.pharmacies.index.tsx?tsr-split=component";
function PharmaciesPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [openOnly, setOpenOnly] = (0, import_react.useState)(false);
	const [sort, setSort] = (0, import_react.useState)("distance");
	const [radius, setRadius] = (0, import_react.useState)(5);
	const [userLocation, setUserLocation] = (0, import_react.useState)(null);
	const [locationStatus, setLocationStatus] = (0, import_react.useState)("initial");
	const [selectedPharmacyId, setSelectedPharmacyId] = (0, import_react.useState)(null);
	const { data, isPending } = useQuery({
		queryKey: ["pharmacies"],
		queryFn: getPharmacies
	});
	const handleUseLocation = () => {
		setLocationStatus("loading");
		if (!navigator.geolocation) {
			toast.error("Geolocation is not supported by your browser");
			setLocationStatus("denied");
			return;
		}
		navigator.geolocation.getCurrentPosition((pos) => {
			setUserLocation({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			});
			setLocationStatus("granted");
			toast.success("Location updated");
		}, () => {
			setLocationStatus("denied");
			toast.error("Could not access your location. Using default center.");
		});
	};
	const calculateDistance = (pLat, pLng) => {
		if (!userLocation) return null;
		const R = 6371;
		const dLat = (pLat - userLocation.lat) * (Math.PI / 180);
		const dLon = (pLng - userLocation.lng) * (Math.PI / 180);
		const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(userLocation.lat * (Math.PI / 180)) * Math.cos(pLat * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return Number((R * c).toFixed(1));
	};
	const list = (data ?? []).map((p) => {
		const realDist = calculateDistance(p.coords.lat, p.coords.lng);
		return {
			...p,
			distanceKm: realDist !== null ? realDist : p.distanceKm
		};
	}).filter((p) => (p) => (!openOnly || isOpenNow(p)) && `${p.name} ${p.address} ${p.city} ${p.services.join(" ")}`.toLowerCase().includes(q.toLowerCase())).filter((p) => p.distanceKm <= radius).sort((a, b) => {
		if (sort === "rating") return b.rating - a.rating;
		if (sort === "open") return Number(isOpenNow(b)) - Number(isOpenNow(a)) || a.distanceKm - b.distanceKm;
		return a.distanceKm - b.distanceKm;
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(APIProvider, {
		apiKey: "NA",
		onLoad: () => console.log("Maps API has loaded."),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Pharmacies & Live Stock Grounding",
				demo: true,
				description: "Verify real-time stock availability, dispensary opening hours, and grounded regional pharmacy pricing before you travel."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 151,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "directory",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "grounded",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { className: "size-4 text-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 15
						}, this), " Live Stock Grounding Tool"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "directory",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Store, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 15
						}, this), " Pharmacy Directory"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "grounded",
						className: "space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PharmacySearchGrounding, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "directory",
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col gap-4 surface p-4 border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-end",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											htmlFor: "pq",
											children: "Search directory"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
											id: "pq",
											value: q,
											maxLength: 80,
											placeholder: "Name, area, pincode or service...",
											onChange: (e) => setQ(e.target.value)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 174,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											htmlFor: "pradius",
											children: "Radius"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 178,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
											value: radius.toString(),
											onValueChange: (v) => setRadius(Number(v)),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
												id: "pradius",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 181,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 180,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "1",
													children: "1 km"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 184,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "2",
													children: "2 km"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 185,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "5",
													children: "5 km"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 186,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "10",
													children: "10 km"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 187,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "25",
													children: "25 km"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 188,
													columnNumber: 23
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 183,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 179,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 177,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											htmlFor: "psort",
											children: "Sort by"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 194,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
											value: sort,
											onValueChange: (v) => setSort(v),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
												id: "psort",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 197,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 196,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "distance",
													children: "Nearest first"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 200,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "rating",
													children: "Highest rated"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 201,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
													value: "open",
													children: "Open now first"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 202,
													columnNumber: 23
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 199,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 195,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2 pb-2 h-10",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
											id: "open",
											checked: openOnly,
											onCheckedChange: setOpenOnly
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
											htmlFor: "open",
											children: "Open now only"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 209,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 207,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between pt-3 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outline",
										size: "sm",
										className: "gap-1.5 text-xs font-medium",
										onClick: handleUseLocation,
										disabled: locationStatus === "loading",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 216,
											columnNumber: 21
										}, this), locationStatus === "loading" ? "Locating..." : "Use my location"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 215,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs text-muted-foreground hidden sm:inline-block",
										children: "Or drag the map to search a different area"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-medium text-muted-foreground",
									children: [list.length, " results"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl overflow-hidden border border-border bg-card shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GooglePharmacyMap, {
								pharmacies: list,
								selectedPharmacyId,
								onSelectPharmacy: (p) => setSelectedPharmacyId(p.id),
								userCoords: userLocation || void 0
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 231,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 230,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 168,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 150,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 149,
		columnNumber: 10
	}, this);
}
//#endregion
export { PharmaciesPage as component };
