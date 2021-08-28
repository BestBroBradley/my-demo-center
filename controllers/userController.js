const db = require("../models")
const bcrypt = require('bcryptjs')

const { User } = db

module.exports = {

  create: function (req, res) {
    User
      .findOne({ username: req.body.username })
      .then(data => {
        if (data) {
          res.send("Username already exists")
        } else {
          console.log(req.body.password)
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
              req.body.password = hash
              User
                .create(req.body)
                .then(data => {
                  console.log(data)
                  console.log('User Added!')
                  res.json(data)
                })
                .catch(err => console.log(err))
            })
          })
        }
      })
  },

  login: function (req, res) {
    console.log(req.params.id)
    User
    .findOne({ username: req.params.id })
    .then(data => {
      if (data) {
        if (bcrypt.compareSync(req.body.pw, data.password)) {
         res.json(data) 
        } else {
          res.send("Password doesn't match")
        }
      } else (res.send("User doesn't exist"))
    })
    .catch(err => console.log(err))
  },
};
