const express = require("express");
const expressValidtor = require("express-validator");
const router = express.Router();
const controller = require("../controller/user");
router
  .route("/")
  .post(controller.addUser)

module.exports = router;
