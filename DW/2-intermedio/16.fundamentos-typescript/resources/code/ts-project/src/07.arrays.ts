(() => {
  // let mixed_one: (string | number | boolean | (string | number | boolean)[])[]
  let mixed_one = [1, 2, 3, 'x', true, [1, true, 'x']];
  mixed_one.push('y', 2, ['x', false, 5]);

  let mixed_two: (number | string | boolean)[] = ['hola', true];
  mixed_two.push(12);

  let mixed_three: (number | string | boolean | object)[] = ['hola', true];
  mixed_three.push(12);

  let numbers = [1, 2, 3];
  numbers.map((item) => item * 2);
  console.log();

})();
