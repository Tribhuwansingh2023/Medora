import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { O as ShieldCheck, s as Users } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { c as money, f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.customers-CudkGAdR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.customers.tsx?tsr-split=component";
function isoDate(dateOnly) {
	return `${dateOnly}T00:00:00.000Z`;
}
function CustomersPage() {
	const customers = useWorkspaceData("customers");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const open = (customers.data ?? []).find((c) => c.id === openId) ?? null;
	const columns = [
		{
			key: "name",
			header: "Customer",
			sortValue: (r) => r.name,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Customer since ", shortDate(isoDate(r.since))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 18
			}, this)
		},
		{
			key: "contact",
			header: "Marketing consent",
			hideBelow: "md",
			sortValue: (r) => r.consentMarketing ? 1 : 0,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
				label: r.consentMarketing ? "Consented" : "Not consented",
				tone: r.consentMarketing ? "positive" : "neutral"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 18
			}, this)
		},
		{
			key: "orders",
			header: "Orders",
			align: "right",
			sortValue: (r) => r.orders,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric",
				children: r.orders
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 18
			}, this)
		},
		{
			key: "spend",
			header: "Lifetime value",
			align: "right",
			hideBelow: "sm",
			sortValue: (r) => r.spend,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric",
				children: money(r.spend)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 18
			}, this)
		},
		{
			key: "lastOrder",
			header: "Last seen",
			hideBelow: "lg",
			sortValue: (r) => r.lastOrder,
			render: (r) => shortDate(isoDate(r.lastOrder))
		},
		{
			key: "flags",
			header: "Flags",
			hideBelow: "lg",
			sortValue: (r) => r.flags.length,
			render: (r) => r.flags.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
				label: `${r.flags.length} flag${r.flags.length > 1 ? "s" : ""}`,
				tone: "warning"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 35
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-xs text-muted-foreground",
				children: "None"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 132
			}, this)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Customers",
				demo: true,
				description: "Sample customer directory for the pharmacy console. Order history and spend are demo figures."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				tone: "info",
				title: "Contact details are demo records",
				children: "Names, contact preferences and order history shown here are sample data for reviewing this workflow. In production, patient contact details are handled under applicable data-protection and pharmacy confidentiality requirements and are never shown to unauthorised staff."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Customer directory",
				description: "Search, filter and open a customer to see their order history.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: customers,
					emptyIcon: Users,
					emptyTitle: "No customers yet",
					emptyDescription: "Customer records will appear here once orders are placed.",
					isEmpty: (d) => d.length === 0,
					children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: data,
						columns,
						getId: (r) => r.id,
						searchText: (r) => `${r.name} ${r.flags.join(" ")}`,
						searchPlaceholder: "Search customers or flags…",
						initialSort: {
							key: "spend",
							direction: "desc"
						},
						pageSize: 7,
						filters: [{
							key: "consent",
							label: "Marketing",
							options: [{
								value: "yes",
								label: "Consented"
							}, {
								value: "no",
								label: "Not consented"
							}],
							predicate: (r, v) => v === "yes" ? r.consentMarketing : !r.consentMarketing
						}, {
							key: "flags",
							label: "Flags",
							options: [{
								value: "flagged",
								label: "Has flags"
							}, {
								value: "clear",
								label: "No flags"
							}],
							predicate: (r, v) => v === "flagged" ? r.flags.length > 0 : r.flags.length === 0
						}],
						rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setOpenId(r.id),
							children: "View history"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 30
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: open != null,
				onOpenChange: (v) => !v && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { children: open && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (void 0)(DialogHeader, { children: [/* @__PURE__ */ (void 0)(DialogTitle, { children: open.name }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: [
						"Customer since ",
						shortDate(isoDate(open.since)),
						" · last order",
						" ",
						shortDate(isoDate(open.lastOrder))
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("dl", {
						className: "grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Orders"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: open.orders
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Lifetime value"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "numeric mt-1 font-medium text-ink",
								children: money(open.spend)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Marketing consent"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (void 0)(StatusPill, {
									label: open.consentMarketing ? "Consented" : "Not consented",
									tone: open.consentMarketing ? "positive" : "neutral"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
						className: "mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
						children: "Account flags"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 17
					}, this), open.flags.length ? /* @__PURE__ */ (void 0)("ul", {
						className: "space-y-1 text-sm",
						children: open.flags.map((f) => /* @__PURE__ */ (void 0)("li", {
							className: "rounded-md bg-secondary px-2 py-1",
							children: f
						}, f, false, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 42
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 38
					}, this) : /* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-muted-foreground",
						children: "No flags recorded."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 27
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "flex items-center gap-1.5 border-t border-border pt-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (void 0)(ShieldCheck, {
							className: "size-3.5",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 17
						}, this), " Demo record — no real contact details are stored or displayed here."]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 20
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 59,
		columnNumber: 10
	}, this);
}
//#endregion
export { CustomersPage as component };
