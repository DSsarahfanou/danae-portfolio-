import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sarah Danaé FANOU — Développeuse Web & Designer Graphique",
    template: "%s — Sarah Danaé FANOU",
  },
  description: site.description,
  keywords: [
    "Sarah Danaé Fanou",
    "développeuse web Bénin",
    "designer graphique Bénin",
    "Laravel",
    "Next.js",
    "React",
    "portfolio développeuse",
    "Danae's Creations",
    "Abomey-Calavi",
    "Cotonou",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: site.url,
    siteName: site.name,
    title: "Sarah Danaé FANOU — Développeuse Web & Designer Graphique",
    description: site.description,
    images: [
      {
        url: "/images/profile/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah Danaé FANOU, développeuse web et designer graphique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Danaé FANOU — Développeuse Web & Designer Graphique",
    description: site.description,
    images: ["/images/profile/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-ink-950 font-sans text-white antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
