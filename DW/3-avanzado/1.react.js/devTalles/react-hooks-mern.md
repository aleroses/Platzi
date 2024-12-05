# React (Hooks y MERN)

## 1. Introducción

### 🟣 Introducción al curso

Se recomienda hacer las tareas de cada sección.

### 🟣 ¿Cómo funcionará el curso?

Trata de ver el curso en secuencia.

### 🟣 ¿Cómo hacer preguntas?

Revisa la sección de **Discusión** y crea un **Post**.

> Trata de agregar toda la información de una sola vez y de ser necesario deja tu código en un repositorio alojado en GitHub para que pueda ser revisado por los instructores y así puedan darte mucho mejor soporte.

### 🟣 Instalaciones necesarias y recomendadas

#### Instalaciones Necesarias

* [Google Chrome](https://www.google.com/chrome/)

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)

* [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Mongo Compass](https://www.mongodb.com/try/download/compass)

* [Git](https://git-scm.com/)

* [Node](https://nodejs.org/es/)

> Revisa la configuración básica de Git: [Apuntes](https://github.com/aleroses/Platzi/blob/master/DW/1-basico/005-git-github/git-github.md#8-crea-un-repositorio-de-git-y-haz-tu-primer-commit)

```bash
git config --list
  - Configuración por defecto de git
  - Vemos que aún no está nuestro nombre ni correo

git config --global user.name "John Lennon"
  - Cambiar usuarios globales

git config --global user.email "john.l@mail.com"
  - Cambiar email
```

#### Extensiones de VSCode

[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

#### Configuración del Bracket Pair Colorizer 2

Brakcet Pair está obsoleto.
[Obsoleto - Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

Solución:

- Presiona F1 para abrir búsqueda en VS Code.
- Busca Open Settings (UI)
- En Search settings copia y pega esto: 

```
"@id:editor.bracketPairColorization.enabled [@id:editor.guides.bracketPairs](https://id:editor.guides.bracketPairs/)"
```

También puedes usar el atajo `Ctrl + ,` y pegas en el buscador lo mostrado arriba.
  
Ahora asegúrate de que: 

> Editor > Bracket Pair Colorization: Enabled está marcado con un tick mark (activo)

---

> Editor > Guides. Bracket Pairs tiene la opción de "active" seleccionada.

A continuación haz de nuevo F1 y busca Open User Settings (JSON) o usa el atajo `Ctrl + ,` y busca el icono 📄 Open Settings (JSON)

Ahora en el fichero **settings.json** añade la siguiente propiedad al objeto json:

```json
"workbench.colorCustomizations": {
	"editorBracketHighlight.foreground1": "#fafafa",
	"editorBracketHighlight.foreground2": "#9F51B6",
	"editorBracketHighlight.foreground3": "#F7C244",
	"editorBracketHighlight.foreground4": "#F07850",
	"editorBracketHighlight.foreground5": "#97c26c",
	"editorBracketHighlight.foreground6": "#C497D4",
	"editorBracketHighlight.unexpectedBracket.foreground": "#fb6165"
},
```

#### Temas que estoy usando en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Mi tema: [Material Theme -- Free](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

#### Instalaciones recomendadas sobre React

* [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

[Instalaciones recomendadas](https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362)

### 🟣 ¡Únete a Nuestra Comunidad de DevTalles en Discord!

**¿Cómo unirse?**

- Haz clic en el siguiente enlace de invitación: [Comunidad DevTalles](https://discord.gg/pBjEVYTC7t)

## 2. Introducción a React y conceptos generales

### 🟣 Introducción a la sección

### 🟣 Temas puntuales de la sección

**¿Qué aprenderemos en esta sección?**

- ¿Qué es React?
- Conceptos generales
- Babel
- JSX

Daremos nuestros primeros pasos y una pequeña aplicación que nos ayudará a perderle el miedo a React rápidamente

### 🟣 ¿Qué es React?

- Librería: Para aplicaciones sencillas, intermedias y robustas.
- Declarativa: Es fácil de seguir patrones de diseño y crear UI interactivas.
- Eficiente: Los cambios se hacen solo en el elemento que se modificó.
- Predecible:
- Componentes: Pequeñas piezas encapsuladas fáciles de mantener.
- Server-side con Node
- Aplicaciones móviles con React Native.

¿Cómo luce el código de React?

```html
<div id="root"></div>
```

```jsx
const root = document.querySelector("#root");
ReactDOM.render(<h1>Hola mundo cruel</h1>, root);
```

También:

```html
<div id="root"></div>
```

```jsx
const root = document.querySelector("#root");
const tag = <h1>Hola mundo cruel</h1> // JSX
ReactDOM.render(tag, root);
```

El código JSX se podría crear de la siguiente manera:

```jsx
const tag = document.createElement('h1', null, `Hola, soy ${nombre}`)
```

### 🟣 Primeros pasos en React

Creamos una carpeta para empezar a trabajar:

```bash
.
├── 01-intro-react 👈👀
│   └── index.html
├── 02-intro-js
└── 03-counter-app
```

Abrimos el primer archivo usando Visual Studio Code y añadimos lo siguiente:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <!-- Cargar React -->
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <title>React</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      const divRoot = document.querySelector("#root");
      const name = "Ale Roses";
      const h1Tag = <h1>Hi {name}</h1>;

      ReactDOM.render(h1Tag, divRoot);
    </script>
  </body>
</html>
```

Primero cargamos las bibliotecas de React y Babel. Añadimos algo de código para empezar a trabajar como se hace con React.

Para que el código no nos dé ningún error debemos agregar `type="text/babel"` dentro de la etiqueta `script`.

Si tienes la extensión `Live Server` solo das clic derecho **Open with live Server**.

Ahora puedes abrir los dev tools con `Ctrl + Shift + i`

[**React-index.html - Demo**](https://gist.github.com/Klerith/b0111f52ba16451d095f38d4c995605b)

### 🟣 Introducción a Babel

#### Babel

Babel es un "compilador" (o transpilador) para JavaScript. Básicamente permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos.

[Babel](https://babeljs.io/)

#### Dato sobre Babel y Vite

Vite reemplaza a Babel o a Webpack en cierto modo. Al contrario que Babel o Webpack, Vite no compila el código de JavaScript durante el desarrollo, sino que realiza la transpilación del código en tiempo real durante el proceso de desarrollo.

Esto se conoce como desarrollo en tiempo real o HMR (Hot Module Replacement). Aunque no reemplaza por completo a Babel o Webpack, Vite sigue siendo una herramienta muy poderosa y rápida para el desarrollo de aplicaciones web modernas.

[**Babeljs.io - Sitio oficial**](https://babeljs.io/)

## 3. Introducción a JavaScript moderno

### 🟣 Introducción a la sección

Sigan los videos al pie de la letra...

### 🟣 Temas puntuales de la sección

**¿Qué aprenderemos en esta sección?**

- Generar la base sobre JavaScript
- Constantes y variables Let
- Template String
- Objetos literales
- Arreglos
- Desestructruación * (sumamente importante)
- Promesas
- Fetch API
- Ternarios
- Async - Await

Mi objetivo aquí es que tengamos las bases que nos ayuden a que podamos diferenciar fácilmente qué es propio de React y qué es propio de JavaScript. Estos conceptos y ejercicios nos ayudarán a suavizar la curva de aprendizaje de React.

### 🟣 Inicio de proyecto - Bases de JavaScript

Entramos a la carpeta para empezar a trabajar, en este caso con Create React App (CRA):

```bash
.
├── 01-intro-react
│ └── index.html
├── 02-intro-js 👈👀
└── 03-counter-app
```

Para crear un proyecto de React con CRA debemos usar el siguiente comando:

```bash
npx create-react-app 02-intro-js 👈👀
cd 02-intro-js
code .
npm start
```

La estructura de CRA se ve así:

```bash
❯ tree -L 2
.
├── node_modules 👈👀 # Muchos archivos
│   ├── @aashutoshrathi
│   ├── abab
│   ├── accepts 
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src 👈👀
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js

871 directories, 17 files
```

Para el ejemplo borramos todo el contenido de la carpeta `src` y dentro creamos el archivo `index.js`.

[**create-react-app - Official Website**](https://create-react-app.dev/)

### 🟣 Variables y constantes

```js
// Variables y Constantes

const name = "Ale";
const lastName = "Roses";

let value = 5;
value = 4;

console.log(name, lastName, value);

if (true) {
  let value = 10;
  console.log(value);
}

console.log(value);
```

Creamos un respaldo con la siguiente estructura.

```bash
.
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── bases 👈👀
    │   ├── 01-const-let.js
    │   ├── 02-backticks.js
    │   ├── 03-obj-literal.js
    │   ├── 04-array.js
    │   ├── 05-functions.js
    │   ├── 06-desest-obj.js
    │   ├── 07-desest-arr.js
    │   ├── 08-imp-exp.mjs
    │   ├── 09-promises.js
    │   ├── 10-fetch.js
    │   ├── 11-async-await.js
    │   └── 12-conditional-ternary.js
    ├── data
    │   └── heroes.js
    └── index.js
```

Al final de esta sección tendremos dentro de la carpeta `bases` todos nuestros respaldos.

Para más detalles sobre variables ver los [Apuntes js-básico](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/001-js-basico/js-basico.md#4-variables-en-javascript)

### 🟣 Template String

```js
const name = "Ale";
const lastName = "Roses";

const fullName = `${name} ${lastName}`;

console.log(fullName);

function getGreeting(name) {
  return "He " + name;
}

console.log(`This a text: ${getGreeting("Ghost")}`);
```

> Para obtener sugerencias usar `Ctrl + Barra espaciadora`

Recomiendo usar la extensión **JavaScript Auto Backticks** que nos permite añadir Backticks rápidamente.

Si escribimos `"${}"` automáticamente los genera `${name}`

### 🟣 Objetos literales

```js
const person = {
  name: "Ale",
  lastName: "Roses",
  age: 28,
  address: {
    city: "New York",
    zip: 1234,
    lat: 14.2324,
    lng: 34.3003,
  },
};

const human = { ...person };

console.log(person);
console.table(person);
console.log(human);
console.log({ person, human });
```

**Recursividad** para hacer una copia profunda:

```js
const person = {
  name: "Ale",
  lastName: "Roses",
  age: 28,
  address: {
    city: "New York",
    zip: 1234,
    lat: 14.2324,
    lng: 34.3003,
    x: {
      city: "New York",
      zip: 1234,
      lat: 14.2324,
      lng: 34.3003,
    },
    y: [
      "city",
      "New York",
      "zip",
      1234,
      "lat",
      14.2324,
      "lng",
      34.3003,
    ],
  },
};

/* En JS todo es un objeto: {} / []  */
const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }

  console.log(newObj);
  return newObj;
};

deepCopy(person);
```

Si quieres probar el código sin salir de VSC puedes usar la extensión **Code Runner**.

### 🟣 Arreglos

```js
// Arreglos en JS
// const newArray = new Array();
const newArray = [1, 2, 3];

// NO recomendado (push)
// newArray.push(1);
// newArray.push(2);
// newArray.push(3);

let newArray2 = [...newArray, 4, 5];
let newArray3 = newArray2.map((n) => n * 2);

console.log(newArray, newArray2, newArray3);
```

[**Mozilla MDN: Array.map()**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### 🟣 Funciones

```js
// Functions en Js

function gretting(name) {
  return `Hello, ${name}`;
}

console.log(gretting("Goku"));
```

Otros ejemplos:

```js
const gretting = (name) => {
  return `Hello, ${name}`;
};

console.log(gretting("Goku"));

const getUser = () => ({
  uid: "ABC123",
  username: "The-crazy-man",
});

const user = getUser();
console.log(user);

const getActiveUser = (name) => ({
  uid: "ABC567",
  username: name,
});

const activeUser = getActiveUser("Ale");
console.log(activeUser);
```

### 🟣 Desestructuración de Objetos

```js
// Desestructuración
// Asignación Desestructurante

const person = {
  name: "Ale",
  year: 45,
  key: "Ironman",
  rank: "Soldier",
};

const { year, key, name: nameTwo } = person;

// console.log(nameTwo, year, key);

const useContext = ({
  name,
  key,
  year,
  rank = "Captain",
}) => {
  // const { year, key, name: nameTwo } = user;
  // console.log(name, year, rank);

  return {
    name: key,
    anios: year,
    latlng: {
      lat: 14.1234,
      lng: -12.2323,
    },
  };
};

const {
  name,
  anios,
  latlng: { lat, lng },
} = useContext(person);

// const { lat, lng } = latlng;

console.log(name, anios, lat, lng);
```

[**Mozilla MDN: Asignación Desestructurante**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### 🟣 Desestructuración de Arreglos

```js
const characters = ["Goku", "Vegeta", "Trunks"];

const [, , c3] = characters;

console.log(c3);

const showArray = () => {
  return ["ABC", 123];
};

const [one, two] = showArray();

console.log(one, two);

const useState = (value) => {
  return [
    value,
    () => {
      console.log("Hello world");
    },
  ];
};

const [name, setNumber] = useState("Goku");
// arr[1]();

console.log(name);
setNumber();
```

Para seleccionar todas las coincidencias de una palabra, solo debes posar el cursor sobre la palabra en cuestión y presionar:

`Ctrl + Shift + l` o también `Ctrl + d`

Otra opción sería presionar `F2` y darle el nuevo nombre a la variable o fracción de código que se desea modificar.

### 🟣 Import, export y funciones comunes de arreglos

```js
import { heroes } from "../data/heroes.js";

const getHeroById = (id) => {
  return heroes.find((value) => value.id === id);
};

const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroesByOwner("DC"));

export { getHeroById, getHeroesByOwner };
```

`data > heroes.js`

```js
const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

export { heroes };
```

**[Heroes.js](https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f)**

[**Mozilla Mdn: Find**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)|

### 🟣 Múltiples exportaciones y exportaciones por defecto

```js
export default heroes;

// Al exportar de las siguientes maneras:
export const owner = ["DC", "Marvel"];
// O, la "importación" se hace usando {}
export { owner };

// También
export { heroes as default, owner };

// ----------------------------------------
// En lo personal no me gusta esta forma
import heroes, { owner } from "../data/heroes.js";

// Prefiero esto
import { heroes, owner } from "../data/heroes.js";
```

En el primer ejemplo, `heroes` es una exportación por defecto y la `owner` no.

### 🟣 Promesas

```js
import { getHeroById } from "./08-imp-exp.mjs";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = getHeroById(2);

    resolve(data);
    reject("Id not found");
  }, 2000);
});

promise
  .then((response) => console.log(response))
  .catch((err) => console.warn(err));
```

Otro ejemplo:

```js
import { getHeroById } from "./08-imp-exp.mjs";

const getHeroByIdAsync = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = getHeroById(id);

      data ? resolve(data) : reject("Id not found");
    }, 2000);
  });

  return promise;
};

