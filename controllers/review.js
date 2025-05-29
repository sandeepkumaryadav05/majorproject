const Reviews = require('../models/reviews.js');
const Listing = require('../models/listing.js');

module.exports.createReview =async(req,res,next)=>{  
    let{id}=req.params;
    const listing=await Listing.findById(id);
    const newReview=new Reviews(req.body.review);
    newReview.author=req.user._id;//for author id
   // console.log(newReview);  //for check review and author id
    listing.review.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","New review created successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview=async(req,res,next)=>{
    let{id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{review:reviewId}});//for delete review from listing and 
    await Reviews.findByIdAndDelete(reviewId);
    req.flash("success"," successfully deleted review!");
    res.redirect(`/listings/${id}`);
}