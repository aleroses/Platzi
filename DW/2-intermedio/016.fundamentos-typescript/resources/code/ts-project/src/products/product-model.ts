type Size = 'S' | 'M' | 'L' | 'XL';
type Data = {
  title: string;
  stock: number;
  size?: Size;
};

export { Size, Data };
