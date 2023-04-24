/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
*/

const number_list = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];
const number_counter = {};

for (let i=0; i<number_list.length; i++) {
    const element = number_list[i];
    
    if(!number_counter[element]){
        number_counter[element] = 1;
    }else{
        number_counter[element] += 1;
    }
}

console.log(number_counter);
// { '1': 1, '3': 1, '10': 2, '13': 1, '14': 3, '24': 1, '35': 1 }

