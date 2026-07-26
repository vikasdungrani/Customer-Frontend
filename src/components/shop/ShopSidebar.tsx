"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const categories = [
  {
    name: "All Products",
    children: [],
  },
  {
    name: "Trending Products",
    children: [],
  },
  {
    name: "Home & Living",
    children: [
      "Home & Kitchen",
      "Home Decor",
      "Furniture",
      "Bathroom Accessories",
      "Wallpaper",
      "Lighting & Torches",
    ],
  },
  {
    name: "Kitchen & Dining",
    children: [
      "Glass & Tableware",
      "Stainless Steel Products",
      "Bottles & Drinkware",
      "Picnic Products",
    ],
  },
  {
    name: "Electronics",
    children: [
      "Electronics",
      "Mobile Accessories",
      "Computer Accessories",
      "Electrical Accessories",
      "Humidifiers",
      "Clocks",
      "Night Lamps",
      "Weight Scales",
    ],
  },
  {
    name: "Automotive",
    children: [
      "Car Accessories",
      "Bike Accessories",
      "Safety Products",
    ],
  },
  {
    name: "Fashion",
    children: [
      "Fashion",
      "Bags & Luggage",
      "Bag Covers",
      "Umbrellas",
      "Hair Brushes",
      "Masks",
    ],
  },
  {
    name: "Beauty & Personal Care",
    children: [
      "Beauty",
      "Cosmetics",
      "Skin Care",
      "Health & Wellness",
      "Massage Products",
      "Wipes",
    ],
  },
  {
    name: "Baby & Kids",
    children: [
      "Baby Products",
      "Toys & Games",
      "Soft Toys",
      "Kids Stationery",
    ],
  },
  {
    name: "Sports & Outdoors",
    children: [
      "Sports, Fitness & Exercise",
      "Garden & Outdoor",
      "Travel Accessories",
    ],
  },
  {
    name: "Office & School",
    children: [
      "Office & Stationery",
      "Craft Supplies",
    ],
  },
  {
    name: "Cleaning & Storage",
    children: [
      "Cleaning Products",
      "All Purpose Cleaners",
      "Packing Material",
      "Hardware Products",
    ],
  },
  {
    name: "Seasonal",
    children: [
      "Summer Essentials",
      "Monsoon & Rain Gear",
      "Winter Essentials",
      "Holi",
    ],
  },
  {
    name: "Pet Supplies",
    children: [],
  },
];

export default function ShopSidebar() {
  const [open, setOpen] = useState<string | null>(null);

  const toggleCategory = (name: string) => {
    setOpen((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="space-y-8">
      {/* Categories */}

      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="mb-5 text-xl font-semibold">
          Browse Categories
        </h3>

        <ul className="space-y-1">
          {categories.map((category) => {
            const expanded = open === category.name;

            return (
              <li key={category.name}>
                <button
                  onClick={() =>
                    category.children.length && toggleCategory(category.name)
                  }
                  className={`flex w-full items-center gap-2 rounded-lg px-2 py-3 transition-all duration-200
                  ${
                    expanded
                      ? "bg-gray-50 text-[#22668B]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#22668B]"
                  }`}
                >
                  {category.children.length > 0 ? (
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
                    expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {category.children.length > 0 && (
                    <ul className="ml-4 border-l border-gray-200 pl-5">
                      {category.children.map((child) => (
                        <li key={child}>
                          <button className="block w-full rounded-md py-2 text-left text-sm text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-[#22668B]">
                            {child}
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
      </div>

      {/* Price */}

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