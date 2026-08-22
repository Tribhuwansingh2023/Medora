import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as ThemeToggle } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Search, st as Menu, ut as LogOut, w as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as SheetContent, c as SheetTrigger, i as Sheet, m as useCommandPalette, o as SheetHeader, r as ScrollArea, s as SheetTitle, t as CommandPalette } from "./CommandPalette-BOOv9gnO.mjs";
import { c as Logo } from "./primitives-Dg_-FqLy.mjs";
import { t as useSignOut } from "./use-sign-out-CJjJ3TG8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WorkspaceShell-rq9hvruM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/layout/WorkspaceShell.tsx";
function WorkspaceNav({ items, onNavigate }) {
	const groups = [...new Set(items.map((i) => i.group))];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "space-y-6",
		"aria-label": "Workspace",
		children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
			children: group
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
			className: "space-y-0.5",
			children: items.filter((i) => i.group === group).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: item.to,
				onClick: onNavigate,
				activeOptions: { exact: item.to.split("/").length === 2 },
				className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-accent-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
					className: "size-4 shrink-0 opacity-80",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 21
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "truncate",
					children: item.label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 21
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 19
			}, this) }, item.to, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 17
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 11
		}, this)] }, group, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
function WorkspaceShell({ workspace, items, children }) {
	const { open, setOpen } = useCommandPalette();
	const [mobileNav, setMobileNav] = (0, import_react.useState)(false);
	const signOut = useSignOut();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandPalette, {
				open,
				onOpenChange: setOpen
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-sidebar-border bg-sidebar lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-16 items-center border-b border-sidebar-border px-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							"aria-label": "Medora home",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "px-5 pb-3 pt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-primary",
							children: [workspace, " workspace"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, {
						className: "flex-1 px-2 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceNav, { items }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-t border-sidebar-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/switch",
							className: "flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-sidebar-accent",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlidersHorizontal, {
								className: "size-3.5",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 13
							}, this), " Switch workspace"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:pl-[248px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
					className: "sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-16 items-center gap-3 px-4 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
								open: mobileNav,
								onOpenChange: setMobileNav,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "icon",
										className: "lg:hidden",
										"aria-label": "Open navigation",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {
											className: "size-5",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 113,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 106,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
									side: "left",
									className: "w-[280px] p-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetHeader, {
										className: "border-b border-border px-5 py-4",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTitle, {
											className: "text-left",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 119,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 118,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, {
										className: "h-[calc(100vh-72px)] px-2 py-5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceNav, {
											items,
											onNavigate: () => setMobileNav(false)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 123,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "lg:hidden",
								"aria-label": "Medora home",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { compact: true }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setOpen(true),
								className: "ml-auto flex h-9 w-full max-w-sm items-center gap-2 rounded-md border border-input bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-border-strong lg:ml-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 140,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "truncate",
										children: "Search…"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
										className: "ml-auto hidden rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-medium sm:block",
										children: "⌘K"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "ml-auto flex items-center gap-1 lg:ml-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, { showMenu: true }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										variant: "ghost",
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/switch",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlidersHorizontal, {
												className: "size-4",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 151,
												columnNumber: 19
											}, this), " Switch"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 150,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => void signOut(),
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, {
											className: "size-4",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 155,
											columnNumber: 17
										}, this), " Sign out"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "mx-auto w-full max-w-[1220px] px-4 pb-16 pt-6 sm:px-6",
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 74,
		columnNumber: 5
	}, this);
}
//#endregion
export { WorkspaceShell as t };
