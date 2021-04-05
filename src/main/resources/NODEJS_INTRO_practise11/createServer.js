const http = require("http");
const os = require("os");
const  msg = require('./personalmodule.js');
const  info = require('./systemInfo.js');
const fs = require('fs');
const path = require('path');


fs.readFile('./file.html', function (err, html) {
    if (err) {
        throw err;
    }

    http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url === "/2" || request.url === "/"){
        response.write("<h2>"+msg(os)+"</h2>");
    }

    if(request.url === "/1" || request.url === "/"){
        response.write(info(os, path));
    }

    response.end('');
}).listen(5000);
});


console.log('Server running at http://127.0.0.1:5000/');
