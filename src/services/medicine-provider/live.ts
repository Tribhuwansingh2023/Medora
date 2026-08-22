import type { Medicine, Pharmacy, PriceListing } from "@/lib/domain";
import type { IMedicineProvider } from "./types";

export class LiveMedicineProvider implements IMedicineProvider {
  readonly id = "live-fda-rxnorm"; // Conceptually OpenFDA / RxNorm / NLM
  readonly isLive = true;

  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_MEDICINE_PROVIDER_API_KEY || "";
    this.baseUrl =
      import.meta.env.VITE_MEDICINE_PROVIDER_BASE_URL ||
      "https://api.fda.gov/drug";
  }

  async getStatus() {
    if (!this.apiKey) {
      return {
        connected: false,
        message:
          "Live medicine provider not connected. Missing API credentials.",
      };
    }
    return { connected: true, message: "Connected to live provider." };
  }

  async searchMedicines(query: string): Promise<Medicine[]> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    // Conceptual implementation for a real API
    const response = await fetch(
      `${this.baseUrl}/label.json?search=${encodeURIComponent(query)}&limit=10`,
    );
    if (!response.ok) throw new Error("Failed to fetch medicines");
    // Would normally map response to Medora Medicine Model here
    return [];
  }

  async getMedicine(id: string): Promise<Medicine | undefined> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    return undefined;
  }

  async getEquivalents(medicine: Medicine): Promise<Medicine[]> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    return [];
  }

  async getPharmacies(): Promise<Pharmacy[]> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    return [];
  }

  async getPharmacy(id: string): Promise<Pharmacy | undefined> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    return undefined;
  }

  async getOffers(medicineIds: string[]): Promise<PriceListing[]> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    return [];
  }

  async getPharmacyStock(pharmacyId: string): Promise<PriceListing[]> {
    if (!this.apiKey) throw new Error("Live provider not connected");
    return [];
  }
}
