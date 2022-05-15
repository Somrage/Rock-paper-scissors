let playerScore = 0;
let computerScore = 0;
const gameScore = document.querySelector('.score');

const result = document.querySelector('.result');

const computerPick = document.querySelector('.computer-pick')


function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3) + 1;
    if (computerChoice == 1) {
        computerChoice = "rock"
    }
    else if (computerChoice == 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }

    return computerChoice;
}


function round(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = "It's a draw! Play again";
        computerPick.textContent = `Bob picked ${computerChoice}`
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        computerPick.textContent = `Bob picked ${computerChoice}`
        playerScore += 1
    }
    else {
        result.textContent = `You lose this round! ${computerChoice} beats ${playerChoice}`;
        computerPick.textContent = `Bob picked ${computerChoice}`
        computerScore += 1
    }
    
    return gameScore.textContent = `${playerScore} | ${computerScore}`;
    
}

const selection = document.querySelectorAll('.choice')
    selection.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.id;
            round(playerChoice, computerPlay());

            if (playerScore === 5) {
                result.textContent = `Congratulations! You win :)`
                computerPick.textContent = `Bob is ready for next game!`
                playerScore = 0;
                computerScore = 0;
            }
            else if (computerScore === 5) {
                result.textContent = `Oh no, you lose! Better luck next time :)`
                computerPick.textContent = `Bob is ready for next game!`
                playerScore = 0;
                computerScore = 0;
            }
        })
    })

const restart = document.querySelector('#restart')
restart.addEventListener('click', () => {
    gameScore.textContent = `0 | 0`;
    result.textContent = `Hello! To start the game pick rock, paper, or scissors`;
})