//src/app/components/common/Breadcrumb.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title?: string;
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  title,
  items,
}: BreadcrumbProps) {
  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <Container>
        <div className={title ? "py-6" : "py-2"}>
          {title && (
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              {title}
            </h1>
          )}

          <nav className="flex flex-wrap items-center text-sm text-gray-500">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#22668B]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-900">
                    {item.label}
                  </span>
                )}

                {index !== items.length - 1 && (
                  <ChevronRight
                    size={16}
                    className="mx-2"
                  />
                )}
              </div>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}