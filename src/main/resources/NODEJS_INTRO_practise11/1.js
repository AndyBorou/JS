
const express = require('express');
const  msg = require('./personalmodule.js');
const  info = require('./systemInfo.js');
var os = require("os");
const path = require('path');

const app = express();
const port = 5000;

app.get("/1", (request, response) => {
    response.send(msg(info(os, path)));
})

app.get("/2", (request, response) => {

    response.send(msg(os));
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})