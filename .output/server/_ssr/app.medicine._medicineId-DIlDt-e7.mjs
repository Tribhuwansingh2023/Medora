import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.medicine._medicineId-DIlDt-e7.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.medicine.$medicineId.tsx?tsr-split=notFoundComponent";
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
	icon: TriangleAlert,
	title: "Medicine not found",
	description: "This product is not in the catalogue.",
	action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/app/search",
			children: "Back to search"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 11
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 158
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 5,
	columnNumber: 38
}, void 0);
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
