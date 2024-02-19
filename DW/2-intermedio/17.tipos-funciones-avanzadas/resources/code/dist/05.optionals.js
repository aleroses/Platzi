"use strict";
/* const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    // isNew: stock || 10,
    // stock: stock || 10,
    isNew: isNew ?? 10, // Null or Undefined
    stock: stock ?? 10, // Null or Undefined
  };
};

// 0 - '' - false === false

const p1 = createProduct(1, false, 0);
// const p2 = createProduct(1, true);
// const p3 = createProduct(1, false, 0);
console.log({ p1 });

export { createProduct }; */
const createProduct2 = (id, isNew = true, stock = 10) => ({
    id,
    isNew,
    stock,
});
const p1 = createProduct2(1, true, 12);
console.log(p1);
const p2 = createProduct2(1);
console.log(p2);
const p3 = createProduct2(1, false, 0);
console.log(p3);
