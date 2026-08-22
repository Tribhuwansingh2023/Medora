import { createFileRoute } from "@tanstack/react-router";
import { Bell, BellOff, CheckCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState, PageHeader } from "@/components/common/primitives";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — Medora" },
      {
        name: "description",
        content:
          "Dose reminders, price movements, order updates and safety notices in one place.",
      },
      { property: "og:title", content: "Notifications — Medora" },
      {
        property: "og:description",
        content: "Reminders, price changes, orders and safety notices.",
      },
    ],
  }),
  component: NotificationsPage,
});

const kindLabels: Record<string, string> = {
  reminder: "Reminder",
  price: "Price",
  order: "Order",
  safety: "Safety",
  system: "System",
};

function NotificationsPage() {
  const { state, markNotification, markAllNotificationsRead } = useStore();
  const [filter, setFilter] = useState("all");

  const items = state.notifications.filter((n) =>
    filter === "all" ? true : filter === "unread" ? !n.read : n.kind === filter,
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description="Everything Medora has flagged for you, newest first."
        actions={
          <Button
            variant="outline"
            onClick={() => {
              markAllNotificationsRead();
              toast.success("All notifications marked as read");
            }}
          >
            <CheckCheck className="size-4" aria-hidden /> Mark all read
          </Button>
        }
      />

      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="reminder">Reminders</TabsTrigger>
          <TabsTrigger value="price">Prices</TabsTrigger>
          <TabsTrigger value="order">Orders</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
        </TabsList>
      </Tabs>

      {items.length === 0 ? (
        <EmptyState
          icon={BellOff}
          title="Nothing here"
          description="When a dose is due, a saved comparison changes price, or an order moves, it will appear here."
        />
      ) : (
        <ul className="space-y-2">
          {items.map((n) => (
            <li
              key={n.id}
              className={cn(
                "surface flex flex-wrap items-start gap-3 p-4",
                !n.read && "border-primary/30 bg-primary-soft/40",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-8 shrink-0 place-items-center rounded-md",
                  n.kind === "safety"
                    ? "bg-destructive-soft text-destructive"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                <Bell className="size-4" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-ink">{n.title}</p>
                  <span className="rounded-full border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {kindLabels[n.kind]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  {new Date(n.at).toLocaleString()}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => markNotification(n.id, !n.read)}
              >
                {n.read ? "Mark unread" : "Mark read"}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
