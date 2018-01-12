var fs = require('fs')
// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
// var myReadStream = fs.createReadStream(__dirname + '/index.json')

var http = require('http')
var server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.writeHead(200, {'Content-Type': 'application/json'})
    // myReadStream.pipe(res)
    var info = {
        "name": "Jessie"
    }
    res.end(JSON.stringify(info))
})
server.listen(3000)