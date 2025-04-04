const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname));
app.use(express.static("html"));
app.use(express.static("img"));
app.use(express.static("scripts"));
app.use(express.static("styles"));

const sql = [{name: "Major Crits", role: "Owner"}];


app.get("/", (req, res) => {
	console.log("HI");
    res.send("Привет!");
});


app.get("/info", (req, res) => 
{
	res.send("Да");
});

app.get("/redirect", (req, res) => 
{
	res.redirect("info");
});

app.get("/add", (req, res) => 
{
	res.redirect("123456")
});

app.get("/123456", (req, res)=>
{
	res.send("Введите пароль");
});

app.listen(3000, "192.168.12.216", () => console.log("http://localhost:3000"));