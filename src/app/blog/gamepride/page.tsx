import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { BlogPostHero } from "./_components/BlogPostHero";
import { BlogPostContent } from "./_components/BlogPostContent";
import { BlogNewsletterSection } from "../_components/BlogNewsletterSection";

export default function BlogGamepridePage() {
	return (
		<div className='min-h-screen bg-white text-secondary'>
			<Nav />
			<BlogPostHero />
			<BlogPostContent />
			<BlogNewsletterSection />
			<Footer />
		</div>
	);
}

