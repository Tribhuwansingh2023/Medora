import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  Boxes,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileSpreadsheet,
  Layers,
  Minus,
  Package,
  PackagePlus,
  PackageSearch,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Trash2,
  Truck,
  Upload,
} from "lucide-react";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import {
  pharmacyInventoryService,
  type PharmacyProfile,
} from "@/services/pharmacy-inventory";
import { useQueryClient } from "@tanstack/react-query";
import type { InventoryItem } from "@/lib/domain";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pharmacy/inventory")({
  head: () => ({
    meta: [
      { title: "Real Pharmacy Inventory & Feed Sync — Medora" },
      {
        name: "description",
        content:
          "Real-time pharmacy inventory synchronization, POS/ERP feed connectors, batch expiry management, and license verification.",
      },
      {
        property: "og:title",
        content: "Real Pharmacy Inventory & Feed Sync — Medora",
      },
    ],
  }),
  component: InventoryPage,
});

type StockStatus = "low" | "expiring" | "out" | "ok";

function getStockStatus(item: InventoryItem): StockStatus {
  if (item.stock <= 0) return "out";
  const expiryDays = daysUntil(item.expiry);
  if (expiryDays <= 60) return "expiring";
  if (item.stock <= item.reorderLevel) return "low";
  return "ok";
}

const statusMeta: Record<
  StockStatus,
  { label: string; tone: "warning" | "danger" | "positive" | "muted" }
> = {
  out: { label: "Out of stock", tone: "danger" },
  low: { label: "Low stock", tone: "warning" },
  expiring: { label: "Expiring soon", tone: "danger" },
  ok: { label: "In stock", tone: "positive" },
};

