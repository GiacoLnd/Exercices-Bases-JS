
import quotes from './quotes.js'


let favoris = JSON.parse(localStorage.getItem('favoris')) || [];



function displayQuotes () {
    const container = document.getElementById('quoteString')
    container.innerHTML = "";

    quotes.forEach(({auteur, quote}, index) => {
    const citations = document.createElement('div')
    citations.classList.add('quote')
    citations.innerHTML = `
        <i class="citations">${quote}</i>
        <br>
        <button class="fav-button" data-index="${index}">
            <i class="${favoris.includes(index) ? 'fa-solid fa-heart favori' : 'fa-regular fa-heart'}"></i>
        </button> 
        <span class="auteur">${auteur}</span>`
    container.appendChild(citations)
});
}    

function displayFavoris() {
    const container = document.getElementById('tableauFavoris');
    container.innerHTML = "";

    favoris.forEach(index => {
        if (typeof index === 'number' && index >= 0 && index < quotes.length) {
            const { auteur, quote } = quotes[index];
            const citations = document.createElement('div');
            citations.classList.add('quote');
            citations.innerHTML = `
                <i class='citations'>${quote}</i>
                <br>
                <span class='auteur'>${auteur}</span>`;
            container.appendChild(citations);
        }
    });
}

function toggleFavoris(index){
    // const button = document.querySelector(`.fav-button[data-index="${index}"] i`);
    if (favoris.includes(index)) {
        favoris = favoris.filter(fav => fav !== index);
        // button.classList.remove('favori');
        console.log(`Citation ${index} retirée des favoris`)
    } else {
        favoris.push(index);
        // button.classList.add('favori');
        console.log(`Citation ${index} ajoutée aux favoris`)
    }
    localStorage.setItem('favoris', JSON.stringify(favoris));
    displayQuotes();
    displayFavoris();
}

document.getElementById('quoteString').addEventListener('click', (event) => {
    const button = event.target.closest('.fav-button')
    if (button){
        const index = button.getAttribute('data-index');
        console.log(`Bouton favori cliqué pour la citation ${index}`)
        toggleFavoris(Number(index));
    }
    
});



displayQuotes();
displayFavoris();
