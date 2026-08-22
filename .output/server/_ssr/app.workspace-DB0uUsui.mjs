import { a as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, F as clearGoogleToken, V as requestGoogleAccessToken, z as getStoredGoogleToken } from "./router-DnzDjJrL.mjs";
import { C as Sparkles, Et as FileText, Lt as Cloud, M as Send, Mt as ExternalLink, Rt as Clock, U as Plus, Wt as CircleCheck, lt as Mail, rn as Calendar, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button } from "./router-DnzDjJrL2.mjs";
import { l as PageHeader, n as Badge } from "./primitives-Dg_-FqLy.mjs";
import { t as Input } from "./input-DanbVdXK.mjs";
import { t as Textarea } from "./textarea-DjPdM8Hv.mjs";
import { t as Label } from "./label-DHk-0R73.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-C9KCTXXr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.workspace-DB0uUsui.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
/**
* Google Workspace REST API integrations (Drive, Calendar, Gmail).
* Uses the OAuth Bearer token obtained client-side via Google Identity Services.
*/
async function listDriveMedicalFiles() {
	const token = await requestGoogleAccessToken();
	const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent("trashed = false and (name contains 'prescription' or name contains 'rx' or name contains 'medical' or name contains 'lab' or name contains 'medora')")}&fields=files(id,name,mimeType,modifiedTime,webViewLink,size)&pageSize=20`, { headers: { Authorization: `Bearer ${token}` } });
	if (!res.ok) {
		const errorBody = await res.text();
		throw new Error(`Google Drive API error: ${res.status} ${errorBody}`);
	}
	return (await res.json()).files || [];
}
async function uploadPrescriptionToDrive(file, fileName) {
	const token = await requestGoogleAccessToken();
	const metadata = {
		name: fileName,
		mimeType: file.type || "application/pdf",
		description: "Prescription uploaded via Medora India Health Platform"
	};
	const form = new FormData();
	form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
	form.append("file", file);
	const res = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,webViewLink", {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: form
	});
	if (!res.ok) {
		const errorBody = await res.text();
		throw new Error(`Google Drive Upload error: ${res.status} ${errorBody}`);
	}
	return await res.json();
}
async function listCalendarMedicationEvents() {
	const token = await requestGoogleAccessToken();
	const timeMin = (/* @__PURE__ */ new Date()).toISOString();
	const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(timeMin)}&maxResults=20&orderBy=startTime&singleEvents=true&q=medora`, { headers: { Authorization: `Bearer ${token}` } });
	if (!res.ok) {
		const errorBody = await res.text();
		throw new Error(`Google Calendar API error: ${res.status} ${errorBody}`);
	}
	return (await res.json()).items || [];
}
async function createMedicationCalendarEvent(options) {
	const token = await requestGoogleAccessToken();
	const body = {
		summary: options.summary,
		description: `${options.description}\n\nManaged via Medora Healthcare`,
		start: {
			dateTime: options.startTime,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata"
		},
		end: {
			dateTime: options.endTime,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata"
		}
	};
	if (options.recurrenceDays && options.recurrenceDays > 1) body.recurrence = [`RRULE:FREQ=DAILY;COUNT=${options.recurrenceDays}`];
	const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
	if (!res.ok) {
		const errorBody = await res.text();
		throw new Error(`Google Calendar Event error: ${res.status} ${errorBody}`);
	}
	return await res.json();
}
async function listMedicalEmails() {
	const token = await requestGoogleAccessToken();
	const listRes = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages?q=${encodeURIComponent("prescription OR pharmacy OR medicine OR doctor OR 'apollo' OR '1mg' OR 'medora'")}&maxResults=10`, { headers: { Authorization: `Bearer ${token}` } });
	if (!listRes.ok) {
		const errorBody = await listRes.text();
		throw new Error(`Gmail API error: ${listRes.status} ${errorBody}`);
	}
	const messageRefs = (await listRes.json()).messages || [];
	return await Promise.all(messageRefs.map(async (ref) => {
		try {
			const msgRes = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${ref.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=Date`, { headers: { Authorization: `Bearer ${token}` } });
			if (!msgRes.ok) return {
				id: ref.id,
				threadId: ref.threadId,
				snippet: ""
			};
			const msgData = await msgRes.json();
			const headers = msgData.payload?.headers || [];
			const getHeader = (name) => headers.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value;
			return {
				id: ref.id,
				threadId: ref.threadId,
				snippet: msgData.snippet || "",
				subject: getHeader("Subject") || "No Subject",
				from: getHeader("From") || "Unknown Sender",
				date: getHeader("Date") || ""
			};
		} catch {
			return {
				id: ref.id,
				threadId: ref.threadId,
				snippet: ""
			};
		}
	}));
}
async function sendEmailViaGmail(options) {
	const token = await requestGoogleAccessToken();
	const utf8Subject = `=?utf-8?B?${btoa(unescape(encodeURIComponent(options.subject)))}?=`;
	const email = [
		`To: ${options.to}`,
		"Content-Type: text/plain; charset=utf-8",
		"MIME-Version: 1.0",
		`Subject: ${utf8Subject}`,
		"",
		options.bodyText
	].join("\r\n");
	const base64EncodedEmail = btoa(unescape(encodeURIComponent(email))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
	const res = await fetch("https://www.googleapis.com/gmail/v1/users/me/messages/send", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ raw: base64EncodedEmail })
	});
	if (!res.ok) {
		const errorBody = await res.text();
		throw new Error(`Gmail Send error: ${res.status} ${errorBody}`);
	}
	return await res.json();
}
var _jsxFileName = "/app/applet/src/routes/app.workspace.tsx?tsr-split=component";
function GoogleWorkspacePage() {
	const { state } = useStore();
	const [token, setToken] = (0, import_react.useState)(getStoredGoogleToken());
	const [connecting, setConnecting] = (0, import_react.useState)(false);
	const [driveFiles, setDriveFiles] = (0, import_react.useState)([]);
	const [loadingDrive, setLoadingDrive] = (0, import_react.useState)(false);
	const [uploadingDrive, setUploadingDrive] = (0, import_react.useState)(false);
	const [calendarEvents, setCalendarEvents] = (0, import_react.useState)([]);
	const [loadingCalendar, setLoadingCalendar] = (0, import_react.useState)(false);
	const [syncingCalendar, setSyncingCalendar] = (0, import_react.useState)(false);
	const [emails, setEmails] = (0, import_react.useState)([]);
	const [loadingGmail, setLoadingGmail] = (0, import_react.useState)(false);
	const [sendingEmail, setSendingEmail] = (0, import_react.useState)(false);
	const [emailTo, setEmailTo] = (0, import_react.useState)("support@apollo247.com");
	const [emailSubject, setEmailSubject] = (0, import_react.useState)("Refill Request: Glycomet 500 SR (Order MD-4821)");
	const [emailBody, setEmailBody] = (0, import_react.useState)(`Dear Pharmacist,\n\nI would like to request a refill for my regular prescription:\n- Medicine: Glycomet 500 SR (Metformin 500 mg)\n- Pack: 20 Tablets\n- Patient: ${state.profile.fullName}\n- Location: ${state.profile.city}\n\nPlease confirm availability and pickup time.\n\nThank you,\n${state.profile.fullName}`);
	(0, import_react.useEffect)(() => {
		if (token) loadAllData();
	}, [token]);
	const handleConnect = async () => {
		try {
			setConnecting(true);
			const accessToken = await requestGoogleAccessToken();
			setToken(accessToken);
			toast.success("Connected to Google Workspace", { description: "Gmail, Google Calendar, and Google Drive are now active." });
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to connect Google account";
			toast.error("Google Connection Failed", { description: msg });
		} finally {
			setConnecting(false);
		}
	};
	const handleDisconnect = () => {
		clearGoogleToken();
		setToken(null);
		setDriveFiles([]);
		setCalendarEvents([]);
		setEmails([]);
		toast.info("Disconnected from Google Workspace");
	};
	const loadAllData = async () => {
		loadDrive();
		loadCalendar();
		loadGmail();
	};
	const loadDrive = async () => {
		try {
			setLoadingDrive(true);
			const files = await listDriveMedicalFiles();
			setDriveFiles(files);
		} catch (err) {
			console.warn("Drive fetch error:", err);
		} finally {
			setLoadingDrive(false);
		}
	};
	const loadCalendar = async () => {
		try {
			setLoadingCalendar(true);
			const events = await listCalendarMedicationEvents();
			setCalendarEvents(events);
		} catch (err) {
			console.warn("Calendar fetch error:", err);
		} finally {
			setLoadingCalendar(false);
		}
	};
	const loadGmail = async () => {
		try {
			setLoadingGmail(true);
			const msgs = await listMedicalEmails();
			setEmails(msgs);
		} catch (err) {
			console.warn("Gmail fetch error:", err);
		} finally {
			setLoadingGmail(false);
		}
	};
	const handleUploadSamplePrescription = async () => {
		try {
			setUploadingDrive(true);
			const blob = new Blob([`MEDORA INDIA DIGITAL PRESCRIPTION RECORD
========================================
Patient: ${state.profile.fullName}\nCity: ${state.profile.city}\nDate: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}\n\nPRESCRIBED MEDICINES:\n1. Glycomet 500 SR (Metformin Hydrochloride 500 mg) - 1 tab twice daily\n2. Pan-D Capsule (Pantoprazole + Domperidone) - 1 cap daily empty stomach\n\nAllergies on File: ${state.profile.allergies.join(", ") || "None"}\nPrescriber: Dr. Rajesh Sharma (Apollo Clinics, Bengaluru)\n`], { type: "text/plain" });
			const file = new File([blob], `Medora-Prescription-${state.profile.fullName.replace(/\s+/g, "_")}-${Date.now()}.txt`, { type: "text/plain" });
			await uploadPrescriptionToDrive(file, file.name);
			toast.success("Uploaded to Google Drive", { description: `${file.name} is saved safely in your Google Drive.` });
			loadDrive();
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Upload failed";
			toast.error("Drive Upload Failed", { description: msg });
		} finally {
			setUploadingDrive(false);
		}
	};
	const handleSyncRemindersToCalendar = async () => {
		try {
			setSyncingCalendar(true);
			const activeReminders = state.reminders.filter((r) => r.active);
			if (activeReminders.length === 0) {
				toast.info("No active reminders to sync");
				return;
			}
			let count = 0;
			for (const rem of activeReminders) for (const time of rem.times) {
				const [hours, mins] = time.split(":").map(Number);
				const start = /* @__PURE__ */ new Date();
				start.setHours(hours, mins, 0, 0);
				if (start.getTime() < Date.now()) start.setDate(start.getDate() + 1);
				const end = new Date(start.getTime() + 9e5);
				await createMedicationCalendarEvent({
					summary: `💊 Dose Reminder: ${rem.medicineName} ${rem.strength}`,
					description: `${rem.instruction}\nStrength: ${rem.strength}\nPrescription Ref: ${rem.sourcePrescriptionId || "Direct Entry"}`,
					startTime: start.toISOString(),
					endTime: end.toISOString(),
					recurrenceDays: 14
				});
				count++;
			}
			toast.success("Calendar Synced Successfully", { description: `Created ${count} recurring medication reminder events in Google Calendar.` });
			loadCalendar();
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Calendar sync failed";
			toast.error("Calendar Sync Failed", { description: msg });
		} finally {
			setSyncingCalendar(false);
		}
	};
	const handleSendGmail = async () => {
		if (!emailTo || !emailSubject || !emailBody) {
			toast.error("Please fill in recipient, subject, and email body.");
			return;
		}
		try {
			setSendingEmail(true);
			await sendEmailViaGmail({
				to: emailTo,
				subject: emailSubject,
				bodyText: emailBody
			});
			toast.success("Email Sent via Gmail", { description: `Refill message dispatched to ${emailTo}` });
			loadGmail();
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Failed to send email";
			toast.error("Gmail Dispatch Error", { description: msg });
		} finally {
			setSendingEmail(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, {
				title: "Google Workspace Medical Hub",
				description: "Seamlessly bridge your prescriptions, medication calendar, and pharmacy communications with Google Drive, Google Calendar, and Gmail."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 196,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface p-5 border border-border/80",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid size-10 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cloud, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-base font-bold text-ink",
								children: "Google Workspace Integration"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 207,
								columnNumber: 17
							}, this), token ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "default",
								className: "bg-emerald-600 hover:bg-emerald-700 text-white gap-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 211,
									columnNumber: 21
								}, this), " Connected"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 210,
								columnNumber: 26
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "secondary",
								className: "gap-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 21
								}, this), " Action Needed"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 212,
								columnNumber: 30
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Authorized for Google Drive (Documents), Google Calendar (Dose Scheduling), and Gmail (Refills)."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 216,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: token ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: "outline",
							onClick: loadAllData,
							disabled: loadingDrive || loadingCalendar || loadingGmail,
							className: "h-9 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `mr-1.5 size-3.5 ${loadingDrive || loadingCalendar || loadingGmail ? "animate-spin" : ""}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 226,
								columnNumber: 19
							}, this), "Refresh All"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 225,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: handleDisconnect,
							className: "h-9 text-xs text-muted-foreground hover:text-destructive",
							children: "Disconnect"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 229,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 224,
							columnNumber: 22
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							onClick: handleConnect,
							disabled: connecting,
							className: "h-9 text-xs gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 233,
								columnNumber: 17
							}, this), connecting ? "Authorizing Google..." : "Connect Google Workspace"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 232,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 223,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 199,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "drive",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "grid grid-cols-3 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "drive",
								className: "gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 244,
									columnNumber: 13
								}, this), " Google Drive"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 243,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "calendar",
								className: "gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 247,
									columnNumber: 13
								}, this), " Google Calendar"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 246,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
								value: "gmail",
								className: "gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 250,
									columnNumber: 13
								}, this), " Gmail Refills"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 249,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 242,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "drive",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "surface p-5 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-sm font-bold text-ink",
									children: "Prescription & Lab Documents in Google Drive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 259,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: "Safely back up prescription scans, doctor notes, and diagnostic reports to your Google Drive."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 262,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 258,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										variant: "outline",
										onClick: loadDrive,
										disabled: !token || loadingDrive,
										className: "h-8 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `mr-1 size-3 ${loadingDrive ? "animate-spin" : ""}` }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 270,
												columnNumber: 19
											}, this),
											" ",
											"Refresh"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 269,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: handleUploadSamplePrescription,
										disabled: !token || uploadingDrive,
										className: "h-8 text-xs gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 274,
											columnNumber: 19
										}, this), uploadingDrive ? "Uploading..." : "Save Active Rx to Drive"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 273,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 268,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 257,
								columnNumber: 13
							}, this), !token ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-lg border border-dashed border-border p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "mx-auto size-8 text-muted-foreground opacity-50" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 281,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-sm font-semibold text-ink",
										children: "Google Drive is not connected"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 282,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Click Connect Google Workspace above to view and upload medical documents."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 285,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: handleConnect,
										className: "mt-4 text-xs",
										children: "Connect Google Drive"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 289,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 280,
								columnNumber: 23
							}, this) : loadingDrive ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "py-8 text-center text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "mx-auto size-5 animate-spin text-primary mb-2" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 17
								}, this), "Querying Google Drive files..."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 292,
								columnNumber: 39
							}, this) : driveFiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-lg border border-dashed border-border p-8 text-center space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "mx-auto size-8 text-muted-foreground opacity-50" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 296,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm font-semibold text-ink",
										children: "No medical documents found in Drive"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground",
										children: "Upload your digital prescription record to keep a safe, portable cloud backup."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 301,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 297,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: handleUploadSamplePrescription,
										disabled: uploadingDrive,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-1 size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 307,
											columnNumber: 19
										}, this), " Upload Current Prescription"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 306,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 295,
								columnNumber: 50
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: driveFiles.map((file) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-3.5 hover:border-primary/40 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid size-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 313,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 312,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs font-semibold text-ink truncate",
												children: file.name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 316,
												columnNumber: 25
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-muted-foreground",
												children: file.mimeType.split("/")[1]?.toUpperCase() || "DOCUMENT"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 319,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 315,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 311,
										columnNumber: 21
									}, this), file.webViewLink && /* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										variant: "ghost",
										className: "h-7 text-xs",
										asChild: true,
										children: /* @__PURE__ */ (void 0)("a", {
											href: file.webViewLink,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3 mr-1" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 327,
												columnNumber: 27
											}, this), " Open"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 326,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 325,
										columnNumber: 42
									}, this)]
								}, file.id, true, {
									fileName: _jsxFileName,
									lineNumber: 310,
									columnNumber: 41
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 24
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 256,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 255,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "calendar",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "surface p-5 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-sm font-bold text-ink",
									children: "Medication Dose Reminders in Google Calendar"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 340,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: "Synchronize daily medication times and clinic appointments directly to your Google Calendar."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 343,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 339,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										variant: "outline",
										onClick: loadCalendar,
										disabled: !token || loadingCalendar,
										className: "h-8 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `mr-1 size-3 ${loadingCalendar ? "animate-spin" : ""}` }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 351,
												columnNumber: 19
											}, this),
											" ",
											"Refresh"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 350,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: handleSyncRemindersToCalendar,
										disabled: !token || syncingCalendar,
										className: "h-8 text-xs gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 355,
											columnNumber: 19
										}, this), syncingCalendar ? "Syncing..." : "Sync All Reminders (14-Day)"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 354,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 349,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 338,
								columnNumber: 13
							}, this), !token ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-lg border border-dashed border-border p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "mx-auto size-8 text-muted-foreground opacity-50" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 362,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-sm font-semibold text-ink",
										children: "Google Calendar is not connected"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 363,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Connect your Google account to automatically push medication alerts to your phone and calendar."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 366,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: handleConnect,
										className: "mt-4 text-xs",
										children: "Connect Google Calendar"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 370,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 361,
								columnNumber: 23
							}, this) : loadingCalendar ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "py-8 text-center text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "mx-auto size-5 animate-spin text-primary mb-2" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 374,
									columnNumber: 17
								}, this), "Fetching calendar events..."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 373,
								columnNumber: 42
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-lg bg-primary/5 border border-primary/20 p-3.5 flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-4 text-primary shrink-0 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 378,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-semibold text-primary",
											children: "Active Prescription Routines"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 380,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-muted-foreground mt-0.5",
											children: state.reminders.filter((r) => r.active).map((r) => `${r.medicineName} (${r.times.join(", ")})`).join(" · ")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 383,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 379,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 377,
									columnNumber: 17
								}, this), calendarEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "rounded-lg border border-dashed border-border p-6 text-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-muted-foreground",
										children: "No Medora events found on primary calendar. Click \"Sync All Reminders\" to push your schedule."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 390,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 389,
									columnNumber: 48
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: calendarEvents.map((evt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-3",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs font-bold text-ink truncate",
												children: evt.summary
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 397,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] text-muted-foreground truncate",
												children: evt.start.dateTime ? new Date(evt.start.dateTime).toLocaleString() : evt.start.date
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 400,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 396,
											columnNumber: 25
										}, this), evt.htmlLink && /* @__PURE__ */ (void 0)(Button, {
											size: "sm",
											variant: "ghost",
											className: "h-7 text-xs",
											asChild: true,
											children: /* @__PURE__ */ (void 0)("a", {
												href: evt.htmlLink,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3 mr-1" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 407,
													columnNumber: 31
												}, this), " View in Calendar"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 406,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 405,
											columnNumber: 42
										}, this)]
									}, evt.id, true, {
										fileName: _jsxFileName,
										lineNumber: 395,
										columnNumber: 48
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 394,
									columnNumber: 28
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 376,
								columnNumber: 24
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 337,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 336,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "gmail",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "surface p-5 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pb-3 border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "text-sm font-bold text-ink",
									children: "Send Prescription Refill via Gmail"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 421,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: "Dispatch official medicine refill requests or consultation notes directly through your authenticated Gmail account."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 424,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 420,
								columnNumber: 13
							}, this), !token ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-lg border border-dashed border-border p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "mx-auto size-8 text-muted-foreground opacity-50" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 431,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-sm font-semibold text-ink",
										children: "Gmail is not connected"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 432,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Connect Google Workspace to compose and send verified prescription messages."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 435,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										size: "sm",
										onClick: handleConnect,
										className: "mt-4 text-xs",
										children: "Connect Gmail"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 439,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 430,
								columnNumber: 23
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid gap-6 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-3 rounded-lg border border-border bg-card p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: "Compose Medicine Refill"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 445,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
												htmlFor: "gm-to",
												className: "text-xs",
												children: "Pharmacy or Clinician Email"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 450,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												id: "gm-to",
												value: emailTo,
												onChange: (e) => setEmailTo(e.target.value),
												className: "h-8 text-xs",
												placeholder: "e.g. pharmacy@apollo.com"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 453,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 449,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
												htmlFor: "gm-sub",
												className: "text-xs",
												children: "Subject"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 457,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
												id: "gm-sub",
												value: emailSubject,
												onChange: (e) => setEmailSubject(e.target.value),
												className: "h-8 text-xs"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 460,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 456,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
												htmlFor: "gm-body",
												className: "text-xs",
												children: "Message Body"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 464,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
												id: "gm-body",
												value: emailBody,
												onChange: (e) => setEmailBody(e.target.value),
												rows: 6,
												className: "text-xs font-mono"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 467,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 463,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											onClick: handleSendGmail,
											disabled: sendingEmail,
											className: "w-full text-xs gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 471,
												columnNumber: 21
											}, this), sendingEmail ? "Dispatching via Gmail..." : "Send Refill Email via Gmail"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 470,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 444,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: "Recent Medical & Pharmacy Messages"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 479,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: loadGmail,
											disabled: loadingGmail,
											className: "h-7 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `mr-1 size-3 ${loadingGmail ? "animate-spin" : ""}` }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 483,
													columnNumber: 23
												}, this),
												" ",
												"Refresh"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 482,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 478,
										columnNumber: 19
									}, this), loadingGmail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "py-6 text-center text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "mx-auto size-5 animate-spin text-primary mb-2" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 489,
											columnNumber: 23
										}, this), "Loading recent emails..."]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 488,
										columnNumber: 35
									}, this) : emails.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground",
										children: "No pharmacy or medical emails detected in recent inbox messages."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 491,
										columnNumber: 52
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "space-y-2 max-h-[360px] overflow-y-auto pr-1",
										children: emails.map((msg) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "rounded-lg border border-border bg-card p-3 space-y-1 hover:border-primary/40 transition-colors",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex items-center justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-xs font-semibold text-ink truncate",
														children: msg.subject
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 497,
														columnNumber: 29
													}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "text-[10px] text-muted-foreground shrink-0",
														children: msg.date?.slice(0, 16)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 500,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 496,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-[11px] text-muted-foreground truncate",
													children: msg.from
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 504,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
													className: "text-xs text-ink/80 line-clamp-2",
													children: msg.snippet
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 507,
													columnNumber: 27
												}, this)
											]
										}, msg.id, true, {
											fileName: _jsxFileName,
											lineNumber: 495,
											columnNumber: 42
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 494,
										columnNumber: 30
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 477,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 442,
								columnNumber: 24
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 419,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 418,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 241,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 195,
		columnNumber: 10
	}, this);
}
//#endregion
export { GoogleWorkspacePage as component };
