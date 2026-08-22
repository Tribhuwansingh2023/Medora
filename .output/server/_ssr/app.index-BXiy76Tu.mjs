import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { A as getPharmacies, C as useStore, E as formatMoney, M as isOpenNow, _ as adherenceRate, x as useAuth } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { Dt as FileScan, G as Pill, K as PiggyBank, N as Search, S as Stethoscope, ct as MapPin, f as TriangleAlert, in as CalendarClock, ot as MessageSquareText, pn as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { d as demoPrices, f as Button } from "./router-DnzDjJrL2.mjs";
import { i as DemoBadge, m as StatTile, o as EmptyState, r as ClinicalDisclaimer, t as AvailabilityPill } from "./primitives-Dg_-FqLy.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { t as Progress } from "./progress-732oQzQJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.index-BXiy76Tu.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.index.tsx?tsr-split=component";
var quickActions = [
	{
		to: "/app/search",
		label: "Search a medicine",
		icon: Search
	},
	{
		to: "/app/prescriptions",
		label: "Upload prescription",
		icon: FileScan
	},
	{
		to: "/app/triage",
		label: "Symptom check",
		icon: Stethoscope
	},
	{
		to: "/app/assistant",
		label: "Ask the assistant",
		icon: MessageSquareText
	}
];
var rxStatusLabel = {
	extracted: "Needs review",
	reviewed: "Reviewed by you",
	verified: "Verified by pharmacy",
	rejected: "Rejected"
};
function Dashboard() {
	const { state, logDose } = useStore();
	const { profile, user } = useAuth();
	const firstName = (profile?.full_name ?? user?.user_metadata?.["full_name"] ?? "").toString().trim().split(" ")[0];
	const { data: pharmacies, isLoading } = useQuery({
		queryKey: ["pharmacies"],
		queryFn: getPharmacies
	});
	const activeReminders = state.reminders.filter((r) => r.active);
	const adherence = adherenceRate(state.reminders);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const dueToday = activeReminders.flatMap((r) => r.times.map((t) => ({
		reminder: r,
		time: t,
		state: r.log.find((l) => l.date === today && l.time === t)?.state
	})));
	const savings = state.comparisons.reduce((sum, c) => sum + (c.highest - c.lowest), 0);
	const unreadAlerts = state.notifications.filter((n) => !n.read);
	const safetyAlerts = state.notifications.filter((n) => n.kind === "safety" && !n.read).slice(0, 3);
	const currentMedicines = [...activeReminders.map((r) => ({
		name: `${r.medicineName} ${r.strength}`,
		detail: r.instruction,
		source: r.sourcePrescriptionId ? "From prescription" : "Added by you"
	})), ...state.profile.currentMedicines.filter((m) => !activeReminders.some((r) => `${r.medicineName}`.toLowerCase().includes(m.toLowerCase().split(" ")[0] ?? m))).map((m) => ({
		name: m,
		detail: "No reminder scheduled",
		source: "Health profile"
	}))];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					suppressHydrationWarning: true,
					children: (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
						weekday: "long",
						day: "numeric",
						month: "long"
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-1 text-2xl font-bold sm:text-3xl",
					children: firstName ? `Good day, ${firstName}` : "Good day"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app/history",
							children: "Medicine history"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: quickActions.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: a.to,
					className: "surface group flex items-center gap-3 p-4 transition-shadow hover:shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "grid size-9 place-items-center rounded-md bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(a.icon, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-sm font-semibold text-ink",
							children: a.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
							className: "ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 13
						}, this)
					]
				}, a.to, true, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Active medicines",
						value: String(activeReminders.length),
						hint: "From verified prescriptions",
						icon: Pill
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Adherence (logged)",
						value: adherence == null ? "—" : `${adherence}%`,
						hint: adherence == null ? "No doses logged yet" : "Across all logged doses",
						icon: CalendarClock,
						tone: adherence != null && adherence >= 80 ? "positive" : "default"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Potential savings",
						value: formatMoney(savings),
						hint: "Spread across saved comparisons (demo prices)",
						icon: PiggyBank
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Open alerts",
						value: String(unreadAlerts.length),
						hint: "Reminders, prices and safety notices",
						icon: TriangleAlert,
						tone: unreadAlerts.length ? "attention" : "default"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 lg:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-bold",
								children: "Today's doses"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/app/reminders",
									children: "Manage"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 11
						}, this),
						dueToday.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
							icon: CalendarClock,
							title: "No doses scheduled today",
							description: "Create a reminder from a prescription you have already reviewed.",
							action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/app/reminders",
									children: "Add a reminder"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 189
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 36
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-4 space-y-2",
							children: dueToday.map(({ reminder, time, state: doseState }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex flex-wrap items-center gap-3 rounded-md border border-border bg-secondary/40 px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "numeric w-14 text-sm font-semibold",
										children: time
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "truncate text-sm font-medium text-ink",
											children: [
												reminder.medicineName,
												" ",
												reminder.strength
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "truncate text-xs text-muted-foreground",
											children: reminder.instruction
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 19
									}, this),
									doseState ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
										children: doseState
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 32
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											onClick: () => logDose(reminder.id, time, "taken"),
											children: "Taken"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 146,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => logDose(reminder.id, time, "skipped"),
											children: "Skipped"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 149,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 31
									}, this)
								]
							}, `${reminder.id}-${time}`, true, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 33
						}, this),
						adherence != null && /* @__PURE__ */ (void 0)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "mb-1.5 flex items-center justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (void 0)("span", { children: "Logged adherence" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "numeric",
									children: [adherence, "%"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)(Progress, { value: adherence }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 155,
							columnNumber: 33
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-bold",
							children: "Nearby pharmacies"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app/pharmacies",
								children: "See all"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 space-y-2",
						children: [isLoading && [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (void 0)(Skeleton, { className: "h-16 w-full rounded-md" }, i, false, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 46
						}, this)), pharmacies?.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app/pharmacies/$pharmacyId",
							params: { pharmacyId: p.id },
							className: "flex items-start gap-3 rounded-md border border-border px-4 py-3 transition-colors hover:bg-secondary/50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
								className: "mt-0.5 size-4 text-primary",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-sm font-medium text-ink",
									children: p.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										p.distanceKm,
										" km ·",
										" ",
										isOpenNow(p) ? "Open now" : `Opens ${p.opensAt}`
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 177,
								columnNumber: 17
							}, this)]
						}, p.id, true, {
							fileName: _jsxFileName,
							lineNumber: 173,
							columnNumber: 47
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 7
			}, this),
			safetyAlerts.length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "rounded-lg border border-warning/40 bg-warning-soft p-5",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (void 0)(TriangleAlert, {
							className: "mt-0.5 size-5 shrink-0 text-warning-foreground",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
							className: "text-base font-bold text-ink",
							children: "Safety alerts"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("ul", {
							className: "mt-2 space-y-2",
							children: safetyAlerts.map((n) => /* @__PURE__ */ (void 0)("li", {
								className: "text-sm",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "font-medium text-foreground",
									children: n.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-muted-foreground",
									children: n.body
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 200,
									columnNumber: 23
								}, this)]
							}, n.id, true, {
								fileName: _jsxFileName,
								lineNumber: 198,
								columnNumber: 42
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (void 0)(Link, {
							to: "/app/notifications",
							children: "Review alerts"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 205,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 192,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 191,
				columnNumber: 35
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-bold",
							children: "Current medicines"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 214,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app/interactions",
								children: "Check interactions"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 213,
						columnNumber: 11
					}, this), currentMedicines.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
						icon: Pill,
						title: "No medicines recorded",
						description: "Add what you are taking in settings, or confirm a prescription line to build this list.",
						action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app/settings",
								children: "Update profile"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 220,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 219,
							columnNumber: 208
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 44
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-4 divide-y divide-border",
						children: currentMedicines.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center justify-between gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-sm font-medium text-ink",
									children: m.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: m.detail
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 227,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "shrink-0 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground",
								children: m.source
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 231,
								columnNumber: 19
							}, this)]
						}, m.name, true, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 42
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 221,
						columnNumber: 33
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-base font-bold",
							children: "Prescription status"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 240,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app/prescriptions",
								children: "Open prescriptions"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 242,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 11
					}, this), state.prescriptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
						icon: FileScan,
						title: "Nothing uploaded yet",
						description: "Upload a prescription to see each line extracted with a confidence score.",
						action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/app/prescriptions",
								children: "Upload one"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 246,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 200
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 245,
						columnNumber: 47
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-4 space-y-3",
						children: state.prescriptions.slice(0, 4).map((rx) => {
							const confirmed = rx.items.filter((i) => i.userConfirmed).length;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "rounded-md border border-border px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "truncate text-sm font-medium text-ink",
											children: rx.fileName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 252,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "shrink-0 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
											children: rxStatusLabel[rx.status]
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 255,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 251,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [
											confirmed,
											" of ",
											rx.items.length,
											" lines confirmed ·",
											" ",
											rx.prescriberName
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
										value: rx.items.length ? confirmed / rx.items.length * 100 : 0,
										className: "mt-2 h-1.5"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 263,
										columnNumber: 21
									}, this)
								]
							}, rx.id, true, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 20
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 247,
						columnNumber: 33
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 238,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 211,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-base font-bold",
						children: "Recent comparisons"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 272,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/app/compare",
							children: "Open comparison"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 274,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 273,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 271,
					columnNumber: 9
				}, this), state.comparisons.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
					icon: Search,
					title: "No comparisons yet",
					description: "Search for a medicine and compare equivalent products to see price differences."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 277,
					columnNumber: 43
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: state.comparisons.map((c) => {
						const availability = demoPrices.filter((p) => c.medicineIds.includes(p.medicineId)).some((l) => l.availability === "in_stock") ? "in_stock" : "low_stock";
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "rounded-md border border-border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-medium text-ink",
										children: c.label
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 283,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvailabilityPill, { value: availability }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 284,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 282,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "numeric mt-2 text-sm text-muted-foreground",
									children: [
										formatMoney(c.lowest),
										" – ",
										formatMoney(c.highest),
										" across",
										" ",
										c.medicineIds.length,
										" products"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 286,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										"Saved ",
										new Date(c.createdAt).toLocaleDateString(),
										" · same active ingredient, strength and form"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 290,
									columnNumber: 19
								}, this)
							]
						}, c.id, true, {
							fileName: _jsxFileName,
							lineNumber: 281,
							columnNumber: 18
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 277,
					columnNumber: 195
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 270,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 299,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 10
	}, this);
}
//#endregion
export { Dashboard as component };
