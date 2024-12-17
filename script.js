let gameState = [null, null, null, null, null, null, null, null, null];
let omove = true;

function testWin() {
    if (
        (gameState[0] === gameState[1] && gameState[1] === gameState[2] && gameState[0]) || // Top row
        (gameState[3] === gameState[4] && gameState[4] === gameState[5] && gameState[3]) || // Middle row
        (gameState[6] === gameState[7] && gameState[7] === gameState[8] && gameState[6]) || // Bottom row
        (gameState[0] === gameState[3] && gameState[3] === gameState[6] && gameState[0]) || // Left column
        (gameState[1] === gameState[4] && gameState[4] === gameState[7] && gameState[1]) || // Middle column
        (gameState[2] === gameState[5] && gameState[5] === gameState[8] && gameState[2]) || // Right column
        (gameState[0] === gameState[4] && gameState[4] === gameState[8] && gameState[0]) || // Diagonal (top-left to bottom-right)
        (gameState[2] === gameState[4] && gameState[4] === gameState[6] && gameState[2])    // Diagonal (top-right to bottom-left)
    ) {
        if (omove) {
            alert("X Wins");
        } else {
            alert("O Wins");
        }
        resetGame();
        return;
    }

    if (!gameState.includes(null)) { 
        alert("Tie");
        resetGame();
    }
}

function buttonPress(n) {
    const button = document.getElementById(`btn${n}`);
    if (gameState[n] === null) { 
        gameState[n] = omove ? "O" : "X";
        button.textContent = gameState[n];
        omove = !omove;
        testWin();
    }
}

function resetGame() {
    gameState.fill(null); 
    omove = true;
    for (let i = 0; i < 9; i++) {
        document.getElementById(`btn${i}`).textContent = "";
    }
}
