import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, DollarSign, PackageCheck, ShoppingCart, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader, StatTile } from "@/components/common/primitives";
import {
  ChartFrame,
  ChartLegend,
  SimpleBarChart,
  StatusDonutChart,
  TrendAreaChart,
} from "@/components/workspace/charts";
import { AsyncSection, WorkspaceSection } from "@/components/workspace/parts";
import { money, shortDate, useWorkspaceData } from "@/services/workspace";

export const Route = createFileRoute("/pharmacy/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Medora Pharmacy workspace" },
      {
        name: "description",
        content:
          "Revenue, order volume, order status and inventory analytics derived from Medora pharmacy demo data.",
      },
      { property: "og:title", content: "Analytics — Medora Pharmacy workspace" },
      {
        property: "og:description",
        content: "Demo revenue and operations analytics for the Medora pharmacy console.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AnalyticsPage,
});

const periods = [
  { value: "7", label: "Last 7 days" },
  { value: "12", label: "Full period" },
] as const;

const statusColors: Record<string, string> = {
  awaiting_prescription: "var(--chart-1)",
  verifying: "var(--chart-2)",
  accepted: "var(--chart-3)",
  preparing: "var(--chart-4)",
  ready: "var(--chart-5)",
  completed: "var(--chart-1)",
  cancelled: "var(--muted-foreground)",
};

const statusLabels: Record<string, string> = {
  awaiting_prescription: "Awaiting prescription",
  verifying: "Verifying",
  accepted: "Accepted",
  preparing: "Preparing",
  ready: "Ready",
  completed: "Completed",
  cancelled: "Cancelled",
};

function AnalyticsPage() {
  const sales = useWorkspaceData("sales");
  const orders = useWorkspaceData("pharmacyOrders");
  const inventory = useWorkspaceData("inventory");
  const [period, setPeriod] = useState<string>("7");

  const salesRows = sales.data ?? [];
  const slicedSales = useMemo(() => {
    const n = period === "7" ? 7 : salesRows.length;
    return salesRows.slice(-n);
  }, [salesRows, period]);

  const totalRevenue = slicedSales.reduce((s, p) => s + p.revenue, 0);
  const totalOrders = slicedSales.reduce((s, p) => s + p.orders, 0);
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const orderRows = orders.data ?? [];
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const o of orderRows) counts[o.status] = (counts[o.status] ?? 0) + 1;
    return counts;
  }, [orderRows]);

  const donutData = Object.entries(statusCounts).map(([status, value]) => ({
    name: statusLabels[status] ?? status,
    value,
    color: statusColors[status] ?? "var(--chart-1)",
  }));

  const inventoryRows = inventory.data ?? [];
  const lowStockCount = inventoryRows.filter((i) => i.stock <= i.reorderLevel).length;
  const restockBar = inventoryRows
    .map((i) => ({
      name: i.name.split(" · ")[0] ?? i.name,
      stock: i.stock,
      reorder: i.reorderLevel,
    }))
    .slice(0, 6);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        demo
        description="Revenue, order volume and inventory figures derived from Medora demo records for this pharmacy account."
        actions={
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[160px]" aria-label="Select period">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {periods.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        }
      />

      <AsyncSection
        query={sales}
        emptyIcon={BarChart3}
        emptyTitle="No sales data"
        emptyDescription="Sales figures will appear here once recorded."
        isEmpty={(d) => d.length === 0}
      >
        {() => (
          <>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <StatTile
                label="Revenue"
                value={money(totalRevenue)}
                icon={DollarSign}
                hint={`Demo figure · ${periods.find((p) => p.value === period)?.label}`}
              />
              <StatTile
                label="Orders"
                value={String(totalOrders)}
                icon={ShoppingCart}
                hint="Demo figure for the selected period"
              />
              <StatTile
                label="Average order value"
                value={money(avgOrderValue)}
                icon={TrendingUp}
                hint="Derived from demo revenue and order counts"
              />
              <StatTile
                label="Items at or below reorder level"
                value={String(lowStockCount)}
                icon={PackageCheck}
                tone={lowStockCount > 0 ? "attention" : "default"}
                hint="Last-synced demo inventory snapshot, not live stock"
              />
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <ChartFrame
                title="Revenue trend"
                description={`Daily revenue for the ${periods.find((p) => p.value === period)?.label.toLowerCase()}.`}
              >
                <TrendAreaChart
                  data={slicedSales.map((p) => ({
                    ...p,
                    day: shortDate(`${p.date}T00:00:00.000Z`),
                  }))}
                  xKey="day"
                  yKey="revenue"
                  label="Revenue"
                />
              </ChartFrame>

              <ChartFrame
                title="Order volume"
                description="Daily order counts across the same period."
              >
                <SimpleBarChart
                  data={slicedSales.map((p) => ({
                    ...p,
                    day: shortDate(`${p.date}T00:00:00.000Z`),
                  }))}
                  xKey="day"
                  yKey="orders"
                  label="Orders"
                />
              </ChartFrame>
            </div>
          </>
        )}
      </AsyncSection>

      <div className="grid gap-6 xl:grid-cols-2">
        <AsyncSection
          query={orders}
          emptyIcon={ShoppingCart}
          emptyTitle="No orders yet"
          emptyDescription="Order status breakdown will appear once orders are placed."
          isEmpty={(d) => d.length === 0}
        >
          {() => (
            <ChartFrame
              title="Orders by status"
              description="Current pharmacy order pipeline, demo snapshot."
            >
              <StatusDonutChart data={donutData} />
            </ChartFrame>
          )}
        </AsyncSection>

        <AsyncSection
          query={inventory}
          emptyIcon={PackageCheck}
          emptyTitle="No inventory records"
          emptyDescription="Stock levels will appear once inventory is loaded."
          isEmpty={(d) => d.length === 0}
        >
          {() => (
            <ChartFrame
              title="Stock vs reorder level"
              description="Last-synced demo inventory figures, not live stock counts."
            >
              <SimpleBarChart data={restockBar} xKey="name" yKey="stock" label="Units in stock" />
            </ChartFrame>
          )}
        </AsyncSection>
      </div>

      <WorkspaceSection
        title="Order status legend"
        description="Colours used in the status breakdown above."
      >
        <ChartLegend
          items={donutData.map((d) => ({ label: d.name, color: d.color ?? "var(--chart-1)" }))}
        />
      </WorkspaceSection>
    </div>
  );
}
