
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello World From Exercise N1");

}).listen(8080);

