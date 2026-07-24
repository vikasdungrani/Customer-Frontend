//src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Univershopper",
  description: "Univershopper Online Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        <Header />

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}