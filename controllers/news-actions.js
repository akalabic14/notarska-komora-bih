const News = require('../models/clanak');

module.exports = (req, res) => {
    if (req.params.method != 'get') {
        var body = JSON.parse(req.body)
    }
    switch(req.params.method) {
        case 'get':
            News.find()
            .then(r => {
                res.json(r)
            })
            .catch(err => {
                console.error(err.toString());
                res.json({error: err.toString()});
            })
            break;
        case 'create':
            News.create(body)
            .then(news => {
                res.json(news)
            })
            .catch(err => {
                console.error(err.toString());
                res.json({error: err.toString()});
            })
            break;
        default:
            console.error(`Invalid method for user-actions: ${req.params.method}`);
            res.json({error: `Method not found: ${req.params.method}`})
    }
}