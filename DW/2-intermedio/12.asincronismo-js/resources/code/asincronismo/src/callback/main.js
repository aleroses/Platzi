// Ejemplo 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// Ejemplo 2
setTimeout(() => {
  console.log("Hi JS :3");
}, 2000);

// Ejemplo 3
function greeting(name) {
  console.log(`Hi ${name}`);
}

setTimeout(greeting, 2000, "Ale");

// Ejemplo 4
function x(name) {
  alert(`Name: ${name}`);
}

function y(callback) {
  let name = prompt("Enter your name: ");

  callback(name);
}

y(x);
