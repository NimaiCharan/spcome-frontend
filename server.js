var app = require('../spcome-backend-master/app.js');
var debug = require('debug')('spcome-backend-master:server');
const normalizePort = require('normalize-port');
var http = require('http');
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);


function onListening (){
    var addr = server.address();
    debug('Listening on ' + addr.port);
    console.log("Hello World");

}