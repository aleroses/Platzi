type Sizes = "S" | "M" | "L" | "XL";
/* type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}; */

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: "1",
  title: "p1",
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
};

addProduct({
  id: "2",
  title: "p2",
  createdAt: new Date(),
  stock: 80,
});

console.log(products);
