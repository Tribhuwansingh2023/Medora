import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Overlay2, c as Title2, i as Description2, n as Cancel, o as Portal2, r as Content2, s as Root2, t as Action } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { C as useStore } from "./router-DnzDjJrL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Dt as FileScan, L as RotateCw, Wt as CircleCheck, Y as PencilLine, Yt as ChevronLeft, f as TriangleAlert, i as X, n as ZoomIn, pt as LoaderCircle, t as ZoomOut, u as Upload } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, m as cn, p as buttonVariants, u as demoPrescriptions } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader, n as Badge, o as EmptyState, r as ClinicalDisclaimer, s as IntegrationNotConnected } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Progress } from "./progress-732oQzQJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.prescriptions-Cp3FVYf_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/ui/alert-dialog.tsx";
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 17,
	columnNumber: 3
}, void 0));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 33,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 34,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 32,
	columnNumber: 3
}, void 0));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 50,
	columnNumber: 3
}, void 0);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 64,
	columnNumber: 3
}, void 0);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 78,
	columnNumber: 3
}, void 0));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 90,
	columnNumber: 3
}, void 0));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 103,
	columnNumber: 3
}, void 0));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 115,
	columnNumber: 3
}, void 0));
AlertDialogCancel.displayName = Cancel.displayName;
var _jsxFileName$1 = "/app/applet/src/components/prescription/ReviewerView.tsx";
function ReviewerView({ prescription, fileUrl, fileType, onSave, onCancel }) {
	const [items, setItems] = (0, import_react.useState)(prescription.items);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [editDraft, setEditDraft] = (0, import_react.useState)({});
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const [rotation, setRotation] = (0, import_react.useState)(0);
	const [showConfirm, setShowConfirm] = (0, import_react.useState)(false);
	const startEdit = (item) => {
		setEditingId(item.id);
		setEditDraft({
			medicineText: item.medicineText,
			strength: item.strength,
			frequency: item.frequency,
			duration: item.duration,
			notes: item.notes
		});
	};
	const saveEdit = (id) => {
		setItems((prev) => prev.map((it) => it.id === id ? {
			...it,
			...editDraft,
			userConfirmed: true
		} : it));
		setEditingId(null);
	};
	const cancelEdit = () => {
		setEditingId(null);
	};
	const toggleConfirm = (id) => {
		setItems((prev) => prev.map((it) => it.id === id ? {
			...it,
			userConfirmed: !it.userConfirmed
		} : it));
	};
	const verifyAll = () => {
		setItems((prev) => prev.map((it) => ({
			...it,
			userConfirmed: true
		})));
	};
	const allVerified = items.every((it) => it.userConfirmed);
	const unverifiedCount = items.filter((it) => !it.userConfirmed).length;
	const handleFinalSave = () => {
		onSave({
			...prescription,
			status: "reviewed",
			items
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col h-[calc(100vh-6rem)] overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex items-center justify-between border-b border-border bg-card px-4 py-3 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: onCancel,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-4 mr-1" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 116,
							columnNumber: 13
						}, this), " Back"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 115,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-semibold text-ink text-sm",
						children: [
							"Reviewing: ",
							prescription.fileName,
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "secondary",
								className: "ml-2 font-mono text-[10px]",
								children: "DEMO OCR"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 121,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 119,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: ["Uploaded ", new Date(prescription.uploadedAt).toLocaleDateString()]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 125,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 118,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 114,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [
						unverifiedCount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-sm font-medium text-warning-foreground",
							children: [unverifiedCount, " fields need review"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 132,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-sm font-medium text-emerald-600 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 137,
								columnNumber: 15
							}, this), " All verified"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 136,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: verifyAll,
							disabled: allVerified,
							children: "Verify All"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 140,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							onClick: () => setShowConfirm(true),
							disabled: !allVerified,
							children: "Save Prescription"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 148,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 130,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 113,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col lg:flex-row flex-1 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 border-r border-border bg-muted/20 flex flex-col min-h-0 lg:max-w-[50%]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between p-2 border-b border-border/50 bg-card/50",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-medium text-muted-foreground ml-2 uppercase tracking-wider",
							children: "Original Document"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 163,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-7",
									onClick: () => setZoom((z) => Math.max(.5, z - .2)),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZoomOut, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 173,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 167,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-7",
									onClick: () => setZoom((z) => Math.min(3, z + .2)),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZoomIn, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 181,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 175,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-7",
									onClick: () => setRotation((r) => (r + 90) % 360),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCw, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 189,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 183,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 166,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 162,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex-1 overflow-auto p-4 flex items-center justify-center relative",
						children: fileUrl ? fileType === "application/pdf" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
							src: fileUrl,
							className: "w-full h-full rounded shadow-sm border border-border bg-white",
							title: "PDF Preview"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 196,
							columnNumber: 17
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "transition-transform duration-200 ease-out origin-center",
							style: { transform: `scale(${zoom}) rotate(${rotation}deg)` },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: fileUrl,
								alt: "Prescription scan",
								className: "max-w-full rounded shadow-sm border border-border bg-white"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 208,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 202,
							columnNumber: 17
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center justify-center text-muted-foreground p-8 text-center max-w-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileScan, { className: "size-12 mb-4 opacity-50" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 217,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-medium",
									children: "Demo OCR Processing"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 218,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs mt-1",
									children: "We are showing simulated data for this demo. Normally, your uploaded document would appear here."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 219,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 216,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 193,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 161,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 flex flex-col min-h-0 bg-background overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-4 border-b border-border/50 bg-card/50 sticky top-0 z-10 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
								children: "Extracted Information"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 231,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Review and correct the extracted text below. Your corrections override OCR output."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 234,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 230,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-4 space-y-4",
							children: items.map((item) => {
								const isEditing = editingId === item.id;
								const isVerified = item.userConfirmed;
								const isLowConfidence = item.confidence < .8;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `rounded-lg border transition-colors ${isEditing ? "border-primary shadow-sm" : isVerified ? "border-border bg-card" : "border-warning/40 bg-warning/5"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: `flex items-center justify-between px-4 py-2 border-b ${isEditing ? "border-primary/20 bg-primary/5" : isVerified ? "border-border bg-secondary/30" : "border-warning/20 bg-warning/10"}`,
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "font-semibold text-sm",
													children: isEditing ? "Editing Field" : item.medicineText
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 268,
													columnNumber: 23
												}, this), !isEditing && /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5 ml-2",
													children: [/* @__PURE__ */ (void 0)(Progress, {
														value: Math.round(item.confidence * 100),
														className: "h-1.5 w-16"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 273,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "numeric text-[10px] text-muted-foreground",
														children: [Math.round(item.confidence * 100), "%"]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 277,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 272,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 267,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
												variant: isVerified ? "default" : "secondary",
												className: !isVerified ? "bg-warning/20 text-warning-foreground hover:bg-warning/30 border-warning/30" : "",
												children: isVerified ? "User verified ✓" : "Needs review"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 283,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 258,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "p-4",
											children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-1.5 sm:col-span-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Medicine Name" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 300,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															value: editDraft.medicineText || "",
															onChange: (e) => setEditDraft((d) => ({
																...d,
																medicineText: e.target.value
															})),
															autoFocus: true
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 301,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 299,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Strength" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 313,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															value: editDraft.strength || "",
															onChange: (e) => setEditDraft((d) => ({
																...d,
																strength: e.target.value
															}))
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 314,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 312,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Frequency" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 325,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															value: editDraft.frequency || "",
															onChange: (e) => setEditDraft((d) => ({
																...d,
																frequency: e.target.value
															}))
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 326,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 324,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Duration" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 337,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															value: editDraft.duration || "",
															onChange: (e) => setEditDraft((d) => ({
																...d,
																duration: e.target.value
															}))
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 338,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 336,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Additional Notes" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 349,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
															value: editDraft.notes || "",
															onChange: (e) => setEditDraft((d) => ({
																...d,
																notes: e.target.value
															}))
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 350,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 348,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "sm:col-span-2 flex justify-end gap-2 mt-2",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
															variant: "ghost",
															size: "sm",
															onClick: cancelEdit,
															children: "Cancel"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 361,
															columnNumber: 27
														}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
															size: "sm",
															onClick: () => saveEdit(item.id),
															children: "Save & Verify"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 368,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 360,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 298,
												columnNumber: 23
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "grid sm:grid-cols-2 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs text-muted-foreground font-medium mb-1",
														children: "Strength"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 376,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-sm",
														children: item.strength || "—"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 379,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 375,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs text-muted-foreground font-medium mb-1",
														children: "Frequency"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 382,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-sm flex items-center gap-1.5",
														children: [item.frequency || "—", isLowConfidence && !isVerified && /* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-3 text-warning-foreground" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 388,
															columnNumber: 31
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 385,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 381,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs text-muted-foreground font-medium mb-1",
														children: "Duration"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 393,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-sm flex items-center gap-1.5",
														children: item.duration || "—"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 396,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 392,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs text-muted-foreground font-medium mb-1",
														children: "Notes"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 401,
														columnNumber: 27
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-sm",
														children: item.notes || "—"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 404,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 400,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 374,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 296,
											columnNumber: 19
										}, this),
										!isEditing && /* @__PURE__ */ (void 0)("div", {
											className: "px-4 py-2 bg-muted/30 border-t border-border flex justify-end gap-2",
											children: [/* @__PURE__ */ (void 0)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => startEdit(item),
												children: [/* @__PURE__ */ (void 0)(PencilLine, { className: "size-3.5 mr-1" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 418,
													columnNumber: 25
												}, this), " Edit"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 413,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Button, {
												variant: isVerified ? "outline" : "secondary",
												size: "sm",
												onClick: () => toggleConfirm(item.id),
												className: !isVerified ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
												children: isVerified ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(X, { className: "size-3.5 mr-1" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 432,
													columnNumber: 29
												}, this), " Unverify"] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 431,
													columnNumber: 27
												}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 mr-1" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 436,
													columnNumber: 29
												}, this), " Verify"] }, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 435,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 420,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 412,
											columnNumber: 21
										}, this)
									]
								}, item.id, true, {
									fileName: _jsxFileName$1,
									lineNumber: 247,
									columnNumber: 17
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 240,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-4 mt-auto",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
								title: "Handwritten Prescription Safety",
								tone: "warning",
								children: "Handwritten or unclear text may be difficult to interpret automatically. Please verify every extracted field with the original prescription and consult a pharmacist or doctor if uncertain."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 448,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 447,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 229,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 159,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialog, {
				open: showConfirm,
				onOpenChange: setShowConfirm,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogTitle, { children: "Save Prescription" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 464,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogDescription, { children: "Please confirm that you have reviewed the extracted information against the original prescription. This data will be saved to your profile." }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 465,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 463,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogCancel, { children: "Cancel" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 472,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogAction, {
					onClick: handleFinalSave,
					children: "Confirm & Save"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 473,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 471,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 462,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 461,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 111,
		columnNumber: 5
	}, this);
}
var DemoOCRProvider = class {
	name = "Demo OCR";
	async extractPrescription(file) {
		await new Promise((resolve) => setTimeout(resolve, 1800));
		const lower = file.name.toLowerCase();
		let template = demoPrescriptions[0];
		if (lower.includes("diabet") || lower.includes("bp") || lower.includes("heart")) template = demoPrescriptions[1];
		else if (lower.includes("asthma") || lower.includes("allergy") || lower.includes("lung")) template = demoPrescriptions[2];
		else if (lower.includes("ortho") || lower.includes("pain") || lower.includes("bone")) template = demoPrescriptions[3];
		else {
			let hash = file.size;
			for (let i = 0; i < file.name.length; i++) {
				hash = (hash << 5) - hash + file.name.charCodeAt(i);
				hash |= 0;
			}
			const index = Math.abs(hash) % demoPrescriptions.length;
			template = demoPrescriptions[index] ?? demoPrescriptions[0];
		}
		return {
			prescription: {
				fileName: file.name.slice(0, 80),
				prescriberName: template.prescriberName,
				patientName: template.patientName
			},
			items: template.items.map((item) => ({
				medicineText: item.medicineText,
				strength: item.strength,
				frequency: item.frequency,
				duration: item.duration,
				notes: item.notes,
				confidence: item.confidence
			}))
		};
	}
};
var ocrProvider = new DemoOCRProvider();
var _jsxFileName = "/app/applet/src/routes/app.prescriptions.tsx?tsr-split=component";
var statusTone = {
	extracted: "Needs your review",
	reviewed: "Reviewed by you",
	verified: "Verified by pharmacy",
	rejected: "Rejected"
};
var OCR_STEPS = [
	"Uploading document",
	"Reading document",
	"Extracting text",
	"Identifying medicines",
	"Extracting prescription instructions",
	"Preparing review"
];
function PrescriptionsPage() {
	const [reviewState, setReviewState] = (0, import_react.useState)(null);
	const { state, savePrescription, addReminder } = useStore();
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const inputRef = (0, import_react.useRef)(null);
	const simulateTemplate = (template) => {
		setPreview({
			name: template.fileName,
			size: "340 KB"
		});
		setUploading(true);
		setProgress(0);
		const tick = window.setInterval(() => {
			setProgress((p) => Math.min(p + 3, 95));
		}, 50);
		window.setTimeout(() => {
			window.clearInterval(tick);
			setProgress(100);
			setUploading(false);
			const hydratedTemplate = {
				...template,
				id: `rx-${Date.now()}`,
				uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
				status: "extracted",
				items: template.items.map((i) => ({
					...i,
					id: `${i.id}-${Date.now()}`,
					userConfirmed: false
				}))
			};
			setReviewState({
				file: null,
				template: hydratedTemplate,
				step: OCR_STEPS.length
			});
		}, 1800);
	};
	const handleFile = async (file) => {
		const isImage = file.type.startsWith("image/");
		const isPdf = file.type === "application/pdf";
		if (!isImage && !isPdf) {
			toast.error("Unsupported file", { description: "Upload a photo (JPG, PNG) or a PDF." });
			return;
		}
		if (file.size > 12582912) {
			toast.error("That file is too large", { description: "Keep prescriptions under 12 MB." });
			return;
		}
		setPreview({
			name: file.name.slice(0, 80),
			size: `${(file.size / 1024).toFixed(0)} KB`,
			...isImage ? { url: URL.createObjectURL(file) } : {}
		});
		setUploading(true);
		setProgress(10);
		const tick = window.setInterval(() => setProgress((p) => Math.min(p + 3, 95)), 50);
		try {
			const ocrResult = await ocrProvider.extractPrescription(file);
			window.clearInterval(tick);
			setProgress(100);
			const hydratedTemplate = {
				id: `rx-${Date.now()}`,
				fileName: file.name.slice(0, 80),
				uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
				status: "extracted",
				prescriberName: ocrResult.prescription.prescriberName,
				patientName: ocrResult.prescription.patientName,
				items: ocrResult.items.map((i, index) => ({
					...i,
					id: `rx-item-${Date.now()}-${index}`,
					userConfirmed: false
				}))
			};
			setUploading(false);
			setProgress(0);
			setReviewState({
				file,
				url: isImage ? URL.createObjectURL(file) : void 0,
				template: hydratedTemplate,
				step: OCR_STEPS.length
			});
		} catch (err) {
			window.clearInterval(tick);
			setUploading(false);
			setProgress(0);
			toast.error("OCR Processing Failed", { description: "We couldn't extract the prescription reliably. Please try again or review manually." });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			reviewState ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fixed inset-0 z-50 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReviewerView, {
					prescription: reviewState.template,
					fileUrl: reviewState.url,
					fileType: reviewState.file?.type,
					onSave: (finalPrescription) => {
						savePrescription(finalPrescription);
						setReviewState(null);
						setPreview(null);
						toast.success("Prescription saved", { description: "You have verified the extracted information." });
					},
					onCancel: () => {
						if (confirm("Are you sure you want to cancel? Any unsaved review progress will be lost.")) {
							setReviewState(null);
							setPreview(null);
						}
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Prescriptions",
				demo: true,
				description: "Medora reads a prescription into structured lines and shows how confident the extraction is. Nothing is acted on until you confirm it."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-5 md:grid-cols-[minmax(0,1fr)_240px]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onDragOver: (e) => {
							e.preventDefault();
							setDragging(true);
						},
						onDragLeave: () => setDragging(false),
						onDrop: (e) => {
							e.preventDefault();
							setDragging(false);
							const f = e.dataTransfer.files?.[0];
							if (f) handleFile(f);
						},
						className: `flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors ${dragging ? "border-primary bg-primary-soft" : "border-border-strong bg-secondary/40"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-11 place-items-center rounded-lg bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileScan, {
									className: "size-5",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-4 font-semibold text-ink",
								children: "Drag a prescription here"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1.5 max-w-sm text-sm text-muted-foreground",
								children: "Photo or PDF, up to 12 MB. In this demo the extraction is simulated with a sample result, so your file is never uploaded anywhere."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 173,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "rx-file",
								className: "sr-only",
								children: "Prescription file"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 178,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "rx-file",
								ref: inputRef,
								type: "file",
								accept: "image/*,application/pdf",
								className: "hidden",
								onChange: (e) => {
									const f = e.target.files?.[0];
									if (f) handleFile(f);
								}
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								className: "mt-5",
								onClick: () => inputRef.current?.click(),
								disabled: uploading,
								children: [uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
									className: "size-4 animate-spin",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 28
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, {
									className: "size-4",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 86
								}, this), uploading ? "Extracting…" : "Choose a file"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 flex flex-col items-center gap-1.5 border-t border-border/60 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: "Or test with a clinical scenario:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 192,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-wrap justify-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => simulateTemplate(demoPrescriptions[0]),
											disabled: uploading,
											className: "rounded border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
											children: "Antibiotic & Infection (Apollo)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 196,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => simulateTemplate(demoPrescriptions[1]),
											disabled: uploading,
											className: "rounded border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
											children: "Diabetes & BP (Manipal)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 199,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => simulateTemplate(demoPrescriptions[2]),
											disabled: uploading,
											className: "rounded border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
											children: "Asthma & Allergy (Fortis)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 202,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => simulateTemplate(demoPrescriptions[3]),
											disabled: uploading,
											className: "rounded border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary",
											children: "Orthopedic & Pain (Max)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 205,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 195,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-lg border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-sm font-semibold text-ink",
							children: "Preview"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 13
						}, this), preview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3",
							children: [
								preview.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: preview.url,
									alt: `Preview of ${preview.name}`,
									className: "aspect-[3/4] w-full rounded-md border border-border object-cover"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 215,
									columnNumber: 32
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid aspect-[3/4] w-full place-items-center rounded-md border border-border bg-secondary text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileScan, {
										className: "size-6",
										"aria-hidden": true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 216,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 215,
									columnNumber: 172
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 truncate text-sm font-medium text-foreground",
									children: preview.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 218,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: preview.size
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 214,
							columnNumber: 24
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "The selected file appears here before extraction so you can check you picked the right page."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 24
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 212,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 9
				}, this), uploading && /* @__PURE__ */ (void 0)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "mb-1.5 flex items-center justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (void 0)("span", { children: [OCR_STEPS[Math.min(Math.floor(progress / 100 * OCR_STEPS.length), OCR_STEPS.length - 1)], "…"] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 230,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "numeric",
							children: [progress, "%"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)(Progress, { value: progress }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 236,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 228,
					columnNumber: 23
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationNotConnected, { integration: "ocr" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 240,
				columnNumber: 7
			}, this),
			state.prescriptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
				icon: FileScan,
				title: "No prescriptions yet",
				description: "Upload one to see how Medora structures each line with a confidence score."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 242,
				columnNumber: 43
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4",
				children: state.prescriptions.map((rx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "surface overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-semibold text-ink",
							children: rx.fileName
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 246,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								rx.prescriberName,
								" · uploaded",
								" ",
								new Date(rx.uploadedAt).toLocaleDateString()
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: rx.status === "verified" ? "default" : "secondary",
							children: statusTone[rx.status]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 252,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "divide-y divide-border",
						children: rx.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex flex-wrap items-start gap-4 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "font-medium text-ink",
										children: [
											item.medicineText,
											" ",
											item.strength
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm text-muted-foreground",
										children: [
											item.frequency,
											" · ",
											item.duration,
											item.notes ? ` · ${item.notes}` : ""
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 262,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
												value: Math.round(item.confidence * 100),
												className: "h-1.5 w-28"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 267,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "numeric text-xs text-muted-foreground",
												children: [Math.round(item.confidence * 100), "% extraction confidence"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 268,
												columnNumber: 25
											}, this),
											item.confidence < .85 && /* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-medium text-warning-foreground",
												children: "Low — check against the paper copy"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 272,
												columnNumber: 52
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 266,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 258,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									size: "sm",
									variant: item.userConfirmed ? "secondary" : "outline",
									onClick: () => {
										savePrescription({
											...rx,
											status: "reviewed",
											items: rx.items.map((i) => i.id === item.id ? {
												...i,
												userConfirmed: !i.userConfirmed
											} : i)
										});
									},
									children: item.userConfirmed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, {
											className: "size-3.5",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 289,
											columnNumber: 29
										}, this),
										" ",
										"Confirmed"
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 288,
										columnNumber: 47
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilLine, {
											className: "size-3.5",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 292,
											columnNumber: 29
										}, this),
										" ",
										"Confirm line"
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 291,
										columnNumber: 33
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 278,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									size: "sm",
									variant: "ghost",
									disabled: !item.userConfirmed,
									onClick: () => {
										addReminder({
											id: `rem-${Date.now()}`,
											medicineName: item.medicineText,
											strength: item.strength,
											times: ["08:00"],
											startDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
											endDate: new Date(Date.now() + 6048e5).toISOString().slice(0, 10),
											instruction: `${item.frequency} · ${item.duration}`,
											sourcePrescriptionId: rx.id,
											active: true,
											log: []
										});
										toast.success("Reminder created", { description: "Adjust the times on the reminders page." });
									},
									children: "Create reminder"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 296,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 277,
								columnNumber: 21
							}, this)]
						}, item.id, true, {
							fileName: _jsxFileName,
							lineNumber: 257,
							columnNumber: 39
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 256,
						columnNumber: 15
					}, this)]
				}, rx.id, true, {
					fileName: _jsxFileName,
					lineNumber: 243,
					columnNumber: 42
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 242,
				columnNumber: 194
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
				title: "Extraction can be wrong",
				tone: "warning",
				children: "Handwriting, scans and abbreviations all cause extraction errors. Medora shows a confidence score per line and never fills a gap by guessing. If a line looks wrong, trust the paper prescription and your pharmacist — not this screen."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 321,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/app/reminders",
					children: "Go to reminders"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 329,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 328,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 327,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 332,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 10
	}, this);
}
//#endregion
export { PrescriptionsPage as component };
