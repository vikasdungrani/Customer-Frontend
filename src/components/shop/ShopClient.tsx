//components/shop/ShopClient.tsx

"use client";

import { useEffect, useState } from "react";

import ProductGrid from "@/components/product/ProductGrid";
import ProductToolbar from "@/components/product/ProductToolbar";
import Pagination from "@/components/shop/Pagination";
import ShopSidebar from "@/components/shop/ShopSidebar";

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

  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [subCategoryId, setSubCategoryId] = useState<number | null>(null);

  useEffect(() => {
    loadProducts();
  }, [
    page,
    pageSize,
    debouncedSearch,
    sortBy,
    categoryId,
    subCategoryId,
  ]);

  async function loadProducts() {
    try {
      setLoading(true);

      const data = await getProducts({
        page,
        page_size: pageSize,
        search: debouncedSearch,
        sort: sortBy,
        category_id: categoryId,
        subcategory_id: subCategoryId,
      });

      setProducts(data.results);
      setCount(data.count);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-12 gap-6">

      {/* Sidebar */}

      <div className="hidden lg:block lg:col-span-3">

        <ShopSidebar
          selectedCategory={categoryId}
          selectedSubCategory={subCategoryId}
          onCategorySelect={(id) => {
            setPage(1);
            setCategoryId(id);
          }}
          onSubCategorySelect={(id) => {
            setPage(1);
            setSubCategoryId(id);
          }}
        />

      </div>

      {/* Products */}

      <div className="col-span-12 lg:col-span-9">

        <ProductToolbar
          totalProducts={count}
          page={page}
          pageSize={pageSize}
          sortBy={sortBy}
          search={search}
          onSearchChange={(value) => {
            setPage(1);
            setSearch(value);
          }}
          onPageSizeChange={(value) => {
            setPage(1);
            setPageSize(value);
          }}
          onSortChange={(value) => {
            setPage(1);
            setSortBy(value);
          }}
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

      </div>

    </div>
  );
}