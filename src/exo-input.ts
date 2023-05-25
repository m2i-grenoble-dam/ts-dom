const input = document.querySelector<HTMLInputElement>('input');
const btn = document.querySelector<HTMLButtonElement>('button');
const para = document.querySelector<HTMLElement>('p');
const span = document.querySelector<HTMLElement>('span');

btn.addEventListener('click', () => {
    para.textContent = input.value;
});

input.addEventListener('input', () => {
    let count = input.value.length;
    span.textContent = String(count);
    
    //Bonus, on vérifie si la taille du texte est supérieur à 20
    if(count > 20) {
        //Si oui, on change la valeur de l'input pour lui mettre uniquement les 20 premiers caractères de celui ci
        input.value = input.value.substring(0,19);
    }
});