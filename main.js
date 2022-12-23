let boardSquare = document.querySelectorAll('.boardSquare');

let player = 'x';

boardSquare.forEach(val=>{
    val.addEventListener('click', ()=>{
        
    })

    val.addEventListener('click', function(){
        if(player === 'x'){
            val.innerHTML='x';
            player='y';
        } else {
            val.innerHTML='y';
            player='x';
        }
    })
});
