const choices = document.querySelectorAll(".choice");
let playerScore = 0;
let computerScore = 0;

function getRandomMove() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function play(playerMove) {
  const computerMove = getRandomMove();
  const result = determineResult(playerMove, computerMove);
  document.querySelector(".result").textContent = result;
  updateScore(result);
  document.querySelector(".computermove").textContent = `Computer Move: ${computerMove}`;
}

function determineResult(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "Draw";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    playerScore++;
    return "You Won!";
  } else {
    computerScore++;
    return "Computer Won!";
  }
}

function updateScore(result) {
  document.querySelector(".player-score").textContent = `Your Score: ${playerScore}`;
  document.querySelector(".computer-score").textContent = `Computer Score: ${computerScore}`;
  
  
}

choices.forEach(choice => {
  choice.addEventListener("click", function() {
    choices.forEach(choice => choice.classList.remove("active"));
    this.classList.add("active");
    const playerMove = this.querySelector("button").classList[0];
    play(playerMove);
  });
});
