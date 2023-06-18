# Curso Básico de Tailwind 2 y 3

## 1. Bienvenida al desarrollo con Tailwind

- [Repo del proyecto](https://github.com/platzi/PlatziTravel)
- [Resultado final](https://anamdiazs.github.io/PlatziTravel/)

## 2. Tailwind 3.0: ¿qué hay de nuevo?

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

`npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch`