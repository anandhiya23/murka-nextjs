import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MURKA — Where Vision Lives",
  description:
    "MURKA is a creative agency based in Indonesia, built on the belief that brands grow stronger when they create meaningful experiences. We design, build, and deliver experiences that connect people with ideas, translating strategy into impact through creativity, culture, and execution.",
  openGraph: {
    title: "MURKA — Where Vision Lives",
    description:
      "MURKA is a creative agency based in Indonesia, built on the belief that brands grow stronger when they create meaningful experiences.",
    url: "https://murka.id",
    siteName: "MURKA",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://murka.id/images/hero/hero-1.png", width: 1200, height: 630, alt: "MURKA Creative Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://murka.id/images/hero/hero-1.png"],
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
      className={`${plusJakartaSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
