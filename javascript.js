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

function getHumanChoice(e) {
    if((e.target.id) === "rock") {
        humanChoice = "rock"
    } else if (e.target.id === "paper") {
        humanChoice = "paper";
    } else if (e.target.id === "scissors"){
        humanChoice = "scissors";
    }
    return humanChoice;
}

function playRound(e){
    
    let results = document.querySelector(".results");
    let comment = document.querySelector(".comment");
    let score = document.querySelector(".score");
    humanChoice = getHumanChoice(e);
    computerChoice = getComputerChoice();

    console.log(`\nYou've chosen ${humanChoice} and your opponent has picked ${computerChoice}!`)
    comment.textContent = `You've chosen ${humanChoice} and your opponent has picked ${computerChoice}`;
    
    if ((humanChoice == "rock" && computerChoice == "rock") || 
    (humanChoice == "paper" && computerChoice == "paper") || 
    (humanChoice == "scissors" && computerChoice == "scissors")){
        console.log("The round is a tie!");
        results.textContent = "The round is a tie!";
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "paper" && computerChoice == "rock") || 
    (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You've won the round!");
        results.textContent = "You've won the round!";
        humanScore++;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "rock")){
        console.log("You've LOST the round!");
        results.textContent = "You've LOST the round!";
        computerScore++;
    } 

    console.log(`Player: ${humanScore}      Computer: ${computerScore}`)
    score.textContent = `Player: ${humanScore}      Computer: ${computerScore}`;
}

let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", playRound);