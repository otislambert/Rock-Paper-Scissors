const statusText = document.querySelector('#play-status-text');
statusText.textContent = "Make your play"

const compStatusText = document.querySelector('#comp-status-text');

const winner = document.querySelector('#winner');
const winnerText = document.querySelector('#winner-status-text');

const playStatus = Array.from(document.querySelectorAll('.plays'));

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const selectionButton = Array.from(document.querySelectorAll('.select'));
const playbtn = document.querySelector('#playbutton');

selectionButton.forEach(selectionButton => selectionButton.addEventListener('click', plays))

let userAnswer = "hi";
let computerAnswer = "";
const options = ["rock", "paper", "scissors"];

function plays(e) {
	setUserAnswer(e);
	computerPlay();
	setTimeout(playRound, 3000);
}

function setUserAnswer(e) {
	statusText.textContent = (`You have chosen ${e.target.id}.`)
	userAnswer = e.target.id
}

function computerPlay() {
	let selector = Math.floor(Math.random() * 3);
	answer = options[selector];
	compStatusText.textContent = `The Computer chose ${answer}`;
	return answer;
}

function playRound() {
	console.log(playStatus);
	playStatus.forEach((Element) => {Element.classList.add('hidden')});
	console.log(winner);
	winner.classList.remove('hidden');
	if (comparator(userAnswer) == computerAnswer) {
		winnerText.textContent = "You Win!";
		return true;
	}
	else if (comparator(computerAnswer) == userAnswer) {
		winnerText.textContent = "The Computer Wins.";
		return false;
	}
	else {
		winnerText.textContent = "It's a tie game."
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
	}
}

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
