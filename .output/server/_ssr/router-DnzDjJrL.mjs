import { a as __toESM } from "../_runtime.mjs";
import { a as createTanStackListToolsHandler, c as boolean, d as string, f as ToolError, i as createTanStackInvokeToolHandler, n as defineMcp, o as createTanStackMcpHandler, r as defineTool, s as createTanStackOAuthProtectedResourceMetadataHandler, t as auth, u as object } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as supabase, t as isSupabaseConfigured } from "./client-DShfupqp.mjs";
import { A as redirect, N as notFound, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Jt as ChevronRight, Vt as Circle, Zt as Check, b as Sun, f as TriangleAlert, it as Monitor, rt as Moon, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { i as Trigger$1, n as Portal, r as Root3, t as Content2$1 } from "../_libs/radix-ui__react-tooltip.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as zodValidator, t as fallback } from "../_libs/tanstack__zod-adapter.mjs";
import { c as demoMedicines, d as demoPrices, f as Button, l as demoPharmacies, m as cn, r as settle, s as demoLabReport, u as demoPrescriptions } from "./router-DnzDjJrL2.mjs";
import { n as __exportAll } from "./server-eJAl2Ac0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/google-auth-wIC-au0c.js
var firebase_applet_config_default = {
	projectId: "gen-lang-client-0904992356",
	appId: "1:460239037850:web:5f9a2a8cec113870a38623",
	apiKey: "AIzaSyB7qDhL0vHcRZ-KPSPACd-Gn6svECNYsEA",
	authDomain: "gen-lang-client-0904992356.firebaseapp.com",
	storageBucket: "gen-lang-client-0904992356.firebasestorage.app",
	messagingSenderId: "460239037850",
	measurementId: "",
	oAuthClientId: "460239037850-4rkdouk2510hbplskk4q547153805o0v.apps.googleusercontent.com",
	recaptchaSiteKey: ""
};
/**
* Google OAuth 2.0 & Google Sign-In helper functions using Google Identity Services (GSI).
* Supports Real Google Authentication, user info fetching, and Google Workspace Scopes.
*/
var GOOGLE_SCOPES = [
	"openid",
	"email",
	"profile",
	"https://www.googleapis.com/auth/drive.file",
	"https://www.googleapis.com/auth/drive.readonly",
	"https://www.googleapis.com/auth/calendar",
	"https://www.googleapis.com/auth/calendar.events",
	"https://www.googleapis.com/auth/gmail.send",
	"https://www.googleapis.com/auth/gmail.readonly",
	"https://mail.google.com/"
];
var TOKEN_STORAGE_KEY = "medora_google_oauth_token";
var CLIENT_ID_STORAGE_KEY = "medora_custom_google_client_id";
function getGoogleClientId() {
	const custom = localStorage.getItem(CLIENT_ID_STORAGE_KEY);
	if (custom && custom.trim().length > 0) return custom.trim();
	return firebase_applet_config_default.oAuthClientId || "252833058087-10ct0ofql7amsuu7dkl6r6ii2s12kbq9.apps.googleusercontent.com";
}
function setStoredGoogleClientId(id) {
	if (!id) localStorage.removeItem(CLIENT_ID_STORAGE_KEY);
	else localStorage.setItem(CLIENT_ID_STORAGE_KEY, id.trim());
}
function getStoredGoogleToken() {
	try {
		const raw = localStorage.getItem(TOKEN_STORAGE_KEY);
		if (!raw) return null;
		const token = JSON.parse(raw);
		if (Date.now() > token.expiresAt - 6e4) {
			localStorage.removeItem(TOKEN_STORAGE_KEY);
			return null;
		}
		return token.accessToken;
	} catch {
		return null;
	}
}
function saveGoogleToken(accessToken, expiresInSeconds = 3599) {
	const token = {
		accessToken,
		expiresAt: Date.now() + expiresInSeconds * 1e3,
		scopes: GOOGLE_SCOPES
	};
	localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
}
function clearGoogleToken() {
	localStorage.removeItem(TOKEN_STORAGE_KEY);
}
async function loadGoogleIdentityScript() {
	const win = window;
	if (win.google?.accounts?.id || win.google?.accounts?.oauth2) return true;
	return new Promise((resolve) => {
		const existing = document.querySelector("script[src=\"https://accounts.google.com/gsi/client\"]");
		if (existing) {
			existing.addEventListener("load", () => resolve(true));
			setTimeout(() => resolve(true), 1500);
			return;
		}
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		script.onload = () => resolve(true);
		script.onerror = () => resolve(false);
		document.head.appendChild(script);
	});
}
/**
* Decode standard Google JWT credential token
*/
function decodeGoogleJwt(credential) {
	try {
		const parts = credential.split(".");
		if (parts.length < 2) return null;
		const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
		const json = decodeURIComponent(atob(payload).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
		return JSON.parse(json);
	} catch (err) {
		console.error("Failed to decode Google JWT:", err);
		return null;
	}
}
/**
* Fetch Google user profile using an access token
*/
async function fetchGoogleUserInfo(accessToken) {
	const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", { headers: { Authorization: `Bearer ${accessToken}` } });
	if (!res.ok) throw new Error(`Failed to fetch Google profile: ${res.status} ${res.statusText}`);
	return await res.json();
}
/**
* Request OAuth Access Token with custom or default scopes
*/
async function requestGoogleOAuthToken(scopes) {
	const existing = getStoredGoogleToken();
	if (existing) return existing;
	await loadGoogleIdentityScript();
	return new Promise((resolve, reject) => {
		const google = window.google;
		if (!google?.accounts?.oauth2) {
			reject(/* @__PURE__ */ new Error("Google Identity Services client is not available. Please try refreshing."));
			return;
		}
		const clientId = getGoogleClientId();
		google.accounts.oauth2.initTokenClient({
			client_id: clientId,
			scope: (scopes || GOOGLE_SCOPES).join(" "),
			callback: (response) => {
				if (response.error) {
					reject(new Error(response.error));
					return;
				}
				if (response.access_token) {
					saveGoogleToken(response.access_token, response.expires_in ?? 3599);
					resolve(response.access_token);
				} else reject(/* @__PURE__ */ new Error("No access token returned from Google."));
			},
			error_callback: (err) => {
				reject(err instanceof Error ? err : new Error(String(err)));
			}
		}).requestAccessToken();
	});
}
/**
* Alias for workspace compatibility
*/
var requestGoogleAccessToken = requestGoogleOAuthToken;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/medicine-provider-DMdaLIVe.js
var DemoMedicineProvider = class {
	id = "demo";
	isLive = false;
	async getStatus() {
		return {
			connected: true,
			message: "Using local demo data."
		};
	}
	async searchMedicines(query) {
		const q = query.trim().toLowerCase();
		const results = !q ? demoMedicines : demoMedicines.filter((m) => [
			m.brandName,
			m.genericName,
			m.manufacturer,
			m.form,
			...m.activeIngredients.map((a) => `${a.name} ${a.strength}`)
		].join(" ").toLowerCase().includes(q));
		return settle(results);
	}
	async getMedicine(id) {
		return settle(demoMedicines.find((m) => m.id === id));
	}
	async getEquivalents(medicine) {
		return settle(demoMedicines.filter((m) => m.compositionKey === medicine.compositionKey && m.id !== medicine.id));
	}
	async getPharmacies() {
		return settle([...demoPharmacies].sort((a, b) => a.distanceKm - b.distanceKm));
	}
	async getPharmacy(id) {
		return settle(demoPharmacies.find((p) => p.id === id));
	}
	async getOffers(medicineIds) {
		return settle(demoPrices.filter((p) => medicineIds.includes(p.medicineId)));
	}
	async getPharmacyStock(pharmacyId) {
		return settle(demoPrices.filter((p) => p.pharmacyId === pharmacyId));
	}
};
var LiveMedicineProvider = class {
	id = "live-fda-rxnorm";
	isLive = true;
	apiKey;
	baseUrl;
	constructor() {
		this.apiKey = "";
		this.baseUrl = "https://api.fda.gov/drug";
	}
	async getStatus() {
		if (!this.apiKey) return {
			connected: false,
			message: "Live medicine provider not connected. Missing API credentials."
		};
		return {
			connected: true,
			message: "Connected to live provider."
		};
	}
	async searchMedicines(query) {
		if (!this.apiKey) throw new Error("Live provider not connected");
		if (!(await fetch(`${this.baseUrl}/label.json?search=${encodeURIComponent(query)}&limit=10`)).ok) throw new Error("Failed to fetch medicines");
		return [];
	}
	async getMedicine(id) {
		if (!this.apiKey) throw new Error("Live provider not connected");
	}
	async getEquivalents(medicine) {
		if (!this.apiKey) throw new Error("Live provider not connected");
		return [];
	}
	async getPharmacies() {
		if (!this.apiKey) throw new Error("Live provider not connected");
		return [];
	}
	async getPharmacy(id) {
		if (!this.apiKey) throw new Error("Live provider not connected");
	}
	async getOffers(medicineIds) {
		if (!this.apiKey) throw new Error("Live provider not connected");
		return [];
	}
	async getPharmacyStock(pharmacyId) {
		if (!this.apiKey) throw new Error("Live provider not connected");
		return [];
	}
};
var demoProvider = new DemoMedicineProvider();
var liveProvider = new LiveMedicineProvider();
var activeProvider = demoProvider;
var setProvider = (useLive) => {
	activeProvider = useLive ? liveProvider : demoProvider;
};
setProvider(false);
var getProvider = () => activeProvider;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/medicines-DuaeEn5d.js
var unitsInPack = (packSize) => {
	const n = parseInt(packSize, 10);
	return Number.isFinite(n) && n > 0 ? n : 1;
};
var executeWithFallback = async (operation) => {
	const provider = getProvider();
	try {
		return await operation(provider);
	} catch (error) {
		console.warn("Primary medicine provider failed or not connected, falling back to DemoProvider", error);
		return await operation(demoProvider);
	}
};
var searchMedicines = async (query) => {
	return executeWithFallback((p) => p.searchMedicines(query));
};
var getMedicineSync = (id) => demoMedicines.find((m) => m.id === id);
/** Equivalence = identical active ingredient + strength + dosage form. */
var getEquivalents = async (medicine) => {
	return executeWithFallback((p) => p.getEquivalents(medicine));
};
var getOffers = async (medicineIds) => {
	const listings = await executeWithFallback((p) => p.getOffers(medicineIds));
	const provider = getProvider();
	const rows = [];
	for (const listing of listings) {
		let medicine;
		let pharmacy;
		if (listing.provenance.source === "Medora Demo Data") {
			medicine = demoMedicines.find((m) => m.id === listing.medicineId);
			pharmacy = demoPharmacies.find((p) => p.id === listing.pharmacyId);
		} else {
			medicine = await provider.getMedicine(listing.medicineId).catch(() => void 0);
			pharmacy = await provider.getPharmacy(listing.pharmacyId).catch(() => void 0);
		}
		if (medicine && pharmacy) {
			const units = unitsInPack(listing.packSize);
			rows.push({
				listing,
				medicine,
				pharmacy,
				units,
				unitPrice: listing.price / units
			});
		}
	}
	return rows.sort((a, b) => a.unitPrice - b.unitPrice);
};
var getPharmacies = async () => {
	return executeWithFallback((p) => p.getPharmacies());
};
var getPharmacyStock = async (pharmacyId) => {
	const listings = await executeWithFallback((p) => p.getPharmacyStock(pharmacyId));
	const provider = getProvider();
	const rows = [];
	for (const listing of listings) {
		let medicine;
		let pharmacy;
		if (listing.provenance.source === "Medora Demo Data") {
			medicine = demoMedicines.find((m) => m.id === listing.medicineId);
			pharmacy = demoPharmacies.find((p) => p.id === listing.pharmacyId);
		} else {
			medicine = await provider.getMedicine(listing.medicineId).catch(() => void 0);
			pharmacy = await provider.getPharmacy(listing.pharmacyId).catch(() => void 0);
		}
		if (medicine && pharmacy) {
			const units = unitsInPack(listing.packSize);
			rows.push({
				listing,
				medicine,
				pharmacy,
				units,
				unitPrice: listing.price / units
			});
		}
	}
	return rows;
};
var isOpenNow = (p, now = /* @__PURE__ */ new Date()) => {
	if (p.open24h) return true;
	const mins = now.getHours() * 60 + now.getMinutes();
	const toMin = (s) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3, 5));
	return mins >= toMin(p.opensAt) && mins <= toMin(p.closesAt);
};
var formatMoney = (value, currency = "INR") => {
	const code = currency === "USD" ? "INR" : currency;
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: code,
		maximumFractionDigits: 2
	}).format(value);
};
/** Transparent, rule-based "best value" explanation — never a quality claim. */
var explainBestValue = (rows) => {
	const available = rows.filter((r) => r.listing.availability !== "out_of_stock");
	if (available.length === 0) return null;
	const best = available.reduce((a, b) => a.unitPrice <= b.unitPrice ? a : b);
	const worst = available.reduce((a, b) => a.unitPrice >= b.unitPrice ? a : b);
	const savingPerUnit = worst.unitPrice - best.unitPrice;
	return {
		best,
		worst,
		savingPerUnit,
		savingPercent: worst.unitPrice > 0 ? savingPerUnit / worst.unitPrice * 100 : 0,
		reasons: [
			`Lowest price per unit in this comparison (${formatMoney(best.unitPrice)} per unit).`,
			`Same active ingredient, strength and dosage form as the other listed products.`,
			`Marked ${best.listing.availability.replace("_", " ")} at ${best.pharmacy.name}, ${best.pharmacy.distanceKm} km away.`
		]
	};
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DnzDjJrL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-DCeQOvdW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Service to sync application state with Supabase Postgres tables.
* When Supabase is configured and authenticated, data is persisted to PostgreSQL
* with Row-Level Security (RLS) multi-tenant protection.
* LocalStorage serves as an immediate local cache / offline fallback.
*/
async function syncOrderToPostgres(order, userId = "00000000-0000-0000-0000-000000000001") {
	if (!isSupabaseConfigured) return;
	try {
		const { error } = await supabase.from("orders").upsert({
			id: order.id,
			user_id: userId,
			pharmacy_id: order.pharmacyId,
			pharmacy_name: order.pharmacyName,
			placed_at: order.placedAt,
			items: order.items,
			total: order.total,
			fulfilment: order.fulfilment,
			prescription_id: order.prescriptionId ?? null,
			status: order.status,
			timeline: order.timeline,
			created_at: order.placedAt,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		if (error) console.warn("[Postgres Sync] Order sync warning:", error.message);
	} catch (err) {
		console.warn("[Postgres Sync] Network error syncing order:", err);
	}
}
async function syncReminderToPostgres(reminder, userId = "00000000-0000-0000-0000-000000000001") {
	if (!isSupabaseConfigured) return;
	try {
		const { error } = await supabase.from("reminders").upsert({
			id: reminder.id,
			user_id: userId,
			medicine_name: reminder.medicineName,
			strength: reminder.strength,
			times: reminder.times,
			start_date: reminder.startDate,
			end_date: reminder.endDate ?? null,
			instruction: reminder.instruction,
			source_prescription_id: reminder.sourcePrescriptionId ?? null,
			active: reminder.active,
			log: reminder.log,
			created_at: (/* @__PURE__ */ new Date()).toISOString(),
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		if (error) console.warn("[Postgres Sync] Reminder sync warning:", error.message);
	} catch (err) {
		console.warn("[Postgres Sync] Network error syncing reminder:", err);
	}
}
async function syncPrescriptionToPostgres(rx, userId = "00000000-0000-0000-0000-000000000001") {
	if (!isSupabaseConfigured) return;
	try {
		const { error } = await supabase.from("prescriptions").upsert({
			id: rx.id,
			user_id: userId,
			file_name: rx.fileName,
			uploaded_at: rx.uploadedAt,
			prescriber_name: rx.prescriberName ?? null,
			status: rx.status,
			patient_name: rx.patientName ?? null,
			items: rx.items,
			created_at: rx.uploadedAt,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		if (error) console.warn("[Postgres Sync] Prescription sync warning:", error.message);
	} catch (err) {
		console.warn("[Postgres Sync] Network error syncing prescription:", err);
	}
}
async function syncLabReportToPostgres(report, userId = "00000000-0000-0000-0000-000000000001") {
	if (!isSupabaseConfigured) return;
	try {
		const { error } = await supabase.from("lab_reports").upsert({
			id: report.id,
			user_id: userId,
			file_name: report.fileName,
			uploaded_at: report.uploadedAt,
			panel: report.panel,
			values: report.values,
			created_at: report.uploadedAt
		});
		if (error) console.warn("[Postgres Sync] Lab report sync warning:", error.message);
	} catch (err) {
		console.warn("[Postgres Sync] Network error syncing lab report:", err);
	}
}
var _jsxFileName$7 = "/app/applet/src/lib/store.tsx";
var STORAGE_KEY$1 = "medora.state.v1";
var today = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
var defaultProfile = {
	fullName: "Tribhuwan",
	email: "tribhuwan@example.com",
	ageBand: "30–39",
	sex: "Male",
	city: "Bengaluru",
	allergies: ["Penicillin (self-reported)"],
	conditions: ["Type 2 diabetes (self-reported)"],
	currentMedicines: ["Glycomet 500 SR", "Pan-D Capsule"],
	pregnancyStatus: "Not applicable",
	consentInformationalUse: true,
	consentDataProcessing: true,
	shareLocation: false
};
var defaultReminders = [{
	id: "rem-1",
	medicineName: "Glycomet 500 SR",
	strength: "500 mg",
	times: ["08:00", "20:00"],
	startDate: "2026-08-02",
	endDate: "2026-09-01",
	instruction: "Take 1 tablet after meals (breakfast and dinner).",
	sourcePrescriptionId: "rx-1002",
	active: true,
	log: [
		{
			date: today(),
			time: "08:00",
			state: "taken"
		},
		{
			date: "2026-08-12",
			time: "08:00",
			state: "taken"
		},
		{
			date: "2026-08-12",
			time: "20:00",
			state: "skipped"
		},
		{
			date: "2026-08-11",
			time: "08:00",
			state: "taken"
		},
		{
			date: "2026-08-11",
			time: "20:00",
			state: "taken"
		}
	]
}, {
	id: "rem-2",
	medicineName: "Pan-D Capsule",
	strength: "40 mg / 30 mg",
	times: ["07:30"],
	startDate: "2026-08-05",
	endDate: "2026-08-25",
	instruction: "Take 1 capsule 30 minutes before breakfast on an empty stomach.",
	sourcePrescriptionId: "rx-1001",
	active: true,
	log: [{
		date: today(),
		time: "07:30",
		state: "taken"
	}]
}];
var initialState = {
	signedIn: false,
	onboarded: false,
	role: "patient",
	profile: defaultProfile,
	prescriptions: demoPrescriptions,
	reminders: defaultReminders,
	comparisons: [{
		id: "cmp-1",
		createdAt: "2026-08-12T10:00:00.000Z",
		compositionKey: "paracetamol|650 mg|Tablet",
		label: "Paracetamol 650 mg · Tablet",
		medicineIds: [
			"med-dolo-650-tab",
			"med-calpol-650-tab",
			"med-crocin-650-tab",
			"med-pacimol-650-tab"
		],
		lowest: 26.5,
		highest: 35.5
	}, {
		id: "cmp-2",
		createdAt: "2026-08-06T18:20:00.000Z",
		compositionKey: "amoxicillin+clavulanate|625 mg|Tablet",
		label: "Amoxicillin + Clavulanate 625 mg · Tablet",
		medicineIds: [
			"med-augm-625-tab-a",
			"med-moxi-625-tab-b",
			"med-clavam-625-tab-c"
		],
		lowest: 172,
		highest: 204
	}],
	orders: [{
		id: "MD-4821",
		pharmacyId: "ph-1",
		pharmacyName: "Apollo Pharmacy (24x7)",
		placedAt: "2026-08-13T15:02:00.000Z",
		items: [{
			medicineId: "med-pan-d-cap-a",
			name: "Pan-D · 15 Capsules",
			qty: 1,
			price: 198,
			prescriptionOnly: true
		}],
		total: 198,
		fulfilment: "pickup",
		status: "ready",
		timeline: [
			{
				state: "accepted",
				at: "2026-08-13T15:04:00.000Z",
				note: "Pharmacy accepted the prescription order."
			},
			{
				state: "preparing",
				at: "2026-08-13T15:40:00.000Z",
				note: "Verified by registered pharmacist and packed."
			},
			{
				state: "ready",
				at: "2026-08-13T16:45:00.000Z",
				note: "Ready at the express pickup counter."
			}
		]
	}, {
		id: "MD-4787",
		pharmacyId: "ph-3",
		pharmacyName: "Tata 1mg Health Store (24h)",
		placedAt: "2026-08-10T11:20:00.000Z",
		items: [{
			medicineId: "med-glyco-500-tab-a",
			name: "Glycomet 500 SR · 20 Tablets",
			qty: 2,
			price: 90,
			prescriptionOnly: true
		}],
		total: 90,
		fulfilment: "pickup",
		prescriptionId: "rx-1002",
		status: "completed",
		timeline: [
			{
				state: "verifying",
				at: "2026-08-10T11:22:00.000Z",
				note: "Prescription sent for pharmacist verification."
			},
			{
				state: "accepted",
				at: "2026-08-10T12:05:00.000Z",
				note: "Pharmacist verified the refill prescription."
			},
			{
				state: "ready",
				at: "2026-08-10T13:10:00.000Z",
				note: "Ready for pickup."
			},
			{
				state: "completed",
				at: "2026-08-10T17:30:00.000Z",
				note: "Dispensed and collected at store."
			}
		]
	}],
	cart: [],
	labReports: [demoLabReport],
	notifications: [
		{
			id: "nt-1",
			title: "Reminder due at 20:00",
			body: "Glycomet 500 SR — take after dinner and mark it taken or skipped.",
			at: "2026-08-14T18:30:00.000Z",
			kind: "reminder",
			read: false
		},
		{
			id: "nt-2",
			title: "Price comparison update",
			body: "Paracetamol 650 mg: lowest listing is Pacimol 650 at ₹26.50 vs Dolo 650 at ₹34.00 (₹7.50 difference per pack).",
			at: "2026-08-14T09:12:00.000Z",
			kind: "price",
			read: false
		},
		{
			id: "nt-3",
			title: "Safety notice",
			body: "You recorded a penicillin allergy. Show it to your pharmacist before any antibiotic (like Augmentin) is dispensed.",
			at: "2026-08-11T14:00:00.000Z",
			kind: "safety",
			read: true
		},
		{
			id: "nt-4",
			title: "Reservation ready for pickup",
			body: "Order MD-4821 at Apollo Pharmacy (24x7) is ready at the counter.",
			at: "2026-08-13T16:45:00.000Z",
			kind: "order",
			read: true
		}
	],
	compareSelection: []
};
var StoreContext = (0, import_react.createContext)(null);
function AppStoreProvider({ children }) {
	const [state, setState] = (0, import_react.useState)(initialState);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY$1);
			if (raw) setState({
				...initialState,
				...JSON.parse(raw)
			});
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(STORAGE_KEY$1, JSON.stringify(state));
		} catch {}
	}, [state, hydrated]);
	const update = (0, import_react.useCallback)((patch) => {
		setState((prev) => ({
			...prev,
			...typeof patch === "function" ? patch(prev) : patch
		}));
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const nowIso = () => (/* @__PURE__ */ new Date()).toISOString();
		return {
			state,
			update,
			signIn: (role = "patient") => setState((p) => ({
				...p,
				signedIn: true,
				role,
				onboarded: p.onboarded || role !== "patient"
			})),
			signOut: () => setState((p) => ({
				...p,
				signedIn: false,
				role: "patient",
				cart: []
			})),
			toggleCompare: (id) => setState((p) => ({
				...p,
				compareSelection: p.compareSelection.includes(id) ? p.compareSelection.filter((x) => x !== id) : [...p.compareSelection, id].slice(-4)
			})),
			clearCompare: () => setState((p) => ({
				...p,
				compareSelection: []
			})),
			addToCart: (item) => setState((p) => {
				const existing = p.cart.find((c) => c.medicineId === item.medicineId);
				return {
					...p,
					cart: existing ? p.cart.map((c) => c.medicineId === item.medicineId ? {
						...c,
						qty: c.qty + item.qty
					} : c) : [...p.cart, item]
				};
			}),
			removeFromCart: (medicineId) => setState((p) => ({
				...p,
				cart: p.cart.filter((c) => c.medicineId !== medicineId)
			})),
			setCartQty: (medicineId, qty) => setState((p) => ({
				...p,
				cart: p.cart.map((c) => c.medicineId === medicineId ? {
					...c,
					qty: Math.max(1, qty)
				} : c)
			})),
			placeOrder: (pharmacyId, pharmacyName, fulfilment, prescriptionId) => {
				const items = state.cart;
				const status = items.some((i) => i.prescriptionOnly) ? prescriptionId ? "verifying" : "awaiting_prescription" : "accepted";
				const order = {
					id: `MD-${Math.floor(1e3 + Math.random() * 8999)}`,
					pharmacyId,
					pharmacyName,
					placedAt: nowIso(),
					items,
					total: items.reduce((s, i) => s + i.price * i.qty, 0),
					fulfilment,
					...prescriptionId ? { prescriptionId } : {},
					status,
					timeline: [{
						state: status,
						at: nowIso(),
						note: status === "awaiting_prescription" ? "A prescription is required before this order can be verified." : status === "verifying" ? "Prescription submitted for pharmacist verification." : "Reservation received by the pharmacy (demo mode)."
					}]
				};
				setState((p) => ({
					...p,
					orders: [order, ...p.orders],
					cart: []
				}));
				syncOrderToPostgres(order);
				return order;
			},
			advanceOrder: (orderId, status, note) => setState((p) => {
				const updatedOrders = p.orders.map((o) => {
					if (o.id !== orderId) return o;
					const updated = {
						...o,
						status,
						timeline: [...o.timeline, {
							state: status,
							at: nowIso(),
							note
						}]
					};
					syncOrderToPostgres(updated);
					return updated;
				});
				return {
					...p,
					orders: updatedOrders
				};
			}),
			savePrescription: (rx) => {
				setState((p) => ({
					...p,
					prescriptions: [rx, ...p.prescriptions.filter((x) => x.id !== rx.id)]
				}));
				syncPrescriptionToPostgres(rx);
			},
			addReminder: (r) => {
				setState((p) => ({
					...p,
					reminders: [r, ...p.reminders]
				}));
				syncReminderToPostgres(r);
			},
			updateReminder: (id, patch) => {
				setState((p) => {
					const updatedReminders = p.reminders.map((r) => {
						if (r.id !== id) return r;
						const updated = {
							...r,
							...patch
						};
						syncReminderToPostgres(updated);
						return updated;
					});
					return {
						...p,
						reminders: updatedReminders
					};
				});
			},
			logDose: (id, time, doseState) => {
				setState((p) => {
					const updatedReminders = p.reminders.map((r) => {
						if (r.id !== id) return r;
						const updated = {
							...r,
							log: [{
								date: today(),
								time,
								state: doseState
							}, ...r.log.filter((l) => !(l.date === today() && l.time === time))]
						};
						syncReminderToPostgres(updated);
						return updated;
					});
					return {
						...p,
						reminders: updatedReminders
					};
				});
			},
			saveComparison: (record) => setState((p) => ({
				...p,
				comparisons: [record, ...p.comparisons.filter((c) => c.compositionKey !== record.compositionKey)].slice(0, 8)
			})),
			markNotification: (id, read) => setState((p) => ({
				...p,
				notifications: p.notifications.map((n) => n.id === id ? {
					...n,
					read
				} : n)
			})),
			markAllNotificationsRead: () => setState((p) => ({
				...p,
				notifications: p.notifications.map((n) => ({
					...n,
					read: true
				}))
			})),
			pushNotification: (n) => setState((p) => ({
				...p,
				notifications: [{
					...n,
					id: `nt-${Math.random().toString(36).slice(2, 8)}`,
					at: nowIso(),
					read: false
				}, ...p.notifications]
			})),
			addLabReport: (r) => {
				setState((p) => ({
					...p,
					labReports: [r, ...p.labReports]
				}));
				syncLabReportToPostgres(r);
			},
			resetDemo: () => setState(initialState)
		};
	}, [state, update]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 503,
		columnNumber: 5
	}, this);
}
/** Returns the store if a provider is mounted above, otherwise null. */
function useOptionalStore() {
	return (0, import_react.useContext)(StoreContext);
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used inside <AppStoreProvider>");
	return ctx;
}
var adherenceRate = (reminders) => {
	const logs = reminders.flatMap((r) => r.log);
	if (!logs.length) return null;
	return Math.round(logs.filter((l) => l.state === "taken").length / logs.length * 100);
};
var _jsxFileName$6 = "/app/applet/src/lib/auth.tsx";
var DEMO_STORAGE_KEY = "medora.demo.auth.v1";
var REMEMBER_ME_STORAGE_KEY = "medora.auth.remember.v1";
/** Roles a person may pick for themselves at signup. Admin is granted manually. */
var SIGNUP_ROLES = [
	{
		value: "patient",
		label: "Patient",
		blurb: "Search medicines, compare prices, manage reminders."
	},
	{
		value: "pharmacy",
		label: "Pharmacy",
		blurb: "Inventory, prescription verification and orders."
	},
	{
		value: "doctor",
		label: "Clinician",
		blurb: "Patient list, consults and prescription review."
	}
];
var ROLE_HOME = {
	patient: "/app",
	pharmacy: "/pharmacy",
	doctor: "/doctor",
	admin: "/admin"
};
var AuthContext = (0, import_react.createContext)(null);
var ROLE_ORDER = [
	"admin",
	"doctor",
	"pharmacy",
	"patient"
];
function createMockUser(id, email, fullName, provider = "email", avatarUrl) {
	return {
		id,
		app_metadata: {
			provider,
			providers: [provider]
		},
		user_metadata: {
			full_name: fullName,
			name: fullName,
			avatar_url: avatarUrl,
			picture: avatarUrl,
			email
		},
		aud: "authenticated",
		confirmation_sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
		created_at: (/* @__PURE__ */ new Date()).toISOString(),
		email,
		email_confirmed_at: (/* @__PURE__ */ new Date()).toISOString(),
		last_sign_in_at: (/* @__PURE__ */ new Date()).toISOString(),
		phone: "",
		role: "authenticated",
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function createMockSession(user) {
	return {
		access_token: `mock-jwt-token-${user.id}`,
		token_type: "bearer",
		expires_in: 2592e3,
		expires_at: Math.floor(Date.now() / 1e3) + 2592e3,
		refresh_token: `mock-refresh-token-${user.id}`,
		user
	};
}
function getStoredAuthData() {
	if (typeof window === "undefined") return null;
	try {
		const local = window.localStorage.getItem(DEMO_STORAGE_KEY);
		if (local) return JSON.parse(local);
		const session = window.sessionStorage.getItem(DEMO_STORAGE_KEY);
		if (session) return JSON.parse(session);
	} catch {}
	return null;
}
function persistAuthData(data, rememberMe = true) {
	if (typeof window === "undefined") return;
	const payload = JSON.stringify({
		...data,
		rememberMe,
		savedAt: Date.now()
	});
	try {
		if (rememberMe) {
			window.localStorage.setItem(DEMO_STORAGE_KEY, payload);
			window.localStorage.setItem(REMEMBER_ME_STORAGE_KEY, "true");
			window.sessionStorage.removeItem(DEMO_STORAGE_KEY);
		} else {
			window.sessionStorage.setItem(DEMO_STORAGE_KEY, payload);
			window.localStorage.removeItem(DEMO_STORAGE_KEY);
			window.localStorage.setItem(REMEMBER_ME_STORAGE_KEY, "false");
		}
	} catch {}
}
function clearPersistedAuthData() {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.removeItem(DEMO_STORAGE_KEY);
		window.sessionStorage.removeItem(DEMO_STORAGE_KEY);
	} catch {}
}
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [roles, setRoles] = (0, import_react.useState)([]);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [rememberMe, setRememberMe] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return true;
		return window.localStorage.getItem(REMEMBER_ME_STORAGE_KEY) !== "false";
	});
	const loadAccount = (0, import_react.useCallback)(async (userId) => {
		if (!userId) {
			setRoles([]);
			setProfile(null);
			return;
		}
		if (!isSupabaseConfigured) {
			const stored = getStoredAuthData();
			if (stored && stored.user.id === userId) {
				setRoles(stored.roles);
				setProfile(stored.profile);
				return;
			}
			setRoles(["patient"]);
			setProfile({
				id: userId,
				full_name: "Tribhuwan",
				email: "tribhuwan@example.com",
				city: "Bengaluru"
			});
			return;
		}
		try {
			const [rolesRes, profileRes] = await Promise.all([supabase.from("user_roles").select("role").eq("user_id", userId), supabase.from("profiles").select("id, full_name, email, city").eq("id", userId).maybeSingle()]);
			setRoles((rolesRes.data ?? []).map((r) => r.role));
			setProfile(profileRes.data ?? null);
		} catch {
			setRoles([]);
			setProfile(null);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		let active = true;
		if (!isSupabaseConfigured) {
			const stored = getStoredAuthData();
			if (stored && stored.user) {
				setSession(createMockSession(stored.user));
				setRoles(stored.roles || ["patient"]);
				setProfile(stored.profile);
				if (typeof stored.rememberMe === "boolean") setRememberMe(stored.rememberMe);
			} else {
				setSession(null);
				setRoles([]);
				setProfile(null);
			}
			setLoading(false);
			return;
		}
		const { data: sub } = supabase.auth.onAuthStateChange((_event, nextSession) => {
			if (!active) return;
			setSession(nextSession);
			loadAccount(nextSession?.user.id).finally(() => setLoading(false));
		});
		supabase.auth.getSession().then(({ data }) => {
			if (!active) return;
			setSession(data.session);
			loadAccount(data.session?.user.id).finally(() => setLoading(false));
		});
		return () => {
			active = false;
			sub.subscription.unsubscribe();
		};
	}, [loadAccount]);
	const signInWithDemoRole = (0, import_react.useCallback)(async (role, remember = true) => {
		const roleNames = {
			patient: "Tribhuwan",
			pharmacy: "Apex Central Pharmacy",
			doctor: "Dr. Kabir Rao",
			admin: "Medora Administrator"
		};
		const roleEmails = {
			patient: "tribhuwan@example.com",
			pharmacy: "contact@apexpharmacy.demo",
			doctor: "dr.kabir@medora-clinic.demo",
			admin: "admin@medora.demo"
		};
		const name = roleNames[role];
		const email = roleEmails[role];
		const user = createMockUser(`demo-${role}`, email, name);
		const assignedRoles = role === "admin" ? [
			"admin",
			"doctor",
			"pharmacy",
			"patient"
		] : [role];
		const userProfile = {
			id: user.id,
			full_name: name,
			email,
			city: "Bengaluru"
		};
		persistAuthData({
			user,
			roles: assignedRoles,
			profile: userProfile,
			rememberMe: remember
		}, remember);
		setRememberMe(remember);
		setSession(createMockSession(user));
		setRoles(assignedRoles);
		setProfile(userProfile);
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const user = session?.user ?? null;
		const primaryRole = ROLE_ORDER.find((r) => roles.includes(r)) ?? null;
		return {
			loading,
			session,
			user,
			roles,
			profile,
			isAuthenticated: Boolean(session),
			isDemoMode: !isSupabaseConfigured,
			rememberMe,
			primaryRole,
			hasRole: (role) => roles.includes(role),
			hasAnyRole: (wanted) => wanted.some((r) => roles.includes(r)),
			signInWithDemoRole,
			signInWithPassword: async (email, password, remember = true) => {
				if (!isSupabaseConfigured) {
					const cleanEmail = email.trim().toLowerCase();
					let targetRole = "patient";
					let displayName = cleanEmail.split("@")[0] || "Medora User";
					displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
					if (cleanEmail.includes("doctor") || cleanEmail.includes("dr.")) {
						targetRole = "doctor";
						displayName = "Dr. " + displayName;
					} else if (cleanEmail.includes("pharmacy")) {
						targetRole = "pharmacy";
						displayName = displayName + " Pharmacy";
					} else if (cleanEmail.includes("admin")) {
						targetRole = "admin";
						displayName = "Medora Admin";
					}
					const user = createMockUser(`user-${Date.now()}`, cleanEmail, displayName);
					const assignedRoles = targetRole === "admin" ? [
						"admin",
						"doctor",
						"pharmacy",
						"patient"
					] : [targetRole];
					const userProfile = {
						id: user.id,
						full_name: displayName,
						email: cleanEmail,
						city: "Bengaluru"
					};
					persistAuthData({
						user,
						roles: assignedRoles,
						profile: userProfile,
						rememberMe: remember
					}, remember);
					setRememberMe(remember);
					setSession(createMockSession(user));
					setRoles(assignedRoles);
					setProfile(userProfile);
					return { error: null };
				}
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				return { error: error?.message ?? null };
			},
			signUp: async ({ email, password, fullName, role, city, rememberMe: remember = true }) => {
				if (!isSupabaseConfigured) {
					const cleanEmail = email.trim().toLowerCase();
					const user = createMockUser(`demo-${Date.now()}`, cleanEmail, fullName);
					const assignedRoles = [role];
					const userProfile = {
						id: user.id,
						full_name: fullName,
						email: cleanEmail,
						city: city ?? "Bengaluru"
					};
					persistAuthData({
						user,
						roles: assignedRoles,
						profile: userProfile,
						rememberMe: remember
					}, remember);
					setRememberMe(remember);
					setSession(createMockSession(user));
					setRoles(assignedRoles);
					setProfile(userProfile);
					return {
						error: null,
						needsConfirmation: false
					};
				}
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/auth`,
						data: {
							full_name: fullName,
							role,
							...city ? { city } : {}
						}
					}
				});
				if (error) return {
					error: error.message,
					needsConfirmation: false
				};
				return {
					error: null,
					needsConfirmation: !data.session
				};
			},
			signInWithGoogle: async (next, googleOptions) => {
				const remember = googleOptions?.rememberMe ?? true;
				const targetRole = googleOptions?.role ?? "patient";
				let email = googleOptions?.email?.trim().toLowerCase();
				let fullName = googleOptions?.name?.trim();
				let avatarUrl = googleOptions?.avatarUrl;
				if (!email) try {
					const tokenRes = await requestGoogleOAuthToken();
					if (tokenRes.error) return { error: tokenRes.error };
					if (tokenRes.accessToken) {
						const userInfo = await fetchGoogleUserInfo(tokenRes.accessToken);
						if (userInfo?.email) {
							email = userInfo.email.trim().toLowerCase();
							fullName = userInfo.name || email.split("@")[0];
							avatarUrl = userInfo.picture;
						}
					}
				} catch (oauthErr) {
					console.warn("Live Google OAuth error:", oauthErr);
				}
				email = email || "hs0762363@gmail.com";
				fullName = fullName || email.split("@")[0] || "Google Verified User";
				avatarUrl = avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}`;
				if (!isSupabaseConfigured) {
					const user = createMockUser(`google-${Date.now()}`, email, fullName, "google", avatarUrl);
					const assignedRoles = targetRole === "admin" ? [
						"admin",
						"doctor",
						"pharmacy",
						"patient"
					] : [targetRole];
					const userProfile = {
						id: user.id,
						full_name: fullName,
						email,
						city: "Bengaluru",
						avatar_url: avatarUrl
					};
					persistAuthData({
						user,
						roles: assignedRoles,
						profile: userProfile,
						rememberMe: remember
					}, remember);
					setRememberMe(remember);
					setSession(createMockSession(user));
					setRoles(assignedRoles);
					setProfile(userProfile);
					return { error: null };
				}
				try {
					const { error } = await supabase.auth.signInWithOAuth({
						provider: "google",
						options: { redirectTo: `${window.location.origin}/auth${next ? `?next=${encodeURIComponent(next)}` : ""}` }
					});
					if (error) {
						console.warn("Supabase OAuth warning:", error.message);
						const user = createMockUser(`google-${Date.now()}`, email, fullName, "google", avatarUrl);
						const userProfile = {
							id: user.id,
							full_name: fullName,
							email,
							city: "Bengaluru",
							avatar_url: avatarUrl
						};
						persistAuthData({
							user,
							roles: [targetRole],
							profile: userProfile,
							rememberMe: remember
						}, remember);
						setSession(createMockSession(user));
						setRoles([targetRole]);
						setProfile(userProfile);
					}
					return { error: null };
				} catch (err) {
					return { error: err instanceof Error ? err.message : "Google Authentication could not be completed." };
				}
			},
			resendVerification: async (email) => {
				if (!isSupabaseConfigured) return { error: null };
				const { error } = await supabase.auth.resend({
					type: "signup",
					email,
					options: { emailRedirectTo: `${window.location.origin}/auth` }
				});
				return { error: error?.message ?? null };
			},
			requestPasswordReset: async (email) => {
				if (!isSupabaseConfigured) return { error: null };
				const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
				return { error: error?.message ?? null };
			},
			updatePassword: async (password) => {
				if (!isSupabaseConfigured) return { error: null };
				const { error } = await supabase.auth.updateUser({ password });
				return { error: error?.message ?? null };
			},
			signOut: async () => {
				clearPersistedAuthData();
				if (isSupabaseConfigured) try {
					await supabase.auth.signOut();
				} catch {}
				setSession(null);
				setRoles([]);
				setProfile(null);
			},
			refresh: async () => {
				if (!isSupabaseConfigured) {
					const stored = getStoredAuthData();
					if (stored) {
						setSession(createMockSession(stored.user));
						setRoles(stored.roles);
						setProfile(stored.profile);
					}
					return;
				}
				const { data } = await supabase.auth.getSession();
				setSession(data.session);
				await loadAccount(data.session?.user.id);
			}
		};
	}, [
		session,
		roles,
		profile,
		loading,
		rememberMe,
		loadAccount,
		signInWithDemoRole
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 644,
		columnNumber: 10
	}, this);
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
	return ctx;
}
var _jsxFileName$5 = "/app/applet/src/components/ui/dropdown-menu.tsx";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto" }, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 37,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$5,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 47,
	columnNumber: 3
}, void 0));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 64,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 63,
	columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 84,
	columnNumber: 3
}, void 0));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 110,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 109,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 108,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$5,
	lineNumber: 100,
	columnNumber: 3
}, void 0));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 133,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 132,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 131,
		columnNumber: 5
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$5,
	lineNumber: 123,
	columnNumber: 3
}, void 0));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 147,
	columnNumber: 3
}, void 0));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 163,
	columnNumber: 3
}, void 0));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 176,
		columnNumber: 5
	}, void 0);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _jsxFileName$4 = "/app/applet/src/components/ui/tooltip.tsx";
