const options = ["rock", "paper", "scissors"];

let userWins = 0;
let computerWins = 0;
let plays = 1;

function userPlay() {
	let thePlay = prompt("Choose from 'rock', 'paper', or 'scissors': ");
	return thePlay.toLowerCase();
}


function computerPlay() {
	let selector = Math.floor(Math.random() * 3);
	return options[selector];
}

function playRound() {
	let userAnswer = userPlay();
	let computerAnswer = computerPlay();
	console.log(`You chose: ${userAnswer}, the computer chose: ${computerAnswer}`);
	if (comparator(userAnswer) == computerAnswer) {
		console.log("You Win");
		userWins += 1;
	}
	else if (comparator(computerAnswer) == userAnswer) {
		console.log("Computer Wins");
		computerWins += 1;
	}
	else {
		console.log("Tie Game");
	}
	console.log(`The score is now Computer: ${computerWins}, User: ${userWins}. On round ${plays} out of 5.`)
}

function comparator(answer) {
	if (answer == "rock") {
		return "scissors";
	}
	else if (answer == "paper") {
		return "rock";
	}
	else if (answer == "scissors") {
		return "paper";
	} else {
		alert("this doesn't beat anything");
	}
}

function determineWinner() {
	if (computerWins > userWins) {
		alert("Computer Wins, refresh page to try again.")
	}
	else if (userWins < computerWins) {
		alert("You win, refresh the page if you would like to play again.")
	}
	else {
		alert("It looks like a tie game. Refresh the page.")
	}
}

function game() {
	while (plays < 6) {
		playRound()
		plays += 1;
	}
	determineWinner();
}

game();