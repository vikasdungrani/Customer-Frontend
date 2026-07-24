import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  title,
  items,
}: BreadcrumbProps) {
  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          {/* Page Title */}

          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>

          {/* Breadcrumb */}

          <nav className="flex flex-wrap items-center text-sm text-gray-500">

            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition hover:text-[#22668B]"
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

      </div>
    </section>
  );
}