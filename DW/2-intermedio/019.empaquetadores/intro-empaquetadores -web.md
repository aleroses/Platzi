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

Muchas de estas herramientas ya no se usan, pero sí todo lo que aportaron. En el curso se tendrá 5 proyectos.

## 2. ¿Qué es un empaquetador de módulos de JavaScript?

**Módulos:** Es algo muy importante que nos vamos a encontrar en el ecosistema de JavaScript, existen diferentes términos: CJS, ESM, AMD, IIFE, UMD, y otros más, que no son más que propuestas que a lo largo del tiempo de vida de JS y de la web han existido para resolver una particularidad, poder preparar nuestros proyectos para que lleguen a los usuarios. .

- **Immediately invoked function expression (IIFE):** Forma en la que, dentro de JS, se podrá invocar inmediatamente una función, lo que se hace es encapsularla en una función anónima y llamarla al final.

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
- ESM: Sistema oficial de JS para la gestión de módulos.

**¿Qué es un empaquetador de módulos de JavaScript?**

No es más que una pieza de software que nos permite tener todo un proyecto bien dividido en diferentes elementos que pueden ser también imágenes, estilos, entre otros recursos, y trabajar con la división de nuestro proyecto que esté construido en JS en diferentes módulos y con ello generar un único archivo con la unión de todos estos.

**Resumen** Un módulo son piezas de código que vamos a separar dentro de nuestro proyecto, pueden ser componentes, utilerías, y diferentes recursos que tendrá nuestro proyecto. Y un empaquetador es poder tener nuestro código muy bien organizado, independientemente de como va a llegar al usuario.

## 3. Empaquetadores de módulos más populares

Webpack

- Gestión de dependencias
- Ejecución de tareas
- Conversión de formatos
- Servidor de desarrollo

Parcel

- Gestión de dependencias
- Ejecución de tareas
- Servidor de desarrollo
- Diagnóstico
- Tree shaking

ESBiuild

- Velocidad extrema
- Ejecución de tareas
- Tree shaking
- ES6 and CommonJS modules

Rollup

- Ejecución de tareas
- Tree shaking
- ES6 and CommonJS modules

Vite

## 4. ¿Por qué necesitamos un empaquetador de módulos?

Optimizan todo nuestro código y recursos para llevarlo a producción.

![](https://i.postimg.cc/bvKcnWZG/webpack.png)

## 5. Primeros pasos en Webpack

**Webpack**

Es un empaquetador de módulos que nació en 2012, por un desarrollador alemán Tobias Koppers, y es la herramienta más utilizada actualmente dentro de los empaquetadores que existen en JS.

- **bundle** → Si tenemos muchos elementos o módulos con dependencias que tendremos separados por archivos (arquitectura amigable para poder encontrar los elementos), pero al final cuando queramos enviar nuestro producto a producción usamos Webpack para poder empaquetar los diferentes archivos. 

- **`node_modules`** → Carpeta donde se instalan las dependencias que agregamos.

- `package-lock.json` → Historial y el árbol de cada una de las dependencias que se han instalado.

- `package.json` → Archivo principal donde tenemos información del proyecto.

```bash
mkdir webpack
cd webpack
# git init
npm init -y
npm install webpack webpack-cli -D
code .
```

Creamos las siguientes carpetas y archivos, igual a la siguiente estructura:

```bash
.
├── node_modules
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── src
│   └── index.js
└── webpack.config.js
```

## 6. Configuración de Webpack

```bash
npm i html-webpack-plugin copy-webpack-plugin @babel/core babel-loader -D
```

`webpack.config.js`

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

Conceptos de Webpack que pueden encontrar en su [documentación oficial](https://webpack.js.org/concepts/) .

### Conceptos de Webpack

#### Entry

Un entry point indica qué módulo Webpack debería empezar a utilizar para empezar a construir el **gráfico de dependencias**.

Webpack luego se encargará de verificar qué otros módulos y librerías, aquel punto de entrada depende de (directa o indirectamente).

Por defecto, su valor es `./src/index.js`, pero se puede especificar otro, o múltiples, punto de entrada:

```js
//webpack.config.js 
module.exports = { 	
  entry: './src/index.js' 
}
```

#### Output

La propiedad output le indica a Webpack hacia dónde cargar los ‘paquetes’ ya creados y cómo deberían llamarse. Por defecto, los paquetes tendrán el nombre de `main.js` y se cargarán en la carpeta `./dist`:

```js
//webpack.config.js 
const path = require('path'); 

module.exports = { 	
  entry: './src/index.js', 	
  output: { 		
    path: path.resolve(__dirname, 'dist'), 		
    filename: 'main.js' 	
  }
}
```

`path` Es un módulo de `node.js` que nos permite manipular los paths de los archivos.

#### Loaders

Por defecto, Webpack solamente entiende archivos `.js` y `.JSON`. Los loaders nos permiten especificar otro tipo de archivos para que Webpack los pueda procesar y convertir en módulos válidos que pueden ser consumidos por nuestra aplicación y ser añadidos en el gráfico de dependencias. 

Los loaders tienen tres propiedades:

- `test`: identifica cuál o cuáles archivos serán transformados.
- `use`: indica cuál loader debería ser utilizado para transformar los archivos.
- `exclude`: indica archivos o carpetas que deberían ser ignoradas por el loader

```js
//webpack.config.js 
const path = require('path'); 

module.exports = { 	
  entry: './src/index.js', 	
  output: { 		
    path: path.resolve(__dirname, 'dist'), 		
    filename: 'main.js' 	
  }, 	
  modules: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/
        use: 'ts-loader', 
      }
    ] 	
  }
}
```

#### Plugins

. Los `plugins` son similares a los `loaders` pero nos permiten hacer cosas que no podríamos con los `loaders`, como optimización de los paquetes, inyección de variables y manejo de activos.

Para usar plugins, necesitamos traerlos con `require()` para agregarlos al array de `plugins`. Como podemos usar un mismo plugin con diferentes configuraciones para distintos propósitos, necesitamos crear instancias de los plugins utilizando el operador `new`.

`//webpack.config.js const path = require('path'); const HtmlWebpackPlugin = require('html-webpack-plugin'); module.exports = { 	entry: './src/index.js', 	output: { 		path: path.resolve(__dirname, 'dist'), 		filename: 'main.js' 	}, 	modules: { 		rules: [{test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/}] 	}, 	plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})] }`

Existe una gran cantidad de plugins que webpack nos provee. [Acá una lista de plugins](https://webpack.js.org/plugins) .

#### Mode

. Al colocar la propiedad `mode` en `development`, `production` o `none`, podemos activar las optimizaciones internas de webpack dependiendo del valor de `mode` que hayamos especificado. El valor por defecto es `production`.

Extra:

/**@type {import('webpack').Configuration} */ ```Coloca esa linea encima de tu module.exports y te va a autocompletar las props de la configuracion. Saludos.