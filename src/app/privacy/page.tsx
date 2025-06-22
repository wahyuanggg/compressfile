import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - CompressEase",
	description:
		"Learn about how CompressEase handles your data and protects your privacy when using our image and PDF compression tools.",
};

export default function PrivacyPage() {
	return (
		<div className='container mx-auto px-4 md:px-6 py-12'>
			<div className='max-w-3xl mx-auto'>
				<h1 className='text-3xl font-bold tracking-tighter mb-6'>
					Privacy Policy
				</h1>
				<p className='text-muted-foreground mb-8'>
					Last updated: April 24, 2023
				</p>

				<div className='prose dark:prose-invert max-w-none'>
					<p>
						At CompressEase, we take your privacy seriously. This
						Privacy Policy explains how we collect, use, disclose,
						and safeguard your information when you visit our
						website and use our compression services.
					</p>

					<p>
						Please read this Privacy Policy carefully. By accessing
						or using our Service, you acknowledge that you have
						read, understood, and agree to be bound by all the terms
						of this Privacy Policy.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						1. Information We Collect
					</h2>

					<h3 className='text-xl font-bold mt-6 mb-3'>
						1.1 Personal Information
					</h3>

					<p>
						We may collect personal information that you voluntarily
						provide to us when you:
					</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>Contact us through our website</li>
						<li>Subscribe to our newsletter</li>
						<li>Register for an account (if applicable)</li>
						<li>Participate in surveys or promotions</li>
					</ul>

					<p>This information may include:</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>Name</li>
						<li>Email address</li>
						<li>Phone number</li>
						<li>Company name (if applicable)</li>
					</ul>

					<h3 className='text-xl font-bold mt-6 mb-3'>
						1.2 File Data
					</h3>

					<p>
						<strong>Important:</strong> Our compression service
						processes your files directly in your browser. We do not
						store, access, or transfer your uploaded files to our
						servers. All file processing happens locally on your
						device.
					</p>

					<h3 className='text-xl font-bold mt-6 mb-3'>
						1.3 Usage Information
					</h3>

					<p>
						We may collect certain information automatically when
						you visit our website, including:
					</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>IP address</li>
						<li>Browser type and version</li>
						<li>Operating system</li>
						<li>Referring website</li>
						<li>Pages viewed and time spent on our website</li>
						<li>Actions taken on our website</li>
					</ul>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						2. How We Use Your Information
					</h2>

					<p>
						We may use the information we collect for various
						purposes, including:
					</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>Providing and maintaining our Service</li>
						<li>Improving our Service and user experience</li>
						<li>
							Responding to your inquiries and providing customer
							support
						</li>
						<li>
							Sending you updates, newsletters, and marketing
							communications (if you&apos;ve opted in)
						</li>
						<li>
							Analyzing usage patterns to improve our website and
							services
						</li>
						<li>
							Detecting, preventing, and addressing technical
							issues
						</li>
						<li>Complying with legal obligations</li>
					</ul>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						3. Cookies and Tracking Technologies
					</h2>

					<p>
						We use cookies and similar tracking technologies to
						track activity on our website and hold certain
						information. Cookies are files with a small amount of
						data that may include an anonymous unique identifier.
					</p>

					<p>
						You can instruct your browser to refuse all cookies or
						to indicate when a cookie is being sent. However, if you
						do not accept cookies, you may not be able to use some
						portions of our Service.
					</p>

					<p>We use the following types of cookies:</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong>Essential cookies:</strong> Necessary for
							the operation of our website
						</li>
						<li>
							<strong>Analytical/performance cookies:</strong>{" "}
							Allow us to recognize and count visitors and see how
							they move around our website
						</li>
						<li>
							<strong>Functionality cookies:</strong> Enable us to
							personalize content and remember your preferences
						</li>
						<li>
							<strong>Targeting cookies:</strong> Record your
							visit to our website, the pages you visit, and the
							links you follow
						</li>
					</ul>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						4. Data Security
					</h2>

					<p>
						We implement appropriate technical and organizational
						measures to protect your personal information from
						unauthorized access, disclosure, alteration, and
						destruction. However, no method of transmission over the
						Internet or electronic storage is 100% secure, and we
						cannot guarantee absolute security.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						5. Third-Party Services
					</h2>

					<p>
						Our Service may contain links to third-party websites or
						services that are not owned or controlled by
						CompressEase. We have no control over and assume no
						responsibility for the content, privacy policies, or
						practices of any third-party websites or services.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						6. Children&apos;s Privacy
					</h2>

					<p>
						Our Service is not intended for use by children under
						the age of 13. We do not knowingly collect personally
						identifiable information from children under 13. If you
						are a parent or guardian and you are aware that your
						child has provided us with personal information, please
						contact us.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						7. Changes to This Privacy Policy
					</h2>

					<p>
						We may update our Privacy Policy from time to time. We
						will notify you of any changes by posting the new
						Privacy Policy on this page and updating the &quot;Last
						updated&quot; date at the top of this page. You are
						advised to review this Privacy Policy periodically for
						any changes.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						8. Contact Us
					</h2>

					<p>
						If you have any questions about this Privacy Policy,
						please contact us at:
					</p>

					<ul className='list-none pl-6 space-y-1'>
						<li>Email: privacy@compressease.com</li>
						<li>
							Address: 123 Compression Ave, San Francisco, CA
							94103
						</li>
						<li>Phone: +1 (555) 123-4567</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
