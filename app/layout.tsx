import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitepace",
  description: "Whitepace Project Management Software",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/fav-light.svg",
        href: "/fav-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/fav-dark.svg",
        href: "/fav-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
