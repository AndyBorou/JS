const express = require('express');
const  msg = require('./personalmodule.js');
const os = require("os");

const app = express();
const port = 5000;

app.get("/1", (request, response) => {
response.sendFile(__dirname + '/file.html')
})

app.get("/2", (request, response) => {

    response.(msg(os.hostname()))
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})