/**
 * Workspace data access.
 *
 * All reads go through this module so the professional workspaces never touch
 * demo arrays directly. Each loader simulates provider latency, which is what
 * drives the loading states in the UI. When a live provider is registered the
 * function bodies change here and nothing in the routes does.
 */
import { useQuery } from "@tanstack/react-query";
import {
  demoAppointments,
  demoCatalogueRecords,
  demoConsultNotes,
  demoCustomers,
  demoMedicineHistory,
  demoModerationReports,
  demoOrganisations,
  demoPharmacyOrders,
  demoPlatformMetrics,
  demoPlatformUsers,
  demoPrescriptionDrafts,
  demoSales,
  demoSuppliers,
  demoVerificationQueue,
} from "@/data/workspace-demo";
import {
  demoAuditEvents,
  demoDoctorPatients,
  demoInventory,
} from "@/data/demo-catalog";
import { settle } from "./provider";

export const workspaceLoaders = {
  doctorPatients: () => settle(demoDoctorPatients, 420),
  appointments: () => settle(demoAppointments, 360),
  consultNotes: () => settle(demoConsultNotes, 300),
  prescriptionDrafts: () => settle(demoPrescriptionDrafts, 400),
  medicineHistory: () => settle(demoMedicineHistory, 280),

  inventory: () => settle(demoInventory, 420),
  pharmacyOrders: () => settle(demoPharmacyOrders, 380),
  verificationQueue: () => settle(demoVerificationQueue, 340),
  customers: () => settle(demoCustomers, 320),
  suppliers: () => settle(demoSuppliers, 300),
  sales: () => settle(demoSales, 360),

  platformUsers: () => settle(demoPlatformUsers, 420),
  organisations: () => settle(demoOrganisations, 340),
  catalogue: () => settle(demoCatalogueRecords, 360),
  moderation: () => settle(demoModerationReports, 320),
  auditEvents: () => settle(demoAuditEvents, 300),
  platformMetrics: () => settle(demoPlatformMetrics, 360),
} as const;

export type WorkspaceResource = keyof typeof workspaceLoaders;

/** Single entry point for workspace reads, with retry and error state. */
export function useWorkspaceData<K extends WorkspaceResource>(resource: K) {
  return useQuery<Awaited<ReturnType<(typeof workspaceLoaders)[K]>>>({
    queryKey: ["workspace", resource],
    queryFn: () =>
      workspaceLoaders[resource]() as Promise<
        Awaited<ReturnType<(typeof workspaceLoaders)[K]>>
      >,
    staleTime: 30_000,
    retry: 1,
  });
}

export const money = (value: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);

export const shortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const shortDateTime = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

export const timeOnly = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const daysUntil = (dateOnly: string) =>
  Math.round(
    (new Date(`${dateOnly}T00:00:00.000Z`).getTime() -
      Date.parse("2026-08-16T00:00:00.000Z")) /
      86_400_000,
  );
