const { Socket } = require('dgram');
const { readFileSync } = require('fs');
const http = require('http');
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.write('Hello for Node JS');
        res.end();
    }
    if(req.url == '/api/'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

//register a listener
/* server.on('connection', (socket)=>{
    console.log('New Connection...');
}); */

console.log('Listening on port 3000...')