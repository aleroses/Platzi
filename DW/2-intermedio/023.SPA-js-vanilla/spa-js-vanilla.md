# Curso de Single Page Application con JavaScript Vanilla

## 1. ¿Qué vamos a aprender?

Haremos un proyecto con temática [The Rick and Morty API](https://rickandmortyapi.com/)

## 2. Introducción a SPA

En el contexto de la programación web, **SPA** significa **Single Page Application** (Aplicación de Página Única). Una SPA es un tipo de aplicación web o sitio web que interactúa con el usuario dinámicamente reescribiendo la página actual en lugar de cargar páginas enteras desde el servidor. Esto permite una experiencia de usuario más fluida y rápida, similar a la de una aplicación de escritorio.

### Características Clave de una SPA

1. **Carga Inicial Única:**
   - La aplicación carga una única página HTML inicial.
   - Todos los recursos necesarios (HTML, CSS, JavaScript) se cargan al inicio o se cargan de forma dinámica según sea necesario.

2. **Navegación Sin Recargar la Página:**
   - La navegación dentro de la aplicación no provoca recargas completas de la página.
   - Las SPA utilizan tecnologías como AJAX (Asynchronous JavaScript and XML) para comunicarse con el servidor y actualizar la interfaz de usuario de forma dinámica.

3. **Experiencia de Usuario Fluida:**
   - Debido a que no hay recargas de página, la interacción del usuario con la aplicación es rápida y sin interrupciones.

4. **Uso Intensivo de JavaScript:**
   - Las SPA dependen en gran medida de JavaScript para manejar la lógica de la aplicación y la manipulación del DOM (Document Object Model).

### Ventajas de las SPA

- **Velocidad:** Después de la carga inicial, las SPA pueden ser muy rápidas, ya que solo se actualizan las partes necesarias de la página.
- **Mejor Experiencia de Usuario:** La navegación sin recargas de página ofrece una experiencia más fluida y parecida a una aplicación de escritorio.
- **Menor Carga en el Servidor:** Al no tener que recargar páginas completas, se reduce la cantidad de datos que deben ser enviados desde el servidor.

### Desventajas de las SPA

- **SEO (Optimización para Motores de Búsqueda):** Las SPA pueden ser más difíciles de optimizar para motores de búsqueda, ya que muchas veces el contenido se carga dinámicamente mediante JavaScript.
- **Rendimiento Inicial:** La carga inicial puede ser más lenta debido a la cantidad de recursos que deben ser descargados.
- **Complejidad:** El desarrollo de SPA puede ser más complejo debido a la necesidad de manejar la lógica de la aplicación en el cliente.

### Tecnologías Comunes para Desarrollar SPA

- **Frameworks y Bibliotecas de JavaScript:**
  - React
  - Angular
  - Vue.js
  - Svelte

- **Herramientas de Construcción y Bundlers:**
  - Webpack
  - Parcel
  - Vite

Las SPA han ganado mucha popularidad debido a su capacidad de ofrecer una experiencia de usuario rápida y fluida, similar a la de una aplicación nativa.

## 3. Configurar el entorno de trabajo

Webpack es obsoleto por lo que usaré **Vite**, deséame suerte…

```bash
yarn create vite

# Obtenemos
success Installed "create-vite@5.3.0" with binaries:
      - create-vite
      - cva
✔ Project name: … spa-rick&morty # 👈👀👇
✔ Package name: … spa-rick-morty
✔ Select a framework: › Vanilla
✔ Select a variant: › JavaScript # 👈👀👌
```

Ahora podemos usar comandos como:

```bash
Done. Now run:

  cd spa-rick&morty
  yarn # Importante
  yarn dev
```

Dentro de nuestro proyecto debemos crear la siguiente estructura:

```bash
.
├── node_modules
├── package.json
├── src 👈👀👇
│   ├── assets
│   │   └── images
│   │       └── icon-rick.svg
│   ├── index.html
│   ├── main.js
│   ├── pages
│   │   ├── Character.js
│   │   ├── Error404.js
│   │   └── Home.js
│   ├── routes
│   │   └── index.js
│   ├── styles
│   │   └── style.css
│   ├── templates
│   │   └── Header.js
│   └── utils
│       ├── getData.js
│       ├── getHash.js
│       └── resolveRoutes.js
├── vite.config.js 🔥
└── yarn.lock
```

En primera instancia, al ejecutar el comando `yarn dev` veremos un mensaje como este: `This localhost page can’t be found` para corregirlo crea el archivo `vite.config.js` y añade la siguiente configuración:

`vite.config.js`

```js
// vite.config.js
export default {
  root: "src",
  server: {
    open: true,
  },
  build: {
    outDir: "../dist",
  },
};
```

Ahora solo corregimos la ruta del `icon` dentro del archivo `index.html`.

## 4. Preparar Webpack (Vite)

Me parece que al estar usando Vite no debemos hacer mayor configuración, es así de simple y rápido…

Esta es la estructura final del proyecto:

```bash
.
├── dist 👈👀👇
│   ├── assets
│   │   ├── index-C9Xx0i1S.css
│   │   ├── index-Kw-yby9F.js
│   │   └── javascript-rUa6gnWw.svg
│   └── index.html
├── LICENSE
├── node_modules
├── package.json
├── README.md
├── src
│   ├── assets
│   │   └── images
│   │       └── icon-rick.svg
│   ├── index.html
│   ├── main.js
│   ├── pages
│   │   ├── Character.js
│   │   ├── Error404.js
│   │   └── Home.js
│   ├── routes
│   │   └── index.js
│   ├── styles
│   │   └── styles.css
│   ├── templates
│   │   └── Header.js
│   └── utils
│       ├── getData.js
│       ├── getHash.js
│       └── resolveRoutes.js
├── vite.config.js
└── yarn.lock
```

## 5. Crear el Home

Si revisas el archivo `package.json` ya lo tenemos todo preparado para usar.

**Vite** crea un archivo `main.js` que es con el que trabajaré en lugar de `index.js`, esto solo porque me gusta más el nombre.

Habiendo borrado los archivos innecesarios añadimos lo siguiente:

`src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="./assets/images/icon-rick.svg"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <link rel="stylesheet" href="./styles/style.css" />
    <title>Scientist</title>
  </head>
  <body>
    <main class="Main">
      <header class="Header" id="header"></header>
      <section id="content">
        <div class="loading"></div>
      </section>
    </main>

    <script type="module" src="/main.js"></script>
  </body>
</html>
```

`src/main.js`

```js
console.log("Testing");
```

`src/pages/Home.js`

```js
const Home = () => {
  const view = `
    <div class="Characters">
      <article class="Character-item">
        <a href="#/1/">
          <img src="image" alt="name" />
          <h2>Name</h2>
        </a>
      </article>
    </div>
  `;

  return view;
};

export { Home };
```

Corremos:

```bash
# En caso de no haberlo ejecutado antes
yarn dev
```

Para compilar el proyecto:

```bash
# Crea la carpeta dist
yarn build
```

Todo esto nos deja la siguiente estructura:

```bash
.
├── dist
│   ├── assets
│   │   ├── index-Bb-5MHEG.js
│   │   └── javascript-rUa6gnWw.svg
│   └── index.html
├── node_modules
├── package.json
├── src
│   ├── index.html
│   ├── main.js
│   ├── pages
│   │   └── Home.js
│   ├── routes
│   ├── styles
│   │   └── style.css
│   └── utils
│       └── javascript.svg
├── vite.config.js
└── yarn.lock
```

📌 Recuerda que la carpeta `dist` se puede eliminar cuantas veces quieras, si la quieres volver a crear solo ejecutas el comando `yarn build` y listo.

## 6. Crear template de personajes

`src/templates/Header.js`

```js
const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1><a href="/">Scientist.co</a></h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">About</a>
      </div>
    </div>
  `;

  return view;
};

