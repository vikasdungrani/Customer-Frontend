"use client";

interface Props {
  page: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  total,
  pageSize,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded border px-4 py-2 disabled:opacity-40"
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      )
        .slice(
          Math.max(0, page - 3),
          Math.min(totalPages, page + 2)
        )
        .map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`rounded px-4 py-2 ${
              number === page
                ? "bg-[#22668B] text-white"
                : "border"
            }`}
          >
            {number}
          </button>
        ))}

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="rounded border px-4 py-2 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}