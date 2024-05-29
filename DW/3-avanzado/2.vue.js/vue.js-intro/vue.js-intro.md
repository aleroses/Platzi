# Curso de Vue.js: Introducción y Fundamentos

## 1. ¿Qué es Vue.js?

Vue también es conocido como "El Framework progresivo". Esto porque podemos usarlo tanto como librería (algo muy chiquito) hasta usarlo como Framework (todo un proyecto super complejo con Vue).

### Historia

‎Vue.js fue creado por Evan You, un ex trabajador de Google que trabajó en el desarrollo de otro Framework que hoy lo conocemos como Angular. Utilizó varios frameworks, como React.js, se dedicó a explorarlos y traer lo mejor de todos estos Frameworks a uno solo.

Creó Vue.js, su nombre original era “Seed.js”, esto porque, según Evan, no tenía un mejor nombre. La razón por la que no usó este nombre es porque ya había sido usado en NPM, esto lo obligó a tener que escoger otro. Se decidió por nombrar al Framework “View.js” pero esto le pareció algo muy literal, así que escribió “view” en google translate y decidió utilizar la traducción al francés que era “vue”. ‎ Existe un documental sobre Vue.js, si quieres verlo, aquí te dejo el [enlace](https://youtu.be/OrxmtDw4pVI).

- [Sitio web personal de Evan You](https://evanyou.me/)
- [Sitio web oficial de Vue.js](https://vuejs.org/)
- [Repositorio original de Vue.js](https://github.com/vuejs/vue)
- [Wiki de Vue.js](https://es.wikipedia.org/wiki/Vue.js)

## 2. Fundamentos de componentes

Los componentes son una funcionalidad importante que tiene Vue. Se basan en las especificaciones de web components APIs. Permiten modularizar mi aplicación en diferentes pedazos de HTML, JavaScript y CSS para tener un código más legible y semántico. Es decir, cada componente puede ser utilizado a lo largo del proyecto, tiene todo lo que necesita para existir, tiene su lógica, tiene diseño y tiene estructura.

Cuando trabajamos con HTML y el DOM siempre tenemos una estructura de árbol, es decir, un estructura jerárquica DOM. Tenemos un componente principal y luego tenemos componentes hijos que representan contenedores con diferente tipo de contenido. Además, podemos tener otros componentes hijos, es decir, cada uno también tiene su propios elementos HTML. ‎

### Two Way Data Binding

Two Way Data Binding es un patrón `MVVM` (model - view - view - model) donde se enlazan dos elementos en dos direcciones (cuando cambia uno cambia el otro). Sirve para tener los datos sincronizados con el DOM sin hacer esfuerzos adicionales.

> Vista

Aquí tenemos el HTML. La vista se encarga de decirle al estado que hay cambios, a lo cual el estado va a reaccionar y mandar una nueva vista.

> Estado

Aquí tenemos nuestros datos de JavaScript. El estado se encarga de decirle a la vista cómo y cuando tiene que compilar y cuál es el resultado que se tiene que lograr, esto lo hace con una función que se llama render.

> Usuario

Es el que introduce cambios en la vista.

- [Documentación de Vue.js 3](https://vuejs.org/guide/introduction.html)
- [CheatSheet Vue.js 3](https://www.vuemastery.com/vue-3-cheat-sheet/)
- [Ruta de aprendizaje Frontend con Vue.js Platzi](https://platzi.com/vue/)

## 3. Configuración del entorno

```bash
npm install -g @vue/cli
```

Mayo 2024 el CDN es: 

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Creamos un archivo index.html y en el body añadimos el script anterior.

Lo abrimos en el navegador y en el inspector de elementos debería funcionar lo siguiente:

```js
window.vue
```

- [Using Vue from CDN](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

## 4. Primer contacto

```html
<body>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app">{{text}}</div>

  <script>
    const vm = Vue.createApp({
      data() {
        return {
          text: "Hi vue",
        };
      },
    }).mount("#app");

    console.log(vm);
  </script>
</body>
```

Ahora podemos cambiar el texto mostrado desde la consola del navegador.

```js
vm.text = "Insane text";
```

Extensiones que te harán la vida más fácil con Vue:

- Vetur Vue VSCode Snippets

## 5. Interpolación de datos

La variable **vm** es el objeto principal que contiene toda la aplicación donde puede tener un solo componente o más.

Tenemos 2 opciones para poder crear aplicaciones:

- **Primera opción:** Tener 2 instancias separadas, para 2 elementos html.
- **Segunda opción:** Crear componentes dentro componentes, es este caso dentro del componente principal, se podría crear subcomponentes y todo estaría contenido dentro de un único `div id=”app”`

En este caso, lo que más se suele hacer es la **segunda opción**, de crear componentes anidados; porque todo lo que este dentro del mismo objeto principal se va a compartir un contexto de varias cosas y va a facilitar el trabajo.

La **primera opción** es válida ya que hay proyectos que no se usan al 100% que trabajan una pequeña parte de una sección.

### Template

La sintaxis que se encuentra dentro de las dobles llaves en Vue.js nos permite ingresar cualquier expresión válida de JavaScript o, en este caso, algo que esté dentro del contexto de datos del objeto de Vue.js.

Además, el elemento `<div>` deja de ser considerado simplemente un elemento HTML y se convierte en parte del componente que acaba de crearse. En términos de Vue.js, esto se conoce como el "template" del componente.

Cuando creamos componentes más avanzados, es posible que necesitemos utilizar elementos HTML, pero no siempre será necesario agregar directamente el template al elemento HTML. En su lugar, dentro del mismo objeto de configuración de las opciones de Vue.js, se pueden agregar templates para que se rendericen de manera correcta y estén separados y reutilizables.

> La interpolación de datos hace referencia a la forma como se trabaja con variables dentro de los componentes Vue. Estas variables utilizan la sintaxis de doble llaves {{ text }}

## 6. Interpolación de datos 2

Las **directivas** son atributos de HTML que permiten que los valores de las etiquetas en el DOM cambien dinámicamente, ejemplos son:

v-text='text' --> añade texto al elemento html o componente, este escucha cambios en la **variable text**.

v-once --> permite que no se modifique el valor de un elemento, guarda el valor con el que se renderiza la primera vez.

v-html ="text" ---> permite leer en las variables los tags o elementos de html que estén en la variable text, de lo contrario tomara estos tags o elementos como texto(string). **Por seguridad nunca usar v-html para hacer formularios (inputs) de usarios. **

```html
<body>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app"></div>

  <script>
    const vm = Vue.createApp({
      data() {
        return {
          text: "<p>Hi vue</p>",👈👀
        };
      },
      // template: `<div>{{text}}</div>`, 👈👀👇
      // template: `<div v-once v-text="text"></div>`,
      template: `<div v-once v-html="text"></div>`,
    }).mount("#app");

    console.log(vm);
  </script>
</body>
```

Probar v-once:

```js
vm.text = "Insane text";
```

Mas específicamente, en términos de HTML son atributos.

Por ejemplo, en HTML

`<img src="imagen.png" />`

El tag es todo lo que está entre < y > El nombre del tag es "img" El atributo es "src" El valor del atributo es "imagen.png"

Para un componente de Vue.js:

`<div v-html="content">`

El nombre del tag es "div" El atributo es "v-html" El valor es "content"

- [Directivas en Vue: ](https://vuejs.org/api/built-in-directives.html)

## 7. Atributos reactivos

```html
<body>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app"></div>

  <script>
    const vm = Vue.createApp({
      data() {
        return {
          attr: "src", 👈👀👇
          img: "https://static.wikia.nocookie.net/dei8941/images/f/fa/Vicky_MetalFamily.png/revision/latest?cb=20220117194507&path-prefix=es",
        };
      },
      // template: `<img v-bind:src="img" v-bind:alt="img"/>`,
      // template: `<img v-bind:["src"]="img"/>`,
      template: `<img v-bind:[attr]="img"/>`,
    }).mount("#app");

    console.log(vm);
  </script>
</body>
```

Probamos en la consola:

```js
vm.img = "https://static.wikia.nocookie.net/dei8941/images/b/b1/Heavy_MetalFamily.png/revision/latest?cb=20220117194929&path-prefix=es";
```

## 8. Eventos de usuario

Primer uso:

```html
<body>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app"></div>

  <script>
    const vm = Vue.createApp({
      data() {
        return { 👈👀👇
          counter: 0,
        };
      },
      methods: {
        increment() { 👈👀👇
          this.counter++;
        },
      },
      template: `<button v-on:click="increment">{{counter}}</button>`,
    }).mount("#app");
  </script>
</body>
```

Segundo uso:

```html
<body>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app"></div>

  <script>
    const vm = Vue.createApp({
      data() {
        return { 👈👀👇
          evt: "submit",
          counter: 0,
        };
      },
      methods: {
        submit(e) { 👈👀👇
          // e.preventDefault()
          this.counter++;
        },
      },
      // template: `
      //   <form v-on:submit.prevent.stop="submit">
      //     <button>{{counter}}</button>
      //   </form>`,
      template: ` 👈👀👇
        <form v-on:[evt].prevent="submit">
          <button>{{counter}}</button>
        </form>`,
    }).mount("#app");
  </script>
</body>
```

Para ver lo que arroja la consola:

- Console settings: Preserve log

### Reto: Incrementar y disminuir contador

```html
<body>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <div id="app"></div>

  <script>
    const vm = Vue.createApp({
      data() {
        return {
          counter: 0,
        };
      },
      methods: {
        increment() {
          this.counter++;
        },
        decrement() {
          this.counter--;
        },
      },
      template: `
          <h2>{{counter}}</h2>
          <button v-on:click="increment">+1</button>
          <button v-on:click="decrement">-1</button>
        `,
    }).mount("#app");
  </script>
</body>
```

## 9. 

```html

```

```js

```



👈👀
👈👀👇

## 10. 

```js

```

👈👀
👈👀👇

## 9. 

```js

```

👈👀
👈👀👇

## 9. 

```js

```

👈👀
👈👀👇