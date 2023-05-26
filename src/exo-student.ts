interface Student {
    name:string;
    firstName:string;
    promo:number;
    picture:string;
}

let students:Student[] = [
    {firstName: 'Student 1', name: 'Name 1', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 2', name: 'Name 2', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 3', name: 'Name 3', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 4', name: 'Name 4', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
];
let selected:Student|null = null;



const target = document.querySelector<HTMLElement>('#target');
displayStudent(students);

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


        
        if(selected === item) {
            div.classList.add('bg-primary');
        }
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
}

document.querySelector('#change-name').addEventListener('click', () => {
    selected.firstName = 'Prénom modifié';
    displayStudent(students);
})