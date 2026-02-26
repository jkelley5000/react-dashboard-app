export interface Customer {
  id: number;
  full_name: string;
  email: string;
  first_purchase_date: string | null;
}

export interface Product {
  id: number;
  product_name: string;
  description: string;
  rare: boolean;
  price: string;
}

export interface ProductPackage {
  id: number;
  package_name: string;
  products: string;
  price: string;
}

export interface Purchase {
  id: number;
  purchase_date: string;
  customer_id: number;
  items: string;
  amount: string;
}

export interface ReportsData {
  customers: Customer[];
  products: Product[];
  productPackages: ProductPackage[];
  purchases: Purchase[];
}

const REPORTS_API_BASE_URL =
  (import.meta.env.VITE_REPORTS_API_BASE_URL as string | undefined) ?? "http://localhost:5279";

async function fetchReportsApi<T>(path: string): Promise<T> {
  const response = await fetch(`${REPORTS_API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${path}`);
  }

  return (await response.json()) as T;
}

export async function getCustomers(): Promise<Customer[]> {
  return fetchReportsApi<Customer[]>("/customers");
}

export async function getProducts(): Promise<Product[]> {
  return fetchReportsApi<Product[]>("/products");
}

export async function getProductPackages(): Promise<ProductPackage[]> {
  return fetchReportsApi<ProductPackage[]>("/product-packages");
}

export async function getPurchases(): Promise<Purchase[]> {
  return fetchReportsApi<Purchase[]>("/purchases");
}

export async function getReportsData(): Promise<ReportsData> {
  const [customers, products, productPackages, purchases] = await Promise.all([
    getCustomers(),
    getProducts(),
    getProductPackages(),
    getPurchases(),
  ]);

  return {
    customers,
    products,
    productPackages,
    purchases,
  };
}
