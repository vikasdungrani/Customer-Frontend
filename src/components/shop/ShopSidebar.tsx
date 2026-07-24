"use client";

const categories = [
  "All Products",
  "Trending Products",
  "Car Accessories",
  "Safety Products",
  "Home & Kitchen",
  "Massage Products",
  "Beauty Products",
  "Clock",
  "Humidifier",
  "Packing Material",
  "Baby Products",
  "Fashion Products",
  "Bags",
  "Bathroom Accessories",
  "Hardware Products",
  "Mask",
  "Garden & Outdoor",
  "Umbrella",
  "Exercise Products",
  "Mobile Accessories",
  "Kids Toys",
  "Home Decor",
  "Stainless Steel Products",
  "Picnic",
  "Electric Products",
  "Office & Stationery",
  "Winter Products",
  "Craft Products",
  "Cleaning Products",
  "Bottle Products",
  "Furniture",
  "Summer Products",
  "Computer Products",
  "Bag Cover",
  "Kids Stationery",
  "Wipes Products",
  "Pet Products",
  "Soft Toys",
  "Glass Products",
  "Holi Products",
  "Night Lamp",
  "Wallpaper",
  "Travel Products",
  "Hair Brushes",
  "Rain Season Products",
  "Skin Care",
];

const brands = [
  "Apple",
  "Asus",
  "Gionee",
  "Micromax",
  "Samsung",
];

const colors = [
  "Black",
  "Black Leather",
  "Black with Red",
  "Gold",
  "Space Grey",
];

export default function ShopSidebar() {
  return (
    <aside className="space-y-8">

      {/* Categories */}

      <div className="rounded-lg border border-gray-200 bg-white p-4">

        <h3 className="mb-6 text-xl font-semibold">
          Browse Categories
        </h3>

        <ul className="space-y-4">

          {categories.map((item) => (
            <li key={item}>
              <button
                className="w-full text-left text-gray-600 transition hover:text-[#22668B]"
              >
                {item}
              </button>
            </li>
          ))}

        </ul>

      </div>

      {/* Brands */}

      {/* <div className="rounded-lg border border-gray-200 bg-white p-6">

        <h3 className="mb-6 text-xl font-semibold">
          Product Brand
        </h3>

        <ul className="space-y-4">

          {brands.map((item) => (
            <li key={item}>

              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="radio"
                  name="brand"
                  className="h-4 w-4 accent-[#22668B]"
                />

                <span className="text-gray-600">
                  {item}
                </span>

              </label>

            </li>
          ))}

        </ul>

      </div> */}

      {/* Colors */}

      <div className="rounded-lg border border-gray-200 bg-white p-6">

        <h3 className="mb-6 text-xl font-semibold">
          Color Filter
        </h3>

        <ul className="space-y-4">

          {colors.map((item) => (
            <li key={item}>

              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="radio"
                  name="color"
                  className="h-4 w-4 accent-[#22668B]"
                />

                <span className="text-gray-600">
                  {item}
                </span>

              </label>

            </li>
          ))}

        </ul>

      </div>

      {/* Price */}

      <div className="rounded-lg border border-gray-200 bg-white p-6">

        <h3 className="mb-6 text-xl font-semibold">
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