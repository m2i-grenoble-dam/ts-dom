interface Student {
    name:string;
    firstName:string;
    promo:number;
    picture:string;
}

/**
 * Comme dans l'exo-list, nous avons ici des données sous forme de tableau mais qui cette fois ci ne sont pas juste
 * des chaînes de caractères mais des objets complexes de type Student. Le principe reste ceci dit le même.
 */
let students:Student[] = [
    {firstName: 'Student 1', name: 'Name 1', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 2', name: 'Name 2', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 3', name: 'Name 3', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 4', name: 'Name 4', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
];
/**
 * Variable qui contiendra le student actuellement sélectionné (pour l'éditer ou le supprimer par exemple) ou null
 * si aucun studen n'est sélectionné
 */
let selected:Student|null = null;


const form = document.querySelector('form');
const inputName = document.querySelector<HTMLInputElement>('#name');
const inputFirstname = document.querySelector<HTMLInputElement>('#firstname');
const inputPromo = document.querySelector<HTMLInputElement>('#promo');
const inputPicture = document.querySelector<HTMLInputElement>('#picture');
const target = document.querySelector<HTMLElement>('#target');


displayStudent(students);
/**
 * Fonction permettant de mettre à jour l'affichage en se basant sur les données, elle va faire une boucle
 * sur tous les students et créer les éléments html nécessaire pour faire une card bootstrap pour chaque student de la liste
 * @param students La liste de student à afficher
 */
function displayStudent(students:Student[]) {
    target.innerHTML = '';
    for (const item of students) {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-3');
        // <div class="col-sm-6 col-md-3"></div>

        const div = document.createElement('div');
        div.classList.add('card');
        // <div class="card"></div>

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        // <div class="card-body"></div>

        const h3 = document.createElement('h3');
        h3.classList.add('card-title');
        //<h3 class="card-title"></h3>

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        //<img card="card-img-top" >

        const p = document.createElement('p');
        p.classList.add('card-text');
        //<p class="card-text"></p>


        //Si le student actuel de la boucle est le même que celui dans la variable selected, alors on lui rajoute une classe bootstrap pour le distinguer visuellement
        if(selected === item) {
            div.classList.add('bg-primary');
        }
        /**
         * Au click sur la card d'un student, on fait en sorte de mettre la valeur actuelle de la boucle en selected,
         * ou de mettre selected à null si on click sur le student qui est déjà sélectionné, et on relance la fonction d'affichage
         */
        div.addEventListener('click', () => {
            if( selected === item) {
                selected = null;
                
            } else {
                selected = item;
            }
            displayStudent(students);
        });
        
    
        h3.textContent = item.name +' '+item.firstName;
        img.src = item.picture;
        p.textContent = 'Promo : '+item.promo
 
        cardBody.appendChild(h3);
        cardBody.appendChild(p);
        

        col.appendChild(div);

        div.appendChild(img);
        div.appendChild(cardBody);
        
        target.appendChild(col);
        
    }

    /**
     * Ici, on fait en sorte d'assigner les valeurs du student sélectionné aux champs de notre formulaire, si il y
     *  a effectivement un student sélectionné, sinon on vide les champs du formulaire avec un reset()
     */
    if(selected) {
        inputFirstname.value = selected.firstName;
        inputPromo.value = String(selected.promo);
        inputPicture.value = selected.picture;
        inputName.value = selected.name;
    } else {
        form.reset();
    }
}

/**
 * Lorsque l'on submit le formulaire, on récupère les valeurs des différents input de celui ci et on utilise
 * ces valeurs pour créer un objet student.
 * Si aucun student n'est sélectionné alors on push ce nouveau student dans le tableau, sinon on assigne les
 * valeurs du formulaire au student actuellement sélectionné. Dans les deux cas, on recharge l'affichage.
 */
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // const data = new FormData(form);
    // let newStudent:Student = {
    //     name: data.get('name')  as string,
    //     firstName: data.get('firstname')  as string,
    //     promo: Number(data.get('promo')),
    //     picture: data.get('picture')  as string
    // }

  

    let newStudent:Student = {
        name: inputName.value,
        firstName: inputFirstname.value,
        promo: Number(inputPromo.value),
        picture: inputPicture.value
    }

    if(!selected) {
        students.push(newStudent);
    } else {
        Object.assign(selected, newStudent);
    }

    displayStudent(students);
    
});