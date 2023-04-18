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

function getPlayerSelection(choice) {
    let playerChoice = choice;
    return playerChoice;
}

const score = {
    player: 0,
    computer: 0
}

function showScore() {
    gameScore.innerHTML = `Player: ${score.player} || Computer: ${score.computer}`;
}

function playRound(computerChoice, playerChoice) {
    showScore();
    let winner;
    if (score.player >= 5) {
        winner = "Player";
    }
    if (score.computer >= 5) {
        winner = "Computer";
    }
    if (score.player >= 5 || score.computer >= 5) {  
        results.innerHTML = `The winner is: ${winner}`;
    } else {
        if (computerChoice === playerChoice) {
            showScore();
            return results.innerHTML = "Tie game"
        }
        else if (computerChoice === "Rock" && playerChoice === "Paper") {
            results.innerHTML = `You win. ${playerChoice} beats ${computerChoice}`;
            showScore();
            return score.player += 1;
        }
        else if (computerChoice === "Paper" && playerChoice === "Scissors") {
            results.innerHTML = `You win. ${playerChoice} beats ${computerChoice}`;
            showScore();
            return score.player += 1;
        }
        else if (computerChoice === "Scissors" && playerChoice === "Rock") {
            results.innerHTML = `You win. ${playerChoice} beats ${computerChoice}`;
            showScore();
            return score.player += 1;
        }
        else if (computerChoice === "Paper" && playerChoice === "Rock") {
            results.innerHTML = `You lose. ${computerChoice} beats ${playerChoice}`;
            showScore();
            return score.computer += 1;
        }
        else if (computerChoice === "Scissors" && playerChoice === "Paper") {
            results.innerHTML = `You lose. ${computerChoice} beats ${playerChoice}`;
            showScore();
            return score.computer += 1;
        }
        else if (computerChoice === "Rock" && playerChoice === "Scissors") {
            results.innerHTML = `You lose. ${computerChoice} beats ${playerChoice}`;
            showScore();
            return score.computer += 1;
        }
        else {
            showScore();
            return results.innerHTML = "Invalid answer.";
        }
    }
}

const container = document.querySelector('#container');
const title = document.createElement('div');
const titleH1 = document.createElement('h1');
const results = document.createElement('div');
const gameScore = document.createElement('div');
const roundTextDiv = document.createElement('div');

container.classList.add('spacing');
title.classList.add('spacing');
results.classList.add('spacing');
gameScore.classList.add('spacing');
roundTextDiv.classList.add('spacing');

title.setAttribute('id', "title")
container.appendChild(title);
title.appendChild(titleH1);
titleH1.innerHTML = "Rock Paper Scissors Game:"

results.setAttribute('id', "results");
container.appendChild(results);

gameScore.setAttribute('id', "score");
container.appendChild(gameScore);

roundTextDiv.setAttribute('id', "buttons");
container.appendChild(roundTextDiv);

const btn1 = document.createElement('button');
btn1.textContent = "Rock";
btn1.addEventListener('click', () => {
    playRound(getComputerChoice(), getPlayerSelection('Rock'));
});

const btn2 = document.createElement('button');
btn2.textContent = "Paper";
btn2.addEventListener('click', () => {
    playRound(getComputerChoice(), getPlayerSelection('Paper'));
});

const btn3 = document.createElement('button');
btn3.textContent = "Scissors";
btn3.addEventListener('click', () => {
    playRound(getComputerChoice(), getPlayerSelection('Scissors'));
});

roundTextDiv.appendChild(btn1);
roundTextDiv.appendChild(btn2);
roundTextDiv.appendChild(btn3);