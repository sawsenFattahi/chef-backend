import { MongoClient } from "mongodb";

export const getMongoDataService = async (DataSource: any) => {
    const uri = process.env.MONGODB_URI || "";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("CHEF");
    const contactDatabase = {
        findOne: (id: String) => db.collection("recipes").findOne({ _id: id }),
        find: () => db.collection("recipes").find().toArray(),
        insertOne: (doc: object) => db.collection("recipes").insertOne(doc),
        update: (id: String, data: object) => db.collection("recipes").updateOne({ _id: id }, data),
        delete: (id: String) => db.collection("recipes").deleteOne({ _id: id }),
    }
    return new DataSource(contactDatabase);
};