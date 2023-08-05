import "@/styles/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/header";

/**
 * Use Inter as the default font.
 */
const inter = Inter({subsets: ["latin"]});

/**
 * Define metadata for the entire site.
 */
export const metadata: Metadata = {
  title: "Foo Bar",
};

/**
 * The layout used for all pages.
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
