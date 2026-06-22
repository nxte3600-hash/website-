import { MongoClient, type Db, ObjectId } from "mongodb";

type GlobalMongo = typeof globalThis & {
  _nxtMongoClientPromise?: Promise<MongoClient>;
  _nxtMongoSetupPromise?: Promise<void>;
};

const globalMongo = globalThis as GlobalMongo;

export function hasMongoConfig() {
  return Boolean(process.env.MONGODB_URI);
}

export async function getMongoDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!globalMongo._nxtMongoClientPromise) {
    const client = new MongoClient(uri);
    globalMongo._nxtMongoClientPromise = client.connect();
  }

  const client = await globalMongo._nxtMongoClientPromise;
  const db = client.db(process.env.MONGODB_DB || "nxt_mobility");
  await ensureMongoSetup(db);
  return db;
}

export function toObjectId(id: string) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid MongoDB id");
  }
  return new ObjectId(id);
}

async function ensureMongoSetup(db: Db) {
  if (!globalMongo._nxtMongoSetupPromise) {
    globalMongo._nxtMongoSetupPromise = setupCollections(db);
  }
  await globalMongo._nxtMongoSetupPromise;
}

async function setupCollections(db: Db) {
  const existing = new Set((await db.listCollections().toArray()).map((collection) => collection.name));
  const collectionNames = ["contactLeads", "dealerLeads", "testRideLeads", "blogPosts"];

  await Promise.all(
    collectionNames.map(async (name) => {
      if (!existing.has(name)) {
        await db.createCollection(name);
      }
    })
  );

  await Promise.all([
    db.collection("contactLeads").createIndex({ createdAt: -1 }),
    db.collection("contactLeads").createIndex({ status: 1, createdAt: -1 }),
    db.collection("dealerLeads").createIndex({ createdAt: -1 }),
    db.collection("dealerLeads").createIndex({ status: 1, createdAt: -1 }),
    db.collection("testRideLeads").createIndex({ createdAt: -1 }),
    db.collection("testRideLeads").createIndex({ status: 1, createdAt: -1 }),
    db.collection("blogPosts").createIndex({ slug: 1 }, { unique: true, sparse: true }),
    db.collection("blogPosts").createIndex({ published: 1, updatedAt: -1 })
  ]);
}
