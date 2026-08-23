import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertCircle,
  AlertTriangle,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Info,
  Package,
  Pill,
  Receipt,
  ShieldAlert,
  ShieldCheck,
  ThermometerSnowflake,
  TrendingDown,
  Warehouse,
} from "lucide-react";
import { useState } from "react";
import { PageHeader, StatTile } from "@/components/common/primitives";
import { ChartFrame, TrendAreaChart } from "@/components/workspace/charts";
import {
  AsyncSection,
  StatusPill,
  Timeline,
  WorkspaceSection,
} from "@/components/workspace/parts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          "Pharmacy dashboard with orders awaiting action, inventory levels, clinical alerts, verification queue, and demo sales trend.",
      },
      { property: "og:title", content: "Overview — Medora Pharmacy workspace" },
      {
        property: "og:description",
        content:
          "Key figures, real-time inventory levels, clinical safety alerts, and recent activity for Medora pharmacy console.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OverviewPage,
});

interface ClinicalAlertItem {
  id: string;
  title: string;
  category: "interaction" | "cold_chain" | "recall" | "stewardship";
  severity: "high" | "medium" | "low";
  timestamp: string;
  description: string;
  affectedLine: string;
  actionLabel: string;
  actionUrl: string;
}

const RECENT_CLINICAL_ALERTS: ClinicalAlertItem[] = [
  {
    id: "alert-1",
    title: "High-Risk Drug Interaction Alert",
    category: "interaction",
    severity: "high",
    timestamp: "10 mins ago",
    description:
      "Concurrent Clarithromycin prescribed with Atorvastatin 40mg. Potential CYP3A4 inhibition and elevated myopathy risk detected.",
    affectedLine: "Order #MD-4890 · Rx Verified",
    actionLabel: "Pharmacist Review Required",
    actionUrl: "/pharmacy/orders",
  },
  {
    id: "alert-2",
    title: "Cold-Chain Storage Excursion Notice",
    category: "cold_chain",
    severity: "medium",
    timestamp: "45 mins ago",
    description:
      "Biological Refrigerator Unit B2 logged +7.8°C (Threshold: +2°C to +8°C). Insulin glargine and vaccines within safety envelope.",
    affectedLine: "Bay 4 · Storage Unit B2",
    actionLabel: "Verify Sensor Logs",
    actionUrl: "/pharmacy/inventory",
  },
  {
    id: "alert-3",
    title: "Antibiotic Stewardship Protocol Alert",
    category: "stewardship",
    severity: "medium",
    timestamp: "2 hours ago",
    description:
      "Linezolid 600mg dispensed for outpatient upper respiratory tract infection. Antibiotic stewardship guidelines recommend reviewing culture sensitivity.",
    affectedLine: "Dispense #DP-1049",
    actionLabel: "Check Culture Report",
    actionUrl: "/pharmacy/prescriptions",
  },
  {
    id: "alert-4",
    title: "Batch Expiry Advisory (< 45 Days)",
    category: "recall",
    severity: "low",
    timestamp: "Today at 08:30",
    description:
      "Amoxicillin 500mg (Batch AX-2024-B) has 24 units expiring within 45 days. Prioritize first-expiry dispensing rule.",
    affectedLine: "Inventory SKU: med-amox-500",
    actionLabel: "Mark FIFO Dispense",
    actionUrl: "/pharmacy/inventory",
  },
];

