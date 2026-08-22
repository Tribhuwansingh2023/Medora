import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { G as Pill, f as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection, s as daysUntil } from "./workspace-DXju8pVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.catalog-bXJVy2nl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin.catalog.tsx?tsr-split=component";
var reviewLabel = {
	published: "Published",
	needs_review: "Needs review",
	quarantined: "Quarantined"
};
var reviewTone = {
	published: "positive",
	needs_review: "warning",
	quarantined: "danger"
};
var STALE_DAYS = 90;
function isStale(record) {
	return daysUntil(record.lastReviewed) < -90;
}
function CataloguePage() {
	const catalogue = useWorkspaceData("catalogue");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const rows = catalogue.data ?? [];
	const selected = rows.find((r) => r.id === openId) ?? null;
	const columns = [
		{
			key: "brandName",
			header: "Medicine",
			sortValue: (r) => r.brandName,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.brandName
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: r.genericName
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 18
			}, this)
		},
		{
			key: "compositionKey",
			header: "Composition",
			hideBelow: "lg",
			sortValue: (r) => r.compositionKey,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric text-xs text-muted-foreground",
				children: r.compositionKey
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 18
			}, this)
		},
		{
			key: "form",
			header: "Form",
			hideBelow: "md",
			sortValue: (r) => r.form,
			render: (r) => r.form
		},
		{
			key: "source",
			header: "Source",
			hideBelow: "md",
			sortValue: (r) => r.source,
			render: (r) => r.source
		},
		{
			key: "lastReviewed",
			header: "Last reviewed",
			sortValue: (r) => r.lastReviewed,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: shortDate(`${r.lastReviewed}T00:00:00.000Z`) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this), isStale(r) && /* @__PURE__ */ (void 0)(TriangleAlert, {
					className: "size-3.5 text-warning",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 26
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 18
			}, this)
		},
		{
			key: "reviewState",
			header: "Review state",
			sortValue: (r) => r.reviewState,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
				label: reviewLabel[r.reviewState],
				tone: reviewTone[r.reviewState]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 18
			}, this)
		}
	];
	const sourceOptions = Array.from(new Set(rows.map((r) => r.source))).map((source) => ({
		value: source,
		label: source
	}));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Catalogue",
				demo: true,
				description: "Sample catalogue metadata. Every clinical claim shown here traces back to a stated source and a last-reviewed date — records without recent review are flagged."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
				title: "Catalogue records",
				description: "Filter by source and review state. Stale records (not reviewed in over 90 days) are marked.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
					query: catalogue,
					emptyIcon: Pill,
					emptyTitle: "No catalogue records found",
					emptyDescription: "Catalogue entries will appear here once loaded.",
					isEmpty: (d) => d.length === 0,
					children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
						rows: data,
						columns,
						getId: (r) => r.id,
						searchText: (r) => `${r.brandName} ${r.genericName} ${r.compositionKey}`,
						searchPlaceholder: "Search by brand, generic or composition…",
						initialSort: {
							key: "brandName",
							direction: "asc"
						},
						pageSize: 8,
						filters: [{
							key: "source",
							label: "Source",
							options: sourceOptions,
							predicate: (r, v) => r.source === v
						}, {
							key: "reviewState",
							label: "Review state",
							options: Object.entries(reviewLabel).map(([value, label]) => ({
								value,
								label
							})),
							predicate: (r, v) => r.reviewState === v
						}],
						onRowClick: (r) => setOpenId(r.id),
						rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setOpenId(r.id),
							children: "Provenance"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 64
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
				open: Boolean(selected),
				onOpenChange: (open) => !open && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
					className: "max-w-lg",
					children: selected && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (void 0)(DialogHeader, { children: [/* @__PURE__ */ (void 0)(DialogTitle, { children: selected.brandName }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)(DialogDescription, { children: [
							selected.genericName,
							" · ",
							selected.form
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("dl", {
							className: "grid grid-cols-2 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Composition key"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "numeric mt-0.5 text-xs",
									children: selected.compositionKey
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Metadata completeness"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "numeric mt-0.5",
									children: [Math.round(selected.metadataCompleteness * 100), "%"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Review state"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: /* @__PURE__ */ (void 0)(StatusPill, {
										label: reviewLabel[selected.reviewState],
										tone: reviewTone[selected.reviewState]
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 133,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Last reviewed"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("dd", {
									className: "mt-0.5",
									children: shortDate(`${selected.lastReviewed}T00:00:00.000Z`)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-md border border-border bg-secondary/50 p-3 text-sm",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "font-medium text-ink",
								children: "Provenance"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-muted-foreground",
								children: [
									"All clinical and composition claims for this record come from",
									" ",
									/* @__PURE__ */ (void 0)("span", {
										className: "font-medium text-foreground/90",
										children: selected.source
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 19
									}, this),
									", last reviewed on",
									" ",
									shortDate(`${selected.lastReviewed}T00:00:00.000Z`),
									". This is a sample record — no licensed regulatory feed is connected in this environment."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 15
						}, this),
						isStale(selected) && /* @__PURE__ */ (void 0)("div", {
							role: "alert",
							className: "flex items-start gap-2 rounded-md border border-warning/40 bg-warning-soft p-3 text-sm text-warning-foreground",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, {
								className: "mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", { children: [
								"This record has not been reviewed in over ",
								STALE_DAYS,
								" days. It needs a fresh provenance review before its claims should be trusted."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 37
						}, this),
						selected.reviewState !== "published" && !isStale(selected) && /* @__PURE__ */ (void 0)("div", {
							role: "alert",
							className: "flex items-start gap-2 rounded-md border border-warning/40 bg-warning-soft p-3 text-sm text-warning-foreground",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, {
								className: "mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", { children: [
								"This record is marked",
								" ",
								reviewLabel[selected.reviewState].toLowerCase(),
								" and is not yet published to patients."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 78
						}, this),
						/* @__PURE__ */ (void 0)(DialogFooter, { children: /* @__PURE__ */ (void 0)(Button, {
							variant: "outline",
							onClick: () => setOpenId(null),
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 17
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 24
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 74,
		columnNumber: 10
	}, this);
}
//#endregion
export { CataloguePage as component };
