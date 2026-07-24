//components/shop/ShopClient.tsx
"use client";

import { useEffect, useState } from "react";

import ProductGrid from "@/components/product/ProductGrid";
import ProductToolbar from "@/components/product/ProductToolbar";
import Pagination from "@/components/shop/Pagination";

import { getProducts } from "@/services/product.service";
import useDebounce from "@/hooks/useDebounce";

import { Product } from "@/types/product";

export default function ShopClient() {
  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState(24);

  const [sortBy, setSortBy] = useState("default");

  const [products, setProducts] = useState<Product[]>([]);

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    loadProducts();
  }, [page, pageSize, debouncedSearch]);

  async function loadProducts() {
    try {
      setLoading(true);

      const data = await getProducts({
        page,
        page_size: pageSize,
        search: debouncedSearch,
      });

      // Debug: Products without image
      const noImageProducts = data.results.filter(
        (product) =>
          !product.photoLink1 ||
          product.photoLink1.trim() === ""
      );

      if (noImageProducts.length > 0) {
        console.group(
          `❌ Products without image (${noImageProducts.length})`
        );

        console.table(
          noImageProducts.map((product) => ({
            ID: product.subProductId,
            Name: product.productName,
            Photo: product.photoLink1,
          }))
        );

        console.groupEnd();
      }

      setProducts(data.results);
      setCount(data.count);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ProductToolbar
        totalProducts={count}
        page={page}
        pageSize={pageSize}
        sortBy={sortBy}
        search={search}
        onSearchChange={setSearch}
        onPageSizeChange={setPageSize}
        onSortChange={setSortBy}
      />

      {loading ? (
        <div className="py-20 text-center">
          Loading...
        </div>
      ) : (
        <ProductGrid products={products} />
      )}

      <Pagination
        page={page}
        total={count}
        pageSize={pageSize}
        onPageChange={setPage}
      />
    </>
  );
}