getHeroByIdAsync(14).then(console.log).catch(console.warn);
```

📌 Si no te sale el `import` automáticamente sitúate en la parte superior y escribe el nombre, en este caso `getHeroeById` y verás como te sale para importar automáticamente. En caso escribas el nombre de la función a importar y no te la importe, puedes abrir el archivo donde está esa función, esto hará que importe y autocomplete la ubicación exacta de esa función.

[**Mozilla MDN: Promesas**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### 🟣 Fetch API

Crea una cuenta en Giphy API y crea un `api key` con los siguientes pasos:

- Entra en **Create an App**
- Selecciona **API Selected**
- **Next** 
- Dale un nombre a la app con su respectiva descripción.
- Por último dale a **Create App**.

Para el ejemplo usaremos [Random Endpoint](https://developers.giphy.com/docs/api/endpoint/#random) que mostrara una imagen de manera aleatoria.

```js
// Ingresa tu Api key en la url antes de pegarla en un navegador
api.giphy.com/v1/gifs/random?api_key=xdCnnfEOEkSz4TEgLmMc09dBClFt99Ou
```

Esto mostrará un objeto con mucha información.

```js
const apiKey = "xdCnnfEOEkSz4TEgLmMc09dBClFt99Ou";
const getGiphy = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

getGiphy
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
```

[**Giphy API**](https://developers.giphy.com/)

[**Mozilla MDN: Fetch**](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

### 🟣 Async - Await

Primera forma:

```js
const getImage = () => {
  const promise = new Promise((resolve, reject) => {
    resolve("c");
  });

  return promise;
};

getImage().then(console.log);
```

Otra forma: 

```js
const getImage = async () => {
  return "https://asdffsafs.com";
};
getImage().then(console.log);
```

Otra forma:

```js
const getImage = async () => {
  try {
    const apiKey = "xdCnnfEOEkSz4TEgLmMc09dBClFt99Ou";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();

    const img = document.createElement("img");
    // img.src = data.data.images.original.url;
    img.src = data.images.original.url;

    document.body.append(img);

    return data;
  } catch (error) {
    console.error(error);
  }
};

getImage();
```

### 🟣 Operador condicional ternario

```js
const active = true;
// let message = active ? "Active" : "Inactive"
let message = !active && "Active";

console.log(message);
```

### 🟣 Nota sobre JavaScript

#### **Terminamos la sección de reforzamiento de JavaScript**

Pero recuerden que esto es para entrar en calor y que lo temas principales de JavaScript que necesito que conozcan estén cubiertos, pero les recomiendo que cualquier duda adicional sobre el lenguaje, sobre métodos y demás, la consulten aquí

[**https://developer.mozilla.org/es/**](https://developer.mozilla.org/es/)

Como ya les había mencionado, considero esa página la mejor en cuanto a documentación sobre JavaScript.

También si sienten que necesitan más sobre JavaScript en video, mi curso de JavaScript Moderno es el indicado para eso.

En fin!, es momento de empezar con React!

Recursos de la lección:

[**Repositorio de GitHub del proyecto**](https://github.com/Klerith/react-intro-javascript)

## 4. Primeros pasos en React

### 🟣 Introducción a la sección

### 🟣 Temas puntuales de la sección

**¿Qué veremos en esta sección?**

- Nuestra primera aplicación - Hola Mundo
- Exposiciones sobre los componentes
- Creación de componentes (Functional Components)
- Propiedades - Props
- Impresiones en el HTML 
- PropTypes  
- DefaultProps 
- Introducción general a los Hooks  
- useState

Es una sección importante, especialmente para todos los que están empezando de cero en React, ya que dará las bases de cómo segmentar la lógica de nuestra aplicación en pequeñas piezas más fáciles de mantener.

### 🟣 ¿Qué son los componentes?

Pequeña pieza de código encapsulada reutilizable que puede tener estado o no.

Es buena práctica que los componentes se nombren usando `PascalCase`.

- camelCase
- snake_case
- PascalCase

```js
TwitterApp > Router > Screen/Página > Menú > MenuItem
```

El estado es como se encuentra la información del componente en un punto determinado del tiempo.

### 🟣 Primera aplicación de React

```bash
yarn create vite

# Nombrar proyecto
03-counter-app
# Seleccionar un framework
React
# Seleccionar variante
JavaScript
```

Si deseas renombrar una carpeta y estás en Linux lo puedes hacer con la CLI.

```bash
# Renombrar una carpeta:
mv nombre_actual nuevo_nombre
```

Ahora nos movemos al proyecto creado

```bash
cd 03-counter-app
yarn install
code .
yarn dev
```

La estructura del proyecto es la siguiente:

```bash
.
├── index.html
├── node_modules 👈👀 # Muchos archivos
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
├── vite.config.js
└── yarn.lock

522 directories, 1281 files
```

Si quieres ver como se hace con CRA puedes revisar la sección 3.

[[react-hooks-mern#3. Introducción a JavaScript moderno#🟣 Inicio de proyecto - Bases de JavaScript]]

[Inicio de proyecto - Bases de JavaScript](https://github.com/aleroses/Platzi/blob/master/DW/3-avanzado/1.react.js/devTalles/react-hooks-mern.md#-inicio-de-proyecto---bases-de-javascript)

[**Create-React-App - Documentación**](https://create-react-app.dev/)

[**Vite documentation**](https://vitejs.dev/)|

### 🟣 Estructura de directorios - CRA

En los proyectos creados con **NPM** se puede observar que tenemos el archivo `package-lock.json` que nos dice como fueron construidas las dependencias de los módulos de Node.

**[Referencia: Robots.txt](https://developers.google.com/search/docs/advanced/robots/intro?hl=es&visit_id=637909934831052162-4097033822&rd=1)**

**[Google Developers - PWA](https://web.dev/learn/pwa/)**

**[React-Scripts](https://create-react-app.dev/docs/available-scripts/)**

### 🟣 Estructura de directorios - Vite

Ver estructura en [[react-hooks-mern#4. Primeros pasos en React#🟣 Primera aplicación de React]]

Si se creó el proyecto con **Yarn** no se recomienda mezclarlo con **NPM**.

En caso desees cambiar debes borrar el archivo `package-lock.json` o `yarn.lock` y volver a hacer `npm install` o `yarn install`.

El archivo `vite.config.js` sirve para hacer configuraciones propias de vite.

### 🟣 Hola Mundo en React

Abrimos el proyecto `03-counter-app-vite`.

```bash
yarn dev
```

Borramos todos los archivos del folder `src` y creamos un archivo `main.jsx`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

// Mala practica
const App = () => {
  return <h1>App</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```html
<body>
  <div id="root"></div> 👈👀
  <script type="module" src="/src/main.jsx"></script>
</body>
```

### 🟣 Nuestro primer Componente

Creamos el archivo `App.jsx` dentro del `src`.

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src > App.jsx`

```jsx
import React from "react";

// rafc
const App = () => {
  return <h1>App</h1>;
};

export { App };
```

📌 Nota: Si haces una exportación por `defaul`, en el lugar de la **importación** puedes darle el **nombre que quieras**.

```js
export defaul App;

import TestApp👈 from "./App";
```

### 🟣 Tarea - Crear un nuevo componente

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FirstTest } from "./FirstTest";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstTest />
  </React.StrictMode>
);
```

`src > FirstTest.jsx`

```jsx
const FirstTest = () => {
  return (
    <>
      <h1>Ale Roses</h1>
    </>
  );
};

export { FirstTest };
```

### 🟣 Retornar elementos en el Componente - Fragment

`src > FirstTest.jsx`

```jsx
const FirstTest = () => {
  return (
    <> 👈👀
      <h1>Ale Roses</h1>
      <p>First course with Fernando Herrera.</p>
    </>
  );
};

export { FirstTest };
```

### 🟣 Impresión de variables en el HTML

`src > FirstTest.jsx`

```jsx
const newObject = {
  name: "Ale Roses",
  nickname: "Ghost"
}

const newArray = [0, 1, 2, 3, 4];

const getResult = () => {
  return 4 + 4;
}

const FirstTest = () => {
  return (
    <>
      <h1>{newObject.name}</h1>
      <p>{newObject.nickname}</p>
      <p>{newArray}</p>
      <p>{getResult()}</p>
      <code>{JSON.stringify(newMessage)}</code>
    </>
  );
};

export { FirstTest };
```

### 🟣 Colocar estilos de CSS

Dentro del `src` creamos un archivo `styles.css` donde podremos agregar los estilos que necesitemos.

`src > styles.css`

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: #21232a;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  padding: 70px;
}

button {
  padding: 5px;
  font-size: 1rem;
  margin: 0.2rem;
}
```

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FirstTest } from "./FirstTest";

