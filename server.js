// dependencies ===================================================== 

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');


// server setup ==============================================================
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER



// =============================================================================
// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});