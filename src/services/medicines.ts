import { demoMedicines, demoPharmacies, demoPrices } from "@/data/demo-catalog";
import type { Medicine, Pharmacy, PriceListing } from "@/lib/domain";
import { settle } from "./provider";

export interface OfferRow {
  listing: PriceListing;
  medicine: Medicine;
  pharmacy: Pharmacy;
  unitPrice: number;
  units: number;
}

const unitsInPack = (packSize: string) => {
  const n = parseInt(packSize, 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
};

export const searchMedicines = async (query: string): Promise<Medicine[]> => {
  const q = query.trim().toLowerCase();
  const results = !q
    ? demoMedicines
    : demoMedicines.filter((m) =>
        [
          m.brandName,
          m.genericName,
          m.manufacturer,
          m.form,
          ...m.activeIngredients.map((a) => `${a.name} ${a.strength}`),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
  return settle(results);
};

export const getMedicine = async (id: string): Promise<Medicine | undefined> =>
  settle(demoMedicines.find((m) => m.id === id));

export const getMedicineSync = (id: string) => demoMedicines.find((m) => m.id === id);

/** Equivalence = identical active ingredient + strength + dosage form. */
export const getEquivalents = async (medicine: Medicine): Promise<Medicine[]> =>
  settle(
    demoMedicines.filter(
      (m) => m.compositionKey === medicine.compositionKey && m.id !== medicine.id,
    ),
  );

export const getOffers = async (medicineIds: string[]): Promise<OfferRow[]> => {
  const rows = demoPrices
    .filter((p) => medicineIds.includes(p.medicineId))
    .map((listing) => {
      const medicine = demoMedicines.find((m) => m.id === listing.medicineId)!;
      const pharmacy = demoPharmacies.find((p) => p.id === listing.pharmacyId)!;
      const units = unitsInPack(listing.packSize);
      return { listing, medicine, pharmacy, units, unitPrice: listing.price / units };
    })
    .sort((a, b) => a.unitPrice - b.unitPrice);
  return settle(rows);
};

export const getPharmacies = async (): Promise<Pharmacy[]> =>
  settle([...demoPharmacies].sort((a, b) => a.distanceKm - b.distanceKm));

export const getPharmacy = async (id: string): Promise<Pharmacy | undefined> =>
  settle(demoPharmacies.find((p) => p.id === id));

export const getPharmacyStock = async (pharmacyId: string): Promise<OfferRow[]> => {
  const rows = demoPrices
    .filter((p) => p.pharmacyId === pharmacyId)
    .map((listing) => {
      const medicine = demoMedicines.find((m) => m.id === listing.medicineId)!;
      const pharmacy = demoPharmacies.find((p) => p.id === listing.pharmacyId)!;
      const units = unitsInPack(listing.packSize);
      return { listing, medicine, pharmacy, units, unitPrice: listing.price / units };
    });
  return settle(rows);
};

export const isOpenNow = (p: Pharmacy, now = new Date()) => {
  if (p.open24h) return true;
  const mins = now.getHours() * 60 + now.getMinutes();
  const toMin = (s: string) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3, 5));
  return mins >= toMin(p.opensAt) && mins <= toMin(p.closesAt);
};

export const formatMoney = (value: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value);

/** Transparent, rule-based "best value" explanation — never a quality claim. */
export const explainBestValue = (rows: OfferRow[]) => {
  const available = rows.filter((r) => r.listing.availability !== "out_of_stock");
  if (available.length === 0) return null;
  const best = available.reduce((a, b) => (a.unitPrice <= b.unitPrice ? a : b));
  const worst = available.reduce((a, b) => (a.unitPrice >= b.unitPrice ? a : b));
  const savingPerUnit = worst.unitPrice - best.unitPrice;
  return {
    best,
    worst,
    savingPerUnit,
    savingPercent: worst.unitPrice > 0 ? (savingPerUnit / worst.unitPrice) * 100 : 0,
    reasons: [
      `Lowest price per unit in this comparison (${formatMoney(best.unitPrice)} per unit).`,
      `Same active ingredient, strength and dosage form as the other listed products.`,
      `Marked ${best.listing.availability.replace("_", " ")} at ${best.pharmacy.name}, ${best.pharmacy.distanceKm} km away.`,
    ],
  };
};
