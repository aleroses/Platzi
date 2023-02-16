let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let p02 = document.getElementsByClassName('p02');
let p03 = document.getElementById('p03');
let input = document.querySelector('input');

console.log(h1);
console.log({
    h1,
    p,
    p02,
    p03,
    input
});

/* h1.innerHTML = 'LoL <br> XD'; */
h1.innerText = 'Lol <br> XD';
console.log(h1.getAttribute('class'));

//Reemplaza el nombre de la clase, mirar en elementos
h1.setAttribute('class', 'pruebados');
console.log(h1.getAttribute('class'));

input.value = "123";

/* console.log(document.createElement("img")); */
let img = document.createElement("img");
img.setAttribute('src', 'https://media.revistagq.com/photos/5d1348c16994dc0dc677750c/1:1/w_1152,h_1152,c_limit/doraemon.jpg')

console.log(img);
p3.append(img);