import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Graphic Designer",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"CompressEase has been a game-changer for my design workflow. I can now send high-quality images to clients without worrying about email size limits.",
		},
		{
			name: "Michael Chen",
			role: "Marketing Manager",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"We use CompressEase for all our marketing materials. The PDF compression is fantastic - our documents look great but load much faster on our website.",
		},
		{
			name: "Emily Rodriguez",
			role: "Web Developer",
			avatar: "/placeholder.svg?height=40&width=40",
			content:
				"As a developer, page speed is crucial. CompressEase helps me optimize images for the web without sacrificing quality. Highly recommended!",
		},
	];

	return (
		<section className='container mx-auto px-4 md:px-6 py-12'>
			<div className='text-center space-y-4'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					What Our Users Say
				</h2>
				<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
					Join thousands of satisfied users who trust CompressEase for
					their file compression needs.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
				{testimonials.map((testimonial, index) => (
					<Card key={index} className='border-0 shadow-md'>
						<CardContent className='p-6'>
							<div className='flex flex-col gap-4'>
								<p className='text-muted-foreground italic'>
									&quot;{testimonial.content}&quot;
								</p>
								<div className='flex items-center gap-4 mt-4'>
									<Avatar>
										<AvatarImage
											src={
												testimonial.avatar ||
												"/placeholder.svg"
											}
											alt={testimonial.name}
										/>
										<AvatarFallback>
											{testimonial.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className='font-medium'>
											{testimonial.name}
										</p>
										<p className='text-sm text-muted-foreground'>
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
