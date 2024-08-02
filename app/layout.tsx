import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import app from "@/config/app";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Девелоперська компанія ONYX",
  description: "Будівництво житлової і комерційної нерухомості в Києві",
  openGraph: {
    title: "Девелоперська компанія ONYX",
    description: 'Будівництво житлової і комерційної нерухомості в Києві',
    url: app.url,
    siteName: app.name,
    images: [{ url: app.url + "/images/wall.jpg" }],
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
