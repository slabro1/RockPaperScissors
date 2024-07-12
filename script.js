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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("draw")
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
    }
    else if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore += 1;
        console.log("You win! Paper beats Rock");
    }
    else if (computerChoice == "scissor" && humanChoice == "paper") {
        computerScore += 1;
        console.log("You lose! Scissor beats Paper")
    }
    else if (computerChoice == "paper" && humanChoice == "scissor") {
        humanScore += 1;
        console.log("You win! Scissor beats Paper");
    }
    else if (computerChoice == "rock" && humanChoice == "scissor") {
        computerScore += 1;
        console.log("You lose! Rock beats Scissor")
    }
    else if (computerChoice == "scissor" && humanChoice == "rock") {
        humanScore += 1;
        console.log("You win! Rock beats Scissor");
    }
}
