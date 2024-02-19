(() => {
  /* type Size = 'S' | 'M' | 'L' | 'XL';

  function json(title: string, date: Date, stock: number, size: Size) {
    return {
      title,
      date,
      stock,
      size,
    };
  }

  const product_one = json('P1', new Date(), 12, 'XL');

  console.log(product_one);
  console.log(product_one.title);
  console.log(product_one.date);
  console.log(product_one.size); */

  type Size = 'S' | 'M' | 'L' | 'XL';

  const json = (title: string, date: Date, stock: number, size?: Size) => ({
    title,
    date,
    stock,
    size,
  });

  const product_one = json('P1', new Date(), 12);

  console.log(product_one);
  console.log(product_one.title);
  console.log(product_one.date);
  console.log(product_one.size);
})();