import "./styles.css"; 👈👀

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstTest />
  </React.StrictMode>
);
```

### 🟣 Comunicación entre componentes - Props

`src > FirstTest.jsx`

```jsx
const FirstTest = ({
  title,
  subTitle,
  name,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

export { FirstTest };
```

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FirstTest } from "./FirstTest";

import "./styles.css"; 👈👀

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstTest
      title="Hi, I'm a bot"
      subTitle={"Subject subtitle"}
    />
  </React.StrictMode>
);
```

**Dev tools** ⚛️ Components: Veremos los nombres de los componentes (árbol de componentes / contexto)

![React dev tools](https://i.postimg.cc/9FhNVk3M/react-dev-tools.png)

### 🟣 PropTypes

En Vite no viene instalado por defecto:

```bash
yarn add prop-types 

# Para NPM
npm install prop-types
```

`src > FirstTest.jsx`

```jsx
import PropTypes from "prop-types"; 👈👀

const FirstTest = ({
  title,
  subTitle,
  name,
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstTest.propTypes = { 👈👀👇
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
```

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FirstTest } from "./FirstTest";

import "./styles.css"; 👈👀

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstTest
      title 👈👀 // True (valor booleano)
      subTitle={"Subject subtitle"}
    />
  </React.StrictMode>
);
```

### 🟣 DefaultProps

`src > FirstTest.jsx`

```jsx
import PropTypes from "prop-types";

const FirstTest = ({
  title = "No title", 👈👀
  subTitle,
  name,
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstTest.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstTest.defaultProps = {
  subTitle: "New Text", 👈👀
  name: "Ale Roses",
};

export { FirstTest };
```

📌 Nota: El soporte para `defaultProps` será removido y se deberán usar los parámetros predeterminados de JavaScript. Ahora lo aconsejable es colocar el valor por defecto al **desestructurar** directamente las **props** del componente.

### 🟣 Tarea - Componente CounterApp

1. Crear un nuevo componente dentro de la carpeta SRC llamado
    `CounterApp`

2. El `CounterApp` debe de ser un __Functional Component__

3. El contenido del __CounterApp__ debe de ser:
    ```jsx
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    ```

4. Donde `"value"` es una propiedad enviada desde el padre hacia
    el componente __CounterApp__ __(Debe ser númerica validada con PropTypes)__

5. Reemplazar en el `index.js` ó `main.jsx` el componente de `<PrimeraApp />`
    por el componente `<CounterApp />`
        (no se olviden del value que debe de ser un número)

6. Asegúrense de no tener errores ni warnings
    (Cualquier warning no usado, comentar el código)

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={1} />
  </React.StrictMode>
);
```

`src > CounterApp.jsx`

```jsx
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export { CounterApp };
```

[**Tarea - Referencia**](https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757)

### 🟣 Evento click (Eventos en general) + useState - Hook

`src > CounterApp.jsx`

```jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleRest = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRest}>-1</button>
      <button onClick={handleReset}>
        Reset
      </button>
      <h2>{counter}</h2>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export { CounterApp };
```

Esta funcionalidad está disponible en Obsidian:

[[react-js-desde-cero#**12.** Hooks]] 👈👀

![](https://i.postimg.cc/V6tSbM1f/obsidian.png)

[**Reactjs.org - Eventos**](https://es.reactjs.org/docs/events.html)

[**Reactjs.org - Hooks**](https://es.reactjs.org/docs/hooks-intro.html)

[**Ejemplo - Tarea de desestructuración de arreglos**](https://github.com/Klerith/react-intro-javascript/blob/master/src/bases/07-deses-arr.js)

### 🟣 Código fuente de la sección

[**Github - fin-seccion-4**](https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-4)

## 5. Pruebas unitarias y de integración - Probando las secciones anteriores

### 🟣 Introducción a la sección

Probar la ruta crítica:

Probar la ruta crítica de una aplicación se refiere a realizar pruebas exhaustivas y enfocadas en las funciones o flujos de trabajo más críticos o prioritarios dentro de la aplicación. La ruta crítica representa aquellos caminos o secuencias de acciones que deben funcionar correctamente para que la aplicación cumpla con sus objetivos principales.

La idea detrás de probar la ruta crítica es asegurarse de que las funciones esenciales de la aplicación estén correctamente implementadas y sean confiables. Al enfocarse en estos aspectos clave, se puede identificar y solucionar problemas críticos antes de que afecten la experiencia del usuario o el funcionamiento general de la aplicación.

Aquí tienes algunos ejemplos de pruebas de ruta crítica para diferentes tipos de aplicaciones:

1. Aplicación de comercio electrónico:
   - Probar el proceso de inicio de sesión y registro de usuarios.
   - Verificar la funcionalidad del carrito de compras, desde la adición de productos hasta el pago y la generación de una orden.
   - Comprobar la correcta visualización y actualización del inventario de productos.

2. Aplicación bancaria en línea:
   - Realizar pruebas de inicio de sesión y autenticación de usuarios.
   - Probar las funciones de transferencia de fondos, asegurándose de que los saldos se actualicen correctamente.
   - Verificar la visualización precisa del historial de transacciones y la generación de estados de cuenta.

3. Aplicación de reserva de vuelos:
   - Probar la búsqueda y filtrado de vuelos según diferentes criterios, como origen, destino y fechas.
   - Verificar la correcta selección de asientos y opciones de personalización durante el proceso de reserva.
   - Comprobar el flujo de pago, asegurándose de que la transacción se realice correctamente.

### 🟣 Temas puntuales de la sección

**¿Qué veremos en esta sección?**

- Introducción a las pruebas
- AAA
	- Arrange: Arreglar
    - Act: Actuar
    - Assert: Afirmar
- Primeras pruebas
- Jest
- Expect
- toBe
- Enzyme
- Comandos útiles en la terminal para pruebas
- Revisar elementos renderizados en el componente
- Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

### 🟣 Introducción a las pruebas unitarias y de integración

Unitarias: Enfocadas en pequeñas funcionalidades.

Integración: Enfocadas en cómo reaccionan varias piezas en conjunto.

**Características de las pruebas:**

1. Fáciles de escribir
2. Fáciles de leer
3. Confiables
4. Rápidas
5. Principalmente unitarias

Pasos para enfocarnos en que todo trabaje bien entre sí (AAA):
1. Arrange (Arreglar): Inicialización
2. Act (Actuar): Estimulo
3. Assert (Afirmar): Observar el comportamiento

Arrange: Preparamos el estado inicial.
- Inicializamos variables
- Importaciones necesarias

Act: Aplicamos acciones o estímulos.
- Llamar métodos
- Simular clicks
- Realizar acciones sobre el paso anterior

Assert: Observar el comportamiento resultante.
- Son los resultados esperados.
- Ej: Que algo cambie, algo incremente o bien que nada suceda.

### 🟣 Inicio de la sección - Pruebas sobre lo aprendido anteriormente

Para las pruebas usaremos varios ejercicios que vimos en la parte de la introducción a JavaScript. Puedes copiar y pegar la carpeta `bases` del proyecto `02-intro-js` o descargar la carpeta comprimida desde la parte inferior del video. 

Estos archivos los pegamos dentro del `src` del proyecto `03-counter-app`, pero también pueden crear un proyecto totalmente nuevo.

[Download Bases](https://import.cdn.thinkific.com/643563/courses/1901683/basepruebas-220616-140151.zip)

### 🟣 Mi primera prueba y configuraciones iniciales

Para las pruebas usaremos **Jest** y **React Testing Library**, dos herramientas muy populares en el ecosistema de pruebas de JavaScript y React.

#### Jest

##### ¿Qué es Jest?

Jest es un framework de pruebas de JavaScript desarrollado por Facebook. Está diseñado para trabajar con proyectos que utilizan React, aunque también se puede usar para probar aplicaciones JavaScript en general.

##### Características principales de Jest:

- **Configuración mínima**: Jest requiere poca configuración para comenzar a usarlo, lo que facilita su adopción.
- **Velocidad**: Jest ejecuta las pruebas en paralelo para maximizar la velocidad de ejecución.
- **Mocks y Espías**: Proporciona herramientas integradas para crear mocks y espías de funciones.
- **Snapshots**: Permite crear instantáneas del estado de la interfaz en un momento específico para comparar en pruebas futuras.
- **Cobertura de código**: Genera informes de cobertura de código detallados.
- **Watch Mode**: Reejecuta pruebas automáticamente cuando los archivos relacionados cambian.

##### Ejemplo básico de Jest:

```jsx
import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

#### Testing Library

##### ¿Qué es Testing Library?

Testing Library es un conjunto de utilidades para probar componentes de UI de manera accesible y amigable para el usuario. `@testing-library/react` es su implementación específica para React.

##### Filosofía de Testing Library:

- **Centrado en el usuario**: Testing Library fomenta las pruebas que se asemejan a cómo los usuarios interactúan con tu aplicación.
- **Accesibilidad**: Promueve prácticas que mejoran la accesibilidad, como seleccionar elementos por roles, etiquetas y texto visible.
- **Simplicidad**: Proporciona una API simple y ligera que facilita escribir y mantener pruebas.

##### Características principales de Testing Library:

- **Selección de elementos**: Métodos como `getByText`, `getByRole`, `getByLabelText` para seleccionar elementos de manera accesible.
- **Pruebas asincrónicas**: Utilidades como `waitFor` y `findBy` para manejar componentes que actualizan su estado de manera asincrónica.
- **Utilidades de eventos**: `fireEvent` para simular eventos del navegador.

##### Ejemplo básico de Testing Library con Jest:

```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyComponent from './MyComponent';

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button click updates text', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button', { name: /click me/i });
  fireEvent.click(button);
  const updatedText = screen.getByText(/you clicked the button/i);
  expect(updatedText).toBeInTheDocument();
});
```

#### Configurar Jest

Para empezar a usar Jest primero debemos configurarlo, ya que en Vite no vienen configurados por defecto.

Esta configuración solo se hace una vez en cada proyecto. 

```bash
yarn add --dev jest
```

Añadimos el script de ejecución dentro del archivo `package.json`.

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest" 👈👀
  },
```

Dentro de la carpeta de nuestro proyecto creamos una carpeta llamada `tests`. Este será como un espejo del `src`.

Ahora podemos hacer una demostración de como funcionan los test.

`tests > demo.test.js`

```js
test("Esta prueba no debe de fallar", () => {
  if (0 === 1) {
    throw new Error("No puede dividir entre cero");
  }
});
```

Para correr las pruebas ejecutamos: 

```bash
yarn test
```

Si no queremos ingresar `yarn test` cada vez que queramos ejecutar las pruebas, solo debemos agregar lo siguiente en el archivo `package.json`.

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest --watchAll" 👈👀
  },
```

Ahora, al ejecutar `yarn test` se quedará escuchando cuando hagamos un cambio.

Mi estructura quedó algo así (cree un proyecto desde cero):

```bash
.
├── index.html
├── node_modules
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── bases 👈👀
│   │   ├── 01-const-let.js
│   │   ├── 02-backticks.js
│   │   ├── 03-obj-literal.js
│   │   ├── 04-array.js
│   │   ├── 05-functions.js
│   │   ├── 06-desest-obj.js
│   │   ├── 07-desest-arr.js
│   │   ├── 08-imp-exp.mjs
│   │   ├── 09-promises.js
│   │   ├── 10-fetch.js
│   │   ├── 11-async-await.js
│   │   └── 12-conditional-ternary.js
│   ├── index.css
│   └── main.jsx
├── tests 👈👀👇
│   └── demo.test.js
├── vite.config.js
└── yarn.lock
```

[jestjs](https://jestjs.io/)

[Jestjs getting-started](https://jestjs.io/docs/getting-started)

### 🟣 Jest - Expect - toBe

#### `describe`

`describe` es una función en Jest que permite agrupar pruebas relacionadas bajo un mismo bloque. Esto facilita la organización y lectura de las pruebas, especialmente cuando tienes múltiples casos de prueba para una misma unidad funcional o componente.

```jsx
describe('Math functions', () => {
  // Tests relacionados con funciones matemáticas irán aquí
});
```

##### Ejemplo:

```jsx
describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('subtracts 2 - 1 to equal 1', () => {
    expect(2 - 1).toBe(1);
  });
});
```

#### `test`

`test` es una función en Jest que define un caso de prueba individual. También puedes usar `it` como un alias para `test`. Cada caso de prueba contiene una descripción y una función que ejecuta las expectativas para esa prueba.

```jsx
test('description of the test', () => {
  // código de la prueba
});
```

##### Ejemplo:

```jsx
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
```

#### `expect`

`expect` es una función en Jest que se utiliza para hacer afirmaciones en tus pruebas. Recibe un valor y devuelve un conjunto de métodos (matchers) que permiten comprobar diferentes condiciones sobre ese valor.

```jsx
expect(value).matcherMethod();
```

##### Ejemplo:

```jsx
expect(1 + 2).toBe(3);
```

##### Matchers comunes de `expect`

- **`.toBe(value)`**: Comprueba que el valor sea exactamente igual al valor esperado (usando `===`).
    
    ```jsx
    expect(2 + 2).toBe(4);
    ```
    
- **`.toEqual(value)`**: Comprueba que el valor sea igual al valor esperado, para objetos y arrays (usando comparación profunda).
    
    ```jsx
    const obj = { a: 1 };
    expect(obj).toEqual({ a: 1 });
    ```
    
- **`.toBeTruthy()`**: Comprueba que el valor sea verdadero en un contexto booleano.
    
    ```jsx
    expect(true).toBeTruthy();
    ```
    
- **`.toContain(item)`**: Comprueba que un array o string contenga un elemento específico.
    
    ```jsx
    const shoppingList = ['milk', 'bread', 'eggs'];
    expect(shoppingList).toContain('milk');
    ```

#### Ejemplo completo utilizando `describe`, `test` y `expect`

```jsx
describe('Array operations', () => {
  test('array contains milk', () => {
    const shoppingList = ['milk', 'bread', 'eggs'];
    expect(shoppingList).toContain('milk');
  });

  test('sum of numbers is correct', () => {
    expect(1 + 2).toBe(3);
  });

  test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test('null value is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
  });
});
```

En nuestro proyecto, añadimos ayudas o intelligent a Visual Studio Code.

```bash
yarn add -D @types/jest
```

`tests > demo.test.js`

```jsx
describe("Tests on the <DemoComponent/>", () => {
  test("This test must not fail", () => {
    // 1. Initialization
    const message1 = "Hi world";

    // 2. Stimulus
    const message2 = message1.trim();

    // 3. Observe expected behavior
    expect(message1).toBe(message2); 👈👀
  });
});
```

[Jest Expect](https://jestjs.io/docs/expect#reference)

### 🟣 Nota de Actualización - Extensión de archivos

En la siguiente clase se hace la configuración para las pruebas de nuestros distintos archivos, en caso de ver el error:

```bash
You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.
```
  
Cambiar extensión de los archivos `jest.config.js` y `babel.config.js` a `.cjs`
  
Para ver más detalles al respecto pueden ir a [https://nodejs.org/docs/latest/api/modules.html#enabling](https://nodejs.org/docs/latest/api/modules.html#enabling "https://nodejs.org/docs/latest/api/modules.html#enabling").

### 🟣 Pruebas en el archivo `02-template-string.js`

Configuración de Babel: Esto instala las dependencias necesarias para integrar Babel con Jest y permitir que Jest transforme el código ES6+ durante las pruebas.

```bash
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Al usar Babel con Jest, puedes escribir tu código de pruebas utilizando las últimas características de JavaScript, y Babel se encargará de transformar ese código a una versión que Jest pueda ejecutar. Esto es especialmente útil si estás utilizando sintaxis moderna de JavaScript que no es compatible de manera nativa con la versión de Node.js que estás usando para ejecutar tus pruebas.

Creamos el archivo `babel.config.cjs`

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
};
```

- **`module.exports`**: Esto exporta la configuración para que Babel pueda usarla.
    
- **`presets`**: Los presets son conjuntos de plugins de Babel que permiten transformar el código JavaScript de manera específica.
    
- **`["@babel/preset-env", { targets: { node: "current" } }]`**: Aquí se está utilizando el preset `@babel/preset-env` con una configuración específica. El objeto `{ targets: { node: "current" } }` le dice a Babel que transforme el código para que sea compatible con la versión actual de Node.js que se está utilizando para ejecutar las pruebas.

[Using Babel](https://jestjs.io/docs/getting-started#using-babel)

`src > bases > 02-backticks.js`

```jsx
function getGreeting(name) {
  return "Hi " + name;
}

export { getGreeting };
```

Creamos una carpeta para las pruebas:

```bash
├── tests 
│   └── bases 👈👀
│   │   ├── 01-const-let.js
│   │   ├── 02-backticks.js
│   │   ├── 03-obj-literal.js
│   │   ├── 04-array.js
│   │   ├── 05-functions.js
│   │   ├── 06-desest-obj.js
│   │   ├── 07-desest-arr.js
│   │   ├── 08-imp-exp.mjs
│   │   ├── 09-promises.js
│   │   ├── 10-fetch.js
│   │   ├── 11-async-await.js
│   │   └── 12-conditional-ternary.js
```

`test > base-pruebas > 02-template-string.test.js`

```jsx
import { getGreeting } from "../../src/bases/02-backticks";

describe("Test on 02-template-string", () => {
  test("getGreeting should return a greeting. ", () => {
    const name = "Ale Roses";
    const message = getGreeting(name);

    expect(message).toBe(`Hi ${name}`);
  });
});
```

En la terminal podremos usar `w` para mostrar más opciones y `p` para buscar el nombre del archivo a probar.

```bash
Watch Usage: Press w to show more.
```

```bash
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

### 🟣 toEqual

`toEqual` es un matcher en Jest que se utiliza para verificar que dos valores son equivalentes en contenido. A diferencia de `toBe`, que usa el operador de igualdad estricta (`===`) y verifica que los dos valores comparados son exactamente el mismo objeto o valor primitivo, `toEqual` realiza una comparación profunda. Esto significa que verifica que los valores dentro de **objetos** y **arrays** sean los mismos, no que los objetos o arrays sean exactamente el mismo objeto en memoria.

También sirve el `toStrictEqual`.

#### Comparación con `toBe`

- **`toBe`**: Usa el operador `===` y verifica que los valores sean exactamente los mismos en términos de identidad.
    
    ```jsx
    test('toBe with primitive values', () => {
      expect(1 + 2).toBe(3);
    });
    
    test('toBe with objects fails', () => {
      const obj = { a: 1 };
      expect(obj).toBe({ a: 1 }); // Falla porque no son el mismo objeto en memoria
    });
    ```
    
- **`toEqual`**: Realiza una comparación profunda para verificar la equivalencia de contenido.
    
    ```jsx
    test('toEqual with objects', () => {
      const obj = { a: 1 };
      expect(obj).toEqual({ a: 1 }); // Pasa porque los contenidos son iguales
    });
    ```

📌 `toEqual` es muy útil para verificar que estructuras complejas de datos, como objetos y arrays, tienen el mismo contenido, sin preocuparse por si son exactamente la misma referencia en memoria.

Ahora veamos nuestro proyecto...

`src > bases > 05-functions.js`

```js
const getUser = () => ({
  uid: "ABC123",
  username: "The-crazy-man",
});

const getActiveUser = (name) => ({
  uid: "ABC567",
  username: name,
});

export { getUser, getActiveUser };
```

`test > bases > 05-functions.test.js`

```js
import {
  getActiveUser,
  getUser,
} from "../../src/bases/05-functions";

describe("Test on 05-functions", () => {
  test("getUser should return a object", () => {
    const testUser = {
      uid: "ABC123",
      username: "The-crazy-man",
    };

    const user = getUser();

    expect(user).toEqual(testUser); 👈👀
  });

  test("getActiveUser should return an object", () => {
    const data = "Ale Roses";
    const activeUser = (name) => ({
      uid: "ABC567",
      username: name,
    });
    const testUser = getActiveUser(data);

    expect(activeUser(data)).toEqual(testUser); 👈👀
  });
});
```

### 🟣 Pruebas en el archivo `07-deses-arr.js`

`src > bases > 07-desest-arr.js`

```jsx
const showArray = () => {
  return ["ABC", 123];
};

export { showArray };
```

`test > bases > 07-desest-arr.test.js`

```jsx
import { showArray } from "../../src/bases/07-desest-arr";

describe("Test on 07-desest-arr", () => {
  test("showArray should return a string and a number", () => {
    const [letters, numbers] = showArray();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String)); 👈👀
  });
});
```

**`expect.any(String)`**: Verifica que el valor es cualquier cadena de texto.

📌 La línea `expect(letters).toEqual(expect.any(String));` no está anidando los `expect`. En lugar de eso, se está utilizando el matcher `expect.any` como un argumento para `toEqual`.

Vamos a desglosarlo y luego hablaré sobre el matcher `any`.

- **`expect(letters)`**: Esto crea una expectativa sobre la variable `letters`.
- **`.toEqual(...)`**: Este matcher verifica que el valor de `letters` sea igual al valor esperado que se pasa como argumento.
- **`expect.any(String)`**: Este matcher especial se utiliza para verificar que el valor sea de cualquier tipo de `String`.

El matcher `expect.any` se pasa como argumento a `toEqual`, lo que significa que Jest verificará que `letters` sea cualquier cadena de texto, no una cadena específica. No hay anidamiento de `expect` aquí; simplemente se está usando `expect.any` dentro de `toEqual`.

#### ¿Qué es `expect.any`?

`expect.any(constructor)` es un matcher en Jest que se utiliza para verificar que un valor es de un tipo específico, sin preocuparse por el valor exacto. El `constructor` puede ser cualquier función constructora como `String`, `Number`, `Object`, `Array`, etc.

```jsx
expect.any(constructor)
```

Donde `constructor` es una función constructora para el tipo de valor que estás verificando.

#### Ejemplos de uso

##### Verificar que el valor es una cadena

```jsx
test('value is a string', () => {
  const value = 'Hello, world!';
  expect(value).toEqual(expect.any(String));
});
```

##### Verificar que el valor es un número

```jsx
test('value is a number', () => {
  const value = 123;
  expect(value).toEqual(expect.any(Number));
});
```

##### Verificar que el valor es un objeto

```jsx
test('value is an object', () => {
  const value = { key: 'value' };
  expect(value).toEqual(expect.any(Object));
});
```

##### Verificar que el valor es un array

```jsx
test('value is an array', () => {
  const value = [1, 2, 3];
  expect(value).toEqual(expect.any(Array));
});
```

#### Uso combinado con otros matchers

`expect.any` puede ser utilizado con otros matchers para crear expectativas más flexibles. Aquí hay algunos ejemplos:

##### Verificar propiedades de un objeto

```jsx
test('object has properties with specific types', () => {
  const user = {
    name: 'John Doe',
    age: 30,
  };

  expect(user).toEqual({
    name: expect.any(String),
    age: expect.any(Number),
  });
});
```

##### Verificar elementos de un array

```jsx
test('array contains elements of specific types', () => {
  const items = ['apple', 'banana', 'cherry'];

  expect(items).toEqual([
    expect.any(String),
    expect.any(String),
    expect.any(String),
  ]);
});
```

### 🟣 Pruebas en `08-imp-exp.js - Arreglos`

#### `toBeFalsy()`

`toBeFalsy()` es un matcher en Jest que se utiliza para verificar que un valor sea "falsy" en JavaScript. En JavaScript, los valores "falsy" son aquellos que se consideran falsos cuando se evalúan en un contexto booleano. Estos valores son:

- `false`
- `0`
- `""` (cadena vacía)
- `null`
- `undefined`
- `NaN`

Cualquier valor que no esté en esta lista es considerado "truthy" (es decir, se considera verdadero en un contexto booleano).

```javascript
expect(valor).toBeFalsy();
```

Esto verifica que el `valor` proporcionado sea uno de los valores "falsy" mencionados anteriormente.

##### Ejemplo con `false`

```javascript
test('false is falsy', () => {
  const value = false;
  expect(value).toBeFalsy();
});
```

##### Ejemplo con `0`

```javascript
test('0 is falsy', () => {
  const value = 0;
  expect(value).toBeFalsy();
});
```

##### Ejemplo con una cadena vacía

```javascript
test('empty string is falsy', () => {
  const value = '';
  expect(value).toBeFalsy();
});
```

##### Ejemplo con `null`

```javascript
test('null is falsy', () => {
  const value = null;
  expect(value).toBeFalsy();
});
```

##### Ejemplo con `undefined`

```javascript
test('undefined is falsy', () => {
  const value = undefined;
  expect(value).toBeFalsy();
});
```

##### Ejemplo con `NaN`

```javascript
test('NaN is falsy', () => {
  const value = NaN;
  expect(value).toBeFalsy();
});
```

##### Comparación con `toBeTruthy()`

- **`toBeFalsy()`**: Verifica que el valor sea "falsy" (uno de los valores mencionados arriba).
- **`toBeTruthy()`**: Verifica que el valor sea "truthy" (cualquier valor que no sea falsy, como objetos, arrays, números distintos de 0, cadenas no vacías, etc.).

Ejemplo con `toBeTruthy()`:

```javascript
test('truthy value', () => {
  const value = 'hello';
  expect(value).toBeTruthy(); // Pasa porque 'hello' es un valor truthy
});
```

#### `toStrictEqual()`

`toStrictEqual()` es un matcher en Jest que verifica que dos valores sean **profundamente iguales**, no solo en el contenido, sino también en su tipo y estructura exacta. A diferencia de `toEqual()`, que realiza una comparación profunda de los valores pero permite cierto tipo de flexibilidad (como permitir que dos objetos con el mismo contenido pero diferentes instancias sean considerados iguales), `toStrictEqual()` es más estricto en la comparación.

- Compara los valores de manera profunda.
- Verifica que las propiedades y los tipos de los objetos sean exactamente iguales.
- Asegura que las propiedades del objeto sean del mismo tipo (por ejemplo, `undefined` no será igual a `null`).

##### Comparación de objetos

```javascript
test('toStrictEqual compares objects', () => {
  const obj1 = { name: 'John', age: 30 };
  const obj2 = { name: 'John', age: 30 };
  expect(obj1).toStrictEqual(obj2);  // Pasa, los objetos son idénticos en contenido y tipo
});
```

##### Diferencia en tipo

```javascript
test('toStrictEqual checks type differences', () => {
  const obj1 = { value: null };
  const obj2 = { value: undefined };
  expect(obj1).not.toStrictEqual(obj2);  // Falla, porque `null` no es igual a `undefined`
});
```

##### Comparación de arrays

```javascript
test('toStrictEqual compares arrays', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr1).toStrictEqual(arr2);  // Pasa, los arrays son iguales
});
```

#### Comparación con `toEqual()`

- **`toEqual()`**: Realiza una comparación profunda, pero permite más flexibilidad en cuanto a la estructura interna de los objetos.
- **`toStrictEqual()`**: Más estricto, asegura que la estructura interna, los tipos y las propiedades sean exactamente iguales.

En nuestro proyecto...

`src > bases > 08-imp-exp.js`

```jsx
import { heroes } from "../data/heroes.js";

const getHeroById = (id) => {
  return heroes.find((value) => value.id === id);
};

const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

export { getHeroById, getHeroesByOwner };
```

`test > bases > 08-imp-exp.test.js`

```jsx
import {
  getHeroById,
  getHeroesByOwner,
} from "../../src/bases/08-imp-exp.js";
import { heroes } from "../../src/data/heroes.js";

describe("Test on 08-imp-exp", () => {
  test("getHeroById should return a hero by Id", () => {
    const id = 1;
    const hero = getHeroById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroById should return undefinded if the id doesn't exist", () => {
    const id = 11;
    const hero = getHeroById(id);

    expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();

    // false is considered a false value
    expect(false).toBeFalsy(); 👈👀
  });

  // Task
  test("getHeroesByOwner should return an array of DC heroes", () => {
    const owner = "DC";
    const newHeroes = getHeroesByOwner(owner);
    const dcHeroes = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    expect(newHeroes.length).toBe(3);
    expect(newHeroes).toStrictEqual(dcHeroes); 👈👀

    // Actual method
    expect(newHeroes).toEqual(
      heroes.filter((hero) => hero.owner === owner)
    );
  });
});
```

Creamos una carpeta data y añadimos el archivo `heroes.js`.

> En caso trabajaste con la extensión `.mjs` tener cuidado porque para las pruebas debe estar en `.js` de lo contrario fallará.

[**heroes.js - Gist**](https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f)

### 🟣 Pruebas con tareas asíncronas

Por defecto Jest trabaja con pruebas síncronas o sea ejecuta el código en secuencia y cuando encuentra una promesa este la ejecuta, pero luego sigue ejecutando el código siguiente y al llegar al final recién arroja el error.

`src > bases > 09-promises.js`

```jsx
import { getHeroById } from "./08-imp-exp.js";

const getHeroByIdAsync = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = getHeroById(id);

      data ? resolve(data) : reject("Id not found " + id);
    }, 1000);
  });

  return promise;
};

export { getHeroByIdAsync };
```

`src > bases > 09-promises.test.js`

```jsx
import { getHeroByIdAsync } from "../../src/bases/09-promises";

describe("Test on 09-promises", () => {
  test("09-promises should return a hero", (done) => {
    const id = 1;

    getHeroByIdAsync(id).then((hero) => {
      // expect(true).toBe(false);

      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("09-promises should return an error if Hero doesn't exist", (done) => {
    const id = 12;

    getHeroByIdAsync(id)
      .then((hero) => {
        // expect(true).toBe(false);

        expect(hero).toBeFalsy();

        done();
      })
      .catch((error) => {
        expect(error).toBe(`Id not found ${id}`);

        done();
      });
  });
});
```

---
El uso de `done` en el contexto del ejemplo de prueba anterior se relaciona con la forma en que Jest maneja pruebas asíncronas. Vamos a desglosarlo en detalle.

#### `done` en Pruebas Asíncronas

La función de prueba visto en el ejemplo está probando un comportamiento asíncrono: una promesa que se resuelve o se rechaza. Cuando trabajas con código asíncrono en pruebas, Jest necesita saber cuándo la prueba ha terminado de ejecutarse. Por defecto, Jest no sabe cuándo debe considerar una prueba asíncrona como completada, por lo que proporciona el mecanismo `done` para manejar esto.

#### Detalle del Uso de `done`

1. **Declaración de la Prueba**: La función de prueba recibe `done` como un argumento. Esto indica a Jest que la prueba es asíncrona y que no debe finalizar la prueba hasta que se llame a `done`.
    
2. **Promesa Asíncrona**:
    
    - La función `getHeroByIdAsync(id)` devuelve una promesa.
    - **Caso de Éxito (`then`)**:
        - Si la promesa se resuelve, se llama al bloque `then` con el `hero` resultante.
        - `expect(hero).toBeFalsy()` verifica que `hero` es falsy.
        - Finalmente, `done()` se llama para indicar que la prueba ha terminado correctamente.
    - **Caso de Error (`catch`)**:
        - Si la promesa se rechaza, se llama al bloque `catch` con el `error` resultante.
        - `expect(error).toBe(\`Id not found ${id}`)` verifica que el error es el esperado.
        - Finalmente, `done()` se llama para indicar que la prueba ha terminado correctamente.
3. **Importancia de `done`**:
    
    - **Sin `done`**: Jest no sabría cuándo la prueba ha terminado. Puede que Jest termine la prueba antes de que la promesa se resuelva o se rechace, lo que llevaría a falsos negativos o pruebas incompletas.
    - **Con `done`**: Garantiza que Jest espera hasta que se llame a `done` antes de considerar la prueba como completada. Esto es crucial para asegurar que todas las verificaciones dentro de la promesa se ejecuten antes de finalizar la prueba.

#### Alternativa con `async`/`await`

En lugar de usar `done`, podrías escribir la prueba utilizando `async`/`await` para hacerla más limpia y evitar el manejo explícito de `done`. Aquí hay un ejemplo de cómo hacerlo:

```javascript
test("09-promises should return an error if Hero doesn't exist", async () => {
  const id = 12;

  try {
    const hero = await getHeroByIdAsync(id);
    expect(hero).toBeFalsy();
  } catch (error) {
    expect(error).toBe(`Id not found ${id}`);
  }
});
```

### 🟣 Pruebas con async-await

#### `whatwg-fetch`

`whatwg-fetch` es un paquete (polyfill) que implementa el estándar **Fetch API** en navegadores que no tienen soporte nativo para ello. La API `fetch` proporciona una forma más moderna y poderosa de realizar solicitudes de red, reemplazando a `XMLHttpRequest`.

Si tu proyecto necesita trabajar en navegadores antiguos que no soportan `fetch` (por ejemplo, Internet Explorer), entonces usar un polyfill como `whatwg-fetch` asegura que tu código funcione de manera consistente.

Instalamos:

```bash
yarn add -D whatwg-fetch
```

📌 **`-D`**: Es un atajo de `--dev`, que indica que la dependencia que estás agregando es para el entorno de desarrollo. Las dependencias de desarrollo son aquellas que solo se utilizan durante el proceso de desarrollo y no son necesarias en el entorno de producción. Se agregan al archivo `devDependencies` en el `package.json`.

Creamos el archivo `jest.config.cjs` y el archivo `jest.setup.js` todo en la raíz del proyecto.

`jest.config.cjs` 

```jsx
module.exports = {
  // TODO: jsdom,
  setupFiles: ["./jest.setup.js"],
};
```

📌 Para esta configuración podemos ir a [Jestjs.io](https://jestjs.io/blog/2020/05/05/jest-26) y buscar `jest.config`.

`jest.setup.js`

```js
## En caso de usar node en version menor a la 18
import "whatwg-fetch";
```

Para este ejemplo usaremos al APIKEY de GIPHY que generamos en clases pasadas.

`src > bases > 11-async-await.js`

```jsx
const getImage = async () => {
  try {
    const apiKey = "fEOnnEkSzI8fEOmMc09dfEOFt9fEO";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    console.error(error);
    return "Image not found";
  }
};

// getImage();

export { getImage };
```

`src > bases > 11-async-await.test.js`

```jsx
import { getImage } from "../../src/bases/11-async-await";

describe("Test on 11-async-await", () => {
  test("getImage should return an image Url", async () => {
    const url = await getImage();

    expect(typeof url).toBe("string");
  });
});
```

### 🟣 Evaluar el Catch en el async-await

En nuestro ejemplo, estamos esperando que la respuesta sea una `url` que es un `string`. Para evaluar el `catch` solo podemos añadir el mensaje esperado dentro de nuestras pruebas.

`src > bases > 11-async-await.js`

```jsx
```

`src > bases > 11-async-await.test.js`

```jsx
import { getImagen } from "../../src/basic-tests/11-async-await";

describe("Test on 11-async-await", () => {
  test("getImagen should return an url", async () => {
    const url = await getImagen();
    // console.log(url);

    expect(typeof url).toBe("string");
    expect(url).toBe("Image not found"); 👈👀
  });
});
```

### 🟣 Pruebas sobre componentes de React

Usaremos **Testing Library / React Testing Library** para hacer pruebas sobre componentes propios de React, ya que es muy bueno para manejar el DOM virtual.

**Testing Library** está más enfocado en lo que sucede en la pantalla después de hacer alguna interacción, en cambio, **Jest** está más enfocado u orientado a hacer las **aserciones** de funciones que se necesitan evaluar.

📌 **Aserción:** Acción y efecto de afirmar o dar por cierto algo.

```bash
## Comando actual para React TL + DOM TL
yarn add --dev @testing-library/react @testing-library/dom

## También se encontra por separado
yarn add --dev @testing-library/dom

## Este comando es antiguo
yarn add --dev @testing-library/react
```

Para el siguiente ejemplo usaremos el componente `FirstApp.jsx`.

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { FirstTest } from "./FirstTest.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstTest />
  </React.StrictMode>
);
```

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

[Testing React Apps: DOM Testing](https://jestjs.io/docs/tutorial-react#dom-testing)

### 🟣 Pruebas en FirstApp - Componentes de React

Para continuar con las pruebas debemos instalar lo siguiente, **cerrar todo y volver a iniciar los Test.**

```bash
yarn add -D jest-environment-jsdom
yarn add -D @babel/preset-react
```

1. **`yarn add -D jest-environment-jsdom`**

Este comando instala el paquete `jest-environment-jsdom` como una dependencia de desarrollo (`-D` o `--dev`). Veamos qué hace:

- **`jest-environment-jsdom`**: Este paquete proporciona un entorno de ejecución simulado para pruebas en Jest basado en **jsdom**. **jsdom** es una implementación de un navegador web en JavaScript, lo que permite simular el DOM (Document Object Model) de un navegador en un entorno de Node.js.
    
    Jest, por defecto, usa **jsdom** para simular el entorno de un navegador cuando ejecutas pruebas que interactúan con el DOM. Instalar `jest-environment-jsdom` garantiza que Jest pueda ejecutar pruebas de forma adecuada en un entorno simulado, incluso si no es la configuración predeterminada.
    

Si tu proyecto usa **Jest** para pruebas y necesitas un entorno de navegador (como si estuvieras probando componentes React o manipulando el DOM), **jsdom** es útil porque simula el DOM de un navegador, permitiendo hacer pruebas de manera eficiente sin tener un navegador real.
    
Esto es especialmente útil cuando trabajas con bibliotecas o aplicaciones que interactúan con el DOM, como React.

#### Ejemplo de uso:

```javascript
// En tu archivo de configuración de Jest (por ejemplo, jest.config.js)
module.exports = {
  testEnvironment: 'jsdom',
};
```

De forma predeterminada, Jest ya usa jsdom, pero si lo necesitas explícitamente o tienes una configuración personalizada, este paquete asegura que Jest se ejecute con el entorno adecuado.

2. **`yarn add -D @babel/preset-react`**

Este comando instala el paquete **`@babel/preset-react`** como dependencia de desarrollo. Vamos a explicarlo:

- **`@babel/preset-react`**: Este es un preset de Babel que permite que Babel transpile (o convierta) el código JSX y características específicas de React a código JavaScript que los navegadores puedan entender. JSX es una sintaxis que permite escribir código que se parece a HTML dentro de JavaScript, pero los navegadores no lo entienden directamente. Por eso, Babel necesita transpilar ese código para que sea compatible con los navegadores.

¿Por qué es necesario?

Si estás utilizando React en tu proyecto, los archivos que contienen JSX necesitan ser transformados en JavaScript puro que los navegadores puedan ejecutar. Este preset de Babel se asegura de que tu código JSX se transforme correctamente durante el proceso de compilación.

En tu archivo de configuración de Babel (por ejemplo, `babel.config.cjs`), agrega el preset:
    
```javascript
// Esto es un ejemplo, mas abajo encontraras la configuración que se usó en el curso
module.exports = {
  presets: [
    "@babel/preset-env", // Para convertir ES6+ a código compatible con navegadores antiguos
    "@babel/preset-react", // Para convertir JSX y características de React
  ],
};
```

Esto configurará Babel para que pueda entender y convertir JSX a código JavaScript estándar que los navegadores puedan ejecutar.

📌 Al hacer las instalaciones aparece un **Warning** relacionado con los `defaultProps` usados en clases anteriores. Lo que hice fue comentar esa parte del código y listo.

En nuestro proyecto...

`jest.config.cjs`

```jsx
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};
```

`babel.config.cjs`

```jsx
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { FirstTest } from "./FirstTest";  👈👀

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstTest title="Ale Roses" subtitle={246} />  👈👀
  </React.StrictMode>
);
```

`src > FirstTest.jsx`

```jsx
import PropTypes from "prop-types";

const FirstTest = ({
  title = "No title",
  subTitle,
  name,
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
    </>
  );
};

// Comment on this part, it is obsolete.
FirstTest.propTypes = {  👈👀
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

// defaultProps throws an error
FirstTest.defaultProps = { 👈👀
  // title: "No title",
  subTitle: "New Text",
  name: "Ale Roses",
};

export { FirstTest };
```

`test > FirstTest.test.jsx`

```jsx
import { render } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("FirstApp tests", () => {
  test("It should match the snapshot", () => {
    // snapshot: instantánea captura

    render(<FirstTest title="Ale Roses" subtitle={246} />);
  });
});
```

En la actualidad aparece el siguiente **Warning** al tratar de usar `defaultProps`:

```bash
Warning: FirstTest: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
        at title (/home/ghost/Desktop/FH/x-test/src/FirstTest.jsx:4:3)
```

Para evitar esto solo agrega los `defaultProps` de la siguiente manera:

```jsx
import PropTypes from "prop-types";

const FirstTest = ({ 👈👀👇
  title = "No title",
  subTitle = "New Text",
  name = "Ale Roses",
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstTest.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export { FirstTest };
```

[DOM Manipulation JEST](https://jestjs.io/docs/next/tutorial-jquery)

[Babel Preset React](https://babeljs.io/docs/babel-preset-react)

### 🟣 Probar FirstApp: `toMatchSnapshot`

Veamos cómo funcionan `render`, `container` y `getByText` con `@testing-library/react`, así como los métodos de aserción `toBeTruthy()`, `toBe()` y `toContain()` de Jest.

#### @testing-library/react

##### `render`
La función `render` de `@testing-library/react` se utiliza para renderizar componentes React en el DOM para que puedan ser probados. Al usar `render`, obtienes un conjunto de utilidades para interactuar con el componente renderizado.

##### `container`
El objeto `container` es una propiedad devuelta por `render`. Representa el contenedor del DOM donde el componente fue renderizado. Puedes usarlo para acceder directamente al árbol del DOM y realizar manipulaciones o inspecciones.

##### `getByText`
`getByText` es una función proporcionada por `@testing-library/react` que permite seleccionar elementos en el DOM en función de su contenido de texto. Es útil para verificar que el contenido renderizado coincide con lo esperado.

##### Ejemplo de uso

```jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para tener los matchers extendidos como toBeInTheDocument
import MyComponent from './MyComponent';

test('renders learn react link', () => {
  const { container, getByText } = render(<MyComponent />);
  
  // Usando container
  const element = container.querySelector('.some-class');
  expect(element).not.toBe(null);

  // Usando getByText
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

En este ejemplo, `render` se usa para renderizar `MyComponent`. Luego, se utilizan `container` y `getByText` para seleccionar elementos en el DOM y hacer aserciones sobre ellos.

#### Métodos de aserción

##### `toBeTruthy()`
`toBeTruthy()` verifica que el valor que se está probando es "verdadero" en el contexto booleano. Es decir, cualquier valor que no sea `null`, `undefined`, `false`, `0`, `NaN`, o una cadena vacía se considera "truthy".

```jsx
test('value is truthy', () => {
  const value = 'hello';
  expect(value).toBeTruthy(); // Pasa porque 'hello' es truthy
});
```

##### `toBe()`
`toBe()` verifica que el valor que se está probando es exactamente igual (usando `Object.is`) al valor esperado. Es útil para comparar valores primitivos y objetos inmutables.

```jsx
test('value is exactly equal to 4', () => {
  const value = 4;
  expect(value).toBe(4); // Pasa porque 4 es igual a 4
});
```

##### `toContain()`
`toContain()` verifica que una matriz o cadena contiene un elemento específico.

Para matrices:

```jsx
test('array contains the value', () => {
  const array = [1, 2, 3];
  expect(array).toContain(2); // Pasa porque 2 está en la matriz
});
```

Para cadenas:

```jsx
test('string contains the substring', () => {
  const string = 'hello world';
  expect(string).toContain('world'); // Pasa porque 'world' está en la cadena
});
```

#### Entonces…

- **`render`**: Renderiza un componente React y devuelve utilidades para interactuar con él.
- **`container`**: Es el contenedor del DOM donde el componente fue renderizado.
- **`getByText`**: Selecciona elementos del DOM en función de su contenido de texto.
- **`toBeTruthy()`**: Verifica que el valor es "verdadero" en contexto booleano.
- **`toBe()`**: Verifica que el valor es exactamente igual al esperado.
- **`toContain()`**: Verifica que una matriz o cadena contiene un elemento específico.

#### `toMatchSnapshot()`

`toMatchSnapshot()` es una función de Jest que se utiliza para realizar pruebas de instantáneas (snapshots). Las pruebas de instantáneas son una forma de guardar el estado de una salida específica (por ejemplo, el resultado renderizado de un componente React) en un archivo de instantánea y luego compararlo con futuras ejecuciones de pruebas para detectar cambios inesperados.

1. **Captura Inicial**: La primera vez que ejecutas una prueba con `toMatchSnapshot()`, Jest guarda la salida de la prueba en un archivo de instantánea. Este archivo se guarda en una carpeta `__snapshots__` dentro de tu estructura de pruebas.
    
2. **Comparación**: En ejecuciones posteriores de la prueba, Jest compara la salida actual con la instantánea guardada. Si hay diferencias, la prueba falla, indicando que algo ha cambiado.
    
3. **Actualización**: Si el cambio en la salida es intencional (por ejemplo, después de actualizar un componente), puedes actualizar la instantánea para reflejar el nuevo estado esperado.

##### Ejemplo de uso

Supongamos que tienes un componente React que deseas probar.

```jsx
import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('MyComponent matches snapshot', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

En este ejemplo:

1. **Renderizado**: El componente `MyComponent` se renderiza utilizando `react-test-renderer`.
2. **Conversión a JSON**: La salida renderizada se convierte a una estructura de datos JSON.
3. **Verificación de la instantánea**: `expect(tree).toMatchSnapshot()` compara la estructura renderizada con la instantánea guardada.

##### Ventajas de las pruebas de instantáneas

- **Detección de cambios no intencionados**: Las pruebas de instantáneas son útiles para detectar cambios accidentales en la salida de tus componentes. Si un cambio en el código provoca una diferencia en la salida, la prueba fallará.
    
- **Documentación visual**: Las instantáneas actúan como una forma de documentación visual, mostrando cómo se espera que luzca la salida en un momento dado.
    
- **Fácil de actualizar**: Si haces cambios intencionales en tu componente y la instantánea necesita ser actualizada, puedes actualizar fácilmente las instantáneas usando el comando de Jest `--updateSnapshot` o `-u`.

##### Cómo actualizar instantáneas

Si has cambiado intencionalmente la salida de un componente y necesitas actualizar la instantánea, puedes ejecutar:

```bash
jest --updateSnapshot
```

Esto actualizará las instantáneas para que reflejen el nuevo estado esperado.

📌 Al usar `toMatchSnapshot` se crea una carpeta llamada `__snapshots__` con las instantáneas o capturas del componente asociado.

Esto permite verificar que el código está tal cual como lo creamos y que no se eliminaron líneas. Si eliminas algunas, verás que esto se refleja en la consola.

En caso el cambio hecho en el código sea intencional, puedes presionar `u` en la consola para actualizar los cambios en el `__snapshots__`.

La estructura es la siguiente:

```bash
├── src
│   ├── App.jsx
│   ├── basic-tests
│   │   ├── 02-template-string.js
│   │   ├── 05-funciones.js
│   │   ├── 06-deses-obj.js
│   │   ├── 07-deses-arr.js
│   │   ├── 08-imp-exp.js
│   │   ├── 09-promesas.js
│   │   └── 11-async-await.js
│   ├── CounterApp.jsx
│   ├── data
│   │   └── heroes.js
│   ├── FirstApp.jsx 🔥
│   ├── main.jsx
│   └── styles.css
├── tests
│   ├── basic-tests
│   │   ├── 02-template-string.test.js
│   │   ├── 05-functions.test.js
│   │   ├── 07-deses-arr.test.js
│   │   ├── 08-imp-exp.test.js
│   │   ├── 09-promises.test.js
│   │   └── 11-async-await.test.js
│   ├── demo.test.js
│   ├── FirstApp.test.jsx 🔥
│   └── __snapshots__ 👈👀👇
│       └── FirstApp.test.jsx.snap 🔥
├── vite.config.js
└── yarn.lock
```

`test > FirstTest.test.jsx`

```jsx
import { render } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("FirstApp tests", () => {
  test("It should match the snapshot", () => {
    // snapshot: instantánea, captura

    const message = "Hi i'm Ale Roses";
    const { container } = render(
      <FirstTest title={message} />
    );

    expect(container).toMatchSnapshot(); 👈👀
  });

  test("It should display the title in an h1.", () => {
    const message = "Hi i'm Ale Roses";
    const { container, getByText } = render(
      <FirstTest title={message} />
    );

    expect(getByText(message)).toBeTruthy();

    const h1 = container.querySelector("h1");

    expect(h1.innerHTML).toBe(message);
    
    // Work with spaces at the beginning and at the end.
    expect(h1.innerHTML).toContain(message); 👈👀
  });
});
```

### 🟣 getByTestId y otras props

#### `data-testid`

`data-testid` es un atributo HTML que se utiliza para identificar elementos del DOM en las pruebas. Es una convención comúnmente utilizada para marcar elementos de manera que sean fáciles de seleccionar durante las pruebas sin afectar el comportamiento o el estilo del componente.

Supongamos que tienes un componente React:

```jsx
const MyComponent = () => (
  <div>
    <button data-testid="submit-button">Submit</button>
  </div>
);

export default MyComponent;
```

En este ejemplo, el botón tiene un atributo `data-testid` con el valor `"submit-button"`, lo que lo hace fácilmente seleccionable en las pruebas.

#### `getByTestId`

`getByTestId` es una función proporcionada por Testing Library que permite seleccionar un elemento del DOM utilizando su atributo `data-testid`. Es útil cuando quieres seleccionar un elemento específico que has marcado con `data-testid`.

```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders submit button', () => {
  render(<MyComponent />);
  const button = screen.getByTestId('submit-button');
  expect(button).toBeInTheDocument();
});
```

En este ejemplo, `screen.getByTestId('submit-button')` selecciona el botón que hemos marcado con `data-testid="submit-button"` y luego verificamos que el botón está presente en el documento con `expect(button).toBeInTheDocument()`.

#### `getByText` y `getAllByText`

- **`getByText`**: Selecciona el primer elemento que contiene el texto especificado.
- **`getAllByText`**: Selecciona todos los elementos que contienen el texto especificado y devuelve un array de nodos.

Estas funciones son útiles para seleccionar elementos basados en el texto visible en la pantalla, lo cual es una forma natural de interactuar con los elementos del DOM durante las pruebas.

##### Ejemplo de uso de `getByText`

```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders submit button', () => {
  render(<MyComponent />);
  const button = screen.getByText('Submit');
  expect(button).toBeInTheDocument();
});
```

En este ejemplo, `screen.getByText('Submit')` selecciona el botón que contiene el texto "Submit".

##### Ejemplo de uso de `getAllByText`

Supongamos que tienes varios elementos con el mismo texto:

```jsx
const MyComponent = () => (
  <div>
    <p>Item 1</p>
    <p>Item 1</p>
    <p>Item 2</p>
  </div>
);

export default MyComponent;
```

En este caso, puedes seleccionar todos los elementos con el texto "Item 1":

```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders multiple items with the same text', () => {
  render(<MyComponent />);
  const items = screen.getAllByText('Item 1');
  expect(items.length).toBe(2);
});
```

En este ejemplo, `screen.getAllByText('Item 1')` selecciona todos los elementos `<p>` que contienen el texto "Item 1" y luego verificamos que hay dos elementos con ese texto.

En nuestro proyecto...

📌 Si están en desarrollo se recomienda no hacer pruebas de `snapshot`.

`src > FirstTest.jsx`

```jsx
import PropTypes from "prop-types";

const FirstTest = ({
  title = "No title",
  subTitle = "New Text",
  name = "Ale Roses",
}) => {
  return (
    <>
      <h1 🔥data-testid="test-title" 👈👀 >{title}</h1>
      <p>{subTitle}</p> 👈👀
      <p>{subTitle}</p> 👈👀
      <p>{name}</p>
    </>
  );
};

FirstTest.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export { FirstTest };
```

`test > FirstTest.test.jsx`

```jsx
import { render } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("FirstTest tests", () => {
  test("It should display the title in an h1.", () => {
    const message = "Hi i'm Ale Roses";

    const { container, getByText, getByTestId 👈👀 } = render(
      <FirstTest title={message} />
    );

    expect(getByText(message)).toBeTruthy();

    // toBeTruthy: Verifica que exista
    expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toBe(
      message
    );

    expect(getByTestId("test-title").innerHTML).toContain(
      message
    );
  });

  test("should show the subtitle send by props", () => {
    const message = "Hi i'm Ale Roses";
    const subTitle = "I'm a subtitle";

    const { getByText, getAllByText 👈👀 } = render(
      <FirstTest title={message} subTitle={subTitle} />
    );

    // expect(getByText(subTitle)).toBeTruthy();

    // En caso de haber mas de un elemento a evaluar usar getAllByText() que devuelve un array
    expect(getAllByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
```

### 🟣 Screen - Testing Library

La función `screen` es una parte esencial de `@testing-library/react` y facilita la selección de elementos del DOM cuando se realizan pruebas. Veamos cómo funciona y cómo se utiliza en los tests.

`screen` es una utilidad global que permite acceder a los métodos de consulta de manera más sencilla y sin necesidad de desestructurar la respuesta de la función `render`.

En lugar de desestructurar por ejemplo `getByText` desde el resultado de `render`, puedes usar `screen` directamente para acceder a este método.

#### Sin `screen`:

```jsx
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders learn react link", () => {
  const { getByText } = render(<MyComponent />);
  const linkElement = getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});
```

#### Con `screen`:

```jsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders learn react link", () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

#### Métodos comunes de `screen`

`screen` proporciona varios métodos de consulta que puedes usar para seleccionar elementos en el DOM renderizado. Algunos de los más comunes son:

- **`screen.getByText(text)`**: Busca un elemento por su contenido de texto.
- **`screen.getByRole(role)`**: Busca un elemento por su rol (como `button`, `heading`, etc.).
- **`screen.getByLabelText(label)`**: Busca un elemento asociado a una etiqueta específica.
- **`screen.getByPlaceholderText(placeholder)`**: Busca un elemento por su texto de marcador de posición.
- **`screen.getByAltText(alt)`**: Busca un elemento por su texto alternativo.
- **`screen.debug()`**: Imprime el contenido del DOM en el momento en que se llama. Esto es útil para entender mejor la estructura del componente que estás probando.

#### Ejemplo avanzado

Supongamos que tienes un componente de formulario y quieres probar varios aspectos del mismo.

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // para los matchers extendidos
import FormComponent from "./FormComponent";

test("renders form elements correctly", () => {
  render(<FormComponent />);

  // Verifica que el título del formulario esté presente
  const heading = screen.getByRole("heading", {
    name: /form title/i,
  });
  expect(heading).toBeInTheDocument();

  // Verifica que el input con el placeholder 'Username' esté presente
  const usernameInput =
    screen.getByPlaceholderText("Username");
  expect(usernameInput).toBeInTheDocument();

  // Verifica que el botón 'Submit' esté presente
  const submitButton = screen.getByRole("button", {
    name: /submit/i,
  });
  expect(submitButton).toBeInTheDocument();

  // Verifica que el label del input 'Password' esté presente
  const passwordLabel = screen.getByLabelText("Password");
  expect(passwordLabel).toBeInTheDocument();
});
```

Ahora en nuestro proyecto.

`test > FirstTest2.test.jsx`

```jsx
import { render, screen } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("FirstApp tests", () => {
  const message = "Hi i'm Ale Roses";
  const subTitle = "I'm a subtitle";

  test("It should match the snapshot", () => {
    // snapshot: instantánea, captura

    const { container } = render(
      <FirstTest title={message} />
    );

    expect(container).toMatchSnapshot();
  });

  test("It should display the message 'Hi, i'm Ale Roses'", () => {
    // Imprime el estado inicial del DOM
    // screen.debug()
    render(<FirstTest title={message} />);

    // Que no exista: not
    // expect(screen.getByText(title)).not.toBeTruthy();
    expect(screen.getByText(message)).toBeTruthy();
    // Imprime el estado del DOM después de la acción
    // screen.debug();
  });

  test("It should display the title in an h1", () => {
    render(<FirstTest title={message} />);
    expect(
      screen.getByRole("heading", { level: 1 }).innerHTML
    ).toContain(message);
  });

  test("It should display the subtitle sent by a prop", () => {
    render(
      <FirstTest title={message} subTitle={subTitle} />
    );

    // En caso de haber mas de un elemento a evaluar usar getAllByText() que devuelve un array
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
```

### 🟣 Pruebas básicas del CounterApp

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp.jsx";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);
```

`src > CounterApp.jsx`

```jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleRest = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRest}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
      <h2>{counter}</h2>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export { CounterApp };
```

`tests > CounterApp.test.jsx`

```jsx
import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("CounterApp Testing", () => {
  const value = 0;

  test("It should match the snapshot", () => {
    const { container } = render(
      <CounterApp value={value} />
    );
    expect(CounterApp).toMatchSnapshot();
  });

  test("It should display an initial value of 0", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();
    expect(
      screen.getByRole("heading", { level: 2 }).innerHTML
    ).toContain("0");
  });
});
```

### 🟣 Simular eventos - Click

`fireEvent` se usa para disparar eventos del DOM, como clics, cambios de entrada, envíos de formularios, entre otros. Simula la interacción del usuario con el componente, permitiéndote probar cómo responde tu aplicación a estas interacciones.

Para utilizar `fireEvent`, seleccionas un elemento del DOM usando `screen` o cualquier método de consulta proporcionado por `@testing-library/react`, y luego disparas un evento sobre ese elemento.

#### Ejemplo básico

Supongamos que tienes un botón que, al ser clicado, cambia el estado de un mensaje:

```jsx
import React, { useState } from 'react';

function ToggleButton() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>The message is now visible</p>}
    </div>
  );
}

