import { AdminShell } from "@/components/AdminShell";
import { blogPosts } from "@/lib/blogPosts";
import { listCmsBlogPosts } from "@/lib/blogStore";

type BlogAdminRow = {
  title?: unknown;
  category?: unknown;
  published?: unknown;
  updatedAt?: unknown;
};

export default async function AdminBlogsPage() {
  const cmsPosts = await listCmsBlogPosts();
  const rows: BlogAdminRow[] = cmsPosts.length
    ? (cmsPosts as BlogAdminRow[])
    : blogPosts.map((post) => ({ title: post.title, category: post.category, published: true, updatedAt: post.date }));

  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">Blog CMS</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">Create, update, delete, publish and unpublish blog posts through the API layer. This UI shows current CMS rows or curated launch content when MongoDB is not configured.</p>
      <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="bg-electric-cyan/10 text-xs uppercase tracking-[0.16em] text-electric-cyan">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((post, index) => (
              <tr key={`${post.title}-${index}`} className="border-t border-white/10">
                <td className="p-4 font-black text-white">{String(post.title)}</td>
                <td className="p-4 text-steel-300">{String(post.category ?? "Uncategorized")}</td>
                <td className="p-4"><span className="rounded-full bg-electric-green/12 px-3 py-2 font-black text-electric-green">{post.published ? "Published" : "Draft"}</span></td>
                <td className="p-4 text-steel-300">{String(post.updatedAt ?? "Pending")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
