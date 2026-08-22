import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppRouteGroup } from "./AppRouteGroup-BxgYbXAg.mjs";
import { n as RequireRole, u as doctorNav } from "./CommandPalette-BOOv9gnO.mjs";
import { t as WorkspaceShell } from "./WorkspaceShell-rq9hvruM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor-dN05Kili.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/doctor.tsx?tsr-split=component";
function DoctorLayout() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppRouteGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequireRole, {
		allow: ["doctor", "admin"],
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceShell, {
			workspace: "Clinician",
			items: doctorNav,
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
export { DoctorLayout as component };
