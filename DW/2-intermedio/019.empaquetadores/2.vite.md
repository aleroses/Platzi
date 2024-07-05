# Curso de Vite.js

## 1. ¿Qué es Vite?

Vite.js es una herramienta de desarrollo front-end creada por Evan You, el mismo desarrollador detrás de Vue.js. Su nombre, "Vite", proviene de la palabra francesa para "rápido", y está diseñada para proporcionar una experiencia de desarrollo extremadamente rápida. Aquí hay una explicación más detallada de sus características y ventajas:

### Características Principales de Vite.js

1. **Desarrollo Rápido**:
   - **Servidor de Desarrollo Instantáneo**: Vite lanza un servidor de desarrollo que proporciona una recarga en caliente rápida y eficiente. Esto se logra mediante la utilización de ES Modules nativos del navegador en lugar de empaquetar todos los archivos en uno solo.
   - **Compilación de Código en Demanda**: En lugar de empaquetar todo el proyecto al inicio, Vite sólo compila los módulos que realmente son necesarios y solicitados por el navegador, lo que mejora significativamente los tiempos de inicio.

2. **Compilación Optimizada**:
   - **Rollup**: Para la producción, Vite utiliza Rollup como motor de empaquetado, aprovechando su avanzada optimización y generación de código eficiente.
   - **Code Splitting Automático**: Vite divide automáticamente el código en fragmentos más pequeños, mejorando así el rendimiento de la aplicación en producción.

3. **Soporte a Múltiples Marcos**:
   - Aunque fue diseñado con Vue en mente, Vite es un agnóstico del framework y funciona bien con React, Preact, Svelte, y otros marcos populares.

4. **Configuración Simplificada**:
   - La configuración de Vite es sencilla y minimalista en comparación con otras herramientas de construcción como Webpack, lo que facilita su adopción y uso.

5. **Plugins y Extensibilidad**:
   - Vite tiene un sistema de plugins flexible basado en Rollup, lo que permite a los desarrolladores extender su funcionalidad de manera eficiente.

6. **Compatibilidad con TypeScript**:
   - Vite ofrece un soporte robusto para TypeScript, haciendo fácil su integración y uso dentro del proyecto.

### Ventajas de Usar Vite.js

1. **Rápida Iteración en Desarrollo**:
   - Gracias a su rápido servidor de desarrollo y la recarga en caliente eficiente, los desarrolladores pueden ver los cambios instantáneamente, mejorando la productividad y la experiencia de desarrollo.

2. **Configuración y Mantenimiento Simplificados**:
   - La configuración minimalista reduce el tiempo de configuración inicial y facilita el mantenimiento del proyecto a largo plazo.

3. **Óptimas Compilaciones para Producción**:
   - Las compilaciones de producción de Vite son rápidas y generan bundles optimizados, resultando en aplicaciones web más rápidas y eficientes.

### Ejemplo Básico de Uso

Para comenzar un proyecto con Vite, se puede usar el siguiente comando (asumiendo que Node.js y npm están instalados):

```sh
npm create vite@latest my-vite-project
cd my-vite-project
npm install
npm run dev
```

Esto iniciará un nuevo proyecto con Vite y lanzará un servidor de desarrollo.

### Conclusión

Vite.js es una herramienta poderosa y eficiente para el desarrollo de aplicaciones web modernas. Su enfoque en la rapidez y la simplicidad lo hace una excelente opción para desarrolladores que buscan mejorar su flujo de trabajo y reducir los tiempos de espera durante el desarrollo.

## 2. Historia del Ecosistema de JavaScript

Hablaremos de la **historia detrás de Vite**, los problemas que soluciona y todas las tecnologías, ideas y conceptos que hubo antes de su llegada.

### El ecosistema antes de Vite.js

Cuando la web comenzó, las páginas eran únicamente texto, con algunas imágenes y enlaces (HTML). Después surgieron los navegadores con la característica de procesar CSS, con el tiempo fue necesario agregar nuevas funcionalidades a la web, se necesitaba una web dinámica y como respuesta llego JS.

#### Módulos y librerías

A partir de este punto el código comenzó a crecer y se llegó a la siguiente pregunta: ¿Cómo hacemos para organizarlo mejor?, a lo que llegaron los **módulos y librerías**. Inicialmente, solo existía una forma, la cual era una etiqueta de HTML, como la siguiente:

```js
<script src="modulo.js"></script>
```

Esta etiqueta referenciaba el archivo o este mismo se encontraba dentro de ella. Básicamente, esto era un módulo, se cargaba el archivo y estaba listo para usarse, aunque surgieron los siguientes problemas:

- Siguió creciendo y ya no se tenía un solo módulo, sino muchísimos de estos.
- No se tenía ningún estándar
- Difícil de leer
- Se podían generar errores dependiendo el orden de importación
- Había posibilidades de una colisión entre variables

#### IIFE

Debido a los problemas anteriores, surgieron las **IIFE (Expresión de función ejecutada inmediatamente)**, las cuales se veían de la siguiente forma:

```js
(function(){ /*statements*/ })();
```

Estas consistían en una función normal en JS envuelta en unos paréntesis, para que en el momento en que se declara también se ejecutara. A la hora de usarla se veía de la siguiente forma y esto hacía que las variables se quedaran dentro del módulo, evitando la colisión de variables.

```js
var module = (function(){ var version = "1.0.0"; })(): 
// version es inaccesible
```

##### Minificacion

El proceso de **minificacion** surgió debido a la cantidad de código que se necesita para hacer web, este consiste en un tipo de compresión donde se **eliminan características del código que el navegador no necesitaba y solo estaban ahí para una mejor legibilidad**, por ejemplo, los espacios.

La minificacion ayudaba a la performance de la web en archivos grandes, este es él antes y después de un código minificado:

```js
// Sin minificar 
var data = { name: "Diana". age: 27 };
```

```js
// Minificado 
var data={name:"Diana",age:27};
```

#### Bundling

A veces tienes muchos módulos dentro de un mismo sitio web y muchos de estos los consumes al mismo tiempo. Aquí es donde entra el bundling, un proceso donde se toman todos estos módulos y lo conviertes en un solo archivo minificado y listo para utilizar.

