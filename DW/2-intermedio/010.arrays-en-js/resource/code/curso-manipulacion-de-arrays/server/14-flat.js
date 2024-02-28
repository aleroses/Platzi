const matrix = [
    [1, 2, 3],
    [4, 5, 6, [1,2, [1,2]]],
    [7, 8, 9],
];

// usando for
const flatArray = []

for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i]
    for (let j = 0; j < array.length; j++) {
        flatArray.push(matrix[i][j])
    }
}

console.log(flatArray)

// Aplanando usando flat(Infinity)
const result = matrix.flat(3);
console.log(result);


// Otra forma de aplanar una matriz 

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

// Profundidad
function depth(list){
    let new_list = [];
    if(typeof list != "object") return [list];

    list.forEach(element => {
        new_list = new_list.concat(depth(element));
    });
    return new_list;
}

const new_array = depth(matriz);
console.log('xd', new_array);