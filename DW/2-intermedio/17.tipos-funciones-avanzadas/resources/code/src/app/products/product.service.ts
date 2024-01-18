import { Product } from "./product.model";

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
};

export { products, addProduct };
