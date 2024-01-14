import { products, addProduct, calculateStock } from './product-service';

addProduct({ size: 'L', title: 'One', stock: 12 });
addProduct({ size: 'S', title: 'Two', stock: 10 });

console.log(products);
const total = calculateStock();
console.log(total);
