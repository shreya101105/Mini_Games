let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById("guess");
  const userGuess = parseInt(input.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("feedback").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  
  if (userGuess === randomNumber) {
    document.getElementById("feedback").textContent = `🎉 Correct! The number was ${randomNumber}`;
    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
  } else if (userGuess > randomNumber) {
    document.getElementById("feedback").textContent = "Too high! Try again.";
    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
  } else {
    document.getElementById("feedback").textContent = "Too low! Try again.";
    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guess").value = "";
}