export { Header };
```

`src/pages/Character.js`

```js
const Character = () => {
  const view = `
    <div class="Character-inner">
      <article class="Characters-card">
        <img src="image" alt="name" />
        <h2>Name</h2>
      </article>
      <article class="Character-card">
        <h3>Episodes:</h3>
        <h3>Status:</h3>
        <h3>Species:</h3>
        <h3>Gender:</h3>
        <h3>Origin:</h3>
        <h3>Last Location:</h3>
      </article>
    </div>  
  `;

  return view;
};

export { Character };

// Abajo en javascript, luego buscar html
```

## 7. Crear página de error 404

`src/pages/Error404.js`

```js
const Error404 = () => {
  const view = `
    <div class="Error404">
      <h2>Error 404</h2>
    </div>
  `;

  return view;
};

export { Error404 };
```

📌 Algo que nos puede servir para escribir HTML dentro de un archivo JS, es irnos a la barra inferior de **VSC** y seleccionar JavaScript, esto hará aparecer un input de búsqueda, ingresa HTML y listo. Ahora el archivo reconoce HTML.

Recuerda el siguiente comando para visualizar en el navegador lo que estamos trabajando, en este caso debe mostrar un `console.log`

```bash
# En caso de no haberlo ejecutado antes
yarn dev
```

## 8. Crear rutas del sitio

`src/routes/index.js`

```js
import { Header } from "../templates/Header";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import { Error404 } from "../pages/Error404";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content =
    null || document.getElementById("content");

  header.innerHTML = await Header();
};

