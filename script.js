function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if (n == 0) {
        return "rock";
    }
    else if (n == 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

buttons.addEventListener("click", (event) => {
    let target = event.target;
    computerChoice = getComputerChoice()
    switch(target.id) {
        case "rock":
            playRound("rock", computerChoice)
            break;
        case "paper":
            playRound("paper", computerChoice)
            break;
        case "scissor":
            playRound("scissor", computerChoice)
            break;
    }
});


let computerScore = 0
let humanScore = 0
let result = document.querySelector("#result")

function checkout(){
    if (computerScore >= 5) {
        result.innerText = "You lose the game";
        buttons.addEventListener('click',function(event) {
            event.preventDefault();
        });
    }
    else if (humanScore >= 5) {
        result.innerText = "You win the game";
        buttons.addEventListener('click',function(event) {
            event.preventDefault();
        });
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.innerText = "draw";
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore += 1;
        result.innerText = "You lose! Paper beats Rock";
    }
    else if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore += 1;
        result.innerText = "You win! Paper beats Rock";
    }
    else if (computerChoice == "scissor" && humanChoice == "paper") {
        computerScore += 1;
        result.innerText = "You lose! Scissor beats Paper";
    }
    else if (computerChoice == "paper" && humanChoice == "scissor") {
        humanScore += 1;
        result.innerText = "You win! Scissor beats Paper";
    }
    else if (computerChoice == "rock" && humanChoice == "scissor") {
        computerScore += 1;
        result.innerText = "You lose! Rock beats Scissor";
    }
    else if (computerChoice == "scissor" && humanChoice == "rock") {
        humanScore += 1;
        result.innerText = "You win! Rock beats Scissor";
    }
    checkout();
}
