import { MongoClient } from "mongodb";

// Default connection options
const uri = process.env.ATLAS_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Decalre global variables so we can reuse the connection
let mongoClient = null;
let database = null;

if (!process.env.ATLAS_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

export async function connectToDatabase() {
  try {
    if (mongoClient && database) {
      // If we have a connection to the database, return it instead of creating a new one
      return { mongoClient, database };
    }
    if (process.env.NODE_ENV === "development") {
      // In development mode, we don't need to reconnect to the database
      // on every request, so we store the connection in global variables
      if (!global._mongoClient) {
        mongoClient = await new MongoClient(uri, options).connect();
        global._mongoClient = mongoClient;
      } else {
        mongoClient = global._mongoClient;
      }
    } else {
      mongoClient = await new MongoClient(uri, options).connect();
    }
    database = await mongoClient.db(process.env.ATLAS_DATABASE);
    return { mongoClient, database };
  } catch (e) {
    console.error(e);
  }
}
