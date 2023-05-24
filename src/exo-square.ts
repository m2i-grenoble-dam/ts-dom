const square = document.querySelector<HTMLElement>('#square');
const playground = document.querySelector<HTMLElement>('#playground');

playground.addEventListener('click', (event) => {
    
    square.style.left = event.clientX+'px';
    square.style.top = event.clientY+'px';
});