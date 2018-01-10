var fs = require('fs')
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data)
})
//not block the code
console.log('test')

//delete file
fs.unlink('deleteMe.txt',function(){})