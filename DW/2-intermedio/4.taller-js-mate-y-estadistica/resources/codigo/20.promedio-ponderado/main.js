// Media aritmética ponderada  

/* const notes = [
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

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

console.log(notesWithCredit);
// [ 20, 40, 35 ]

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

console.log(sumOfNotesWithCredit);
// 95


const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

console.log(credits);
// [ 2, 5, 5 ]

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

console.log(sumOfCredits)
// 12

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioPonderadoNotasConCreditos);
// 7.916666666666667 */

// [(N1*C1) + (N2*C2) + (N3*C3)] / (C1 + C2 + C3)

/* const notes = [
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

let dividend = notes.map(a => a.note * a.credit).reduce((a, b) => a + b);
console.log(dividend);

let divisor = notes.map((a) => a.credit).reduce((a, b) => a + b);
console.log(divisor);

let quotient = (dividend / divisor).toFixed(2);
console.log(quotient);

// Pasar Array de Objetos a Arra de Arrays
let x = notes.map(({course, note, credit}) => ([course, note, credit]));
console.log(x); */


// OTRO EJEMPLO     
let data = [
    {
        test: 1,
        goal: 10,
        note: 8,
        weight: 0.2,
    },
    {
        test: 2,
        goal: 10,
        note: 7,
        weight: 0.2,
    },
    {
        test: 3,
        goal: 10,
        note: 9,
        weight: 0.3,
    },
    {
        teamwork: 1,
        goal: 20,
        note: 19,
        weight: 0.3,
    }
]

// Calculate dividend
let step_one = data.map(a => ((a.note * 100) / a.goal) * a.weight / 100);
console.log(step_one);
// [ 0.16, 0.14, 0.27, 0.285 ]

let step_two = step_one.reduce((a, b) => a + b);
console.log(step_two);
// 0.855

// Calculate divisor
let step_three = data.map(a => a.weight).reduce((a, b) => a + b);
console.log(step_three);
// 1

// Calculate quotient (cociente)
let quotient = step_two / step_three;
console.log(quotient);
// 0.855