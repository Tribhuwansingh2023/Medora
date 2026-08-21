import { createFileRoute } from "@tanstack/react-router";
import { Flag, RotateCcw, Send, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { capabilityLabels } from "@/ai/registry";
import { summarise } from "@/ai/render";
import { ASSISTANT_ROLE_STATEMENT } from "@/ai/safety";
import { useAiConversation, type ConversationTurn } from "@/ai/useAiConversation";
import { AiPayloadView } from "@/components/ai/AiPayloadView";
import {
  ConfidenceBadge,
  ModeBadge,
  PipelineTrace,
  SafetyStrip,
  SourceChips,
} from "@/components/ai/ai-parts";
import { PageHeader, SafetyNotice } from "@/components/common/primitives";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/app/assistant")({
  head: () => ({
    meta: [
      { title: "Medicine assistant — Medora" },
      {
        name: "description",
        content:
          "Ask about a medicine and get a source-labelled explanation. Informational only — Medora never diagnoses or prescribes.",
      },
      { property: "og:title", content: "Medicine assistant — Medora" },
      {
        property: "og:description",
        content: "Source-labelled medicine explanations with safety notes.",
      },
    ],
  }),
  component: MedicineAssistantPage,
});

const suggestions = [
  "What is Panacet 500 used for?",
  "Compare cetirizine products in the catalogue",
  "Can I take ibuprofen with metformin?",
  "I've had a headache for 3 days",
  "What does my HbA1c result mean?",
];

function TurnCard({
  turn,
  onRetry,
  onFeedback,
  onAsk,
}: {
  turn: ConversationTurn;
  onRetry: (id: string) => void;
  onFeedback: (id: string, value: "helpful" | "unhelpful" | "reported") => void;
  onAsk: (q: string) => void;
}) {
  const envelope = turn.envelope;

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
          {turn.question}
        </p>
      </div>

      <div className="surface space-y-4 rounded-2xl border border-border p-4 sm:p-5">
        {turn.status === "thinking" && (
          <div className="space-y-3" aria-live="polite">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex gap-1">
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </span>
              Detecting intent, retrieving sources and running safety checks…
            </p>
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        )}

        {turn.status === "error" && (
          <div className="space-y-3">
            <p className="text-sm text-destructive">{turn.error}</p>
            <Button size="sm" variant="outline" onClick={() => onRetry(turn.id)}>
              <RotateCcw className="mr-1.5 size-3.5" /> Retry
            </Button>
          </div>
        )}

        {envelope && turn.status !== "error" && (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <ModeBadge envelope={envelope} />
              <ConfidenceBadge envelope={envelope} />
              <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                {capabilityLabels[envelope.capability]}
              </span>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                {summarise(envelope.payload).headline}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {turn.status === "streaming" ? turn.streamedText : summarise(envelope.payload).lead}
                {turn.status === "streaming" && (
                  <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-muted-foreground align-middle" />
                )}
              </p>
            </div>

            {turn.status === "complete" && (
              <>
                <AiPayloadView payload={envelope.payload} />
                <SafetyStrip safety={envelope.safety} />
                <SourceChips sources={envelope.sources} />
                <PipelineTrace trace={envelope.trace} />

                {envelope.followUps.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {envelope.followUps.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => onAsk(q)}
                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground transition hover:bg-muted"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 border-t border-border pt-3">
                  <span className="text-[11px] text-muted-foreground">Was this useful?</span>
                  <Button
                    size="sm"
                    variant={turn.feedback === "helpful" ? "secondary" : "ghost"}
                    onClick={() => {
                      onFeedback(turn.id, "helpful");
                      toast.success("Thanks — feedback recorded on this device.");
                    }}
                  >
                    <ThumbsUp className="size-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant={turn.feedback === "unhelpful" ? "secondary" : "ghost"}
                    onClick={() => {
                      onFeedback(turn.id, "unhelpful");
                      toast("Recorded. Medora will not act on this without a clinician review.");
                    }}
                  >
                    <ThumbsDown className="size-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant={turn.feedback === "reported" ? "destructive" : "ghost"}
                    onClick={() => {
                      onFeedback(turn.id, "reported");
                      toast("Reported for clinical safety review.");
                    }}
                  >
                    <Flag className="mr-1.5 size-3.5" /> Report
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="ml-auto"
                    onClick={() => onRetry(turn.id)}
                  >
                    <RotateCcw className="mr-1.5 size-3.5" /> Regenerate
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function MedicineAssistantPage() {
  const { turns, ask, retry, setFeedback, clear, busy } = useAiConversation();
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [turns]);

  const submit = (question: string) => {
    ask(question);
    setDraft("");
  };

  return (
    <div className="space-y-6 pb-28">
      <PageHeader
        title="Medicine assistant"
        description="Every answer runs through intent detection, structured extraction, source retrieval and a clinical-safety validator before you see it."
        actions={
          turns.length > 0 ? (
            <Button variant="outline" size="sm" onClick={clear}>
              <Trash2 className="mr-1.5 size-3.5" /> Clear conversation
            </Button>
          ) : null
        }
      />

      <SafetyNotice title="Not a doctor, pharmacist or prescriber" tone="info">
        {ASSISTANT_ROLE_STATEMENT}
      </SafetyNotice>

      {turns.length === 0 ? (
        <div className="surface space-y-4 border border-border p-5">
          <p className="text-sm font-medium text-foreground">Start with a question</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => submit(s)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground transition hover:bg-muted"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {turns.map((turn) => (
            <TurnCard
              key={turn.id}
              turn={turn}
              onRetry={retry}
              onFeedback={setFeedback}
              onAsk={submit}
            />
          ))}
        </div>
      )}

      <div ref={endRef} />

      <form
        className="sticky bottom-20 z-10 flex items-end gap-2 rounded-lg border border-border bg-background p-2 shadow-sm md:bottom-4"
        onSubmit={(event) => {
          event.preventDefault();
          submit(draft);
        }}
      >
        <Textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              submit(draft);
            }
          }}
          rows={1}
          placeholder="Ask about a medicine, a symptom, or how Medora compares products…"
          className="min-h-[44px] resize-none border-0 bg-transparent focus-visible:ring-0"
        />
        <Button
          type="submit"
          size="icon"
          disabled={busy || !draft.trim()}
          aria-label="Send question"
        >
          <Send className="size-4" />
        </Button>
      </form>

      <p className="text-xs text-muted-foreground">
        Answers are informational only. Medora does not diagnose, prescribe, or change a dose —
        confirm anything clinical with a pharmacist or doctor, and use emergency services for
        anything urgent.
      </p>
    </div>
  );
}
