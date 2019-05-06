var userScores = {
	"Teed": 10,
	"Teedberjoe": 29
}

var express = require('express');

var app = express();

var port = 8000;

var server = app.listen(port, started);

function started() {
	console.log("Server listening on port: " + port)
}

app.get('/highscore/:user/:score', sendHighScore);

function sendHighScore(request, response) {
	let user = request.params.user;
	let score = request.params.score;

	userScores[user] = score;

	response.send(user + " with a high score of " + score + " was added");
}

app.get('/scorelist', getScoreList);

function getScoreList(request, response) {
	response.send(userScores);
}