/*function segundoNumeroGrande(numero)
{

  console.log(numero);
}

let nums = [8, 4, 6, 10, 9, 11]

nums.sort();
parseInt(nums);
segundoNumeroGrande(nums);
*/
/*
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}
*/
function compareNumbers(a, b) {
  return a - b;
}

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
