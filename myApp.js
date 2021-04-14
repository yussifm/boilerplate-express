var express = require('express');
var app = express();

console.log("Hello world"); 


const path = require('path');
app.use("/public", express.static(__dirname + "/public"));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/index.html"));
    
})



































 module.exports = app;
