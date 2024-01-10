// Ejemplo 01
const numbers = [1, 2, 3, 4];

const validate = numbers.some(item => item % 2 === 0);
console.log(validate); //true


// Ejemplo 02
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 240,
        delivered: true,
    }
];

const order = orders.some(item => item.delivered);
console.log(order); // true


// Ejemplo 03 
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const new_appointment = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (new_date) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate},
            { start: new_date.startDate, end: new_date.endDate},
        )
    })
}

console.log(isOverlap(new_appointment));