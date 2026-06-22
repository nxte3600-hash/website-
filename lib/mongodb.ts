import { MongoClient, type Db, ObjectId } from "mongodb";

type GlobalMongo = typeof globalThis & {
  _nxtMongoClientPromise?: Promise<MongoClient>;
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
  return client.db(process.env.MONGODB_DB || "nxt_mobility");
}

export function toObjectId(id: string) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid MongoDB id");
  }
  return new ObjectId(id);
}
