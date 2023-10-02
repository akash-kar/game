/*let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    const cellElement = document.querySelector('.cell:nth-child(' + (cellIndex + 1) + ')');
    cellElement.textContent = currentPlayer;

    if (checkForWin()) {
        document.getElementById('message').textContent = 'Player ' + currentPlayer + ' wins!';
        gameActive = false;
        openPopup('Player ' + currentPlayer + ' wins!');
    } else if (board.every(cell => cell !== '')) {
        document.getElementById('message').textContent = 'It\'s a draw!';
        gameActive = false;
        openPopup('It\'s a draw!');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').textContent = 'Player ' + currentPlayer + '\'s turn';
    }
}

function checkForWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function openPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = 'Player ' + currentPlayer + '\'s turn';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    closePopup();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

window.onload = resetBoard;*/

/*let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let isComputerMode = false; // Track if playing against computer
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function changeGameMode() {
    const modeSelect = document.getElementById('mode');
    isComputerMode = modeSelect.value === 'computer';

    resetBoard();
}

function makeMove(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    const cellElement = document.querySelector('.cell:nth-child(' + (cellIndex + 1) + ')');
    cellElement.textContent = currentPlayer;

    if (checkForWin()) {
        document.getElementById('message').textContent = 'Player ' + currentPlayer + ' wins!';
        gameActive = false;
        openPopup('Player ' + currentPlayer + ' wins!');

        // Get the winning combination
        const winningCombination = getWinningCombination();

        // Apply the winning cell style and display the winning line
        applyWinningCellStyle(winningCombination);
    } else if (board.every(cell => cell !== '')) {
        document.getElementById('message').textContent = 'It\'s a draw!';
        gameActive = false;
        openPopup('It\'s a draw!');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').textContent = 'Player ' + currentPlayer + '\'s turn';

        if (isComputerMode && currentPlayer === 'O') {
            makeComputerMove();
        }
    }
}

function checkForWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function getWinningCombination() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return [a, b, c];
        }
    }
    return null;
}

function applyWinningCellStyle(winningCombination) {
    const [a, b, c] = winningCombination;
    const winningCells = document.querySelectorAll('.cell:nth-child(' + (a + 1) + '), .cell:nth-child(' + (b + 1) + '), .cell:nth-child(' + (c + 1) + ')');
    
    winningCells.forEach(cell => {
        cell.classList.add('winning-cell');
    });
}

function makeComputerMove() {
    // Implement basic computer AI here (random move)
    const availableCells = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            availableCells.push(i);
        }
    }

    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const computerMove = availableCells[randomIndex];
        setTimeout(() => {
            makeMove(computerMove);
        }, 1000); // Delay computer move for better user experience (1 second)
    }
}

function openPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = 'Player ' + currentPlayer + '\'s turn';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winning-cell');
    });
    closePopup();

    if (isComputerMode && currentPlayer === 'O') {
        makeComputerMove();
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

window.onload = resetBoard;*/

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let isComputerMode = false;
let computerDifficulty = 'easy'; // Default difficulty level
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function changeGameMode() {
    const modeSelect = document.getElementById('mode');
    isComputerMode = modeSelect.value === 'computer';

    resetBoard();
}

function changeDifficulty() {
    const difficultySelect = document.getElementById('difficulty');
    computerDifficulty = difficultySelect.value;

    if (isComputerMode && currentPlayer === 'O') {
        makeComputerMove();
    }
}

function makeMove(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    const cellElement = document.querySelector('.cell:nth-child(' + (cellIndex + 1) + ')');
    cellElement.textContent = currentPlayer;

    if (checkForWin()) {
        document.getElementById('message').textContent = 'Player ' + currentPlayer + ' wins!';
        gameActive = false;
        openPopup('Player ' + currentPlayer + ' wins!');

        // Get the winning combination
        const winningCombination = getWinningCombination();

        // Apply the winning cell style and display the winning line
        applyWinningCellStyle(winningCombination);
    } else if (board.every(cell => cell !== '')) {
        document.getElementById('message').textContent = 'It\'s a draw!';
        gameActive = false;
        openPopup('It\'s a draw!');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').textContent = 'Player ' + currentPlayer + '\'s turn';

        if (isComputerMode && currentPlayer === 'O') {
            makeComputerMove();
        }
    }
}

function checkForWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function getWinningCombination() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return [a, b, c];
        }
    }
    return null;
}

function applyWinningCellStyle(winningCombination) {
    const [a, b, c] = winningCombination;
    const winningCells = document.querySelectorAll('.cell:nth-child(' + (a + 1) + '), .cell:nth-child(' + (b + 1) + '), .cell:nth-child(' + (c + 1) + ')');
    
    winningCells.forEach(cell => {
        cell.classList.add('winning-cell');
    });
}

function makeComputerMove() {
    if (computerDifficulty === 'easy') {
        makeRandomMove();
    } else if (computerDifficulty === 'medium') {
        makeMediumMove();
    } else if (computerDifficulty === 'hard') {
        makeHardMove();
    }
}

function makeRandomMove() {
    const availableCells = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            availableCells.push(i);
        }
    }

    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const computerMove = availableCells[randomIndex];
        setTimeout(() => {
            makeMove(computerMove);
        }, 1000); // Delay computer move for better user experience (1 second)
    }
}

function makeMediumMove() {
    const winningMove = findWinningMove('O');
    const blockingMove = findWinningMove('X');

    if (winningMove !== -1) {
        setTimeout(() => {
            makeMove(winningMove);
        }, 1000); // Delay computer move for better user experience (1 second)
    } else if (blockingMove !== -1) {
        setTimeout(() => {
            makeMove(blockingMove);
        }, 1000);
    } else {
        makeRandomMove();
    }
}

function makeHardMove() {
    const bestMove = minimax(board, 'O');

    if (bestMove.index !== -1) {
        setTimeout(() => {
            makeMove(bestMove.index);
        }, 1000); // Delay computer move for better user experience (1 second)
    }
}

function findWinningMove(player) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = player;
            if (checkForWin()) {
                board[i] = ''; // Reset the board
                return i;
            }
            board[i] = ''; // Reset the board
        }
    }
    return -1;
}

function minimax(newBoard, player) {
    const availableSpots = emptyCells(newBoard);

    if (checkWin(newBoard, 'X')) {
        return { score: -10 };
    } else if (checkWin(newBoard, 'O')) {
        return { score: 10 };
    } else if (availableSpots.length === 0) {
        return { score: 0 };
    }

    const moves = [];
    for (let i = 0; i < availableSpots.length; i++) {
        const move = {};
        move.index = newBoard[availableSpots[i]];
        newBoard[availableSpots[i]] = player;

        if (player === 'O') {
            const result = minimax(newBoard, 'X');
            move.score = result.score;
        } else {
            const result = minimax(newBoard, 'O');
            move.score = result.score;
        }

        newBoard[availableSpots[i]] = move.index;
        moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

function emptyCells(board) {
    return board.filter(cell => cell !== 'X' && cell !== 'O');
}

function openPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = 'Player ' + currentPlayer + '\'s turn';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winning-cell');
    });
    closePopup();

    if (isComputerMode && currentPlayer === 'O') {
        makeComputerMove();
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

window.onload = resetBoard;


