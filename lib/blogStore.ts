import { getMongoDb, hasMongoConfig, toObjectId } from "@/lib/mongodb";
import { blogPosts, type BlogPost } from "@/lib/blogPosts";

export type CmsBlogPost = {
  _id?: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  published: boolean;
  sections: Array<{ heading: string; body: string }>;
  createdAt?: unknown;
  updatedAt?: unknown;
};

function normalizeCmsPost(row: Record<string, unknown>): CmsBlogPost {
  const sections = Array.isArray(row.sections)
    ? row.sections
        .map((section) => {
          if (!section || typeof section !== "object") return null;
          const value = section as Record<string, unknown>;
          return {
            heading: String(value.heading ?? "Insight"),
            body: String(value.body ?? "")
          };
        })
        .filter((section): section is { heading: string; body: string } => Boolean(section?.body))
    : [];

  return {
    _id: row._id?.toString(),
    slug: String(row.slug ?? ""),
    title: String(row.title ?? "Untitled EV insight"),
    category: String(row.category ?? "Company Updates"),
    date: String(row.date ?? new Date().toISOString().slice(0, 10)),
    author: String(row.author ?? "NXT Mobility Team"),
    readTime: String(row.readTime ?? "4 min read"),
    excerpt: String(row.excerpt ?? ""),
    heroImage: String(row.heroImage ?? "/vehoicle_image/zenith/1.png"),
    published: Boolean(row.published),
    sections: sections.length ? sections : [{ heading: "Overview", body: String(row.excerpt ?? "") }],
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  };
}

export type PublicBlogPost = BlogPost | CmsBlogPost;

export async function listCmsBlogPosts() {
  if (!hasMongoConfig()) return [];
  const db = await getMongoDb();
  const rows = await db.collection("blogPosts").find({}).sort({ updatedAt: -1 }).limit(100).toArray();
  return rows.map((row) => ({
    ...row,
    _id: row._id.toString(),
    createdAt: row.createdAt instanceof Date ? row.createdAt.toISOString() : row.createdAt,
    updatedAt: row.updatedAt instanceof Date ? row.updatedAt.toISOString() : row.updatedAt
  }));
}

export async function createCmsBlogPost(payload: Record<string, unknown>) {
  if (!hasMongoConfig()) return { ok: false as const, reason: "MONGODB_URI is not configured" };
  const db = await getMongoDb();
  const now = new Date();
  const slug = String(payload.slug || payload.title || `post-${now.getTime()}`)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const result = await db.collection("blogPosts").insertOne({
    ...payload,
    slug,
    published: Boolean(payload.published),
    createdAt: now,
    updatedAt: now
  });
  return { ok: true as const, id: result.insertedId.toString() };
}

export async function updateCmsBlogPost(id: string, patch: Record<string, unknown>) {
  if (!hasMongoConfig()) return { matched: 0 };
  const db = await getMongoDb();
  const result = await db.collection("blogPosts").updateOne(
    { _id: toObjectId(id) },
    { $set: { ...patch, updatedAt: new Date() } }
  );
  return { matched: result.matchedCount };
}

export async function deleteCmsBlogPost(id: string) {
  if (!hasMongoConfig()) return { deleted: 0 };
  const db = await getMongoDb();
  const result = await db.collection("blogPosts").deleteOne({ _id: toObjectId(id) });
  return { deleted: result.deletedCount };
}

export async function listPublicBlogPosts(): Promise<PublicBlogPost[]> {
  if (!hasMongoConfig()) return blogPosts;
  const db = await getMongoDb();
  const rows = await db.collection("blogPosts").find({ published: true }).sort({ updatedAt: -1 }).limit(100).toArray();
  const cmsPosts = rows.map((row) => normalizeCmsPost(row));
  return cmsPosts.length ? cmsPosts : blogPosts;
}

export async function getPublicBlogPost(slug: string): Promise<PublicBlogPost | undefined> {
  if (hasMongoConfig()) {
    const db = await getMongoDb();
    const row = await db.collection("blogPosts").findOne({ slug, published: true });
    if (row) return normalizeCmsPost(row);
  }
  return blogPosts.find((post) => post.slug === slug);
}
