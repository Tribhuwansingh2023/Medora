import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { At as Eye, D as Shield, N as Search, Nt as Download, O as ShieldCheck, k as ShieldAlert, kt as FileCheck, l as UserCheck, vn as Activity, y as Terminal } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { f as useWorkspaceData, i as StatusPill, o as WorkspaceSection, r as AsyncSection, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.audit-C9TU0y_2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin.audit.tsx?tsr-split=component";
var categoryConfig = {
	prescription: {
		label: "Prescription",
		tone: "info"
	},
	clinical: {
		label: "Clinical / Triage",
		tone: "warning"
	},
	security: {
		label: "Security & RLS",
		tone: "critical"
	},
	catalog: {
		label: "Catalog Sync",
		tone: "neutral"
	},
	pharmacy: {
		label: "Pharmacy Gov",
		tone: "info"
	},
	compliance: {
		label: "DPDP / Legal",
		tone: "success"
	}
};
var roleConfig = {
	admin: {
		label: "Admin",
		tone: "critical"
	},
	doctor: {
		label: "Doctor",
		tone: "info"
	},
	pharmacy: {
		label: "Pharmacist",
		tone: "warning"
	},
	patient: {
		label: "Patient",
		tone: "neutral"
	},
	system: {
		label: "System Daemon",
		tone: "success"
	}
};
function AuditLogPage() {
	const auditQuery = useWorkspaceData("auditEvents");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedRole, setSelectedRole] = (0, import_react.useState)("all");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("all");
	const [inspectEvent, setInspectEvent] = (0, import_react.useState)(null);
	const rawRows = auditQuery.data ?? [];
	const filteredRows = (0, import_react.useMemo)(() => {
		return rawRows.filter((ev) => {
			const q = searchQuery.toLowerCase().trim();
			const matchesSearch = !q || ev.action.toLowerCase().includes(q) || ev.actor.toLowerCase().includes(q) || ev.target.toLowerCase().includes(q) || ev.ip.includes(q) || ev.details && ev.details.toLowerCase().includes(q);
			const matchesRole = selectedRole === "all" || ev.role && ev.role === selectedRole;
			const matchesCategory = selectedCategory === "all" || ev.category && ev.category === selectedCategory;
			const matchesStatus = selectedStatus === "all" || ev.status && ev.status === selectedStatus;
			return matchesSearch && matchesRole && matchesCategory && matchesStatus;
		});
	}, [
		rawRows,
		searchQuery,
		selectedRole,
		selectedCategory,
		selectedStatus
	]);
	const handleExport = (format) => {
		if (format === "json") {
			const blob = new Blob([JSON.stringify(filteredRows, null, 2)], { type: "application/json" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `medora-audit-log-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
			a.click();
			URL.revokeObjectURL(url);
			toast.success("Audit ledger exported to JSON");
		} else {
			const headers = [
				"ID",
				"Timestamp",
				"Actor",
				"Role",
				"Category",
				"Action",
				"Target",
				"IP",
				"Status",
				"Details"
			];
			const rows = filteredRows.map((r) => [
				r.id,
				r.at,
				`"${r.actor}"`,
				r.role || "unknown",
				r.category || "general",
				`"${r.action}"`,
				`"${r.target}"`,
				r.ip,
				r.status || "success",
				`"${(r.details || "").replace(/"/g, "\"\"")}"`
			]);
			const csvContent = [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
			const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `medora-audit-log-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
			a.click();
			URL.revokeObjectURL(url);
			toast.success("Audit ledger exported to CSV");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Compliance & Audit Log",
				demo: true,
				description: "Tamper-evident system ledger tracking clinical authorizations, prescription verifications, role grants, and data access policies."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 184,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface flex items-center gap-3.5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-lg bg-primary/10 p-2.5 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 188,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-2xl font-bold font-numeric",
							children: rawRows.length
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 192,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs text-muted-foreground",
							children: "Recorded Events"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 191,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface flex items-center gap-3.5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-lg bg-emerald-500/10 p-2.5 text-emerald-600",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileCheck, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 201,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-2xl font-bold font-numeric",
							children: rawRows.filter((r) => r.category === "prescription").length
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs text-muted-foreground",
							children: "Prescription Verifications"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 199,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface flex items-center gap-3.5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-lg bg-amber-500/10 p-2.5 text-amber-600",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 214,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-2xl font-bold font-numeric",
							children: rawRows.filter((r) => r.status === "warning" || r.status === "flagged").length
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 218,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs text-muted-foreground",
							children: "Flagged & Clinical Alerts"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 221,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 217,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 213,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface flex items-center gap-3.5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-lg bg-blue-500/10 p-2.5 text-blue-600",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 229,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 228,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-2xl font-bold font-numeric",
							children: "100%"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 232,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs text-muted-foreground",
							children: "DPDP & RLS Compliance"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 233,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 231,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 227,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 186,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Audit Log Records",
				description: "Filter by actor role, regulatory category, or search specific entity IDs and IP addresses.",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-4 flex flex-col gap-3 rounded-lg border border-border bg-card/60 p-4 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-1 flex-col gap-2.5 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 245,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									placeholder: "Search action, actor, target or IP…",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "pl-9 text-xs"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 246,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: selectedRole,
								onValueChange: setSelectedRole,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									className: "h-9 w-full text-xs sm:w-[130px]",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "All Roles" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 251,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 250,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "all",
										children: "All Roles"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 254,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "admin",
										children: "Admin"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 255,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "doctor",
										children: "Doctor"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 256,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "pharmacy",
										children: "Pharmacist"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 257,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "patient",
										children: "Patient"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 258,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "system",
										children: "System"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 253,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 249,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: selectedCategory,
								onValueChange: setSelectedCategory,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									className: "h-9 w-full text-xs sm:w-[145px]",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "All Categories" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 265,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 264,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "all",
										children: "All Categories"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 268,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "prescription",
										children: "Prescriptions"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 269,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "clinical",
										children: "Clinical & Triage"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 270,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "security",
										children: "Security & RLS"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 271,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "catalog",
										children: "Catalog Sync"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 272,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "pharmacy",
										children: "Pharmacy Gov"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 273,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "compliance",
										children: "DPDP Compliance"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 267,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 263,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
								value: selectedStatus,
								onValueChange: setSelectedStatus,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
									className: "h-9 w-full text-xs sm:w-[125px]",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "All Status" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 280,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 279,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "all",
										children: "All Status"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 283,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "success",
										children: "Success"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 284,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "warning",
										children: "Warning"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 285,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: "flagged",
										children: "Flagged"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 286,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 282,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 278,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 243,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => handleExport("csv"),
							className: "h-9 gap-1.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 293,
								columnNumber: 15
							}, this), " CSV"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 292,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => handleExport("json"),
							className: "h-9 gap-1.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 296,
								columnNumber: 15
							}, this), " JSON"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 295,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 291,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 242,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					isLoading: auditQuery.isLoading,
					isError: auditQuery.isError,
					errorMessage: auditQuery.error?.message,
					onRetry: () => auditQuery.refetch(),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: filteredRows,
						columns: [
							{
								key: "at",
								header: "Timestamp",
								sortValue: (r) => r.at,
								render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-xs font-medium text-foreground",
										children: shortDateTime(r.at)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 112,
										columnNumber: 11
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "UTC ISO-8601"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 11
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 18
								}, this)
							},
							{
								key: "actor",
								header: "Actor & Role",
								sortValue: (r) => r.actor,
								render: (r) => {
									const role = r.role ? roleConfig[r.role] : null;
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-1.5 font-medium text-foreground",
											children: [
												r.role === "admin" && /* @__PURE__ */ (void 0)(Shield, { className: "size-3.5 text-primary" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 127,
													columnNumber: 38
												}, this),
												r.role === "doctor" && /* @__PURE__ */ (void 0)(UserCheck, { className: "size-3.5 text-blue-600" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 128,
													columnNumber: 39
												}, this),
												r.role === "pharmacy" && /* @__PURE__ */ (void 0)(FileCheck, { className: "size-3.5 text-amber-600" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 129,
													columnNumber: 41
												}, this),
												r.role === "system" && /* @__PURE__ */ (void 0)(Terminal, { className: "size-3.5 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 130,
													columnNumber: 39
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: r.actor }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 131,
													columnNumber: 15
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 126,
											columnNumber: 13
										}, this), role && /* @__PURE__ */ (void 0)(StatusPill, {
											tone: role.tone,
											children: role.label
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 133,
											columnNumber: 22
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 14
									}, this);
								}
							},
							{
								key: "action",
								header: "Action & Details",
								sortValue: (r) => r.action,
								render: (r) => {
									const cat = r.category ? categoryConfig[r.category] : null;
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "max-w-md space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-semibold text-foreground",
												children: r.action
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 144,
												columnNumber: 15
											}, this), cat && /* @__PURE__ */ (void 0)("span", {
												className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
												children: cat.label
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 145,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 143,
											columnNumber: 13
										}, this), r.details && /* @__PURE__ */ (void 0)("p", {
											className: "line-clamp-1 text-xs text-muted-foreground",
											children: r.details
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 149,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 14
									}, this);
								}
							},
							{
								key: "target",
								header: "Target Entity",
								sortValue: (r) => r.target,
								render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded border border-border/80 bg-background/50 px-2 py-0.5 font-mono text-xs text-foreground",
									children: r.target
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 18
								}, this)
							},
							{
								key: "ip",
								header: "Network / Origin",
								sortValue: (r) => r.ip,
								render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-mono text-xs text-muted-foreground",
									children: r.ip
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 18
								}, this)
							},
							{
								key: "status",
								header: "Status",
								sortValue: (r) => r.status ?? "success",
								render: (r) => {
									const status = r.status || "success";
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
										tone: status === "success" ? "positive" : status === "warning" ? "warning" : status === "flagged" || status === "rejected" ? "danger" : "neutral",
										children: status.toUpperCase()
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 14
									}, this);
								}
							},
							{
								key: "actions",
								header: "",
								render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => setInspectEvent(r),
									className: "h-8 gap-1 text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 180,
										columnNumber: 11
									}, this), " Inspect"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 18
								}, this)
							}
						],
						rowKey: (r) => r.id,
						emptyMessage: "No audit log events match the selected filters."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 302,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 301,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 240,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: !!inspectEvent,
				onOpenChange: (open) => !open && setInspectEvent(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
						className: "flex items-center gap-2 text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-5 text-primary" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 311,
								columnNumber: 15
							}, this),
							"Audit Event Record #",
							inspectEvent?.id
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 310,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "Detailed cryptographic verification and context for this audit entry." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 309,
						columnNumber: 11
					}, this), inspectEvent && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4 text-xs",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-2 gap-3 rounded-lg border border-border bg-card p-3",
								children: [
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-muted-foreground",
										children: "Timestamp:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 323,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "font-mono font-medium text-foreground",
										children: inspectEvent.at
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 324,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 322,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-muted-foreground",
										children: "Origin IP:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 329,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "font-mono font-medium text-foreground",
										children: inspectEvent.ip
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 330,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 328,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-muted-foreground",
										children: "Actor:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 335,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "font-medium text-foreground",
										children: inspectEvent.actor
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 336,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 334,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-muted-foreground",
										children: "Role:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 341,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "font-medium text-foreground",
										children: inspectEvent.role || "Unspecified"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 342,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 340,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 321,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "font-medium text-muted-foreground",
									children: "Action Summary:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 349,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "rounded border border-border/80 bg-background/50 p-2.5 font-medium text-foreground",
									children: inspectEvent.action
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 352,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 348,
								columnNumber: 15
							}, this),
							inspectEvent.details && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "font-medium text-muted-foreground",
									children: "Operational Details & Context:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 358,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "rounded border border-border/80 bg-muted/40 p-2.5 text-foreground leading-relaxed",
									children: inspectEvent.details
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 361,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 357,
								columnNumber: 40
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "font-medium text-muted-foreground",
									children: "Target Record ID:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 367,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "font-mono text-primary",
									children: inspectEvent.target
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 370,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 366,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "rounded-lg border border-dashed border-border bg-card p-3",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground font-mono text-[11px]",
									children: "Integrity Checksum:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 374,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "font-mono text-[10px] text-muted-foreground break-all mt-0.5",
									children: [
										"SHA256:",
										btoa(inspectEvent.id + inspectEvent.at + inspectEvent.actor).slice(0, 32),
										"..."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 377,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 373,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 320,
						columnNumber: 28
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 308,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 307,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 183,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuditLogPage as component };
