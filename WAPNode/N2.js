
var http = require('http');
var dt = require('./myModule');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`The Date and Time are From Exercise N2 => : ${dt.myDate()}`);
    res.end();
}).listen(8080); 