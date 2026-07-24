const categories = [
  "All Products",
  "Packing Material",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Toys",
  "Hardware",
  "Mobile Accessories",
  "Bathroom Accessories",
  "Garden & Outdoor",
];

export default function CategorySidebar() {
  return (
    <div className="bg-white border rounded p-4">
      <h3 className="font-semibold mb-4 text-lg">Categories</h3>

      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="text-sm text-gray-700 hover:text-green-600 cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
