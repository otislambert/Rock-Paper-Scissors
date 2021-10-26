const options = ["rock", "paper", "scissors"];

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
		return "User Wins";
	}
	else if (comparator(computerAnswer) == userAnswer) {
		console.log("Computer Wins");
		return "Comp Wins";
	}
	else {
		console.log("Tie Game");
		return "Tie";
	}
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

function game() {
	let userWins = 0;
	let computerWins = 0;
	let plays = 0;
	while (plays < 5) {
		let result = playRound();
		plays += 1;
		if (result == "User Wins") {
			userWins += 1;
			console.log(`The score is now Computer: ${computerWins}, User: ${userWins}. On round ${plays} out of 5.`)

		}
		if (result == "Comp Wins") {
			computerWins += 1;
			console.log(`The score is now Computer: ${computerWins}, User: ${userWins}. On round ${plays} out of 5.`)
		}
		if (result == "Tie") {
			console.log(`The score is now Computer: ${computerWins}, User: ${userWins}. On round ${plays} out of 5.`)
		}
	}
	determineWinner(userWins, computerWins)
}

function determineWinner(user, computer) {
	if (user > computer) {
		console.log("You win. Refresh to play again.")
	}
	else if (computer > user) {
		console.log("Computer Wins. Refresh to play again.")
	}
	else {
		console.log("Tie Game. Refresh to play again.")
	}
}
game();