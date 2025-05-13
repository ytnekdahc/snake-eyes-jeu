const players = [];
const scores = {};
let currentPlayerIndex = 0;
let snakeEyesCount = 0;
let gameOver = false;

// DOM
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const infoElement = document.getElementById('info');
const currentScoreElement = document.getElementById('currentScore');
const scoreboardElement = document.getElementById('scoreboard');
const snakeEyesElement = document.getElementById('snakeEyes');
const rollButton = document.getElementById('rollButton');
const replayButton = document.getElementById('replayButton');
const quitButton = document.getElementById('quitButton');
const setupScreen = document.getElementById('setupScreen');
const playerCountInput = document.getElementById('playerCount');
const startGameButton = document.getElementById('startGame');

function updateDiceVisuals(val1, val2) {
    dice1.style.backgroundImage = `url(${diceImages[val1 - 1]})`;
    dice2.style.backgroundImage = `url(${diceImages[val2 - 1]})`;
}

function updateScoreboard() {
    scoreboardElement.innerHTML = "Scores :<br>" + players.map(p => `${p} : ${scores[p]}`).join("<br>");
}

function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    infoElement.textContent = `À ${players[currentPlayerIndex]} de jouer !`;
}

function rollDice() {
    if (gameOver) return;
    const val1 = Math.floor(Math.random() * 6) + 1;
    const val2 = Math.floor(Math.random() * 6) + 1;

    updateDiceVisuals(val1, val2);
    let currentPlayer = players[currentPlayerIndex];

    if (val1 === 1 && val2 === 1) {
        snakeEyesCount++;
        scores[currentPlayer] += 10;
        snakeEyesElement.textContent = `Snake Eyes 👀 : ${snakeEyesCount}`;
        currentScoreElement.textContent = `🎉 Snake Eyes pour ${currentPlayer} ! +10 points`;
    } else {
        let sum = val1 + val2;
        scores[currentPlayer] += sum;
        currentScoreElement.textContent = `${currentPlayer} a obtenu ${val1} + ${val2} = ${sum}`;
    }

    updateScoreboard();

    if (scores[currentPlayer] >= 100) {
        infoElement.textContent = `🎉 ${currentPlayer} a gagné la partie ! 🎉`;
        gameOver = true;
        rollButton.disabled = true;
        replayButton.disabled = false;
    } else {
        nextPlayer();
    }
}

// Événements
rollButton.addEventListener('click', rollDice);
startGameButton.addEventListener('click', () => {
    const count = parseInt(playerCountInput.value);
    if (isNaN(count) || count < 1 || count > 6) return;
    players.length = 0;
    for (let i = 1; i <= count; i++) players.push(`Joueur ${i}`);
    players.forEach(p => scores[p] = 0);
    currentPlayerIndex = 0;
    gameOver = false;
    rollButton.disabled = false;
    replayButton.disabled = true;
    snakeEyesCount = 0;
    updateScoreboard();
    snakeEyesElement.textContent = `Snake Eyes 👀 : Aucun pour l'instant`;
    infoElement.textContent = `À ${players[currentPlayerIndex]} de jouer !`;
    setupScreen.style.display = "none";
});

replayButton.addEventListener('click', () => {
    setupScreen.style.display = "flex";
});

quitButton.addEventListener('click', () => {
    window.close(); // Peut ne pas fonctionner selon le navigateur
    alert("Tu peux fermer l'onglet manuellement.");
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && !gameOver) {
        rollDice();
    }
});
