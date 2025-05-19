// app/layout.tsx
import type { ReactNode } from "react";
import "./styles.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShemenEdge Consultancy",
    template: "%s | ShemenEdge Consultancy",
  },
  description:
    "Empowering businesses with strategic consulting and innovative solutions.",
  keywords: ["business consulting", "strategy", "ShemenEdge", "growth"],
  metadataBase: new URL("https://shemenedge.com"),
  alternates: {
    canonical: "https://shemenedge.com",
  },
  openGraph: {
    title: "ShemenEdge Consultancy",
    description: "Strategic business consulting to power your growth.",
    url: "https://shemenedge.com",
    siteName: "ShemenEdge Consultancy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShemenEdge logo and slogan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShemenEdge Consultancy",
    description: "Your partner in business growth.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={raleway.className}>
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ShemenEdge Consultancy",
              url: "https://shemenedge.com",
              logo: "https://shemenedge.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/shemen-edge-consultancy/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