function OverviewPage() {
  const orders = useWorkspaceData("pharmacyOrders");
  const inventory = useWorkspaceData("inventory");
  const sales = useWorkspaceData("sales");
  const verification = useWorkspaceData("verificationQueue");
  const [selectedStockFilter, setSelectedStockFilter] = useState<
    "all" | "low" | "expiring" | "healthy"
  >("all");

  return (
    <div className="rise space-y-6">
      <PageHeader
        title="Pharmacy Overview"
        demo
        description="Real-time pharmacy inventory levels, clinical safety alerts, verification queue, and automated dispensary operations."
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
                  const expiringSoon = inventoryRows.filter((i) => {
                    const d = daysUntil(i.expiry);
                    return d >= 0 && d <= 60;
                  }).length;
                  const totalSkus = inventoryRows.length;
                  const healthyStock = totalSkus - lowStock;
                  const periodRevenue = (sales.data ?? []).reduce(
                    (sum, p) => sum + p.revenue,
                    0,
                  );

                  const filteredInventory = inventoryRows.filter((item) => {
                    if (selectedStockFilter === "low")
                      return item.stock <= item.reorderLevel;
                    if (selectedStockFilter === "expiring") {
                      const d = daysUntil(item.expiry);
                      return d >= 0 && d <= 60;
                    }
                    if (selectedStockFilter === "healthy")
                      return item.stock > item.reorderLevel;
                    return true;
                  });

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
                      {/* Stat Tiles with entrance animation */}
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="rise">
                          <StatTile
                            label="Orders awaiting action"
                            value={String(awaitingAction)}
                            icon={Package}
                            tone={awaitingAction > 0 ? "attention" : "default"}
                            hint="Awaiting verification or packing"
                          />
                        </div>
                        <div
                          className="rise"
                          style={{ animationDelay: "60ms" }}
                        >
                          <StatTile
                            label="Verification queue"
                            value={String(inReview)}
                            icon={ClipboardCheck}
                            tone={inReview > 0 ? "attention" : "default"}
                            hint="Rx waiting on pharmacist review"
                          />
                        </div>
                        <div
                          className="rise"
                          style={{ animationDelay: "120ms" }}
                        >
                          <StatTile
                            label="Low-stock lines"
                            value={String(lowStock)}
                            icon={Boxes}
                            tone={lowStock > 0 ? "attention" : "default"}
                            hint="At or below reorder threshold"
                          />
                        </div>
                        <div
                          className="rise"
                          style={{ animationDelay: "180ms" }}
                        >
                          <StatTile
                            label="Revenue (12-day sample)"
                            value={money(periodRevenue)}
                            icon={Receipt}
                            hint="Completed and dispensed orders"
                          />
                        </div>
                      </div>

                      {/* Clinical Safety Alerts Section */}
                      <div
                        id="pharmacy-clinical-alerts"
                        className="surface rise p-5 shadow-soft"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3">
                          <div className="flex items-center gap-2">
                            <span className="grid size-7 place-items-center rounded-md bg-destructive-soft text-destructive">
                              <ShieldAlert className="size-4" />
                            </span>
                            <div>
                              <h3 className="font-display text-sm font-bold text-ink">
                                Recent Clinical Alerts & Safety Notices
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                Real-time clinical warnings, drug interaction
                                flags, and storage telemetry.
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="w-fit border-destructive/30 bg-destructive-soft/50 text-destructive text-[11px]"
                          >
                            {RECENT_CLINICAL_ALERTS.length} Active Safety
                            Notices
                          </Badge>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                          {RECENT_CLINICAL_ALERTS.map((alert) => (
                            <div
                              key={alert.id}
                              id={alert.id}
                              className="rounded-lg border border-border bg-card p-3.5 shadow-xs transition-colors hover:border-primary/40 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex items-center gap-1.5">
                                    {alert.severity === "high" ? (
                                      <AlertCircle className="size-3.5 text-destructive shrink-0" />
                                    ) : alert.severity === "medium" ? (
                                      <AlertTriangle className="size-3.5 text-warning shrink-0" />
                                    ) : (
                                      <Info className="size-3.5 text-primary shrink-0" />
                                    )}
                                    <h4 className="font-display text-xs font-bold text-ink">
                                      {alert.title}
                                    </h4>
                                  </div>
                                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                    {alert.timestamp}
                                  </span>
                                </div>
                                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                                  {alert.description}
                                </p>
                              </div>

                              <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-xs">
                                <span className="font-medium text-[11px] text-ink">
                                  {alert.affectedLine}
                                </span>
                                <Link
                                  to={alert.actionUrl}
                                  className="font-medium text-primary hover:underline"
                                >
                                  {alert.actionLabel} →
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Main Two-Column Layout */}
                      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                        <div className="space-y-6">
                          {/* Live Inventory Levels Widget */}
                          <div
                            id="pharmacy-inventory-levels"
                            className="surface rise p-5 shadow-soft"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3">
                              <div className="flex items-center gap-2">
                                <span className="grid size-7 place-items-center rounded-md bg-primary-soft text-primary">
                                  <Warehouse className="size-4" />
                                </span>
                                <div>
                                  <h3 className="font-display text-sm font-bold text-ink">
                                    Dispensary Inventory Levels
                                  </h3>
                                  <p className="text-xs text-muted-foreground">
                                    Stock health across {totalSkus} active
                                    pharmaceutical formulations.
                                  </p>
                                </div>
                              </div>

                              <Link
                                to="/pharmacy/inventory"
                                className="text-xs font-medium text-primary hover:underline"
                              >
                                Manage Inventory →
                              </Link>
                            </div>

                            {/* Stock Health Bars */}
                            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                              <button
                                type="button"
                                onClick={() => setSelectedStockFilter("all")}
                                className={`rounded-lg border p-2.5 transition-colors ${
                                  selectedStockFilter === "all"
                                    ? "border-primary bg-primary-soft/40"
                                    : "border-border bg-card"
                                }`}
                              >
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                  Total SKUs
                                </span>
                                <p className="mt-0.5 font-display text-base font-bold text-ink">
                                  {totalSkus}
                                </p>
                              </button>

                              <button
                                type="button"
                                onClick={() => setSelectedStockFilter("low")}
                                className={`rounded-lg border p-2.5 transition-colors ${
                                  selectedStockFilter === "low"
                                    ? "border-warning bg-warning-soft/40"
                                    : "border-border bg-card"
                                }`}
                              >
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-warning">
                                  Low Stock
                                </span>
                                <p className="mt-0.5 font-display text-base font-bold text-warning">
                                  {lowStock}
                                </p>
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedStockFilter("expiring")
                                }
                                className={`rounded-lg border p-2.5 transition-colors ${
                                  selectedStockFilter === "expiring"
                                    ? "border-destructive bg-destructive-soft/40"
                                    : "border-border bg-card"
                                }`}
                              >
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-destructive">
                                  Expiring &lt;60d
                                </span>
                                <p className="mt-0.5 font-display text-base font-bold text-destructive">
                                  {expiringSoon}
                                </p>
                              </button>
                            </div>

                            {/* Filtered Inventory Items List */}
                            <div className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border">
                              {filteredInventory.slice(0, 5).map((item) => {
                                const isLow = item.stock <= item.reorderLevel;
                                const daysLeft = daysUntil(item.expiry);
                                const isExpiring =
                                  daysLeft >= 0 && daysLeft <= 60;

                                return (
                                  <div
                                    key={item.id}
                                    className="flex items-center justify-between p-3 text-xs bg-card hover:bg-secondary/20 transition-colors"
                                  >
                                    <div className="space-y-0.5">
                                      <p className="font-medium text-ink">
                                        {item.name}
                                      </p>
                                      <p className="text-[11px] text-muted-foreground">
                                        Batch {item.batch} · Exp: {item.expiry}{" "}
                                        ({daysLeft} days)
                                      </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                      <div className="text-right">
                                        <p
                                          className={`numeric font-bold ${
                                            isLow ? "text-warning" : "text-ink"
                                          }`}
                                        >
                                          {item.stock} in stock
                                        </p>
                                        <p className="text-[10px] text-muted-foreground">
                                          Reorder at {item.reorderLevel}
                                        </p>
                                      </div>

                                      {isLow ? (
                                        <Badge
                                          variant="outline"
                                          className="border-warning/30 bg-warning-soft/50 text-warning text-[10px]"
                                        >
                                          Low
                                        </Badge>
                                      ) : isExpiring ? (
                                        <Badge
                                          variant="outline"
                                          className="border-destructive/30 bg-destructive-soft/50 text-destructive text-[10px]"
                                        >
                                          Expiring
                                        </Badge>
                                      ) : (
                                        <Badge
                                          variant="outline"
                                          className="border-success/30 bg-success-soft/50 text-success text-[10px]"
                                        >
                                          Adequate
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Sales Trend Chart */}
                          <AsyncSection
                            query={sales}
                            emptyIcon={Gauge}
                            emptyTitle="No sales sample"
                            emptyDescription="A sales trend will appear once demo sales points exist."
                            isEmpty={(d) => d.length === 0}
                          >
                            {(salesData) => (
                              <ChartFrame
                                title="Sales & Dispense Trend"
                                description="Daily pharmacy revenue and prescription volume over the demo period."
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
                        </div>

                        {/* Right Column: Recent Activity Timeline */}
                        <div className="space-y-6">
                          <WorkspaceSection
                            title="Recent Activity"
                            description="Most recently placed and dispensed pharmacy orders."
                          >
                            <Timeline items={recentActivity} />
                          </WorkspaceSection>
                        </div>
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
