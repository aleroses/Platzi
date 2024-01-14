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

  
})();
