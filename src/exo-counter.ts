let btnPlus = document.querySelector<HTMLButtonElement>('#plus');
let btnMinus = document.querySelector<HTMLButtonElement>('#minus');
let spanCounter = document.querySelector<HTMLElement>('#counter');

/**
 * On fait en sorte de stocker la valeur du compteur dans le typescript plutôt que dans le HTML et à chaque
 * fois que cette valeur change, on met à jour le HTML pour répercuter ce changement
 */
let counter = 0;

/**
 * Nos 2 boutons ont au final quasiment le même code, juste l'un va ajouter 1 au compteur et l'autre -1
 */
btnPlus.addEventListener('click', () => {
    changeCounter(1);

});

btnMinus.addEventListener('click', () => {
    
    changeCounter(-1);
    
});

/**
 * Fonction permettant de mettre à jour la valeur du compteur puis de mettre à jour l'affichage de celui ci en HTML
 * @param value le nombre qu'on souhaite ajouter à notre compteur (si nombre négatif, la valeur diminuera)
 */
function changeCounter(value:number) {
    counter += value
    spanCounter.textContent = String(counter);
    console.log(counter);
}


