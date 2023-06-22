# Curso Básico de Tailwind 2 y 3

## 1. Bienvenida al desarrollo con Tailwind

- [Repo del proyecto](https://github.com/platzi/PlatziTravel)
- [Resultado final](https://anamdiazs.github.io/PlatziTravel/)

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


## 12. # Tailwind como API para la creación de un Design System