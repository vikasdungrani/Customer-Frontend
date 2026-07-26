"use client";

import { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="flex flex-col gap-5">

      {/* Main Image */}

      <div
        className="
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
              onClick={() => setSelectedImage(image)}
              className={`
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-lg
                border
                bg-white
                p-2
                transition

                ${
                  selectedImage === image
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