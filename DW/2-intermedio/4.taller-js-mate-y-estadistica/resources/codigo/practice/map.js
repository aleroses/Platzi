// primera forma
/* const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

console.log('Objeto', obj);

let arr = Object.entries(obj);
console.log('Array de arrays', arr);

let arr_obj = arr.map(([id, name]) =>  ({id, name}))
console.log('Array de objetos', arr_obj); */


// segunda forma 
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};


function solution(obj){
    let resp = Object.entries(obj).map(([id, name]) => ({id, name}));

    console.log(resp);
    return resp;
}

solution(obj);






/* let n = [1,5,10,15];


let x;

function xd(algo){
    return algo * 2;
}

console.log(n.map(xd)); */