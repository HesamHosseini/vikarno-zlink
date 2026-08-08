import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Self-hosted (rather than fetched from Google Fonts at build time) so the
// build doesn't depend on outbound network access to fonts.googleapis.com.
// Vazirmatn is a variable font, so one file covers the whole weight range.
const _vazirMatn = localFont({
  src: "./fonts/vazirmatn-arabic.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ویکارنو - راهکارهای نرم‌افزاری نوآورانه",
  description:
    "راهکارهای نوآورانه نرم‌افزاری ویکارنو را کاوش کنید. پروژه‌های ما را مشاهده کنید شامل ViraSign، منابع برتر و خدمات.",
  generator: "v0.app",
  openGraph: {
    title: "ویکارنو - راهکارهای نرم‌افزاری نوآورانه",
    description:
      "راهکارهای نرم‌افزاری نوآورانه ویکارنو و پلتفرم‌های دیجیتالی را کاوش کنید. پروژه‌های برتر: قراردادهای دیجیتالی ViraSign، توسعه نرم‌افزار سفارشی.",
    url: "https://vikarno.com",
    siteName: "ویکارنو",
    type: "website",
    images: [
      {
        url: "https://vikarno.com/assets/logos/vikarno-logo-light.svg",
        width: 200,
        height: 200,
        alt: "لوگو ویکارنو",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ویکارنو - راهکارهای نرم‌افزاری نوآورانه",
    description: "راهکارهای نرم‌افزاری نوآورانه ویکارنو و پلتفرم‌های دیجیتالی را کاوش کنید.",
    images: ["https://vikarno.com/assets/logos/vikarno-logo-light.svg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${_vazirMatn.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
