const express = require("express");

const router = express.Router();

const userRoutes = require("./user");
const postRoutes = require("./post");
const loginRoutes = require("./login");
const registerationRoutes = require("./register");
const authMW = require("./../middleware/auth-mw");

router.use("/login", loginRoutes);
router.use("/user", registerationRoutes);
router.use("*", authMW);
router.use("/user", userRoutes);
router.use("/post", postRoutes);
module.exports = router;
