# Curso de React.js

[Curso de React.js](https://platzi.com/cursos/react/)   
> Inicio: `03-09-2023`
> Finalización: ``

## 1. ¿Qué necesitas para aprender React.js?

- Programación Básica 
- HTML y CSS
- JavaScript 
- Git y GitHub 
- NPM 

### Inicializar proyecto  
```bash
git clone git@github.com:platzi/curso-react-intro.git
cd curso-react-intro 
npm i
```

Si te aparece algo como esto, tranqui, según leí, esto no nos dará problemas pero ya veremos que pasa...   

```bash
╰─ npm i
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native
performance.now() and performance.timeOrigin.
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer sup
ported. Upgrade to v2.x.x.
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Arr
ay#sort() is a stable sort, so this library is deprecated. See the
 compatibility table on MDN: https://developer.mozilla.org/en-US/d
ocs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_com
patibility

added 1393 packages, and audited 1394 packages in 26s

212 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (3 moderate, 9 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

Veamos como arranca nuestro proyecto: 

```bash
npm start 
```

- [Repo: Curso react intro](https://github.com/platzi/curso-react-intro)  
- [ReactWiki by: midudev](https://www.reactjs.wiki/)
- [Proyecto Task tune](https://tasktune.netlify.app/)
- [Repo Task tune](https://github.com/GersenX3/taskTune)

## 2. ¿Qué es un componente? 

En React, un componente es una pieza fundamental para construir interfaces de usuario reutilizables y modulares. Puedes considerar un componente como un bloque de construcción que encapsula la lógica y la representación visual de una parte específica de la interfaz de usuario.

En React, los componentes se crean utilizando JavaScript y se escriben como clases o funciones. Las clases se definen extendiendo la clase base `React.Component`, mientras que las funciones son componentes de función. Con la introducción de los Hooks en React, las funciones también pueden tener estado y realizar acciones adicionales como componentes de clase.

Un componente en React puede aceptar entradas llamadas "props" (abreviatura de propiedades) y devuelve elementos React que describen lo que se debe mostrar en la interfaz de usuario. Las props son objetos que contienen datos y se pasan al componente desde su padre. Estos datos pueden ser cualquier cosa, desde cadenas de texto hasta funciones o incluso componentes completos.

Aquí hay un ejemplo sencillo de un componente de función en React que muestra un saludo personalizado:

```jsx
import React from 'react';

function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

export default Saludo;
```

Este componente de función llamado `Saludo` acepta una prop llamada `nombre` y muestra un saludo personalizado. Puede ser utilizado en otros componentes de la siguiente manera:

```jsx
import React from 'react';
import Saludo from './Saludo';

function App() {
  return (
    <div>
      <Saludo nombre="Juan" />
      <Saludo nombre="María" />
    </div>
  );
}

export default App;
```

En este ejemplo, `Saludo` se utiliza como un componente dentro de `App` y se le pasan diferentes valores para la prop `nombre`. Como resultado, se mostrarán dos saludos personalizados en la interfaz de usuario.

### Principales formas de crear componentes

1. Componentes de clase: Antes de la introducción de los Hooks en React, los componentes de clase eran la forma principal de crear componentes. Los componentes de clase son clases de JavaScript que extienden la clase base `React.Component`. Dentro de la clase, se define el método `render()` que devuelve los elementos React que describen la interfaz de usuario. Aquí tienes un ejemplo de un componente de clase:

```jsx
import React from 'react';

class MiComponente extends React.Component {
  render() {
    return <h1>Hola desde un componente de clase!</h1>;
  }
}

export default MiComponente;
```

2. Componentes de función: Con la introducción de los Hooks en React, los componentes de función se volvieron más populares. Los componentes de función son simplemente funciones de JavaScript que devuelven elementos React. Pueden aceptar props y también pueden tener estado y realizar acciones adicionales utilizando Hooks. Aquí tienes un ejemplo de un componente de función:

```jsx
import React from 'react';

function MiComponente() {
  return <h1>Hola desde un componente de función!</h1>;
}

export default MiComponente;
```

Ambas formas de crear componentes son válidas en React, pero los componentes de función con Hooks se han vuelto más comunes debido a su simplicidad y capacidad de reutilización. Sin embargo, las clases todavía se utilizan en casos específicos, especialmente en proyectos heredados o en bibliotecas y frameworks que aún no han adoptado completamente los Hooks.

Los componentes en React ofrecen una forma poderosa y flexible de construir interfaces de usuario reutilizables y mantener un código ordenado y fácil de mantener. Puedes combinar y anidar componentes para construir aplicaciones más complejas y escalables.

### JavaScript XML (JSX)

JSX (JavaScript XML) es una extensión de sintaxis utilizada en React y otras bibliotecas similares para construir interfaces de usuario. JSX combina JavaScript y XML (lenguaje de marcado extensible) para definir la estructura y apariencia de los componentes de React.

En lugar de utilizar métodos tradicionales para crear elementos de interfaz de usuario, JSX permite escribir código similar a HTML dentro de archivos JavaScript. Esto facilita la creación de componentes reutilizables y mejora la legibilidad del código.

JSX (JavaScript XML) se utiliza en React para escribir las estructuras y el contenido de los componentes de la interfaz de usuario de manera declarativa.

Cuando se escribe código JSX, se puede pensar en él como una mezcla de JavaScript y código HTML/XML. Permite combinar la lógica de JavaScript con la representación visual de la interfaz de usuario en un solo lugar.

Aquí hay un ejemplo sencillo de cómo se utiliza JSX en un componente de función en React:

```jsx
import React from 'react';

function MiComponente() {
  return (
    <div> 👈👀👇
      <h1>Hola, mundo!</h1>
      <p>Este es un ejemplo de JSX en React.</p>
    </div>
  );
}

export default MiComponente;
```

En este ejemplo, el código dentro de las etiquetas `<div>` es JSX. Puedes ver que se mezclan elementos HTML (`<h1>`, `<p>`) con código JavaScript (`{}`) para agregar lógica o referenciar variables dentro del JSX.

JSX se transpila a JavaScript puro utilizando herramientas como Babel durante el proceso de construcción de la aplicación. Esto significa que aunque estés escribiendo código JSX y este se vea similar a HTML, en última instancia se traduce a JavaScript puro que puede ser interpretado por el navegador o por el entorno de ejecución de JavaScript.

En resumen, JSX se utiliza en React para definir la estructura de la interfaz de usuario de manera declarativa y combinar el código JavaScript con la representación visual. Facilita la creación de componentes reutilizables y el desarrollo de interfaces de usuario dinámicas y interactivas.

### Nomenclatura PascalCase 

Cuando se utiliza JSX (una extensión de sintaxis de JavaScript utilizada en React), los nombres de componentes deben comenzar con una letra mayúscula para que React pueda diferenciar entre componentes y elementos JSX.

```jsx
import React from 'react';

// Componente personalizado con nombre en PascalCase
class MyCustomComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

// Elemento JSX con nombre en minúsculas
const myHtmlElement = <div>Hello, World!</div>;

// Uso de componentes en React
const App = () => {
  return (
    <div>
      <MyCustomComponent />
      {myHtmlElement}
    </div>
  );
};
```

### Carpetas y Archivos de la clase   

#### Archivo `package.json`  

El archivo `package.json` es un archivo de configuración utilizado en proyectos de Node.js y en particular en proyectos de React. Contiene información sobre el proyecto y sus dependencias, así como scripts personalizados y configuraciones adicionales. 

Explicación breve del contenido del archivo `package.json`:

- `"name"`: Es el nombre del proyecto, en este caso, "platzi-intro-react-base".
- `"version"`: Es la versión actual del proyecto, en este caso, "0.1.0".
- `"dependencies"`: Es un objeto que enumera las dependencias del proyecto junto con sus versiones. En este caso, las dependencias son "react", "react-dom", "react-scripts" y "web-vitals".
- `"scripts"`: Es un objeto que define comandos de script que puedes ejecutar en el proyecto. En este caso, los scripts son "start", "build" y "eject", que están asociados a los comandos proporcionados por "react-scripts".
- `"eslintConfig"`: Es un objeto que contiene la configuración de ESLint, una herramienta de linting de JavaScript. En este caso, se extiende la configuración "react-app" predefinida.
- `"browserslist"`: Es un objeto que define la lista de navegadores a los que se dirige el proyecto en diferentes entornos (producción y desarrollo), lo cual es útil para la compatibilidad con los navegadores.

El archivo `package.json` es importante porque permite gestionar las dependencias del proyecto, ejecutar scripts personalizados y proporciona información esencial sobre el proyecto en general.

##### Dependencia

Una dependencia es un elemento externo utilizado por un proyecto para funcionar correctamente. Puede ser una biblioteca, un framework, un módulo o cualquier otro componente que el proyecto necesita para cumplir con sus requisitos y funcionalidades.

Las dependencias se utilizan para aprovechar el trabajo previo realizado por otros desarrolladores y para acceder a funcionalidades específicas sin tener que implementarlas desde cero. Al utilizar dependencias, los desarrolladores pueden ahorrar tiempo y esfuerzo, ya que no necesitan reinventar la rueda y pueden construir sobre componentes ya existentes y bien probados.

En el caso de aplicaciones en React, como en el ejemplo del archivo `package.json`, las dependencias especificadas indican las bibliotecas y módulos que el proyecto necesita para ejecutarse correctamente. Por ejemplo, "react" y "react-dom" son dependencias fundamentales para construir aplicaciones en React, mientras que "react-scripts" es una herramienta que simplifica el proceso de desarrollo y construcción de la aplicación.

Las dependencias se gestionan utilizando un gestor de paquetes, como npm (Node Package Manager) en el caso de proyectos de Node.js. El gestor de paquetes se encarga de descargar, instalar y mantener actualizadas las dependencias del proyecto, asegurando que todas las piezas encajen correctamente.

##### ESLint

ESLint es una herramienta de linting de código estática para JavaScript. Su objetivo principal es identificar y reportar patrones problemáticos o errores en el código JavaScript, ayudando a mantener un código limpio, legible y libre de errores.

Estas son algunas de las principales razones por las que se utiliza ESLint en proyectos de JavaScript:

1. **Detección temprana de errores y problemas de código**: ESLint analiza el código y señala posibles errores, inconsistencias y malas prácticas. Esto permite identificar problemas en etapas tempranas del desarrollo, evitando que se propaguen y se conviertan en problemas más graves o difíciles de solucionar.

2. **Consistencia y buenas prácticas de codificación**: ESLint ayuda a aplicar y hacer cumplir un conjunto de reglas y convenciones de codificación en todo el proyecto. Esto asegura que todos los desarrolladores sigan un estilo de codificación coherente, facilitando la lectura y colaboración en el código.

3. **Configuración personalizada**: ESLint permite personalizar las reglas y configuraciones según las necesidades del proyecto y del equipo. Se pueden habilitar o deshabilitar reglas específicas, ajustar el nivel de severidad de los errores, e incluso crear reglas personalizadas para adaptarse a los estándares y requisitos del proyecto.

4. **Integración en el flujo de desarrollo**: ESLint se integra con el flujo de trabajo de desarrollo, ya sea a través de la línea de comandos o mediante la integración con editores de código y entornos de desarrollo integrados (IDE). Esto permite que las verificaciones de ESLint se realicen automáticamente durante la escritura del código, proporcionando retroalimentación instantánea al desarrollador.

5. **Compatibilidad con proyectos y frameworks populares**: ESLint es ampliamente compatible con una variedad de proyectos y frameworks de JavaScript, incluyendo React, Vue.js, Angular, Node.js, entre otros. Esto permite aplicar reglas y configuraciones específicas para cada uno de estos proyectos y frameworks.

En resumen, ESLint se utiliza para mejorar la calidad y legibilidad del código JavaScript, ayudando a encontrar y corregir errores, aplicar convenciones de codificación y mantener un estilo de codificación consistente en todo el proyecto.

#### Carpeta `public` y `src`

En proyectos de React, como en muchos otros frameworks y bibliotecas de desarrollo web, las carpetas "public" y "src" desempeñan roles importantes en la estructura y organización del proyecto. 

Explicación del uso de cada una de estas carpetas:

1. Carpeta "public":
La carpeta "public" contiene los archivos estáticos que se sirven directamente al navegador sin procesamiento por parte de React u otras herramientas de compilación. Algunos de los archivos comunes que se encuentran en esta carpeta son el archivo HTML principal, imágenes, fuentes, archivos de manifest para aplicaciones web progresivas, entre otros. Estos archivos están disponibles públicamente y son accesibles desde la raíz del dominio o subdirectorio donde se encuentra alojada la aplicación.

2. Carpeta "src":
La carpeta "src" es el corazón del proyecto de React y contiene la mayor parte del código fuente de la aplicación. Aquí se encuentran los componentes de React, estilos CSS, archivos JavaScript, imágenes y otros recursos utilizados en la construcción de la interfaz de usuario. La estructura interna de la carpeta "src" puede variar según las preferencias y la arquitectura del proyecto, pero generalmente se organiza en subcarpetas temáticas o basadas en características, como "components" (componentes reutilizables), "pages" (páginas de la aplicación), "styles" (estilos CSS), entre otros.

Es importante destacar que la carpeta "src" es el punto de entrada para el proceso de compilación y construcción del proyecto. Las herramientas de construcción, como Webpack o Babel, toman el código fuente de la carpeta "src" y lo transforman en un bundle (paquete) optimizado y listo para ser servido en el navegador. Es en esta carpeta donde se realiza el desarrollo activo de la aplicación, escribiendo código, creando componentes y definiendo la lógica de la interfaz de usuario.

En resumen, la carpeta "public" contiene los archivos estáticos que se sirven directamente al navegador, mientras que la carpeta "src" alberga el código fuente de la aplicación de React, incluyendo componentes, estilos y otros recursos. Ambas carpetas tienen roles distintos pero complementarios en la estructura y construcción del proyecto de React.

#### Archivo `robots.txt`

El archivo `robots.txt` es un archivo de texto utilizado para comunicarse con los robots de los motores de búsqueda, como los rastreadores de los buscadores web. Su objetivo principal es indicar a estos robots qué partes del sitio web deben ser rastreadas o no.

Cuando un robot de búsqueda visita un sitio web, lo primero que hace es buscar y leer el archivo `robots.txt` en la raíz del dominio. Este archivo proporciona directivas específicas para los rastreadores, indicándoles qué páginas o secciones del sitio deben ser accedidas y cuáles deben ser ignoradas.

El formato básico de un archivo `robots.txt` es el siguiente:

```
User-agent: [nombre_del_robot]
Disallow: [ruta_del_directorio_o_archivo_a_excluir]
Allow: [ruta_del_directorio_o_archivo_a_permitir]

User-agent: *
Disallow: [ruta_del_directorio_o_archivo_a_excluir]
Allow: [ruta_del_directorio_o_archivo_a_permi
```

[Más info](https://www.robotstxt.org/robotstxt.html)

### Código de la clase 

Habiendo echado un vistazo a las carpetas y archivos más relevantes del proyecto, ahora toca centrarnos en el archivo `index.html` dentro de carpeta `public` también en los archivos `index.js` y `App.js` de la carpeta `src`.  

`src > App.js`  

```js
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem/> {/* 👈👀 */}
      <TodoItem/> {/* 👈👀 */}
      <TodoItem/> {/* 👈👀 */}
      <TodoItem/> {/* 👈👀 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>✔</span>
      <p>Don't cry</p>
      <span>❌</span>
    </li>
  )
}

export default App;
```

Este código es un ejemplo de un componente de React llamado `App`.

Explicación paso a paso del código:

1. `import logo from './platzi.webp';`: Esta línea de código importa el archivo `platzi.webp` y lo asigna a la variable `logo` puedo haber sido cualquier nombre, en este caso se eligió el nombre de logo para hacer referencia a esa imagen. Esto se hace utilizando la sintaxis de importación de JavaScript. El archivo `platzi.webp` se importa para ser utilizado posteriormente en el componente `App`.

2. `import './App.css';`: Esta línea de código importa el archivo `App.css`, que contiene estilos CSS específicos para el componente `App`. Los estilos importados se aplicarán a los elementos dentro del componente `App`.

3. La función `App()`: Esta función es el componente principal llamado `App`. Es una función de React que devuelve un elemento JSX que define la estructura y la apariencia del componente.

4. El contenido dentro de `<div className="App">...</div>`: Este es el contenido principal del componente `App`. Contiene varios elementos JSX que representan una lista de elementos `TodoItem`, un encabezado con una imagen, un párrafo y un enlace.

5. `<TodoItem/>`: Esta línea de código renderiza el componente `TodoItem`. El componente `TodoItem` es una función separada que devuelve un elemento JSX que representa un elemento de una lista de tareas pendientes.

6. `<img src={logo} className="App-logo" alt="logo" />`: Esta línea de código muestra una imagen en el componente `App`. Utiliza la variable `logo` importada anteriormente como la fuente (`src`) de la imagen.

7. `<p>...</p>`: Este es un elemento de párrafo que muestra un texto.

8. `<a ...>...</a>`: Este es un elemento de enlace que muestra un texto y tiene un atributo `href` que apunta a un sitio web externo.

9. `function TodoItem() { ... }`: Esta es una función separada que define el componente `TodoItem`. Es un componente simple que devuelve un elemento JSX que representa un elemento de una lista de tareas pendientes.

10. `export default App;`: Esta línea de código exporta el componente `App` para que pueda ser utilizado en otros archivos de la aplicación.

Si nos fijamos también estamos usando clases como la siguiente `<div 👉className="App">`, pero se utiliza `className` en lugar de `class` debido a que estamos escribiendo código en JSX, que es una extensión de sintaxis de JavaScript utilizada en React.

En JavaScript, `class` es una palabra clave reservada para definir clases. Como JSX es una mezcla de JavaScript y XML, se utiliza la convención de usar `className` en lugar de `class` para asignar una clase CSS a elementos JSX. Esto se hace para evitar conflictos con la palabra clave `class` de JavaScript.

Es importante tener en cuenta que en el DOM resultante, el atributo `className` se renderizará como `class`. Esto significa que en el navegador, el elemento `<div className="App">` se representará como `<div class="App">`, y se aplicarán los estilos CSS correspondientes definidos en el archivo `App.css`.

`src > index.js`  

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Este código importa las bibliotecas necesarias y renderiza el componente principal de la aplicación en el elemento con el ID "root". 

Explicación paso a paso:  

1. `import React from 'react';`: Esta línea de código importa la biblioteca principal de React, que es necesaria para utilizar los componentes y la funcionalidad de React.

2. `import ReactDOM from 'react-dom/client';`: Esta línea de código importa la biblioteca `ReactDOM` que proporciona métodos para interactuar con el DOM (Document Object Model) y renderizar los componentes de React en el navegador. En este caso, estás importando una versión específica de `ReactDOM` llamada `react-dom/client`.

3. `import './index.css';`: Esta línea de código importa el archivo CSS llamado `index.css`. Este archivo contiene estilos CSS específicos para la aplicación.

4. `import App from './App';`: Esta línea de código importa el componente `App` desde el archivo `App.js` o `App.jsx` en el mismo directorio. El componente `App` es el componente principal de la aplicación.

5. `const root = ReactDOM.createRoot(document.getElementById('root'));`: Esta línea de código utiliza el método `createRoot` de `ReactDOM` para crear un "root" (raíz) de la aplicación. El elemento HTML con el ID "root" se pasa como argumento a `createRoot`. Esto establece el punto de entrada para el renderizado de la aplicación.

6. `root.render(<App />);`: Esta línea de código llama al método `render` del objeto `root` creado anteriormente. El método `render` toma como argumento el componente `App` encapsulado en JSX (`<App />`) y se encarga de renderizar ese componente en el elemento raíz de la aplicación.

En resumen, el código importa las bibliotecas necesarias, establece el punto de entrada para el renderizado de la aplicación en el elemento con el ID "root", y finalmente renderiza el componente `App` en ese punto de entrada. Esto inicia la ejecución de la aplicación y muestra el contenido del componente `App` en el navegador.

`public > index.html`  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" /> <!-- Define la codificación de caracteres del documento -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> <!-- Enlace al ícono del sitio web -->
    <meta name="viewport" content="width=device-width, initial-scale=1" /> <!-- Configuración de la vista en dispositivos móviles -->
    <meta name="theme-color" content="#97ca3f" /> <!-- Define el color de tema de la aplicación -->
    <meta name="description" content="Web site created using create-react-app" /> <!-- Descripción del sitio web -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/react192.png" /> <!-- Enlace al ícono de la aplicación en dispositivos Apple -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> <!-- Enlace al archivo de manifiesto de la aplicación web -->
    <title>React App</title> <!-- Título de la página web -->
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript> <!-- Mensaje para navegadores sin JavaScript habilitado -->
    <div id="root"></div> <!-- Punto de montaje para la aplicación de React -->
  </body>
</html>
```

En resumen, tenemos 3 archivos que se van a enlazar e interactuar entre sí, ver la estructura actual. 

```bash
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html 👈👀
│   ├── manifest.json
│   ├── react192.png
│   ├── react512.png
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js 👈👀
    ├── index.css
    ├── index.js 👈👀
    └── platzi.webp
```

![](https://i.postimg.cc/rz6Fg7Rf/2-component.png)

### Web scraping

Web scraping es el proceso de extraer información o datos de sitios web de manera automatizada. Consiste en utilizar un programa o un conjunto de herramientas para analizar y recopilar datos de las páginas web, generalmente a través del análisis del código HTML de esas páginas.

El objetivo del web scraping es obtener datos estructurados y relevantes de las páginas web para su posterior uso o análisis. Puede implicar la extracción de texto, imágenes, enlaces, tablas u otros elementos específicos de una página web.

El proceso de web scraping suele seguir estos pasos:

1. Obtener la URL del sitio web desde el cual se desea extraer los datos.
2. Descargar el código fuente HTML de la página web.
3. Analizar el código HTML para identificar los elementos de interés, como etiquetas, clases o identificadores específicos.
4. Extraer los datos deseados utilizando técnicas como la búsqueda, filtrado o extracción basada en patrones.
5. Almacenar los datos extraídos en un formato estructurado, como un archivo CSV, JSON o una base de datos.

El web scraping puede tener diversas aplicaciones, como la recopilación de información para análisis de mercado, seguimiento de precios, comparación de productos, monitoreo de noticias, obtención de datos para investigación o generación de conjuntos de datos para entrenar modelos de aprendizaje automático, entre otros.

Es importante tener en cuenta que al realizar web scraping, es fundamental respetar los términos de servicio y las políticas de privacidad de los sitios web. Algunos sitios pueden tener restricciones o prohibiciones sobre la extracción automatizada de datos, por lo que es recomendable revisar y cumplir con las políticas de cada sitio antes de realizar web scraping.


### Documentación oficial de React
- [Documentación React](https://react.dev/)  
- [Documentación React Español](https://es.react.dev/)  

Complementos: 
- [Curso de React 2023 por midudev](https://youtu.be/7iobxzd_2wY)
- [Aprende React Desde Cero - Curso de React Con Proyectos](https://www.youtube.com/watch?v=6Jfk8ic3KVk)

### Dato útil

[Autocompletado de elementos JSX](https://www.youtube.com/watch?v=jIjws68ATY8)

Para poder tener autocompletado de elementos JSX en React debes agregar lo siguiente dentro de las configuraciones de Visual Studio Code: `(Ctrl + ,)` y luego en el icono de la parte superior derecha ↪📄

```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}
```

## 3. Componentes de TODO Machine

### Código de la clase 

Vamos a crear diferentes componentes, cada uno con su respectivo archivo, de tal manera que se vea tal cual la siguiente estructura: 

```bash
╰─ tree -L 2
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── react192.png
│   ├── react512.png
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js 🦄✨
    ├── TodoButton.js 👈👀
    ├── TodoCounter.js 👈👀
    ├── TodoItem.js 👈👀
    ├── TodoList.js 👈👀
    ├── TodoSearch.js 👈👀
    ├── index.css
    ├── index.js
    └── platzi.webp
```

`src > TodoCounter.js`  
```js
function TodoCounter() {
  return <h1>Has completado 3 de 5 ToDos</h1>;
}

export { TodoCounter };
```

`src > TodoSearch.js`  
```js
function TodoSearch() {
  return <input placeholder="Lorem lorem lorem" />;
}

export { TodoSearch };
```

`src > TodoList.js`  
```js
function TodoList(props) {
  return <ul>{props.children}</ul>;
}

export { TodoList };
```

`src > TodoItem.js`  
```js
function TodoItem() {
  return (
    <li>
      <span>✔</span>
      <p>Don't cry</p>
      <span>❌</span>
    </li>
  );
}

export { TodoItem };
```

`src > TodoButton.js`  
```js
function TodoButton() {
  return <button>❤</button>;
}

export { TodoButton };
```

Una vez tenemos creado los componentes, ahora si podemos importarlos en nuestro archivo `App.js`. 

```js
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <TodoButton />
    </div>
  );
}

export default App;
```


📌 Dato: Si queremos importar de manera rápida un componente previamente creado, podemos presionar `Ctrl + Barra Espaciadora` sobre la invocación del componente, en este caso podría ser `<TodoButton👈👀 />` y luego damos enter. 

### Props 

En React, los props (abreviatura de "propiedades") son uno de los conceptos fundamentales para pasar datos y configuraciones entre componentes. Los props son utilizados para transmitir información desde un componente padre a un componente hijo.

Cuando creas un componente en React, puedes pasarle datos utilizando atributos similares a los atributos HTML. Estos datos se denominan props y se pasan como argumentos al componente en su declaración. Los props son objetos que contienen pares clave-valor, donde la clave es el nombre del prop y el valor es el dato que se está pasando.

Aquí tienes un ejemplo básico para ilustrar cómo se utilizan los props:

```jsx
// ComponentePadre.js
import React from 'react';
import ComponenteHijo from './ComponenteHijo';

const ComponentePadre = () => {
  const nombre = 'Juan';
  const edad = 25;

  return (
    <div>
      <ComponenteHijo nombre={nombre} edad={edad} />
    </div>
  );
};

export default ComponentePadre;
```

```jsx
// ComponenteHijo.js
import React from 'react';

const ComponenteHijo = (props) => {
  return (
    <div>
      <h2>Nombre: {props.nombre}</h2>
      <p>Edad: {props.edad}</p>
    </div>
  );
};

export default ComponenteHijo;
```

En el ejemplo anterior, el componente `ComponentePadre` pasa los props `nombre` y `edad` al componente `ComponenteHijo`. El componente hijo recibe los props como argumento en su función y puede acceder a ellos utilizando la sintaxis `props.propName`. En este caso, se muestra el nombre y la edad recibidos en el componente hijo.

Los props son de solo lectura, lo que significa que no se deben modificar dentro del componente hijo. Si necesitas modificar datos dentro de un componente, puedes utilizar el estado (state). Los props se utilizan principalmente para transmitir datos estáticos o configuraciones entre componentes.

Además de los datos primitivos como cadenas de texto o números, también puedes pasar funciones como props para permitir la comunicación entre componentes y manejar eventos o acciones en el componente padre.

En resumen, los props en React son utilizados para pasar datos y configuraciones entre componentes. Permiten la comunicación unidireccional desde un componente padre a un componente hijo. Los props son de solo lectura y se accede a ellos dentro del componente hijo a través del objeto `props`.

### Exportar e Importar Componentes 

En React, existen diferentes formas de exportar e importar componentes. Las dos formas mencionadas en clase son `export default App;` y `export { App };`, son dos enfoques distintos para exportar un componente desde un archivo.

1. `export default App;`: Esta sintaxis se utiliza para exportar un solo valor por defecto desde un archivo. Es comúnmente utilizado para exportar el componente principal de una aplicación React. Solo se puede tener un valor `default` por archivo. Al importar el componente en otro archivo, no es necesario usar llaves de desestructuración y se puede elegir cualquier nombre para el componente importado.

Ejemplo de exportación:
```js
// App.js
import React from 'react';

const App = () => {
  // ...
};

export default App;
```

Ejemplo de importación:
```js
// OtroArchivo.js
import MiComponente from './App'; // No se usan llaves de desestructuración

// ...
```

2. `export { App };`: Esta sintaxis se utiliza para exportar uno o varios valores específicos desde un archivo. Puedes exportar múltiples componentes o variables utilizando esta sintaxis. Al importar los valores en otro archivo, debes usar llaves de desestructuración y respetar el nombre exacto utilizado en la exportación.

Ejemplo de exportación:
```js
// Componentes.js
import React from 'react';

const Componente1 = () => {
  // ...
};

const Componente2 = () => {
  // ...
};

export { Componente1, Componente2 };
```

Ejemplo de importación:
```js
// OtroArchivo.js
import { Componente1, Componente2 } from './Componentes'; // Se usan llaves de desestructuración

// ...
```

En resumen, `export default` se utiliza para exportar un solo valor por defecto, mientras que `export { }` se utiliza para exportar múltiples valores específicos. La elección de cuál usar depende de la estructura y necesidades de tu aplicación.

- [Extensión: ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) rfce

## 4. ¿Cómo se comunican los componentes? Props y atributos

### Desestructuración

La desestructuración es una característica de JavaScript que también se puede utilizar en React como una alternativa para acceder a los props de manera más concisa y directa. En lugar de acceder a los props a través del objeto `props.propName`, puedes extraer los props específicos que necesitas y utilizarlos directamente en tu componente.

Aquí tienes un ejemplo que muestra cómo se utiliza la desestructuración con los props:

```jsx
// ComponenteHijo.js
import React from 'react';

const ComponenteHijo = ({ nombre, edad }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <p>Edad: {edad}</p>
    </div>
  );
};

export default ComponenteHijo;
```

En este ejemplo, en lugar de utilizar `props.nombre` y `props.edad`, hemos desestructurado los props en los parámetros de la función del componente hijo: `({ nombre, edad })`. Esto significa que solo estamos extrayendo los valores de `nombre` y `edad` del objeto `props`, lo que nos permite utilizar directamente esas variables en el componente sin necesidad de acceder a través de `props`.

Es importante destacar que la desestructuración solo extrae los props necesarios del objeto `props`. Si hay otros props que no se han desestructurado, seguirán estando disponibles en el objeto `props`.

En resumen, la desestructuración es una característica de JavaScript que se puede utilizar en React para acceder a los props de manera más concisa y directa. Permite extraer los props necesarios y utilizarlos como variables individuales en lugar de acceder a través del objeto `props`. Esto simplifica la sintaxis y mejora la legibilidad del código.


### Propiedad Children 

La prop `children` en React es una prop especial que permite pasar contenido entre las etiquetas de apertura y cierre de un componente. Esta prop se utiliza para transmitir elementos hijos directos a un componente y proporciona una forma flexible de componer componentes y anidar contenido dentro de ellos.

Cuando utilizas la prop `children`, puedes incluir cualquier tipo de contenido dentro del componente, ya sean elementos de React, texto, números u otros componentes. Puedes pensar en `children` como el espacio reservado para el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente.

Aquí tienes un ejemplo para ilustrar cómo se utiliza la prop `children`:

```jsx
// ComponentePadre.js
import React from 'react';

const ComponentePadre = () => {
  return (
    <div>
      <h1>Título del componente padre</h1>
      <ComponenteHijo>
        <p>Este es un párrafo dentro del componente hijo.</p>
        <button>Haz clic</button>
      </ComponenteHijo>
    </div>
  );
};

export default ComponentePadre;
```

```jsx
// ComponenteHijo.js
import React from 'react';

const ComponenteHijo = ({ children }) => {
  return (
    <div>
      <h2>Componente Hijo</h2>
      {children}
    </div>
  );
};

export default ComponenteHijo;
```

En este ejemplo, el componente `ComponentePadre` pasa contenido entre las etiquetas de apertura y cierre del componente `ComponenteHijo`. El contenido incluye un párrafo y un botón. En el componente hijo, utilizamos la prop `children` para mostrar el contenido pasado.

La prop `children` puede utilizarse de diversas formas en el componente receptor. Puede ser renderizada directamente utilizando `{children}` como en el ejemplo anterior, o puedes manipularla, recorrerla o aplicarle lógica según tus necesidades.

Es importante mencionar que el componente receptor puede tener otros props además de `children`. Puedes combinar la prop `children` con otros props para crear componentes más flexibles y reutilizables.

La prop `children` permite componer componentes de manera dinámica y anidar contenido de una forma intuitiva. Es útil cuando deseas que un componente contenga contenido variable o cuando necesitas crear componentes reutilizables que pueden envolver otros elementos o componentes.

En resumen, la prop `children` en React permite pasar contenido entre las etiquetas de apertura y cierre de un componente. Es una forma de componer componentes y anidar contenido dentro de ellos. Puedes utilizar cualquier tipo de contenido, como elementos de React, texto o componentes, y acceder a él utilizando la prop `children` en el componente receptor.

### `<React.Fragment>` o `<> </>`

En React, `<React.Fragment>` o `<> </>` (también conocido como JSX Fragment) es una característica que te permite agrupar múltiples elementos hijos sin necesidad de agregar un elemento contenedor adicional como un div.

Cuando trabajas con JSX en React, generalmente se espera que devuelvas un solo elemento JSX en el método `render()` de un componente. Sin embargo, puede haber situaciones en las que desees renderizar varios elementos adyacentes sin envolverlos en un elemento contenedor adicional. Aquí es donde `<React.Fragment>` o `<> </>` resultan útiles.

Aquí tienes un ejemplo para ilustrar cómo se utiliza `<React.Fragment>`:

```jsx
import React from 'react';

const ComponentePadre = () => {
  return (
    <React.Fragment>
      <h1>Título del componente</h1>
      <p>Este es un párrafo dentro del componente.</p>
      <button>Haz clic</button>
    </React.Fragment>
  );
};

export default ComponentePadre;
```

En este ejemplo, hemos utilizado `<React.Fragment>` para envolver múltiples elementos adyacentes: un encabezado (`<h1>`), un párrafo (`<p>`) y un botón (`<button>`). `<React.Fragment>` no genera un elemento adicional en el DOM, sino que solo actúa como un contenedor imaginario para agrupar los elementos.

Una forma más corta y concisa de utilizar fragmentos es utilizando la sintaxis `<> </>` (también conocida como fragment shorthand o fragmento abreviado) en lugar de `<React.Fragment>`:

```jsx
import React from 'react';

const ComponentePadre = () => {
  return (
    <>
      <h1>Título del componente</h1>
      <p>Este es un párrafo dentro del componente.</p>
      <button>Haz clic</button>
    </>
  );
};

export default ComponentePadre;
```

En este caso, hemos utilizado `<> </>` en lugar de `<React.Fragment>`, lo cual es una forma más compacta y legible de lograr el mismo resultado.

Al utilizar `<React.Fragment>` o `<> </>`, puedes agrupar elementos sin crear nodos adicionales en el DOM. Esto puede ser útil cuando necesitas renderizar una lista de elementos sin agregar un contenedor adicional o cuando deseas evitar estilos o efectos no deseados que podrían ser aplicados por el elemento contenedor.

En resumen, `<React.Fragment>` o `<> </>` en React son utilizados para agrupar múltiples elementos hijos sin necesidad de agregar un elemento contenedor adicional. Proporcionan una forma conveniente de renderizar elementos adyacentes y evitar nodos adicionales en el DOM.

### Renderizar elementos a través de un Array

En React, puedes renderizar elementos a través de un array utilizando el método `map()`. El método `map()` itera sobre cada elemento de un array y devuelve un nuevo array con los elementos modificados según la lógica que definas. Puedes utilizar este nuevo array para renderizar elementos en tu componente.

Aquí tienes un ejemplo para ilustrar cómo renderizar elementos a través de un array en React:

```jsx
import React from 'react';

const ComponentePadre = () => {
  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <div>
      {elementos.map((elemento, index) => (
        <p key={index}>{elemento}</p>
      ))}
    </div>
  );
};

export default ComponentePadre;
```

En este ejemplo, tenemos un componente `ComponentePadre` que contiene un array llamado `elementos`. Utilizamos el método `map()` en `elementos` para iterar sobre cada elemento y generar un nuevo array de elementos `<p>`.

Dentro del método `map()`, utilizamos una función de flecha para definir la lógica de renderizado de cada elemento. En este caso, estamos generando un `<p>` para cada elemento en el array `elementos`. La propiedad `key` se establece en el índice del elemento para proporcionar una identificación única a cada elemento.

Finalmente, el nuevo array de elementos generados se renderiza dentro del componente `ComponentePadre`.

Ten en cuenta que cuando utilizas el método `map()` para renderizar elementos a partir de un array, es importante proporcionar una `key` única para cada elemento. La `key` ayuda a React a realizar una actualización eficiente de los elementos cuando cambian.


### Código de la clase 

Vamos a recorrer un array para mostrar por defaut al usuario algunas tareas: 

`src > App.js`   
```js
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";

import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Lorem lorem", completed: false },
  { text: "Don't cry", completed: false },
  { text: "Lorem lorem", completed: false },
  { text: "Don't cry", completed: false },
  { text: "Lorem lorem", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoButton />
    </React.Fragment>
  );
}

export default App;
```

`src > TodoCounter.js`   
```js
function TodoCounter({ completed, total }) {
  return (
    <h1>
      Has completado {completed} de {total} ToDos
    </h1>
  );
}

export { TodoCounter };
```

`src > TodoList.js`   
```js
function TodoList({ children }) {
  return <ul>{children}</ul>;
}

export { TodoList };
```

`src > TodoItem.js`   
```js
function TodoItem(props) {
  return (
    <li>
      <span>✔</span>
      <p>{props.text}</p>
      <span>❌</span>
    </li>
  );
}

export { TodoItem };
```

[Dominando las keys en React.js: aprende cómo implementarlas](https://platzi.com/blog/react-keys/)


## 5. Estilos CSS en React

En React, puedes agregar estilos a tus componentes de varias formas. Aquí te explicaré algunas opciones comunes:

1. CSS Externo: Puedes usar archivos CSS externos de la misma manera que lo harías en una página web regular. Simplemente importa el archivo CSS en el componente donde deseas aplicar los estilos. Por ejemplo:

```jsx
import React from 'react';
import './styles.css';

const MiComponente = () => {
  return <div className="mi-estilo">Contenido del componente</div>;
};

export default MiComponente;
```

En el archivo CSS `styles.css`, puedes definir la clase `mi-estilo` con los estilos deseados:

```css
.mi-estilo {
  color: blue;
  font-weight: bold;
}
```

2. Estilos en línea: Puedes aplicar estilos en línea directamente a elementos JSX utilizando el atributo `style`. Define un objeto JavaScript con las propiedades de estilo y asígnalo al atributo `style` del elemento. Por ejemplo:

```jsx
import React from 'react';

const MiComponente = () => {
  const estilo = {
    color: 'blue',
    fontWeight: 'bold'
  };

  return <div style={estilo}>Contenido del componente</div>;
};

export default MiComponente;
```

3. Módulos de Estilo: React también admite módulos de estilo, que te permiten definir estilos específicos para cada componente. Los módulos de estilo generan nombres de clase únicos y los asignan automáticamente a los elementos JSX en tu componente. Para usar módulos de estilo, debes renombrar tu archivo de estilo con una extensión `.module.css`. Por ejemplo, `styles.module.css`.

```jsx
import React from 'react';
import styles from './styles.module.css';

const MiComponente = () => {
  return <div className={styles.miEstilo}>Contenido del componente</div>;
};

export default MiComponente;
```

En el archivo `styles.module.css`, define las clases de estilo como propiedades del objeto `styles`:

```css
.miEstilo {
  color: blue;
  font-weight: bold;
}
```

Estas son solo algunas de las formas comunes de agregar estilos en React. Puedes elegir la opción que mejor se adapte a tus necesidades.

### Clases condicionales basadas en propiedades

En React, las clases CSS que se generan dinámicamente utilizando expresiones lógicas, se conocen comúnmente como "clases condicionales" o "clases condicionales basadas en propiedades".

En el siguiente ejemplo:

```jsx
<p className={`${props.completed && "p--completed"}`}>...</p>
```

Se utiliza una expresión lógica para condicionar la aplicación de una clase CSS. Si `props.completed` es verdadero, se agrega la clase `"p--completed"`; de lo contrario, no se agrega la clase.

El uso de las llaves `{}` y la sintaxis `${}` dentro de la cadena de clase permite evaluar la expresión lógica y generar una cadena de clase condicionalmente.

Es importante tener en cuenta que esto es una técnica común en React para condicionar la aplicación de clases CSS en función de las propiedades o el estado de los componentes. Puedes utilizar esta técnica en combinación con cualquier librería de estilos en React, como CSS Modules, Styled Components o cualquier otro enfoque que prefieras para manejar los estilos en tu aplicación React.

Otro ejemplo:  

Supongamos que tenemos un componente llamado `TaskItem` que representa un elemento de una lista de tareas, y queremos aplicar una clase condicionalmente según si la tarea está completada o no:

```jsx
import React from 'react';

const TaskItem = (props) => {
  return (
    <div className={`task-item ${props.completed ? 'task-completed' : ''}`}>
      {props.taskName}
    </div>
  );
};

export default TaskItem;
```

En este ejemplo, el componente `TaskItem` recibe una propiedad `completed` que indica si la tarea está completada. Utilizamos la expresión lógica `props.completed ? 'task-completed' : ''` para generar de manera condicional la cadena de clase CSS.

Si `props.completed` es verdadero, se agrega la clase `"task-completed"` a la clase principal `"task-item"`. De lo contrario, no se agrega ninguna clase adicional.

Luego, en el renderizado del componente, utilizamos la clase resultante en el elemento `<div>` que representa el elemento de la tarea.

### Código de la clase 

Para realizar esta parte y tener un poco de orden cree la siguiente estructura:   
```bash
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── components 👈👀👇
    │   ├── TodoButton.js
    │   ├── TodoCounter.js
    │   ├── TodoItem.js
    │   ├── TodoList.js
    │   └── TodoSearch.js
    ├── css 👈👀👇
    │   ├── TodoButton.css
    │   ├── TodoCounter.css
    │   ├── TodoItem.css
    │   ├── TodoList.css
    │   ├── TodoSearch.css
    │   └── index.css
    ├── index.js
    └── svg 👈👀👇
        ├── add-purple.svg
        ├── check-completed.svg
        ├── check.svg
        ├── delete-hover.svg
        ├── delete.svg
        └── search.svg
```

`src > App.js`  
```js
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoButton } from "./components/TodoButton";

const defaultTodos = [
  { text: "Lorem lorem", completed: true }, 👈👀🔥
  { text: "Don't cry", completed: false },
  { text: "Lorem ipsus", completed: false },
  { text: "Take care", completed: false },
  { text: "Loremlorem", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} 👈👀🔥
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
```

En el `index.html` agregamos las fuentes de nuestra preferencia.  

`src > css > index.css`  
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #090b10;
  padding: 4rem 1.5rem 2rem;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  min-height: 100vh;
}
```

#### Componente TodoCounter  
`src > components > TodoCounter.js`  
```js
import "../css/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1>
      Has completado <span className="completed">{completed}</span> de <span className="total">{total}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
```

`src > css > TodoCounter.css`  
```css
h1 {
	width: auto;
	height: 15vh;
	font-size: 24px;
	text-align: center;
	margin: 0 auto;
	/* display: flex;
	justify-content: center;
	align-items: center; */
	color: #cbd5e1;
	padding: 0 2rem;
}

span {
	color: #4f46e5;

}
```

#### Componente TodoSearch  
`src > components > TodoSearch.js`  
```js
import '../css/TodoSearch.css'

function TodoSearch() {
  return <input className='search' placeholder="Search..." />;
}

export { TodoSearch };
```

`src > css > TodoSearch.css`  
```css
input {
  margin: 1.5rem auto 2rem;
  display: flex;
  width: 15rem;
  height: 2rem;
  border-radius: 10px;
  padding: 1rem;
  
  background-image: url("../svg/search.svg");
  background-repeat: no-repeat;
  background-position: 202px center;
  
  border: 1px solid #4f46e5;
  box-shadow: -5px 5px 5px -5px #4f46e5;
  /* background: rgba(255, 255, 255, 0.1); 
  background: hsla(0,0%,100%,.5); */
  background-color: rgba(0.035, 0.043, 0.063, 0.1);
  color: #cbd5e1;
}

input::placeholder {
  color: #cbd5e1;
}
```

#### Componente TodoList
`src > components > TodoList.js`  
```js
import '../css/TodoList.css'

function TodoList({ children }) {
  return <ul>{children}</ul>;
}

export { TodoList };
```

`src > css > TodoList.css`  
```css
ul {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	justify-items: center;
}
```

#### Componente TodoItem 
`src > components > TodoItem.js`  
```js
import "../css/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span className={`check ${props.completed && "check--active"}`}></span> 👈👀🔥
      <p className={`${props.completed && "p--completed"}`}>{props.text}</p> 👈👀🔥
      <span className={`delete`}></span> 👈👀🔥
    </li>
  );
}

