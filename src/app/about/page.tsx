import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
	title: "About Us - CompressEase",
	description:
		"Learn about CompressEase, our mission, and the team behind our free image and PDF compression tools.",
};

export default function AboutPage() {
	const teamMembers = [
		{
			name: "Alex Johnson",
			role: "Founder & CEO",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Alex has over 10 years of experience in web development and optimization. He founded CompressEase with the mission to make the web faster for everyone.",
		},
		{
			name: "Sarah Chen",
			role: "Lead Developer",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Sarah is an expert in compression algorithms and frontend development. She leads our engineering team and is passionate about performance optimization.",
		},
		{
			name: "Michael Rodriguez",
			role: "UX Designer",
			image: "/placeholder.svg?height=300&width=300",
			bio: "Michael brings his creative vision to CompressEase, ensuring our tools are not only powerful but also intuitive and accessible for all users.",
		},
	];

	return (
		<div className='container mx-auto px-4 md:px-6 py-12'>
			<div className='text-center space-y-4 mb-12'>
				<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					About CompressEase
				</h1>
				<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
					Our mission is to make the web faster by providing free,
					easy-to-use compression tools.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
				<div>
					<h2 className='text-2xl font-bold mb-4'>Our Story</h2>
					<div className='space-y-4 text-muted-foreground'>
						<p>
							CompressEase was founded in 2023 with a simple
							mission: to make the web faster by providing free,
							easy-to-use compression tools for everyone.
						</p>
						<p>
							We noticed that many existing compression tools were
							either too complicated for everyday users, limited
							in features, or hidden behind paywalls. We wanted to
							change that by creating a tool that combines
							powerful compression technology with an intuitive
							interface, all while keeping it completely free.
						</p>
						<p>
							Today, CompressEase is used by thousands of people
							worldwide - from students and bloggers to
							professional designers and developers. We&apos;re
							proud to help make the web a faster, more efficient
							place one compressed file at a time.
						</p>
					</div>
				</div>
				<div className='relative h-[300px] md:h-[400px] rounded-xl overflow-hidden'>
					<Image
						src='/placeholder.svg?height=400&width=600'
						alt='CompressEase team working together'
						fill
						className='object-cover'
					/>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
				<Card className='border-0 shadow-md'>
					<CardContent className='p-6 flex flex-col items-center text-center'>
						<div className='p-3 rounded-full bg-rose-100 dark:bg-rose-900/20 mb-4'>
							<Zap className='h-6 w-6 text-rose-600 dark:text-rose-400' />
						</div>
						<h3 className='text-xl font-bold mb-2'>Our Mission</h3>
						<p className='text-muted-foreground'>
							To make the web faster by providing free, powerful
							compression tools that anyone can use.
						</p>
					</CardContent>
				</Card>

				<Card className='border-0 shadow-md'>
					<CardContent className='p-6 flex flex-col items-center text-center'>
						<div className='p-3 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-4'>
							<Shield className='h-6 w-6 text-purple-600 dark:text-purple-400' />
						</div>
						<h3 className='text-xl font-bold mb-2'>Our Values</h3>
						<p className='text-muted-foreground'>
							Privacy, accessibility, and quality are at the core
							of everything we do.
						</p>
					</CardContent>
				</Card>

				<Card className='border-0 shadow-md'>
					<CardContent className='p-6 flex flex-col items-center text-center'>
						<div className='p-3 rounded-full bg-amber-100 dark:bg-amber-900/20 mb-4'>
							<Users className='h-6 w-6 text-amber-600 dark:text-amber-400' />
						</div>
						<h3 className='text-xl font-bold mb-2'>Our Team</h3>
						<p className='text-muted-foreground'>
							A diverse group of developers, designers, and
							optimization experts.
						</p>
					</CardContent>
				</Card>

				<Card className='border-0 shadow-md'>
					<CardContent className='p-6 flex flex-col items-center text-center'>
						<div className='p-3 rounded-full bg-rose-100 dark:bg-rose-900/20 mb-4'>
							<Globe className='h-6 w-6 text-rose-600 dark:text-rose-400' />
						</div>
						<h3 className='text-xl font-bold mb-2'>Our Impact</h3>
						<p className='text-muted-foreground'>
							Helping thousands of users save bandwidth and
							improve load times every day.
						</p>
					</CardContent>
				</Card>
			</div>

			<div className='mb-16'>
				<h2 className='text-2xl font-bold mb-8 text-center'>
					Meet Our Team
				</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							className='border-0 shadow-md overflow-hidden'>
							<div className='aspect-square relative'>
								<Image
									src={member.image || "/placeholder.svg"}
									alt={member.name}
									fill
									className='object-cover'
								/>
							</div>
							<CardContent className='p-6'>
								<h3 className='text-xl font-bold'>
									{member.name}
								</h3>
								<p className='text-sm text-muted-foreground mb-4'>
									{member.role}
								</p>
								<p className='text-muted-foreground'>
									{member.bio}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<div className='bg-muted rounded-xl p-8 text-center'>
				<h2 className='text-2xl font-bold mb-4'>
					Join Us in Our Mission
				</h2>
				<p className='text-muted-foreground max-w-2xl mx-auto mb-6'>
					We&apos;re always looking for talented individuals who share
					our passion for web performance and user experience. If
					you&apos;re interested in joining our team, check out our
					careers page or get in touch.
				</p>
				<div className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
					View Open Positions
				</div>
			</div>
		</div>
	);
}
