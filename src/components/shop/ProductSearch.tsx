"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          py-3
          pl-11
          pr-4
          text-sm
          outline-none
          transition
          focus:border-[#22668B]
        "
      />
    </div>
  );
}