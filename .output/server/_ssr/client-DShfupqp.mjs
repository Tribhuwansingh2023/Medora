import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client-DShfupqp.js
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
var isSupabaseConfigured = Boolean(typeof import.meta !== "undefined" && {
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
}["VITE_SUPABASE_URL"] || typeof processModule !== "undefined" && processModule.env?.["SUPABASE_URL"]) && Boolean(typeof import.meta !== "undefined" && {
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
}["VITE_SUPABASE_PUBLISHABLE_KEY"] || typeof processModule !== "undefined" && processModule.env?.["SUPABASE_PUBLISHABLE_KEY"]);
function createSupabaseClient() {
	const SUPABASE_URL = typeof import.meta !== "undefined" && {
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
	}["VITE_SUPABASE_URL"] || typeof processModule !== "undefined" && processModule.env?.["SUPABASE_URL"] || "https://placeholder-medora.supabase.co";
	const SUPABASE_PUBLISHABLE_KEY = typeof import.meta !== "undefined" && {
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
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || typeof processModule !== "undefined" && processModule.env?.["SUPABASE_PUBLISHABLE_KEY"] || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.demo-placeholder-key";
	if (!isSupabaseConfigured) console.info("[Supabase] Supabase environment variables not detected. Running in demo mode.");
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			storage: typeof window !== "undefined" ? localStorage : void 0,
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as n, isSupabaseConfigured as t };
