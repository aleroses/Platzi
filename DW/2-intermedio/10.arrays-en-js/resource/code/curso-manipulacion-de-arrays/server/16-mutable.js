const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

/* console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10)); */

const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

/* console.log(products);
console.log(myProducts);
console.log("-".repeat(10)); */

// Update
const products_v2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const productIndex_v2 = products_v2.findIndex(item => item.id === update.id)
products_v2[productIndex_v2] = {
    ...products_v2[productIndex_v2],
    ...update.changes,
};
/* console.log(products_v2); */


// Reto 01: Eliminar un elemento sin borrarlo de la lista original 
const reto_one = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const products_one = reto_one.filter(p => p.id != "🍔");
console.log("Original: ", reto_one);
console.log("Copia: ", products_one);

// Reto 02: Modificar una nueva lista sin modificar el original. 
// Debemos copiar solo los elementos para que no tengan la misma dirección en memoria. 

const reto_two = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update_two = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const product_index_two = reto_two.findIndex(item => item.id === update.id);

const products_two = [...reto_two];
products_two[product_index_two] = {
    ...reto_two[product_index_two],
    ...update_two.changes,
};

console.log("Original", reto_two);
console.log("Update", products_two);