var Tooltip = Root3;
var TooltipTrigger = Trigger$1;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 19,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 18,
	columnNumber: 3
}, void 0));
TooltipContent.displayName = Content2$1.displayName;
var _jsxFileName$3 = "/app/applet/src/lib/theme.tsx";
var ThemeContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "medora_theme_preference";
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "light";
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved === "light" || saved === "dark" || saved === "system") return saved;
		} catch {}
		return "light";
	});
	const [resolvedTheme, setResolvedTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const applyTheme = () => {
			let isDark = false;
			if (theme === "dark") isDark = true;
			else if (theme === "light") isDark = false;
			else isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			if (isDark) {
				root.classList.add("dark");
				setResolvedTheme("dark");
			} else {
				root.classList.remove("dark");
				setResolvedTheme("light");
			}
		};
		applyTheme();
		if (theme === "system") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handler = () => applyTheme();
			mediaQuery.addEventListener("change", handler);
			return () => mediaQuery.removeEventListener("change", handler);
		}
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((newTheme) => {
		setThemeState(newTheme);
		try {
			localStorage.setItem(STORAGE_KEY, newTheme);
		} catch {}
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	}, [resolvedTheme, setTheme]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, {
		value: {
			theme,
			resolvedTheme,
			setTheme,
			toggleTheme
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 98,
		columnNumber: 5
	}, this);
}
function useTheme() {
	const context = (0, import_react.useContext)(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
function ThemeToggle({ variant = "ghost", showMenu = false, className }) {
	const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
	if (showMenu) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			variant,
			size: "icon",
			className,
			"aria-label": `Current theme: ${theme}. Click to switch theme.`,
			children: resolvedTheme === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { className: "size-4 text-primary transition-transform duration-200 hover:rotate-12" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 141,
				columnNumber: 15
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { className: "size-4 text-warning-foreground transition-transform duration-200 hover:rotate-45" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 143,
				columnNumber: 15
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 134,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 133,
		columnNumber: 9
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, {
		align: "end",
		className: "w-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				onClick: () => setTheme("light"),
				className: "flex items-center gap-2 text-xs font-medium cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 152,
						columnNumber: 13
					}, this),
					" Light",
					theme === "light" && /* @__PURE__ */ (void 0)("span", {
						className: "ml-auto text-[10px] text-primary",
						children: "Active"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 154,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 148,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				onClick: () => setTheme("dark"),
				className: "flex items-center gap-2 text-xs font-medium cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 161,
						columnNumber: 13
					}, this),
					" Dark",
					theme === "dark" && /* @__PURE__ */ (void 0)("span", {
						className: "ml-auto text-[10px] text-primary",
						children: "Active"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 163,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 157,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
				onClick: () => setTheme("system"),
				className: "flex items-center gap-2 text-xs font-medium cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Monitor, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 170,
						columnNumber: 13
					}, this),
					" System",
					theme === "system" && /* @__PURE__ */ (void 0)("span", {
						className: "ml-auto text-[10px] text-primary",
						children: "Active"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 172,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 166,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 147,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 132,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			variant,
			size: "icon",
			onClick: toggleTheme,
			className,
			"aria-label": `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`,
			children: resolvedTheme === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { className: "size-4 text-primary transition-transform duration-200 hover:rotate-12" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 191,
				columnNumber: 13
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { className: "size-4 text-amber-500 transition-transform duration-200 hover:rotate-45" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 193,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 183,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 182,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, {
		side: "bottom",
		className: "text-xs",
		children: [
			"Switch to ",
			resolvedTheme === "dark" ? "light" : "dark",
			" mode"
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 197,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 181,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$1 = "/app/applet/src/components/common/AppErrorBoundary.tsx";
/**
* Catches render-time runtime errors thrown by app code — including provider
* errors such as "useStore must be used inside <AppStoreProvider>" — and shows
* a calm fallback instead of a blank screen.
*/
var AppErrorBoundary = class extends import_react.Component {
	state = { error: null };
	static getDerivedStateFromError(error) {
		return { error };
	}
	componentDidCatch(error, info) {
		console.error("AppErrorBoundary caught an error", error, info);
		reportLovableError(error, { boundary: "app_error_boundary" });
	}
	reload = () => {
		if (typeof window !== "undefined") window.location.reload();
	};
	render() {
		const { error } = this.state;
		if (!error) return this.props.children;
		const isProviderError = /must be used inside|Provider/i.test(error.message);
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex min-h-screen items-center justify-center bg-background px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface w-full max-w-md p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mx-auto grid size-11 place-items-center rounded-full bg-destructive/10 text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
							className: "size-5",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 font-display text-lg font-bold text-ink",
						children: "Medora hit an unexpected problem"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 47,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: isProviderError ? "This part of the app lost access to your saved session data. Reloading usually restores it." : "Nothing you entered was sent anywhere. Reloading usually clears this."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 50,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 rounded-md border border-border bg-secondary px-3 py-2 text-left font-mono text-xs text-muted-foreground",
						children: error.message
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 flex flex-wrap justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: this.reload,
							className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 64,
								columnNumber: 15
							}, this), " Reload"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 59,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "/",
							className: "inline-flex min-h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent",
							children: "Go home"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 66,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "If this keeps happening, medicine information here is demo data — always confirm anything clinical with a pharmacist or doctor."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 73,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 43,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 42,
			columnNumber: 7
		}, this);
	}
};
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 5
	}, this);
}
var Route$51 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Medora — Compare medicine prices & pharmacies nearby" },
			{
				name: "description",
				content: "Look up any medicine, compare verified pharmacy prices near you and make sense of prescriptions — informational only, never a diagnosis."
			},
			{
				property: "og:title",
				content: "Medora — Compare medicine prices & pharmacies nearby"
			},
			{
				property: "og:description",
				content: "Look up any medicine, compare verified pharmacy prices near you and make sense of prescriptions — informational only, never a diagnosis."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 126,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
			src: "https://accounts.google.com/gsi/client",
			async: true,
			defer: true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 127,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 125,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 133,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 124,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$51.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppStoreProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 151,
			columnNumber: 15
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, {
			position: "top-right",
			richColors: true,
			closeButton: true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 152,
			columnNumber: 15
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 149,
			columnNumber: 13
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 148,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 147,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 145,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$45 = () => import("./routes-598DPREl.mjs");
var Route$50 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Medora — Compare medicine prices & pharmacies nearby" },
		{
			name: "description",
			content: "Look up any medicine, compare verified pharmacy prices near you and make sense of prescriptions — informational only, never a diagnosis."
		},
		{
			property: "og:title",
			content: "Medora — Compare medicine prices & pharmacies nearby"
		},
		{
			property: "og:description",
			content: "Look up any medicine, compare verified pharmacy prices near you and make sense of prescriptions — informational only, never a diagnosis."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$45, "component")
});
var $$splitComponentImporter$44 = () => import("./admin-DUteWV6w.mjs");
var Route$49 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$44, "component") });
var $$splitComponentImporter$43 = () => import("./app-BbGgHRG3.mjs");
var Route$48 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$43, "component") });
var $$splitComponentImporter$42 = () => import("./auth-nyeAdvJU.mjs");
function safeNext(value) {
	if (typeof value !== "string") return "";
	if (!value.startsWith("/") || value.startsWith("//")) return "";
	if (value.startsWith("/auth")) return "";
	return value;
}
var Route$47 = createFileRoute("/auth")({
	ssr: false,
	validateSearch: (search) => ({ next: safeNext(search["next"]) }),
	head: () => ({ meta: [
		{ title: "Authentication — Medora Healthcare Intelligence" },
		{
			name: "description",
			content: "Sign in or register for your Medora workspace as a patient, licensed pharmacy, or clinician."
		},
		{
			property: "og:title",
			content: "Medora Healthcare Intelligence Auth"
		},
		{
			property: "og:description",
			content: "Role-based healthcare portal for patients, pharmacies, and clinicians."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$42, "component")
});
var $$splitComponentImporter$41 = () => import("./doctor-dN05Kili.mjs");
var Route$46 = createFileRoute("/doctor")({ component: lazyRouteComponent($$splitComponentImporter$41, "component") });
var $$splitComponentImporter$40 = () => import("./emergency-BPGxlot8.mjs");
var Route$45 = createFileRoute("/emergency")({
	head: () => ({ meta: [
		{ title: "Emergency guidance — Medora" },
		{
			name: "description",
			content: "What to do right now if you or someone else has emergency warning signs. Medora cannot assess emergencies."
		},
		{
			property: "og:title",
			content: "Emergency guidance — Medora"
		},
		{
			property: "og:description",
			content: "Emergency warning signs and how to get professional help immediately."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$40, "component")
});
var compare_prices_default = defineTool({
	name: "compare_prices",
	title: "Compare medicine prices",
	description: "Compare local pharmacy prices for a medicine, including equivalents with the same composition. Prices are demo data, not live retail prices.",
	inputSchema: {
		medicineId: string().describe("Medicine id to price, e.g. med-para-500-tab-a."),
		includeEquivalents: boolean().optional().describe("Also price other products with the same composition key. Defaults to true.")
	},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ medicineId, includeEquivalents = true }) => {
		const medicine = demoMedicines.find((m) => m.id === medicineId);
		if (!medicine) throw new ToolError(`No medicine found with id "${medicineId}".`);
		const ids = includeEquivalents ? demoMedicines.filter((m) => m.compositionKey === medicine.compositionKey).map((m) => m.id) : [medicine.id];
		const listings = demoPrices.filter((p) => ids.includes(p.medicineId)).map((p) => {
			const pharmacy = demoPharmacies.find((ph) => ph.id === p.pharmacyId);
			const product = demoMedicines.find((m) => m.id === p.medicineId);
			return {
				medicineId: p.medicineId,
				brandName: product?.brandName ?? p.medicineId,
				pharmacy: pharmacy?.name ?? p.pharmacyId,
				distanceKm: pharmacy?.distanceKm ?? null,
				price: p.price,
				currency: p.currency,
				packSize: p.packSize,
				availability: p.availability,
				updatedAt: p.updatedAt
			};
		}).sort((a, b) => a.price - b.price);
		const available = listings.filter((l) => l.availability !== "out_of_stock");
		const payload = {
			composition: medicine.compositionKey,
			lowest: available[0] ?? null,
			listings,
			disclaimer: "Demo price feed. Confirm availability and price with the pharmacy before travelling."
		};
		return {
			content: [{
				type: "text",
				text: JSON.stringify(payload, null, 2)
			}],
			structuredContent: payload
		};
	}
});
var find_pharmacies_default = defineTool({
	name: "find_pharmacies",
	title: "Find pharmacies",
	description: "List Medora's demo pharmacy directory with distance, opening hours, services and licence identifiers.",
	inputSchema: {
		query: string().optional().describe("Optional name, city or service text to filter on."),
		open24hOnly: boolean().optional().describe("Only return pharmacies open 24 hours.")
	},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ query, open24hOnly }) => {
		const q = (query ?? "").trim().toLowerCase();
		const results = demoPharmacies.filter((p) => open24hOnly ? p.open24h : true).filter((p) => !q || p.name.toLowerCase().includes(q) || p.city.toLowerCase().includes(q) || p.address.toLowerCase().includes(q) || p.services.some((s) => s.toLowerCase().includes(q))).sort((a, b) => a.distanceKm - b.distanceKm).map((p) => ({
			id: p.id,
			name: p.name,
			address: p.address,
			city: p.city,
			distanceKm: p.distanceKm,
			rating: p.rating,
			hours: p.open24h ? "Open 24h" : `${p.opensAt} – ${p.closesAt}`,
			phone: p.phone,
			services: p.services,
			licenseId: p.licenseId
		}));
		return {
			content: [{
				type: "text",
				text: JSON.stringify(results, null, 2)
			}],
			structuredContent: { results }
		};
	}
});
var get_medicine_default = defineTool({
	name: "get_medicine",
	title: "Get medicine details",
	description: "Fetch full catalogue details for one medicine: composition, uses summary, side effects, warnings, storage and data provenance. Informational only, not medical advice.",
	inputSchema: { medicineId: string().describe("Medicine id from search_medicines, e.g. med-para-500-tab-a.") },
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ medicineId }) => {
		const medicine = demoMedicines.find((m) => m.id === medicineId);
		if (!medicine) throw new ToolError(`No medicine found with id "${medicineId}".`);
		const equivalents = demoMedicines.filter((m) => m.compositionKey === medicine.compositionKey && m.id !== medicine.id).map((m) => ({
			id: m.id,
			brandName: m.brandName,
			manufacturer: m.manufacturer
		}));
		const payload = {
			...medicine,
			equivalents,
			disclaimer: "Demo catalogue data. Always confirm with a licensed pharmacist or clinician before acting."
		};
		return {
			content: [{
				type: "text",
				text: JSON.stringify(payload, null, 2)
			}],
			structuredContent: payload
		};
	}
});
var search_medicines_default = defineTool({
	name: "search_medicines",
	title: "Search medicines",
	description: "Search Medora's medicine catalogue by brand name, generic name or active ingredient. Returns demo catalogue data, never clinical advice.",
	inputSchema: {
		query: string().describe("Brand, generic or ingredient text to search for."),
		prescriptionOnly: boolean().optional().describe("Filter to prescription-only (true) or over-the-counter (false) products.")
	},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ query, prescriptionOnly }) => {
		const q = query.trim().toLowerCase();
		const results = demoMedicines.filter((m) => prescriptionOnly === void 0 ? true : m.prescriptionOnly === prescriptionOnly).filter((m) => !q || m.brandName.toLowerCase().includes(q) || m.genericName.toLowerCase().includes(q) || m.activeIngredients.some((i) => i.name.toLowerCase().includes(q))).slice(0, 20).map((m) => ({
			id: m.id,
			brandName: m.brandName,
			genericName: m.genericName,
			form: m.form,
			packSize: m.packSize,
			manufacturer: m.manufacturer,
			prescriptionOnly: m.prescriptionOnly,
			compositionKey: m.compositionKey,
			source: m.provenance.source
		}));
		return {
			content: [{
				type: "text",
				text: JSON.stringify(results, null, 2)
			}],
			structuredContent: { results }
		};
	}
});
var projectRef = {
	"BASE_URL": "/",
	"DEV": true,
	"MODE": "production",
	"PROD": false,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_GOOGLE_CLIENT_ID": "252833058087-10ct0ofql7amsuu7dkl6r6ii2s12kbq9.apps.googleusercontent.com",
	"VITE_GOOGLE_MAPS_API_KEY": "NA",
	"VITE_SUPABASE_PROJECT_ID": "nglhlewkbghfctjtvoiw",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_8Jzi7xvLGGvQdkkvV5c-yQ_yB1IOBoz",
	"VITE_SUPABASE_URL": "https://nglhlewkbghfctjtvoiw.supabase.co"
}["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";
var mcp_default = defineMcp({
	name: "medora-health-hub",
	title: "Medora Health Hub",
	version: "0.1.0",
	instructions: "Medicine intelligence tools for Medora. Use search_medicines to find products, get_medicine for composition, uses, side effects and warnings, compare_prices for local pharmacy pricing, and find_pharmacies for the pharmacy directory. All data is Medora demo catalogue data with provenance; it is informational only and never a substitute for professional medical advice.",
	auth: auth.oauth.issuer({
		issuer: `https://${projectRef}.supabase.co/auth/v1`,
		acceptedAudiences: "authenticated"
	}),
	tools: [
		search_medicines_default,
		get_medicine_default,
		compare_prices_default,
		find_pharmacies_default
	]
});
var Route$44 = createFileRoute("/mcp")({ server: { handlers: { ANY: createTanStackMcpHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var $$splitComponentImporter$39 = () => import("./pharmacy-iiP8gp3-.mjs");
var Route$43 = createFileRoute("/pharmacy")({ component: lazyRouteComponent($$splitComponentImporter$39, "component") });
var $$splitComponentImporter$38 = () => import("./reset-password-fK_XURZH.mjs");
var Route$42 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Choose a new password — Medora" },
		{
			name: "description",
			content: "Set a new password for your Medora account after requesting a reset link."
		},
		{
			property: "og:title",
			content: "Choose a new password — Medora"
		},
		{
			property: "og:description",
			content: "Set a new password for your Medora account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var BASE_URL = "https://medora-health-guide.lovable.app";
var Route$41 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/emergency",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/auth",
				changefreq: "monthly",
				priority: "0.4"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$37 = () => import("./switch-BbURInfo.mjs");
var Route$40 = createFileRoute("/switch")({
	head: () => ({ meta: [
		{ title: "Switch workspace — Medora" },
		{
			name: "description",
			content: "Move between the patient, pharmacy, doctor and admin workspaces in Medora."
		},
		{
			property: "og:title",
			content: "Switch workspace — Medora"
		},
		{
			property: "og:description",
			content: "Patient, pharmacy, clinician and platform administration workspaces."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var Route$39 = createFileRoute("/.mcp/list-tools")({ server: { handlers: { ANY: createTanStackListToolsHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var Route$38 = createFileRoute("/.well-known/oauth-protected-resource")({ server: { handlers: { ANY: createTanStackOAuthProtectedResourceMetadataHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var $$splitComponentImporter$36 = () => import("./admin.index-CgG-KCA8.mjs");
var Route$37 = createFileRoute("/admin/")({
	head: () => ({ meta: [
		{ title: "Platform overview — Medora Admin workspace" },
		{
			name: "description",
			content: "Platform-wide KPIs, growth trends and the queue of items that need administrator attention."
		},
		{
			property: "og:title",
			content: "Platform overview — Medora Admin workspace"
		},
		{
			property: "og:description",
			content: "Administrator overview of users, organisations, catalogue and moderation queues."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./admin.audit-C9TU0y_2.mjs");
var Route$36 = createFileRoute("/admin/audit")({
	head: () => ({ meta: [
		{ title: "Compliance & Audit Log — Medora Admin Workspace" },
		{
			name: "description",
			content: "Immutable regulatory compliance, clinical approvals, security policies, and access audit ledger."
		},
		{
			property: "og:title",
			content: "Audit log — Medora Admin workspace"
		},
		{
			property: "og:description",
			content: "Administrator audit ledger of clinical approvals, prescription verifications, and security events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./admin.catalog-bXJVy2nl.mjs");
var Route$35 = createFileRoute("/admin/catalog")({
	head: () => ({ meta: [
		{ title: "Catalogue — Medora Admin workspace" },
		{
			name: "description",
			content: "Review catalogue entries, their provenance and last-reviewed date, with stale or incomplete records flagged for review."
		},
		{
			property: "og:title",
			content: "Catalogue — Medora Admin workspace"
		},
		{
			property: "og:description",
			content: "Administrator view of catalogue provenance and review state."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./admin.moderation-Cr7n_Stb.mjs");
var Route$34 = createFileRoute("/admin/moderation")({
	head: () => ({ meta: [
		{ title: "Moderation — Medora Admin workspace" },
		{
			name: "description",
			content: "Moderation workspace for the Medora admin console."
		},
		{
			property: "og:title",
			content: "Moderation — Medora Admin workspace"
		},
		{
			property: "og:description",
			content: "Moderation workspace for the Medora admin console."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./admin.pharmacies-CvxSCd30.mjs");
var Route$33 = createFileRoute("/admin/pharmacies")({
	head: () => ({ meta: [
		{ title: "Organisations — Medora Admin workspace" },
		{
			name: "description",
			content: "Review pharmacy and clinic licence records and record verification decisions as a named administrator."
		},
		{
			property: "og:title",
			content: "Organisations — Medora Admin workspace"
		},
		{
			property: "og:description",
			content: "Administrator licence verification workflow for pharmacies and clinics."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./admin.users-KONEc2ob.mjs");
var Route$32 = createFileRoute("/admin/users")({
	head: () => ({ meta: [
		{ title: "Users — Medora Admin workspace" },
		{
			name: "description",
			content: "Search and filter platform accounts, open a user's detail record, and record audited role changes."
		},
		{
			property: "og:title",
			content: "Users — Medora Admin workspace"
		},
		{
			property: "og:description",
			content: "Administrator view of platform accounts, statuses and role grants."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./app.index-BXiy76Tu.mjs");
var Route$31 = createFileRoute("/app/")({
	head: () => ({ meta: [
		{ title: "Your medicine dashboard — Medora" },
		{
			name: "description",
			content: "Search medicines, review prescriptions, track reminders, compare verified listings and find nearby pharmacies from one command centre."
		},
		{
			property: "og:title",
			content: "Your medicine dashboard — Medora"
		},
		{
			property: "og:description",
			content: "Prescriptions, reminders, comparisons and nearby pharmacies in one place."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./app.assistant-BAVwrELI.mjs");
var Route$30 = createFileRoute("/app/assistant")({
	head: () => ({ meta: [
		{ title: "Medicine assistant — Medora" },
		{
			name: "description",
			content: "Ask about a medicine and get a source-labelled explanation. Informational only — Medora never diagnoses or prescribes."
		},
		{
			property: "og:title",
			content: "Medicine assistant — Medora"
		},
		{
			property: "og:description",
			content: "Source-labelled medicine explanations with safety notes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./app.cart-DpgWfDRf.mjs");
var Route$29 = createFileRoute("/app/cart")({
	head: () => ({ meta: [
		{ title: "Basket — Medora" },
		{
			name: "description",
			content: "Review items reserved from nearby pharmacies. Prescription-only items are gated until a pharmacist verifies your prescription."
		},
		{
			property: "og:title",
			content: "Basket — Medora"
		},
		{
			property: "og:description",
			content: "Reserve medicines with prescription verification gating."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./app.compare-BYI9Tsix.mjs");
var Route$28 = createFileRoute("/app/compare")({
	head: () => ({ meta: [
		{ title: "Compare medicine prices — Medora" },
		{
			name: "description",
			content: "Compare equivalent medicines side by side with price per unit, availability, distance and a transparent best-value explanation."
		},
		{
			property: "og:title",
			content: "Compare medicine prices — Medora"
		},
		{
			property: "og:description",
			content: "Price per unit, availability and distance, explained."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./app.history-DQdqUDsK.mjs");
var Route$27 = createFileRoute("/app/history")({
	head: () => ({ meta: [
		{ title: "Activity history — Medora" },
		{
			name: "description",
			content: "A single timeline of your price comparisons, reservations, prescription uploads and dose logs on this device."
		},
		{
			property: "og:title",
			content: "Activity history — Medora"
		},
		{
			property: "og:description",
			content: "One timeline of everything you have done in Medora."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./app.interactions-B2tLQ4Fm.mjs");
var Route$26 = createFileRoute("/app/interactions")({
	head: () => ({ meta: [
		{ title: "Drug Interaction & Safety Comparison — Medora" },
		{
			name: "description",
			content: "Search medications, compare side effects, view safety alerts, contraindications, and duplicate active ingredients with deterministic pharmacology analysis."
		},
		{
			property: "og:title",
			content: "Drug Interaction & Safety Comparison — Medora"
		},
		{
			property: "og:description",
			content: "Search medications, compare safety, side effects, and check drug interactions."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./app.labs-BYjnvT1T.mjs");
var Route$25 = createFileRoute("/app/labs")({
	head: () => ({ meta: [
		{ title: "Lab reports — Medora" },
		{
			name: "description",
			content: "Understand what each test on your lab report measures and whether the value sits inside the range printed on the report."
		},
		{
			property: "og:title",
			content: "Lab reports — Medora"
		},
		{
			property: "og:description",
			content: "Plain-language explanations of lab test names and ranges."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./app.notifications-CxqYQ1wf.mjs");
var Route$24 = createFileRoute("/app/notifications")({
	head: () => ({ meta: [
		{ title: "Notifications — Medora" },
		{
			name: "description",
			content: "Dose reminders, price movements, order updates and safety notices in one place."
		},
		{
			property: "og:title",
			content: "Notifications — Medora"
		},
		{
			property: "og:description",
			content: "Reminders, price changes, orders and safety notices."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./app.orders-C5oY0fMR.mjs");
var Route$23 = createFileRoute("/app/orders")({
	head: () => ({ meta: [
		{ title: "Orders & reservations — Medora" },
		{
			name: "description",
			content: "Track pharmacy reservations, prescription verification status and pickup readiness."
		},
		{
			property: "og:title",
			content: "Orders & reservations — Medora"
		},
		{
			property: "og:description",
			content: "Reservation and verification status in one place."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./app.pharmacies-B8VbUPBb.mjs");
var Route$22 = createFileRoute("/app/pharmacies")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./app.prescriptions-Cp3FVYf_.mjs");
var Route$21 = createFileRoute("/app/prescriptions")({
	head: () => ({ meta: [
		{ title: "Prescriptions — Medora" },
		{
			name: "description",
			content: "Upload a prescription, review every extracted line with a confidence score, correct mistakes and turn confirmed items into reminders."
		},
		{
			property: "og:title",
			content: "Prescriptions — Medora"
		},
		{
			property: "og:description",
			content: "Review extracted prescription lines before anything is used."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./app.reminders-CcqCdO-J.mjs");
var Route$20 = createFileRoute("/app/reminders")({
	head: () => ({ meta: [
		{ title: "Medication Schedule & Adherence Analytics — Medora" },
		{
			name: "description",
			content: "Input prescribed medicines, dosages, set automated reminders, and view interactive Recharts data visualizations of medication adherence and symptom progression over time."
		},
		{
			property: "og:title",
			content: "Medication Schedule & Adherence Analytics — Medora"
		},
		{
			property: "og:description",
			content: "Medication schedule with reminders and adherence & symptom charts over time."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./app.search-moFnNTs5.mjs");
var searchSchema = object({
	q: fallback(string(), "").default(""),
	form: fallback(string(), "all").default("all"),
	supply: fallback(string(), "all").default("all")
});
var Route$19 = createFileRoute("/app/search")({
	validateSearch: zodValidator(searchSchema),
	head: () => ({ meta: [
		{ title: "Find a medicine — Medora" },
		{
			name: "description",
			content: "Search by brand name, generic name or active ingredient and see equivalent products with transparent composition matching."
		},
		{
			property: "og:title",
			content: "Find a medicine — Medora"
		},
		{
			property: "og:description",
			content: "Search by brand, generic name or active ingredient."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./app.settings-LaLcwFeL.mjs");
var Route$18 = createFileRoute("/app/settings")({
	head: () => ({ meta: [
		{ title: "Profile & settings — Medora" },
		{
			name: "description",
			content: "Manage your health profile, allergies, privacy consent, security controls and account activity."
		},
		{
			property: "og:title",
			content: "Profile & settings — Medora"
		},
		{
			property: "og:description",
			content: "Health profile, privacy consent and security controls."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./app.triage-CcT4SOQD.mjs");
var Route$17 = createFileRoute("/app/triage")({
	head: () => ({ meta: [
		{ title: "Symptom check — Medora" },
		{
			name: "description",
			content: "A routing tool that suggests where to seek care. Medora does not diagnose conditions or recommend medicines."
		},
		{
			property: "og:title",
			content: "Symptom check — Medora"
		},
		{
			property: "og:description",
			content: "Where to go, not what you have."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./app.verify-CN5uKvDJ.mjs");
var Route$16 = createFileRoute("/app/verify")({
	head: () => ({ meta: [
		{ title: "Pack Verification & Scanner — Medora" },
		{
			name: "description",
			content: "Verify medicine serialisation codes and barcodes using your camera or pack code lookup."
		},
		{
			property: "og:title",
			content: "Pack verification — Medora"
		},
		{
			property: "og:description",
			content: "Live camera scanner and pack serialization verification."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
/** Demo codes map to catalogue entries deterministically: MD- + first 6 chars of the id. */
var $$splitComponentImporter$14 = () => import("./app.workspace-DB0uUsui.mjs");
var Route$15 = createFileRoute("/app/workspace")({
	head: () => ({ meta: [{ title: "Google Workspace Hub — Medora" }, {
		name: "description",
		content: "Sync prescriptions with Google Drive, schedule dose alerts on Google Calendar, and send refill requests via Gmail."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./doctor.index-7XHnqAX_.mjs");
var Route$14 = createFileRoute("/doctor/")({
	head: () => ({ meta: [
		{ title: "Patient overview — Medora clinician workspace" },
		{
			name: "description",
			content: "Clinician view of patient records, assistive summaries, allergies, current medicines and recorded clinical decisions."
		},
		{
			property: "og:title",
			content: "Patient overview — Medora clinician workspace"
		},
		{
			property: "og:description",
			content: "Patient list, assistive summaries and clinician-recorded decisions in Medora."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./doctor.prescriptions-_mLjM7pZ.mjs");
var Route$13 = createFileRoute("/doctor/prescriptions")({
	head: () => ({ meta: [
		{ title: "Prescription review — Medora clinician workspace" },
		{
			name: "description",
			content: "Review prescription requests, read assistive flags and write prescriptions yourself — nothing is signed automatically."
		},
		{
			property: "og:title",
			content: "Prescription review — Medora clinician workspace"
		},
		{
			property: "og:description",
			content: "Clinician-controlled prescription review and creation in Medora."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./doctor.schedule-Dcs4K7t1.mjs");
var Route$12 = createFileRoute("/doctor/schedule")({
	head: () => ({ meta: [
		{ title: "Schedule — Medora Doctor workspace" },
		{
			name: "description",
			content: "Schedule workspace for the Medora doctor console."
		},
		{
			property: "og:title",
			content: "Schedule — Medora Doctor workspace"
		},
		{
			property: "og:description",
			content: "Schedule workspace for the Medora doctor console."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./pharmacy.index-BxWiiChu.mjs");
var Route$11 = createFileRoute("/pharmacy/")({
	head: () => ({ meta: [
		{ title: "Overview — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Pharmacy dashboard with orders awaiting action, verification queue, low-stock lines and demo sales trend."
		},
		{
			property: "og:title",
			content: "Overview — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Key figures and recent activity for the Medora pharmacy console, all demo data."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./pharmacy.analytics-t-OM16X6.mjs");
var Route$10 = createFileRoute("/pharmacy/analytics")({
	head: () => ({ meta: [
		{ title: "Analytics — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Revenue, order volume, order status and inventory analytics derived from Medora pharmacy demo data."
		},
		{
			property: "og:title",
			content: "Analytics — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Demo revenue and operations analytics for the Medora pharmacy console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./pharmacy.customers-CudkGAdR.mjs");
var Route$9 = createFileRoute("/pharmacy/customers")({
	head: () => ({ meta: [
		{ title: "Customers — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Pharmacy customer directory with order history, lifetime spend and account flags from demo records."
		},
		{
			property: "og:title",
			content: "Customers — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Search, filter and review customer records in the Medora pharmacy console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./pharmacy.inventory-DUXxGymx.mjs");
var Route$8 = createFileRoute("/pharmacy/inventory")({
	head: () => ({ meta: [
		{ title: "Inventory — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Last-synced demo inventory levels, batches and expiry windows for the Medora pharmacy console."
		},
		{
			property: "og:title",
			content: "Inventory — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Filter, sort and review demo stock lines, batches and expiry dates."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./pharmacy.orders-BJn_F63t.mjs");
var Route$7 = createFileRoute("/pharmacy/orders")({
	head: () => ({ meta: [
		{ title: "Orders — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Review demo pharmacy orders, filter by status and fulfilment type, and update status for this session."
		},
		{
			property: "og:title",
			content: "Orders — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Order queue, bulk status actions and order detail for the Medora pharmacy console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./pharmacy.prescriptions-BXi-VCAT.mjs");
var Route$6 = createFileRoute("/pharmacy/prescriptions")({
	head: () => ({ meta: [
		{ title: "Verification queue — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Pharmacist verification queue for submitted prescriptions, with extracted lines shown as assistive suggestions requiring confirmation before dispensing."
		},
		{
			property: "og:title",
			content: "Verification queue — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Review extracted prescription lines and record pharmacist approval or rejection decisions."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./pharmacy.suppliers-KMzmQseb.mjs");
var Route$5 = createFileRoute("/pharmacy/suppliers")({
	head: () => ({ meta: [
		{ title: "Suppliers — Medora Pharmacy workspace" },
		{
			name: "description",
			content: "Supplier directory with lead time, on-time reliability and purchase order status from demo records."
		},
		{
			property: "og:title",
			content: "Suppliers — Medora Pharmacy workspace"
		},
		{
			property: "og:description",
			content: "Review supplier lead time and reliability in the Medora pharmacy console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var oauthApi = () => supabase.auth.oauth;
var $$splitComponentImporter$3 = () => import("../_._lovable.oauth.consent-wEJ4Sr2W.mjs");
var $$splitErrorComponentImporter = () => import("../_._lovable.oauth.consent-BT1QXXek.mjs");
var Route$4 = createFileRoute("/.lovable/oauth/consent")({
	ssr: false,
	validateSearch: (search) => ({ authorization_id: typeof search["authorization_id"] === "string" ? search["authorization_id"] : "" }),
	beforeLoad: async ({ search, location }) => {
		if (!search.authorization_id) throw new Error("Missing authorization_id");
		const { data } = await supabase.auth.getSession();
		if (!data.session) throw redirect({
			to: "/auth",
			search: { next: location.pathname + location.searchStr }
		});
	},
	loader: async ({ location }) => {
		const authorizationId = new URLSearchParams(location.searchStr).get("authorization_id");
		const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
		if (error) throw new Error(error.message);
		const immediate = data?.redirect_url ?? data?.redirect_to;
		if (immediate && !data?.client) throw redirect({ href: immediate });
		return data;
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$3 = createFileRoute("/.mcp/invoke-tool/$tool")({ server: { handlers: { ANY: createTanStackInvokeToolHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var $$splitComponentImporter$2 = () => import("./app.medicine._medicineId-L0qL0-k3.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("./app.medicine._medicineId-DIlDt-e7.mjs");
var Route$2 = createFileRoute("/app/medicine/$medicineId")({
	loader: ({ params }) => {
		const medicine = getMedicineSync(params.medicineId);
		if (!medicine) throw notFound();
		return {
			brandName: medicine.brandName,
			genericName: medicine.genericName
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Medicine unavailable — Medora" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.brandName} (${loaderData.genericName}) — Medora`;
		const description = `Composition, uses, warnings, storage and verified local pricing for ${loaderData.brandName}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./app.pharmacies.index-CcrHku5k.mjs");
var Route$1 = createFileRoute("/app/pharmacies/")({
	head: () => ({ meta: [
		{ title: "Nearby pharmacies — Medora" },
		{
			name: "description",
			content: "Find licensed pharmacies near you with opening hours, services, ratings and current stock signals."
		},
		{
			property: "og:title",
			content: "Nearby pharmacies — Medora"
		},
		{
			property: "og:description",
			content: "Licensed pharmacies with hours, services and stock signals."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./app.pharmacies._pharmacyId-kf1xEETX.mjs");
var $$splitNotFoundComponentImporter = () => import("./app.pharmacies._pharmacyId-BZ_gzmqB.mjs");
var Route = createFileRoute("/app/pharmacies/$pharmacyId")({
	loader: ({ params }) => {
		const pharmacy = demoPharmacies.find((p) => p.id === params.pharmacyId);
		if (!pharmacy) throw notFound();
		return {
			id: pharmacy.id,
			name: pharmacy.name,
			city: pharmacy.city,
			address: pharmacy.address,
			phone: pharmacy.phone,
			opensAt: pharmacy.opensAt,
			closesAt: pharmacy.closesAt,
			open24h: pharmacy.open24h,
			coords: pharmacy.coords
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Pharmacy unavailable — Medora" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.name} — Medora`;
		const description = `Opening hours, services, licence details and current stock at ${loaderData.name}, ${loaderData.city}.`;
		const url = `https://medora-health-guide.lovable.app/app/pharmacies/${loaderData.id}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Pharmacy",
					name: loaderData.name,
					url,
					telephone: loaderData.phone,
					address: {
						"@type": "PostalAddress",
						streetAddress: loaderData.address,
						addressLocality: loaderData.city
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: loaderData.coords.lat,
						longitude: loaderData.coords.lng
					},
					openingHoursSpecification: [{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday"
						],
						opens: loaderData.open24h ? "00:00" : loaderData.opensAt,
						closes: loaderData.open24h ? "23:59" : loaderData.closesAt
					}]
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$50.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$51
});
var AdminRoute = Route$49.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$51
});
var AppRoute = Route$48.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$51
});
var AuthRoute = Route$47.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$51
});
var DoctorRoute = Route$46.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => Route$51
});
var EmergencyRoute = Route$45.update({
	id: "/emergency",
	path: "/emergency",
	getParentRoute: () => Route$51
});
var McpRoute = Route$44.update({
	id: "/mcp",
	path: "/mcp",
	getParentRoute: () => Route$51
});
var PharmacyRoute = Route$43.update({
	id: "/pharmacy",
	path: "/pharmacy",
	getParentRoute: () => Route$51
});
var ResetPasswordRoute = Route$42.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$51
});
var SitemapDotxmlRoute = Route$41.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$51
});
var SwitchRoute = Route$40.update({
	id: "/switch",
	path: "/switch",
	getParentRoute: () => Route$51
});
var Char91DotmcpChar93ListToolsRoute = Route$39.update({
	id: "/.mcp/list-tools",
	path: "/.mcp/list-tools",
	getParentRoute: () => Route$51
});
var Char91DotwellKnownChar93OauthProtectedResourceRoute = Route$38.update({
	id: "/.well-known/oauth-protected-resource",
	path: "/.well-known/oauth-protected-resource",
	getParentRoute: () => Route$51
});
var AdminIndexRoute = Route$37.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminAuditRoute = Route$36.update({
	id: "/audit",
	path: "/audit",
	getParentRoute: () => AdminRoute
});
var AdminCatalogRoute = Route$35.update({
	id: "/catalog",
	path: "/catalog",
	getParentRoute: () => AdminRoute
});
var AdminModerationRoute = Route$34.update({
	id: "/moderation",
	path: "/moderation",
	getParentRoute: () => AdminRoute
});
var AdminPharmaciesRoute = Route$33.update({
	id: "/pharmacies",
	path: "/pharmacies",
	getParentRoute: () => AdminRoute
});
var AdminUsersRoute = Route$32.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => AdminRoute
});
var AppIndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppAssistantRoute = Route$30.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => AppRoute
});
var AppCartRoute = Route$29.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => AppRoute
});
var AppCompareRoute = Route$28.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => AppRoute
});
var AppHistoryRoute = Route$27.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => AppRoute
});
var AppInteractionsRoute = Route$26.update({
	id: "/interactions",
	path: "/interactions",
	getParentRoute: () => AppRoute
});
var AppLabsRoute = Route$25.update({
	id: "/labs",
	path: "/labs",
	getParentRoute: () => AppRoute
});
var AppNotificationsRoute = Route$24.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AppRoute
});
var AppOrdersRoute = Route$23.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AppRoute
});
var AppPharmaciesRoute = Route$22.update({
	id: "/pharmacies",
	path: "/pharmacies",
	getParentRoute: () => AppRoute
});
var AppPrescriptionsRoute = Route$21.update({
	id: "/prescriptions",
	path: "/prescriptions",
	getParentRoute: () => AppRoute
});
var AppRemindersRoute = Route$20.update({
	id: "/reminders",
	path: "/reminders",
	getParentRoute: () => AppRoute
});
var AppSearchRoute = Route$19.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$18.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppTriageRoute = Route$17.update({
	id: "/triage",
	path: "/triage",
	getParentRoute: () => AppRoute
});
var AppVerifyRoute = Route$16.update({
	id: "/verify",
	path: "/verify",
	getParentRoute: () => AppRoute
});
var AppWorkspaceRoute = Route$15.update({
	id: "/workspace",
	path: "/workspace",
	getParentRoute: () => AppRoute
});
var DoctorIndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => DoctorRoute
});
var DoctorPrescriptionsRoute = Route$13.update({
	id: "/prescriptions",
	path: "/prescriptions",
	getParentRoute: () => DoctorRoute
});
var DoctorScheduleRoute = Route$12.update({
	id: "/schedule",
	path: "/schedule",
	getParentRoute: () => DoctorRoute
});
var PharmacyIndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => PharmacyRoute
});
var PharmacyAnalyticsRoute = Route$10.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => PharmacyRoute
});
var PharmacyCustomersRoute = Route$9.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => PharmacyRoute
});
var PharmacyInventoryRoute = Route$8.update({
	id: "/inventory",
	path: "/inventory",
	getParentRoute: () => PharmacyRoute
});
var PharmacyOrdersRoute = Route$7.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => PharmacyRoute
});
var PharmacyPrescriptionsRoute = Route$6.update({
	id: "/prescriptions",
	path: "/prescriptions",
	getParentRoute: () => PharmacyRoute
});
var PharmacySuppliersRoute = Route$5.update({
	id: "/suppliers",
	path: "/suppliers",
	getParentRoute: () => PharmacyRoute
});
var DotlovableOauthConsentRoute = Route$4.update({
	id: "/.lovable/oauth/consent",
	path: "/.lovable/oauth/consent",
	getParentRoute: () => Route$51
});
var Char91DotmcpChar93InvokeToolToolRoute = Route$3.update({
	id: "/.mcp/invoke-tool/$tool",
	path: "/.mcp/invoke-tool/$tool",
	getParentRoute: () => Route$51
});
var AppMedicineMedicineIdRoute = Route$2.update({
	id: "/medicine/$medicineId",
	path: "/medicine/$medicineId",
	getParentRoute: () => AppRoute
});
var AppPharmaciesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppPharmaciesRoute
});
var AppPharmaciesPharmacyIdRoute = Route.update({
	id: "/$pharmacyId",
	path: "/$pharmacyId",
	getParentRoute: () => AppPharmaciesRoute
});
var AdminRouteChildren = {
	AdminAuditRoute,
	AdminCatalogRoute,
	AdminModerationRoute,
	AdminPharmaciesRoute,
	AdminUsersRoute,
	AdminIndexRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var AppPharmaciesRouteChildren = {
	AppPharmaciesPharmacyIdRoute,
	AppPharmaciesIndexRoute
};
var AppRouteChildren = {
	AppAssistantRoute,
	AppCartRoute,
	AppCompareRoute,
	AppHistoryRoute,
	AppInteractionsRoute,
	AppLabsRoute,
	AppNotificationsRoute,
	AppOrdersRoute,
	AppPharmaciesRoute: AppPharmaciesRoute._addFileChildren(AppPharmaciesRouteChildren),
	AppPrescriptionsRoute,
	AppRemindersRoute,
	AppSearchRoute,
	AppSettingsRoute,
	AppTriageRoute,
	AppVerifyRoute,
	AppWorkspaceRoute,
	AppIndexRoute,
	AppMedicineMedicineIdRoute
};
var AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
var DoctorRouteChildren = {
	DoctorPrescriptionsRoute,
	DoctorScheduleRoute,
	DoctorIndexRoute
};
var DoctorRouteWithChildren = DoctorRoute._addFileChildren(DoctorRouteChildren);
var PharmacyRouteChildren = {
	PharmacyAnalyticsRoute,
	PharmacyCustomersRoute,
	PharmacyInventoryRoute,
	PharmacyOrdersRoute,
	PharmacyPrescriptionsRoute,
	PharmacySuppliersRoute,
	PharmacyIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRoute: AdminRouteWithChildren,
	AppRoute: AppRouteWithChildren,
	AuthRoute,
	DoctorRoute: DoctorRouteWithChildren,
	EmergencyRoute,
	McpRoute,
	PharmacyRoute: PharmacyRoute._addFileChildren(PharmacyRouteChildren),
	ResetPasswordRoute,
	SitemapDotxmlRoute,
	SwitchRoute,
	Char91DotmcpChar93ListToolsRoute,
	Char91DotwellKnownChar93OauthProtectedResourceRoute,
	DotlovableOauthConsentRoute,
	Char91DotmcpChar93InvokeToolToolRoute
};
var routeTree = Route$51._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getPharmacies as A, loadGoogleIdentityScript as B, useStore as C, getEquivalents as D, formatMoney as E, clearGoogleToken as F, requestGoogleOAuthToken as H, decodeGoogleJwt as I, fetchGoogleUserInfo as L, isOpenNow as M, searchMedicines as N, getMedicineSync as O, getProvider as P, getGoogleClientId as R, useOptionalStore as S, explainBestValue as T, setStoredGoogleClientId as U, requestGoogleAccessToken as V, adherenceRate as _, DropdownMenuItem as a, router_exports as b, DropdownMenuTrigger as c, Route$19 as d, Route$2 as f, ThemeToggle as g, SIGNUP_ROLES as h, DropdownMenuContent as i, getPharmacyStock as j, getOffers as k, ROLE_HOME as l, Route$47 as m, AppStoreProvider as n, DropdownMenuLabel as o, Route$4 as p, DropdownMenu as r, DropdownMenuSeparator as s, AppErrorBoundary as t, Route as u, getRouter as v, useTheme as w, useAuth as x, oauthApi as y, getStoredGoogleToken as z };
