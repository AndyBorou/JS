const http = require("http");
const os = require("os");
const  msg = require('./personalmodule.js');
const fs = require('fs');

fs.readFile('./file.html', function (err, html) {
    if (err) {
        throw err;
    }

    http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url === "/2" || request.url === "/"){
        response.write("<h2>"+msg(os.hostname())+"</h2>");
    }

    if(request.url === "/1" || request.url === "/"){
        response.write(html);
    }

    response.end('Testing NodeJS server\n');
}).listen(5000);
});


console.log('Server running at http://127.0.0.1:5000/');
