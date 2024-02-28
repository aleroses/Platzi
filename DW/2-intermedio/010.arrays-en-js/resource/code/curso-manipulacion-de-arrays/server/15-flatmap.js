const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Extraemos los attributes y convertimos todo a un solo array
const result = users.map(user => user.attributes).flat()
console.log(result);
// [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

// Lo mismopero con flatMap
const result_two = users.flatMap(user => user.attributes);
console.log(result_two);
// [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]


// Ejemplo 02
const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const result_three = Object.values(calendars).flatMap(item => {
    /* console.log('item', item); */
    return item.map(date => date.startDate);
});

console.log(result_three);
/* 
[
    2021-02-01T20:00:00.000Z,
    2021-02-01T22:00:00.000Z,
    2021-02-01T17:00:00.000Z,
    2021-02-01T14:00:00.000Z
]
*/