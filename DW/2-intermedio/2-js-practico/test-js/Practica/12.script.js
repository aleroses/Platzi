const h1 = document.querySelector("h1");
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
let suma;
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function btnOnClick(){
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
}

// 📌 Para pasar los strings a números utilizar el atributo “+” antes del string para cambiar su valor.