import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { demoLabReport, demoPrescriptions } from "@/data/demo-catalog";
import type {
  AppRole,
  ComparisonRecord,
  HealthProfile,
  LabReport,
  NotificationItem,
  Order,
  OrderItem,
  OrderStatus,
  Prescription,
  Reminder,
} from "@/lib/domain";

const STORAGE_KEY = "medora.state.v1";

export interface AppState {
  signedIn: boolean;
  onboarded: boolean;
  role: AppRole;
  profile: HealthProfile;
  prescriptions: Prescription[];
  reminders: Reminder[];
  comparisons: ComparisonRecord[];
  orders: Order[];
  cart: OrderItem[];
  labReports: LabReport[];
  notifications: NotificationItem[];
  compareSelection: string[];
}

const today = () => new Date().toISOString().slice(0, 10);

const defaultProfile: HealthProfile = {
  fullName: "Aria Mehta",
  email: "aria.mehta@example.com",
  ageBand: "30–39",
  sex: "Prefer not to say",
  city: "Eastwick",
  allergies: ["Penicillin (self-reported)"],
  conditions: ["Type 2 diabetes (self-reported)"],
  currentMedicines: ["Metformin hydrochloride 500 mg"],
  pregnancyStatus: "Not applicable",
  consentInformationalUse: true,
  consentDataProcessing: true,
  shareLocation: false,
};

const defaultReminders: Reminder[] = [
  {
    id: "rem-1",
    medicineName: "Metformin hydrochloride",
    strength: "500 mg",
    times: ["08:00", "20:00"],
    startDate: "2026-08-02",
    endDate: "2026-09-01",
    instruction: "Take exactly as written on your prescription.",
    sourcePrescriptionId: "rx-1002",
    active: true,
    log: [
      { date: today(), time: "08:00", state: "taken" },
      { date: "2026-08-12", time: "08:00", state: "taken" },
      { date: "2026-08-12", time: "20:00", state: "skipped" },
      { date: "2026-08-11", time: "08:00", state: "taken" },
      { date: "2026-08-11", time: "20:00", state: "taken" },
    ],
  },
  {
    id: "rem-2",
    medicineName: "Amoxicillin",
    strength: "500 mg",
    times: ["09:00", "15:00", "21:00"],
    startDate: "2026-07-28",
    endDate: "2026-08-04",
    instruction: "Course completed. Kept for your medicine history.",
    sourcePrescriptionId: "rx-1001",
    active: false,
    log: [],
  },
];

const defaultNotifications: NotificationItem[] = [
  {
    id: "nt-1",
    title: "Reminder due at 20:00",
    body: "Metformin hydrochloride 500 mg — mark it taken or skipped when the time comes.",
    at: "2026-08-13T18:30:00.000Z",
    kind: "reminder",
    read: false,
  },
  {
    id: "nt-2",
    title: "Price changed in a saved comparison",
    body: "Paracetamol 500 mg tablets: the lowest demo listing moved from $1.75 to $1.60.",
    at: "2026-08-13T09:12:00.000Z",
    kind: "price",
    read: false,
  },
  {
    id: "nt-3",
    title: "Safety notice",
    body: "You recorded a penicillin allergy. Show it to a pharmacist before any antibiotic is dispensed.",
    at: "2026-08-11T14:00:00.000Z",
    kind: "safety",
    read: true,
  },
  {
    id: "nt-4",
    title: "Reservation ready for pickup",
    body: "Order MD-4821 at Riverside Community Pharmacy is marked ready in demo mode.",
    at: "2026-08-10T16:45:00.000Z",
    kind: "order",
    read: true,
  },
];

