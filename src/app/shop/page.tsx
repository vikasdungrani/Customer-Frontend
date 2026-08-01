//src/app/shop/page.tsx

import Breadcrumb from "@/components/common/Breadcrumb";
import ShopClient from "@/components/shop/ShopClient";
import Container from "@/components/layout/Container";

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
        {/* <div className="mx-auto max-w-7xl px-6"> */}
        <Container>

          <div className="grid grid-cols-12 gap-6">

            <div className="col-span-12 lg:col-span-9">
              <ShopClient />
            </div>

          </div>

        </Container>
      </section>
    </>
  );
}