//src/components/shop/ShopSidebar.tsx

"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

import useCategories from "@/hooks/useCategories";

interface Props {
  selectedCategory?: number | null;
  selectedSubCategory?: number | null;

  onCategorySelect?: (id: number | null) => void;
  onSubCategorySelect?: (id: number | null) => void;
}

export default function ShopSidebar({
  selectedCategory,
  selectedSubCategory,
  onCategorySelect,
  onSubCategorySelect,
}: Props) {
  const { categories, loading } = useCategories();

  const [open, setOpen] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    // Expand / Collapse
    setOpen((prev) => (prev === categoryId ? null : categoryId));

    // Filter Main Category
    onCategorySelect?.(categoryId);

    // Clear selected Sub Category
    onSubCategorySelect?.(null);
  };

  const handleSubCategoryClick = (subId: number) => {
    onSubCategorySelect?.(subId);
  };

  return (
    <aside className="space-y-8">
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

                  {/* MAIN CATEGORY */}

                  <button
                    onClick={() =>
                      handleCategoryClick(category.id)
                    }
                    className={`flex w-full items-center gap-2 rounded-lg px-2 py-3 transition-all

                      ${
                        selectedCategory === category.id
                          ? "bg-[#22668B] text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#22668B]"
                      }
                    `}
                  >

                    {category.sub_categories.length > 0 ? (
                      expanded ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )
                    ) : (
                      <span className="w-4" />
                    )}

                    <span>{category.name}</span>

                  </button>

                  {/* SUB CATEGORIES */}

                  <div
                    className={`overflow-hidden transition-all duration-300

                    ${
                      expanded
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                  >

                    {category.sub_categories.length > 0 && (

                      <ul className="ml-4 border-l border-gray-200 pl-5">

                        {category.sub_categories.map((child) => (

                          <li key={child.id}>

                            <button
                              onClick={() =>
                                handleSubCategoryClick(child.id)
                              }
                              className={`block w-full rounded-md py-2 text-left text-sm transition-all

                              ${
                                selectedSubCategory === child.id
                                  ? "font-semibold text-[#22668B]"
                                  : "text-gray-500 hover:translate-x-1 hover:text-[#22668B]"
                              }
                            `}
                            >
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