const input = document.querySelector<HTMLInputElement>('input');
const btn = document.querySelector<HTMLButtonElement>('button');
const para = document.querySelector<HTMLElement>('p');

btn.addEventListener('click', () => {
    para.textContent = input.value;
});