// All code should be written in this file.
// Player One 
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerOneWins,
// Player Two 
    playerTwoMoveOneType, 
    playerTwoMoveTwoType, 
    playerTwoMoveThreeType, 
    playerTwoMoveOneValue, 
    playerTwoMoveTwoValue, 
    playerTwoMoveThreeValue,
    playerTwoWins;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, 
    moveThreeType, moveThreeValue) => {
    // Make sure values and types are provided otherwise end program
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue ) {
        return;
    }

    // Make sure move types are valid otherwise end program
    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType (moveThreeType)) {
        return;
    }

    //Make sure move values are valid
    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    
    // Player One Moves/Values
    switch (player) {
        case 'Player One':
             playerOneMoveOneType = moveOneType;
             playerOneMoveTwoType = moveTwoType;
             playerOneMoveThreeType = moveThreeType;
             playerOneMoveOneValue = moveOneValue;
             playerOneMoveTwoValue = moveTwoValue;
             playerOneMoveThreeValue = moveThreeValue;
            break;
    // Player Two Moves/Values
        case 'Player Two':
            playerTwoMoveOneType = moveOneType; 
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
            break;
    }    
}

// Create helper functions to determine valid move types values
function isValidMoveType(moveType) {
    return (moveType === 'rock' || moveType === 'scissors' || moveType === 'paper');
}

function isValidMoveValue(moveValue) {
    return (moveValue >= 0) && (moveValue <= 99);
}

const getRoundWinner = (round) => {
    switch (round) {
        case 1:
            if (playerOneMoveOneType === playerTwoMoveOneType) {
                if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                    return 'Tie';
                } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                    return 'Player One';
                } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                    return 'Player Two';
                } else {
                    return null;
                }                
                    
            }                        
            switch (playerOneMoveOneType) {
                case 'rock':
                    if (playerTwoMoveOneType === 'paper') {
                        return 'Player Two';
                    } else if (playerTwoMoveOneType === 'scissors') {
                        return 'Player One';
                    } else {
                        return null;
                    }
                case 'paper':
                    if (playerTwoMoveOneType === 'rock'){
                        return 'Player One';
                    } else if (playerTwoMoveOneType === 'scissors') {
                        return 'Player Two';
                    } else {
                        return null;
                    }
                case 'scissors':
                    if (playerTwoMoveOneType === 'rock') {
                        return 'Player Two';
                    } else if (playerTwoMoveOneType === 'paper') {
                        return 'Player One';
                    } else {
                        return null;
                    }
                default:
                    return null;
            }
        case 2:
            if (playerOneMoveTwoType === playerTwoMoveTwoType) {
                if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                    return 'Tie';
                } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                    return 'Player One';
                } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                    return 'Player Two';
                } else {
                    return null;
                }                
            }
            switch (playerOneMoveTwoType) {
                case 'rock':
                    if (playerTwoMoveTwoType === 'paper') {
                        return 'Player Two';
                    } else if (playerTwoMoveTwoType === 'scissors') {
                        return 'Player One';
                    } else {
                        return null;
                    }
                case 'paper':
                    if (playerTwoMoveTwoType === 'rock'){
                        return 'Player One';
                    } else if (playerTwoMoveTwoType === 'scissors') {
                        return 'Player Two';
                    } else {
                        return null;
                    }
                case 'scissors':
                    if (playerTwoMoveTwoType === 'rock') {
                        return 'Player Two';
                    } else if (playerTwoMoveTwoType === 'paper') {
                        return 'Player One';
                    } else {
                        return null;
                    }
                default:
                    return null;
            }
        case 3:
            if (playerOneMoveThreeType === playerTwoMoveThreeType) {
                if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                    return 'Tie';
                } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                    return 'Player One';
                } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                    return 'Player Two';
                } else {
                    return null;
                }
            }
            switch (playerOneMoveThreeType) {
                case 'rock':
                    if (playerTwoMoveThreeType === 'paper') {
                        return 'Player Two';
                    } else if (playerTwoMoveThreeType === 'scissors') {
                        return 'Player One';
                    } else {
                        return null;
                    }
                case 'paper':
                    if (playerTwoMoveThreeType === 'rock'){
                        return 'Player One';
                    } else if (playerTwoMoveThreeType === 'scissors') {
                        return 'Player Two';
                    } else {
                        return null;
                    }
                case 'scissors':
                    if (playerTwoMoveThreeType === 'rock') {
                        return 'Player Two';
                    } else if (playerTwoMoveThreeType === 'paper') {
                        return 'Player One';
                    } else {
                        return null;
                    }
                default:
                    return null;
            }
        default: 
            return null;           
    }
        
}

const getGameWinner = () => {
    // Make sure values have been provided
    if (!playerOneMoveOneType || !playerOneMoveOneValue || 
        !playerOneMoveTwoType || !playerOneMoveTwoValue ||
        !playerOneMoveThreeType || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveOneValue || 
        !playerTwoMoveTwoType || !playerTwoMoveTwoValue ||
        !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
            return null;
        }
    
    // set playerOneWins & playerTwoWins to 0
    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    // Keep track of who's won each round and add them
    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);

    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return'Tie';
    }
}    


const addWin = (winner) => {
    if( winner === 'Player One') {
        playerOneWins += 1;
    } else if (winner === 'Player Two') {
        playerTwoWins += 1;
    }
}

const setComputerMoves = () => {
    const moves = ['rock', 'paper', 'scissors'];

    const moveOneType = moves[Math.floor(Math.random() * 3)];
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() * 3)];

    const moveOneValue = Math.floor(Math.random() * 96 ) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    
    
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue,
    moveThreeType, moveThreeValue);
}

