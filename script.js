function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = "Rock";
    }
    if (randomNumber === 1) {
        computerChoice = "Paper";
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerSelection() {
    let playerInput = prompt("Write to choose Rock, Paper or Scissors").toLowerCase();
    let playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerSelection();
    if (computerChoice === playerChoice) {
        console.log("Tie game");
    }
    else if (computerChoice === "Rock" && playerChoice === "Paper") {
        console.log(`You win. ${playerChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        console.log(`You win. ${playerChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        console.log(`You win. ${playerChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "Paper" && playerChoice === "Rock") {
        console.log(`You lose. ${computerChoice} beats ${playerChoice}`);
    }
    else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log(`You lose. ${computerChoice} beats ${playerChoice}`);
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        console.log(`You lose. ${computerChoice} beats ${playerChoice}`);
    }
    else {
        console.log("Invalid answer.");
    }
}

function game() {
    for (let gameCounter = 1; gameCounter <= 5; gameCounter++) {
        console.log(`Game: ${gameCounter}.`)
        playRound();
    }
}

game();