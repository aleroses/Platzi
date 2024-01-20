function secondLargestNumber(numbers){
  let first = numbers[0]
  let second = 0;

  for(let i=0; i < numbers.length; i++){
    if(numbers[i] > first){ // comparación para ver quien
      second = first;       // es mayor
      first = numbers[i]
    }
      if(numbers[i] > second && numbers[i] < first){
      second = numbers[i];  // comparación para ver quien
    }                       // es menor
  }
  return second
}
let nums = [8, 4, 6, 10, 9, 11]
console.log(secondLargestNumber(nums))
