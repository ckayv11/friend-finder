// Dependencies
var path = require('path');

// HTML Routes

function htmlRoutes(app) {
// GET route for survey page
    app.get('/survey', function(req, res) {
        return res.sendFile(path.join(__dirname, '../public/survey.html'));
    })
// GET route for home page
    app.get('*', function(req, res) {
        return res.sendFile(path.join(__dirname, '../public/home.html'));
    })
};

// Export route for use in main server.js file
module.exports = htmlRoutes;