import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Pill, f as TriangleAlert, k as ShieldAlert, on as Building2, s as Users, vn as Activity } from "../_libs/lucide-react.mjs";
import { l as PageHeader, m as StatTile } from "./primitives-Dg_-FqLy.mjs";
import { f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection } from "./workspace-DXju8pVi.mjs";
import { i as SimpleBarChart, n as ChartLegend, r as MultiLineChart, t as ChartFrame } from "./charts-Zbcpzpdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-CgG-KCA8.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin.index.tsx?tsr-split=component";
function PlatformOverviewPage() {
	const users = useWorkspaceData("platformUsers");
	const orgs = useWorkspaceData("organisations");
	const catalogue = useWorkspaceData("catalogue");
	const moderation = useWorkspaceData("moderation");
	const metrics = useWorkspaceData("platformMetrics");
	const userRows = users.data ?? [];
	const orgRows = orgs.data ?? [];
	const catalogueRows = catalogue.data ?? [];
	const moderationRows = moderation.data ?? [];
	const roleCounts = userRows.reduce((acc, u) => {
		acc[u.role] = (acc[u.role] ?? 0) + 1;
		return acc;
	}, {});
	const verifiedOrgs = orgRows.filter((o) => o.verification === "verified").length;
	const openReports = moderationRows.filter((r) => r.status === "open" || r.status === "investigating").length;
	const pendingUsers = userRows.filter((u) => u.status === "pending").length;
	const pendingOrgs = orgRows.filter((o) => o.verification === "pending" || o.verification === "expired");
	const needsReviewCatalogue = catalogueRows.filter((c) => c.reviewState !== "published");
	const roleBreakdown = Object.entries(roleCounts).map(([name, value]) => ({
		name: name.charAt(0).toUpperCase() + name.slice(1),
		value
	}));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Platform overview",
				demo: true,
				description: "Aggregate figures computed from the loaded demo records — users, organisations, catalogue and moderation queues."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
				query: users,
				emptyIcon: Users,
				emptyTitle: "No users loaded",
				emptyDescription: "Platform users will appear here once loaded.",
				isEmpty: () => false,
				children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Total users",
							value: String(userRows.length),
							icon: Users,
							hint: `${roleCounts["patient"] ?? 0} patients · ${roleCounts["doctor"] ?? 0} doctors · ${roleCounts["pharmacy"] ?? 0} pharmacies · ${roleCounts["admin"] ?? 0} admins`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Verified organisations",
							value: `${verifiedOrgs} / ${orgRows.length}`,
							icon: Building2,
							tone: pendingOrgs.length > 0 ? "attention" : "positive",
							hint: `${pendingOrgs.length} pending or expired`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Catalogue size",
							value: String(catalogueRows.length),
							icon: Pill,
							hint: `${needsReviewCatalogue.length} flagged for review`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Open moderation reports",
							value: String(openReports),
							icon: ShieldAlert,
							tone: openReports > 0 ? "attention" : "default",
							hint: "Open or investigating"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 16
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
					title: "Growth trend",
					description: "Patients, professionals and searches recorded by the platform metrics provider.",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
						query: metrics,
						emptyIcon: Activity,
						emptyTitle: "No metrics recorded",
						emptyDescription: "Platform metric points will appear here once available.",
						isEmpty: (d) => d.length === 0,
						children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
							title: "Users and searches over time",
							height: 260,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiLineChart, {
								data: data.map((d) => ({
									date: shortDate(`${d.date}T00:00:00.000Z`),
									Patients: d.patients,
									Professionals: d.professionals,
									Searches: d.searches
								})),
								xKey: "date",
								series: [
									{
										key: "Patients",
										label: "Patients"
									},
									{
										key: "Professionals",
										label: "Professionals"
									},
									{
										key: "Searches",
										label: "Searches"
									}
								]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { items: [
							{
								label: "Patients",
								color: "var(--chart-1)"
							},
							{
								label: "Professionals",
								color: "var(--chart-2)"
							},
							{
								label: "Searches",
								color: "var(--chart-3)"
							}
						] }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 22
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
					title: "User role breakdown",
					description: "Distribution of accounts by role, from the current user list.",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
						query: users,
						emptyIcon: Users,
						emptyTitle: "No users loaded",
						emptyDescription: "Role breakdown will appear once users are loaded.",
						isEmpty: (d) => d.length === 0,
						children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
							title: "Accounts by role",
							height: 220,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBarChart, {
								data: roleBreakdown,
								xKey: "name",
								yKey: "value",
								label: "Accounts"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 20
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Needs administrator attention",
				description: "A compact queue linking straight to the relevant workspace.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "divide-y divide-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex flex-wrap items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
									className: "size-4 text-warning",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium text-ink",
											children: pendingUsers
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 91,
											columnNumber: 15
										}, this),
										" user account",
										pendingUsers === 1 ? "" : "s",
										" awaiting approval"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
									label: pendingUsers > 0 ? "Action needed" : "Clear",
									tone: pendingUsers > 0 ? "warning" : "positive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/admin/users",
									className: "text-sm font-medium text-primary underline underline-offset-2",
									children: "Review users"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex flex-wrap items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, {
									className: "size-4 text-warning",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium text-ink",
											children: pendingOrgs.length
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 103,
											columnNumber: 15
										}, this),
										" ",
										"organisation",
										pendingOrgs.length === 1 ? "" : "s",
										" pending or with an expired licence"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
									label: pendingOrgs.length > 0 ? "Action needed" : "Clear",
									tone: pendingOrgs.length > 0 ? "warning" : "positive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/admin/pharmacies",
									className: "text-sm font-medium text-primary underline underline-offset-2",
									children: "Review organisations"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex flex-wrap items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, {
									className: "size-4 text-warning",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium text-ink",
											children: needsReviewCatalogue.length
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 116,
											columnNumber: 15
										}, this),
										" ",
										"catalogue record",
										needsReviewCatalogue.length === 1 ? "" : "s",
										" ",
										"flagged for review"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
									label: needsReviewCatalogue.length > 0 ? "Action needed" : "Clear",
									tone: needsReviewCatalogue.length > 0 ? "warning" : "positive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/admin/catalog",
									className: "text-sm font-medium text-primary underline underline-offset-2",
									children: "Review catalogue"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex flex-wrap items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, {
									className: "size-4 text-destructive",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium text-ink",
											children: openReports
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 130,
											columnNumber: 15
										}, this),
										" open moderation report",
										openReports === 1 ? "" : "s"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
									label: openReports > 0 ? "Action needed" : "Clear",
									tone: openReports > 0 ? "danger" : "positive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs text-muted-foreground",
									children: "See moderation log"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 10
	}, this);
}
//#endregion
export { PlatformOverviewPage as component };
