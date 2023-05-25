const square = document.querySelector<HTMLElement>('#square');
const playground = document.querySelector<HTMLElement>('#playground');
const zoneGreen = document.querySelector<HTMLElement>('#zone-green');
const zoneBlue = document.querySelector<HTMLElement>('#zone-blue');

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