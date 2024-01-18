"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.products = void 0;
const products = [];
exports.products = products;
const addProduct = (data) => {
    products.push(data);
};
exports.addProduct = addProduct;
