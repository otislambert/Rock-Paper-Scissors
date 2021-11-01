const statusText = document.querySelector('#status-text');
statusText.textContent = "Make your play"

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const selectionButton = document.querySelector('.select');

let userAnswer = "";

function setUserAnswer() {
	let userAnswer = rock;
	statusText.textContent = `You chose ${userAnswer}!`;
}

rock.addEventListener('click', setUserAnswer());

const options = ["rock", "paper", "scissors"];

// function computerPlay() {
// 	let selector = Math.floor(Math.random() * 3);
// 	return options[selector];
// }

// function playRound() {
// 	let computerAnswer = computerPlay();
// 	statusText.textContent = `You chose: ${userAnswer}, the computer chose: ${computerAnswer}`;
// 	if (comparator(userAnswer) == computerAnswer) {
// 		console.log("You Win");
// 		return true
// 	}
// 	else if (comparator(computerAnswer) == userAnswer) {
// 		console.log("Computer Wins");
// 		return false
// 	}
// 	else {
// 		console.log("Tie Game");
// 	}
// }

// function comparator(answer) {
// 	if (answer == "rock") {
// 		return "scissors";
// 	}
// 	else if (answer == "paper") {
// 		return "rock";
// 	}
// 	else if (answer == "scissors") {
// 		return "paper";
// 	} else {
// 		alert("this doesn't beat anything");
// 	}
// }

// function game() {
// 	let userWins = 0;
// 	let computerWins = 0;
// 	let plays = 0;
// 	while (plays < 6) {
// 		playRound()
// 		plays += 1;
// 		if (playRound()) {
// 			userWins += 1;
// 		}
// 		else {
// 			computerWins += 1;
// 		}
// 		console.log(`The score is now Computer: ${computerWins}, User: ${userWins}. On round ${plays} out of 5.`)
// 	}
// 	determineWinner(userWins, computerWins)
// }

// function determineWinner(user, computer) {
// 	if (user > computer) {
// 		alert("You win. Refresh to play again.")
// 	}
// 	else if (computer > user) {
// 		alert("Computer Wins. Refresh to play again.")
// 	}
// 	else {
// 		alert("Tie Game. Refresh to play again.")
// 	}
// }
