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