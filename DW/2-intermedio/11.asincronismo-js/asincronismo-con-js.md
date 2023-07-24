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


Ver los apuntes del `Curso de JavaScript Engine (V8) y el Navegador`:  
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

Los callbacks son útiles en JavaScript cuando se necesita ejecutar una función después de que se complete otra función o tarea de forma asincrónica. En otras palabras, los callbacks se utilizan en situaciones en las que la ejecución de una tarea puede llevar tiempo y no se debe bloquear el hilo principal de JavaScript mientras se espera el resultado.

Algunos ejemplos comunes de uso de callbacks en JavaScript son:

1. Manejo de eventos: Los Callbacks son muy útiles para manejar eventos. Por ejemplo, cuando se hace clic en un botón, se puede llamar a una función de Callback que ejecuta una acción específica. 

2. Operaciones asincrónicas: Cuando se realizan operaciones que pueden tardar mucho tiempo, como la lectura de un archivo o la llamada a una API, se puede utilizar un Callback para manejar el resultado de la operación una vez que se ha completado.

3. Animaciones: Los callbacks también se utilizan en animaciones para controlar la secuencia de los eventos. Por ejemplo, se puede utilizar un callback para iniciar la siguiente animación después de que se haya completado la anterior.

4. Programación funcional: La programación funcional en JavaScript se basa en gran medida en el uso de callbacks. Por ejemplo, se pueden pasar funciones de callback como argumentos a otras funciones para crear funciones más complejas.

En resumen, los callbacks son útiles en cualquier situación en la que se necesite ejecutar una función después de que se haya completado otra tarea de forma asincrónica.

### Ejemplos + Explicación 

Puedes ver como se ejecuta el código línea a línea usando el debugger de Chrome o Edge. Para usarlo usa `Ctrl + Shift + I` en cualquier web o si prefieres coloca en la URL `about:blank` para abrir una página en blanco, ahora busca Sources y por ultimo `>> Snippets`. Ahora ya puedes probar tu código creando `+ New snippet`

```js
function greeting(name){ 👈👀
    alert(`Hi ${name}!!!`);
}

function ask_for_name(callback){
    let name = prompt('Enter your name: ');
    callback(name); 👈👀
}

debugger;

ask_for_name(greeting); 👈👀
```

1. Al correr el snippet en la parte de Call Stack vemos que de manera global coloca todo el proyecto como anonymous.
2. Luego llega a la invocación de la función `ask_for_name(greeting);` que se le está pasando la función `greeting` como argumento, tener en cuenta que al pasarle la función `greeting` todavía no se está invocando. 
3. Al entrar a la función `ask_for_name(callback);` ahora ejecuta el `prompt` que muestra un input para ingresar un nombre. 
4. Ahora llega al `callback(name)` que es el  `greeting` anteriormente pasado como argumento, pero esta vez ya se está invocando y al cual se le está dando el argumento que necesita, extraído de `let name` para mostrar el `alert` final. 

