document.addEventListener("DOMContentLoaded", function () {
  const rollButton = document.getElementById("rollButton");
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const result = document.getElementById("result");
  const tokensDisplay = document.getElementById("tokens");
  const pointsDisplay = document.getElementById("points");
  const buyTokensModal = document.getElementById("buyTokensModal");
  const buyTokensButton = document.getElementById("buyTokensButton");
  const closeModal = document.getElementById("closeModal");

  let tokens = 1000; // Tu démarres avec 1000 jetons
  let points = 0;

  function updateDisplays() {
    tokensDisplay.textContent = tokens;
    pointsDisplay.textContent = points;
  }

  function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollDice() {
    if (tokens < 5) {
      result.textContent = "Tu n’as pas assez de jetons pour jouer.";
      showBuyTokensModal();
      return;
    }

    tokens -= 5; // Chaque lancer coûte 5 jetons

    const d1 = rollDie();
    const d2 = rollDie();
    const sum = d1 + d2;

    dice1.textContent = d1;
    dice2.textContent = d2;

    if (d1 === 1 && d2 === 1) {
      result.textContent = "🐍 Double 1 ! Tu gagnes 50 jetons !";
      tokens += 50;
      points += 1;
    } else if (sum === 7) {
      result.textContent = `🎯 Tu as fait 7 ! Tu gagnes 10 jetons !`;
      tokens += 10;
      points += 1;
    } else {
      result.textContent = `Tu as fait ${d1} + ${d2} = ${sum}. Tu gagnes quand même 1 jeton !`;
      tokens += 1;
    }

    updateDisplays();

    if (tokens < 5) {
      showBuyTokensModal();
    }
  }

  function showBuyTokensModal() {
    buyTokensModal.classList.remove("hidden");
  }

  function hideBuyTokensModal() {
    buyTokensModal.classList.add("hidden");
  }

  rollButton.addEventListener("click", rollDice);

  buyTokensButton.addEventListener("click", () => {
    tokens += 100;
    updateDisplays();
    hideBuyTokensModal();
    result.textContent = "Tu as racheté 100 jetons.";
  });

  closeModal.addEventListener("click", hideBuyTokensModal);

  window.addEventListener("click", function (event) {
    if (event.target === buyTokensModal) {
      hideBuyTokensModal();
    }
  });

  // Initialisation
  updateDisplays();
  dice1.textContent = "-";
  dice2.textContent = "-";
});
