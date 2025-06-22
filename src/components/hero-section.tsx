import Link from "next/link";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 xl:py-36'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
							Compress Your Files with{" "}
							<span className='gradient-text'>Ease</span>
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Free online tool to compress images and PDF files
							without losing quality. Reduce file size for faster
							uploads and downloads.
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-4'>
						<Link href='/compress/image'>
							<Button
								size='lg'
								className='bg-rose-600 hover:bg-rose-700 text-white'>
								Compress Images
								<FileDown className='ml-2 h-4 w-4' />
							</Button>
						</Link>
						<Link href='/compress/pdf'>
							<Button
								size='lg'
								className='bg-purple-600 hover:bg-purple-700 text-white'>
								Compress PDFs
								<FileDown className='ml-2 h-4 w-4' />
							</Button>
						</Link>
					</div>
					<div className='flex items-center justify-center space-x-4 text-sm text-muted-foreground'>
						<div className='flex items-center'>
							<svg
								className='mr-1 h-4 w-4 fill-current'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
							</svg>
							<span>100% Free</span>
						</div>
						<div className='flex items-center'>
							<svg
								className='mr-1 h-4 w-4 fill-current'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
							</svg>
							<span>No Registration</span>
						</div>
						<div className='flex items-center'>
							<svg
								className='mr-1 h-4 w-4 fill-current'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
							</svg>
							<span>Secure Processing</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
