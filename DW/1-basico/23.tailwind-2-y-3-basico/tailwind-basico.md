# Curso Básico de Tailwind 2 y 3

## 1. Bienvenida al desarrollo con Tailwind

- [Repo del proyecto](https://github.com/platzi/PlatziTravel)
- [Resultado final](https://anamdiazs.github.io/PlatziTravel/)

### Otro diseño
- [Lo mismo pero mejor](https://luisariza.github.io/travel-page/)
- [Repo del proyecto](https://github.com/luisAriza/travel-page)

## 2. Tailwind 3.0: ¿Qué hay de nuevo?

Hola, el proyecto de este curso fue creado con la versión 2.0 de Tailwind, pero en diciembre de 2021 salió la versión 3.0. Es muy importante que tengas en cuenta que cuando comiences el proyecto lo harás con esta nueva versión, lo cual **no afectara para el desarrollo del proyecto**.

De igual manera al finalizar el proyecto te mostraré como realizar una migración de tus proyectos 2.0 a la versión 3.0 de Tailwind.

A continuación te mostramos los cambios más importantes de la versión 3.0:

### Rendimiento

Una de las mejoras más grandes es el modo de compilación Just in time engine (JIT) que llega a reemplazar el modo de compilación tradicional para reducir y optimizar el tiempo de compilación del archivo así como su peso.

### Estilos nativos de formularios

Ahora es posible manipular los estilos nativos de un formulario haciendo uso de tailwind con la utilidad accent y la clase file.

### Box shadow

Ahora también contamos con esta poderosa herramienta que integra una serie de colores para el sombreado con la cual es posible modificar su opacidad.

En este ejemplo podemos ver 3 botones que tienen un sombreado del mismo color que el botón, pero con una opacidad menor, creando un efecto de profundidad hermoso.

![](https://i.postimg.cc/fkndrTFc/2-shadow.png)

```html
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ..."> Subscribe </button>

<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ..."> Subscribe </button>

<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ..."> Subscribe </button>
```

### Multi-column layout

Se pueden generar columnas nativamente, ahora podrás crear artículos o columnas al estilo de revistas y periódicos. Estos son realmente muy útiles y también son excelentes para diseños de navegación al pie de página.

![](https://i.postimg.cc/2jbrGxxF/2-multi-columns.png)

Puedes consultar todas las novedades de esta nueva versión en [la documentación oficial](https://tailwindcss.com/blog/tailwindcss-v3) 😄

Te veo en la siguiente clase donde vamos a discutir cómo funciona Tailwind.

## 3. ¿Cómo funciona Tailwind? Y otros frameworks de CSS

Tailwind es un framework de CSS de código abierto para el diseño de páginas web, esto quiere decir que es un conjunto de herramientas para construir interfaces web con CSS, que nos permiten agilizar el desarrollo. 

### Características de Tailwind

- **Representado mediante clases**, esto lo vamos a ver directamente reflejado cuando estemos programando nuestro documento, ya que vamos a estar agregando nuestras clases para definir nuestros estilos.
- **Orientado a utilidades**, el hecho de que este orientado a utilidades y no a componentes nos permite tener más personalización en el desarrollo.
- **Personalizable**, a diferencia de otros frameworks Tailwind nos permite poder personalizar nuestro proyecto al 100%, ya que podemos crear nuestra paleta de colores, agregar tipografías e incluso hacer uso de plugins.

### Algunos de los frameworks de CSS más conocidos son:

- **Bootstrap:** a diferencia de Tailwind esta basado en componentes, sin embargo cuenta con una abstracción en la creación de los componentes, su desventaja es su poca personalización.
    
- **Material UI:** este framework esta basado en componentes pre-construidos, además de ser basado en el tema de Material, el tema de Material es el que normalmente vemos en aplicaciones como en la Suit de Google o el sistema operativo Android.
    
    Al ser Material UI un framework un poco más grande, compuesto de componentes y un poco más complejo se vuelve un Design System.
    
- **Bulma:** por ultimo este framework es modular, esto quiere decir que nos va a permitir importar únicamente los archivos que necesitemos utilizar, además se vuelve personalizable ya que mediante la creación de variables de sass podemos agregar todos los estilos que queramos, otro punto importante es que esta basado en Flexbox.

### Dato 

Tailwind utiliza licencia MIT, es importante saber que licencia utiliza la tecnología antes de pensar en usarla en producción de lo contrario te puede meter en bastantes problemas y es un tema que la mayoría nunca menciona o conoce.

## 4. Mobile First y Utility First

Hay dos principios para trabajar con Tailwind:

- **Mobile First** → Pensado principalmente para mejorar la experiencia de usuario. Permite identificar las partes más importantes de nuestro proyecto. En otras palabras, prioriza el desarrollo pensando en los dispositivos móviles.
    
- **Utility First** → Basado en utilidades el cual permite tener una estructura más limpia de nuestros estilos, el desarrollo es más rápido ya que todo se trabaja dentro del mismo archivo. En otras palabras, es la forma en que se nombran y se crean las clases de estilos, es decir, son clases descriptivas de la utilidad que nos dan. Se trata de construir componentes a partir de clases con nombres descriptivos.


### Ejemplo

🌚 **Desarrollo de estilos tradicional**

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

🌝 **Desarrollo de estilos con utilidades**

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

- Como se puede observar cada clase tiene una funcionalidad simple y es descriptiva

📌 **RESUMEN:** Tailwind se basa en dos corrientes, Mobile First, la cual te dice que debes dar prioridad a los dispositivos móviles y Utility First el cual son clases las cuales tienen un propósito o utilidad en específico.


## 5. Creación del proyecto e instalación de Tailwind

- Extensión: Tailwind CSS IntelliSense 

Para realizar esta instalación recomiendo saber que es npm para lo cual puedes revisar los apuntes [[npm-gestion-de-paquetes-y-dependencias]] o ver el curso aquí [Curso de NPM](https://platzi.com/clases/3578-npm/52452-bienvenida-al-curso/).

### Iniciar proyecto Tailwind CSS v3.0

[Documentación de instalación usando CLI (Interfaz de línea de comandos)](https://tailwindcss.com/docs/installation)

1. Creamos estructura de carpetas y archivos: 
	- public
		- index.html
		- css 
			- tailwind.css
	- src 
		- css
			- tailwind.css
2. Iniciar proyecto 
	- En la terminal te ubicas en la carpeta del proyecto: 
		- pwd
	- `npm init -y`
3. Instalar Tailwind CSS: Instale `tailwindcss`a través de npm y cree su archivo `tailwind.config.js`.  
	- `npm install -D tailwindcss && npx tailwindcss init`

Se debe ver de la siguiente manera:   
```bash
.
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── css
│   └── index.html
├── src
│   └── css
└── tailwind.config.js
```

4. Configura las rutas de tus plantillas: Agregue las rutas a todos sus archivos de plantilla en su archivo `tailwind.config.js`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Agrega las directivas de Tailwind a tu CSS: Agrega las directivas  `@tailwind` a `src/css/tailwind.css` para cada una de las capas de Tailwind a tu archivo CSS principal.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Si te aparece algo así, tranquilo, todo está bien. 

![](https://i.postimg.cc/qvHfYkq1/4-tailwind.png)

6. Inicia el proceso de compilación de Tailwind CLI: Ejecuta la herramienta CLI para escanear tus archivos de plantilla en busca de clases y construir tu CSS.

Nota: La ruta dentro del comando depende de la estructura de tu proyecto.   
`npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch`

Debe quedar así para empezar a hacer cambios en tu proyecto:   
![](https://i.postimg.cc/8cVpbL2b/5-compilation.png)

7. Comienza a usar Tailwind en tu HTML: Agrega tu archivo CSS compilado al elemento `<head>` y comienza a usar las clases de utilidad de Tailwind para dar estilo a tu contenido.

index.html  
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../public/css/tailwind.css">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world! ✌😊
  </h1>
  <div class="w-64 h-64 bg-red-200"></div>
</body>
</html>
```

✨ Clic derecho sobre el archivo index.html y darle a Open with Live Server

![](https://i.postimg.cc/ZqdFBS4y/5-result.png)

### Dato: 

#### Usar CDN o hacer una instalación completa?
La diferencia entre instalar tailwind usando los pasos anteriores con instalarlo a través de la etiqueta:

```html
<script src=“[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com/)”></script>
```

Es que cuando lo utilizas como CDN no es posible personalizar tu configuración de la misma manera, ya que es una versión más ligera. Importar la etiqueta al documento es hacer uso de tailwind mediante CDN la diferencia es que al hacer la instalación puedes configurar más cosas dentro de Tailwind

#### Cual es la diferencia entre instalar tailwind CLI y POSTCSS ?

La instalación POSTCSS se realiza cuando lo integraras con build tools como webpack, Rollup, Vite, and Parcel.

`npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch`

## 6. Directivas de Tailwind

"Una referencia para las funciones y directivas personalizadas que Tailwind expone a tu CSS"

### Directives

"Las directivas son reglas personalizadas específicas de Tailwind que puedes utilizar en tu CSS y que ofrecen funcionalidades especiales para proyectos de Tailwind CSS."

**Directiva** es una instrucción que utiliza **tailwind** para insertar código en el archivo final de css que genera. Esto inyecta los estilos base de **Tailwind** y cualquier estilo base registrado por plugins, también inyecta las clases de componentes de **Tailwind** y cualquier clase de componente registrado por los plugins.

#### @tailwind

"Utiliza la directiva `@tailwind` para insertar los estilos  `base`, `components`, `utilities` y  `variants` de Tailwind en tu CSS."

```css
/**
 * Esto inyecta los estilos base de Tailwind y cualquier estilo base registrado por los plugins. Es la encargada de inicializar todos los elementos (div, span, ul, p, etc) de nuestro HTML sin estilo.
 */
@tailwind base;

/**
 * Esto inyecta las clases de componentes de Tailwind y cualquier clase de componente registrada por los plugins. Nos permite acceder a todas las clases de tailwind.
 */
@tailwind components;

/**
 * Esto inyecta las clases de utilidad de Tailwind y cualquier clase de utilidad registrada por los plugins. 
 */
@tailwind utilities;

/**
 * Utiliza esta directiva para controlar dónde Tailwind inyecta las variantes de cada clase, como hover, focus, responsive, dark mode, entre otras.
 *
 * Si se omite, Tailwind por defecto agregará estas clases al final de la hoja de estilos.
 */
@tailwind variants;

```

#### @layer

Utiliza la directiva  `@layer` para indicar a Tailwind en qué "contenedor" pertenece un conjunto de estilos personalizados. Las capas válidas son  `base`, `components`, y  `utilities`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}

@layer utilities {
  .filter-none {
    filter: none;
  }
  .filter-grayscale {
    filter: grayscale(100%);
  }
}
```

Tailwind moverá automáticamente el CSS dentro de cualquier directiva `@layer` al mismo lugar que la regla `@tailwind` correspondiente, por lo que no es necesario preocuparse por escribir el CSS en un orden específico para evitar problemas de especificidad.

Cualquier CSS personalizado agregado a una capa solo se incluirá en la compilación final si ese CSS se utiliza realmente en el HTML, al igual que todas las clases integradas en Tailwind por defecto.

Envolver cualquier CSS personalizado con `@layer` también permite utilizar modificadores con esas reglas, como `hover:` y `focus:`, o modificadores responsivos como `md:` y `lg:`.

#### @apply

Utiliza `@apply` para insertar cualquier clase de utilidad existente en tu propio CSS personalizado.

Esto es útil cuando necesitas escribir CSS personalizado (como para anular los estilos en una biblioteca de terceros), pero aún deseas trabajar con tus tokens de diseño y utilizar la misma sintaxis que estás acostumbrado a utilizar en tu HTML.

```css
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}
.select2-search {
  @apply border border-gray-300 rounded;
}
.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

Cualquier regla en línea con `@apply` tendrá `!important` eliminado por defecto para evitar problemas de especificidad:

```css
/* Input */
.foo {
  color: blue !important;
}

.bar {
  @apply foo;
}

/* Output */
.foo {
  color: blue !important;
}

.bar {
  color: blue;
}
```

Si deseas aplicar `@apply` a una clase existente y hacerla `!important`, simplemente agrega `!important` al final de la declaración:

```css
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

/* Output */
.btn {
  font-weight: 700 !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  border-radius: .25rem !important;
}
```

Ten en cuenta que si estás utilizando Sass/SCSS, necesitarás utilizar la función de interpolación de Sass para que esto funcione:

```css
.btn {
  @apply font-bold py-2 px-4 rounded #{!important};
}
```

##### Usando @apply con CSS por componente.

Los frameworks de componentes como Vue y Svelte admiten la adición de estilos por componente dentro de un bloque `<style>` que se encuentra en cada archivo de componente.

Si intentas utilizar `@apply `con una clase personalizada que has definido en tu CSS global, dentro de uno de estos bloques `<style>` por componente, obtendrás un error indicando que la clase no existe.

main.css  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    background-color: theme(colors.white);
    border-radius: theme(borderRadius.lg);
    padding: theme(spacing.6);
    box-shadow: theme(boxShadow.xl);
  }
}
```

Card.svelte
```html
<div>
  <slot></slot>
</div>

<style>
  div {
    /* Won't work because this file and main.css are processed separately */
    @apply card;
  }
</style>
```

Esto se debe a que, en los frameworks como Vue y Svelte, se procesa cada bloque `<style>` de manera independiente y se ejecuta la cadena de plugins de PostCSS en cada uno de ellos de forma aislada.

Esto significa que si tienes 10 componentes, cada uno con un bloque `<style>`, Tailwind se ejecuta 10 veces por separado y cada ejecución no tiene conocimiento de las otras. Debido a esto, cuando intentas utilizar `@apply card` en `Card.svelte`, falla, porque Tailwind no tiene idea de que la clase card existe, ya que Svelte procesó `Card.svelte` y `main.css` de manera completamente aislada.

La solución a este problema es definir cualquier estilo personalizado que desees `@apply` en tus componentes utilizando el sistema de plugins en su lugar:

tailwind.config.js  
```css
const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    })
  ]
}
```

De esta manera, cualquier archivo procesado por Tailwind que utilice este archivo de configuración tendrá acceso a esos estilos.

Sin embargo, sinceramente, la mejor solución es simplemente no hacer cosas raras como esta. Utiliza las utilidades de Tailwind directamente en tu marcado de la forma en que se supone que deben ser utilizadas, y no abuses de la función `@apply` para hacer cosas como esta, y tendrás una experiencia mucho mejor.

#### @config

Utiliza la directiva `@config` para especificar qué archivo de configuración debe usar Tailwind al compilar ese archivo CSS. Esto es útil para proyectos que necesitan utilizar diferentes archivos de configuración para diferentes puntos de entrada CSS.

```css
@config "./tailwind.site.config.js";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

La ruta que proporcionas a la directiva `@config` es relativa a ese archivo CSS y tendrá prioridad sobre una ruta definida en tu configuración de PostCSS o en la CLI de Tailwind.

Ten en cuenta que si estás utilizando `postcss-import`, tus declaraciones `@import` deben venir antes de `@config` para que las cosas funcionen correctamente, ya que `postcss-import` cumple estrictamente con la especificación CSS que requiere que las declaraciones `@import` precedan a cualquier otra regla en el archivo.

❌ No coloques `@config` antes de tus declaraciones `@import`.

admin.css  
```css
@config "./tailwind.admin.config.js";

@import "tailwindcss/base";
@import "./custom-base.css";
@import "tailwindcss/components";
@import "./custom-components.css";
@import "tailwindcss/utilities";
```

✔️ Coloca tus declaraciones @import antes de la directiva @config.

admin.css  
```css
@import "tailwindcss/base";
@import "./custom-base.css";
@import "tailwindcss/components";
@import "./custom-components.css";
@import "tailwindcss/utilities";

@config "./tailwind.admin.config.js";
```

[Documetanción](https://tailwindcss.com/docs/functions-and-directives#tailwind)

## 7. Nueva paleta de colores extendida

### Tailwind PLAY

Este es un entorno en línea donde puedes interactuar con el código CSS y ver los resultados en tiempo real. Es una herramienta útil para experimentar con diferentes estilos y efectos, probar nuevas características y practicar habilidades en CSS sin tener que configurar un entorno local.

Todo aquí funciona exactamente igual que cuando ejecutas Tailwind localmente. Puedes personalizar tu archivo de configuración, usar características como `@apply` e incluso agregar complementos de terceros.

Ejemplo:   
```html
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Customizing your
                <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Extracting classes with
                <code class="text-sm font-bold text-gray-900">@apply</code>
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">Code completion with instant preview</p>
            </li>
          </ul>
          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
        </div>
        <div class="pt-8 text-base font-semibold leading-7">
          <p class="text-gray-900">Want to dig deeper into Tailwind?</p>
          <p>
            <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

Resultado:   
![](https://i.postimg.cc/BZB2pdSJ/7-tailwind-play.png)

Prueba tailwind con [Tailwind PLAY](https://play.tailwindcss.com/)  


### Naming your colors

Tailwind utiliza nombres literales de colores (como rojo, verde, etc.) y una escala numérica (donde 50 es claro y 900 es oscuro) de forma predeterminada. Creemos que esta es la mejor opción para la mayoría de los proyectos, y hemos encontrado que es más fácil de mantener que el uso de nombres abstractos como `primary` o `danger`.

Dicho esto, en Tailwind puedes nombrar tus colores como quieras, y si estás trabajando en un proyecto que necesita admitir varios temas, por ejemplo, podría tener sentido usar nombres más abstractos:

tailwind.config.js  
```js
module.exports = {
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      // ...
    }
  }
}
```

Puedes configurar esos colores explícitamente como hemos hecho anteriormente, o puedes tomar colores de nuestra paleta de colores predeterminada y crear alias para ellos:

tailwind.config.js  
```js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
    }
  }
}
```

De nuevo, recomendamos mantenerse en la convención de nombres predeterminada para la mayoría de los proyectos y solo usar nombres abstractos si tienes una muy buena razón.


- Ver los colores en la documentación: [Default color palette](https://tailwindcss.com/docs/customizing-colors)
- Para nombrar los colores ver [Naming your colors](https://tailwindcss.com/docs/customizing-colors#naming-your-colors)
- [Paleta de colores de la versión 3.0 en un archivo figma](https://www.figma.com/file/HuUdkljAkThqXNDCWeJZcO/Tailwind-CSS-Colors-(v3)?type=design&node-id=207-378&mode=design)
- [Mas paleta de colores](https://colorhunt.co/)

## 8. Medidas y Breakpoints

### ¿Qué es un Breakpoint?

Los Breakpoints son las medidas de anchura que utilizamos para el diseño responsivo. Con esas medidas aplicamos los estilos CSS con los tamaños concretos y definidos por las _media queries_. Con otras palabras, los puntos de ruptura son saltos en los que la pantalla va a cambiar de _layout._  

Los Breakpoints más comunes son:

- **320px** para dispositivos móviles, en Tailwind sera **sm**
- **768px** para tablets, en Taileind ser **md**
- **1280px** para pantallas de computador, en Taileind ser **lg**

### Sizing: Dimensionamiento

#### Width:

**Width fijo:**

- Utilice **`w-{number}`**o **`w-px`**para establecer un elemento en un ancho fijo.

**Width porcentual:**

- Use **`w-{fraction}`**o **`w-full`**para establecer un elemento en un ancho basado en porcentaje.

**Width de ventana:**

- Use **`w-screen`**para hacer que un elemento abarque todo el ancho de la ventana gráfica.

**Utilidades para establecer el width mínimo de un elemento.**

- Establezca el ancho mínimo de un elemento usando las **`min-w-{width}`**

**Utilidades para establecer el width máximo de un elemento.**

- Establezca el ancho máximo de un elemento usando las **`max-w-{size}`**

[Documentación: Width](https://tailwindcss.com/docs/width)

#### Height:

**Height fijo:**

- Use **`h-{number}`**o **`h-px`**para establecer un elemento a una altura fija.

**Height completa:**

- Use **`h-full`**para establecer la altura de un elemento al 100 % de su padre, siempre que el padre tenga una altura definida.

**Height de ventana:**

- Use **`h-screen`**para hacer que un elemento abarque toda la altura de la ventana gráfica.

**Utilidades para establecer la height mínima de un elemento.**

- Establezca la altura mínima de un elemento utilizando las utilidades **`min-h-0`**, **`min-h-full`**o .**`min-h-screen`**

**Utilidades para establecer la height máxima de un elemento.**

- Establezca la altura máxima de un elemento con las utilidades **`max-h-full`**o .**`max-h-screen`**


[Documentación: Height](https://tailwindcss.com/docs/height)

### Ejemplo: 

```html
<div class="w-auto h-screen bg-sky-200 flex">
  <div class="w-1/2 h-1/2 bg-sky-700"></div>
  <div class="w-1/4 h-1/4 bg-cyan-400"></div>
  <div class="w-1/4 h-1/3 bg-cyan-700"></div>
  <div class="w-1/3 h-3/4 bg-cyan-900"></div>
</div>
```

![](https://i.postimg.cc/4NY5NXkB/8-breakpointes-medidas.png)

## 9. Flexbox

**Flexbox** es un modelo de Layout que funciona principalmente respecto a un je X y un eje Y. Controlando todo de manera unidimensional, esto se traduce al uso de una fila o columna.  

Cuando nosotros utilizamos dentro de Tailwind la palabra reservada **flex** vamos a tener por defecto que se ordenen nuestros elementos en fila, esto quiere decir que van a estar uno tras otro, pero también tenemos la opción de trabajarlo en columna.  

**Grid** funciona como una cuadrícula compuesta de filas y columnas, la cual nos permite dividir nuestra página en áreas o secciones.

```html
<div class="w-96 h-96 bg-gray-200 p-10 m-20 flex flex-col space-y-4 shadow-md justify-center items-center">
  <div class="w-16 h-16 bg-red-300"></div>
  <div class="w-16 h-16 bg-red-300"></div>
  <div class="w-16 h-16 bg-red-300"></div>
  <div class="w-16 h-16 bg-red-300"></div>
</div>
```

![](https://i.postimg.cc/13jgy7NF/9-flexbox.png)


- [Guía Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guía Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 10. Maquetación del proyecto

Recuerda correr el comando `npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch` para que puedas ver los cambios en tu proyecto. 

```html
<body>
    <section class="w-screen h-screen bg-gray-950 grid grid-cols-3 grid-rows-3 gap-4 p-4">
        <div class="bg-neutral-950 col-span-3"></div>
        <div class="bg-indigo-950 row-start-2 row-end-4"></div>
        <div class="bg-red-500 col-start-2 col-end-4"></div>
        <div class="bg-violet-950 col-start-2 col-end-4"></div>
    </section>
</body>
```


![](https://i.postimg.cc/L8vCB89z/10-maquetado.png)

- [Diseño del proyecto hecho en Figma](https://www.figma.com/file/aPbr2Rhd5SCUjNYu6NRPPB/Platzi-Travel-Mockups?type=design&node-id=0-1&mode=design)

## 11. Forms, Typography y Aspect ratio

Tailwind CSS es un framework tan completo que además cuenta con plugins oficiales. En esta clase te voy a presentar plugins muy utilizados en la creación de sitios web: Forms, Typography y Aspect ratio.

### Forms

Este plugin nos permite resetear los estilos predeterminados con los que cuentan los formularios, de esta manera es posible sobrescribir los estilos y trabajar con clases de utilidades dentro de Tailwind. Si te interesa conocer más acerca de este plugin acá te dejo los links a la [documentación](https://github.com/tailwindlabs/tailwindcss-forms) y [ejemplos](https://tailwindcss-forms.vercel.app/).

![Ejemplos Forms 2.png](https://i.postimg.cc/7ZTcL5yw/11-plugin01.jpg)

### Typography

Ahora puedes tener control sobre estilos vanilla con los que cuenta HTML, elementos como headings, paragraphs, listas, entre otros. El [plugin de typography](https://github.com/tailwindlabs/tailwindcss-typography) agrega una nueva clase ‘prose’ que permite dar un mejor formato a estos elementos.

![Ejemplos Tipografía.png](https://i.postimg.cc/mrY5QKDn/11-plugin02.jpg)

Puedes encontrar más información dentro de la [documentación](https://tailwindcss.com/docs/typography-plugin) y puedes ver algunos ejemplos en Tailwind Play haciendo click [acá](https://play.tailwindcss.com/uj1vGACRJA?layout=preview).

### Aspect ratio

Aspect ratio es la relación entre el ancho y el alto de la imagen o video. En muchas ocasiones cuando modificamos las dimensiones de elementos o imágenes podemos llegar a tener problemas con el aspect ratio.

Este plugin llega a resolver el problema integrando la clase ‘aspect’ que nos permite establecer un aspect ratio de manera fija para nuestros elementos. Para conocer más acerca de esto te dejó los links de la [documentación oficial de Tailwind](https://github.com/tailwindlabs/tailwindcss-aspect-ratio).



### Instalación 

- Forms
- Typography
- Aspect ratio

```bash
// instalacion

npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/aspect-ratio
```

```js
// uso -> tailwind.config.js:

plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/forms"),
	require("@tailwindcss/typography"),
  ],
```


## 12. Tailwind como API para la creación de un Design System `v3.3.2`

Un design system es el archivo donde se definen todos los estilos, tamaños, tipografías y colores que se usarán en el proyecto.

### Automatizar compilación del archivo de tailwind:   👈👀

En lugar de correr el comando `npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch` para poder ver los cambios en tu proyecto, podemos agregar un `script` en nuestro archivo `package.json`.  

```js
{
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "",
    "tw:build": "tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch" 👈👀
  },
  "autor": "",
  "license": "ISC",
  "devDependencies": {
    "tailwindcss": "^3.3.2" 👈👀
  }
}
```

### Personalización 

Agregamos nuestras imágenes en la carpeta public:

```bash
╰─ tree -L 3
.
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   └── tailwind.css
│   ├── img 👈👀
│   │   ├── LA.jpg
│   │   ├── bali.jpg
│   │   ├── chicago.jpg
│   │   ├── europe.jpg
│   │   ├── iceland.jpg
│   │   ├── miami.jpg
│   │   ├── new_york.jpg
│   │   ├── norway.jpg
│   │   ├── sanFrancisco.jpg
│   │   ├── sanFranciscoDesktop.jpg
│   │   ├── seattle.jpg
│   │   ├── switzerland.jpg
│   │   ├── sydney.jpg
│   │   └── yosemite.jpg
│   └── index.html
├── src
│   └── css
│       └── tailwind.css
└── tailwind.config.js
```

Esta configuración permite usar todos los colores predeterminados por tailwind y los colores que agregamos de manera personalizada. También agregamos la tipografía a usar en el proyecto. 
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    fontFamily: { 👈👀
      'Montserrat': ["Montserrat", "sans-serif"]
    },
    backgroundColor: theme => ({ 👈👀
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    textColor: theme => ({ 👈👀
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    /*
    Esto funciona pero no nos permite usar los colores de Tailwind 
	  colors: {
      primary: '#CC2D4A',
      secondary: "#8FA206",
      tertiary: "#61AEC9",
    }, 
    textColor: {
      primary: '#CC2D4A',
      secondary: "#8FA206",
      tertiary: "#61AEC9",
    },*/
    extend: {
      backgroundImage: { 👈👀
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
      },
    }
  },
  plugins: [],
}
```

📌 **Nota para la clase 15:** Tener cuidado con la ruta donde están ubicadas nuestras imágenes. Ejemplo: Esta no es una ruta correcta para Tailwind `'sanFrancisco': "url('./public/img/sanFrancisco.png')"` lo correcto es `'sanFrancisco': "url('../img/sanFrancisco.jpg')"`. 

### Ejecutando los cambios  

Ahora ya podemos hacer cambios en nuestro index.html. No olvidar agregar los enlaces de la tipografía. 

```html
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/css/tailwind.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com"> 👈👀
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 👈👀
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"> 👈👀
    <title>Trips!!!</title>
</head>

<body>
    <section class="w-screen h-screen bg-gray-950 grid grid-cols-3 grid-rows-3 gap-4 p-4">
        <div class="bg-indigo-950 col-span-3 font-Montserrat text-xl text-emerald-400">Hello World</div>
        <div class="bg-secondary row-start-2 row-end-4 bg-new_york"></div>
        <div class="bg-tertiary col-start-2 col-end-4"></div>
        <div class="bg-primary col-start-2 col-end-4"></div>
    </section>
</body>
</html>
```

En la terminal: `npm run tw:build` para visualizar los cambios y usar `ctrl + c` para matar el proceso. 

`index.html` Open with live server...  
![](https://i.postimg.cc/C5kX5By9/12-tailwind-como-api.png)  
![](https://i.postimg.cc/Y0vFnQdM/12-tailwind-api-img.png)


## 13. Construyendo el cuerpo del proyecto

```html
<body>
    <nav></nav>
    <div id="tab_bar"></div>
    <section>
        <div id="home"></div>
        <div id="recomendados"></div>
        <div id="rentas_destacadas"></div>
    </section>
    <footer>

    </footer>
</body>
```

## 14. Creando la sección de Home

### Clasificación automática de clases con Prettier

Este complemento escanea sus plantillas en busca de atributos de clase que contengan clases CSS de Tailwind y luego ordena esas clases automáticamente siguiendo nuestro [orden de clase recomendado](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted) .

![](https://i.postimg.cc/763h3F65/14-ordenar-clases-prettier.jpg)

```html
<!-- Before -->
<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button>

<!-- After -->
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
```

Para comenzar, simplemente instálelo `prettier-plugin-tailwindcss`como una dependencia de desarrollo:

```sh
npm install -D prettier prettier-plugin-tailwindcss
```

- [Documentación + Instalación](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [Personalizar Prettier](https://www.youtube.com/watch?v=ouNMLoyEqZw)


### Código de la clase 

```html
<body>
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-screen w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 rounded-full bg-white p-4 text-xl font-semibold text-primary shadow-sm"
            >
              Explora
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div id="recomendados"></div>
      <div id="rentas_destacadas"></div>
    </section>
    <footer></footer>
</body>
```

## 15. Diseñando nuestras cards

```html
<body>
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-screen w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 rounded-full bg-white p-4 text-xl font-semibold text-primary shadow-sm"
            >
              Explora
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-20" id="recomendados">
        <div class="h-64 w-48 rounded-lg shadow-md">
          <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
          <div class="h-2/5 w-full rounded-b-lg bg-secondary">
            <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
            <p class="px-4 text-base text-white">Paisajes Increíbles</p>
          </div>
        </div>
      </div>
      <div id="rentas_destacadas"></div>
    </section>
    <footer></footer>
</body>
```

## 16. Extracción de componentes a clases para nuestra card

La extracción de componentes sirve para no escribir el mismo código en componentes que se utilizarán más de una vez _(ej. cards)_ y poder mantener el principio de utility-first. La extracción de componentes trabaja de la mano con la directiva `@apply`.

Para hacer la extracción de componentes se procede a lo siguiente:

En el archivo `src/css/tailwind.css` se crean clases cuyo nombre será el adecuado para identificar cierto componente, dentro de la clase se introducirán todos los estilos de Tailwind que se estarán reutilizando haciendo el uso de la directiva `@apply` seguido de las clases de Tailwind.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {👈👀
  .card {
    @apply w-48 h-64 shadow-md rounded-lg;
  }
}
```

Haciendo lo anterior se puede utilizar el nombre de la nueva clase en nuestro archivo HTML, es importante ejecutar el script `tw:build` para que se efectúen los cambios.

Archivo `index.html`:

```html
<div class="card">👈👀
    <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
    <div class="h-2/5 w-full rounded-b-lg bg-secondary">
        <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
        <p class="px-4 text-base text-white">Paisajes Increíbles</p>
    </div>
</div>
```


### Evita abstracciones prematuras

Hagas lo que hagas, no uses "@apply" solo para que las cosas se vean "más limpias". Sí, las plantillas HTML llenas de clases de Tailwind son un poco feas. Hacer cambios en un proyecto que tiene toneladas de CSS personalizado es peor.

Si comienzas a usar "@apply" para todo, básicamente estarás escribiendo CSS de nuevo y desechando todas las ventajas de flujo de trabajo y mantenimiento que te da Tailwind, por ejemplo:

- Tienes que pensar en nombres de clases todo el tiempo: nada te ralentizará o te agotará más que pensar en un nombre de clase para algo que no merece ser nombrado.
- Tienes que saltar entre varios archivos para hacer cambios: lo cual es un matador de flujo de trabajo mucho más grande de lo que pensarías antes de colocar todo en el mismo lugar.
- Cambiar estilos es más aterrador: CSS es global, ¿estás seguro de que puedes cambiar el valor de "min-width" en esa clase sin romper algo en otra parte del sitio?
- Tu paquete CSS será más grande: ¡ouch!

Si vas a usar "@apply", úsalo para cosas muy pequeñas y altamente reutilizables como botones y controles de formulario, y aun así solo si no estás usando un marco como React donde un componente sería una mejor opción.

[Documentación de la extracción de componentes en Tailwind:](https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction)


## 17. Creando la sección de Recomendados

```html
<body>
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-screen w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 rounded-full bg-white p-4 text-xl font-semibold text-primary shadow-sm"
            >
              Explora
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">👈👀
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overscroll-x-contain"
        > 👈👀
          <div class="card"> 👈👀
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card"> 👈👀
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card"> 👈👀
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card"> 👈👀
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rentas_destacadas"></div>
    </section>
    <footer></footer>
</body>
```

Modificamos archivo tailwind.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .card {
        @apply h-64 w-48 rounded-lg shadow-md flex-none; 👈👀
    }
}
```

Resultado:   
![](https://i.postimg.cc/8P3P8ktD/17-scroll-x.png)

[Documentación: overflow](https://tailwindcss.com/docs/overflow)

## 18. Agregando animaciones al proyecto

```html
<body class="font-Montserrat">
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-screen w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white"
            >
              Explorar
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div id="rentas_destacadas"></div>
    </section>
    <footer></footer>
</body>
```

tailwind.css  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .card {
        @apply h-64 w-48 rounded-lg shadow-md flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl;
    }
}
```

También se agregó esto en el archivo `tailwind.config.js` pero a mi me funciona sin eso. 

```js
variants: {
    width: ["responsive", "hover", "focus"], 👈👀
    extend: {},
  },
  plugins: [],
```


Plugin: [Inline fold (VS Code)](https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold) permite colapsar las clases tan extensas de Tailwind.  

![fold.png](https://i.postimg.cc/C5xwn8Tv/18-plugin-Inline-fold.jpg)

## 19. Creando la sección de Rentas destacadas

```html
  <body class="font-Montserrat">
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-screen w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white"
            >
              Explorar
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6" id="rentas_destacadas">👈👀
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div
          class="flex h-auto w-full flex-col items-center justify-center space-y-6"
        >
          <div class="h-96 w-full rounded-xl bg-chicago bg-cover">👈👀
            <p class="cardTitle">Chicago</p>👈👀
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-miami bg-cover">
            <p class="cardTitle">Miami</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-LA bg-cover">
            <p class="cardTitle">Los Angeles</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-bali bg-cover">
            <p class="cardTitle">Bali</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer></footer>
  </body>
```

Agregamos una clase dentro del archivo `tailwind.css` 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .card {
        @apply h-64 w-48 rounded-lg shadow-md flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl;
    }
    .cardTitle { 👈👀
        @apply text-3xl px-8 pt-8 pb-2 font-semibold text-white;
    }
}
```


## 20. Sección de FAQS

```html
<body class="font-Montserrat">
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-screen w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white"
            >
              Explorar
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6" id="rentas_destacadas">
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div
          class="flex h-auto w-full flex-col items-center justify-center space-y-6"
        >
          <div class="h-96 w-full rounded-xl bg-chicago bg-cover">
            <p class="cardTitle">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-miami bg-cover">
            <p class="cardTitle">Miami</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-LA bg-cover">
            <p class="cardTitle">Los Angeles</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-bali bg-cover">
            <p class="cardTitle">Bali</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer></footer>
</body>
```

## 21. Footer

```html
<body class="font-Montserrat">
    <nav></nav>
    <div id="tab_bar"></div>
    <section class="h-auto w-full"> 👈👀
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white"
            >
              Explorar
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6" id="rentas_destacadas">
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div
          class="flex h-auto w-full flex-col items-center justify-center space-y-6"
        >
          <div class="h-96 w-full rounded-xl bg-chicago bg-cover">
            <p class="cardTitle">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-miami bg-cover">
            <p class="cardTitle">Miami</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-LA bg-cover">
            <p class="cardTitle">Los Angeles</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-bali bg-cover">
            <p class="cardTitle">Bali</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer class="h-auto w-full bg-gray-50 p-6 space-y-2">👈👀
      <p class="text-lg">Acerca De</p>
      <p class="text-sm text-gray-400">Acerca De</p>
      <p class="text-sm text-gray-400">Inversionistas</p>
      <p class="text-sm text-gray-400">Empleos</p>
      <p class="text-sm text-gray-400">Términos y Condiciones</p>
      <p class="text-sm text-gray-400">Trips, Inc.</p>
    </footer>
</body>
```

## 22. TabBar funcional

```html
<body class="font-Montserrat">
    <nav></nav>
    <section class="h-auto w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2"
              placeholder="San Francisco"
              type="search"
            />
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white"
            >
              Explorar
            </button>
          </div>
          <div class="h-full w-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6" id="rentas_destacadas">
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div
          class="flex h-auto w-full flex-col items-center justify-center space-y-6"
        >
          <div class="h-96 w-full rounded-xl bg-chicago bg-cover">
            <p class="cardTitle">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-miami bg-cover">
            <p class="cardTitle">Miami</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-LA bg-cover">
            <p class="cardTitle">Los Angeles</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-bali bg-cover">
            <p class="cardTitle">Bali</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="mb-16 h-auto w-full space-y-2 border-t border-gray-300 bg-gray-50 p-6"
    >👈👀
      <p class="text-lg">Acerca De</p>
      <p class="text-sm text-gray-400">Acerca De</p>
      <p class="text-sm text-gray-400">Inversionistas</p>
      <p class="text-sm text-gray-400">Empleos</p>
      <p class="text-sm text-gray-400">Términos y Condiciones</p>
      <p class="text-sm text-gray-400">Trips, Inc.</p>
    </footer>
    <div
      class="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center space-x-8 bg-white shadow-md"
      id="tab_bar"
    >👈👀
      <a href="#home">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#rentas_destacadas">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#recomendados">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
            fill="#CC2D4A"
          />
        </svg>
      </button>
      <a href="">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
    </div>
  </body>
```

Si no quieren copiar y pegar cada svg. Pueden importar el archivo y usarlo como src de una imagen.

```html
import Icon from "./svg/icon.svg"

<img src=`${Icon}` />
```

también:  

```html
<img class="fill-current text-gray-200" width="30" height="30" src="./svg/user.svg" alt="">
```


Obtén mas iconos desde la página [Heroicons](https://heroicons.com/)


## 23. Haciendo responsivo nuestro proyecto

```html
<body class="font-Montserrat">
    <nav></nav>
    <section class="h-auto w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4 lg:items-start lg:justify-start lg:space-y-0 lg:pt-20"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2 lg:hidden"
              placeholder="San Francisco"
              type="search"
            />
            <div class="hidden h-auto pb-6 lg:flex lg:w-2/5">
              <p class="ml-16 text-4xl font-bold">
                Encuentra más ubicaciones como esta
              </p>
            </div>
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white lg:ml-16"
            >
              Explorar
            </button>
          </div>
          <div
            class="h-full w-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center"
          >
            <img class="lg:hidden" src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
          <div class="card">
            <div
              class="h-3/5 w-full rounded-t-lg bg-switzerland bg-cover"
            ></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Switzerland</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-sydney bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Sydney</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-europe bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Europa</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6" id="rentas_destacadas">
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div
          class="flex h-auto w-full flex-col items-center justify-center space-y-6"
        >
          <div class="h-96 w-full rounded-xl bg-chicago bg-cover">
            <p class="cardTitle">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-miami bg-cover">
            <p class="cardTitle">Miami</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-LA bg-cover">
            <p class="cardTitle">Los Angeles</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="h-96 w-full rounded-xl bg-bali bg-cover">
            <p class="cardTitle">Bali</p>
            <p class="mr-24 pl-8 text-sm text-white">
              2 habitaciones, baño y cocina
            </p>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="mb-16 h-auto w-full space-y-2 border-t border-gray-300 bg-gray-50 p-6"
    >
      <p class="text-lg">Acerca De</p>
      <p class="text-sm text-gray-400">Acerca De</p>
      <p class="text-sm text-gray-400">Inversionistas</p>
      <p class="text-sm text-gray-400">Empleos</p>
      <p class="text-sm text-gray-400">Términos y Condiciones</p>
      <p class="text-sm text-gray-400">Trips, Inc.</p>
    </footer>
    <div
      class="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center space-x-8 bg-white shadow-md lg:hidden"
      id="tab_bar"
    >
      <a href="#home">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#rentas_destacadas">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#recomendados">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
            fill="#CC2D4A"
          />
        </svg>
      </button>
      <a href="">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
    </div>
</body>
```


## 24. Haciendo responsivo nuestro proyecto: rentas destacadas

```html
<body class="font-Montserrat">
    <nav></nav>
    <section class="h-auto w-full">
      <div id="home">
        <div class="h-3/4 w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4 lg:items-start lg:justify-start lg:space-y-0 lg:pt-20"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2 lg:hidden"
              placeholder="San Francisco"
              type="search"
            />
            <div class="hidden h-auto pb-6 lg:flex lg:w-2/5">
              <p class="ml-16 text-4xl font-bold">
                Encuentra más ubicaciones como esta
              </p>
            </div>
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white lg:ml-16"
            >
              Explorar
            </button>
          </div>
          <div
            class="h-full w-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center"
          >
            <img class="lg:hidden" src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
          <div class="card">
            <div
              class="h-3/5 w-full rounded-t-lg bg-switzerland bg-cover"
            ></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Switzerland</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-sydney bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Sydney</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-europe bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Europa</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6 lg:px-6" id="rentas_destacadas">
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div class="flex h-auto w-full flex-col items-center justify-center">
          <div
            class="mb-8 h-96 w-full rounded-xl bg-chicago bg-cover lg:bg-center"
          >
            <p class="cardTitle lg:text-black">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="lg:flex lg:h-full lg:w-full lg:space-x-4">
            <div
              class="mb-8 h-96 w-full rounded-xl bg-miami bg-cover lg:h-auto"
            >
              <p class="cardTitle">Miami</p>
              <p class="mr-24 pl-8 text-sm text-black lg:text-lg">
                2 habitaciones, baño y cocina
              </p>
            </div>
            <div class="h-full w-full">
              <div class="mb-8 h-96 w-full rounded-xl bg-LA bg-cover">
                <p class="cardTitle">Los Angeles</p>
                <p class="mr-24 pl-8 text-sm text-white lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
              <div class="mb-8 h-96 w-full rounded-xl bg-bali bg-cover">
                <p class="cardTitle">Bali</p>
                <p class="mr-24 pl-8 text-sm text-white lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="mb-16 h-auto w-full space-y-2 border-t border-gray-300 bg-gray-50 p-6"
    >
      <p class="text-lg">Acerca De</p>
      <p class="text-sm text-gray-400">Acerca De</p>
      <p class="text-sm text-gray-400">Inversionistas</p>
      <p class="text-sm text-gray-400">Empleos</p>
      <p class="text-sm text-gray-400">Términos y Condiciones</p>
      <p class="text-sm text-gray-400">Trips, Inc.</p>
    </footer>
    <div
      class="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center space-x-8 bg-white shadow-md lg:hidden"
      id="tab_bar"
    >
      <a href="#home">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#rentas_destacadas">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#recomendados">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
            fill="#CC2D4A"
          />
        </svg>
      </button>
      <a href="">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
    </div>
</body>
```

## 25. Creando la navbar

```html
<body class="font-Montserrat">
    <nav
      class="fixed z-10 hidden h-14 w-full justify-between bg-white p-4 lg:flex"
    >
      <div class="h-auto w-auto">
        <p class="text-xl font-black text-primary">Platzi Travel</p>
      </div>
      <div class="flex space-x-8">
        <a class="text-base font-bold text-primary" href="#home">Inicio</a>
        <a class="text-base font-bold text-primary" href="#recomendados"
          >Recomendados</a
        >
        <a class="text-base font-bold text-primary" href="#rentas_destacadas"
          >Rentas</a
        >
        <a class="text-base font-bold text-primary" href="#faqs">FAQS</a>
        <a class="text-base font-bold text-primary" href="#sobre_nosotros"
          >Sobre nosotros</a
        >
      </div>
      <div class="flex space-x-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
            fill="#CC2D4A"
          />
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </div>
    </nav>
    <section class="h-auto w-full">
      <div class="h-3/4 w-full" id="home">
        <div class="h-full w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4 lg:items-start lg:justify-start lg:space-y-0 lg:pt-48"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2 lg:hidden"
              placeholder="San Francisco"
              type="search"
            />
            <div class="hidden h-auto pb-6 lg:flex lg:w-2/5">
              <p class="ml-16 text-4xl font-bold">
                Encuentra más ubicaciones como esta
              </p>
            </div>
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white lg:ml-16"
            >
              Explorar
            </button>
          </div>
          <div
            class="h-auto w-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center"
          >
            <img class="lg:hidden" src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="p-6" id="recomendados">
        <p class="text-3xl font-semibold text-primary">Recomendados</p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">New York</p>
              <p class="px-4 text-base text-tertiary">La gran manzana</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Norway</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
          <div class="card">
            <div
              class="h-3/5 w-full rounded-t-lg bg-switzerland bg-cover"
            ></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Switzerland</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-sydney bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white">
              <p class="px-4 py-2 text-xl font-bold text-tertiary">Sydney</p>
              <p class="px-4 text-base text-tertiary">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-europe bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-secondary">
              <p class="px-4 py-2 text-xl font-bold text-white">Europa</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6 lg:px-6" id="rentas_destacadas">
        <p class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary">
          Rentas Destacadas
        </p>
        <div class="flex h-auto w-full flex-col items-center justify-center">
          <div
            class="mb-8 h-96 w-full rounded-xl bg-chicago bg-cover lg:bg-center"
          >
            <p class="cardTitle lg:text-black">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="lg:flex lg:h-full lg:w-full lg:space-x-4">
            <div
              class="mb-8 h-96 w-full rounded-xl bg-miami bg-cover lg:h-auto"
            >
              <p class="cardTitle">Miami</p>
              <p class="mr-24 pl-8 text-sm text-black lg:text-lg">
                2 habitaciones, baño y cocina
              </p>
            </div>
            <div class="h-full w-full">
              <div class="mb-8 h-96 w-full rounded-xl bg-LA bg-cover">
                <p class="cardTitle">Los Angeles</p>
                <p class="mr-24 pl-8 text-sm text-white lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
              <div class="mb-8 h-96 w-full rounded-xl bg-bali bg-cover">
                <p class="cardTitle">Bali</p>
                <p class="mr-24 pl-8 text-sm text-white lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="mb-16 h-auto w-full space-y-2 border-t border-gray-300 bg-gray-50 p-6"
      id="sobre_nosotros"
    >
      <p class="text-lg">Acerca De</p>
      <p class="text-sm text-gray-400">Inversionistas</p>
      <p class="text-sm text-gray-400">Empleos</p>
      <p class="text-sm text-gray-400">Términos y Condiciones</p>
      <p class="text-sm text-gray-400">Trips, Inc.</p>
    </footer>
    <div
      class="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center space-x-8 bg-white shadow-md lg:hidden"
      id="tab_bar"
    >
      <a href="#home">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#rentas_destacadas">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#recomendados">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
            fill="#CC2D4A"
          />
        </svg>
      </button>
      <a href="">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
    </div>
</body>
```

## 26. Agregando el Dark Mode

Para agregar el dark mode se debe configurar el archivo `tailwind.config.js` agregando la propiedad **`darkMode`** seguido de la palabra `‘class’`.
tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  darkMode: 'class', //or 'media' or 'class'👈👀
  theme: {
    fontFamily: {
      'Montserrat': ["Montserrat", "sans-serif"]
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
      },
    }
  },
  variants: {
    /* width: ["responsive", "hover", "focus"], */
    extend: {},
  },
  plugins: [],
}
```

index.html
```html
<html lang="" class="dark">👀👈
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../public/css/tailwind.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <title>Trips!!!</title>
</head>
<body class="font-Montserrat dark:bg-gray-900">👈👀
    <nav
      class="fixed z-10 hidden h-14 w-full justify-between bg-white p-4 dark:bg-gray-800 lg:flex"
    >👈👀
      <div class="h-auto w-auto">
        <p class="text-xl font-black text-primary dark:text-white">
          Platzi Travel
        </p>👈👀
      </div>
      <div class="flex space-x-8">
        <a class="text-base font-bold text-primary dark:text-white" href="#home"
          >Inicio</a
        >
        <a
          class="text-base font-bold text-primary dark:text-white"
          href="#recomendados"
          >Recomendados</a
        >
        <a
          class="text-base font-bold text-primary dark:text-white"
          href="#rentas_destacadas"
          >Rentas</a
        >
        <a class="text-base font-bold text-primary dark:text-white" href="#faqs"
          >FAQS</a
        >
        <a
          class="text-base font-bold text-primary dark:text-white"
          href="#sobre_nosotros"
          >Sobre nosotros</a
        >
      </div>
      <div class="flex space-x-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary dark:text-white"👈👀
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
        <button id="toggle">
          <svg
            width="20"
            height="20"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-current dark:text-white"👈👀
              d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
              fill="#CC2D4A"
            />
          </svg>
        </button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </div>
    </nav>
    <section class="h-auto w-full">
      <div class="h-3/4 w-full" id="home">
        <div class="h-full w-full">
          <div
            class="absolute flex h-full w-full flex-col items-center space-y-96 py-4 lg:items-start lg:justify-start lg:space-y-0 lg:pt-48"
          >
            <input
              class="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:w-11/12 focus:ring-2 lg:hidden"
              placeholder="San Francisco"
              type="search"
            />
            <div class="hidden h-auto pb-6 lg:flex lg:w-2/5">
              <p class="ml-16 text-4xl font-bold">
                Encuentra más ubicaciones como esta
              </p>
            </div>
            <button
              class="w-36 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-white lg:ml-16"
            >
              Explorar
            </button>
          </div>
          <div
            class="h-auto w-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center"
          >
            <img class="lg:hidden" src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="h-auto w-full" id="recomendados">
        <p
          class="pl-6 pt-6 text-3xl font-semibold text-primary dark:text-white"
        >👈👀
          Recomendados
        </p>
        <div
          class="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain p-6"
        >
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-norway bg-cover"></div>
            <div
              class="h-2/5 w-full rounded-b-lg bg-secondary dark:bg-gray-700"
            >
              <p class="px-4 py-2 text-xl font-bold text-white">Norway</p>
              <p class="px-4 text-base text-white">Paisajes Increíbles</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-new_york bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white dark:bg-gray-800">
              <p
                class="px-4 py-2 text-xl font-bold text-tertiary dark:text-white"
              >
                New York
              </p>
              <p class="px-4 text-base text-tertiary dark:text-white">
                La gran manzana
              </p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-yosemite bg-cover"></div>
            <div
              class="h-2/5 w-full rounded-b-lg bg-secondary dark:bg-gray-700"
            >
              <p class="px-4 py-2 text-xl font-bold text-white">Yosemite</p>
              <p class="px-4 text-base text-white">A break from the world</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-seattle bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white dark:bg-gray-800">
              <p
                class="px-4 py-2 text-xl font-bold text-tertiary dark:text-white"
              >
                Norway
              </p>
              <p class="px-4 text-base text-tertiary dark:text-white">
                Big City
              </p>
            </div>
          </div>
          <div class="card">
            <div
              class="h-3/5 w-full rounded-t-lg bg-switzerland bg-cover"
            ></div>
            <div
              class="h-2/5 w-full rounded-b-lg bg-secondary dark:bg-gray-700"
            >
              <p class="px-4 py-2 text-xl font-bold text-white">Switzerland</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-sydney bg-cover"></div>
            <div class="h-2/5 w-full rounded-b-lg bg-white dark:bg-gray-800">
              <p
                class="px-4 py-2 text-xl font-bold text-tertiary dark:text-white"
              >
                Sydney
              </p>
              <p class="px-4 text-base text-tertiary dark:text-white">
                Big City
              </p>
            </div>
          </div>
          <div class="card">
            <div class="h-3/5 w-full rounded-t-lg bg-europe bg-cover"></div>
            <div
              class="h-2/5 w-full rounded-b-lg bg-secondary dark:bg-gray-700"
            >
              <p class="px-4 py-2 text-xl font-bold text-white">Europa</p>
              <p class="px-4 text-base text-white">Big City</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto w-full px-6 lg:px-6" id="rentas_destacadas">
        <p
          class="mt-6 pb-6 pt-2 text-2xl font-semibold text-primary dark:text-white"
        >
          Rentas Destacadas
        </p>
        <div class="flex h-auto w-full flex-col items-center justify-center">
          <div
            class="mb-8 h-96 w-full rounded-xl bg-chicago bg-cover lg:bg-center"
          >
            <p class="cardTitle lg:text-black">Chicago</p>
            <p class="mr-24 pl-8 text-sm text-black">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div class="lg:flex lg:h-full lg:w-full lg:space-x-4">
            <div
              class="mb-8 h-96 w-full rounded-xl bg-miami bg-cover lg:h-auto"
            >
              <p class="cardTitle">Miami</p>
              <p class="mr-24 pl-8 text-sm text-black lg:text-lg">
                2 habitaciones, baño y cocina
              </p>
            </div>
            <div class="h-full w-full">
              <div class="mb-8 h-96 w-full rounded-xl bg-LA bg-cover">
                <p class="cardTitle">Los Angeles</p>
                <p class="mr-24 pl-8 text-sm text-white lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
              <div class="mb-8 h-96 w-full rounded-xl bg-bali bg-cover">
                <p class="cardTitle">Bali</p>
                <p class="mr-24 pl-8 text-sm text-white lg:text-lg">
                  2 habitaciones, baño y cocina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-full" id="faqs">
        <div class="flex h-full w-full flex-col space-y-4 px-6">
          <p class="mt-6 text-3xl font-semibold text-primary">FAQS</p>
          <div>
            <p class="text-xl font-medium text-primary dark:text-white">
              Política de Cancelación
            </p>👈👀
            <p class="pt-2 text-base dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary dark:text-white">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary dark:text-white">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
          <div>
            <p class="text-xl font-medium text-primary dark:text-white">
              Política de Cancelación
            </p>
            <p class="pt-2 text-base dark:text-white">👈👀
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repudiandae minus, ut itaque provident!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="mb-16 h-auto w-full space-y-2 border-t border-gray-300 bg-gray-50 p-6"
      id="sobre_nosotros"
    >
      <p class="text-lg">Acerca De</p>
      <p class="text-sm text-gray-400">Inversionistas</p>
      <p class="text-sm text-gray-400">Empleos</p>
      <p class="text-sm text-gray-400">Términos y Condiciones</p>
      <p class="text-sm text-gray-400">Trips, Inc.</p>
    </footer>
    <div
      class="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center space-x-8 bg-white shadow-md dark:bg-gray-900 lg:hidden"
      id="tab_bar"
    >
      <a href="#home">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#rentas_destacadas">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <a href="#recomendados">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
      <button id="toggle-sm">
        <svg
          width="30"
          height="30"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
            fill="#CC2D4A"
          />
        </svg>
      </button>
      <a href="">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-gray-400"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
            fill="#3F3F46"
          />
        </svg>
      </a>
    </div>
    <script>👈👀
      const htmlElement = document.querySelector("html");
      const toggleButton = document.querySelector("#toggle");
      const toggleButtonSm = document.querySelector("#toggle-sm");

      toggleButton.addEventListener("click", () => toggleDarkMode());
      toggleButtonSm.addEventListener("click", () => toggleDarkMode());

      const toggleDarkMode = () => {
        htmlElement.classList.contains("dark")
          ? htmlElement.classList.remove("dark")
          : htmlElement.classList.add("dark");
      };
    </script>
</body>
```


```
```


```
```