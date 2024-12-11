import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import server from "./server";

dotenv.config();

if(!process.env.PORT) {
    throw new Error("PORT is not defined");
    process.exit(1);
}

if(!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
    process.exit(1);
}

const PORT = parseInt(process.env.PORT) || 3000;
const getMongoDataService = async () => {
    const uri = process.env.MONGODB_URI || "";
    const client = new MongoClient(uri);
    await client.connect();
    return client.db("chef-backend");
};

(async () => {
    const mongodb = await getMongoDataService();
    server.listen(PORT, () => {
        console.log(`server is listening on port: ${PORT}`);
    });
})();
