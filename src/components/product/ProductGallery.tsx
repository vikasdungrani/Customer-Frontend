"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

interface Props {
  images: (string | null | undefined)[];
}

export default function ProductGallery({
  images,
}: Props) {
  const validImages = images.filter(
    (img): img is string => !!img
  );

  const fallback = "/images/no-image.png";

  const [selectedImage, setSelectedImage] = useState(
    validImages[0] || fallback
  );

  const handleDownload = () => {
    if (!selectedImage || selectedImage === fallback) return;

    const downloadUrl = `/api/download-image?url=${encodeURIComponent(
      selectedImage
    )}`;

    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "product-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Main Image */}

      <div
        className="
          relative
          flex
          h-130
          items-center
          justify-center
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-8
        "
      >

        {/* Download Button */}

        {selectedImage !== fallback && (
          <button
            type="button"
            onClick={handleDownload}
            title="Download image"
            className="
              absolute
              right-4
              top-4
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-700
              shadow-sm
              transition
              hover:bg-[#22668B]
              hover:text-white
              hover:shadow-md
            "
          >
            <Download size={18} />
          </button>
        )}

        <Image
          src={selectedImage}
          alt="Product"
          width={600}
          height={600}
          className="max-h-112.5 w-auto object-contain"
        />

      </div>

      {/* Thumbnails */}

      {validImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">

          {validImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`
                flex
                h-24
                w-24
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                bg-white
                p-2
                transition

                ${selectedImage === image
                  ? "border-[#22668B]"
                  : "border-gray-200"
                }
              `}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={80}
                height={80}
                className="max-h-16 w-auto object-contain"
              />
            </button>
          ))}

        </div>
      )}

    </div>
  );
}