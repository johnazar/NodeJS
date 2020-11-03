/*
Fake Node module to log messages to cloud service 
*/

var url = 'http://logger.io/log';
function logmessage(message){
    // Send an HTTP request
    console.log(message + ' - from logger module');
}
// JS Export module log
module.exports.logtocloud = logmessage;
// OR
//exports.log = logmessage;
// OR becuase we have one method
//module.exports = logmessage;


