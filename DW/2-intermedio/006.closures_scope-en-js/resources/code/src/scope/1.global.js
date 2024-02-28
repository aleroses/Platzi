// Variables

// Declarando
var a;
// Declarar y asignar o inicializar
var b = "b";

// Redeclarar
var a = "aa";
// Asignar o inicializar
a = "aaaaa";
// Reasignar o Reinicializar
b = "bb";

// Global Scope
var fruit = "Apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  var country = "Colombia"; // Global
  console.log(country);
}

countries();
console.log(country);
