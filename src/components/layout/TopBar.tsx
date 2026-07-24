import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-gray-50 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* Left */}

        <div className="flex items-center gap-6 text-sm text-gray-600">

          <span>
            Phone:
            <span className="ml-1 font-medium">
              +01 256 25 235
            </span>
          </span>

          <span>
            Email:
            <span className="ml-1 font-medium">
              info@eiser.com
            </span>
          </span>

        </div>

        {/* Right */}

        <div className="flex items-center gap-6 text-sm">

          <Link
            href="/gift-card"
            className="transition hover:text-[#22668B]"
          >
            Gift Card
          </Link>

          <Link
            href="/tracking"
            className="transition hover:text-[#22668B]"
          >
            Track Order
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[#22668B]"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </div>
  );
}