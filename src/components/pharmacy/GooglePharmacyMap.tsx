import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Pharmacy } from "@/lib/domain";
import { isOpenNow } from "@/services/medicines";

interface GooglePharmacyMapProps {
  pharmacies: Pharmacy[];
  selectedPharmacyId?: string | null;
  onSelectPharmacy?: (pharmacy: Pharmacy) => void;
  userCoords?: { lat: number; lng: number };
}

export function GooglePharmacyMap({
  pharmacies,
  selectedPharmacyId,
  onSelectPharmacy,
  userCoords = { lat: 12.9716, lng: 77.5946 }, // Default Bengaluru Central
}: GooglePharmacyMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [activePharmacy, setActivePharmacy] = useState<Pharmacy | null>(
    pharmacies.find((p) => p.id === selectedPharmacyId) ||
      pharmacies[0] ||
      null,
  );
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");
  const [zoomLevel, setZoomLevel] = useState<number>(13);

  useEffect(() => {
    if (selectedPharmacyId) {
      const match = pharmacies.find((p) => p.id === selectedPharmacyId);
      if (match) setActivePharmacy(match);
    }
  }, [selectedPharmacyId, pharmacies]);

  const handleSelect = (pharmacy: Pharmacy) => {
    setActivePharmacy(pharmacy);
    if (onSelectPharmacy) onSelectPharmacy(pharmacy);
  };

  const getDirectionsUrl = (pharmacy: Pharmacy) => {
    const dest = `${pharmacy.coords.lat},${pharmacy.coords.lng}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${dest}&destination_place_id=${encodeURIComponent(
      pharmacy.name,
    )}`;
  };

  // Center on active pharmacy or user
  const centerLat = activePharmacy ? activePharmacy.coords.lat : userCoords.lat;
  const centerLng = activePharmacy ? activePharmacy.coords.lng : userCoords.lng;

  // Google Maps Embed URL for preview and interactive viewing
  const embedUrl = `https://maps.google.com/maps?q=${centerLat},${centerLng}&hl=en&z=${zoomLevel}&t=${
    mapType === "satellite" ? "k" : "m"
  }&output=embed`;

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Map Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="size-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Google Maps Live Pharmacy Locator
            </h3>
            <p className="text-xs text-muted-foreground">
              {pharmacies.length} verified pharmacies in Bengaluru area
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={mapType === "roadmap" ? "default" : "outline"}
            onClick={() => setMapType("roadmap")}
            className="h-8 text-xs"
          >
            <Layers className="mr-1.5 size-3.5" /> Map
          </Button>
          <Button
            size="sm"
            variant={mapType === "satellite" ? "default" : "outline"}
            onClick={() => setMapType("satellite")}
            className="h-8 text-xs"
          >
            Satellite
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setZoomLevel((z) => Math.min(z + 1, 18))}
            className="h-8 w-8 p-0"
            title="Zoom in"
          >
            +
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setZoomLevel((z) => Math.max(z - 1, 10))}
            className="h-8 w-8 p-0"
            title="Zoom out"
          >
            -
          </Button>
        </div>
      </div>

      {/* Main Map View & Overlay */}
      <div className="grid lg:grid-cols-[1fr_340px]">
        {/* Interactive Map Iframe / Stage */}
        <div className="relative h-[420px] w-full bg-muted/20 sm:h-[480px]">
          <iframe
            ref={
              mapContainerRef as unknown as React.RefObject<HTMLIFrameElement>
            }
            title="Google Maps Pharmacy Locator"
            src={embedUrl}
            className="size-full border-0"
            loading="lazy"
            allowFullScreen
          />

          {/* Floating Markers List on Map */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[calc(100%-24px)] pointer-events-auto">
            {pharmacies.map((p) => {
              const isSelected = activePharmacy?.id === p.id;
              const open = isOpenNow(p);
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-md transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground scale-105 ring-2 ring-primary ring-offset-1"
                      : "bg-background/95 text-foreground hover:bg-background backdrop-blur-sm border border-border"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full ${
                      open ? "bg-emerald-500" : "bg-zinc-400"
                    }`}
                  />
                  <span className="max-w-[120px] truncate">
                    {p.name.split(" ")[0]}
                  </span>
                  <span className="text-[11px] opacity-75">
                    {p.distanceKm}km
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick info banner when pharmacy is selected */}
          {activePharmacy && (
            <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-border/80 bg-background/95 p-3.5 shadow-lg backdrop-blur sm:left-auto sm:right-3 sm:max-w-md">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {activePharmacy.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {activePharmacy.address}, {activePharmacy.city}
                  </p>
                </div>
                <Badge
                  variant={isOpenNow(activePharmacy) ? "default" : "secondary"}
                  className="shrink-0 text-[10px]"
                >
                  {isOpenNow(activePharmacy) ? "Open Now" : "Closed"}
                </Badge>
              </div>

              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5 text-primary" />{" "}
                  {activePharmacy.distanceKm} km away
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {activePharmacy.open24h
                    ? "24 Hours"
                    : `${activePharmacy.opensAt} – ${activePharmacy.closesAt}`}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Button
                  size="sm"
                  className="h-8 flex-1 text-xs"
                  onClick={() =>
                    window.open(getDirectionsUrl(activePharmacy), "_blank")
                  }
                >
                  <Navigation className="mr-1.5 size-3.5" /> Google Maps
                  Directions
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs"
                  asChild
                >
                  <a href={`tel:${activePharmacy.phone}`}>
                    <Phone className="mr-1 size-3.5" /> Call
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Pharmacy Details Sidebar */}
        <div className="flex flex-col border-t border-border bg-card p-4 lg:border-t-0 lg:border-l">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Pharmacies on Map
            </span>
            <Badge variant="outline" className="text-[11px]">
              {pharmacies.length} locations
            </Badge>
          </div>

          <div className="mt-3 flex-1 space-y-2.5 overflow-y-auto max-h-[380px] pr-1">
            {pharmacies.map((p) => {
              const isSelected = activePharmacy?.id === p.id;
              const open = isOpenNow(p);

              return (
                <div
                  key={p.id}
                  onClick={() => handleSelect(p)}
                  className={`cursor-pointer rounded-lg border p-3 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border hover:border-primary/40 hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-xs text-foreground truncate">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {p.address}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-primary">
                      {p.distanceKm} km
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span
                      className={`font-medium ${
                        open
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-muted-foreground"
                      }`}
                    >
                      {open ? "● Open Now" : "○ Closed"}
                    </span>
                    <span className="text-muted-foreground">
                      ⭐ {p.rating} ({p.reviews})
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-2.5 pt-2 border-t border-border/60 flex items-center gap-1.5">
                      <a
                        href={getDirectionsUrl(p)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="size-3" /> View in Google Maps
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
