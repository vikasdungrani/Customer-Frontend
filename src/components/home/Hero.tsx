import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#F8FAFC] to-[#EEF7FF]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center px-6 py-20 lg:flex-row">

        {/* Left */}

        <div className="w-full lg:w-1/2">

          <span className="rounded-full bg-[#22668B]/10 px-4 py-2 text-sm font-semibold text-[#22668B]">
            Welcome to Univershopper
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Discover Amazing
            <span className="block text-[#22668B]">
              Everyday Products
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Shop quality household products, kitchen essentials,
            stationery, toys and lifestyle accessories with
            modern design and affordable prices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/shop"
              className="rounded-xl bg-[#22668B] px-8 py-4 font-semibold text-white transition hover:bg-[#184f6c]"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:border-[#22668B] hover:text-[#22668B]"
            >
              Browse Categories
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="mb-12 flex w-full justify-center lg:mb-0 lg:w-1/2">

          <Image
            src="/hero/hero.png"
            alt="Univershopper"
            width={700}
            height={600}
            priority
            className="w-full max-w-xl object-contain"
          />

        </div>

      </div>
    </section>
  );
}