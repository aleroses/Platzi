const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    /* isNew: stock || 10,
    stock: stock || 10, */
    isNew: stock ?? 10, // Null or Undefined
    stock: stock ?? 10, // Null or Undefined
  };
};

// 0 - '' - false === false

const p1 = createProduct(1, true);
const p2 = createProduct(1, true);
const p3 = createProduct(1, false, 0);
console.log({ p1, p2, p3 });

export { createProduct };
