const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.get("Authorization");
  if (!token) {
    let error = new Error("Not have token!!");
    error.status = 403;
    next(error);
  } else {
    req.decodedToken = jwt.verify(token.split(" ")[1], process.env.secretJWT);
    next();
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.decodedToken.role === "admin") {
    next();
  } else {
    let error = new Error("Not authorized!!");
    error.status = 403;
    next(error);
  }
};

module.exports.isUser = (req, res, next) => {
  if (req.decodedToken.role === "user") {
    next();
  } else {
    let error = new Error("Not authorized!!");
    error.status = 403;
    next(error);
  }
};

module.exports.isAdminOrUser = (req, res, next) => {
  if (req.decodedToken.role === "admin" || req.decodedToken.role === "user") {
    next();
  } else {
    let error = new Error("Not authorized!!");
    error.status = 403;
    next(error);
  }
};

module.exports.isSameUser = (req, res, next) => {
  if (req.decodedToken.role === "user" && req.decodedToken.id === req.body._id) {
    next();
  } else {
    let error = new Error("Not authorized!!");
    error.status = 403;
    next(error);
  }
};

module.exports.isSamePoster = (req, res, next) => {
  if (req.decodedToken.role === "user" && req.decodedToken.id === req.body.user) {
    next();
  } else {
    let error = new Error("Not authorized!!");
    error.status = 403;
    next(error);
  }
};
