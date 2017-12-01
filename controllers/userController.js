const db = require("../models");

module.exports = {
  findAll: function(req, res){
    db.Users
    .find({})
    .sort({createdAt: -1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  currentUser: function(req, res) {
    db.Users
    .find({username: req.body.username})
    .then(dbUser => {
    if(dbUser.password === req.body.password){
      res.json(true)
    }
    else{
      res.json(false)
    }})
    .catch(err => res.status(422).json(err))
  },
  createUser: function(req, res) {
    db.Users
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

}