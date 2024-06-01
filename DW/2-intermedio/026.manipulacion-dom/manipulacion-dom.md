# Curso de Manipulación del DOM

## 1. Y entonces nació internet...

Para estar actualizado y dominar cualquier frameworks debes dominar los fundamentos de JavaScript.

**Objetivo del curso:**

Manipular del DOM con JavaScript puro.

**Requerimientos:**

- Conocer HTML
- Conocer CSS
- Conocer JS
- Conocer programación y algoritmos
- Tener instalado Node.js

https://github.com/jonalvarezz/platzi-dom

## 2. ¿Qué es el DOM?

Es un concepto usado por los navegadores para renderizar y trabajar sobre una página web.

**Critical Rendering Path**

- Es el proceso que se encarga de convertir en pixeles el HTML, CSS y JS.
- Se puede dividir en 5 partes.
- A lo largo del proceso el navegador crea dos árboles: el DOM y el CSSOM
    - DOM: corresponde a la estructura de dato tipo árbol para el HTML
    - CSSOM: corresponde al árbol para CSS

DOM

- Es una representación del HTML
- Estructura en forma de árbol de nodos.
- Es un modelo que puede ser modificado

## 3. Web APIs modernas

Una WEB API nos permite conectar el DOM con JavaScript para que nosotros podamos (leerlo y modificarlo), actualmente existen más de 70 web APIS y el DOM solo es una de ellas.

> DOM + JS = Web API

**Existen para diferentes propósitos como:**

- Animaciones
- Drag & Drog
- Manejar de Archivos
- Trasmisión de video con web RTC
- Manejo de videojuegos como ser con OpenGL
- Incluso para manejo de pagos, sin necesidad de contar con librerías o servicios externos.

Al momento de **usar APIS** debemos tener **en cuenta:** 

**¿Cómo lo uso? → developer mozilla org**

Aquí **Podremos** encontrar bastante **información** sobre **Frontend** cuando la necesitamos

**¿Puedo usarlo? →** caniuse

También tenemos que tener en cuenta que las **API** que vayamos a usar estén **soportadas** por los **navegadores**, entonces **caniuse** podrá ayudarnos a saber sobre la compatibilidad que hay.

**Chrome** tiene **compatibilidad** con la mayoría de APIS y también de las más recientes.

### **APIs de terceros**

Twitter, por ejemplo, nos proporciona una manera sencilla de mostrar tweets de algún usuario a través de su API. Tan solo tenemos que hacer una petición GET al siguiente Endpoint:

GET [https://api.twitter.com/2/users/:id/tweets](https://api.twitter.com/2/users/:id/tweets)

### **APIs de servicios**

Si quisiéramos mostrar mapas de Google Maps, también podríamos hacerlo a través de su API.

Por ejemplo, para mostrar la ubicación de Sydney, New South Wales, Australia, lo haríamos de la siguiente manera:

 ```js
function initMap() {
  map = new google.maps.Map(
    document.getElementById("map"),
    { center: { lat: -34.397, lng: 150.644 }, zoom: 8 }
  );
}
``` 

- [MDN Web Docs](https://developer.mozilla.org/es/)
- [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)

## 4. Leer nodos

Básicamente, tenemos 4 formas de leer nodos con JS:

- `document.getElementById('id')` => nos permite obtener un elemento a través de su id.
- `parent.getElementsByClassName('class')` => obtiene un array (HTMLCollection) con todos los elementos hijos que tengan esa clase, ojo `getElementByClassName` no existe, es decir, no podremos obtener solo 1 elemento con esa clase.
- `parent.getElementsByTagName('div')` => con este método obtenemos una lista (HTMLCollection) con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar get**Elements** .

Sin embargo, existen 2 selectores más poderosos 👀:

- `parent.querySelector("")` => nos permite buscar de 3 formas, con ID, clase o tagName. A diferencia de los 2 anteriores, este nos devuelve 1 solo elemento, el primero que contenga el valor que se le pasó. 
	- Id => ('#id')
	- class => ('.class')
	- tagName ('div').
- `parent.querySelectorAll("")` => este método retorna un NodeList (parecido a un array) con todos los elementos que tengan ese selector (id, class o tagName).

Casi siempre el elemento **"padre o parent"** es **document**, ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores. 

Ejemplo:

 ```js
const button = document.querySelector('#button)
```

## 5. NodeLists vs Array

La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.

```js
// De esta forma pasamos todos los elementos en el NodeList a un arreglo. 
const nodeList = document.querySelectorAll("selector css"); const elementList = [...nodeList]; 👈👀

// También podemos usar esta forma:👇
const nodeListArray = Array.from(nodeList)
```

📌 Recomendación importante cada vez que tengamos un NodeList pasarlo a un Array, ya que los motores de JavaScript como el motor V8 de Google están más optimizados para Arrays que para NodeList.

## 6. Crear y agregar

Al decir "crear nodos" nos referimos a crear elementos dentro de nuestro DOM. Para ello podemos hacer uso de:

- `createElement`: Para crear una etiqueta HTML:

```js
// Solo se ha creado, aún no se agrega al DOM 
const etiquetaH1 = document.createElement("h1")
```

- `createTextNode`: Para crear un texto:

```js
// Solo se ha creado, aún no se agrega al DOM 
const texto = document.createTextNode("¡Hola, Mundo!")
```

Como solo creamos, necesitamos formas de agregarlos al DOM, para ello, JavaScript nos provee de estas formas:

- `parentElement.appendChild()`: Agrega un hijo **al final** algún elemento.

```js
// Obtengo el elemento padre 
const parentElement = document.querySelector("selector") 
// Creo el nodo a insertar 
const h3 = document.createElement("h3") 
// Creo el texto del nodo 
const texto = document.createTextNode("Hola!") 
// Inserto el texto al nodo 
h3.appendChild(texto) 
// Inserto el nodo al padre 
parentElement.appendChild(h3)
```

- `parentElement.append()`: Es la evolución de `appendChild`, podemos agregar más de un nodo, puedes agregar texto y... no es soportado por Internet Explorer ¬¬! . 

Un polyfill es una adaptación del código para dar soporte a navegadores que no lo soportan, aquí está el polyfill de append: 

[Mozilla polyfill](https://developer.mozilla.org/es/docs/Web/API/ParentNode/append#polyfill)

```js
// Obtengo el elemento padre 
const parentElement = document.querySelector("selector") 
// Agrego al elemento padre 
parentElement.append("agrego un texto", document.createElement("div"))
```

- `parentElement.insertBefore()`: Inserta nodos antes del elemento que le pasemos como referencia, este nodo de referencia **tiene que ser un hijo DIRECTO del padre**

```js
// Obtengo el elemento padre 
const parentElement = document.querySelector("selector");
// Creo un elemento 
const titulo = document.createElement("h1");
// Obtengo la referencia del elemento del que quiero insertar antes: 
const referencia = document.querySelector("selector") 
// ¡Lo insertamos! 
parentElement.insertBefore(titulo, referencia)
```

- `parentElement.insertAdjacentElement()`: Inserta nodos según las opciones que le pasemos:
    1. **beforebegin:** Lo inserta antes del nodo
    2. **afterbegin:** Lo inserta después del nodo
    3. **beforeend:** Lo inserta antes de donde finaliza el nodo
    4. **afterend:** Lo inserta después de donde finaliza el nodo

```js
// Obtengo el elemento padre
const parentElement = document.querySelector("selector") 
// Creo un elemento 
const nodo = document.createElement("span");
parentElement.insertAdjacentElement("beforebegin", nodo)
```

## 7. Otras formas de agregar

Existen otras formas de agregar nodos:

- `node.outerHTML`: Sirve para leer HTML

```js
$0.outerHTML
<h2>Checkout form</2>
```

- `node.innerHTML:` Sirve para escribir HTML

```js
$0.innerHTML = "New text";
"New text"
```

PERO, tienen problemas de seguridad 👀☝️ 

📌 **hack:** Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes `$0`, este te devolverá el elemento tal como si lo hubieses seleccionado con `document.querySelector()`. 

Aquí les dejo el playground que usó el profesor para hacer las pruebas: 

[Codepen.io](https://codepen.io/jonalvarezz/pen/OJXeNab?editors=0110). 

El problema con estas formas de inserciones es que permiten la inserción XSS, es decir, código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, imagina que cada que un usuario llegue a tu página le salga un alert… ¡Sería catastrófico! Siempre sanitiza (remover caracteres especiales) los inputs de tus usuarios.

## 8. Atributos y propiedades

Un **atributo** es el estado inicial en nuestro HTML, es HTML solo podemos escribir atributos porque es el estado inicial con el que se renderizan.

```js
// En consola
$0.className
$0.type
$0.name
$0.value
```

Una **propiedad** es la variable que podemos cambiar a lo largo de la ejecución del programa mediante JavaScript, es decir, podemos acceder a dichos atributos y cambiarlo, haciendo que sean propiedades 

[Más de información sobre ello](https://lenguajejs.com/webcomponents/lit-element/propiedades-y-atributos/#:~:text=Una%20propiedad%20es%20una%20variable,siempre%20contendr%C3%A1%20valores%20de%20tipo%20.&text=Sin%20embargo%2C%20dicho%20componente%20puede,se%20puede%20acceder%20mediante%20this.). 

Lo genial de JavaScript es que podemos cambiarlas de forma dinámica. Recordemos que JavaScript son en su mayoría objetos, por lo que los nodos HTML dentro de JavaScript son representados como objetos. Teniendo eso en cuenta, podemos acceder a cualquier atributo de dichos nodos desde HTML y cambiar sis propiedades, por ejemplo:

```js
// Al seleccionar el nodo HTML, JavaScript lo convierte en un objeto! 
const input = document.querySelector("input") 

// Y podemos modificarlo como cualquier otro objeto de JavaScript: 
input.placeholder = "Escribe algo" 
input.value = 2 
input.type = "number"
```

**Diferencia entre atributos y propiedades** 

1. Los atributos nacen cuando creamos un elemento HTML en el código (estado inicial).
2. Este elemento será representado en el DOM como un nodo y por ende su representación será un objeto. Como sabemos, todo objeto puede tener propiedades y los nodos efectivamente las tendrán (y bastantes!).
3. Una de esas propiedades se llama "attributes" y contiene los atributos que habíamos indicado en el HTML.
4. El objeto aparte de la propiedad attributes tendrá más propiedades, algunas de ellas de nombre idéntico o similar a los atributos (id es exactamente igual, pero por ejemplo el atributo "class" se encuentra como propiedad del objeto bajo el nombre "className").
5. Aparte de la cercanía entre los nombres, algunos valores de estos attributes serán iguales a sus propiedades recíprocas (por ejemplo, nodo_x.id === nodo_x.attributes.id), pero no siempre es así (por ejemplo, un input.attribute.value !== input.value, el primero es el valor con el que inicializamos el input, pero el segundo cambiará según el usuario interactúe con él).

## 9. Eliminar nodos

JavaScript nos ofrece 3 formas:

- `parentElement.removeChild()`: Elimina un elemento hijo a partir del elemento padre:

```js
// Selecciono el elemento que quiero eliminar 
const nodoAEliminar = document.querySelector("selector")

// Selecciono a su padre directo 👈👀👇
const parentElement = nodoAEliminar.parentElement 

// Lo elimino
parentElement.removeChild(nodoAEliminar)
```

- `docuement.remove()`: Es la evolución de `removeChild` Y… tampoco es soportado por Internet Explorer. No importa, aquí está el polyfill.

[Mozilla polyfill](https://developer.mozilla.org/es/docs/Web/API/ChildNode/remove#polyfill)

```js
// Selecciono el elemento que quiero eliminar
const nodoAEliminar = document.querySelector("selector") 
// Lo elimino 
nodoAEliminar.remove()
```

- `document.replaceChild()`: Reemplaza un nodo (en pocas palabras lo elimina y mete otro)

```js
// Selecciono un padre 
const padre = document.querySelector("selector") 
// Selecciono el elemento al que voy a reemplazar 
const toReplace = document.querySelector("selector") 
// Creo el nodo por el cual lo voy a reemplazar 
const node = document.createElement("h1") 
// Le pongo un texto 
node.textContent = "Un texto cualquiera" 
// Lo reemplazo! 
parent.replaceChild(node, toReplace)
```

También hay otro método de reemplazar nodos que es `node.replaceWith`.

- `node.replaceWith`: También nos sirve para reemplazar un nodo, pero de una manera más cómoda, ya que no necesitamos pasar dos argumentos, sino solo uno -> el nuevo nodo, lo que hace que sea incluso más fácil de leer:

```js
const nodoACambiar = document.querySelector('h2') 
const nodoNuevo = document.createElement('h1') 

nodoNuevo.textContent = "Nuevo Nodo"
nodoACambiar.replaceWith(nodoNuevo) 

// Antiguo DOM: 
div |_h2 'Old text' 
// Nuevo DOM: 
div |_h1 'Nuevo Nodo'
```

Otro caso con `replace()`

```js
let cadenaOriginal = "Hola, mundo!";
let nuevaCadena = cadenaOriginal.replace("mundo", "amigo");
console.log(nuevaCadena);
```

## 10. Operaciones en lote

Hacer operaciones en el DOM es algo muy costoso. Entre menos operaciones hagamos en el DOM _especialmente escribir y eliminar_ , más rápida será nuestra operación.

Ejemplo, agregar 100 inputs al final de body.

Forma NO óptima: (modificamos el DOM 100 veces)

```js
for (let i = 0; i < 100; i++) {
  const node = document.createElement("input");
  document.body.appendChild(node);
}
```

Mejor forma: (modificamos el DOM 1 vez)

```js
const nodos = [];

for (let i = 0; i < 100; i++) {
  const node = document.createElement("input");
  nodos.push(node);
}

document.body.append(...nodos);
```

### ¿Qué es el Spread Operator?

El spread operator trabaja con arreglos y objetos, cuando lo pasamos en la llamada a una función, lo que hará es deconstruir ese arreglo y lo pasará como parámetros individuales para la función... aquí un ejemplo para que me entiendas:

```js
function funcionQueRecibeTresParametros(
  param1,
  param2,
  param3
) {
  // code...
}

// La forma normal de llamarla sería:
funcionQueRecibeTresParametros(1, 2, 3);

// Pero, ¿qué pasa si tengo un arreglo que contiene esos 3 parámetros?
const arregloDeParametros = [1, 2, 3];

// Bueno, pues el spread operator puede deconstruir ese arreglo y poner cada elemento en donde irían mis parámetros :D!
funcionQueRecibeTresParametros(...arregloDeParametros);

// Eso sería equivalente a esto:
funcionQueRecibeTresParametros(
  arregloDeParametros[0],
  arregloDeParametros[1],
  arregloDeParametros[2]
);
```

Esto es muy útil cuando tenemos demasiados valores, recuerda, mientras menos modifiques el DOM, más eficiente será tu programa, y recordemos que tenemos a `append()` que nos permite insertar múltiples elementos en el DOM en una sola llamada. 

**Dato curioso:** . En algunos frameworks de JavaScript como Vue, existe una cosa llamada el **Virtual DOM**, no es más que un objeto JavaScript que simula al DOM real, al menos en Vue, esto tiene un proxy que está observando por cambios en ese Virtual DOM para reaccionar y renderizar solo una pequeña parte en el DOM (en lugar de reescribirlo completamente)

[Documentación de operador de propagación](https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/Reference/Operators/Spread_syntax)

## 11. Presentación del proyecto

Avocados (paltas), la tiendita.

## 12. Descargando información y creando nodos

Usaremos un template generator llamado Snowpack y Tailwind:

```bash
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind
```

La consola muestra los comandos que podemos usar:

```bash
Quickstart:

  cd my-dom #👈👀 Nombre que yo le dí
  npm start

All Commands:

  npm install      Install your dependencies. (We already ran this one for you!)
  npm start        Start your development server.
  npm run build    Build your website for production.
  npm test         Run your tests.
```

Ahora veamos el proyecto en el navegador:

```bash
cd my-app
npm start
```

Puedes cambiar `my-app` por el nombre que desees.

La estructura del proyecto se ve así:

```bash
.
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── README.md
├── snowpack.config.js
├── src
│   ├── index.css
│   └── index.js
└── yarn.lock
```

`src > index.js`

```js
const url = "https://platzi-avo.vercel.app/api/avo";

// web api
// Conectarnos al server
window
  .fetch(url)
  .then((response) => response.json())
  .then(({ data }) => {
    console.log(data);

    data.forEach((item) => {
      console.log(item.name);

      const items = [];
      const container = document.createElement("div");

      // Crear imagen, titulo y precio
      const imagen = document.createElement("img");
      const title = document.createElement("h2");
      const price = document.createElement("div");

      container.append(imagen, title, price);
      // document.body.append(container);

      items.push(container);
      document.body.append(...items);
    });
  });
```

Usando `async` y `await` queda así:

```js
const url = "https://platzi-avo.vercel.app/api/avo";

const avocados = async () => {
  const response = await fetch(url);
  const { data } = await response.json();
  console.log(data);

  data.map((item) => {
    const container = document.createElement("div");
    const imagen = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("div");

    container.append(imagen, title, price);
    document.body.append(container);
  });
};

avocados();
```

- [Data: Json de Paltas](https://platzi-avo.vercel.app/api/avo)
- [Template info](https://github.com/jonalvarezz/snowpack-template-tailwind)

## 13. Enriqueciendo la información

Adapta el `index.html` según tus gustos y necesidades. Solo añade lo siguiente dentro del `body`:

```html
<div id="app"></div>
```

Aquí añadiremos lo que creamos con JavaScript.

```js
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("div#app");

// web api
// Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(({ data }) => {
    console.log(data);

    data.forEach((item) => {
      console.log(item.name);

      const items = [];
      const container = document.createElement("div");

      // Crear imagen, titulo y precio
      const imagen = document.createElement("img");
      const title = document.createElement("h2");
      const price = document.createElement("div");

      imagen.src = `${baseUrl + item.image}`;
      title.textContent = item.name;
      price.textContent = item.price;

      container.append(imagen, title, price);

      items.push(container);
      appNode.append(...items); 👈👀
    });
  });
```

## 14. Usando la API de internacionalización del browser

```js
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("div#app");

// Inl: date, coin
const formatPrice = (price) => { 👈👀👇
  const newPrice = new window.Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};

// web api
// Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(({ data }) => {
    console.log(data);

    data.forEach((item) => {
      console.log(item.name);

      const items = [];
      const container = document.createElement("div");

      // Create image, title and price
      const imagen = document.createElement("img");
      const title = document.createElement("h2");
      const price = document.createElement("div");

      imagen.src = `${baseUrl + item.image}`;
      title.textContent = item.name;
      price.textContent = formatPrice(item.price);

      // Styles 👈👀👇
      title.style = "font-size: 2rem";
      title.style.fontWeight = "800";
      title.className = "new-class text-2xl text-red-600";

      container.append(imagen, title, price);

      items.push(container);
      appNode.append(...items);
    });
  });
```

Como este curso no es de CSS y menos de Tailwind, los estilos quedan a tu propio criterio.

Algunos estilos sugeridos:

```css
#app{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 25px;
    margin-top: 25px;
}

.palta-container{
    position: relative;
    display: flex;
    width: 350px;
    height: 120px;
    flex-wrap: wrap;
}

.palta-container:hover{
    background-color: rgb(230, 240, 228);
    border-radius: 15px;
}

.img{
    width: 75px;
    height: 75px;
    border-radius: 75px;
    margin: auto 0;
    margin-top: 20px;
    margin-left: 20px;
}

.prize{
    position: absolute;
    top: 35px;
    left: 104px;
    color: gray;
}

.title{
    margin-top: 17px;
    margin-left: 10px;
    font-weight: 500;
}
```

[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

## 15. Comparte el resultado

Para publicar en GitHub, modifique el archivo de configuración de `snowkpack.config` :

```js
/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: { public: "/", src: "/_dist_" },
  buildOptions: {
    baseUrl: "https:// robmvsk.github.io/workshop-1-fetch",
  },
};
```


## 16. Reaccionar a lo que sucede en el DOM

La función `addEventListener()` nos permite añadir eventos a nuestros elementos, la podemos usar de la siguiente manera:

```js
miElemento.addEventListener("evento", manejador)
```

En este caso, el manejador debe ser una función callback que se ejecutará cuando el evento sea disparado. Es muy común verlo como una función anónima:

```js
button.addEventListener("click", () => {
  alert("Me has clickado 😄");
});
```

Sin embargo, la mejor práctica es crear funciones por separado, así siempre tendremos una referencia a dicha función (con una función anónima no tenemos nada que la identifique, de ahí su nombre)

```js
const miFuncionManejadora = () => {
  alert("Me has clickado 😄");
};

button.addEventListener("click", miFuncionManejadora);
// Presta atención como la estamos mandando sin paréntesis, porque de esa forma solo le pasamos la referencia de la función, si le pusieramos paréntesis entonces la estaríamos ejecutando
```

Y esto tiene la ventaja de que podemos remover los eventos cuando queramos, ya que tenemos la referencia de la función manejadora.

```js
const miFuncionManejadora = () => {
  alert("Me has clickado 😄");
};

// Agrego el evento
button.addEventListener("click", miFuncionManejadora);

// Quito el evento
button.removeEventListener("click", miFuncionManejadora);
```

También podemos definir funciones de esta otra manera 👀

```js
button.onClick = () => {
  alert("Me has clickado 😄");
};
```

Esta sintaxis es `onEvento`, pero no es muy común. Como dato adicional, esta es otra forma de añadir eventos desde HTML:

**HTML**

```html
<button onclick="miFuncionManejadora">Clicame</button>
```

**JavaScript**

```js
const miFuncionManejadora = () => {
  alert("Me has clickado 😄");
};
```

De esta forma, el botón, mediante un atributo estaría llamando a la función.

### Código de la clase

```js
// Seleccionar nodo
const input = document.querySelector("#firstName");

// Acción al capturar evento
const action = () => {
  console.log("Ha sucedido un click");
};

// Detectar evento click
input.addEventListener("click", action);

// Detectar cambio en un input
input.addEventListener("input", (event) => {
  // event: argumento por defecto que nos da información de lso eventos
  console.log(`Hey!: ${event}`);
});

// Imprimir el taget al hacer click
input.addEventListener("click", (event) => {
  console.log(event.target);
});

// Otra forma de imprimir el taget al hacer click
input.addEventListener("click", function () {
  console.log(this.target);
  // El this dentro de este scope captura las informaciones de event
  // sin embargo el this no es compatible con arrow functions
  // por eso en arrow function se usa el argumento (event)
});

// Seleccionar nodo
const email = document.querySelector("#email");

const action1 = () => console.log("Acción 1");
const action2 = () => console.log("Acción 2");

// Detectar evento click
email.addEventListener("click", action1);
email.addEventListener("click", action2);

// Eliminar evento, debemos siempre colocar la acción en una función aparte para que en un futuro podamos eliminarla
email.removeEventListener("click", action1);
```

[Lista con todos los eventos disponibles en JavaScript y a qué API pertenece](https://developer.mozilla.org/es/docs/Web/Events) :D . 

## 17. Event propagation

Básicamente, la propagación de eventos se produce cuando tienes puestos algunos eventos en contenedores que son hijos de otro, por ejemplo:

```html
<div id="div1">
  <div id="div2">
    <div id="div3">Hola</div>
  </div>
</div>
```

Si le ponemos un event listener a los 3 divs, y clicas dentro del `div3`, también estás clicando el `div2` (porque el `div3` está dentro del `div2`), y a su vez estás clicando el `div1` (porque estos 2 divs están dentro de `div1`), por tanto, el evento se va a propagar hacia los 3 divs. 

La forma de detenerlo es usando el método `stopPropagation()` que viene dentro del argumento event que cualquier evento nos provee, por tanto, yo puedo decirle al `div3`: "Oiga, yo solo lo quiero clicar a usted, no a los demás, sí, ya se que usted está dentro de los demás, pero yo solo lo quiero a usted", de tal forma que al event listener del programation le puedo poner:

```js
div3.addEventListener("click", (event) => {
  event.stopPropagation();
});
```

De esta forma, el evento de `div2` y `div1` no serán ejecutados.

Dato curioso, cuando defines un elemento con un ID en HTML, en JavaScript se crea automáticamente una variable con ese ID que creaste, por eso es completamente posible que yo pueda usar la variable `div3` sin tener que seleccionar el elemento.

### Código de la clase

```js
// imprimiremos el evento click para ver toda su informacion 
const accion = (event) => console.log(event) $0.addEventListener('click', accion) 

/* Bucamos la propiedad llamada target que es la que nos dice cual elemento  se esta ejecutando, target representa un nodo cuando utilizamos createElement es igual a lo que esta dentro del target  Dentro del target hay una propiedad que se llama nodeName que contiene el nombre del nodo */ 
const accion = (event) => {
  console.log(`Hola desde ${event.currentTarget.nodeName}`)
}

//obtenemos el elemento al cual le agregaremos el evento 
const avocado = document.querySelector('id');

//obtenemos el padre del elemento 
const card = document.querySelector('id'); 

//obtenos el body 
const body = document.querySelector('body') 

//agregamos el mismo evento a cada nodo
avocado.addEventListener('click', accion); card.addEventListener('click', accion); body.addEventListener('click', accion) 

/* cuando damos click en el elemento hijo vemos que aunque el evento sucedio en el primer elemento este se propago hasta el elemento padre que seria hasta el elemento mas externo que tambien esta escuchando el mismo evento que en este caso es el body Hola desde + H2    Hola desde + DIV    Hola desde + BODY    Y si unicamente damos click en un elemento padre del que anteriormente   le dimos click vemos como el evento propaga desde ahi hasta   el elemento mas externo en este caso el body    Hola desde + DIV   Hola desde + BODY     Entonces sabremos que desde el elemento que inicia hacia arriba    el evento se propagara */ 

/* La propagacion de eventos se puede detener usando la misma web API     La forma de deterlo es usando el método stopPropagation() que viene    dentro del argumento event que cualquier evento nos provee */   
const accion = (event) =>{
  console.log(`Hola desde ${event.currentTarget.nodeName}`)
}  

//obtenemos los elementos y le aplicamos los eventos
const body = document.querySelector('body');
body.addEventListener('click', accion);

const h3 = document.querySelector('h3');  
h3.addEventListener('click', (evento) =>{  
  //utilizamos el metodo stopPropagation y con esto pararemos la propagacion  
	
  // es como decirle al elemento que solo queremos ejecutarlo a el y a los demas no     
  evento.stopPropagation()     
  console.log(`Hola desde: + ${evento.currentTarget.nodeName}`)  
})
```

### ¿Por qué no usar el stopPropagation?

Al usar el `stopPropagation` estamos impidiendo que elementos padre conozcan determinado evento de algún hijo, ejemplo: Al hacer clic en un botón con `stopPropagation`. El body nunca sabrá qué hice clic en él.

Esto es una fuente de "sideEffects" que son el tipo de bugs más difíciles de notar. ¿Qué pasa si otro desarrollador desea que el body escuche el clic del botón? Programará confiado en que hay propagación. Como en este caso se detuvo, la única solución es eliminar el `stopPropagation` rompiendo el código que nosotros hicimos. 

En prácticamente todos los escenarios se puede sustituir el `stopPropagation` por una solución que no altere el comportamiento global de los eventos, evitando así side effects.

Más info: [https://css-tricks.com/dangers-stopping-event-propagation/](https://css-tricks.com/dangers-stopping-event-propagation/)

[Fuente](https://dmitripavlutin.com/javascript-event-delegation/)

## 18. Event delegation

La delegación de eventos es básicamente un contenedor padre que le pasa el evento a todos sus hijos (en realidad no se los está pasando, sino que el contenedor padre sigue estando presente en todos los hijos, es por eso que cuando clicamos a un hijo el evento es disparado).

Entendiendo esto, cuando obtenemos el target podemos saber cuál elemento hijo del padre fue clicado, por tanto, con una simple condicional puede ver si el elemento clicado es el que yo quiero.

**Ojo:** Eso no significa que el evento se quite de los demás elementos hijos, si tú clicas cualquier otro elemento hijo el evento se va a disparar sí o sí, pero lo que sucede es que la condición del target no se cumple, por eso no hace nada.

Y sabiendo esto, puedes crear funciones que escuchen eventos dinámicamente, una característica de los eventos es que solo se le aplican a los elementos que están desde el inicio, pero si tú agregas otro nodo desde JavaScript **los eventos no se van a escuchar para ese nuevo nodo**. 

Entonces, una técnica que se suele usar es escuchar al padre (o en ocasiones a todo el document) y cada vez que el evento ocurra buscar a todos sus hijos que coincidan con el selector al que queremos aplicarle el evento, de esta forma no importa si los nodos se añaden posteriormente desde JavaScript, el evento será escuchado, pues JavaScript directamente irá a buscar todos los nodos hijos que cumplan con dicho selector, por ejemplo: 

**HTML**

```html
<div id="divPadre">
  <div class="div">Hola</div>
</div>
```

**JavaScript**

```js
document
  .querySelector(".div")
  .addEventListener("click", () => {
    // Hace algo
  });
```

En este caso, si al div padre yo le añadiera desde JavaScript otro elemento con la clase div, el evento **NO** funcionaría:

```js
const nuevoDiv = document.createElement("div");
nuevoDiv.className = "div";
nuevoDiv.textContent = "Nuevo div";
divPadre.append(nuevoDiv);
```

Sin embargo, al usar la delegación de eventos, puedo escuchar al padre y buscar al hijo que me interesa:

```js
nuevoDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("div")) {
    // Código
  }
});
```

De esta forma, no importa cuantos elementos nuevos agregues al padre desde JavaScript, esto siempre va a funcionar. 

Ahora, si quieres hacer algo más pro, puedes crear una función en el cual tú le pases un selector en específico para usar dentro del div, así solo tienes que llamar a esa función y pasarle el selector de tal manera que se quede escuchando por cualquier elemento nuevo que sea agregado, algo así:

```js
eventAll("click", parentElement, elementToListen, () => {
  // Has algo
});
```

Una función de ese tipo sería muy útil, porque así puedo mantener escuchando cada elemento, no importa que se agregue después con JavaScript.

[Librería para escuchar eventos](https://github.com/RetaxMaster/Funciones-para-JavaScript/blob/master/js/events.js) 👈👀 Código

Este código está desactualizado porque tiene un pequeño bug y hay ciertos elementos con los que no funciona, pero para eso podemos usar un `MutationObserver` que mire cuando el padre haya sido modificado (se le haya agregado un hijo nuevo) y a ese hijo aplicarle el evento.

📌 Como dato, la diferencia entre `target` y `currentTarget` radica en que el primero hacer referencia al disparador del evento, donde debemos de interactuar para que este se ejecute. Por otro lado, el `currentTarget` es el nodo padre en el que está el disparador.

### Código de la clase

Utilizaremos nuestro proyecto anterior para que cuando le demos clic a cada uno de los elementos `H2` me salga una alerta distinta.

```js
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("div#app");

appNode.addEventListener("click", (event) => {
  if (event.target.nodeName === "H2") { 👈👀
    window.alert("lolcat");
  }
});

// Inl: date, coin

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};

// web api
// Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(({ data }) => {
    console.log(data);

    data.forEach((item) => {
      console.log(item.name);

      const items = [];
      const container = document.createElement("div");

      // Crear imagen, titulo y precio
      const imagen = document.createElement("img");
      const title = document.createElement("h2");
      const price = document.createElement("div");

      imagen.src = `${baseUrl + item.image}`;
      title.textContent = item.name;
      price.textContent = formatPrice(item.price);

      title.style = "font-size: 2rem";
      title.style.fontWeight = "800";
      title.className = "new-class text-2xl text-red-600";

      container.append(imagen, title, price);
      // document.body.append(container);

      items.push(container);
      // document.body.append(...items);
      appNode.append(...items);
    });
  });
```

## 19. Presentación del proyecto

Lazy loading

Es importante mencionar que hoy en día el navegador ya tiene implementada una api nativa en HTML de Lazy Loading: 

[Lazy_loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

Sin embargo, no olvides verificar la compatibilidad con todos los navegadores:

[caniuse](https://www.caniuse.com/?search=lazy%20loading)

El motivo de usar Lazy Loading es la optimización de la página, es decir, es mejor que de inicio un usuario cargue pocos recursos de la página, de esta forma se acelera la carga de la misma, porque no tiene que cargar 100 imágenes de golpe, sino que de poquito a poquito va cargando las imágenes.

[Workshop Lazy loading](https://github.com/jonalvarezz/platzi-dom/tree/main/workshop-lazy-loading)

## 20. Nuestro propio plugin Lazy Loading

```bash
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```

En primera instancia añadimos todo con HTML:

```html
<div id="images">
  <div class="p-4">
    <img
      class="mx-auto"
      width="320"
      src="https://randomfox.ca/images/2.jpg"
      alt=""
    />
  </div>
</div>
```

Recuerda eliminar y añadir la estructura que mejor te parezca. Para este caso solo añade varias veces el `div` mostrado arriba para tener varias images en la web.

- [Random Fox](https://randomfox.ca/)
- [Random Fox Images](https://randomfox.ca/images/2.jpg)
- [Template](https://github.com/jonalvarezz/snowpack-template-tailwind)

## 21. Creando las imágenes con JavaScript

```html
<button class="p-3">Add Images</button>

<div id="images">      
</div>
```

Añadimos imágenes de manera aleatoria con un rango de 1 al 122.

```js
const addButton = document.querySelector("button");
const mountNode = document.querySelector("#images");

const minimum = 1;
const maximum = 122;

const random = () =>
  Math.floor(Math.random() * (maximum - minimum));

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.append(imagen);
  return container;
};

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
};

addButton.addEventListener("click", addImage);
```

Otra forma de obtener números aleatorios:

Nuevamente, usaremos la función `Math.random()` para generar un número aleatorio entre 0 y 1. Luego, puedes multiplicar ese número por 122 y redondearlo hacia abajo utilizando `Math.floor()` para obtener un número aleatorio entre 0 y 121. Finalmente, puedes sumar 1 al resultado para obtener un número aleatorio entre 1 y 122. Aquí tienes un ejemplo de cómo hacerlo:

```js
var numeroAleatorio = Math.floor(Math.random() * 122) + 1;
console.log(numeroAleatorio);
```

En este ejemplo, `Math.random()` genera un número aleatorio entre 0 (incluido) y 1 (excluido). Luego, al multiplicarlo por 122, obtienes un número entre 0 (incluido) y 122 (excluido). Al utilizar `Math.floor()`, redondeas ese número hacia abajo al entero más cercano. Finalmente, al sumar 1, obtienes un número entre 1 y 122.

Ahora, para usar esta API no necesitamos generar números aleatorios, ya que la misma API nos da esta funcionalidad:

```js
const API = "https://randomfox.ca/floof/";
const addButton = document.querySelector("button");
const mountNode = document.querySelector("#images");

const fetchImage = async () => {
  const response = await fetch(API);
  const { image } = await response.json();

  const container = document.createElement("div");
  container.className = "p-4";

  const picture = document.createElement("img");
  picture.src = image;
  picture.className = "mx-auto";
  picture.width = "320";

  container.appendChild(picture);
  mountNode.appendChild(container);
};

addButton.addEventListener("click", fetchImage);
```

## 22. Intersection Observer

El `IntersectionObserver` es una API de JavaScript que permite detectar cuando un elemento (como una imagen) entra o sale de la vista (viewport) del usuario. Esta API es útil para implementar técnicas como el "lazy loading" (carga perezosa) de imágenes, paginación infinita y otras interacciones basadas en la visibilidad de los elementos en una página web.

El `IntersectionObserver` funciona mediante la creación de una instancia de este objeto, que recibe una función de callback y opciones de configuración. La función de callback se ejecuta cada vez que uno o más elementos observados cambian su estado de intersección con el viewport.

Aquí hay una explicación paso a paso de cómo funciona el `IntersectionObserver`:

1. Creación del objeto `IntersectionObserver`:
   ```javascript
   const observer = new IntersectionObserver(callback, options);
   ```

   El parámetro `callback` es una función que se ejecuta cada vez que un elemento observado cambia su estado de intersección. El parámetro `options` es un objeto que contiene opciones de configuración para el observador, como el umbral de visibilidad y el elemento raíz de referencia.

2. Observación de elementos:
   ```javascript
   const targetElement = document.querySelector('.elemento-a-observar');
   observer.observe(targetElement);
   ```

   Utilizando el método `observe()`, se puede indicar al `IntersectionObserver` que observe un elemento específico (`targetElement`). Puedes observar múltiples elementos llamando a `observe()` para cada uno de ellos.

3. Ejecución de la función de callback:
   ```javascript
   const callback = function(entries, observer) {
     entries.forEach(function(entry) {
       // Manipular el estado de intersección del elemento
       if (entry.isIntersecting) {
         // El elemento está dentro del viewport
       } else {
         // El elemento está fuera del viewport
       }
     });
   };
   ```

   La función de callback recibe dos parámetros: `entries` y `observer`. `entries` es una lista de objetos `IntersectionObserverEntry` que contienen información sobre los elementos observados y su estado de intersección. En el ejemplo anterior, utilizamos un bucle `forEach` para iterar sobre las entradas y realizar acciones específicas según el estado de intersección.

4. Detener la observación de elementos:
   ```javascript
   observer.unobserve(targetElement);
   ```

   Si ya no deseas observar un elemento en particular, puedes utilizar el método `unobserve()` para dejar de observarlo. Esto puede ser útil cuando un elemento ha sido cargado o ya no está visible en la página.

El `IntersectionObserver` simplifica la detección de cambios en la visibilidad de los elementos y permite tomar acciones adecuadas en función de esos cambios. Esto es especialmente útil cuando se trabaja con elementos que pueden ser agregados o eliminados dinámicamente en la página, como en el caso del "lazy loading" de imágenes.

Espero que esta explicación te haya ayudado a comprender qué es y cómo funciona el `IntersectionObserver` en JavaScript.

![](https://i.postimg.cc/sxLfQv3y/22-intersection-observer.png)

Creamos el archivo `lazy.js` dentro del `src`.

`src/lazy.js`

```js
const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const accion = (entry) => {
  const nodo = entry.target;
  console.log("Hi XD");

  // Deja de escuchar las img
  observer.unobserve(nodo);
};

// Valida si la imagen se ve o no
const observer = new IntersectionObserver((entries) => {
  console.log(entries); // Array de la imagen
  entries.filter(isIntersecting).forEach(accion);

  // IntersectionObserverEntry.isIntersecting
  // IntersectionObserverEntry.target
});

const registerImage = (image) => {
  observer.observe(image);
};

export { registerImage };
```

`src/index.js`

```js
import { registerImage } from "./lazy"; 👈👀

const addButton = document.querySelector("button");
const mountNode = document.querySelector("#images");

const minimum = 1;
const maximum = 122;

const random = () =>
  Math.floor(Math.random() * (maximum - minimum));

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.append(imagen);
  return container;
};

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);

  registerImage(newImage); 👈👀
};

addButton.addEventListener("click", addImage);
```

Experimentando con la API vale la pena aclarar algunos puntos de la clase:

1. Cuando se crea el observer de la forma que lo hace el profesor, se define por defecto un umbral = 0 para ejecutar el callback. Es decir, el observer va a validar si la imagen se ve o no se ve (así sea un poquito). Para este ejercicio está perfecto, pero ese umbral es parametrizable si queremos que se ejecute el callback por ejemplo si la imagen se ve en un 50% o más. Para eso hay que pasar un segundo parámetro (un objeto) llamado option: 
	```js
	const observer = new IntersectionObserver(callback, option)
	```

2. Cuando se ejecuta el callback (que el profesor pasa como arrow function), esta función recibe como parámetro un array que aquí llamamos _entries_. El profesor dice que en ese array van TODOS los target que el observer está vigilando y no es así. Si hacen la prueba en la consola y en ese callback solo hacen un `console.log(entries)`, van a ver que siempre imprime un array de 1 posición y esa posición obecede solamente al target que desencadenó el callback (es decir, la imagen que ahora es visible o que dejó de ser visible en la pantalla).
	![](https://i.postimg.cc/90CnhjKh/22-target-array-entry.png)

3. Dado esto, cuando el profesor hace un _filter_ y un _forEach_ dentro del callback, realmente está usando estos métodos sobre un array de 1 posición.
4. Ese array de 1 posición tiene en esa posición un objeto. Este objeto describe el evento que interceptó el observer. Este objeto tiene dos propiedades muy relevantes aquí: 
	- _isIntersecting_: que si es false indica que ya no está en el viewport y si es true indica que ya es visible en el viewport (aunque sea un poquitico).
	- _target_: que indica específicamente cuál elemento (cuál imágen) es la que generó la ejecución del callback.
5. Entonces, ejecutar el _filter_ realmente válida si ese único objeto en el array está o no está en el viewport. Si lo está seguimos…
6. El _forEach_ accede a ese único objeto (un recorrido bieeen cortico jeje), y con él ejecuta la función que imprime el 'holis' en consola. Bien podría haber impreso la imagen que desencadenó el callback si en vez de llamar la función 'accion' hiciera: 
	```js
	entries.filter(isIntersecting).forEach(entry => console.log(entry.target))
	```

7. Finalmente, uno pensaría que el callback del observer se ejecuta solo cuando se genera el evento que definimos (que la imagen aparezca en el viewport), pero no. El callback se ejecuta siempre que ejecutemos la función `observer.observe(target)` para cada target más las veces que ese target desencadene el callback después. En el ejercicio del curso no se nota porque el profesor hace un filter, pero si dentro del callback solamente colocan un `console.log('hola')`, van a ver que cada vez que agregen una imagen se imprime el saludo, así la foto aún no sea visible en el viewport.

- [Aprende a usar Intersection Observer API](https://www.youtube.com/watch?v=CvXHedd3Z7w)
- [Detecta cuando un elemento es visible con Intersection Observer y JavaScript](https://www.youtube.com/watch?v=X1eCDd3ngKw)

## 23. Aplicando Lazy loading

### Atributos data*

Los atributos `data-*` en HTML son atributos personalizados que se pueden añadir a cualquier elemento HTML. Estos atributos permiten almacenar datos adicionales en los elementos HTML, sin necesidad de utilizarlos como atributos estándar. Los atributos `data-*` pueden ser muy útiles para almacenar información que no se muestra directamente en la interfaz de usuario, pero que es necesaria para la lógica de la aplicación, especialmente cuando se trabaja con JavaScript.

#### Sintaxis

Los atributos `data-*` deben comenzar con el prefijo `data-` seguido de un nombre que puede contener letras, números, guiones y puntos. Por ejemplo: `data-id`, `data-user-name`, `data-info`.

#### Ejemplos de Uso

##### Ejemplo HTML

```html
<div
  id="user"
  data-user-id="12345"
  data-user-name="Juan Pérez"
  data-user-role="admin"
>
  Usuario: Juan Pérez
</div>
```

En este ejemplo, se tienen tres atributos `data-*` en un elemento `div`: `data-user-id`, `data-user-name`, y `data-user-role`.

##### Acceder a los atributos `data-*` en JavaScript

Puedes acceder a los atributos `data-*` en JavaScript utilizando la propiedad `dataset` del elemento.

###### Ejemplo JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Data Attributes Example</title>
  </head>
  <body>
    <div
      id="user"
      data-user-id="12345"
      data-user-name="Juan Pérez"
      data-user-role="admin"
    >
      Usuario: Juan Pérez
    </div>

    <script>
      // Obtener el elemento por su ID
      const userElement = document.getElementById("user");

      // Acceder a los atributos data-* usando dataset
      const userId = userElement.dataset.userId;
      const userName = userElement.dataset.userName;
      const userRole = userElement.dataset.userRole;

      // Imprimir los valores en la consola
      console.log(`User ID: ${userId}`);
      console.log(`User Name: ${userName}`);
      console.log(`User Role: ${userRole}`);
    </script>
  </body>
</html>
```

En este ejemplo, se accede a los valores de los atributos `data-user-id`, `data-user-name` y `data-user-role` utilizando `userElement.dataset.userId`, `userElement.dataset.userName` y `userElement.dataset.userRole`, respectivamente. Estos valores luego se imprimen en la consola.

#### Ventajas de usar `data-*`

1. **Flexibilidad**: Puedes agregar cualquier dato que necesites sin tener que modificar la estructura de tu HTML o depender de atributos estándar que podrían no ser adecuados.
2. **Accesibilidad desde JavaScript**: Los datos son fácilmente accesibles y manipulables desde JavaScript.
3. **Compatibilidad**: Son compatibles con todos los navegadores modernos.

#### Consideraciones

- Los atributos `data-*` no deben utilizarse para almacenar datos críticos o sensibles, ya que son accesibles a través del HTML y pueden ser manipulados por el usuario.
- Es importante mantener una convención de nombres clara y coherente para evitar confusiones y asegurar que los datos sean fácilmente comprensibles.

#### Resumen

Los atributos `data-*` proporcionan una manera poderosa y flexible de almacenar datos adicionales en elementos HTML, facilitando la manipulación y acceso de estos datos mediante JavaScript. Esto permite agregar y manejar información específica del elemento de una manera estructurada y limpia.

### Código de la clase

`src/index.js`

```js
import { registerImage } from "./lazy";

const addButton = document.querySelector("button");
const mountNode = document.querySelector("#images");

const minimum = 1;
const maximum = 122;

const random = () =>
  Math.floor(Math.random() * (maximum - minimum));

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  
  // data-src en el html 👈👀👇
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.append(imagen);
  return container;
};

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);

  registerImage(newImage);
};

addButton.addEventListener("click", addImage);
```

`src/lazy.js`

```js
const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target; 👈👀👇
  const imagen = container.firstChild;
  const url = imagen.dataset.src;

  imagen.src = url;

  // debugger;
  // console.log(container.nodeName);
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
  console.log(entries);
});

const registerImage = (image) => {
  observer.observe(image);
};

export { registerImage };
```

📌 Actualmente Lazy Loading es nativo en HTML:

```html
<img src="imagen.png" loading="lazy">
```

Pero todavía no está 100% soportado por los navegadores. Referencia: [can i use](https://caniuse.com/loading-lazy-attr)

[Lazy loading Nativo en html](https://www.youtube.com/shorts/u_iWpYEDSdc)

## 24. Comparte el resultado

1. Recuadro de carga
2. Botón de eliminar
3. Contador de imágenes agregadas y cargadas

### Código propuesto por un estudiante

Para agregar el fondo gris lo que hice fue crear un wrapper que encerrara a la imagen y que se adaptara al tamaño de la misma con un mínimo de 100px, y este wrapper tiene el fondo gris, así cuando se inserta sale con fondo gris:

```js
... 
imagen.width = "320";
imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

const imageWrapper = document.createElement("div");
imageWrapper.className = "bg-gray-300";
imageWrapper.style.minHeight = "100px";
imageWrapper.style.display = "inline-block";
imageWrapper.appendChild(imagen);
container.appendChild(imageWrapper);
...
```

Para eliminar las imágenes, le puse id a los botones:

```js
<button class="p-3" id="add">Agregar Imagen</button>
<button class="p-3" id="clean">Limpiar</button>
```

En JavaScript los selecciono y les pongo sus eventos, para eliminarlos simplemente recorro todos los nodos hijos de `mountNode`, los recorro y los elimino:

```js
const cleanImages = () => {
  console.log(mountNode.childNodes);
  [...mountNode.childNodes].forEach((child) => {
    child.remove();
  });
};
addButton.addEventListener("click", addImage);
cleanButton.addEventListener("click", cleanImages);
```

Y para imprimir la cantidad de imágenes agregadas y cargadas, en el HTML agregué variables y una función super globales para tener acceso desde `index.js` y desde `lazy.js`:

```js
<script>
  let appendedImages = 0;
  let loadedImages = 0;
  const printLog = () => {
    console.log(
      `⚪ Se han agregado ${appendedImages} imágenes`
    );
    console.log(
      `🟣 Se han cargado ${loadedImages} imágenes`
    );
    console.log("---------------------------------------");
  };
</script>
<script
  type="module"
  src="%PUBLIC_URL%/_dist_/index.js"
></script>
```

Entonces, en la función `createImageNode` antes de retornar el container, aumento uno a las imágenes que se han agregado y llamo a la función:

```js
... 
imageWrapper.appendChild(imagen);
container.appendChild(imageWrapper);
appendedImages++;
printLog();
return container;
...
```

Y dentro de `lazy.js` en `loadImage` antes de dejar de observar hago lo mismo, pero aquí incremento las imágenes cargadas:

```js
const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const imagen = container.querySelector("img");
  const url = imagen.dataset.src;
  imagen.src = url;
  loadedImages++;
  printLog();
  observer.unobserve(container);
};
```

Y listo. El código completo está aquí por si quieren darle un vistazo:
[Resolución del reto](https://github.com/RetaxMaster/curso-manipulacion-dom/tree/b9340045038e16f31d9126c8eeaf75df2ff8eeac/workshop-2)

[Otro ejemplo de solución](https://josegarcia2001.github.io/learning-lazy-loading-withJS/)

## 25. Proyectos propuestos

- Reproductor de vídeo
- Aplicación del Clima
	- API: openweathemap.org
	- Eventos: submit, input, click

📌 En [Frontend Mentor](https://www.frontendmentor.io/challenges) también pueden encontrar retos interesantes para hacer.

### Propuestas de estudiantes

Reproductor:

- [Proyecto](https://wfercanas.github.io/Mediaplayer/)
- [Repo](https://github.com/wfercanas/Mediaplayer)

Weather:

- [Proyecto](https://wfercanas.github.io/Weather/)
- [Repo](https://github.com/wfercanas/Weather)

- [HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp)
- [Envato tutorials](https://tutsplus.com/)

## 26. ¿Y jQuery?

- Fue popular porque no era fácil manipular el DOM.
- No todos los navegadores tenían las mismas API.
- Solucionaba errores e inconsistencias entre navegadores.
- Hoy en día no es necesario, pues los navegadores se mantienen al día con los estándares de HTML y JS.
- Sería útil si los usuarios de tus sitios web utilizan navegadores muy antiguos.
- JQuery no murió, cambio tanto la forma de hacer front-end que se integró con la web.
- Muchas de las webs apis usadas hoy fueron inspirados en jQuery.

## 27. ¿Y JSX?

### Hyperscript

Es una dependencia que nos permite crear elementos, agregar propiedades y agregar elementos en el DOM de una forma más sencilla y amigable.

**npm**

```bash
npm install hyperscript
```

**yarn**

```bash
yarn add hyperscript
```

**Agregando nodos de la forma tradicional**

```js
// Imagen 
const imagen = document.createElement("img"); 
imagen.className = "mx-auto"; 
imagen.width = "320"; 
imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
```

**Con hyperscript**

```js
const imagen = h("img.mx-auto", {
  width: "320",
  "data-src": `https://randomfox.ca/images/${random()}.jpg`,
});
```

📌 Para quienes lo están haciendo en mayo del 2022 o adelante, para cargar la imagen ya no se usa `"data-src"`, si no, simplemente `"src"`:

```js
const image = h("img.mx-auto", {
  width: "300",
  src: `https://randomfox.ca/images/${randomer()}.jpg`,
});
```

**más información sobre hyperscript:** [https://github.com/hyperhype/hyperscript](https://github.com/hyperhype/hyperscript)

### JSX

Gracias a jsx, en React la implementación es mucho más sencilla porque ellos agregaron un decorador que permite la inclusión de clases y propiedades en el DOM dentro de etiquetas parecidas a las etiquetas de html ejemplo:

```jsx
const container = <div className="p-4 mt-3"><imagen /></div>
```

## 28. Conclusiones


## 🔥 Examen

<details>
  <summary>Haz clic para ver los resultados 👀👇</summary>
  <br/>

1. ¿En qué momento se construye el DOM?

	- ✅ Critical Rendering Path.

2. Lo siguiente es FALSO sobre Eventos

	- ✅ Solo los `<button>` pueden tener Eventos.

3. ¿Cuál es la diferencia entre el tipo de dato NodeList y Array?

	- ✅ NodeList no tiene métodos como map, filter o some.

4. La Web API de Intl (internationalization) nos permite:

	- ✅ Dar formato a fechas y monedas

5. El siguiente NO es un selector de nodos

	- ✅ getElementByDataset

6. La técnica de Delegar Eventos consiste en:

	- ✅ Utilizar un solo evento en el nodo padre para reaccionar a lo que sucede en los hijos.

7. El siguiente NO es un método para agregar nodos

	- ✅ appendBefore

8. Una Web API nos permite…

	- ✅ Utilizar JS para manipular el DOM.

9. Cuando hablamos de manipulación del DOM, la siguiente afirmación es FALSA

	- ✅ Necesito librerias externas como jQuery para hacerlo.

10. ¿Cómo se evita que un Evento se siga propagando?

	- ✅ Ejecutando event.stopPropagation() en el elemento.

11. La mejor forma de agregar un nodo es:

	- ✅ Ninguna es mejor que otra. Cada cual tiene su caso de uso.

12. Para el DOM, la diferencia entre un atributo y una propiedad es

	- ✅ Los atributos se usan solo como valores iniciales. Luego son todas propiedades.

12. La forma en que JavaScript reacciona a lo que sucede en el navegador se realiza por

	- ✅ Eventos

13. Cuál es la diferencia entre append() y appendChild()?

	- ✅ append permite agregar más de un solo nodo.

15. ¿Qué tipo de dato retorna el selector querySelectorAll?

	- ✅ NodeList

16. La siguiente línea de código, asumiendo que node ni ninguno de sus padres es null:

	```js
	const node = document.querySelector("div"); 
	node.parentElement.parentElement.removeChild(node); 
	Da como resultado:
	```

	- ✅ Error, solo se puede eliminar un hijo directo.

17. Al hablar sobre Eventos, la siguiente afirmación es FALSA:

	- ✅ Solo se puede agregar un evento por nodo.

18. La Web API de Intersection Observer permite:

	- ✅ Conocer cuándo un elemento es visible en el viewport.

19. El método correcto para crear un nuevo nodo es:

	- ✅ document.createElement

20. El método appendChild() se utiliza para:

	- ✅ Agregar un nodo al final de un contenedor padre.

</details>


👈👀
👇
📌
✅

