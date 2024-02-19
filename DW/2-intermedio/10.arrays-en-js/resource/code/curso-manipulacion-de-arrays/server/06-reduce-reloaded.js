// Ejemplo 01
/* const numbers = [1, 2, 3, 4, 1, 4, 4, 3, 3, 3, 4, 3, 2, 2];

const counter = numbers.reduce((obj, item) => {
    if(obj[item]){
        obj[item] += 1;
    }else {
        obj[item] = 1;
    }

    return obj;
}, {});

console.log(counter); */
// { '1': 2, '2': 3, '3': 5, '4': 4 }

// Ejemplo 02
/* const data = [
    {
        customerName: 'Nicolas',
        level: 'low'
    },
    {
        customerName: 'Andrea',
        level: 'medium'
    },
    {
        customerName: 'Zulema',
        level: 'hight'
    },
    {
        customerName: 'Santiago',
        level: 'low'
    },
    {
        customerName: 'Valentina',
        level: 'medium'
    }
];

const find = data.reduce((obj, item) => {
    obj[item.level] ? obj[item.level] += 1 : obj[item.level] = 1;
    return obj;
}, {});

console.log(find); */
// { low: 2, medium: 2, hight: 1 }

// Ejemplo 03: contrar por rangos 1-5 = 5; 6-8 = 23; 9-10 = 5


/* const number_list = [
    1, 2, 3, 4, 1, 4, 4, 3, 3, 3, 4, 3, 2, 2, 5, 5, 5, 5, 6, 
    7, 7, 7, 7, 7, 8, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10
]; */

const number_list = [];
// Generamos numeros aleatorios
for (let i=0; i < 10; i++) {
    number_list.push(Math.floor(Math.random() * 10) + 1);
}

const find_ranges = number_list.reduce((range, item) => {
    if(item <= 2){
        range['1-2'] += 1;
    }else if(item <= 4){
        range['3-4'] += 1;
    }else if(item <= 6){
        range['5-6'] += 1;
    }else if(item <= 8){
        range['7-8'] += 1;
    }else if(item <= 10){
        range['9-10'] += 1;
    }
    
    return range;
}, {
    '1-2': 0,
    '3-4': 0,
    '5-6': 0,
    '7-8': 0,
    '9-10': 0
    }
);

console.log(number_list);
console.log(find_ranges);


/* const number_list = [];

for (let i=0; i < 10; i++) {
    number_list.push(Math.floor(Math.random() * 11));
}

const find_ranges = number_list.reduce((range, item) => {
    if(item < 5){
        range['1-4'] += 1;
    }else if(item < 9){
        range['5-8'] += 1;
    }else{
        range['9-10'] += 1;
    }
    
    return range;
}, {
    '1-4': 0,
    '5-8': 0,
    '9-10': 0,
    }
);

console.log(number_list);
console.log(find_ranges); */






/* const something = {
    1: `a`,
    2: `b`,
    3: `c`,
}

const another_thing = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(something[2]); //b
console.log(something[2] = 'z'); //z
console.log(another_thing['c']); //3
console.log(another_thing['c'] = 0); //0
console.log({something, another_thing}); */
/* {
    something: { '1': 'a', '2': 'z', '3': 'c' },
    another_thing: { a: 1, b: 2, c: 0 }
} */




