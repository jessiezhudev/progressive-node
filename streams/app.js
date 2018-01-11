var fs = require('fs')
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
// myReadStream.on('data', function(chunk){
//     console.log('chunk has been received: ')
//     console.log(chunk)
// })
myReadStream.pipe(myWriteStream)