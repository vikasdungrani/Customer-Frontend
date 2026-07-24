export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">

        <div>
          <h3 className="font-bold mb-3">Holiday Wholesale</h3>
          <p className="text-sm text-gray-400">
            Wholesale ecommerce platform for resellers & dropshippers.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Electronics</li>
            <li>Kitchen</li>
            <li>Fashion</li>
            <li>Beauty</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <p className="text-sm text-gray-400">
            support@univershopper.in
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-4">
        © 2025 Univershopper. All rights reserved.
      </div>
    </footer>
  );
}
