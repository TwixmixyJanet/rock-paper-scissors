let wins = 0;
let ties = 0;
let losses = 0;

const options = ["R", "P", "S"];

const gameRound = document.getElementById('game-round-choice');
const gameRoundChoice = document.getElementById('game-round-result');
const results = document.getElementById('results');
const userChoice = document.getElementById('user-choice');


const playGame = function() {
    console.log("play game")
    let userChoice = prompt("Enter R, P, or S:");
    if (!userChoice) {
        return;
    }
    userChoice = userChoice.toUpperCase();

    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];

    gameRoundChoice.innerHTML = `<p>
    You chose ${userChoice}<br />
    The computer chose ${computerChoice}
    </p>`;

    if (userChoice === computerChoice) {
        ties++;
        gameRound.innerHTML = `<p>
        It's a tie!
        </p>`;
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        gameRound.innerHTML = `<p>
        You win!!
        </p>`;
    } else {
        losses++;
        gameRound.innerHTML = `<p>
        You lost!
        </p>`;
    };

    results.innerHTML = `<p>
    STATS:<br />
    Wins: ${wins}<br />
    Losses: ${losses}<br />
    Ties: ${ties}<br />

    Play again?
    </p>`;
};

document.getElementById("play-game").addEventListener("click", playGame);
