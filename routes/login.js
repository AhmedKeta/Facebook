const express = require("express");
const expressValidtor = require("express-validator");
const router = express.Router();
const controller = require("../controller/login");
router
  .route("/")
  .post(controller.login)
router
  .route("/admin")
  .post(controller.loginAdmin)

module.exports = router;
