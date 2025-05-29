
const Listing = require("./models/listing.js");
const Reviews = require("./models/reviews.js");
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // Store the original URL
        req.flash("error", "You must be signed in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.savedRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
       res.locals.redirectUrl = req.session.redirectUrl; // Retrieve the stored URL 
    }
    next();
}

module.exports.owerAuth = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing=(req,res,next)=>{
    const { error } = listingSchema.validate(req.body);//for validation
    if (error) {
      const msg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, msg);
    } else {
      next();
    }
}

module.exports. validateReview=(req,res,next)=>{
    const { error } = reviewSchema.validate(req.body);//for validation
    if (error) {
      const msg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, msg);
    } else {
      next();
    }
}

module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId } = req.params;
  const review = await Reviews.findById(reviewId);
  if (!review.author.equals(req.user._id)) {
      req.flash('error', 'You do not have permission to do that!');
      return res.redirect(`/listings/${req.params.id}`);
  }
  next();
};