"use client";

import { useEffect, useState } from "react";
import {
  getProducts,
  ProductResponse,
  ListParams,
} from "@/services/product.service";

export function useProducts(params?: ListParams) {
  const [data, setData] = useState<ProductResponse | null>(null);
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