![](https://i.postimg.cc/rsBdXs7r/video1377438465-online-video-cutter-com.gif)

Otro ejemplo: 
```js
function makingOrder(orden) {
    console.log(`Ready ${orden}`);
}

function order(orden, callback) {
    console.log(`Taking order ${orden}`);
    setTimeout(() => {
        callback(orden)
    }, 3000)
    console.log(`Doing order ${orden}`,);
}

order('Burger', makingOrder);
```

![](https://i.postimg.cc/4y2rvzZR/6-callback2.gif)

Más ejemplos:  
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
function greeting(name){
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Ghost!');
// Hola Ghost!
```


```js
/* Ejemplo 03 */
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

## 7. Playground: Ejecuta un callback con 2s de demora

Tienes la función `execCallback` que recibirá un `callback` es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

Para hacer que la función se demore 2 segundos debes usar la función `setTimeout`, pero para ejecutarla debes llamarla mediante el namescpace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setTimeout(() => {
  // code
})
```

Dentro del cuerpo de la función `execCallback` debes escribir tu solución.

Ejemplo:

```js
Input:
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);

Output:
// Execute myFunc 2s after
```

### Solución: 

Según la guía, ya tenemos una función definida previamente y esta se ve así: 

```js
// Se crea la función 
const myFunc = () => console.log('Log after 2s');
// Se la pasamos como argumento a la función con el callback
execCallback(myFunc);
```

Solución:  
```js
export function execCallback(callback) {
  window.setTimeout(callback, 2000);
}
```

Si copiamos esto en la consola del navegador recuerda seguir este orden, de lo contrario tendremos un error: 

```js
const myFunc = () => console.log('Log after 2s');

function execCallback(callback) {
  window.setTimeout(callback, 2000);
}

execCallback(myFunc);

// Output:
// Log after 2s
```

📌Nota: No es estrictamente necesario usar `window`, ya que `setTimeout` es una función global en el ámbito global (también conocido como el objeto `window` en el navegador). Entonces, si estás trabajando en un entorno de navegador, puedes simplemente llamar `setTimeout` sin `window` y funcionará igual.

Sin embargo, al usar `window.setTimeout`, estamos siendo explícitos sobre el alcance de la función. `window` es el objeto global en el navegador, y al llamar a `setTimeout` en el objeto `window` estamos indicando que estamos llamando a una función global y no a una función que ha sido definida en el ámbito local.

El uso de `window` también puede ser útil en situaciones donde hay ambigüedad en el ámbito, por ejemplo, si una variable local tiene el mismo nombre que una función global, podríamos usar `window` para referirnos explícitamente a la versión global de la función.


## 8. XMLHTTPRequest

**XMLHttpRequest** (XHR) es un objeto JavaScript que se utiliza para realizar solicitudes HTTP / HTTPS asincrónicas desde un navegador web para recibir datos del servidor web.

### Propiedades

|Propiedad    |Descripción |
|-------------|------------|
|`readyState`  |Valor numérico (entero) que almacena el estado de la petición|
|`responseText`|El contenido de la respuesta del servidor en forma de cadena de texto|
|`responseXML` |El contenido de la respuesta del servidor en formato XML. El objeto devuelto se puede procesar como un objeto DOM|
|`status`     |El código de estado HTTP devuelto por el servidor (`200` para una respuesta correcta, `404` para "No encontrado", `500` para un error de servidor, etc.)|
|`statusText`  |El código de estado HTTP devuelto por el servidor en forma de cadena de texto: "OK", "Not Found", "Internal Server Error", etc.|

### Estados 

Los valores definidos para la propiedad `readyState` son los siguientes:

|Valor |Estado        |Descripción |
|------|--------------|------------|
|`0`  |`UNINITIALIZED`|No inicializado, todavía no se llamó a `open()`.|
|`1`  |`LOADING`     |Cargando, todavía no se llamó a `send()`.|
|`2`  |`LOADED`      |Cargado, `send()` ya fue invocado, y los encabezados y el estado están disponibles.|
|`3`  |`INTERACTIVE`  |Interactivo, Descargando; `responseText` contiene información parcial.|
|`4`  |`COMPLETED`    |Completo, la operación está terminada.|

### Métodos

|Método |Descripción |
|---|---|
|`abort()`|Detiene la petición actual|
|`getAllResponseHeaders()`|Devuelve una cadena de texto con todas las cabeceras de la respuesta del servidor|
|`getResponseHeader("cabecera")`|Devuelve una cadena de texto con el contenido de la cabecera solicitada|
|`onreadystatechange`|Responsable de manejar los eventos que se producen. Se invoca cada vez que se produce un cambio en el estado de la petición HTTP. Normalmente es una referencia a una función JavaScript|
|`open("metodo HTTP", "url")`|Establece los parámetros de la petición que se realiza al servidor. Los parámetros necesarios son el método HTTP empleado y la URL destino (puede indicarse de forma absoluta o relativa)|
|`send(contenido)`|Realiza la petición HTTP al servidor|
|`setRequestHeader("cabecera", "valor")`|Permite establecer cabeceras personalizadas en la petición HTTP. Se debe invocar el método `open()` antes que `setRequestHeader()`|

El método `open()` requiere dos parámetros (método HTTP y URL) y acepta de forma opcional otros tres parámetros. Definición formal del método `open()`:

`open(string metodo, string URL [,boolean asincrono, string usuario, string password]);`

Por defecto, las peticiones realizadas son asíncronas. Si se indica un valor `false` al tercer parámetro, la petición se realiza de forma síncrona, esto es, se detiene la ejecución de la aplicación hasta que se recibe de forma completa la respuesta del servidor.

No obstante, las peticiones síncronas son justamente contrarias a la filosofía de AJAX. El motivo es que una petición síncrona _congela_ el navegador y no permite al usuario realizar ninguna acción hasta que no se haya recibido la respuesta completa del servidor. La sensación que provoca es que el navegador se ha _colgado_ por lo que no se recomienda el uso de peticiones síncronas salvo que sea imprescindible.

Los últimos dos parámetros opcionales permiten indicar un nombre de usuario y una contraseña válidos para acceder al recurso solicitado.

Por otra parte, el método `send()` requiere de un parámetro que indica la información que se va a enviar al servidor junto con la petición HTTP. Si no se envían datos, se debe indicar un valor igual a `null`. En otro caso, se puede indicar como parámetro una cadena de texto, un array de bytes o un objeto XML DOM.

### Características del protocolo HTTP

**Verbos**: También conocidos como métodos HTTP, indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor. 

#### Los Verbos HTTP mas comunes son:

1. **GET**: Recupera los datos identificados por el URI (Uniform Resource Identifier) proporcionado. Por lo general, se utiliza para solicitar información.

2. **POST**: Envía datos al servidor para crear o actualizar un recurso. Se utiliza para enviar información de formularios, subir archivos, etc.

3. **PUT**: Actualiza los datos identificados por el URI proporcionado. Se utiliza para actualizar la información existente.

4. **DELETE**: Elimina el recurso identificado por el URI proporcionado.

5. **HEAD**: Recupera los encabezados de respuesta que se devolverían si se realizara una solicitud GET al URI proporcionado. Se utiliza para verificar la existencia de un recurso y obtener información sobre él, sin descargar el cuerpo completo de la respuesta.

6. **OPTIONS**: Recupera los métodos HTTP que el servidor admite para un recurso determinado. Se utiliza para obtener información sobre los métodos disponibles para interactuar con un recurso.

7. **PATCH**: Realiza una actualización parcial de los datos identificados por el URI proporcionado. Es similar a PUT, pero se utiliza para realizar pequeñas actualizaciones en lugar de reemplazar completamente un recurso.

Estos son los verbos HTTP más comunes, pero también existen otros menos utilizados, como TRACE, CONNECT, PROPFIND, etc.


Otra definición:  
- **`GET`** → Solicita un recurso.
- **`HEAD`** → Solicita un recurso, pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar está correcto y puede ser procesado.
- **`POST`** → Sirve para la creación de recursos en el servidor.
- **`PUT`** → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
- **`PATCH`** → Actualiza parcialmente un recurso.
- **`DELETE`** → Elimina un recurso.  

### Códigos de estados del servidor 

Los códigos de estado (status codes) del servidor son una parte fundamental del protocolo HTTP, ya que indican el **resultado de una solicitud realizada por un cliente al servidor**. 

Los códigos de estado más comunes:

- **`1xx` Información** → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
	- 100: Continuar
	- 101: Cambio de protocolo
- **`2xx` Éxito** → Indican que la petición fue recibida, aceptada y procesada correctamente.
	- 200: OK
	- 201: Creado
	- 202: Aceptado
	- 204: Sin contenido
- **`3xx` Redirección** → Indican que hay que tomar acciones adicionales para completar la solicitud.
	- 300: Múltiples opciones
	- 301: Movido permanentemente
	- 302: Encontrado
	- 304: No modificado
	- 307: Redirección temporal
	- 308: Redirección permanente
- **`4xx` Errores del cliente** → Indican errores del lado del cliente que hizo mal una solicitud.
	- 400: Solicitud incorrecta
	- 401: No autorizado
	- 403: Prohibido
	- 404: No encontrado
	- 405: Método no permitido
	- 408: Tiempo de espera de solicitud
	- 429: Demasiadas solicitudes
- **`5xx` Errores del servidor** → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.  
	- 500: Error interno del servidor
	- 501: No implementado
	- 502: Puerta de enlace incorrecta
	- 503: Servicio no disponible
	- 504: Tiempo de espera de la puerta de enlace
	- 505: Versión de HTTP no compatible


### Los códigos más comunes a la hora de interactuar con una API son:

- **`200`** → _OK_ → Indica que todo está correcto.
- **`201`** → _Created_ → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
- **`204`** → _No Content_ → Indica que la solicitud se completó correctamente, pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
- **`400`** → _Bad Request_ → Indica que la solicitud del cliente es incorrecta o que ha habido un error en su sintaxis.
- **`401`** → _Unauthorized_ → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
- **`403`** → _Forbidden_ → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
- **`404`** → _Not Found_ → Indica que no existe el recurso que se está intentando acceder.
- **`500`** → _Internal Server Error_ → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.  
- **`503`** → _Service Unavailable_: indica que el servidor no está disponible temporalmente para procesar la solicitud.


### Ejemplo

1. Ir a la consola y ubicarnos en la carpeta del proyecto y escribir el comando para instalar el paquete **XMLHttpRequest**:  

```bash
npm i xmlhttprequest
```

2. En VSC creamos un archivo llamado `challenge.js` en la ruta `src/callback`.

```bash
.
├── node_modules
│   └── xmlhttprequest  
│       ├── LICENSE     
│       ├── README.md   
│       ├── lib
│       └── package.json
├── package-lock.json
├── package.json
└── src
    ├── callback
    │   ├── challenge.js 👈👀
    │   └── index.js
    └── playground // Esto es del reto anterior :v
        └── 07.callback.js
```

`challenge.js`  
```js
// Llamado al XmlHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// API en mayúscula porque es una referencia que no va a cambiar
const API = 'https://api.escuelajs.co/api/v1'; 

// urlApi: no confundir y colocar API
function fetchData(urlApi, callback){ 
	// Referencia a new XMLHttpRequest
	let xhttp = new XMLHttpRequest(); 

	// Petición "obtener" con true para habilitarlo
	xhttp.open('GET', urlApi, true); 
	// Escucha diferentes estados de la solicitud y conocer cuando está disponible la información
	xhttp.onreadystatechange = function(event) { 
		// Si el estado ha sido completada la llamada
		if(xhttp.readyState === 4) { 
			// El servido responde de forma correcta
			if(xhttp.status === 200 ){ 
				// Dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
				callback(null, JSON.parse(xhttp.responseText)); 
			} else {
				const error = new Error('Error ' + urlApi);
				// Es null porque no se está regresando ningún dato
				return callback(error,null); 
			}
		} 
	}
	// Realizamos la petición
	xhttp.send();
}
```

### Explicación paso a paso de la construcción de la función `fetchData`.

1. Primero debemos declarar e importar el paquete de [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), que nos permite utilizar objetos (XHR) para interactuar con servidores (en este caso la API de Platzi) para esto hacemos:

```js
const XMLHttpRequest = require('XMLHttpRequest');
```

- Lo que hace aquí “[require()](https://nodejs.org/api/modules.html#requireid)” es importar el módulo del ID que le pasemos, además puede importar JSON y archivos locales. Pero necesitamos trabajar con XMLHttpRequest para manipular la API.  

2. Declaramos como constante el URL de la API:

```js
const API = 'https://api.escuelajs.co/api/v1/products';
```

3. Ahora es momento de iniciar con la función principal que en términos simples es:

```js
function fetchData(urlApi, callback) {
}
```

- El parámetro ‘urlApi’ hace referencia a cualquier API con la cual estemos trabajando, en este caso la FakeStore de Platzi.
- El segundo parámetro ‘callback’ es donde posteriormente vamos a pasar una función como argumento para poder controlar el flujo de información de la API.  

4. Necesitamos alguna manera de poder manipular las solicitudes que haremos para consultar los datos, para ello vamos a crear un espacio en memoria (una variable) en donde guardar el objeto (XHR) que importamos y gracias a los métodos ya construidos nos será mil veces más fácil desarrollar nuestra función.

```js
let xhttp = new XMLHttpRequest();
```

- Si estás familiarizado con OOP ([Programación Orientada a Objetos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#object_basics)) sabrás entonces que esto no es más que un constructor vacío, de la misma forma que:

```js
let perrito = new Animal(); 🐶
let manzana = new Fruta();  🍎
```

5. Muy bien, ya podemos utilizar nuestra variable `xhttp` (en conjunto al callback) como un objeto para acceder y manipular la API. Primero debemos abrir una solicitud (un request) esto lo hacemos con el método ‘[.open()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)’

```js
xhttp.open('GET', urlApi, true);
```

- Ahora bien, el primer parámetro es el tipo de solicitud que vamos a realizar, pudo haber sido “POST”, “PUT”, “DELETE”. Pero vamos a utilizar “GET” 😎
- El segundo parámetro es la URL de la API a la cual le vamos a realizar el request.
- Último y tercer parámetro recibe un booleano para indicarle si vamos a utilizar asincronismo o no, tal simple como TRUE o FALSE según el caso.

6. Vamos a hacer una función anónima para verificar que el request de los datos ha salido con éxito y en caso de un tener error hacer registro de este. Para ello nos vamos a apoyar de la propiedad de ‘[.onreadystatechange](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)’ esta llamará a la función cada que el [readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) cambie (readyState retorna el número del estado en dónde se encuentra el request)

```js
xhttp.onreadystatechange = function(e){
}
```

- Ahora bien, el ciclo de vida del `readyState` es el siguiente:  
    
|Value|State|Description|
|---|---|---|
|`0`|`UNSENT`|Client has been created. `open()` not called yet.|
|`1`|`OPENED`|`open()` has been called.|
|`2`|`HEADERS_RECEIVED`|`send()` has been called, and headers and status are available.|
|`3`|`LOADING`|Downloading; `responseText` holds partial data.|
|`4`|`DONE`|The operation is complete.|
    
    Entonces debemos parar en `4` cuando la operación ha sido completada

```js
if (xhttp.readyState === 4) {
} ✅
```

- Una vez completado con éxito necesitamos saber qué tipo de respuesta nos entregó el servidor, así que volvemos a verificar con un if la propiedad ‘[.status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status)’ según el tipo de respuestas:  
    ![](https://i.imgur.com/4opBaJk.png)  
    Entonces el if nos queda de la siguiente manera:

```js
if (xhttp.readyState === 4) {
	if (xhttp.status === 200) {
	} ✅
} ✅
```

- ¡Ya comprobamos que tanto el request como él response hayan sido exitosos! Ahora podemos invocar nuestro callback (función por definir más tarde para manipular los datos)

```js
if(xhttp.readyState === 4) {
	if(xhttp.status === 200) {
		callback(null, JSON.parse(xhttp.responseText));
	} ✅
} ✅
```

¿Y por qué tiene tantos parámetros el callback si aún ni siquiera lo hemos definido? 🤔 Mira te explico:

- El primero vamos a utilizarlo en caso de que se presente un error, pero como ya hemos verificado eso podemos simplemente dejarlo como un ‘null’.
- En el segundo usamos la función ‘[JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)’ para convertir en datos que podamos controlar el texto que nos retorna la propiedad ‘[.responseText](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText)’ después de hacer el request.

Listo🥳, dejamos preparado nuestro callback sin errores y con la información “traducida” para cualquier momento en el que necesitemos usarla. Pero ¿Y si el request no es exitoso? ¿Qué va a pasar con nuestra función?😔

- Hay que regresarnos al primer if y utilizar la estructura de else para que en caso de haber un error registrarlo y enviarlo al callback (donde antes habíamos puesto ‘null’) y ahora pasar el null en la parte de los datos, ya que nunca pudo consultarlos.

```js
if (xhttp.readyState === 4) {
	if (xhttp.status === 200) {
		callback(null, JSON.parse(xhttp.responseText)); ✅
	} ✅
} else ❌ {
		consterror = new Error('error' + urlApi);
		returncallback(error, null);
}
```

7. 🏆 ¡¡Acabamos la función!! 🏆  
    Ya solo resta utilizar el método ‘[.send()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)’ después de procesar los datos para enviar el request al server (API)

```js
xhttp.send();
```

### ⚠️(BONUS)⚠️

Para no usar “Magic numbers” se pueden declarar los estados a verificar como constantes, les dejo mi código completo

```js
const XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1/products';
const DONE = 4;
const OK = 200;

functionfetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (e) {
        if (xhttp.readyState === DONE && xhttp.status === OK) {
            callback(null, JSON.parse(xhttp.responseText));
        } else {
            const error = new Error('error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}
```

### Otra explicación 

```js
// Se importa el módulo xmlhttprequest y se crea una instancia de la clase XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
// Se define la URL base de la API
const API = 'https://api.escuelajs.co/api/v1'; 

// Se define la función fetchData que recibe una URL y una función de callback como parámetros
function fetchData(urlApi, callback) { 
// Se crea una instancia de la clase XMLHttpRequest
  let xhttp = new XMLHttpRequest(); 

// Se establece la solicitud HTTP GET con la URL proporcionada como primer parámetro
  xhttp.open('GET', urlApi, true);
// Se define una función de callback que se ejecuta cuando cambia el estado de la solicitud 
  xhttp.onreadystatechange = function (event) { 
// Si el estado de la solicitud es 4, significa que se ha completado la solicitud  
    if (xhttp.readyState === 4) { 
// Si el código de estado HTTP es 200, significa que la solicitud se ha completado con éxito
      if (xhttp.status === 200) { 
// Se llama a la función de callback con el primer parámetro null y con los datos de respuesta parseados como JSON
        callback(null, JSON.parse(xhttp.responseText)); 
// Si el código de estado HTTP no es 200, significa que ha ocurrido un error
      } else { 
// Se crea una instancia de la clase Error con el mensaje de error personalizado
        const error = new Error('Error en ' + urlApi);
// Se llama a la función de callback con el primer parámetro de error y el segundo parámetro como null 
        callback(error, null); 
      }
    }
  }

// Se envía y realiza la solicitud HTTP
  xhttp.send(); 
}
```

En resumen, la función `fetchData` utiliza la clase `XMLHttpRequest` para realizar una solicitud HTTP GET a una URL proporcionada como parámetro. Si la solicitud se completa con éxito, se llama a la función de callback con los datos de respuesta parseados como JSON. Si la solicitud falla, se llama a la función de callback con un objeto de error personalizado.

Es importante destacar que esta implementación de `fetchData` es asíncrona, lo que significa que no bloquea la ejecución del programa mientras se realiza la solicitud HTTP. En su lugar, la función de callback se llama después de que se complete la solicitud, lo que permite que el programa continúe su ejecución normalmente mientras se espera la respuesta de la API.


_La nueva forma de hacer peticiones a una API es el_[fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).


- [Métodos y Propiedades del objeto XMLHttpRequest](http://dis.um.es/~lopezquesada/documentos/IES_1314/IAW/curso/UT7/libroswebajax/www.librosweb.es/ajax/capitulo7/metodos_y_propiedades_del_objeto_xmlhttprequest.html)
- [Fakeapi](https://fakeapi.platzi.com/)


## 9. Fetch data

```js
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
	let xhttp = new XMLHttpRequest();

	xhttp.open('GET', urlApi, true);
	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			if (xhttp.status == 200) {
				// Puedes quitarle el JSON.parse para ver como viene toda la información (DOMString cadena de caracteres)
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				const error = new Error('Error en ', urlApi);
				callback(error, null);
			}
		}
	}

	xhttp.send();
}


// Template strings y Optional chaining '?.'
fetchData(`${API}/products`, function (error1, data1) { 👈👀
	if (error1) return console.error(error1);

	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		if (error2) return console.error(error2);
		
		fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
			if (error3) return console.error(error3);
			
			console.log(data1[0]);
			console.log(data2.title);
			console.log(data3.name);
		});
	});
});

