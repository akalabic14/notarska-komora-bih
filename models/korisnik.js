const {Schema, model} = require('mongoose');

const korisnik = new Schema({
    username:  String,
    password: String,
    address:   String,
    is_admin: Boolean,
});

module.exports = model('Korisnik', korisnik);