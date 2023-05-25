const btnAdd = document.querySelector<HTMLElement>('button');
const ul = document.querySelector<HTMLElement>('ul');

let list:string[] = ['Valeur 1', 'Valeur 2', 'Valeur 3'];

displayList(list);



function displayList(list:string[]) {
    for (const item of list) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }
}



btnAdd.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'texte';
    ul.appendChild(li);
});