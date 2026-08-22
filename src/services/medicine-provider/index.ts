import { DemoMedicineProvider } from "./demo";
import { LiveMedicineProvider } from "./live";
import type { IMedicineProvider } from "./types";

// Determine which provider to use based on environment configuration.
// If live is requested but not configured, it will still use LiveMedicineProvider
// which will correctly report { connected: false }. We can let the application
// decide whether to fallback to Demo.

export const demoProvider = new DemoMedicineProvider();
export const liveProvider = new LiveMedicineProvider();

let activeProvider: IMedicineProvider = demoProvider;

export const setProvider = (useLive: boolean) => {
  activeProvider = useLive ? liveProvider : demoProvider;
};

// Start with live if configured, otherwise fallback to demo
if (import.meta.env.VITE_USE_LIVE_MEDICINES === "true") {
  setProvider(true);
} else {
  setProvider(false);
}

export const getProvider = () => activeProvider;
export * from "./types";
