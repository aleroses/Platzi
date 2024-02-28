function fruits() {
  if (true) {
    var fruitOne = "Apple";
    let fruitTwo = "Kiwi";
    const fruitThree = "Banana";
  }

  console.log(fruitOne);
  console.log(fruitTwo);
  console.log(fruitThree);
}

fruits();

function example() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

example();
