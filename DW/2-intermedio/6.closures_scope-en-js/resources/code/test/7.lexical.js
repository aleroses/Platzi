/* let number = 1;

function increase(i) {
  console.log(number);
  number += i;
}

increase(1);
increase(1);
increase(1);
increase(1);
increase(1); */

function principal(i) {
  let number = 1;

  function increase() {
    console.log(number);
    number += i;
  }

  return increase;
}

const closure = principal(1);
closure();
closure();
closure();
closure();
closure();
closure();
