import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as DemoBadge } from "./primitives-Dg_-FqLy.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/charts-Zbcpzpdq.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/workspace/charts.tsx";
var axis = {
	stroke: "var(--muted-foreground)",
	fontSize: 11,
	tickLine: false,
	axisLine: false
};
var tooltipStyle = {
	borderRadius: 8,
	border: "1px solid var(--border)",
	background: "var(--card)",
	fontSize: 12,
	color: "var(--foreground)"
};
function ChartFrame({ title, description, children, height = 240 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
		className: "surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
			className: "mb-4 flex flex-wrap items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "font-display text-sm font-bold text-ink",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 11
			}, this), description && /* @__PURE__ */ (void 0)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Demo figures" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: { height },
			className: "w-full",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
function TrendAreaChart({ data, xKey, yKey, label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AreaChart, {
		data,
		margin: {
			left: -18,
			right: 6,
			top: 6,
			bottom: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
				id: `grad-${yKey}`,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
					offset: "0%",
					stopColor: "var(--chart-1)",
					stopOpacity: .35
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
					offset: "100%",
					stopColor: "var(--chart-1)",
					stopOpacity: .02
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
				strokeDasharray: "3 3",
				stroke: "var(--border)",
				vertical: false
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
				dataKey: xKey,
				...axis
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
				...axis,
				width: 54
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
				contentStyle: tooltipStyle,
				formatter: (v) => [v, label]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Area, {
				type: "monotone",
				dataKey: yKey,
				stroke: "var(--chart-1)",
				strokeWidth: 2,
				fill: `url(#grad-${yKey})`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
function SimpleBarChart({ data, xKey, yKey, label, colorKey }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, {
		data,
		margin: {
			left: -18,
			right: 6,
			top: 6,
			bottom: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
				strokeDasharray: "3 3",
				stroke: "var(--border)",
				vertical: false
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
				dataKey: xKey,
				...axis,
				interval: 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
				...axis,
				width: 54,
				allowDecimals: false
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
				cursor: { fill: "var(--secondary)" },
				contentStyle: tooltipStyle,
				formatter: (v) => [v, label]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 128,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
				dataKey: yKey,
				radius: [
					5,
					5,
					0,
					0
				],
				children: data.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cell, { fill: (colorKey ? row[colorKey] : void 0) ?? `var(--chart-${i % 5 + 1})` }, i, false, {
					fileName: _jsxFileName,
					lineNumber: 135,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 133,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 120,
		columnNumber: 5
	}, this);
}
function StatusDonutChart({ data }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: tooltipStyle }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 155,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pie, {
		data,
		dataKey: "value",
		nameKey: "name",
		innerRadius: 54,
		outerRadius: 84,
		paddingAngle: 2,
		children: data.map((entry, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cell, { fill: entry.color ?? `var(--chart-${i % 5 + 1})` }, entry.name, false, {
			fileName: _jsxFileName,
			lineNumber: 165,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 156,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 5
	}, this);
}
function MultiLineChart({ data, xKey, series }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, {
		data,
		margin: {
			left: -18,
			right: 6,
			top: 6,
			bottom: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
				strokeDasharray: "3 3",
				stroke: "var(--border)",
				vertical: false
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 186,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
				dataKey: xKey,
				...axis
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 191,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
				...axis,
				width: 54
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 192,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: tooltipStyle }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 7
			}, this),
			series.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Line, {
				type: "monotone",
				dataKey: s.key,
				name: s.label,
				stroke: `var(--chart-${i % 5 + 1})`,
				strokeWidth: 2,
				dot: false
			}, s.key, false, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 9
			}, this))
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 185,
		columnNumber: 5
	}, this);
}
function ChartLegend({ items }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				"aria-hidden": true,
				className: "size-2.5 rounded-full",
				style: { background: item.color }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 218,
				columnNumber: 11
			}, this), item.label]
		}, item.label, true, {
			fileName: _jsxFileName,
			lineNumber: 217,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 215,
		columnNumber: 5
	}, this);
}
//#endregion
export { StatusDonutChart as a, SimpleBarChart as i, ChartLegend as n, TrendAreaChart as o, MultiLineChart as r, ChartFrame as t };
