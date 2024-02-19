"use strict";
const products = [];
products.push({
    id: "1",
    title: "p1",
    createdAt: new Date(),
    stock: 90,
});
const addProduct = (data) => {
    products.push(data);
};
addProduct({
    id: "2",
    title: "p2",
    createdAt: new Date(),
    stock: 80,
});
console.log(products);
