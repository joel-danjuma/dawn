import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/navbar";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: "DAWN AI",
    url: `${process.env.NEXT_PUBLIC_URL}`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}]`}>
        <Providers>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="max-w-[2560px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
