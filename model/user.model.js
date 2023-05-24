const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: String,
});
mongoose.model("User", userSchema);