const defaultOrders: Order[] = [
  {
    id: "MD-4821",
    pharmacyId: "ph-1",
    pharmacyName: "Riverside Community Pharmacy",
    placedAt: "2026-08-10T15:02:00.000Z",
    items: [
      {
        medicineId: "med-ceti-10-tab-a",
        name: "Zyracet 10 · Tablet",
        qty: 1,
        price: 2.2,
        prescriptionOnly: false,
      },
    ],
    total: 2.2,
    fulfilment: "pickup",
    status: "ready",
    timeline: [
      {
        state: "accepted",
        at: "2026-08-10T15:04:00.000Z",
        note: "Pharmacy accepted the reservation.",
      },
      { state: "preparing", at: "2026-08-10T15:40:00.000Z", note: "Items picked from shelf." },
      { state: "ready", at: "2026-08-10T16:45:00.000Z", note: "Ready at the collection counter." },
    ],
  },
  {
    id: "MD-4787",
    pharmacyId: "ph-3",
    pharmacyName: "Northgate 24h Pharmacy",
    placedAt: "2026-07-28T11:20:00.000Z",
    items: [
      {
        medicineId: "med-amox-500-cap-a",
        name: "Amoxil-C 500 · Capsule",
        qty: 1,
        price: 8.9,
        prescriptionOnly: true,
      },
    ],
    total: 8.9,
    fulfilment: "pickup",
    prescriptionId: "rx-1001",
    status: "completed",
    timeline: [
      {
        state: "verifying",
        at: "2026-07-28T11:22:00.000Z",
        note: "Prescription sent for pharmacist verification.",
      },
      {
        state: "accepted",
        at: "2026-07-28T12:05:00.000Z",
        note: "Pharmacist verified the prescription.",
      },
      { state: "ready", at: "2026-07-28T13:10:00.000Z", note: "Ready for collection." },
      { state: "completed", at: "2026-07-28T17:30:00.000Z", note: "Collected in store." },
    ],
  },
];

const defaultComparisons: ComparisonRecord[] = [
  {
    id: "cmp-1",
    createdAt: "2026-08-12T10:00:00.000Z",
    compositionKey: "paracetamol|500 mg|Tablet",
    label: "Paracetamol 500 mg · Tablet",
    medicineIds: ["med-para-500-tab-a", "med-para-500-tab-b", "med-para-500-tab-c"],
    lowest: 1.6,
    highest: 3.85,
  },
  {
    id: "cmp-2",
    createdAt: "2026-08-06T18:20:00.000Z",
    compositionKey: "cetirizine hydrochloride|10 mg|Tablet",
    label: "Cetirizine 10 mg · Tablet",
    medicineIds: ["med-ceti-10-tab-a", "med-ceti-10-tab-b"],
    lowest: 1.7,
    highest: 2.2,
  },
];

const initialState: AppState = {
  signedIn: false,
  onboarded: false,
  role: "patient",
  profile: defaultProfile,
  prescriptions: demoPrescriptions,
  reminders: defaultReminders,
  comparisons: defaultComparisons,
  orders: defaultOrders,
  cart: [],
  labReports: [demoLabReport],
  notifications: defaultNotifications,
  compareSelection: [],
};

