const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-url');

const postSchema = new Schema({
  caption: {
    type: String
  },
  img: {
    type: String
  },
  videoLink: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  },
  liked: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }]
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
