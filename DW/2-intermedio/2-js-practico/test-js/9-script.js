// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
/* const p_dos = document.querySelector('.p02'); */
const p_dos = document.getElementsByClassName('p02');
/* const p_tres = document.querySelector('#p03'); */
const p_tres = document.getElementById('p03');
const input = document.querySelector('input');

console.log(h1);
console.log(input.value);
console.log({
    h1,
    p,
    p_dos,
    p_tres,
    input
});

/* h1.innerHTML = 'Falso titulo <br> algo'; */
h1.innerText= 'Falso titulo <br> algo';
/* console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'red') */

h1.classList.add('rojo');
h1.classList.remove('rojo');
/* h1.classList.toggle('xd');
h1.classList.contains('dog'); */

input.value = 'xdxd'

/* console.log(document.createElement("img")) */

// Crear elemento desde Cero con Js
const img = document.createElement("img");
img.setAttribute('src', 'https://media.revistagq.com/photos/5d1348c16994dc0dc677750c/1:1/w_1152,h_1152,c_limit/doraemon.jpg');

console.log(img);

p_tres.append(img);