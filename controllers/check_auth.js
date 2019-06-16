'use strict';

const cookie = require('cookie');
const User = require('../models/korisnik');

module.exports = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    try {
        let cookies = cookie.parse(req.headers.cookie || '');
        if (!cookies.access_token) {
            throw new Error('Korisnik nije pronadjen');
        }
        User.findOne({'password':cookies.access_token})
        .then(result => {
            if (!result) {
                throw new Error('User not found');
            }
            req.user = result;
            console.log(`CTRL:ip:${ip} user:${(req.user ? req.user.email : 'guest')} path:${req.path} query:${JSON.stringify(req.query)} params:${JSON.stringify(req.params)} body:${JSON.stringify(req.body)} requestId:${req.req_id}`);
            next();
        })
        .catch(e => {
            console.log(`CTRL:ip:${ip} user:guest path:${req.path} query:${JSON.stringify(req.query)} params:${JSON.stringify(req.params)} body:${JSON.stringify(req.body)} requestId:${req.req_id}`);
            console.error(e, e.message);
            res.json({error: 'Potrebna vam je autentikacija!'});
        })
    } catch (e) {
        console.log(`CTRL:ip:${ip} user:guest path:${req.path} query:${JSON.stringify(req.query)} params:${JSON.stringify(req.params)} body:${JSON.stringify(req.body)} requestId:${req.req_id}`);
        console.error(e, e.message);
        res.json({error: 'Potrebna vam je autentikacija!'});
    }
}