export default ToggleButton;
```

Puedes escribir una prueba para este componente utilizando `fireEvent` de la siguiente manera:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';

test('toggles message visibility on button click', () => {
  render(<ToggleButton />);
  
  const button = screen.getByRole('button', { name: /toggle/i });
  fireEvent.click(button);
  
  expect(screen.getByText(/the message is now visible/i)).toBeInTheDocument();
  
  fireEvent.click(button);
  
  expect(screen.queryByText(/the message is now visible/i)).not.toBeInTheDocument();
});
```

#### Tipos de eventos comunes

##### `fireEvent.click(element)`

Simula un clic en el elemento especificado.

```jsx
fireEvent.click(button);
```

##### `fireEvent.change(element, { target: { value: 'new value' } })`

Simula un cambio de valor en un elemento de entrada.

```jsx
const input = screen.getByLabelText(/username/i);
fireEvent.change(input, { target: { value: 'new username' } });
expect(input.value).toBe('new username');
```

##### `fireEvent.submit(form)`

Simula el envío de un formulario.

```jsx
const form = screen.getByRole('form');
fireEvent.submit(form);
```

#### Otros eventos disponibles

- `fireEvent.focus(element)`
- `fireEvent.blur(element)`
- `fireEvent.mouseOver(element)`
- `fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' })`

