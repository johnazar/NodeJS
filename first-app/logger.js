/*
Node module to log messages to cloud service
*/

var url = 'http://logger.io/log';
function logmessage(message){
    // Send an HTTP request
    console.log(message + ' -logged');
}
// JS way to export
module.exports.log = logmessage;

