import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DemoBadge } from "@/components/common/primitives";

export const CHART_COLORS = [
  "#0d9488", // Teal Primary
  "#2563eb", // Blue
  "#f59e0b", // Amber
  "#10b981", // Emerald
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#64748b", // Slate
];

const axis = {
  stroke: "#94a3b8",
  fontSize: 11,
  tickLine: false,
  axisLine: false,
} as const;

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(148, 163, 184, 0.25)",
  background: "#ffffff",
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  fontSize: 12,
  fontWeight: 600,
  color: "#0f172a",
} as const;

export function ChartFrame({
  title,
  description,
  children,
  height = 260,
}: {
  title: string;
  description?: string;
  children: React.ReactElement;
  height?: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <figure className="surface rounded-2xl border border-border/80 bg-card p-5 shadow-soft overflow-hidden min-w-0">
      <figcaption className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-bold text-ink">{title}</h3>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <DemoBadge label="Live Analytics" />
      </figcaption>
      <div style={{ height, minHeight: height }} className="w-full min-w-0 relative">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={height}>
            {children}
          </ResponsiveContainer>
        ) : (
          <div className="size-full flex items-center justify-center text-xs text-muted-foreground animate-pulse">
            Loading chart metrics...
          </div>
        )}
      </div>
    </figure>
  );
}

export function TrendAreaChart({
  data,
  xKey,
  yKey,
  label,
}: {
  data: Record<string, string | number>[];
  xKey: string;
  yKey: string;
  label: string;
}) {
  return (
    <AreaChart data={data} margin={{ left: -14, right: 10, top: 10, bottom: 0 }}>
      <defs>
        <linearGradient id={`grad-${yKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d9488" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#0d9488" stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
      <XAxis dataKey={xKey} {...axis} />
      <YAxis {...axis} width={50} />
      <Tooltip
        contentStyle={tooltipStyle}
        formatter={(v: number) => [
          typeof v === "number" && label.toLowerCase().includes("revenue")
            ? `₹${v.toLocaleString()}`
            : v,
          label,
        ]}
      />
      <Area
        type="monotone"
        dataKey={yKey}
        stroke="#0d9488"
        strokeWidth={2.5}
        fill={`url(#grad-${yKey})`}
      />
    </AreaChart>
  );
}

export function SimpleBarChart({
  data,
  xKey,
  yKey,
  label,
  colorKey,
}: {
  data: Record<string, string | number>[];
  xKey: string;
  yKey: string;
  label: string;
  colorKey?: string;
}) {
  return (
    <BarChart data={data} margin={{ left: -14, right: 10, top: 10, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
      <XAxis dataKey={xKey} {...axis} interval={0} />
      <YAxis {...axis} width={46} allowDecimals={false} />
      <Tooltip
        cursor={{ fill: "rgba(13, 148, 136, 0.08)" }}
        contentStyle={tooltipStyle}
        formatter={(v: number) => [v, label]}
      />
      <Bar dataKey={yKey} radius={[6, 6, 0, 0]}>
        {data.map((row, i) => (
          <Cell
            key={i}
            fill={
              (colorKey ? (row[colorKey] as string) : undefined) ??
              CHART_COLORS[i % CHART_COLORS.length]
            }
          />
        ))}
      </Bar>
    </BarChart>
  );
}

export function StatusDonutChart({
  data,
}: {
  data: { name: string; value: number; color?: string }[];
}) {
  return (
    <PieChart>
      <Tooltip contentStyle={tooltipStyle} />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={58}
        outerRadius={88}
        paddingAngle={3}
      >
        {data.map((entry, i) => (
          <Cell
            key={entry.name}
            fill={entry.color ?? CHART_COLORS[i % CHART_COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
}

export function MultiLineChart({
  data,
  xKey,
  series,
}: {
  data: Record<string, string | number>[];
  xKey: string;
  series: { key: string; label: string }[];
}) {
  return (
    <LineChart data={data} margin={{ left: -14, right: 10, top: 10, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
      <XAxis dataKey={xKey} {...axis} />
      <YAxis {...axis} width={50} />
      <Tooltip contentStyle={tooltipStyle} />
      {series.map((s, i) => (
        <Line
          key={s.key}
          type="monotone"
          dataKey={s.key}
          name={s.label}
          stroke={CHART_COLORS[i % CHART_COLORS.length]}
          strokeWidth={2.5}
          dot={{ r: 3 }}
        />
      ))}
    </LineChart>
  );
}

export function ChartLegend({
  items,
}: {
  items: { label: string; color: string }[];
}) {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-1.5 font-medium">
          <span
            aria-hidden
            className="size-2.5 rounded-full shrink-0"
            style={{ background: item.color }}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
