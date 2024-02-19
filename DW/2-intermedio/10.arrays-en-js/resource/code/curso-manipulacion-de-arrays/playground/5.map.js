const array_one = [2, 4, 5, 6, 8];
const array_two = [1, 1, -2, -3];

function multiply_elements(array){
    console.log(array.map(n => n * 2)); 
}

multiply_elements(array_one);
multiply_elements(array_two)