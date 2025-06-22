import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Is CompressEase really free to use?",
      answer:
        "Yes, CompressEase is completely free to use for both personal and commercial purposes. We don't have any hidden fees or premium tiers.",
    },
    {
      question: "How does the compression work?",
      answer:
        "Our compression algorithms analyze your files and remove unnecessary data while preserving visual quality. For images, we use smart compression techniques that reduce file size without noticeable quality loss. For PDFs, we optimize embedded images and fonts while maintaining document structure and readability.",
    },
    {
      question: "Is there a file size limit?",
      answer:
        "Free users can compress files up to 50MB in size. This limit applies to individual files, not the total batch size. If you need to compress larger files, please contact us about our enterprise solutions.",
    },
    {
      question: "Will compression affect the quality of my files?",
      answer:
        "Our compression is designed to minimize quality loss while maximizing file size reduction. For images, you can adjust the quality settings to find your preferred balance. For PDFs, we maintain text clarity and document structure while optimizing embedded elements.",
    },
    {
      question: "Is my data secure when using CompressEase?",
      answer:
        "Absolutely. All file processing happens directly in your browser - your files never leave your device. We don't store your files on our servers, ensuring complete privacy and security.",
    },
    {
      question: "Which file formats are supported?",
      answer:
        "For images, we support JPG, PNG, SVG, GIF, WebP, and more. For PDFs, we support standard PDF files including those with embedded images and fonts.",
    },
  ]

  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Find answers to common questions about our compression tools.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
