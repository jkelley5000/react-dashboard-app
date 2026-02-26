import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartCard from "./chart-card";

export interface TopCustomerSpendPoint {
  customer: string;
  spend: number;
}

interface TopCustomersSpendChartProps {
  data: TopCustomerSpendPoint[];
}

export default function TopCustomersSpendChart({ data }: TopCustomersSpendChartProps) {
  return (
    <ChartCard title="Top Customers by Spend" subtitle="Highest total spend across all purchases">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, left: 24, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            type="number"
            stroke="var(--color-text-muted)"
            tickFormatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <YAxis
            type="category"
            dataKey="customer"
            width={130}
            stroke="var(--color-text-muted)"
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value: number | string | undefined) => [`$${Number(value ?? 0).toLocaleString()}`, "Spend"]}
            contentStyle={{
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
            }}
          />
          <Bar dataKey="spend" fill="var(--color-primary)" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
