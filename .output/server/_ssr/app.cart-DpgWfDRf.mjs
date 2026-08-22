import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, E as formatMoney } from "./router-DnzDjJrL.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ShoppingBag, U as Plus, at as Minus, h as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, l as demoPharmacies, m as cn } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader, o as EmptyState, s as IntegrationNotConnected } from "./primitives-Dg_-FqLy.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.cart-DpgWfDRf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/separator.tsx";
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 14,
	columnNumber: 5
}, void 0));
Separator.displayName = Root.displayName;
var _jsxFileName = "/app/applet/src/routes/app.cart.tsx?tsr-split=component";
function CartPage() {
	const { state, setCartQty, removeFromCart, placeOrder, pushNotification } = useStore();
	const navigate = useNavigate();
	const [pharmacyId, setPharmacyId] = (0, import_react.useState)(demoPharmacies[0]?.id ?? "");
	const [fulfilment, setFulfilment] = (0, import_react.useState)("pickup");
	const [prescriptionId, setPrescriptionId] = (0, import_react.useState)("none");
	const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
	const needsRx = state.cart.some((i) => i.prescriptionOnly);
	const verifiedRx = state.prescriptions.filter((r) => r.status === "verified" || r.status === "reviewed");
	const rxSelected = prescriptionId !== "none";
	const blocked = needsRx && !rxSelected;
	const submit = () => {
		const pharmacy = demoPharmacies.find((p) => p.id === pharmacyId);
		if (!pharmacy) return;
		const order = placeOrder(pharmacy.id, pharmacy.name, fulfilment, rxSelected ? prescriptionId : void 0);
		pushNotification({
			kind: "order",
			title: `Reservation ${order.id} created`,
			body: `${pharmacy.name} · ${order.status.replace("_", " ")} (demo mode, no real order was sent).`
		});
		toast.success(`Reservation ${order.id} created in demo mode`, { description: "No real pharmacy was contacted and no payment was taken." });
		navigate({ to: "/app/orders" });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			title: "Basket",
			demo: true,
			description: "Reserve items at a nearby pharmacy. Prescription-only items cannot be released until a pharmacist verifies a valid prescription."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this), state.cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			icon: ShoppingBag,
			title: "Your basket is empty",
			description: "Add a product from a medicine page or a price comparison to reserve it at a nearby pharmacy.",
			action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/app/search",
					children: "Find a medicine"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 209
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 34
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-3",
				children: [state.cart.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "surface flex flex-wrap items-center gap-4 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app/medicine/$medicineId",
								params: { medicineId: item.medicineId },
								className: "font-semibold text-ink hover:underline",
								children: item.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									item.prescriptionOnly ? "Prescription-only" : "Over the counter",
									" ",
									"· ",
									formatMoney(item.price),
									" each (demo price)"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1 rounded-md border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-8",
									"aria-label": `Decrease quantity of ${item.name}`,
									onClick: () => setCartQty(item.medicineId, item.qty - 1),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {
										className: "size-3.5",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 67,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "numeric w-8 text-center text-sm font-medium",
									children: item.qty
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-8",
									"aria-label": `Increase quantity of ${item.name}`,
									onClick: () => setCartQty(item.medicineId, item.qty + 1),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {
										className: "size-3.5",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 73,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "numeric w-20 text-right font-semibold",
							children: formatMoney(item.price * item.qty)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": `Remove ${item.name}`,
							onClick: () => {
								removeFromCart(item.medicineId);
								toast("Removed from basket");
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 17
						}, this)
					]
				}, item.medicineId, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 37
				}, this)), needsRx && /* @__PURE__ */ (void 0)(SafetyNotice, {
					tone: "warning",
					title: "This basket contains a prescription-only medicine",
					children: "A pharmacist must verify a valid prescription before these items can be dispensed. Attach a prescription below, or the order will be held as “awaiting prescription”."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 25
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "surface space-y-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-bold",
							children: "Reservation details"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "pharmacy",
								children: "Pharmacy"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: pharmacyId,
								onValueChange: setPharmacyId,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									id: "pharmacy",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a pharmacy" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 101,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: demoPharmacies.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: p.id,
									children: [
										p.name,
										" · ",
										p.distanceKm,
										" km"
									]
								}, p.id, true, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 46
								}, this)) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "fulfilment",
								children: "Fulfilment"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: fulfilment,
								onValueChange: (v) => setFulfilment(v),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									id: "fulfilment",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 114,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "pickup",
									children: "Collect in store"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value: "delivery",
									children: "Home delivery"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "rx",
									children: "Attach prescription"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
									value: prescriptionId,
									onValueChange: setPrescriptionId,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
										id: "rx",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 126,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "none",
										children: "No prescription attached"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 21
									}, this), verifiedRx.map((rx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: rx.id,
										children: [
											rx.fileName,
											" · ",
											rx.status
										]
									}, rx.id, true, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 43
									}, this))] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Need to add one?",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/app/prescriptions",
											className: "text-primary underline",
											children: "Upload a prescription"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 19
										}, this),
										"."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: "Items"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "numeric",
								children: formatMoney(total)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: fulfilment === "delivery" ? "Delivery (demo)" : "Collection"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "numeric",
								children: fulfilment === "delivery" ? formatMoney(2.5) : "Free"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between border-t border-border pt-3 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "numeric",
								children: formatMoney(total + (fulfilment === "delivery" ? 2.5 : 0))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							className: "w-full",
							onClick: submit,
							children: blocked ? "Send for prescription verification" : "Reserve at pharmacy"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: "Demo mode: this creates an order record inside Medora only. No pharmacy is contacted and no payment is taken."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationNotConnected, { integration: "ordering" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 175,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 29
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 10
	}, this);
}
//#endregion
export { CartPage as component };
