const statusText = document.querySelector('#play-status-text');
statusText.textContent = "Make your play"

const compStatusText = document.querySelector('#comp-status-text');
const compStatusDiv = document.querySelector('#comp-status');

const winnerDiv = document.querySelector('#winner');
const winnerText = document.querySelector('#winner-status-text');

const playStatus = Array.from(document.querySelectorAll('.plays'));

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const selectionButton = Array.from(document.querySelectorAll('.select'));
const playbtn = document.querySelector('#playbutton');

selectionButton.forEach(selectionButton => selectionButton.addEventListener('click', plays))

let userAnswer = "";
let computerAnswer = "";

let userWins = 0;
let computerWins = 0;
let playCount = 0;

const options = ["rock", "paper", "scissors"];

function plays(e) {
	setUserAnswer(e);
	computerPlay();
	setTimeout(playRound, 2000);
	setTimeout(reset, 7000);
}

function setUserAnswer(e) {
	statusText.textContent = (`You have chosen ${e.target.id}.`)
	userAnswer = e.target.id
}

function computerPlay() {
	compStatusDiv.classList.remove('hidden');
	let selector = Math.floor(Math.random() * 3);
	answer = options[selector];
	compStatusText.textContent = `The Computer chose ${answer}`;
	computerAnswer = answer;
	return answer;
}

function playRound() {
	playStatus.forEach((Element) => {Element.classList.add('hidden')});
	winnerDiv.classList.remove('hidden');
	playCount += 1;
	if (comparator(userAnswer) == computerAnswer) {
		winnerText.textContent = "You Win!";
		userWins += 1;
		setTimeout(displayScore, 2000);
		return true;
	}
	else if (comparator(computerAnswer) == userAnswer) {
		winnerText.textContent = "The Computer Wins.";
		computerWins += 1;
		setTimeout(displayScore, 2000);
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

function displayScore() {
	winnerText.textContent = `The computer has ${computerWins}. You have ${userWins}.`
}

function reset() {
	playStatus.forEach((Element) => {Element.classList.remove('hidden')});
	compStatusDiv.classList.add('hidden');
	winnerDiv.classList.add('hidden');
	statusText.textContent = "Make your play."
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
