// //components/layout/Navbar.tsx
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   Search,
//   Heart,
//   ShoppingCart,
//   User,
//   Menu,
//   ChevronDown,
// } from "lucide-react";
// import { useState } from "react";
// import CategoryMegaMenu from "./CategoryMegaMenu";

// const menus = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "Shop",
//     href: "/shop",
//     children: [
//       {
//         title: "Shop Category",
//         href: "/shop",
//       },
//       {
//         title: "Product Details",
//         href: "/product/demo",
//       },
//       {
//         title: "Checkout",
//         href: "/checkout",
//       },
//       {
//         title: "Cart",
//         href: "/cart",
//       },
//     ],
//   },
//   {
//     title: "Blog",
//     href: "/blog",
//     children: [
//       {
//         title: "Blog",
//         href: "/blog",
//       },
//       {
//         title: "Blog Details",
//         href: "/blog/demo",
//       },
//     ],
//   },
//   {
//     title: "Pages",
//     href: "#",
//     children: [
//       {
//         title: "Tracking",
//         href: "/tracking",
//       },
//       {
//         title: "Elements",
//         href: "/elements",
//       },
//     ],
//   },
//   {
//     title: "Contact",
//     href: "/contact",
//   },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="mx-auto max-w-350 px-6">

//         <div className="flex h-13 items-center justify-between">

//           {/* Logo */}

//           <Link href="/" className="flex items-center">

//             <Image
//               src="/images/logo.png"
//               alt="Univershopper"
//               width={800}
//               height={150}
//               className="h-13 w-auto"
//               priority
//             />

//           </Link>

//           {/* Desktop Menu */}

//           <nav className="hidden lg:flex items-center gap-5">

//             <Link
//               href="/"
//               className="text-[14px] font-medium hover:text-[#22668B]"
//             >
//               Home
//             </Link>

//             <CategoryMegaMenu />

//             {/* <Link
//               href="/shop"
//               className="text-[14px] font-medium hover:text-[#22668B]"
//             >
//               Shop
//             </Link> */}

//             <Link
//               href="/blog"
//               className="text-[14px] font-medium hover:text-[#22668B]"
//             >
//               Blog
//             </Link>

//             <Link
//               href="/contact"
//               className="text-[14px] font-medium hover:text-[#22668B]"
//             >
//               Contact
//             </Link>

//           </nav>

//           {/* Right Icons */}

//           <div className="hidden lg:flex items-center gap-4">

//             <button>
//               <Search
//                 size={18}
//                 className="hover:text-[#22668B]"
//               />
//             </button>

//             <button className="relative">

//               <Heart
//                 size={18}
//                 className="hover:text-[#22668B]"
//               />

//               <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22668B] text-[10px] text-white">
//                 0
//               </span>

//             </button>

//             <button className="relative">

//               <ShoppingCart
//                 size={18}
//                 className="hover:text-[#22668B]"
//               />

//               <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22668B] text-[10px] text-white">
//                 0
//               </span>

//             </button>

//             <button>

//               <User
//                 size={18}
//                 className="hover:text-[#22668B]"
//               />

//             </button>

//           </div>

//           {/* Mobile */}

//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="lg:hidden"
//           >
//             <Menu size={28} />
//           </button>

//         </div>

//       </div>

//       {/* Mobile Menu */}

//       {mobileOpen && (
//         <div className="border-t bg-white lg:hidden">

//           {menus.map((menu) => (
//             <Link
//               key={menu.title}
//               href={menu.href}
//               className="block border-b px-6 py-4 text-sm"
//             >
//               {menu.title}
//             </Link>
//           ))}

//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";
import { useState } from "react";

import CategoryMegaMenu from "./CategoryMegaMenu";
import Container from "./Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">

      <Container>

        <div className="flex h-14 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src="/images/logo.png"
              alt="Univershopper"
              width={800}
              height={150}
              className="h-12 w-auto"
              priority
            />

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-6 lg:flex">

            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-[#22668B]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-sm font-medium text-gray-700 transition hover:text-[#22668B]"
            >
              All Categories
            </Link>

            <CategoryMegaMenu />

            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 transition hover:text-[#22668B]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-[#22668B]"
            >
              Contact
            </Link>

          </nav>

          {/* Right Icons */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="transition hover:text-[#22668B]">
              <Search size={18} />
            </button>

            <button className="relative transition hover:text-[#22668B]">

              <Heart size={18} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22668B] text-[10px] text-white">
                0
              </span>

            </button>

            <button className="relative transition hover:text-[#22668B]">

              <ShoppingCart size={18} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22668B] text-[10px] text-white">
                0
              </span>

            </button>

            <button className="transition hover:text-[#22668B]">
              <User size={18} />
            </button>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={28} />
          </button>

        </div>

      </Container>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">

          <Link
            href="/"
            className="block border-b px-6 py-4 text-sm"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="block border-b px-6 py-4 text-sm"
          >
            All Categories
          </Link>

          <Link
            href="/blog"
            className="block border-b px-6 py-4 text-sm"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="block px-6 py-4 text-sm"
          >
            Contact
          </Link>

        </div>
      )}

    </header>
  );
}