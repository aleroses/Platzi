const copia = SuperObject.deepCopy({
  nombre: "Objecto Copia",
  valor: 100,
});
console.log(copia);

console.log(SuperObject.isObject(20));
// false
console.log(SuperObject.isObject("JS"));
// false
console.log(
  SuperObject.isObject({ name: "Juanito" })
);
// true
console.log(SuperObject.isObject(["juan"]));
// true 👈👀

// Los Arrays son instanticas del superprototipo Array y a su vez esta superclase hereda
// del superprototipo Object. Por tanto, son también considaradas del tipo "object"
// y es por eso que nos sale "true"
