

function getComputerChoice() {
    let computerChoice = "";
    let value = Math.floor(Math.random()*3) + 1;
    if (value === 1) {
        computerChoice = "rock";
    } else if (value === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?", "");    
    return humanChoice;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection)
    }
    if(humanScore>computerScore) {
        console.log("\nYOU'VE WON THE GAME!")
    } else if (computerScore>humanScore){
        console.log("\nYOU'VE LOST THE GAME!")
    } else {
        console.log("\nTHE GAME IS A TIE!")
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        console.log(`\nYou've chosen ${humanChoice} and your opponent has picked ${computerChoice}!`)
        if ((humanChoice == "rock" && computerChoice == "rock") || 
        (humanChoice == "paper" && computerChoice == "paper") || 
        (humanChoice == "scissors" && computerChoice == "scissors")){
            console.log("The round is a tie!");
        } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log("You've won the round!");
            humanScore++;
        } else if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "rock")){
            console.log("You've LOST the round!");
            computerScore++;
        } else {
            console.log("Try Again, but this time with Rock, Paper or Scissors!");
        }
        console.log(`Player: ${humanScore}      Computer: ${computerScore}`)
    }


}

playGame();


