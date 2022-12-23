let boardSquares = document.querySelectorAll('.boardSquare');

let board = document.getElementById('board');

let player = 'x';

let gameBoard = [
    '','','',
    '','','',
    '','',''
];

let winningCombos= [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

// for(let i=0; i<winningCombos.length; i++){
//     console.log(winningCombos[i]);
//     for(let j=0; j<winningCombos[i].length; j++){
//         console.log(winningCombos[i][j]);
//     }
// }

boardSquares.forEach(val=>{

    val.addEventListener('click', function(){
        if(player === 'x'){
            val.innerHTML='x';
            gameBoard[val.id]='x';
            player='y';
        } else {
            val.innerHTML='y';
            gameBoard[val.id]='y';
            player='x';
        }
        console.log(gameBoard);
    })
});


// console.log(boardSquare);
console.log(gameBoard[0]);