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
    console.log("req.body.username is", req.body.username)
    console.log("req.body.password is", req.body.password)
    db.Users
    .find({username: `${req.body.username}`})
    .then(dbUser => {
      const response = {
        auth: true,
        _id: dbUser[0]._id,
        username: dbUser[0].username
      }
      console.log("dbUser.password is", dbUser[0].password)
    if(dbUser[0].password === req.body.password){
      res.json(response)
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