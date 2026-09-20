import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maximebene.com"),
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
    "Wireshark",
    "Nmap",
    "Scapy",
  ],
  authors: [{ name: "Maxime BENE", url: "https://www.maximebene.com" }],
  creator: "Maxime BENE",
   openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.maximebene.com",
    siteName: "Maxime BENE — Portfolio",
    title: "Maxime BENE — Développeur en reconversion cybersécurité",
    description:
      "Portfolio de Maxime BENE, spécialisation SOC N1, analyse réseau et détection d'intrusions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxime BENE — Portfolio Cybersécurité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime BENE — Portfolio Cybersécurité",
    description: "Développeur web en reconversion vers la cybersécurité (SOC N1).",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}