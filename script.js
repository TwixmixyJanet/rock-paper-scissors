let wins = 0;
let ties = 0;
let losses = 0;

const options = ["R", "P", "S"];

const playGame = function() {
    let userChoice = prompt("Enter R, P, or S:");
    if (!userChoice) {
        return;
    }
    userChoice = userChoice.toUpperCase();

    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];

    alert(`
    You chose ${userChoice}
    The computer chose ${computerChoice}
    `);

    if (userChoice === computerChoice) {
        ties++;
        alert("It's a tie!");
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");
    } else {
        losses++;
        window.alert("You lost!");
    };

    // alert(`
    // STATS:
    // Wins: ${wins}
    // Losses: ${losses}
    // Ties: ${ties}
    // `);

    const playAgain = confirm(`
    STATS:
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}

    Play again?
    `);

    if (playAgain) {
        playGame();
    }
};

// playGame();
const playGameButton = document.getElementById("play-game");
playGameButton.addEventListener("click", playGame);