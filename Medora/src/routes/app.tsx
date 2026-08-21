import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppRouteGroup } from "@/components/layout/AppRouteGroup";
import { RequireRole } from "@/components/auth/RequireRole";
import { PatientShell } from "@/components/layout/PatientShell";

export const Route = createFileRoute("/app")({
  component: PatientLayout,
});

function PatientLayout() {
  return (
    <AppRouteGroup>
      <RequireRole allow={["patient", "admin"]}>
        <PatientShell>
          <Outlet />
        </PatientShell>
      </RequireRole>
    </AppRouteGroup>
  );
}
