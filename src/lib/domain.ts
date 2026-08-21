/**
 * Medora typed domain models.
 * These types are provider-agnostic: demo adapters and future live API adapters
 * both resolve to these shapes, so UI never changes when data sources change.
 */

export type DataProvider = "demo" | "live";

export interface Provenance {
  /** Human readable source of the record, e.g. a regulator or catalogue. */
  source: string;
  /** ISO date the record was last reviewed/updated by the source. */
  updatedAt: string;
  /** Whether the record originates from a connected, verified live provider. */
  verified: boolean;
  note?: string;
}

export type DosageForm =
  "Tablet" | "Capsule" | "Syrup" | "Suspension" | "Injection" | "Cream" | "Drops" | "Inhaler";

export interface ActiveIngredient {
  name: string;
  strength: string; // e.g. "500 mg"
}

export interface Medicine {
  id: string;
  brandName: string;
  genericName: string;
  activeIngredients: ActiveIngredient[];
  form: DosageForm;
  packSize: string;
  manufacturer: string;
  prescriptionOnly: boolean;
  /** Neutral, non-prescriptive description of what the product is indicated for. */
  usesSummary: string;
  commonSideEffects: string[];
  warnings: string[];
  storage: string;
  provenance: Provenance;
  /** Composition key: ingredient+strength+form. Basis of equivalence grouping. */
  compositionKey: string;
}

export interface PriceListing {
  id: string;
  medicineId: string;
  pharmacyId: string;
  price: number;
  currency: string;
  packSize: string;
  availability: "in_stock" | "low_stock" | "out_of_stock";
  updatedAt: string;
  provenance: Provenance;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  city: string;
  distanceKm: number;
  rating: number;
  reviews: number;
  opensAt: string;
  closesAt: string;
  open24h: boolean;
  phone: string;
  services: string[];
  licenseId: string;
  coords: { lat: number; lng: number };
  provenance: Provenance;
}

export interface PrescriptionItem {
  id: string;
  medicineText: string;
  strength: string;
  frequency: string;
  duration: string;
  notes?: string;
  confidence: number; // extraction confidence 0..1
  userConfirmed: boolean;
}

export interface Prescription {
  id: string;
  fileName: string;
  uploadedAt: string;
  prescriberName: string;
  status: "extracted" | "reviewed" | "verified" | "rejected";
  items: PrescriptionItem[];
  patientName?: string;
  reviewNote?: string;
}

export interface Reminder {
  id: string;
  medicineName: string;
  strength: string;
  times: string[]; // "08:00"
  startDate: string;
  endDate: string;
  instruction: string;
  sourcePrescriptionId?: string;
  active: boolean;
  log: { date: string; time: string; state: "taken" | "skipped" }[];
}

export interface ComparisonRecord {
  id: string;
  createdAt: string;
  compositionKey: string;
  label: string;
  medicineIds: string[];
  lowest: number;
  highest: number;
}

export interface OrderItem {
  medicineId: string;
  name: string;
  qty: number;
  price: number;
  prescriptionOnly: boolean;
}

export interface Order {
  id: string;
  pharmacyId: string;
  pharmacyName: string;
  placedAt: string;
  items: OrderItem[];
  total: number;
  fulfilment: "pickup" | "delivery";
  prescriptionId?: string;
  status: OrderStatus;
  timeline: { state: OrderStatus; at: string; note: string }[];
}

export type OrderStatus =
  | "awaiting_prescription"
  | "verifying"
  | "accepted"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

export interface LabValue {
  name: string;
  value: string;
  unit: string;
  referenceRange: string;
  flag: "within_range" | "outside_range" | "no_range_provided";
  explanation: string;
}

export interface LabReport {
  id: string;
  fileName: string;
  uploadedAt: string;
  panel: string;
  values: LabValue[];
}

export interface HealthProfile {
  fullName: string;
  email: string;
  ageBand: string;
  sex: string;
  city: string;
  allergies: string[];
  conditions: string[];
  currentMedicines: string[];
  pregnancyStatus: string;
  consentInformationalUse: boolean;
  consentDataProcessing: boolean;
  shareLocation: boolean;
}

export type AppRole = "patient" | "pharmacy" | "doctor" | "admin";

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  at: string;
  kind: "reminder" | "price" | "order" | "safety" | "system";
  read: boolean;
}

export interface InventoryItem {
  id: string;
  medicineId: string;
  name: string;
  batch: string;
  stock: number;
  reorderLevel: number;
  price: number;
  expiry: string;
  supplier: string;
}

export interface DoctorPatient {
  id: string;
  name: string;
  ageBand: string;
  reason: string;
  lastVisit: string;
  status: "waiting" | "in_consult" | "review" | "closed";
  allergies: string[];
  currentMedicines: string[];
  aiSummary: string;
}

export interface AuditEvent {
  id: string;
  at: string;
  actor: string;
  action: string;
  target: string;
  ip: string;
}
