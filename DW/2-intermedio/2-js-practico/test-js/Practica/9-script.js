// Creamos variables  
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let p02 = document.getElementsByClassName('p02');
let p03 = document.getElementById('p03');
let input = document.querySelector('input');

// Otra forma de manipular clases y ids
let p022 = document.querySelector('.p02');
let p033 = document.querySelector('#p03');

console.log(h1);
console.log(input.value);
input.value = 'Otro valor ingresado desde js';
console.log(input.value);
console.log({
    h1,
    p,
    p02,
    p03,
    input,
    p022,
    p033
});

// Reemplazar texto html e introducir etiquetas
p.innerHTML = '01 texto reemplazo <br> withdrawing';
p022.innerHTML = '02 texto reemplazo <br> withdrawing';
p033.innerHTML = '03 texto reemplazo <br> withdrawing';

// No funciona con getElementsByClassName
// p02.innerHTML = 'Error'; Error ❌
p03.innerHTML = 'Texto sobreescrito <br> withdrawing';

// Reemplazar con texto plano
p.innerText = '01 texto plano <br> withdrawing'

// Mostrar nombre de la clase
//console.log(p02.getAttribute('class')); Error ❌
console.log(p022.getAttribute('class'));

// Reemplazar nombre de la clase (Mirar en elementos)
p022.setAttribute('class', 'otraclase');

// Anade otro nombre de clase 
p022.classList.add('clasedos');
p022.classList.add('clasetres');

// Elimina clase 
p022.classList.remove('clasedos');

// Si la clase existe la elimina: False, de no existir la añade: True
console.log(p022.classList.toggle('Añade-elimina-clase'));

// Comprueba si la clase existe: True / False 
console.log(p022.classList.contains('otraclase'));

// Mostramos y Creamos un selector
console.log(document.createElement("img"));
let img = document.createElement("img");
img.setAttribute('src', 'https://i.postimg.cc/ryQ9TLj7/10-logo-js.png');
console.log(img);

// Añadimos imagén a alguna variable
p022.append(img);