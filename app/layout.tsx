import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import dynamic from "next/dynamic";
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
const StarsCanvas = dynamic(() => import("@/components/main/star-background").then((mod) => mod.StarsCanvas), {
  ssr: false,
});
import { ScrollToTop } from "@/components/sub/scroll-to-top";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/main/smooth-scroll";
import { CommandPalette } from "@/components/main/command-palette";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = {
  ...siteConfig,
  metadataBase: new URL("https://shivampawar.dev"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Shivam Pawar | Full Stack Developer",
    description: "Welcome to my portfolio site. Exploring the boundaries of modern web development.",
    url: "https://shivampawar.dev",
    siteName: "Shivam Pawar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Pawar | Full Stack Developer",
    description: "Welcome to my portfolio site.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shivam Pawar",
              "url": "https://shivampawar.dev",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://github.com/Shivam154CO",
                "https://www.linkedin.com/in/shivampawar18/",
                "https://www.instagram.com/konshivammm_18/"
              ]
            })
          }}
        />
        <CommandPalette />
        <ScrollToTop />
        <StarsCanvas />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
