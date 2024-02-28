const aBigNumber = 323428423842848n; 
const anotherBigNumber = BigInt(323428423842848);

console.log(aBigNumber);
console.log(typeof(aBigNumber));

console.log(anotherBigNumber);
console.log(typeof(anotherBigNumber));


// Otro ejemplo
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991