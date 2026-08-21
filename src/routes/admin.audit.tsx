import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";
import { EmptyState, PageHeader } from "@/components/common/primitives";

export const Route = createFileRoute("/admin/audit")({
  head: () => ({
    meta: [
      { title: "Audit log — Medora Admin workspace" },
      { name: "description", content: "Audit log workspace for the Medora admin console." },
      { property: "og:title", content: "Audit log — Medora Admin workspace" },
      { property: "og:description", content: "Audit log workspace for the Medora admin console." },
    ],
  }),
  component: AuditLogPage,
});

function AuditLogPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Audit log"
        demo
        description="Audit log workspace for the Medora admin console."
      />
      <EmptyState
        icon={ClipboardList}
        title="Audit log runs on connected data"
        description="This workspace view is part of the Medora demo. Connect a live provider to populate it with real records instead of invented ones."
      />
    </div>
  );
}
