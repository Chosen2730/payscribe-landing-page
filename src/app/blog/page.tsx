import { Footer } from "@/app/_components/Footer";
import { Nav } from "@/app/_components/Nav";
import { BlogHero } from "./_components/BlogHero";
import { BlogFeaturedSection } from "./_components/BlogFeaturedSection";
import { BlogFeaturedPostsSection } from "./_components/BlogFeaturedPostsSection";
import { BlogNewsletterSection } from "./_components/BlogNewsletterSection";

export default function BlogPage() {
	return (
		<div className='min-h-screen bg-[#edf4fb] text-secondary'>
			<Nav />
			<BlogHero />
			<BlogFeaturedSection />
			<BlogFeaturedPostsSection />
			<BlogNewsletterSection />
			<Footer />
		</div>
	);
}

