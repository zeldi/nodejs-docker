'use strict';
var os = require("os");

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 
var hostname = os.hostname();

app.get('/', (req, res) => {
    res.render("index", { host: hostname })
//   res.send(' Welcome to My-Application, this app running on host ',os.hostname());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);