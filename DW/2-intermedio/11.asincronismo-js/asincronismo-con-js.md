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
const XMLHttppRequest = requiere('xmlhttprquest'); 
const XMLHttppRequest = require('xmlhttprequest').XMLHttpRequest;
// API en mayúscula porque es una referencia que no va a cambiar
const API = 'https://api.escuelajs.co/api/v1'; 

// urlApi: no confundir y colocar API
functionfetchData(urlApi, callback){ 
	// Referencia a new XMLHttpRequest
	let xhttp = new XMLHttppRequest(); 

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
			}
		} else {
			const error = newError('Error' + urlApi);
			// Es null porque no se está regresando ningún dato
			return callback(error,null); 
		}
		}
	xhttp.send();
}
```



### Explicación paso a paso de la construcción de la función `fetchData`.

1. Primero debemos declarar e importar el paquete de [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), que nos permite utilizar objetos (XHR) para interactuar con servidores (en este caso la API de Platzi) para esto hacemos:

```
const XMLHttpRequest = require('XMLHttpRequest');
```

- Lo que hace aquí “[require()](https://nodejs.org/api/modules.html#requireid)” es importar el módulo del id que le pasemos, además puede importar JSON y archivos locales. Pero necesitamos trabajar con XMLHttpRequest para manipular la API.  
    |

1. Declaramos como constante el url de la API:

```
const API = 'https://api.escuelajs.co/api/v1/products';
```

1. Ahora es momento de iniciar con la función principal que en términos simples es:

```
function fetchData(urlApi, callback) {
}
```

- El parámetro ‘urlApi’ hace referencia a cualquier API con la cuál estemos trabajando, en este caso la FakeStore de Platzi.
- El segundo parámetro ‘callback’ es donde posteriormente vamos a pasar una función como argumento para poder controlar el flujo de información de la API.  
    |

1. Necesitamos alguna manera de poder manipular las solicitudes que haremos para consultar los datos, para ello vamos a crear un espacio en memoria (una variable) en donde guardar el objeto (XHR) que importamos y gracias a los métodos ya construídos nos será mil veces más fácil desarrollar nuestra funcíon.

```
let xhttp = newXMLHttpRequest();
```

- Si estas familiarizado con OOP ([Programación Orientada a Objetos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#object_basics)) sabrás entonces que esto no es más que un constructor vacío, de la misma forma que:

```
	 let perrito = newAnimal(); 🐶
	 let manzana = newFruta();  🍎
```

1. Muy bien, ya podemos utilizar nuestra variable ‘xhttp’ (en conjunto al callback) como un objeto para acceder y manipular la API. Primero debemos abrir una solicitud (un request) esto lo hacemos con el método ‘[.open()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)’

```
    xhttp.open('GET', urlApi, true);
```

- Ahora bien el primer parámetro es el tipo de solicitud que vamos a realizar, pudo haber sido “POST”, “PUT”, “DELETE”. Pero vamos a utilizar “GET” 😎
- El segundo parámetro es la url de la API a la cuál le vamos a realizar el request.
- Último y tercer parámetro recibe un booleano para indicarle si vamos a utilizar asíncronismo o no, tal simple como TRUE o FALSE según el caso.

---

> Todo bien hasta aquí ¿cierto?, toma un pequeño descanso para repasar todo lo que has aprendido, que lo siguiente es un poquito más complejo.

---

|

1. Vamos a hacer una función anónima para verificar que el request de los datos ha salido con éxito y en caso de un tener error hacer registro de éste. Para ello nos vamos a apoyar de la propiedad de ‘[.onreadystatechange](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)’ ésta llamará a la función cada que el [readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) cambie (readyState retorna el número del estado en dónde se encuentra el request)

```
xhttp.onreadystatechange = function(e){
}
```

- Ahora bien el ciclo de vida del readyState es el siguiente:  
    ![readyState](https://i.imgur.com/tds60G9.png)  
    Entonces debemos parar en ‘4’ cuando la operacion ha sido completada

```
	if (xhttp.readyState === 4) {
} ✅
```

- Una vez completado con éxito necesitamos saber que tipo de respuesta nos entregó el servidor, así que volvemos a verificar con un ’ if ’ la propiedad ‘[.status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status)’ según el tipo de respuestas:  
    ![](https://i.imgur.com/4opBaJk.png)  
    Entonces el if nos queda de la siguiente manera:

```
if (xhttp.readyState === 4) {
	if (xhttp.status === 200) {
	} ✅
} ✅
```

- ¡Ya comprobamos que tanto el request como el response hayan sido exitosos! Ahora podemos invocar nuestro callback (función por definir más tarde para manipular los datos)

```
if(xhttp.readyState === 4) {
	if(xhttp.status === 200) {
		callback(null, JSON.parse(xhttp.responseText));
	} ✅
} ✅
```

¿Y por qué tiene tantos parámetros el callback si aún nisquiera lo hemos definido? 🤔 Mira te explico:

- El primero vamos a utilizarlo en caso de que se presente un error, pero como ya hemos verificado eso podemos simplemente dejarlo como un ‘null’.
- En el segundo usamos la función ‘[JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)’ para convertir en datos que podamos controlar el texto que nos retorna la propiedad ‘[.responseText](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText)’ después de hacer el request.

Listo🥳, dejamos preparado nuestro callback sin errores y con la información “traducida” para cualquier momento en el que necesitemos usarla. Pero (sep, siempre hay un ‘pero’) ¿Y si el request no es exitoso?¿Qué va a pasar con nuestra función?😔

- Hay que regresarnos al primer if y utilizar la estructura de else para que en caso de haber un error registrarlo y enviarlo al callback (donde antes habiamos puesto ‘null’) y ahora pasar el null en la parte de los datos, ya que nunca pudo consultarlos.

```
if (xhttp.readyState === 4) {
	if (xhttp.status === 200) {
		callback(null, JSON.parse(xhttp.responseText)); ✅
	} ✅
} else ❌ {
		consterror = new Error('error' + urlApi);
		returncallback(error, null);
}
```

1. 🏆 ¡¡ Acabamos la función !! 🏆  
    Ya solo resta utilizar el método ‘[.send()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)’ después de procesar los datos para enviar el request al server (API)

```
xhttp.send();
```

---

### Cualquier feedback es bien recibido para complementar mis conocimientos y el de cualquiera que lea esto.

---

<h5>⚠️(BONUS)⚠️</h5>

Para no usar “Magic numbers” se pueden declarar los estados a verificar como constantes, les dejo mi código completo

```
const XMLHttpRequest = require('XMLHttpRequest');
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
            const error = newError('error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}
```

![Angel](https://static.platzi.com/media/avatars/avatars/angelduarte_7a25a88b-c512-4fb9-b2ad-addc65569966.jpg)

[angelduarte](https://platzi.com/p/angelduarte/)

10897



_La nueva forma de hacer peticiones a una API es el_[fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).




[Métodos y Propiedades del objeto XMLHttpRequest](http://dis.um.es/~lopezquesada/documentos/IES_1314/IAW/curso/UT7/libroswebajax/www.librosweb.es/ajax/capitulo7/metodos_y_propiedades_del_objeto_xmlhttprequest.html)
[Fakeapi](https://fakeapi.platzi.com/)