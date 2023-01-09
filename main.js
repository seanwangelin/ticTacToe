let boardSquares = document.querySelectorAll('.boardSquare');

const board = document.getElementById('board');

const singlePlayer = document.getElementById('singlePlayer');

const multiPlayer = document.getElementById('multiPlayer');

const reset = document.getElementById('reset');

const messageBoard = document.getElementById('messageBoard');

let player = '';

let name1='';

let name2='';

let winner = false;

let gameBoard = [
    null, null, null,
    null, null, null,
    null, null, null
];

const getWinner = symbol => { 

    if (gameBoard[0] === symbol && gameBoard[1] === symbol && gameBoard[2] === symbol) {
        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[3] === symbol && gameBoard[4] === symbol && gameBoard[5] === symbol) {        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[6] === symbol && gameBoard[7] === symbol && gameBoard[8] === symbol) {        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[0] === symbol && gameBoard[3] === symbol && gameBoard[6] === symbol) {        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[1] === symbol && gameBoard[4] === symbol && gameBoard[7] === symbol) {        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[2] === symbol && gameBoard[5] === symbol && gameBoard[8] === symbol) {        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[0] === symbol && gameBoard[4] === symbol && gameBoard[8] === symbol) {
        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    } else if (gameBoard[2] === symbol && gameBoard[4] === symbol && gameBoard[6] === symbol) {
        winner=true;
        messageBoard.innerHTML=`${symbol} wins!!!`;
    }
}

const getComputerWinner = () =>{
    if (gameBoard[0] === 'y' && gameBoard[1] === 'y' && gameBoard[2] === 'y') {
        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[3] === 'y' && gameBoard[4] === 'y' && gameBoard[5] === 'y') {        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[6] === 'y' && gameBoard[7] === 'y' && gameBoard[8] === 'y') {        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[0] === 'y' && gameBoard[3] === 'y' && gameBoard[6] === 'y') {        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[1] === 'y' && gameBoard[4] === 'y' && gameBoard[7] === 'y') {        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[2] === 'y' && gameBoard[5] === 'y' && gameBoard[8] === 'y') {        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[0] === 'y' && gameBoard[4] === 'y' && gameBoard[8] === 'y') {
        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    } else if (gameBoard[2] === 'y' && gameBoard[4] === 'y' && gameBoard[6] === 'y') {
        winner=true;
        messageBoard.innerHTML=`The computer wins!!!`;
    }
}

const checkForDraw = () =>{
    if(!gameBoard.includes(null)){
        messageBoard.innerHTML=`This game is a draw, reset the board!`
    }
}

const singlePlayerFunc = () =>{
    let getName = window.prompt('Enter your name:');
    player='x'
    name1 = getName;
    name2 = 'computer';
    document.getElementById('x').innerHTML=`x: ${name1}`;
    document.getElementById('y').innerHTML=`y: ${name2}`;

    boardSquares.forEach(val => {
        const singleLogic = () => {
            
            if(val.innerHTML === 'x' || val.innerHTML === 'y') {
                messageBoard.innerHTML=`you can't do that!!`
            } else if(winner) {
                messageBoard.innerHTML=`The game is over, reset the board!`
            } else {
                val.innerHTML = 'x';
                gameBoard[val.id] = 'x';
                getWinner(player);
                
                for (let i = gameBoard.length - 1; i >= 0; i--) {
                    if(winner){
                        console.log('the game is over');
                    } else if (gameBoard[i] === null) {
                        let computerSquare = document.getElementById(i);
                        
                        computerSquare.innerHTML = 'y';
                        gameBoard[i] = 'y';
                        getComputerWinner();
                        break;
                    }
                }
            }
            checkForDraw();
        }

        val.addEventListener('click', singleLogic);
        messageBoard.innerHTML=`Defeat the computer!`
    });

    singlePlayer.removeEventListener('click',singlePlayerFunc);
    multiPlayer.removeEventListener('click',multiPlayerFunc);
}


const multiPlayerFunc = () =>{
    let getName1 = window.prompt('Player 1, enter your name:');
    let getName2 = window.prompt('Player 2, enter your name:');

    const turn = Math.floor(Math.random()*2);
    console.log(turn);

    document.getElementById('x').innerHTML=`x: ${getName1}`;
    document.getElementById('y').innerHTML=`y: ${getName2}`;

    name1=getName1;
    name2=getName2;

    const whichTurn = () => {
        if(turn === 0){
            return name1;
        } else {
            return name2;
        }
    }
    messageBoard.innerHTML=`${whichTurn()}'s turn!`;

    if(turn===0){
        player+='x';
    } else if(turn===1){
        player+='y';
    }

    boardSquares.forEach(val => {
        val.addEventListener('click', () => {
            if (val.innerHTML === 'x' || val.innerHTML === 'y') {
                messageBoard.innerHTML=`You can't do that!`;

            } else if(winner){
                messageBoard.innerHTML=`The game is over, reset the board!`

            } else {
                if (player === 'x') {
                    val.innerHTML = 'x';
                    messageBoard.innerHTML=`${name2}'s turn!`;
                    gameBoard[val.id] = 'x';
                    getWinner(player);
                    player = 'y';

                } else {
                    val.innerHTML = 'y';
                    messageBoard.innerHTML=`${name1}'s turn!`;
                    gameBoard[val.id] = 'y';
                    getWinner(player);
                    player = 'x';
                }
            }
            console.log(gameBoard);
            checkForDraw();
        })
    });

    singlePlayer.removeEventListener('click',singlePlayerFunc);
    multiPlayer.removeEventListener('click', multiPlayerFunc);
}

singlePlayer.addEventListener('click', singlePlayerFunc);


multiPlayer.addEventListener('click', multiPlayerFunc);

reset.addEventListener('click', ()=> {
    window.location.reload();
});
