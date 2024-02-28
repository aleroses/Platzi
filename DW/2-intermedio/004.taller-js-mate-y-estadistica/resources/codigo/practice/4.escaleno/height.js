const side_a = document.querySelector('.side-a');
const side_b = document.querySelector('.side-b');
const base = document.querySelector('.base');
const btn = document.querySelector('.send');
const result = document.querySelector('.result');

btn.addEventListener('click', calculate_height);

function calculate_height(){
    const semi_perimeter = (Number(base.value) + Number(side_a.value) + Number(side_b.value)) / 2;
    console.log(semi_perimeter);

    result.innerText = `The result is: ${(2 / Number(base.value)) * Math.sqrt(semi_perimeter*(semi_perimeter - Number(base.value)) * (semi_perimeter - Number(side_a.value)) * (semi_perimeter - Number(side_b.value)))}`;
}