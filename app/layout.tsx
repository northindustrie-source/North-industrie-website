import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "North Industrie | Premium OSS for sport and business",
    template: "%s | North Industrie",
  },
  description:
    "North Industrie builds OSS, a premium platform for Brazilian Jiu-Jitsu coaches, clubs and students.",
  keywords: [
    "North Industrie",
    "OSS",
    "Brazilian Jiu-Jitsu",
    "club management",
    "athlete management",
  ],
  alternates: {
    canonical: "https://northindustrie.com",
  },
  openGraph: {
    title: "North Industrie | Premium OSS for sport and business",
    description:
      "North Industrie develops OSS, an all-in-one platform for coaches, clubs and students.",
    url: "https://northindustrie.com",
    siteName: "North Industrie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Industrie",
    description: "A premium OSS platform for modern sports teams and clubs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020202] text-zinc-100">{children}</body>
    </html>
  );
}
