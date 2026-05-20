import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kleostek — Next-Gen Software Engineering",
  description:
    "Kleostek is a next-generation software engineering company delivering cutting-edge solutions in custom software, SaaS, AI/ML, cloud infrastructure, and web & mobile development. Where innovation meets execution.",
  keywords: [
    "software development",
    "SaaS",
    "AI",
    "machine learning",
    "cloud infrastructure",
    "web development",
    "mobile development",
    "tech consulting",
    "Kleostek",
  ],
  authors: [{ name: "Kleostek" }],
  openGraph: {
    title: "Kleostek — Next-Gen Software Engineering",
    description:
      "We engineer cutting-edge software solutions that transform businesses and redefine what's possible in the digital landscape.",
    type: "website",
    siteName: "Kleostek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kleostek — Next-Gen Software Engineering",
    description:
      "We engineer cutting-edge software solutions that transform businesses and redefine what's possible in the digital landscape.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
