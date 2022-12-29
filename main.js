const boardSquares = document.querySelectorAll('.boardSquare');

const board = document.getElementById('board');

const singlePlayer = document.getElementById('singlePlayer');

const multiPlayer = document.getElementById('multiPlayer')

let player = 'x';

let gameMode=2;

let gameBoard = [
    null,null,null,
    null,null,null,
    null,null,null
];

const getWinner = symbol => {
    if(gameBoard[0]===symbol && gameBoard[1]===symbol && gameBoard[2]===symbol){
        console.log('winner');
    } else if(gameBoard[3]===symbol && gameBoard[4]===symbol && gameBoard[5]===symbol){
        console.log('winner');
    } else if(gameBoard[6]===symbol && gameBoard[7]===symbol && gameBoard[8]===symbol){
        console.log('winner');
    } else if(gameBoard[0]===symbol && gameBoard[3]===symbol && gameBoard[6]===symbol){
        console.log('winner');
    } else if(gameBoard[1]===symbol && gameBoard[4]===symbol && gameBoard[7]===symbol){
        console.log('winner');
    } else if(gameBoard[2]===symbol && gameBoard[5]===symbol && gameBoard[8]===symbol){
        console.log('winner');
    } else if(gameBoard[0]===symbol && gameBoard[4]===symbol && gameBoard[8]===symbol){
        console.log('winner');
    } else if(gameBoard[2]===symbol && gameBoard[4]===symbol && gameBoard[6]===symbol){
        console.log('winner');
    }
}

singlePlayer.addEventListener('click', function(){
    gameMode=1;
    console.log(gameMode);
})

multiPlayer.addEventListener('click', function(){
    gameMode=2;
    console.log(gameMode);
})

boardSquares.forEach(val=>{
    
    val.addEventListener('click', function(){
        if(player === 'x'){
            val.innerHTML='x';
            gameBoard[val.id]='x';
            getWinner(player);
            
            player='y';
        } else {
            val.innerHTML='y';
            gameBoard[val.id]='y';
            getWinner(player);

            player='x';
        }
        
        console.log(gameBoard);
    })
});
