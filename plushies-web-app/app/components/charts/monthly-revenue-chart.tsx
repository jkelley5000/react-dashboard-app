import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartCard from "./chart-card";

export interface MonthlyRevenuePoint {
  month: string;
  revenue: number;
}

interface MonthlyRevenueChartProps {
  data: MonthlyRevenuePoint[];
}

export default function MonthlyRevenueChart({ data }: MonthlyRevenueChartProps) {
  return (
    <ChartCard title="Monthly Revenue" subtitle="Total purchase amount grouped by month">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="month" stroke="var(--color-text-muted)" />
          <YAxis
            stroke="var(--color-text-muted)"
            tickFormatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value: number | string | undefined) => [`$${Number(value ?? 0).toLocaleString()}`, "Revenue"]}
            contentStyle={{
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
            }}
          />
          <Line type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
