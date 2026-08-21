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

const axis = {
  stroke: "var(--muted-foreground)",
  fontSize: 11,
  tickLine: false,
  axisLine: false,
} as const;

const tooltipStyle = {
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--card)",
  fontSize: 12,
  color: "var(--foreground)",
} as const;

export function ChartFrame({
  title,
  description,
  children,
  height = 240,
}: {
  title: string;
  description?: string;
  children: React.ReactElement;
  height?: number;
}) {
  return (
    <figure className="surface p-5">
      <figcaption className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-bold text-ink">{title}</h3>
          {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
        </div>
        <DemoBadge label="Demo figures" />
      </figcaption>
      <div style={{ height }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
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
    <AreaChart data={data} margin={{ left: -18, right: 6, top: 6, bottom: 0 }}>
      <defs>
        <linearGradient id={`grad-${yKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
          <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
      <XAxis dataKey={xKey} {...axis} />
      <YAxis {...axis} width={54} />
      <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [v, label]} />
      <Area
        type="monotone"
        dataKey={yKey}
        stroke="var(--chart-1)"
        strokeWidth={2}
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
    <BarChart data={data} margin={{ left: -18, right: 6, top: 6, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
      <XAxis dataKey={xKey} {...axis} interval={0} />
      <YAxis {...axis} width={54} allowDecimals={false} />
      <Tooltip
        cursor={{ fill: "var(--secondary)" }}
        contentStyle={tooltipStyle}
        formatter={(v: number) => [v, label]}
      />
      <Bar dataKey={yKey} radius={[5, 5, 0, 0]}>
        {data.map((row, i) => (
          <Cell
            key={i}
            fill={
              (colorKey ? (row[colorKey] as string) : undefined) ?? `var(--chart-${(i % 5) + 1})`
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
        innerRadius={54}
        outerRadius={84}
        paddingAngle={2}
      >
        {data.map((entry, i) => (
          <Cell key={entry.name} fill={entry.color ?? `var(--chart-${(i % 5) + 1})`} />
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
    <LineChart data={data} margin={{ left: -18, right: 6, top: 6, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
      <XAxis dataKey={xKey} {...axis} />
      <YAxis {...axis} width={54} />
      <Tooltip contentStyle={tooltipStyle} />
      {series.map((s, i) => (
        <Line
          key={s.key}
          type="monotone"
          dataKey={s.key}
          name={s.label}
          stroke={`var(--chart-${(i % 5) + 1})`}
          strokeWidth={2}
          dot={false}
        />
      ))}
    </LineChart>
  );
}

export function ChartLegend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-1.5">
          <span aria-hidden className="size-2.5 rounded-full" style={{ background: item.color }} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