![bundle](https://i.postimg.cc/jj2y25vG/2-buldle.png)

Cuando el usuario entra a la página web, el bundling en vez de tener que descargar todos estos archivos, solo debe descargar uno, mejorando el rendimiento.

### Primera generación

**Node.js** trae toda una revolución, permitiendo a las personas usar JS del lado del backend para modificar la forma en la que se comportan las páginas web. Con el diseño de esta, llegan las herramientas de primera generación, como por ejemplo los **templates** o las tecnologías de desarrollo.

- Templates: Un template o plantilla es cuando tomamos diferentes bloques de HTML, hacer que se junten y crear una página completa (Jade, Pug). Posteriormente, se implementó con CSS (Sass, stylus).

#### Herramientas para la automatización

Comienzan a surgir la necesidad de herramientas para automatizar estos procesos y se encarguen del orden de ejecutarlos, como por ejemplo Grunt y Gulp.

#### Yeoman Generator

Surgen herramientas como **_Yeoman Generator_**, que te permite generar código por medio de una herramienta de comandos, por ejemplo generar un componente con todo el código base a través de un solo comando.

#### Frameworks

Aparecen los primeros **frameworks** (Angular.js, Ember.js, Backbone.js) que traen consigo el concepto de trabajar con el lenguaje y estructura que te proveen. Surge la necesidad de tener múltiples carpetas y archivos, estructurados de una manera muy específica, los cuales tienen que pasar por la **transpilacion**, es decir, encontrarse en una etapa de desarrollo y luego generar una versión para producción.

#### ES6 & Babel.js

Aparece **ECMAScript 6** y con ello **Babel.js**, una herramienta que te permite utilizar ES6 (Estándar de JS) en desarrollo y luego convertirlo en una versión más antigua, para de esta manera ordenadores más antiguos poder ejecutar el código. De esta manera teniendo las últimas características de JS y siendo retro compatibles.

### Segunda generación de herramientas

Llega una nueva generación de herramientas que trae consigo:

- **Frameworks** nuevos como React.js, Vue.js y Angular io.
- **ESLINT** y **Prettier**, herramientas enfocadas en el desarrollo. Las cuales formatean el código con un código estándar, teniendo ahora un código más organizado.
- **Bundlers** como **Webpack**, **esbuild** o **parcel**

#### Webpack

Una de las herramientas que **más se emplea hoy en día**, la cual te permite hacer todos estos procesos que hemos estado viendo a lo largo del curso. El cual funciona mediante una configuración donde se pasan los archivos de desarrollo a código de producción.

Pero **Webpack** trae un gran problema, es **muy lento** y necesita **demasiada configuración**, surgiendo alternativas a este como **esbuild** (mucho más rápido), **parcel** (menos configuración necesaria) o **rollup** (código más optimizado).

#### TypeScript (TS)

Aparece **TS** un lenguaje de programación tipado que se **transpila hacia JS** bastante útil, pero esto conlleva reescribir todo el ecosistema para que sea compatible con JS, convirtiéndose en otra razón para hacer un cambio en la web.

### Tercera generación de herramientas

Finalmente, llegamos a **Vite**, una respuesta histórica a toda esta serie de procesos y complejidades, el cual trae una **mejor experiencia para los desarrolladores, con una mayor velocidad y sin necesidad de una configuración complicada.**

## 3. Características de Vite

Ahora que conocemos la historia detrás de Vite vamos a ver sus **principales características**, donde destaca la reinvención de muchos procesos, como la **resolución de dependencias, la implementación con TS, el HMR, entre muchas otras funcionalidades**.

### Optimización de código

Vite optimiza muchos de los procesos por los que tiene que pasar el código, para de tal modo enfocarse en un mejor rendimiento y experiencia de desarrollo.

#### Pre-bundling

Es la etapa donde se **estandarizan los módulos**, pues adapta módulos en _CommonJS_ o _UMD_ al formato estándar de _ECMAScript_.

#### Dependency resolving

Vite **optimiza el proceso en que se obtienen librerías y módulos estandarizados**. Funciona de la siguiente manera:

1. Utiliza un servidor estático para exponer los archivos vía URL.
2. Reemplaza los **imports vía NodeJS por imports URL**.
3. Sirve los archivos de forma inteligente y con cache, para optimizar tiempo y procesamiento.

#### Hot module replacement (HMR)

El HMR es cuando se hace un cambio en el código y este se ve reflejado en el navegador casi de forma inmediata, sin perder el estado de la aplicación y sin tener que recargar el navegador. Esto nos otorga una mejor experiencia de desarrollo al ser más rápido.

#### Importación de archivos

Nos otorgará una **importación de archivos simplificada**. * Resuelve la importación sin necesidad de loaders. * Es simple de usar con archivos multimedia, estilos, código o con los preprocesadores más comunes, incluyendo TypeScript.

#### Integración simple con TypeScript

TS es **automáticamente** sin necesidad de una configuración adicional **compatible con Vite**. Aun así, podrás agregarle una configuración adicional que funcionara con cualquier librería o framework.

### Optimizacion para produccion

Te proporcionará una serie de optimizaciones a la hora de transpilar para producción o hacer lo que llamamos el _build_.

- **Permite tomar el control de la configuración.** Podrás utilizar la configuración por defecto tanto en desarrollo como en producción, o bien, podrás tener una configuración más específica y controlada por ti.
- **La velocidad en desarrollo aumenta gracias a esbuild.**
- **Optimiza el bundle de producción gracias a Rollup**. La importación de dependencias se hace de modo inteligente, es decir, resuelve los módulos a emplear en el proyecto y predice hasta cierto punto los módulos que van a seguir, para importarlos desde un inicio.

### Soporte a Web Workers y Web Assembly

Los Web Workers son una característica de JS que nos permite **crear procesos alternativos al proceso principal**. Implementarlos puede llegar a tener una configuración complicada, pero con Vite no, teniendo la posibilidad de importarlos de una manera específica y estar listos para ser usados. Aunque tambien existe la posibilidad de importar un archivo Web Assembly e invocarlo donde queramos que se ejecute.

## 4. ¿Cómo instalar Vite?

```bash
npm create vite@latest
	Ok to proceed? (y) y
	✔ Project name: … spa-test
	❯ Vanilla
	❯ JavaScript

cd spa-test
npm install
code . -r
npm run dev
```

- [Vite](https://vitejs.dev/)
- [Stackblitz](https://stackblitz.com/edit/vitejs-vite-syiwmz?file=index.html&terminal=dev)

## 5. Boilerplate de Vite

Estructura por defecto:

```bash
.
├── counter.js
├── index.html
├── javascript.svg
├── main.js
├── node_modules
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
└── style.css
```

### Que debemos recodar

1. Todas las configuraciones las podemos realizar en el archivo **[vite.config.js](https://vitejs.dev/config/)**
2. El punto de acceso por defecto es `index.html`, pero podemos cambiar para que sea un `.html, .js, .ts`
3. En el archivo punto `package.json` tenemos los scripts iniciales del proyecto
	- `$npm run dev` Levanta el servidor en desarrollo
	- `$npm run build` Genera la carpeta /dist donde están los archivos para producción.
	- `$npm run preview` Levanta un servidor que nos permite ver el proyecto generado en /dist
4. Cuando vemos el proyecto renderizado en el navegador podemos observar que agrega un parámetro que indica en **timestamp** que representa el momento cuando fue generado.

	- `<script type=”module” src=”/main.js?t=2345676344”></script>`
    Esto tiene relación a que los archivos están en el cache el navegador y para renderizar los cambios necesitamos que sean refrescados.
    
	- **Para forzar el limpiado de la cache** Importante resaltar que puede llegar a ser necesario _**FORZAR LIMPIAR LA CACHE PARA PODER VER LOS CAMBIOS**_
    
    Debemos seguir los pasos:
    
	    1. Click en los tres puntos superiores del navegador
	    2. “Más herramientas”/”Herramientas del desarrollador”/”Application”/Storage”
	    3. Marcar el check de “Cache”/”Cache storage”
	    4. Click en “Clear site data”
    
    O también
    
	    1. Click derecho
	    2. ”Inspeccionar”/”Application”/Storage”
	    3. Marcar el check de “Cache”/”Cache storage”
	    4. Click en “Clear site data”

	- Interesante ver el archivo `style.css` no es un archivo css normal. Cómo se hablo anteriormente Vite convierte todos los archivos en un archivo ECMAScript Module para usarlo de manera universal.

![](https://i.postimg.cc/Wbm6ttc4/5-cache.png)

[[spa-js-vanilla#3. Configurar el entorno de trabajo]]

## 6. Importar CSS

La modularización de CSS se refiere a la técnica de dividir el CSS en archivos más pequeños y manejables, en lugar de tener un solo archivo CSS grande. Esto facilita el mantenimiento y la reutilización del código. Además, la modularización ayuda a evitar conflictos de nombres y a mejorar la organización del proyecto.

Con el uso de herramientas modernas como Vite.js, podemos aprovechar las características de CSS Modules, que permiten la encapsulación del CSS al nivel del componente. A continuación, te muestro cómo se trabaja la modularización de CSS, incluyendo el uso de Vite.js.

### Paso a Paso: Modularización de CSS con Vite.js

#### 1. Crear un proyecto con Vite.js

Primero, necesitamos crear un nuevo proyecto con Vite.js. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
npm create vite@latest my-vite-project --template react
cd my-vite-project
npm install
```

Esto creará un proyecto de Vite.js con React. Puedes elegir otros templates según tus necesidades.

#### 2. Instalar las dependencias necesarias

Asegúrate de tener las dependencias necesarias para trabajar con CSS Modules. Normalmente, esto ya está configurado con Vite, pero puedes instalar cualquier paquete adicional si es necesario:

```bash
npm install
```

#### 3. Estructura de archivos del proyecto

Supongamos que tienes la siguiente estructura de proyecto:

```zsh
my-vite-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.module.css
│   │   └── Button.jsx
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

#### 4. Crear un componente con CSS Module

Vamos a crear un componente `Button` y su archivo CSS correspondiente.

**Button.module.css:**

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

**Button.jsx:**

```jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ label }) => {
  return (
    <button className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
```

#### 5. Usar el componente en la aplicación

Ahora podemos usar este componente `Button` en nuestro componente principal `App`.

**App.jsx:**

```jsx
import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Modularización de CSS con Vite.js</h1>
      <Button label="Click Me" />
    </div>
  );
};

export default App;
```

#### 6. Ejecutar el proyecto

Para ejecutar el proyecto, usa el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite, y podrás ver tu aplicación en el navegador en `http://localhost:3000`.

#### 7. Ventajas de usar CSS Modules con Vite.js

- **Encapsulación del estilo:** Los estilos se aplican solo a los componentes específicos y no afectan a otros elementos del DOM.
- **Mantenimiento:** Facilita el mantenimiento del CSS al dividirlo en módulos más pequeños y específicos.
- **Evita conflictos de nombres:** Cada clase es única al componente, lo que evita conflictos de nombres entre clases CSS.
- **Compatibilidad con herramientas modernas:** Vite.js y otras herramientas modernas de construcción de frontend soportan CSS Modules de manera eficiente.

Esto es un ejemplo básico de cómo modularizar CSS usando CSS Modules con Vite.js. Puedes extender esta técnica para componentes más complejos y estilos más avanzados según tus necesidades.

### Importar hojas de estilo en otros archivos CSS

El uso de `@import "./Button.css"` en CSS se emplea para importar hojas de estilo en otros archivos CSS. A continuación se detallan algunos casos en los que este enfoque podría ser apropiado:

1. **División del CSS en módulos lógicos:**
   - Cuando tienes grandes hojas de estilo, puede ser útil dividirlas en módulos más pequeños y lógicos. Por ejemplo, podrías tener un archivo `Button.css` para los estilos de los botones, `Header.css` para los encabezados, etc., y luego importar todos estos archivos en un archivo CSS principal.

2. **Mantenimiento y escalabilidad:**
   - En proyectos grandes, la modularización ayuda a mantener el CSS organizado y fácil de mantener. Al importar módulos CSS en un archivo central, puedes tener una vista general de todos los estilos aplicados en la aplicación.

3. **Estilos compartidos entre múltiples archivos:**
   - Si tienes estilos comunes que deben ser utilizados en múltiples componentes, puedes crear un archivo CSS compartido y luego importarlo en los archivos CSS de cada componente que necesite esos estilos.

#### Ejemplo de uso de `@import`

Imaginemos que tenemos la siguiente estructura de proyecto:

```bash
src/
├── styles/
│   ├── main.css
│   ├── Button.css
│   └── Header.css
├── components/
│   ├── Button.jsx
│   └── Header.jsx
```

**Button.css:**

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

**Header.css:**

```css
.header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  font-size: 24px;
}
```

**main.css:**

```css
@import "./Button.css";
@import "./Header.css";

body {
  font-family: Arial, sans-serif;
}
```

En este caso, `main.css` importa `Button.css` y `Header.css`, permitiéndonos tener todos los estilos en un solo archivo principal que se aplica a toda la aplicación.

#### Casos en los que es mejor evitar `@import`

1. **Rendimiento:**
   - El uso excesivo de `@import` puede afectar negativamente el rendimiento, ya que cada importación puede provocar una solicitud HTTP adicional. Esto es menos eficiente en comparación con tener un solo archivo CSS consolidado.
   
2. **Orden de carga:**
   - La importación de CSS puede complicar el orden de carga de los estilos, lo que podría llevar a problemas de especificidad y de estilo aplicados incorrectamente.

#### Alternativas modernas

1. **CSS Modules:**
   - Como se mencionó anteriormente, CSS Modules es una alternativa moderna y efectiva para la modularización de CSS, especialmente cuando se usa junto con frameworks como React, Vite.js, etc.
   
2. **Preprocesadores CSS:**
   - Usar preprocesadores como Sass o Less permite la modularización del CSS mediante la inclusión de archivos parciales (`@import`) sin los problemas de rendimiento asociados con las solicitudes HTTP adicionales.

**Ejemplo con Sass:**

```scss
// main.scss
@import "Button";
@import "Header";

body {
  font-family: Arial, sans-serif;
}
```

```scss
// También
@import "./Header.sass";
```

Al compilar `main.scss`, todos los archivos parciales se combinan en un solo archivo CSS, mejorando el rendimiento y manteniendo una estructura modular.

En resumen, el uso de `@import` en CSS es útil para la modularización y el mantenimiento de los estilos, pero se debe usar con cuidado debido a las posibles implicaciones en el rendimiento. Alternativas modernas como CSS Modules y preprocesadores CSS pueden ser más eficientes y manejables en proyectos grandes.

## 7. Pre-procesadores CSS

Ver en Obsidian: 👈👀👇

[[2.vite#6. Importar CSS#Alternativas modernas]]

## 8. CSS Modules

[[2.vite#6. Importar CSS#Paso a Paso Modularización de CSS con Vite.js]]

Otro ejemplo usando solo JavaScript.

```jsx
// En caso se tenga un id btn
document.getElementById("btn").className = styles.button
```

### Componentes con más de una clase

Para agregar más de dos clases a tus componentes en React cuando estás usando CSS Modules, puedes usar la concatenación de cadenas o bibliotecas como `classnames`, que hacen que la gestión de múltiples clases sea más fácil y limpia.

#### Método 1: Concatenación de Cadenas

Puedes usar la concatenación de cadenas directamente en el atributo `className`.

```jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ label }) => {
  return (
    <button className={`${styles.button} ${styles.additionalClass}`}>
      {label}
    </button>
  );
};

export default Button;
```

#### Método 2: Usar la Biblioteca `classnames`

La biblioteca `classnames` es una manera conveniente y limpia de manejar múltiples clases, especialmente cuando tienes condiciones para aplicar clases.

Primero, instala `classnames`:

```bash
npm install classnames
```

Luego, puedes usarla en tu componente:

```jsx
import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ label, primary, secondary }) => {
  // Aplicar clases condicionalmente
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.secondary]: secondary
  });

  return (
    <button className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
```

#### Ejemplo Completo con Condiciones

Supongamos que tienes las siguientes clases en tu archivo `Button.module.css`:

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
}

.secondary {
  background-color: #6c757d;
}

.large {
  padding: 15px 30px;
}

.small {
  padding: 5px 10px;
}
```

Puedes usar estas clases en tu componente de la siguiente manera:

```jsx
import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ label, primary, secondary, size }) => {
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.large]: size === 'large',
    [styles.small]: size === 'small'
  });

  return (
    <button className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
```

#### Uso en el Componente Principal

Ahora puedes usar este botón en tu componente principal `App` y pasar las props para aplicar las clases condicionalmente:

```jsx
import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Botones con múltiples clases</h1>
      <Button label="Primary Large" primary size="large" />
      <Button label="Secondary Small" secondary size="small" />
      <Button label="Default" />
    </div>
  );
};

export default App;
```

En este ejemplo, la clase `button` siempre se aplica, mientras que las clases `primary`, `secondary`, `large` y `small` se aplican condicionalmente según las props que se pasen al componente `Button`.

- [Vite CSS Modules](https://vitejs.dev/guide/features#css-modules)
- [React + CSS Modules](https://www.youtube.com/watch?v=3QTL4lTpPEY)

## 9. Importar imágenes

Para añadir imágenes a un proyecto usando Vite, puedes seguir estos pasos. Vite facilita el manejo de activos estáticos como imágenes, por lo que puedes importarlas y usarlas fácilmente en tus componentes de React. A continuación, te muestro cómo hacerlo con un ejemplo paso a paso.

### 1. Crear un Proyecto con Vite

Primero, asegúrate de tener un proyecto de Vite configurado. Si aún no tienes uno, puedes crear uno nuevo:

```bash
npm create vite@latest my-vite-project --template react
cd my-vite-project
npm install
```

### 2. Añadir Imágenes a tu Proyecto

Crea una carpeta `assets` en tu directorio `src` y coloca tus imágenes allí. Por ejemplo, la estructura de tu proyecto puede verse así:

```
my-vite-project/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   └── Button.jsx
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

### 3. Importar y Usar Imágenes en Componentes

Puedes importar las imágenes directamente en tus componentes de React y usarlas como src en elementos `<img>`.

**App.jsx:**

```jsx
import React from 'react';
import logo from './assets/logo.png';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Imágenes con Vite</h1>
      <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
      <Button label="Click Me" />
    </div>
  );
};

export default App;
```

### 4. Crear un Componente con Imagen

Supongamos que quieres usar una imagen dentro de tu componente `Button`.

**Button.jsx:**

```jsx
import React from 'react';
import styles from './Button.module.css';
import icon from '../assets/icon.png';

const Button = ({ label }) => {
  return (
    <button className={styles.button}>
      <img src={icon} alt="Icon" className={styles.icon} />
      {label}
    </button>
  );
};

export default Button;
```

**Button.module.css:**

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
```

### 5. Ejecutar el Proyecto

Para ejecutar tu proyecto y ver las imágenes en acción, usa el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite y podrás ver tu aplicación en el navegador en `http://localhost:3000`.

### Resumen

Al seguir estos pasos, puedes añadir y usar imágenes en tu proyecto de Vite con React. La clave es importar las imágenes en tus componentes y utilizarlas como `src` en los elementos `<img>`. Vite manejará las rutas y la optimización de los activos estáticos automáticamente, simplificando el proceso de desarrollo.

## 10. Importar JSON

Para usar un archivo `data.json` en un proyecto con Vite, puedes seguir estos pasos. Vite permite importar archivos JSON directamente en tu código, lo que facilita su uso dentro de tus componentes.

### 1. Crear un Proyecto con Vite

Si no tienes un proyecto Vite configurado, puedes crear uno nuevo:

```bash
npm create vite@latest my-vite-project --template react
cd my-vite-project
npm install
```

### 2. Añadir el Archivo JSON

Coloca tu archivo `data.json` en una ubicación accesible dentro del directorio `src`. Por ejemplo, la estructura de tu proyecto puede ser algo así:

```
my-vite-project/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── data/
│   │   └── data.json
│   ├── components/
│   │   └── Button.jsx
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

### 3. Importar y Usar el Archivo JSON en Componentes

Puedes importar el archivo JSON directamente en tus componentes de React y utilizar los datos.

**data.json:**

```json
{
  "title": "Welcome to Vite",
  "description": "This is a sample description from data.json",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```

**App.jsx:**

```jsx
import React from 'react';
import data from './data/data.json';

const App = () => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

Además, puedes usar lo siguiente para traer solo lo que necesitas:

```jsx
import { title } from './data/data.json';
```

### 4. Ejecutar el Proyecto

Para ejecutar tu proyecto y ver los datos del archivo JSON en acción, usa el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite y podrás ver tu aplicación en el navegador en `http://localhost:3000`.

### Resumen

Al seguir estos pasos, puedes importar y usar datos de un archivo JSON en tu proyecto Vite con React. Vite permite importar archivos JSON directamente, lo que simplifica el uso de datos estáticos en tus componentes.

Además puedes ver:

[[spa-js-vanilla#5. Crear el Home]]

```bash
# Crear carpeta dist para producción
npm run build
```

## 11. Importación global

Para importar archivos de manera masiva desde una carpeta en un proyecto Vite, puedes utilizar Webpack's `require.context` en lugar de una técnica más estándar en ES6 como `import.meta.glob`. Esta característica de Vite te permite importar todos los archivos dentro de una carpeta de forma dinámica.

### Usar `import.meta.glob`

Vite proporciona la funcionalidad `import.meta.glob` que permite importar archivos de manera masiva desde una carpeta específica. Aquí tienes un ejemplo de cómo hacerlo:

### Paso 1: Crear la estructura de archivos

Supongamos que tienes la siguiente estructura de proyecto:

```
my-vite-project/
├── public/
├── src/
│   ├── assets/ 👈👀
│   │   ├── image1.png
│   │   ├── image2.png
│   │   └── image3.png
│   ├── data/
│   │   └── data.json
│   ├── components/
│   │   └── ImageGallery.jsx
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

### Paso 2: Usar `import.meta.glob` para importar imágenes de manera masiva

Puedes usar `import.meta.glob` en tu componente para importar todos los archivos de una carpeta. Aquí tienes un ejemplo de cómo hacerlo en un componente `ImageGallery`:

**ImageGallery.jsx:**

```jsx
import React from 'react';

// Importar todas las imágenes de la carpeta assets
const images = import.meta.glob('../assets/*.png');

const ImageGallery = () => {
  const [loadedImages, setLoadedImages] = React.useState([]);

  React.useEffect(() => {
    const loadImages = async () => {
      const imageModules = await Promise.all(
        Object.values(images).map((image) => image())
      );
      setLoadedImages(imageModules.map((module) => module.default));
    };

    loadImages();
  }, []);

  return (
    <div>
      {loadedImages.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} style={{ width: '200px', height: 'auto', margin: '10px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;
```

### Paso 3: Usar el componente en `App.jsx`

**App.jsx:**

```jsx
import React from 'react';
import ImageGallery from './components/ImageGallery';

const App = () => {
  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <ImageGallery />
    </div>
  );
};

export default App;
```

### Paso 4: Ejecutar el proyecto

Para ejecutar tu proyecto y ver la galería de imágenes, usa el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite y podrás ver tu aplicación en el navegador en `http://localhost:3000`.

### Resumen

Utilizando `import.meta.glob`, puedes importar de manera masiva todos los archivos de una carpeta en tu proyecto Vite. Esta técnica es útil para cargar dinámicamente múltiples archivos, como imágenes o módulos, sin necesidad de importarlos manualmente uno por uno.

### Con JavaScript Vainilla

`modules/moduleOne.js`

```js
const module = {
  name: "module one"
};

export const load = () => {
  console.log(`${module.name} load!`)
}

export default module;
```

`modules/moduleTwo.js`

```js
const module = {
  name: "module two"
};

export const load = () => {
  console.log(`${module.name} load!`)
}

export default module;
```

`main.js`

```js
const modules = import.meta.glob("./modules/*.js");

for (const path in modules) {
  async function fetchModule() {
    const module = await modules[path]();
    module.load();
  }

  fetchModule();
  // modules[path]().then((module) => {
    // module.load();
    // });
}

console.info(modules);
```

[Vite glob import ](https://vitejs.dev/guide/features#glob-import)

## 12. Uso con TypeScript

Por defecto no se necesita ninguna configuración, solo crea los archivos `.ts` con el código necesario y listo.

### Crear un Proyecto Nuevo con TypeScript

Puedes crear un nuevo proyecto de Vite con soporte para TypeScript usando el siguiente comando:

```bash
npm create vite@latest my-vite-ts-project --template react-ts
cd my-vite-ts-project
npm install
```

Este comando creará un proyecto Vite configurado para usar React y TypeScript.

### Agregar TypeScript a un Proyecto Existente de Vite

Si ya tienes un proyecto de Vite y quieres agregar TypeScript, sigue estos pasos:

#### 1. Instalar Dependencias de TypeScript

Instala TypeScript y los tipos de React y ReactDOM:

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

#### 2. Añadir Archivo de Configuración `tsconfig.json`

Crea un archivo `tsconfig.json` en la raíz de tu proyecto con la siguiente configuración básica:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

También podemos ser más específicos con la versión de JavaScript que queremos usar:

```json
"target": "es2015",
```

#### 3. Renombrar Archivos a `.tsx` y `.ts`

Renombra tus archivos de componentes de `.jsx` a `.tsx` y otros archivos JavaScript a `.ts`. Por ejemplo, `App.jsx` debería ser renombrado a `App.tsx`.

#### 4. Actualizar Componentes y Archivos a TypeScript

Actualiza tus archivos de componentes para usar TypeScript. Aquí hay un ejemplo de cómo cambiar un componente de React a TypeScript.

**App.tsx:**

```tsx
import React from 'react';
import ImageGallery from './components/ImageGallery';

const App: React.FC = () => {
  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <ImageGallery />
    </div>
  );
};

export default App;
```

**ImageGallery.tsx:**

```tsx
import React, { useState, useEffect } from 'react';

// Importar todas las imágenes de la carpeta assets
const images = import.meta.glob('../assets/*.png');

const ImageGallery: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = await Promise.all(
        Object.values(images).map((image) => image())
      );
      setLoadedImages(imageModules.map((module) => module.default));
    };

    loadImages();
  }, []);

  return (
    <div>
      {loadedImages.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} style={{ width: '200px', height: 'auto', margin: '10px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;
```

#### 5. Ejecutar el Proyecto

Para ejecutar tu proyecto con TypeScript, usa el comando habitual de Vite:

```bash
npm run dev
npm run build
```

Esto iniciará el servidor de desarrollo de Vite y podrás ver tu aplicación en el navegador en `http://localhost:3000`.

### Resumen

Ya sea creando un nuevo proyecto de Vite con TypeScript o agregando TypeScript a un proyecto existente, puedes aprovechar las ventajas de TypeScript en tu desarrollo con Vite. Los pasos básicos incluyen instalar las dependencias de TypeScript, configurar `tsconfig.json`, renombrar archivos a `.tsx` y `.ts`, y actualizar tus componentes para usar TypeScript.

## 13. Vite Config

El archivo `vite.config.js` (o `vite.config.ts` si estás usando TypeScript) es el archivo de configuración principal para un proyecto Vite. Este archivo permite personalizar y extender el comportamiento de Vite mediante la especificación de varias opciones de configuración y plugins. A continuación, se explica su uso y se destacan algunas configuraciones relevantes.

### Propósito del `vite.config.js`

El archivo `vite.config.js` se utiliza para:

1. **Configurar el Servidor de Desarrollo:** Puedes personalizar el puerto, proxy, hot module replacement (HMR) y otras opciones del servidor de desarrollo.
2. **Configurar el Proceso de Compilación:** Define cómo se deben compilar y optimizar los archivos para producción.
3. **Configurar Plugins:** Añadir y configurar plugins para extender las funcionalidades de Vite.
4. **Definir Alias:** Crear alias para directorios o archivos, facilitando las importaciones.
5. **Configurar la Resolución de Módulos:** Personalizar cómo se resuelven los módulos.

### Ejemplo de `vite.config.js`

Aquí tienes un ejemplo básico de un archivo `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Cambia el puerto del servidor de desarrollo
    open: true, // Abre el navegador automáticamente
  },
  build: {
    outDir: 'dist', // Directorio de salida para los archivos de compilación
    sourcemap: true, // Genera sourcemaps para depuración
  },
  resolve: {
    alias: {
      '@': '/src', // Crea un alias para la carpeta src
    },
  },
});
```

### Configuraciones Relevantes

1. **Configuración del Servidor de Desarrollo:**

   ```javascript
   server: {
     port: 3000, // Especifica el puerto del servidor de desarrollo
     open: true, // Abre el navegador automáticamente al iniciar el servidor
     proxy: { // Configura proxies para manejar peticiones a APIs
       '/api': 'http://localhost:4000'
     },
   }
   ```

2. **Configuración del Proceso de Compilación:**

   ```javascript
   build: {
     outDir: 'dist', // Directorio de salida para los archivos compilados
     sourcemap: true, // Genera sourcemaps para facilitar la depuración
     minify: 'terser', // Minifica el código usando Terser
   }
   ```

3. **Uso de Plugins:**

   Los plugins permiten extender y personalizar Vite. Por ejemplo, puedes usar el plugin oficial de React:

   ```javascript
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
   });
   ```

   También puedes usar otros plugins de la comunidad para añadir funcionalidades como soporte para TypeScript, PWA, Tailwind CSS, etc.

4. **Definir Alias:**

   Los alias son útiles para simplificar las rutas de importación:

   ```javascript
   resolve: {
     alias: {
       '@': '/src', // Ahora puedes usar @ en lugar de ../../src
     },
   }
   ```

5. **Configuración de CSS:**

   Puedes personalizar la forma en que se maneja el CSS, incluyendo preprocesadores:

   ```javascript
   css: {
     preprocessorOptions: {
       scss: {
         additionalData: `@import "@/styles/variables.scss";`
       },
     },
   }
   ```

### Plugins y Extensiones

Vite tiene una arquitectura de plugins muy poderosa y flexible. Puedes añadir plugins para manejar cosas como PWA, SSR, analíticas de bundle, etc. Algunos ejemplos de plugins populares:

- `@vitejs/plugin-vue` para proyectos Vue.
- `@vitejs/plugin-vue-jsx` para soporte JSX en Vue.
- `vite-plugin-pwa` para añadir soporte de Progressive Web App.
- `vite-plugin-windicss` para integrar Windi CSS.

### Ejemplo Avanzado

Un ejemplo más avanzado de configuración podría incluir múltiples plugins y configuración de proxy:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My App',
        short_name: 'App',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

### Resumen

El archivo `vite.config.js` es fundamental para configurar y personalizar tu proyecto Vite. Permite ajustar opciones del servidor de desarrollo, definir configuraciones de compilación, añadir y configurar plugins, establecer alias, y mucho más. La flexibilidad y simplicidad de Vite lo hacen ideal para proyectos modernos de frontend.

### `vite.config.js` con arrow function

Usar una función de flecha (`arrow function`) con `export default defineConfig` en Vite es una forma válida y a menudo conveniente de configurar el proyecto. Esta técnica es especialmente útil cuando necesitas realizar cálculos, cargar variables de entorno, o ejecutar cualquier lógica antes de devolver la configuración. Aquí hay algunos casos de uso en los que esta forma puede ser beneficiosa:

#### Casos de Uso para la Configuración con Función de Flecha

1. **Uso de Variables de Entorno:**

   Puedes cargar variables de entorno y usarlas en tu configuración.

   ```javascript
   export default defineConfig(() => {
     const port = process.env.PORT || 3000;

     return {
       server: { port },
     };
   });
   ```

2. **Lógica Condicional:**

   Puedes ejecutar lógica condicional para cambiar la configuración en función de ciertas condiciones.

   ```javascript
   export default defineConfig(() => {
     const isProduction = process.env.NODE_ENV === 'production';
     const base = isProduction ? '/prod-base/' : '/dev-base/';

     return {
       base,
       server: {
         port: 3000,
       },
     };
   });
   ```

3. **Cálculos Dinámicos:**

   Puedes realizar cálculos o procesar datos antes de devolver la configuración.

   ```javascript
   export default defineConfig(() => {
     const getPort = () => {
       // Lógica compleja para determinar el puerto
       return 3000;
     };

     return {
       server: {
         port: getPort(),
       },
     };
   });
   ```

4. **Integración con Librerías Externas:**

   Puedes integrar tu configuración con librerías externas que necesiten ser inicializadas o configuradas.

   ```javascript
   import someLibrary from 'some-library';

   export default defineConfig(() => {
     someLibrary.init();

     return {
       server: {
         port: 3000,
       },
       plugins: [someLibrary.plugin()],
     };
   });
   ```

5. **Configuración Basada en Tiempo de Ejecución:**

   Puedes cambiar la configuración en función de la fecha, la hora u otros factores en tiempo de ejecución.

   ```javascript
   export default defineConfig(() => {
     const currentHour = new Date().getHours();
     const port = currentHour < 12 ? 3000 : 4000;

     return {
       server: { port },
     };
   });
   ```

#### Ejemplo Completo

Aquí tienes un ejemplo más completo que combina varios de los casos mencionados:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import someLibrary from 'some-library';

export default defineConfig(() => {
  const isProduction = process.env.NODE_ENV === 'production';
  const base = isProduction ? '/prod-base/' : '/dev-base/';
  const port = process.env.PORT || (new Date().getHours() < 12 ? 3000 : 4000);

  someLibrary.init();

  return {
    base,
    server: {
      port,
    },
    plugins: [react(), someLibrary.plugin()],
  };
});
```

### Resumen

Usar una función de flecha en `defineConfig` es útil cuando necesitas flexibilidad para generar tu configuración de Vite dinámicamente. Puedes usarla para manejar variables de entorno, aplicar lógica condicional, realizar cálculos dinámicos, integrar librerías externas, y adaptar la configuración en función de factores en tiempo de ejecución. Esta técnica te proporciona una mayor flexibilidad y control sobre tu configuración de Vite.

## 14. Variables de entorno y modos

En Vite, las variables de entorno y los modos de configuración son componentes importantes para gestionar diferentes configuraciones según el entorno de desarrollo o producción en el que se esté ejecutando la aplicación. Aquí te explico cómo funcionan y cómo se pueden configurar en el archivo `vite.config.js`.

### Variables de Entorno en Vite

Las variables de entorno son valores que pueden cambiar entre diferentes entornos de ejecución de una aplicación, como desarrollo, pruebas o producción. En Vite, puedes acceder a estas variables usando el prefijo `import.meta.env`.

#### Ejemplo de Uso

Supongamos que tienes las siguientes variables de entorno definidas:

- `VITE_APP_API_URL_DEV` para el entorno de desarrollo.
- `VITE_APP_API_URL_PROD` para el entorno de producción.

Puedes acceder a estas variables en tu configuración de Vite de la siguiente manera:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
  },
  base: process.env.BASE_URL || '/',
  define: {
    // Definir variables de entorno accesibles en el código
    __DEV__: JSON.stringify(import.meta.env.MODE === 'development'),
    __PROD__: JSON.stringify(import.meta.env.MODE === 'production'),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(import.meta.env.VITE_APP_ENV === 'development' && import.meta.env.MODE === 'production'),
  },
});
```

### Modos de Vite

Vite soporta diferentes modos de ejecución, que te permiten ajustar la configuración según el entorno en el que se esté ejecutando la aplicación. Por defecto, Vite tiene dos modos:

- **development** (desarrollo): Usado durante el desarrollo local. Caracterizado por una rápida recarga y depuración fácil.
- **production** (producción): Usado cuando estás construyendo tu aplicación para distribución. Caracterizado por la optimización del rendimiento y la reducción del tamaño de los archivos.

#### Configuración por Modo

Puedes configurar el archivo `vite.config.js` para manejar diferentes configuraciones según el modo actual de ejecución. Esto se hace utilizando el objeto `defineConfig` y especificando diferentes opciones dependiendo de `import.meta.env.MODE`.

#### Ejemplo de Configuración por Modo

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
  },
  base: process.env.BASE_URL || '/',
  define: {
    // Definir variables de entorno accesibles en el código
    __DEV__: JSON.stringify(import.meta.env.MODE === 'development'),
    __PROD__: JSON.stringify(import.meta.env.MODE === 'production'),
  },
  // Configuración específica para desarrollo
  ...(import.meta.env.MODE === 'development' && {
    plugins: [],
    build: {
      sourcemap: true,
    },
  }),
  // Configuración específica para producción
  ...(import.meta.env.MODE === 'production' && {
    build: {
      minify: true,
      sourcemap: false,
    },
  }),
});
```

### Resumen

- **Variables de Entorno:** Utilizadas para gestionar configuraciones sensibles o variables que cambian según el entorno (como URLs de API, puertos, etc.). Se acceden mediante `import.meta.env`.
  
- **Modos de Vite:** Controlan cómo se compila y ejecuta la aplicación. Los modos por defecto son `development` y `production`, y puedes ajustar la configuración de acuerdo al modo actual.

Configurar variables de entorno y modos adecuadamente en Vite te permite gestionar de manera eficiente las diferencias entre los entornos de desarrollo y producción, facilitando así el proceso de desarrollo y despliegue de tus aplicaciones web.

### Código de la clase

`vite.config.js`

```js
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const port = 3000;
  const env = loadEnv(mode, process.cwd());

  console.log("Command: ", command, "Mode: ", mode);
  console.log(env.VITE_NAME);

  if (mode === "development") {
    console.log("Development mode");
  } else {
    console.log("Production Mode");
  }

  return {
    server: {
      port,
    },
  };
});
```

Creamos un archivo en la raíz del proyecto:

`.env`

```js
// Nombre del proyecto
VITE_NAME="spa test"
```

Dependiendo del comando ejecutado la consola muestra lo siguiente:

```bash
npm run dev
Command:  serve Mode:  development
```

```bash
npm run build
Command:  build Mode:  production
{ VITE_NAME: 'spa test' }
spa test
```

## 15. Sitios multi-página

### ¿Qué son los Sitios Multi-página?

Un sitio multi-página (MPA, por sus siglas en inglés) es un tipo de sitio web que consta de múltiples páginas HTML distintas, cada una con su propio contenido y URL. A diferencia de las aplicaciones de una sola página (SPA), donde el contenido se carga dinámicamente sin recargar la página, los MPAs recargan la página completa al navegar entre diferentes secciones.

### ¿Cómo se usan y funcionan los Sitios Multi-página?

1. **Estructura:** Los MPAs suelen tener una estructura jerárquica donde hay una página principal y varias subpáginas. Por ejemplo, un sitio web corporativo puede tener una página de inicio, una página de servicios, una página de contacto, etc.
  
2. **Navegación:** Cada página se carga de manera independiente y la navegación entre páginas implica una solicitud al servidor para cargar una nueva página HTML completa.

3. **SEO:** Son más favorables para el SEO (optimización de motores de búsqueda) ya que cada página tiene su propia URL y puede ser indexada individualmente por los motores de búsqueda.

### Crear un Sitio Multi-página con Vite

Vite es una herramienta de construcción rápida para proyectos web modernos, que soporta tanto SPAs como MPAs. Aquí hay una guía paso a paso para crear un MPA con Vite:

1. **Instalar Vite:**

   Primero, asegúrate de tener Node.js instalado. Luego, crea un nuevo proyecto con Vite:

   ```bash
   npm create vite@latest my-mpa-project
   cd my-mpa-project
   npm install
   ```

2. **Estructura del Proyecto:**

   Organiza tu proyecto de manera que cada página tenga su propio archivo HTML. Por ejemplo:

   ```bash
   /public
     /about.html
     /contact.html
   /src
     /main.js
     /about.js
     /contact.js
   /index.html
   ```

3. **Configurar Vite para MPA:**

   Modifica el archivo `vite.config.js` para definir múltiples entradas para las diferentes páginas:

   ```js
   import { defineConfig } from 'vite';
   import { resolve } from 'path';

   export default defineConfig({
     build: {
       rollupOptions: {
         input: {
           main: resolve(__dirname, 'index.html'),
           about: resolve(__dirname, 'public/about.html'),
           contact: resolve(__dirname, 'public/contact.html'),
         }
       }
     }
   });
   ```

4. **Añadir Scripts a Cada Página:**

   En cada archivo HTML, incluye el script correspondiente:

   ```html
   <!-- index.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Home</title>
   </head>
   <body>
     <h1>Home Page</h1>
     <script type="module" src="/src/main.js"></script>
   </body>
   </html>
   
   <!-- about.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>About</title>
   </head>
   <body>
     <h1>About Page</h1>
     <script type="module" src="/src/about.js"></script>
   </body>
   </html>
   
   <!-- contact.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Contact</title>
   </head>
   <body>
     <h1>Contact Page</h1>
     <script type="module" src="/src/contact.js"></script>
   </body>
   </html>
   ```

5. **Desarrollar y Construir:**

   Utiliza los comandos de Vite para desarrollar y construir tu proyecto:

   ```bash
   npm run dev   # para el desarrollo
   npm run build # para la producción
   ```

Este enfoque te permite mantener un sitio web estructurado y fácil de mantener, mientras aprovechas la velocidad y simplicidad de Vite.

### Código de la clase

`vite.config.js`

```js
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 3000;
  const env = loadEnv(mode, process.cwd());

  console.log("Command: ", command, "Mode: ", mode);
  console.log(env.VITE_NAME);

  if (mode === "development") {
    console.log("Development mode");

    return {
      server: {
        port,
      },
    };
  } else {
    console.log("Production Mode");

    return {
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            help: resolve(__dirname, "help", "help.html"),
          },
        },
      },
    };
  }
});
```

Creamos la carpeta `help/help.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Help</title>
  </head>
  <body>
    <p>Help!</p>
  </body>
</html>
```

```bash
// Ejecutamos el proyecto
npm run dev

// Navegamos al archivo help
http://localhost:3000/help/help.html

// Mandamos a producción
npm run build
```

## 16. Construir librerías

Vite es una herramienta excelente no solo para crear aplicaciones web, sino también para construir librerías JavaScript. Crear una librería implica empaquetar código que puede ser reutilizado en múltiples proyectos. Las librerías pueden contener funciones, componentes, hooks, o cualquier otra pieza de código que desees compartir.

### ¿Para qué sirven las Librerías?

1. **Reutilización de Código:** Permiten usar el mismo código en diferentes proyectos sin duplicación.
2. **Mantenimiento:** Facilitan la actualización y el mantenimiento del código compartido.
3. **Modularidad:** Fomentan una arquitectura de software modular, donde los componentes se pueden desarrollar y actualizar de manera independiente.
4. **Compartir con la Comunidad:** Puedes publicar librerías en repositorios como npm para que otros desarrolladores también las utilicen.

### Pasos para Crear una Librería con Vite

1. **Inicializar un Nuevo Proyecto con Vite:**

   Crea un nuevo proyecto con Vite:

   ```bash
   npm create vite@latest my-library --template lib
   cd my-library
   npm install
   ```

2. **Estructura del Proyecto:**

   La estructura básica de un proyecto de librería con Vite podría ser algo así:

   ```
   /src
     /index.js
   /dist
   vite.config.js
   package.json
   ```

   - `src/index.js`: El punto de entrada de tu librería.
   - `dist`: El directorio donde se generarán los archivos construidos.
   - `vite.config.js`: Configuración de Vite.
   - `package.json`: Metadatos del proyecto.

3. **Configurar Vite para Construir Librerías:**

   Modifica `vite.config.js` para asegurarte de que Vite construya la librería correctamente:

   ```js
   import { defineConfig } from 'vite';

   export default defineConfig({
     build: {
       lib: {
         entry: 'src/index.js',
         name: 'MyLibrary',
         fileName: (format) => `my-library.${format}.js`
       },
       rollupOptions: {
         // Asegúrate de externalizar dependencias que no necesitas empaquetar
         external: ['vue'], // Ejemplo: si tu librería depende de Vue
         output: {
           globals: {
             vue: 'Vue'
           }
         }
       }
     }
   });
   ```

4. **Escribir el Código de la Librería:**

   Escribe el código de tu librería en `src/index.js`:

   ```js
   // Ejemplo simple de una función en la librería
   export function greet(name) {
     return `Hello, ${name}!`;
   }
   ```

5. **Construir la Librería:**

   Construye la librería utilizando el comando de Vite:

   ```bash
   npm run build
   ```

   Esto generará los archivos de salida en el directorio `dist`.

6. **Publicar la Librería:**

   Si deseas publicar tu librería en npm, asegúrate de tener una cuenta en npm y haber iniciado sesión:

   ```bash
   npm login
   npm publish
   ```

   Asegúrate de que `package.json` contenga la información correcta como el nombre, versión, descripción, etc.

### Ejemplo Completo

#### `src/index.js`

```js
export function greet(name) {
  return `Hello, ${name}!`;
}
```

#### `vite.config.js`

```js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyLibrary',
      fileName: (format) => `my-library.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
});
```

#### `package.json`

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "description": "My awesome library",
  "main": "dist/my-library.umd.js",
  "module": "dist/my-library.es.js",
  "scripts": {
    "build": "vite build"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}
```

### Utilizando tu Librería

Una vez publicada, puedes utilizar tu librería en otros proyectos instalándola a través de npm:

```bash
npm install my-library
```

Y luego importándola:

```js
import { greet } from 'my-library';

console.log(greet('World')); // "Hello, World!"
```

Esto te proporciona un flujo completo para crear, construir y utilizar librerías con Vite, facilitando la reutilización y el mantenimiento de código en tus proyectos.

### Código de la clase

Creamos la carpeta `lib/main.js`

```js
console.log("Hi main.js");
```

`vite.config.js`

```js
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 3000;
  const env = loadEnv(mode, process.cwd());

  console.log("Command: ", command, "Mode: ", mode);
  console.log(env.VITE_NAME);

  if (mode === "development") {
    console.log("Development mode");

    return {
      server: {
        port,
      },
    };
  } else {
    console.log("Production Mode");

    return {
      build: {
        lib: {
          entry: resolve(__dirname, "lib", "main.js"),
          name: "demo",
          fileName: (format) => `demo.${format}.js`,
        },
      },
    };
  }
});
```

```bash
npm run build
```

## 17. Soporte para React

```bash
npm create vite@latest my-vite-project

