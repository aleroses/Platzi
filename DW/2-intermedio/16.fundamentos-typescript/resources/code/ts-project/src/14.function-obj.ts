(() => {
  /* const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({ email: 'aleroses@mail.com', password: '12' }); */

  /* type Size = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const add_product = (data: { title: string; size?: Size }) => {
    products.push(data);
  };

  add_product({
    size: 'L',
    title: 'Pro one',
  });

  add_product({
    size: 'M',
    title: 'Pro two',
  });

  console.log(products); */

  const login = ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
  };

  login({ email: 'aleroses@mail.com', password: 'cracker' });
})();

/* type Data = {
  email: string;
  password: string;
};

const login = (data: Data) => {
  const { email, password } = data;
  console.log(email, password);
};

login({ email: 'test@test', password: '12131' }); */
