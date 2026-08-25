import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get("url");

  if (!imageUrl) {
    return new Response("Missing image URL", {
      status: 400,
    });
  }

  try {
    const response = await fetch(imageUrl, {
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      return new Response("Failed to fetch image", {
        status: response.status,
      });
    }

    const contentType =
      response.headers.get("content-type") || "image/jpeg";

    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": 'attachment; filename="product-image.jpg"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Image download error:", error);

    return new Response("Image download failed", {
      status: 500,
    });
  }
}