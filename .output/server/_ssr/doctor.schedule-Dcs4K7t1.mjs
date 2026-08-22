import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { in as CalendarClock } from "../_libs/lucide-react.mjs";
import { l as PageHeader, o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor.schedule-Dcs4K7t1.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/doctor.schedule.tsx?tsr-split=component";
function SchedulePage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			title: "Schedule",
			demo: true,
			description: "Schedule workspace for the Medora doctor console."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			icon: CalendarClock,
			title: "Schedule runs on connected data",
			description: "This workspace view is part of the Medora demo. Connect a live provider to populate it with real records instead of invented ones."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 10
	}, this);
}
//#endregion
export { SchedulePage as component };
