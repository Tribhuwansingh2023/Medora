import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { G as Pill, Ot as FilePenLine, X as PenLine } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { f as useWorkspaceData, i as StatusPill, o as WorkspaceSection, r as AsyncSection, t as AiAssistNotice, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor.prescriptions-_mLjM7pZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/doctor.prescriptions.tsx?tsr-split=component";
var draftStatus = {
	draft: {
		label: "Draft",
		tone: "neutral"
	},
	awaiting_review: {
		label: "Awaiting review",
		tone: "warning"
	},
	signed: {
		label: "Signed by clinician",
		tone: "positive"
	},
	declined: {
		label: "Declined",
		tone: "danger"
	}
};
function DoctorPrescriptionsPage() {
	const drafts = useWorkspaceData("prescriptionDrafts");
	const patients = useWorkspaceData("doctorPatients");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [localState, setLocalState] = (0, import_react.useState)({});
	const columns = [
		{
			key: "patient",
			header: "Patient",
			sortValue: (r) => r.patientName,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.patientName
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: r.items.map((i) => `${i.medicine} ${i.strength}`).join(", ")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 18
			}, this)
		},
		{
			key: "origin",
			header: "Origin",
			hideBelow: "md",
			sortValue: (r) => r.origin,
			render: (r) => r.origin.replace("_", " ")
		},
		{
			key: "created",
			header: "Received",
			hideBelow: "sm",
			sortValue: (r) => r.createdAt,
			render: (r) => shortDateTime(r.createdAt)
		},
		{
			key: "flags",
			header: "Assistive flags",
			hideBelow: "lg",
			sortValue: (r) => r.aiFlags.length,
			render: (r) => r.aiFlags.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
				label: `${r.aiFlags.length} to review`,
				tone: "info"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 37
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-xs text-muted-foreground",
				children: "None"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 106
			}, this)
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => r.status,
			render: (r) => {
				const meta = draftStatus[localState[r.id] ?? r.status];
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
					label: meta.label,
					tone: meta.tone
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 14
				}, this);
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Prescription review & creation",
				demo: true,
				description: "Requests arrive here unsigned. Assistive flags are informational only — the clinician writes the medicine, strength and directions."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				tone: "warning",
				title: "Nothing is prescribed by the assistant",
				children: "Medora never produces a prescription, a dose or directions. Assistive flags surface what is already on file (allergies, existing medicines, request origin) so a qualified prescriber can check it faster. Every prescription must be written and signed by the clinician."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "review",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "review",
						children: "Review queue"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "create",
						children: "Write a prescription"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "review",
						className: "mt-5 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
							title: "Requests awaiting a prescriber",
							description: "Filter, sort and open each request.",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
								query: drafts,
								emptyIcon: FilePenLine,
								emptyTitle: "Nothing to review",
								emptyDescription: "New prescription requests will appear in this queue.",
								isEmpty: (d) => d.length === 0,
								children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
									rows: data,
									columns,
									getId: (r) => r.id,
									searchText: (r) => `${r.patientName} ${r.items.map((i) => i.medicine).join(" ")} ${r.origin}`,
									searchPlaceholder: "Search by patient or medicine…",
									initialSort: {
										key: "created",
										direction: "desc"
									},
									pageSize: 6,
									filters: [{
										key: "status",
										label: "Status",
										options: Object.entries(draftStatus).map(([value, meta]) => ({
											value,
											label: meta.label
										})),
										predicate: (r, v) => (localState[r.id] ?? r.status) === v
									}, {
										key: "origin",
										label: "Origin",
										options: [
											{
												value: "clinician",
												label: "Clinician"
											},
											{
												value: "patient_request",
												label: "Patient request"
											},
											{
												value: "repeat_request",
												label: "Repeat request"
											}
										],
										predicate: (r, v) => r.origin === v
									}],
									rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => setOpenId(openId === r.id ? null : r.id),
										children: openId === r.id ? "Hide" : "Review"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 119,
										columnNumber: 34
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 24
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 11
						}, this), openId && (drafts.data ?? []).filter((d) => d.id === openId).map((draft) => /* @__PURE__ */ (void 0)(WorkspaceSection, {
							title: `Request for ${draft.patientName}`,
							description: `Received ${shortDateTime(draft.createdAt)} · ${draft.origin.replace("_", " ")}`,
							actions: /* @__PURE__ */ (void 0)(StatusPill, { ...draftStatus[localState[draft.id] ?? draft.status] }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 264
							}, this),
							children: [
								/* @__PURE__ */ (void 0)("ul", {
									className: "divide-y divide-border rounded-md border border-border",
									children: draft.items.map((item) => /* @__PURE__ */ (void 0)("li", {
										className: "p-3 text-sm",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "font-medium text-ink",
											children: [
												item.medicine,
												" ",
												item.strength,
												" · ",
												item.form
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 128,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-muted-foreground",
											children: item.directionsPlaceholder
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 131,
											columnNumber: 25
										}, this)]
									}, `${draft.id}-${item.medicine}`, true, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 46
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 126,
									columnNumber: 19
								}, this),
								draft.aiFlags.length > 0 && /* @__PURE__ */ (void 0)(AiAssistNotice, {
									className: "mt-4",
									children: /* @__PURE__ */ (void 0)("ul", {
										className: "list-disc space-y-1 pl-4",
										children: draft.aiFlags.map((flag) => /* @__PURE__ */ (void 0)("li", { children: flag }, flag, false, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 52
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 48
								}, this),
								draft.clinicianNote && /* @__PURE__ */ (void 0)("p", {
									className: "mt-4 rounded-md bg-secondary p-3 text-sm text-muted-foreground",
									children: ["Clinician note: ", draft.clinicianNote]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 43
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (void 0)(Button, {
										onClick: () => {
											setLocalState((p) => ({
												...p,
												[draft.id]: "signed"
											}));
											toast.success("Recorded as signed by you (demo)");
										},
										children: [/* @__PURE__ */ (void 0)(PenLine, {
											className: "size-4",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 155,
											columnNumber: 23
										}, this), " Sign as prescriber"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)(Button, {
										variant: "outline",
										onClick: () => {
											setLocalState((p) => ({
												...p,
												[draft.id]: "declined"
											}));
											toast("Recorded as declined (demo)");
										},
										children: "Decline and request a consult"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 158,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 147,
									columnNumber: 19
								}, this)
							]
						}, draft.id, true, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 84
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "create",
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrescriptionComposer, { patientNames: (patients.data ?? []).map((p) => p.name) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 75,
		columnNumber: 10
	}, this);
}
function PrescriptionComposer({ patientNames }) {
	const [patient, setPatient] = (0, import_react.useState)("");
	const [medicine, setMedicine] = (0, import_react.useState)("");
	const [strength, setStrength] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)("");
	const [directions, setDirections] = (0, import_react.useState)("");
	const ready = patient && medicine.trim() && strength.trim() && form.trim() && directions.trim().length > 4;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
		title: "Write a prescription",
		description: "Every field is written by the prescriber. Medora does not pre-fill medicines, strengths or directions.",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "rx-patient",
							children: "Patient"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 191,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
							value: patient,
							onValueChange: setPatient,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
								id: "rx-patient",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select a patient" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 194,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: patientNames.map((name) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
								value: name,
								children: name
							}, name, false, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 41
							}, this)) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 192,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "rx-medicine",
							children: "Medicine"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "rx-medicine",
							value: medicine,
							onChange: (e) => setMedicine(e.target.value),
							placeholder: "Written by the prescriber"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "rx-strength",
							children: "Strength"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "rx-strength",
							value: strength,
							onChange: (e) => setStrength(e.target.value),
							placeholder: "e.g. 500 mg"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "rx-form",
							children: "Form"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "rx-form",
							value: form,
							onChange: (e) => setForm(e.target.value),
							placeholder: "e.g. Tablet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 211,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
					htmlFor: "rx-directions",
					children: "Directions"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 217,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
					id: "rx-directions",
					rows: 3,
					value: directions,
					onChange: (e) => setDirections(e.target.value),
					placeholder: "Directions in your own words"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 218,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 216,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					disabled: !ready,
					onClick: () => {
						toast.success("Prescription drafted and attributed to you (demo)");
						setMedicine("");
						setStrength("");
						setForm("");
						setDirections("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, {
						className: "size-4",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 11
					}, this), " Create and sign"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 222,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-muted-foreground",
					children: "In this demo nothing is transmitted to a pharmacy. Production deployments require verified prescriber credentials and an audited signing step."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 231,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 221,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 188,
		columnNumber: 10
	}, this);
}
//#endregion
export { DoctorPrescriptionsPage as component };
