const express = require('express')
const bs = require('body-parser')
const app = express()
const {routes} = require('./router')
const mongoose = require('mongoose')

app.use(express.static('dist'))
app.use(express.static('public'))

app.use(bs.urlencoded({ extended: false }))

app.use(bs.text({type: '*/*'}))
app.use(bs.json())

routes.forEach((route) => {
    app[ route.method ](route.path, require('./controllers/' + route.controller))
})

mongoose.connect(`mongodb+srv://web_tehnologije:web_tehnologije@webtehnologije-9u8hn.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => {
        app.listen(process.env.PORT || 8090, function () {
            console.log(`App started http://127.0.0.1:${process.env.PORT || 8090}`)
        })
    })
    .catch(err => {
        console.error('Database connection error');
        console.error(err);
    })
