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

[Tutorial](https://www.youtube.com/watch?v=jIjws68ATY8)