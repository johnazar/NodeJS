const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',(arg)=>{ // arg OR e , as you like
    console.log('Listener called ', arg);
});
//Rise an event
emitter.emit('messageLogged',{id:1,url:'http://'});
//Rise an event

