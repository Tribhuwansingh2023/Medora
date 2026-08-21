/**
 * Google Identity Services & OAuth 2.0 Integration for Medora
 * Supports Google One-Tap, Google Sign-In Button, and OAuth 2.0 Token Client
 */

export interface GoogleUserProfile {
  sub: string;
  email: string;
  name: string;
  picture?: string;
  email_verified?: boolean;
}

const GOOGLE_CLIENT_ID_STORAGE_KEY = "medora_google_client_id";

// Default public client ID for standard OAuth testing / demo preview
const DEFAULT_GOOGLE_CLIENT_ID =
  "640548965601-e2v7j7b28h1jqm340mvdc2k9b47k28b0.apps.googleusercontent.com";

/**
 * Retrieves the currently active Google Client ID
 */
export function getGoogleClientId(): string {
  if (typeof window === "undefined") return "";

  // 1. Check environment variable (Vite)
  const envClientId = (
    import.meta as unknown as { env?: Record<string, string> }
  )?.env?.VITE_GOOGLE_CLIENT_ID;
  if (envClientId && envClientId.trim()) {
    return envClientId.trim();
  }

  // 2. Check localStorage for user-provided client ID
  const localClientId = localStorage.getItem(GOOGLE_CLIENT_ID_STORAGE_KEY);
  if (localClientId && localClientId.trim()) {
    return localClientId.trim();
  }

  // 3. Fallback default client ID
  return DEFAULT_GOOGLE_CLIENT_ID;
}

/**
 * Saves a custom Google Client ID in local storage
 */
export function setStoredGoogleClientId(clientId: string): void {
  if (typeof window === "undefined") return;
  const trimmed = clientId.trim();
  if (trimmed) {
    localStorage.setItem(GOOGLE_CLIENT_ID_STORAGE_KEY, trimmed);
  } else {
    localStorage.removeItem(GOOGLE_CLIENT_ID_STORAGE_KEY);
  }
}

/**
 * Loads the Google Identity Services SDK script tag dynamically
 */
export function loadGoogleIdentityScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    // Check if already available on window
    const win = window as unknown as { google?: { accounts?: unknown } };
    if (win.google?.accounts) {
      resolve(true);
      return;
    }

    // Check if script tag is already in document
    const existing = document.querySelector(
      'script[src="https://accounts.google.com/gsi/client"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.warn("Failed to load Google Identity Services script");
      resolve(false);
    };
    document.head.appendChild(script);
  });
}

/**
 * Decodes a Google JWT credential token payload (base64url)
 */
export function decodeGoogleJwt(token: string): GoogleUserProfile | null {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    const parsed = JSON.parse(jsonPayload) as {
      sub?: string;
      email?: string;
      name?: string;
      picture?: string;
      email_verified?: boolean;
    };
    if (!parsed.email) return null;
    return {
      sub: parsed.sub || `google-${Date.now()}`,
      email: parsed.email,
      name: parsed.name || parsed.email.split("@")[0] || "Google User",
      picture: parsed.picture,
      email_verified: parsed.email_verified,
    };
  } catch (err) {
    console.error("Error parsing Google JWT:", err);
    return null;
  }
}

/**
 * Fetches user profile info from Google OAuth2 userinfo endpoint using access token
 */
export async function fetchGoogleUserInfo(
  accessToken: string,
): Promise<GoogleUserProfile | null> {
  try {
    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) {
      throw new Error(
        `Google UserInfo request failed with status ${res.status}`,
      );
    }
    const data = (await res.json()) as {
      sub: string;
      email: string;
      name?: string;
      picture?: string;
      email_verified?: boolean;
    };
    return {
      sub: data.sub,
      email: data.email,
      name: data.name || data.email.split("@")[0] || "Google User",
      picture: data.picture,
      email_verified: data.email_verified,
    };
  } catch (err) {
    console.error("Failed to fetch Google user profile:", err);
    return null;
  }
}

interface GoogleTokenClient {
  requestAccessToken: (overrideConfig?: { prompt?: string }) => void;
}

interface GoogleAccounts {
  id: {
    initialize: (config: {
      client_id: string;
      callback: (response: { credential: string }) => void;
      auto_select?: boolean;
      cancel_on_tap_outside?: boolean;
    }) => void;
    renderButton: (
      element: HTMLElement,
      options: {
        theme?: "outline" | "filled_blue" | "filled_black";
        size?: "large" | "medium" | "small";
        text?: "signin_with" | "signup_with" | "continue_with" | "signin";
        shape?: "rectangular" | "pill" | "circle" | "square";
        width?: number;
      },
    ) => void;
    prompt: () => void;
  };
  oauth2: {
    initTokenClient: (config: {
      client_id: string;
      scope: string;
      callback: (tokenResponse: {
        access_token?: string;
        error?: string;
        error_description?: string;
      }) => void;
      error_callback?: (err: unknown) => void;
    }) => GoogleTokenClient;
  };
}

/**
 * Requests Google OAuth token popup via Google Identity Services Token Client
 */
export async function requestGoogleOAuthToken(
  clientId?: string,
): Promise<{ accessToken?: string; error?: string }> {
  const loaded = await loadGoogleIdentityScript();
  if (!loaded) {
    return {
      error:
        "Could not load Google Identity Services. Check your internet connection.",
    };
  }

  const effectiveClientId = clientId || getGoogleClientId();
  if (!effectiveClientId) {
    return {
      error:
        "Google Client ID is missing. Please configure your Google Client ID.",
    };
  }

  const win = window as unknown as { google?: { accounts?: GoogleAccounts } };
  const accounts = win.google?.accounts;

  if (!accounts?.oauth2) {
    return {
      error:
        "Google OAuth2 client is not available in the current browser window.",
    };
  }

  return new Promise((resolve) => {
    try {
      const client = accounts.oauth2.initTokenClient({
        client_id: effectiveClientId,
        scope: "email profile openid",
        callback: (response) => {
          if (response.error) {
            resolve({ error: response.error_description || response.error });
          } else if (response.access_token) {
            resolve({ accessToken: response.access_token });
          } else {
            resolve({ error: "No access token returned by Google." });
          }
        },
        error_callback: (err) => {
          console.error("Google Token Client error:", err);
          resolve({
            error:
              "Google authorization was cancelled or encountered an error.",
          });
        },
      });

      client.requestAccessToken({ prompt: "select_account" });
    } catch (err) {
      console.error("Failed to initialize Google Token Client:", err);
      resolve({
        error:
          err instanceof Error
            ? err.message
            : "Failed to open Google authentication window.",
      });
    }
  });
}
