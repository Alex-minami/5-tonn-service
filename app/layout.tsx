import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Водитель категории CE — работа в TransSky",
  description:
    "Межгород на автомобилях компании: 180–260 тысяч рублей на руки, оформление по ТК РФ и график на выбор.",
  openGraph: {
    title: "Дорога платит честно — TransSky",
    description: "Работа водителем категории CE в TransSky",
    images: [{ url: "/og.png", width: 1728, height: 910 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
