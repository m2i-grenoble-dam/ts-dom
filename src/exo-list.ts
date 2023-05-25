const btnAdd = document.querySelector<HTMLElement>('button');
const ul = document.querySelector<HTMLElement>('ul');
const input = document.querySelector<HTMLInputElement>('input');

let list:string[] = ['Valeur 1', 'Valeur 2', 'Valeur 3'];

displayList(list);




btnAdd.addEventListener('click', () => {
    list.push(input.value);
    displayList(list);
});

function displayList(list:string[]) {
    ul.innerHTML = '';
    for (const item of list) {
        const li = document.createElement('li');
        li.textContent = item
        ul.appendChild(li);
    }
}



document.querySelector<HTMLElement>('#afficher-tableau').addEventListener('click', () => {
    console.log(list);
    
});