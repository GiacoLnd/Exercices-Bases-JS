const squares = document.querySelectorAll('.square')

squares.forEach(square => {
    let rotate = 0;

    square.addEventListener('click', function (){
    
        if(rotate === 0){
            rotate +=45;
            this.style.background = `red`
        } else {
            rotate = 0;
            this.style.background = `green`
        }
        
        this.style.transform = `rotate(${rotate}deg)`;
})
})