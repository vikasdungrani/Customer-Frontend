"use client";

import { useEffect, useState } from "react";
import {
  getProducts,
  ProductListResponse,
  ProductQueryParams,
} from "@/services/product.service";

export function useProducts(params?: ProductQueryParams) {
  const [data, setData] = useState<ProductListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        const response = await getProducts(params);

        if (mounted) {
          setData(response);
        }
      } catch (err) {
        if (mounted) {
          setError(err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [JSON.stringify(params)]);

  return {
    data,
    loading,
    error,
  };
}