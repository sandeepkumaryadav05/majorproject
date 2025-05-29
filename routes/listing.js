const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');

const { isLoggedIn, owerAuth, validateListing } = require('../middleware.js'); // For login check
const listingControllers = require('../controllers/listing.js');

const multer  = require('multer')
const { storage } = require('../cloudconfig.js'); // For cloudinary
const upload = multer({storage}); // For cloudinary

// Index Route: to show all listings
router.route("/")
  .get(wrapAsync(listingControllers.index))
  .post(
    isLoggedIn,
    upload.single('listing[image][url]'),
    validateListing,
    wrapAsync(listingControllers.createListing)
  ); // Create Route 


// New Route: to render the form for creating a new listing
router.route('/new')
  .get(isLoggedIn, listingControllers.newListing);

// Show Route: to show the data for a specific listing
router.route("/:id")
  .get(wrapAsync(listingControllers.show))
  .put(isLoggedIn, owerAuth,upload.single('listing[image][url]'),
   validateListing, wrapAsync(listingControllers.update)) // Update Route
  .delete(isLoggedIn, owerAuth, wrapAsync(listingControllers.delete)); // Delete Route

// Edit Route: to render the form for editing a specific listing
router.route("/:id/edit")
  .get(isLoggedIn, owerAuth,
   wrapAsync(listingControllers.edit)
  );

module.exports = router;