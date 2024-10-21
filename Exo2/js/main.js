function colorSquare1(){
    const style = window.getComputedStyle(this);
    const backgroundColor = style.backgroundColor;

    const afficherCarre = document.querySelector('#carre');
    afficherCarre.style.backgroundColor = backgroundColor
    afficherCarre.textContent = backgroundColor
}

document.getElementById('square1').addEventListener('click', colorSquare1)

document.getElementById('square2').addEventListener('click', colorSquare1)

document.getElementById('square3').addEventListener('click', colorSquare1)

document.getElementById('square4').addEventListener('click', colorSquare1)