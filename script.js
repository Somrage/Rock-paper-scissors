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
    }
    else {
        result = `You lose this round! ${computerChoice} beats ${playerChoice}`;
        console.log(result);
    }
   
}

let playerChoice = prompt("Your choice?", "")
playerChoice = playerChoice.toLowerCase()

round(playerChoice, computerPlay());