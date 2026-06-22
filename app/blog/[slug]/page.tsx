import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, Newspaper, UserRound } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { FuturisticCTA } from "@/components/FuturisticCTA";
import { VideoHero } from "@/components/VideoHero";
import { blogPosts } from "@/lib/blogPosts";
import { getPublicBlogPost, listPublicBlogPosts } from "@/lib/blogStore";
import { getVideoAsset } from "@/lib/videoAssets";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublicBlogPost(slug);
  return {
    title: post ? `${post.title} | NXT Journal` : "Blog | NXT Mobility",
    description: post?.excerpt
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublicBlogPost(slug);
  const posts = await listPublicBlogPosts();
  const video = getVideoAsset("blog");

  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-midnight text-white">
      <VideoHero
        eyebrow={post.category}
        title={post.title}
        copy={post.excerpt}
        videoSrc={video.videoSrc}
        poster={post.heroImage}
        actions={[
          { href: "/vehicles", label: "Explore vehicles", variant: "primary" },
          { href: "/test-ride", label: "Book test ride", variant: "secondary" }
        ]}
      >
        <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-electric-cyan/20 bg-white/[0.08] shadow-glow backdrop-blur-2xl">
          <Image src={post.heroImage} alt={post.title} fill priority className="object-contain p-10" sizes="(max-width: 1024px) 100vw, 44vw" />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/12 bg-midnight/78 p-5 backdrop-blur-2xl">
            <div className="flex flex-wrap gap-4 text-sm font-bold text-steel-300">
              <span className="inline-flex items-center gap-2"><UserRound size={16} /> {post.author}</span>
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {post.date}</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={16} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </VideoHero>

      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.76fr_.24fr]">
          <div>
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 font-black text-electric-cyan">
              <ArrowLeft size={18} /> Back to journal
            </Link>
            <div className="metal-panel rounded-[2rem] p-7 sm:p-10">
              {post.sections.map((section) => (
                <section key={section.heading} className="border-b border-white/10 py-8 first:pt-0 last:border-b-0 last:pb-0">
                  <h2 className="text-4xl font-black leading-none">{section.heading}</h2>
                  <p className="mt-5 text-lg leading-9 text-steel-300">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-[2rem] border border-electric-cyan/20 bg-white/[0.06] p-6 backdrop-blur-xl lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-electric-green">Next action</p>
            <h3 className="mt-3 text-3xl font-black leading-none">Turn insight into ownership confidence.</h3>
            <p className="mt-4 leading-7 text-steel-300">Compare models, schedule a test ride, or start a dealer conversation.</p>
            <div className="mt-6 grid gap-3">
              <FuturisticCTA href="/vehicles">Explore models</FuturisticCTA>
              <FuturisticCTA href="/dealer" variant="secondary">Dealer enquiry</FuturisticCTA>
            </div>
          </aside>
        </div>
      </article>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-5xl font-black leading-none">Related EV insights</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} icon={"icon" in item ? item.icon : Newspaper} title={item.title} tag={item.category} copy={item.excerpt} href={`/blog/${item.slug}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
