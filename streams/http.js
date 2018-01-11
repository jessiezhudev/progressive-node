var fs = require('fs')
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
var http = require('http')
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    myReadStream.pipe(res)
})
server.listen(3000)