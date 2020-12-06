const EventEmitter = require('events');
/*
Fake Node module to log messages to cloud service 
*/
var url = 'http://logger.io/log';

class Logger extends EventEmitter {
   log(message){
        // Send an HTTP request
        console.log(message + ' - from logger module');
        //Rise an event
        this.emit('messageLogged',{data:'here is some data'});
    
    }
}


// JS Export module log
module.exports = Logger;


// OR
//exports.log = logmessage;
// OR becuase we have one method
//module.exports = logmessage;