// Obtenemos: 
{
  id: 2,
  title: 'Oriental Bronze Car',
  price: 342,
  description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  images: [
    'https://picsum.photos/640/640?r=2863',
    'https://picsum.photos/640/640?r=4222',
    'https://picsum.photos/640/640?r=3311'
  ],
  creationAt: '2023-07-16T06:10:35.000Z',
  updatedAt: '2023-07-16T06:10:35.000Z',
  category: {
    id: 3,
    name: 'Furniture',
    image: 'https://picsum.photos/640/640?r=2068',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  }
}
Oriental Bronze Car
Furniture
```

### ¿Cómo llegamos a ese resultado?

Ya vimos lo que obtenemos como resultado final, pero, ¿Cómo llegamos a ese resultado? 

1. En el primer `fetchData` obtenemos un array enorme con muchos objetos dentro: 
```js
fetchData(`${API}/products`, function (error1, data1) {
	if (error1) return console.error(error1);
	console.log(data1);
});

// Obtenemos esto y más:  
[
  {
    id: 2,
    title: 'Oriental Bronze Car',
    price: 342,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      'https://picsum.photos/640/640?r=2863',
      'https://picsum.photos/640/640?r=4222',
      'https://picsum.photos/640/640?r=3311'
    ],
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://picsum.photos/640/640?r=2068',
      creationAt: '2023-07-16T06:10:35.000Z',
      updatedAt: '2023-07-16T06:10:35.000Z'
    }
  },
  {
    id: 4,
    title: 'Tasty Frozen Table',
    price: 962,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    images: [
      'https://picsum.photos/640/640?r=7246',
      'https://picsum.photos/640/640?r=9914',
      'https://picsum.photos/640/640?r=1496'
    ],
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://picsum.photos/640/640?r=260',
      creationAt: '2023-07-16T06:10:35.000Z',
      updatedAt: '2023-07-16T06:10:35.000Z'
    }
  },
  ...
    {
    id: 102,
    title: 'Awesome Granite Bacon',
    price: 1,
    description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    images: [
      'https://picsum.photos/640/640?r=4809',
      'https://picsum.photos/640/640?r=8923',
      'https://picsum.photos/640/640?r=8980'
    ],
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://picsum.photos/640/640?r=4582',
      creationAt: '2023-07-16T06:10:35.000Z',
      updatedAt: '2023-07-16T06:10:35.000Z'
    }
  }
  ... 100 more items
