const express = require("express");
const router = express.Router();

const bookController = require("./book.controller");

router.route("/").post(bookController.postBook).get(bookController.getBooks);

module.exports = router;
