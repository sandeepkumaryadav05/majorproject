const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const updatedData = initData.data.map((obj) => ({
    ...obj, // Spread the existing object properties
    owner: "67fb931810a7d06c4d4b6bf0", // Add or overwrite the `owner` property
  }));
  await Listing.insertMany(updatedData);
  console.log("Data was initialized");
};

initDB();