export { TodoItem };
```

Si dentro del array `defaultTodos` creado en el componente padre `App.js` existe alguna tarea en `true` esta cumplirá con los parámetros definidos dentro de la `className` del elemento `p` definida en el componente `TodoItems.js` y dará el estilo `text-decoration: line-through;` que tachará nuestra tarea como realizada. 

`src > css > TodoItem.css`  
```css
li {
  list-style: none;
  background-color: #cbd5e1;
  width: 15rem;
  height: 3rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 0.5rem;

  position: relative;
}

.check {
  background-image: url("../svg/check.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.check--active {
  background-image: url("../svg/check-completed.svg");
}

.delete {
  background-image: url("../svg/delete.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 15px;
  height: 15px;
  cursor: pointer;

  position: absolute;
  right: 0;
  top: 0;
}

.delete:hover {
  background-image: url("../svg/delete-hover.svg");
}

p {
  width: 85%;
  height: auto;
  margin: 0 5px 0;
  color: #090b10;
}

.p--completed {
  text-decoration: line-through;
}
```

#### Componente TodoButton  
`src > components > TodoButton.js`  
```js
import "../css/TodoButton.css";

function TodoButton() {
  return <button className="add"></button>;
}

export { TodoButton };
```

`src > css > TodoButton.css`  
```css
.add {
  border: none;
  background-color: #090b10;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  background-image: url("../svg/add-purple.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  position: fixed;
	bottom: 1rem;
	right: 1rem;
	cursor: pointer;
  
  transition: transform 0.3s ease;
}

.add:hover {
  transform: rotate(90deg);
}
```

- [Código de mi proyecto](https://github.com/aleroses/react-todo)
- [Diseño en Figma](https://www.figma.com/file/3aZkIjXMEzBDACmWxqUVes/TODO-Machine-Mockup?type=design&node-id=0-1&mode=design&t=SrHeYaczPsRfmRLW-0)
- [Diseño Prototipo](https://www.figma.com/proto/3aZkIjXMEzBDACmWxqUVes/TODO-Machine-Mockup?type=design&amp%3Bnode-id=1-3&amp%3Bt=NH0HT6nS2TxaLKp4-1&amp%3Bscaling=min-zoom&amp%3Bpage-id=0%3A1&amp%3Bstarting-point-node-id=1%3A3&amp%3Bmode=design&node-id=1-3&starting-point-node-id=1%3A3)
- [Guía BEM](https://platzi.com/blog/bem/)
- [Proyecto 01](https://pandrea-hub.github.io/TODOs/)
- [Repo P01](https://github.com/dioselyn/tasks)
- [Proyecto 02](https://dioselyn.github.io/tasks/)
- [Repo 01](https://github.com/Sharonina/Taskify/tree/main)
- [Repo 02](https://github.com/alejandroch1202/todo)  


## 6. Eventos en React: onClick, onChange

En React, los eventos son acciones o interacciones que ocurren en los elementos de la interfaz de usuario, como hacer clic en un botón, mover el mouse sobre un elemento, ingresar texto en un campo de entrada, etc. Los eventos en React se manejan utilizando funciones llamadas "manejadores de eventos" que se ejecutan cuando ocurre el evento.

Aquí hay algunos conceptos clave relacionados con los eventos en React:

1. Sintaxis de manejo de eventos: En React, los manejadores de eventos se pasan como funciones a los elementos JSX utilizando una sintaxis especial. Por ejemplo, para manejar el evento de clic en un botón, puedes hacer algo como esto:

```jsx
<button onClick={handleClick}>Haz clic aquí</button>
```

En este ejemplo, `handleClick` es la función que se ejecutará cuando se haga clic en el botón.

2. Eventos sintéticos: React utiliza eventos sintéticos que son una envoltura cruzada de los eventos nativos del navegador. Estos eventos sintéticos tienen la misma interfaz que los eventos nativos del navegador, pero se comportan de manera consistente en todos los navegadores. Por lo tanto, no necesitas preocuparte por la compatibilidad del navegador al manejar eventos en React.

3. Pasar argumentos a los manejadores de eventos: Si necesitas pasar argumentos adicionales a un manejador de eventos, puedes hacerlo utilizando una función de flecha o una función anónima en el lugar donde se define el manejador de eventos. Por ejemplo:

```jsx
<button onClick={() => handleClick(arg1, arg2)}>Haz clic aquí</button>
```

Aquí, `arg1` y `arg2` son los argumentos que se pasan al manejador de eventos `handleClick`.

4. Prevención de comportamiento predeterminado: En algunos casos, es posible que desees evitar el comportamiento predeterminado de un evento, como evitar que un formulario se envíe o evitar que un enlace cambie de página. En React, puedes llamar al método `preventDefault()` en el evento pasado al manejador de eventos para evitar el comportamiento predeterminado. Por ejemplo:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  // Resto del código de manejo del formulario
}

<form onSubmit={handleSubmit}>
  {/* Campos de formulario */}
  <button type="submit">Enviar</button>
</form>
```

En este ejemplo, al llamar a `event.preventDefault()`, evitamos que el formulario se envíe y la página se recargue.

Estos son solo algunos aspectos básicos de los eventos en React. React proporciona una amplia gama de eventos que se pueden utilizar para interactuar con los elementos de la interfaz de usuario y controlar el flujo de la aplicación. Puedes consultar la documentación oficial de React para obtener más información sobre los eventos y cómo utilizarlos en tu aplicación.

### `onClick` y `onChange`

En React, `onClick` y `onChange` son dos de los eventos más comunes utilizados para manejar interacciones y cambios en los elementos de la interfaz de usuario.

1. `onClick`: El evento `onClick` se dispara cuando se hace clic en un elemento, como un botón, un enlace o una imagen. Puedes asignar una función al evento `onClick` para ejecutar acciones específicas cuando se produce el clic. Por ejemplo:

```jsx
<button onClick={handleClick}>Haz clic aquí</button>
```

En este caso, cuando el botón se hace clic, se ejecutará la función `handleClick`.

2. `onChange`: El evento `onChange` se utiliza principalmente para elementos de entrada, como campos de texto o selectores. Se dispara cuando el valor del elemento cambia, generalmente cuando el usuario ingresa texto o selecciona una opción diferente. Puedes asignar una función al evento `onChange` para manejar los cambios y actualizar el estado de la aplicación. Por ejemplo:

```jsx
<input type="text" onChange={handleChange} />
```

Aquí, `handleChange` es la función que se ejecutará cuando el valor del campo de texto cambie.

Cuando se utiliza `console.log(event)` para registrar la información proporcionada por un evento, se mostrará en la consola un objeto `Event` que contiene varios datos relevantes. Algunos de los datos más comunes y útiles que se pueden encontrar en el objeto `event` son:

- `event.target`: Hace referencia al elemento del DOM en el que ocurrió el evento. Puede ser útil para identificar el elemento específico que desencadenó el evento.
- `event.currentTarget`: Es similar a `event.target`, pero hace referencia al elemento en el que se definió el manejador de eventos. En la mayoría de los casos, `event.currentTarget` y `event.target` serán iguales, pero pueden diferir en situaciones donde se usan eventos delegados.
- `event.preventDefault()`: Una función que se puede llamar para evitar el comportamiento predeterminado del evento, como evitar que un enlace cambie de página o que un formulario se envíe.
- `event.stopPropagation()`: Una función que se puede llamar para detener la propagación del evento a elementos superiores. Esto evita que el evento se propague a través de la jerarquía de elementos en el DOM.
- `event.keyCode` o `event.key`: Estos campos contienen información sobre la tecla que se presionó en eventos de teclado, lo cual puede ser útil para realizar acciones específicas en respuesta a una tecla en particular.

Estos son solo algunos ejemplos de la información relevante que se puede encontrar en el objeto `event`. La disponibilidad y los detalles específicos pueden variar según el tipo de evento y el contexto en el que se utiliza.

### Código de la clase 

`src > components > TodoButton.js`  
```js
import "../css/TodoButton.css";

function TodoButton() {
  return (
    <button
      className="add"
      onClick={(event) => { 👈👀
        console.log(event);
        console.log(event.target);
        //<button class="add"></button>
      }}
    ></button>
  );
}

export { TodoButton };
```

`src > components > TodoSearch.js`  
```js
import "../css/TodoSearch.css";

function TodoSearch() {
  return (
    <input
      className="search"
      placeholder="Search..."
      onChange={(event) => { 👈👀
        console.log("search");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        // h hi
      }}
    />
  );
}

export { TodoSearch };
```

📌 Dato: Eliminamos algunas cosas del archivo `manifest.json`, ya que la consola mostraba errores por usar un icono de React, el cual ya había eliminado previamente. 

```json
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "react192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "react512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
```

## 7. ¿Qué es el estado?

En React, los estados son objetos que contienen datos y representan la información que puede cambiar durante el ciclo de vida de un componente. Los estados son utilizados para almacenar y controlar la información dinámica en una aplicación React. Cuando un estado cambia, React se encarga de actualizar automáticamente la interfaz de usuario para reflejar ese cambio.

Aquí hay algunos conceptos clave sobre los estados en React:

1. Declaración del estado: En un componente de React, puedes declarar un estado utilizando el hook `useState`. El hook `useState` retorna un array con dos elementos: el valor actual del estado y una función que se utiliza para actualizar ese estado. Por ejemplo:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Resto del código del componente
}
```

En este ejemplo, `count` es el estado y `setCount` es la función que se utiliza para actualizar el estado.

2. Actualización del estado: Para actualizar el estado, debes llamar a la función que se utiliza para actualizarlo, en este caso `setCount`. Puedes llamar a esta función en respuesta a eventos o en cualquier otro lugar donde desees actualizar el estado. Por ejemplo:

```jsx
function handleButtonClick() {
  setCount(count + 1);
}
```

En este caso, `setCount` se llama con el nuevo valor del estado, en este caso, `count + 1`. Al llamar a `setCount`, React se encargará de actualizar el estado y volverá a renderizar el componente con el nuevo valor.

3. Renderizado condicional: Puedes utilizar el estado para controlar el renderizado condicional de elementos en tu interfaz de usuario. Por ejemplo, puedes mostrar u ocultar un elemento basado en el valor de un estado. Aquí hay un ejemplo:

```jsx
function MyComponent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <p>Este elemento se muestra si isVisible es verdadero</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Mostrar/Ocultar</button>
    </div>
  );
}
```

En este ejemplo, el elemento `<p>` se muestra si el estado `isVisible` es `true`. Al hacer clic en el botón, se llama a la función `setIsVisible` para cambiar el valor del estado entre `true` y `false`, lo que provoca la aparición o desaparición del elemento `<p>` en la interfaz de usuario.

4. Uso de múltiples estados: Puedes utilizar múltiples estados en un componente para manejar diferentes datos o características. Simplemente declara diferentes estados utilizando `useState` según tus necesidades. Por ejemplo:

```jsx
function MyComponent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  // Resto del código del componente
}
```

En este caso, `name` y `age` son dos estados diferentes que se pueden actualizar y utilizar por separado.

Los estados en React son fundamentales para crear componentes interactivos y dinámicos. Al utilizar estados, puedes controlar y actualizar los datos en tu aplicación de manera eficiente, lo que permite que la interfaz de usuario reaccione de manera automática y refleje los cambios en los datos.

Aquí tienes un ejemplo básico de cómo utilizar estados en React para crear un contador simple:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
```

En este ejemplo, utilizamos el hook `useState` para declarar un estado llamado `count` con un valor inicial de `0`. Luego, definimos dos funciones `increment` y `decrement` que actualizan el estado `count` aumentándolo o disminuyéndolo en 1 respectivamente.

Dentro del componente, mostramos el valor actual del contador utilizando la variable `count` entre llaves `{count}`. Al hacer clic en los botones "Incrementar" o "Decrementar", se llama a las funciones correspondientes y se actualiza el estado `count`, lo que provoca que React vuelva a renderizar el componente con el nuevo valor del contador.




### Código de la clase 

`src > components > TodoButton.js`  
```js
```


### Código de la clase 

`src > components > TodoButton.js`  
```js
```