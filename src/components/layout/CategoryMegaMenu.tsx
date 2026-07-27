"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { getMainCategories } from "@/services/category.service";

interface SubCategory {
  id: number;
  name: string;
}

interface MainCategory {
  id: number;
  name: string;
  sub_categories: SubCategory[];
}

export default function CategoryMegaMenu() {
  const [categories, setCategories] = useState<MainCategory[]>([]);

  const [loading, setLoading] = useState(true);

  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const data = await getMainCategories();

      setCategories(data);

      if (data.length > 0) {
        setActive(data[0].id);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const activeCategory =
    categories.find((c) => c.id === active) || null;

  return (
    <div className="group relative">

      {/* Menu Button */}

      <button
        className="
          flex
          items-center
          gap-1
          text-[14px]
          font-medium
          text-gray-700
          hover:text-[#22668B]
        "
      >
        Categories
        <ChevronDown size={16} />
      </button>

      {/* Mega Menu */}

      <div
        className="
          invisible
          absolute
          left-0
          top-full
          z-50
          mt-4

          h-[500px]
          w-[700px]

          overflow-hidden

          rounded-xl

          border

          border-gray-200

          bg-white

          shadow-2xl

          opacity-0

          transition-all

          duration-200

          group-hover:visible
          group-hover:opacity-100
        "
      >

        {loading ? (
          <div className="p-8">
            Loading...
          </div>
        ) : (
          <div className="grid h-full grid-cols-3">

            {/* LEFT */}

            <div className="overflow-y-auto border-r bg-gray-50">

              {categories.map((category) => (

                <button
                  key={category.id}
                  onMouseEnter={() =>
                    setActive(category.id)
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between

                    px-5
                    py-3

                    text-left
                    text-sm

                    transition

                    ${
                      active === category.id
                        ? "bg-white font-semibold text-[#22668B]"
                        : "hover:bg-white"
                    }
                  `}
                >

                  {category.name}

                  <ChevronRight size={16} />

                </button>

              ))}

            </div>

            {/* RIGHT */}

            <div className="col-span-2 p-6">

              {activeCategory && (

                <>
                  <h3 className="mb-5 text-lg font-semibold">

                    {activeCategory.name}

                  </h3>

                  <div className="grid grid-cols-2 gap-3">

                    {activeCategory.sub_categories.map(
                      (sub) => (

                        <Link
                          key={sub.id}
                          href={`/shop?category=${encodeURIComponent(
                            activeCategory.name
                          )}&subcategory=${encodeURIComponent(
                            sub.name
                          )}`}
                          className="
                            rounded-lg

                            px-3
                            py-2

                            text-sm

                            text-gray-600

                            transition

                            hover:bg-gray-100
                            hover:text-[#22668B]
                          "
                        >
                          {sub.name}
                        </Link>

                      )
                    )}

                  </div>
                </>

              )}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}