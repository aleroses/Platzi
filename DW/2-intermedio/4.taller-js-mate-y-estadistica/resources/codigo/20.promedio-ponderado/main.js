// Media aritmética ponderada  

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
// 7.916666666666667