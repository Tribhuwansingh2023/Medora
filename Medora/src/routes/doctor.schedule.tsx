import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";
import { EmptyState, PageHeader } from "@/components/common/primitives";

export const Route = createFileRoute("/doctor/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Medora Doctor workspace" },
      { name: "description", content: "Schedule workspace for the Medora doctor console." },
      { property: "og:title", content: "Schedule — Medora Doctor workspace" },
      { property: "og:description", content: "Schedule workspace for the Medora doctor console." },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Schedule"
        demo
        description="Schedule workspace for the Medora doctor console."
      />
      <EmptyState
        icon={CalendarClock}
        title="Schedule runs on connected data"
        description="This workspace view is part of the Medora demo. Connect a live provider to populate it with real records instead of invented ones."
      />
    </div>
  );
}
