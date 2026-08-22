import { useEffect, useState } from "react";
import { ServerOff, Server } from "lucide-react";
import { getProvider } from "@/services/medicine-provider";

export function ProviderStatusBanner() {
  const [status, setStatus] = useState<{
    connected: boolean;
    message: string;
    isLive: boolean;
  } | null>(null);

  useEffect(() => {
    let mounted = true;
    const provider = getProvider();
    provider.getStatus().then((s) => {
      if (mounted) {
        setStatus({ ...s, isLive: provider.isLive });
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!status) return null;

  // We only show a persistent banner if live was requested but failed,
  // or if we explicitly want to show that it's running in Demo fallback mode.
  // We'll show an info banner indicating Demo mode.
  if (!status.isLive || !status.connected) {
    return (
      <div className="bg-warning/20 border-b border-warning/50 px-4 py-2 text-sm text-warning-foreground flex items-center justify-center gap-2">
        <ServerOff className="size-4" aria-hidden />
        <span className="font-medium">
          Live medicine provider not connected.
        </span>
        <span className="opacity-80">Falling back to Demo catalogue.</span>
      </div>
    );
  }

  return null;
}
