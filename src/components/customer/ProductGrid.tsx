const products = [
  {
    id: 1,
    name: "Laundry Pods",
    price: "₹3.00",
    image: "/demo/product1.jpg",
  },
  {
    id: 2,
    name: "Cleaning Brush",
    price: "₹5.00",
    image: "/demo/product2.jpg",
  },
  {
    id: 3,
    name: "Wall Sticker",
    price: "₹2.00",
    image: "/demo/product3.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-green-100 bg-white shadow-sm hover:shadow-xl transition duration-300 group"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-800">
              {item.name}
            </h3>

            <p className="text-lg font-bold text-green-600 mt-1">
              {item.price}
            </p>

            <button
              className="
                mt-3 w-full py-2 rounded-md text-white font-medium
                bg-gradient-to-r from-green-400 to-blue-500
                hover:from-green-500 hover:to-blue-600
                transition
              "
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
