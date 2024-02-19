// Evaluar si todos son pares

function check_array(array) {
    return array.length > 0 
    ? array.every(index => index % 2 === 0)
    : false;
}

check_array([2, 4, 6, 8, 10]);
check_array([1, 3, 5, 7, 10, 11]);
check_array([1, 3, 5]);
check_array([]);