import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, w as useTheme } from "./router-DnzDjJrL.mjs";
import { O as ShieldCheck, Z as Palette, b as Sun, gt as KeyRound, h as Trash2, pt as LoaderCircle, rt as Moon } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, i as demoAuditEvents } from "./router-DnzDjJrL2.mjs";
import { f as SafetyNotice, l as PageHeader } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DReeeDwx.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { t as Switch } from "./switch-ZzRHu5Zc.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.settings-LaLcwFeL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/app.settings.tsx?tsr-split=component";
var ageBands = [
	"Under 18",
	"18–29",
	"30–39",
	"40–49",
	"50–59",
	"60–69",
	"70+"
];
function SettingsPage() {
	const { state, update, resetDemo } = useStore();
	const { theme, setTheme } = useTheme();
	const [profile, setProfile] = (0, import_react.useState)(state.profile);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const save = () => {
		setSaving(true);
		window.setTimeout(() => {
			update({ profile });
			setSaving(false);
			toast.success("Profile updated", { description: "Stored locally on this device in demo mode." });
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
			title: "Profile & settings",
			description: "Your health profile shapes safety checks across Medora. Keep allergies and current medicines accurate."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
			defaultValue: "profile",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "profile",
						children: "Health profile"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "appearance",
						children: "Appearance"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "privacy",
						children: "Privacy & consent"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "security",
						children: "Security"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
						value: "activity",
						children: "Activity"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
					value: "appearance",
					className: "mt-6 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-semibold text-ink",
								children: "Theme & display preferences"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Choose your preferred interface theme. Medora is styled with warm clinical paper tones in light mode and deep high-contrast tones in dark mode."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setTheme("light"),
										className: `flex flex-col items-start gap-3 rounded-lg border p-4 text-left transition-all ${theme === "light" ? "border-primary bg-primary-soft/40 shadow-sm" : "border-border bg-card hover:border-border-strong"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-9 place-items-center rounded-md bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 65,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 64,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-ink",
											children: "Light mode"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 68,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-0.5 text-xs text-muted-foreground",
											children: "Warm clinical paper background with deep navy ink typography."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 67,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 63,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setTheme("dark"),
										className: `flex flex-col items-start gap-3 rounded-lg border p-4 text-left transition-all ${theme === "dark" ? "border-primary bg-primary-soft/40 shadow-sm" : "border-border bg-card hover:border-border-strong"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-9 place-items-center rounded-md bg-slate-800 text-teal-400",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 78,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 77,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-ink",
											children: "Dark mode"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 81,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-0.5 text-xs text-muted-foreground",
											children: "Eye-safe contrast palette designed for night use and low-light clinical reading."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 82,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 80,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 76,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setTheme("system"),
										className: `flex flex-col items-start gap-3 rounded-lg border p-4 text-left transition-all ${theme === "system" ? "border-primary bg-primary-soft/40 shadow-sm" : "border-border bg-card hover:border-border-strong"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-9 place-items-center rounded-md bg-secondary text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Palette, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 91,
												columnNumber: 19
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 90,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-ink",
											children: "System theme"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 94,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-0.5 text-xs text-muted-foreground",
											children: "Automatically synchronize with your operating system or browser settings."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 95,
											columnNumber: 19
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 93,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
					value: "profile",
					className: "mt-6 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "surface grid gap-5 p-6 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "name",
									children: "Full name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "name",
									value: profile.fullName,
									maxLength: 100,
									onChange: (e) => setProfile({
										...profile,
										fullName: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "email",
									children: "Email"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "email",
									type: "email",
									value: profile.email,
									maxLength: 255,
									onChange: (e) => setProfile({
										...profile,
										email: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "age",
									children: "Age band"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
									value: profile.ageBand,
									onValueChange: (v) => setProfile({
										...profile,
										ageBand: v
									}),
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
										id: "age",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 128,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: ageBands.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
										value: b,
										children: b
									}, b, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 38
									}, this)) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "city",
									children: "City"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "city",
									value: profile.city,
									maxLength: 80,
									onChange: (e) => setProfile({
										...profile,
										city: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5 sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
										htmlFor: "allergies",
										children: "Allergies (one per line)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
										id: "allergies",
										rows: 3,
										value: profile.allergies.join("\n"),
										onChange: (e) => setProfile({
											...profile,
											allergies: e.target.value.split("\n").filter(Boolean)
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground",
										children: "Recorded as self-reported. Always tell a pharmacist directly before anything is dispensed — Medora never substitutes for that conversation."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "meds",
									children: "Current medicines (one per line)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									id: "meds",
									rows: 3,
									value: profile.currentMedicines.join("\n"),
									onChange: (e) => setProfile({
										...profile,
										currentMedicines: e.target.value.split("\n").filter(Boolean)
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: save,
									disabled: saving,
									children: [
										saving && /* @__PURE__ */ (void 0)(LoaderCircle, {
											className: "size-4 animate-spin",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 165,
											columnNumber: 28
										}, this),
										" ",
										"Save profile"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 164,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
					value: "privacy",
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
							className: "surface divide-y divide-border",
							children: [
								{
									key: "consentInformationalUse",
									title: "I understand Medora is informational",
									body: "Medora does not diagnose, prescribe, or replace a pharmacist or doctor."
								},
								{
									key: "consentDataProcessing",
									title: "Process my health data to run safety checks",
									body: "Allergies and current medicines are used for duplicate-ingredient and allergy checks."
								},
								{
									key: "shareLocation",
									title: "Use my location for nearby pharmacies",
									body: "Location is used only to sort pharmacies by distance. It is never sold or shared."
								}
							].map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start justify-between gap-6 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-medium text-ink",
									children: row.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted-foreground",
									children: row.body
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 187,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
									checked: profile[row.key],
									"aria-label": row.title,
									onCheckedChange: (v) => {
										const next = {
											...profile,
											[row.key]: v
										};
										setProfile(next);
										update({ profile: next });
									}
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 191,
									columnNumber: 17
								}, this)]
							}, row.key, true, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 25
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 173,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SafetyNotice, {
							title: "Your data stays on this device in demo mode",
							children: "No backend is connected, so your profile, prescriptions and reminders are stored in this browser only. Connecting Medora to a backend adds encryption at rest, access logging and data-export controls."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: () => {
								resetDemo();
								toast.success("Demo data reset", { description: "Local records were cleared." });
							},
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 13
							}, this), " Reset all local demo data"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 172,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
					value: "security",
					className: "mt-6 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "surface space-y-4 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, {
									className: "mt-0.5 size-5 text-primary",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 222,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-semibold text-ink",
									children: "Two-factor authentication"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted-foreground",
									children: "Requires a connected authentication provider. Not available in this environment."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 227,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 221,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, {
									className: "mt-0.5 size-5 text-primary",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 234,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-semibold text-ink",
									children: "Password & sessions"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 236,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm text-muted-foreground",
									children: "Session management appears here once authentication is connected."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 237,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 235,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 233,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								onClick: () => toast("Authentication provider not connected", { description: "Connect an auth backend to enable 2FA and session management." }),
								children: "Review security options"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 243,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 219,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
					value: "activity",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "divide-y divide-border",
							children: demoAuditEvents.map((e) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex flex-wrap items-center justify-between gap-2 px-5 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-medium text-ink",
									children: e.action
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 256,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										e.actor,
										" · ",
										e.target
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 257,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 255,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "numeric text-xs text-muted-foreground",
									children: new Date(e.at).toLocaleString()
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 261,
									columnNumber: 19
								}, this)]
							}, e.id, true, {
								fileName: _jsxFileName,
								lineNumber: 254,
								columnNumber: 41
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 253,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 252,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 251,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 10
	}, this);
}
//#endregion
export { SettingsPage as component };
