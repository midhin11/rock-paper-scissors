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

    console.log(`\nYou've chosen ${humanChoice} and your opponent has picked ${computerChoice}!`)  //console
    comment.textContent = `You've chosen ${humanChoice} and your opponent has picked ${computerChoice}`;
    
    if ((humanChoice == "rock" && computerChoice == "rock") || 
    (humanChoice == "paper" && computerChoice == "paper") || 
    (humanChoice == "scissors" && computerChoice == "scissors")){
        console.log("The round is a tie!");  //console
        results.textContent = "The round is a tie!";
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "paper" && computerChoice == "rock") || 
    (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You've won the round!");  //console
        results.textContent = "You've won the round!";
        humanScore++;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "rock")){
        console.log("You've LOST the round!");  //console
        results.textContent = "You've LOST the round!";
        computerScore++;
    } 

    console.log(`Player: ${humanScore}      Computer: ${computerScore}`)  //console
    score.textContent = `Player: ${humanScore}      Computer: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        let allbuttons = document.querySelectorAll("button");
        allbuttons.forEach(btn => btn.disabled = true);
        let body = document.querySelector("body");
        let newGameBtn = document.createElement("button");
        newGameBtn.textContent = "New Game"
        body.append(newGameBtn);
        newGameBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            allbuttons.forEach(btn => btn.disabled = false);
            results.textContent = "";
            score.textContent = "";
            comment.textContent = "";
            body.removeChild(newGameBtn);
            return;
        })
    }
}

let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", playRound);