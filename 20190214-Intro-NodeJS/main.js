var op = require('./operations');
var http = require('http');
var fs = require('fs');

var result = op.add(2, 5);
console.log(result);



setTimeout(function () {
    console.log("ciao dopo 1 secondo");
}, 1000);

console.log("ciao ciao");

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
*/


http.createServer((req, res) => {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);