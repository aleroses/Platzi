// Circle
const radius = document.querySelector('.radius');
const btn = document.querySelector('.send')
const result = document.querySelector('.result');

// Circumference: 2.pi.r
btn.addEventListener('click', calculate_perimeter);

function calculate_perimeter(){
    result.innerText = `The result is: ${(2 * Math.PI * Number(radius.value)).toFixed(3)}`;
}

// Area: pi.r2
const result_area = document.querySelector('.result-area');

btn.addEventListener('click', calculate_area);

function calculate_area(){
    result_area.innerText = `The result is: ${(Math.PI * Math.pow(Number(radius.value), 2)).toFixed(3)}`
}

// Diameter: 
const result_diameter = document.querySelector('.result-diameter');

btn.addEventListener('click', calculate_diameter);

function calculate_diameter(){
    result_diameter.innerText = `The result is: ${2 * Number(radius.value)}`;
}