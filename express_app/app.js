var express = require('express')
var app = express()
app.set('view engine', 'ejs') //default behavior to look for views file
//express also extends the req params
// app.get('/profile/:id', function(req, res) {
//     res.send('you requested to see a profile with the id of ' + req.params.id)
// })
app.get('/profile/:name', function(req, res) {
    //using res.render instead
    var hobbies = ["fitness", "eating", "music"]
    res.render('profile', {person: req.params.name, data: {hobbies: hobbies}})
})
app.listen(3000)