const express = require("express");
const expressValidtor = require("express-validator");
const router = express.Router();
const controller = require("../controller/user");
const { isAdminOrUser, isAdmin, isSameUser } = require("./../middleware/auth-mw");

router
  .route("/")
  .get(isAdmin, controller.getUsers)
  // .post(controller.addUser)
  .patch(isSameUser, controller.editUser);
router
  .route("/:id")
  .get(isAdminOrUser, controller.getUserById)
  .delete(isSameUser, controller.deletaUser);

module.exports = router;
