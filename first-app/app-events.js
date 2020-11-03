const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(){
    console.log('messageLogged');
});
//Rise an event
emitter.emit('messageLogged');


