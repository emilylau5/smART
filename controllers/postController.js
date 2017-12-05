const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Posts
    .find({ })
    .sort({createdAt: -1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  createPost: function(req, res){
    db.Posts
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  likePost: function(req, res) {
    db.Posts
    .findbyIdAndUpdate(req.body.caption, {
      $set: {liked: req.body.userID}
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  }
}