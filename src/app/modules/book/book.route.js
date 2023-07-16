const express = require("express");
const router = express.Router();

const bookController = require("./book.controller");

router.route("/").post(bookController.postBook).get(bookController.getBooks);

router
  .route("/:id")
  .get(bookController.getSingle)
  .patch(bookController.postReview);
router.route("/delete-review/:id").patch(bookController.deleteReview);

module.exports = router;
