import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore } from "./router-DnzDjJrL.mjs";
import { Qt as CheckCheck, ln as Bell, un as BellOff } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, m as cn } from "./router-DnzDjJrL2.mjs";
import { l as PageHeader, o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
import { i as TabsTrigger, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.notifications-CxqYQ1wf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.notifications.tsx?tsr-split=component";
var kindLabels = {
	reminder: "Reminder",
	price: "Price",
	order: "Order",
	safety: "Safety",
	system: "System"
};
function NotificationsPage() {
	const { state, markNotification, markAllNotificationsRead } = useStore();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const items = state.notifications.filter((n) => filter === "all" ? true : filter === "unread" ? !n.read : n.kind === filter);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Notifications",
				description: "Everything Medora has flagged for you, newest first.",
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					onClick: () => {
						markAllNotificationsRead();
						toast.success("All notifications marked as read");
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCheck, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 13
					}, this), " Mark all read"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 117
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: filter,
				onValueChange: setFilter,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "all",
						children: "All"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "unread",
						children: "Unread"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "reminder",
						children: "Reminders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "price",
						children: "Prices"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "order",
						children: "Orders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "safety",
						children: "Safety"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
				icon: BellOff,
				title: "Nothing here",
				description: "When a dose is due, a saved comparison changes price, or an order moves, it will appear here."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 29
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "space-y-2",
				children: items.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: cn("surface flex flex-wrap items-start gap-3 p-4", !n.read && "border-primary/30 bg-primary-soft/40"),
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: cn("mt-0.5 grid size-8 shrink-0 place-items-center rounded-md", n.kind === "safety" ? "bg-destructive-soft text-destructive" : "bg-secondary text-muted-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-semibold text-ink",
										children: n.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded-full border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
										children: kindLabels[n.kind]
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 49,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: n.body
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-xs text-muted-foreground/80",
									children: new Date(n.at).toLocaleString()
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => markNotification(n.id, !n.read),
							children: n.read ? "Mark unread" : "Mark read"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 15
						}, this)
					]
				}, n.id, true, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 27
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 190
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
//#endregion
export { NotificationsPage as component };
