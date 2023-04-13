function getComputerChoice() {
    let computerChoice = "";
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

getComputerChoice();
getPlayerSelection();