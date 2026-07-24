import ProductInfo from "@/components/product/ProductInfo";

// import { products } from "@/data/products";
import Breadcrumb from "@/components/common/Breadcrumb";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {

  const { slug } = await params;

  const product =
    products.find(
      (item) => item.slug === slug
    ) ?? products[0];

  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-6">

        <Breadcrumb
          title={product.name}
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Shop",
              href: "/shop",
            },
            {
              label: product.name,
            },
          ]}
        />

        <div className="grid gap-16 lg:grid-cols-2">

          <ProductGallery
            images={product.images}
          />

          <ProductInfo
            product={product}
          />

        </div>

      </div>

    </section>
  );
}
