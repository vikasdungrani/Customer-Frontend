// src/app/page.tsx

import ShopBanner from "@/components/shop/ShopBanner";
import ShopClient from "@/components/shop/ShopClient";

export default function HomePage() {
  return (
    <>
      <ShopBanner
        title="Univershopper"
        subtitle="Quality Products at Best Prices"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <ShopClient />
        </div>
      </section>
    </>
  );
}