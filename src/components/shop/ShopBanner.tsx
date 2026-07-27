import Link from "next/link";
import Container from "../layout/Container";

type ShopBannerProps = {
  title: string;
  subtitle: string;
};

export default function ShopBanner({
  title,
  subtitle,
}: ShopBannerProps) {
  return (
    <section className="border-t border-gray-100 bg-[#f6f6f6]">
      <Container>

        <div className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">

          {/* Left */}

          <div>

            <h1 className="text-4xl font-semibold text-gray-900">
              {title}
            </h1>

            <p className="mt-3 text-gray-500">
              {subtitle}
            </p>

          </div>

          {/* Right */}

          <nav className="flex items-center gap-3 text-sm text-gray-500">

            <Link
              href="/"
              className="hover:text-[#22668B]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/shop"
              className="hover:text-[#22668B]"
            >
              Shop
            </Link>


          </nav>

        </div>

      </Container>
    </section>
  );
}