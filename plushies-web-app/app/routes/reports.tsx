import type { Route } from "./+types/reports";
import { getReportsData } from "~/api/reports";
import MonthlyRevenueChart, { type MonthlyRevenuePoint } from "~/components/charts/monthly-revenue-chart";
import ProductRarityChart, { type ProductRarityPoint } from "~/components/charts/product-rarity-chart";
import TopCustomersSpendChart, { type TopCustomerSpendPoint } from "~/components/charts/top-customers-spend-chart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Plushies R Us" },
    { name: "description", content: "Reporting for Plushies R Us" },
  ];
}

export async function loader() {
  return getReportsData();
}

function toCurrencyNumber(value: string): number {
  const numericValue = Number(value.replace(/[^0-9.-]+/g, ""));
  return Number.isFinite(numericValue) ? numericValue : 0;
}

function buildMonthlyRevenueData(loaderData: Route.ComponentProps["loaderData"]): MonthlyRevenuePoint[] {
  const revenueByMonth = new Map<string, number>();

  loaderData.purchases.forEach((purchase) => {
    const date = new Date(purchase.purchase_date);
    if (Number.isNaN(date.getTime())) {
      return;
    }

    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const currentRevenue = revenueByMonth.get(monthKey) ?? 0;
    revenueByMonth.set(monthKey, currentRevenue + toCurrencyNumber(purchase.amount));
  });

  return Array.from(revenueByMonth.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([month, revenue]) => ({ month, revenue }));
}

function buildTopCustomerSpendData(loaderData: Route.ComponentProps["loaderData"]): TopCustomerSpendPoint[] {
  const customerNames = new Map(loaderData.customers.map((customer) => [customer.id, customer.full_name]));
  const spendByCustomer = new Map<number, number>();

  loaderData.purchases.forEach((purchase) => {
    const currentSpend = spendByCustomer.get(purchase.customer_id) ?? 0;
    spendByCustomer.set(purchase.customer_id, currentSpend + toCurrencyNumber(purchase.amount));
  });

  return Array.from(spendByCustomer.entries())
    .map(([customerId, spend]) => ({
      customer: customerNames.get(customerId) ?? `Customer #${customerId}`,
      spend,
    }))
    .sort((a, b) => b.spend - a.spend)
    .slice(0, 8);
}

function buildProductRarityData(loaderData: Route.ComponentProps["loaderData"]): ProductRarityPoint[] {
  const rareCount = loaderData.products.filter((product) => product.rare).length;
  const standardCount = loaderData.products.length - rareCount;

  return [
    { name: "Rare", value: rareCount },
    { name: "Standard", value: standardCount },
  ];
}

export default function Reports({ loaderData }: Route.ComponentProps) {
  const monthlyRevenueData = buildMonthlyRevenueData(loaderData);
  const topCustomerSpendData = buildTopCustomerSpendData(loaderData);
  const productRarityData = buildProductRarityData(loaderData);

  return (
    <main className="theme-container theme-section">
      <section className="theme-card theme-card-padded theme-shadow-md mb-6">
        <h1 className="mb-4 text-4xl font-bold theme-text-primary">Reports</h1>
        <p className="mb-6 text-lg theme-text-muted">Data loaded from the backend API.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide theme-text-muted">Customers</h2>
            <p className="mt-2 text-3xl font-bold theme-text-primary">{loaderData.customers.length}</p>
          </article>

          <article className="rounded-lg border p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide theme-text-muted">Products</h2>
            <p className="mt-2 text-3xl font-bold theme-text-primary">{loaderData.products.length}</p>
          </article>

          <article className="rounded-lg border p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide theme-text-muted">Product Packages</h2>
            <p className="mt-2 text-3xl font-bold theme-text-primary">{loaderData.productPackages.length}</p>
          </article>

          <article className="rounded-lg border p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide theme-text-muted">Purchases</h2>
            <p className="mt-2 text-3xl font-bold theme-text-primary">{loaderData.purchases.length}</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <MonthlyRevenueChart data={monthlyRevenueData} />
        <ProductRarityChart data={productRarityData} />
      </section>

      <section className="mt-6">
        <TopCustomersSpendChart data={topCustomerSpendData} />
      </section>
    </main>
  );
}