#### Ejemplo avanzado con varios eventos

Supongamos que tienes un formulario con un campo de texto y un botón de envío. Quieres probar que al escribir en el campo y hacer clic en el botón, se muestra un mensaje de éxito:

```jsx
import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter text:</label>
        <input
          id="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Form submitted successfully</p>}
    </div>
  );
}

export default Form;
```

La prueba para este formulario podría verse así:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('submits form and shows success message', () => {
  render(<Form />);
  
  const input = screen.getByLabelText(/enter text/i);
  const button = screen.getByRole('button', { name: /submit/i });
  
  fireEvent.change(input, { target: { value: 'Hello World' } });
  expect(input.value).toBe('Hello World');
  
  fireEvent.click(button);
  
  expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
});
```

Ahora veamos como se usa en nuestro proyecto:

`tests > CounterApp.test.jsx`

```jsx
import {
  fireEvent, 👈👀
  render,
  screen,
} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Test in the CounterApp", () => {
  const value = 0;

  test("Should match the snapshott", () => {
    const { container } = render(
      <CounterApp value={value} />
    );
    expect(CounterApp).toMatchSnapshot();
  });

  test("should show the inicial value of 0", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();
    expect(
      screen.getByRole("heading", { level: 2 }).innerHTML
    ).toContain("0");
  });

  test("Should increase with the +1 button", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1")); 👈👀

    expect(screen.getByText("1")).toBeTruthy();
  });

  // test("Should decrease with the -1 button", () => {
  //   render(<CounterApp value={value} />);
  //   fireEvent.click(screen.getByText("-1"));

  //   // screen.debug();
  //   expect(screen.getByText("-1")).toBeTruthy();
  // });

  test("The reset button should work", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    // Returns the value to 0
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(
      screen.getByRole("button", { name: "btn-reset" })
    );

    // screen.debug();
    expect(screen.getByText(value)).toBeTruthy();
  });
});
```

### 🟣 Código fuente de la sección

Aquí les dejo el código fuente de la sección por si lo llegan a necesitar y comparar contra el suyo:

- [**Github - Fin sección 5**](https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-5)
- [Apuntes](https://github.com/aleroses/Platzi/blob/master/DW/3-avanzado/1.react.js/devTalles/react-hooks-mern.md)

## 6. GifExpertApp - Aplicación

### 🟣 Introducción a la sección

👈👀📌

### 🟣 Temas puntuales de la sección

**¿Qué veremos en esta sección?**

- Custom Hooks
- Fetch hacia un API
- Comunicación entre componentes
- Clases de CSS
- Animaciones
- Enviar métodos como argumentos
- Crear listados
- keys
- Giphy

Esta es una aplicación pequeña pero muy ilustrativa que explica cómo utilizar React + customHooks para poder resolver necesidades en específico que podremos re-utilizar después.

### 🟣 Resultado al final de la sección

![Project 01](https://i.postimg.cc/zD2R0NnK/1-project.png)
`src > main.jsx`

### 🟣 Inicio de proyecto - GifExpertApp

```bash
yarn create vite
	04-gif-expert-app
	react
	JavaScript
