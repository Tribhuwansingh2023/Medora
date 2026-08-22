import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore } from "./router-DnzDjJrL.mjs";
import { u as Upload, wt as FlaskConical } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, r as settle, s as demoLabReport } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader, n as Badge, o as EmptyState, r as ClinicalDisclaimer, s as IntegrationNotConnected } from "./primitives-Dg_-FqLy.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-6PrvPBtG.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.labs-BYjnvT1T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.labs.tsx?tsr-split=component";
var flagMeta = {
	within_range: {
		label: "Within printed range",
		cls: "border-success/35 bg-success-soft text-success"
	},
	outside_range: {
		label: "Outside printed range",
		cls: "border-warning/40 bg-warning-soft text-warning-foreground"
	},
	no_range_provided: {
		label: "No range on report",
		cls: "border-border bg-secondary text-muted-foreground"
	}
};
function LabsPage() {
	const { state, addLabReport } = useStore();
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const simulateUpload = async () => {
		setUploading(true);
		const parsed = await settle({
			...demoLabReport,
			id: `lab-${Math.random().toString(36).slice(2, 8)}`,
			uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
		}, 900);
		addLabReport(parsed);
		setUploading(false);
		toast.success("Sample report parsed", { description: "Demo parsing only — values come from Medora's sample report, not your file." });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Lab reports",
				demo: true,
				description: "Medora explains what each test measures and compares it to the reference range printed on the report. It never interprets results for you.",
				actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: () => void simulateUpload(),
					disabled: uploading,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 13
					}, this), uploading ? "Parsing…" : "Upload a report"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 206
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationNotConnected, { integration: "labParsing" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			uploading && /* @__PURE__ */ (void 0)("div", {
				className: "surface space-y-3 p-5",
				children: [/* @__PURE__ */ (void 0)(Skeleton, { className: "h-5 w-1/3" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)(Skeleton, { className: "h-24 w-full" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 21
			}, this),
			!uploading && state.labReports.length === 0 && /* @__PURE__ */ (void 0)(EmptyState, {
				icon: FlaskConical,
				title: "No reports yet",
				description: "Upload a lab report and Medora will list each test with a plain-language explanation of what it measures.",
				action: /* @__PURE__ */ (void 0)(Button, {
					onClick: () => void simulateUpload(),
					children: [/* @__PURE__ */ (void 0)(Upload, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 15
					}, this), " Upload a report"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 238
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 55
			}, this),
			state.labReports.map((report) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
					className: "flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-lg font-semibold text-ink",
						children: report.panel
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							report.fileName,
							" · uploaded",
							" ",
							new Date(report.uploadedAt).toLocaleDateString()
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						variant: "outline",
						children: [report.values.length, " tests"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Test" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
							className: "text-right",
							children: "Value"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Reference range" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, { children: "Status" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 19
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 17
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: report.values.map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "font-medium",
							children: [v.name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 max-w-md text-xs font-normal text-muted-foreground",
								children: v.explanation
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "numeric text-right",
							children: [
								v.value,
								" ",
								v.unit
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
							className: "numeric text-muted-foreground",
							children: v.referenceRange || "Not printed"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: "outline",
							className: flagMeta[v.flag].cls,
							children: flagMeta[v.flag].label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 23
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 21
						}, this)
					] }, v.name, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 41
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 11
				}, this)]
			}, report.id, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 39
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				tone: "warning",
				title: "Ranges differ between laboratories",
				children: "A value outside the printed range is not automatically a problem, and a value inside it does not rule anything out. Only the clinician who ordered the test can interpret it."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 10
	}, this);
}
//#endregion
export { LabsPage as component };
