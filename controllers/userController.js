const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
      bcrypt.compare(req.body.password, dbUser[0].password, function(error, resp) {
        if(resp){
          res.json({
            auth: true,
            _id: dbUser[0]._id,
            username: dbUser[0].username})
        }
        else{
          res.json(false)
        }
      })
    })
    },

  createUser: function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      db.Users
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: hash,
        email: req.body.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    })
  }
}