// Reference friends data from data file by using require
var friendsData = require('../data/friends.js');

// API Routes

function apiRoutes(app) {
// Using GET route to display all possible friends
    app.get('/api/friends', function(req, res) {
      res.json(friendsData);
    });
// Using POST route to handle input & calculate match
    app.post('/api/friends', function(req, res) {
      let newFriend = calcMatch(req.body);
      friendsData.push(req.body);
      res.json(newFriend);
    });
};

// Calculate match function
function calcMatch(friendMatched) {
    let matches = [];
    for (var i = 0; i < friendsData.length; i++) {
        matches.push({
                name: friendsData[i].name,
                photo: friendsData[i].photo,
                score: compareScores(friendMatched.scores, friendsData[i].scores)
            });
    };
matches.sort(function(a, b) {
    return (a.score - b.score)
});
return matches[0];
};

// Compare scores function
function compareScores(newScore, existingScore) {
    let scoreDiff = 0;
    newScore.map(function (currentValue, index) {
        scoreDiff += Math.abs(currentValue - existingScore[index]);
    });
    return scoreDiff;
};

// Export route for use in main server.js file
module.exports = apiRoutes;