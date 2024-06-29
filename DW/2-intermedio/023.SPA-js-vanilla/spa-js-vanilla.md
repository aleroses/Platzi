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

Webpack es obsoleto por lo que usaré **Vite** deséame suerte…

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
├── public
│   └── vite.svg
├── src 👈👀👇
│   ├── counter.js
│   ├── index.html
│   ├── javascript.svg
│   ├── main.js
│   ├── pages
│   ├── routes
│   ├── style.css
│   ├── styles
│   └── utils
├── vite.config.js 🔥
└── yarn.lock
```

En primera instancia, al ejecutar el comando `yarn dev` veremos un mensaje como este: `This localhost page can’t be found` para corregirlo dentro del archivo `vite.config.js` añadimos la siguiente configuración:

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

Ahora solo corregimos la ruta del logo dentro del archivo `main.js`, ten en cuenta que esta pantalla es un ejemplo y pronto eliminaremos los archivos generados automáticamente desde el inicio.

## 4. Preparar Webpack (Vite)

Me parece que al estar usando Vite no debemos hacer mayor configuración, es así de simple y rápido…

## 5. Crear el Home

Si revisas el archivo `package.json` ya lo tenemos todo preparado para usar.

**Vite** crea un archivo `main.js` que es con el que trabajaré en lugar de `index.js`, esto solo porque me gusta más el nombre.

Borramos los archivos innecesarios y añadimos lo siguiente:

`src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="./utils/javascript.svg"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
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
├── public
│   └── vite.svg
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

Estructura:

```bash
.
├── dist
│   ├── assets
│   │   ├── index-Bb-5MHEG.js
│   │   └── javascript-rUa6gnWw.svg
│   └── index.html
├── node_modules
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── index.html
│   ├── main.js
│   ├── pages
│   │   ├── Character.js 👈👀
│   │   └── Home.js
│   ├── routes
│   ├── styles
│   │   └── style.css
│   ├── templates
│   │   └── Header.js 👈👀
│   └── utils
│       └── javascript.svg
├── vite.config.js
└── yarn.lock
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
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";

    return validRoute;
  }

  // /about
  return `/${route}`;
};

export { resolveRoutes };
```

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
const API = "https://rickandmortyapi.com/api/character";

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
    </div>
        `;
        })
        .join("")}   
  `;

  return view;
};

export { Home };
```

- [Rick and Morty: Documentación](https://rickandmortyapi.com/documentation)
- [Rick and Morty: Documentación](https://rickandmortyapi.com/documentation/#character)

## 12. Conectar la función con la descripción de personajes



`src/main.js`

```js
console.log("Testing");
```

`src/main.js`

```js
console.log("Testing");
```

`src/main.js`

```js
console.log("Testing");
```

`src/main.js`

```js
console.log("Testing");
```





👈👀
👈👀👇
👈👀👌

📌

`src/main.js`

```js
console.log("Testing");
```


Estos apuntes salvan el curso (Vite) 