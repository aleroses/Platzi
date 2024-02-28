(() => {
  let number: number | undefined = undefined;
  let name: string | null = null;

  /* function hi(name: string | null) {
    let hello = 'Hi!!! ';

    if (name) {
      hello += `${name}`;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  hi(null);
  hi('Ale Roses'); */

  /* function hi(name: string | null) {
    let hello = 'Hi!!! ';

    hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }

  hi(null);
  hi('Ale Roses'); */

  function hiV2(name: string | null) {
    let hello = 'Hi!!! ';
    hello += name?.toLowerCase() ?? 'nobody';
  }
})();
