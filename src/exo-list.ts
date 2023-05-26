const btnAdd = document.querySelector<HTMLElement>('button');
const ul = document.querySelector<HTMLElement>('ul');
const input = document.querySelector<HTMLInputElement>('input');
/**
 * L'idée dans cet exercice est de faire en sorte que l'affichage soit généré à partir des données stockées dans le
 * typescript. Ici notre array list représente nos data pures et c'est uniquement via la fonction displayList
 * que l'on fera en sorte de les afficher dans le HTML. L'affichage découle des data plutôt que l'inverse.
 */
let list:string[] = ['Valeur 1', 'Valeur 2', 'Valeur 3'];

//On appelle notre fonction une première fois pour afficher les valeurs initiales de la liste
displayList(list);



/**
 * Lorsqu'on click sur le bouton d'ajout, une nouvelle valeur va être push à l'intérieur de la liste puis la fonction
 * displayList sera lancée à nouveau afin de mettre à jour l'affichage
 */
btnAdd.addEventListener('click', () => {
    list.push(input.value);
    displayList(list);
});
/**
 * Fonction permettant de générer des li dans le HTML en se basant sur un tableau de string donné en argument.
 * C'est cette fonction qui va permettre d'afficher les données et qu'il faudra rappeler dès que les données changent.
 * @param list La liste que l'on souhaite afficher
 */
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