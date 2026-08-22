import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { S as useOptionalStore, n as AppStoreProvider, t as AppErrorBoundary } from "./router-DnzDjJrL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppRouteGroup-BxgYbXAg.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/layout/AppRouteGroup.tsx";
/**
* Mounts <AppStoreProvider> only if one isn't already above in the tree, so
* nesting is always safe (the root already provides it; this is the guarantee
* for any route group mounted outside the root provider).
*/
function EnsureStoreProvider({ children }) {
	if (useOptionalStore()) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 24
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppStoreProvider, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
/**
* Shared wrapper for every app route group (patient /app, /switch and the
* pharmacy, doctor and admin workspaces, plus all their nested routes).
* Guarantees store access and a safe fallback screen for the whole subtree.
*/
function AppRouteGroup({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnsureStoreProvider, { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
//#endregion
export { AppRouteGroup as t };
