(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Data = {
    title: string;
    stock: number;
    size?: Size;
  };

  const products: Data[] = [];

  const addProduct = (data: Data) => {
    products.push(data);
  };

  addProduct({ size: 'L', title: 'One', stock: 12 });
  addProduct({ size: 'S', title: 'Two', stock: 10 });
  console.log(products);
})();
