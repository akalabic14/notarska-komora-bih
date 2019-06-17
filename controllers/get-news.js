const News = require('../models/clanak');

module.exports = (req, res) => {
    if (req.query.id) {
        News.findById(req.query.id)
            .then(r => {
                res.json(r)
            })
            .catch(err => {
                console.error(err.toString());
                res.json({error: err.toString()});
            })
    } else {
        News.find()
        .then(r => {
            res.json(r)
        })
        .catch(err => {
            console.error(err.toString());
            res.json({error: err.toString()});
        })
    }
}