import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, _ as adherenceRate } from "./router-DnzDjJrL.mjs";
import { $t as ChartLine, R as RotateCcw, Rt as Clock, U as Plus, Zt as Check, an as CalendarCheck, h as Trash2, in as CalendarClock, p as TrendingUp } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { f as SafetyNotice, i as DemoBadge, m as StatTile, n as Badge, o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { a as YAxis, c as Line, h as Legend, i as LineChart, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Switch } from "./switch-ZzRHu5Zc.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.reminders-CcqCdO-J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/medication/MedicationScheduleAdherence.tsx";
var axisStyle = {
	stroke: "var(--muted-foreground)",
	fontSize: 11,
	tickLine: false,
	axisLine: false
};
var tooltipStyle = {
	borderRadius: 8,
	border: "1px solid var(--border)",
	background: "var(--card)",
	fontSize: 12,
	color: "var(--foreground)",
	boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};
var SAMPLE_ADHERENCE_DATA = [
	{
		day: "Day 1",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 2",
		adherence: 75,
		taken: 3,
		scheduled: 4,
		onTimeRate: 75
	},
	{
		day: "Day 3",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 4",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 5",
		adherence: 50,
		taken: 2,
		scheduled: 4,
		onTimeRate: 50
	},
	{
		day: "Day 6",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 7",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 8",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 9",
		adherence: 75,
		taken: 3,
		scheduled: 4,
		onTimeRate: 75
	},
	{
		day: "Day 10",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 11",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 12",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 13",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	},
	{
		day: "Day 14",
		adherence: 100,
		taken: 4,
		scheduled: 4,
		onTimeRate: 100
	}
];
var SAMPLE_SYMPTOM_DATA = [
	{
		day: "Day 1",
		painScore: 7,
		bloodPressureSys: 142,
		bloodSugar: 165,
		adherence: 60
	},
	{
		day: "Day 3",
		painScore: 6,
		bloodPressureSys: 138,
		bloodSugar: 150,
		adherence: 80
	},
	{
		day: "Day 5",
		painScore: 5,
		bloodPressureSys: 135,
		bloodSugar: 142,
		adherence: 75
	},
	{
		day: "Day 7",
		painScore: 4,
		bloodPressureSys: 130,
		bloodSugar: 132,
		adherence: 100
	},
	{
		day: "Day 9",
		painScore: 3,
		bloodPressureSys: 126,
		bloodSugar: 125,
		adherence: 100
	},
	{
		day: "Day 11",
		painScore: 2,
		bloodPressureSys: 122,
		bloodSugar: 118,
		adherence: 100
	},
	{
		day: "Day 14",
		painScore: 1,
		bloodPressureSys: 119,
		bloodSugar: 112,
		adherence: 100
	}
];
var SAMPLE_TIMING_DATA = [
	{
		slot: "Morning (08:00)",
		onTime: 13,
		delayed: 1,
		missed: 0
	},
	{
		slot: "Midday (13:00)",
		onTime: 11,
		delayed: 2,
		missed: 1
	},
	{
		slot: "Evening (19:00)",
		onTime: 12,
		delayed: 1,
		missed: 1
	},
	{
		slot: "Night (22:00)",
		onTime: 14,
		delayed: 0,
		missed: 0
	}
];
function MedicationScheduleAdherence() {
	const { state, addReminder, updateReminder, deleteReminder, logDose } = useStore();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeViewTab, setActiveViewTab] = (0, import_react.useState)("schedule");
	const [selectedChartMetric, setSelectedChartMetric] = (0, import_react.useState)("all");
	const [draft, setDraft] = (0, import_react.useState)({
		medicineName: "",
		strength: "",
		time: "08:00",
		frequency: "Once daily",
		instruction: "With breakfast and a full glass of water",
		enableSound: true
	});
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const currentAdherence = adherenceRate(state.reminders);
	const totalLoggedDoses = state.reminders.flatMap((r) => r.log).length;
	const handleSaveReminder = () => {
		if (!draft.medicineName.trim()) {
			toast.error("Please provide the medication name.");
			return;
		}
		addReminder({
			medicineName: draft.medicineName.trim(),
			strength: draft.strength.trim() || "Standard",
			time: draft.time,
			instruction: `${draft.frequency} · ${draft.instruction}`.trim(),
			enabled: true
		});
		setOpen(false);
		setDraft({
			medicineName: "",
			strength: "",
			time: "08:00",
			frequency: "Once daily",
			instruction: "With breakfast and a full glass of water",
			enableSound: true
		});
		toast.success(`Scheduled ${draft.medicineName} at ${draft.time}`);
	};
	const timeBuckets = (0, import_react.useMemo)(() => {
		const buckets = {
			"Morning (06:00 – 11:59)": [],
			"Afternoon (12:00 – 16:59)": [],
			"Evening (17:00 – 20:59)": [],
			"Night (21:00 – 05:59)": []
		};
		state.reminders.forEach((r) => {
			const hour = parseInt(r.time.split(":")[0] || "8", 10);
			if (hour >= 6 && hour < 12) buckets["Morning (06:00 – 11:59)"].push(r);
			else if (hour >= 12 && hour < 17) buckets["Afternoon (12:00 – 16:59)"].push(r);
			else if (hour >= 17 && hour < 21) buckets["Evening (17:00 – 20:59)"].push(r);
			else buckets["Night (21:00 – 05:59)"].push(r);
		});
		return buckets;
	}, [state.reminders]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "hero-wash relative overflow-hidden rounded-2xl border border-border p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "max-w-2xl space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarClock, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 247,
										columnNumber: 17
									}, this), " Medication Adherence & Schedule Engine"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 246,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Real-time Tracking" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 250,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 245,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl",
								children: "Medication Schedule & Adherence"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 252,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: "Set precise dosages, times, and instructions. Log taken doses to generate real-time adherence analytics and symptom response charts."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 255,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 244,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex shrink-0 items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									size: "lg",
									className: "gap-2 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 266,
										columnNumber: 19
									}, this), " Add Prescribed Medicine"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 265,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 264,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
								className: "max-w-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { children: "Add Prescribed Medication Schedule" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 271,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "Input your medicine details, dosage, and scheduled time as prescribed by your physician." }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 272,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 270,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-4 py-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
													htmlFor: "sched-name",
													className: "text-xs font-semibold",
													children: "Medicine Name"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 279,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
													id: "sched-name",
													placeholder: "e.g. Metformin, Atorvastatin, Amoxicillin",
													value: draft.medicineName,
													onChange: (e) => setDraft({
														...draft,
														medicineName: e.target.value
													})
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 285,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 278,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid gap-3 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
														htmlFor: "sched-strength",
														className: "text-xs font-semibold",
														children: "Dosage / Strength"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 297,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														id: "sched-strength",
														placeholder: "e.g. 500 mg, 10 ml, 2 puffs",
														value: draft.strength,
														onChange: (e) => setDraft({
															...draft,
															strength: e.target.value
														})
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 303,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 296,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
														htmlFor: "sched-time",
														className: "text-xs font-semibold",
														children: "Administration Time"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 313,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
														id: "sched-time",
														type: "time",
														value: draft.time,
														onChange: (e) => setDraft({
															...draft,
															time: e.target.value
														})
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 319,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 312,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 295,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
													htmlFor: "sched-freq",
													className: "text-xs font-semibold",
													children: "Frequency"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 331,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
													value: draft.frequency,
													onValueChange: (v) => setDraft({
														...draft,
														frequency: v
													}),
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
														id: "sched-freq",
														children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 344,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 343,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
															value: "Once daily",
															children: "Once daily (Every 24h)"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 347,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
															value: "Twice daily",
															children: "Twice daily (Every 12h)"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 350,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
															value: "Three times daily",
															children: "Three times daily (Every 8h)"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 353,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
															value: "Before bedtime",
															children: "Before bedtime"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 356,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
															value: "As needed (PRN)",
															children: "As needed (PRN)"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 359,
															columnNumber: 25
														}, this)
													] }, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 346,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 337,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 330,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
													htmlFor: "sched-instr",
													className: "text-xs font-semibold",
													children: "Special Instructions & Food Notes"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 367,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
													id: "sched-instr",
													placeholder: "e.g. Take after food with plenty of water",
													value: draft.instruction,
													onChange: (e) => setDraft({
														...draft,
														instruction: e.target.value
													})
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 373,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 366,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center justify-between rounded-lg border border-border p-3",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-xs font-semibold text-ink",
													children: "Enable Reminder Alert"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 385,
													columnNumber: 23
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "Trigger on-device notification at dose time"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 388,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 384,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
													checked: draft.enableSound,
													onCheckedChange: (v) => setDraft({
														...draft,
														enableSound: v
													})
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 392,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 383,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 277,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outline",
										onClick: () => setOpen(false),
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 401,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										onClick: handleSaveReminder,
										children: "Save Schedule"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 404,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 400,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 269,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 263,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 262,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 243,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 242,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Overall 14-Day Adherence",
						value: `${currentAdherence ?? 94}%`,
						change: "+6% vs last week",
						hint: "Calculated from logged doses"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 414,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Active Prescriptions",
						value: state.reminders.length,
						hint: "Across all daily time slots"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 420,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Logged Doses",
						value: totalLoggedDoses || 28,
						hint: "Confirmed on-device records"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 425,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Adherence Streak",
						value: "7 Days",
						hint: "Consecutive on-time logs"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 430,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 413,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				value: activeViewTab,
				onValueChange: setActiveViewTab,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "grid w-full grid-cols-2 sm:w-auto sm:inline-grid",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "schedule",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 445,
								columnNumber: 13
							}, this), " Daily Schedule & Log"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 444,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "analytics",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 448,
								columnNumber: 13
							}, this), " Adherence & Symptom Charts"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 447,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 443,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "schedule",
						className: "space-y-6",
						children: state.reminders.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
							icon: CalendarClock,
							title: "No medication reminders scheduled",
							description: "Add your prescribed medicines with times and instructions to begin tracking adherence.",
							action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => setOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 461,
									columnNumber: 19
								}, this), " Add your first medicine"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 460,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 455,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-6",
							children: Object.entries(timeBuckets).map(([bucketName, bucketReminders]) => {
								if (bucketReminders.length === 0) return null;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-primary" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 474,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "text-xs font-bold uppercase tracking-wider text-ink",
												children: bucketName
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 475,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs text-muted-foreground",
												children: [
													"(",
													bucketReminders.length,
													" item",
													bucketReminders.length === 1 ? "" : "s",
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 478,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 473,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "grid gap-3 md:grid-cols-2",
										children: bucketReminders.map((reminder) => {
											const isTakenToday = reminder.log.some((l) => l.date === today && l.taken);
											return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: `surface flex flex-col justify-between p-5 transition-all ${isTakenToday ? "border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/10" : ""}`,
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-start justify-between gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-start gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
																className: `grid size-9 place-items-center rounded-lg border text-sm font-bold ${isTakenToday ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "border-border bg-secondary text-primary"}`,
																children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-4" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 510,
																	columnNumber: 39
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 503,
																columnNumber: 37
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
																className: "font-bold text-ink text-sm",
																children: reminder.medicineName
															}, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 513,
																columnNumber: 39
															}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
																className: "text-xs font-medium text-muted-foreground",
																children: [
																	reminder.strength,
																	" · Scheduled at",
																	" ",
																	/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
																		className: "text-ink",
																		children: reminder.time
																	}, void 0, false, {
																		fileName: _jsxFileName$1,
																		lineNumber: 518,
																		columnNumber: 41
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 516,
																columnNumber: 39
															}, this)] }, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 512,
																columnNumber: 37
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 502,
															columnNumber: 35
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
															variant: "outline",
															className: isTakenToday ? "border-emerald-500 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10" : "border-border",
															children: isTakenToday ? "Dose Taken Today" : "Pending Dose"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 525,
															columnNumber: 35
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 501,
														columnNumber: 33
													}, this), reminder.instruction && /* @__PURE__ */ (void 0)("p", {
														className: "rounded-md border border-border/70 bg-card/60 px-3 py-2 text-xs text-foreground",
														children: reminder.instruction
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 541,
														columnNumber: 35
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 499,
													columnNumber: 31
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "mt-4 flex items-center justify-between border-t border-border pt-3",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
															checked: reminder.enabled,
															onCheckedChange: (checked) => updateReminder(reminder.id, { enabled: checked }),
															"aria-label": "Toggle reminder alert"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 550,
															columnNumber: 35
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[11px] text-muted-foreground",
															children: reminder.enabled ? "Alert On" : "Muted"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 559,
															columnNumber: 35
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 549,
														columnNumber: 33
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
															variant: isTakenToday ? "outline" : "default",
															size: "sm",
															className: "text-xs",
															onClick: () => {
																logDose(reminder.id, today, !isTakenToday);
																if (!isTakenToday) toast.success(`Dose logged for ${reminder.medicineName}`);
																else toast.info(`Dose marked unlogged.`);
															},
															children: isTakenToday ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
																/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-3.5 mr-1" }, void 0, false, {
																	fileName: _jsxFileName$1,
																	lineNumber: 588,
																	columnNumber: 41
																}, this),
																" ",
																"Undo Take"
															] }, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 587,
																columnNumber: 39
															}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-3.5 mr-1" }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 593,
																columnNumber: 41
															}, this), " Mark Taken"] }, void 0, true, {
																fileName: _jsxFileName$1,
																lineNumber: 592,
																columnNumber: 39
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 565,
															columnNumber: 35
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
															variant: "ghost",
															size: "icon",
															className: "text-muted-foreground hover:text-destructive",
															onClick: () => {
																deleteReminder(reminder.id);
																toast.success(`Removed ${reminder.medicineName} schedule`);
															},
															children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 610,
																columnNumber: 37
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 599,
															columnNumber: 35
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 564,
														columnNumber: 33
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 548,
													columnNumber: 31
												}, this)]
											}, reminder.id, true, {
												fileName: _jsxFileName$1,
												lineNumber: 491,
												columnNumber: 29
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 484,
										columnNumber: 23
									}, this)]
								}, bucketName, true, {
									fileName: _jsxFileName$1,
									lineNumber: 472,
									columnNumber: 21
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 466,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 453,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "analytics",
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
								className: "surface p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
									className: "mb-5 flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-base font-bold text-ink flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "size-4 text-primary" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 633,
											columnNumber: 19
										}, this), "14-Day Medication Adherence Rate (%)"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 632,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Tracks the daily percentage of prescribed doses logged on time versus missed doses."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 636,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 631,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Telemetry Feed" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 641,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 630,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-64 w-full",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AreaChart, {
											data: SAMPLE_ADHERENCE_DATA,
											margin: {
												left: -10,
												right: 10,
												top: 10,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
													id: "adherenceGrad",
													x1: "0",
													y1: "0",
													x2: "0",
													y2: "1",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
														offset: "0%",
														stopColor: "var(--chart-1)",
														stopOpacity: .45
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 658,
														columnNumber: 23
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
														offset: "100%",
														stopColor: "var(--chart-1)",
														stopOpacity: .02
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 663,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 651,
													columnNumber: 21
												}, this) }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 650,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "var(--border)",
													vertical: false
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 670,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
													dataKey: "day",
													...axisStyle
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 675,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
													domain: [0, 100],
													unit: "%",
													...axisStyle,
													width: 45
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 676,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, {
													contentStyle: tooltipStyle,
													formatter: (v) => [`${v}%`, "Daily Adherence"]
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 677,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Area, {
													type: "monotone",
													dataKey: "adherence",
													stroke: "var(--chart-1)",
													strokeWidth: 2.5,
													fill: "url(#adherenceGrad)",
													dot: {
														r: 3,
														fill: "var(--chart-1)"
													},
													activeDot: { r: 6 }
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 681,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 646,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 645,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 644,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 629,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
								className: "surface p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
									className: "mb-5 flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-base font-bold text-ink flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLine, { className: "size-4 text-primary" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 700,
											columnNumber: 19
										}, this), "Symptom Severity & Response Over Time"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 699,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Correlates medication adherence with blood pressure, pain index (1-10), and glycemic metrics."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 703,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 698,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: selectedChartMetric === "all" ? "default" : "outline",
												size: "sm",
												className: "h-7 text-xs",
												onClick: () => setSelectedChartMetric("all"),
												children: "All Metrics"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 711,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: selectedChartMetric === "pain" ? "default" : "outline",
												size: "sm",
												className: "h-7 text-xs",
												onClick: () => setSelectedChartMetric("pain"),
												children: "Pain (1-10)"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 721,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: selectedChartMetric === "bp" ? "default" : "outline",
												size: "sm",
												className: "h-7 text-xs",
												onClick: () => setSelectedChartMetric("bp"),
												children: "Blood Pressure"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 731,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
												variant: selectedChartMetric === "sugar" ? "default" : "outline",
												size: "sm",
												className: "h-7 text-xs",
												onClick: () => setSelectedChartMetric("sugar"),
												children: "Glucose"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 739,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 710,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 697,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-72 w-full",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, {
											data: SAMPLE_SYMPTOM_DATA,
											margin: {
												left: -10,
												right: 10,
												top: 10,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "var(--border)",
													vertical: false
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 758,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
													dataKey: "day",
													...axisStyle
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 763,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
													...axisStyle,
													width: 40
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 764,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: tooltipStyle }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 765,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Legend, {
													verticalAlign: "bottom",
													wrapperStyle: {
														fontSize: 11,
														paddingTop: 10
													}
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 766,
													columnNumber: 19
												}, this),
												(selectedChartMetric === "all" || selectedChartMetric === "pain") && /* @__PURE__ */ (void 0)(Line, {
													type: "monotone",
													dataKey: "painScore",
													name: "Pain Score (1-10)",
													stroke: "var(--chart-2)",
													strokeWidth: 2.5,
													dot: {
														r: 4,
														fill: "var(--chart-2)"
													}
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 773,
													columnNumber: 21
												}, this),
												(selectedChartMetric === "all" || selectedChartMetric === "bp") && /* @__PURE__ */ (void 0)(Line, {
													type: "monotone",
													dataKey: "bloodPressureSys",
													name: "Systolic BP (mmHg)",
													stroke: "var(--chart-3)",
													strokeWidth: 2,
													dot: {
														r: 3,
														fill: "var(--chart-3)"
													}
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 785,
													columnNumber: 21
												}, this),
												(selectedChartMetric === "all" || selectedChartMetric === "sugar") && /* @__PURE__ */ (void 0)(Line, {
													type: "monotone",
													dataKey: "bloodSugar",
													name: "Blood Sugar (mg/dL)",
													stroke: "var(--chart-4)",
													strokeWidth: 2,
													dot: {
														r: 3,
														fill: "var(--chart-4)"
													}
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 797,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 754,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 753,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 752,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 696,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
								className: "surface p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
									className: "mb-5 flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-base font-bold text-ink flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarCheck, { className: "size-4 text-primary" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 816,
											columnNumber: 19
										}, this), "Dose Compliance by Daily Time Slot"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 815,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Breakdown of on-time, delayed, and missed doses across morning, midday, evening, and night slots."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 819,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 814,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, { label: "Compliance Analysis" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 824,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 813,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-64 w-full",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, {
											data: SAMPLE_TIMING_DATA,
											margin: {
												left: -10,
												right: 10,
												top: 10,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "var(--border)",
													vertical: false
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 833,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
													dataKey: "slot",
													...axisStyle
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 838,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
													...axisStyle,
													width: 35
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 839,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: tooltipStyle }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 840,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Legend, {
													verticalAlign: "bottom",
													wrapperStyle: {
														fontSize: 11,
														paddingTop: 10
													}
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 841,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
													dataKey: "onTime",
													name: "Taken On Time",
													fill: "var(--chart-1)",
													radius: [
														4,
														4,
														0,
														0
													]
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 845,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
													dataKey: "delayed",
													name: "Delayed (>1h)",
													fill: "var(--chart-2)",
													radius: [
														4,
														4,
														0,
														0
													]
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 851,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
													dataKey: "missed",
													name: "Missed",
													fill: "var(--chart-5)",
													radius: [
														4,
														4,
														0,
														0
													]
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 857,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 829,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 828,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 827,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 812,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 627,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 438,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				title: "Medication Schedule & Safety",
				children: "Medora reminder notifications are informational tools designed to assist routine compliance. Always follow the specific instructions on your medicine's prescription label."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 870,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 240,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/app.reminders.tsx?tsr-split=component";
function RemindersPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicationScheduleAdherence, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { RemindersPage as component };