cd 04-gif-expert-app

# Instalar Módulos de Node: yarn
yarn install 
code-insiders .

# Corremos la app
yarn dev
```

Limpiamos el contenido de la carpeta `src`, solo dejamos el archivo `main.jsx`.

En esta clase dejamos la siguiente estructura:

```bash
.
├── index.html
├── node_modules
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src 👈👀👇
│   ├── GifExpertApp.jsx
│   └── main.jsx
├── vite.config.js
└── yarn.lock

3 directories, 5 files
```

También debemos tener ya creada una API KEY en [GiphY Devs](https://developers.giphy.com/)

### 🟣 GifExpertApp - Component

`src > main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
```

`src > GifExpertApp.jsx`

```jsx
export const GifExpertApp = () => {
  return (
    <>
      <h1>GifExpertApp</h1>
    </>
  );
};
```

Los estilos puedes agregarlos según tu criterio o también puedes usar los que se usaron para crear esta aplicación. Solo asegúrate de crearlos dentro de la carpeta `src`.

- [**Reactjs.org - Estructura de directorios**](https://es.reactjs.org/docs/faq-structure.html)
- [**Estructura, nombres de folders y componentes en React - Hackernoon.com**](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
- [**Estilos GifExpertApp**](https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1)

### 🟣 Creando una lista de categorías

`src > GifExpertApp.jsx`

```jsx
import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        {categories.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ol>
    </>
  );
};
```

### 🟣 Agregar una nueva categoría

`src > GifExpertApp.jsx`

```jsx
import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    // setCategories((item) => [...item, "New Item!!!"]);
    setCategories([...categories, "New Item!!!"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ol>
    </>
  );
};
```

### 🟣 Componente AddCategory

`src > AddCategory.jsx`

```jsx
import { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(inputValue);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export { AddCategory };
```

### 🟣 Comunicación entre componentes

`src > GifExpertApp.jsx`

```jsx
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    // setCategories((item) => [...item, "New Item!!!"]);
    setCategories([...categories, "New Item!!!"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories} /> 👈👀

      <ol>
        {categories.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ol>
    </>
  );
};
```

`src > AddCategory.jsx`

```jsx
import { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setCategories((categories) => [
      inputValue,
      ...categories,
    ]);
    setInputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export { AddCategory };
```

### 🟣 Emitir un evento al padre

`src > GifExpertApp.jsx`

```jsx
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => { 👈👀
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 👈👀👇
        onNewCategory={onAddCategory}
      />

      <ol>
        {categories.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ol>
    </>
  );
};

export { GifExpertApp };
```

`src > components > AddCategory.jsx`

```jsx
import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => { 👈👀
  const [inputValue, setInputValue] = useState("Something");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim()); 👈👀

    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export { AddCategory };
```

### 🟣 Validar que sean únicos los nombres

`src > GifExpertApp.jsx`

```jsx
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; 👈👀

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ol>
    </>
  );
};

