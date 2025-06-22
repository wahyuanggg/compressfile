import { Zap, Shield, Lock, Smartphone, FileDown, Settings } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-rose-500" />,
      title: "Lightning Fast",
      description: "Compress your files in seconds with our optimized algorithms.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: "Privacy First",
      description: "Your files are processed locally. We never store your data on our servers.",
    },
    {
      icon: <Lock className="h-10 w-10 text-amber-500" />,
      title: "Secure Processing",
      description: "All file processing happens in your browser with end-to-end encryption.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-rose-500" />,
      title: "Mobile Friendly",
      description: "Compress files on any device - desktop, tablet, or mobile.",
    },
    {
      icon: <FileDown className="h-10 w-10 text-purple-500" />,
      title: "Batch Processing",
      description: "Compress multiple files at once to save time and effort.",
    },
    {
      icon: <Settings className="h-10 w-10 text-amber-500" />,
      title: "Advanced Options",
      description: "Fine-tune compression settings to meet your specific needs.",
    },
  ]

  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose CompressEase?</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Our compression tool offers the perfect balance between file size reduction and quality preservation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-full bg-muted mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
