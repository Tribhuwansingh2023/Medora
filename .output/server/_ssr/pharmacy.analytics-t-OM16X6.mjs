import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Pt as DollarSign, T as ShoppingCart, en as ChartColumn, et as PackageCheck, p as TrendingUp } from "../_libs/lucide-react.mjs";
import { l as PageHeader, m as StatTile } from "./primitives-Dg_-FqLy.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { c as money, f as useWorkspaceData, l as shortDate, o as WorkspaceSection, r as AsyncSection } from "./workspace-DXju8pVi.mjs";
import { a as StatusDonutChart, i as SimpleBarChart, n as ChartLegend, o as TrendAreaChart, t as ChartFrame } from "./charts-Zbcpzpdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.analytics-t-OM16X6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.analytics.tsx?tsr-split=component";
var periods = [{
	value: "7",
	label: "Last 7 days"
}, {
	value: "12",
	label: "Full period"
}];
var statusColors = {
	awaiting_prescription: "var(--chart-1)",
	verifying: "var(--chart-2)",
	accepted: "var(--chart-3)",
	preparing: "var(--chart-4)",
	ready: "var(--chart-5)",
	completed: "var(--chart-1)",
	cancelled: "var(--muted-foreground)"
};
var statusLabels = {
	awaiting_prescription: "Awaiting prescription",
	verifying: "Verifying",
	accepted: "Accepted",
	preparing: "Preparing",
	ready: "Ready",
	completed: "Completed",
	cancelled: "Cancelled"
};
function AnalyticsPage() {
	const sales = useWorkspaceData("sales");
	const orders = useWorkspaceData("pharmacyOrders");
	const inventory = useWorkspaceData("inventory");
	const [period, setPeriod] = (0, import_react.useState)("7");
	const salesRows = sales.data ?? [];
	const slicedSales = (0, import_react.useMemo)(() => {
		const n = period === "7" ? 7 : salesRows.length;
		return salesRows.slice(-n);
	}, [salesRows, period]);
	const totalRevenue = slicedSales.reduce((s, p) => s + p.revenue, 0);
	const totalOrders = slicedSales.reduce((s, p) => s + p.orders, 0);
	const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
	const orderRows = orders.data ?? [];
	const statusCounts = (0, import_react.useMemo)(() => {
		const counts = {};
		for (const o of orderRows) counts[o.status] = (counts[o.status] ?? 0) + 1;
		return counts;
	}, [orderRows]);
	const donutData = Object.entries(statusCounts).map(([status, value]) => ({
		name: statusLabels[status] ?? status,
		value,
		color: statusColors[status] ?? "var(--chart-1)"
	}));
	const inventoryRows = inventory.data ?? [];
	const lowStockCount = inventoryRows.filter((i) => i.stock <= i.reorderLevel).length;
	const restockBar = inventoryRows.map((i) => ({
		name: i.name.split(" · ")[0] ?? i.name,
		stock: i.stock,
		reorder: i.reorderLevel
	})).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Analytics",
				demo: true,
				description: "Revenue, order volume and inventory figures derived from Medora demo records for this pharmacy account.",
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
					value: period,
					onValueChange: setPeriod,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
						className: "w-[160px]",
						"aria-label": "Select period",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: periods.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: p.value,
						children: p.label
					}, p.value, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 33
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 169
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
				query: sales,
				emptyIcon: ChartColumn,
				emptyTitle: "No sales data",
				emptyDescription: "Sales figures will appear here once recorded.",
				isEmpty: (d) => d.length === 0,
				children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Revenue",
							value: money(totalRevenue),
							icon: DollarSign,
							hint: `Demo figure · ${periods.find((p) => p.value === period)?.label}`
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Orders",
							value: String(totalOrders),
							icon: ShoppingCart,
							hint: "Demo figure for the selected period"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Average order value",
							value: money(avgOrderValue),
							icon: TrendingUp,
							hint: "Derived from demo revenue and order counts"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
							label: "Items at or below reorder level",
							value: String(lowStockCount),
							icon: PackageCheck,
							tone: lowStockCount > 0 ? "attention" : "default",
							hint: "Last-synced demo inventory snapshot, not live stock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-6 xl:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
						title: "Revenue trend",
						description: `Daily revenue for the ${periods.find((p) => p.value === period)?.label.toLowerCase()}.`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendAreaChart, {
							data: slicedSales.map((p) => ({
								...p,
								day: shortDate(`${p.date}T00:00:00.000Z`)
							})),
							xKey: "day",
							yKey: "revenue",
							label: "Revenue"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
						title: "Order volume",
						description: "Daily order counts across the same period.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBarChart, {
							data: slicedSales.map((p) => ({
								...p,
								day: shortDate(`${p.date}T00:00:00.000Z`)
							})),
							xKey: "day",
							yKey: "orders",
							label: "Orders"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 16
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: orders,
					emptyIcon: ShoppingCart,
					emptyTitle: "No orders yet",
					emptyDescription: "Order status breakdown will appear once orders are placed.",
					isEmpty: (d) => d.length === 0,
					children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
						title: "Orders by status",
						description: "Current pharmacy order pipeline, demo snapshot.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusDonutChart, { data: donutData }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 18
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: inventory,
					emptyIcon: PackageCheck,
					emptyTitle: "No inventory records",
					emptyDescription: "Stock levels will appear once inventory is loaded.",
					isEmpty: (d) => d.length === 0,
					children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartFrame, {
						title: "Stock vs reorder level",
						description: "Last-synced demo inventory figures, not live stock counts.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBarChart, {
							data: restockBar,
							xKey: "name",
							yKey: "stock",
							label: "Units in stock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 18
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Order status legend",
				description: "Colours used in the status breakdown above.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { items: donutData.map((d) => ({
					label: d.name,
					color: d.color ?? "var(--chart-1)"
				})) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 64,
		columnNumber: 10
	}, this);
}
//#endregion
export { AnalyticsPage as component };
