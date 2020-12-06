const os = require('os');
var toatlMemory = os.totalmem();
var freeMemo = os.freemem();


console.log(`Total Memory: ${toatlMemory}`);
console.log(`Free Memory: ${freeMemo}`);