//components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/shop",
    children: [
      {
        title: "Shop Category",
        href: "/shop",
      },
      {
        title: "Product Details",
        href: "/product/demo",
      },
      {
        title: "Checkout",
        href: "/checkout",
      },
      {
        title: "Cart",
        href: "/cart",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    children: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Blog Details",
        href: "/blog/demo",
      },
    ],
  },
  {
    title: "Pages",
    href: "#",
    children: [
      {
        title: "Tracking",
        href: "/tracking",
      },
      {
        title: "Elements",
        href: "/elements",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="flex h-13 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src="/images/logo.png"
              alt="Univershopper"
              width={800}
              height={150}
              className="h-13 w-auto"
              priority
            />

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-5">
            

            {menus.map((menu) => (
              <div
                key={menu.title}
                className="group relative"
              >
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 text-[14px] font-medium text-gray-700 hover:text-[#22668B]"
                >
                  {menu.title}

                  {menu.children && (
                    <ChevronDown size={16} />
                  )}
                </Link>

                {menu.children && (
                  <div className="invisible absolute left-0 top-full mt-5 w-48 rounded-lg bg-white shadow-xl opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">

                    {menu.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block border-b border-gray-100 px-5 py-3 text-sm hover:bg-gray-50 hover:text-[#22668B]"
                      >
                        {child.title}
                      </Link>
                    ))}

                  </div>
                )}
              </div>
            ))}

          </nav>

          {/* Right Icons */}

          <div className="hidden lg:flex items-center gap-4">

            <button>
              <Search
                size={18}
                className="hover:text-[#22668B]"
              />
            </button>

            <button className="relative">

              <Heart
                size={18}
                className="hover:text-[#22668B]"
              />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22668B] text-[10px] text-white">
                0
              </span>

            </button>

            <button className="relative">

              <ShoppingCart
                size={18}
                className="hover:text-[#22668B]"
              />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22668B] text-[10px] text-white">
                0
              </span>

            </button>

            <button>

              <User
                size={18}
                className="hover:text-[#22668B]"
              />

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            <Menu size={28} />
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">

          {menus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              className="block border-b px-6 py-4 text-sm"
            >
              {menu.title}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}