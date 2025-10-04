const board = Array(9).fill(null);
let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");

const winningCombinations = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // columns
  [0,4,8],[2,4,6]          // diagonals
];

cells.forEach(cell => cell.addEventListener("click", handleClick));

function handleClick(e) {
  const index = e.target.dataset.index;

  if (board[index] || checkWinner()) return; // Ignore if already clicked or game over

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    status.textContent = `🎉 Player ${currentPlayer} wins!`;
    return;
  }

  if (board.every(cell => cell)) {
    status.textContent = "😎 It's a draw!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  return winningCombinations.some(combination => {
    const [a,b,c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board.fill(null);
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  status.textContent = "Player X's turn";
}