export { GifExpertApp };
```

### 🟣 GifGrid - Nuevo componente

`src > GifExpertApp.jsx`

```jsx
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((item) => ( 👈👀👇
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};

export { GifExpertApp };
```

`src > components > GifGrid.jsx`

```jsx
const GifGrid = ({ category }) => {
  const gifs = [0, 1, 2, 3, 4];

  return (
    <>
      <h3>{category}</h3>
      {gifs.map((gif) => (
        <p>{gif}</p>
      ))}
    </>
  );
};

export { GifGrid };
```

### 🟣 Fetch API - Obtener las imágenes deseadas

```bash
# Instalar en Linux
snap install postman
```

`src > components > GifGrid.jsx`

```jsx
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  getGifs(category); // 👈👀 Mala práctica

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

export { GifGrid };
```

`src > helpers > getGifs.js`

```js
const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NhCnnfEOEkSzI8EgLmMc09dBClFt99Ou&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  console.log(gifs);
  return gifs;
};

export { getGifs };
```

- [**Giphy Developers - Search Endpoint**](https://developers.giphy.com/branch/master/docs/api/endpoint/#search)
- [Intalar Postman](https://learning.postman.com/docs/getting-started/installation/installation-and-updates/)
- [Postman en la web](https://web.postman.co/home)

### 🟣 useEffect

`src > components > GifGrid.jsx`

```jsx
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => { 👈👀
  // Lógica para cargar los datos desde una API
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>
        +1
      </button>
    </>
  );
};

