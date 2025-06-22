import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service - CompressEase",
	description:
		"Read the terms of service for CompressEase. Learn about the rules and guidelines for using our image and PDF compression tools.",
};

export default function TermsPage() {
	return (
		<div className='container mx-auto px-4 md:px-6 py-12'>
			<div className='max-w-3xl mx-auto'>
				<h1 className='text-3xl font-bold tracking-tighter mb-6'>
					Terms of Service
				</h1>
				<p className='text-muted-foreground mb-8'>
					Last updated: April 24, 2023
				</p>

				<div className='prose dark:prose-invert max-w-none'>
					<p>
						Please read these Terms of Service
						(&quot;Terms&quot;,&quot;Terms of Service&quot;)
						carefully before using the CompressEase website (the
						&quot;Service&quot;) operated by CompressEase, Inc.
						(&quot;us&quot;,&quot;we&quot;, or &quot;our&quot;).
					</p>

					<p>
						Your access to and use of the Service is conditioned on
						your acceptance of and compliance with these Terms.
						These Terms apply to all visitors, users, and others who
						access or use the Service.
					</p>

					<p>
						By accessing or using the Service you agree to be bound
						by these Terms. If you disagree with any part of the
						terms, then you may not access the Service.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						1. Use of Service
					</h2>

					<p>
						CompressEase provides tools for compressing image and
						PDF files. By using our Service, you agree to:
					</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Use the Service only for lawful purposes and in
							accordance with these Terms.
						</li>
						<li>
							Not use the Service in any way that violates any
							applicable federal, state, local, or international
							law or regulation.
						</li>
						<li>
							Not use the Service to transmit any material that is
							unlawful, threatening, abusive, harassing,
							defamatory, obscene, or otherwise objectionable.
						</li>
						<li>
							Not attempt to probe, scan, or test the
							vulnerability of the Service or any related system
							or network or breach any security or authentication
							measures.
						</li>
					</ul>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						2. Intellectual Property
					</h2>

					<p>
						The Service and its original content, features, and
						functionality are and will remain the exclusive property
						of CompressEase and its licensors. The Service is
						protected by copyright, trademark, and other laws of
						both the United States and foreign countries. Our
						trademarks and trade dress may not be used in connection
						with any product or service without the prior written
						consent of CompressEase.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						3. User Content
					</h2>

					<p>
						Our Service allows you to upload, compress, and download
						files. You retain all rights to your content. By
						uploading content to our Service, you grant us a
						worldwide, non-exclusive, royalty-free license to use,
						reproduce, and process your content solely for the
						purpose of providing the Service to you.
					</p>

					<p>
						You are solely responsible for the content you upload to
						the Service. You represent and warrant that:
					</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>
							You own or have the necessary licenses, rights,
							consents, and permissions to use and authorize us to
							use your content.
						</li>
						<li>
							Your content does not violate or infringe upon the
							rights of any third party, including copyright,
							trademark, privacy, publicity, or other personal or
							proprietary rights.
						</li>
					</ul>

					<h2 className='text-2xl font-bold mt-8 mb-4'>4. Privacy</h2>

					<p>
						Your privacy is important to us. Our Privacy Policy,
						which is incorporated into these Terms, explains how we
						collect, use, and disclose information about you. By
						using the Service, you agree to the collection, use, and
						disclosure of information in accordance with our Privacy
						Policy.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						5. Limitation of Liability
					</h2>

					<p>
						In no event shall CompressEase, nor its directors,
						employees, partners, agents, suppliers, or affiliates,
						be liable for any indirect, incidental, special,
						consequential or punitive damages, including without
						limitation, loss of profits, data, use, goodwill, or
						other intangible losses, resulting from:
					</p>

					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Your access to or use of or inability to access or
							use the Service;
						</li>
						<li>
							Any conduct or content of any third party on the
							Service;
						</li>
						<li>Any content obtained from the Service; and</li>
						<li>
							Unauthorized access, use or alteration of your
							transmissions or content.
						</li>
					</ul>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						6. Disclaimer
					</h2>

					<p>
						Your use of the Service is at your sole risk. The
						Service is provided on an &quot;AS IS&quot; and &quot;AS
						AVAILABLE&quot; basis. The Service is provided without
						warranties of any kind, whether express or implied,
						including, but not limited to, implied warranties of
						merchantability, fitness for a particular purpose,
						non-infringement or course of performance.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>7. Changes</h2>

					<p>
						We reserve the right, at our sole discretion, to modify
						or replace these Terms at any time. If a revision is
						material we will try to provide at least 30 days&apos;
						notice prior to any new terms taking effect. What
						constitutes a material change will be determined at our
						sole discretion.
					</p>

					<h2 className='text-2xl font-bold mt-8 mb-4'>
						8. Contact Us
					</h2>

					<p>
						If you have any questions about these Terms, please
						contact us at:
					</p>

					<ul className='list-none pl-6 space-y-1'>
						<li>Email: legal@compressease.com</li>
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
