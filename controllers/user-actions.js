const User = require('../models/korisnik');

module.exports = (req, res) => {
    if (req.params.method != 'get') {
        var body = JSON.parse(req.body)
    }
    switch(req.params.method) {
        case 'get':
            User.find()
            .then(r => {
                res.json(r.map(user => {
                    var novi =  Object.assign({}, user._doc);
                    novi.uloga = user.is_admin ? 'Administrator' : (user.is_writer ? 'Urednik' : 'Notar');
                    return novi;
                }))
            })
            .catch(err => {
                console.error(err.toString());
                res.json({error: err.toString()});
            })
            break;
        case 'update':
            User.findById(body.id)
            .then(user => {
                Object.assign(user, body)
                return user.save()
            })
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                console.error(err.toString());
                res.json({error: err.toString()});
            })
            break;
        case 'create':
            User.create(body)
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                console.error(err.toString());
                res.json({error: err.toString()});
            })
            break;
        case 'delete':
            User.findByIdAndDelete(body.id, {useFindAndModify: false})
            .then(() => {
                res.json('ok')
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