const originalBgColor = document.body.style.backgroundColor;
let activeIcon = null;

function toggleEffects(icon, bgColor) {
    icon.classList.toggle('rounded');
    icon.classList.toggle('shadow');
    icon.classList.toggle('show-text');
    
    document.body.style.backgroundColor = bgColor;
}

function resetBackground(icon) {
    if(activeIcon){
    activeIcon.classList.remove('rounded', 'shadow', 'show-text');
    }
    document.body.style.backgroundColor = originalBgColor;
    
}

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        let bgColor;

        if(icon.id === 'facebook') {
            bgColor = '#3b5998';
        } else if(icon.id === 'twitter') {
            bgColor = '#00acee';
        } else if(icon.id === 'instagram') {
            bgColor = '#cd486b';
        }

        if (activeIcon === icon) {
            resetBackground();
            activeIcon = null;
        } else {
            resetBackground();
            toggleEffects(icon, bgColor);
            activeIcon = icon;
        }
    })
})