import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, XCircle } from "lucide-react";
import { toast } from "sonner";
import {
  ClinicalDisclaimer,
  EmptyState,
  IntegrationNotConnected,
  PageHeader,
} from "@/components/common/primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Order, OrderStatus } from "@/lib/domain";
import { useStore } from "@/lib/store";
import { formatMoney } from "@/services/medicines";

export const Route = createFileRoute("/app/orders")({
  head: () => ({
    meta: [
      { title: "Orders & reservations — Medora" },
      {
        name: "description",
        content:
          "Track pharmacy reservations, prescription verification status and pickup readiness.",
      },
      { property: "og:title", content: "Orders & reservations — Medora" },
      { property: "og:description", content: "Reservation and verification status in one place." },
    ],
  }),
  component: OrdersPage,
});

const statusMeta: Record<OrderStatus, { label: string; cls: string }> = {
  awaiting_prescription: {
    label: "Awaiting prescription",
    cls: "border-warning/40 bg-warning-soft text-warning-foreground",
  },
  verifying: {
    label: "Pharmacist verifying",
    cls: "border-primary/30 bg-primary-soft text-primary",
  },
  accepted: { label: "Accepted", cls: "border-primary/30 bg-primary-soft text-primary" },
  preparing: { label: "Preparing", cls: "border-primary/30 bg-primary-soft text-primary" },
  ready: { label: "Ready for pickup", cls: "border-success/35 bg-success-soft text-success" },
  completed: { label: "Completed", cls: "border-border bg-secondary text-muted-foreground" },
  cancelled: { label: "Cancelled", cls: "border-border bg-secondary text-muted-foreground" },
};

const openStatuses: OrderStatus[] = [
  "awaiting_prescription",
  "verifying",
  "accepted",
  "preparing",
  "ready",
];

function OrderCard({ order, onCancel }: { order: Order; onCancel: (id: string) => void }) {
  const meta = statusMeta[order.status];
  const cancellable = openStatuses.includes(order.status);
  return (
    <article className="surface p-5">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-ink">{order.pharmacyName}</h3>
          <p className="text-sm text-muted-foreground">
            {order.id} · {new Date(order.placedAt).toLocaleString()} ·{" "}
            {order.fulfilment === "pickup" ? "Pickup" : "Delivery"}
          </p>
        </div>
        <Badge variant="outline" className={meta.cls}>
          {meta.label}
        </Badge>
      </header>

      <ul className="mt-4 space-y-2 border-t border-border pt-4">
        {order.items.map((i) => (
          <li key={i.medicineId} className="flex items-center justify-between gap-3 text-sm">
            <span className="min-w-0 truncate">
              {i.name} <span className="text-muted-foreground">× {i.qty}</span>
            </span>
            <span className="numeric shrink-0">{formatMoney(i.price * i.qty)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm font-semibold">
        <span>Total</span>
        <span className="numeric">{formatMoney(order.total)}</span>
      </div>

      <ol className="mt-4 space-y-3 border-t border-border pt-4">
        {order.timeline.map((t, idx) => (
          <li key={`${t.state}-${idx}`} className="flex gap-3 text-sm">
            <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
            <div>
              <p className="font-medium text-foreground">{statusMeta[t.state].label}</p>
              <p className="text-muted-foreground">{t.note}</p>
              <p className="text-xs text-muted-foreground/80">{new Date(t.at).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/app/pharmacies/$pharmacyId" params={{ pharmacyId: order.pharmacyId }}>
            View pharmacy
          </Link>
        </Button>
        {order.status === "awaiting_prescription" && (
          <Button asChild size="sm">
            <Link to="/app/prescriptions">Attach a prescription</Link>
          </Button>
        )}
        {cancellable && (
          <Button variant="ghost" size="sm" onClick={() => onCancel(order.id)}>
            <XCircle className="size-4" aria-hidden /> Cancel reservation
          </Button>
        )}
      </div>
    </article>
  );
}

function OrdersPage() {
  const { state, advanceOrder } = useStore();
  const orders = state.orders;
  const open = orders.filter((o) => openStatuses.includes(o.status));
  const closed = orders.filter((o) => !openStatuses.includes(o.status));

  const cancel = (id: string) => {
    advanceOrder(id, "cancelled", "Cancelled by you from the Medora app (demo mode).");
    toast.success("Reservation cancelled");
  };

  const empty = (
    <EmptyState
      icon={ShoppingBag}
      title="No reservations yet"
      description="Reserve a medicine at a nearby pharmacy and it will appear here with its verification and pickup status."
      action={
        <Button asChild>
          <Link to="/app/search">Find a medicine</Link>
        </Button>
      }
    />
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders & reservations"
        demo
        description="Reservations are held with the pharmacy. Prescription-only items cannot progress until a pharmacist verifies your prescription."
      />

      {orders.length === 0 ? (
        empty
      ) : (
        <Tabs defaultValue="open">
          <TabsList>
            <TabsTrigger value="open">Active ({open.length})</TabsTrigger>
            <TabsTrigger value="closed">Past ({closed.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="open" className="mt-5 space-y-4">
            {open.length === 0 ? (
              <EmptyState
                icon={ShoppingBag}
                title="Nothing active"
                description="All your reservations are complete or cancelled."
              />
            ) : (
              open.map((o) => <OrderCard key={o.id} order={o} onCancel={cancel} />)
            )}
          </TabsContent>
          <TabsContent value="closed" className="mt-5 space-y-4">
            {closed.length === 0 ? (
              <EmptyState
                icon={ShoppingBag}
                title="No past reservations"
                description="Completed and cancelled reservations will be listed here."
              />
            ) : (
              closed.map((o) => <OrderCard key={o.id} order={o} onCancel={cancel} />)
            )}
          </TabsContent>
        </Tabs>
      )}

      <IntegrationNotConnected integration="ordering" />
      <ClinicalDisclaimer />
    </div>
  );
}
