let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let p02 = document.getElementsByClassName("p02");
let p03 = document.getElementById("p03");
let input = document.querySelector("input");

// Otra forma de manipular Clases y Ids
let p002 = document.querySelector(".p02");
let p003 = document.querySelector("#p03");

console.log(h1);
console.log(input.value);
input.value = "Texto de prueba 02";
console.log(input.value);

console.log({
    h1,
    p,
    p02,
    p03,
    input,
    p002,
    p003
});

// Cambiar el contenido de las etiquetas
h1.innerHTML = "Titulo <br> innerHTML";
p.innerHTML = "Parrafo 01";
p002.innerHTML = "Parrafo 02";

// Cambiamos el contenido a texto plano
h1.innerText = "Titulo <br> innerHTML";

// Ver la clase usada 
console.log(p002.getAttribute("class"));
// Cambiar nombre a la clase
p002.setAttribute("class", "clasemodificada");
// Añadir otra clase
p002.classList.add("clasedos");
p002.classList.add("clasetres");
// Eliminar clases
p002.classList.remove("clasedos");
// Verificar si una clase existe para eliminarla: False, o de no exisitir añadirla: True
// console.log(p002.classList.toggle("clasetres"));
// console.log(p002.classList.toggle("clasecuatro"));
// Verificar si existe una clase: True / False
console.log(p002.classList.contains("clasetres"));

// Crear una etiqueta
console.log(document.createElement("img"));
// Meter dato en una variable
let img = document.createElement("img");
img.setAttribute("src", "https://i.postimg.cc/ryQ9TLj7/10-logo-js.png");
p002.append(img);

