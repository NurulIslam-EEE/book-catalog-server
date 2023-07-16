const express = require("express");
const router = express.Router();

const userController = require("./user.controller");

router
  .route("/:email")
  .get(userController.getWishlist)
  .patch(userController.addWishlistController);

module.exports = router;
