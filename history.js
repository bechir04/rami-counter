// Load game history from localStorage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('ramiHistory') || '[]');
    displayHistory(history);
}

// Display game history
function displayHistory(history) {
    const historyContainer = document.getElementById('gameHistory');
    historyContainer.innerHTML = '';

    history.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'history-card';
        
        const date = new Date(game.date).toLocaleDateString();
        
        gameCard.innerHTML = `
            <div class="game-info">
                <h3>Game #${history.length - index}</h3>
                <p>Date: ${date}</p>
            </div>
            <div class="game-result">
                <div class="losing-team">
                    <h4>Losing Team:</h4>
                    <p>${game.losingTeam.name1} & ${game.losingTeam.name2}</p>
                </div>
                <div class="winning-team">
                    <h4>Winning Team:</h4>
                    <p>${game.winningTeam.name1} & ${game.winningTeam.name2}</p>
                </div>
            </div>
        `;
        
        historyContainer.appendChild(gameCard);
    });
}

// Go back to game page
function goBack() {
    window.location.href = 'index.html';
}

// Load history when page loads
document.addEventListener('DOMContentLoaded', loadHistory);
