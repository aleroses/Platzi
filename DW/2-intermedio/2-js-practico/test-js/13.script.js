const h1 = document.querySelector("h1");
const form = document.querySelector('#form');
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
let suma;
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


// Primer Método  
// Selector o elemento(Nombre del evento, codigo js-funciones)
// btnCalcular.addEventListener('click', btnOnClick);

/* form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
} */

// 📌 Para pasar los strings a números utilizar el atributo “+” antes del string para cambiar su valor.

btnCalcular.addEventListener('click', btnOnClick);


function btnOnClick(event){
    /* console.log({event});
    event.preventDefault(); */
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
}