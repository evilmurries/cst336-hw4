// Bring in packages
const express = require("express");
const app = express();
const faker = require("faker");
const hackerSpeak = faker.hacker.phrase();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

const port = 3000;

// Routes
app.get("/", function(req, res) {
    res.render("index.html", {"hackerTalk": hackerSpeak});
});
app.get("/firms", function(req, res) {
    res.render("firms.html");
});
app.get("/bestpractices", function(req, res) {
    res.render("bestpractices.html");
});
app.get("/types", function(req, res) {
    res.render("types.html");
});

//server listener
app.listen(port, "127.0.0.1", function() {
    console.log("Express Server is running")
});


/*
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});
*/
