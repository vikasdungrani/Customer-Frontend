//src/app/services/product.service.ts
// src/services/product.service.ts

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

  sort?: string;

  category_id?: number | null;

  subcategory_id?: number | null;
}

export async function getProducts(
  params: ProductQueryParams = {}
) {
  const { data } = await api.get<ProductListResponse>(
    "/api/customer/products/",
    {
      params: {
        page: params.page ?? 1,
        page_size: params.page_size ?? 24,

        search: params.search ?? "",

        sort: params.sort ?? "default",

        category_id: params.category_id ?? undefined,

        subcategory_id:
          params.subcategory_id ?? undefined,
      },
    }
  );

  return data;
}

export async function getProduct(
  slug: string
) {
  const { data } = await api.get<Product>(
    `/api/customer/products/${slug}/`
  );

  return data;
}