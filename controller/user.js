const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

exports.getUsers = (req, res, next) => {
  UserModel.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
  console.log(req);
};

exports.addUser = (req, res, next) => {
console.log(req.files)
  UserModel.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.editUser = (req, res, next) => {
  UserModel.updateOne(
    { _id: req.body._id },
    req.body
    // {
    //   full_name: req.body.full_name,
    //   password: req.body.password,
    //   email: req.body.email,
    // }
  )
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
};

exports.getUserById = (req, res, next) => {
  UserModel.findOne({ _id: req.params.id })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.deletaUser = (req, res, next) => {
  UserModel.deleteOne({ _id: req.params.id })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};
