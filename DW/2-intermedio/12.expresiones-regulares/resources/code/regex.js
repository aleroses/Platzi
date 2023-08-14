/* --------------- Ejemplo 01---------------- */
/* const text = "Hola, ¿cómo estás? Hola a todos.";
const regex = /Hola/g;
const coincidencias = text.match(regex); 

console.log(coincidencias); */

/* --------------- Ejemplo 02 ---------------- */
/* var texto = "Hola, ¿cómo estás? Hola a todos.";
var regex_one = /Hola/g;
var resultado;
var regex_two = /a/g;
var salida;

while (
  (resultado = regex_one.exec(texto)) !== null &&
  (salida = regex_two.exec(texto)) !== null
) {
  console.log(resultado);
  console.log(salida);
} */

/* --------------- Ejemplo 03 ---------------- */

/* const text = "Hi, my name is Ghost707";
const regex = /is ([A-Za-z0-9]+)/;
const result = regex.exec(text);
console.log(result[0]); */

/* --------------- Ejemplo 04 ---------------- */
const text = "Hi, this is the bug 1A2B3c4d";
const regex = /bug ([A-Za-z0-9]+)/;
const result = text.match(regex); 

console.log(result[0]);