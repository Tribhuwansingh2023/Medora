import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as ShieldCheck, W as PlugZap, _t as Info, f as TriangleAlert, wt as FlaskConical } from "../_libs/lucide-react.mjs";
import { f as Button, m as cn, n as integrations } from "./router-DnzDjJrL2.mjs";
import { n as Root2, r as Trigger, t as Content2 } from "../_libs/radix-ui__react-hover-card.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-Dg_-FqLy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/ui/badge.tsx";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ui/hover-card.tsx";
var HoverCard = Root2;
var HoverCardTrigger = Trigger;
var HoverCardContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 14,
	columnNumber: 3
}, void 0));
HoverCardContent.displayName = Content2.displayName;
var _jsxFileName = "/app/applet/src/components/common/primitives.tsx";
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			"aria-hidden": true,
			className: "grid size-7 place-items-center rounded-[7px] bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				viewBox: "0 0 24 24",
				className: "size-4",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					d: "M3 13h3.2l2-4.5 3 9 2.4-6 1.7 3.5H21",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 7
		}, this), !compact && /* @__PURE__ */ (void 0)("span", {
			className: "font-display text-[1.06rem] font-extrabold tracking-tight text-ink",
			children: "Medora"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
function DemoBadge({ label = "Demo data", className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoverCard, {
		openDelay: 120,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoverCardTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: cn("inline-flex items-center gap-1.5 rounded-full border border-warning/40 bg-warning-soft px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-warning-foreground", className),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlaskConical, {
					className: "size-3",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 11
				}, this), label]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoverCardContent, {
			className: "w-80 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: "Sample records, not live data"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 text-muted-foreground",
				children: "No licensed catalogue, price feed or pharmacy inventory provider is connected in this environment. Everything shown here comes from Medora's demo provider so the flow can be reviewed end to end. Prices, stock and availability are not real."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 66,
		columnNumber: 5
	}, this);
}
function ProvenanceLine({ provenance }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "inline-flex items-center gap-1 font-medium text-foreground/80",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, {
					className: "size-3.5",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 9
				}, this), " Source"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: provenance.source }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				"aria-hidden": true,
				children: "·"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["updated ", provenance.updatedAt] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				"aria-hidden": true,
				children: "·"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: provenance.verified ? "text-success" : "text-warning-foreground",
				children: provenance.verified ? "verified provider" : "unverified demo provider"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			provenance.note && /* @__PURE__ */ (void 0)("span", {
				className: "w-full text-muted-foreground/80",
				children: provenance.note
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 94,
		columnNumber: 5
	}, this);
}
function SafetyNotice({ tone = "info", title, children, className }) {
	const Icon = tone === "emergency" ? TriangleAlert : tone === "warning" ? TriangleAlert : ShieldCheck;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: tone === "emergency" ? "alert" : "note",
		className: cn("flex gap-3 rounded-lg border p-4 text-sm", tone === "emergency" && "border-destructive/40 bg-destructive-soft", tone === "warning" && "border-warning/40 bg-warning-soft", tone === "info" && "border-border bg-secondary", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
			"aria-hidden": true,
			className: cn("mt-0.5 size-4 shrink-0", tone === "emergency" ? "text-destructive" : tone === "warning" ? "text-warning" : "text-primary")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-semibold text-ink",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 158,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-muted-foreground [&_a]:underline",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 157,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 136,
		columnNumber: 5
	}, this);
}
function ClinicalDisclaimer({ className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
		title: "Informational only — not medical advice",
		className,
		children: "Medora helps you understand medicines and find them nearby. It does not diagnose conditions, prescribe, or change a dose. Always confirm with a pharmacist or doctor, and use emergency services for anything urgent."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 167,
		columnNumber: 5
	}, this);
}
function IntegrationNotConnected({ integration, action, className }) {
	const meta = integrations[integration];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex flex-col items-start gap-3 rounded-lg border border-dashed border-border-strong bg-secondary/60 p-5 text-sm sm:flex-row sm:items-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "grid size-9 shrink-0 place-items-center rounded-md border border-border bg-card text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlugZap, {
					className: "size-4",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 196,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-semibold text-ink",
					children: [meta.label, " is not connected"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground",
					children: [meta.liveDescription, " Until it is connected, Medora shows clearly labelled demo behaviour instead of inventing results."]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 7
			}, this),
			action
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 189,
		columnNumber: 5
	}, this);
}
function SectionHeading({ eyebrow, title, description, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex flex-wrap items-end justify-between gap-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-2xl",
			children: [
				eyebrow && /* @__PURE__ */ (void 0)("p", {
					className: "mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary",
					children: eyebrow
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-balance text-2xl font-bold sm:text-[1.75rem]",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 236,
					columnNumber: 9
				}, this),
				description && /* @__PURE__ */ (void 0)("p", {
					className: "mt-2 text-muted-foreground",
					children: description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 240,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 230,
			columnNumber: 7
		}, this), action]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 224,
		columnNumber: 5
	}, this);
}
function PageHeader({ title, description, demo, actions }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-bold tracking-tight",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 263,
					columnNumber: 11
				}, this), demo && /* @__PURE__ */ (void 0)(DemoBadge, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 264,
					columnNumber: 20
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 9
			}, this), description && /* @__PURE__ */ (void 0)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 267,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 261,
			columnNumber: 7
		}, this), actions && /* @__PURE__ */ (void 0)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: actions
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 271,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 260,
		columnNumber: 5
	}, this);
}
function StatTile({ label, value, hint, icon: Icon, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 293,
					columnNumber: 9
				}, this), Icon && /* @__PURE__ */ (void 0)(Icon, {
					className: "size-4 text-muted-foreground",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 296,
					columnNumber: 18
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 292,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: cn("numeric mt-2 font-display text-2xl font-bold", tone === "positive" && "text-success", tone === "attention" && "text-warning-foreground"),
				children: value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 298,
				columnNumber: 7
			}, this),
			hint && /* @__PURE__ */ (void 0)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 307,
				columnNumber: 16
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 291,
		columnNumber: 5
	}, this);
}
function EmptyState({ icon: Icon, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col items-center justify-center rounded-lg border border-dashed border-border-strong bg-card/50 px-6 py-14 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "grid size-11 place-items-center rounded-full bg-secondary text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					className: "size-5",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 326,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 325,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 font-semibold text-ink",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 328,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 max-w-md text-sm text-muted-foreground",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 329,
				columnNumber: 7
			}, this),
			action && /* @__PURE__ */ (void 0)("div", {
				className: "mt-5",
				children: action
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 332,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 324,
		columnNumber: 5
	}, this);
}
function AvailabilityPill({ value }) {
	const item = {
		in_stock: {
			label: "In stock",
			cls: "border-success/35 bg-success-soft text-success"
		},
		low_stock: {
			label: "Low stock",
			cls: "border-warning/40 bg-warning-soft text-warning-foreground"
		},
		out_of_stock: {
			label: "Out of stock",
			cls: "border-border bg-secondary text-muted-foreground"
		}
	}[value];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex rounded-full border px-2 py-0.5 text-xs font-medium", item.cls),
		children: item.label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 358,
		columnNumber: 5
	}, this);
}
function RxPill({ prescriptionOnly }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
		variant: prescriptionOnly ? "outline" : "secondary",
		className: "font-medium",
		children: prescriptionOnly ? "Prescription-only" : "Over the counter"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 371,
		columnNumber: 5
	}, this);
}
function EmergencyCallout({ className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "alert",
		className: cn("flex flex-wrap items-center justify-between gap-4 rounded-lg border border-destructive/45 bg-destructive-soft p-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
				className: "mt-0.5 size-4 shrink-0 text-destructive",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 390,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-semibold text-ink",
					children: "If this is an emergency, stop here"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 395,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground",
					children: "Call your local emergency number or go to the nearest emergency department. Medora cannot assess emergencies."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 398,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 394,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 389,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			variant: "destructive",
			size: "sm",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/emergency",
				children: "Emergency guidance"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 405,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 404,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 382,
		columnNumber: 5
	}, this);
}
//#endregion
export { EmergencyCallout as a, Logo as c, RxPill as d, SafetyNotice as f, DemoBadge as i, PageHeader as l, StatTile as m, Badge as n, EmptyState as o, SectionHeading as p, ClinicalDisclaimer as r, IntegrationNotConnected as s, AvailabilityPill as t, ProvenanceLine as u };
