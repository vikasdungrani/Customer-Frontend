import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-5

        md:grid-cols-3

        xl:grid-cols-4
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}