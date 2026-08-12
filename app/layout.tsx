import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Бесплатная диагностика коммерческого транспорта — 5 ТОНН",
  description: "Бесплатная диагностика коммерческого транспорта до 5 тонн для новых клиентов в Балашихе и Коломне. Запись по телефону +7(495)023-84-04.",
  openGraph: {
    title: "Бесплатная диагностика — 5 ТОНН",
    description: "Проверим коммерческий автомобиль до 5 тонн быстро и бесплатно.",
    images: [{ url: "/og-5tonn.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-5tonn.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
