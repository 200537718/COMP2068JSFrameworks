// Function to generate computer's selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "PAPER";
    } else if (randomNumber < 0.67) {
        return "SCISSORS";
    } else {
        return "ROCK";
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
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

// Get user input from command line
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your selection (ROCK, PAPER, or SCISSORS): ', (userSelection) => {
    const userSelectionUpper = userSelection.toUpperCase(); // Convert user input to uppercase
    const computerSelection = generateComputerSelection();

    console.log("User Selection:", userSelectionUpper);
    console.log("Computer Selection:", computerSelection);

    const outcome = determineWinner(userSelectionUpper, computerSelection);
    console.log("Outcome:", outcome);

    rl.close(); // Close the readline interface
});
