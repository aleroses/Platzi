(() => {
  type Id = string | number | boolean;
  type Size = 'S' | 'M' | 'L' | 'XL';

  // Literal types
  let userId: Id;
  let shirtSize: Size;
  shirtSize = 'M';

  function greeting(id: Id, size: Size) {
    if (typeof userId === 'string') {
      console.log(`string ${userId}`);
    }
  }

  greeting(11, 'L');
})();
