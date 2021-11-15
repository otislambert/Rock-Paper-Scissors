const playsLeftText = document.querySelector('#playsLeft');
const userScoreText = document.querySelector('#userScore');
const compScoreText = document.querySelector('#compScore');

const btns = Array.from(document.querySelectorAll('button'));

const compImage = document.querySelector('#compImage');
const compSelectionText = document.querySelector('#compSelectionText');
const userSelectionText = document.querySelector('#userSelectionText');

const winnerDeclaration = document.querySelector('#winnerDeclaration');
const winnerText = document.querySelector('#winnerText');

let plays = 0;
let userScore = 0;
let compScore = 0;

const playOptions = ["rock", "paper", "scissors"];

let userAnswer = '';
let compAnswer = '';

btns.forEach(btns => btns.addEventListener('click', playGame));	

function playGame(e) {
	if (plays < 5) {
	setUserAnswer(e);
	setcompAnswer();
	setComputerImage();
	gameRound();
	updateScore();
	}
	if (plays >= 5) {
		gameOver();
	}
}

function setUserAnswer(e) {
	userAnswer = e.target.id;
	userSelectionText.textContent = `${userAnswer}`;
}

function setcompAnswer() {
	let selector = Math.floor(Math.random() * 3);
	let answer = playOptions[selector];
	compAnswer = answer;
	compSelectionText.textContent = `${compAnswer}`;
	console.log(compAnswer);
}

function setComputerImage() {
	compImage.src = `Icons/${compAnswer}.png`;
}

function gameRound() {
	plays += 1;
	if (comparator(userAnswer) == compAnswer) {
		userScore += 1;
	}
	else if (comparator(compAnswer) == userAnswer) {
		compScore += 1;
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

function updateScore() {
	playsLeftText.textContent = `${5 - plays} plays left.`;
	userScoreText.textContent = `User: ${userScore}`;
	compScoreText.textContent = `Computer: ${compScore}`;
}

function gameOver() {
	winnerText.textContent = 'Game over. Refresh to play again.';
}