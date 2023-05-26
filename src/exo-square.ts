const square = document.querySelector<HTMLElement>('#square');
const playground = document.querySelector<HTMLElement>('#playground');
const zoneGreen = document.querySelector<HTMLElement>('#zone-green');
const zoneBlue = document.querySelector<HTMLElement>('#zone-blue');

/**
 * Le paramètre event (qui pourrait s'appeler n'importe comment en réalité) est un paramètre spécial
 * des addEventListener qui contiendra tout un tas d'informations relatives à l'événement qui vient de se produire,
 * par exemple la position de la souris au moment du click, l'élément HTML se trouvant sous la souris, est-ce que
 * la touche ctrl/shift/alt est enfoncée, etc.
 */
playground.addEventListener('click', (event) => {
    
    square.style.left = event.clientX+'px';
    square.style.top = event.clientY+'px';

    /**
     * Version avec un seul eventlistener et en utilisant le event.target
     */
    /*
    if(event.target == zoneGreen) {
        square.style.background ='green';

    }
    if(event.target == zoneBlue) {
        square.style.background ='blue';

    }
    */
});

zoneGreen.addEventListener('click', () => {
   
    square.style.background ='green';
});

zoneBlue.addEventListener('click', () => {
   
    square.style.background ='blue';
});