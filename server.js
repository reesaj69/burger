var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var app = express();
var PORT = process.env.PORT || 8000;

var db = process.env.DATABASE_URL || 'localhost'

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});





// //set dependencies
// var express = require("express");
// var exphbs = require("express-handlebars");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// //use app for an express call
// var app = express();

// //Set port, process.env.PORT for heroku, 3000 for local machine
// var PORT = process.env.PORT || 3000;

// //uese method override for forum PUT and DELETE queries
// app.use(methodOverride("_method"));

// //set engine and default for handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main"}) );
// app.set("view engine", "handlebars");

// //set body-parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// //serve static content from the public directory
// app.use(express.static(__dirname + "/public"));

// //require burgers-controller,js for the routes
// var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);
// app.use("/:id", routes);

// //Initiate the listener
// app.listen(PORT, function(){
//   console.log("App listening on PORT: " + PORT);
// });












