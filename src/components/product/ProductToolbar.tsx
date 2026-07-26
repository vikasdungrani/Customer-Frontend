//src/app/components/product/ProductToolbar.tsx
"use client";

import { Grid3X3, List, Search } from "lucide-react";

interface ProductToolbarProps {
  totalProducts: number;
  page: number;
  pageSize: number;
  sortBy: string;

  search: string;

  onSearchChange?: (value: string) => void;
  onPageSizeChange?: (value: number) => void;
  onSortChange?: (value: string) => void;
}

export default function ProductToolbar({
  totalProducts,
  page,
  pageSize,
  sortBy,
  search,
  onSearchChange,
  onPageSizeChange,
  onSortChange,
}: ProductToolbarProps) {
  const start =
    totalProducts === 0
      ? 0
      : (page - 1) * pageSize + 1;

  const end = Math.min(
    page * pageSize,
    totalProducts
  );

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div className="flex flex-wrap items-center gap-3">

        <div className="relative min-w-65 flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search products..."
            className="h-11 w-full rounded-lg border border-gray-300 pl-11 pr-4 text-sm outline-none focus:border-[#22668B]"
          />

        </div>

        <select
          value={sortBy}
          onChange={(e) =>
            onSortChange?.(e.target.value)
          }
          className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#22668B]"
        >
          <option value="default">
            Default Sorting
          </option>

          <option value="newest">
            Newest
          </option>

          <option value="price_low">
            Price: Low to High
          </option>

          <option value="price_high">
            Price: High to Low
          </option>

          <option value="name">
            Product Name
          </option>
        </select>

        <select
          value={pageSize}
          onChange={(e) =>
            onPageSizeChange?.(
              Number(e.target.value)
            )
          }
          className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#22668B]"
        >
          <option value={12}>Show 12</option>
          <option value={24}>Show 24</option>
          <option value={48}>Show 48</option>
          <option value={96}>Show 96</option>
        </select>

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-semibold">
            {start}-{end}
          </span>{" "}
          of{" "}
          <span className="font-semibold">
            {totalProducts}
          </span>{" "}
          products
        </p>

        <div className="flex overflow-hidden rounded-lg border border-gray-300">

          <button
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                bg-[#22668B]
                text-white
              "
          >
            <Grid3X3 size={18} />
          </button>

          <button
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                bg-white
                transition
                hover:bg-gray-100
              "
          >
            <List size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}