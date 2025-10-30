import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Shivam Pawar",
  description: "Welcome to my full stack Next.js 14 space portfolio.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "space-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "3d-portfolio",
    "3d-website",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Shivam Pawar",
    url: "https://github.com/Shivam154CO",
  },
  icons: {
    icon: "/profile1.jpg",      // your favicon in public/vlogos.png
    shortcut: "/logos.jpg",  // optional shortcut icon
  },
} as const;
