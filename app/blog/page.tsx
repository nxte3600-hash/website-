import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/Option2Sections";
import { blogCategories } from "@/lib/blogPosts";
import { listPublicBlogPosts } from "@/lib/blogStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog",
  description: "NXTE Mobility articles on EV buying, battery, charging, manufacturing, sustainability and ownership."
};

export default async function BlogPage() {
  const posts = await listPublicBlogPosts();

  return (
    <main>
      <PageHero eyebrow="NXTE journal" title="Insights for India's electric decade." copy="A practical education hub for buyers, dealers, fleet owners and EV-curious readers." image="/option2/technology-master.png" />
      <section className="nxte-section">
        <div className="nxte-shell">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <span key={category} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--nxte-navy)]">{category}</span>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="nxte-card overflow-hidden transition hover:-translate-y-1">
                <div className="relative aspect-[16/10] bg-white">
                  <Image src={post.heroImage} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <p className="nxte-kicker">{post.category}</p>
                  <h2 className="nxte-display mt-3 text-2xl font-bold text-[var(--nxte-navy)]">{post.title}</h2>
                  <p className="mt-3 leading-7 text-[var(--nxte-muted)]">{post.excerpt}</p>
                  <p className="mt-5 text-sm font-extrabold text-[var(--nxte-orange)]">Read article →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