export { routes, router };
```

`src/main.js`

```js
import { router } from "./routes";

window.addEventListener("load", router);
```

## 9. Conectar las rutas con los templates

`src/utils/getHash.js`

```js
const getHash = () => {
  return ( //slide???
    location.hash
      .slice(1)
      .toLocaleLowerCase()
      .split("/")[1] || "/"
  );

  // ["", "1", ""]
};

export { getHash };
```

`src/utils/resolveRoutes.js`

```js
const resolveRoutes = (route) => {
  // There is a total of 826 (3) characters
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";

    return validRoute;
  }

  // /about
  return `/${route}`;
};

export { resolveRoutes };
```

[Character](https://rickandmortyapi.com/documentation/#character)

## 10. Implementar y probar las conexiones


`src/routes/index.js`

```js
import { Header } from "../templates/Header";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import { Error404 } from "../pages/Error404";
import { getHash } from "../utils/getHash";
import { resolveRoutes } from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content =
    null || document.getElementById("content");

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);

  // routes."/"
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export { routes, router };
```

`src/main.js`

```js
import { router } from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
```

## 11. Obtener personajes con la función de llamado a la API

`src/utils/getData.js`

```js
const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiUrl = id ? `${API}${id}` : API;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export { getData };
```

`src/pages/Home.js`

```js
import { getData } from "../utils/getData";

const Home = async () => {
  const characters = await getData();

  const view = `
    <div class="Characters">
      ${characters.results
        .map((character) => {
          return `
          <article class="Character-item">
            <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}" />
            <h2>${character.name}</h2>
            </a>
          </article>
          `;
        })
        .join("")}   
    </div>
  `;

  return view;
};

export { Home };
```

- [Rick and Morty: Documentación](https://rickandmortyapi.com/documentation)
- [Rick and Morty: Documentación](https://rickandmortyapi.com/documentation/#character)

## 12. Conectar la función con la descripción de personajes

`src/pages/Character.js`

```js
import { getHash } from "../utils/getHash";
import { getData } from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  console.log(character);

  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
      </article>
      <article class="Character-card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last Location: ${character.location.name}</h3>
      </article>
    </div>  
  `;

  return view;
};

export { Character };
```

## 13. Configurar CSS para administrar elementos visuales

Vite no necesita ser configurado para añadir estilos.

`src/styles/styles.css`

```css
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #3c484e;
  font-family: 'Open Sans', sans-serif;
}

.Header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Header a {
  text-decoration: none;
  color: #15302C;
}

.Main {
  padding: 10px;
  grid-template-columns: minmax(auto, 976px);
  display: grid;
  justify-content: center;
}

.Characters {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
}

.Characters-inner {
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
}

.Characters-card {
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  display: block;
  animation-duration: 2s;
  animation-name: fade;
}

.Characters-card img {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}

.Characters-card h2 {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}

.Characters-card h3 {
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin: 20px;
}

.Characters-item {
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  display: block;
  animation-duration: 2s;
  animation-name: fade;
}

.Characters-item img {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}

.Characters-item h2 {
  font-size: 18px;
  font-weight: 300;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}

.Characters-item a {
  text-decoration: none;
  color: #026C86;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.Main-loading {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

`src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link 
      rel="icon"
      type="image/svg+xml"
      href="./assets/images/icon-rick.svg"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <link 👈👀👇
      type="text/css"
      rel="stylesheet"
      href="./styles/styles.css"
    />
    <title>Scientist</title>
  </head>
  <body>
    <main class="Main">
      <header class="Header" id="header"></header>
      <section id="content">
        <div class="loading"></div>
      </section>
    </main>

    <script type="module" src="./main.js"></script>
  </body>
