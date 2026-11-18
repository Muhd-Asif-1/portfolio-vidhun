import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { SitePreloader } from "@/components/site-preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const tiemposText = localFont({
  src: "./fonts/TiemposText-Regular.ttf",
  variable: "--font-tiempos-text",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vidhun Prasad — Creative Designer",
  description:
    "UI/UX, graphic design, and motion design by Vidhun Prasad. Bold visual identities and meaningful digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${tiemposText.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Vidhun" />
      </head>
      <body className="min-h-full flex flex-col">
        <Analytics />
        <SpeedInsights />
        <SitePreloader>{children}</SitePreloader>
      </body>
    </html>
  );
}