react
javascript

cd my-vite-project
npm install
npm run dev
```

Estructura:

```bash
.
├── index.html
├── node_modules
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## 18. Soporte para Vue

Los pasos para crear un proyecto con Vue es igual a los pasos anteriores, solo debes seleccionar vue en las opciones que van apareciendo en consola.

## 19. Despedida

## 🔥 Examen

<details>
  <summary>Haz clic para ver los resultados 👀👇</summary>
  <br/>

1. ¿Qué tipo de proyectos se pueden hacer con Vite?

	- ✅ Proyectos de frontend con cualquier framework compatible y librerías de componentes, etc.

2. ¿Cómo se importa CSS con Vite?

	- ✅ Con @import en archivos de estilos, y con import en archivos de código.

3. ¿Es posible utilizar Vite para proyectos React?

	- ✅ Si, con soporte completo.

4. ¿Qué son los CSS Modules?

	- ✅ Son el estándar de CSS para resolver el problema de modularidad.

5. ¿Qué es el HMR?

	- ✅ El HMR o Hot Module Replacement, es la estrategia que permite visualizar los cambios del código en tiempo real en el navegador, manteniendo el estado.

6. ¿Porqué es bueno utilizar la desestructuración al importar JSON?

	- ✅ Porque permite optimizar el build para producción, al eliminar todo el código innecesario.

