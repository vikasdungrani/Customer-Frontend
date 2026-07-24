import { Product } from "./ProductCard";

interface Props {
  product: Product;
}

export default function ProductInfo({
  product,
}: Props) {
  return (
    <div className="flex flex-col">

      {/* Category */}

      <span className="text-sm font-medium uppercase tracking-wider text-[#22668B]">
        Univershopper Collection
      </span>

      {/* Title */}

      <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900">
        {product.name}
      </h1>

      {/* Price */}

      <div className="mt-6">

        <span className="text-4xl font-bold text-[#22668B]">
          ₹{product.price}
        </span>

      </div>

      {/* Product Information */}

      <div className="mt-8 space-y-4 border-y border-gray-200 py-8">

        <div className="flex">

          <span className="w-36 font-semibold text-gray-800">
            Product Code
          </span>

          <span className="text-gray-600">
            UH-{product.id.toString().padStart(5, "0")}
          </span>

        </div>

        <div className="flex">

          <span className="w-36 font-semibold text-gray-800">
            Category
          </span>

          <span className="text-gray-600">
            Household Products
          </span>

        </div>

        <div className="flex">

          <span className="w-36 font-semibold text-gray-800">
            Brand
          </span>

          <span className="text-gray-600">
            Univershopper
          </span>

        </div>

        <div className="flex">

          <span className="w-36 font-semibold text-gray-800">
            Availability
          </span>

          <span className="font-medium text-green-600">
            In Stock
          </span>

        </div>

      </div>

      {/* Description */}

      <div className="mt-8">

        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Product Overview
        </h2>

        <p className="leading-8 text-gray-600">
          Premium quality product from Univershopper.
          Designed for everyday use with durable material,
          attractive appearance, and practical functionality.
          Suitable for home, kitchen, office, and personal use.
        </p>

      </div>

    </div>
  );
}