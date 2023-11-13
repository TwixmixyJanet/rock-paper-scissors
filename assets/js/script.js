let wins = 0;
let ties = 0;
let losses = 0;

const copmuterOptions = ["R", "P", "S"];
const userOptions = document.getElementById('options');

const gameRound = document.getElementById('game-round-choice');
const gameRoundChoice = document.getElementById('game-round-result');
const results = document.getElementById('results');
// const userChoiceForm = document.getElementById('user-choice');
const R = document.getElementById('R');
const P = document.getElementById('P');
const S = document.getElementById('S');

function clickedRock(e) {
    e.preventDefault();
    console.log("rock clicked");
    let userChoice = "R"
    console.log(userChoice);
    playGame(userChoice);
}

function clickedPaper(e) {
    e.preventDefault();
    console.log("paper clicked");
    let userChoice = "P"
    console.log(userChoice);
    playGame(userChoice);
}

function clickedScissors(e) {
    e.preventDefault();
    console.log("scissors clicked");
    let userChoice = "S"
    console.log(userChoice);
    playGame(userChoice);
}

const playGame = function(userClicked) {
    console.log("play game")
    // userChoice = userChoice.toUpperCase();
    console.log(userClicked)

    let index = Math.floor(Math.random() * copmuterOptions.length);
    let computerChoice = copmuterOptions[index];

    gameRoundChoice.innerHTML = `<p>
    You chose ${userClicked}<br />
    The computer chose ${computerChoice}
    </p>`;

    if (userClicked === computerChoice) {
        ties++;
        gameRound.innerHTML = `<p>
        It's a tie!
        </p>`;
    } else if (
        (userClicked === "R" && computerChoice === "S") ||
        (userClicked === "P" && computerChoice === "R") ||
        (userClicked === "S" && computerChoice === "P")
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
    <br />
    <b>Click the options above to play again!</b>
    </p>`;
};

// document.getElementById("play-game").addEventListener("click", playGame);
// document.getElementById('options').addEventListener('click', playGame);
R.addEventListener('click', clickedRock);
P.addEventListener('click', clickedPaper);
S.addEventListener('click', clickedScissors);