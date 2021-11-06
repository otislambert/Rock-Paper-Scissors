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

let userAnswer = "";
let computerAnswer = "";

let userWins = 0;
let computerWins = 0;
let plays = 1;

let roundWinner = "";

const options = ["rock", "paper", "scissors"];

if (plays <= 6) {
	selectionButton.forEach(selectionButton => selectionButton.addEventListener('click', game))
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
	if (comparator(userAnswer) == computerAnswer) {
		winnerText.textContent = "You Win!";
		setTimeout(displayScore, 2000);
		roundWinner = 'user';
		return true;
	}
	else if (comparator(computerAnswer) == userAnswer) {
		winnerText.textContent = "The Computer Wins.";
		setTimeout(displayScore, 2000);
		roundWinner = 'computer';
		return false;
	}
	else {
		winnerText.textContent = 'It\'s a tie game.';
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

function game(e) {
	console.log(plays)
	if (plays <= 5) {
		setUserAnswer(e);
		computerPlay();
		setTimeout(playRound, 2000);		
		plays += 1;
		if (roundWinner == 'user') {
			userWins += 1;
			setTimeout(displayScore, 4000);
			setTimeout(reset, 6000);
		}
		else if (roundWinner == 'computer') {
			computerWins += 1;
			setTimeout(displayScore, 4000);
			setTimeout(reset, 6000);
		}
		return;
	}
	determineWinner();
}

function determineWinner() {
	if (userWins > computerWins) {
		statusText.textContent = "You win. Refresh to play again.";
	}
	else if (computerWins > userWins) {
		statusText.textContent = "Computer Wins. Refresh to play again.";
	}
	else {
		statusText.textContent = "Tie Game. Refresh to play again.";
	}
}
