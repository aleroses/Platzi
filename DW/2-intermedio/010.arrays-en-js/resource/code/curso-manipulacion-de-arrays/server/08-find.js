//Ejemplo 1
const numbers = [1, 30, 49, 29, 10, 13];

const result = numbers.find(item => item === 30);
console.log(result); //30

//Ejemplo 2
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const find_id = products.find(item => item.id === '🍔');
console.log(find_id);
// { name: 'Burger', price: 23, id: '🍔' }


//Ejemplo 3: findIndex() para devolver la posición indice  
const find_index = products.findIndex(item => item.id === '🍔')
console.log(find_index, 'xd');