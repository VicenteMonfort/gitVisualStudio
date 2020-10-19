'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello New World\n');
    res.end('HelloFunc1\n');
    res.end('HelloFunc2\n');
    res.end('HelloFunc3\n');
}).listen(port);
