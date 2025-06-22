import type { Metadata } from "next";
import ImageCompressor from "@/components/image-compressor";

export const metadata: Metadata = {
	title: "Image Compression Tool - CompressEase",
	description:
		"Compress JPG, PNG, SVG, GIF and more without losing quality. Reduce file size by up to 80% for faster loading websites and emails.",
};

export default function ImageCompressorPage() {
	return (
		<div className='container mx-auto px-4 md:px-6 py-12'>
			<div className='text-center space-y-4 mb-8'>
				<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					Image Compression Tool
				</h1>
				<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
					Compress your images without losing quality. Supports JPG,
					PNG, SVG, GIF and more.
				</p>
			</div>

			<ImageCompressor />
		</div>
	);
}
