type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-3 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <h3 className="mt-2 font-semibold text-sm">
        {product.name}
      </h3>

      <p className="text-blue-600 font-bold">
        {product.price}
      </p>

      <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
