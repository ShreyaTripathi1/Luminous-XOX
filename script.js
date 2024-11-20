// const cells = document.querySelectorAll('.cell');
// const resetButton = document.querySelector('.reset-btn');
// const resultModal = document.getElementById('resultModal');
// const resultMessage = document.getElementById('resultMessage');
// const closeButton = document.querySelector('.close-btn');

// let isXTurn = true;
// let board = ['', '', '', '', '', '', '', '', ''];

// // Winning combinations
// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// function handleClick(e) {
//   const cell = e.target;
//   const index = cell.dataset.index;

//   if (board[index] !== '') return; // Ignore clicks on already marked cells

//   board[index] = isXTurn ? 'x' : 'o';
//   cell.classList.add(isXTurn ? 'x' : 'o');
//   cell.textContent = isXTurn ? 'X' : 'O';

//   if (checkWin()) {
//     showModal(`${isXTurn ? 'X' : 'O'} wins!`);
//     return;
//   }

//   if (board.every(cell => cell !== '')) {
//     showModal("It's a tie!");
//     return;
//   }

//   isXTurn = !isXTurn; // Switch turn
// }

// function checkWin() {
//   return winningCombinations.some(combination => {
//     return combination.every(index => board[index] === (isXTurn ? 'x' : 'o'));
//   });
// }

// function resetBoard() {
//   board = ['', '', '', '', '', '', '', '', ''];
//   isXTurn = true;
//   cells.forEach(cell => {
//     cell.classList.remove('x', 'o');
//     cell.textContent = '';
//   });
//   hideModal();
// }

// function showModal(message) {
//   resultMessage.textContent = message;
//   resultModal.style.display = 'flex';
// }

// function hideModal() {
//   resultModal.style.display = 'none';
// }

// // Event listeners
// cells.forEach(cell => cell.addEventListener('click', handleClick));
// resetButton.addEventListener('click', resetBoard);
// closeButton.addEventListener('click', hideModal);



const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset-btn');
const resultModal = document.getElementById('resultModal');
const resultMessage = document.getElementById('resultMessage');
const closeButton = document.querySelector('.close-btn');

let isXTurn = true;
let board = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  // Ignore clicks on already marked cells
  if (board[index] !== '') return;

  // Update board state
  board[index] = isXTurn ? 'x' : 'o';
  cell.classList.add(isXTurn ? 'x' : 'o');
  cell.textContent = isXTurn ? 'X' : 'O';

  // Check for a winner or a tie
  if (checkWin()) {
    showModal(`${isXTurn ? 'X' : 'O'} wins!`);
    return;
  }

  if (board.every(cell => cell !== '')) {
    showModal("It's a tie!");
    return;
  }

  // Switch turn
  isXTurn = !isXTurn;
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === (isXTurn ? 'x' : 'o'));
  });
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  isXTurn = true;
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.textContent = '';
  });
  hideModal();
}

function showModal(message) {
  resultMessage.textContent = message;
  resultModal.style.display = 'flex';
}

function hideModal() {
  resultModal.style.display = 'none';
  resetBoard(); // Automatically reset the game when modal is closed
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetBoard);
closeButton.addEventListener('click', hideModal);
