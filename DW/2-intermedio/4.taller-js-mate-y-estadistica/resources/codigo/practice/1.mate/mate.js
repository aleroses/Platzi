// Perimeter of the square
const side = document.querySelector('.side');
const send = document.querySelector('.send-one');
const result_one = document.querySelector('.result-one')

send.addEventListener('click', calculate_perimeter);

function calculate_perimeter(){
    result_one.innerText = 'The Perimeter of the square is: '+ Number(side.value) * 4;
}