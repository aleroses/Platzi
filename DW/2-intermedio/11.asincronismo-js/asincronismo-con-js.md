# Curso de Asincronismo con JavaScript

## 1. Lo que aprenderás en este curso

Aprenderemos:  
- La importancia del uso de este concepto en JS
- Las principales elementos que tiene JS para manejar el asincronismo:
    - Callbacks
    - Promesas
    - Async/await
- Tendremos un proyecto aplicando lo aprendido, usaremos HTML, CSS y JS además de desplegarlo.

El asincronismo en JS tiene 2 aspectos:  
- Los elementos del navegador que lo hacen posible
- Las formas de usarlo al escribir el código.

Este curso se centra en lo segundo, tocando por encima lo primero, en un video. Pero realmente no es necesario saber la funcionamiento del navegador, solo necesitas entender por encima el concepto de asincronismo, no que sucede tras la cortina.  

**Recomendación:**  
Para tener una mejor base sobre la forma de trabajar de JS en el navegador deben llevar el curso de JS Engine V8 y/o el curso de JS profesional. El asincronismo de JS es posible gracias a una parte del navegador conocido como event loop ( algo que el profesor explicará) la cual trabaja con otras partes del navegador que estaría bien conocieran.

- [Resumen 01 en Notion](https://luis-ariza.notion.site/Asincronismo-con-JavaScript-7307b668977d416690103a4dbbf2843a)
- [Resumen 02 en Notion](https://whip-soil-3b5.notion.site/Curso-de-Asincronismo-con-JavaScript-6ec5da50d2644a8aa046bfe23b217c22)

## 2. Qué es el asincronismo

JavaScript es síncrono por defecto y tiene un solo subproceso (un solo hilo para trabajar).

JavaScript es síncrono y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaces de I/O.

JavaScript es single-threaded aún con múltiples procesadores, solo se pueden ejecutar tareas en un solo hilo, llamado el hilo principal.

> Sincrónico = sucede al mismo tiempo. Asincrónico = no sucede al mismo tiempo.

### Conceptos importantes para entender el asincronismo:  

• 🧵 **Thread**: Thread (hilo) para JavaScript permite realizar programación multihilos en este entorno. En realidad, simula la creación y ejecución de hilos, pero para el desarrollador es lo mismo. Esto simplifica muchísimo la creación de aplicaciones JavaScript.  
• 🚫 **Bloqueante**: Una llamada u operación bloqueante no devuelve el control a la aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera. Ejemplo: Una alerta.  
• 🚿 **No bloqueante**: Una tarea no bloqueante se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.  
• 🎞️ **Síncrono**: Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.  
• 🚦 **Asíncrono**: Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido. La finalización de la operación I/O (entrada/salida) se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.  
• 🛤️ **Paralelismo**: El paralelismo es la ejecución simultánea de dos o más tareas. Algunas tareas se pueden dividir en partes más pequeñas que pueden ser resueltas simultáneamente.  
• 🎮 **Concurrencia**: La concurrencia es la capacidad de un algoritmo o programa para ejecutar más de una tarea a la vez. El concepto es similar al procesamiento paralelo, pero con la posibilidad de que muchos trabajos independientes hagan diferentes cosas a la vez en lugar de ejecutar el mismo trabajo.  
• 🌀 **Eventloop o Loop de eventos**: El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.  

### Formas de manejar la asincronía en JavaScript:  

• 📩 **Callbacks**: Una función que se pasa como argumento de otra función y que será invocada.  
• ✨ **Promesas**: (Implementado en ES6) Una promesa es una función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.  
• 🛣️ **Async / Await**: (Implementado en ES2017) Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.  

📌 _En JavaScript_ casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como asincronismo. Lo único que no es procesado antes de que termine la operación son _los callbacks_, ya que éstos están amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.  

⏳ _El asincronismo_ es una manera de aprovechar el tiempo y los recursos de la aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.  

⏲️ _Un ejemplo fácil de asincronismo vs sincronismo_ es invitar a unos amigos a una fiesta y ofrecer una parrillada. Primero decides colocar la carne y verduras a la parrilla y luego repartir bebidas y algo para picar (snacks). Si fuera una persona síncrona (Blocking) tendrías que esperar a que la comida de la parrilla esté cocinada y luego atender a los invitados. Pero si fuera una persona asíncrona (Non Blocking) luego de poner la carne al carbón, sacas las bebidas frías de la nevera y compartes con los invitados mientras se cocina la carne. La acción de que la comida en la parrillada esté lista sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos (como compartir la velada con bebidas y algo de picar) ya podrían irse realizando.


## 3. Event Loop

[[js-engine-v8+nav#Event Loop]]  

El bucle de eventos es un patrón de diseño que **espera** y **distribuye** eventos o mensajes en un programa. 

![](https://i.postimg.cc/L5pgfgVK/3-v8.png)
![](https://i.postimg.cc/hvfjTH0v/3-runtime-environment.png)
![](https://i.postimg.cc/zXGHtjtD/12-asincronia.gif)
![](https://i.postimg.cc/qMgpkN4d/3-proceso.png)


Ver los apuntes del curso `Curso de JavaScript Engine (V8) y el Navegador`:  
[[js-engine-v8+nav#7. Memory Heap]]
[[js-engine-v8+nav#8. Qué es Call Stack]]
[[js-engine-v8+nav#12. Qué es la asincronía en JavaScript]]

[Más info](https://slawinski.dev/blog/javascript-runtime-environment-web-api-task-queue-and-event-loop/)

## 4. Iniciando a programar con JavaScript

> Insistir, persistir, resistir y nunca desistir. ❤️


## 5. Configuración

Creamos una carpeta para trabajar el proyecto: 
- git init 
- npm init -y

Creamos la siguiente estructura para trabajar e instalamos la extensión **Code Runner**: 

```bash
╰─ tree -L 3
.
├── package.json
├── .gitignore //👈👀 Agregamos /node_modules/
└── src
    └── callback
        └── index.js
```

📌Nota: Un comando útil para ignorar archivos cuando se utiliza git con **node** es:

```bash
npx gitignore node
```



### Conceptos fundamentales antes de crear el proyecto:  

- **Web APIs JavaScript del lado del cliente**: setTimeout, XMLHttpRequest, File Reader, DOM. Node: fs, https.
- **API**: El término API es una abreviatura de “Application Programming Interface” (Interfaz de programación de aplicaciones en español). Es un conjunto de rutinas que provee acceso a funciones de un determinado software.
- **Hoisting**: Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código en tiempo de compilación.
- **XML**: Lenguaje de marcado creado para la transferencia de información, legible tanto para seres humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de XML.
- **DOM**: El DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.
- **Events**: Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.
- **Compilar**: Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como la máquina virtual de Java.
- **Transpilar**: Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el original.

## 6. Qué son los Callbacks

**Un Callback** es una una función que se pasa como argumento de otra función y que será invocada.

```js
/* Ejemplo 01 */
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumNumers) {
    // sumNumers = callback
    // No necesariamente se debe llamar callback
    return sumNumers(num1, num2);
};

console.log(calc(2, 2, sum)); // 4
```

```js
/* Ejemplo 02 */

// Por si mismo ya es un callback
setTimeout(() => {
	// La función es anónima por eso no tiene nombre
    console.log('Hola');
}, 2000);
// Hola

// Ahora hagamos lo mismo pero con otra estructura
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Ghost!');
// Hola Ghost!
```


```js
function sum(num1, num2) {
    return num1 + num2;
}
function rest(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum)); // 4
console.log(calc(2, 2, rest)); // 0
console.log(calc(2, 2, mult)); // 4
console.log(calc(2, 2, div)); // 1
```

**Alt + 96 = ``**

[Documentación](https://developer.mozilla.org/es/docs/Glossary/Callback_function)