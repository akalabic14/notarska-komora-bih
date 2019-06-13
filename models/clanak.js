const {Schema, model} = require('mongoose');

const clanak = new Schema({
    naslov:  String,
    tijelo: String,
});

module.exports = model('Clanak', korisnik);