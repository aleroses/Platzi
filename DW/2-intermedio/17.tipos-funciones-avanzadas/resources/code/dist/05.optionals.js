"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const createProduct = (id, isNew, stock) => {
    return {
        id,
        /* isNew: stock || 10,
        stock: stock || 10, */
        isNew: stock ?? 10, // Null or Undefined
        stock: stock ?? 10, // Null or Undefined
    };
};
exports.createProduct = createProduct;
// 0 - '' - false === false
const p1 = createProduct(1, true);
const p2 = createProduct(1, true);
const p3 = createProduct(1, false, 0);
console.log({ p1, p2, p3 });
