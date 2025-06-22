import type { Metadata } from "next";
import PDFCompressor from "@/components/pdf-compressor";

export const metadata: Metadata = {
	title: "PDF Compression Tool - CompressEase",
	description:
		"Compress PDF files online for free. Reduce PDF file size while maintaining document quality and formatting.",
};

export default function PDFCompressorPage() {
	return (
		<div className='container mx-auto px-4 md:px-6 py-12'>
			<div className='text-center space-y-4 mb-8'>
				<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					PDF Compression Tool
				</h1>
				<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
					Reduce PDF file size while maintaining document quality and
					formatting. Perfect for email attachments.
				</p>
			</div>

			<PDFCompressor />
		</div>
	);
}
