const h1 = document.querySelector("h1");
// Para el segundo método agregamos la variable del form
const form = document.querySelector("#form");
const input1 = document.querySelector("#number1");
const input2 = document.querySelector("#number2");
let suma;
const btnCalcular = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

// Primer método
/* btnCalcular.addEventListener('click', btnOnClick);

function btnOnClick(){
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
} */

// Segundo método para Formularios 
/* form.addEventListener('submit', btnSubmit);

function btnSubmit(event){
    // console.log({event});
    event.preventDefault(); 
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
} */

// Tercer método para Formularios 
btnCalcular.addEventListener('click', btnOnClick);

function btnOnClick(event){
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
}