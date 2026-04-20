import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AfterAI — AI Change Intelligence",
  description: "Make AI change decisions explicit, comparable, and defensible — without sitting in your inference path.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AfterAI — AI Change Intelligence",
    description: "Make AI change decisions explicit, comparable, and defensible — without sitting in your inference path.",
    url: "https://useafter.ai",
    siteName: "AfterAI",
    images: [{ url: "https://useafter.ai/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfterAI — AI Change Intelligence",
    description: "Make AI change decisions explicit, comparable, and defensible — without sitting in your inference path.",
    images: ["https://useafter.ai/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
