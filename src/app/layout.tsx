import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const description = "Todo para tu fiesta. Piñatas, Recuerdos y Decoración";

export const metadata: Metadata = {
  title: "Sofy Todo Fiesta",
  description,
  keywords: ["piñatas", "fiesta", "ideas para fiesta", "piñatas personalizadas", "decoración"],
  applicationName: "Sofy Todo Fiesta",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  openGraph: {
    title: "Sofy Todo Fiesta",
    description,
    type: "website",
    siteName: "Sofy Todo Fiesta",
    locale: "es_MX",
    images: [{ url: "/images/sofy-logo.png", alt: "Sofy Todo Fiesta" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F28585",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={quicksand.variable}>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
