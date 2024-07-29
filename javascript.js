function getComputerChoice() {
    let randomValue = Math.ceil((Math.random()*3));
    if(randomValue == 1){
        return ("rock");
    }
    else if (randomValue == 2) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, Scissors?");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }

    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }

    else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }

    else if(computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }

    else if(computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }

    else {
        console.log("It's a tie.")
    }
}

function playGame(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
}

let humanScore = 0;
let computerScore = 0;
playGame();
console.log("Your score: " + humanScore);
console.log("Computer's score: " + computerScore);
if(humanScore>computerScore) {
    comsole.log("You win the game!")
}
else if (computerScore>humanScore){
    console.log("You lose the game!")
}

else {
    console.log("The game is a tie!")
}

