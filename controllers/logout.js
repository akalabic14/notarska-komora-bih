'use strict';
const cookie = require('cookie');

module.exports = (req, res) => {
    res.setHeader('Set-Cookie', cookie.serialize('access_token', null, {
        httpOnly: true,
        maxAge: -1
    }));
    res.json('ok');
}