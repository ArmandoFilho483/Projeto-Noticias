

const botaoAbrir = document.querySelector('header > button');
const botaoFechar = document.querySelector('header > .mobile > button');
const body = document.querySelector('body');
const nav = document.querySelector('header .mobile');

botaoAbrir.addEventListener('click', () => {
    body.classList.add('escurecer');
    nav.classList.add('abrir');
})
botaoFechar.addEventListener('click', () => {
    body.classList.remove('escurecer');
    nav.classList.remove('abrir');
})
console.log(body)