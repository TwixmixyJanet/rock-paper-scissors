// We enter R-P-S into the input
// (do while loop)
// - use Prompt to ask input of R, P, or S
// - validation check of input against array of correct inputs
// - generate the commputers choice
//     - create a random number, convert to 0, 1, 2 (R, P, S)
// - alert to computer's choice
// - calculate if won, tied, or lost with conditional statements
//     - create result message (string)
//     - calculate/increment (new) stat
// - alert to state of if you won, tied, or lost (that round)
// - alert of overall stats
// - win or lose, ask if play again with confirm
// - if true, play again
//     - (loop continues)
//     - if false, exit app
//         - (loop ends)
// - alert: final results - counting wins, ties, losses

// Need variables:
// - Rock
// - Paper
// - Scissors

// Random generator for computer R, P, S

// VARIABLES
// index of 0, 1, 2
var inputSelections = ["R", "P", "S"];
var ourChoice = "";
var compChoice = "";
var isInputValid = false;
var randomNumber = 0;
var randomIndex = 0;
var PlayGameAgain = true;

var results = {
    wins: 0,
    ties: 0,
    losses: 0
};

var messages = {
    youWon: "You won!",
    youTied: "You tied!",
    youLost: "You lost!",
    playAgain: "Do you want to play again?",
    overallStats: `Wins: ${results.wins} | Ties: ${results.ties} | Losses: ${results.losses} | Keep going!`,
    thanks: "Thank you for playing!",
    enterSelection: "Please choose R, P, or S",
    invalidInput: "Invalid input. Please try again.",
    computerInput: `The computer chose ${compChoice}`
}

