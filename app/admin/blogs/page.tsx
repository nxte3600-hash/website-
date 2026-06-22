import { AdminBlogManager } from "@/components/AdminBlogManager";
import { AdminShell } from "@/components/AdminShell";
import { listCmsBlogPosts } from "@/lib/blogStore";

export default async function AdminBlogsPage() {
  const cmsPosts = await listCmsBlogPosts();

  return (
    <AdminShell>
      <h1 className="text-5xl font-black leading-none">Blog CMS</h1>
      <p className="mt-4 max-w-3xl leading-8 text-steel-300">Create, publish and delete MongoDB-backed blog posts. Published posts appear on the public blog pages.</p>
      <div className="mt-8">
        <AdminBlogManager initialPosts={cmsPosts} />
      </div>
    </AdminShell>
  );
}
