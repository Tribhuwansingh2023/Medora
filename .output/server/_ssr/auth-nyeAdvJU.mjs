import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { B as loadGoogleIdentityScript, H as requestGoogleOAuthToken, I as decodeGoogleJwt, L as fetchGoogleUserInfo, R as getGoogleClientId, U as setStoredGoogleClientId, h as SIGNUP_ROLES, l as ROLE_HOME, m as Route$47, x as useAuth } from "./router-DnzDjJrL.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Settings, At as Eye, C as Sparkles, O as ShieldCheck, S as Stethoscope, Wt as CircleCheck, Zt as Check, c as User, ct as MapPin, dt as Lock, gn as ArrowLeft, gt as KeyRound, jt as EyeOff, lt as Mail, on as Building2, pt as LoaderCircle, q as Phone, r as Zap, vn as Activity, yt as HeartPulse, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, m as cn } from "./router-DnzDjJrL2.mjs";
import { i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D07PUjjD.mjs";
import { c as Logo } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Switch } from "./switch-ZzRHu5Zc.mjs";
import { n as useTransform, r as useMotionValue, t as useSpring } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-nyeAdvJU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/auth/Auth3DVisuals.tsx";
var ROLE_HERO_DATA = {
	patient: {
		headline: "Find medicines and manage prescriptions with confidence.",
		subheadline: "Search any medicine across verified local pharmacies, compare transparent pricing, and receive automated dosage safety alerts.",
		badge: "PATIENT & CAREGIVER WORKSPACE",
		roleTheme: {
			bgGradient: "from-[#0b3d36] via-[#082a25] to-[#041714]",
			orbPrimary: "rgba(20, 184, 166, 0.35)",
			orbSecondary: "rgba(16, 185, 129, 0.3)",
			orbAccent: "rgba(45, 212, 191, 0.4)",
			accentGlow: "from-emerald-400 to-teal-300",
			metricGradient: "from-teal-400 via-emerald-400 to-cyan-300"
		},
		statLabel: "Licensed Dispensary Network",
		statValue: "140+ Pharmacies",
		metricSub: "94% City-wide Availability",
		highlights: [
			{
				title: "AI Prescription Parsing",
				subtitle: "Instant OCR extraction in under 3 seconds"
			},
			{
				title: "National Medicine Catalog",
				subtitle: "Verified generics & branded price transparency"
			},
			{
				title: "Drug-Drug Safety Shield",
				subtitle: "Automatic contraindication & dosage audit"
			}
		]
	},
	pharmacy: {
		headline: "Grow your dispensary with AI-powered operations.",
		subheadline: "Real-time demand forecasting, automated digital prescription intake, and instant local delivery fulfillment across your city.",
		badge: "PHARMACY OPERATIONS DECK",
		roleTheme: {
			bgGradient: "from-[#0d2847] via-[#091b33] to-[#040e1c]",
			orbPrimary: "rgba(59, 130, 246, 0.35)",
			orbSecondary: "rgba(99, 102, 241, 0.3)",
			orbAccent: "rgba(14, 165, 233, 0.4)",
			accentGlow: "from-blue-400 to-cyan-300",
			metricGradient: "from-blue-400 via-indigo-400 to-cyan-300"
		},
		statLabel: "Intake Velocity & Sync",
		statValue: "100% Digital Rx",
		metricSub: "99.8% Inventory Accuracy",
		highlights: [
			{
				title: "Zero-Latency Rx Intake",
				subtitle: "Instant digital prescription & stock synchronization"
			},
			{
				title: "AI Predictive Restock",
				subtitle: "7-day localized demand forecast with reorder alerts"
			},
			{
				title: "Fulfillment Pipeline",
				subtitle: "Express pickup & geo-routed local delivery"
			}
		]
	},
	doctor: {
		headline: "Streamline clinical consults with verified drug safety.",
		subheadline: "Author digital prescriptions with 0-latency contraindication checks, patient medication timelines, and evidence-backed dosage guides.",
		badge: "CLINICIAN DESK & E-PRESCRIBING",
		roleTheme: {
			bgGradient: "from-[#0f3542] via-[#09222b] to-[#041117]",
			orbPrimary: "rgba(6, 182, 212, 0.35)",
			orbSecondary: "rgba(20, 184, 166, 0.3)",
			orbAccent: "rgba(56, 189, 248, 0.4)",
			accentGlow: "from-cyan-400 to-sky-300",
			metricGradient: "from-cyan-400 via-teal-300 to-sky-200"
		},
		statLabel: "Clinical Safety Audit",
		statValue: "0-Latency Grounding",
		metricSub: "Verified Evidence Database",
		highlights: [
			{
				title: "Digital Prescription Engine",
				subtitle: "One-click dosage calculations & repeat templates"
			},
			{
				title: "Live Interaction Scanner",
				subtitle: "Multi-drug & allergen contraindication detection"
			},
			{
				title: "Unified Patient Timelines",
				subtitle: "Comprehensive longitudinal medication histories"
			}
		]
	},
	admin: {
		headline: "Comprehensive multi-tenant healthcare governance.",
		subheadline: "Monitor dispensary compliance, audit clinical intelligence logs, and supervise national drug catalog updates seamlessly.",
		badge: "ADMINISTRATIVE CONTROL SUITE",
		roleTheme: {
			bgGradient: "from-[#1e1b4b] via-[#141236] to-[#0a081c]",
			orbPrimary: "rgba(139, 92, 246, 0.35)",
			orbSecondary: "rgba(99, 102, 241, 0.3)",
			orbAccent: "rgba(168, 85, 247, 0.4)",
			accentGlow: "from-violet-400 to-fuchsia-300",
			metricGradient: "from-violet-400 via-purple-400 to-indigo-300"
		},
		statLabel: "Platform Integrity & Audits",
		statValue: "99.99% Uptime",
		metricSub: "HIPAA & ISO 27001 Compliant",
		highlights: [
			{
				title: "License Verification Hub",
				subtitle: "Automated regulatory dispensary credentialing"
			},
			{
				title: "Full Audit Trail Logging",
				subtitle: "End-to-end clinical AI decisions & data access"
			},
			{
				title: "Catalog Master Control",
				subtitle: "Real-time pricing, batches & recall distribution"
			}
		]
	}
};
/**
* 3D Glass Pill Element with specular reflection and inner glow
*/
var Floating3DPill = ({ className, rotateDeg = -15, delay = 0 }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			y: 0,
			rotate: rotateDeg
		},
		animate: {
			y: [
				-8,
				8,
				-8
			],
			rotate: [
				rotateDeg - 4,
				rotateDeg + 4,
				rotateDeg - 4
			]
		},
		transition: {
			duration: 5,
			repeat: Infinity,
			ease: "easeInOut",
			delay
		},
		className: cn("pointer-events-none relative flex h-14 w-28 items-center rounded-full border border-white/40 p-1 shadow-[0_16px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl", className),
		style: {
			background: "linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 100%)",
			boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.2), 0 20px 40px rgba(0,0,0,0.4)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative flex h-full w-1/2 items-center justify-center rounded-l-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-inner",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-1.5 left-2.5 h-2.5 w-6 rounded-full bg-white/60 blur-[1px]" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 201,
				columnNumber: 9
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartPulse, { className: "size-4 text-white drop-shadow-sm" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 202,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 200,
			columnNumber: 7
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative flex h-full w-1/2 items-center justify-center rounded-r-full bg-white/20 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-1.5 right-2.5 h-2.5 w-6 rounded-full bg-white/40 blur-[1px]" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 206,
				columnNumber: 9
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5 text-white/90" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 207,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 205,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 176,
		columnNumber: 5
	}, void 0);
};
/**
* 3D Glass Shield Badge
*/
var Floating3DShield = ({ className, delay = .5 }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			y: 0,
			rotate: 10
		},
		animate: {
			y: [
				6,
				-6,
				6
			],
			rotate: [
				8,
				14,
				8
			]
		},
		transition: {
			duration: 4.5,
			repeat: Infinity,
			ease: "easeInOut",
			delay
		},
		className: cn("pointer-events-none relative flex size-14 items-center justify-center rounded-2xl border border-white/40 shadow-[0_16px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl", className),
		style: {
			background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(20, 184, 166, 0.2) 100%)",
			boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.7), 0 15px 35px rgba(0,0,0,0.3)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-1 left-2 size-4 rounded-full bg-white/50 blur-[1px]" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 244,
			columnNumber: 7
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-7 text-emerald-300 drop-shadow-[0_2px_8px_rgba(16,185,129,0.5)]" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 245,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 221,
		columnNumber: 5
	}, void 0);
};
/**
* High-End 3D Interactive Medical Hero Box
* - Strictly NO background grid lines
* - Multi-layered 3D space with specular lighting, glass refraction, floating 3D pills, and smooth parallax
*/
var Auth3DHeroVisual = ({ role, currentStep = 1, totalSteps = 3, stepTitle = "Personal Info", isLogin = false }) => {
	const data = ROLE_HERO_DATA[role] || ROLE_HERO_DATA.patient;
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = {
		damping: 22,
		stiffness: 110
	};
	const rotateX = useSpring(useTransform(mouseY, [-.5, .5], [10, -10]), springConfig);
	const rotateY = useSpring(useTransform(mouseX, [-.5, .5], [-10, 10]), springConfig);
	const sheenX = useSpring(useTransform(mouseX, [-.5, .5], [20, 80]), springConfig);
	const sheenY = useSpring(useTransform(mouseY, [-.5, .5], [20, 80]), springConfig);
	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		mouseX.set(x);
		mouseY.set(y);
	};
	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		className: cn("relative flex h-full min-h-[640px] w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/15 p-8 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 lg:p-10", "bg-gradient-to-br", data.roleTheme.bgGradient),
		style: { perspective: 1200 },
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				animate: {
					scale: [
						1,
						1.15,
						1
					],
					opacity: [
						.6,
						.85,
						.6
					],
					x: [
						-20,
						20,
						-20
					],
					y: [
						-10,
						15,
						-10
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "pointer-events-none absolute -top-32 -left-32 size-[420px] rounded-full blur-[90px]",
				style: { backgroundColor: data.roleTheme.orbPrimary }
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 319,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				animate: {
					scale: [
						1,
						1.2,
						1
					],
					opacity: [
						.5,
						.8,
						.5
					],
					x: [
						20,
						-15,
						20
					],
					y: [
						15,
						-20,
						15
					]
				},
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1
				},
				className: "pointer-events-none absolute -bottom-32 -right-32 size-[460px] rounded-full blur-[100px]",
				style: { backgroundColor: data.roleTheme.orbSecondary }
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 330,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				animate: {
					scale: [
						.9,
						1.15,
						.9
					],
					opacity: [
						.4,
						.7,
						.4
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2
				},
				className: "pointer-events-none absolute top-1/2 left-1/3 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]",
				style: { backgroundColor: data.roleTheme.orbAccent }
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 346,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Floating3DPill, {
				className: "absolute top-12 right-6 z-0 opacity-85 lg:right-10",
				rotateDeg: -18,
				delay: 0
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 362,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Floating3DShield, {
				className: "absolute top-48 right-4 z-0 opacity-80 lg:right-8",
				delay: .8
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 367,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				className: "pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300",
				style: { background: useTransform([sheenX, sheenY], ([x, y]) => `radial-gradient(circle 500px at ${x}% ${y}%, rgba(255,255,255,0.22), transparent 70%)`) }
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 373,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 via-transparent to-white/5" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 385,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-20 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex size-11 items-center justify-center rounded-2xl border border-white/30 bg-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl",
						style: { boxShadow: "inset 0 1px 2px rgba(255,255,255,0.5)" },
						children: [
							role === "patient" && /* @__PURE__ */ (void 0)(User, { className: "size-5 text-white" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 396,
								columnNumber: 36
							}, void 0),
							role === "pharmacy" && /* @__PURE__ */ (void 0)(Building2, { className: "size-5 text-white" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 397,
								columnNumber: 37
							}, void 0),
							role === "doctor" && /* @__PURE__ */ (void 0)(Stethoscope, { className: "size-5 text-white" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 398,
								columnNumber: 35
							}, void 0),
							role === "admin" && /* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-5 text-white" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 399,
								columnNumber: 34
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 390,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[11px] font-extrabold tracking-widest uppercase text-white/75",
						children: data.badge
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 402,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs font-bold text-white/95",
						children: "Verified Healthcare Ecosystem"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 405,
						columnNumber: 13
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 401,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 389,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-xl",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "relative flex size-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 413,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative inline-flex size-2 rounded-full bg-emerald-400" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 414,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 412,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "tracking-wide",
						children: "Live Network"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 416,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 411,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 388,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				style: {
					rotateX,
					rotateY,
					transformStyle: "preserve-3d"
				},
				className: "relative z-20 my-6 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						initial: {
							opacity: 0,
							y: 15
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .4 },
						style: { transform: "translateZ(30px)" },
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-3xl font-extrabold leading-[1.18] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] xl:text-4xl",
							children: data.headline
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 434,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "max-w-md text-sm leading-relaxed font-normal text-white/80",
							children: data.subheadline
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 437,
							columnNumber: 11
						}, void 0)]
					}, role, true, {
						fileName: _jsxFileName$2,
						lineNumber: 426,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { transform: "translateZ(45px)" },
						className: "space-y-3 pt-1",
						children: data.highlights.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: .15 + idx * .1,
								duration: .4
							},
							whileHover: {
								scale: 1.025,
								x: 6
							},
							className: "group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] p-3.5 text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/[0.14]",
							style: { boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 12px 28px rgba(0, 0, 0, 0.25)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 461,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/25 to-white/5 shadow-inner border border-white/30 text-emerald-300",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4.5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 464,
										columnNumber: 17
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 463,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-xs font-bold text-white tracking-wide",
										children: item.title
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 467,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "truncate text-[11px] text-white/70",
										children: item.subtitle
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 470,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 466,
									columnNumber: 15
								}, void 0)
							]
						}, item.title, true, {
							fileName: _jsxFileName$2,
							lineNumber: 448,
							columnNumber: 13
						}, void 0))
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 443,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						style: { transform: "translateZ(60px)" },
						whileHover: {
							translateY: -4,
							scale: 1.01
						},
						className: "relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-r from-white/[0.12] to-white/[0.04] p-4.5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-2xl",
						style: { boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 20px 40px rgba(0,0,0,0.35)" },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex size-7 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300 shadow-inner",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "size-4 animate-pulse" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 491,
										columnNumber: 17
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 490,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-bold tracking-wide text-white/95",
									children: data.statLabel
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 494,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-[10px] text-white/70",
									children: data.metricSub
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 497,
									columnNumber: 17
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 493,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 489,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: cn("rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-xs font-extrabold text-white shadow-sm backdrop-blur-md"),
								children: data.statValue
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 502,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 488,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3.5 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative h-2 flex-1 overflow-hidden rounded-full bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
									initial: { width: "0%" },
									animate: { width: "94%" },
									transition: {
										duration: 1.2,
										ease: "easeOut"
									},
									className: cn("h-full rounded-full bg-gradient-to-r shadow-[0_0_12px_rgba(45,212,191,0.8)]", data.roleTheme.accentGlow)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 514,
									columnNumber: 15
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 513,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[11px] font-bold text-white/90",
								children: "94% Active"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 524,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 512,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 479,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 421,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-20",
				children: !isLogin ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-2xl border border-white/20 bg-black/30 p-4 shadow-xl backdrop-blur-xl",
					style: { boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2)" },
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-2 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[10px] font-extrabold uppercase tracking-widest text-white/70",
							children: "GETTING STARTED"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 541,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-bold text-emerald-300",
							children: [
								"Step ",
								currentStep,
								" of ",
								totalSteps,
								": ",
								stepTitle
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 544,
							columnNumber: 15
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 540,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-2",
						children: Array.from({ length: totalSteps }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-2 flex-1 overflow-hidden rounded-full bg-white/20",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
								initial: { width: i + 1 < currentStep ? "100%" : i + 1 === currentStep ? "60%" : "0%" },
								animate: { width: i + 1 <= currentStep ? "100%" : "0%" },
								transition: { duration: .5 },
								className: cn("h-full transition-all", i + 1 <= currentStep ? "bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_8px_rgba(52,211,153,0.7)]" : "bg-transparent")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 554,
								columnNumber: 19
							}, void 0)
						}, i, false, {
							fileName: _jsxFileName$2,
							lineNumber: 550,
							columnNumber: 17
						}, void 0))
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 548,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 534,
					columnNumber: 11
				}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between rounded-2xl border border-white/20 bg-black/30 px-4.5 py-3 text-xs text-white/90 shadow-xl backdrop-blur-xl",
					style: { boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2)" },
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "size-4 text-emerald-300 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 586,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-xs text-white/90",
							children: "End-to-End Encrypted Health Records"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 587,
							columnNumber: 15
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 585,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-md border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md",
						children: "HIPAA & NABH Ready"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 591,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 579,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 532,
				columnNumber: 7
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 308,
		columnNumber: 5
	}, void 0);
};
/**
* 3D Interactive Role Selection Card with Spring physics & Hover Elevation
*/
var RoleSelectionCard3D = ({ roleKey, title, description, icon: Icon, badge, selected = false, onClick }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, {
		type: "button",
		onClick,
		whileHover: {
			y: -8,
			scale: 1.02
		},
		whileTap: { scale: .98 },
		className: cn("group relative flex flex-col justify-between rounded-3xl border-2 p-6 text-left transition-all duration-300 shadow-sm", selected ? "border-primary bg-primary/5 ring-4 ring-primary/15 shadow-xl" : "border-border/80 bg-card hover:border-primary/50 hover:bg-muted/30 hover:shadow-lg"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: cn("flex size-13 items-center justify-center rounded-2xl transition-all duration-300 shadow-sm", selected ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20" : "bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary"),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-6 stroke-[2.2]" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 644,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 636,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: cn("rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider transition-colors", selected ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"),
					children: badge
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 646,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 635,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-primary transition-colors",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 659,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs leading-relaxed text-muted-foreground font-normal",
					children: description
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 662,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 658,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs font-bold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "group-hover:translate-x-1 transition-transform",
					children: "Select & Continue →"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 668,
					columnNumber: 9
				}, void 0), selected && /* @__PURE__ */ (void 0)("span", {
					className: "flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-extrabold",
					children: "✓"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 672,
					columnNumber: 11
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 667,
				columnNumber: 7
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 622,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$1 = "/app/applet/src/components/auth/GoogleAuthModal.tsx";
function GoogleAuthModal({ open, onOpenChange, next, defaultRole = "patient" }) {
	const auth = useAuth();
	const [selectedRole, setSelectedRole] = (0, import_react.useState)(defaultRole);
	const [rememberMe, setRememberMe] = (0, import_react.useState)(true);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [gsiLoaded, setGsiLoaded] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("auth");
	const [customClientId, setCustomClientId] = (0, import_react.useState)("");
	const [activeClientId, setActiveClientId] = (0, import_react.useState)("");
	const googleBtnContainerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open) {
			const cid = getGoogleClientId();
			setActiveClientId(cid);
			setCustomClientId(cid);
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		let mounted = true;
		loadGoogleIdentityScript().then((loaded) => {
			if (!mounted) return;
			setGsiLoaded(loaded);
			if (loaded && typeof window !== "undefined") {
				const win = window;
				const cid = getGoogleClientId();
				if (win.google?.accounts?.id && cid && googleBtnContainerRef.current) try {
					win.google.accounts.id.initialize({
						client_id: cid,
						callback: async (res) => {
							if (res.credential) {
								const profile = decodeGoogleJwt(res.credential);
								if (profile) {
									setBusy(true);
									const authRes = await auth.signInWithGoogle(next, {
										email: profile.email,
										name: profile.name,
										avatarUrl: profile.picture,
										role: selectedRole,
										rememberMe
									});
									setBusy(false);
									if (authRes.error) toast.error(`Google Sign-In failed: ${authRes.error}`);
									else {
										toast.success(`Successfully authenticated as ${profile.name} (${profile.email})`);
										onOpenChange(false);
									}
								}
							}
						},
						auto_select: false,
						cancel_on_tap_outside: true
					});
					googleBtnContainerRef.current.innerHTML = "";
					win.google.accounts.id.renderButton(googleBtnContainerRef.current, {
						theme: "filled_blue",
						size: "large",
						text: "continue_with",
						shape: "rectangular",
						width: 320
					});
				} catch (e) {
					console.warn("GSI Button Render warning:", e);
				}
			}
		});
		return () => {
			mounted = false;
		};
	}, [
		open,
		selectedRole,
		rememberMe,
		auth,
		next,
		onOpenChange
	]);
	const handleLiveGoogleOAuth = async () => {
		setBusy(true);
		try {
			const tokenRes = await requestGoogleOAuthToken(activeClientId || void 0);
			if (tokenRes.error) {
				toast.error(`Google Authorization Error: ${tokenRes.error}`);
				setBusy(false);
				return;
			}
			if (tokenRes.accessToken) {
				toast.loading("Retrieving verified Google profile...");
				const userInfo = await fetchGoogleUserInfo(tokenRes.accessToken);
				toast.dismiss();
				if (userInfo?.email) {
					const authRes = await auth.signInWithGoogle(next, {
						email: userInfo.email,
						name: userInfo.name,
						avatarUrl: userInfo.picture,
						role: selectedRole,
						rememberMe
					});
					if (authRes.error) toast.error(`Sign in error: ${authRes.error}`);
					else {
						toast.success(`Signed in via Google as ${userInfo.name} (${userInfo.email})`);
						onOpenChange(false);
					}
					return;
				}
			}
			const authRes = await auth.signInWithGoogle(next, {
				role: selectedRole,
				rememberMe
			});
			if (authRes.error) toast.error(authRes.error);
			else {
				toast.success("Signed in with Google Account");
				onOpenChange(false);
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to authenticate with Google");
		} finally {
			setBusy(false);
		}
	};
	const handleFastTrackGoogleSignIn = async (email, name) => {
		setBusy(true);
		try {
			const authRes = await auth.signInWithGoogle(next, {
				email,
				name,
				avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`,
				role: selectedRole,
				rememberMe
			});
			if (authRes.error) toast.error(`Authentication error: ${authRes.error}`);
			else {
				toast.success(`Authenticated with Google profile: ${email}`);
				onOpenChange(false);
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to sign in with Google");
		} finally {
			setBusy(false);
		}
	};
	const handleSaveClientId = () => {
		setStoredGoogleClientId(customClientId);
		setActiveClientId(getGoogleClientId());
		toast.success("Google OAuth Client ID updated.");
		setActiveTab("auth");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "max-w-md p-0 overflow-hidden sm:rounded-2xl border-2 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-muted/40 border-b border-border p-5 text-center relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveTab((t) => t === "auth" ? "settings" : "auth"),
							title: "Configure Google OAuth",
							className: "absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Settings, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 255,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 247,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-card border border-border shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								className: "size-6",
								viewBox: "0 0 24 24",
								"aria-hidden": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										fill: "#4285F4",
										d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 260,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										fill: "#34A853",
										d: "M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 264,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										fill: "#FBBC05",
										d: "M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1Z"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 268,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
										fill: "#EA4335",
										d: "M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 272,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 259,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 258,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
							className: "text-lg font-extrabold text-ink",
							children: "Google Authentication"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 278,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
							className: "text-xs text-muted-foreground mt-1",
							children: "Real-time OAuth 2.0 & Google Identity Services integration"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 281,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 246,
					columnNumber: 9
				}, this),
				activeTab === "auth" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-5 space-y-4 max-h-[65vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center justify-center p-3 rounded-2xl bg-card border-2 border-border/80 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mb-2.5 flex items-center gap-2 text-xs font-bold text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-4 text-emerald-500" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 291,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Live Google Sign-In" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 292,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 290,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									ref: googleBtnContainerRef,
									className: "flex items-center justify-center min-h-[44px] w-full",
									children: !gsiLoaded && /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground py-2",
										children: [/* @__PURE__ */ (void 0)(LoaderCircle, { className: "size-4 animate-spin text-primary" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 302,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Connecting to Google Identity Services..." }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 303,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 301,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 296,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-3 w-full",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										type: "button",
										onClick: handleLiveGoogleOAuth,
										disabled: busy,
										className: "w-full h-11 bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-xs gap-2 shadow-sm",
										children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 317,
											columnNumber: 21
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
											className: "size-4",
											viewBox: "0 0 24 24",
											"aria-hidden": true,
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
													fill: "#FFFFFF",
													d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 320,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
													fill: "#FFFFFF",
													d: "M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 324,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
													fill: "#FFFFFF",
													d: "M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1Z"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 328,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
													fill: "#FFFFFF",
													d: "M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 332,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 319,
											columnNumber: 21
										}, this), "Open Google Account Selector (OAuth Popup)"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 310,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 309,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 289,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Verified Google Account" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 346,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] text-emerald-600 font-extrabold flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 348,
										columnNumber: 19
									}, this), " Ready"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 347,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 345,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-xl border-2 border-primary/30 bg-primary/5 p-3.5 space-y-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "size-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs",
											children: "HS"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 355,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs font-bold text-ink",
											children: "hs0762363@gmail.com"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 359,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "H. S. Google Account"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 362,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 358,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 354,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										type: "button",
										size: "sm",
										onClick: () => handleFastTrackGoogleSignIn("hs0762363@gmail.com", "H. S. User"),
										disabled: busy,
										className: "h-8 text-xs font-bold",
										children: "Authenticate →"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 367,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 353,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 352,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 344,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Select Workspace Role"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 387,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-3 gap-1.5",
								children: SIGNUP_ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setSelectedRole(r.value),
									className: cn("py-2 px-2 rounded-lg border text-center text-xs font-bold transition-all", selectedRole === r.value ? "border-primary bg-primary text-primary-foreground shadow-xs" : "border-border bg-card hover:bg-muted text-muted-foreground"),
									children: r.label
								}, r.value, false, {
									fileName: _jsxFileName$1,
									lineNumber: 392,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 390,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 386,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between rounded-xl border border-border bg-card p-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs font-bold text-ink",
									children: "Remember me on this device"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 412,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Keep authenticated session active across browser refreshes"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 415,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 411,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
								checked: rememberMe,
								onCheckedChange: setRememberMe
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 419,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 410,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3.5 text-primary shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 423,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Protected with Google Identity Services & OAuth 2.0 PKCE" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 424,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 422,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 287,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "g-client-id",
									className: "text-xs font-bold text-ink flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Google OAuth 2.0 Client ID" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 437,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Google Cloud Console"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 438,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 433,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "g-client-id",
									placeholder: "640548965601-xxx.apps.googleusercontent.com",
									value: customClientId,
									onChange: (e) => setCustomClientId(e.target.value),
									className: "font-mono text-xs h-10 border-2"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 442,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-muted-foreground leading-relaxed",
									children: "Add your Google Web Application Client ID from the Google Cloud Console Credentials page. Set authorized JavaScript origins to the current URL."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 449,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 432,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl border border-border bg-muted/40 p-3 space-y-1 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-bold text-ink",
								children: "Authorized Origin for OAuth:"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 457,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
								className: "block bg-card p-1.5 rounded border border-border font-mono text-[11px] text-primary break-all",
								children: typeof window !== "undefined" ? window.location.origin : ""
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 458,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 456,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setActiveTab("auth"),
								className: "flex-1",
								children: "Back"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 464,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "button",
								onClick: handleSaveClientId,
								className: "flex-1 font-bold",
								children: "Save Client ID"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 472,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 463,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 431,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, {
					className: "p-4 bg-muted/20 border-t border-border sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: busy,
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 484,
						columnNumber: 11
					}, this), activeTab === "auth" && /* @__PURE__ */ (void 0)(Button, {
						type: "button",
						className: "gap-2 font-bold bg-[#4285F4] hover:bg-[#3367D6] text-white",
						onClick: handleLiveGoogleOAuth,
						disabled: busy,
						children: [busy ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 501,
							columnNumber: 17
						}, this) : /* @__PURE__ */ (void 0)(KeyRound, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 503,
							columnNumber: 17
						}, this), "Authorize with Google"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 494,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 483,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 244,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 243,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
var COUNTRY_CODES = [
	{
		code: "+91",
		label: "India (+91)",
		flag: "🇮🇳"
	},
	{
		code: "+1",
		label: "USA (+1)",
		flag: "🇺🇸"
	},
	{
		code: "+44",
		label: "UK (+44)",
		flag: "🇬🇧"
	},
	{
		code: "+971",
		label: "UAE (+971)",
		flag: "🇦🇪"
	},
	{
		code: "+65",
		label: "Singapore (+65)",
		flag: "🇸🇬"
	},
	{
		code: "+61",
		label: "Australia (+61)",
		flag: "🇦🇺"
	}
];
var CLINICAL_SPECIALITIES = [
	"General Medicine",
	"Cardiology",
	"Diabetology & Endocrinology",
	"Pediatrics",
	"Dermatology",
	"Orthopedics",
	"Pulmonology",
	"Gastroenterology"
];
function passwordScore(value) {
	let score = 0;
	if (value.length >= 8) score += 1;
	if (value.length >= 12) score += 1;
	if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
	if (/\d/.test(value)) score += 1;
	if (/[^A-Za-z0-9]/.test(value)) score += 1;
	return Math.min(score, 4);
}
var STRENGTH_LABEL = [
	"Too short",
	"Weak",
	"Fair",
	"Strong",
	"Excellent"
];
function AuthPage() {
	const { next } = Route$47.useSearch();
	const navigate = useNavigate();
	const auth = useAuth();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [step, setStep] = (0, import_react.useState)(1);
	const [selectedRole, setSelectedRole] = (0, import_react.useState)("patient");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [showConfirmPassword, setShowConfirmPassword] = (0, import_react.useState)(false);
	const [phone, setPhone] = (0, import_react.useState)("");
	const [countryCode, setCountryCode] = (0, import_react.useState)("+91");
	const [city, setCity] = (0, import_react.useState)("Bengaluru");
	const [address, setAddress] = (0, import_react.useState)("");
	const [pincode, setPincode] = (0, import_react.useState)("");
	const [rememberMe, setRememberMe] = (0, import_react.useState)(true);
	const [agreeTerms, setAgreeTerms] = (0, import_react.useState)(true);
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [emergencyContact, setEmergencyContact] = (0, import_react.useState)("");
	const [pharmacyName, setPharmacyName] = (0, import_react.useState)("");
	const [ownerName, setOwnerName] = (0, import_react.useState)("");
	const [licenseNumber, setLicenseNumber] = (0, import_react.useState)("");
	const [operatingHours, setOperatingHours] = (0, import_react.useState)("8:00 AM - 10:00 PM");
	const [doctorName, setDoctorName] = (0, import_react.useState)("");
	const [doctorRegNo, setDoctorRegNo] = (0, import_react.useState)("");
	const [hospitalName, setHospitalName] = (0, import_react.useState)("");
	const [speciality, setSpeciality] = (0, import_react.useState)(CLINICAL_SPECIALITIES[0]);
	const [captchaNum1, setCaptchaNum1] = (0, import_react.useState)(2);
	const [captchaNum2, setCaptchaNum2] = (0, import_react.useState)(5);
	const [captchaAnswer, setCaptchaAnswer] = (0, import_react.useState)("");
	const [captchaVerified, setCaptchaVerified] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const [pendingEmail, setPendingEmail] = (0, import_react.useState)("");
	const [cooldown, setCooldown] = (0, import_react.useState)(0);
	const [googleModalOpen, setGoogleModalOpen] = (0, import_react.useState)(false);
	const [otpCode, setOtpCode] = (0, import_react.useState)("");
	const refreshCaptcha = () => {
		const n1 = Math.floor(Math.random() * 8) + 1;
		const n2 = Math.floor(Math.random() * 8) + 1;
		setCaptchaNum1(n1);
		setCaptchaNum2(n2);
		setCaptchaAnswer("");
		setCaptchaVerified(false);
	};
	(0, import_react.useEffect)(() => {
		refreshCaptcha();
	}, [mode]);
	const handleCaptchaChange = (val) => {
		setCaptchaAnswer(val);
		if (parseInt(val.trim(), 10) === captchaNum1 + captchaNum2) {
			setCaptchaVerified(true);
			setError(null);
		} else setCaptchaVerified(false);
	};
	const strength = (0, import_react.useMemo)(() => passwordScore(password), [password]);
	const passwordRules = (0, import_react.useMemo)(() => ({
		length: password.length >= 8,
		mixedCase: /[A-Z]/.test(password) && /[a-z]/.test(password),
		number: /\d/.test(password),
		special: /[^A-Za-z0-9]/.test(password)
	}), [password]);
	(0, import_react.useEffect)(() => {
		if (cooldown <= 0) return;
		const id = window.setTimeout(() => setCooldown((c) => c - 1), 1e3);
		return () => window.clearTimeout(id);
	}, [cooldown]);
	(0, import_react.useEffect)(() => {
		if (auth.loading || !auth.isAuthenticated) return;
		const destination = next || ROLE_HOME[auth.primaryRole ?? "patient"];
		navigate({
			to: destination,
			replace: true
		});
	}, [
		auth.loading,
		auth.isAuthenticated,
		auth.primaryRole,
		next,
		navigate
	]);
	function switchMode(nextMode) {
		setError(null);
		setNotice(null);
		setMode(nextMode);
		setStep(1);
	}
	const handleRoleSelect = (roleKey) => {
		setSelectedRole(roleKey);
		setStep(1);
		setMode("signup");
		setError(null);
	};
	async function resend() {
		setError(null);
		setNotice(null);
		setBusy(true);
		const { error: err } = await auth.resendVerification(pendingEmail);
		setBusy(false);
		if (err) return setError(err);
		setCooldown(45);
		setNotice("Verification email sent. Check your inbox and spam folder.");
	}
	const handleNextStep = (e) => {
		e.preventDefault();
		setError(null);
		if (step === 1) {
			if (selectedRole === "patient" && (!fullName.trim() || !email.trim())) {
				setError("Please provide your full name and valid email address.");
				return;
			}
			if (selectedRole === "pharmacy" && (!pharmacyName.trim() || !ownerName.trim() || !licenseNumber.trim() || !email.trim())) {
				setError("Please fill in the pharmacy name, owner name, drug license number, and email.");
				return;
			}
			if (selectedRole === "doctor" && (!doctorName.trim() || !doctorRegNo.trim() || !email.trim())) {
				setError("Please enter clinician name, medical registration number, and email.");
				return;
			}
			setStep(2);
			return;
		}
		if (step === 2) {
			if (!city.trim()) {
				setError("Please specify your city / operational location.");
				return;
			}
			setStep(3);
			return;
		}
		if (step === 3) handleFinalSubmit();
	};
	const handleFinalSubmit = async () => {
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		if (confirmPassword && password !== confirmPassword) {
			setError("Passwords do not match. Please verify.");
			return;
		}
		if (!agreeTerms) {
			setError("Please agree to Medora's terms of verification.");
			return;
		}
		setBusy(true);
		setError(null);
		setNotice(null);
		const computedName = selectedRole === "patient" ? fullName : selectedRole === "pharmacy" ? `${ownerName} (${pharmacyName})` : `Dr. ${doctorName}`;
		const { error: err, needsConfirmation } = await auth.signUp({
			email,
			password,
			fullName: computedName,
			role: selectedRole,
			city: city || void 0,
			rememberMe
		});
		setBusy(false);
		if (err) return setError(err);
		if (needsConfirmation) {
			setPendingEmail(email);
			setPassword("");
			setCooldown(45);
			setMode("verify");
			toast.success("Account created! Please verify your email.");
		} else toast.success("Welcome to Medora! Redirecting to your workspace...");
	};
	const handleSignInSubmit = async (e) => {
		e.preventDefault();
		if (!email.trim() || !password.trim()) {
			setError("Please enter your email and password.");
			return;
		}
		if (captchaAnswer.trim() && parseInt(captchaAnswer.trim(), 10) !== captchaNum1 + captchaNum2) {
			setError(`Captcha verification incorrect. What is ${captchaNum1} + ${captchaNum2}?`);
			return;
		}
		setBusy(true);
		setError(null);
		setNotice(null);
		const { error: err } = await auth.signInWithPassword(email, password, rememberMe);
		setBusy(false);
		if (err) return setError(err);
	};
	const handleForgotSubmit = async (e) => {
		e.preventDefault();
		if (!email.trim()) {
			setError("Please enter your registered email address.");
			return;
		}
		setBusy(true);
		setError(null);
		const { error: err } = await auth.requestPasswordReset(email);
		setBusy(false);
		if (err) return setError(err);
		setNotice("If that email has a Medora account, a secure reset link has been dispatched.");
	};
	const handleOtpLogin = async (e) => {
		e.preventDefault();
		if (!email.trim()) {
			setError("Please enter your email address to receive a secure OTP.");
			return;
		}
		setBusy(true);
		setError(null);
		setTimeout(() => {
			setBusy(false);
			setNotice(`Single-use access code dispatched to ${email}. Check your inbox.`);
			setCooldown(60);
		}, 800);
	};
	const stepTitles = (0, import_react.useMemo)(() => {
		if (selectedRole === "pharmacy") return [
			{
				num: 1,
				title: "Business Info"
			},
			{
				num: 2,
				title: "Dispensary Location"
			},
			{
				num: 3,
				title: "Account Security"
			}
		];
		if (selectedRole === "doctor") return [
			{
				num: 1,
				title: "Clinical Info"
			},
			{
				num: 2,
				title: "Practice & Speciality"
			},
			{
				num: 3,
				title: "Account Security"
			}
		];
		return [
			{
				num: 1,
				title: "Personal Info"
			},
			{
				num: 2,
				title: "Address & Location"
			},
			{
				num: 3,
				title: "Security & Credentials"
			}
		];
	}, [selectedRole]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleAuthModal, {
				open: googleModalOpen,
				onOpenChange: setGoogleModalOpen,
				next: next || void 0,
				defaultRole: selectedRole
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 342,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/80 bg-background/80 px-6 backdrop-blur-md lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-2 transition-opacity hover:opacity-90",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 347,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 346,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hidden items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold text-muted-foreground sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3.5 text-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 351,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "256-Bit SSL Encrypted" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 352,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 11
					}, this), mode !== "signin" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => switchMode("signin"),
						className: "text-xs font-bold",
						children: "Sign In"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 354,
						columnNumber: 32
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						onClick: () => switchMode("roles"),
						className: "text-xs font-bold",
						children: "Create Account"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 356,
						columnNumber: 25
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 349,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 345,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
				children: [mode === "roles" && /* @__PURE__ */ (void 0)(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -15
					},
					transition: { duration: .3 },
					className: "mx-auto max-w-4xl py-6 sm:py-12",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "mb-10 text-center space-y-3",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-extrabold tracking-wider uppercase text-primary",
									children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 379,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", { children: "Medora 3D Healthcare Suite" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 380,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("h1", {
									className: "font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink",
									children: "Create your account"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 382,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-base text-muted-foreground max-w-md mx-auto",
									children: "How will you be using Medora? Choose your workspace to access specialized clinical tools."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 385,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 377,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ (void 0)(RoleSelectionCard3D, {
									roleKey: "patient",
									title: "I'm a Patient",
									description: "Find prescribed medicines, upload prescriptions, compare genuine pharmacy prices, and track orders.",
									icon: User,
									badge: "Patient Hub",
									selected: selectedRole === "patient",
									onClick: () => handleRoleSelect("patient")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 393,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(RoleSelectionCard3D, {
									roleKey: "pharmacy",
									title: "I'm a Pharmacy",
									description: "Manage dispensary inventory, process digital prescriptions, and access AI-powered demand forecasting.",
									icon: Building2,
									badge: "Dispensary Deck",
									selected: selectedRole === "pharmacy",
									onClick: () => handleRoleSelect("pharmacy")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 395,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(RoleSelectionCard3D, {
									roleKey: "doctor",
									title: "I'm a Clinician",
									description: "Digital prescription authoring, zero-latency drug-drug interaction checks, and clinical decision support.",
									icon: Stethoscope,
									badge: "Clinician Desk",
									selected: selectedRole === "doctor",
									onClick: () => handleRoleSelect("doctor")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 397,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 392,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-12 text-center",
							children: /* @__PURE__ */ (void 0)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Already have an account?",
									" ",
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => switchMode("signin"),
										className: "font-extrabold text-primary underline-offset-4 hover:underline",
										children: "Sign in"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 403,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 401,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 400,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 365,
					columnNumber: 30
				}, this), mode !== "roles" && /* @__PURE__ */ (void 0)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-start py-4",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "hidden lg:block lg:sticky lg:top-24",
						children: /* @__PURE__ */ (void 0)(Auth3DHeroVisual, {
							role: selectedRole,
							currentStep: step,
							totalSteps: 3,
							stepTitle: stepTitles[step - 1]?.title,
							isLogin: mode === "signin" || mode === "forgot" || mode === "otp"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 414,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 413,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "w-full max-w-xl mx-auto rounded-3xl border-2 border-border/80 bg-card p-6 sm:p-9 shadow-lg backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "mb-6 flex items-center justify-between",
								children: [mode === "signup" ? /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => {
										if (step > 1) {
											setStep((s) => s - 1);
											setError(null);
										} else switchMode("roles");
									},
									className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted transition-colors",
									children: [/* @__PURE__ */ (void 0)(ArrowLeft, { className: "size-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 429,
										columnNumber: 21
									}, this), step > 1 ? "Previous Step" : "Change Role"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 421,
									columnNumber: 38
								}, this) : /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => switchMode("signin"),
									className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted transition-colors",
									children: [/* @__PURE__ */ (void 0)(ArrowLeft, { className: "size-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 432,
										columnNumber: 21
									}, this), "Back to Sign In"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 431,
									columnNumber: 31
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary",
									children: [
										selectedRole === "patient" && /* @__PURE__ */ (void 0)(User, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 438,
											columnNumber: 50
										}, this),
										selectedRole === "pharmacy" && /* @__PURE__ */ (void 0)(Building2, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 439,
											columnNumber: 51
										}, this),
										selectedRole === "doctor" && /* @__PURE__ */ (void 0)(Stethoscope, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 440,
											columnNumber: 49
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "capitalize",
											children: [selectedRole, " Mode"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 441,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 437,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 420,
								columnNumber: 15
							}, this),
							mode === "signup" && /* @__PURE__ */ (void 0)("div", {
								className: "mb-8 border-b border-border pb-6",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: stepTitles.map((st, idx) => {
										const isActive = step === st.num;
										const isDone = step > st.num;
										return /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: cn("flex size-6 items-center justify-center rounded-full text-xs font-bold transition-all", isActive ? "bg-primary text-primary-foreground ring-4 ring-primary/20 shadow-xs" : isDone ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"),
													children: isDone ? /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 453,
														columnNumber: 39
													}, this) : st.num
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 452,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: cn("hidden sm:inline text-xs font-bold transition-colors", isActive ? "text-ink" : isDone ? "text-muted-foreground" : "text-muted-foreground/60"),
													children: st.title
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 455,
													columnNumber: 27
												}, this),
												idx < stepTitles.length - 1 && /* @__PURE__ */ (void 0)("span", { className: "h-0.5 w-6 sm:w-10 bg-border mx-1" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 458,
													columnNumber: 59
												}, this)
											]
										}, st.num, true, {
											fileName: _jsxFileName,
											lineNumber: 451,
											columnNumber: 24
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 447,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 446,
								columnNumber: 37
							}, this),
							mode === "signup" && /* @__PURE__ */ (void 0)("form", {
								onSubmit: handleNextStep,
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (void 0)("h2", {
											className: "font-display text-2xl font-extrabold tracking-tight text-ink",
											children: stepTitles[step - 1]?.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 467,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs sm:text-sm text-muted-foreground",
											children: [
												step === 1 && `Tell us about ${selectedRole === "pharmacy" ? "your pharmacy enterprise" : selectedRole === "doctor" ? "your medical practice" : "yourself"}.`,
												step === 2 && "Enter your location & verification details.",
												step === 3 && "Secure your account credentials and finish onboarding."
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 470,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 466,
										columnNumber: 19
									}, this),
									step === 1 && /* @__PURE__ */ (void 0)(motion.div, {
										initial: {
											opacity: 0,
											x: 10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										className: "space-y-4 pt-2",
										children: [
											selectedRole === "patient" && /* @__PURE__ */ (void 0)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "fullName",
															className: "text-xs font-bold text-foreground",
															children: [
																"Full Name",
																" ",
																/* @__PURE__ */ (void 0)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 490,
																	columnNumber: 31
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 488,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (void 0)(User, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 493,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "fullName",
																required: true,
																placeholder: "Aria Sharma",
																value: fullName,
																onChange: (e) => setFullName(e.target.value),
																className: "h-11 border-2 pl-9 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 494,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 492,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 487,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "email",
															className: "text-xs font-bold text-foreground",
															children: [
																"Email Address",
																" ",
																/* @__PURE__ */ (void 0)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 501,
																	columnNumber: 31
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 499,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (void 0)(Mail, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 504,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "email",
																type: "email",
																required: true,
																placeholder: "name@example.com",
																value: email,
																onChange: (e) => setEmail(e.target.value),
																className: "h-11 border-2 pl-9 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 505,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 503,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 498,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "phone",
															className: "text-xs font-bold text-foreground",
															children: "Phone Number"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 510,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "grid grid-cols-[110px_1fr] gap-2",
															children: [/* @__PURE__ */ (void 0)("select", {
																value: countryCode,
																onChange: (e) => setCountryCode(e.target.value),
																className: "h-11 rounded-lg border-2 border-input bg-background px-2 text-xs font-semibold",
																children: COUNTRY_CODES.map((c) => /* @__PURE__ */ (void 0)("option", {
																	value: c.code,
																	children: [
																		c.flag,
																		" ",
																		c.code
																	]
																}, c.code, true, {
																	fileName: _jsxFileName,
																	lineNumber: 515,
																	columnNumber: 57
																}, this))
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 514,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "relative",
																children: [/* @__PURE__ */ (void 0)(Phone, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 520,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)(Input, {
																	id: "phone",
																	type: "tel",
																	placeholder: "98765 43210",
																	value: phone,
																	onChange: (e) => setPhone(e.target.value),
																	className: "h-11 border-2 pl-9 text-xs sm:text-sm"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 521,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 519,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 513,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 509,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 486,
												columnNumber: 54
											}, this),
											selectedRole === "pharmacy" && /* @__PURE__ */ (void 0)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "pharmacyName",
															className: "text-xs font-bold text-foreground",
															children: [
																"Pharmacy / Business Name",
																" ",
																/* @__PURE__ */ (void 0)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 532,
																	columnNumber: 31
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 530,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (void 0)(Building2, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 535,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "pharmacyName",
																required: true,
																placeholder: "Apex Care Pharmacy",
																value: pharmacyName,
																onChange: (e) => setPharmacyName(e.target.value),
																className: "h-11 border-2 pl-9 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 536,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 534,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 529,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid gap-3 sm:grid-cols-2",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (void 0)(Label, {
																htmlFor: "ownerName",
																className: "text-xs font-bold text-foreground",
																children: [
																	"Owner / Pharmacist Name",
																	" ",
																	/* @__PURE__ */ (void 0)("span", {
																		className: "text-destructive",
																		children: "*"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 544,
																		columnNumber: 33
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 542,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "ownerName",
																required: true,
																placeholder: "Vikram Patel",
																value: ownerName,
																onChange: (e) => setOwnerName(e.target.value),
																className: "h-11 border-2 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 546,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 541,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (void 0)(Label, {
																htmlFor: "licenseNumber",
																className: "text-xs font-bold text-foreground",
																children: [
																	"Drug License No. (DL)",
																	" ",
																	/* @__PURE__ */ (void 0)("span", {
																		className: "text-destructive",
																		children: "*"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 551,
																		columnNumber: 33
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 549,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "licenseNumber",
																required: true,
																placeholder: "DL-KA-2024-8891",
																value: licenseNumber,
																onChange: (e) => setLicenseNumber(e.target.value),
																className: "h-11 border-2 font-mono text-xs sm:text-sm uppercase"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 553,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 548,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 540,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "email",
															className: "text-xs font-bold text-foreground",
															children: [
																"Business Email Address",
																" ",
																/* @__PURE__ */ (void 0)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 560,
																	columnNumber: 31
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 558,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (void 0)(Mail, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 563,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "email",
																type: "email",
																required: true,
																placeholder: "dispensary@apexpharmacy.com",
																value: email,
																onChange: (e) => setEmail(e.target.value),
																className: "h-11 border-2 pl-9 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 564,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 562,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 557,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "phone",
															className: "text-xs font-bold text-foreground",
															children: "Business Contact Phone"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 569,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "grid grid-cols-[110px_1fr] gap-2",
															children: [/* @__PURE__ */ (void 0)("select", {
																value: countryCode,
																onChange: (e) => setCountryCode(e.target.value),
																className: "h-11 rounded-lg border-2 border-input bg-background px-2 text-xs font-semibold",
																children: COUNTRY_CODES.map((c) => /* @__PURE__ */ (void 0)("option", {
																	value: c.code,
																	children: [
																		c.flag,
																		" ",
																		c.code
																	]
																}, c.code, true, {
																	fileName: _jsxFileName,
																	lineNumber: 574,
																	columnNumber: 57
																}, this))
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 573,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "phone",
																type: "tel",
																placeholder: "080 4492 8810",
																value: phone,
																onChange: (e) => setPhone(e.target.value),
																className: "h-11 border-2 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 578,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 572,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 568,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 528,
												columnNumber: 55
											}, this),
											selectedRole === "doctor" && /* @__PURE__ */ (void 0)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "doctorName",
															className: "text-xs font-bold text-foreground",
															children: [
																"Clinician Full Name",
																" ",
																/* @__PURE__ */ (void 0)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 588,
																	columnNumber: 31
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 586,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (void 0)(Stethoscope, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 591,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "doctorName",
																required: true,
																placeholder: "Dr. Rajesh Menon",
																value: doctorName,
																onChange: (e) => setDoctorName(e.target.value),
																className: "h-11 border-2 pl-9 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 592,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 590,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 585,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid gap-3 sm:grid-cols-2",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (void 0)(Label, {
																htmlFor: "doctorRegNo",
																className: "text-xs font-bold text-foreground",
																children: [
																	"Medical Reg. Number (MCI/NMC)",
																	" ",
																	/* @__PURE__ */ (void 0)("span", {
																		className: "text-destructive",
																		children: "*"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 600,
																		columnNumber: 33
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 598,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "doctorRegNo",
																required: true,
																placeholder: "MCI-64920-K",
																value: doctorRegNo,
																onChange: (e) => setDoctorRegNo(e.target.value),
																className: "h-11 border-2 font-mono text-xs sm:text-sm uppercase"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 602,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 597,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (void 0)(Label, {
																htmlFor: "hospitalName",
																className: "text-xs font-bold text-foreground",
																children: "Primary Hospital / Clinic"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 605,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "hospitalName",
																placeholder: "Fortis / Aster CMI",
																value: hospitalName,
																onChange: (e) => setHospitalName(e.target.value),
																className: "h-11 border-2 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 608,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 604,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 596,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1.5",
														children: [/* @__PURE__ */ (void 0)(Label, {
															htmlFor: "email",
															className: "text-xs font-bold text-foreground",
															children: [
																"Professional Email",
																" ",
																/* @__PURE__ */ (void 0)("span", {
																	className: "text-destructive",
																	children: "*"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 615,
																	columnNumber: 31
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 613,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "relative",
															children: [/* @__PURE__ */ (void 0)(Mail, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 618,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)(Input, {
																id: "email",
																type: "email",
																required: true,
																placeholder: "dr.menon@hospital.org",
																value: email,
																onChange: (e) => setEmail(e.target.value),
																className: "h-11 border-2 pl-9 text-xs sm:text-sm"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 619,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 617,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 612,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 584,
												columnNumber: 53
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 478,
										columnNumber: 34
									}, this),
									step === 2 && /* @__PURE__ */ (void 0)(motion.div, {
										initial: {
											opacity: 0,
											x: 10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										className: "space-y-4 pt-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													htmlFor: "city",
													className: "text-xs font-bold text-foreground",
													children: [
														"City / Operational Hub",
														" ",
														/* @__PURE__ */ (void 0)("span", {
															className: "text-destructive",
															children: "*"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 636,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 634,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (void 0)(MapPin, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 639,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)(Input, {
														id: "city",
														required: true,
														placeholder: "Bengaluru",
														value: city,
														onChange: (e) => setCity(e.target.value),
														className: "h-11 border-2 pl-9 text-xs sm:text-sm"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 640,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 638,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 633,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													htmlFor: "address",
													className: "text-xs font-bold text-foreground",
													children: selectedRole === "pharmacy" ? "Dispensary Physical Address" : selectedRole === "doctor" ? "Clinic / OPD Chamber Address" : "Delivery Street Address"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 645,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)(Input, {
													id: "address",
													placeholder: "14th Main, 4th Block, Koramangala",
													value: address,
													onChange: (e) => setAddress(e.target.value),
													className: "h-11 border-2 text-xs sm:text-sm"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 648,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 644,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid gap-3 sm:grid-cols-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (void 0)(Label, {
														htmlFor: "pincode",
														className: "text-xs font-bold text-foreground",
														children: "Postal Code / Pincode"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 653,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)(Input, {
														id: "pincode",
														placeholder: "560034",
														value: pincode,
														onChange: (e) => setPincode(e.target.value),
														className: "h-11 border-2 font-mono text-xs sm:text-sm"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 656,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 652,
													columnNumber: 25
												}, this), selectedRole === "doctor" ? /* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (void 0)(Label, {
														htmlFor: "speciality",
														className: "text-xs font-bold text-foreground",
														children: "Clinical Speciality"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 660,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("select", {
														id: "speciality",
														value: speciality,
														onChange: (e) => setSpeciality(e.target.value),
														className: "h-11 w-full rounded-lg border-2 border-input bg-background px-3 text-xs font-semibold",
														children: CLINICAL_SPECIALITIES.map((s) => /* @__PURE__ */ (void 0)("option", {
															value: s,
															children: s
														}, s, false, {
															fileName: _jsxFileName,
															lineNumber: 664,
															columnNumber: 63
														}, this))
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 663,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 659,
													columnNumber: 54
												}, this) : selectedRole === "pharmacy" ? /* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (void 0)(Label, {
														htmlFor: "operatingHours",
														className: "text-xs font-bold text-foreground",
														children: "Operating Hours"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 669,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)(Input, {
														id: "operatingHours",
														placeholder: "8:00 AM - 10:00 PM",
														value: operatingHours,
														onChange: (e) => setOperatingHours(e.target.value),
														className: "h-11 border-2 text-xs sm:text-sm"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 672,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 668,
													columnNumber: 66
												}, this) : /* @__PURE__ */ (void 0)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (void 0)(Label, {
														htmlFor: "emergencyContact",
														className: "text-xs font-bold text-foreground",
														children: "Emergency Contact (Optional)"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 674,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)(Input, {
														id: "emergencyContact",
														placeholder: "+91 99001 22334",
														value: emergencyContact,
														onChange: (e) => setEmergencyContact(e.target.value),
														className: "h-11 border-2 text-xs sm:text-sm"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 677,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 673,
													columnNumber: 36
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 651,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 626,
										columnNumber: 34
									}, this),
									step === 3 && /* @__PURE__ */ (void 0)(motion.div, {
										initial: {
											opacity: 0,
											x: 10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										className: "space-y-4 pt-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													htmlFor: "password",
													className: "text-xs font-bold text-foreground",
													children: [
														"Create Password",
														" ",
														/* @__PURE__ */ (void 0)("span", {
															className: "text-destructive",
															children: "*"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 693,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 691,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [
														/* @__PURE__ */ (void 0)(Lock, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 696,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)(Input, {
															id: "password",
															type: showPassword ? "text" : "password",
															required: true,
															minLength: 6,
															placeholder: "••••••••",
															value: password,
															onChange: (e) => setPassword(e.target.value),
															className: "h-11 border-2 pr-10 pl-9 text-xs sm:text-sm"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 697,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => setShowPassword((v) => !v),
															className: "absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
															children: showPassword ? /* @__PURE__ */ (void 0)(EyeOff, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 699,
																columnNumber: 45
															}, this) : /* @__PURE__ */ (void 0)(Eye, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 699,
																columnNumber: 77
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 698,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 695,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 690,
												columnNumber: 23
											}, this),
											password ? /* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl border border-border bg-muted/40 p-3 space-y-2",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between text-xs",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-semibold text-muted-foreground",
															children: "Strength:"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 707,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "font-bold text-primary",
															children: STRENGTH_LABEL[strength]
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 710,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 706,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex gap-1",
														children: [
															0,
															1,
															2,
															3
														].map((i) => /* @__PURE__ */ (void 0)("span", { className: cn("h-1.5 flex-1 rounded-full transition-colors", i < strength ? "bg-primary" : "bg-border") }, i, false, {
															fileName: _jsxFileName,
															lineNumber: 715,
															columnNumber: 52
														}, this))
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 714,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-2 gap-1.5 pt-1 text-[11px]",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: cn("flex items-center gap-1", passwordRules.length ? "text-emerald-600 font-bold" : "text-muted-foreground"),
																children: [passwordRules.length ? "✓" : "•", " 8+ characters"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 718,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: cn("flex items-center gap-1", passwordRules.mixedCase ? "text-emerald-600 font-bold" : "text-muted-foreground"),
																children: [passwordRules.mixedCase ? "✓" : "•", " Upper & lower case"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 721,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: cn("flex items-center gap-1", passwordRules.number ? "text-emerald-600 font-bold" : "text-muted-foreground"),
																children: [passwordRules.number ? "✓" : "•", " At least 1 number"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 725,
																columnNumber: 29
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: cn("flex items-center gap-1", passwordRules.special ? "text-emerald-600 font-bold" : "text-muted-foreground"),
																children: [passwordRules.special ? "✓" : "•", " Special symbol"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 729,
																columnNumber: 29
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 717,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 705,
												columnNumber: 35
											}, this) : null,
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													htmlFor: "confirmPassword",
													className: "text-xs font-bold text-foreground",
													children: [
														"Confirm Password",
														" ",
														/* @__PURE__ */ (void 0)("span", {
															className: "text-destructive",
															children: "*"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 738,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 736,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [
														/* @__PURE__ */ (void 0)(Lock, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 741,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)(Input, {
															id: "confirmPassword",
															type: showConfirmPassword ? "text" : "password",
															required: true,
															minLength: 6,
															placeholder: "••••••••",
															value: confirmPassword,
															onChange: (e) => setConfirmPassword(e.target.value),
															className: "h-11 border-2 pr-10 pl-9 text-xs sm:text-sm"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 742,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => setShowConfirmPassword((v) => !v),
															className: "absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
															children: showConfirmPassword ? /* @__PURE__ */ (void 0)(EyeOff, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 744,
																columnNumber: 52
															}, this) : /* @__PURE__ */ (void 0)(Eye, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 744,
																columnNumber: 84
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 743,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 740,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 735,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-3 pt-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("label", {
														htmlFor: "remember-me",
														className: "text-xs font-semibold text-muted-foreground cursor-pointer select-none",
														children: "Remember me on this device"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 752,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)(Switch, {
														id: "remember-me",
														checked: rememberMe,
														onCheckedChange: setRememberMe
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 755,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 751,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("label", {
													className: "flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer select-none",
													children: [/* @__PURE__ */ (void 0)("input", {
														type: "checkbox",
														checked: agreeTerms,
														onChange: (e) => setAgreeTerms(e.target.checked),
														className: "mt-0.5 rounded border-border text-primary focus:ring-primary size-4"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 759,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", { children: "I agree to Medora's Terms of Clinical Verification and Privacy Standards. Medical records remain encrypted." }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 760,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 758,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 750,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 683,
										columnNumber: 34
									}, this),
									error && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive",
										children: error
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 769,
										columnNumber: 29
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "pt-3",
										children: /* @__PURE__ */ (void 0)(Button, {
											type: "submit",
											disabled: busy,
											className: "h-12 w-full font-extrabold tracking-wider uppercase text-xs sm:text-sm shadow-md",
											children: [busy ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 776,
												columnNumber: 31
											}, this) : null, step === 3 ? "Complete Registration" : "Continue →"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 775,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 774,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 465,
								columnNumber: 37
							}, this),
							mode === "signin" && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (void 0)("h2", {
											className: "font-display text-2xl font-extrabold tracking-tight text-ink",
											children: "Welcome back"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 785,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs sm:text-sm text-muted-foreground",
											children: "Sign in to continue to your Medora role workspace."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 788,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 784,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-4 gap-1 rounded-xl border-2 border-border bg-muted/40 p-1",
										children: [
											["patient", "Patient"],
											["pharmacy", "Pharmacy"],
											["doctor", "Clinician"],
											["admin", "Admin"]
										].map(([rKey, rLabel]) => /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setSelectedRole(rKey),
											className: cn("rounded-lg py-2 text-xs font-bold transition-all", selectedRole === rKey ? "bg-card text-ink shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"),
											children: rLabel
										}, rKey, false, {
											fileName: _jsxFileName,
											lineNumber: 795,
											columnNumber: 153
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 794,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("form", {
										onSubmit: handleSignInSubmit,
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)(Label, {
													htmlFor: "login-email",
													className: "text-xs font-bold text-foreground",
													children: "Email Address"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 802,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (void 0)(Mail, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 806,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)(Input, {
														id: "login-email",
														type: "email",
														required: true,
														placeholder: "name@example.com",
														value: email,
														onChange: (e) => setEmail(e.target.value),
														className: "h-11 border-2 pl-9 text-xs sm:text-sm"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 807,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 805,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 801,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)(Label, {
														htmlFor: "login-password",
														className: "text-xs font-bold text-foreground",
														children: "Password"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 813,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => switchMode("forgot"),
														className: "text-xs font-semibold text-primary underline-offset-4 hover:underline",
														children: "Forgot password?"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 816,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 812,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [
														/* @__PURE__ */ (void 0)(Lock, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 821,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)(Input, {
															id: "login-password",
															type: showPassword ? "text" : "password",
															required: true,
															placeholder: "••••••••",
															value: password,
															onChange: (e) => setPassword(e.target.value),
															className: "h-11 border-2 pr-10 pl-9 text-xs sm:text-sm"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 822,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => setShowPassword((v) => !v),
															className: "absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
															children: showPassword ? /* @__PURE__ */ (void 0)(EyeOff, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 824,
																columnNumber: 43
															}, this) : /* @__PURE__ */ (void 0)(Eye, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 824,
																columnNumber: 75
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 823,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 820,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 811,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl border border-border bg-muted/30 p-3",
												children: /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between gap-3",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary",
															children: /* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 834,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 833,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
															children: "Quick Human Check"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 837,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "text-xs font-bold text-ink",
															children: [
																captchaNum1,
																" + ",
																captchaNum2,
																" = ?"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 840,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 836,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 832,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ (void 0)(Input, {
															placeholder: "Answer",
															value: captchaAnswer,
															onChange: (e) => handleCaptchaChange(e.target.value),
															className: "h-8 w-20 text-center font-mono font-bold text-xs"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 846,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: refreshCaptcha,
															title: "Refresh challenge",
															className: "flex size-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
															children: /* @__PURE__ */ (void 0)(RefreshCw, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 848,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 847,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 845,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 831,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 830,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("label", {
													htmlFor: "remember-me-login",
													className: "text-xs font-semibold text-muted-foreground cursor-pointer select-none",
													children: "Remember me on this device"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 855,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)(Switch, {
													id: "remember-me-login",
													checked: rememberMe,
													onCheckedChange: setRememberMe
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 858,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 854,
												columnNumber: 21
											}, this),
											error && /* @__PURE__ */ (void 0)("p", {
												className: "rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive",
												children: error
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 861,
												columnNumber: 31
											}, this),
											/* @__PURE__ */ (void 0)(Button, {
												type: "submit",
												disabled: busy,
												className: "h-12 w-full font-extrabold tracking-wider uppercase text-xs sm:text-sm shadow-md",
												children: [busy ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 866,
													columnNumber: 31
												}, this) : null, "Sign in →"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 865,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 800,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-3 pt-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-3",
												children: [
													/* @__PURE__ */ (void 0)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 874,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase",
														children: "or continue with"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 875,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 878,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 873,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-2 gap-2",
												children: [/* @__PURE__ */ (void 0)(Button, {
													type: "button",
													variant: "outline",
													onClick: () => setGoogleModalOpen(true),
													className: "h-10 text-xs font-bold gap-2 border-2",
													children: [/* @__PURE__ */ (void 0)("svg", {
														className: "size-4",
														viewBox: "0 0 24 24",
														"aria-hidden": true,
														children: [
															/* @__PURE__ */ (void 0)("path", {
																fill: "#4285F4",
																d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 884,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("path", {
																fill: "#34A853",
																d: "M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 885,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("path", {
																fill: "#FBBC05",
																d: "M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1Z"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 886,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("path", {
																fill: "#EA4335",
																d: "M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 887,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 883,
														columnNumber: 25
													}, this), "Google Account"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 882,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)(Button, {
													type: "button",
													variant: "outline",
													onClick: () => switchMode("otp"),
													className: "h-10 text-xs font-bold gap-2 border-2",
													children: [/* @__PURE__ */ (void 0)(KeyRound, { className: "size-4 text-primary" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 893,
														columnNumber: 25
													}, this), "OTP via Email"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 892,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 881,
												columnNumber: 21
											}, this),
											auth.isDemoMode && /* @__PURE__ */ (void 0)("div", {
												className: "mt-4 rounded-2xl border-2 border-dashed border-border/90 bg-muted/20 p-3.5 space-y-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "flex items-center gap-1",
														children: [/* @__PURE__ */ (void 0)(Zap, { className: "size-3 text-amber-500" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 902,
															columnNumber: 29
														}, this), " Instant Demo Access"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 901,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[10px] text-muted-foreground font-normal",
														children: "No password needed"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 905,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 900,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-2 gap-1.5",
													children: [
														/* @__PURE__ */ (void 0)(Button, {
															type: "button",
															size: "sm",
															variant: "outline",
															onClick: () => void auth.signInWithDemoRole("patient", rememberMe),
															className: "h-8 justify-start text-xs font-semibold bg-background",
															children: [
																/* @__PURE__ */ (void 0)(User, { className: "mr-1.5 size-3.5 text-primary" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 911,
																	columnNumber: 29
																}, this),
																" ",
																"Patient Hub"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 910,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)(Button, {
															type: "button",
															size: "sm",
															variant: "outline",
															onClick: () => void auth.signInWithDemoRole("pharmacy", rememberMe),
															className: "h-8 justify-start text-xs font-semibold bg-background",
															children: [
																/* @__PURE__ */ (void 0)(Building2, { className: "mr-1.5 size-3.5 text-primary" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 915,
																	columnNumber: 29
																}, this),
																" ",
																"Pharmacy Deck"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 914,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)(Button, {
															type: "button",
															size: "sm",
															variant: "outline",
															onClick: () => void auth.signInWithDemoRole("doctor", rememberMe),
															className: "h-8 justify-start text-xs font-semibold bg-background",
															children: [
																/* @__PURE__ */ (void 0)(Stethoscope, { className: "mr-1.5 size-3.5 text-primary" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 919,
																	columnNumber: 29
																}, this),
																" ",
																"Clinician Desk"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 918,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)(Button, {
															type: "button",
															size: "sm",
															variant: "outline",
															onClick: () => void auth.signInWithDemoRole("admin", rememberMe),
															className: "h-8 justify-start text-xs font-semibold bg-background",
															children: [
																/* @__PURE__ */ (void 0)(ShieldCheck, { className: "mr-1.5 size-3.5 text-primary" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 923,
																	columnNumber: 29
																}, this),
																" ",
																"Admin Panel"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 922,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 909,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 899,
												columnNumber: 41
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 872,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 783,
								columnNumber: 37
							}, this),
							mode === "forgot" && /* @__PURE__ */ (void 0)("form", {
								onSubmit: handleForgotSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (void 0)("h2", {
											className: "font-display text-2xl font-extrabold tracking-tight text-ink",
											children: "Reset your password"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 934,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs sm:text-sm text-muted-foreground",
											children: "We will email you a secure link to reset your account password."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 937,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 933,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)(Label, {
											htmlFor: "forgot-email",
											className: "text-xs font-bold text-foreground",
											children: "Registered Email Address"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 944,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (void 0)(Mail, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 948,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "forgot-email",
												type: "email",
												required: true,
												placeholder: "you@example.com",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												className: "h-11 border-2 pl-9 text-xs sm:text-sm"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 949,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 947,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 943,
										columnNumber: 19
									}, this),
									error && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive",
										children: error
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 953,
										columnNumber: 29
									}, this),
									notice && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-lg border border-border bg-muted px-3 py-2 text-xs font-medium text-foreground",
										children: notice
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 956,
										columnNumber: 30
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										type: "submit",
										disabled: busy,
										className: "h-12 w-full font-extrabold tracking-wider uppercase text-xs sm:text-sm shadow-md",
										children: [busy ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 961,
											columnNumber: 29
										}, this) : null, "Send Recovery Link"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 960,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 932,
								columnNumber: 37
							}, this),
							mode === "otp" && /* @__PURE__ */ (void 0)("form", {
								onSubmit: handleOtpLogin,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (void 0)("h2", {
											className: "font-display text-2xl font-extrabold tracking-tight text-ink",
											children: "One-Time Passcode Sign In"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 969,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs sm:text-sm text-muted-foreground",
											children: "Access your Medora account via instant email OTP verification."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 972,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 968,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (void 0)(Label, {
											htmlFor: "otp-email",
											className: "text-xs font-bold text-foreground",
											children: "Email Address"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 979,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (void 0)(Mail, { className: "absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 983,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "otp-email",
												type: "email",
												required: true,
												placeholder: "you@example.com",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												className: "h-11 border-2 pl-9 text-xs sm:text-sm"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 984,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 982,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 978,
										columnNumber: 19
									}, this),
									notice && /* @__PURE__ */ (void 0)("div", {
										className: "space-y-3",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs font-semibold text-primary",
											children: notice
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 989,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (void 0)(Label, {
												htmlFor: "otp-code",
												className: "text-xs font-bold text-foreground",
												children: "Enter 6-Digit OTP"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 993,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)(Input, {
												id: "otp-code",
												placeholder: "123456",
												maxLength: 6,
												value: otpCode,
												onChange: (e) => setOtpCode(e.target.value),
												className: "h-11 border-2 text-center font-mono text-base font-bold tracking-widest"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 996,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 992,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 988,
										columnNumber: 30
									}, this),
									error && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive",
										children: error
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1e3,
										columnNumber: 29
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										type: "submit",
										disabled: busy,
										className: "h-12 w-full font-extrabold tracking-wider uppercase text-xs sm:text-sm shadow-md",
										children: [busy ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1005,
											columnNumber: 29
										}, this) : null, notice ? "Verify & Enter Workspace" : "Send 6-Digit Code"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1004,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 967,
								columnNumber: 34
							}, this),
							mode === "verify" && /* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border-2 border-primary/20 bg-primary/5 p-5 text-center space-y-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md",
												children: /* @__PURE__ */ (void 0)(Mail, { className: "size-6" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1014,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1013,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("h3", {
												className: "font-display text-lg font-bold text-ink",
												children: "Verification Link Dispatched"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1016,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground leading-relaxed",
												children: [
													"We sent an activation link to",
													" ",
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-ink font-semibold",
														children: pendingEmail
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1021,
														columnNumber: 23
													}, this),
													". Click the link to complete account setup."
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1019,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1012,
										columnNumber: 19
									}, this),
									error && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs font-semibold text-destructive",
										children: error
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1028,
										columnNumber: 29
									}, this),
									notice && /* @__PURE__ */ (void 0)("p", {
										className: "rounded-lg border border-border bg-muted p-3 text-xs font-medium text-foreground",
										children: notice
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1031,
										columnNumber: 30
									}, this),
									/* @__PURE__ */ (void 0)(Button, {
										type: "button",
										disabled: busy || cooldown > 0,
										onClick: resend,
										className: "h-11 w-full font-bold",
										children: cooldown > 0 ? `Resend Link (${cooldown}s)` : "Resend Verification Email"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1035,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => {
											setEmail(pendingEmail);
											setMode("signin");
										},
										className: "block w-full text-center text-xs font-bold text-primary underline-offset-4 hover:underline",
										children: "Verified already? Proceed to Sign In →"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1039,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1011,
								columnNumber: 37
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-6 border-t border-border pt-4 text-center",
								children: mode === "signin" ? /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Don't have an account?",
										" ",
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => switchMode("roles"),
											className: "font-extrabold text-primary underline-offset-4 hover:underline",
											children: "Create one free"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1051,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1049,
									columnNumber: 38
								}, this) : /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Already have an account?",
										" ",
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => switchMode("signin"),
											className: "font-extrabold text-primary underline-offset-4 hover:underline",
											children: "Sign in instead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1056,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1054,
									columnNumber: 26
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1048,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 418,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 411,
					columnNumber: 30
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 363,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 341,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