export { GifGrid };
```

[Hook useEffect()](https://github.com/aleroses/Platzi/blob/master/DW/3-avanzado/1.react.js/Platzi/reactjs.md#18-qu%C3%A9-son-los-efectos-en-react-useeffect)

### 🟣 Demostración de producción rápido

```bash
yarn build
```

`yarn build` crea una carpeta llamada `dist` que contendrá nuestra aplicación de producción optimizada.

```bash
.
├── dist 👈👀
│   ├── assets
│   └── index.html
├── index.html
├── node_modules
├── package.json
├── README.md
├── src
├── vite.config.js
└── yarn.lock
```

Luego de hacer `build` podemos usar también en script `preview` para servir localmente nuestra aplicación en un entorno de producción.  Este comando utiliza los archivos generados durante el proceso de producción para ejecutar la aplicación.

```bash
yarn preview
```

`src > components > GifGrid.jsx`

```jsx
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

export { GifGrid };
```

`src > helpers > getGifs.js`

```jsx
const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NhCnnfEOEkSzI8EgLmMc09dBClFt99Ou&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

export { getGifs };
```

#### http-server

http-server es un software que permite crear un servidor web básico para servir archivos estáticos a través del protocolo HTTP. Es una herramienta de línea de comandos que facilita la creación rápida de un servidor web local para el desarrollo y la visualización de sitios web estáticos.

Al utilizar http-server, puedes especificar una carpeta en tu sistema de archivos y el software creará un servidor web en tu máquina local que servirá los archivos estáticos contenidos en esa carpeta. Esto es útil cuando estás trabajando en el desarrollo de un sitio web y deseas ver cómo se ve y se comporta en un entorno de servidor web.

```bash
# Esto es opcional
npm install --global http-server
cd dist
http-server -o
```

[http-server](https://www.npmjs.com/package/http-server)

### 🟣 Mostrar los títulos de las imágenes

`src > components > GifGrid.jsx`

```jsx
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => { 👈👀
    const newImages = await getGifs(category);

    setImages(newImages);
  };

  useEffect(() => {
    // getGifs(category).then((newImages) =>
    //   setImages(newImages)
    // );
    getImages(); 👈👀
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title 👈👀}) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};

export { GifGrid };
```

### 🟣 className - Clases de css

`src > components > GifGrid.jsx`

```jsx
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);

    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid"> 👈👀
        {images.map((img) => (
          <GifItem key={img.id} {...img} 👈👀 />
        ))}
      </div>
    </>
  );
};

export { GifGrid };
```

`src > components > GifItem.jsx`

```jsx
const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export { GifItem };
```

### 🟣 Custom Hook - useFetchGifs

`src > components > GifGrid.jsx`

```jsx
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {👈👀👇
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export { GifGrid };
```

`src > hooks > useFetchGifs.js`

```js
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);

    setImages(newImages);
  };

  useEffect(() => {
    getImages();
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading,
  };
};

export { useFetchGifs };
```

### 🟣 Mostrar mensaje de carga


`src > components > GifGrid.jsx`

```jsx
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>👈👀👇
      {isLoading && <h2>Loading...</h2>}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export { GifGrid };
```

### 🟣 Archivos de barril

En el contexto de JavaScript y React, los "Archivos de barril" (también conocidos como "Archivos de índice" o "Archivos de barril de exportación") son archivos utilizados para exportar múltiples módulos desde una carpeta o directorio en un solo punto de acceso. En lugar de tener que importar cada módulo individualmente desde su ubicación específica, puedes importarlos todos a través del archivo de barril.

La idea detrás de los archivos de barril es simplificar y centralizar la importación de módulos dentro de una carpeta o directorio. Imagina una situación en la que tienes una carpeta llamada "componentes" que contiene varios componentes de React. En lugar de importar cada componente individualmente al utilizarlos en otros archivos, puedes crear un archivo de barril en la carpeta "componentes" que exporte todos los componentes desde un solo lugar.

Aquí hay un ejemplo de cómo se podría estructurar un archivo de barril en una carpeta de componentes:

```javascript
// components/index.js

export { default as Componente1 } from './Componente1';
export { default as Componente2 } from './Componente2';
export { default as Componente3 } from './Componente3';
// ... y así sucesivamente
```

En este caso, el archivo de barril `index.js` exporta los componentes `Componente1`, `Componente2` y `Componente3` desde sus respectivos archivos. Luego, en otros archivos de tu proyecto, puedes importar todos los componentes utilizando una sola línea de código:

```javascript
import { Componente1, Componente2, Componente3 } from './components';
```

Esto simplifica la estructura de importación y hace que tu código sea más legible y mantenible, especialmente cuando tienes una gran cantidad de módulos en una carpeta.

Los archivos de barril no son exclusivos de React, sino que se pueden utilizar en cualquier proyecto de JavaScript para exportar varios módulos desde una ubicación centralizada. Ayudan a organizar y simplificar la importación de código en proyectos más grandes, evitando la necesidad de especificar rutas de archivo largas y repetitivas en cada importación.

En nuestro proyecto:

`src > components > index.js`

```jsx
export * from "./AddCategory";
export * from "./GifGrid";
export * from "./GifItem";
```

`src > hooks > GifExpertApp.jsx`

```jsx
import { useState } from "react"; 👈👀👇
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};

export { GifExpertApp };
```

La estructura del proyecto queda así:

```bash
.
├── dist
├── index.html
├── node_modules
├── package.json
├── README.md
├── src 👈👀👇
│   ├── components
│   │   ├── AddCategory.jsx
│   │   ├── GifGrid.jsx
│   │   ├── GifItem.jsx
│   │   └── index.js
│   ├── GifExpertApp.jsx
│   ├── helpers
│   │   └── getGifs.js
│   ├── hooks
│   │   └── useFetchGifs.js
│   ├── main.jsx
│   └── styles.css
├── vite.config.js
└── yarn.lock
```

### 🟣 Código fuente de la sección

Aquí les dejo el código fuente de la sección, tal cual lo dejé en el último video para que puedan compararlo contra el suyo si fuera necesario.

[**Github - Fin Seccion 6**](https://github.com/Klerith/react-vite-gif-expert/tree/fin-seccion-6) 


## 7. Generando el build de producción y despliegues

### 🟣 Introducción a la sección

El despliegue se hará en GitHub.

### 🟣 Temas puntuales de la sección

**¿Qué veremos en esta sección?**

- Aprender cómo realizar backups a repositorios de Git
- Subir nuestro repositorio a GitHub
- Uso de GitHub Pages
- Desplegar nuestra aplicación de React
- Generar build de producción de nuestra aplicación

Aunque es una sección pequeña, les puede servir para desplegar infinidad de proyectos de React de forma gratuita, sin contar que tendrán respaldos de sus proyectos por si llegan a perder su trabajo que tenían localmente en su computadora.

### 🟣 Desplegar en Netlify

`src > components > GifGrid.jsx`

```bash
yarn
yarn dev
code-insiders .
yarn build
```

https://app.netlify.com/teams/alevroses/overview

Una vez dentro de Netlify nos vamos a **Sites** donde aparece un mensaje dentro de un recuadro igual al siguiente:

```bash
Want to deploy a new site without connecting to Git?
Drag and drop your site output folder here

Or, browse to upload.
```

Arrastra la carpeta **dist** dentro de ese recuadro y espera a que termine de cargar.

Si el nombre del proyecto no te gusta puedes cambiarlo yendo a **Site Configuration** y busca **Change site name**.

De `luxury-buttercream-ed1988` a `search-tests`.

### 🟣 Preparación del proyecto - Github Pages

Asegúrate de tener un `.gitignore` con todos los archivos y carpetas a ignorar en el repositorio de GitHub.

```bash
git init
git add .
git commit -am "First commit"
```

En caso de borrar archivos importantes del proyecto puedes reconstruirlos con: 

```bash
git checkout -- .
```

[[gh-pages]] 👈👀

[Apuntes GitHub Pages](https://github.com/aleroses/Platzi/blob/master/DW/1-basico/005-git-github/gh-pages.md)

### 🟣 Subir a GitHub

Crea un repositorio en GitHub y enlazalo con tu repositorio local.

Actualmente he visto que siempre pide una `key` cuando es la primera vez que usamos Git y GitHub o cuando es una Sistema Operativo o Computador nuevo.

Dejo los apuntes donde se toca ese tema:

[⚠☢ Posible error ☣](https://github.com/aleroses/Platzi/blob/master/DW/1-basico/005-git-github/git-github.md#-posible-error-)

### 🟣 Desplegando aplicación en Github Pages

Puedes renombrar `dist` por `docs`.

```bash
git add . && git commit -am "Update" && git push origin master
```

En el repositorio en GitHub te vas a Settings/Pages y en el apartado de Branch selecciona la rama, luego `/docs` y dale a `Save`.

Personalmente el método que uso para subir y desplegar mis pequeños proyectos es el que se detalla en los enlaces abajo.

[[gh-pages]] 👈👀

[Apuntes GitHub Pages](https://github.com/aleroses/Platzi/blob/master/DW/1-basico/005-git-github/gh-pages.md)

### 🟣 Actualizar GitHub pages

En caso de un error como el mostrado en clase debes ir a `docs/index.html` y dejar los links de la siguiente manera:

```html
href="./assets/index.df2abcea.css"
```

En caso de persistir el error también modifica el link en la raíz principal en el `index.html` en la parte del `main`.

El link del **favicon** no hace falta cambiarlo.

Ahora envía los cambios a GitHub, espera y listo.

## 8. Testing - Probando la aplicación de GifExpert

### 🟣 Introducción a la sección

### 🟣 Temas puntuales de la sección

**¿Qué veremos en esta sección?**

- Seguir el camino de las pruebas
- Pruebas en componentes específicos
- Pruebas en componentes de forma individual
- Pruebas con customHooks 
- Esperar cambios en un customHook
- Simular eventos en inputs y formularios
- Simular llamadas a funciones
- Evaluar si existen elementos en el componente

En esta sección seguiremos expandiendo todo lo que habíamos visto anteriormente en otras secciones de pruebas, pero ahora veremos más a detalle los temas y adicionalmente introduciremos nuevos conceptos y nuevos tipos de pruebas.

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇


### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇


### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇

### 🟣 
`src > components > GifGrid.jsx`

```jsx

```

👈👀

👈👀👇