```

2. En el segundo `fetchData` obtenemos solo el primer objeto y extraemos el `title` usando `console.log(data2.title);`: 

```js
fetchData(`${API}/products`, function (error1, data1) {
	if (error1) return console.error(error1);
	/* console.log(data1); */

	fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
		if(error2) return console.error(error2);
		console.log(data2);
	});
});

// Obtenemos el objeto de la posición [0], lo que no logro entender es el porqué le agregan un .id, ya que, sin eso no funciona :v
{
  id: 2,
  title: 'Oriental Bronze Car', 👈👀
  price: 342,
  description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  images: [
    'https://picsum.photos/640/640?r=2863',
    'https://picsum.photos/640/640?r=4222',
    'https://picsum.photos/640/640?r=3311'
  ],
  creationAt: '2023-07-16T06:10:35.000Z',
  updatedAt: '2023-07-16T06:10:35.000Z',
  category: {
    id: 3,
    name: 'Furniture',
    image: 'https://picsum.photos/640/640?r=2068',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  }
}
```
3. En el tercer  `fetchData` buscamos a qué categoría pertenece el producto que obtuvimos anteriormente, pero primero veamos las categorías existentes... :  

```js
fetchData(`${API}/products`, function (error1, data1) {
	if (error1) return console.error(error1);
	/* console.log(data1); */

	fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
		if(error2) return console.error(error2);
		/* console.log(data2); */

		fetchData(`${API}/categories/`, function (error3, data3){
			if(error3) return console.error(error3);
			console.log(data3);
		});
	});
});

// Obtenemos: 
[
  {
    id: 1,
    name: 'Clothes',
    image: 'https://picsum.photos/640/640?r=193',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  },
  {
    id: 2,
    name: 'Electronics',
    image: 'https://picsum.photos/640/640?r=4582',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  },
  {
    id: 3,
    name: 'Furniture', 👈👀 // Esto es lo que necesitamos
    image: 'https://picsum.photos/640/640?r=2068',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  },
  {
    id: 4,
    name: 'Shoes',
    image: 'https://picsum.photos/640/640?r=260',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  },
  {
    id: 5,
    name: 'Others',
    image: 'https://picsum.photos/640/640?r=5088',
    creationAt: '2023-07-16T06:10:35.000Z',
    updatedAt: '2023-07-16T06:10:35.000Z'
  },
  {
    id: 32,
    name: 'New Category',
    image: 'https://placeimg.com/640/480/any',
    creationAt: '2023-07-16T23:28:51.000Z',
    updatedAt: '2023-07-16T23:28:51.000Z'
  },
  {
    id: 33,
    name: 'New Category',
    image: 'https://placeimg.com/640/480/any',
    creationAt: '2023-07-16T23:31:07.000Z',
    updatedAt: '2023-07-16T23:31:07.000Z'
  }
]
```

Ahora filtremos la categoría de nuestro producto, para lo cual concatenamos el ID que debe buscar `${API}/categories/${data2?.category?.id}`, con esto a través de los datos del producto obtenidos en `data2` entramos a `producto.categoria.id` que si nos fijamos es igual a `3`. Usando `console.log(data3.name);` podemos tener el nombre de la categoría a la que pertenece nuestro producto: 

```js
fetchData(`${API}/products`, function (error1, data1) {
	if (error1) return console.error(error1);
	/* console.log(data1); */

	fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
		if(error2) return console.error(error2);
		/* console.log(data2); */

		fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
			if(error3) return console.error(error3);
			console.log(data3);
		});
	});
});

// Obtenemos 
{
  id: 3,
  name: 'Furniture',👈👀 // Fin 
  image: 'https://picsum.photos/640/640?r=2068',
  creationAt: '2023-07-16T06:10:35.000Z',
  updatedAt: '2023-07-16T06:10:35.000Z'
}
```

### Otra forma

✨ Esta es otra forma de hacer lo mismo, pero más sencilla de entender. 

```js
fetchData(`${API}/products`, function (error, all) {
    if (error) return console.log(error);

    const product = all[0];

	/* console.log(all); */ //👈👀 Muestra un array de objetos
	console.log(product);
    console.log(product.title)
    console.log(product.category.name)
})
```

### Explicación de la invocación de FetchData:  

En el archivo **challenge.js** se agrega el siguiente código:

```js
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

