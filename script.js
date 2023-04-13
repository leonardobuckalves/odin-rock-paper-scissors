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
}

getComputerChoice();