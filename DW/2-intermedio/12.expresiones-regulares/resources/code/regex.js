const text = "Hola, ¿cómo estás? Hola a todos.";
const regex = /Hola/g;
const coincidencias = text.match(regex);

console.log(coincidencias);