const express = require("express");
const expressValidtor = require("express-validator");
const router = express.Router();
const controller = require("../controller/post");
const { isAdminOrUser, isSamePoster } = require("./../middleware/auth-mw");

router
  .route("/")
  .get(isAdminOrUser, controller.getPost)
  .post(isAdminOrUser, controller.addPost)
  .patch(isSamePoster, controller.editPost)
  .delete(isSamePoster, controller.deletaPost);
router.route("/:id").get(controller.getPostById);

module.exports = router;
