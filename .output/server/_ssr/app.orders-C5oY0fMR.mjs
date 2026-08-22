import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as useStore, E as formatMoney } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ShoppingBag, Ht as CircleX } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { l as PageHeader, n as Badge, o as EmptyState, r as ClinicalDisclaimer, s as IntegrationNotConnected } from "./primitives-Dg_-FqLy.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.orders-C5oY0fMR.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.orders.tsx?tsr-split=component";
var statusMeta = {
	awaiting_prescription: {
		label: "Awaiting prescription",
		cls: "border-warning/40 bg-warning-soft text-warning-foreground"
	},
	verifying: {
		label: "Pharmacist verifying",
		cls: "border-primary/30 bg-primary-soft text-primary"
	},
	accepted: {
		label: "Accepted",
		cls: "border-primary/30 bg-primary-soft text-primary"
	},
	preparing: {
		label: "Preparing",
		cls: "border-primary/30 bg-primary-soft text-primary"
	},
	ready: {
		label: "Ready for pickup",
		cls: "border-success/35 bg-success-soft text-success"
	},
	completed: {
		label: "Completed",
		cls: "border-border bg-secondary text-muted-foreground"
	},
	cancelled: {
		label: "Cancelled",
		cls: "border-border bg-secondary text-muted-foreground"
	}
};
var openStatuses = [
	"awaiting_prescription",
	"verifying",
	"accepted",
	"preparing",
	"ready"
];
function OrderCard({ order, onCancel }) {
	const meta = statusMeta[order.status];
	const cancellable = openStatuses.includes(order.status);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "truncate text-base font-semibold text-ink",
						children: order.pharmacyName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							order.id,
							" · ",
							new Date(order.placedAt).toLocaleString(),
							" ·",
							" ",
							order.fulfilment === "pickup" ? "Pickup" : "Delivery"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "outline",
					className: meta.cls,
					children: meta.label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-4 space-y-2 border-t border-border pt-4",
				children: order.items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "flex items-center justify-between gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "min-w-0 truncate",
						children: [
							i.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: ["× ", i.qty]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 24
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "numeric shrink-0",
						children: formatMoney(i.price * i.qty)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 13
					}, this)]
				}, i.medicineId, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 31
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "numeric",
					children: formatMoney(order.total)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
				className: "mt-4 space-y-3 border-t border-border pt-4",
				children: order.timeline.map((t, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "flex gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": true,
						className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-medium text-foreground",
							children: statusMeta[t.state].label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-muted-foreground",
							children: t.note
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground/80",
							children: new Date(t.at).toLocaleString()
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 13
					}, this)]
				}, `${t.state}-${idx}`, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 41
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 flex flex-wrap gap-2 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app/pharmacies/$pharmacyId",
							params: { pharmacyId: order.pharmacyId },
							children: "View pharmacy"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 9
					}, this),
					order.status === "awaiting_prescription" && /* @__PURE__ */ (void 0)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (void 0)(Link, {
							to: "/app/prescriptions",
							children: "Attach a prescription"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 54
					}, this),
					cancellable && /* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => onCancel(order.id),
						children: [/* @__PURE__ */ (void 0)(CircleX, {
							className: "size-4",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 13
						}, this), " Cancel reservation"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 25
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 10
	}, this);
}
function OrdersPage() {
	const { state, advanceOrder } = useStore();
	const orders = state.orders;
	const open = orders.filter((o) => openStatuses.includes(o.status));
	const closed = orders.filter((o) => !openStatuses.includes(o.status));
	const cancel = (id) => {
		advanceOrder(id, "cancelled", "Cancelled by you from the Medora app (demo mode).");
		toast.success("Reservation cancelled");
	};
	const empty = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
		icon: ShoppingBag,
		title: "No reservations yet",
		description: "Reserve a medicine at a nearby pharmacy and it will appear here with its verification and pickup status.",
		action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/app/search",
				children: "Find a medicine"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 130,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 129,
			columnNumber: 203
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 129,
		columnNumber: 17
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Orders & reservations",
				demo: true,
				description: "Reservations are held with the pharmacy. Prescription-only items cannot progress until a pharmacist verifies your prescription."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 133,
				columnNumber: 7
			}, this),
			orders.length === 0 ? empty : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "open",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "open",
						children: [
							"Active (",
							open.length,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "closed",
						children: [
							"Past (",
							closed.length,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "open",
						className: "mt-5 space-y-4",
						children: open.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
							icon: ShoppingBag,
							title: "Nothing active",
							description: "All your reservations are complete or cancelled."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 34
						}, this) : open.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderCard, {
							order: o,
							onCancel: cancel
						}, o.id, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 170
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "closed",
						className: "mt-5 space-y-4",
						children: closed.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
							icon: ShoppingBag,
							title: "No past reservations",
							description: "Completed and cancelled reservations will be listed here."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 36
						}, this) : closed.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderCard, {
							order: o,
							onCancel: cancel
						}, o.id, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 189
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 38
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationNotConnected, { integration: "ordering" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 132,
		columnNumber: 10
	}, this);
}
//#endregion
export { OrdersPage as component };
