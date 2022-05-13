let playerScore = 0;
let computerScore = 0;
const gameScore = document.querySelector('.score');

const result = document.querySelector('.result');


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
        console.log(result);
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        console.log(result);
        playerScore += 1
    }
    else {
        result.textContent = `You lose this round! ${computerChoice} beats ${playerChoice}`;
        console.log(result);
        computerScore += 1
    }
    
    return gameScore.textContent = `Your score is ${playerScore} || Computer score is ${computerScore}`;
    
}

const selection = document.querySelectorAll('button')
    selection.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.id;
            round(playerChoice, computerPlay());
        })
    })

// function game() {
//     let playerChoice = prompt("Enter \"rock\", \"paper\" or \"scissors\"", "");
    
//     if (playerChoice == null) {
//         alert("You canceled your choice, please restart the game!")
//         break;
//     }
//     else {
//         playerChoice = playerChoice.toLowerCase();
//     }
//     if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
//         alert(`${playerChoice} isn't allowed! Restart the game`)
//         break;
//     }
//     round(playerChoice, computerPlay());
//     gameScore = `Your score: ${playerScore} VS Computer score: ${computerScore}`;
//     console.log(gameScore);
    

//     if (playerScore === computerScore) {
//         alert(`It's a total draw! Play another game to know the winner!
// ${gameScore}`);
//     } 
//     else if (playerScore > computerScore) {
//         alert(`Congratulations! You win :)
// ${gameScore}`);
//     }
//     else {
//         alert(`Oh no, you lose! Better luck next time :)
// ${gameScore}`);
//     }

//     playerScore = 0;
//     computerScore = 0;
// }

// game();