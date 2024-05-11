const hButton = document.querySelector('.h-menu');
const navMenu = document.querySelector('.nav-item_container');
const items = document.querySelectorAll('.nav-item');
const html = document.querySelector('html');
const fSection = document.querySelector('.formation-container');
var counter = 0;

hButton.addEventListener('click', ()=> {
    if (counter === 0) {
        console.log('test');
        navMenu.classList.add('navPosition');
        counter ++;
    } else if (counter > 0) {
        navMenu.classList.remove('navPosition');
        counter = 0;
    }
})

function recorrerMenu(event) {
    
    const click = event.target;
    console.log('click');
    if (click.classList.contains('nav-item')){
            console.log(items);
            counter = 0;
            navMenu.classList.remove('navPosition');
    }
}

window.addEventListener('resize', function() {
    const anchoVentana = window.innerWidth;

    if (anchoVentana <= 730) {
        fSection.classList.remove('flex-s-arround', 'width-big', 'center-item');
        console.log('negro');
    } else {
        fSection.classList.add('flex-s-arround', 'width-big', 'center-item');
    }
});

items.forEach(item => {
    item.addEventListener('click', recorrerMenu);
});