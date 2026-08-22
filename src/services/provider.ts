/**
 * Provider boundary.
 *
 * Every external capability Medora needs is declared here as a named
 * integration. The demo adapters below are the only implementations wired in
 * this build; a live adapter can be registered later without touching the UI.
 */
import type { DataProvider } from "@/lib/domain";

export type IntegrationKey =
  | "catalogue"
  | "pricing"
  | "pharmacyDirectory"
  | "maps"
  | "ocr"
  | "assistant"
  | "interactions"
  | "labParsing"
  | "barcode"
  | "ordering";

export interface IntegrationDescriptor {
  key: IntegrationKey;
  label: string;
  provider: DataProvider;
  connected: boolean;
  /** What a live provider would supply, shown in "not connected" states. */
  liveDescription: string;
}

export const integrations: Record<IntegrationKey, IntegrationDescriptor> = {
  catalogue: {
    key: "catalogue",
    label: "Medicine catalogue",
    provider: "demo",
    connected: false,
    liveDescription:
      "A licensed medicines catalogue or national drug register.",
  },
  pricing: {
    key: "pricing",
    label: "Price feed",
    provider: "demo",
    connected: false,
    liveDescription:
      "Verified retail price feeds published by participating pharmacies.",
  },
  pharmacyDirectory: {
    key: "pharmacyDirectory",
    label: "Pharmacy directory",
    provider: "demo",
    connected: false,
    liveDescription:
      "A licensed pharmacy register with live opening hours and stock signals.",
  },
  maps: {
    key: "maps",
    label: "Maps & routing",
    provider: "demo",
    connected: false,
    liveDescription:
      "Google Maps or Mapbox for map tiles, geocoding and directions.",
  },
  ocr: {
    key: "ocr",
    label: "Prescription OCR",
    provider: "demo",
    connected: false,
    liveDescription:
      "A document AI service that extracts text regions from prescriptions.",
  },
  assistant: {
    key: "assistant",
    label: "Medicine assistant model",
    provider: "demo",
    connected: false,
    liveDescription:
      "A reviewed clinical-information model grounded in licensed sources.",
  },
  interactions: {
    key: "interactions",
    label: "Interaction & allergy database",
    provider: "demo",
    connected: false,
    liveDescription:
      "A licensed drug-interaction and allergy cross-reference database.",
  },
  labParsing: {
    key: "labParsing",
    label: "Lab report parsing",
    provider: "demo",
    connected: false,
    liveDescription: "A structured lab-report parser with LOINC mapping.",
  },
  barcode: {
    key: "barcode",
    label: "Pack verification",
    provider: "demo",
    connected: false,
    liveDescription:
      "A manufacturer or regulator serialisation registry (e.g. GS1 / track-trace).",
  },
  ordering: {
    key: "ordering",
    label: "Pharmacy ordering",
    provider: "demo",
    connected: false,
    liveDescription: "Pharmacy order management and payment processing.",
  },
};

export const isConnected = (key: IntegrationKey) => integrations[key].connected;

/** Simulated latency so loading and skeleton states are real, not decorative. */
export const settle = <T>(value: T, ms = 320): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));
