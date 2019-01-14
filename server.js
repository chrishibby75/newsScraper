// // Dependencies
// const express = require("express");
// const bodyParser = require("body-parser"); //JSON responses
// const mongoose = require("mongoose"); //Mongo object modelling 
// const request = require("request"); //Makes http calls
// const cheerio = require("cheerio"); //Scraper

// // Require all models
// const db = require("./models");

// // Port configuration for local and Heroku
// const PORT = process.env.PORT || 3000;

// // Initialize Express
// const app = express();

// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: true }));

// // Handlebars
// const exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Use express.static to serve the public folder as a static d
/////////////////////////////////////////////////////////////////////////////


var express = require("express");
// var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/unit18Populater", { useNewUrlParser: true });

//Start the server
app.listen(PORT, function () {
   console.log("App running on port " + PORT + "!");
});