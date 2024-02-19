const data = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2125,
        stock: 20
    }
]

function add_new_attribute(array) {
    const data_taxes = array.map(element => {
        return {
            ...element,
            taxes: Math.floor(element.price * 0.19)
        }
    })
    console.log(data_taxes);
}

add_new_attribute(data)
/* const data_taxes = data.map(element => {
    return {
        ...element,
        taxex: element.price * 0.19,
    };
}) */

console.log(data);
/* console.log(data_taxes); */

/* Output:
[
    {
        name: "Product 1",
        price: 1000,
        stock: 10,
        taxes: 190
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20,
        taxes: 380
    }
] */


/* 
[
    { name: 'Product 1', price: 1000, stock: 10, taxes: 190 },
    { name: 'Product 2', price: 2125, stock: 20, taxes: 403 }
]
[
    { name: 'Product 1', price: 1000, stock: 10 },
    { name: 'Product 2', price: 2125, stock: 20 }
]
*/