var express = require("express");
var app = express();

console.log("Hello world");

const path = require("path");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/views/index.html"));
});
var respo;

if (process.env.MESSAGE_STYLE === "uppercase") {
	respo = "Hello World".toUpperCase();
} else {
	respo = "Hello World".toUpperCase();
}

app.get("/json", (req, res) => {
	{
		res.json({
			message: respo,
		});
	}
});

module.exports = app;
