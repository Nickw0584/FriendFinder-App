const friendData = require("../data/friends");
///const newFriendData = require("../data/friends");


app.get("/api/friends", function (req, res) {
    return res.json(friendData);
});

// POST method route
app.post('/api/friends', function (req, res) {
    const bestFriendMatch = {
        name: "",
        photo: "",
        totalDiffrerence: 1000
    };
})
//parses users survey post got this from the 
//liri bot that john helped me fix undertand on how to do.
const userData = req.body;
let friendScores = userData.scores;
let userName = userData.name;
let userPhoto = userData.photo;

// calculate the difference between the scores 
let totalDifference = 0;

// used to move throught the data of objects
for (const i = 0; i < friendData.length - 1; i++) {
    console.log(friendData[i].name);
}
totalDifference = 0;

for (const k = 0; k < 10; k++) {
    totalDifference += Math.abs(parseInt(friendScores[k]))
        - parseInt(friendData[i].scores[k]);

    // <= found this in mozilla and found defintion
    if (totalDifference <= bestFriendMatch.pointDiffrerence) {
        //new freind reset
        bestFriendMatch.name = friendData[i].name;
        bestFriendMatch.photo = friendData[i].photo;
        bestFriendMatch.totalDiffrerence = friendDifference;

        friendData.push(userData);
        res.json(bestFriendMatch);
    }
}