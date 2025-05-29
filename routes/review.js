const express = require('express');
const router = express.Router({mergeParams: true}); //for merge params for review
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview,isLoggedIn,isReviewAuthor } = require('../middleware.js');//for review validation

const rewiewController=require("../controllers/review.js");


//create or leave reviews route
router.post("/",isLoggedIn,validateReview,wrapAsync(rewiewController.createReview));//for create review

//delete review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(rewiewController.deleteReview));//for delete review

module.exports=router;