const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
require("./model");
app.use(morgan("dev"));
app.use(express.json());
const mongoose = require("mongoose");
const routes = require("./routes");
const notFoundMW = require("./middleware/404-mw");
const errorMW = require("./middleware/error-mw");
const multer = require("multer");

mongoose
  .connect(
    "mongodb+srv://mahmoudmedhatabdelaleem:Mahmoud20@cluster0.s0uxrt5.mongodb.net/Facebook"
  )
  .then(() => {
    console.log("Cloud db server connected .....");
    app.listen(8081, () => {
      console.log("8081 is listining ..............");
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.static("./images/")); //access from clint
app.use(
  multer({ dest: "images" }).fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 5,
    },
  ])
);
app.use(routes);
app.use(notFoundMW);
app.use(errorMW);
