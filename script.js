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

  let tokens = 5;
  let points = 0;

  function updateDisplays() {
    tokensDisplay.textContent = tokens;
    pointsDisplay.textContent = points;
  }

  function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollDice() {
    if (tokens <= 0) {
      result.textContent = "Tu n’as plus de jetons ! 😢";
      showBuyTokensModal();
      return;
    }

    const d1 = rollDie();
    const d2 = rollDie();
    const sum = d1 + d2;

    dice1.textContent = d1;
    dice2.textContent = d2;

    if (d1 === 1 && d2 === 1) {
      result.textContent = "🐍 Double 1 ! Victoire immédiate ! 🎉";
      points += 10; // on peut récompenser plus ici
    } else if (sum === 7) {
      result.textContent = `🎯 Tu as un 7 ! Tu gagnes 1 point.`;
      points += 1;
      tokens--; // tu perds 1 jeton même si tu gagnes 1 point ?
    } else {
      result.textContent = `Tu as fait ${d1} + ${d2} = ${sum}. Pas de point.`;
      tokens--;
    }

    updateDisplays();

    if (tokens <= 0) {
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
    tokens += 5;
    updateDisplays();
    hideBuyTokensModal();
    result.textContent = "Tu as racheté des jetons ! 🎲";
  });

  closeModal.addEventListener("click", hideBuyTokensModal);

  window.addEventListener("click", function (event) {
    if (event.target === buyTokensModal) {
      hideBuyTokensModal();
    }
  });

  // Init
  updateDisplays();
  dice1.textContent = "-";
  dice2.textContent = "-";
});
