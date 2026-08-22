import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Kt as ChevronsUpDown, N as Search, _n as ArrowDown, fn as ArrowUp, i as X } from "../_libs/lucide-react.mjs";
import { f as Button, m as cn } from "./router-DnzDjJrL2.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as Checkbox } from "./checkbox-BTQWJrf_.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-6PrvPBtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DataTable-BCSgB4Od.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/workspace/DataTable.tsx";
var hideClass = {
	sm: "hidden sm:table-cell",
	md: "hidden md:table-cell",
	lg: "hidden lg:table-cell"
};
function DataTable({ rows, columns, getId, searchText, searchPlaceholder = "Search…", filters = [], rowActions, bulkActions, onRowClick, pageSize = 8, initialSort, emptyTitle = "Nothing matches these filters", emptyDescription = "Adjust the search or filters to widen the result set.", toolbarExtra }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [filterValues, setFilterValues] = (0, import_react.useState)({});
	const [sort, setSort] = (0, import_react.useState)(initialSort ?? null);
	const [page, setPage] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)([]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		let out = rows.filter((row) => q ? searchText(row).toLowerCase().includes(q) : true);
		for (const filter of filters) {
			const value = filterValues[filter.key];
			if (value && value !== "all") out = out.filter((row) => filter.predicate(row, value));
		}
		if (sort) {
			const column = columns.find((c) => c.key === sort.key);
			if (column?.sortValue) {
				const dir = sort.direction === "asc" ? 1 : -1;
				out = [...out].sort((a, b) => {
					const av = column.sortValue(a);
					const bv = column.sortValue(b);
					if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
					return String(av).localeCompare(String(bv)) * dir;
				});
			}
		}
		return out;
	}, [
		rows,
		query,
		filterValues,
		filters,
		sort,
		columns,
		searchText
	]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(page, pageCount - 1);
	const pageRows = filtered.slice(safePage * pageSize, safePage * pageSize + pageSize);
	const pageIds = pageRows.map(getId);
	const allOnPageSelected = pageIds.length > 0 && pageIds.every((id) => selected.includes(id));
	const activeFilters = Object.values(filterValues).filter((v) => v && v !== "all").length + (query ? 1 : 0);
	const reset = () => {
		setQuery("");
		setFilterValues({});
		setPage(0);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative min-w-[180px] flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
							className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: query,
							onChange: (e) => {
								setQuery(e.target.value);
								setPage(0);
							},
							placeholder: searchPlaceholder,
							className: "pl-9",
							"aria-label": searchPlaceholder
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 9
					}, this),
					filters.map((filter) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
						value: filterValues[filter.key] ?? "all",
						onValueChange: (value) => {
							setFilterValues((prev) => ({
								...prev,
								[filter.key]: value
							}));
							setPage(0);
						},
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
							className: "h-9 w-[165px]",
							"aria-label": filter.label,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: filter.label }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
							value: "all",
							children: [filter.label, ": all"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 15
						}, this), filter.options.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
							value: o.value,
							children: o.label
						}, o.value, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 17
						}, this))] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 13
						}, this)]
					}, filter.key, true, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 11
					}, this)),
					activeFilters > 0 && /* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: reset,
						children: [/* @__PURE__ */ (void 0)(X, {
							className: "size-4",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 13
						}, this), " Clear"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 11
					}, this),
					toolbarExtra
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 7
			}, this),
			bulkActions && selected.length > 0 && /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap items-center gap-2 rounded-md border border-primary/30 bg-primary-soft px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (void 0)("span", {
					className: "font-medium text-ink",
					children: [selected.length, " selected"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "ml-auto flex flex-wrap items-center gap-2",
					children: [bulkActions(selected, () => setSelected([])), /* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => setSelected([]),
						children: "Clear selection"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 188,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 184,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "overflow-x-auto rounded-lg border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, {
					className: "hover:bg-transparent",
					children: [
						bulkActions && /* @__PURE__ */ (void 0)(TableHead, {
							className: "w-10",
							children: /* @__PURE__ */ (void 0)(Checkbox, {
								checked: allOnPageSelected,
								"aria-label": "Select all rows on this page",
								onCheckedChange: (checked) => setSelected((prev) => checked ? [.../* @__PURE__ */ new Set([...prev, ...pageIds])] : prev.filter((id) => !pageIds.includes(id)))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 17
						}, this),
						columns.map((column) => {
							const sortable = Boolean(column.sortValue);
							const active = sort?.key === column.key;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableHead, {
								style: column.width ? { width: column.width } : void 0,
								className: cn(column.align === "right" && "text-right", column.hideBelow && hideClass[column.hideBelow]),
								children: sortable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setSort((prev) => prev?.key === column.key ? {
										key: column.key,
										direction: prev.direction === "asc" ? "desc" : "asc"
									} : {
										key: column.key,
										direction: "asc"
									}),
									className: cn("inline-flex items-center gap-1 font-medium hover:text-ink", column.align === "right" && "flex-row-reverse", active && "text-ink"),
									children: [column.header, active ? sort?.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUp, {
										className: "size-3.5",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 251,
										columnNumber: 29
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDown, {
										className: "size-3.5",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 253,
										columnNumber: 29
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsUpDown, {
										className: "size-3.5 opacity-50",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 256,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 229,
									columnNumber: 23
								}, this) : column.header
							}, column.key, false, {
								fileName: _jsxFileName,
								lineNumber: 220,
								columnNumber: 19
							}, this);
						}),
						rowActions && /* @__PURE__ */ (void 0)(TableHead, {
							className: "w-[1%] text-right",
							children: "Actions"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 269,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableBody, { children: pageRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
					colSpan: columns.length + (rowActions ? 1 : 0) + (bulkActions ? 1 : 0),
					className: "py-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-medium text-ink",
						children: emptyTitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 284,
						columnNumber: 19
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: emptyDescription
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 285,
						columnNumber: 19
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 276,
					columnNumber: 17
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 15
				}, this) : pageRows.map((row) => {
					const id = getId(row);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableRow, {
						"data-state": selected.includes(id) ? "selected" : void 0,
						onClick: onRowClick ? () => onRowClick(row) : void 0,
						className: cn(onRowClick && "cursor-pointer"),
						children: [
							bulkActions && /* @__PURE__ */ (void 0)(TableCell, {
								onClick: (e) => e.stopPropagation(),
								children: /* @__PURE__ */ (void 0)(Checkbox, {
									checked: selected.includes(id),
									"aria-label": `Select row ${id}`,
									onCheckedChange: (checked) => setSelected((prev) => checked ? [...prev, id] : prev.filter((x) => x !== id))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 302,
									columnNumber: 25
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 301,
								columnNumber: 23
							}, this),
							columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableCell, {
								className: cn(column.align === "right" && "text-right", column.hideBelow && hideClass[column.hideBelow]),
								children: column.render(row)
							}, column.key, false, {
								fileName: _jsxFileName,
								lineNumber: 316,
								columnNumber: 23
							}, this)),
							rowActions && /* @__PURE__ */ (void 0)(TableCell, {
								className: "text-right",
								onClick: (e) => e.stopPropagation(),
								children: rowActions(row)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 23
							}, this)
						]
					}, id, true, {
						fileName: _jsxFileName,
						lineNumber: 294,
						columnNumber: 19
					}, this);
				}) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 273,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 198,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: filtered.length === 0 ? "No rows" : `Showing ${safePage * pageSize + 1}–${Math.min(filtered.length, safePage * pageSize + pageSize)} of ${filtered.length}` }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 343,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							disabled: safePage === 0,
							onClick: () => setPage(safePage - 1),
							children: "Previous"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 349,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "numeric text-xs",
							children: [
								"Page ",
								safePage + 1,
								" / ",
								pageCount
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 357,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							disabled: safePage >= pageCount - 1,
							onClick: () => setPage(safePage + 1),
							children: "Next"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 348,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 342,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 135,
		columnNumber: 5
	}, this);
}
//#endregion
export { DataTable as t };
