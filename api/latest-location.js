import { connectToDatabase } from "../lib/mongodb.js";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection("location");

  // get most recent record
  const location = await collection
    .find({}) // find all records
    .sort({ _id: -1 }) // _id has a timestamp embedded
    .limit(1) // only get one
    .toArray() // convert to array
    .then((docs) => docs[0]); // get first element

  return response.json(location);
}
