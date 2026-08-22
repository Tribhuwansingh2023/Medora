import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as useStore, x as useAuth } from "./router-DnzDjJrL.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useQueryClient } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-sign-out-CJjJ3TG8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** Signs the account out, tears down cached data and returns to the sign-in page. */
function useSignOut() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const auth = useAuth();
	const { signOut: clearLocalSession } = useStore();
	return (0, import_react.useCallback)(async () => {
		await queryClient.cancelQueries();
		queryClient.clear();
		clearLocalSession();
		await auth.signOut();
		await navigate({
			to: "/auth",
			search: { next: "" },
			replace: true
		});
	}, [
		queryClient,
		clearLocalSession,
		auth,
		navigate
	]);
}
//#endregion
export { useSignOut as t };
