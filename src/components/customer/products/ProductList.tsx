import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laundry Pods", price: "₹3.00", image: "/demo/product1.jpg" },
  { id: 2, name: "Cleaning Brush", price: "₹5.00", image: "/demo/product2.jpg" },
  { id: 3, name: "Wall Sticker", price: "₹2.00", image: "/demo/product3.jpg" },
  { id: 4, name: "Kitchen Tool", price: "₹8.00", image: "/demo/product4.jpg" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
