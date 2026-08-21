import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  EmptyState,
  IntegrationNotConnected,
  PageHeader,
  SafetyNotice,
} from "@/components/common/primitives";
import { demoPharmacies } from "@/data/demo-catalog";
import { formatMoney } from "@/services/medicines";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/app/cart")({
  head: () => ({
    meta: [
      { title: "Basket — Medora" },
      {
        name: "description",
        content:
          "Review items reserved from nearby pharmacies. Prescription-only items are gated until a pharmacist verifies your prescription.",
      },
      { property: "og:title", content: "Basket — Medora" },
      {
        property: "og:description",
        content: "Reserve medicines with prescription verification gating.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { state, setCartQty, removeFromCart, placeOrder, pushNotification } = useStore();
  const navigate = useNavigate();
  const [pharmacyId, setPharmacyId] = useState(demoPharmacies[0]?.id ?? "");
  const [fulfilment, setFulfilment] = useState<"pickup" | "delivery">("pickup");
  const [prescriptionId, setPrescriptionId] = useState<string>("none");

  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const needsRx = state.cart.some((i) => i.prescriptionOnly);
  const verifiedRx = state.prescriptions.filter(
    (r) => r.status === "verified" || r.status === "reviewed",
  );
  const rxSelected = prescriptionId !== "none";
  const blocked = needsRx && !rxSelected;

  const submit = () => {
    const pharmacy = demoPharmacies.find((p) => p.id === pharmacyId);
    if (!pharmacy) return;
    const order = placeOrder(
      pharmacy.id,
      pharmacy.name,
      fulfilment,
      rxSelected ? prescriptionId : undefined,
    );
    pushNotification({
      kind: "order",
      title: `Reservation ${order.id} created`,
      body: `${pharmacy.name} · ${order.status.replace("_", " ")} (demo mode, no real order was sent).`,
    });
    toast.success(`Reservation ${order.id} created in demo mode`, {
      description: "No real pharmacy was contacted and no payment was taken.",
    });
    void navigate({ to: "/app/orders" });
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Basket"
        demo
        description="Reserve items at a nearby pharmacy. Prescription-only items cannot be released until a pharmacist verifies a valid prescription."
      />

      {state.cart.length === 0 ? (
        <EmptyState
          icon={ShoppingBag}
          title="Your basket is empty"
          description="Add a product from a medicine page or a price comparison to reserve it at a nearby pharmacy."
          action={
            <Button asChild>
              <Link to="/app/search">Find a medicine</Link>
            </Button>
          }
        />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="space-y-3">
            {state.cart.map((item) => (
              <article
                key={item.medicineId}
                className="surface flex flex-wrap items-center gap-4 p-4"
              >
                <div className="min-w-0 flex-1">
                  <Link
                    to="/app/medicine/$medicineId"
                    params={{ medicineId: item.medicineId }}
                    className="font-semibold text-ink hover:underline"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    {item.prescriptionOnly ? "Prescription-only" : "Over the counter"} ·{" "}
                    {formatMoney(item.price)} each (demo price)
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-md border border-border">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => setCartQty(item.medicineId, item.qty - 1)}
                  >
                    <Minus className="size-3.5" aria-hidden />
                  </Button>
                  <span className="numeric w-8 text-center text-sm font-medium">{item.qty}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => setCartQty(item.medicineId, item.qty + 1)}
                  >
                    <Plus className="size-3.5" aria-hidden />
                  </Button>
                </div>
                <p className="numeric w-20 text-right font-semibold">
                  {formatMoney(item.price * item.qty)}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => {
                    removeFromCart(item.medicineId);
                    toast("Removed from basket");
                  }}
                >
                  <Trash2 className="size-4" aria-hidden />
                </Button>
              </article>
            ))}

            {needsRx && (
              <SafetyNotice
                tone="warning"
                title="This basket contains a prescription-only medicine"
              >
                A pharmacist must verify a valid prescription before these items can be dispensed.
                Attach a prescription below, or the order will be held as “awaiting prescription”.
              </SafetyNotice>
            )}
          </section>

          <aside className="space-y-4">
            <div className="surface space-y-4 p-5">
              <h2 className="text-base font-bold">Reservation details</h2>
              <div className="space-y-1.5">
                <Label htmlFor="pharmacy">Pharmacy</Label>
                <Select value={pharmacyId} onValueChange={setPharmacyId}>
                  <SelectTrigger id="pharmacy">
                    <SelectValue placeholder="Select a pharmacy" />
                  </SelectTrigger>
                  <SelectContent>
                    {demoPharmacies.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name} · {p.distanceKm} km
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fulfilment">Fulfilment</Label>
                <Select
                  value={fulfilment}
                  onValueChange={(v) => setFulfilment(v as "pickup" | "delivery")}
                >
                  <SelectTrigger id="fulfilment">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">Collect in store</SelectItem>
                    <SelectItem value="delivery">Home delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="rx">Attach prescription</Label>
                <Select value={prescriptionId} onValueChange={setPrescriptionId}>
                  <SelectTrigger id="rx">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No prescription attached</SelectItem>
                    {verifiedRx.map((rx) => (
                      <SelectItem key={rx.id} value={rx.id}>
                        {rx.fileName} · {rx.status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Need to add one?{" "}
                  <Link to="/app/prescriptions" className="text-primary underline">
                    Upload a prescription
                  </Link>
                  .
                </p>
              </div>

              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Items</span>
                <span className="numeric">{formatMoney(total)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {fulfilment === "delivery" ? "Delivery (demo)" : "Collection"}
                </span>
                <span className="numeric">
                  {fulfilment === "delivery" ? formatMoney(2.5) : "Free"}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3 font-semibold">
                <span>Total</span>
                <span className="numeric">
                  {formatMoney(total + (fulfilment === "delivery" ? 2.5 : 0))}
                </span>
              </div>

              <Button className="w-full" onClick={submit}>
                {blocked ? "Send for prescription verification" : "Reserve at pharmacy"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Demo mode: this creates an order record inside Medora only. No pharmacy is contacted
                and no payment is taken.
              </p>
            </div>

            <IntegrationNotConnected integration="ordering" />
          </aside>
        </div>
      )}
    </div>
  );
}
