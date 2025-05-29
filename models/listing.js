const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./reviews.js"); //for review schema

const listingSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: {
      type: Object,
      default: { url: '', filename: '' }, // Provide a default value
    },
    price: Number,
    location: String,
    country: String,
    review: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  });

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;