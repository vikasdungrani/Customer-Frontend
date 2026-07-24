import api from "@/libs/axios";
import { Product } from "@/types/product";

interface ProductResponse {
  count: number;
  next: string | null;
  previous: string |null;
  results: Product[];
}

interface Params {
  page?: number;
  page_size?: number;
  search?: string;
}

export async function getProducts(params: Params = {}) {
  const { data } = await api.get<ProductResponse>(
    "/api/customer/products/",
    {
      params: {
        page: params.page ?? 1,
        page_size: params.page_size ?? 24,
        search: params.search ?? "",
      },
    }
  );

  return data;
}