function getComputerChoice () {
    let n = Math.floor(Math.random() * 3);
    if (n == 0) {
        return "rock";
    }
    else if (n == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
