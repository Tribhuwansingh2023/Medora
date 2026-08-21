import {
  AlertTriangle,
  BadgeCheck,
  CircleSlash,
  FlaskConical,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { confidenceCopy } from "@/ai/render";
import type { AiEnvelope, AiSource, PipelineStage, SafetyVerdict } from "@/ai/schemas";

export function ModeBadge({ envelope }: { envelope: AiEnvelope }) {
  const demo = envelope.mode === "demo";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide",
        demo
          ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300"
          : "border-primary/30 bg-primary/10 text-primary",
      )}
      title={`${envelope.providerLabel} — ${demo ? "simulated output, no live provider connected" : "live provider"}`}
    >
      <FlaskConical className="size-3" aria-hidden />
      {demo ? "Demo · simulated" : "Live provider"}
    </span>
  );
}

export function ConfidenceBadge({ envelope }: { envelope: AiEnvelope }) {
  const { level, score, rationale } = envelope.confidence;
  const tone =
    level === "high"
      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
      : level === "moderate"
        ? "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300"
        : "border-muted-foreground/30 bg-muted text-muted-foreground";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        tone,
      )}
      title={rationale}
    >
      <Gauge className="size-3" aria-hidden />
      {confidenceCopy[level]} · {Math.round(score * 100)}%
    </span>
  );
}

export function SourceChips({ sources }: { sources: AiSource[] }) {
  if (!sources.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <span
          key={source.id}
          title={`${source.detail}${source.updatedAt ? ` Updated ${source.updatedAt}.` : ""}`}
          className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] text-muted-foreground"
        >
          {source.verified ? (
            <BadgeCheck className="size-3 shrink-0 text-primary" aria-hidden />
          ) : (
            <CircleSlash className="size-3 shrink-0" aria-hidden />
          )}
          <span className="truncate">{source.label}</span>
        </span>
      ))}
    </div>
  );
}

export function SafetyStrip({ safety }: { safety: SafetyVerdict }) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-lg border px-3 py-2 text-xs",
        safety.passed
          ? "border-border bg-muted/40 text-muted-foreground"
          : "border-destructive/40 bg-destructive/10 text-destructive",
      )}
    >
      {safety.passed ? (
        <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden />
      ) : (
        <AlertTriangle className="mt-0.5 size-3.5 shrink-0" aria-hidden />
      )}
      <span>
        {safety.notice} <span className="opacity-70">Checks run: {safety.rulesRun.length}.</span>
      </span>
    </div>
  );
}

export function PipelineTrace({ trace }: { trace: PipelineStage[] }) {
  if (!trace.length) return null;
  return (
    <details className="group rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-medium text-muted-foreground">
        <Workflow className="size-3.5" aria-hidden />
        How this answer was produced
      </summary>
      <ol className="mt-3 space-y-2">
        {trace.map((stage, i) => (
          <li key={`${stage.name}-${i}`} className="flex gap-3">
            <span className="mt-0.5 font-mono text-[10px] text-muted-foreground">{i + 1}</span>
            <span className="min-w-0">
              <span className="font-medium text-foreground">{stage.label}</span>
              <span
                className={cn(
                  "ml-2 rounded px-1.5 py-0.5 text-[10px] uppercase",
                  stage.status === "ok"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : stage.status === "blocked"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-muted text-muted-foreground",
                )}
              >
                {stage.status}
              </span>
              <span className="ml-2 text-[10px] text-muted-foreground">{stage.ms} ms</span>
              <p className="mt-0.5 text-muted-foreground">{stage.detail}</p>
            </span>
          </li>
        ))}
      </ol>
    </details>
  );
}

export function FieldGrid({ items }: { items: { label: string; value: ReactNode }[] }) {
  if (!items.length) return null;
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-0 rounded-lg border border-border bg-muted/30 px-3 py-2"
        >
          <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
            {item.label}
          </dt>
          <dd className="mt-0.5 text-sm text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BulletList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <ul className="mt-1.5 space-y-1 text-sm text-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
