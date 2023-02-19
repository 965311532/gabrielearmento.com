import { connectToDatabase } from "../lib/mongodb.js";

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

async function getLatestLocationFromDatabase() {
  const { database } = await connectToDatabase();
  const collection = database.collection("location");

  // get most recent record
  return await collection
    .find({}) // find all records
    .sort({ _id: -1 }) // _id has a timestamp embedded
    .limit(1) // only get one
    .toArray() // convert to array
    .then((docs) => docs[0]); // get first element
}

export default async function handler(req, res) {
  // cache this response for 12 hours
  res.setHeader("Cache-Control", "s-maxage=43200");
  // get the latest location from the database
  const location = await getLatestLocationFromDatabase();
  // get the latest location from the database
  const BASE_URL = "https://maps.googleapis.com/maps/api/staticmap";
  // set the parameters for the map
  const params = new URLSearchParams({
    center: `${location.city},${location.region}`,
    zoom: 14,
    scale: 2,
    format: "png",
    size: "640x640",
    key: apiKey,
  });
  // add the `map` parameter to location
  location["map"] = `${BASE_URL}?${params.toString()}`;
  // send the location as JSON
  res.json(location);
}