7. ¿Qué es el proceso de bundling?

	- ✅ Es el proceso en el que se optimiza el código en paquetes para producción, eliminando el código innecesario y separando o juntando los módulos necesarios.

8. ¿Cuál es el archivo de configuración de Vite?

	- ✅ vite.config.js

9. ¿Es posible utilizar Vite para proyectos Vue?

	- ✅ Si, con soporte completo.

10. ¿Qué hace el proceso de pre-bundling de Vite?

	- ✅ Agrega compatibilidad, pues adapta módulos en CommonJS o UMD, al formato estándar de ECMAScript, los ES Modules.

11. ¿Qué estrategia utiliza Vite para importar archivos?

	- ✅ Utiliza un servidor de archivos estáticos y luego los importa vía URL.

12. ¿Cuáles son los dos modos de Vite?

	- ✅ Desarrollo y producción.

13. ¿Que hay que agregar a las variables de entorno para poder usarlas en el frontend?

	- ✅ VITE

14. ¿Qué tecnología usa Vite para el procesamiento de CSS?

	- ✅ PostCSS, que da soporte para la optimización en producción, y también para usar pre-procesadores.

15. ¿Cómo funciona la resolución de dependencias de Vite?

	- ✅ Vite expone todo como un servidor de archivos estáticos y aprovecha el caché del navegador para ganar performance.

16. ¿Para qué nos sirve el archivo de configuración de Vite?

	- ✅ Para tomar el control del proceso de desarrollo y producción.

17. ¿Qué es el proceso de minificación?

	- ✅ Es el proceso en el que se elimina el contenido innecesario como espacios y comentarios, para hacer paquetes más ligeros en producción.

18. ¿Cuáles son las ventajas de la importación global?

	- ✅ Que podemos importar archivos de forma masiva utilizando JavaScript, para no tener que importar cada elemento manualmente.
	- Que tenemos que importar globalmente todo para que todo se encuentre en el scope global.

19. Vite es una herramienta de desarrollo frontend de...

	- ✅ Tercera generación

20. ¿Cuál es el plugin de Vite para utilizar TypeScript?

	- ✅ Ninguno, ya que Vite soporta TypeScript sin configuración adicional.

</details>

👀
👀👇
👈👀👇
✅