// import { Product } from "@/types/product";

// interface Props {
//   product: Product;
// }

// export default function ProductInfo({
//   product,
// }: Props) {
//   return (
//     <div className="flex flex-col">

//       {/* Category */}

//       <span className="text-sm font-medium uppercase tracking-wider text-[#22668B]">
//         Univershopper Collection
//       </span>

//       {/* Title */}

//       <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900">
//         {product.product_name}
//       </h1>

//       {/* Price */}

//       <div className="mt-6">

//         <span className="text-4xl font-bold text-[#22668B]">
//           ₹{product.telegram_price}
//         </span>

//       </div>

//       {/* Product Information */}

//       <div className="mt-8 space-y-4 border-y border-gray-200 py-8">

//         <div className="flex">

//           <span className="w-36 font-semibold text-gray-800">
//             Product Code
//           </span>

//           <span className="text-gray-600">
//             {product.sub_product_id}
//           </span>

//         </div>

//         <div className="flex">

//           <span className="w-36 font-semibold text-gray-800">
//             Category
//           </span>

//           <span className="text-gray-600">
//             Household Products
//           </span>

//         </div>

//         <div className="flex">

//           <span className="w-36 font-semibold text-gray-800">
//             Brand
//           </span>

//           <span className="text-gray-600">
//             Univershopper
//           </span>

//         </div>

//         <div className="flex">

//           <span className="w-36 font-semibold text-gray-800">
//             Availability
//           </span>

//           <span className="font-medium text-green-600">
//             In Stock
//           </span>

//         </div>

//       </div>

//       {/* Description */}

//       <div className="mt-8">

//         <h2 className="mb-4 text-xl font-semibold text-gray-900">
//           Product Overview
//         </h2>

//         <p className="leading-8 text-gray-600">
//           Premium quality product from Univershopper.
//           Designed for everyday use with durable material,
//           attractive appearance, and practical functionality.
//           Suitable for home, kitchen, office, and personal use.
//         </p>

//       </div>

//     </div>
//   );
// }

"use client";


import { Product } from "@/types/product";
import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const mainCategories =
    product.main_category?.map((category) => category.name).join(", ") || "";

  const subCategories =
    product.sub_category?.map((category) => category.name).join(", ") || "";

  const isInStock = product.stock_status === "IN_STOCK";

  return (
    <div className="flex flex-col">

      {/* Product Name */}

      <h1 className="text-2xl font-semibold leading-tight text-gray-900">
        {product.product_name}
      </h1>

      {/* Keywords */}

      <div className="mt-4">

        <h3 className="text-sm font-semibold text-gray-800">
          Keywords
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {product.description || product.product_name}
        </p>

      </div>

      {/* Categories */}

      <div className="mt-3 flex flex-wrap gap-2">

        {product.main_category?.map((category) => (
          <span
            key={`main-${category.id}`}
            className="rounded border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600"
          >
            {category.name}
          </span>
        ))}

        {product.sub_category?.map((category) => (
          <span
            key={`sub-${category.id}`}
            className="rounded border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600"
          >
            {category.name}
          </span>
        ))}

      </div>

      {/* Divider */}

      <div className="my-5 border-t border-gray-200" />

      {/* Product Specifications */}

      <div className="grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-2 sm:gap-x-10">

        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Pdoduct ID
          </span>

          <span className="text-gray-500">
            : {product.sub_product_id || "-"}
          </span>
        </div>

        {/* <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Master ID
          </span>

          <span className="text-gray-500">
            : {product.master_product_id || "-"}
          </span>
        </div> */}


        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Size
          </span>

          <span className="text-gray-500">
            : {product.size || "-"}
          </span>
        </div>

        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Weight
          </span>

          <span className="text-gray-500">
            : {product.weight || "-"}
          </span>
        </div>

        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Color
          </span>

          <span className="text-gray-500">
            : {product.color || "-"}
          </span>
        </div>

        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Category
          </span>

          <span className="text-gray-500">
            : {mainCategories || "-"}
          </span>
        </div>

        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Sub Category
          </span>

          <span className="text-gray-500">
            : {subCategories || "-"}
          </span>
        </div>

        <div className="flex">
          <span className="w-32 font-semibold text-gray-800">
            Availability
          </span>

          <span
            className={
              isInStock
                ? "font-medium text-green-600"
                : "font-medium text-red-600"
            }
          >
            : {isInStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

      </div>

      {/* Price */}

      <div className="mt-7">

        <span className="text-2xl font-bold text-[#22668B]">
          ₹{product.telegram_price}
        </span>

      </div>

      {/* Cart Actions */}

      {isInStock && (
        <div className="mt-4 flex items-center gap-3">

          {/* Quantity */}

          <div className="flex h-9 items-center rounded border border-gray-300">

            <button
              type="button"
              onClick={() =>
                setQuantity((value) => Math.max(1, value - 1))
              }
              className="flex h-full w-8 items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              <Minus size={13} />
            </button>

            <span className="flex w-8 items-center justify-center text-sm">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                setQuantity((value) => value + 1)
              }
              className="flex h-full w-8 items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              <Plus size={13} />
            </button>

          </div>

          {/* Add To Cart */}

          <button
            type="button"
            className="h-9 rounded bg-[#22668B] px-6 text-sm font-semibold text-white transition hover:bg-[#1b526e]"
          >
            Add To Cart
          </button>

          {/* Wishlist */}

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 transition hover:border-[#22668B] hover:text-[#22668B]"
          >
            <Heart size={18} />
          </button>

        </div>
      )}

      {/* Description */}

      {product.description && (
        <div className="mt-7 border-t border-gray-200 pt-6">

          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            Product Overview
          </h2>

          <p className="text-sm leading-7 text-gray-600">
            {product.description}
          </p>

        </div>
      )}

    </div>
  );
}