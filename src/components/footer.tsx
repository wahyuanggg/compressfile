import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-muted py-12 mt-12'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='space-y-4'>
						<Link href='/' className='inline-block'>
							<span className='text-2xl font-bold gradient-text'>
								CompressEase
							</span>
						</Link>
						<p className='text-muted-foreground'>
							Free online tool to compress images and PDF files
							without losing quality.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-primary'>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-primary'>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-primary'>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-primary'>
								<Github className='h-5 w-5' />
								<span className='sr-only'>GitHub</span>
							</Link>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>Tools</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/compress/image'
									className='text-muted-foreground hover:text-primary'>
									Image Compression
								</Link>
							</li>
							<li>
								<Link
									href='/compress/pdf'
									className='text-muted-foreground hover:text-primary'>
									PDF Compression
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>Company</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-muted-foreground hover:text-primary'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-muted-foreground hover:text-primary'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>Legal</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/terms'
									className='text-muted-foreground hover:text-primary'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href='/privacy'
									className='text-muted-foreground hover:text-primary'>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-muted-foreground'>
						© {currentYear} CompressEase. All rights reserved.
					</p>
					<p className='text-sm text-muted-foreground mt-4 md:mt-0'>
						Made with ❤️ By{" "}
						<Link
							href='https:dheeru.org'
							className='text-primary hover:underline'>
							Dheeru Rajpoot
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
