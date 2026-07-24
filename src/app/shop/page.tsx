import ShopBanner from "@/components/shop/ShopBanner";
import ShopSidebar from "@/components/shop/ShopSidebar";
import ShopClient from "@/components/shop/ShopClient";

export default function ShopPage() {
  return (
    <>
      <ShopBanner
        title="Shop"
        subtitle="Browse our latest products"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-12 gap-6">

            {/* Sidebar */}

            <div className="hidden lg:block lg:col-span-3">
              <ShopSidebar />
            </div>

            {/* Products */}

            <div className="col-span-12 lg:col-span-9">
              <ShopClient />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}