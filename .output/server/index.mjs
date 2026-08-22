globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/AppRouteGroup-D7i1jc95.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25f-x8Q3p4c+3KeDwc0kty92uKG2HNk\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 607,
		"path": "../public/assets/AppRouteGroup-D7i1jc95.js"
	},
	"/assets/AreaChart-mJB7DZNc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"636ec-vsSW8KCNp2xQhLpevNLBgSPmWSI\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 407276,
		"path": "../public/assets/AreaChart-mJB7DZNc.js"
	},
	"/assets/CommandPalette-BPTHz9GD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae8d-yvDCMSrLlWgY5Aq8SZWFM/O+r7c\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 44685,
		"path": "../public/assets/CommandPalette-BPTHz9GD.js"
	},
	"/assets/DataTable-DQuRUQri.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2207-Ku2EBkWDCn9gZGz7R9lnEX+DU5k\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 8711,
		"path": "../public/assets/DataTable-DQuRUQri.js"
	},
	"/assets/WorkspaceShell-BHK_37b8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd6-TZ4bIZIJsTrKvAkQYjIOK5y6HMg\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 7382,
		"path": "../public/assets/WorkspaceShell-BHK_37b8.js"
	},
	"/assets/_._lovable.oauth.consent-BxF7Qaq8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a2-VWDRf3FcdJg9/QTfOD7Z6Kwlb7c\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 418,
		"path": "../public/assets/_._lovable.oauth.consent-BxF7Qaq8.js"
	},
	"/assets/_._lovable.oauth.consent-DwSb8TLU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c23-GWohRgAs0Pn2ykvksoVH5YF+P+M\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 3107,
		"path": "../public/assets/_._lovable.oauth.consent-DwSb8TLU.js"
	},
	"/assets/activity-C_GSfDie.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-k0s4nC9FxsDH3VpQmzV6A0Lnh+4\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 232,
		"path": "../public/assets/activity-C_GSfDie.js"
	},
	"/assets/admin-odZU6fjP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d2-J5mn2QvduobJYZo0egcNJpkpyp0\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 722,
		"path": "../public/assets/admin-odZU6fjP.js"
	},
	"/assets/admin.audit-aoxdSn-q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50a0-Zd95Qihtsh+QeDl54m5EZoCMsUQ\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 20640,
		"path": "../public/assets/admin.audit-aoxdSn-q.js"
	},
	"/assets/admin.catalog-Bz2uFRAa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21dc-PDSQvcOEuGozHv0pE+0mfHH3EQg\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 8668,
		"path": "../public/assets/admin.catalog-Bz2uFRAa.js"
	},
	"/assets/admin.index-ai0EXmj7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2233-ozgyikEY580V49kkLMLpY39UGFk\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 8755,
		"path": "../public/assets/admin.index-ai0EXmj7.js"
	},
	"/assets/admin.moderation-CnTPcoE4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32f-GOWED34COtNpTnvyjBLnWZbI/oo\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 815,
		"path": "../public/assets/admin.moderation-CnTPcoE4.js"
	},
	"/assets/admin.pharmacies-yKILNGeZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f89-QwfIxDX9M3JlfYxwFvy6hJA13uY\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 8073,
		"path": "../public/assets/admin.pharmacies-yKILNGeZ.js"
	},
	"/assets/admin.users-Deea6-Fg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ecb-9QjkNNIpAwRqcXZxosZsaTOdJkM\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 7883,
		"path": "../public/assets/admin.users-Deea6-Fg.js"
	},
	"/assets/app-YOiotVII.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3987-LSd2VdEnYpg6CTIhWmtXW8rWjgI\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 14727,
		"path": "../public/assets/app-YOiotVII.js"
	},
	"/assets/app.assistant-CCR8W85l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b9c-imo+qvvyQsL0PjNKH/7Y1yQWSP4\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 80796,
		"path": "../public/assets/app.assistant-CCR8W85l.js"
	},
	"/assets/app.cart-nMJZyt-p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2af3-cZanB+QUWK3dfb59ZzOAFJgIFH4\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 10995,
		"path": "../public/assets/app.cart-nMJZyt-p.js"
	},
	"/assets/app.compare-pZPf6BUa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5877-Pugam2V68OayxGWojMaHVPBxrDk\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 22647,
		"path": "../public/assets/app.compare-pZPf6BUa.js"
	},
	"/assets/app.history-DtEUPF6X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1588-NLTGWMuxjyF4AHQZMfODo3+AquA\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 5512,
		"path": "../public/assets/app.history-DtEUPF6X.js"
	},
	"/assets/app.index-Bx0hZvss.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5e-wxN4p17S3bxytGdihSNplLeRBEg\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 19038,
		"path": "../public/assets/app.index-Bx0hZvss.js"
	},
	"/assets/app.interactions-an1pgxAm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a243-OA6C/wHdkcCq+mFb7h0NqDSg+Us\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 41539,
		"path": "../public/assets/app.interactions-an1pgxAm.js"
	},
	"/assets/app.labs-BmUMnpcb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16fd-LQ1QzUPx6LntCoKUzvuJumJ4P54\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 5885,
		"path": "../public/assets/app.labs-BmUMnpcb.js"
	},
	"/assets/app.medicine._medicineId-C_FqhbOg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29bf-067/JLocJR4B8Y9UV3xrF1yWzmQ\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 10687,
		"path": "../public/assets/app.medicine._medicineId-C_FqhbOg.js"
	},
	"/assets/app.medicine._medicineId-CecbEldF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c2-LlJy100bfYmmMbkyYlHifhV4k9E\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 706,
		"path": "../public/assets/app.medicine._medicineId-CecbEldF.js"
	},
	"/assets/app.notifications-XitVZPg9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11cb-yBPWF1zrcg6JBp0BOt6K8VjriKw\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 4555,
		"path": "../public/assets/app.notifications-XitVZPg9.js"
	},
	"/assets/app.orders-D9QDA-GK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8f-FmFvV4NFMgLSMk/AJ6E9ufneyzA\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 7823,
		"path": "../public/assets/app.orders-D9QDA-GK.js"
	},
	"/assets/app.pharmacies-DtkFTWnP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-g37DFJX7MKaSvwG/diUyYxbumfA\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 274,
		"path": "../public/assets/app.pharmacies-DtkFTWnP.js"
	},
	"/assets/app.pharmacies._pharmacyId-836dzCWt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b5-b3+KvNRmgnZrKtX9g8ujTLE1J0s\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 437,
		"path": "../public/assets/app.pharmacies._pharmacyId-836dzCWt.js"
	},
	"/assets/app.pharmacies._pharmacyId-DOh4Lxy2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ed-E4PMht1aizb71XDoU03cOohcpO4\"",
		"mtime": "2026-08-22T14:43:59.940Z",
		"size": 5357,
		"path": "../public/assets/app.pharmacies._pharmacyId-DOh4Lxy2.js"
	},
	"/assets/app.pharmacies.index-BPmjNdNZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cf04-idDKGyIF8YKiSqAr+qa3vcHDGk4\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 118532,
		"path": "../public/assets/app.pharmacies.index-BPmjNdNZ.js"
	},
	"/assets/app.prescriptions-G5xZwoFA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8b8a-DHCG2sN9WRZUC/P0rgMpqirzdpc\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 35722,
		"path": "../public/assets/app.prescriptions-G5xZwoFA.js"
	},
	"/assets/app.reminders-CU3EpwgH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6def-oIPvoHBzTV0F4SP7owD6NNuF03k\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 28143,
		"path": "../public/assets/app.reminders-CU3EpwgH.js"
	},
	"/assets/app.search-4tqZ1-9N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c17-dlg5LZcZblWrM/ocS5X8hlFqQoI\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 11287,
		"path": "../public/assets/app.search-4tqZ1-9N.js"
	},
	"/assets/app.settings-BGc5fZIj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d35-xYDjSBVeM2/in5Qg7taO+6SSZ+c\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 15669,
		"path": "../public/assets/app.settings-BGc5fZIj.js"
	},
	"/assets/app.triage-BqUbmvEp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63d2-kVM8Lw1yVKft39ydA99uQy/r6Us\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 25554,
		"path": "../public/assets/app.triage-BqUbmvEp.js"
	},
	"/assets/app.verify-CKMMEbSo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e05-9FWsRxcx/D+lv9oPCMd/vVyyg3g\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 19973,
		"path": "../public/assets/app.verify-CKMMEbSo.js"
	},
	"/assets/app.workspace-DN8hlWsi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"756d-dgJY+fd3ZNSHWX5Zk1fXXSuFhzI\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 30061,
		"path": "../public/assets/app.workspace-DN8hlWsi.js"
	},
	"/assets/arrow-left-mtdbYS4q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-jJhL7B5/lUY/MNaGKSPPfvTkzfQ\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 163,
		"path": "../public/assets/arrow-left-mtdbYS4q.js"
	},
	"/assets/auth-CYSt29__.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17813-bxSW2UfGbY1VUvVYIuViv1XJUms\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 96275,
		"path": "../public/assets/auth-CYSt29__.js"
	},
	"/assets/badge-check-Cg69jl2D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13a-/tnFyUf6oo9pyTKoW8Rf24ri54A\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 314,
		"path": "../public/assets/badge-check-Cg69jl2D.js"
	},
	"/assets/bell-BsF9zxNm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"120-GBHCFcX102YdTAgfS/S0g1DIhCQ\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 288,
		"path": "../public/assets/bell-BsF9zxNm.js"
	},
	"/assets/boxes-BsyXJQh1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"351-3E/DKH7/4W+V1N57l3bA7D2VqZs\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 849,
		"path": "../public/assets/boxes-BsyXJQh1.js"
	},
	"/assets/building-2-hBH3blzZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17d-lSckm/OzwbSJB7D9Lz36m4QW7Gg\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 381,
		"path": "../public/assets/building-2-hBH3blzZ.js"
	},
	"/assets/button-CYbMhQ2w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"baea-s3a4Qm/PHbwVvxRdpZquuYpntAQ\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 47850,
		"path": "../public/assets/button-CYbMhQ2w.js"
	},
	"/assets/calendar-clock-B6lF4Rv3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178-sFy3r+wBUOaf8Y3fZ1SsTvc2BgE\"",
		"mtime": "2026-08-22T14:43:59.941Z",
		"size": 376,
		"path": "../public/assets/calendar-clock-B6lF4Rv3.js"
	},
	"/assets/card-hpQ6U2XV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c1-ilfMHX8YT/nocFqMq42scAtfqzw\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 1473,
		"path": "../public/assets/card-hpQ6U2XV.js"
	},
	"/assets/chart-column--C4vmL9s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-ZE320xV7r4flpCKSxpvhKIckSCs\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 249,
		"path": "../public/assets/chart-column--C4vmL9s.js"
	},
	"/assets/charts-CokNiIb9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a2d-aPZ1yX0XzZe0seKMmzusmiLcVzA\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 31277,
		"path": "../public/assets/charts-CokNiIb9.js"
	},
	"/assets/checkbox-CfE63mWE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127c-V0EgyAZeS3ufnUGZxRl9QcpKyQs\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 4732,
		"path": "../public/assets/checkbox-CfE63mWE.js"
	},
	"/assets/circle-check-3Z4rQ3m6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-3+x/YA+6WAs0HpatwCUKFzQtX8s\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 176,
		"path": "../public/assets/circle-check-3Z4rQ3m6.js"
	},
	"/assets/circle-x-Dk0c2KSq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd-Ppw7MAeP7PBuiQnX8eRWxHZjNYc\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 205,
		"path": "../public/assets/circle-x-Dk0c2KSq.js"
	},
	"/assets/clinical-interactions-D8YqAHSm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"402c-q7yC2/N+YzYrEeyFJsn/bqCxrZM\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 16428,
		"path": "../public/assets/clinical-interactions-D8YqAHSm.js"
	},
	"/assets/clipboard-check-BbkWr0Vr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12e-C4stlRvSrtTr/9FAmEcwXeEJ8oU\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 302,
		"path": "../public/assets/clipboard-check-BbkWr0Vr.js"
	},
	"/assets/clipboard-list-CqP58Ik-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"199-z9gwAyOKIItnhchGkr7e2vVSHc0\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 409,
		"path": "../public/assets/clipboard-list-CqP58Ik-.js"
	},
	"/assets/clock-6KdW8Tmu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-YrgY5kdnHtUTnf7H4EGa2fd4ulM\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 167,
		"path": "../public/assets/clock-6KdW8Tmu.js"
	},
	"/assets/cloud-BHX-itDw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-IQWN2cXg/EQKAo37jl8lbSVgTcU\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 158,
		"path": "../public/assets/cloud-BHX-itDw.js"
	},
	"/assets/demo-catalog-DduU0a4X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b56-NIs7hVhah3LeCAumaw9yMEb7ty4\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 31574,
		"path": "../public/assets/demo-catalog-DduU0a4X.js"
	},
	"/assets/dialog-DnW96JpF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b27-wR0VZpHd3XyC79OlM5+lAJqMCx0\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 2855,
		"path": "../public/assets/dialog-DnW96JpF.js"
	},
	"/assets/dist-7eQUGPXs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12ef-PT8aEN7D7LCR/Njlu4fN3xpWGk4\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 4847,
		"path": "../public/assets/dist-7eQUGPXs.js"
	},
	"/assets/dist-CB3qivuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f-8LUz++JCWw/qyqXV3+/+PrhG5p4\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 351,
		"path": "../public/assets/dist-CB3qivuf.js"
	},
	"/assets/dist-D8Wfxh48.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-jFZvDM3G/vRQzi+d6tOFFCbMspo\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 156,
		"path": "../public/assets/dist-D8Wfxh48.js"
	},
	"/assets/doctor-Cfp_ODyT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e0-k/yByAuDgQSlBEPjJNlEeOSBWIE\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 736,
		"path": "../public/assets/doctor-Cfp_ODyT.js"
	},
	"/assets/doctor.index-Cf2MaElc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f7d-yLKXoQ8oQ5COxc7TFv9EUOzDEnY\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 12157,
		"path": "../public/assets/doctor.index-Cf2MaElc.js"
	},
	"/assets/doctor.prescriptions-DNxZN4lR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d95-2iXS9hqilVtTTSKVkjiLwptdvmM\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 11669,
		"path": "../public/assets/doctor.prescriptions-DNxZN4lR.js"
	},
	"/assets/doctor.schedule-DancNIpJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"326-wlVqDZxvQYGBjggUoQklPEoTjkU\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 806,
		"path": "../public/assets/doctor.schedule-DancNIpJ.js"
	},
	"/assets/download-xVCpDdxt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-NfGUrIvpchhJwA+pWgT/pES6LK8\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 230,
		"path": "../public/assets/download-xVCpDdxt.js"
	},
	"/assets/emergency-xzHHGS1n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1427-lqhtFaEpwnyv/rQijQRQJiqpCm4\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 5159,
		"path": "../public/assets/emergency-xzHHGS1n.js"
	},
	"/assets/eye-98Dcops0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-U0OmBtGGDXvF404JimCU81JJdp0\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 254,
		"path": "../public/assets/eye-98Dcops0.js"
	},
	"/assets/file-scan-BNbxdhZ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ce-5WFxLEWwIQMKsZyVV9+C4lx93RI\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 462,
		"path": "../public/assets/file-scan-BNbxdhZ8.js"
	},
	"/assets/file-text-3UuKgQp7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-iiG5+jyItk3VkpRZWcLglLkorIQ\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 383,
		"path": "../public/assets/file-text-3UuKgQp7.js"
	},
	"/assets/gauge-BYAYZHSP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-XypeIFFYGRylELSjNvI/eN1/ywM\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 174,
		"path": "../public/assets/gauge-BYAYZHSP.js"
	},
	"/assets/handshake-CBaVzH-l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-E6kFh4Yq/vhPZcdC+ITPDkI/H+g\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 444,
		"path": "../public/assets/handshake-CBaVzH-l.js"
	},
	"/assets/history-_73rjGC0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb-77BmFeUpAIqZisUR1GztSAEKi8Q\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 235,
		"path": "../public/assets/history-_73rjGC0.js"
	},
	"/assets/index-B_IBxdOs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2ee1-P0hTFx/yb7YN5tTiWgcn/fywZlI\"",
		"mtime": "2026-08-22T14:43:59.939Z",
		"size": 929505,
		"path": "../public/assets/index-B_IBxdOs.js"
	},
	"/assets/input-DOD6UeVO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d6-eSZ9W/S9HsCFdBraZblfBF8NL3k\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 726,
		"path": "../public/assets/input-DOD6UeVO.js"
	},
	"/assets/jsx-dev-runtime-BsTk6-E6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6597-PjZrmrahfKX9kXamO7Z+1NbqbpY\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 26007,
		"path": "../public/assets/jsx-dev-runtime-BsTk6-E6.js"
	},
	"/assets/key-round-DH9jfo1j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"161-szY3pnEEQR3ePR9ONqGOd5QwaeM\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 353,
		"path": "../public/assets/key-round-DH9jfo1j.js"
	},
	"/assets/label-CkMGFJFd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"351-EfLwHm0XIf1h/bbWCjIk7vvK7DQ\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 849,
		"path": "../public/assets/label-CkMGFJFd.js"
	},
	"/assets/layers-BZIPnLss.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a3-Lqsv25ExJtePpmFvNYQ3WXbVazI\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 419,
		"path": "../public/assets/layers-BZIPnLss.js"
	},
	"/assets/loader-circle-DJYoZd_f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-3OwY74RsaWdq+t4vewTX01Z+3XA\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 142,
		"path": "../public/assets/loader-circle-DJYoZd_f.js"
	},
	"/assets/mail-BnbX-gNU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3-8tDM0yER0VSY1NFqndCdwqVEEss\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 211,
		"path": "../public/assets/mail-BnbX-gNU.js"
	},
	"/assets/map-pin-CtkUABIU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-W1T6ANt6Gjv3Gyx8ledEKqqIlBo\"",
		"mtime": "2026-08-22T14:43:59.942Z",
		"size": 257,
		"path": "../public/assets/map-pin-CtkUABIU.js"
	},
	"/assets/matchContext-BEXubx81.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a0-2xhTSl5ww11vtEJYAKuTdubEL14\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 672,
		"path": "../public/assets/matchContext-BEXubx81.js"
	},
	"/assets/medicine-provider-BRysE9jI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b4-NI4zZFyNDASmEn/RRg0u7Nj7xAc\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 1972,
		"path": "../public/assets/medicine-provider-BRysE9jI.js"
	},
	"/assets/message-square-text-ksRliLXb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"158-oCGLbXgvVw9m5KpeNMk5zu/GAdU\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 344,
		"path": "../public/assets/message-square-text-ksRliLXb.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/package-W3ithA84.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"172-CTY9sXbagMwRO0U7x0abnPyfTfc\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 370,
		"path": "../public/assets/package-W3ithA84.js"
	},
	"/assets/pharmacy-BKGLArMX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e3-LwMbo6gvem/D7f5bbX2ys4168Xs\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 739,
		"path": "../public/assets/pharmacy-BKGLArMX.js"
	},
	"/assets/pharmacy.analytics-mTah9WRZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b9-CKamDjFC/IIsPqj8QRHupUYvBdE\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 6585,
		"path": "../public/assets/pharmacy.analytics-mTah9WRZ.js"
	},
	"/assets/pharmacy.customers-Dp_Aaaqy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d45-R7kgCnS/2/UP0q7EfffoAsHZ7uU\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 7493,
		"path": "../public/assets/pharmacy.customers-Dp_Aaaqy.js"
	},
	"/assets/pharmacy.index-vGBtO1WH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ace-g68e6P4FsIV/ns6pcDV8O16BXXY\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 6862,
		"path": "../public/assets/pharmacy.index-vGBtO1WH.js"
	},
	"/assets/pharmacy.inventory-CDku-URY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2321-SB3k23H+pIzekTzFQftC5Si76wg\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 8993,
		"path": "../public/assets/pharmacy.inventory-CDku-URY.js"
	},
	"/assets/pharmacy.orders-DfLDw92Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dbf-7ayrDjedbnfju1ZXaIE1+xAeuhA\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 7615,
		"path": "../public/assets/pharmacy.orders-DfLDw92Z.js"
	},
	"/assets/pharmacy.prescriptions-CumhFaeb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"225e-Su0pDjBAx81qNBwSVXne/iRSz8M\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 8798,
		"path": "../public/assets/pharmacy.prescriptions-CumhFaeb.js"
	},
	"/assets/pharmacy.suppliers-BUTWt3Av.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7d-4Ftws/TPXbyhxSPL6bKXXseDGn0\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 6781,
		"path": "../public/assets/pharmacy.suppliers-BUTWt3Av.js"
	},
	"/assets/phone-Ds0cM6bz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-7NTk9EGfzkfoOYoEvG/8MCuR8Ks\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 320,
		"path": "../public/assets/phone-Ds0cM6bz.js"
	},
	"/assets/pill-DkmMPIHy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3-lYB7VZpMsWguOw2oY2bhsefpaqs\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 211,
		"path": "../public/assets/pill-DkmMPIHy.js"
	},
	"/assets/plus-DalgRU_D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-K5oHb46CE0zKvp/s1zf/bI6ej+k\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 151,
		"path": "../public/assets/plus-DalgRU_D.js"
	},
	"/assets/primitives-CXtEj9cl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4910-0ljou1GQJJlpqzy3zKBBIkhBY4g\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 18704,
		"path": "../public/assets/primitives-CXtEj9cl.js"
	},
	"/assets/progress-DmDaCeLE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b0-XUoU19dmq61iGewz5zA6WqzFo40\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 2480,
		"path": "../public/assets/progress-DmDaCeLE.js"
	},
	"/assets/provider-CRzHJNnf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a24d-7FlK1pKd3nrQkpA9ny0Ws85rq6c\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 41549,
		"path": "../public/assets/provider-CRzHJNnf.js"
	},
	"/assets/react-dinEYZkY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e0de-88c+m9kHD9MLNV4ZGapFdWXd790\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 123102,
		"path": "../public/assets/react-dinEYZkY.js"
	},
	"/assets/reset-password-aUjK13rk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d67-JKDy9SeinChVpm03eCDBoXuBK5o\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 3431,
		"path": "../public/assets/reset-password-aUjK13rk.js"
	},
	"/assets/rotate-ccw-BLdE36Q9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6-MZI35mIuftjBskAtoHw6sQMMlXs\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 198,
		"path": "../public/assets/rotate-ccw-BLdE36Q9.js"
	},
	"/assets/routes-vStBcRWu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3579-+iBwRglQC7gv8vrozC5mz9OA2F8\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 13689,
		"path": "../public/assets/routes-vStBcRWu.js"
	},
	"/assets/search-BwWHdAnj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ac-MvH5dWJqMuu1O5IgAJzc1XotTvw\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 172,
		"path": "../public/assets/search-BwWHdAnj.js"
	},
	"/assets/select-CNqeI4Ks.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a98-6+7o9+OStbgA+jhZgKDIzkFN1ho\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 23192,
		"path": "../public/assets/select-CNqeI4Ks.js"
	},
	"/assets/send-CEMLS5_8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"120-MwmLpGP4hRW6oyMX2Ofo4itPuUY\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 288,
		"path": "../public/assets/send-CEMLS5_8.js"
	},
	"/assets/settings-DF07Xae7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e5-LaauBAnHVhlIHtLKTAyZbdlvMTY\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 485,
		"path": "../public/assets/settings-DF07Xae7.js"
	},
	"/assets/shield-alert-BTjykvCh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f-2cInpDrVXqrlZpcP61cmyZiB0dQ\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 351,
		"path": "../public/assets/shield-alert-BTjykvCh.js"
	},
	"/assets/shopping-bag-CjlKv5wT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152-S28OHroHpHUqNvld6Qv32Qq/03Y\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 338,
		"path": "../public/assets/shopping-bag-CjlKv5wT.js"
	},
	"/assets/shopping-cart-DSqlCoPA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-nBnjaV2whZfI/PeSQ5Npu1ETU4Q\"",
		"mtime": "2026-08-22T14:43:59.943Z",
		"size": 290,
		"path": "../public/assets/shopping-cart-DSqlCoPA.js"
	},
	"/assets/skeleton-BkzZX2PA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"153-4rPdvk63YrwEVcCVfpcRs7k5iS4\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 339,
		"path": "../public/assets/skeleton-BkzZX2PA.js"
	},
	"/assets/sparkles-D671-Os7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ec-Jn/1psAZY4g2wGQRTxEOT+m+hg8\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 492,
		"path": "../public/assets/sparkles-D671-Os7.js"
	},
	"/assets/stethoscope-D4gt7Kqd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-S4m0/Pv/whcyAvPcfFkdJ3KDUfQ\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 340,
		"path": "../public/assets/stethoscope-D4gt7Kqd.js"
	},
	"/assets/styles-DCeQOvdW.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"24f06-/qv99Z1Ss1B0PSMZIEkTdxZkAok\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 151302,
		"path": "../public/assets/styles-DCeQOvdW.css"
	},
	"/assets/switch-Vq0H8C5j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1181-fz0n4a80MTFytdktZI1sd0kuo2c\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 4481,
		"path": "../public/assets/switch-Vq0H8C5j.js"
	},
	"/assets/switch-xGgYumjR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1105-/rd0QWkQV4odfBLeKG4x1zXUJPE\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 4357,
		"path": "../public/assets/switch-xGgYumjR.js"
	},
	"/assets/table-DqcD2enq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c6-tuwbyjsO4D9bxlih/FCONAvASZY\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 2246,
		"path": "../public/assets/table-DqcD2enq.js"
	},
	"/assets/tabs-DRD5jZZS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f3c-hPpyCeaQ5Ij+7K7X883CYRjoMa8\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 3900,
		"path": "../public/assets/tabs-DRD5jZZS.js"
	},
	"/assets/textarea-Cwru8W4s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"274-bGGdwhMlPbrVC3vVMAGetBHBVKg\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 628,
		"path": "../public/assets/textarea-Cwru8W4s.js"
	},
	"/assets/trash-2-Cx-TLMjP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146-slEWhUU7cDuc4E4Hx5ssG5ohpTI\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 326,
		"path": "../public/assets/trash-2-Cx-TLMjP.js"
	},
	"/assets/trending-up-Z_xLUWvo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-HyOU+Ysd/bNt620DGpSxAfArzP0\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 173,
		"path": "../public/assets/trending-up-Z_xLUWvo.js"
	},
	"/assets/triangle-alert-CffCXUoe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57e-FbGWxeRqZ300GqfACopPFu3CBMA\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 1406,
		"path": "../public/assets/triangle-alert-CffCXUoe.js"
	},
	"/assets/truck-CekjOtJ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"194-6B4Mz4us08H3oLwle6IOXHgHoGw\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 404,
		"path": "../public/assets/truck-CekjOtJ3.js"
	},
	"/assets/upload-BNSz3NDZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4-23mK9bZMrtL8xDuZDQxfiEnh+LY\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 228,
		"path": "../public/assets/upload-BNSz3NDZ.js"
	},
	"/assets/use-sign-out-C3_eLwcD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"162-zWWdgxtgEEyYBbKZWxRKzRG2b5g\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 354,
		"path": "../public/assets/use-sign-out-C3_eLwcD.js"
	},
	"/assets/useQuery-Cv_ETFwe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2504-UCQzxIsJgXhZMiuR2h4ft+lhVog\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 9476,
		"path": "../public/assets/useQuery-Cv_ETFwe.js"
	},
	"/assets/useStore-LbKQ8IhS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6714-N/AAUIQBEx+NEHT9k64ZgbjBnos\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 26388,
		"path": "../public/assets/useStore-LbKQ8IhS.js"
	},
	"/assets/user-DT9YvVKr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c2-ZN/Pc23+iirzqrQTWVUohuw/1jI\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 194,
		"path": "../public/assets/user-DT9YvVKr.js"
	},
	"/assets/users-CwJ07ZW7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130-1UcsBRvDg1kdWvRlGvSu7gYyYgo\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 304,
		"path": "../public/assets/users-CwJ07ZW7.js"
	},
	"/assets/workspace-py8ypNWh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a4f-fwa6JpU7qptJrJdfjpWabFq00RE\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 23119,
		"path": "../public/assets/workspace-py8ypNWh.js"
	},
	"/assets/x-BBtA3wKg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-cSPHiGIo60rWxXkleB2zzSfXKYU\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 152,
		"path": "../public/assets/x-BBtA3wKg.js"
	},
	"/assets/zap-BwzzTcWA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-RSDKhAad0s/cWxwq2McdNUdSfs4\"",
		"mtime": "2026-08-22T14:43:59.944Z",
		"size": 260,
		"path": "../public/assets/zap-BwzzTcWA.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0jRgqU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0jRgqU
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
