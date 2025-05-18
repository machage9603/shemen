import type React from "react";
import "./styles.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShemenEdge Consultancy",
  description: "coming soon page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
