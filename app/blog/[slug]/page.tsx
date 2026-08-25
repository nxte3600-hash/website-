import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock3, UserRound } from "lucide-react";
import { getPublicBlogPost, listPublicBlogPosts } from "@/lib/blogStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublicBlogPost(slug);
  return {
    title: post ? post.title : "Blog",
    description: post?.excerpt
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublicBlogPost(slug);
  if (!post) notFound();
  const related = (await listPublicBlogPosts()).filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <article>
        <section className="nxte-shell py-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--nxte-navy)]">
            <ArrowLeft size={18} /> Back to journal
          </Link>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="nxte-kicker">{post.category}</p>
              <h1 className="nxte-display mt-4 text-balance text-5xl font-extrabold leading-tight text-[var(--nxte-navy)] md:text-6xl">{post.title}</h1>
              <p className="mt-5 text-lg leading-8 text-[var(--nxte-muted)]">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-[var(--nxte-muted)]">
                <span className="inline-flex items-center gap-2"><UserRound size={16} /> {post.author}</span>
                <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {post.date}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={16} /> {post.readTime}</span>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[18px] bg-white shadow-xl">
              <Image src={post.heroImage} alt="" fill priority className="object-cover" sizes="50vw" />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="nxte-shell grid gap-8 lg:grid-cols-[.72fr_.28fr]">
            <div className="nxte-card p-7 sm:p-10">
              {post.sections.map((section) => (
                <section key={section.heading} className="border-b border-[var(--nxte-line)] py-8 first:pt-0 last:border-b-0 last:pb-0">
                  <h2 className="nxte-display text-3xl font-bold text-[var(--nxte-navy)]">{section.heading}</h2>
                  <p className="mt-5 text-lg leading-9 text-[var(--nxte-muted)]">{section.body}</p>
                </section>
              ))}
            </div>
            <aside className="h-fit rounded-2xl bg-[var(--nxte-navy)] p-6 text-white lg:sticky lg:top-28">
              <p className="nxte-kicker">Next action</p>
              <h2 className="nxte-display mt-3 text-3xl font-bold">Turn insight into ownership confidence.</h2>
              <div className="mt-6 grid gap-3">
                <Link href="/vehicles" className="nxte-button nxte-button-primary">Explore models</Link>
                <Link href="/test-ride" className="nxte-button nxte-button-on-dark">Book test ride</Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="nxte-section">
        <div className="nxte-shell">
          <p className="nxte-kicker">Related insights</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="nxte-card p-6">
                <h2 className="nxte-display text-xl font-bold text-[var(--nxte-navy)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--nxte-muted)]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
