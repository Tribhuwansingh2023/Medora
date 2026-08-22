import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Receipt, Bt as ClipboardCheck, Q as Package, St as Gauge, f as TriangleAlert, sn as Boxes } from "../_libs/lucide-react.mjs";
import { l as PageHeader, m as StatTile } from "./primitives-Dg_-FqLy.mjs";
import { a as Timeline, c as money, f as useWorkspaceData, o as WorkspaceSection, r as AsyncSection, s as daysUntil, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
import { o as TrendAreaChart, t as ChartFrame } from "./charts-Zbcpzpdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.index-BxWiiChu.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.index.tsx?tsr-split=component";
function OverviewPage() {
	const orders = useWorkspaceData("pharmacyOrders");
	const inventory = useWorkspaceData("inventory");
	const sales = useWorkspaceData("sales");
	const verification = useWorkspaceData("verificationQueue");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			title: "Overview",
			demo: true,
			description: "A snapshot built from demo pharmacy records — orders, verification queue, stock lines and a twelve-day sales sample."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
			query: orders,
			emptyIcon: Gauge,
			emptyTitle: "No overview data",
			emptyDescription: "Orders will populate this dashboard once they exist.",
			skeletonRows: 1,
			children: (orderRows) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
				query: inventory,
				emptyIcon: Gauge,
				emptyTitle: "No overview data",
				emptyDescription: "Inventory will populate this dashboard once it exists.",
				skeletonRows: 1,
				children: (inventoryRows) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: verification,
					emptyIcon: Gauge,
					emptyTitle: "No overview data",
					emptyDescription: "Verification queue will populate this dashboard once it exists.",
					skeletonRows: 1,
					children: (verificationRows) => {
						const awaitingAction = orderRows.filter((o) => [
							"awaiting_prescription",
							"verifying",
							"accepted"
						].includes(o.status)).length;
						const inReview = verificationRows.filter((v) => v.status === "waiting" || v.status === "in_review").length;
						const lowStock = inventoryRows.filter((i) => i.stock <= i.reorderLevel).length;
						const periodRevenue = (sales.data ?? []).reduce((sum, p) => sum + p.revenue, 0);
						const needsAttention = [];
						if (lowStock > 0) needsAttention.push({
							id: "low-stock",
							label: `${lowStock} line${lowStock === 1 ? "" : "s"} at or below reorder level`,
							detail: "Last-synced demo stock figures — review in Inventory.",
							to: "/pharmacy/inventory",
							tone: "warning"
						});
						const expiringSoon = inventoryRows.filter((i) => {
							const d = daysUntil(i.expiry);
							return d >= 0 && d <= 60;
						}).length;
						if (expiringSoon > 0) needsAttention.push({
							id: "expiring",
							label: `${expiringSoon} line${expiringSoon === 1 ? "" : "s"} expiring within 60 days`,
							detail: "Based on the demo expiry dates on file.",
							to: "/pharmacy/inventory",
							tone: "warning"
						});
						if (inReview > 0) needsAttention.push({
							id: "verification",
							label: `${inReview} prescription${inReview === 1 ? "" : "s"} in the verification queue`,
							detail: "Waiting for a pharmacist decision.",
							to: "/pharmacy/orders",
							tone: "info"
						});
						const cancelled = orderRows.filter((o) => o.status === "cancelled").length;
						if (cancelled > 0) needsAttention.push({
							id: "cancelled",
							label: `${cancelled} order${cancelled === 1 ? "" : "s"} cancelled recently`,
							detail: "Review for restocking or follow-up.",
							to: "/pharmacy/orders",
							tone: "danger"
						});
						const recentActivity = [...orderRows].sort((a, b) => Date.parse(b.placedAt) - Date.parse(a.placedAt)).slice(0, 6).map((o) => ({
							id: o.id,
							at: shortDateTime(o.placedAt),
							title: `Order ${o.id} · ${o.customer}`,
							body: `${o.items} item${o.items === 1 ? "" : "s"} · ${money(o.total)}`,
							meta: o.status.replace(/_/g, " ")
						}));
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
									label: "Orders awaiting action",
									value: String(awaitingAction),
									icon: Package,
									tone: awaitingAction > 0 ? "attention" : "default",
									hint: "Awaiting prescription, verification or acceptance"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
									label: "Verification queue",
									value: String(inReview),
									icon: ClipboardCheck,
									tone: inReview > 0 ? "attention" : "default",
									hint: "Prescriptions waiting on a pharmacist"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
									label: "Low-stock lines",
									value: String(lowStock),
									icon: Boxes,
									tone: lowStock > 0 ? "attention" : "default",
									hint: "At or below reorder level (last-synced demo figures)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
									label: "Revenue, 12-day sample",
									value: money(periodRevenue),
									icon: Receipt,
									hint: "Sum of the demo sales trend below"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 25
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 23
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
									query: sales,
									emptyIcon: Gauge,
									emptyTitle: "No sales sample",
									emptyDescription: "A sales trend will appear once demo sales points exist.",
									isEmpty: (d) => d.length === 0,
									children: (salesData) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
										title: "Sales trend",
										description: "Daily revenue over the demo sample period.",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendAreaChart, {
											data: salesData,
											xKey: "date",
											yKey: "revenue",
											label: "Revenue"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 99,
											columnNumber: 33
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 43
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 27
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
									title: "Needs attention",
									description: "Derived from the current demo dataset — nothing here is invented.",
									children: needsAttention.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm text-muted-foreground",
										children: "Nothing needs attention in the current demo data."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 60
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "divide-y divide-border",
										children: needsAttention.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex flex-wrap items-center justify-between gap-3 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
													className: "mt-0.5 size-4 text-warning",
													"aria-hidden": true
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 110,
													columnNumber: 39
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-sm font-medium text-ink",
													children: item.label
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 112,
													columnNumber: 41
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-xs text-muted-foreground",
													children: item.detail
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 115,
													columnNumber: 41
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 111,
													columnNumber: 39
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 109,
												columnNumber: 37
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
												to: item.to,
												className: "text-sm font-medium text-primary underline-offset-2 hover:underline",
												children: "Review"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 120,
												columnNumber: 37
											}, this)]
										}, item.id, true, {
											fileName: _jsxFileName,
											lineNumber: 108,
											columnNumber: 61
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 38
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 27
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 25
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
								title: "Recent activity",
								description: "Most recently placed orders.",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, { items: recentActivity }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 27
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 23
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 20
						}, this);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 31
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 23
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
//#endregion
export { OverviewPage as component };
