import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
	title: "Contact Us - CompressEase",
	description:
		"Get in touch with the CompressEase team. We're here to help with any questions or feedback about our image and PDF compression tools.",
};

export default function ContactPage() {
	return (
		<div className='container mx-auto px-4 md:px-6 py-12'>
			<div className='text-center space-y-4 mb-12'>
				<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					Contact Us
				</h1>
				<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
					Have questions or feedback? We&apos;d love to hear from you.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-12 items-start'>
				<div>
					<Card className='border-0 shadow-md'>
						<CardContent className='p-6'>
							<form className='space-y-6'>
								<div className='space-y-2'>
									<label
										htmlFor='name'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Name
									</label>
									<Input id='name' placeholder='Your name' />
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='email'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Email
									</label>
									<Input
										id='email'
										type='email'
										placeholder='Your email address'
									/>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='subject'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Subject
									</label>
									<Input
										id='subject'
										placeholder='What is this regarding?'
									/>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='message'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Message
									</label>
									<Textarea
										id='message'
										placeholder='Your message'
										className='min-h-[150px]'
									/>
								</div>
								<Button type='submit' className='w-full'>
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>

				<div className='space-y-8'>
					<div>
						<h2 className='text-2xl font-bold mb-4'>
							Get in Touch
						</h2>
						<p className='text-muted-foreground mb-6'>
							We&apos;re here to help with any questions or
							feedback about our compression tools. Feel free to
							reach out through any of the channels below.
						</p>

						<div className='space-y-4'>
							<div className='flex items-start gap-4'>
								<div className='p-2 rounded-full bg-muted'>
									<Mail className='h-5 w-5 text-muted-foreground' />
								</div>
								<div>
									<h3 className='font-medium'>Email Us</h3>
									<p className='text-muted-foreground'>
										support@compressease.com
									</p>
									<p className='text-sm text-muted-foreground'>
										We aim to respond within 24 hours
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='p-2 rounded-full bg-muted'>
									<Phone className='h-5 w-5 text-muted-foreground' />
								</div>
								<div>
									<h3 className='font-medium'>Call Us</h3>
									<p className='text-muted-foreground'>
										+1 (555) 123-4567
									</p>
									<p className='text-sm text-muted-foreground'>
										Mon-Fri, 9am-5pm EST
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='p-2 rounded-full bg-muted'>
									<MapPin className='h-5 w-5 text-muted-foreground' />
								</div>
								<div>
									<h3 className='font-medium'>Visit Us</h3>
									<p className='text-muted-foreground'>
										123 Compression Ave
									</p>
									<p className='text-muted-foreground'>
										San Francisco, CA 94103
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='p-2 rounded-full bg-muted'>
									<MessageSquare className='h-5 w-5 text-muted-foreground' />
								</div>
								<div>
									<h3 className='font-medium'>Live Chat</h3>
									<p className='text-muted-foreground'>
										Available on our website
									</p>
									<p className='text-sm text-muted-foreground'>
										24/7 for quick questions
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h2 className='text-2xl font-bold mb-4'>FAQ</h2>
						<div className='space-y-4'>
							<div>
								<h3 className='font-medium'>
									Is CompressEase really free?
								</h3>
								<p className='text-muted-foreground'>
									Yes, our basic compression tools are
									completely free to use with no hidden fees.
								</p>
							</div>
							<div>
								<h3 className='font-medium'>
									How do you handle my data?
								</h3>
								<p className='text-muted-foreground'>
									All file processing happens in your browser.
									We don&apos;t store your files on our
									servers.
								</p>
							</div>
							<div>
								<h3 className='font-medium'>
									Do you offer enterprise solutions?
								</h3>
								<p className='text-muted-foreground'>
									Yes, we offer custom enterprise plans for
									businesses with high-volume needs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
