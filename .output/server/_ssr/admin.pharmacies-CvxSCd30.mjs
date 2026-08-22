import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Ht as CircleX, Wt as CircleCheck, on as Building2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { a as Timeline, f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.pharmacies-CvxSCd30.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin.pharmacies.tsx?tsr-split=component";
var verificationTone = {
	verified: "positive",
	pending: "warning",
	expired: "danger"
};
var verificationLabel = {
	verified: "Verified",
	pending: "Pending",
	expired: "Expired"
};
function OrganisationsPage() {
	const orgs = useWorkspaceData("organisations");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [overrides, setOverrides] = (0, import_react.useState)({});
	const [decisions, setDecisions] = (0, import_react.useState)([]);
	const selected = (orgs.data ?? []).find((o) => o.id === openId) ?? null;
	const selectedStatus = selected ? overrides[selected.id] ?? selected.verification : void 0;
	const columns = [
		{
			key: "name",
			header: "Organisation",
			sortValue: (r) => r.name,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					r.kind === "pharmacy" ? "Pharmacy" : "Clinic",
					" · ",
					r.city
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 18
			}, this)
		},
		{
			key: "licenceId",
			header: "Licence ID",
			hideBelow: "md",
			sortValue: (r) => r.licenceId,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric text-sm",
				children: r.licenceId
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 18
			}, this)
		},
		{
			key: "city",
			header: "Jurisdiction",
			hideBelow: "lg",
			sortValue: (r) => r.city,
			render: (r) => r.city
		},
		{
			key: "verification",
			header: "Verification",
			sortValue: (r) => r.verification,
			render: (r) => {
				const status = overrides[r.id] ?? r.verification;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
					label: verificationLabel[status],
					tone: verificationTone[status]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 14
				}, this);
			}
		},
		{
			key: "onboarded",
			header: "Registered",
			hideBelow: "sm",
			sortValue: (r) => r.onboarded,
			render: (r) => shortDate(`${r.onboarded}T00:00:00.000Z`)
		}
	];
	const recordDecision = (org, outcome) => {
		const nextStatus = outcome === "approved" ? "verified" : "expired";
		setOverrides((prev) => ({
			...prev,
			[org.id]: nextStatus
		}));
		setDecisions((prev) => [{
			id: `dec-${Date.now()}`,
			orgId: org.id,
			orgName: org.name,
			outcome,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev]);
		toast.success(`Recorded: you ${outcome === "approved" ? "approved" : "rejected"} the licence for ${org.name} (this session)`);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Organisations",
				demo: true,
				description: "Sample pharmacy and clinic records. Licence verification is a decision a named administrator records here — nothing is auto-approved."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Registered organisations",
				description: "Filter by verification status and open a record to review its licence evidence.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: orgs,
					emptyIcon: Building2,
					emptyTitle: "No organisations found",
					emptyDescription: "Registered pharmacies and clinics will appear here.",
					isEmpty: (d) => d.length === 0,
					children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: data,
						columns,
						getId: (r) => r.id,
						searchText: (r) => `${r.name} ${r.licenceId} ${r.city}`,
						searchPlaceholder: "Search by name, licence or city…",
						initialSort: {
							key: "name",
							direction: "asc"
						},
						pageSize: 8,
						filters: [{
							key: "verification",
							label: "Verification",
							options: Object.entries(verificationLabel).map(([value, label]) => ({
								value,
								label
							})),
							predicate: (r, v) => (overrides[r.id] ?? r.verification) === v
						}],
						onRowClick: (r) => setOpenId(r.id),
						rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setOpenId(r.id),
							children: "Review"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 64
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: Boolean(selected),
				onOpenChange: (open) => !open && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg",
					children: selected && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (void 0)(DialogHeader, { children: [/* @__PURE__ */ (void 0)(DialogTitle, { children: selected.name }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: [
							selected.kind === "pharmacy" ? "Pharmacy" : "Clinic",
							" ·",
							" ",
							selected.city
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("dl", {
							className: "grid grid-cols-2 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Licence ID"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "numeric mt-0.5",
									children: selected.licenceId
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
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Contact"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: selected.contact
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Registered"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: shortDate(`${selected.onboarded}T00:00:00.000Z`)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Current status"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: /* @__PURE__ */ (void 0)(StatusPill, {
										label: verificationLabel[selectedStatus],
										tone: verificationTone[selectedStatus]
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-md border border-border bg-secondary/50 p-3 text-sm text-muted-foreground",
							children: [
								"Licence evidence on file (sample): scanned licence document",
								" ",
								selected.licenceId,
								", submitted at onboarding on",
								" ",
								shortDate(`${selected.onboarded}T00:00:00.000Z`),
								". This is demo evidence only — no live regulatory registry is connected."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: "Approving or rejecting here records a decision made by you, the signed-in administrator, in this session's audit trail. It does not call a live regulator."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(DialogFooter, {
							className: "gap-2 sm:justify-start",
							children: [
								/* @__PURE__ */ (void 0)(Button, {
									onClick: () => recordDecision(selected, "approved"),
									children: [/* @__PURE__ */ (void 0)(CircleCheck, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 19
									}, this), " Approve licence"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									variant: "outline",
									onClick: () => recordDecision(selected, "rejected"),
									children: [/* @__PURE__ */ (void 0)(CircleX, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 19
									}, this), " Reject licence"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									variant: "ghost",
									onClick: () => setOpenId(null),
									children: "Close"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 172,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 24
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Verification decisions",
				description: "Every approval or rejection recorded in this session, attributable to the administrator who made it.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, { items: decisions.map((d) => ({
					id: d.id,
					at: shortDateTime(d.at),
					title: `${d.orgName}: licence ${d.outcome}`,
					meta: "You (this session)"
				})) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 87,
		columnNumber: 10
	}, this);
}
//#endregion
export { OrganisationsPage as component };
