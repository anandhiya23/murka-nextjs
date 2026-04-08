import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

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
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${bebasNeue.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
