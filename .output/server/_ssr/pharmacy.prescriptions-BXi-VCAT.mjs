import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Ht as CircleX, Wt as CircleCheck, zt as ClipboardList } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as DataTable } from "./DataTable-BCSgB4Od.mjs";
import { f as useWorkspaceData, i as StatusPill, n as AiAssistTag, o as WorkspaceSection, r as AsyncSection, u as shortDateTime } from "./workspace-DXju8pVi.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy.prescriptions-BXi-VCAT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pharmacy.prescriptions.tsx?tsr-split=component";
var statusMeta = {
	waiting: {
		label: "Waiting",
		tone: "warning"
	},
	in_review: {
		label: "In review",
		tone: "info"
	},
	approved: {
		label: "Approved by pharmacist",
		tone: "positive"
	},
	rejected: {
		label: "Rejected by pharmacist",
		tone: "danger"
	}
};
function confidenceTone(confidence) {
	if (confidence >= .85) return "positive";
	if (confidence >= .65) return "warning";
	return "danger";
}
function VerificationQueuePage() {
	const queue = useWorkspaceData("verificationQueue");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [localState, setLocalState] = (0, import_react.useState)({});
	const [reason, setReason] = (0, import_react.useState)("");
	const rows = queue.data ?? [];
	const open = (0, import_react.useMemo)(() => rows.find((r) => r.id === openId) ?? null, [rows, openId]);
	const columns = [
		{
			key: "patient",
			header: "Patient / prescriber",
			sortValue: (r) => r.patient,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-medium text-ink",
				children: r.patient
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs text-muted-foreground",
				children: r.prescriber
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 18
			}, this)
		},
		{
			key: "prescriptionId",
			header: "Prescription",
			hideBelow: "md",
			sortValue: (r) => r.prescriptionId,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric text-sm",
				children: r.prescriptionId
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 18
			}, this)
		},
		{
			key: "received",
			header: "Received",
			hideBelow: "sm",
			sortValue: (r) => r.receivedAt,
			render: (r) => shortDateTime(r.receivedAt)
		},
		{
			key: "items",
			header: "Lines",
			hideBelow: "lg",
			align: "right",
			sortValue: (r) => r.items,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "numeric",
				children: r.items
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 18
			}, this)
		},
		{
			key: "confidence",
			header: "Extraction confidence",
			hideBelow: "md",
			sortValue: (r) => r.confidence,
			render: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
					label: `${Math.round(r.confidence * 100)}%`,
					tone: confidenceTone(r.confidence)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiAssistTag, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 18
			}, this)
		},
		{
			key: "status",
			header: "Status",
			sortValue: (r) => localState[r.id]?.status ?? r.status,
			render: (r) => {
				const state = localState[r.id]?.status ?? r.status;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, { ...statusMeta[state] }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 14
				}, this);
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Verification queue",
				demo: true,
				description: "Submitted prescriptions arrive here with machine-extracted lines. Every line requires pharmacist confirmation before anything is dispensed."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				tone: "warning",
				title: "The registered pharmacist makes every dispensing decision",
				children: "Extracted text and confidence scores are assistive only. They are never treated as verified, never auto-approved, and never used to infer a dose. Approving or rejecting a queue item records the decision as made by the reviewing pharmacist in this demo session."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
					title: "Submitted prescriptions",
					description: "Select an item to review its extracted lines and record a decision.",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AsyncSection, {
						query: queue,
						emptyIcon: ClipboardList,
						emptyTitle: "Nothing to verify",
						emptyDescription: "New prescription submissions will appear in this queue.",
						isEmpty: (d) => d.length === 0,
						children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
							rows: data,
							columns,
							getId: (r) => r.id,
							searchText: (r) => `${r.patient} ${r.prescriber} ${r.prescriptionId}`,
							searchPlaceholder: "Search by patient, prescriber or prescription id…",
							initialSort: {
								key: "received",
								direction: "desc"
							},
							pageSize: 6,
							onRowClick: (r) => {
								setOpenId(r.id);
								setReason("");
							},
							filters: [{
								key: "status",
								label: "Status",
								options: Object.entries(statusMeta).map(([value, meta]) => ({
									value,
									label: meta.label
								})),
								predicate: (r, v) => (localState[r.id]?.status ?? r.status) === v
							}],
							rowActions: (r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									setOpenId(r.id);
									setReason("");
								},
								children: "Review"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 32
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 22
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
						title: `Prescription ${open.prescriptionId}`,
						description: `${open.patient} · ${open.prescriber} · received ${shortDateTime(open.receivedAt)}`,
						actions: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, { ...statusMeta[localState[open.id]?.status ?? open.status] }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 190
						}, this),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-sm font-medium text-ink",
												children: "Extracted line count"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 130,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "numeric text-sm",
												children: open.items
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 133,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AiAssistTag, {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 134,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-sm font-medium text-ink",
											children: "Extraction confidence"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 137,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusPill, {
											label: `${Math.round(open.confidence * 100)}%`,
											tone: confidenceTone(open.confidence)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 140,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground",
										children: "This score reflects how confidently the assistive layer read the uploaded image. It is not a clinical judgement. The pharmacist must confirm every line against the original prescription before approving."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 17
									}, this),
									open.note && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-md bg-secondary p-3 text-sm text-muted-foreground",
										children: ["Note from the extraction pass: ", open.note]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 31
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 15
							}, this),
							localState[open.id]?.reason && /* @__PURE__ */ (void 0)("p", {
								className: "mt-4 rounded-md border border-border bg-secondary p-3 text-sm",
								children: ["Pharmacist decision reason: ", localState[open.id]?.reason]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 47
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-5 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "verify-reason",
									children: "Decision reason (required to approve or reject)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									id: "verify-reason",
									rows: 3,
									value: reason,
									onChange: (e) => setReason(e.target.value),
									placeholder: "Record why you are approving or rejecting this prescription…"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									disabled: reason.trim().length < 4,
									onClick: () => {
										setLocalState((prev) => ({
											...prev,
											[open.id]: {
												status: "approved",
												reason: reason.trim()
											}
										}));
										toast.success("Recorded as approved by you, the reviewing pharmacist (demo)");
										setReason("");
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 176,
										columnNumber: 19
									}, this), " Approve as pharmacist"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									disabled: reason.trim().length < 4,
									onClick: () => {
										setLocalState((prev) => ({
											...prev,
											[open.id]: {
												status: "rejected",
												reason: reason.trim()
											}
										}));
										toast("Recorded as rejected by you, the reviewing pharmacist (demo)");
										setReason("");
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleX, {
										className: "size-4",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 190,
										columnNumber: 19
									}, this), " Reject"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 19
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkspaceSection, {
						title: "Prescription detail",
						description: "Select a submission from the queue to review it.",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground",
							children: "No prescription selected."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 35
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 10
	}, this);
}
//#endregion
export { VerificationQueuePage as component };
