import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suprimo Tech - AI-Powered Digital Marketing Agency | Scale Your Business Online",
  description:
    "Transform your business with Suprimo Tech's AI-powered digital marketing solutions. Expert SEO, social media marketing, Google Ads, web development & branding services. 4X-10X ROI guaranteed. Serving 120+ businesses across India.",
  keywords:
    "digital marketing agency India, AI marketing solutions, social media marketing, SEO services, Google Ads management, website development, branding design, marketing automation, business growth, ROI marketing, Aurangabad digital agency",
  authors: [{ name: "Suprimo Tech" }],
  openGraph: {
    title: "Suprimo Tech - AI-Powered Digital Marketing Agency | Scale Your Business Online",
    description:
      "Transform your business with AI-powered digital marketing. 4X-10X ROI guaranteed. Expert services in SEO, social media, Google Ads & more.",
    type: "website",
    locale: "en_IN",
    url: "https://suprimotech.com",
    siteName: "Suprimo Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suprimo Tech - AI-Powered Digital Marketing Agency",
    description: "Transform your business with AI-powered digital marketing. 4X-10X ROI guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
