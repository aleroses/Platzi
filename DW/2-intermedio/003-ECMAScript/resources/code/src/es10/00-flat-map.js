// flat
const array = [1,1,2,3,4, [1,3,5,6, [1,2,4]]];
console.log(array.flat(3));

// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));
// 1, 1*2 = 2, 2, 2*2 = 4, etc


/* const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
console.log(result2); */

/* const strings = ["Nunca pares", "de Aprender"]
console.log(strings.map(string => string.split(" ")));
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
console.log(strings.flatMap(string => string.split(" ")));
// [ 'Nunca', 'pares', 'de', 'Aprender' ] */
