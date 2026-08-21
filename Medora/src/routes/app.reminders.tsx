import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EmptyState, PageHeader, SafetyNotice, StatTile } from "@/components/common/primitives";
import { adherenceRate, useStore } from "@/lib/store";

export const Route = createFileRoute("/app/reminders")({
  head: () => ({
    meta: [
      { title: "Dose reminders & adherence — Medora" },
      {
        name: "description",
        content:
          "Schedule dose reminders from confirmed prescription lines, log what you actually took, and see honest adherence based only on logged doses.",
      },
      { property: "og:title", content: "Dose reminders & adherence — Medora" },
      { property: "og:description", content: "Schedule reminders and track adherence honestly." },
    ],
  }),
  component: RemindersPage,
});

function RemindersPage() {
  const { state, addReminder, updateReminder, logDose } = useStore();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({
    medicineName: "",
    strength: "",
    time: "08:00",
    instruction: "",
  });
  const today = new Date().toISOString().slice(0, 10);
  const adherence = adherenceRate(state.reminders);
  const logged = state.reminders.flatMap((r) => r.log);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reminders & adherence"
        description="Reminders come from prescription lines you confirmed. Adherence is calculated only from doses you logged — Medora never assumes a dose was taken."
        actions={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="size-4" aria-hidden /> New reminder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New reminder</DialogTitle>
                <DialogDescription>
                  Enter the medicine exactly as written on your prescription. Medora does not
                  suggest doses or schedules.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="rm-name">Medicine</Label>
                  <Input
                    id="rm-name"
                    maxLength={80}
                    value={draft.medicineName}
                    onChange={(e) => setDraft({ ...draft, medicineName: e.target.value })}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="rm-strength">Strength</Label>
                    <Input
                      id="rm-strength"
                      maxLength={40}
                      placeholder="500 mg"
                      value={draft.strength}
                      onChange={(e) => setDraft({ ...draft, strength: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="rm-time">Time</Label>
                    <Input
                      id="rm-time"
                      type="time"
                      value={draft.time}
                      onChange={(e) => setDraft({ ...draft, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="rm-note">Instruction from your prescriber</Label>
                  <Input
                    id="rm-note"
                    maxLength={120}
                    placeholder="After food"
                    value={draft.instruction}
                    onChange={(e) => setDraft({ ...draft, instruction: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  disabled={!draft.medicineName.trim()}
                  onClick={() => {
                    addReminder({
                      id: `rem-${Date.now()}`,
                      medicineName: draft.medicineName.trim(),
                      strength: draft.strength.trim(),
                      times: [draft.time],
                      startDate: today,
                      endDate: new Date(Date.now() + 12096e5).toISOString().slice(0, 10),
                      instruction: draft.instruction.trim() || "As directed by your prescriber",
                      active: true,
                      log: [],
                    });
                    setDraft({ medicineName: "", strength: "", time: "08:00", instruction: "" });
                    setOpen(false);
                    toast.success("Reminder added");
                  }}
                >
                  Add reminder
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile
          label="Active reminders"
          value={String(state.reminders.filter((r) => r.active).length)}
          icon={CalendarClock}
        />
        <StatTile label="Doses logged" value={String(logged.length)} hint="Taken or skipped" />
        <StatTile
          label="Adherence"
          value={adherence == null ? "—" : `${adherence}%`}
          hint="Of logged doses only"
          tone={adherence != null && adherence >= 80 ? "positive" : "default"}
        />
      </div>

      {state.reminders.length === 0 ? (
        <EmptyState
          icon={CalendarClock}
          title="No reminders yet"
          description="Confirm a prescription line or add a reminder manually."
        />
      ) : (
        <div className="space-y-4">
          {state.reminders.map((r) => {
            const rLogged = r.log.length;
            const rTaken = r.log.filter((l) => l.state === "taken").length;
            return (
              <article key={r.id} className="surface p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-ink">
                      {r.medicineName} {r.strength}
                    </h2>
                    <p className="text-sm text-muted-foreground">{r.instruction}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {r.startDate} → {r.endDate}
                      {r.sourcePrescriptionId ? " · from a confirmed prescription line" : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`active-${r.id}`} className="text-xs text-muted-foreground">
                      Active
                    </Label>
                    <Switch
                      id={`active-${r.id}`}
                      checked={r.active}
                      onCheckedChange={(v) => updateReminder(r.id, { active: v })}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Delete reminder for ${r.medicineName}`}
                      onClick={() => {
                        updateReminder(r.id, { active: false });
                        toast("Reminder paused", {
                          description: "Paused rather than deleted so history stays intact.",
                        });
                      }}
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {r.times.map((t) => {
                    const entry = r.log.find((l) => l.date === today && l.time === t);
                    return (
                      <div
                        key={t}
                        className="flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2"
                      >
                        <span className="numeric text-sm font-semibold">{t}</span>
                        {entry ? (
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            {entry.state}
                          </span>
                        ) : (
                          <>
                            <Button size="sm" onClick={() => logDose(r.id, t, "taken")}>
                              Taken
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => logDose(r.id, t, "skipped")}
                            >
                              Skipped
                            </Button>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {rLogged > 0 && (
                  <div className="mt-4">
                    <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
                      <span>
                        {rTaken} of {rLogged} logged doses taken
                      </span>
                      <span className="numeric">{Math.round((rTaken / rLogged) * 100)}%</span>
                    </div>
                    <Progress value={(rTaken / rLogged) * 100} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      <SafetyNotice title="Missed a dose?">
        Medora will not tell you whether to double up, skip, or take a dose late — that depends on
        the medicine and on you. Ask your pharmacist; many will answer this over the phone in a
        minute.
      </SafetyNotice>
    </div>
  );
}
