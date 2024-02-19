"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const createProduct = (id, isNew = true, stock = 10) => {
    return {
        id,
        isNew,
        stock,
    };
};
exports.createProduct = createProduct;
// 0 - '' - false === false
const p1 = createProduct(1);
const p2 = createProduct(1, true);
const p3 = createProduct(1, false, 0);
console.log({ p1, p2, p3 });
