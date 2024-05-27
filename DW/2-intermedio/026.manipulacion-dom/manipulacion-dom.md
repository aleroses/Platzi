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

Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2), y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs. . La forma de detenerlo es usando el método stopPropagation() que viene dentro del argumento event que cualquier evento nos provee, por tanto, yo puedo decirle al div3: "Oiga, yo solo lo quiero clicar a usted, no a los demás, sí, ya se que usted está dentro de los demás, pero yo solo lo quiero a usted", de tal forma que al event listener del programation le puedo poner:


```js
div3.addEventListener("click", event => {

    event.stopPropagation()

});
```
De esta forma, el evento de div2 y div1 no serán ejecutados . Dato curioso, cuando tu defines un elemento con un ID en HTML, en JavaScript se crea automágicamente una variable con ese id que creaste, por eso es completamente posible que yo pueda usar la variable div3 sin tener que seleccionar el elemento 👀

👈👀
👇
📌

```js

```
👈👀
👇
📌

```js

```

## 17.

👈👀
👇
📌

```js

```
👈👀
👇
📌

```js

```

