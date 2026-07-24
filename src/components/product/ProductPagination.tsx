"use client";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-2">

      {/* Previous */}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          h-11
          w-11
          rounded-lg
          border
          border-gray-300
          bg-white
          text-gray-600
          transition
          hover:border-[#22668B]
          hover:text-[#22668B]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        ←
      </button>

      {/* Numbers */}

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              h-11
              w-11
              rounded-lg
              border
              transition

              ${
                currentPage === page
                  ? "border-[#22668B] bg-[#22668B] text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-[#22668B] hover:text-[#22668B]"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          h-11
          w-11
          rounded-lg
          border
          border-gray-300
          bg-white
          text-gray-600
          transition
          hover:border-[#22668B]
          hover:text-[#22668B]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        →
      </button>

    </div>
  );
}