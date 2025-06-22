import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://compressease.com"),
  title: "CompressEase - Image & PDF Compression Tool",
  description:
    "Free online tool to compress images and PDF files without losing quality. Reduce file size for faster uploads and downloads.",
  keywords: "image compression, pdf compression, file compressor, reduce file size, optimize images, compress pdf",
  authors: [{ name: "CompressEase" }],
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_ID", // Replace with your verification ID
  },
  openGraph: {
    title: "CompressEase - Image & PDF Compression Tool",
    description: "Free online tool to compress images and PDF files without losing quality",
    url: "https://compressease.com",
    siteName: "CompressEase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CompressEase - Image & PDF Compression Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // Replace with your GA ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID
            `,
          }}
        />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" // Replace with your AdSense ID
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
