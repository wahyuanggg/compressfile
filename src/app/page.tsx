import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileDown, ImageIcon, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "CompressEase - Free Image & PDF Compression Tool",
  description:
    "Compress your images and PDF files online for free without losing quality. Reduce file size for faster uploads and downloads.",
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      <HeroSection />

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-6 text-white h-full flex flex-col">
                <ImageIcon className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Image Compression</h3>
                <p className="mb-6 text-white/90">
                  Compress JPG, PNG, SVG, GIF and more without losing quality. Reduce file size by up to 80%.
                </p>
                <Link href="/compress/image" className="mt-auto">
                  <Button className="bg-white text-purple-600 hover:bg-white/90 hover:text-purple-700">
                    Compress Images
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-6 text-white h-full flex flex-col">
                <FileText className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-bold mb-2">PDF Compression</h3>
                <p className="mb-6 text-white/90">
                  Reduce PDF file size while maintaining document quality and formatting. Perfect for email attachments.
                </p>
                <Link href="/compress/pdf" className="mt-auto">
                  <Button className="bg-white text-rose-600 hover:bg-white/90 hover:text-rose-700">
                    Compress PDFs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />

      <section className="container mx-auto px-4 md:px-6 py-12 bg-muted rounded-3xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to compress your files?</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Start compressing your files for free. No registration required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/compress/image">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                Compress Images
                <FileDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/compress/pdf">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Compress PDFs
                <FileDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
