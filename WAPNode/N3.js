var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`url from Exercise N3 => ${req.url}`);
    res.end();
}).listen(8080);