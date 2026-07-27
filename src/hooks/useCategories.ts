"use client";

import { useEffect, useState } from "react";
import { getMainCategories } from "@/services/category.service";
import { MainCategory } from "@/types/category";

export default function useCategories() {
  const [categories, setCategories] = useState<MainCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getMainCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    categories,
    loading,
    reload: load,
  };
}