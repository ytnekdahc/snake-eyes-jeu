const diceImages = [
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxOCIgcj0iMiIgY3k9IjE4IiBmaWxsPSIjMDAwIi8+PC9zdmc+',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTgiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxOCIgcj0iMiIgY3k9IjYiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxOCIgcj0iMiIgY3k9IjE4IiBmaWxsPSIjMDAwIi8+PC9zdmc+',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTgiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSI2IiByPSIyIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjgiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMTYiIHI9IjIiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxOCIgcj0iMiIgY3k9IjgiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxOCIgcj0iMiIgY3k9IjEyIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSIxNiIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=='
];


let currentPlayerIndex = 0;
let playerNames = [];

function startGame() {
  const name1 = document.getElementById("player1Name").value || "Joueur 1";
  const name2 = document.getElementById("player2Name").value || "Joueur 2";

  playerNames = [name1, name2];
  currentPlayerIndex = 0;

  document.getElementById("game").style.display = "block";
  document.querySelector(".players").style.display = "none";
  updateCurrentPlayer();
  lancerDes(); // lancer une première fois
}

function updateCurrentPlayer() {
  document.getElementById("currentPlayer").textContent = `Tour de ${playerNames[currentPlayerIndex]}`;
}

function lancerDes() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const message = document.getElementById("message");

  dice1.classList.add("rolling");
  dice2.classList.add("rolling");

  setTimeout(() => {
    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");

    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    dice1.src = diceImages[roll1];
    dice2.src = diceImages[roll2];

    if (roll1 === 0 && roll2 === 0) {
      message.textContent = `${playerNames[currentPlayerIndex]} a fait Snake Eyes (1 + 1) ! Gagné !`;
    } else {
      message.textContent = `${playerNames[currentPlayerIndex]} a obtenu ${roll1 + 1} et ${roll2 + 1}`;
      currentPlayerIndex = (currentPlayerIndex + 1) % 2;
      updateCurrentPlayer();
    }
  }, 1000);
}
