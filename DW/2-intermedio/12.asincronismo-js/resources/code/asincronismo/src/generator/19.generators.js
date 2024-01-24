function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next());
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (const value of array) {
    yield value;
  }
}

const it = iterate(["Oscar", "Ale", "Ivo"]);
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Declaración de fetchData como la función del Generador
async function* fetchData(url) {
  const response = await fetch(url);
  yield await response.json();
}

fetchData(`${API}/products`)
  .next()
  .then(({ value, done }) => {
    //Imprime la lista de los Productos de la API
    // console.log(value);
    const id = value[0].id;
    const title = value[0].title;
    const category = value[0].category.name;
    console.log({
      id: id,
      title: title,
      category: category,
    });

    // En consola usa: Ctrl + Click sobre el enlace
    console.log(
      `Ctrl + Click: 🔥${API}/products/${id}`
    );
  })
  .catch(e => console.log(e)); */
