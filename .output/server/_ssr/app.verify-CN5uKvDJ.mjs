import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ScanLine, Gt as CircleAlert, P as Scan, dn as BadgeCheck, nn as CameraOff, r as Zap, tn as Camera, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as demoMedicines, f as Button, r as settle } from "./router-DnzDjJrL2.mjs";
import { d as RxPill, f as SafetyNotice, l as PageHeader, r as ClinicalDisclaimer, s as IntegrationNotConnected, u as ProvenanceLine } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { t as Skeleton } from "./skeleton-DMraq1ra.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.verify-CN5uKvDJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.verify.tsx?tsr-split=component";
/** Demo codes map to catalogue entries deterministically: MD- + first 6 chars of the id. */
var demoCodeFor = (m) => `MD-${m.id.replace(/[^a-z0-9]/gi, "").slice(0, 6).toUpperCase()}`;
function VerifyPage() {
	const [code, setCode] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)({ kind: "idle" });
	const [recentScans, setRecentScans] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem("medora_recent_scans");
			if (stored) setRecentScans(JSON.parse(stored));
		} catch (e) {
			console.warn("Failed to parse recent scans from localStorage", e);
		}
	}, []);
	const addToRecentScans = (med) => {
		setRecentScans((prev) => {
			const next = [med, ...prev.filter((m) => m.id !== med.id)].slice(0, 5);
			localStorage.setItem("medora_recent_scans", JSON.stringify(next));
			return next;
		});
	};
	const [isCameraActive, setIsCameraActive] = (0, import_react.useState)(false);
	const [cameraError, setCameraError] = (0, import_react.useState)(null);
	const [facingMode, setFacingMode] = (0, import_react.useState)("environment");
	const videoRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const startCamera = async () => {
		setCameraError(null);
		try {
			if (streamRef.current) streamRef.current.getTracks().forEach((track) => track.stop());
			const stream = await navigator.mediaDevices.getUserMedia({
				video: {
					facingMode,
					width: { ideal: 1280 },
					height: { ideal: 720 }
				},
				audio: false
			});
			streamRef.current = stream;
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				await videoRef.current.play().catch(() => {});
			}
			setIsCameraActive(true);
			toast.success("Camera activated", { description: "Point your camera at the barcode or 2D DataMatrix on the medicine pack." });
		} catch (err) {
			console.warn("Camera access error:", err);
			const msg = err instanceof Error && err.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access or use manual code entry." : "Could not access video device. You can test using the manual code input or test codes below.";
			setCameraError(msg);
			setIsCameraActive(false);
			toast.error("Camera unavailable", { description: msg });
		}
	};
	const stopCamera = () => {
		if (streamRef.current) {
			streamRef.current.getTracks().forEach((track) => track.stop());
			streamRef.current = null;
		}
		if (videoRef.current) videoRef.current.srcObject = null;
		setIsCameraActive(false);
	};
	const toggleFacingMode = () => {
		setFacingMode(facingMode === "environment" ? "user" : "environment");
		if (isCameraActive) startCamera();
	};
	(0, import_react.useEffect)(() => {
		return () => {
			if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
		};
	}, []);
	const verify = async (value) => {
		const trimmed = value.trim().toUpperCase();
		if (!trimmed) {
			toast.error("Enter a pack code to check.");
			return;
		}
		setResult({ kind: "loading" });
		const match = demoMedicines.find((m) => demoCodeFor(m) === trimmed);
		const next = await settle(match ? {
			kind: "match",
			medicine: match
		} : {
			kind: "unknown",
			code: trimmed
		}, 700);
		setResult(next);
		if (match) {
			toast.success(`Verified: ${match.brandName}`, { description: "Medicine successfully identified in the catalog." });
			addToRecentScans(match);
		} else toast.error("Unrecognized barcode or serialisation code.", { description: "Manual pack verification entry is required to confirm this item." });
	};
	const simulateScan = (med) => {
		const generatedCode = demoCodeFor(med);
		setCode(generatedCode);
		toast.info(`Barcode scanned from viewfinder: ${generatedCode}`);
		verify(generatedCode);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Pack Verification & Barcode Scanner",
				demo: true,
				description: "Verify GS1 barcodes and authentication serialization codes printed on medicine packaging against the Medora verified catalog."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IntegrationNotConnected, { integration: "barcode" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface overflow-hidden p-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-b border-border bg-muted/40 p-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `size-2.5 rounded-full ${isCameraActive ? "animate-pulse bg-emerald-500" : "bg-muted-foreground"}` }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 166,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-sm",
										children: isCameraActive ? "Live Camera Viewfinder" : "Optical Scanner"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 167,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary",
										children: "1D / 2D Barcode & GS1 DataMatrix"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: isCameraActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									size: "sm",
									onClick: toggleFacingMode,
									className: "h-8 gap-1.5 text-xs",
									title: "Flip camera",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 178,
										columnNumber: 21
									}, this), " Flip Camera"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 177,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "destructive",
									size: "sm",
									onClick: stopCamera,
									className: "h-8 gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CameraOff, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 21
									}, this), " Turn Off"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 176,
									columnNumber: 33
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "default",
									size: "sm",
									onClick: startCamera,
									className: "h-8 gap-1.5 text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Camera, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 19
									}, this), " Activate Scanner"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 183,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 175,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative flex min-h-[300px] w-full flex-col items-center justify-center bg-slate-950 text-white sm:min-h-[380px]",
						children: [isCameraActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative size-full overflow-hidden flex items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
								ref: videoRef,
								autoPlay: true,
								playsInline: true,
								muted: true,
								className: "size-full max-h-[420px] object-cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pointer-events-none absolute inset-0 flex items-center justify-center p-6",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative size-56 sm:size-72 rounded-2xl border-2 border-primary/70 shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -left-1 -top-1 size-6 border-l-4 border-t-4 border-primary rounded-tl-md" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 199,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -right-1 -top-1 size-6 border-r-4 border-t-4 border-primary rounded-tr-md" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 200,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-1 -left-1 size-6 border-b-4 border-l-4 border-primary rounded-bl-md" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-1 -right-1 size-6 border-b-4 border-r-4 border-primary rounded-br-md" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 202,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
											className: "absolute inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_8px_#3b82f6]",
											animate: { top: [
												"0%",
												"100%",
												"0%"
											] },
											transition: {
												repeat: Infinity,
												duration: 2.5,
												ease: "linear"
											}
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 205,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "absolute bottom-3 inset-x-0 text-center",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm",
												children: "Align barcode inside frame"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 214,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 213,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 197,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 192,
							columnNumber: 29
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center justify-center p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mb-3 rounded-full bg-white/5 p-4 ring-1 ring-white/10",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scan, { className: "size-8 text-white/70" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 222,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-semibold text-base text-white",
									children: "Camera Viewfinder Inactive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 max-w-sm text-xs text-white/60",
									children: "Tap Activate Scanner to open your device camera, or use the interactive test codes below to simulate an immediate optical scan."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 227,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									size: "sm",
									onClick: startCamera,
									className: "mt-4 gap-2 text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Camera, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 233,
										columnNumber: 17
									}, this), " Start Camera Viewfinder"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 232,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 220,
							columnNumber: 22
						}, this), cameraError && /* @__PURE__ */ (void 0)("div", {
							className: "absolute bottom-4 inset-x-4 max-w-md mx-auto rounded-lg bg-red-950/90 border border-red-500/30 p-3 text-left backdrop-blur-sm",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 text-red-400 shrink-0 mt-0.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 239,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-red-200",
									children: cameraError
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 238,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 237,
							columnNumber: 27
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 191,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-t border-border bg-card p-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-medium text-muted-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "size-3.5 text-amber-500" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 249,
									columnNumber: 15
								}, this), "Simulate barcode detection on viewfinder:"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 248,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap gap-1.5",
								children: [demoMedicines.slice(0, 4).map((med) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => simulateScan(med),
									className: "rounded border border-border bg-muted/50 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary",
									children: [
										demoCodeFor(med),
										" (",
										med.brandName,
										")"
									]
								}, med.id, true, {
									fileName: _jsxFileName,
									lineNumber: 253,
									columnNumber: 53
								}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => {
										const badCode = "MD-INVALID-99";
										setCode(badCode);
										verify(badCode);
									},
									className: "rounded border border-destructive/30 bg-destructive/10 px-2.5 py-1 font-mono text-[11px] font-medium text-destructive transition-colors hover:bg-destructive/20",
									children: "Simulate Unknown Code"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 256,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 252,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				className: "surface p-5",
				onSubmit: (e) => {
					e.preventDefault();
					verify(code);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: "pack-code",
						className: "font-semibold text-sm",
						children: "Manual Pack Serialization Code Lookup"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 273,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground mt-1 mb-3",
						children: "If the barcode on your box is damaged or smudged, enter the alphanumeric code printed near the expiry date."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 276,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "pack-code",
							value: code,
							onChange: (e) => setCode(e.target.value),
							placeholder: "e.g. MD-MEDPAR",
							className: "font-mono text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 282,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							disabled: result.kind === "loading",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScanLine, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 284,
								columnNumber: 13
							}, this), result.kind === "loading" ? "Verifying…" : "Check Pack"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 283,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 281,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 269,
				columnNumber: 7
			}, this),
			result.kind === "loading" && /* @__PURE__ */ (void 0)("div", {
				className: "surface space-y-3 p-5",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-4 rounded-full" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 293,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-48" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 294,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 292,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Skeleton, { className: "h-6 w-1/3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 296,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-full" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 297,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Skeleton, { className: "h-4 w-2/3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 298,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 291,
				columnNumber: 37
			}, this),
			result.kind === "match" && /* @__PURE__ */ (void 0)("section", {
				className: "surface p-5 sm:p-6",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-success/35 bg-success-soft px-3 py-1 text-xs font-semibold text-success",
							children: [/* @__PURE__ */ (void 0)(BadgeCheck, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 305,
								columnNumber: 15
							}, this), " Authentic Demo Catalog Record Match"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 304,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)(RxPill, { prescriptionOnly: result.medicine.prescriptionOnly }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 308,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 303,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("h2", {
						className: "mt-3 text-2xl font-bold tracking-tight",
						children: result.medicine.brandName
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 311,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-muted-foreground font-medium",
						children: [
							result.medicine.genericName,
							" · ",
							result.medicine.form,
							" ·",
							" ",
							result.medicine.packSize
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("dl", {
						className: "mt-5 grid gap-4 border-t border-border pt-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground font-semibold",
								children: "Active Composition"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 321,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1 text-sm font-medium",
								children: result.medicine.activeIngredients.map((i) => `${i.name} ${i.strength}`).join(" + ")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 324,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 320,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground font-semibold",
								children: "Manufacturer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 329,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1 text-sm font-medium",
								children: result.medicine.manufacturer
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 332,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("dt", {
								className: "text-xs uppercase tracking-wide text-muted-foreground font-semibold",
								children: "Storage & Integrity"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 337,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("dd", {
								className: "mt-1 text-sm font-medium",
								children: result.medicine.storage
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 340,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 336,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 319,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-4 border-t border-border pt-4",
						children: /* @__PURE__ */ (void 0)(ProvenanceLine, { provenance: result.medicine.provenance }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 347,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 346,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-5 flex flex-wrap gap-2.5",
						children: [/* @__PURE__ */ (void 0)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (void 0)(Link, {
								to: "/app/medicine/$medicineId",
								params: { medicineId: result.medicine.id },
								children: "View Full Monograph & Equivalents"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 352,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 351,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (void 0)(Link, {
								to: "/app/compare",
								search: {
									key: result.medicine.compositionKey,
									name: result.medicine.brandName
								},
								children: "Compare Prices Across Pharmacies"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 359,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 358,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 302,
				columnNumber: 35
			}, this),
			result.kind === "unknown" && /* @__PURE__ */ (void 0)(SafetyNotice, {
				tone: "warning",
				title: `Unverified Pack Code: ${result.code}`,
				children: "No record in the catalog matches that code. This does not definitively indicate that the packaging is counterfeit — Medora operates with an explicit provider boundary and requires a connected national serialization registry (e.g. GS1 / CDSCO Traceability) to verify unlisted batches. If you have concerns regarding packaging authenticity, consult your dispensing pharmacy."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 370,
				columnNumber: 37
			}, this),
			recentScans.length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "mt-8 space-y-3",
				children: [/* @__PURE__ */ (void 0)("h3", {
					className: "font-semibold text-sm tracking-tight text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (void 0)(ScanLine, {
						className: "size-4 text-primary",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 382,
						columnNumber: 13
					}, this), "Recent Scans"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 381,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: recentScans.map((med, index) => /* @__PURE__ */ (void 0)("div", {
						className: "surface p-3 flex items-center gap-3 cursor-pointer transition-colors hover:border-primary/50",
						onClick: () => verify(demoCodeFor(med)),
						children: /* @__PURE__ */ (void 0)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "font-medium text-sm text-foreground truncate",
								children: med.brandName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 388,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground truncate",
								children: [
									med.genericName,
									" • ",
									demoCodeFor(med)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 391,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 387,
							columnNumber: 17
						}, this)
					}, `${med.id}-${index}`, false, {
						fileName: _jsxFileName,
						lineNumber: 386,
						columnNumber: 46
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 385,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 380,
				columnNumber: 34
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClinicalDisclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 399,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 156,
		columnNumber: 10
	}, this);
}
//#endregion
export { VerifyPage as component };
