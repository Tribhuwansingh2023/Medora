import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { EmptyState, PageHeader } from "@/components/common/primitives";

export const Route = createFileRoute("/admin/moderation")({
  head: () => ({
    meta: [
      { title: "Moderation — Medora Admin workspace" },
      {
        name: "description",
        content: "Moderation workspace for the Medora admin console.",
      },
      { property: "og:title", content: "Moderation — Medora Admin workspace" },
      {
        property: "og:description",
        content: "Moderation workspace for the Medora admin console.",
      },
    ],
  }),
  component: ModerationPage,
});

function ModerationPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Moderation"
        demo
        description="Moderation workspace for the Medora admin console."
      />
      <EmptyState
        icon={ShieldAlert}
        title="Moderation runs on connected data"
        description="This workspace view is part of the Medora demo. Connect a live provider to populate it with real records instead of invented ones."
      />
    </div>
  );
}
