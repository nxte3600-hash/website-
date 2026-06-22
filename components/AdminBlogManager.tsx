"use client";

import { useMemo, useState } from "react";

type BlogRow = {
  _id?: string;
  slug?: string;
  title?: unknown;
  category?: unknown;
  published?: unknown;
  updatedAt?: unknown;
};

export function AdminBlogManager({ initialPosts }: { initialPosts: BlogRow[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const sortedPosts = useMemo(() => posts, [posts]);

  async function createPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      title: data.title,
      slug: data.slug,
      category: data.category,
      excerpt: data.excerpt,
      author: data.author || "NXT Mobility Team",
      readTime: data.readTime || "4 min read",
      heroImage: data.heroImage || "/vehoicle_image/zenith/1.png",
      published: data.published === "on",
      sections: [
        {
          heading: data.sectionHeading || "Overview",
          body: data.body
        }
      ]
    };

    const response = await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    const result = await response.json();
    setPosts((current) => [
      {
        _id: result.id,
        slug: String(payload.slug || payload.title),
        title: payload.title,
        category: payload.category,
        published: payload.published,
        updatedAt: new Date().toISOString()
      },
      ...current
    ]);
    form.reset();
    setStatus("saved");
  }

  async function deletePost(id?: string) {
    if (!id) return;
    const response = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (response.ok) {
      setPosts((current) => current.filter((post) => post._id !== id));
    }
  }

  return (
    <div className="grid gap-8">
      <form onSubmit={createPost} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
        <h2 className="text-3xl font-black">Create Blog Post</h2>
        <p className="mt-3 leading-7 text-steel-300">Published posts are stored in MongoDB and appear on the public blog.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input name="title" required placeholder="Post title" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
          <input name="slug" placeholder="slug-auto-generated-if-empty" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
          <input name="category" required placeholder="Category" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
          <input name="author" placeholder="Author" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
          <input name="readTime" placeholder="Read time, e.g. 5 min read" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
          <input name="heroImage" placeholder="/vehoicle_image/zenith/1.png" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
        </div>
        <textarea name="excerpt" required placeholder="Short excerpt" className="mt-4 min-h-28 w-full rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
        <input name="sectionHeading" placeholder="Section heading" className="mt-4 w-full rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
        <textarea name="body" required placeholder="Main article body" className="mt-4 min-h-44 w-full rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none placeholder:text-steel-500 focus:border-electric-cyan" />
        <label className="mt-4 flex items-center gap-3 text-sm font-black text-white">
          <input name="published" type="checkbox" className="h-5 w-5" defaultChecked /> Publish immediately
        </label>
        <button type="submit" disabled={status === "saving"} className="mt-5 rounded-2xl bg-gradient-to-r from-electric-cyan to-electric-green px-6 py-4 font-black text-midnight">
          {status === "saving" ? "Saving..." : "Create post"}
        </button>
        {status === "saved" ? <p className="mt-3 font-bold text-electric-green">Blog post saved to MongoDB.</p> : null}
        {status === "error" ? <p className="mt-3 font-bold text-red-200">Could not save post. Check MongoDB/admin session.</p> : null}
      </form>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]">
        <table className="min-w-[860px] w-full text-left text-sm">
          <thead className="bg-electric-cyan/10 text-xs uppercase tracking-[0.16em] text-electric-cyan">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Updated</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedPosts.length ? sortedPosts.map((post, index) => (
              <tr key={post._id ?? `${post.title}-${index}`} className="border-t border-white/10">
                <td className="p-4 font-black text-white">{String(post.title)}</td>
                <td className="p-4 text-steel-300">{String(post.category ?? "Uncategorized")}</td>
                <td className="p-4"><span className="rounded-full bg-electric-green/12 px-3 py-2 font-black text-electric-green">{post.published ? "Published" : "Draft"}</span></td>
                <td className="p-4 text-steel-300">{String(post.updatedAt ?? "Pending")}</td>
                <td className="p-4">
                  <button type="button" onClick={() => deletePost(post._id)} className="rounded-full border border-red-300/30 px-4 py-2 font-black text-red-200">
                    Delete
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td className="p-6 text-steel-300" colSpan={5}>No MongoDB blog posts yet. Create one above.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
