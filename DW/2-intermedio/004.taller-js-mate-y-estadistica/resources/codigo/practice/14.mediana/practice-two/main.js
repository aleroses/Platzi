/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
*/

const array = [5,2,1,4,3];
const what_is_it = array.length % 2 == 0;
// true is par (even) and false is impar (odd)

const sorted_array = array.sort();

const mediana = what_is_it 
    ? (sorted_array[((sorted_array.length / 2) - 1)] + sorted_array[(sorted_array.length / 2)]) / 2 
    : sorted_array[Math.floor(sorted_array.length / 2)];

console.log(sorted_array, 'is', mediana);
