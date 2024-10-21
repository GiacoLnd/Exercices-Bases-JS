let currentIcon = null;

function displayIcon(icon, backColor, text){
    if(currentIcon === icon){
        reset();
        document.body.style.backgroundColor = '#CFD0D1';
        currentIcon = null;
    } else {
    reset();
    document.body.style.backgroundColor = backColor
    icon.style.boxShadow = "3px 15px 20px 10px black";
    icon.style.borderRadius= "15px"
    const iconText = icon.querySelector('span');
    iconText.textContent = text
    currentIcon = icon;
    }
}

function reset(){
    const icons = document.querySelectorAll('.icon')
    icons.forEach(icon => {
        const span = icon.querySelector('span')
        span.textContent = '';
        icon.style.boxShadow = 'none';
        icon.style.borderRadius = '0px'
    })
}