let scores = {
    player1: 0,
    player2: 0
};

let currentPlayer = 1;

// Update score for a player
function updateScore(player, points) {
    const playerKey = `player${player}`;
    scores[playerKey] += points;
    
    // Update the display
    document.querySelector(`#${playerKey} .score-display`).textContent = scores[playerKey];
    
    // Update current player display
    document.getElementById('currentPlayer').textContent = `Player ${player}`;
}

// Reset the game
function resetGame() {
    scores.player1 = 0;
    scores.player2 = 0;
    currentPlayer = 1;
    
    // Update all displays
    document.querySelector('#player1 .score-display').textContent = '0';
    document.querySelector('#player2 .score-display').textContent = '0';
    document.getElementById('currentPlayer').textContent = 'Player 1';
}

// Toggle between players
function toggleTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('currentPlayer').textContent = `Player ${currentPlayer}`;
}
