var events = require('events')
//events is a core in-build module in Node.js

//it can listen to a event emitter like what jQuery does. element.on('click', function(){})
var myEmitter = new events.EventEmitter()
myEmitter.on('someEvent', function(msg){
    console.log(msg)
})
myEmitter.emit('someEvent', 'the event was emitted')
