/* 
- promedio or mediana aritmética +++ / lenght
    - 1, 2, 3 rpt: 6/3
- mediana 
	- 450, 500, 600 rpt: 500
	- 100, 200, 300, 400 rpt: 200+300/2
- moda: valor que se repite mas veces (cualquier dato)
- promedio ponderado or media aritmética ponderada  
    - define el peso de cada elemento en nuestro conjunto de números: 
        - n = número; 
        - p = peso;
    - [(n1*p1) + (n2*p2) + (n3*p3)] / (p1 + p2 + p3)
*/

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

let numerator = notes.map(x => x.note * x.credit).reduce((a, b) => a + b);
let denominator = notes.map(x => x.credit).reduce((a, b) => a + b);
let result = (numerator / denominator).toFixed(2);

console.log(`${numerator} / ${denominator} = ${result}`);





















/* const data = [
    {
        course: 'Linux',
        note: 10,
        credit: 2,
    },
    {
        course: 'POO',
        note: 8,
        credit: 5,
    },
    {
        course: 'Terminal',
        note: 7,
        credit: 5,
    }
]


let numerator = data.map(x => x.note * x.credit).reduce((a, b) => a + b);
let denominator = data.map(c => c.credit).reduce((a, b) => a + b);
let result = (numerator / denominator).toFixed(2);

console.log(`${numerator} / ${denominator} = ${result}`); */