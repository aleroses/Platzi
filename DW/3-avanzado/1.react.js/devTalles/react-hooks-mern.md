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
console.log(human);
console.log({ person, human });
```

**Recursividad** par hacer una copia profunda:

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

### 🟣 Tarea - Componente CounterApp

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
	- Arrange - Arreglar
    - Act - Actuar
    - Assert - Afirmar
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
1. Arrange (Arreglar)
2. Act (Actuar)
3. Assert (Afirmar)

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

### 🟣 Mi primera prueba y configuraciones iniciales

Para las pruebas usaremos **Jest** y **React Testing Library**, pero primero debemos configurarlo, ya que en Vite no vienen configurados por defecto.

Esta configuración solo se hace una vez en cada proyecto. 

```bash
yarn add --dev jest
```

Añadimos un script dentro del archivo `package.json`.

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

Añadir ayudas o intelligent a Visual Studio Code.

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

Configuración de Babel:

```bash
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Creamos el archivo `babel.config.cjs`

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
};
```

[Using Babel](https://jestjs.io/docs/getting-started#using-babel)

`src > bases > 02-backticks.js`

```jsx
function getGreeting(name) {
  return "Hi " + name;
}

export { getGreeting };
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

`toEqual` Sirve para comparar objetos. También sirve el `toStrictEqual`.

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

    expect(user).toEqual(testUser);
  });

  test("getActiveUser should return an object", () => {
    const data = "Ale Roses";
    const activeUser = (name) => ({
      uid: "ABC567",
      username: name,
    });
    const testUser = getActiveUser(data);

    expect(activeUser(data)).toEqual(testUser);
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

    expect(letters).toEqual(expect.any(String));
  });
});
```

### 🟣 Pruebas en `08-imp-exp.js - Arreglos`

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
    expect(false).toBeFalsy();
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
    expect(newHeroes).toStrictEqual(dcHeroes);

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

### 🟣 Pruebas con async-await

Instalamos:

```bash
yarn add -D whatwg-fetch
```

Creamos el archivo `jest.config.cjs` y el archivo `jest.setup.js` todo en la raíz del proyecto.

`jest.config.cjs` 

```jsx
module.exports = {
  // TODO: jsdom,
  setupFiles: ["./jest.setup.js"],
};
```

`jest.setup.js`

```js
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

`src > bases > 11-async-await.js`

```jsx
```

`src > bases > 11-async-await.test.js`

```jsx
```

### 🟣 Pruebas sobre componentes de React

Usaremos **Testing Library / React Testing Library** para hacer pruebas con componentes propios de React.

```bash
yarn add --dev @testing-library/react
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

```bash
yarn add -D jest-environment-jsdom
yarn add -D @babel/preset-react
```

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

FirstTest.propTypes = {
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

describe("Testing FirstTest", () => {
  test("Should match the snapshot", () => {
    // snapshot: instantánea captura

    render(<FirstTest title={"Hi i'm Ale Roses"} />);
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

### 🟣 Probar FirstApp

Al usar `toMatchSnapshot` se crea una carpeta llamada `__snapshots__` con las instantáneas o capturas del componente asociado.

Esto permite verificar que el código está tal cual como lo creamos y que no se eliminaron líneas. Si eliminas algunas, verás que esto se refleja en la consola.

En caso el cambio hecho en el código sea intensional, puedes presionar `u` en la consola para actualizar los cambios en el `__snapshots__`.

`test > FirstTest.test.jsx`

```jsx
import { render } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("Testing FirstTest", () => {
  test("Should match the snapshot", () => {
    // snapshot: instantánea, captura

    const message = "Hi i'm Ale Roses";
    const { container } = render(
      <FirstTest title={message} />
    );

    expect(container).toMatchSnapshot();
  });

  test("Should show the title in a h1", () => {
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
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
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

`test > FirstTest.test.jsx`

```jsx
import { render } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("Testing FirstTest", () => {
  test("Should show the title in a h1", () => {
    const message = "Hi i'm Ale Roses";

    const { container, getByText, getByTestId } = render(
      <FirstTest title={message} />
    );

    expect(getByText(message)).toBeTruthy();

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

    const { getByText, getAllByText } = render(
      <FirstTest title={message} subTitle={subTitle} />
    );

    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
```

### 🟣 Screen - Testing Library

`test > FirstTest2.test.jsx`

```jsx
import { render, screen } from "@testing-library/react";
import { FirstTest } from "../src/FirstTest.jsx";

describe("Testing FirstTest", () => {
  const message = "Hi i'm Ale Roses";
  const subTitle = "I'm a subtitle";

  test("Should match the snapshot", () => {
    // snapshot: instantánea, captura

    const { container } = render(
      <FirstTest title={message} />
    );

    expect(container).toMatchSnapshot();
  });

  test("Should show the message 'Hi, i'm Ale Roses'", () => {
    // screen.debug()
    render(<FirstTest title={message} />);

    // expect(screen.getByText(title)).not.toBeTruthy();
    expect(screen.getByText(message)).toBeTruthy();
  });

  test("should show the title in an h1", () => {
    render(<FirstTest title={message} />);
    expect(
      screen.getByRole("heading", { level: 1 }).innerHTML
    ).toContain(message);
  });

  test("should show the subtitle send by props", () => {
    render(
      <FirstTest title={message} subTitle={subTitle} />
    );

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
});
```

### 🟣 

`src > main.jsx`

```jsx

```
`src > main.jsx`

```jsx
```


👈👀

👈👀

👈👀👇

### 🟣 

`src > main.jsx`

```jsx

```
`src > main.jsx`

```jsx
```


👈👀

👈👀

👈👀👇

### 🟣 

`src > main.jsx`

```jsx

```
`src > main.jsx`

```jsx
```


👈👀

👈👀

👈👀👇

### 🟣 

`src > main.jsx`

```jsx

```
`src > main.jsx`

```jsx
```


👈👀

👈👀

👈👀👇

### 🟣 

`src > main.jsx`

```jsx

```
`src > main.jsx`

```jsx
```


👈👀

👈👀

👈👀👇

### 🟣 

`src > main.jsx`

```jsx

```
`src > main.jsx`

```jsx
```


👈👀

👈👀

👈👀👇