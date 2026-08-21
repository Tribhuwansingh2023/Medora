import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Clock,
  Copy,
  List,
  Map as MapIcon,
  MapPin,
  Phone,
  Radio,
  Star,
  Store,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EmptyState,
  IntegrationNotConnected,
  PageHeader,
} from "@/components/common/primitives";
import type { Pharmacy } from "@/lib/domain";
import { getPharmacies, isOpenNow } from "@/services/medicines";
import { PharmacySearchGrounding } from "@/components/pharmacy/PharmacySearchGrounding";
import { GooglePharmacyMap } from "@/components/pharmacy/GooglePharmacyMap";

export const Route = createFileRoute("/app/pharmacies/")({
  head: () => ({
    meta: [
      { title: "Nearby pharmacies — Medora" },
      {
        name: "description",
        content:
          "Find licensed pharmacies near you with opening hours, services, ratings and current stock signals.",
      },
      { property: "og:title", content: "Nearby pharmacies — Medora" },
      {
        property: "og:description",
        content: "Licensed pharmacies with hours, services and stock signals.",
      },
    ],
  }),
  component: PharmaciesPage,
});

type SortKey = "distance" | "rating" | "open";

function PharmacyCard({ pharmacy: p }: { pharmacy: Pharmacy }) {
  const open = isOpenNow(p);
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${p.name}, ${p.address}, ${p.city}`);
      toast.success("Address copied", {
        description: "Turn-by-turn directions need a connected maps provider.",
      });
    } catch {
      toast.error("Could not copy the address on this device.");
    }
  };

  return (
    <article className="surface flex flex-col gap-3 p-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <h2 className="font-display text-base font-bold text-ink">
            {p.name}
          </h2>
          <p className="truncate text-sm text-muted-foreground">{p.address}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-card px-2 py-0.5 text-xs font-medium">
          <Star className="size-3 text-warning-foreground" aria-hidden />
          <span className="numeric">{p.rating}</span>
          <span className="text-muted-foreground">({p.reviews})</span>
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <MapPin className="size-3.5 shrink-0" aria-hidden /> {p.distanceKm} km
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          {p.open24h ? "Open 24 hours" : `${p.opensAt} – ${p.closesAt}`}
        </span>
        <span className="inline-flex items-center gap-1">
          <Phone className="size-3.5 shrink-0" aria-hidden /> {p.phone}
        </span>
      </div>

      <span
        className={
          open
            ? "w-fit rounded-full border border-success/35 bg-success-soft px-2.5 py-0.5 text-xs font-semibold text-success"
            : "w-fit rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
        }
      >
        {open ? "Open now" : `Closed · opens ${p.opensAt}`}
      </span>

      <div className="flex flex-wrap gap-1.5">
        {p.services.map((s) => (
          <span
            key={s}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
        <p className="text-xs text-muted-foreground">Licence {p.licenseId}</p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="ghost" onClick={() => void copyAddress()}>
            <Copy className="size-3.5" aria-hidden /> Directions
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link
              to="/app/pharmacies/$pharmacyId"
              params={{ pharmacyId: p.id }}
            >
              View & reserve
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function PharmaciesPage() {
  const [q, setQ] = useState("");
  const [openOnly, setOpenOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("distance");
  const [view, setView] = useState<"list" | "map">("list");
  const { data, isPending } = useQuery({
    queryKey: ["pharmacies"],
    queryFn: getPharmacies,
  });

  const list = (data ?? [])
    .filter(
      (p) =>
        (!openOnly || isOpenNow(p)) &&
        `${p.name} ${p.address} ${p.city} ${p.services.join(" ")}`
          .toLowerCase()
          .includes(q.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "open")
        return (
          Number(isOpenNow(b)) - Number(isOpenNow(a)) ||
          a.distanceKm - b.distanceKm
        );
      return a.distanceKm - b.distanceKm;
    });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pharmacies & Live Stock Grounding"
        demo
        description="Verify real-time stock availability, dispensary opening hours, and grounded regional pharmacy pricing before you travel."
      />

      <Tabs defaultValue="grounded" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grounded" className="gap-2">
            <Radio className="size-4 text-primary" /> Live Stock Grounding Tool
          </TabsTrigger>
          <TabsTrigger value="directory" className="gap-2">
            <Store className="size-4" /> Pharmacy Directory
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grounded" className="space-y-6">
          <PharmacySearchGrounding />
        </TabsContent>

        <TabsContent value="directory" className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid flex-1 gap-4 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-end">
              <div className="space-y-1.5">
                <Label htmlFor="pq">Search directory</Label>
                <Input
                  id="pq"
                  value={q}
                  maxLength={80}
                  placeholder="Name, area or service"
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="psort">Sort by</Label>
                <Select
                  value={sort}
                  onValueChange={(v) => setSort(v as SortKey)}
                >
                  <SelectTrigger id="psort">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Nearest first</SelectItem>
                    <SelectItem value="rating">Highest rated</SelectItem>
                    <SelectItem value="open">Open now first</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div
              role="group"
              aria-label="View mode"
              className="inline-flex self-start rounded-md border border-border bg-card p-0.5 sm:self-end"
            >
              {(["list", "map"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={view === mode}
                  onClick={() => setView(mode)}
                  className={`inline-flex min-h-9 items-center gap-1.5 rounded-[5px] px-3 text-sm font-medium transition-colors ${
                    view === mode
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {mode === "list" ? (
                    <List className="size-4" aria-hidden />
                  ) : (
                    <MapIcon className="size-4" aria-hidden />
                  )}
                  {mode === "list" ? "List" : "Map"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="open"
              checked={openOnly}
              onCheckedChange={setOpenOnly}
            />
            <Label htmlFor="open">Show open pharmacies only</Label>
          </div>

          {view === "map" ? (
            <div className="space-y-4">
              <GooglePharmacyMap pharmacies={list} />
            </div>
          ) : (
            <>
              <IntegrationNotConnected integration="maps" />
              {isPending ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {[0, 1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-52 w-full rounded-lg" />
                  ))}
                </div>
              ) : list.length === 0 ? (
                <EmptyState
                  icon={MapPin}
                  title="No pharmacies matched"
                  description="Try a broader search term, or turn off the 'open now' filter."
                  action={
                    <Button
                      variant="outline"
                      onClick={() => {
                        setQ("");
                        setOpenOnly(false);
                      }}
                    >
                      Clear filters
                    </Button>
                  }
                />
              ) : (
                <>
                  <p className="text-sm text-muted-foreground">
                    {list.length} licensed{" "}
                    {list.length === 1 ? "pharmacy" : "pharmacies"} in the demo
                    directory
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {list.map((p) => (
                      <PharmacyCard key={p.id} pharmacy={p} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
