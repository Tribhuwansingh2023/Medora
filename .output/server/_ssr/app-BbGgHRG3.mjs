import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, P as getProvider, a as DropdownMenuItem, c as DropdownMenuTrigger, g as ThemeToggle, i as DropdownMenuContent, o as DropdownMenuLabel, r as DropdownMenu, s as DropdownMenuSeparator, x as useAuth } from "./router-DnzDjJrL.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ShoppingBag, N as Search, c as User, j as ServerOff, ln as Bell, st as Menu, ut as LogOut, w as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, m as cn } from "./router-DnzDjJrL2.mjs";
import { t as AppRouteGroup } from "./AppRouteGroup-BxgYbXAg.mjs";
import { a as SheetContent, c as SheetTrigger, d as patientBottomNav, f as patientNav, i as Sheet, m as useCommandPalette, n as RequireRole, o as SheetHeader, r as ScrollArea, s as SheetTitle, t as CommandPalette } from "./CommandPalette-BOOv9gnO.mjs";
import { c as Logo } from "./primitives-Dg_-FqLy.mjs";
import { t as useSignOut } from "./use-sign-out-CJjJ3TG8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-BbGgHRG3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/layout/PatientShell.tsx";
function NavList({ items, onNavigate }) {
	const groups = [...new Set(items.map((i) => i.group))];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "space-y-6",
		"aria-label": "Main",
		children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
			children: group
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 51,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
			className: "space-y-0.5",
			children: items.filter((i) => i.group === group).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: item.to,
				onClick: onNavigate,
				activeOptions: { exact: item.to === "/app" },
				className: "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-accent-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
					className: "size-4 shrink-0 opacity-80",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 65,
					columnNumber: 21
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "truncate",
					children: item.label
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 69,
					columnNumber: 21
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 59,
				columnNumber: 19
			}, this) }, item.to, false, {
				fileName: _jsxFileName$2,
				lineNumber: 58,
				columnNumber: 17
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 54,
			columnNumber: 11
		}, this)] }, group, true, {
			fileName: _jsxFileName$2,
			lineNumber: 50,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
function PatientShell({ children }) {
	const { state, markAllNotificationsRead } = useStore();
	const signOut = useSignOut();
	const { profile, user, primaryRole } = useAuth();
	const { open, setOpen } = useCommandPalette();
	const [mobileNav, setMobileNav] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const unread = state.notifications.filter((n) => !n.read).length;
	const cartCount = state.cart.reduce((s, i) => s + i.qty, 0);
	(0, import_react.useEffect)(() => {
		const checkReminders = () => {
			const now = /* @__PURE__ */ new Date();
			const currentTimeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
			state.reminders.forEach((reminder) => {
				if (!reminder.active) return;
				if (reminder.times.includes(currentTimeStr)) {
					const today = now.toISOString().slice(0, 10);
					if (!reminder.log.some((l) => l.date === today && l.time === currentTimeStr)) toast.info(`Time to take ${reminder.medicineName}`, {
						description: `Dosage: ${reminder.strength} — ${reminder.instruction}`,
						duration: 2e4,
						icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "size-4 text-primary" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 111,
							columnNumber: 21
						}, this)
					});
				}
			});
		};
		checkReminders();
		const interval = setInterval(checkReminders, 6e4);
		return () => clearInterval(interval);
	}, [state.reminders]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandPalette, {
				open,
				onOpenChange: setOpen
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 125,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-sidebar-border bg-sidebar lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-16 items-center border-b border-sidebar-border px-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app",
							"aria-label": "Medora home",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 130,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 129,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 128,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, {
						className: "flex-1 px-2 py-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavList, { items: patientNav }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 134,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 133,
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
								fileName: _jsxFileName$2,
								lineNumber: 141,
								columnNumber: 13
							}, this), " Switch workspace"]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 137,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 136,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 127,
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
											fileName: _jsxFileName$2,
											lineNumber: 158,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 152,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 151,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
									side: "left",
									className: "w-[280px] p-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetHeader, {
										className: "border-b border-border px-5 py-4",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTitle, {
											className: "text-left",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 164,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 163,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 162,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollArea, {
										className: "h-[calc(100vh-72px)] px-2 py-5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavList, {
											items: patientNav,
											onNavigate: () => setMobileNav(false)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 168,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 167,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 161,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 150,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app",
								className: "lg:hidden",
								"aria-label": "Medora home",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { compact: true }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 177,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 176,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setOpen(true),
								"aria-label": "Search medicines, pharmacies and records",
								className: "ml-auto hidden h-9 min-w-0 flex-1 items-center gap-2 rounded-md border border-input bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-border-strong sm:flex sm:max-w-md lg:ml-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
										className: "size-4 shrink-0",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 186,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "truncate",
										children: "Search medicines, pharmacies, records…"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 187,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", {
										className: "ml-auto hidden shrink-0 rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-medium sm:block",
										children: "⌘K"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 190,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 180,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "ml-auto flex shrink-0 items-center gap-0.5 sm:gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, { showMenu: true }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 196,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "icon",
										className: "sm:hidden",
										"aria-label": "Search",
										onClick: () => setOpen(true),
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, {
											className: "size-5",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 204,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 197,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										variant: "ghost",
										size: "icon",
										className: "relative",
										"aria-label": "Cart",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/app/cart",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, {
												className: "size-5",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 214,
												columnNumber: 19
											}, this), cartCount > 0 && /* @__PURE__ */ (void 0)("span", {
												className: "absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground",
												children: cartCount
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 216,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 213,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 206,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										variant: "ghost",
										size: "icon",
										className: "relative",
										"aria-label": `Notifications${unread ? `, ${unread} unread` : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/app/notifications",
											onClick: () => window.setTimeout(markAllNotificationsRead, 1200),
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, {
												className: "size-5",
												"aria-hidden": true
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 235,
												columnNumber: 19
											}, this), unread > 0 && /* @__PURE__ */ (void 0)("span", { className: "absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 237,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 229,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 222,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "ghost",
											size: "icon",
											"aria-label": "Account menu",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "grid size-7 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary uppercase",
												children: (profile?.full_name ?? state.profile.fullName).slice(0, 1)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 244,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 243,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 242,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
										align: "end",
										className: "w-56",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuLabel, {
												className: "font-normal",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "font-semibold",
														children: profile?.full_name ?? state.profile.fullName
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 254,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs text-muted-foreground",
														children: user?.email ?? state.profile.email
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 257,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "mt-1 text-[11px] uppercase tracking-wide text-muted-foreground",
														children: [primaryRole ?? "patient", " account"]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 260,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 253,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 264,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: "/app/settings",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {
														className: "size-4",
														"aria-hidden": true
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 267,
														columnNumber: 23
													}, this), " Profile & settings"]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 266,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 265,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
													to: "/switch",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlidersHorizontal, {
															className: "size-4",
															"aria-hidden": true
														}, void 0, false, {
															fileName: _jsxFileName$2,
															lineNumber: 272,
															columnNumber: 23
														}, this),
														" ",
														"Switch workspace"
													]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 271,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 270,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 276,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
												onSelect: () => void signOut(),
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, {
													className: "size-4",
													"aria-hidden": true
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 278,
													columnNumber: 21
												}, this), " Sign out"]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 277,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 252,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 241,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 195,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 149,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 148,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "mx-auto w-full max-w-[1220px] px-4 pb-28 pt-6 sm:px-6 lg:pb-14",
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 286,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 147,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				"aria-label": "Primary mobile",
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "grid grid-cols-6",
					children: [patientBottomNav.map((item) => {
						const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.to,
							className: cn("flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium", active ? "text-primary" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
								className: "size-5",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 310,
								columnNumber: 19
							}, this), item.label.split(" ")[0]]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 303,
							columnNumber: 17
						}, this) }, item.to, false, {
							fileName: _jsxFileName$2,
							lineNumber: 302,
							columnNumber: 15
						}, this);
					}), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setMobileNav(true),
						className: "flex w-full flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {
							className: "size-5",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 322,
							columnNumber: 15
						}, this), "More"]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 317,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 316,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 295,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 291,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 124,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/medicine/ProviderStatusBanner.tsx";
function ProviderStatusBanner() {
	const [status, setStatus] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		const provider = getProvider();
		provider.getStatus().then((s) => {
			if (mounted) setStatus({
				...s,
				isLive: provider.isLive
			});
		});
		return () => {
			mounted = false;
		};
	}, []);
	if (!status) return null;
	if (!status.isLive || !status.connected) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "bg-warning/20 border-b border-warning/50 px-4 py-2 text-sm text-warning-foreground flex items-center justify-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerOff, {
				className: "size-4",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 33,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "font-medium",
				children: "Live medicine provider not connected."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "opacity-80",
				children: "Falling back to Demo catalogue."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 32,
		columnNumber: 7
	}, this);
	return null;
}
var _jsxFileName = "/app/applet/src/routes/app.tsx?tsr-split=component";
function PatientLayout() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppRouteGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RequireRole, {
		allow: ["patient", "admin"],
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatientShell, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProviderStatusBanner, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 11
		}, this)] }, void 0, true, {
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
export { PatientLayout as component };
