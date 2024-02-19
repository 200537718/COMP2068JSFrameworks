// importing the prompt npm package for user input
const prompt = require('prompt');

// function to generate computer's selection
function generateComputerSelection() {
     // generates a random number between 0 and 1
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "PAPER";
    } else if (randomNumber < 0.67) {
        return "SCISSORS";
    } else {
        return "ROCK";
    }
}

// function to determine winner of game
function determineWinner(userSelection, computerSelection) {
    // to check if the user or computer have same selections
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "PAPER" && computerSelection === "ROCK") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return "User Wins";
    } else {
        return "Computer Wins";
    }
}

// Prompting the user for input
prompt.start();
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    const userSelection = result.userSelection.toUpperCase(); // Converting user input to uppercase
    const computerSelection = generateComputerSelection();
    
    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);
    
    const outcome = determineWinner(userSelection, computerSelection);
    console.log("Outcome:", outcome);
});

// error handling function
function onErr(err) {
    console.error(err);
    return 1;
}