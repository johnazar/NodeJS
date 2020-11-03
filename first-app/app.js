// Import module
const logger = require ('./logger');


function sayHello(name)
{
    console.log('Hello ' + name);
    logger.logtocloud(name);
}
sayHello('John');
//console.log(logger);
//console.log(global);
//console.log(module);
console.log(__filename);
//console.log(__dirname);
