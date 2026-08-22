import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as PhoneCall, f as TriangleAlert, gn as ArrowLeft } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/emergency-BPGxlot8.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/emergency.tsx?tsr-split=component";
var warningSigns = [
	"Chest pain, pressure or tightness",
	"Severe difficulty breathing, or blue lips or face",
	"Sudden weakness, facial droop or trouble speaking",
	"Heavy bleeding that will not stop",
	"Someone is unresponsive, or having a seizure that will not stop",
	"Sudden swelling of the lips, tongue or throat after a medicine, food or sting",
	"Thoughts of harming yourself or someone else",
	"A suspected overdose of any medicine"
];
function EmergencyPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen bg-background",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-10 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 10,
						columnNumber: 11
					}, this), " Back to Medora"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 rounded-xl border border-destructive/45 bg-destructive-soft p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
								className: "size-6 text-destructive",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 14,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-2xl font-bold",
								children: "Get emergency help now"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 15,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 13,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Medora is an informational product. It cannot assess an emergency, and it will never tell you to wait. If any of the warning signs below apply, contact emergency services in your country immediately or go to the nearest emergency department."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 17,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "destructive",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "tel:112",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneCall, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 26,
										columnNumber: 17
									}, this), " Call emergency services"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 25,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "self-center text-xs text-muted-foreground",
								children: "Emergency numbers differ by country — 112 in much of Europe, 911 in the US and Canada, 999 in the UK, 108 or 112 in India."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-lg font-bold",
						children: "Warning signs that need emergency care"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: warningSigns.map((sign) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "surface flex gap-2 p-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								"aria-hidden": true,
								className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 17
							}, this), sign]
						}, sign, true, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 39
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mt-10 rounded-lg border border-border bg-card p-5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-base font-bold",
						children: "While you wait for help"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Stay with the person if you can do so safely." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Have any medicine packs or a prescription list ready to show responders." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Do not give any medicine unless a professional tells you to." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Follow the instructions of the emergency operator, not this page." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { EmergencyPage as component };
