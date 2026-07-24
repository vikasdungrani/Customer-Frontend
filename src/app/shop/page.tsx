import Breadcrumb from "@/components/common/Breadcrumb";
import ShopSidebar from "@/components/shop/ShopSidebar";
import ShopClient from "@/components/shop/ShopClient";

export default function ShopPage() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Shop",
          },
        ]}
      />

      <section className="pt-2 pb-8">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-12 gap-6">

            <div className="hidden lg:block lg:col-span-3">
              <ShopSidebar />
            </div>

            <div className="col-span-12 lg:col-span-9">
              <ShopClient />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}