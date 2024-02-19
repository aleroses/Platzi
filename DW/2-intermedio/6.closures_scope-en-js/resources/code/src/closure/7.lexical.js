/* const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myNumber);

  // internal function
  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction(); */

/* function contador(i) {
  let acumulador = i;

  function aumentar() {
    console.log("actual", acumulador);
    acumulador = acumulador + 1;
  }

  return aumentar;
}

const closure = contador(1);
closure(); // 1
closure(); // 2
closure(); // 3

const closure2 = contador(10);
closure2(); // 10
closure2(); // 11

closure(); // 4 */

/* function contador(i) {
  let acumulador = i;

  function aumentar() {
    console.log(acumulador);
    acumulador++;
  }

  return aumentar;
}

const closure = contador(1);
closure();
closure();
closure();
closure(); */

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = coins => {
    saveCoins += coins;
    console.log(saveCoins);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(6);
