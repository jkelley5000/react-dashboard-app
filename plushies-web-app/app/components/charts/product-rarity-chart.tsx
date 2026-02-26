import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import ChartCard from "./chart-card";

export interface ProductRarityPoint {
  name: string;
  value: number;
}

interface ProductRarityChartProps {
  data: ProductRarityPoint[];
}

const PIE_COLORS = ["var(--color-primary)", "var(--color-text-muted)"];

export default function ProductRarityChart({ data }: ProductRarityChartProps) {
  return (
    <ChartCard title="Product Rarity Mix" subtitle="Distribution of rare vs standard products">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={108} paddingAngle={3}>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number | string | undefined, name: string) => [`${value ?? 0}`, name]}
            contentStyle={{
              borderRadius: "0.75rem",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
