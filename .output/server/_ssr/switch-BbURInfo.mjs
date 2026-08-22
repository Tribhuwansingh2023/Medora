import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { x as useAuth } from "./router-DnzDjJrL.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as ShieldCheck, S as Stethoscope, c as User, on as Building2 } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { t as AppRouteGroup } from "./AppRouteGroup-BxgYbXAg.mjs";
import { c as Logo, f as SafetyNotice } from "./primitives-Dg_-FqLy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/switch-BbURInfo.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/switch.tsx?tsr-split=component";
var workspaces = [
	{
		role: "patient",
		to: "/app",
		title: "Patient",
		blurb: "Search medicines, compare verified listings, manage prescriptions and reminders.",
		icon: User
	},
	{
		role: "pharmacy",
		to: "/pharmacy",
		title: "Pharmacy",
		blurb: "Inventory, expiry and low-stock alerts, prescription verification queue, orders.",
		icon: Building2
	},
	{
		role: "doctor",
		to: "/doctor",
		title: "Clinician",
		blurb: "Patient list, consult workflow, assistive summaries and final clinical decisions.",
		icon: Stethoscope
	},
	{
		role: "admin",
		to: "/admin",
		title: "Administrator",
		blurb: "Users, pharmacies, catalogue metadata, moderation, audit log and platform metrics.",
		icon: ShieldCheck
	}
];
function SwitchRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppRouteGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchWorkspace, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 10
	}, this);
}
function SwitchWorkspace() {
	const { isAuthenticated, hasAnyRole, loading, isDemoMode, signInWithDemoRole } = useAuth();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen bg-background",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto w-full max-w-4xl px-5 py-12 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-8 text-3xl font-bold",
					children: "Choose a workspace"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 max-w-2xl text-muted-foreground",
					children: "Medora ships four role-specific surfaces. Each one is gated by the role on your account: patient, pharmacy, clinician or administrator. Workspaces you don't hold are locked, and professional roles are granted after credential checks."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: workspaces.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						disabled: loading,
						onClick: async () => {
							if (isDemoMode) {
								await signInWithDemoRole(w.role);
								navigate({ to: w.to });
								return;
							}
							if (!isAuthenticated) {
								navigate({
									to: "/auth",
									search: { next: w.to }
								});
								return;
							}
							navigate({ to: w.to });
						},
						className: "surface group flex flex-col items-start gap-3 p-5 text-left transition-shadow hover:shadow-soft focus-visible:shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-9 place-items-center rounded-md bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(w.icon, {
									className: "size-4",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 88,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-lg font-bold text-ink",
								children: w.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-sm text-muted-foreground",
								children: w.blurb
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mt-1 text-sm font-semibold text-primary group-hover:underline",
								children: isDemoMode ? "Launch demo workspace →" : !isAuthenticated ? "Sign in to continue →" : hasAnyRole([w.role, "admin"]) ? "Open workspace →" : "Locked — role required"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this)
						]
					}, w.role, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 32
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
					title: "Role separation is enforced in production",
					className: "mt-8",
					children: "Professional workspaces require verified licence details and are audited. Clinical decisions, prescription verification and dispensing always stay with the qualified professional."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							children: "Back to the landing page"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 10
	}, this);
}
//#endregion
export { SwitchRoute as component };
