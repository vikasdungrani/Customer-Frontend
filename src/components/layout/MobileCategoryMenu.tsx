"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import useCategories from "@/hooks/useCategories";

export default function MobileCategoryMenu() {
  const { categories, loading } = useCategories();

  const [open, setOpen] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <div className="px-4 py-3 text-sm text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <>
      {categories.map((category) => {
        const expanded = open === category.id;

        return (
          <div
            key={category.id}
            className="border-b"
          >
            <button
              onClick={() =>
                category.sub_categories.length > 0
                  ? toggleCategory(category.id)
                  : null
              }
              className="
                flex
                w-full
                items-center
                justify-between
                px-4
                py-2.5
                text-left
                text-[15px]
                font-medium
                text-gray-700
                transition
                hover:bg-gray-50
              "
            >
              <span>{category.name}</span>

              {category.sub_categories.length > 0 &&
                (expanded ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                ))}
            </button>

            {expanded && (
              <div className="bg-gray-50">
                {category.sub_categories.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/shop?subcategory=${sub.id}`}
                    className="
                      block
                      border-t
                      border-gray-100
                      py-2
                      pl-8
                      pr-4
                      text-[14px]
                      text-gray-600
                      transition
                      hover:bg-white
                      hover:text-[#22668B]
                    "
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}