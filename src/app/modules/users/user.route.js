const express = require("express");
const router = express.Router();

const userController = require("./user.controller");

router.route("/:email").patch(userController.updateSingleBook);

module.exports = router;
