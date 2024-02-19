// Transformar objetos en arrays  
// Pasos:  
// 1. Convertir Objeto en un array de arrays
// 2. Recorrer cada array interno y convertir a objeto


const objeto = {
    1: '🥑',
    2: '🍉',
    3: '🍇',
};

function solution(o){
    return Object.entries(o).map(([id, name]) => ({id, name}));
}

solution(objeto);

















/* function solution(obj) {
    const array = Object.entries(obj).map(([id, name]) => ({ id, name }));
    return array;
}

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

console.log(solution(obj)); */