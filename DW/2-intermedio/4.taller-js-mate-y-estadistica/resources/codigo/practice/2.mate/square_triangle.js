// SQUARE
// Perimeter of the square
const side = document.querySelector('.side');
const send = document.querySelector('.send-one');
const result_one = document.querySelector('.result-one')

send.addEventListener('click', calculate_perimeter);

function calculate_perimeter(){
    result_one.innerText = 'The Perimeter of the square is: '+ Number(side.value) * 4;
}

// Area of the square
const result_two = document.querySelector('.result-two');

send.addEventListener('click', calculate_area);

function calculate_area(){
    result_two.innerText = 'The Area of the square is: '+ Math.pow(Number(side.value), 2);
}

// TRIANGLE: ISOSCELES 
// Perimeter of the triangle 
const sides = document.querySelector('.sides')
/* const side_b = document.querySelector('.b') */
const base = document.querySelector('.base')
const send_tri = document.querySelector('.send-three');
const result_three = document.querySelector('.result-tri-one');

send_tri.addEventListener('click', calculate_perimeter_triangle);

function calculate_perimeter_triangle(){
    result_three.innerText = 'The Perimeter of the triangle isosceles is: ' + (Number(sides.value) + Number(sides.value) + Number(base.value));
}

// Area of the triangle 
const result_four = document.querySelector('.result-tri-two');

send_tri.addEventListener('click', calculate_area_triangle);

function calculate_area_triangle(){
    // h=sqrt(pow(ab, 2)-pow(base/2, 2))
    const height = Math.sqrt(Math.pow(Number(sides.value), 2) - ((Math.pow(Number(base.value), 2) / 4))).toFixed(2);

    result_four.innerText = `The Area of the triangle isosceles is: ${(Number(base.value) * height) / 2}`;
}