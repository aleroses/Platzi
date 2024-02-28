const entries = new Map([["name", "oscar"], ["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));



// Otro ejemplo 
const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
];

const usuario = Object.fromEntries(arrayEntries);

console.log(usuario);

// Otro ejemplo 

const object = {
    name: "ale",
    age: 21
}
const array = Object.entries(object);
console.log(array);
