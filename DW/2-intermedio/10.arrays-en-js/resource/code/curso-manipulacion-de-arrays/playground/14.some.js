function check_array(numbers){
    return numbers.some(number => number % 2 === 0)
}

check_array([1, 3, 5, 7, 10, 11]);
check_array([1, 3, 5]);
check_array([]);