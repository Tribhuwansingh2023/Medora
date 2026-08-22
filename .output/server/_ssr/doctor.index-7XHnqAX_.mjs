import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Bt as ClipboardCheck, S as Stethoscope, in as CalendarClock, s as Users } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { l as PageHeader, m as StatTile } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { a as Timeline, d as timeOnly, f as useWorkspaceData, i as StatusPill, l as shortDate, o as WorkspaceSection, r as AsyncSection, t as AiAssistNotice, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor.index-7XHnqAX_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/doctor.index.tsx?tsr-split=component";
var statusTone = {
	waiting: "warning",
	in_consult: "info",
	review: "neutral",
	closed: "positive"
};
var statusLabel = {
	waiting: "Waiting",
	in_consult: "In consult",
	review: "Needs review",
	closed: "Closed"
};
function DoctorPatientsPage() {
	const patients = useWorkspaceData("doctorPatients");
	const appointments = useWorkspaceData("appointments");
	const notes = useWorkspaceData("consultNotes");
	const history = useWorkspaceData("medicineHistory");
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const [decision, setDecision] = (0, import_react.useState)("");
	const [recorded, setRecorded] = (0, import_react.useState)([]);
	const rows = patients.data ?? [];
	const selected = (0, import_react.useMemo)(() => rows.find((p) => p.id === (selectedId ?? rows[0]?.id)) ?? null, [rows, selectedId]);
	const columns = [
		{
			key: "name",
			header: "Patient",
			sortValue: (r) => r.name,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: [r.ageBand, " · sample record"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 18
			}, this)
		},
		{
			key: "reason",
			header: "Reason",
			hideBelow: "md",
			sortValue: (r) => r.reason,
			render: (r) => r.reason
		},
		{
			key: "lastVisit",
			header: "Last seen",
			hideBelow: "sm",
			sortValue: (r) => r.lastVisit,
			render: (r) => shortDate(`${r.lastVisit}T00:00:00.000Z`)
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => r.status,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
				label: statusLabel[r.status],
				tone: statusTone[r.status]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 18
			}, this)
		}
	];
	const waiting = rows.filter((p) => p.status === "waiting").length;
	const inConsult = rows.filter((p) => p.status === "in_consult").length;
	const todayAppointments = (appointments.data ?? []).filter((a) => a.at.startsWith("2026-08-16"));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Patient overview",
				demo: true,
				description: "Everything here is patient-entered or clinic sample data. Medora never generates clinical conclusions — the clinician records every decision."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "On the list",
						value: String(rows.length),
						icon: Users,
						hint: "Sample patient records"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Waiting",
						value: String(waiting),
						icon: Stethoscope,
						tone: "attention",
						hint: "Awaiting clinician"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "In consult",
						value: String(inConsult),
						icon: ClipboardCheck,
						hint: "Currently open"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatTile, {
						label: "Today's clinic",
						value: String(todayAppointments.length),
						icon: CalendarClock,
						hint: "Scheduled appointments"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
					title: "Patient list",
					description: "Select a patient to open their record, assistive summary and decision controls.",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
						query: patients,
						emptyIcon: Users,
						emptyTitle: "No patients on the list",
						emptyDescription: "When patients are assigned to this clinician they appear here.",
						isEmpty: (d) => d.length === 0,
						children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
							rows: data,
							columns,
							getId: (r) => r.id,
							searchText: (r) => `${r.name} ${r.reason} ${r.currentMedicines.join(" ")}`,
							searchPlaceholder: "Search patients or reasons…",
							pageSize: 6,
							initialSort: {
								key: "name",
								direction: "asc"
							},
							onRowClick: (r) => setSelectedId(r.id),
							filters: [{
								key: "status",
								label: "Status",
								options: Object.entries(statusLabel).map(([value, label]) => ({
									value,
									label
								})),
								predicate: (r, v) => r.status === v
							}],
							rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setSelectedId(r.id),
								children: "Open record"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 32
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 22
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
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
							title: selected.name,
							description: `${selected.reason} · last seen ${shortDate(`${selected.lastVisit}T00:00:00.000Z`)}`,
							actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
								label: statusLabel[selected.status],
								tone: statusTone[selected.status]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 163
							}, this),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Allergies (patient reported)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
									className: "mt-1 text-sm",
									children: selected.allergies.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "space-y-1",
										children: selected.allergies.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "rounded-md bg-destructive-soft px-2 py-1 text-destructive",
											children: a
										}, a, false, {
											fileName: _jsxFileName,
											lineNumber: 107,
											columnNumber: 56
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 106,
										columnNumber: 52
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-muted-foreground",
										children: "None recorded by the patient."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 33
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Current medicines"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
									className: "mt-1 space-y-1 text-sm",
									children: selected.currentMedicines.length ? selected.currentMedicines.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "rounded-md bg-secondary px-2 py-1",
										children: m
									}, m, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 94
									}, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-muted-foreground",
										children: "None recorded."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 35
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiAssistNotice, {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: selected.aiSummary }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
							title: "Medicine history",
							description: "Combined clinic records, uploaded prescriptions and patient entries.",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
								query: history,
								emptyIcon: ClipboardCheck,
								emptyTitle: "No medicine history",
								emptyDescription: "Nothing has been recorded for this patient yet.",
								skeletonRows: 3,
								children: (data) => {
									const forPatient = data.filter((h) => h.patientId === selected.id);
									if (forPatient.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm text-muted-foreground",
										children: "No medicine history recorded."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 53
									}, this);
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
										className: "divide-y divide-border",
										children: forPatient.map((h) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
											className: "flex flex-wrap items-center gap-2 py-2.5 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-medium text-ink",
													children: [
														h.medicine,
														" ",
														h.strength
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 143,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
													label: h.status === "current" ? "Current" : "Past",
													tone: h.status === "current" ? "positive" : "neutral"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 146,
													columnNumber: 29
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "ml-auto text-xs text-muted-foreground",
													children: [
														shortDate(`${h.startedOn}T00:00:00.000Z`),
														h.endedOn ? ` → ${shortDate(`${h.endedOn}T00:00:00.000Z`)}` : " → ongoing",
														" ",
														"· ",
														h.source
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 147,
													columnNumber: 29
												}, this)
											]
										}, h.id, true, {
											fileName: _jsxFileName,
											lineNumber: 142,
											columnNumber: 46
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 24
									}, this);
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
							title: "Final clinical decision",
							description: "Only a clinician can record an outcome. Nothing is applied automatically.",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									htmlFor: "decision",
									className: "text-sm font-medium text-ink",
									children: "Decision note"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									id: "decision",
									value: decision,
									onChange: (e) => setDecision(e.target.value),
									rows: 3,
									placeholder: "Record the outcome of this review in your own words…",
									className: "mt-2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 162,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [
										"Continue current therapy",
										"Invite to consult",
										"Refer",
										"No action"
									].map((label) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => setDecision((prev) => prev ? prev : `${label}: `),
										children: label
									}, label, false, {
										fileName: _jsxFileName,
										lineNumber: 164,
										columnNumber: 116
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									className: "mt-4",
									disabled: decision.trim().length < 4,
									onClick: () => {
										setRecorded((prev) => [{
											id: `local-${Date.now()}`,
											at: (/* @__PURE__ */ new Date()).toISOString(),
											text: decision.trim()
										}, ...prev]);
										setDecision("");
										toast.success("Decision recorded in the demo audit trail");
									},
									children: "Record decision"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
							title: "Audit trail",
							description: "Every entry is attributable and time-stamped.",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
								query: notes,
								emptyIcon: ClipboardCheck,
								emptyTitle: "No audit entries",
								emptyDescription: "Recorded actions for this patient will appear here.",
								skeletonRows: 3,
								children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Timeline, { items: [...recorded.map((r) => ({
									id: r.id,
									at: shortDateTime(r.at),
									title: "Clinical decision recorded",
									body: r.text,
									meta: "You (this session)"
								})), ...data.filter((n) => n.patientId === selected.id).map((n) => ({
									id: n.id,
									at: shortDateTime(n.at),
									title: n.kind === "ai_review" ? "Assistive summary regenerated" : n.kind === "decision" ? "Clinical decision recorded" : n.kind === "consult" ? "Consult completed" : "Patient activity",
									body: n.summary,
									meta: n.author,
									tone: n.kind === "ai_review" ? "ai" : "default"
								}))] }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 183,
									columnNumber: 28
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 23
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
						title: "Patient record",
						description: "Select a patient from the list.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground",
							children: "No patient selected."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 199,
						columnNumber: 19
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
						title: "Today's clinic",
						description: "Sample schedule for 16 August 2026.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
							query: appointments,
							emptyIcon: CalendarClock,
							emptyTitle: "Nothing scheduled",
							emptyDescription: "Appointments booked for today will appear here.",
							skeletonRows: 3,
							children: (data) => {
								const today = data.filter((a) => a.at.startsWith("2026-08-16"));
								if (today.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted-foreground",
									children: "No appointments scheduled today."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 46
								}, this);
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "divide-y divide-border",
									children: today.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
										className: "flex items-center gap-3 py-2.5 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "numeric w-14 font-semibold text-ink",
												children: timeOnly(a.at)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 214,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "min-w-0 flex-1 truncate",
												children: a.patientName
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 217,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
												label: a.status.replace("_", " "),
												tone: a.status === "in_consult" ? "info" : a.status === "checked_in" ? "warning" : "neutral"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 220,
												columnNumber: 25
											}, this)
										]
									}, a.id, true, {
										fileName: _jsxFileName,
										lineNumber: 213,
										columnNumber: 37
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 212,
									columnNumber: 22
								}, this);
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 205,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 10
	}, this);
}
//#endregion
export { DoctorPatientsPage as component };
