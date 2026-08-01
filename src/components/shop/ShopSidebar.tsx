//src/components/shop/ShopSidebar.tsx

"use client";

import { useEffect, useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

import { getMainCategories } from "@/services/category.service";
import useCategories from "@/hooks/useCategories";
import { MainCategory } from "@/types/category";


export default function ShopSidebar() {
  const {
    categories,
    loading,
  } = useCategories();

  const [open, setOpen] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <aside className="space-y-8">
      {/* Categories */}

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="mb-5 text-xl font-semibold">
          Browse Categories
        </h3>

        {loading ? (
          <div className="py-4 text-sm text-gray-500">
            Loading categories...
          </div>
        ) : (
          <ul className="space-y-1">
            {categories.map((category) => {
              const expanded = open === category.id;

              return (
                <li key={category.id}>
                  <button
                    onClick={() =>
                      category.sub_categories.length > 0 &&
                      toggleCategory(category.id)
                    }
                    className={`flex w-full items-center gap-2 rounded-lg px-2 py-3 transition-all duration-200
                    ${
                      expanded
                        ? "bg-gray-50 text-[#22668B]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#22668B]"
                    }`}
                  >
                    {category.sub_categories.length > 0 ? (
                      expanded ? (
                        <ChevronDown size={16} className="shrink-0" />
                      ) : (
                        <ChevronRight size={16} className="shrink-0" />
                      )
                    ) : (
                      <span className="w-4" />
                    )}

                    <span>{category.name}</span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {category.sub_categories.length > 0 && (
                      <ul className="ml-4 border-l border-gray-200 pl-5">
                        {category.sub_categories.map((child) => (
                          <li key={child.id}>
                            <button className="block w-full rounded-md py-2 text-left text-sm text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-[#22668B]">
                              {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Price Filter */}

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-xl font-semibold">
          Price Filter
        </h3>

        <input
          type="range"
          min={0}
          max={1000}
          className="w-full accent-[#22668B]"
        />

        <div className="mt-4 text-sm text-gray-500">
          Price : ₹0 — ₹1000
        </div>
      </div>
    </aside>
  );
}