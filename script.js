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
    // for (let gameCounter = 1; gameCounter <= 5; gameCounter++) {
    //     console.log(`Game: ${gameCounter}.`)
    //     playRound();
    // }
}

game();

const container = document.querySelector('#container');
const div = document.createElement('div');

div.setAttribute('id', "buttons");
div.classList.add("savage");
container.appendChild(div);

const btn1 = document.createElement('button');
btn1.setAttribute("onclick", "console.log('Rock')");
btn1.textContent = "Rock";
btn1.addEventListener('click', () => {
    playRound(getComputerChoice(), getPlayerSelection('Rock'));
});

const btn2 = document.createElement('button');
btn2.setAttribute("onclick", "console.log('Paper')");
btn2.textContent = "Paper";

const btn3 = document.createElement('button');
btn3.setAttribute("onclick", "console.log('Scissors')");
btn3.textContent = "Scissors";

div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);