let para2 = document.querySelector<HTMLElement>('#para2');
para2.style.color = 'blue';

let section2 = document.querySelector<HTMLElement>('#section2');
section2.style.borderStyle = "dotted";

let colorful = document.querySelector<HTMLElement>('#section2 .colorful');
colorful.style.background = 'orange'


let h2Sect1 = document.querySelector<HTMLElement>('#section1 h2');
h2Sect1.style.fontStyle = 'italic';

let colorfulInPara = document.querySelector<HTMLElement>('p .colorful');
colorfulInPara.style.display = 'none';

para2.textContent = 'Modified by TS'

let a = document.querySelector<HTMLAnchorElement>('a');
a.href = 'http://www.m2iformation.fr';

let h2Sect2 = document.querySelector<HTMLElement>('#section2 h2');
h2Sect2.classList.add('big-text');

let paras = document.querySelectorAll('p');
for (const item of paras) {
    item.style.fontStyle = 'italic';
}

para2.addEventListener('click', () => {
    console.log('coucou');
    
})