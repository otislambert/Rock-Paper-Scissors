

const options = ["rock", "paper", "scissors"];

let userAnswer = userPlay();
let computerAnswer = computerPlay();

let userWins = 0;
let computerWins = 0;
let plays = 0;

do {

}
while (plays < 0) {
}

if (computerWins > userWins && plays >= 5) {
	alert("Computer Wins, refresh page to try again.")
}
else if (userWins < computerWins && plays >= 5) {
	alert("You win, refresh the page if you would like to play again.")
}
else if (plays >= 5) {
	alert("It looks like a tie game.")
}

function userPlay() {
	let thePlay = prompt("Choose from 'rock', 'paper', or 'scissors': ");
	return thePlay.toLowerCase();
}


function computerPlay() {
	let selector = Math.floor(Math.random() * 3);
	return options[selector];
}

function playRound(userAnswer, computerAnswer) {
	if (userAnswer["beats"] == computerAnswer) {
		console.log("You Win");
	}
	if (computerAnswer["beats"] == userAnswer) {
		console.log("Computer Wins");
		computerWins += 1;
	}
	else {
		console.log("Tie Game");
	}
}
