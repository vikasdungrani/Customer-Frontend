// "use client";

// import { Grid3X3, List } from "lucide-react";

// interface ProductToolbarProps {
//   totalProducts: number;
//   pageSize: number;
//   sortBy: string;
//   onPageSizeChange?: (value: number) => void;
//   onSortChange?: (value: string) => void;
// }

// export default function ProductToolbar({
//   totalProducts,
//   pageSize,
//   sortBy,
//   onPageSizeChange,
//   onSortChange,
// }: ProductToolbarProps) {
//   return (
//     <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 md:flex-row md:items-center md:justify-between">

//       {/* Left */}

//       <div className="flex flex-wrap items-center gap-3">

//         <select
//           value={sortBy}
//           onChange={(e) => onSortChange?.(e.target.value)}
//           className="h-11 rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#22668B]"
//         >
//           <option value="default">Default Sorting</option>
//           <option value="newest">Newest</option>
//           <option value="price_low">Price : Low to High</option>
//           <option value="price_high">Price : High to Low</option>
//           <option value="name">Product Name</option>
//         </select>

//         <select
//           value={pageSize}
//           onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
//           className="h-11 rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#22668B]"
//         >
//           <option value={12}>Show 12</option>
//           <option value={24}>Show 24</option>
//           <option value={48}>Show 48</option>
//           <option value={96}>Show 96</option>
//         </select>

//       </div>

//       {/* Right */}

//       <div className="flex items-center gap-5">

//         <span className="text-sm text-gray-500">
//           {totalProducts} Products
//         </span>

//         <div className="flex overflow-hidden rounded-lg border border-gray-300">

//           <button
//             className="flex h-11 w-11 items-center justify-center bg-[#22668B] text-white"
//           >
//             <Grid3X3 size={18} />
//           </button>

//           <button
//             className="flex h-11 w-11 items-center justify-center bg-white hover:bg-gray-100"
//           >
//             <List size={18} />
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import { Grid3X3, List } from "lucide-react";

interface ProductToolbarProps {
  totalProducts: number;
  page: number;
  pageSize: number;
  sortBy: string;

  onPageSizeChange?: (value: number) => void;
  onSortChange?: (value: string) => void;
}

export default function ProductToolbar({
  totalProducts,
  page,
  pageSize,
  sortBy,
  onPageSizeChange,
  onSortChange,
}: ProductToolbarProps) {
  const start =
    totalProducts === 0
      ? 0
      : (page - 1) * pageSize + 1;

  const end = Math.min(
    page * pageSize,
    totalProducts
  );

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex flex-wrap items-center gap-3">

          <select
            value={sortBy}
            onChange={(e) =>
              onSortChange?.(e.target.value)
            }
            className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#22668B]"
          >
            <option value="default">
              Default Sorting
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="price_low">
              Price: Low to High
            </option>

            <option value="price_high">
              Price: High to Low
            </option>

            <option value="name">
              Product Name
            </option>
          </select>

          <select
            value={pageSize}
            onChange={(e) =>
              onPageSizeChange?.(
                Number(e.target.value)
              )
            }
            className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#22668B]"
          >
            <option value={12}>Show 12</option>
            <option value={24}>Show 24</option>
            <option value={48}>Show 48</option>
            <option value={96}>Show 96</option>
          </select>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center justify-between gap-4">

          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {start}-{end}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
              {totalProducts}
            </span>{" "}
            products
          </p>

          <div className="flex overflow-hidden rounded-lg border border-gray-300">

            <button
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                bg-[#22668B]
                text-white
              "
            >
              <Grid3X3 size={18} />
            </button>

            <button
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                bg-white
                transition
                hover:bg-gray-100
              "
            >
              <List size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}