//funcion principal que obtendrá la informacion del producto como un objeto
functionfetchData(urlApi, callback) {
    //instanciar un objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //El método .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el método, la url y async
    xhttp.open('GET', urlApi, true);
    //en este método Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
    xhttp.onreadystatechange = function (event) {
        //la propiedad readyState define el estado del objeto XMLHttpRequest
        //0 No inicializado
        //1 Loading
        //2 ejecutado
        //3 interactuando
        //4 completado
        if (xhttp.readyState === 4) {
            //si la respuesta de la API es exitosa (200 Ok)
            if (xhttp.status === 200) {
                //se ejecuta el callback recibiendo como argumentos un array de objetos, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
                //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
                callback(null, JSON.parse(xhttp.responseText));
                //si la respuesta de la API no es exitosa se captura el error
            } else {
                //se inicializa un objeto de tipo Error donde se le envian como argumentos un mensaje de error y la URL de la API para conocer en dónde se produjo el error
                const error = newError("Error" + urlApi);
                //se ejecuta el callback recibiendo como argumentos el error y null debido a que no se pudo obtener el objeto
                return callback(error, null);
            }
        }
    //el método .send() envia la petición al servidor
  }
  xhttp.send();
}

//se invoca el método fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada que contiene un array con objetos, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
fetchData(`${API}/products`, function (error1, data1) {
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if (error1) returnconsole.error(error1);
    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        //si en este punto se identifica un error se imprime en consola y se detiene el proceso
        if (error2) returnconsole.error(error2);
        //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            if (error3) returnconsole.error(error3);
            //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
            //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        });
  });
});
```

📌 DOMString: En el lenguaje de programación JavaScript, un atributo de tipo `DOMString` representa una cadena de caracteres que se utiliza para representar texto o valores de cadena en el Document Object Model (DOM).

El DOM es una representación en memoria de un documento HTML o XML que permite a los desarrolladores acceder y manipular los elementos de la página web de manera programática utilizando JavaScript. Cuando se manipulan elementos del DOM con JavaScript, los valores de los atributos se representan como `DOMString`.


### Optional chaining '?.' 

El operador de encadenamiento opcional `?.` es una característica introducida en ECMAScript 2020 que permite acceder a las propiedades de un objeto sin tener que verificar explícitamente si el objeto y sus propiedades existen. El operador `?.` se utiliza para evitar errores de referencia nula y simplificar el código en situaciones en las que se accede a propiedades anidadas de un objeto.

Antes de la introducción del operador de encadenamiento opcional, la forma común de acceder a las propiedades de un objeto anidado era verificar explícitamente si cada propiedad existía utilizando el operador `&&`:

```js
if (obj && obj.prop1 && obj.prop1.prop2) {
  // hacer algo con obj.prop1.prop2
}
```

Con el operador de encadenamiento opcional, podemos simplificar este código de la siguiente manera:

```js
if (obj?.prop1?.prop2) {
  // hacer algo con obj.prop1.prop2
}
```

En este ejemplo, el operador `?.` se utiliza para verificar si el objeto `obj` existe antes de acceder a sus propiedades `prop1` y `prop2`. Si alguna de las propiedades no existe o es nullish (`null` o `undefined`), se devuelve `undefined` en lugar de lanzar una excepción de referencia nula.

El operador de encadenamiento opcional también se puede utilizar para llamar a métodos en objetos anidados:

```js
obj?.method1?.();
```

En este ejemplo, el operador `?.` se utiliza para llamar al método `method1` en el objeto `obj` solo si existe.

En resumen, el operador de encadenamiento opcional `?.` es una característica útil de ECMAScript 2020 que simplifica el acceso a las propiedades de un objeto anidado y ayuda a evitar errores de referencia nula en el código.

### Callback hell

"Callback hell" (o "infierno de los callbacks") es un término que se utiliza en JavaScript para describir una situación en la que se anidan múltiples funciones de devolución de llamada (callbacks) dentro de otras funciones de devolución de llamada, lo que puede dificultar la legibilidad y el mantenimiento del código.

En JavaScript, las funciones de devolución de llamada se utilizan comúnmente para realizar tareas asincrónicas, como realizar solicitudes HTTP o leer archivos. Cuando se anidan varias funciones de devolución de llamada, el código puede volverse difícil de leer y mantener debido a la cantidad de anidamiento y la necesidad de realizar un seguimiento de varias variables y estados.

Por ejemplo, un ejemplo de "callback hell" podría ser el siguiente:

```js
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      asyncOperation4(result3, function(result4) {
        // Hacer algo con los resultados
      });
    });
  });
});
```

En este ejemplo, cada función de devolución de llamada anida otra función de devolución de llamada, lo que puede hacer que el código sea difícil de leer y seguir. Para evitar el callback hell, se pueden utilizar técnicas como las promesas o async/await para manejar de forma más clara y legible el flujo de control asíncrono en el código JavaScript.

📌 Nota: Para evitar la mala práctica de un **Call Hell**, no es recomendable exceder de 3 _callback_, para ello se utilizan _las promesas o el Async Away_.  

### Console

JavaScript tiene una variedad de métodos de consola que se utilizan para imprimir o mostrar información en la consola del navegador o en el entorno de Node.js.

1. `console.log()`: Se utiliza para imprimir mensajes en la consola del navegador o en el entorno de Node.js. Puedes pasar cualquier tipo de dato a `console.log()` y se imprimirá en la consola.

2. `console.error()`: Este método se utiliza para imprimir mensajes de error en la consola del navegador o en el entorno de Node.js. Los mensajes de error aparecerán en rojo para que sea más fácil identificarlos.

3. `console.warn()`: Este método se utiliza para imprimir mensajes de advertencia en la consola del navegador o en el entorno de Node.js. Los mensajes de advertencia aparecerán en amarillo para que sea más fácil identificarlos.

4. `console.info()`: Este método se utiliza para imprimir mensajes informativos en la consola del navegador o en el entorno de Node.js. Los mensajes informativos aparecerán en azul para que sea más fácil identificarlos.

5. `console.clear()`: Este método se utiliza para borrar la consola del navegador o en el entorno de Node.js para eliminar cualquier mensaje previo.

6. `console.table()`: Este método se utiliza para imprimir datos en forma de tabla en la consola del navegador o en el entorno de Node.js. Se puede utilizar con matrices y objetos para visualizar los datos de una manera más legible.

7. `console.group() / console.groupEnd()`: Estos métodos se utilizan para agrupar mensajes de consola relacionados para que sea más fácil de leer. `console.group()` se utiliza para comenzar un grupo y `console.groupEnd()` se utiliza para finalizar el grupo.

8. `console.time() / console.timeEnd()`: Estos métodos se utilizan para medir el tiempo transcurrido entre dos puntos en el código. `console.time()` se utiliza para comenzar el temporizador y `console.timeEnd()` se utiliza para detener el temporizador y mostrar el tiempo transcurrido en la consola.

Estos son solo algunos de los métodos más comunes de consola en JavaScript, pero hay muchos más disponibles. Cada uno puede ser útil en diferentes situaciones para ayudarte a depurar y realizar un seguimiento del código.


- [Documentación](https://developer.mozilla.org/es/docs/Web/API/Console)
- [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## 10. Callback hell

**CallBacks Hell**: Consiste en múltiples _Callbacks anidados_ que provocan que el código se vuelva difícil de leer y ‘_debuggear_’ y por eso se debe evitar.

### Otra forma de ejecutar el código creado

Para compilar el código y mostrar el resultado desde consola, podemos ejecutar este comando: 

```bash
node src/callback/challenge.js
```

También podemos agregar un `script` en nuestro archivo `package.json` para no tener que escribir toda la ruta cada vez que queramos ver los resultados desde consola.

```js
{
  "name": "asincronismo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "callback": "node src/callback/challenge.js"👈👀
  },
  "keywords": [
    "javascript"
  ],
  "author": "aleroses <ale.vrs@outlook.com>",
  "license": "MIT",
  "dependencies": {
    "xmlhttprequest": "^1.8.0"
  }
}
```

Ahora ya podemos correr nuestro comando `npm run callback` y ver los resultados en consola.

## 11. Qué son las promesas

Las promesas en JavaScript son objetos que representan la eventual finalización (o falla) de una operación asíncrona y permiten manejar el resultado de dicha operación de manera más eficiente y legible que con **callbacks anidados**, los cuales puedes llegar a ser muy engorrosos (ejemplo clase 9). En lugar de esperar a que una operación asíncrona termine para continuar con el siguiente paso, se puede crear una promesa que se resolverá en el futuro, y luego trabajar con ella en lugar de bloquear el flujo del programa. Las promesas también permiten encadenar varias operaciones asíncronas en secuencia y manejar errores de manera centralizada.

Las promesas pueden suceder:  
- Ahora
- En el futuro
- Nunca  

### Crear una promesa

Utilizamos la palabra reservada `new` seguida de la palabra `Promise` que es _el constructor de la promesa_. Este constructor recibe un único parámetro que es una función, la cual, a su vez, recibe otros dos parámetros: `resolve` y `reject`.

- El parámetro `resolve` se utiliza para cuando la promesa devuelve el valor correctamente.
- El parámetro `reject`, se usa en el que caso de que no funcione.  

#### Ejemplo:

```js
const promise = new Promise(function (resolve, reject){
resolve('hey!');
});
```

### Los tres estados de las promesas:

1. **Pendiente (pending):** Es el estado inicial de una promesa, lo que significa que aún no se ha resuelto ni rechazado. En este estado, la promesa está esperando a que se complete la operación asíncrona que representa.

2. **Resuelta (fulfilled):** Es el estado en el que una promesa se encuentra cuando se ha completado correctamente la operación asíncrona que representa. En este estado, se ha llamado a la función `resolve` de la promesa con un valor que se puede manejar en la llamada posterior `then`. 

3. **Rechazada (rejected):** Es el estado en el que una promesa se encuentra cuando se produce un error durante la operación asíncrona que representa. En este estado, se ha llamado a la función `reject` de la promesa con un motivo que se puede manejar en la llamada posterior `catch`.

Es importante destacar que una vez que una promesa cambia de estado, no puede cambiar de nuevo a otro estado. Por ejemplo, una promesa que se ha resuelto no puede cambiar a estado pendiente o rechazado, y una promesa que se ha rechazado no puede cambiar a estado resuelto o pendiente.


#### Ejemplo con `then` y `catch`:  

Para probar el código, en el proyecto se crea la carpeta llamada `promise` dentro de la carpeta `src` y por último creamos el archivo `index.js` en la ruta: `src/promise`

```bash
╰─ tree -L 3
.
├── node_modules      
│   └── xmlhttprequest
│       ├── LICENSE   
│       ├── README.md     
│       ├── lib
│       └── package.json  
├── package-lock.json     
├── package.json
└── src 👈👀
    ├── callback
    │   ├── challenge.js  
    │   └── index.js      
    ├── playground        
    │   └── 07.callback.js
    └── promise 👈👀
        └── index.js 👈👀
