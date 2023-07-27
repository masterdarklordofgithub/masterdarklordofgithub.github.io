let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 9 + 1);


function compareGuesses(humanGuess, compGuess, targetNumber) {
    if (humanGuess > 9 || humanGuess < 0) {
        alert("Only guess numbers between 0 and 9!");
    }

    const resultHuman = Math.abs(targetNumber - humanGuess);
    const resultComp = Math.abs(targetNumber - compGuess);


    if (resultHuman < resultComp) {
        return true;
    }
    else if (resultHuman > resultComp) {
        return false;
    }
    else {
        return true;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}