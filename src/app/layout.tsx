import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Di-Max Transportation | Reliable Moving & Freight Services",
  description:
    "Di-Max Transportation offers professional moving, freight, and logistics services. Get a free quote or book your appointment today.",
  keywords: "transportation, moving, freight, logistics, Di-Max",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
