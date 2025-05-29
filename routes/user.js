const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router
  .route("/signup")
  .get(userController.index) // For signup page
  .post(wrapAsync(userController.signUp)); // For signup form submission

router
  .route("/login")
  .get(userController.login) // For login page
  .post(
    savedRedirectUrl, // Middleware to save redirect URL
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.postLogin // For login form submission
  );

router.route("/logout").get(userController.logout); // For logout

module.exports = router;