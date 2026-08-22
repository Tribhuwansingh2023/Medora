import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Boxes, PackageSearch } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageHeader, SafetyNotice } from "@/components/common/primitives";
import { DataTable, type DataColumn } from "@/components/workspace/DataTable";
import {
  AsyncSection,
  StatusPill,
  WorkspaceSection,
} from "@/components/workspace/parts";
import {
  daysUntil,
  money,
  shortDate,
  useWorkspaceData,
} from "@/services/workspace";
import type { InventoryItem } from "@/lib/domain";

export const Route = createFileRoute("/pharmacy/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Medora Pharmacy workspace" },
      {
        name: "description",
        content:
          "Last-synced demo inventory levels, batches and expiry windows for the Medora pharmacy console.",
      },
      {
        property: "og:title",
        content: "Inventory — Medora Pharmacy workspace",
      },
      {
        property: "og:description",
        content:
          "Filter, sort and review demo stock lines, batches and expiry dates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InventoryPage,
});

type StockStatus = "low" | "expiring" | "ok";

function stockStatus(item: InventoryItem): StockStatus {
  const expiryDays = daysUntil(item.expiry);
  if (expiryDays <= 60) return "expiring";
  if (item.stock <= item.reorderLevel) return "low";
  return "ok";
}

const statusMeta: Record<
  StockStatus,
  { label: string; tone: "warning" | "danger" | "positive" }
> = {
  low: { label: "Low stock", tone: "warning" },
  expiring: { label: "Expiring soon", tone: "danger" },
  ok: { label: "Adequate stock", tone: "positive" },
};

function InventoryPage() {
  const inventory = useWorkspaceData("inventory");
  const [viewing, setViewing] = useState<InventoryItem | null>(null);

  const columns: DataColumn<InventoryItem>[] = [
    {
      key: "name",
      header: "Medicine",
      sortValue: (r) => r.name,
      render: (r) => (
        <div>
          <p className="font-medium text-ink">{r.name}</p>
          <p className="text-xs text-muted-foreground">
            Supplier: {r.supplier}
          </p>
        </div>
      ),
    },
    {
      key: "batch",
      header: "Batch / expiry",
      hideBelow: "md",
      sortValue: (r) => r.expiry,
      render: (r) => (
        <div>
          <p className="text-sm text-ink">{r.batch}</p>
          <p className="text-xs text-muted-foreground">
            Expires {shortDate(`${r.expiry}T00:00:00.000Z`)}
          </p>
        </div>
      ),
    },
    {
      key: "stock",
      header: "On hand (last synced)",
      align: "right",
      sortValue: (r) => r.stock,
      render: (r) => (
        <span className="numeric font-medium text-ink">
          {r.stock}{" "}
          <span className="text-xs text-muted-foreground">
            / reorder {r.reorderLevel}
          </span>
        </span>
      ),
    },
    {
      key: "price",
      header: "Demo price",
      align: "right",
      hideBelow: "sm",
      sortValue: (r) => r.price,
      render: (r) => money(r.price),
    },
    {
      key: "status",
      header: "Status",
      sortValue: (r) => stockStatus(r),
      render: (r) => {
        const meta = statusMeta[stockStatus(r)];
        return <StatusPill label={meta.label} tone={meta.tone} />;
      },
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory"
        demo
        description="Stock lines from the demo pharmacy provider, last synced for this session."
      />

      <SafetyNotice
        tone="info"
        title="These are last-synced demo figures, not live inventory"
      >
        Quantities and prices below reflect the demo provider's last sync.
        Nothing here is a live stock feed or a live price — connect a licensed
        inventory provider before using this in production.
      </SafetyNotice>

      <AsyncSection
        query={inventory}
        emptyIcon={Boxes}
        emptyTitle="No inventory lines"
        emptyDescription="Stock lines will appear here once the inventory provider returns records."
        isEmpty={(d) => d.length === 0}
      >
        {(data) => {
          const attention = data.filter((i) => stockStatus(i) !== "ok");
          return (
            <>
              {attention.length > 0 && (
                <WorkspaceSection
                  title="Needs attention"
                  description="Low-stock and near-expiry lines from the demo dataset."
                >
                  <ul className="divide-y divide-border">
                    {attention.map((item) => {
                      const meta = statusMeta[stockStatus(item)];
                      return (
                        <li
                          key={item.id}
                          className="flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <AlertTriangle
                              className="size-4 text-warning"
                              aria-hidden
                            />
                            <span className="font-medium text-ink">
                              {item.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              batch {item.batch} · expires{" "}
                              {shortDate(`${item.expiry}T00:00:00.000Z`)}
                            </span>
                          </div>
                          <StatusPill label={meta.label} tone={meta.tone} />
                        </li>
                      );
                    })}
                  </ul>
                </WorkspaceSection>
              )}

              <WorkspaceSection
                title="All stock lines"
                description="Filter by status or expiry window, sort by quantity or expiry."
              >
                <DataTable
                  rows={data}
                  columns={columns}
                  getId={(r) => r.id}
                  searchText={(r) => `${r.name} ${r.batch} ${r.supplier}`}
                  searchPlaceholder="Search medicine, batch or supplier…"
                  pageSize={8}
                  initialSort={{ key: "name", direction: "asc" }}
                  filters={[
                    {
                      key: "status",
                      label: "Stock status",
                      options: [
                        { value: "low", label: "Low stock" },
                        { value: "expiring", label: "Expiring soon" },
                        { value: "ok", label: "Adequate stock" },
                      ],
                      predicate: (r, v) => stockStatus(r) === v,
                    },
                    {
                      key: "expiry",
                      label: "Expiry window",
                      options: [
                        { value: "30", label: "Within 30 days" },
                        { value: "60", label: "Within 60 days" },
                        { value: "180", label: "Within 180 days" },
                      ],
                      predicate: (r, v) => {
                        const d = daysUntil(r.expiry);
                        return d >= 0 && d <= Number(v);
                      },
                    },
                  ]}
                  rowActions={(r) => (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setViewing(r)}
                    >
                      View
                    </Button>
                  )}
                />
              </WorkspaceSection>
            </>
          );
        }}
      </AsyncSection>

      <Dialog
        open={Boolean(viewing)}
        onOpenChange={(open) => !open && setViewing(null)}
      >
        <DialogContent>
          {viewing && (
            <>
              <DialogHeader>
                <DialogTitle>{viewing.name}</DialogTitle>
                <DialogDescription>
                  Batch {viewing.batch} · supplied by {viewing.supplier}
                </DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    On hand (last synced)
                  </dt>
                  <dd className="numeric mt-1 font-medium text-ink">
                    {viewing.stock}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Reorder level
                  </dt>
                  <dd className="numeric mt-1 font-medium text-ink">
                    {viewing.reorderLevel}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Demo price
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    {money(viewing.price)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Expiry
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    {shortDate(`${viewing.expiry}T00:00:00.000Z`)}
                  </dd>
                </div>
              </dl>
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast("Reorder flagged for this session (demo)");
                  }}
                >
                  <PackageSearch className="size-4" aria-hidden /> Flag for
                  reorder
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
