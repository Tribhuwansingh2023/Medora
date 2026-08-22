import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, E as formatMoney } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ShoppingBag, Et as FileText, I as Scale, ln as Bell, vt as History } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { l as PageHeader, n as Badge, o as EmptyState, r as ClinicalDisclaimer } from "./primitives-Dg_-FqLy.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.history-DQdqUDsK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.history.tsx?tsr-split=component";
var kindMeta = {
	comparison: {
		label: "Comparison",
		icon: Scale
	},
	order: {
		label: "Reservation",
		icon: ShoppingBag
	},
	prescription: {
		label: "Prescription",
		icon: FileText
	},
	dose: {
		label: "Dose log",
		icon: Bell
	}
};
function HistoryPage() {
	const { state } = useStore();
	const entries = (0, import_react.useMemo)(() => {
		const list = [];
		state.comparisons.forEach((c) => list.push({
			id: c.id,
			at: c.createdAt,
			kind: "comparison",
			title: c.label,
			detail: `${c.medicineIds.length} products compared · ${formatMoney(c.lowest)} to ${formatMoney(c.highest)}`
		}));
		state.orders.forEach((o) => list.push({
			id: o.id,
			at: o.placedAt,
			kind: "order",
			title: `Reservation at ${o.pharmacyName}`,
			detail: `${o.items.length} item${o.items.length === 1 ? "" : "s"} · ${formatMoney(o.total)} · ${o.status.replace(/_/g, " ")}`
		}));
		state.prescriptions.forEach((p) => list.push({
			id: p.id,
			at: p.uploadedAt,
			kind: "prescription",
			title: p.fileName,
			detail: `${p.items.length} line${p.items.length === 1 ? "" : "s"} extracted · ${p.status} · ${p.prescriberName}`
		}));
		state.reminders.forEach((r) => r.log.forEach((entry, idx) => list.push({
			id: `${r.id}-${idx}`,
			at: `${entry.date}T${entry.time}:00`,
			kind: "dose",
			title: `${r.medicineName} ${r.strength}`,
			detail: entry.state === "taken" ? `Marked taken at ${entry.time}` : `Skipped at ${entry.time}`
		})));
		return list.sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());
	}, [
		state.comparisons,
		state.orders,
		state.prescriptions,
		state.reminders
	]);
	const render = (list) => list.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
		icon: History,
		title: "Nothing recorded yet",
		description: "Compare prices, reserve a medicine or log a dose and it will show up in this timeline.",
		action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/app/search",
				children: "Search medicines"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 222
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 78,
		columnNumber: 57
	}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
		className: "space-y-3",
		children: list.map((e) => {
			const Icon = kindMeta[e.kind].icon;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
				className: "surface grid grid-cols-[auto_minmax(0,1fr)] gap-4 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "grid size-9 shrink-0 place-items-center rounded-md border border-border bg-secondary text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "truncate font-medium text-ink",
								children: e.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								children: kindMeta[e.kind].label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: e.detail
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-xs text-muted-foreground/80",
							suppressHydrationWarning: true,
							children: new Date(e.at).toLocaleString()
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 15
				}, this)]
			}, `${e.kind}-${e.id}`, true, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 14
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 80,
		columnNumber: 27
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Activity history",
				demo: true,
				description: "Everything Medora has recorded on this device. Nothing here is shared with a pharmacy or clinician unless you send it."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "all",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "all",
							children: [
								"All (",
								entries.length,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "comparison",
							children: "Comparisons"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "order",
							children: "Reservations"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "prescription",
							children: "Prescriptions"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "dose",
							children: "Doses"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 11
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "all",
						className: "mt-5",
						children: render(entries)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 9
					}, this),
					[
						"comparison",
						"order",
						"prescription",
						"dose"
					].map((k) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: k,
						className: "mt-5",
						children: render(entries.filter((e) => e.kind === k))
					}, k, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 79
					}, this))
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 100,
		columnNumber: 10
	}, this);
}
//#endregion
export { HistoryPage as component };
