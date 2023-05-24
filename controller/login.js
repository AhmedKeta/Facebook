const mongoose = require("mongoose");
const UserModel = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = (req, res, next) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (!user || user.password !== req.body.password) {
        let error = new Error("Email or password is wrong!!");
        error.status = 401;
        next(error);
      } else {
        let token = jwt.sign(
          {
            id: user._id,
            role: "user",
          },
          process.env.secretJWT,
          { expiresIn: "999h" }
        );
        res.status(200).json({ message: "ok", token });
      }
    })
    .catch((error) => {
      next(error);
    });
};

exports.loginAdmin = (req, res, next) => {
  if (
    req.body.email !== "a@a.a" ||
    !bcrypt.compareSync(
      req.body.password,
      "$2a$12$JvqfyEupUNgveRovOWZz1uhYVgs96Y9qVZx46awBnH8jjmHcZcwsO"
    )
  ) {
    let error = new Error("Email or password is wrong!!");
    error.status = 401;
    next(error);
  } else {
    let token = jwt.sign(
      {
        role: "admin",
      },
      process.env.secretJWT,
      { expiresIn: "999h" }
    );
    res.status(200).json({ message: "ok", token });
  }
};
