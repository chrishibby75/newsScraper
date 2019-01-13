//dependencies
var request = require("request");
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");

var PORT = process.env.PORT || 3000;

//Initialize express
var app = express();

//static content for the app from the public directory
app.use(express.static("public"));

//body parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false}));

var databaseUri = "mongodb://localhost/newsscraper";

//set Mongoose to leverage built in Javascript ES6 promises
//connect to MongoDB
mongoose.Promise = Promise;
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect(databaseURL);
}
var db = mongoose.connection;

db.on(error, function(err) {
    console.log("Mongoose error: ", err)
});

db.once(open, function() {
    console.log("Mongoose connection successful");
});

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/controller");
app.use("/", routes);

//start server
app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT + "!");
});
