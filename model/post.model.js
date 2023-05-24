const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    discription: { type: String, required: true },
    user: {type: mongoose.Types.ObjectId, required: true}
});
mongoose.model("Post", postSchema);