interface StoreValue {
  state: AppState;
  update: (patch: Partial<AppState> | ((prev: AppState) => Partial<AppState>)) => void;
  signIn: (role?: AppRole) => void;
  signOut: () => void;
  toggleCompare: (medicineId: string) => void;
  clearCompare: () => void;
  addToCart: (item: OrderItem) => void;
  removeFromCart: (medicineId: string) => void;
  setCartQty: (medicineId: string, qty: number) => void;
  placeOrder: (
    pharmacyId: string,
    pharmacyName: string,
    fulfilment: "pickup" | "delivery",
    prescriptionId?: string,
  ) => Order;
  advanceOrder: (orderId: string, status: OrderStatus, note: string) => void;
  savePrescription: (rx: Prescription) => void;
  addReminder: (r: Reminder) => void;
  updateReminder: (id: string, patch: Partial<Reminder>) => void;
  logDose: (id: string, time: string, state: "taken" | "skipped") => void;
  saveComparison: (record: ComparisonRecord) => void;
  markNotification: (id: string, read: boolean) => void;
  markAllNotificationsRead: () => void;
  pushNotification: (n: Omit<NotificationItem, "id" | "at" | "read">) => void;
  addLabReport: (r: LabReport) => void;
  resetDemo: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...initialState, ...(JSON.parse(raw) as AppState) });
    } catch {
      /* ignore corrupt local state and continue with defaults */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be unavailable; state stays in memory */
    }
  }, [state, hydrated]);

  const update = useCallback<StoreValue["update"]>((patch) => {
    setState((prev) => ({ ...prev, ...(typeof patch === "function" ? patch(prev) : patch) }));
  }, []);

  const value = useMemo<StoreValue>(() => {
    const nowIso = () => new Date().toISOString();
    return {
      state,
      update,
      signIn: (role = "patient") =>
        setState((p) => ({
          ...p,
          signedIn: true,
          role,
          onboarded: p.onboarded || role !== "patient",
        })),
      signOut: () => setState((p) => ({ ...p, signedIn: false, role: "patient", cart: [] })),
      toggleCompare: (id) =>
        setState((p) => ({
          ...p,
          compareSelection: p.compareSelection.includes(id)
            ? p.compareSelection.filter((x) => x !== id)
            : [...p.compareSelection, id].slice(-4),
        })),
      clearCompare: () => setState((p) => ({ ...p, compareSelection: [] })),
      addToCart: (item) =>
        setState((p) => {
          const existing = p.cart.find((c) => c.medicineId === item.medicineId);
          return {
            ...p,
            cart: existing
              ? p.cart.map((c) =>
                  c.medicineId === item.medicineId ? { ...c, qty: c.qty + item.qty } : c,
                )
              : [...p.cart, item],
          };
        }),
      removeFromCart: (medicineId) =>
        setState((p) => ({ ...p, cart: p.cart.filter((c) => c.medicineId !== medicineId) })),
      setCartQty: (medicineId, qty) =>
        setState((p) => ({
          ...p,
          cart: p.cart.map((c) =>
            c.medicineId === medicineId ? { ...c, qty: Math.max(1, qty) } : c,
          ),
        })),
      placeOrder: (pharmacyId, pharmacyName, fulfilment, prescriptionId) => {
        const items = state.cart;
        const needsRx = items.some((i) => i.prescriptionOnly);
        const status: OrderStatus = needsRx
          ? prescriptionId
            ? "verifying"
            : "awaiting_prescription"
          : "accepted";
        const order: Order = {
          id: `MD-${Math.floor(1000 + Math.random() * 8999)}`,
          pharmacyId,
          pharmacyName,
          placedAt: nowIso(),
          items,
          total: items.reduce((s, i) => s + i.price * i.qty, 0),
          fulfilment,
          ...(prescriptionId ? { prescriptionId } : {}),
          status,
          timeline: [
            {
              state: status,
              at: nowIso(),
              note:
                status === "awaiting_prescription"
                  ? "A prescription is required before this order can be verified."
                  : status === "verifying"
                    ? "Prescription submitted for pharmacist verification."
                    : "Reservation received by the pharmacy (demo mode).",
            },
          ],
        };
        setState((p) => ({ ...p, orders: [order, ...p.orders], cart: [] }));
        return order;
      },
      advanceOrder: (orderId, status, note) =>
        setState((p) => ({
          ...p,
          orders: p.orders.map((o) =>
            o.id === orderId
              ? { ...o, status, timeline: [...o.timeline, { state: status, at: nowIso(), note }] }
              : o,
          ),
        })),
      savePrescription: (rx) =>
        setState((p) => ({
          ...p,
          prescriptions: [rx, ...p.prescriptions.filter((x) => x.id !== rx.id)],
        })),
      addReminder: (r) => setState((p) => ({ ...p, reminders: [r, ...p.reminders] })),
      updateReminder: (id, patch) =>
        setState((p) => ({
          ...p,
          reminders: p.reminders.map((r) => (r.id === id ? { ...r, ...patch } : r)),
        })),
      logDose: (id, time, doseState) =>
        setState((p) => ({
          ...p,
          reminders: p.reminders.map((r) =>
            r.id === id
              ? {
                  ...r,
                  log: [
                    { date: today(), time, state: doseState },
                    ...r.log.filter((l) => !(l.date === today() && l.time === time)),
                  ],
                }
              : r,
          ),
        })),
      saveComparison: (record) =>
        setState((p) => ({
          ...p,
          comparisons: [
            record,
            ...p.comparisons.filter((c) => c.compositionKey !== record.compositionKey),
          ].slice(0, 8),
        })),
      markNotification: (id, read) =>
        setState((p) => ({
          ...p,
          notifications: p.notifications.map((n) => (n.id === id ? { ...n, read } : n)),
        })),
      markAllNotificationsRead: () =>
        setState((p) => ({
          ...p,
          notifications: p.notifications.map((n) => ({ ...n, read: true })),
        })),
      pushNotification: (n) =>
        setState((p) => ({
          ...p,
          notifications: [
            { ...n, id: `nt-${Math.random().toString(36).slice(2, 8)}`, at: nowIso(), read: false },
            ...p.notifications,
          ],
        })),
      addLabReport: (r) => setState((p) => ({ ...p, labReports: [r, ...p.labReports] })),
      resetDemo: () => setState(initialState),
    };
  }, [state, update]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

/** Returns the store if a provider is mounted above, otherwise null. */
export function useOptionalStore() {
  return useContext(StoreContext);
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <AppStoreProvider>");
  return ctx;
}

export const adherenceRate = (reminders: Reminder[]) => {
  const logs = reminders.flatMap((r) => r.log);
  if (!logs.length) return null;
  return Math.round((logs.filter((l) => l.state === "taken").length / logs.length) * 100);
};