</html>
```

[Styles](https://gist.github.com/gndx/cf251e88979581d6228028710bbff87c)

## 14. Github Pages

Travis???

Crea un repositorio en GitHub, después enlázalo con tu repositorio local.

```bash
git remote add origin url-repo
git remote -v

# En caso de haber creado un README u otro archivo remoto
git pull origin master --allow-unrelated-histories --no-rebase
git push origin master

# Instalar gh-pages
yarn add gh-pages --dev
# También
yarn add gh-pages
```

Una vez instalado `gh-pages` debes añadir lo siguiente al archivo `package.json`

```json
{
  "name": "spa-rick-morty",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist" 👈👀
  },
  "devDependencies": {
    "vite": "^5.3.1"
  },
  "dependencies": { 👈👀
    "gh-pages": "^6.1.1"
  }
}
```

También añade el **nombre del repositorio remoto** al archivo `vite.config.js`

```js
// vite.config.js
export default {
  root: "src",
  server: {
    open: true,
  },
  build: {
    outDir: "../dist",
  },
  base: "/spa-rick-morty/", 👈👀
};
```

Asegúrate de actualizar tu repositorio remoto:

```bash
git push origin master
```

Ahora puedes ejecutar 

```bash
yarn build
yarn deploy
```

- [gh-pages apuntes](https://github.com/aleroses/Platzi/blob/master/DW/1-basico/005-git-github/gh-pages.md)
- [Repo en GitHub](https://github.com/alevroses/spa-rick-morty)
- [Despliegue](https://alevroses.github.io/spa-rick-morty/)
- [Apuntes del curso](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/023.SPA-js-vanilla/spa-js-vanilla.md)

## 15. Crear el script para enviar a producción

Ya lo hicimos en el punto 14 :3

## 16. Repaso, recomendaciones y tips para seguir aprendiendo

## 🔥 Examen

<details>
  <summary>Haz clic para ver los resultados 👀👇</summary>
  <br/>

1. ¿Cuál es el comando que nos permite ejecutar nuestro entorno de desarrollo local?

	- ✅ npm run start

2. toLowerCase es un método en JavaScript que permite convertir un string a mayúsculas

	- ✅ Falso

3. ¿Qué es Travis-CI?

	- ✅ Es un servicio de integración continua que se utiliza para construir y probar proyectos de software alojados en GitHub

4. ¿Cuál es el comando que utilizamos para iniciar nuestro proyecto en git?

	- ✅ git init

5. ¿Cuál de las siguientes es la etiqueta correcta para manejar el viewport?

	- ✅ `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

6. ¿En qué versión de ECMAScript se implementó async/await?

	- ✅ ECMAScript 8

7. Nos permite definir una función asíncrona:

	- ✅ async

8. ¿Cuál es la propuesta correcta para acceder a un elemento del DOM?

	- ✅ `const header = null || document.getElementById('header');`

9. ¿Para qué utilizamos babel?

	- ✅ Para hacer nuestro código más compatible con todas las versiones de navegadores

10. HTTP 404 no encontrado es un código de estado HTTP

	- ✅ Verdadero

11. ¿webpack-dev-server nos permite crear un entorno de desarrollo local?

	- ✅ Verdadero

12. html-webpack-plugin nos permite trabajar con los archivos HTML dentro de Webpack

	- ✅ Verdadero

13. ¿Cuál es la principal funcionalidad de Webpack?

	- ✅ Transforma nuestro desarrollo de una aplicación web para producción

14. ¿En qué versión de ECMAScript se implementaron los templates strings?

	- ✅ ECMAScript 6

15. ¿Cómo aseguramos el manejo adecuado de los errores asíncronos?

	- ✅ `try { ...código } catch (error) { ...código }`

</details>

👈👀
👈👀👇
👈👀👌
✅
📌

