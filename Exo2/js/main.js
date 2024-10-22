const squares = document.querySelectorAll('.square');

function colorSquare() {
    const style = window.getComputedStyle(this);
    const backgroundColor = style.backgroundColor;

    const afficherCarre = document.querySelector('#carre');
    afficherCarre.style.backgroundColor = backgroundColor;
    afficherCarre.textContent = backgroundColor;
}


squares.forEach(square => {
    square.addEventListener('click', colorSquare);
});