import { Newspaper, PlugZap, Search, Sparkles } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { MotionSection } from "@/components/MotionSection";
import { StatsStrip } from "@/components/StatsStrip";
import { VideoHero } from "@/components/VideoHero";
import { blogCategories } from "@/lib/blogPosts";
import { listPublicBlogPosts } from "@/lib/blogStore";
import { getVideoAsset } from "@/lib/videoAssets";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await listPublicBlogPosts();
  const featured = posts[0];
  const video = getVideoAsset("blog");

  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow="NXT EV journal"
        title="Insights for the electric mobility decade."
        copy="A premium education hub for buyers, dealers, fleet owners, and EV-curious readers, covering technology, charging, finance, sustainability, and product updates."
        videoSrc={video.videoSrc}
        poster={video.poster}
        actions={[
          { href: "/vehicles", label: "Explore models", variant: "primary" },
          { href: "/contact-us", label: "Ask NXT", variant: "secondary" }
        ]}
      >
        <div className="metal-panel rounded-[2rem] p-7">
          <Newspaper className="mb-6 text-electric-cyan" size={48} />
          <p className="text-xs font-black uppercase tracking-[0.22em] text-electric-green">Featured article</p>
          <h2 className="mt-4 text-4xl font-black leading-none">{featured.title}</h2>
          <p className="mt-5 leading-8 text-steel-300">{featured.excerpt}</p>
          <div className="mt-7">
            <FuturisticCTA href={`/blog/${featured.slug}`}>Read featured insight</FuturisticCTA>
          </div>
        </div>
      </VideoHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsStrip
            stats={[
              { value: String(posts.length), label: "Useful articles", detail: "Battery, finance, service, route choice and sustainability" },
              { value: "6", label: "Content tracks", detail: "Technology, charging, manufacturing, sustainability, buying, updates" },
              { value: "B2B", label: "Dealer value", detail: "Articles can support showroom conversations" },
              { value: "SEO", label: "Growth", detail: "Insights create discoverable product authority" }
            ]}
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionSection className="mb-10 grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-electric-cyan">Article categories</span>
              <h2 className="mt-4 max-w-4xl text-5xl font-black leading-none sm:text-7xl">A blog should behave like a product education engine.</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <Search className="mb-3 text-electric-cyan" size={22} />
              <p className="text-sm leading-7 text-steel-300">Search/filter UI is structured for future CMS data. Current launch uses curated editorial posts.</p>
            </div>
          </MotionSection>
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category, index) => (
              <MotionSection key={category} delay={index * 0.03}>
                <span className="inline-flex rounded-full border border-electric-cyan/20 bg-white/[0.07] px-5 py-3 text-sm font-black text-white backdrop-blur-xl">
                  {category}
                </span>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
        <div className="energy-field absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              icon={"icon" in post ? post.icon : Newspaper}
              title={post.title}
              tag={post.category}
              copy={post.excerpt}
              href={`/blog/${post.slug}`}
              featured={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[.95fr_1.05fr]">
          <MotionSection className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <Sparkles className="mb-6 text-electric-cyan" size={46} />
            <h2 className="text-5xl font-black leading-none">Use content to build trust before the buyer calls.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-300">
              The blog becomes NXT&apos;s knowledge layer for test rides, dealer education, product launches, charging guides and sustainability proof.
            </p>
          </MotionSection>
          <MotionSection className="metal-panel rounded-[2rem] p-8 sm:p-10" delay={0.08}>
            <PlugZap className="mb-6 text-electric-green" size={46} />
            <h3 className="text-4xl font-black leading-none">Turn EV curiosity into an enquiry.</h3>
            <p className="mt-5 leading-8 text-steel-300">Every article should connect the reader to vehicles, test rides, dealer conversation, or sales support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FuturisticCTA href="/test-ride">Book test ride</FuturisticCTA>
              <FuturisticCTA href="/dealer" variant="secondary">Dealer enquiry</FuturisticCTA>
            </div>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}
