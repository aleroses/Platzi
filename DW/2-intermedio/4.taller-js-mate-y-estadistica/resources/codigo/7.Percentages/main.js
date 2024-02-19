const number_total = document.querySelector('.number-total');
const porcentaje = document.querySelector('.porcentaje');
const enviar = document.querySelector('.enviar')
let calculo;
const result = document.querySelector('.result');

enviar.addEventListener('click', calculoPorcentaje);

function calculoPorcentaje(){
    if(porcentaje.value < 100 && number_total.value > 0){
        calculo = (Number(number_total.value) * parseInt(porcentaje.value)) / 100;
        result.innerText = `El ${porcentaje.value}% de ${number_total.value} es: ` + calculo;
    
    
        console.log('click XDXDXD' + result);
    } else{
        result.innerText = "Hey!! algo no anda bien...";
    }
};