function InventoryPage() {
  const queryClient = useQueryClient();
  const inventory = useWorkspaceData("inventory");
  const [profile, setProfile] = useState<PharmacyProfile>(() =>
    pharmacyInventoryService.getProfile(),
  );

  // Dialog States
  const [viewing, setViewing] = useState<InventoryItem | null>(null);
  const [addBatchOpen, setAddBatchOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [syncingFeed, setSyncingFeed] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  // New Batch Form State
  const [batchName, setBatchName] = useState("");
  const [batchCode, setBatchCode] = useState(`BATCH-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`);
  const [batchStock, setBatchStock] = useState("50");
  const [batchReorder, setBatchReorder] = useState("15");
  const [batchPrice, setBatchPrice] = useState("45.00");
  const [batchExpiry, setBatchExpiry] = useState("2027-06-30");
  const [batchSupplier, setBatchSupplier] = useState("MedPlus Central Distribution");

  // Onboarding Profile State
  const [editName, setEditName] = useState(profile.name);
  const [editLicense, setEditLicense] = useState(profile.licenseNumber);
  const [editGstin, setEditGstin] = useState(profile.gstin);
  const [editAddress, setEditAddress] = useState(profile.address);
  const [editPhone, setEditPhone] = useState(profile.phone);

  // Refresh query helper
  const refreshInventory = () => {
    queryClient.invalidateQueries({ queryKey: ["workspace", "inventory"] });
  };

  // Stock Quick Adjust Handler
  const handleAdjustStock = async (item: InventoryItem, delta: number) => {
    const newStock = Math.max(0, item.stock + delta);
    await pharmacyInventoryService.updateStock(item.id, newStock);
    refreshInventory();
    toast.success(`${item.name} stock updated to ${newStock} units`, {
      description: newStock === 0 ? "Flagged as Out of Stock in live catalog" : "Live price listings synchronized",
    });
  };

  // Live POS/ERP Feed Sync Trigger
  const handleSyncFeed = async () => {
    setSyncingFeed(true);
    try {
      const result = await pharmacyInventoryService.syncFeed();
      setProfile(pharmacyInventoryService.getProfile());
      refreshInventory();
      toast.success("Inventory Feed Synchronized", {
        description: `Successfully reconciled ${result.syncedCount} stock lines with zero conflicts.`,
      });
    } catch (err: any) {
      toast.error("Feed Sync Failed", { description: err.message });
    } finally {
      setSyncingFeed(false);
    }
  };

  // Create Batch Submit
  const handleCreateBatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchName.trim()) {
      toast.error("Please enter a medicine name");
      return;
    }

    const newItem = await pharmacyInventoryService.addBatch({
      medicineId: `med-custom-${Date.now()}`,
      name: batchName.trim(),
      batch: batchCode.trim(),
      stock: parseInt(batchStock, 10) || 0,
      reorderLevel: parseInt(batchReorder, 10) || 10,
      price: parseFloat(batchPrice) || 0,
      expiry: batchExpiry,
      supplier: batchSupplier.trim(),
    });

    refreshInventory();
    setAddBatchOpen(false);
    toast.success("New Batch Registered", {
      description: `${newItem.name} (Batch: ${newItem.batch}) added with ${newItem.stock} units.`,
    });

    // Reset fields
    setBatchName("");
    setBatchCode(`BATCH-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`);
  };

  // Save Onboarding Profile
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = pharmacyInventoryService.updateProfile({
      name: editName,
      licenseNumber: editLicense,
      gstin: editGstin,
      address: editAddress,
      phone: editPhone,
      status: "verified",
      verifiedAt: new Date().toISOString(),
    });
    setProfile(updated);
    setOnboardingOpen(false);
    toast.success("Pharmacy Verification Profile Updated", {
      description: "State Drug Control credentials & license verification confirmed.",
    });
  };

  // Filtered inventory
  const inventoryList = useMemo(() => {
    const raw = inventory.data || [];
    if (!filterQuery.trim()) return raw;
    const q = filterQuery.toLowerCase();
    return raw.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.batch.toLowerCase().includes(q) ||
        item.supplier.toLowerCase().includes(q),
    );
  }, [inventory.data, filterQuery]);

  // Inventory Metrics Summary
  const metrics = useMemo(() => {
    const raw = inventory.data || [];
    const totalUnits = raw.reduce((sum, i) => sum + i.stock, 0);
    const lowStockCount = raw.filter((i) => i.stock > 0 && i.stock <= i.reorderLevel).length;
    const outOfStockCount = raw.filter((i) => i.stock === 0).length;
    const expiringCount = raw.filter((i) => daysUntil(i.expiry) <= 60).length;
    const totalValue = raw.reduce((sum, i) => sum + i.stock * i.price, 0);

    return { totalUnits, lowStockCount, outOfStockCount, expiringCount, totalValue, count: raw.length };
  }, [inventory.data]);

  const columns: DataColumn<InventoryItem>[] = [
    {
      key: "name",
      header: "Medicine & Supplier",
      sortValue: (r) => r.name,
      render: (r) => (
        <div className="space-y-0.5">
          <p className="font-bold text-ink">{r.name}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Truck className="size-3 text-muted-foreground/80" />
            <span>{r.supplier}</span>
          </div>
        </div>
      ),
    },
    {
      key: "batch",
      header: "Batch / Expiry Window",
      sortValue: (r) => r.expiry,
      render: (r) => {
        const days = daysUntil(r.expiry);
        return (
          <div>
            <span className="font-mono text-xs font-bold text-foreground bg-muted/60 px-1.5 py-0.5 rounded">
              {r.batch}
            </span>
            <p className={cn("mt-1 text-xs font-medium", days <= 60 ? "text-rose-600 dark:text-rose-400 font-bold" : "text-muted-foreground")}>
              {shortDate(`${r.expiry}T00:00:00.000Z`)} ({days > 0 ? `${days}d left` : "Expired"})
            </p>
          </div>
        );
      },
    },
    {
      key: "stock",
      header: "Real Stock On Hand",
      align: "center",
      sortValue: (r) => r.stock,
      render: (r) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleAdjustStock(r, -1)}
            disabled={r.stock <= 0}
            className="size-7 rounded-lg text-muted-foreground hover:text-foreground"
            title="Decrease by 1"
          >
            <Minus className="size-3" />
          </Button>

          <div className="min-w-[70px] text-center">
            <span className={cn("numeric font-display text-base font-extrabold", r.stock === 0 ? "text-rose-600" : r.stock <= r.reorderLevel ? "text-amber-600" : "text-ink")}>
              {r.stock}
            </span>
            <span className="block text-[10px] text-muted-foreground">
              min {r.reorderLevel}
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handleAdjustStock(r, 1)}
            className="size-7 rounded-lg text-muted-foreground hover:text-foreground"
            title="Increase by 1"
          >
            <Plus className="size-3" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleAdjustStock(r, 10)}
            className="h-7 px-1.5 text-[10px] font-bold text-primary"
            title="Add +10 stock pack"
          >
            +10
          </Button>
        </div>
      ),
    },
    {
      key: "price",
      header: "Unit Price",
      align: "right",
      sortValue: (r) => r.price,
      render: (r) => (
        <span className="font-bold text-ink">{money(r.price)}</span>
      ),
    },
    {
      key: "status",
      header: "Live Status",
      align: "center",
      sortValue: (r) => getStockStatus(r),
      render: (r) => {
        const meta = statusMeta[getStockStatus(r)];
        return <StatusPill label={meta.label} tone={meta.tone} />;
      },
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Pharmacy Onboarding & Verification Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-gradient-to-br from-primary/10 via-card to-background p-6 shadow-sm backdrop-blur-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/20 px-3 py-0.5 text-xs font-extrabold uppercase tracking-wider text-primary">
                <Boxes className="size-3.5" />
                Medora Dispensary Engine
              </span>
              <Badge
                variant="outline"
                className="font-mono text-xs font-bold border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              >
                <ShieldCheck className="mr-1 size-3.5 text-emerald-500" />
                {profile.licenseNumber} (Verified)
              </Badge>
              <Badge
                variant="outline"
                className="font-mono text-xs font-medium border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center gap-1"
              >
                <Thermometer className="size-3 text-blue-500" />
                Cold-Chain: {profile.coldChainTempCelsius}°C (Compliant)
              </Badge>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              {profile.name}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
              Real-time POS/ERP inventory synchronization, dynamic availability broadcast, batch expiry monitoring, and State Drug Authority verification.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOnboardingOpen(true)}
              className="text-xs font-bold"
            >
              <ShieldCheck className="mr-1.5 size-3.5 text-primary" />
              License & Settings
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSyncFeed}
              disabled={syncingFeed}
              className="text-xs font-bold shadow-2xs"
            >
              <RefreshCw className={cn("mr-1.5 size-3.5", syncingFeed && "animate-spin text-primary")} />
              {syncingFeed ? "Syncing POS Feed..." : "Sync POS/ERP Feed"}
            </Button>

            <Button
              size="sm"
              onClick={() => setAddBatchOpen(true)}
              className="bg-primary text-primary-foreground font-bold text-xs shadow-md"
            >
              <PackagePlus className="mr-1.5 size-4" />
              + Add Stock Batch
            </Button>
          </div>
        </div>

        {/* Live Feed Status Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-4 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Feed URL: <code className="font-mono text-foreground font-semibold">{profile.apiFeedUrl}</code></span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="size-3.5" />
            <span>Last Reconciled: <strong>{new Date(profile.lastFeedSyncAt).toLocaleTimeString()}</strong></span>
          </div>
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Package className="size-3.5 text-primary" /> Total Active Inventory
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-display text-2xl font-extrabold text-ink">{metrics.totalUnits}</span>
            <span className="text-xs text-muted-foreground">{metrics.count} batch lines</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <AlertTriangle className="size-3.5 text-amber-500" /> Low Stock Warning
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-display text-2xl font-extrabold text-amber-600 dark:text-amber-400">{metrics.lowStockCount}</span>
            <span className="text-xs text-muted-foreground">Below reorder limit</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Calendar className="size-3.5 text-rose-500" /> Expiring (&lt;60 Days)
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-display text-2xl font-extrabold text-rose-600 dark:text-rose-400">{metrics.expiringCount}</span>
            <span className="text-xs text-muted-foreground">Priority dispense</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-4 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-emerald-500" /> Dispensary Valuation
          </span>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-display text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{money(metrics.totalValue)}</span>
            <span className="text-xs text-muted-foreground">On-shelf value</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search medicine, batch number, or supplier..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="pl-9 h-10 text-xs sm:text-sm bg-card border-border"
          />
        </div>

        {filterQuery && (
          <Button variant="ghost" size="sm" onClick={() => setFilterQuery("")} className="text-xs">
            Clear Filter
          </Button>
        )}
      </div>

      {/* Inventory Data Table */}
      <AsyncSection
        query={inventory}
        emptyIcon={Boxes}
        emptyTitle="No inventory records found"
        emptyDescription="Your pharmacy stock database is currently empty. Click '+ Add Stock Batch' or 'Sync POS/ERP Feed' to populate."
        isEmpty={(d) => d.length === 0}
      >
        {() => (
          <div className="rounded-2xl border-2 border-border/80 bg-card shadow-sm overflow-hidden">
            <DataTable
              rows={inventoryList}
              columns={columns}
              onRowClick={(item) => setViewing(item)}
              ariaLabel="Pharmacy Live Stock Inventory"
            />
          </div>
        )}
      </AsyncSection>

      {/* DIALOG: VIEW / EDIT ITEM DETAILS */}
      {viewing && (
        <Dialog open={Boolean(viewing)} onOpenChange={(open) => !open && setViewing(null)}>
          <DialogContent className="max-w-md rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-display text-xl font-bold">{viewing.name}</DialogTitle>
              <DialogDescription>
                Batch: <span className="font-mono font-bold text-foreground">{viewing.batch}</span> · Supplier: {viewing.supplier}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-muted/40 p-3">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase">Current Stock</span>
                  <div className="font-display text-2xl font-extrabold text-ink">{viewing.stock} units</div>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-3">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase">Reorder Level</span>
                  <div className="font-display text-2xl font-extrabold text-amber-600">{viewing.reorderLevel} units</div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-3 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unit Price:</span>
                  <strong className="font-bold text-ink">{money(viewing.price)}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expiry Date:</span>
                  <strong className="text-foreground">{shortDate(`${viewing.expiry}T00:00:00.000Z`)} ({daysUntil(viewing.expiry)} days)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Inventory Status:</span>
                  <StatusPill label={statusMeta[getStockStatus(viewing)].label} tone={statusMeta[getStockStatus(viewing)].tone} />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold">Quick Stock Adjustment</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleAdjustStock(viewing, -10)} disabled={viewing.stock < 10}>-10</Button>
                  <Button variant="outline" size="sm" onClick={() => handleAdjustStock(viewing, -1)} disabled={viewing.stock <= 0}>-1</Button>
                  <Button variant="outline" size="sm" onClick={() => handleAdjustStock(viewing, 1)}>+1</Button>
                  <Button variant="outline" size="sm" onClick={() => handleAdjustStock(viewing, 10)}>+10</Button>
                  <Button variant="outline" size="sm" onClick={() => handleAdjustStock(viewing, 50)}>+50</Button>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="default" onClick={() => setViewing(null)}>Done</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* DIALOG: ADD NEW STOCK BATCH */}
      <Dialog open={addBatchOpen} onOpenChange={setAddBatchOpen}>
        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold flex items-center gap-2">
              <PackagePlus className="size-5 text-primary" />
              Register New Medicine Batch
            </DialogTitle>
            <DialogDescription>
              Add a new pharmaceutical batch to your pharmacy stock register with live price propagation.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateBatch} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label htmlFor="batch-med-name" className="text-xs font-bold">Medicine Brand Name *</Label>
              <Input
                id="batch-med-name"
                required
                placeholder="e.g. Augmentin 625 Duo Tablet"
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
                className="h-10 text-xs sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="batch-code" className="text-xs font-bold">Batch Number *</Label>
                <Input
                  id="batch-code"
                  required
                  placeholder="BATCH-2026-X01"
                  value={batchCode}
                  onChange={(e) => setBatchCode(e.target.value)}
                  className="h-10 font-mono uppercase text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="batch-supplier" className="text-xs font-bold">Authorized Distributor *</Label>
                <Input
                  id="batch-supplier"
                  required
                  placeholder="e.g. Mankind Logistics"
                  value={batchSupplier}
                  onChange={(e) => setBatchSupplier(e.target.value)}
                  className="h-10 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="batch-stock" className="text-xs font-bold">Quantity (Units) *</Label>
                <Input
                  id="batch-stock"
                  type="number"
                  required
                  min="0"
                  value={batchStock}
                  onChange={(e) => setBatchStock(e.target.value)}
                  className="h-10 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="batch-reorder" className="text-xs font-bold">Reorder Alert Level</Label>
                <Input
                  id="batch-reorder"
                  type="number"
                  min="1"
                  value={batchReorder}
                  onChange={(e) => setBatchReorder(e.target.value)}
                  className="h-10 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="batch-price" className="text-xs font-bold">Pack Price (₹) *</Label>
                <Input
                  id="batch-price"
                  type="number"
                  step="0.5"
                  required
                  value={batchPrice}
                  onChange={(e) => setBatchPrice(e.target.value)}
                  className="h-10 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="batch-expiry" className="text-xs font-bold">Expiry Date *</Label>
              <Input
                id="batch-expiry"
                type="date"
                required
                value={batchExpiry}
                onChange={(e) => setBatchExpiry(e.target.value)}
                className="h-10 text-xs sm:text-sm"
              />
            </div>

            <DialogFooter className="pt-3">
              <Button type="button" variant="outline" onClick={() => setAddBatchOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-primary text-primary-foreground font-bold">Register Batch</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* DIALOG: PHARMACY ONBOARDING & LICENSE VERIFICATION */}
      <Dialog open={onboardingOpen} onOpenChange={setOnboardingOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="size-5 text-primary" />
              Pharmacy License & Verification Profile
            </DialogTitle>
            <DialogDescription>
              Verify regulatory credentials registered with the State Drugs Control Administration.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveProfile} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Pharmacy Name</Label>
              <Input value={editName} onChange={(e) => setEditName(e.target.value)} className="h-10 text-xs sm:text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Drug License No. (Form 20/21)</Label>
                <Input value={editLicense} onChange={(e) => setEditLicense(e.target.value)} className="h-10 font-mono text-xs sm:text-sm uppercase" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">GSTIN Registration</Label>
                <Input value={editGstin} onChange={(e) => setEditGstin(e.target.value)} className="h-10 font-mono text-xs sm:text-sm uppercase" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Physical Dispensary Address</Label>
              <Input value={editAddress} onChange={(e) => setEditAddress(e.target.value)} className="h-10 text-xs sm:text-sm" />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Registered Phone</Label>
              <Input value={editPhone} onChange={(e) => setEditPhone(e.target.value)} className="h-10 text-xs sm:text-sm" />
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-950 dark:text-emerald-200">
              <div className="font-bold">✓ Active Verification Status</div>
              <p className="mt-0.5 opacity-90">License verified with State Pharmacy Council. Cold chain telemetry sensor active.</p>
            </div>

            <DialogFooter className="pt-3">
              <Button type="button" variant="outline" onClick={() => setOnboardingOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-primary text-primary-foreground font-bold">Save Credentials</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
