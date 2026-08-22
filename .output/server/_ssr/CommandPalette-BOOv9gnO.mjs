import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as DialogContent, f as DialogDescription, g as DialogTrigger, h as DialogTitle, l as Dialog, m as DialogPortal, p as DialogOverlay, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { C as useStore, l as ROLE_HOME, x as useAuth } from "./router-DnzDjJrL.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Settings, Dt as FileScan, E as ShoppingBag, G as Pill, Lt as Cloud, N as Search, Q as Package, S as Stethoscope, St as Gauge, bt as Handshake, ct as MapPin, dn as BadgeCheck, en as ChartColumn, i as X, in as CalendarClock, k as ShieldAlert, ln as Bell, mt as LayoutDashboard, on as Building2, ot as MessageSquareText, pt as LoaderCircle, s as Users, sn as Boxes, vn as Activity, vt as History, wt as FlaskConical, zt as ClipboardList } from "../_libs/lucide-react.mjs";
import { c as demoMedicines, f as Button, l as demoPharmacies, m as cn } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, n as DialogContent$1, o as DialogTitle$1, r as DialogDescription$1, t as Dialog$1 } from "./dialog-D07PUjjD.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CommandPalette-BOOv9gnO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$4 = "/app/applet/src/components/auth/RequireRole.tsx";
function FullScreen({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5 py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full max-w-md text-center",
			children
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
/**
* Client-side guard for a whole route group. Redirects signed-out visitors to
* /auth (remembering where they were going) and blocks signed-in users who
* don't hold one of the allowed roles.
*/
function RequireRole({ allow, children }) {
	const { loading, isAuthenticated, hasAnyRole, primaryRole } = useAuth();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.href });
	const target = (0, import_react.useRef)(pathname);
	const redirected = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (loading || isAuthenticated || redirected.current) return;
		redirected.current = true;
		const next = target.current.startsWith("/auth") ? "" : target.current;
		navigate({
			to: "/auth",
			search: { next },
			replace: true
		});
	}, [
		loading,
		isAuthenticated,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullScreen, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
		className: "mx-auto size-6 animate-spin text-primary",
		"aria-hidden": true
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 44,
		columnNumber: 9
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "mt-3 text-sm text-muted-foreground",
		children: "Checking your session…"
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 48,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 43,
		columnNumber: 7
	}, this);
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullScreen, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Redirecting you to sign in…"
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 58,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 57,
		columnNumber: 7
	}, this);
	if (!hasAnyRole(allow)) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FullScreen, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "mx-auto grid size-11 place-items-center rounded-md bg-destructive/10 text-destructive",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, {
				className: "size-5",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 69,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 68,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "mt-4 text-xl font-semibold",
			children: "This workspace needs a different role"
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 71,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: [
				"Your account is signed in as",
				" ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-medium text-foreground",
					children: primaryRole ?? "no role assigned"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 76,
					columnNumber: 11
				}, this),
				". Professional workspaces are granted after licence verification by a Medora administrator."
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 74,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-6 flex flex-wrap justify-center gap-2",
			children: [primaryRole ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: ROLE_HOME[primaryRole],
					children: "Go to my workspace"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 85,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 84,
				columnNumber: 13
			}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					children: "Back home"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 91,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 90,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 82,
			columnNumber: 9
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 67,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 98,
		columnNumber: 10
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/ui/scroll-area.tsx";
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 15,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollBar, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 18,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Corner, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 19,
			columnNumber: 5
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$3,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 41,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 28,
	columnNumber: 3
}, void 0));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var _jsxFileName$2 = "/app/applet/src/components/ui/sheet.tsx";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 22,
	columnNumber: 3
}, void 0));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 62,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 69,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 70,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 68,
		columnNumber: 7
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 63,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 82,
	columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 96,
	columnNumber: 3
}, void 0);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 110,
	columnNumber: 3
}, void 0));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 122,
	columnNumber: 3
}, void 0));
SheetDescription.displayName = DialogDescription.displayName;
var _jsxFileName$1 = "/app/applet/src/components/ui/command.tsx";
var Command$1 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
Command$1.displayName = _e.displayName;
var CommandDialog = ({ children, title, description, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog$1, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
			className: "overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, { children: title ?? "Command palette" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 47,
					columnNumber: 11
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, { children: description ?? "Search and jump to anything" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 48,
					columnNumber: 11
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 46,
				columnNumber: 9
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Command$1, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 52,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 45,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 44,
		columnNumber: 5
	}, void 0);
};
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 65,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 66,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 64,
	columnNumber: 3
}, void 0));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 83,
	columnNumber: 3
}, void 0));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 96,
	columnNumber: 3
}, void 0));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 109,
	columnNumber: 3
}, void 0));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 125,
	columnNumber: 3
}, void 0));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 137,
	columnNumber: 3
}, void 0));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 154,
		columnNumber: 5
	}, void 0);
};
CommandShortcut.displayName = "CommandShortcut";
var patientNav = [
	{
		to: "/app",
		label: "Dashboard",
		icon: LayoutDashboard,
		group: "Care",
		description: "Your medicine command centre"
	},
	{
		to: "/app/search",
		label: "Find medicine",
		icon: Search,
		group: "Care",
		description: "Search by brand, generic or ingredient"
	},
	{
		to: "/app/compare",
		label: "Compare prices",
		icon: ChartColumn,
		group: "Care",
		description: "Side-by-side equivalent products"
	},
	{
		to: "/app/pharmacies",
		label: "Pharmacies",
		icon: MapPin,
		group: "Care",
		description: "Nearby pharmacies and availability"
	},
	{
		to: "/app/prescriptions",
		label: "Prescriptions",
		icon: FileScan,
		group: "Documents",
		description: "Upload and review extractions"
	},
	{
		to: "/app/labs",
		label: "Lab reports",
		icon: FlaskConical,
		group: "Documents",
		description: "Understand test names and ranges"
	},
	{
		to: "/app/verify",
		label: "Pack verification",
		icon: BadgeCheck,
		group: "Documents",
		description: "Scan a pack barcode or QR"
	},
	{
		to: "/app/assistant",
		label: "Medicine assistant",
		icon: MessageSquareText,
		group: "Guidance",
		description: "Ask about a medicine"
	},
	{
		to: "/app/triage",
		label: "Symptom check",
		icon: Stethoscope,
		group: "Guidance",
		description: "Where to go, not what you have"
	},
	{
		to: "/app/interactions",
		label: "Interaction check",
		icon: ShieldAlert,
		group: "Guidance",
		description: "Medicines and allergies review"
	},
	{
		to: "/app/reminders",
		label: "Reminders",
		icon: CalendarClock,
		group: "Routine",
		description: "Doses, adherence and snoozes"
	},
	{
		to: "/app/orders",
		label: "Orders",
		icon: ShoppingBag,
		group: "Routine",
		description: "Reservations and order status"
	},
	{
		to: "/app/history",
		label: "History",
		icon: History,
		group: "Routine",
		description: "Medicines, documents, comparisons"
	},
	{
		to: "/app/workspace",
		label: "Google Workspace",
		icon: Cloud,
		group: "Integrations",
		description: "Gmail, Calendar & Drive sync"
	},
	{
		to: "/app/notifications",
		label: "Notifications",
		icon: Bell,
		group: "Account",
		description: "Alerts and activity"
	},
	{
		to: "/app/settings",
		label: "Settings",
		icon: Settings,
		group: "Account",
		description: "Profile, privacy and security"
	}
];
var patientBottomNav = patientNav.filter((n) => [
	"/app",
	"/app/search",
	"/app/assistant",
	"/app/reminders"
].includes(n.to));
var pharmacyNav = [
	{
		to: "/pharmacy",
		label: "Overview",
		icon: Gauge,
		group: "Workspace"
	},
	{
		to: "/pharmacy/inventory",
		label: "Inventory",
		icon: Boxes,
		group: "Workspace"
	},
	{
		to: "/pharmacy/prescriptions",
		label: "Verification queue",
		icon: ClipboardList,
		group: "Workspace"
	},
	{
		to: "/pharmacy/orders",
		label: "Orders",
		icon: Package,
		group: "Workspace"
	},
	{
		to: "/pharmacy/customers",
		label: "Customers",
		icon: Users,
		group: "Relations"
	},
	{
		to: "/pharmacy/suppliers",
		label: "Suppliers",
		icon: Handshake,
		group: "Relations"
	},
	{
		to: "/pharmacy/analytics",
		label: "Analytics",
		icon: ChartColumn,
		group: "Relations"
	}
];
var doctorNav = [
	{
		to: "/doctor",
		label: "Patients",
		icon: Users,
		group: "Clinic"
	},
	{
		to: "/doctor/prescriptions",
		label: "Prescription review",
		icon: Pill,
		group: "Clinic"
	},
	{
		to: "/doctor/schedule",
		label: "Schedule",
		icon: CalendarClock,
		group: "Clinic"
	}
];
var adminNav = [
	{
		to: "/admin",
		label: "Platform metrics",
		icon: Activity,
		group: "Operations"
	},
	{
		to: "/admin/users",
		label: "Users",
		icon: Users,
		group: "Operations"
	},
	{
		to: "/admin/pharmacies",
		label: "Pharmacies & doctors",
		icon: Building2,
		group: "Operations"
	},
	{
		to: "/admin/catalog",
		label: "Catalogue metadata",
		icon: Pill,
		group: "Governance"
	},
	{
		to: "/admin/moderation",
		label: "Moderation",
		icon: ShieldAlert,
		group: "Governance"
	},
	{
		to: "/admin/audit",
		label: "Audit log",
		icon: ClipboardList,
		group: "Governance"
	}
];
var _jsxFileName = "/app/applet/src/components/layout/CommandPalette.tsx";
function useCommandPalette() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return {
		open,
		setOpen
	};
}
function CommandPalette({ open, onOpenChange }) {
	const navigate = useNavigate();
	const { state } = useStore();
	const go = (to) => {
		onOpenChange(false);
		navigate({ to });
	};
	const nav = state.role === "pharmacy" ? pharmacyNav : state.role === "doctor" ? doctorNav : state.role === "admin" ? adminNav : patientNav;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandDialog, {
		open,
		onOpenChange,
		title: "Medora command palette",
		description: "Search medicines, pharmacies, prescriptions, reminders and settings",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandInput, { placeholder: "Search medicines, pharmacies, pages…" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandList, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandEmpty, { children: "Nothing matched. Try a brand name, an ingredient or a page." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandGroup, {
				heading: "Go to",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandItem, {
					value: `page ${item.label}`,
					onSelect: () => go(item.to),
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
							className: "size-4",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 15
						}, this),
						item.label,
						item.to === "/app" && /* @__PURE__ */ (void 0)(CommandShortcut, { children: "⌘K" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 38
						}, this)
					]
				}, item.to, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandSeparator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandGroup, {
				heading: "Medicines (demo catalogue)",
				children: demoMedicines.slice(0, 8).map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandItem, {
					value: `medicine ${m.brandName} ${m.genericName}`,
					onSelect: () => go(`/app/medicine/${m.id}`),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-medium",
						children: m.brandName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted-foreground",
						children: [
							m.genericName,
							" · ",
							m.activeIngredients[0]?.strength,
							" · ",
							m.form
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 15
					}, this)]
				}, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandSeparator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandGroup, {
				heading: "Pharmacies (demo directory)",
				children: demoPharmacies.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandItem, {
					value: `pharmacy ${p.name}`,
					onSelect: () => go(`/app/pharmacies/${p.id}`),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-medium",
						children: p.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted-foreground",
						children: [p.distanceKm, " km"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 15
					}, this)]
				}, p.id, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandSeparator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandGroup, {
				heading: "Your records",
				children: [state.prescriptions.slice(0, 4).map((rx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandItem, {
					value: `prescription ${rx.fileName} ${rx.prescriberName}`,
					onSelect: () => go("/app/prescriptions"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-medium",
						children: rx.fileName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted-foreground",
						children: rx.status
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 15
					}, this)]
				}, rx.id, true, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 13
				}, this)), state.reminders.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommandItem, {
					value: `reminder ${r.medicineName}`,
					onSelect: () => go("/app/reminders"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-medium",
						children: r.medicineName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-muted-foreground",
						children: r.times.join(", ")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 15
					}, this)]
				}, r.id, true, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 13
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 5
	}, this);
}
//#endregion
export { SheetContent as a, SheetTrigger as c, patientBottomNav as d, patientNav as f, Sheet as i, adminNav as l, useCommandPalette as m, RequireRole as n, SheetHeader as o, pharmacyNav as p, ScrollArea as r, SheetTitle as s, CommandPalette as t, doctorNav as u };
