import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PackageSearch, f as TriangleAlert, sn as Boxes } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { c as money, f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection, s as daysUntil } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.inventory-DUXxGymx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.inventory.tsx?tsr-split=component";
function stockStatus(item) {
	if (daysUntil(item.expiry) <= 60) return "expiring";
	if (item.stock <= item.reorderLevel) return "low";
	return "ok";
}
var statusMeta = {
	low: {
		label: "Low stock",
		tone: "warning"
	},
	expiring: {
		label: "Expiring soon",
		tone: "danger"
	},
	ok: {
		label: "Adequate stock",
		tone: "positive"
	}
};
function InventoryPage() {
	const inventory = useWorkspaceData("inventory");
	const [viewing, setViewing] = (0, import_react.useState)(null);
	const columns = [
		{
			key: "name",
			header: "Medicine",
			sortValue: (r) => r.name,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Supplier: ", r.supplier]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 18
			}, this)
		},
		{
			key: "batch",
			header: "Batch / expiry",
			hideBelow: "md",
			sortValue: (r) => r.expiry,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-ink",
				children: r.batch
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Expires ", shortDate(`${r.expiry}T00:00:00.000Z`)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 18
			}, this)
		},
		{
			key: "stock",
			header: "On hand (last synced)",
			align: "right",
			sortValue: (r) => r.stock,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric font-medium text-ink",
				children: [
					r.stock,
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs text-muted-foreground",
						children: ["/ reorder ", r.reorderLevel]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 18
			}, this)
		},
		{
			key: "price",
			header: "Demo price",
			align: "right",
			hideBelow: "sm",
			sortValue: (r) => r.price,
			render: (r) => money(r.price)
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => stockStatus(r),
			render: (r) => {
				const meta = statusMeta[stockStatus(r)];
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
					label: meta.label,
					tone: meta.tone
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 14
				}, this);
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Inventory",
				demo: true,
				description: "Stock lines from the demo pharmacy provider, last synced for this session."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				tone: "info",
				title: "These are last-synced demo figures, not live inventory",
				children: "Quantities and prices below reflect the demo provider's last sync. Nothing here is a live stock feed or a live price — connect a licensed inventory provider before using this in production."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
				query: inventory,
				emptyIcon: Boxes,
				emptyTitle: "No inventory lines",
				emptyDescription: "Stock lines will appear here once the inventory provider returns records.",
				isEmpty: (d) => d.length === 0,
				children: (data) => {
					const attention = data.filter((i) => stockStatus(i) !== "ok");
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [attention.length > 0 && /* @__PURE__ */ (void 0)(WorkspaceSection, {
						title: "Needs attention",
						description: "Low-stock and near-expiry lines from the demo dataset.",
						children: /* @__PURE__ */ (void 0)("ul", {
							className: "divide-y divide-border",
							children: attention.map((item) => {
								const meta = statusMeta[stockStatus(item)];
								return /* @__PURE__ */ (void 0)("li", {
									className: "flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (void 0)(TriangleAlert, {
												className: "size-4 text-warning",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 104,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("span", {
												className: "font-medium text-ink",
												children: item.name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 105,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("span", {
												className: "text-xs text-muted-foreground",
												children: [
													"batch ",
													item.batch,
													" · expires",
													" ",
													shortDate(`${item.expiry}T00:00:00.000Z`)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 108,
												columnNumber: 29
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)(StatusPill, {
										label: meta.label,
										tone: meta.tone
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 27
									}, this)]
								}, item.id, true, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 24
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 40
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
						title: "All stock lines",
						description: "Filter by status or expiry window, sort by quantity or expiry.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
							rows: data,
							columns,
							getId: (r) => r.id,
							searchText: (r) => `${r.name} ${r.batch} ${r.supplier}`,
							searchPlaceholder: "Search medicine, batch or supplier…",
							pageSize: 8,
							initialSort: {
								key: "name",
								direction: "asc"
							},
							filters: [{
								key: "status",
								label: "Stock status",
								options: [
									{
										value: "low",
										label: "Low stock"
									},
									{
										value: "expiring",
										label: "Expiring soon"
									},
									{
										value: "ok",
										label: "Adequate stock"
									}
								],
								predicate: (r, v) => stockStatus(r) === v
							}, {
								key: "expiry",
								label: "Expiry window",
								options: [
									{
										value: "30",
										label: "Within 30 days"
									},
									{
										value: "60",
										label: "Within 60 days"
									},
									{
										value: "180",
										label: "Within 180 days"
									}
								],
								predicate: (r, v) => {
									const d = daysUntil(r.expiry);
									return d >= 0 && d <= Number(v);
								}
							}],
							rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setViewing(r),
								children: "View"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 34
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 16
					}, this);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: Boolean(viewing),
				onOpenChange: (open) => !open && setViewing(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: viewing && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (void 0)(DialogHeader, { children: [/* @__PURE__ */ (void 0)(DialogTitle, { children: viewing.name }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: [
						"Batch ",
						viewing.batch,
						" · supplied by ",
						viewing.supplier
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 167,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("dl", {
						className: "grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "On hand (last synced)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 173,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: viewing.stock
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "Reorder level"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: viewing.reorderLevel
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "Demo price"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1 font-medium text-ink",
								children: money(viewing.price)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "Expiry"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1 font-medium text-ink",
								children: shortDate(`${viewing.expiry}T00:00:00.000Z`)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex justify-end gap-2 pt-2",
						children: /* @__PURE__ */ (void 0)(Button, {
							variant: "outline",
							onClick: () => {
								toast("Reorder flagged for this session (demo)");
							},
							children: [/* @__PURE__ */ (void 0)(PackageSearch, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 209,
								columnNumber: 19
							}, this), " Flag for reorder"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 205,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 23
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 10
	}, this);
}
//#endregion
export { InventoryPage as component };
