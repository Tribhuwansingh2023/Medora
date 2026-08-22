import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { l as ROLE_HOME, x as useAuth } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Dt as FileScan, N as Search, O as ShieldCheck, S as Stethoscope, ct as MapPin, dn as BadgeCheck, mn as ArrowRight, ot as MessageSquareText } from "../_libs/lucide-react.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { c as Logo, i as DemoBadge, r as ClinicalDisclaimer } from "./primitives-Dg_-FqLy.mjs";
import { t as useSignOut } from "./use-sign-out-CJjJ3TG8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-598DPREl.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/auth/AuthHeaderAction.tsx";
/** Session-aware sign-in / workspace control for public pages. */
function AuthHeaderAction({ size = "sm" }) {
	const { loading, isAuthenticated, primaryRole } = useAuth();
	const signOut = useSignOut();
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		size,
		variant: "outline",
		disabled: true,
		children: "Loading…"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 7
	}, this);
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		asChild: true,
		size,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/auth",
			search: { next: "" },
			children: "Sign in"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 27,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 26,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			size,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: ROLE_HOME[primaryRole ?? "patient"],
				children: "Open workspace"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 36,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			size,
			variant: "ghost",
			onClick: () => void signOut(),
			children: "Sign out"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 41,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var pathways = [
	{
		to: "/app/search",
		eyebrow: "01 — Look it up",
		title: "Medicine search",
		body: "Brand name, generic name or active ingredient. Every record shows composition, warnings and where the information came from.",
		icon: Search
	},
	{
		to: "/app/prescriptions",
		eyebrow: "02 — Read the paper",
		title: "Prescription upload",
		body: "Each extracted line arrives with a confidence score you can correct. Nothing is used until you confirm it.",
		icon: FileScan
	},
	{
		to: "/app/pharmacies",
		eyebrow: "03 — Find it nearby",
		title: "Pharmacy discovery",
		body: "Licensed dispensaries with opening hours, services, stock signals and a licence identifier you can check.",
		icon: MapPin
	},
	{
		to: "/app/assistant",
		eyebrow: "04 — Ask a question",
		title: "Medicine assistant",
		body: "Plain-language explanations with the source attached. It will not diagnose you and it will not prescribe.",
		icon: MessageSquareText
	}
];
var principles = [
	{
		icon: ShieldCheck,
		title: "Gaps are labelled, not filled",
		body: "Where a provider is not connected, Medora says so instead of inventing a plausible answer."
	},
	{
		icon: BadgeCheck,
		title: "Composition is not quality",
		body: "Two products can share an active ingredient, strength and form and still differ. Medora never implies otherwise."
	},
	{
		icon: Stethoscope,
		title: "Routing, never diagnosis",
		body: "Triage tells you where to go and when. Red flags escalate to emergency guidance immediately."
	}
];
var quickStats = [
	{
		label: "Medicines tracked",
		value: "3.2k+"
	},
	{
		label: "Nearby pharmacy checks",
		value: "24/7"
	},
	{
		label: "Sources shown",
		value: "100%"
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthHeaderAction, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "hero-wash border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.24em] text-primary",
									children: "Medicine intelligence"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "mt-5 max-w-[16ch] font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]",
									children: [
										"Understand your medicine.",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block text-primary",
											children: "Compare verified options."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 84,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "block",
											children: "Find care nearby."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 87,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground",
									children: "One calm workspace for the questions that come after a prescription: what is this, what does it cost elsewhere, where can I get it today, and when should I stop reading and see someone."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-9 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/auth",
											search: { next: "/app" },
											children: [
												"Open the patient app",
												" ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
													className: "size-4",
													"aria-hidden": true
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 101,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 97,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 96,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/switch",
											children: "Professional workspaces"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 105,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-8 grid max-w-xl grid-cols-3 gap-3",
									children: quickStats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-xl border border-border bg-card/80 p-3 shadow-soft",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-2xl font-bold tracking-tight text-ink",
											children: stat.value
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 111,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
											children: stat.label
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 114,
											columnNumber: 23
										}, this)]
									}, stat.label, true, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 43
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-6 text-sm text-muted-foreground",
									children: [
										"Chest pain, breathlessness or severe bleeding?",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
											to: "/emergency",
											className: "font-semibold text-destructive underline",
											children: "Read the emergency guidance first"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 122,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 17
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-[28px] border border-border bg-card/90 p-4 shadow-lift backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-[22px] border border-border bg-secondary/40 p-4 sm:p-5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Pharmacy price signal" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 131,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success",
											children: "Live demo"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 132,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
										className: "mt-4 grid grid-cols-2 gap-3",
										children: [
											{
												k: "Composition-matched",
												v: "Equivalence"
											},
											{
												k: "Per unit, not per pack",
												v: "Pricing"
											},
											{
												k: "Licence shown",
												v: "Pharmacies"
											},
											{
												k: "Source on every claim",
												v: "Provenance"
											}
										].map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "rounded-xl border border-border bg-card p-4",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
												className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-primary",
												children: s.v
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 151,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
												className: "mt-2 font-display text-base font-bold leading-snug text-ink",
												children: s.k
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 154,
												columnNumber: 25
											}, this)]
										}, s.v, true, {
											fileName: _jsxFileName,
											lineNumber: 150,
											columnNumber: 31
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-2xl font-bold tracking-tight sm:text-3xl",
							children: "Four ways in"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "max-w-md text-sm text-muted-foreground",
							children: "Every path below is live in the demo environment and runs on clearly labelled sample data."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 167,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2",
						children: pathways.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: p.to,
							className: "group flex flex-col bg-card p-7 transition-colors hover:bg-secondary/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "grid size-10 shrink-0 place-items-center rounded-md bg-primary-soft text-primary",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(p.icon, {
											className: "size-5",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 180,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",
										children: p.eyebrow
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "mt-5 font-display text-xl font-bold text-ink",
									children: p.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 187,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.body
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 190,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary",
									children: ["Open", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
										className: "size-4 transition-transform group-hover:translate-x-1",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 195,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 193,
									columnNumber: 17
								}, this)
							]
						}, p.to, true, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 32
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "border-y border-border bg-secondary/40",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl",
							children: "Built to be trusted with the boring, important details"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10 grid gap-10 sm:grid-cols-3",
							children: principles.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(p.icon, {
									className: "size-5 text-primary",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "mt-4 text-base font-bold text-ink",
									children: p.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 210,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.body
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 19
								}, this)
							] }, p.title, true, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 36
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 202,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mx-auto max-w-6xl px-5 py-16 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 222,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { compact: true }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "max-w-lg",
						children: "Demo environment. Catalogue, pricing, OCR and clinical adapters are sample providers — nothing here is live healthcare information."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 227,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 226,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 10
	}, this);
}
//#endregion
export { Landing as component };
