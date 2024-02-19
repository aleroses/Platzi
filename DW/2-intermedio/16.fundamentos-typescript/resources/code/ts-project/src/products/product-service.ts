import { Size, Data } from './product-model';

const products: Data[] = [];

const addProduct = (data: Data) => {
  products.push(data);
};

const calculateStock = (): number => {
  let total = 0;

  products.forEach((item) => {
    total += item.stock;
  });

  return total;
};

export { products, addProduct, calculateStock };
