/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
*/

// Pasos 
// 1. Crear un  objeto que tenga el conteo de números existentes
// 2. Convertir objeto a array de arrays 
// 3. Ordenar array de arrays por value (indice 1)

let number_list = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];
let objet = {};
let array_list;
let sorted_array;  

function moda(array){
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        
        objet[item] ? objet[item] += 1 : objet[item] = 1;

        array_list = Object.entries(objet);
        sorted_array = array_list.sort((a, b) => a[1] - b[1]);
    }
}

moda(number_list)

console.log(objet);
console.log(array_list);
console.log(sorted_array);
console.log(sorted_array[sorted_array.length - 1][0]);






















/* 
const array = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];
const number_counter = {};
let array_list;
let values;

function moda(array){
    for (let i=0; i<array.length; i++) {
        const item = array[i];
    
        number_counter[item] ? number_counter[item] += 1 : number_counter[item] = 1;
    
        array_list = Object.entries(number_counter);
        values = array_list.sort((a, b) => a[1] - b[1]);
    }
}

moda(array);

console.log(number_counter);
// { '1': 1, '3': 1, '10': 2, '13': 1, '14': 3, '24': 1, '35': 1 }
console.log(array_list);
[
    [ '1', 1 ],
    [ '3', 1 ],
    [ '10', 2 ],
    [ '13', 1 ],
    [ '14', 3 ],
    [ '24', 1 ],
    [ '35', 1 ]
]
console.log(values);

[
    [ '1', 1 ],
    [ '3', 1 ],
    [ '13', 1 ],
    [ '24', 1 ],
    [ '35', 1 ],
    [ '10', 2 ],
    [ '14', 3 ]
]


// Cambiar el número para ver los valores anteriores (1, 2, 3) 
console.log(values[values.length - 1]);
// [ '14', 3 ] */