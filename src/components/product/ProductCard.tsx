import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const image =
    product.photoLink1 ||
    product.photo_url ||
    "/images/auth-logo.jpg";

  const slug = product.subProductId || product.id.toString();

  const inStock = true;

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-gray-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Product Image */}

      <Link href={`/product/${slug}`}>
        <div
          className="
            relative
            flex
            h-[220px]
            items-center
            justify-center
            overflow-hidden
            bg-white
            p-4
          "
        >
          <Image
            src={image}
            alt={product.productName}
            width={260}
            height={260}
            className="
              max-h-[170px]
              w-auto
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </Link>

      {/* Product Details */}

      <div className="border-t border-gray-100 px-4 py-4">
        <Link
          href={`/product/${slug}`}
          className="
            block
            h-12
            overflow-hidden
            text-base
            font-medium
            leading-6
            text-gray-900
            transition
            hover:text-[#22668B]
          "
        >
          {product.productName}
        </Link>

        {product.mainCategories && (
          <p className="mt-1 text-xs text-gray-500 truncate">
            {product.mainCategories}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-[#22668B]">
            ₹{product.telegramPrice}
          </p>

          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}