import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppRouteGroup } from "./AppRouteGroup-BxgYbXAg.mjs";
import { n as RequireRole, p as pharmacyNav } from "./CommandPalette-BOOv9gnO.mjs";
import { t as WorkspaceShell } from "./WorkspaceShell-rq9hvruM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy-iiP8gp3-.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.tsx?tsr-split=component";
function PharmacyLayout() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppRouteGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequireRole, {
		allow: ["pharmacy", "admin"],
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceShell, {
			workspace: "Pharmacy",
			items: pharmacyNav,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { PharmacyLayout as component };
