//src/app/lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts() {
  const res = await fetch(
    `${API_BASE}/api/customer/products/`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function fetchProduct(slug: string) {
  const res = await fetch(
    `${API_BASE}/api/customer/products/${slug}/`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}