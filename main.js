let boardSquare = document.querySelectorAll('.boardSquare');

boardSquare.forEach(val=>{
    val.addEventListener('click', function(){
        console.log('success');
    })
})