// Import module
const logger = require ('./log_module');
// Built in module
const path = require('path');


function sayHello(name)
{
    console.log('Hello ' + name);
    logger.logtocloud(name);
}
//sayHello('John');
//console.log(logger);
//console.log(global);
//console.log(module);
console.log('__filename ',__filename);
console.log('__dirname ', __dirname);


// work with path module
var pathObj = path.parse(__filename);
console.log(pathObj);
