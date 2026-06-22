import { getMongoDb, hasMongoConfig, toObjectId } from "@/lib/mongodb";

export async function listCmsBlogPosts() {
  if (!hasMongoConfig()) return [];
  const db = await getMongoDb();
  const rows = await db.collection("blogPosts").find({}).sort({ updatedAt: -1 }).limit(100).toArray();
  return rows.map((row) => ({ ...row, _id: row._id.toString() }));
}

export async function createCmsBlogPost(payload: Record<string, unknown>) {
  if (!hasMongoConfig()) return { ok: false as const, reason: "MONGODB_URI is not configured" };
  const db = await getMongoDb();
  const now = new Date();
  const result = await db.collection("blogPosts").insertOne({
    ...payload,
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
