let randomNumber = Math.floor(Math.random() * 101);
let trials = 10;
// let score = 0;

const feedback = document.getElementById("feedback");
const trialsdisplay = document.getElementById("trials");
// const scoredisplay=document.getElementById("score");
const guessinput = document.getElementById("guessinput");
const guessBtn = document.getElementById("guessBtn");
const newGameBtn = document.getElementById("newGameBtn");

newGameBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", checkGuess);

function startGame() {
  randomNumber = Math.floor(Math.random() * 101);
  trialsLeft = 10;
  feedback.textContent = "Game started, Enter your guess";
  guessinput.disabled = false;
  guessBtn.disabled = false;
  guessinput.value = "";
  trialsdisplay.textContent = `${trialsLeft}Trials Remaining`;
}

function checkGuess() {
  const guess = Number(guessinput.value);
  trialsLeft--;

  if (guess == randomNumber) {
    const score = (trialsleft / 10) * 100;
    feedback.innerHTML = `<span style="color:#00ffcc;">You win!Your Score is:${score.tofixed(0)}%</span>`;
    guessinput.disabled = true;
    guessBtn.disabled = true;
  } else if (trialsLeft <= 0) {
    feedback.innerHTML = `<span style="color:#ff4444;">Game Over!The number was ${randomNumber}</span>`;
    guessinput.disabled = true;
    guessBtn.disabled = true;
  } else if (guess > randomNumber) {
    feedback.textContent = "Number too High!Try Again";
  } else {
    feedback.textContent = "Number too Low!Try Again";
  }
  trialsdisplay.textContent = `${trialsLeft}Trials Remaining`;
}