```


`index.js`

```js
//ejemplo de contar vacas: 15 or 9
const cows = 15; //valor inicial de vacas

const countCows = newPromise(function(resolve, reject){
//solo si el número de vacas supera 10, se llama al resolve
//de lo contrario: se llama a reject
if(cows > 10){
resolve(`We have ${cows} cows on the farm`);
} else {
reject("There is no cows on the farm");
}
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows
	.then((result) => {
		console.log(result);
	}).catch((error) => {
		console.log(error);
	}).finally(() => console.log('Finally'));
//se usan arrow function () =>

// Usando 15 obtenemos: 
We have 15 cows on the farm
Finally

// Usando 9 obtenemos: 
There is no cows on the farm.
Finally
```

Otra forma:  
```js
const cows = 0;

const count_cows = new Promise((resolve, reject) => {
	cows >= 1
		? resolve(`I have ${cows} cows on the farm.`)
		: reject('There is no cows on the farm.')
});

count_cows
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
	.finally(() => console.log('Finally'));

// Usando 0 obtenemos: 
There is no cows on the farm.
Finally

// Usando 9 obtenemos: 
I have 9 cows on the farm.
Finally
```

#### Otros ejemplos: 

1. Realizar una solicitud HTTP asíncrona y manejar la respuesta:

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

// Obtenemos: 
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

En este ejemplo, se usa la función `fetch` para realizar una solicitud HTTP asíncrona y se devuelve una promesa que representa la respuesta. Luego, se encadena una serie de llamadas `then` para procesar la respuesta, convirtiendo los datos a formato JSON y luego registrando los datos en la consola. Si se produce algún error durante la solicitud, se captura en el bloque `catch`.

2. Realizar múltiples solicitudes HTTP en paralelo y manejar los resultados:

```js
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/todos/1'),
  fetch('https://jsonplaceholder.typicode.com/todos/2'),
  fetch('https://jsonplaceholder.typicode.com/todos/3')
])
.then(responses => Promise.all(responses.map(response => response.json())))
.then(data => console.log(data))
.catch(error => console.error(error))

// Obtenemos: 
[
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
]
```

En este ejemplo, se usan varias llamadas `fetch` para realizar múltiples solicitudes HTTP en paralelo, y se devuelve una matriz de promesas que representan las respuestas. Luego, se usa `Promise.all` para esperar a que todas las promesas se resuelvan y devolver una matriz con los resultados. Finalmente, se utiliza la función `map` para convertir cada respuesta en formato JSON y se registra la matriz de datos en la consola. Si se produce algún error durante alguna de las solicitudes, se captura en el bloque `catch`.



### Ejemplos de promesas

Ejemplos de cómo crear promesas en JavaScript utilizando el constructor `Promise`:

1. Crear una promesa que se resuelve después de un tiempo determinado:

```js
const delay = ms => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resuelto después de ${ms} ms`);
    }, ms);
  });
}

delay(2000)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Obtenemos: 
Resuelto después de 2000 ms
```

En este ejemplo, se define una función `delay` que devuelve una promesa que se resuelve después de un tiempo determinado especificado en milisegundos. Dentro de la función, se utiliza el método `setTimeout` para retrasar la resolución de la promesa y luego se llama a la función `resolve` con un mensaje de éxito. Luego, se usa la llamada `then` para manejar el resultado de la promesa y se registra el mensaje en la consola después de que se resuelve. Si se produce algún error durante la ejecución de la promesa, se captura en el bloque `catch`.

2. Crear una promesa que se rechaza si se produce un error:

```js
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getJSON = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(`Error al obtener los datos: ${xhr.status} ${xhr.statusText}`);
      }
    };
    xhr.onerror = () => {
      reject('Error de red');
    };
    xhr.send();
  });
}

getJSON('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Obtenemos: 
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

En este ejemplo, se define una función `getJSON` que devuelve una promesa que se resuelve si la solicitud HTTP se realiza correctamente o se rechaza si se produce algún error. Dentro de la función, se utiliza el objeto `XMLHttpRequest` para realizar una solicitud GET a una URL especificada y luego se llama a la función `resolve` con los datos si la solicitud se realiza correctamente. Si se produce algún error durante la solicitud, se llama a la función `reject` con un mensaje de error. Luego, se usa la llamada `then` para manejar el resultado de la promesa y se registra los datos en la consola si se resuelve correctamente. Si se produce algún error durante la ejecución de la promesa, se captura en el bloque `catch`.

🔥 [Arrow functions: Ejemplos ](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


## 12. Playground: Crea una función de delay que soporte asincronismo

En este desafío tienes la función `delay` la cual se espera que un tiempo específico retorne un mensaje.

La función deberá recibir dos parámetros:

- time: el tiempo de espera
- message: el mensaje que debe imprimir después del tiempo de espera

La función `delay` debe retornar una promesa para poderlo usarlo de forma asíncrona.

> Nota: Debes usar la función `setTimeout` con el namespace `window` para poder monitorear su uso en la ejecución de pruebas, ejemplo:

```js
window.setTimeout(() => {
  // code
})
```

Ejemplo 1:

```js
Input:
delay(2000, "Hello after 2s")
.then((message) => console.log(message))

