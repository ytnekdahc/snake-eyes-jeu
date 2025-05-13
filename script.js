// Variables globales
const players = [];
const scores = {};
let currentPlayerIndex = 0;
let gameOver = false;

// Éléments DOM
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const infoEl = document.getElementById('info');
const currentScoreEl = document.getElementById('currentScore');
const scoreboardEl = document.getElementById('scoreboard');
const snakeEyesEl = document.getElementById('snakeEyes');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const quitBtn = document.getElementById('quitBtn');
const setupModal = document.getElementById('setupModal');
const playerInputs = document.getElementById('playerInputs');
const startBtn = document.getElementById('startBtn');

// Images des dés (chemins relatifs)
const diceImages = [
    'assets/dice-1.png',
    'assets/dice-2.png',
    'assets/dice-3.png',
    'assets/dice-4.png',
    'assets/dice-5.png',
    'assets/dice-6.png'
];

// Initialisation
function init() {
    setupModal.style.display = 'block';
    startBtn.addEventListener('click', setupGame);
    rollBtn.addEventListener('click', rollDice);
    resetBtn.addEventListener('click', resetGame);
    quitBtn.addEventListener('click', quitGame);
    document.addEventListener('keydown', (e) => e.key === 'Enter' && rollDice());
}

// Configuration du jeu
function setupGame() {
    const playerCount = parseInt(prompt("Nombre de joueurs (1-6) :", 2));
    
    if (playerCount < 1 || playerCount > 6) {
        alert("Nombre invalide. Le jeu utilisera 2 joueurs.");
        playerCount = 2;
    }

    for (let i = 0; i < playerCount; i++) {
        const name = prompt(`Nom du joueur ${i+1} :`, `Joueur ${i+1}`);
        players.push(name);
        scores[name] = 0;
    }

    setupModal.style.display = 'none';
    startGame();
}

// Logique du jeu
function startGame() {
    shuffleArray(players);
    updateUI();
}

function rollDice() {
    if (gameOver) return;

    rollBtn.disabled = true;
    animateDice();

    setTimeout(() => {
        const dice1Val = Math.floor(Math.random() * 6) + 1;
        const dice2Val = Math.floor(Math.random() * 6) + 1;
        
        dice1.src = diceImages[dice1Val - 1];
        dice2.src = diceImages[dice2Val - 1];
        
        checkResult(dice1Val, dice2Val);
    }, 1000);
}

function checkResult(d1, d2) {
    const player = players[currentPlayerIndex];
    const sum = d1 + d2;

    if (d1 === 1 && d2 === 1) {
        endGame(`${player} gagne avec Snake Eyes !`);
    } else if (sum === 7) {
        scores[player]++;
        if (scores[player] >= 5) {
            endGame(`${player} gagne avec 5 points !`);
        } else {
            currentScoreEl.textContent = `${player} : +1 point (Total: ${scores[player]})`;
            nextTurn();
        }
    } else {
        currentScoreEl.textContent = `${player} : ${d1}+${d2} = ${sum} (0 point)`;
        nextTurn();
    }
}

// Fonctions utilitaires
function animateDice() {
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');
    setTimeout(() => {
        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');
    }, 1000);
}

function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateUI();
    setTimeout(() => rollBtn.disabled = false, 500);
}

function endGame(message) {
    infoEl.textContent = message;
    gameOver = true;
    resetBtn.disabled = false;
}

function resetGame() {
    players.length = 0;
    Object.keys(scores).forEach(key => delete scores[key]);
    currentPlayerIndex = 0;
    gameOver = false;
    resetBtn.disabled = true;
    setupModal.style.display = 'block';
}

function quitGame() {
    if (confirm("Quitter le jeu ?")) {
        window.close();
    }
}

function updateUI() {
    infoEl.textContent = `Tour de ${players[currentPlayerIndex]}`;
    
    let scoreText = "Scores :\n";
    players.forEach(p => scoreText += `${p} : ${scores[p]} points\n`);
    scoreboardEl.textContent = scoreText;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Démarrer le jeu
init();
