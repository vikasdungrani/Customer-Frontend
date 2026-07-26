//src/app/product/[slug]/page.tsx
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import { getProduct } from "@/services/product.service";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  let product;

  try {
    product = await getProduct(slug);
  } catch (error) {
    notFound();
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          title={product.product_name}
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: product.product_name },
          ]}
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* <ProductGallery images={product.images} /> */}
          <ProductGallery
            images={[
              product.photo_link_1,
              product.photo_link_2,
              product.photo_link_3,
              product.photo_link_4,
            ]}
          />
          <ProductInfo product={product} />
        </div>
      </div>
    </section>
  );
}