Output:
// after 2s
"Hello after 2s"
```

Ejemplo 2:

```js
Input:
delay(3000, "Hello after 3s")
.then((message) => console.log(message))

Output:
// after 3s
"Hello after 3s"
```

## 13. Fetch 

`fetch` es una función nativa que proporciona una forma fácil de hacer solicitudes HTTP y obtener datos de recursos externos, como APIs web o archivos JSON. `fetch` usa promesas y proporciona una interfaz más simple y flexible que el antiguo objeto `XMLHttpRequest` (XHR).

La sintaxis básica de `fetch` es la siguiente:

```js
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Aquí, `fetch` toma una URL como argumento y devuelve una promesa que resuelve en la respuesta de la solicitud. Luego, se utiliza el método `json()` en la respuesta para extraer los datos en formato JSON de la respuesta. Finalmente, se procesan los datos en la segunda promesa `then`, y cualquier error se maneja en la cláusula `catch`.

### Primeros pasos con fetch (buscar)
 
Para poder usar **fetch**, primero tenemos que instalarlo, para eso nos vamos a la terminal del proyecto y ejecutamos el siguiente comando:

```bash
npm i node-fetch
```

Para poder compilar desde VSC, debemos registrar el módulo en `package.json`, abrimos el archivo y agregamos `"type": "module"`:

```json
{
  "name": "asincronismo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "callback": "node src/callback/challenge.js"
  },
  "keywords": [
    "javascript"
  ],
  "author": "aleroses <ale.vrs@outlook.com>",
  "license": "MIT",
  "dependencies": {
    "node-fetch": "^3.3.1",
    "xmlhttprequest": "^1.8.0"
  },
  "type": "module"👈👀🔥
}
```

Creamos la siguiente estructura donde haremos algunos ejemplos: 

```bash
.
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── callback
    │   ├── challenge.js
    │   └── index.js
    ├── playground
    │   ├── 07.callback.js
    │   └── 12.promise.js
    └── promise
        ├── challenge.js 👈👀🔥
        └── index.js
```

`challenge.js`  
```js
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
	return fetch(urlApi);
}

fetchData(`${API}/products`)
	.then(response => response.json())
	.then(products => {
		console.log(products);
	})
	.then(() => {
		console.log('Hi');
	})
	.catch(error => console.log(error));

// Obtenemos una Array con objetos que tienen información de muchos productos: 
[
  {
    id: 4,
    title: 'test',
    price: 2,
    description: 'string',
    images: [ 'https://picsum.photos/640/640?r=6088' ],
    creationAt: '2023-07-19T07:11:23.000Z',
    updatedAt: '2023-07-19T15:58:43.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://picsum.photos/640/640?r=5082',
      creationAt: '2023-07-19T07:11:23.000Z',
      updatedAt: '2023-07-19T07:11:23.000Z'
    }
  },
  {
    id: 8,
    title: 'Ergonomic Soft Salad',
    price: 383,
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    images: [
      'https://picsum.photos/640/640?r=1449',
      'https://picsum.photos/640/640?r=3868',
      'https://picsum.photos/640/640?r=2899'
    ],
    creationAt: '2023-07-19T07:11:23.000Z',
    updatedAt: '2023-07-19T07:11:23.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://picsum.photos/640/640?r=5136',
      creationAt: '2023-07-19T07:11:23.000Z',
      updatedAt: '2023-07-19T07:11:23.000Z'
    }
  },
  {
    id: 106,
    title: 'Rustic Rubber Tuna',
    price: 626,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    images: [
      'https://picsum.photos/640/640?r=3242',
      'https://picsum.photos/640/640?r=2927',
      'https://picsum.photos/640/640?r=2304'
    ],
    creationAt: '2023-07-19T07:11:23.000Z',
    updatedAt: '2023-07-19T07:11:23.000Z',
    category: {
      id: 3,
      name: 'Change title',
      image: 'https://picsum.photos/640/640?r=8535',
      creationAt: '2023-07-19T07:11:23.000Z',
      updatedAt: '2023-07-19T17:51:32.000Z'
    }
  },
  ... 364 more items
]
```

Ahora obtengamos el título y nombre de la categoría del producto seleccionado. 

```js
import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
	return fetch(urlApi);
}

// Para obtener datos necesitas 1 fetchData y 2 .then (1 para convertirlo a json y 1 para mostrarlo)
fetchData(`${API}/products`)
	.then(response => response.json())
	.then(products => {
		// console.log(products);
		return fetchData(`${API}/products/${products[0].id}`)
	})
	.then(response => response.json())
	.then(product => {
		// console.log(product);
		console.log(product.title);
		return fetchData(`${API}/categories/${product.category.id}`)
	})
	.then(response => response.json())
	.then(category => {
		// console.log(category)
		console.log(category.name);
	})
	.catch(err => console.log(err))
	.finally(() => console.log('Finally'));

// Obtenemos 
Handcrafted Cotton Bike
Electronics
Finally

// fetch - buscar
// delay - demora
```

Esta es una forma más sencilla de hacer lo mismo: 

```js
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
	return fetch(urlApi);
}

fetchData(`${API}/products`)
	.then(response => response.json())
	.then(product => {
		// console.log(product[0]);
		console.log(product[0].title);
		console.log(product[0].category.name);
	})
	.catch(err => console.log(err))
	.finally(() => console.log('Finally'));
```

## 14. Fetch POST

