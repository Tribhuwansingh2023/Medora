import { a as __toESM } from "./_runtime.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as Route$4, y as oauthApi } from "./_ssr/router-DnzDjJrL.mjs";
import { f as Button } from "./_ssr/router-DnzDjJrL2.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./_ssr/card-IR0VStwn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_._lovable.oauth.consent-wEJ4Sr2W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/[.]lovable.oauth.consent.tsx?tsr-split=component";
function Consent() {
	const details = Route$4.useLoaderData();
	const { authorization_id } = Route$4.useSearch();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const clientName = details?.client?.name ?? "this client";
	async function decide(approve) {
		setBusy(true);
		setError(null);
		const api = oauthApi();
		const { data, error: err } = approve ? await api.approveAuthorization(authorization_id) : await api.denyAuthorization(authorization_id);
		if (err) {
			setBusy(false);
			setError(err.message);
			return;
		}
		const target = data?.redirect_url ?? data?.redirect_to;
		if (!target) {
			setBusy(false);
			setError("No redirect returned by the authorization server.");
			return;
		}
		window.location.href = target;
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: [
				"Connect ",
				clientName,
				" to Medora"
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: [
				"This lets ",
				clientName,
				" use Medora's medicine intelligence tools as you."
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
				className: "space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "space-y-2 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Search the medicine catalogue and read product details" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Compare local pharmacy prices and browse the pharmacy directory" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this),
							details?.client?.redirect_uri ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: ["Redirects to ", details.client.redirect_uri] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 46
							}, this) : null,
							details?.scope ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: ["Requested scope: ", details.scope] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 31
							}, this) : null
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: "This does not bypass Medora's permissions or backend policies. Tool responses are informational demo data and never medical advice."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this),
					error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: error
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 20
					}, this) : null,
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							disabled: busy,
							onClick: () => decide(true),
							className: "flex-1",
							children: "Approve"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							disabled: busy,
							onClick: () => decide(false),
							className: "flex-1",
							children: "Cancel connection"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 10
	}, this);
}
//#endregion
export { Consent as component };
