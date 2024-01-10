function recursive(number) {
  console.log(number);

  if (number < 5) {
    return recursive(number + 1);
  }
}

recursive(0);

/* Another way */

const numbers = [5, 4, 3, 2, 1, 0];

let number = 0;

for (let i = 0; i < numbers.length; i++) {
  number = numbers[i];
  console.log({ i, number });
}

/* Another way */

const data = [0, 1, 2, 3, 4, 5];

function new_recursive(new_data) {
  if (new_data.length != 0) {
    const first_number = new_data[0];
    console.log(first_number);

    new_data.shift();

    new_recursive(new_data);
  }
}

new_recursive(data);
new_recursive(["🙂", "🔥"]);
