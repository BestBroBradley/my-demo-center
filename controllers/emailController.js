const db = require("../models")
const Nylas = require('nylas');
const bcrypt = require('bcryptjs')
require('dotenv').config();

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const { User } = db

module.exports = {

    getmail: function (req, res) {

        User
            .findOne({ email: req.params.email })
            .then(data => {
                
                Nylas.config({
                    clientId,
                    clientSecret,
                });

                const nylas = Nylas.with(data.token)

                nylas.messages.list({limit: 10}).then(data => 
                    res.send(data.map(element => element.toJSON()))
                );
            })
    }
};