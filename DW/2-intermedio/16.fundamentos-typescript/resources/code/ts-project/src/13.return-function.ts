(() => {
  const calculate = (prices: number[]): string => {
    /* return prices.reduce((a, b) => {
      console.log(a + b);
      return a + b;
    }, 0); */

    let total = 0;

    prices.forEach((item) => {
      total += item;
    });

    return total.toString();
  };

  const total = (prices: number[]): void => {
    const rta = calculate(prices);
    console.log(`The total is: ${rta}`);
  };

  total([1, 2, 3]);
})();
