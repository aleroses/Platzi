import { Product } from "./product.model";

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
};

const updateProduct = (
  id: string,
  changes: Product
) => {
  // x
};

export { products, addProduct };
