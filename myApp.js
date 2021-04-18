
var express = require("express");
var app = express();
require('dotenv').config()

console.log("Hello world");

const path = require("path");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/views/index.html"));
});
var respo;
var casel  = process.env.MESSAGE_STYLE;

if (casel === "uppercase") {
	respo = "Hello json".toUpperCase();
} else {
	respo = "Hello json";
}

app.get("/json", (req, res) => {
	{
		res.json({
			message: respo,
		});
	}
});

module.exports = app;
