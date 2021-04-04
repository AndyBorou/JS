// const http = require('http');
// const url = require('url');
// const  msg = require('./date.js');
// // const querystring = require('querystring');
// const static = require('node-static');
//
// const file = new static.Server('.', {
//   cache: 0
// });
//
// function accept(req, res) {
//
//   if (req.url == '/date.js') {
//
//    // response.write(getInfoDate());
//
//     res.write(msg());
//       file.serve(req, res);
//   } else {
//     file.serve(req, res);
//   }
// }
//
// // ------ run -------
// http.createServer(accept).listen(8080);
// console.log("Server running at http://localhost:8080");

const express = require('express');
const  getInfo = require('./date.js');
const  getBooks = require('./parseJson.js');
const os = require("os");
const fs = require('fs');

const app = express();
const port = 8080;

let rawdata = fs.readFileSync('books.json');
let books = JSON.parse(rawdata);

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get("/date.js", (request, response) => {
  response.send(getInfo())
})


app.get("/getBooks.json", (request, response) => {
  response.send(getBooks(books))
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})



