const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
  };
};

// 0 - '' - false === false

const p1 = createProduct(1);
const p2 = createProduct(1, true);
const p3 = createProduct(1, false, 0);
console.log({ p1, p2, p3 });

export { createProduct };
