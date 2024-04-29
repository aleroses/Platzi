# Curso de Introducción a Empaquetadores Web

> Oscar Barajas
> 28/04/2024

## 1. Bienvenida al curso de Empaquetadores Web

Son herramientas con las cuales se prepara el proyecto para producción o entorno de desarrollo local. El proyecto tendrá unas series de elementos necesarios y serán unidos mediante un proceso automatizado. Este proceso organiza las imágenes, fuentes, estilos, etc. Estas herramientas surgen de las necesidades del ecosistema de desarrollo. 

**Historia:** 

1995 - Nacimiento de JavaScript (Netscape)

- Batalla de los navegadores Netscape vs Microsoft
- Google nos demuestra el poder de JavaScript

2009 - Nacimiento de Node

- Node nos permite ejecutar JS al servidor.

2010 - Lanzamiento de NPM

- Trabajar con módulos.

2011 – Browserify

- Ayudaba a organizar y preparar nuestro proyecto.

2013 – Gulp

- Preparar nuestros proyectos.

2014 - Babel

- Permite utilizar JavaScript moderno.

Muchas de estas herramientas ya no se usan, pero si todo lo que aportaron. En el curso se tendrá 5 proyectos.

## 2. ¿Qué es un empaquetador de módulos de JavaScript?

**Módulos:** Es algo muy importante que nos vamos a encontrar en el ecosistema de JavaScript, existen diferentes términos: CJS, ESM, AMD, IIFE, UMD, y otros más, que no son más que propuestas que a lo largo del tiempo de vida de JS y de la web han existido para resolver una particularidad, poder preparar nuestros proyectos para que lleguen a los usuarios. .

- **Immediately invoked function expression (IIFE):** Forma en la que dentro de JS, se podrá invocar inmediatamente una función, lo que se hace es encapsularla en una función anónima y llamarla al final.

```js
var module = (function () {
  /* Data */
  /* Methods */
  // Revealing module
  return {
    /* Public data/methods */
  };
})();

module.data;
module.method();
```

- **CommonJS (CJS):** Propuesta que nace en el 2009, alternativa para crear módulos en JS. Tiene una funcionalidad particular para trabajar de forma asíncrona con los módulos.

```js
// module-name.js
module.exports = {
  /* ... */
};

// index.js
const module = require("./module-name.js");
const package = require("package");

module.method();
```

- **AMD (Asynchronous Module Definition):** Permite cargar módulos del lado del cliente.

```js
define(["dep1", "dep2"], function (dep1, dep2) {
  /* ... */
  
  return {
    /* ... */
  };
});
```

- **ES Modules (ESM):** Forma en la que vamos a poder incorporar, importar o exportar.

```js
// module.js
export const data = 42;
export const method = () => console.log("Hello");

// index.js
import { data, method } from "./module.js";
```

Otros:
- CJS : Sistema por defecto utilizado por Node.js
- ESM: Sistema oficial de JS para la gestión de modulos.

**¿Qué es un empaquetador de módulos de JavaScript?**
No es más que una pieza de software que nos permite tener todo un proyecto bien dividido en diferentes elementos que pueden ser también imágenes, estilos, entre otros recursos, y trabajar con la división de nuestro proyecto que este construido en JS en diferentes módulos y con ello generar un único archivo con la unión de todos estos.

**Resumen** Un módulo son piezas de código que vamos a separar dentro de nuestro proyecto, pueden ser componentes, utilerías, y diferentes recursos que tendrá nuestro proyecto. Y un empaquetador es poder tener nuestro código muy bien organizado independientemente de como va a llegar al usuario.




