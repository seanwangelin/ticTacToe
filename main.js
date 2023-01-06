let boardSquares = document.querySelectorAll('.boardSquare');

const board = document.getElementById('board');

const singlePlayer = document.getElementById('singlePlayer');

const multiPlayer = document.getElementById('multiPlayer')

let player = 'x';

let gameMode = 2;

let winner = false;

let gameBoard = [
    null, null, null,
    null, null, null,
    null, null, null
];

const getWinner = symbol => {

    if (gameBoard[0] === symbol && gameBoard[1] === symbol && gameBoard[2] === symbol) {
        winner=true;
    } else if (gameBoard[3] === symbol && gameBoard[4] === symbol && gameBoard[5] === symbol) {
        console.log('winner');
        winner=true;
    } else if (gameBoard[6] === symbol && gameBoard[7] === symbol && gameBoard[8] === symbol) {
        console.log('winner');
        winner=true;
    } else if (gameBoard[0] === symbol && gameBoard[3] === symbol && gameBoard[6] === symbol) {
        console.log('winner');
        winner=true;
    } else if (gameBoard[1] === symbol && gameBoard[4] === symbol && gameBoard[7] === symbol) {
        console.log('winner');
        winner=true;
    } else if (gameBoard[2] === symbol && gameBoard[5] === symbol && gameBoard[8] === symbol) {
        console.log('winner');
        winner=true;
    } else if (gameBoard[0] === symbol && gameBoard[4] === symbol && gameBoard[8] === symbol) {
        console.log('winner');
        winner=true;
    } else if (gameBoard[2] === symbol && gameBoard[4] === symbol && gameBoard[6] === symbol) {
        console.log('winner');
        winner=true;
    }
}

const singlePlayerFunc = () =>{

    boardSquares.forEach(val => {
        const singleLogic = () => {
            if(val.innerHTML === 'x' || val.innerHTML === 'y') {
                console.log("you can't do that")
            } else if(winner) {
                console.log(`can't play anymore`)
            } else {
                val.innerHTML = 'x';
                gameBoard[val.id] = 'x';
                
                for (let i = gameBoard.length - 1; i >= 0; i--) {
                    if (gameBoard[i] === null) {
                        let computerSquare = document.getElementById(i);
                        computerSquare.innerHTML = 'y';
                        gameBoard[i] = 'y';
                        break;
                    }
                }
                console.log(gameBoard);
                getWinner(player);
            }
            
        }
        val.addEventListener('click', singleLogic);
    })
    singlePlayer.removeEventListener('click',singlePlayerFunc);
    multiPlayer.removeEventListener('click',multiPlayerFunc);
}


const multiPlayerFunc = () =>{
    boardSquares.forEach(val => {
        val.addEventListener('click', () => {
            if (val.innerHTML === 'x' || val.innerHTML === 'y') {
                console.log("you can't do that")
            } else if(winner){
                console.log(`you can't do that`)
            } else {
                if (player === 'x') {
                    val.innerHTML = 'x';
                    gameBoard[val.id] = 'x';
                    getWinner(player);

                    player = 'y';
                } else {
                    val.innerHTML = 'y';
                    gameBoard[val.id] = 'y';
                    getWinner(player);
                    player = 'x';
                }

                console.log(gameBoard);
            }
        })
    });

    singlePlayer.removeEventListener('click',singlePlayerFunc);
    multiPlayer.removeEventListener('click', multiPlayerFunc);
}


singlePlayer.addEventListener('click', singlePlayerFunc)


multiPlayer.addEventListener('click', multiPlayerFunc)
