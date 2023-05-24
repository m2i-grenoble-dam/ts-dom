let btnPlus = document.querySelector<HTMLButtonElement>('#plus');
let btnMinus = document.querySelector<HTMLButtonElement>('#minus');
let spanCounter = document.querySelector<HTMLElement>('#counter');

let counter = 0;

btnPlus.addEventListener('click', () => {
    changeCounter(1)
});

btnMinus.addEventListener('click', () => {
    
    changeCounter(-1)
    
});

function changeCounter(value:number) {
    counter += value
    spanCounter.textContent = String(counter);
    console.log(counter);
}


