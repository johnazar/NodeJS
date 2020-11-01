const logger = require ('./logger');


function sayHello(name)
{
    logger.log('message');

    console.log('Hello ' + name);

}
sayHello('John');
//console.log(logger);
//console.log(global);
//console.log(module);
