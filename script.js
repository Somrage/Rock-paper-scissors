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

    return computerChoice
}

function round(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        let result = "It's a draw! Play again";
        console.log(result);
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
        console.log(result);
        playerScore = +1
    }
    else {
        result = `You lose this round! ${computerChoice} beats ${playerChoice}`;
        console.log(result);
        computerScore = +1
    }

    return playerScore, computerScore;
   
}

function game() {
    for (i = 1 ; i <= 5 ; i++) {
        let playerChoice = prompt("Enter \"rock\", \"paper\" or \"scissors\"", "");
        playerChoice = playerChoice.toLowerCase();
        
        if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors") {
            alert(`${playerChoice} is't allowed! Restart the game`)
            break
        }

        round(playerChoice, computerPlay());
        let gameScore = `Your score: ${playerScore} VS Computer score: ${computerScore}`;
        console.log(gameScore);
    }
}

let playerScore = 0;
let computerScore = 0;

game();