# Rock Paper Scissors

This is going to be a simple Javascript based game of Rock Paper Scissors. It is being done as a practice project for *The Odin Project*.

## Understanding

This program needs to accept an input from a person, it needs to randomly generate either "rock", "paper" or "scissors" from the computer. it needs to figure out who wins, and it needs to keep track of a full game.

## Plan

### Input from a human

```text
JS Prompt
make case insensitive
check that the input is either "Rock" "Paper", or "Scissors"
```

### Generate the Computer Response

```text
have a a set with "rock", "paper" and "scissors"
randomly choose one
```

### Assign comparators

```text
Create a dataset for rock paper and scissors
rock {
	beats: scissors;
}
```

### Compare the two responses

```text
if humanInput == computerInput[beats] computer wins hWin++
if computerInput == humanInput[beats] human wins cWin++
```

### Record Wins

```text
while cWin < 5 && hWin < 5:
play again
then:
announce the winner
play again button
```
