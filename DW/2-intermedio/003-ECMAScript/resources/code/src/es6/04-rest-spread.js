// Arrays destructuring 

let fruits = ['Apple', 'Banana'];
let [a, b, c] = fruits;
console.log(a, b, c, fruits[1]);

// Object destructuring 
/* let user = { username: 'Oscar', age: 34, country: 2};
let { username, age, country } = user;
console.log(username, age, country, user.age); */


// spread operator 
let person = { name: 'oscar', age: 28 };
let country = 'MX';

let data = { ...person, country, id: 2};
console.log(data);

// rest 
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);



/* const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
}

const {plataforma, ...usuario} = objeto

console.log(objeto);
console.log(plataforma);
console.log(usuario);



const array = [0,1,2,3,4,5]
const [cero, ...positivos] = array

console.log(cero);
console.log(positivos); */


/* const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final") */