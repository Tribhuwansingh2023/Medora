import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { f as TriangleAlert, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { a as demoDoctorPatients, f as Button, i as demoAuditEvents, m as cn, o as demoInventory, r as settle } from "./router-DnzDjJrL2.mjs";
import { n as Badge, o as EmptyState } from "./primitives-Dg_-FqLy.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workspace-DXju8pVi.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/workspace/parts.tsx";
/** Every AI-derived block in a professional workspace must be wrapped in this. */
function AiAssistNotice({ title = "AI-assisted — requires professional review", children, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: cn("rounded-lg border border-primary/30 bg-primary-soft/60 p-4", className),
		"aria-label": title,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-primary",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-2 text-sm text-foreground/90",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 border-t border-primary/20 pt-2 text-xs text-muted-foreground",
				children: "Assistive output only. It is never a prescription, diagnosis or dose, and it is never applied without a qualified professional recording the decision."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
function AiAssistTag({ className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
		variant: "outline",
		className: cn("border-primary/40 text-primary", className),
		children: "AI-assisted — requires professional review"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
function WorkspaceSection({ title, description, actions, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: cn("surface p-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-4 flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-base font-bold text-ink",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 11
			}, this), description && /* @__PURE__ */ (void 0)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 9
			}, this), actions && /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: actions
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 5
	}, this);
}
function StatusPill({ label, tone }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium", {
			neutral: "border-border bg-secondary text-muted-foreground",
			positive: "border-success/35 bg-success-soft text-success",
			warning: "border-warning/40 bg-warning-soft text-warning-foreground",
			danger: "border-destructive/40 bg-destructive-soft text-destructive",
			info: "border-primary/30 bg-primary-soft text-primary"
		}[tone]),
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 5
	}, this);
}
function Timeline({ items }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Nothing recorded yet."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 122,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
		className: "relative space-y-5 border-l border-border pl-5",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					"aria-hidden": true,
					className: cn("absolute -left-[26px] top-1.5 size-2.5 rounded-full border-2 border-card", item.tone === "ai" ? "bg-primary" : "bg-border-strong")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 129,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm font-semibold text-ink",
						children: item.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 13
					}, this), item.tone === "ai" && /* @__PURE__ */ (void 0)(AiAssistTag, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 36
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 11
				}, this),
				item.body && /* @__PURE__ */ (void 0)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: item.body
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [item.at, item.meta ? ` · ${item.meta}` : ""]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 11
				}, this)
			]
		}, item.id, true, {
			fileName: _jsxFileName,
			lineNumber: 128,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 126,
		columnNumber: 5
	}, this);
}
function AsyncSection({ query, children, emptyIcon, emptyTitle, emptyDescription, skeletonRows = 5, isEmpty }) {
	if (query.isPending) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-2",
		"aria-busy": "true",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-9 w-full" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 179,
			columnNumber: 9
		}, this), Array.from({ length: skeletonRows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-12 w-full" }, i, false, {
			fileName: _jsxFileName,
			lineNumber: 181,
			columnNumber: 11
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 178,
		columnNumber: 7
	}, this);
	if (query.isError || !query.data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "alert",
		className: "rounded-lg border border-destructive/40 bg-destructive-soft p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "flex items-center gap-2 font-semibold text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
					className: "size-4 text-destructive",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 194,
					columnNumber: 11
				}, this), " This view could not load"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: "The workspace provider did not return data. Nothing has been changed, and no partial or invented records are shown."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "sm",
				className: "mt-4",
				onClick: () => query.refetch(),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, {
					className: "size-4",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 207,
					columnNumber: 11
				}, this), " Try again"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 201,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 189,
		columnNumber: 7
	}, this);
	if (isEmpty?.(query.data)) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
		icon: emptyIcon,
		title: emptyTitle,
		description: emptyDescription
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 215,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: children(query.data) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 223,
		columnNumber: 10
	}, this);
}
var demoAppointments = [
	{
		id: "ap-1",
		patientId: "pt-1",
		patientName: "Aria Mehta",
		at: "2026-08-16T09:00:00.000Z",
		durationMin: 20,
		kind: "in_person",
		reason: "Repeat therapy review",
		status: "checked_in"
	},
	{
		id: "ap-2",
		patientId: "pt-2",
		patientName: "Tomas Ruiz",
		at: "2026-08-16T09:30:00.000Z",
		durationMin: 30,
		kind: "video",
		reason: "Persistent cough consult",
		status: "in_consult"
	},
	{
		id: "ap-3",
		patientId: "pt-3",
		patientName: "Nadia Cole",
		at: "2026-08-16T10:15:00.000Z",
		durationMin: 15,
		kind: "phone",
		reason: "Prescription review request",
		status: "scheduled"
	},
	{
		id: "ap-4",
		patientId: "pt-4",
		patientName: "Peter Lindqvist",
		at: "2026-08-16T11:00:00.000Z",
		durationMin: 30,
		kind: "in_person",
		reason: "Medicines reconciliation",
		status: "scheduled"
	},
	{
		id: "ap-5",
		patientId: "pt-1",
		patientName: "Aria Mehta",
		at: "2026-08-17T14:00:00.000Z",
		durationMin: 20,
		kind: "video",
		reason: "Follow-up on lab upload",
		status: "scheduled"
	},
	{
		id: "ap-6",
		patientId: "pt-3",
		patientName: "Nadia Cole",
		at: "2026-08-15T15:30:00.000Z",
		durationMin: 15,
		kind: "phone",
		reason: "Allergy record confirmation",
		status: "completed"
	}
];
var demoConsultNotes = [
	{
		id: "cn-1",
		patientId: "pt-1",
		at: "2026-08-13T11:02:00.000Z",
		author: "Patient (self-entered)",
		kind: "message",
		summary: "Updated allergy record to include penicillin."
	},
	{
		id: "cn-2",
		patientId: "pt-1",
		at: "2026-08-02T08:05:00.000Z",
		author: "Medora assistive layer",
		kind: "ai_review",
		summary: "Assistive summary regenerated after a new prescription upload. Not reviewed yet."
	},
	{
		id: "cn-3",
		patientId: "pt-1",
		at: "2026-07-28T10:40:00.000Z",
		author: "Dr. A. Whitfield (sample)",
		kind: "decision",
		summary: "Reviewed uploaded prescription and recorded outcome: continue current therapy, review in four weeks."
	},
	{
		id: "cn-4",
		patientId: "pt-2",
		at: "2026-08-14T09:20:00.000Z",
		author: "Medora assistive layer",
		kind: "ai_review",
		summary: "Symptom entry describes a cough lasting more than two weeks. Flagged for clinician assessment."
	},
	{
		id: "cn-5",
		patientId: "pt-2",
		at: "2026-06-14T13:10:00.000Z",
		author: "Dr. L. Osei (sample)",
		kind: "consult",
		summary: "Consult completed. Inhaler technique discussed and recorded in the clinic record."
	},
	{
		id: "cn-6",
		patientId: "pt-3",
		at: "2026-08-01T10:00:00.000Z",
		author: "Patient (self-entered)",
		kind: "message",
		summary: "Requested a review of an over-the-counter antihistamine."
	},
	{
		id: "cn-7",
		patientId: "pt-4",
		at: "2026-07-19T16:30:00.000Z",
		author: "Dr. A. Whitfield (sample)",
		kind: "decision",
		summary: "Post-discharge reconciliation recorded. Two medicines confirmed with the patient."
	}
];
var demoPrescriptionDrafts = [
	{
		id: "dr-1",
		patientId: "pt-3",
		patientName: "Nadia Cole",
		createdAt: "2026-08-15T09:12:00.000Z",
		origin: "patient_request",
		status: "awaiting_review",
		items: [{
			medicine: "Cetirizine",
			strength: "10 mg",
			form: "Tablet",
			directionsPlaceholder: "Directions to be written by the prescriber"
		}],
		aiFlags: ["Patient-reported allergy class on file: sulfa drugs. Confirm with the patient before prescribing.", "Requested medicine already recorded as a current over-the-counter medicine."]
	},
	{
		id: "dr-2",
		patientId: "pt-1",
		patientName: "Aria Mehta",
		createdAt: "2026-08-14T08:40:00.000Z",
		origin: "repeat_request",
		status: "awaiting_review",
		items: [{
			medicine: "Metformin hydrochloride",
			strength: "500 mg",
			form: "Tablet",
			directionsPlaceholder: "Directions to be written by the prescriber"
		}],
		aiFlags: ["Repeat request matches an existing long-term medicine record. Clinician confirmation required."]
	},
	{
		id: "dr-3",
		patientId: "pt-4",
		patientName: "Peter Lindqvist",
		createdAt: "2026-08-09T15:02:00.000Z",
		origin: "clinician",
		status: "signed",
		items: [{
			medicine: "Metformin hydrochloride",
			strength: "500 mg",
			form: "Tablet",
			directionsPlaceholder: "Directions written by the prescriber"
		}],
		aiFlags: [],
		clinicianNote: "Signed after reconciliation consult on 9 August (sample record)."
	},
	{
		id: "dr-4",
		patientId: "pt-2",
		patientName: "Tomas Ruiz",
		createdAt: "2026-08-06T11:25:00.000Z",
		origin: "patient_request",
		status: "declined",
		items: [{
			medicine: "Amoxicillin",
			strength: "500 mg",
			form: "Capsule",
			directionsPlaceholder: "—"
		}],
		aiFlags: ["Request originated from a symptom entry, not from an assessment."],
		clinicianNote: "Declined: assessment required first. Patient invited to a consult (sample record)."
	}
];
var demoMedicineHistory = [
	{
		id: "mh-1",
		patientId: "pt-1",
		medicine: "Metformin hydrochloride",
		strength: "500 mg",
		startedOn: "2025-11-04",
		source: "clinic record",
		status: "current"
	},
	{
		id: "mh-2",
		patientId: "pt-1",
		medicine: "Amoxicillin",
		strength: "500 mg",
		startedOn: "2026-07-28",
		endedOn: "2026-08-04",
		source: "uploaded prescription",
		status: "past"
	},
	{
		id: "mh-3",
		patientId: "pt-2",
		medicine: "Salbutamol",
		strength: "100 mcg inhaler",
		startedOn: "2024-02-19",
		source: "clinic record",
		status: "current"
	},
	{
		id: "mh-4",
		patientId: "pt-3",
		medicine: "Cetirizine",
		strength: "10 mg",
		startedOn: "2026-05-02",
		source: "patient entry",
		status: "current"
	},
	{
		id: "mh-5",
		patientId: "pt-4",
		medicine: "Metformin hydrochloride",
		strength: "500 mg",
		startedOn: "2023-09-11",
		source: "clinic record",
		status: "current"
	},
	{
		id: "mh-6",
		patientId: "pt-4",
		medicine: "Ibuprofen",
		strength: "400 mg",
		startedOn: "2026-07-01",
		source: "patient entry",
		status: "current"
	}
];
var demoSales = [
	{
		date: "2026-08-03",
		revenue: 1840,
		orders: 62
	},
	{
		date: "2026-08-04",
		revenue: 2110,
		orders: 74
	},
	{
		date: "2026-08-05",
		revenue: 1975,
		orders: 68
	},
	{
		date: "2026-08-06",
		revenue: 2360,
		orders: 81
	},
	{
		date: "2026-08-07",
		revenue: 2530,
		orders: 88
	},
	{
		date: "2026-08-08",
		revenue: 2790,
		orders: 95
	},
	{
		date: "2026-08-09",
		revenue: 1620,
		orders: 51
	},
	{
		date: "2026-08-10",
		revenue: 2240,
		orders: 77
	},
	{
		date: "2026-08-11",
		revenue: 2415,
		orders: 82
	},
	{
		date: "2026-08-12",
		revenue: 2680,
		orders: 90
	},
	{
		date: "2026-08-13",
		revenue: 2905,
		orders: 99
	},
	{
		date: "2026-08-14",
		revenue: 3120,
		orders: 104
	}
];
var demoPharmacyOrders = [
	{
		id: "MD-4821",
		customer: "Aria Mehta",
		placedAt: "2026-08-14T15:02:00.000Z",
		channel: "reservation",
		items: 1,
		total: 2.2,
		prescriptionRequired: false,
		status: "ready"
	},
	{
		id: "MD-4822",
		customer: "Tomas Ruiz",
		placedAt: "2026-08-14T16:20:00.000Z",
		channel: "delivery",
		items: 2,
		total: 18.4,
		prescriptionRequired: true,
		status: "awaiting_prescription"
	},
	{
		id: "MD-4823",
		customer: "Nadia Cole",
		placedAt: "2026-08-15T08:41:00.000Z",
		channel: "reservation",
		items: 3,
		total: 22.1,
		prescriptionRequired: true,
		status: "verifying"
	},
	{
		id: "MD-4824",
		customer: "Peter Lindqvist",
		placedAt: "2026-08-15T09:55:00.000Z",
		channel: "counter",
		items: 1,
		total: 5.2,
		prescriptionRequired: false,
		status: "completed"
	},
	{
		id: "MD-4825",
		customer: "Isla Fenwick",
		placedAt: "2026-08-15T11:10:00.000Z",
		channel: "delivery",
		items: 4,
		total: 41.6,
		prescriptionRequired: false,
		status: "preparing"
	},
	{
		id: "MD-4826",
		customer: "Owen Barrett",
		placedAt: "2026-08-15T12:34:00.000Z",
		channel: "reservation",
		items: 2,
		total: 9.8,
		prescriptionRequired: true,
		status: "accepted"
	},
	{
		id: "MD-4827",
		customer: "Mira Sandoval",
		placedAt: "2026-08-15T14:02:00.000Z",
		channel: "counter",
		items: 1,
		total: 3.4,
		prescriptionRequired: false,
		status: "cancelled"
	},
	{
		id: "MD-4828",
		customer: "Aria Mehta",
		placedAt: "2026-08-16T08:15:00.000Z",
		channel: "reservation",
		items: 2,
		total: 11.3,
		prescriptionRequired: false,
		status: "verifying"
	},
	{
		id: "MD-4829",
		customer: "Jonas Klein",
		placedAt: "2026-08-16T08:47:00.000Z",
		channel: "delivery",
		items: 5,
		total: 63.9,
		prescriptionRequired: true,
		status: "preparing"
	},
	{
		id: "MD-4830",
		customer: "Ha-eun Park",
		placedAt: "2026-08-16T09:12:00.000Z",
		channel: "reservation",
		items: 1,
		total: 14.9,
		prescriptionRequired: false,
		status: "ready"
	},
	{
		id: "MD-4831",
		customer: "Salma Nasser",
		placedAt: "2026-08-16T09:40:00.000Z",
		channel: "counter",
		items: 3,
		total: 27.5,
		prescriptionRequired: false,
		status: "completed"
	},
	{
		id: "MD-4832",
		customer: "Elliot Rowe",
		placedAt: "2026-08-16T10:05:00.000Z",
		channel: "delivery",
		items: 2,
		total: 12,
		prescriptionRequired: true,
		status: "awaiting_prescription"
	}
];
var demoCustomers = [
	{
		id: "cu-1",
		name: "Aria Mehta",
		since: "2025-03-11",
		orders: 14,
		lastOrder: "2026-08-16",
		spend: 218.4,
		consentMarketing: false,
		flags: ["Allergy on file (patient reported)"]
	},
	{
		id: "cu-2",
		name: "Tomas Ruiz",
		since: "2024-10-02",
		orders: 22,
		lastOrder: "2026-08-14",
		spend: 431.2,
		consentMarketing: true,
		flags: ["Repeat inhaler customer"]
	},
	{
		id: "cu-3",
		name: "Nadia Cole",
		since: "2026-01-19",
		orders: 5,
		lastOrder: "2026-08-15",
		spend: 74.6,
		consentMarketing: false,
		flags: ["Allergy on file (patient reported)"]
	},
	{
		id: "cu-4",
		name: "Peter Lindqvist",
		since: "2023-06-30",
		orders: 41,
		lastOrder: "2026-08-15",
		spend: 902.8,
		consentMarketing: true,
		flags: []
	},
	{
		id: "cu-5",
		name: "Isla Fenwick",
		since: "2025-11-08",
		orders: 9,
		lastOrder: "2026-08-15",
		spend: 156.1,
		consentMarketing: false,
		flags: ["Delivery address unverified"]
	},
	{
		id: "cu-6",
		name: "Owen Barrett",
		since: "2026-04-21",
		orders: 3,
		lastOrder: "2026-08-15",
		spend: 38.9,
		consentMarketing: false,
		flags: []
	},
	{
		id: "cu-7",
		name: "Jonas Klein",
		since: "2024-02-14",
		orders: 27,
		lastOrder: "2026-08-16",
		spend: 612.3,
		consentMarketing: true,
		flags: []
	},
	{
		id: "cu-8",
		name: "Ha-eun Park",
		since: "2025-07-05",
		orders: 11,
		lastOrder: "2026-08-16",
		spend: 189.7,
		consentMarketing: false,
		flags: []
	}
];
var demoSuppliers = [
	{
		id: "sp-1",
		name: "Northbridge Distribution",
		contact: "orders@northbridge.example",
		leadTimeDays: 2,
		openPurchaseOrders: 3,
		onTimeRate: .96,
		lastDelivery: "2026-08-14",
		status: "active"
	},
	{
		id: "sp-2",
		name: "Calder Supply Co.",
		contact: "desk@calder.example",
		leadTimeDays: 4,
		openPurchaseOrders: 1,
		onTimeRate: .81,
		lastDelivery: "2026-08-11",
		status: "review"
	},
	{
		id: "sp-3",
		name: "Vireo Direct",
		contact: "support@vireo.example",
		leadTimeDays: 1,
		openPurchaseOrders: 5,
		onTimeRate: .99,
		lastDelivery: "2026-08-16",
		status: "active"
	},
	{
		id: "sp-4",
		name: "Ashgrove Wholesale",
		contact: "hello@ashgrove.example",
		leadTimeDays: 6,
		openPurchaseOrders: 0,
		onTimeRate: .68,
		lastDelivery: "2026-07-29",
		status: "paused"
	}
];
var demoVerificationQueue = [
	{
		id: "vq-1",
		prescriptionId: "rx-2201",
		patient: "Nadia Cole",
		prescriber: "Dr. L. Osei (sample)",
		receivedAt: "2026-08-16T08:31:00.000Z",
		items: 2,
		confidence: .91,
		status: "waiting"
	},
	{
		id: "vq-2",
		prescriptionId: "rx-2202",
		patient: "Jonas Klein",
		prescriber: "Dr. A. Whitfield (sample)",
		receivedAt: "2026-08-16T08:52:00.000Z",
		items: 3,
		confidence: .74,
		status: "in_review",
		note: "Two lines unclear on the uploaded scan."
	},
	{
		id: "vq-3",
		prescriptionId: "rx-2203",
		patient: "Owen Barrett",
		prescriber: "Dr. M. Idris (sample)",
		receivedAt: "2026-08-16T09:04:00.000Z",
		items: 1,
		confidence: .88,
		status: "waiting"
	},
	{
		id: "vq-4",
		prescriptionId: "rx-2204",
		patient: "Elliot Rowe",
		prescriber: "Dr. L. Osei (sample)",
		receivedAt: "2026-08-15T17:20:00.000Z",
		items: 2,
		confidence: .62,
		status: "waiting",
		note: "Prescriber signature block partly cropped."
	},
	{
		id: "vq-5",
		prescriptionId: "rx-2205",
		patient: "Aria Mehta",
		prescriber: "Dr. A. Whitfield (sample)",
		receivedAt: "2026-08-15T14:11:00.000Z",
		items: 1,
		confidence: .95,
		status: "approved"
	},
	{
		id: "vq-6",
		prescriptionId: "rx-2206",
		patient: "Mira Sandoval",
		prescriber: "Unreadable (sample)",
		receivedAt: "2026-08-15T10:02:00.000Z",
		items: 1,
		confidence: .41,
		status: "rejected",
		note: "Prescriber details could not be confirmed."
	}
];
var demoPlatformUsers = [
	{
		id: "us-1",
		name: "Aria Mehta",
		email: "aria.mehta@example.com",
		role: "patient",
		status: "active",
		joined: "2025-03-11",
		lastActive: "2026-08-16",
		mfa: false
	},
	{
		id: "us-2",
		name: "Riverside Community Pharmacy",
		email: "ops@riverside.example",
		role: "pharmacy",
		status: "active",
		joined: "2024-08-02",
		lastActive: "2026-08-16",
		mfa: true
	},
	{
		id: "us-3",
		name: "Dr. A. Whitfield",
		email: "a.whitfield@beacon.example",
		role: "doctor",
		status: "active",
		joined: "2024-05-19",
		lastActive: "2026-08-15",
		mfa: true
	},
	{
		id: "us-4",
		name: "Dr. L. Osei",
		email: "l.osei@beacon.example",
		role: "doctor",
		status: "pending",
		joined: "2026-08-10",
		lastActive: "2026-08-14",
		mfa: false
	},
	{
		id: "us-5",
		name: "Harbourgate Chemists",
		email: "team@harbourgate.example",
		role: "pharmacy",
		status: "pending",
		joined: "2026-08-12",
		lastActive: "2026-08-16",
		mfa: false
	},
	{
		id: "us-6",
		name: "Tomas Ruiz",
		email: "t.ruiz@example.com",
		role: "patient",
		status: "active",
		joined: "2024-10-02",
		lastActive: "2026-08-14",
		mfa: false
	},
	{
		id: "us-7",
		name: "Nadia Cole",
		email: "n.cole@example.com",
		role: "patient",
		status: "active",
		joined: "2026-01-19",
		lastActive: "2026-08-15",
		mfa: true
	},
	{
		id: "us-8",
		name: "Mira Sandoval",
		email: "m.sandoval@example.com",
		role: "patient",
		status: "suspended",
		joined: "2025-09-30",
		lastActive: "2026-07-28",
		mfa: false
	},
	{
		id: "us-9",
		name: "Platform Operations",
		email: "admin@medora.example",
		role: "admin",
		status: "active",
		joined: "2023-01-04",
		lastActive: "2026-08-16",
		mfa: true
	},
	{
		id: "us-10",
		name: "Dr. M. Idris",
		email: "m.idris@northfield.example",
		role: "doctor",
		status: "active",
		joined: "2025-02-27",
		lastActive: "2026-08-13",
		mfa: true
	},
	{
		id: "us-11",
		name: "Jonas Klein",
		email: "j.klein@example.com",
		role: "patient",
		status: "active",
		joined: "2024-02-14",
		lastActive: "2026-08-16",
		mfa: false
	},
	{
		id: "us-12",
		name: "Ashgrove Pharmacy Group",
		email: "care@ashgrovepharmacy.example",
		role: "pharmacy",
		status: "suspended",
		joined: "2024-11-22",
		lastActive: "2026-06-02",
		mfa: true
	}
];
var demoOrganisations = [
	{
		id: "og-1",
		name: "Riverside Community Pharmacy",
		kind: "pharmacy",
		city: "Eastwick",
		licenceId: "PH-DEMO-1042",
		verification: "verified",
		contact: "ops@riverside.example",
		onboarded: "2024-08-02"
	},
	{
		id: "og-2",
		name: "Harbourgate Chemists",
		kind: "pharmacy",
		city: "Eastwick",
		licenceId: "PH-DEMO-2277",
		verification: "pending",
		contact: "team@harbourgate.example",
		onboarded: "2026-08-12"
	},
	{
		id: "og-3",
		name: "Ashgrove Pharmacy Group",
		kind: "pharmacy",
		city: "Northfield",
		licenceId: "PH-DEMO-3391",
		verification: "expired",
		contact: "care@ashgrovepharmacy.example",
		onboarded: "2024-11-22"
	},
	{
		id: "og-4",
		name: "Beacon Family Practice",
		kind: "clinic",
		city: "Eastwick",
		licenceId: "CL-DEMO-8810",
		verification: "verified",
		contact: "reception@beacon.example",
		onboarded: "2024-05-19"
	},
	{
		id: "og-5",
		name: "Northfield Medical Centre",
		kind: "clinic",
		city: "Northfield",
		licenceId: "CL-DEMO-4420",
		verification: "verified",
		contact: "admin@northfield.example",
		onboarded: "2025-02-27"
	}
];
var demoCatalogueRecords = [
	{
		id: "cat-1",
		brandName: "Panacet 500",
		genericName: "Paracetamol",
		form: "Tablet",
		compositionKey: "paracetamol-500mg-tablet",
		metadataCompleteness: .98,
		reviewState: "published",
		lastReviewed: "2026-07-30",
		source: "Demo catalogue provider"
	},
	{
		id: "cat-2",
		brandName: "Amoxil-C 500",
		genericName: "Amoxicillin",
		form: "Capsule",
		compositionKey: "amoxicillin-500mg-capsule",
		metadataCompleteness: .92,
		reviewState: "published",
		lastReviewed: "2026-07-22",
		source: "Demo catalogue provider"
	},
	{
		id: "cat-3",
		brandName: "Zyracet 10",
		genericName: "Cetirizine",
		form: "Tablet",
		compositionKey: "cetirizine-10mg-tablet",
		metadataCompleteness: .87,
		reviewState: "needs_review",
		lastReviewed: "2026-05-14",
		source: "Demo catalogue provider"
	},
	{
		id: "cat-4",
		brandName: "Glucomet 500",
		genericName: "Metformin hydrochloride",
		form: "Tablet",
		compositionKey: "metformin-500mg-tablet",
		metadataCompleteness: .95,
		reviewState: "published",
		lastReviewed: "2026-08-01",
		source: "Demo catalogue provider"
	},
	{
		id: "cat-5",
		brandName: "Ibulief 400",
		genericName: "Ibuprofen",
		form: "Tablet",
		compositionKey: "ibuprofen-400mg-tablet",
		metadataCompleteness: .74,
		reviewState: "needs_review",
		lastReviewed: "2026-04-02",
		source: "Demo catalogue provider"
	},
	{
		id: "cat-6",
		brandName: "Bronchaire 100",
		genericName: "Salbutamol",
		form: "Inhaler",
		compositionKey: "salbutamol-100mcg-inhaler",
		metadataCompleteness: .63,
		reviewState: "quarantined",
		lastReviewed: "2026-03-18",
		source: "Demo catalogue provider"
	}
];
var demoModerationReports = [
	{
		id: "mr-1",
		at: "2026-08-16T07:45:00.000Z",
		surface: "review",
		target: "Review on Riverside Community Pharmacy",
		reason: "Contains medical advice from a non-professional",
		reporter: "patient (demo)",
		severity: "high",
		status: "open"
	},
	{
		id: "mr-2",
		at: "2026-08-15T19:02:00.000Z",
		surface: "listing",
		target: "Bronchaire 100 listing",
		reason: "Price looks inconsistent with the pack size",
		reporter: "pharmacy (demo)",
		severity: "medium",
		status: "investigating"
	},
	{
		id: "mr-3",
		at: "2026-08-15T12:20:00.000Z",
		surface: "assistant answer",
		target: "Assistant answer #a-4412",
		reason: "User felt the answer was too close to advice",
		reporter: "patient (demo)",
		severity: "high",
		status: "open"
	},
	{
		id: "mr-4",
		at: "2026-08-14T09:31:00.000Z",
		surface: "pharmacy profile",
		target: "Harbourgate Chemists",
		reason: "Opening hours appear incorrect",
		reporter: "patient (demo)",
		severity: "low",
		status: "actioned"
	},
	{
		id: "mr-5",
		at: "2026-08-13T16:10:00.000Z",
		surface: "review",
		target: "Review on Ashgrove Pharmacy Group",
		reason: "Suspected spam",
		reporter: "system (demo)",
		severity: "low",
		status: "dismissed"
	}
];
var demoPlatformMetrics = [
	{
		date: "2026-08-03",
		patients: 1180,
		professionals: 42,
		searches: 4210
	},
	{
		date: "2026-08-05",
		patients: 1244,
		professionals: 44,
		searches: 4585
	},
	{
		date: "2026-08-07",
		patients: 1310,
		professionals: 46,
		searches: 4920
	},
	{
		date: "2026-08-09",
		patients: 1355,
		professionals: 47,
		searches: 4410
	},
	{
		date: "2026-08-11",
		patients: 1428,
		professionals: 49,
		searches: 5230
	},
	{
		date: "2026-08-13",
		patients: 1502,
		professionals: 51,
		searches: 5610
	},
	{
		date: "2026-08-15",
		patients: 1587,
		professionals: 54,
		searches: 5980
	}
];
/**
* Workspace data access.
*
* All reads go through this module so the professional workspaces never touch
* demo arrays directly. Each loader simulates provider latency, which is what
* drives the loading states in the UI. When a live provider is registered the
* function bodies change here and nothing in the routes does.
*/
var workspaceLoaders = {
	doctorPatients: () => settle(demoDoctorPatients, 420),
	appointments: () => settle(demoAppointments, 360),
	consultNotes: () => settle(demoConsultNotes, 300),
	prescriptionDrafts: () => settle(demoPrescriptionDrafts, 400),
	medicineHistory: () => settle(demoMedicineHistory, 280),
	inventory: () => settle(demoInventory, 420),
	pharmacyOrders: () => settle(demoPharmacyOrders, 380),
	verificationQueue: () => settle(demoVerificationQueue, 340),
	customers: () => settle(demoCustomers, 320),
	suppliers: () => settle(demoSuppliers, 300),
	sales: () => settle(demoSales, 360),
	platformUsers: () => settle(demoPlatformUsers, 420),
	organisations: () => settle(demoOrganisations, 340),
	catalogue: () => settle(demoCatalogueRecords, 360),
	moderation: () => settle(demoModerationReports, 320),
	auditEvents: () => settle(demoAuditEvents, 300),
	platformMetrics: () => settle(demoPlatformMetrics, 360)
};
/** Single entry point for workspace reads, with retry and error state. */
function useWorkspaceData(resource) {
	return useQuery({
		queryKey: ["workspace", resource],
		queryFn: () => workspaceLoaders[resource](),
		staleTime: 3e4,
		retry: 1
	});
}
var money = (value, currency = "USD") => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency,
	maximumFractionDigits: 2
}).format(value);
var shortDate = (iso) => new Date(iso).toLocaleDateString("en-GB", {
	day: "2-digit",
	month: "short",
	year: "numeric"
});
var shortDateTime = (iso) => new Date(iso).toLocaleString("en-GB", {
	day: "2-digit",
	month: "short",
	hour: "2-digit",
	minute: "2-digit"
});
var timeOnly = (iso) => new Date(iso).toLocaleTimeString("en-GB", {
	hour: "2-digit",
	minute: "2-digit"
});
var daysUntil = (dateOnly) => Math.round(((/* @__PURE__ */ new Date(`${dateOnly}T00:00:00.000Z`)).getTime() - Date.parse("2026-08-16T00:00:00.000Z")) / 864e5);
//#endregion
export { Timeline as a, money as c, timeOnly as d, useWorkspaceData as f, StatusPill as i, shortDate as l, AiAssistTag as n, WorkspaceSection as o, AsyncSection as r, daysUntil as s, AiAssistNotice as t, shortDateTime as u };
