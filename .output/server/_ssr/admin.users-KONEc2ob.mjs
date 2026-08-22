import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { O as ShieldCheck, s as Users } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { a as Timeline, f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.users-KONEc2ob.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin.users.tsx?tsr-split=component";
var statusTone = {
	active: "positive",
	pending: "warning",
	suspended: "danger"
};
var roleLabel = {
	patient: "Patient",
	pharmacy: "Pharmacy",
	doctor: "Doctor",
	admin: "Admin"
};
var roles = Object.keys(roleLabel);
function UsersPage() {
	const users = useWorkspaceData("platformUsers");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [roleOverrides, setRoleOverrides] = (0, import_react.useState)({});
	const [auditLog, setAuditLog] = (0, import_react.useState)([]);
	const selected = (users.data ?? []).find((u) => u.id === openId) ?? null;
	const selectedRole = selected ? roleOverrides[selected.id] ?? selected.role : "patient";
	const columns = [
		{
			key: "name",
			header: "Name",
			sortValue: (r) => r.name,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: r.email
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 18
			}, this)
		},
		{
			key: "role",
			header: "Role",
			hideBelow: "sm",
			sortValue: (r) => r.role,
			render: (r) => roleLabel[roleOverrides[r.id] ?? r.role]
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => r.status,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
				label: r.status.charAt(0).toUpperCase() + r.status.slice(1),
				tone: statusTone[r.status]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 18
			}, this)
		},
		{
			key: "joined",
			header: "Joined",
			hideBelow: "md",
			sortValue: (r) => r.joined,
			render: (r) => shortDate(`${r.joined}T00:00:00.000Z`)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Users",
				demo: true,
				description: "Every account shown here is a sample record. Role and status changes are recorded in this session's audit trail, not applied to a live directory."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Platform accounts",
				description: "Search by name or email, filter by role and status, and open a record to review or change it.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: users,
					emptyIcon: Users,
					emptyTitle: "No users found",
					emptyDescription: "Platform accounts will appear here once loaded.",
					isEmpty: (d) => d.length === 0,
					children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: data,
						columns,
						getId: (r) => r.id,
						searchText: (r) => `${r.name} ${r.email}`,
						searchPlaceholder: "Search by name or email…",
						initialSort: {
							key: "name",
							direction: "asc"
						},
						pageSize: 8,
						filters: [{
							key: "role",
							label: "Role",
							options: roles.map((value) => ({
								value,
								label: roleLabel[value]
							})),
							predicate: (r, v) => (roleOverrides[r.id] ?? r.role) === v
						}, {
							key: "status",
							label: "Status",
							options: [
								{
									value: "active",
									label: "Active"
								},
								{
									value: "pending",
									label: "Pending"
								},
								{
									value: "suspended",
									label: "Suspended"
								}
							],
							predicate: (r, v) => r.status === v
						}],
						onRowClick: (r) => setOpenId(r.id),
						rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setOpenId(r.id),
							children: "Open"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 64
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
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
							lineNumber: 105,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: selected.email }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("dl", {
							className: "grid grid-cols-2 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Joined"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: shortDate(`${selected.joined}T00:00:00.000Z`)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Last active"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: shortDate(`${selected.lastActive}T00:00:00.000Z`)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Status"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: /* @__PURE__ */ (void 0)(StatusPill, {
										label: selected.status.charAt(0).toUpperCase() + selected.status.slice(1),
										tone: statusTone[selected.status]
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 126,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Two-factor authentication"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: selected.mfa ? "Enabled" : "Not enabled"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2 rounded-md border border-border p-3",
							children: [
								/* @__PURE__ */ (void 0)("p", {
									className: "flex items-center gap-2 text-sm font-medium text-ink",
									children: [/* @__PURE__ */ (void 0)(ShieldCheck, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 19
									}, this), " Role"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: "Granting the administrator role is a privileged, audited action. Recording it here attributes the change to your administrator session for this demo."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Select, {
									value: selectedRole,
									onValueChange: (value) => {
										const nextRole = value;
										if (!selected || nextRole === (roleOverrides[selected.id] ?? selected.role)) return;
										const fromRole = roleOverrides[selected.id] ?? selected.role;
										setRoleOverrides((prev) => ({
											...prev,
											[selected.id]: nextRole
										}));
										setAuditLog((prev) => [{
											id: `rc-${Date.now()}`,
											userId: selected.id,
											userName: selected.name,
											from: roleLabel[fromRole],
											to: roleLabel[nextRole],
											at: (/* @__PURE__ */ new Date()).toISOString()
										}, ...prev]);
										toast.success(`Recorded: ${selected.name} moved from ${roleLabel[fromRole]} to ${roleLabel[nextRole]} (audited, this session)`);
									},
									children: [/* @__PURE__ */ (void 0)(SelectTrigger, {
										"aria-label": "Change role",
										children: /* @__PURE__ */ (void 0)(SelectValue, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 172,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(SelectContent, { children: roles.map((value) => /* @__PURE__ */ (void 0)(SelectItem, {
										value,
										children: roleLabel[value]
									}, value, false, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 41
									}, this)) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(DialogFooter, { children: /* @__PURE__ */ (void 0)(Button, {
							variant: "outline",
							onClick: () => setOpenId(null),
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 17
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 24
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Role change audit trail",
				description: "Every role grant recorded in this session, attributable to the administrator who made it.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, { items: auditLog.map((entry) => ({
					id: entry.id,
					at: shortDateTime(entry.at),
					title: `${entry.userName}: ${entry.from} → ${entry.to}`,
					meta: "You (this session)"
				})) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 192,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 191,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 10
	}, this);
}
//#endregion
export { UsersPage as component };
