const numbers = [1, 30, 49, 29, 10, 13];

const rpta = numbers.every(item => item <= 40);
console.log(rpta);

// Reto: todos deben ser menores de 15

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const result = team.every(item => item.age < 15)
console.log(result);