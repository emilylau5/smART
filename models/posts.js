const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-url');

const postSchema = new Schema({
  caption: {
    type: String
  },
  img: {
    data: Buffer,
    contentType: String
  },
  url: {
    type: mongoose.SchemaTypes.Url
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  },
  userID: {
    type: String
  }
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
