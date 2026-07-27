"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import useCategories from "@/hooks/useCategories";

export default function MobileCategoryMenu() {
  const { categories, loading } = useCategories();

  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {loading ? (
        <div className="px-6 py-4 text-sm text-gray-500">
          Loading...
        </div>
      ) : (
        categories.map((category) => {
          const expanded = open === category.id;

          return (
            <div key={category.id} className="border-b">

              <button
                onClick={() =>
                  setOpen(expanded ? null : category.id)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left"
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
                      className="block px-10 py-3 text-sm text-gray-600 hover:text-[#22668B]"
                    >
                      {sub.name}
                    </Link>
                  ))}

                </div>
              )}

            </div>
          );
        })
      )}
    </>
  );
}