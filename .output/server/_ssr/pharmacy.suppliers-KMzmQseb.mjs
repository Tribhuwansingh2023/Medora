import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { bt as Handshake } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.suppliers-KMzmQseb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.suppliers.tsx?tsr-split=component";
var statusMeta = {
	active: {
		label: "Active",
		tone: "positive"
	},
	review: {
		label: "Under review",
		tone: "warning"
	},
	paused: {
		label: "Paused",
		tone: "danger"
	}
};
function isoDate(dateOnly) {
	return `${dateOnly}T00:00:00.000Z`;
}
function SuppliersPage() {
	const suppliers = useWorkspaceData("suppliers");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const open = (suppliers.data ?? []).find((s) => s.id === openId) ?? null;
	const columns = [
		{
			key: "name",
			header: "Supplier",
			sortValue: (r) => r.name,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: r.contact
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 18
			}, this)
		},
		{
			key: "leadTime",
			header: "Lead time",
			align: "right",
			hideBelow: "sm",
			sortValue: (r) => r.leadTimeDays,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: r.leadTimeDays > 5 ? "font-medium text-destructive" : "numeric",
				children: [
					r.leadTimeDays,
					" day",
					r.leadTimeDays === 1 ? "" : "s"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 18
			}, this)
		},
		{
			key: "openPos",
			header: "Open POs",
			align: "right",
			hideBelow: "md",
			sortValue: (r) => r.openPurchaseOrders,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric",
				children: r.openPurchaseOrders
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 18
			}, this)
		},
		{
			key: "onTime",
			header: "On-time rate",
			align: "right",
			sortValue: (r) => r.onTimeRate,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: r.onTimeRate < .75 ? "font-medium text-destructive" : r.onTimeRate < .9 ? "font-medium text-warning-foreground" : "numeric",
				children: [Math.round(r.onTimeRate * 100), "%"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 18
			}, this)
		},
		{
			key: "lastDelivery",
			header: "Last delivery",
			hideBelow: "lg",
			sortValue: (r) => r.lastDelivery,
			render: (r) => shortDate(isoDate(r.lastDelivery))
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => r.status,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, { ...statusMeta[r.status] }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 18
			}, this)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Suppliers",
				demo: true,
				description: "Sample supplier directory for the pharmacy console. Lead time and reliability figures are demo records, last synced for this environment."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				tone: "info",
				title: "Demo procurement figures",
				children: "Lead times, purchase order counts and reliability rates are sample figures for reviewing this workflow. They are not a live procurement feed."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Supplier directory",
				description: "Suppliers with lead times over 5 days or an on-time rate under 75% are highlighted for review.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: suppliers,
					emptyIcon: Handshake,
					emptyTitle: "No suppliers on file",
					emptyDescription: "Suppliers will appear here once they are added to the pharmacy account.",
					isEmpty: (d) => d.length === 0,
					children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: data,
						columns,
						getId: (r) => r.id,
						searchText: (r) => `${r.name} ${r.contact}`,
						searchPlaceholder: "Search suppliers…",
						initialSort: {
							key: "onTime",
							direction: "asc"
						},
						pageSize: 7,
						filters: [{
							key: "status",
							label: "Status",
							options: Object.entries(statusMeta).map(([value, meta]) => ({
								value,
								label: meta.label
							})),
							predicate: (r, v) => r.status === v
						}, {
							key: "reliability",
							label: "Reliability",
							options: [{
								value: "poor",
								label: "Needs attention"
							}, {
								value: "good",
								label: "Reliable"
							}],
							predicate: (r, v) => v === "poor" ? r.onTimeRate < .75 || r.leadTimeDays > 5 : r.onTimeRate >= .75 && r.leadTimeDays <= 5
						}],
						rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setOpenId(r.id),
							children: "View detail"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 30
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: open != null,
				onOpenChange: (v) => !v && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: open && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (void 0)(DialogHeader, { children: [/* @__PURE__ */ (void 0)(DialogTitle, { children: open.name }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: open.contact }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("dl", {
						className: "grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Lead time"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: [open.leadTimeDays, " days"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "On-time rate"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: [Math.round(open.onTimeRate * 100), "%"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Open purchase orders"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: open.openPurchaseOrders
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Last delivery"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1 font-medium text-ink",
								children: shortDate(isoDate(open.lastDelivery))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)(StatusPill, { ...statusMeta[open.status] }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 20
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 75,
		columnNumber: 10
	}, this);
}
//#endregion
export { SuppliersPage as component };
