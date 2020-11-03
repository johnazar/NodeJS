
// Import log module
const Logger = require ('./log_module');
const logger = new Logger();

//Register a listener
logger.on('messageLogged',(arg)=>{ // arg OR e , as you like
    console.log('Listener called ', arg.data);
});

logger.log('Message to log');

