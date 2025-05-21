let scores = {
    player1: 0,
    player2: 0
};

let currentPlayer = 1;
let playerNames = {
    player1: { name1: '', name2: '' },
    player2: { name1: '', name2: '' }
};

// Save player names
function saveNames() {
    // Get names from inputs
    playerNames.player1.name1 = document.getElementById('player1Name1').value;
    playerNames.player1.name2 = document.getElementById('player1Name2').value;
    playerNames.player2.name1 = document.getElementById('player2Name1').value;
    playerNames.player2.name2 = document.getElementById('player2Name2').value;

    // Update player headers
    document.querySelector('#player1 .player-header h2').textContent = `${playerNames.player1.name1} & ${playerNames.player1.name2}`;
    document.querySelector('#player2 .player-header h2').textContent = `${playerNames.player2.name1} & ${playerNames.player2.name2}`;

    // Hide name inputs
    document.querySelector('.name-inputs').style.display = 'none';
    
    // Show game controls
    document.querySelector('.game-controls').style.display = 'flex';
}

// Update score for a player
function updateScore(player, points) {
    const playerKey = `player${player}`;
    scores[playerKey] += points;
    
    // Update the display
    document.querySelector(`#${playerKey} .score-display`).textContent = scores[playerKey];
    
    // Check for game over
    if (scores[playerKey] >= 2000) {
        showGameOverMessage(player);
    }
    
    // Update current player display
    document.getElementById('currentPlayer').textContent = `Player ${player}`;
}

// Show game over message
function showGameOverMessage(losingPlayer) {
    const losingNames = playerNames[`player${losingPlayer}`];
    const winningPlayer = losingPlayer === 1 ? 2 : 1;
    const winningNames = playerNames[`player${winningPlayer}`];
    
    // Create game result object
    const gameResult = {
        date: new Date().toISOString(),
        losingTeam: losingNames,
        winningTeam: winningNames
    };

    // Load existing history
    let history = JSON.parse(localStorage.getItem('ramiHistory') || '[]');
    
    // Add new game result to history
    history.push(gameResult);
    
    // Save updated history
    localStorage.setItem('ramiHistory', JSON.stringify(history));

    // Update message content
    document.getElementById('losingPlayers').textContent = `${losingNames.name1} & ${losingNames.name2}`;
    
    // Show game over message
    document.getElementById('gameOverMessage').style.display = 'flex';
    
    // Disable all score buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.disabled = true;
    });
    
    // Disable turn button
    document.querySelector('.turn-btn').disabled = true;
}

// Reset the game
function resetGame() {
    // Reset scores
    scores.player1 = 0;
    scores.player2 = 0;
    currentPlayer = 1;
    
    // Update all displays
    document.querySelector('#player1 .score-display').textContent = '0';
    document.querySelector('#player2 .score-display').textContent = '0';
    document.getElementById('currentPlayer').textContent = 'Player 1';
    
    // Hide game over message
    document.getElementById('gameOverMessage').style.display = 'none';
    
    // Re-enable all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.disabled = false;
    });
    
    // Re-enable turn button
    document.querySelector('.turn-btn').disabled = false;
}

// Toggle between players
function toggleTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('currentPlayer').textContent = `Player ${currentPlayer}`;
}
