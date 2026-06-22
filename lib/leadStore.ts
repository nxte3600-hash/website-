import { getMongoDb, hasMongoConfig, toObjectId } from "@/lib/mongodb";

export type LeadStatus = "New" | "Contacted" | "Follow-up" | "Converted" | "Lost";
export type LeadCollection = "contactLeads" | "dealerLeads" | "testRideLeads";

export type LeadPayload = Record<string, FormDataEntryValue | string | number | boolean | null | undefined>;

export const leadCollections: LeadCollection[] = ["contactLeads", "dealerLeads", "testRideLeads"];

export async function createLead(collection: LeadCollection, payload: LeadPayload, source: string) {
  if (!hasMongoConfig()) {
    return { ok: false as const, reason: "MONGODB_URI is not configured" };
  }

  const db = await getMongoDb();
  const now = new Date();
  const result = await db.collection(collection).insertOne({
    ...payload,
    source,
    status: "New" satisfies LeadStatus,
    priority: "Normal",
    notes: [],
    followUpDone: false,
    createdAt: now,
    updatedAt: now
  });

  return { ok: true as const, id: result.insertedId.toString() };
}

export async function listLeads(collection?: LeadCollection) {
  if (!hasMongoConfig()) return [];
  const db = await getMongoDb();
  const collections = collection ? [collection] : leadCollections;
  const groups = await Promise.all(
    collections.map(async (name) => {
      const rows = await db.collection(name).find({}).sort({ createdAt: -1 }).limit(50).toArray();
      return rows.map((row) => ({ ...row, _id: row._id.toString(), collection: name }));
    })
  );
  return groups.flat();
}

export async function updateLead(collection: LeadCollection, id: string, patch: Record<string, unknown>) {
  if (!hasMongoConfig()) return { matched: 0 };
  const db = await getMongoDb();
  const set: Record<string, unknown> = {
    ...patch,
    updatedAt: new Date()
  };
  const operators: Record<string, unknown> = { $set: set };
  if (typeof patch.note === "string" && patch.note.trim()) {
    delete set.note;
    operators.$push = {
      notes: {
        text: patch.note.trim(),
        createdAt: new Date()
      }
    };
  }
  const result = await db.collection(collection).updateOne({ _id: toObjectId(id) }, operators);
  return { matched: result.matchedCount };
}
