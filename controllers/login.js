'use strict';

const cookie = require('cookie');
const User = require('../models/korisnik');

module.exports = (req, res) => {
    req.body = JSON.parse(req.body)

    User.findOne({email: req.body.email})
    .then(user => {
        if (!user) {
            console.error(`User not found`);
            res.json({error: "User not found"})
        } else if (user) {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    res.setHeader('Set-Cookie', cookie.serialize('access_token', String(user.password), {
                        httpOnly: true,
                        maxAge: 60 * 60 * 24 * 30 // 1 month
                    }));
                    res.json('ok'); // ok     
                } else {
                    console.error('Wrong password');
                    res.json({error: "User not found"})
                }
            });
        }
    })
    .catch(e => {
        console.error(`login failed. ${e.toString()}`);
        res.json({error: e.toString()})
    })
}

