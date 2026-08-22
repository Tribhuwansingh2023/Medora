import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Boxes,
  ClipboardCheck,
  Gauge,
  Package,
  Receipt,
} from "lucide-react";
import { PageHeader, StatTile } from "@/components/common/primitives";
import { ChartFrame, TrendAreaChart } from "@/components/workspace/charts";
import {
  AsyncSection,
  StatusPill,
  Timeline,
  WorkspaceSection,
} from "@/components/workspace/parts";
import {
  daysUntil,
  money,
  shortDateTime,
  useWorkspaceData,
} from "@/services/workspace";

export const Route = createFileRoute("/pharmacy/")({
  head: () => ({
    meta: [
      { title: "Overview — Medora Pharmacy workspace" },
      {
        name: "description",
        content:
          "Pharmacy dashboard with orders awaiting action, verification queue, low-stock lines and demo sales trend.",
      },
      { property: "og:title", content: "Overview — Medora Pharmacy workspace" },
      {
        property: "og:description",
        content:
          "Key figures and recent activity for the Medora pharmacy console, all demo data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OverviewPage,
});

const orderStatusTone = {
  awaiting_prescription: "warning",
  verifying: "info",
  accepted: "neutral",
  preparing: "neutral",
  ready: "positive",
  completed: "positive",
  cancelled: "danger",
} as const;

function OverviewPage() {
  const orders = useWorkspaceData("pharmacyOrders");
  const inventory = useWorkspaceData("inventory");
  const sales = useWorkspaceData("sales");
  const verification = useWorkspaceData("verificationQueue");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Overview"
        demo
        description="A snapshot built from demo pharmacy records — orders, verification queue, stock lines and a twelve-day sales sample."
      />

      <AsyncSection
        query={orders}
        emptyIcon={Gauge}
        emptyTitle="No overview data"
        emptyDescription="Orders will populate this dashboard once they exist."
        skeletonRows={1}
      >
        {(orderRows) => (
          <AsyncSection
            query={inventory}
            emptyIcon={Gauge}
            emptyTitle="No overview data"
            emptyDescription="Inventory will populate this dashboard once it exists."
            skeletonRows={1}
          >
            {(inventoryRows) => (
              <AsyncSection
                query={verification}
                emptyIcon={Gauge}
                emptyTitle="No overview data"
                emptyDescription="Verification queue will populate this dashboard once it exists."
                skeletonRows={1}
              >
                {(verificationRows) => {
                  const awaitingAction = orderRows.filter((o) =>
                    ["awaiting_prescription", "verifying", "accepted"].includes(
                      o.status,
                    ),
                  ).length;
                  const inReview = verificationRows.filter(
                    (v) => v.status === "waiting" || v.status === "in_review",
                  ).length;
                  const lowStock = inventoryRows.filter(
                    (i) => i.stock <= i.reorderLevel,
                  ).length;
                  const periodRevenue = (sales.data ?? []).reduce(
                    (sum, p) => sum + p.revenue,
                    0,
                  );

                  const needsAttention: {
                    id: string;
                    label: string;
                    detail: string;
                    to: string;
                    tone: "warning" | "danger" | "info";
                  }[] = [];
                  if (lowStock > 0) {
                    needsAttention.push({
                      id: "low-stock",
                      label: `${lowStock} line${lowStock === 1 ? "" : "s"} at or below reorder level`,
                      detail:
                        "Last-synced demo stock figures — review in Inventory.",
                      to: "/pharmacy/inventory",
                      tone: "warning",
                    });
                  }
                  const expiringSoon = inventoryRows.filter((i) => {
                    const d = daysUntil(i.expiry);
                    return d >= 0 && d <= 60;
                  }).length;
                  if (expiringSoon > 0) {
                    needsAttention.push({
                      id: "expiring",
                      label: `${expiringSoon} line${expiringSoon === 1 ? "" : "s"} expiring within 60 days`,
                      detail: "Based on the demo expiry dates on file.",
                      to: "/pharmacy/inventory",
                      tone: "warning",
                    });
                  }
                  if (inReview > 0) {
                    needsAttention.push({
                      id: "verification",
                      label: `${inReview} prescription${inReview === 1 ? "" : "s"} in the verification queue`,
                      detail: "Waiting for a pharmacist decision.",
                      to: "/pharmacy/orders",
                      tone: "info",
                    });
                  }
                  const cancelled = orderRows.filter(
                    (o) => o.status === "cancelled",
                  ).length;
                  if (cancelled > 0) {
                    needsAttention.push({
                      id: "cancelled",
                      label: `${cancelled} order${cancelled === 1 ? "" : "s"} cancelled recently`,
                      detail: "Review for restocking or follow-up.",
                      to: "/pharmacy/orders",
                      tone: "danger",
                    });
                  }

                  const recentActivity = [...orderRows]
                    .sort(
                      (a, b) => Date.parse(b.placedAt) - Date.parse(a.placedAt),
                    )
                    .slice(0, 6)
                    .map((o) => ({
                      id: o.id,
                      at: shortDateTime(o.placedAt),
                      title: `Order ${o.id} · ${o.customer}`,
                      body: `${o.items} item${o.items === 1 ? "" : "s"} · ${money(o.total)}`,
                      meta: o.status.replace(/_/g, " "),
                    }));

                  return (
                    <>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        <StatTile
                          label="Orders awaiting action"
                          value={String(awaitingAction)}
                          icon={Package}
                          tone={awaitingAction > 0 ? "attention" : "default"}
                          hint="Awaiting prescription, verification or acceptance"
                        />
                        <StatTile
                          label="Verification queue"
                          value={String(inReview)}
                          icon={ClipboardCheck}
                          tone={inReview > 0 ? "attention" : "default"}
                          hint="Prescriptions waiting on a pharmacist"
                        />
                        <StatTile
                          label="Low-stock lines"
                          value={String(lowStock)}
                          icon={Boxes}
                          tone={lowStock > 0 ? "attention" : "default"}
                          hint="At or below reorder level (last-synced demo figures)"
                        />
                        <StatTile
                          label="Revenue, 12-day sample"
                          value={money(periodRevenue)}
                          icon={Receipt}
                          hint="Sum of the demo sales trend below"
                        />
                      </div>

                      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                        <div className="space-y-6">
                          <AsyncSection
                            query={sales}
                            emptyIcon={Gauge}
                            emptyTitle="No sales sample"
                            emptyDescription="A sales trend will appear once demo sales points exist."
                            isEmpty={(d) => d.length === 0}
                          >
                            {(salesData) => (
                              <ChartFrame
                                title="Sales trend"
                                description="Daily revenue over the demo sample period."
                              >
                                <TrendAreaChart
                                  data={
                                    salesData as unknown as Record<
                                      string,
                                      string | number
                                    >[]
                                  }
                                  xKey="date"
                                  yKey="revenue"
                                  label="Revenue"
                                />
                              </ChartFrame>
                            )}
                          </AsyncSection>

                          <WorkspaceSection
                            title="Needs attention"
                            description="Derived from the current demo dataset — nothing here is invented."
                          >
                            {needsAttention.length === 0 ? (
                              <p className="text-sm text-muted-foreground">
                                Nothing needs attention in the current demo
                                data.
                              </p>
                            ) : (
                              <ul className="divide-y divide-border">
                                {needsAttention.map((item) => (
                                  <li
                                    key={item.id}
                                    className="flex flex-wrap items-center justify-between gap-3 py-3"
                                  >
                                    <div className="flex items-start gap-3">
                                      <AlertTriangle
                                        className="mt-0.5 size-4 text-warning"
                                        aria-hidden
                                      />
                                      <div>
                                        <p className="text-sm font-medium text-ink">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                          {item.detail}
                                        </p>
                                      </div>
                                    </div>
                                    <Link
                                      to={item.to}
                                      className="text-sm font-medium text-primary underline-offset-2 hover:underline"
                                    >
                                      Review
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </WorkspaceSection>
                        </div>

                        <WorkspaceSection
                          title="Recent activity"
                          description="Most recently placed orders."
                        >
                          <Timeline items={recentActivity} />
                        </WorkspaceSection>
                      </div>
                    </>
                  );
                }}
              </AsyncSection>
            )}
          </AsyncSection>
        )}
      </AsyncSection>
    </div>
  );
}
