const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  user_id: String,
  username: String
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
