var fs = require('fs')

var readMe = fs.readFileSync('readMe.txt', 'utf8')
fs.writeFileSync('writeMe.txt', readMe)
//sync is gonna block the code