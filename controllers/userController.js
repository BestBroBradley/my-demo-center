const db = require("../models")
const Nylas = require('nylas');
const bcrypt = require('bcryptjs')
require('dotenv').config();

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const { User } = db

module.exports = {

    postauth: function (req, res) {

        Nylas.config({
            clientId,
            clientSecret,
        });

        Nylas.exchangeCodeForToken(req.body.code).then(token => {
            User.updateOne({ email: req.body.email }, { needsAuth: false, token: token })
                .then(response => {
                    console.log("Updated token.")
                    res.send(response)
                })
        });
    },

    authenticate: function (req, res) {

        Nylas.config({
            clientId,
            clientSecret,
        });

        options = {
            loginHint: req.params.id,
            redirectURI: 'http://localhost:3000/authenticate',
            scopes: ['email.read_only', 'email.send'],
            state: req.params.id
        };

        auth_url = Nylas.urlForAuthentication(options);

        const response = {
            url: auth_url,
            email: req.params.id
        }

        res.send(response)
    },

    getall: function (req, res) {
        User
        .find()
        .then(data => {
            const newData = []
            data.map(datum => newData.push({id: datum._id, email: datum.email}))
            res.send(newData)
        })
        .catch(err => console.log(err))
    },

    create: function (req, res) {
        User
            .findOne({ email: req.body.email })
            .then(data => {
                if (data) {
                    res.send("Email already exists")
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
        console.log(req.params.email)
        User
            .findOne({ email: req.params.email })
            .then(data => {
                if (data) {
                    if (bcrypt.compareSync(req.params.password, data.password)) {
                        const user = {
                            email: data.email,
                            needsAuth: data.needsAuth,
                            loggedIn: true
                        }
                        res.json(user)
                    } else {
                        res.send("Password doesn't match")
                    }
                } else (res.send("User doesn't exist"))
            })
            .catch(err => console.log(err))
    },
};
