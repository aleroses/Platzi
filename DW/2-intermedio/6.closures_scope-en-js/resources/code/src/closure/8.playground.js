function add(first_number) {
  function calculate(second_number) {
    if (second_number) {
      return first_number + second_number;
    } else {
      return first_number;
    }
  }

  return calculate;
}

const result = add(2)(3);
const result_two = add(90)();

console.log(result, result_two);
