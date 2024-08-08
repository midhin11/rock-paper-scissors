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

// function getHumanChoice() {
//     let userChoice = prompt("Rock, Paper, Scissors?");
//     return userChoice.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
    let roundResult = document.querySelector(".roundResult");

    if(humanChoice == "paper" && computerChoice == "rock") {
        roundResult.textContent = "The God has chosen rock! You win this time Mortal! Paper beats Rock";
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    else if(humanChoice == "rock" && computerChoice == "scissors") {
        roundResult.textContent = "The God has chosen scissors! You win this time Mortal! Rock beats Scissors";
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }

    else if(humanChoice == "scissors" && computerChoice == "paper") {
        roundResult.textContent = "The God has chosen paper! You win this time Mortal! Scissors beats Paper";
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }

    else if (computerChoice == "paper" && humanChoice == "rock") {
        roundResult.textContent = "The God has chosen paper! You lose mortal! Paper beats Rock";
        console.log("Paper beats Rock");
        computerScore++;
    }

    else if(computerChoice == "rock" && humanChoice == "scissors") {
        roundResult.textContent = "The God has chosen rock! You lose! Rock beats Scissors";
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }

    else if(computerChoice == "scissors" && humanChoice == "paper") {
        roundResult.textContent = "The God has chosen scissors! You lose! Scissors beats Paper";
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }

    else {
        roundResult.textContent = "It's a tie. Let's go at it again!";
        console.log("It's a tie.")
    }
}


// function playGame(){
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
// }

let humanScore = 0;
let computerScore = 0;
// playGame();

let gameButtons = document.querySelector(".buttons");
gameButtons.addEventListener("click", function(event){

    let result = document.querySelector(".result");
    result.textContent = "";
    let target = event.target; 
    if(target.className === "rock"){
        let computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
    }
    else if(target.className === "paper"){
        let computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
    }
    else if(target.className === "scissors"){
        let computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
    }
    console.log("User score: " + humanScore + " --- Computer score: " + computerScore);

    let runningScore = document.querySelector(".runningScore");
    runningScore.textContent = "Mortal's score: " + humanScore + " --- God's score: " + computerScore;

    if(humanScore === 5){
        result.textContent = "IMPOSSIBLE! A mere mortal has bested a god. Enjoy your victory, for it is fleeting.";
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5){
        result.textContent = "YOU LOSE, MORTAL! \nBy giving a mere rock the power to think, you have created a GOD!";
        humanScore = 0;
        computerScore = 0;
    }
});



// console.log("Your score: " + humanScore);
// console.log("Computer's score: " + computerScore);
// if(humanScore>computerScore) {
//     comsole.log("You win the game!")
// }
// else if (computerScore>humanScore){
//     console.log("You lose the game!")
// }

// else {
//     console.log("The game is a tie!")
// }

