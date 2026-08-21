import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  Check,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MapPin,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Logo } from "@/components/common/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROLE_HOME, SIGNUP_ROLES, useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

function safeNext(value: unknown): string {
  if (typeof value !== "string") return "";
  if (!value.startsWith("/") || value.startsWith("//")) return "";
  if (value.startsWith("/auth")) return "";
  return value;
}

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({ next: safeNext(search["next"]) }),
  head: () => ({
    meta: [
      { title: "Sign in to Medora — Medicine intelligence account" },
      {
        name: "description",
        content:
          "Sign in or create a Medora account as a patient, pharmacy or clinician to access your role-based workspace.",
      },
      { property: "og:title", content: "Sign in to Medora" },
      {
        property: "og:description",
        content: "Access your Medora health workspace and connected assistants.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

type Mode = "signin" | "signup" | "forgot" | "verify";

const ROLE_ICON = {
  patient: User,
  pharmacy: Building2,
  doctor: Stethoscope,
} as const;

function passwordScore(value: string) {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (value.length >= 12) score += 1;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  return Math.min(score, 4);
}

const STRENGTH_LABEL = ["Too short", "Weak", "Fair", "Strong", "Excellent"];

function AuthPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const auth = useAuth();

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState<(typeof SIGNUP_ROLES)[number]["value"]>("patient");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pendingEmail, setPendingEmail] = useState("");
  const [cooldown, setCooldown] = useState(0);

  const strength = useMemo(() => passwordScore(password), [password]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = window.setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => window.clearTimeout(id);
  }, [cooldown]);

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

  // Already signed in (including after an OAuth round-trip): go where they belong.
  useEffect(() => {
    if (auth.loading || !auth.isAuthenticated) return;
    const destination = next || ROLE_HOME[auth.primaryRole ?? "patient"];
    void navigate({ to: destination as "/app", replace: true });
  }, [auth.loading, auth.isAuthenticated, auth.primaryRole, next, navigate]);

  function switchMode(nextMode: Mode) {
    setError(null);
    setNotice(null);
    setMode(nextMode);
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);

    if (mode === "signin") {
      const { error: err } = await auth.signInWithPassword(email, password);
      setBusy(false);
      if (err) return setError(err);
      return; // the effect above redirects once the session and roles land
    }

    if (mode === "forgot") {
      const { error: err } = await auth.requestPasswordReset(email);
      setBusy(false);
      if (err) return setError(err);
      return setNotice("If that email has a Medora account, a reset link is on its way.");
    }

    const { error: err, needsConfirmation } = await auth.signUp({
      email,
      password,
      fullName,
      role,
      ...(city ? { city } : {}),
    });
    setBusy(false);
    if (err) return setError(err);
    if (needsConfirmation) {
      setPendingEmail(email);
      setPassword("");
      setCooldown(45);
      setMode("verify");
    }
  }

  async function google() {
    setError(null);
    const { error: err } = await auth.signInWithGoogle(next || undefined);
    if (err) setError(err);
  }

  const heading =
    mode === "signin"
      ? "Welcome back"
      : mode === "signup"
        ? "Create your Medora account"
        : mode === "verify"
          ? "Confirm your email"
          : "Reset your password";

  const subheading =
    mode === "signin"
      ? "Sign in to open the workspace matched to your role."
      : mode === "signup"
        ? "One account for lookups, price comparison and prescriptions."
        : mode === "verify"
          ? `We sent a verification link to ${pendingEmail}.`
          : "We'll email you a secure link to choose a new password.";

  return (
    <main className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden border-r border-border bg-accent/40 px-12 py-14 lg:flex lg:flex-col lg:justify-between">
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative">
          <Link to="/" className="inline-flex">
            <Logo />
          </Link>
        </div>

        <div className="relative max-w-md space-y-8">
          <h2 className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-ink">
            Medicine intelligence you can actually verify.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Every price, pharmacy and medicine card in Medora carries its source and last-checked
            date. Informational only — never a diagnosis.
          </p>
          <ul className="space-y-4">
            {[
              "Compare verified pharmacy prices near you",
              "Understand prescriptions in plain language",
              "Role-based workspaces for pharmacies and clinicians",
              "Safety checks before any answer reaches you",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/12 text-primary">
                  <Check className="size-3" aria-hidden />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-primary" aria-hidden />
          Encrypted sessions · No medical advice · Data provenance on every card
        </div>
      </aside>

      {/* Form panel */}
      <section className="flex items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-[26rem]">
          <Link to="/" className="mb-8 inline-flex lg:hidden">
            <Logo />
          </Link>

          {mode === "signin" || mode === "signup" ? (
            <div
              role="tablist"
              aria-label="Account access"
              className="mb-7 grid grid-cols-2 gap-1 rounded-lg border border-border bg-muted p-1"
            >
              {(
                [
                  ["signin", "Sign in"],
                  ["signup", "Create account"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  role="tab"
                  type="button"
                  aria-selected={mode === value}
                  onClick={() => switchMode(value)}
                  className={cn(
                    "rounded-[6px] px-3 py-2 text-sm font-medium transition-colors",
                    mode === value
                      ? "bg-background text-ink shadow-sm"
                      : "text-muted-foreground hover:text-ink",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => switchMode("signin")}
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              Back to sign in
            </button>
          )}

          <header className="mb-6 space-y-1.5">
            <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {heading}
            </h1>
            <p className="text-sm text-muted-foreground">{subheading}</p>
          </header>

          {mode === "verify" ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-primary" aria-hidden />
                  <p className="text-sm text-muted-foreground">
                    Open the link in that email to activate your account. It expires shortly for
                    your security — check spam if it hasn't arrived.
                  </p>
                </div>
              </div>
              {error ? (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}
              {notice ? <p className="text-sm text-muted-foreground">{notice}</p> : null}
              <Button
                className="h-11 w-full"
                onClick={resend}
                disabled={busy || cooldown > 0}
                type="button"
              >
                {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
                {cooldown > 0 ? `Resend verification email (${cooldown}s)` : "Resend verification email"}
              </Button>
              <button
                type="button"
                className="block w-full text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
                onClick={() => {
                  setError(null);
                  setNotice("Verified already? Sign in to open your workspace.");
                  setEmail(pendingEmail);
                  setMode("signin");
                }}
              >
                I've verified — back to sign in
              </button>
            </div>
          ) : (
            <>
              {mode !== "forgot" ? (
                <>
                  <Button
                    variant="outline"
                    className="h-11 w-full gap-2.5"
                    onClick={google}
                    type="button"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="#4285F4"
                        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1Z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                  <div className="my-6 flex items-center gap-3">
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                      or use email
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                </>
              ) : null}

              <form onSubmit={submit} className="space-y-4">
                {mode === "signup" ? (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="fullName">Full name</Label>
                        <div className="relative">
                          <User
                            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden
                          />
                          <Input
                            id="fullName"
                            required
                            className="h-11 pl-9"
                            placeholder="Aria Sharma"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            autoComplete="name"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="city">
                          City <span className="text-muted-foreground">(optional)</span>
                        </Label>
                        <div className="relative">
                          <MapPin
                            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden
                          />
                          <Input
                            id="city"
                            className="h-11 pl-9"
                            placeholder="Bengaluru"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <fieldset className="space-y-2">
                      <legend className="mb-2 text-sm font-medium text-ink">
                        I'm signing up as
                      </legend>
                      <div className="grid gap-2">
                        {SIGNUP_ROLES.map((r) => {
                          const Icon = ROLE_ICON[r.value];
                          const active = role === r.value;
                          return (
                            <button
                              key={r.value}
                              type="button"
                              onClick={() => setRole(r.value)}
                              aria-pressed={active}
                              className={cn(
                                "flex items-start gap-3 rounded-lg border px-3.5 py-3 text-left transition-colors",
                                active
                                  ? "border-primary bg-primary-soft"
                                  : "border-border hover:border-border-strong hover:bg-muted",
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 grid size-8 shrink-0 place-items-center rounded-md",
                                  active
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground",
                                )}
                              >
                                <Icon className="size-4" aria-hidden />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-medium text-ink">
                                  {r.label}
                                </span>
                                <span className="block text-xs text-muted-foreground">
                                  {r.blurb}
                                </span>
                              </span>
                              {active ? (
                                <Check className="ml-auto size-4 shrink-0 text-primary" aria-hidden />
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Pharmacy and clinician accounts are reviewed; administrator access is
                        granted by Medora only.
                      </p>
                    </fieldset>
                  </>
                ) : null}

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail
                      className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden
                    />
                    <Input
                      id="email"
                      type="email"
                      required
                      className="h-11 pl-9"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {mode !== "forgot" ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      {mode === "signin" ? (
                        <button
                          type="button"
                          className="text-xs text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
                          onClick={() => switchMode("forgot")}
                        >
                          Forgot password?
                        </button>
                      ) : null}
                    </div>
                    <div className="relative">
                      <Lock
                        className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden
                      />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={6}
                        className="h-11 pr-10 pl-9"
                        placeholder={mode === "signup" ? "At least 8 characters" : "••••••••"}
                        autoComplete={mode === "signup" ? "new-password" : "current-password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-ink"
                      >
                        {showPassword ? (
                          <EyeOff className="size-4" aria-hidden />
                        ) : (
                          <Eye className="size-4" aria-hidden />
                        )}
                      </button>
                    </div>
                    {mode === "signup" && password ? (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex gap-1" aria-hidden>
                          {[0, 1, 2, 3].map((i) => (
                            <span
                              key={i}
                              className={cn(
                                "h-1 flex-1 rounded-full transition-colors",
                                i < strength ? "bg-primary" : "bg-border",
                              )}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Password strength: {STRENGTH_LABEL[strength]}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {error ? (
                  <p
                    role="alert"
                    className="rounded-md border border-destructive/30 bg-destructive/8 px-3 py-2 text-sm text-destructive"
                  >
                    {error}
                  </p>
                ) : null}
                {notice ? (
                  <p className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">
                    {notice}
                  </p>
                ) : null}

                <Button type="submit" className="h-11 w-full" disabled={busy}>
                  {busy ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
                  {mode === "signin"
                    ? "Sign in"
                    : mode === "signup"
                      ? "Create account"
                      : "Send reset link"}
                </Button>
              </form>

              {mode === "signup" ? (
                <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
                  Medora is informational only and never provides a diagnosis. By creating an
                  account you agree to our terms and privacy notice.
                </p>
              ) : null}

              {mode === "signin" ? (
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  New to Medora?{" "}
                  <button
                    type="button"
                    className="font-medium text-ink underline-offset-4 hover:underline"
                    onClick={() => switchMode("signup")}
                  >
                    Create an account
                  </button>
                </p>
              ) : null}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
