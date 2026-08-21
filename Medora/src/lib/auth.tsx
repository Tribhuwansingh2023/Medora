import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { supabase } from "@/integrations/supabase/client";
import type { AppRole } from "@/lib/domain";

export type AccountRole = AppRole;

/** Roles a person may pick for themselves at signup. Admin is granted manually. */
export const SIGNUP_ROLES: {
  value: Exclude<AccountRole, "admin">;
  label: string;
  blurb: string;
}[] = [
  {
    value: "patient",
    label: "Patient",
    blurb: "Search medicines, compare prices, manage reminders.",
  },
  {
    value: "pharmacy",
    label: "Pharmacy",
    blurb: "Inventory, prescription verification and orders.",
  },
  { value: "doctor", label: "Clinician", blurb: "Patient list, consults and prescription review." },
];

export const ROLE_HOME: Record<AccountRole, string> = {
  patient: "/app",
  pharmacy: "/pharmacy",
  doctor: "/doctor",
  admin: "/admin",
};

export interface SignUpInput {
  email: string;
  password: string;
  fullName: string;
  role: Exclude<AccountRole, "admin">;
  city?: string;
}

interface AuthValue {
  loading: boolean;
  session: Session | null;
  user: User | null;
  roles: AccountRole[];
  profile: {
    id: string;
    full_name: string | null;
    email: string | null;
    city: string | null;
  } | null;
  isAuthenticated: boolean;
  hasRole: (role: AccountRole) => boolean;
  hasAnyRole: (roles: AccountRole[]) => boolean;
  primaryRole: AccountRole | null;
  signInWithPassword: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (input: SignUpInput) => Promise<{ error: string | null; needsConfirmation: boolean }>;
  signInWithGoogle: (next?: string) => Promise<{ error: string | null }>;
  resendVerification: (email: string) => Promise<{ error: string | null }>;
  requestPasswordReset: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthValue | null>(null);

const ROLE_ORDER: AccountRole[] = ["admin", "doctor", "pharmacy", "patient"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [roles, setRoles] = useState<AccountRole[]>([]);
  const [profile, setProfile] = useState<AuthValue["profile"]>(null);
  const [loading, setLoading] = useState(true);

  const loadAccount = useCallback(async (userId: string | undefined) => {
    if (!userId) {
      setRoles([]);
      setProfile(null);
      return;
    }
    const [rolesRes, profileRes] = await Promise.all([
      supabase.from("user_roles").select("role").eq("user_id", userId),
      supabase.from("profiles").select("id, full_name, email, city").eq("id", userId).maybeSingle(),
    ]);
    setRoles((rolesRes.data ?? []).map((r) => r.role as AccountRole));
    setProfile(profileRes.data ?? null);
  }, []);

  useEffect(() => {
    let active = true;

    const { data: sub } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return;
      setSession(nextSession);
      void loadAccount(nextSession?.user.id).finally(() => setLoading(false));
    });

    void supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      void loadAccount(data.session?.user.id).finally(() => setLoading(false));
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [loadAccount]);

  const value = useMemo<AuthValue>(() => {
    const user = session?.user ?? null;
    const primaryRole = ROLE_ORDER.find((r) => roles.includes(r)) ?? null;
    return {
      loading,
      session,
      user,
      roles,
      profile,
      isAuthenticated: Boolean(session),
      primaryRole,
      hasRole: (role) => roles.includes(role),
      hasAnyRole: (wanted) => wanted.some((r) => roles.includes(r)),
      signInWithPassword: async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        return { error: error?.message ?? null };
      },
      signUp: async ({ email, password, fullName, role, city }) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`,
            data: { full_name: fullName, role, ...(city ? { city } : {}) },
          },
        });
        if (error) return { error: error.message, needsConfirmation: false };
        return { error: null, needsConfirmation: !data.session };
      },
      signInWithGoogle: async (next) => {
        const { lovable } = await import("@/integrations/lovable/index");
        const result = await lovable.auth.signInWithOAuth("google", {
          redirect_uri: `${window.location.origin}/auth${next ? `?next=${encodeURIComponent(next)}` : ""}`,
        });
        return { error: result.error ? String(result.error) : null };
      },
      resendVerification: async (email) => {
        const { error } = await supabase.auth.resend({
          type: "signup",
          email,
          options: { emailRedirectTo: `${window.location.origin}/auth` },
        });
        return { error: error?.message ?? null };
      },
      requestPasswordReset: async (email) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        return { error: error?.message ?? null };
      },
      updatePassword: async (password) => {
        const { error } = await supabase.auth.updateUser({ password });
        return { error: error?.message ?? null };
      },
      signOut: async () => {
        await supabase.auth.signOut();
        setRoles([]);
        setProfile(null);
      },
      refresh: async () => {
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        await loadAccount(data.session?.user.id);
      },
    };
  }, [session, roles, profile, loading, loadAccount]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

export function useOptionalAuth() {
  return useContext(AuthContext);
}
