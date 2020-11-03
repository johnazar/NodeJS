// Import module
const logger = require ('./logger');


function sayHello(name)
{
    logger.logtocloud(name);

    console.log('Hello ' + name);

}
sayHello('John');
//console.log(logger);
//console.log(global);
//console.log(module);
