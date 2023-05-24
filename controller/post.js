const mongoose = require("mongoose");
const PostModel = mongoose.model("Post");

exports.getPost = (req, res, next) => {
  PostModel.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
};

exports.addPost = (req, res, next) => {
  PostModel.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.editPost = (req, res, next) => {
  PostModel.updateOne(
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

exports.getPostById = (req, res, next) => {
  PostModel.findOne({ _id: req.params.id })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.deletaPost = (req, res, next) => {
  PostModel.deleteOne({ _id: req.body._id })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};
