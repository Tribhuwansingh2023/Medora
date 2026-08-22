import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Q as Package, d as Truck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { c as money, f as useWorkspaceData, i as StatusPill, o as WorkspaceSection, r as AsyncSection, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.orders-BJn_F63t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.orders.tsx?tsr-split=component";
var statusMeta = {
	awaiting_prescription: {
		label: "Awaiting prescription",
		tone: "warning"
	},
	verifying: {
		label: "Verifying",
		tone: "info"
	},
	accepted: {
		label: "Accepted",
		tone: "neutral"
	},
	preparing: {
		label: "Preparing",
		tone: "neutral"
	},
	ready: {
		label: "Ready for collection/delivery",
		tone: "positive"
	},
	completed: {
		label: "Completed",
		tone: "positive"
	},
	cancelled: {
		label: "Cancelled",
		tone: "danger"
	}
};
var channelLabel = {
	reservation: "Reservation",
	delivery: "Delivery",
	counter: "Counter"
};
function OrdersPage() {
	const orders = useWorkspaceData("pharmacyOrders");
	const [localStatus, setLocalStatus] = (0, import_react.useState)({});
	const [viewing, setViewing] = (0, import_react.useState)(null);
	const effectiveStatus = (row) => localStatus[row.id] ?? row.status;
	const columns = (0, import_react.useMemo)(() => [
		{
			key: "id",
			header: "Order",
			sortValue: (r) => r.id,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.id
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: channelLabel[r.channel]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 18
			}, this)
		},
		{
			key: "customer",
			header: "Customer",
			sortValue: (r) => r.customer,
			render: (r) => r.customer
		},
		{
			key: "items",
			header: "Items",
			align: "right",
			hideBelow: "sm",
			sortValue: (r) => r.items,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric",
				children: r.items
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 18
			}, this)
		},
		{
			key: "total",
			header: "Total",
			align: "right",
			sortValue: (r) => r.total,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric font-medium text-ink",
				children: money(r.total)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 18
			}, this)
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => effectiveStatus(r),
			render: (r) => {
				const meta = statusMeta[effectiveStatus(r)];
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
					label: meta.label,
					tone: meta.tone
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 14
				}, this);
			}
		},
		{
			key: "placedAt",
			header: "Placed",
			hideBelow: "md",
			sortValue: (r) => r.placedAt,
			render: (r) => shortDateTime(r.placedAt)
		}
	], [localStatus]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Orders",
				demo: true,
				description: "Demo order queue across reservations, deliveries and counter sales. Status changes here are recorded for this session only."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
				query: orders,
				emptyIcon: Package,
				emptyTitle: "No orders",
				emptyDescription: "Orders placed through Medora will appear in this queue.",
				isEmpty: (d) => d.length === 0,
				children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
					title: "All orders",
					description: "Search, filter, bulk-update or open an order for detail.",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: data,
						columns,
						getId: (r) => r.id,
						searchText: (r) => `${r.id} ${r.customer}`,
						searchPlaceholder: "Search by reference or customer…",
						pageSize: 8,
						initialSort: {
							key: "placedAt",
							direction: "desc"
						},
						filters: [{
							key: "status",
							label: "Status",
							options: Object.entries(statusMeta).map(([value, meta]) => ({
								value,
								label: meta.label
							})),
							predicate: (r, v) => effectiveStatus(r) === v
						}, {
							key: "channel",
							label: "Fulfilment",
							options: Object.entries(channelLabel).map(([value, label]) => ({
								value,
								label
							})),
							predicate: (r, v) => r.channel === v
						}],
						rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setViewing(r),
							children: "View"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 30
						}, this),
						bulkActions: (ids, clear) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								onValueChange: (value) => {
									setLocalStatus((prev) => {
										const next = { ...prev };
										for (const id of ids) next[id] = value;
										return next;
									});
									toast.success(`Recorded ${ids.length} order${ids.length === 1 ? "" : "s"} as "${statusMeta[value].label}" for this demo session`);
									clear();
								},
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									className: "h-8 w-[200px]",
									"aria-label": "Set status for selected orders",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Set status…" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: Object.entries(statusMeta).map(([value, meta]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
									value,
									children: meta.label
								}, value, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 74
								}, this)) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 57
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 18
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: Boolean(viewing),
				onOpenChange: (open) => !open && setViewing(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: viewing && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (void 0)(DialogHeader, { children: [/* @__PURE__ */ (void 0)(DialogTitle, { children: ["Order ", viewing.id] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: [
						viewing.customer,
						" · placed ",
						shortDateTime(viewing.placedAt),
						" ",
						"· ",
						channelLabel[viewing.channel]
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)(StatusPill, { ...statusMeta[effectiveStatus(viewing)] }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 17
						}, this), viewing.prescriptionRequired && /* @__PURE__ */ (void 0)(StatusPill, {
							label: "Prescription required",
							tone: "info"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 50
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("dl", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Items"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("dd", {
							className: "numeric mt-1 font-medium text-ink",
							children: viewing.items
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Order total"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("dd", {
							className: "mt-1 font-medium text-ink",
							children: money(viewing.total)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 174,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-xs text-muted-foreground",
						children: "This demo dataset records order totals and item counts only — a per-line breakdown is not available in this sample provider."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap justify-end gap-2 pt-2",
						children: [/* @__PURE__ */ (void 0)(Button, {
							variant: "outline",
							onClick: () => {
								setLocalStatus((prev) => ({
									...prev,
									[viewing.id]: "preparing"
								}));
								toast.success(`Order ${viewing.id} recorded as preparing (demo session)`);
							},
							children: [/* @__PURE__ */ (void 0)(Truck, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 19
							}, this), " Mark preparing"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 189,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)(Button, {
							onClick: () => {
								setLocalStatus((prev) => ({
									...prev,
									[viewing.id]: "completed"
								}));
								toast.success(`Order ${viewing.id} recorded as completed (demo session)`);
							},
							children: "Mark completed"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 23
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 98,
		columnNumber: 10
	}, this);
}
//#endregion
export { OrdersPage as component };
