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
  title: "Водитель на городской маршрут — работа в TransSky",
  description:
    "Работа водителем преимущественно по городу и области: понятные маршруты, прозрачная оплата и возвращение домой после большинства смен.",
  openGraph: {
    title: "Город. Смена. Домой. — TransSky",
    description: "Работа водителем по городу и области в TransSky",
    images: [{ url: "/og-city.png", width: 1731, height: 909 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-city.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
