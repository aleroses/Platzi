const object_one = {
  a: "one",
  b: "two",
  c: {
    d: "three",
    e: "four",
  },
};

const object_two = {};

// Se utiliza para iterar sobre las propiedades enumerables de un objeto.
for (prop in object_one) {
  //console.log(prop);
  object_two[prop] = object_one[prop];
}

console.log({ object_one, object_two });

object_two.a = "AAAAAAAAAAAA";
console.log({ object_one, object_two });

// 📌 Nota: Para acceder a objetos podemos hacerlo:
// algo.name
// algo[name]

// Para acceder a arrays si se puedo con el indice:
// algo[2]

const object_three = Object.assign({}, object_one);
const object_four = Object.create(object_one);

object_four.a = "XXXXX"
