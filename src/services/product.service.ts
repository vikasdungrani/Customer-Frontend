//src/app/services/product.service.ts
import api from "@/libs/axios";
import { Product } from "@/types/product";

export interface ProductListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

export interface ProductQueryParams {
  page?: number;
  page_size?: number;
  search?: string;
  category?: string;
  sort?: string;
}

/* ===========================
   Product List
=========================== */

export async function getProducts(
  params: ProductQueryParams = {}
) {
  const { data } =
    await api.get<ProductListResponse>(
      "/api/customer/products/",
      {
        params: {
          page: params.page ?? 1,
          page_size: params.page_size ?? 24,
          search: params.search ?? "",
          category: params.category ?? "",
          sort: params.sort ?? "",
        },
      }
    );

  return data;
}

/* ===========================
   Product Detail
=========================== */

export async function getProduct(
  slug: string
) {
  const { data } =
    await api.get<Product>(
      `/api/customer/products/${slug}/`
    );

  return data;
}