🔥 Revisa los apuntes de la clase 8 [[asincronismo-con-js#8. XMLHTTPRequest#Características del protocolo HTTP]]

El método `POST` es uno de los métodos HTTP que se utilizan para enviar datos desde un cliente a un servidor. En particular, el método `POST` se utiliza para enviar datos que se utilizarán para crear o actualizar un recurso en el servidor.

> A diferencia del método `GET`, que se utiliza para recuperar información del servidor, el método `POST` envía datos al servidor para que se procesen.

### Opciones para realizar una solicitud HTTP `POST`

Cada opción o parámetro tiene un propósito específico en la configuración y el envío de la solicitud HTTP. Las opciones de solicitud se utilizan para especificar la forma en que se enviará la solicitud HTTP, qué tipo de datos se enviarán y cómo se procesarán los datos de respuesta. Algunas de las opciones de solicitud son obligatorias, mientras que otras son opcionales o dependen del tipo de solicitud que se esté realizando.

- `method: 'POST'`: Esto indica que se utilizará el método `POST` para realizar la solicitud.

- `mode: 'cors'`: Esto establece el modo de la solicitud. En este caso, se está utilizando el modo "cors" (Cross-Origin Resource Sharing -Compartición de recursos entre diferentes orígenes), que permite solicitudes entre diferentes dominios, esto quiere decir que permitir que los recursos de diferentes orígenes se compartan entre sí en la web. Por ejemplo, una página web alojada en un dominio diferente puede solicitar recursos de otro dominio mediante JavaScript. CORS funciona mediante el uso de encabezados HTTP especiales para indicar que un recurso determinado puede ser compartido entre diferentes orígenes. Los servidores pueden configurar sus respuestas HTTP para incluir estos encabezados y permitir que se compartan los recursos.

- `credentials: 'same-origin'`: Son cualquier información que se utiliza para autenticar a un usuario o para identificar una sesión de usuario en un sitio web. Las credenciales pueden incluir información como cookies, tokens de autenticación o certificados. Cuando se realizan solicitudes HTTP, se pueden enviar credenciales al servidor para identificar al usuario o sesión correspondiente. La opción `credentials` en una solicitud HTTP indica qué tipo de credenciales se deben enviar con la solicitud. En este caso, se está utilizando "same-origin", lo que significa que se enviarán las mismas credenciales utilizadas para la página actual.

- `headers: {'Content-Type': 'application/json'}`: Los encabezados HTTP son piezas de información que se envían junto con una solicitud HTTP o una respuesta HTTP. Los encabezados proporcionan información adicional sobre la solicitud o la respuesta, como el tipo de contenido que se está enviando, la longitud de los datos, el tipo de codificación, etc. Los encabezados también se pueden utilizar para enviar información personalizada entre el cliente y el servidor. Por ejemplo, un encabezado personalizado podría utilizarse para enviar un token de autenticación con una solicitud HTTP. En este caso, se está utilizando un encabezado `Content-Type` con el valor `application/json`, lo que indica que los datos que se enviarán en el cuerpo de la solicitud estarán en formato JSON.

- `body: JSON.stringify(data)`: Esto establece el cuerpo de la solicitud. En este caso, se está utilizando el método `JSON.stringify()` para convertir el objeto `data` a una cadena JSON que se enviará como el cuerpo de la solicitud.



Todos estos valores se utilizan para configurar y enviar una solicitud HTTP `POST` utilizando JavaScript, con la opción de enviar los datos en formato JSON.

Es importante tener en cuenta que las opciones de solicitud pueden variar según el lenguaje de programación o la biblioteca que se esté utilizando para realizar la solicitud HTTP. Pero en general, estas opciones se utilizan para configurar y enviar una solicitud HTTP con la información necesaria para que el servidor pueda procesarla correctamente.

###  ¿Qué es un origen cruzado?

El término "origen cruzado" (en inglés "cross-origin") se refiere a una situación en la que una página web (o una aplicación web) intenta acceder a recursos (como archivos, scripts, imágenes, etc.) que se encuentran en un servidor o dominio diferente al de la página web. Por ejemplo, si la página web se carga desde el dominio `www.example.com` y trata de acceder a recursos en el dominio `api.example.com`, esto se considera una situación de origen cruzado.

Los navegadores web modernos limitan el acceso de una página web a recursos de origen cruzado por motivos de seguridad. Sin embargo, en algunos casos, es necesario permitir el acceso a recursos de origen cruzado (por ejemplo, cuando se utiliza una API de terceros). En estos casos, se utiliza la técnica de "Compartición de recursos de origen cruzado" (CORS) para permitir que la página web acceda a los recursos de otro dominio.

La técnica de CORS utiliza encabezados HTTP especiales para indicar que un recurso determinado puede ser compartido entre diferentes orígenes. El servidor web debe configurar sus respuestas HTTP para incluir estos encabezados y permitir que se compartan los recursos.

Por lo tanto, CORS se utiliza para permitir que una página web acceda a recursos de origen cruzado de forma segura. Si los encabezados CORS no están configurados correctamente, el navegador web bloqueará la solicitud debido a motivos de seguridad.

### Usemos POST

Crea un archivo `post.js` dentro de `src/promise`:  

```bash
╰─ tree -L 3
.
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── callback
    │   ├── challenge.js
    │   └── index.js
    ├── playground
    │   ├── 07.callback.js
    │   └── 12.promise.js
    └── promise
        ├── challenge.js
        ├── index.js
        └── post.js 👈👀🔥
```

`post.js`
```js
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

function postData(urlApi, data) {
	const response = fetch(urlApi, {
		method: 'POST',
		mode: 'cors', // permiso, por defecto va estar siempre en cors
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json' // necesario indicar que es lo que se está enviando (data tipo json)
		},
		body: JSON.stringify(data) // el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
	});

	return response;
}

// estructura obligatoria de como debe ser el objeto que se quiere crear con POST
const data = {
	"title": "New Product 212",
	"price": 212,
	"description": "A description",
	"categoryId": 1,
	"images": ["https://placeimg.com/640/480/any"]
}

// podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
	.then((response) => response.json())
	.then(data => console.log(data))
	.catch((err) => console.log(err));
```

Si todo va bien podremos ver en la consola un objeto, pero si algo falla debería salir un 400 (Bad Request).

```js
Valores añadidos a la Fake API: 
https://api.escuelajs.co/api/v1/products/448
https://api.escuelajs.co/api/v1/products/212
```

### Usemos PUT 

```js
//Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10// no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate =>console.log(dataUpdate));
```

### Usemos DELETE 

```js
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors', //no es necesario
        credentials: 'same-origin',//no es necesario
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 271; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });
```


### [Imágenes Aleatorias](https://picsum.photos/)

Simplemente, agregue el tamaño de imagen deseado (ancho y alto) después de nuestra URL y obtendrá una imagen aleatoria.

```
https://picsum.photos/200/300
```

Para obtener una imagen cuadrada, simplemente agregue el tamaño.

```
https://picsum.photos/200
```


- [Concepto de Cors](https://javascript.info/fetch-crossorigin)
- [Documentación Cors](https://developer.mozilla.org/en-US/docs/Glossary/CORS)


## 15. Funciones asíncronas

`async` y `await` son características que permiten escribir código asíncrono de manera más legible y fácil de entender. `new Promise()` es una forma de crear una promesa en JavaScript que se utiliza comúnmente para manejar tareas asíncronas.

Una promesa es un objeto que representa un valor que puede no estar disponible de inmediato, pero que eventualmente se resolverá (con un valor) o se rechazará (con un error). Cuando se crea una promesa con `new Promise()`, se le pasa una función que define qué debe hacer la promesa. Esta función toma dos argumentos, `resolve` y `reject`, que son funciones que se llaman para resolver o rechazar la promesa, respectivamente.

Por ejemplo, la siguiente función devuelve una promesa que se resuelve después de 1 segundo con el valor "¡Hola Mundo!":

```js
function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("¡Hola Mundo!");
    }, 1000);
  });
}
```

Para utilizar `async` y `await` con una promesa, primero se define una función `async` que contiene la lógica asincrónica. En este caso, llamamos a la función `sayHello()` y esperamos a que se resuelva usando la palabra clave `await`. Veamos un ejemplo:

```js
async function printHello() {
  const message = await sayHello();
  console.log(message);
}

printHello(); 
// esperará 1 segundo y luego imprimirá "¡Hola Mundo!"
```

En este ejemplo, la función `printHello()` llama a `sayHello()` y espera a que se resuelva antes de imprimir el mensaje en la consola. La palabra clave `await` hace que la función `printHello()` espere a que se resuelva la promesa devuelta por `sayHello()` antes de continuar con la siguiente línea de código.

`async` y `await` son útiles porque permiten escribir código asíncrono de manera más legible y fácil de entender, ya que se parece más a código sincrónico. También hacen que sea más fácil manejar errores, ya que se pueden utilizar bloques `try` / `catch` para capturar y manejar errores.

### Ejemplo de la clase:  

```js
const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('3. Async!!!'), 2000)
			: reject(new Error('Error!'));
	});
}

// async es para el cuerpo de la función
const anotherFn = async() => {
	// await estará dentro de la lógica a implementar
	const something = await fnAsync();
	console.log(something);
	console.log('4. Hello!!!');
}

console.log('1. Before');
anotherFn();
console.log('2. After');

// Obtenemos: 
1. Before
2. After
// Despues de 2 segundos...
3. Async!!!
4. Hello!!!
```


```js

```


```js

```

```js

```