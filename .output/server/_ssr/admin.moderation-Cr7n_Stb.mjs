import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { k as ShieldAlert } from "../_libs/lucide-react.mjs";
import { l as PageHeader, o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.moderation-Cr7n_Stb.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin.moderation.tsx?tsr-split=component";
function ModerationPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			title: "Moderation",
			demo: true,
			description: "Moderation workspace for the Medora admin console."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			icon: ShieldAlert,
			title: "Moderation runs on connected data",
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
export { ModerationPage as component };
