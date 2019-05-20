// Dependencies
var express = require('express');
var path = require('path');

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up links to API & HTML Routes (order matters because catch-all)
require('../routing/apiRoutes.js')(app);
require('../routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});




