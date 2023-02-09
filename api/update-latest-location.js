import { connectToDatabase } from "../lib/mongodb.js";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection("location");

  // get the location from the post request data
  const location = request.body;
  // add the attribute date to the location
  location["date"] = new Date();
  // insert the location into the database
  await collection.insertOne(location);
  // return the location
  return response.json(location);
}
