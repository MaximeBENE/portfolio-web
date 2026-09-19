import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-web-gules-nu.vercel.app"),
  title: {
    default: "Maxime BENE — Développeur en reconversion cybersécurité",
    template: "%s | Maxime BENE",
  },
  description:
    "Portfolio de Maxime BENE, développeur web en reconversion vers la cybersécurité. Spécialisation SOC N1, analyse réseau et détection d'intrusions.",
  keywords: [
    "cybersécurité",
    "SOC N1",
    "analyste SOC",
    "réseau",
    "Python",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Maxime BENE" }],
  creator: "Maxime BENE",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-web-gules-nu.vercel.app",
    siteName: "Maxime BENE — Portfolio",
    title: "Maxime BENE — Développeur en reconversion cybersécurité",
    description:
      "Portfolio de Maxime BENE, spécialisation SOC N1, analyse réseau et détection d'intrusions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime BENE — Portfolio Cybersécurité",
    description: "Développeur web en reconversion vers la cybersécurité (SOC N1).",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}