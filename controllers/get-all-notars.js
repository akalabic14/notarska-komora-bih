const Users = require('../models/korisnik');

module.exports = (req, res) => {
    if(req.query.id) {
        Users.findById(req.query.id)
        .then(r => {
            res.json(r)
        })
        .catch(err => {
            console.error(err.toString());
            res.json({error: err.toString()});
        })
    } else if (req.query.limit) {
        Users.find({
            is_admin: false,
            is_writer: false
        }).limit(4)
        .then(r => {
            res.json(r)
        })
        .catch(err => {
            console.error(err.toString());
            res.json({error: err.toString()});
        })
    } else {
        Users.find({
            is_admin: false,
            is_writer: false
        })
        .then(r => {
            res.json({
                notari: r,
                imena: r.map(user => user.name),
                kantoni: r.map(user => user.region).filter((value, index) => r.map(user => user.region).indexOf(value) == index),
                gradovi: r.map(user => user.city).filter((value, index) => r.map(user => user.city).indexOf(value) == index)
            })
        })
        .catch(err => {
            console.error(err.toString());
            res.json({error: err.toString()});
        })
    }
}