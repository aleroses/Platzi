# Curso de JavaScript Engine (V8) y el Navegador


## 1. Requisitos antes de empezar

Como requisito, antes de comenzar deberás haber completado el Curso Básico de JavaScript.

En este curso aprenderás:

- Qué es un JavaScript Engine
- Qué es y cómo funciona V8
- Qué es el Entorno y Objeto Global
- Hoisting y cómo evitarlo
- Cómo funciona el JIT Compiler
- Sincronía y Asincronía de JavaScript
- Qué es el Memory heap y Call Stack
- Qué es un Stack overflow
- Cómo funciona JavaScript Runtime
- Asegúrate de hacer los ejercicios.

Profesor: Diego De Granda (Software Engineering Manager en Platzi)

### ¿Qué herramienta vas a utilizar?

Utilizaremos el navegador Google Chrome y la consola de este. La consola se muestra con la combinación de teclas `F12` / `Ctrl + Shift + I` / `Cmd + Opt + I` o clic derecho e “Inspeccionar” en tu navegador preferido.

## 2. Historia de JavaScript

En 1991 nace HTTP y en 1992 nace HTML.

- **NetScape :** Fue el segundo navegador de internet, en este punto era muy difícil poder encontrar las paginas web porque no había un buscador que indexara, al igual las paginas eran estáticas y casi sin nada de estilo y es ahí donde [NetScape](https://es.wikipedia.org/wiki/Netscape_Communications_Corporation) estaba viendo que los usuarios estaban pidiendo una evolución en la web y es por eso que nace JavaScript.

El fundador de JavaScript es Brendan Eich pero antes de ser bautizado como JS el primer lenguaje que desarrollo fue :  

1. Mocha (1995) = se desarrollo aproximadamente entre 2-3 semanas este lenguaje intentaba darle un poco de interacción a las paginas
    
2. LiveScript (1995) = dado a que mocha fue desarrollado muy rápido tuvo que evolucionar a LiveScript en el mismo año para esta evolución había mas interacción en las paginas.
    
3. JavaScript (1995) ❤️ = A finales del año es que nace JS su nombre fue mas comercial ya que Java se estaba convirtiendo en un lenguaje popular entonces solo lo acompañaron con Script por ello es JavaScript.  
   

- ECMA (1997) = Vino a poner Orden a los lenguajes que iban saliendo (era muy peligroso tener muchos estándares de programación trabajando en el navegador) y es por ello donde decidieron bautizar a JavaScript como lenguaje que corre en el Navegador.
    
- V8 (2008) = Engine de JS que corre en el navegador
    
- ECMAScript = Es una especificación estandarizada por ECMA Internacional, Fue creada para estandarizar JS y para ayudar a fomentar múltiples implementaciones independientes.


Un breakpoint importante fue v8 creado en 2008, es un engine que corre en el navegador. 

Por otro lado, en 2009 se crea Node.js para la parte del Backend, luego por medio de los frameworks se desarrollaron más herramientas hasta que en 2015 se crea ES6 que no es un nuevo lenguaje sino, JavaScript con nuevas cosas.  

ECMAScript, es una especificación estandarizada por ECMA international. Fue creado para estandarizar JavaScript y para ayudar a fomentar múltiples implementaciones independientes.

## 3. ¿Cómo funciona el JavaScript Engine?

Cuando se escribe código en JavaScript, es necesario **transformarlo en código que entienda el computador, este código es denominado _Machine Code_** o código de máquina. El motor del navegador es el encargado de crear _Machine Code_ a partir de instrucciones escritas en JavaScript.

Cada navegador tiene su propio motor, sin embargo, el que más impacto ha tenido sobre el lenguaje, es **Engine V8** desarrollado por Google y que lo encuentras en navegadores como Google Chrome y Microsoft Edge. Engine V8 también es el motor utilizado por Node.js para trabajar con JavaScript del lado del servidor.

### Qué es y cómo funciona JIT compiler

El proceso en el que el motor V8 transforma código JavaScript en _Machine Code_ se denomina **_Just in Time Compiler_** o _JIT compiler_.

![Proceso que realiza el motor de JavaScript](https://i.postimg.cc/pXPnL8TK/3-enginev8.png)

Una vez que Chrome recibe el código o los scripts JavaScript en la página web, el motor JS V8 comienza a analizarlo. Primero, analizará parcialmente el código comprobando errores de sintaxis. Si no encuentra ninguno, comienza a leer el código de arriba a abajo. Su objetivo final es convertir el código JavaScript en código de máquina que la computadora pueda entender. Pero antes de comprender qué hace exactamente con el código, debemos comprender el entorno en el que se analiza.

### Memory Heap (Montón)
	
- Donde se almacena los valores de las variables y las funciones
- Se destina un espacio en memoria para las variables.
- La información en el memory heap, No se guarda de manera lineal u organizada. 

> Los objetos son asignados a un montículo (Espacio grande en memoria no organizado)

**EL MONTÓN**

El primer contenedor en el entorno, que también forma parte del motor V8 JS Engine, se denomina “montón de memoria”. A medida que el motor JS V8 encuentra variables y declaraciones de funciones en el código, las almacena en el **montón** .

### Call Stack (Pila) = El ultimo que entra es el primero en salir

- Como se mandan a llamar las variables y las funciones
- Las tareas en el call stack se apilan de abajo hacia arriba.
- Se llaman de la última que mandamos a llamar hacia abajo (LIFO: Last-in, First-out)
- En la base de la pila reposa el Global Object
- Si una función llama a otra, la pone encima de la pila.
- Se ejecuta una tarea a la vez (sincronía)
- Una vez que se van ejecutando las tareas se van retirando de la pila
- Al ejecutar todas las tareas se retira el Global object.

> Apila de forma organizada las instrucciones de nuestro programa. 

**LA PILA**

El segundo contenedor en el entorno se denomina “pila de llamadas”. También es parte del motor JS V8. Cuando JS Engine encuentra un elemento procesable, como una llamada a función, lo agrega a la **pila** .

```js
/* Ejemplo */

function main() {
    console.log('Hola');

    setTimeout(() => {
        console.log('Mundo!!');
    }, 0);

    console.log('Otro mensaje');
};

main(); 
```

El orden de ejecución del código de ejemplo es el siguiente: 

- Primero llamamos a nuestra función `main()` y se coloca en la pila.
- Luego coloca el `console.log` en la misma pila y lo ejecuta inmediatamente, esto hace que se elimine de la pila. 
- Llega al `setTimeout()` y decide dejarlo hasta el final, sin importar el tiempo que se le esté dando. 
- Llega al ultimo `console.log` lo coloca en la pila y lo ejecuta inmediatamente.
- Por ultimo ejecuta el `setTimeOut`, terminando con todo el proceso. 
- Al no tener mas procesos, nuestra función `main()` sale de la pila. 

### Task Queue (Cola) = El primer que entra es el primero en salir

Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar el **stack** (Pila). El **stack** debe de estar vacío.

Esto trabaja junto al **Event Loop** usando el sistema FIFO (First in, first out)

### Event Loop

Tarea asignada para mover del Task Queue (cola de tareas) al Stack, solo si el Stack esta vacío.

### MicroTask Queue (Micro Tareas)

Las **promesas** tienen otra forma de ejecutarse y una prioridad superior

### Web APIs

JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File reader, DOM.

Node: fs, https.

### Garbage Collection

Limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas.

De manera grafica todo el proceso se ve así:  
![](https://i.postimg.cc/L5pgfgVK/3-v8.png)

http://latentflip.com/loupe/

[🔥Event Loop: Entender el asincronismo en JavaScript](https://www.youtube.com/watch?v=7GeDNQRQy0Y)  


## 4. V8, el JavaScript Engine de Chrome

V8 es un **motor de código abierto para JavaScript creado por Google**. Cada navegador tiene su propio motor, pero con la evolución rápida de V8, otros navegadores han optado por integrarlo. Por este motivo, Microsoft Edge u Opera han decidido migrar a V8 para mejorar el rendimiento de su software.

> V8 es el motor de JavaScript que corre en el navegador de Chrome y no es el único motor de JavaScript que existe.

### ¿Cuál es el objetivo de V8?

Este fue creado por la necesidad de Google de desarrollar su aplicación Google Maps de la manera más óptima posible, ya que los motores antiguos no permitían ejecutar aplicaciones con alta demanda computacional. Node.js utiliza el motor V8 para trabajar con JavaScript del lado del servidor de manera estable.

Cuando se logro correr de la mejor manera google maps se comienza a trabajar mas fuerte en V8 para que JavaScript pudiera correr aplicaciones de todo tipo de manera robusta, incluso V8 puede ser implementado en el back end con Node.

## 5. Profundizando en el Engine

Una vez que se ejecuta un archivo en el navegador, **el motor de JavaScript genera un entorno global** _(Global environment)_. El entorno global hace tres cosas muy importantes:

- Genera un **objeto global** llamado `window`.
- Genera un **contexto** llamado `this`. En un contexto global `this` es igual a `window`.
- **Ambiente de ejecución**.

Después de generar el entorno global, comienza el **contexto de ejecución** _(Execution context)_ **donde corre el código de JavaScript utilizando un _Stack_ de tareas**, apilándolas una por una, en la cuál la última tarea añadida será la primera en ejecutarse.

Una vez que el motor de JavaScript está interactuando con el navegador, realiza los siguientes procesos:

- **Parser**: genera un parseo del documento completo mediante palabras claves.
    
- **AST:** Se crea a partir de los nodos que genera el _parser_. Es una estructura de árbol que representa tu código sintácticamente. Puedes utilizar la página [AST Explorer](https://astexplorer.net/){target="_blank"} para ver cómo funciona.
    
- **Intérprete:** El intérprete recorre el AST y **genera _Bytecode_** (lenguaje que entiende la computadora y no es binario) basado en la información que contiene. Sin embargo, si el intérprete detecta que puede optimizar tu código, no genera _Bytecode_, sino que genera un proceso de optimización que consiste en el _profiler_ y _compiler_.
    
- **Profiler y compiler:** El _profiler_ monitorea y mira el código para optimizarlo. El _compiler_ optimiza ese código y genera _machine code_ (lenguaje binario). En esta etapa, por la intención de optimizar el código, también genera errores como el _Hoisting_.
    

![Engine JavaScript](https://i.postimg.cc/s29HF701/5-engine.png)  

[🔥JavaScript engine](https://filisantillan.com/blog/js-engine/#javascript-engine)   
![](https://i.postimg.cc/Dfs8S9cm/5-profundizando-en-engine.jpg)

### Bytecode vs Machine code 

En el contexto de V8, Bytecode y Machine code son dos tipos diferentes de códigos que se generan en diferentes etapas del proceso de compilación y ejecución del código JavaScript.

Bytecode es un código intermedio que se genera a partir del código fuente JavaScript durante la fase de compilación. El bytecode se compila en tiempo de ejecución y se ejecuta en la máquina virtual de V8. El bytecode se utiliza para acelerar la ejecución del código JavaScript, reduciendo el tiempo necesario para compilar y optimizar el código en tiempo de ejecución. El bytecode de V8 se llama "Bytecode Ignition".

Por otro lado, el Machine code es el código de bajo nivel que se ejecuta directamente en la CPU. Durante la fase de optimización, V8 compila el bytecode en un código de máquina altamente optimizado que se ejecuta directamente en la CPU. El código de máquina se llama "TurboFan". El código de máquina es mucho más rápido que el bytecode, ya que se ejecuta directamente en la CPU sin la sobrecarga de la máquina virtual.

En resumen, Bytecode es un código intermedio generado durante la fase de compilación y se ejecuta en la máquina virtual de V8, mientras que el Machine code es el código de máquina altamente optimizado generado durante la fase de optimización y se ejecuta directamente en la CPU. El bytecode se utiliza para acelerar la compilación y la optimización del código en tiempo de ejecución, mientras que el código de máquina se utiliza para obtener el máximo rendimiento durante la ejecución del código JavaScript.


- Bytecode: Código parecido a assembly, es portátil y es ejecutado por una virtual machine. 
- Machine code: Es binario y son instrucciones especificadas a una arquitectura o procesador. 

## 6. Ejemplo de Objeto global y hoisting

Si abres la consola del navegador, con la combinación de teclas `Ctrl + Shift + I` o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).

Ejecuta la palabra `window`, se desplegará un objeto en el que se encuentran todas las funcionalidades de JavaScript, por ejemplo ejecuta `window.console.log("Hola")` tendrá el mismo comportamiento que `console.log("Hola")`.

Si ejecutas `this` observarás que muestra el mismo objeto que `window`, esto es porque en un contexto global, estos dos objetos son iguales. Pero en otros contextos, como el de una función o una clase, `this` cambia.

```js
window == this
//true
```

### Qué es hoisting

_Hoisting_ es un término para describir que las **declaraciones de variables y funciones son movidas a la parte superior del scope** más cercano: scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript que intenta ayudar a optimizar el código, pero en este caso provoca errores y resultados no esperados. En el caso de las variables solo sucede cuando son declaradas con `var`.

Mas info: 
- Si llamamos una variable antes de ser declarada, el compiler crea la variable en la memory heap y la inicializa como undefined
- En el caso de las funciones es distinto, primero mandamos a llamar a las funciones antes de ejecutarlas.
- El hoisting a veces funciona pero no tenemos control de las variables que se van a cambiar
- Si llamamos a una constante (const) antes de inicializar retorna un error de tipo: Uncaught ReferenceError, que corresponde a variables que son referenciadas pero no pudieron ser capturadas

### Hoisting en variables declaradas con var

En el siguiente código, la respuesta del `console.log` es `undefined`, porque al hacer referencia a una variable que no está declarada, el motor de JavaScript crea esta variable antes de la declaración y le asigna un valor de `undefined`.

```js
console.log(nombre) // undefined
var nombre = "Andres"
```

```js
var nombre = undefined
console.log(nombre)
nombre = "Andres"
```

Lo adecuado es evitar utilizar `var` para declarar las variables con `let` o `const`, ya que estas últimas el proceso de optimización que realiza el motor de JavaScript no generará variables con el valor de `undefined` antes de su declaración.

Veamos otro ejemplo: 

```javascript
console.log(nombre);
apellido();

var nombre = "Diego";

function apellido(){
	console.log("De Granda");
}
```

El motor de JavaScript lo interpreta de la siguiente manera:

```javascript
var nombre = undefined;
function apellido(){
	console.log("De Grada");
}

console.log(nombre);
apellido();
nombre = "Diego";
```

Si te preguntas que coloca más arriba, ¿Las variables o las funciones?  
La respuesta es las variables. Probemos esto:

```javascript
var nombre;
function nombre(){}

typeof nombre; // Output: "function"
```

¿Y si colocamos primero la función y luego la variable?

```javascript
function nombre(){}
var nombre;

typeof nombre; // Output: "function"
```

Pero, si declaras una variable y le asignas un valor en la misma línea el resultado es diferente:

```javascript
var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
```

Esto es porque JavaScript hace hoisting solo de la declaración de la variable. JavaScript trata la declaración y asignación en una sola línea como dos pasos, por lo que si escribimos:

```javascript
var nombre = "Platzi";
```

El motor lo interpreta así:

```javascript
var nombre = undefined;
nombre = "Plazi";
```

Así que cuando escribimos:

```javascript
var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
```

Como lo interpreta el motor de JavaScript es así:

```javascript
var nombre = undefined;
function nombre(){}

nombre = "Platzi";

typeof nombre; // Output: "string"
```

Es decir que “se deja atrás” la asignación.  
Obviamente ningún desarrollador debería de escribir código así de confuso, esto es solo para saber como funciona JavaScript y su engine, ese conocimiento te hace un mejor desarrollador y te destaca de entre otros.

📌Nota: Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, asignándolas en memoria dentro de un contexto de ejecución.

## 7. Memory Heap

El comportamiento de JavaScript es síncrono, es decir, solamente puede **ejecutar una tarea a la vez**. Esto puede ser beneficio o perjudicial dependiendo los casos. Por ende, para ejecutar cada tarea, JavaScript se organiza en dos estructuras de datos: el _Memory Heap_ y el _Call Stack_.

### Qué es Memory Heap

El _memory heap_ **consiste en una manera desorganizada o aleatoria de guardar la información**, ya sea valores, funciones, entre otros. ¿Recuerdas el componente de tu computador que guarda información de manera aleatoria? Exactamente, la RAM es donde **guardará esta información mediante una referencia o dirección**.

- [Memoria y cómo se guardan los datos.](https://platzi.com/clases/2156-estructuras-datos/33722-memoria-y-como-se-guardan-los-datos/)

Por ejemplo, declaras una variable `nombre` y le asignas un valor, esta se guardará en la memoria RAM utilizando una referencia que manejará el _memory heap_. De esta manera, el Engine sabrá que variable mostrar cuando sea utilizada después de la declaración, **pidiendo la referencia de memoria al _memory heap_ y buscándola en la memoria RAM**.

![Representación del memory heap para almacenar datos](https://i.postimg.cc/NLhZwWQ3/7-memory-heap.png)

#### Valores por referencia

¿Qué pasa con estructuras más complejas, como arrays u objetos? Pues que estas se guardarán en una dirección de memoria diferente a sus valores, pero referenciadas entre sí. Por ejemplo, mira el siguiente código y piensa cuál es el resultado:

```js
const objeto1 = {valor: 1}
const objeto2 = objeto1
objeto2.valor = 2

console.log(objeto1.valor)
console.log(objeto1 === objeto2)
```

Primero mostrará el valor `2` y después `true`. La explicación es que la referencia de ambos objetos a sus valores es la misma, por lo que si modificas un valor, también lo harás en ambos.

![Parámetros de referencia para dos objetos](https://i.postimg.cc/Hn8FRp10/7-parametros-referencia.png)


📌Nota: Las variables se almacenan en el Memory Heap. El call satck es un espacio en memoria para ejecuccion de funciones. Closure es a lo que te refieres que despues de una ejecucion podemos tener referencia a los valores retornados. El call stack no almacena referencias a objetos o variables.

## 8. Qué es Call Stack

El _Call Stack_ consiste en ordenar las funciones que son invocadas de arriba hacia abajo, donde **la última tarea será la que se ejecute primero**. Una vez se ha guardado la información del archivo o programa, es momento de ejecutarlas.

En primer lugar, guarda todas las funciones o declaraciones en _anonymous_ que representa el objeto global.

![Representación del Call Stack](https://i.postimg.cc/BbFHcfTw/8-call-back.png)

Y así sucesivamente. Va agregando y quitando ejecuciones en el orden correspondiente. Es por eso que JavaScript realiza una tarea a la vez.

### Ejemplo de ejecución

El siguiente código contiene tres funciones `hello`, `world` y `main` que ya han sido guardadas en el _memory heap_ al declararlas y están listas para ejecutarse.

![Ejemplo de ejecución función main](https://i.postimg.cc/wBWX9VxF/8-function-main.png)

Al llegar a la función `main`, el _Engine_ lo coloca en el _Call Stack_ para ejecutarlo. Pero dentro se encuentran más invocaciones a otras funciones, por ende, primero ejecutará la que esté más arriba hasta ejecutarlas todas.

![Ejemplo de ejecución función hello](https://i.postimg.cc/HLW0GKmV/8-function-hello.png)

Al invocar la función `hello`, el _Engine_ lo coloca en el _Call Stack_. La función `console.log` también es una función, por lo que el **Engine** también lo colocará en el _Call Stack_.

![Ejemplo de ejecución función console.log dentro de hello](https://i.postimg.cc/XYkKzWTR/8-function-console-log.png)

Una vez ejecutada la función `console.log` el _Engine_ lo sacará del _Call Stack_.

![Ejemplo de ejecución función hello finalizada](https://i.postimg.cc/9MKy7Q77/8-function-hello-finalizada.png)

Como la función `hello` ya ha sido ejecutada, el Engine lo sacará del _Call Stack_ para seguir ejecutando la función `main`.

![Ejemplo de ejecución función world](https://i.postimg.cc/ZRCrndCm/8-function-world.png)

Y así sucesivamente, hasta que termine de ejecutarse `main`, o todas las tareas en el _Call Stack_. Cuando no existan tareas en el _Call Stack_, el programa habrá finalizado.

> Anonymous: Cuando ejecutamos un programa en JavaScript la primer función que se agrega a la pila (Call Stack) es una función anónima que engloba a todo el programa, es algo así como el hilo principal del programa y cuando esta función salga de la pila significa que se termino la ejecución del programa principal.

### Debugger 

Para acceder al debugger del navegador y hacer pruebas de Call Stack puedes abrir una página en blanco usando `about:blank`, luego presiona `Ctrl + Shift + I`, te vas a `Sources >> Snippets` creas un `+ New snippet`, por último agregas el código que quieres probar. Recuerda guardar cambios usando `Ctrl + S`

```js
function restarDos(num){
    return num - 2;
}

function calcular(){
    const sumarTotal = 4 + 5;
    return restarDos(sumarTotal);
}

debugger;

calcular();
```

![](https://i.postimg.cc/ZRCMKMr5/9-debugger.png)

[🔥 1. La PILA DE EJECUCIÓN (Call Stack) de JAVASCRIPT](https://www.youtube.com/watch?v=ygA5U7Wgsg8&t=384s)


## 9. Garbage Collection

**_Garbage Collection_** es un proceso automático realizado por el motor de JavaScript que consiste en **eliminar aquellos objetos que no tienen referencias o son inalcanzables para el contexto de ejecución**, a través del algoritmo _mark-and-sweep_ (marcado y barrido).

![Algoritmo marcado y barrido](https://i.postimg.cc/R00PXDpL/9-garbage-collection.gif)

El _Garbage Collection_ es importante para liberar aquellas referencias en memoria y no exista un desbordamiento en las tareas _(Stack overflow)_. Por ejemplo, un ciclo infinito que provoque el colapso de la página web.

### Algoritmo marcado y barrido

El algoritmo marcado y barrido _(mark-and-sweep)_ hace **referencia a cuando un tipo de dato se vuelve inalcanzable para el programa**. El motor de JavaScript empieza por la raíz, la cual es el Objeto Global, a medida que el programa avanza los objetos van creando o borrando referencias a sus raíces.

Cuando un objeto se queda sin ninguna referencia, se dice que el objeto es inalcanzable, en este momento el _Garbage Collection_ libera el espacio que usaban las variables u objetos cuando aún tenían una referencia.

Desde 2012, los navegadores utilizan un _Garbage Collection_, que ha ido recibiendo mejoras en su implementación constantemente.

### Ejemplo de _Garbage Collection_

En este punto de tu estudio, ya conocerás los métodos `shift` y `pop` de _arrays_, puede que los hayas entendido como eliminar el primer y último elemento de un _array_, respectivamente.

Pues no funcionan exactamente como “eliminar”, sino como **extraer** el primer y último elemento, pero si **no lo guardamos en una variable, el _Garbage Collection_ lo eliminará**.

```js
const array = [1,2,3,4,5]
// Extrae el último elemento, guarda la referencia en la variable lastElement.
const lastElement = array.pop() 
console.log(lastElement) //5
```

```js
const array = [1,2,3,4,5]
// Extrae el último elemento, pero no existe la referencia, entonces el Garbage Collection lo eliminará
array.pop() 
console.log(array) // [1,2,3,4]
```

Por lo tanto, el que elimina ese valor, es el _Garbage Collection_.

Otro ejemplo: Creamos un objeto con algunos datos que serán almacenados en memoria pero inmediatamente cambiamos esos datos por otro, esto hace que los datos anteriores sean limpiados por el _Garbage Collection_. 

```js
var car = {
	marca: "Totoya",
	modelo: "2020"
}

car = "Mio"
```

## 10. Qué es Stack overflow

**_Stack overflow_** es un término empleado para referirse al **desbordamiento de tareas** en el _Call Stack_ del motor de JavaScript. Esto ocurre por ciclos infinitos, funciones recursivas sin control, cambios de estado continuo, o algún programa que exceda las tareas que puede ejecutar el navegador.

![Representación gráfica de Stack overflow](https://i.postimg.cc/CKCyhVNH/10-stack-overflow.png)

Anteriormente, los navegadores no estaban preparados para manejar un _stack overflow_, **por lo que la página web colapsaba y cerraba la aplicación**. En la actualidad, si el navegador encuentra este problema, detiene la ejecución del código evitando que colapse la página web.

![Error del navegador debido al stack overflow](https://i.postimg.cc/MpQ2LBfL/10-ejemplo.png)

_[Stack overflow](https://es.stackoverflow.com/)_ también es un sitio de **preguntas y respuestas de ingeniería de software**, uno de tus mejores aliados en tu carrera de estudios.

![](https://i.postimg.cc/DZQZsDc7/10-web-stack-overflow.png)

## 11. JavaScript Runtime o tiempo de ejecución 

Recordando el material de [Call Stack](https://platzi.com/clases/1798-javascript-navegador/25685-call-stack/), se mencionó que JavaScript realiza una tarea a la vez en el _Call Stack_, esto se denomina código síncrono o _Single thread_. **La sincronía puede presentar problemas en operaciones que demoren demasiado**.

![Representación de síncronismo en JavaScript](https://i.postimg.cc/76yBmBpB/11-runtime.png)

![](https://i.postimg.cc/zBbgH5d6/11-runtime2.png)

### Ejemplo práctico

Por ejemplo, imagina que JavaScript es una tienda de tacos, tú trabajas ahí y solamente puedes hacer una preparación a la vez. Llegan tres personas que ordenan un taco, una torta y un taco, y tienes que atenderlos en ese orden.

El primer taco probablemente se demore 5 minutos. Luego, la preparación de la torta es más compleja, por lo que posiblemente demorará 20 minutos. En este punto, el tercer cliente se ha hartado de la espera y se retira. Este proceso no es óptimo.

```js
console.log("taco")
console.log("torta")
console.log("taco")
```

En Internet sucede lo mismo, si un usuario no observa información en tu página web en los primeros cinco segundo, se retirará.

Entonces, una solución sería ejecutar las tareas más lentas (torta) después de las más rápidas (tacos). Y esta solución se llama **asincronismo** y JavaScript tiene una manera de manejarlo.

[JavaScript — Cómo funciona el Runtime Environment — JRE)](https://mauriciogc.medium.com/javascript-c%C3%B3mo-funciona-el-runtime-environment-jre-8ebceafdc938)

## 12. Qué es la asincronía en JavaScript

**La asincronía de JavaScript consiste en delegar algunas tareas** para que las ejecute el navegador, una vez esas tareas están terminadas entran en otra estructura llamada _Callback queue_. En el _Callback queue_ la primera tarea que entra, es la primera en salir. ¿Cómo salen? Mediante el _Event Loop_.

El _Event loop_ es el encargado de preguntar al _Call Stack_ si ya ha terminado todas sus tareas. Entonces, si y solo si el _Call Stack_ está vacío, el _Event loop_ moverá las funciones que están en el _Callback queue_ para que se ejecuten.

Para entender mejor este término, retomemos el ejemplo de los tacos, pero ahora tienes un compañero. Entonces tú delegas la tarea de preparar la torta a otra persona, mientras realizas los tacos.

Luego de 5 minutos por cada tarea, entregas los tacos a los clientes correspondientes. Después de 10 minutos necesitas la torta, entonces preguntas ¿ya está lista la torta? Tu ayudante te entrega la torta y se lo entregas. En total fueron 20 minutos y todos los clientes recibieron su pedido. Así funciona la asincronía en JavaScript.

🌮 - **call stack** : _el taquero (órdenes rápidas)_  
👨‍🍳 - **web APIs** : _la cocina_  
🌯 - **callback queue** : _las órdenes preparadas_  
💁‍♂️ - **event loop** : _el mesero_

![](https://i.postimg.cc/yxfRfnkw/11-runtime3.png)

### Asincronía en JavaScript

El proceso completo que sigue JavaScript se muestra en la siguiente imagen:

![Representación de la asincronía de JavaScript](https://i.postimg.cc/HW279KtP/12-representacion-asincronia.png)

Las **Web APIs son herramientas adicionales que te ofrece el navegador** para realizar peticiones, modificar el DOM, entre otras. Estas herramientas las puedes observar en el objeto global `window`.

### Ejemplo de asincronía

Rápidamente, la función asíncrona `setTimeout` consiste en ejecutar otra función en cierto tiempo. Recibe dos valores, la función a establecer un retraso y el tiempo en milisegundos.

Observa el siguiente código y piensa cuál será el resultado:

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 0);
const baz = () => console.log("Third");

bar(); // Lo envió a ejecutarse hasta el final
foo(); // Entró a foo, ejecutó el console.log y se eliminó del call stack
baz(); // Entró en baz, ejecutó y se eliminó 
```

El resultado es:

- Primero se muestra en consola `"First"`.
- Segundo se muestra en consola `"Third"`.
- Después de medio segundo, `"Second"`.

Esto es porque la función `bar` salió del _Call Stack_ para esperar asíncronamente un tiempo definido (0 segundos en este caso). Después tendrá que esperar (sin importar el tiempo establecido en `setTimeout`) hasta que se vacíe el _Call Stack_ para que el _Event loop_ le permita entrar nuevamente al _Call Stack_ para ejecutarse.

![Asincronía en JavaScript](https://i.postimg.cc/zXGHtjtD/12-asincronia.gif)

**Fuente:** [JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

### Callbacks, Promesas y Async/Await

El tema de asincronía en JavaScript es muy amplio, aún falta conocer los temas de _callbacks_, promesas y “async / await” (una estructura de las nuevas versiones de ECMAScript). Por lo que te recomiendo el [Curso de Asincronismo con JavaScript](https://platzi.com/cursos/asincronismo-js-2019/).


## 13. Recapitulación

**JavaScript** nació en 1995 por cuenta de la necesidad de interacción en la web y el paso del tiempo y logró estandarizar en todos los navegadores gracias al grupo ECMA.

Aún con sus mejoras del lenguaje, la naturaleza de JS de solo poder procesar una tarea a la vez. Además de los motores de JS, necesarios para interpretar el código JS y compilarlo a Byte code, tenían serias limitaciones al momento de ejecutar aplicaciones complejas como Google Maps, pero todo esto cambio en 2008 gracias al motor V8 V8 de Chrome.

### Temas 

- Qué es un JavaScript Engine 
- Qué es y cómo funciona V8
- Qué es el Entorno y Objeto Global 
- Hoisting y cómo evitarlo 
- Cómo funciona el JIT Compiler (Just In Time Compiler)
- Sincronía y Asincronía de JavaScript 
- Qué es Memory Heap y Call Stack 
- Qué es un Stack overflow 
- Cómo funciona JavaScript Runtime 

![](https://i.postimg.cc/L5pgfgVK/3-v8.png)



[Curso JavaScript Engine (V8)](https://platzi.com/cursos/javascript-navegador/).


## Examen 📌

<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. ¿Qué es un stack overflow?

	- 📌Es cuando tenemos más de las tareas de las que podemos procesar en el call stack.

2. El proceso de hoisting solo sucede con dos palabras reservadas de JavaScript, ¿Cuáles son?

	- 📌var y function


3. Al igual que window como objeto global, ¿Qué otro elemento se crea como referencia a este mismo objeto en el contexto global?

	- 📌Se crea la variable this, que hace referencia al objeto global window


4. ¿A qué nos referimos cuando decimos que JavaScript se comporta como "Asynchronous"?

	- 📌A que hay ciertas funciones que nos ayudan a que JavaScript pueda trabajar tareas de forma simultánea.

	Cuando decimos que JavaScript es "asynchronous" o asíncrono, nos referimos a que puede ejecutar tareas de forma simultánea sin bloquear el flujo de ejecución del programa. Esto es posible gracias al uso de callbacks, promesas y async/await, que permiten que las tareas se ejecuten en segundo plano mientras el programa continúa su ejecución.
	
	Es importante destacar que la asincronía en JavaScript no implica necesariamente el uso de múltiples procesadores o la GPU, sino más bien la capacidad de ejecutar tareas en segundo plano y continuar con otras tareas mientras se espera a que se completen las tareas asincrónicas.


5. ¿Qué significa AST?

	- 📌Abstract Syntax Tree

	El AST (Abstract Syntax Tree) es una estructura de datos que representa la estructura sintáctica de un programa de computadora. El AST se construye a partir del código fuente y se utiliza en muchas herramientas de desarrollo de software, como compiladores, intérpretes, analizadores de código, editores de código y linters.
	
	El AST es una representación abstracta del código fuente que se utiliza para analizar y manipular el programa en tiempo de compilación o en tiempo de ejecución. El AST está compuesto por nodos que representan las diferentes estructuras sintácticas del programa, como expresiones, declaraciones, bloques, entre otros. Cada nodo del AST puede tener cero o más nodos hijos, que representan las subestructuras sintácticas del programa.
	
	El AST es una herramienta fundamental en el análisis y manipulación de código fuente, ya que permite a los desarrolladores entender y modificar la estructura sintáctica del programa de forma programática.


6. ¿A qué nos referimos cuando decimos que JavaScript es "Synchronous"?

	- 📌 Nos referimos a que JavaScript solo puede procesar una tarea a la vez.

7. ¿Qué navegador inventó V8 Engine?

	- 📌 Chrome

8. El motor de JavaScript V8 es lanzado en el 2008.

	- 📌Verdadero

	El motor de JavaScript V8 fue lanzado por primera vez en el año 2008 por Google. Fue diseñado para mejorar significativamente el rendimiento de JavaScript en el navegador y fue utilizado inicialmente en Google Chrome. Desde entonces, V8 ha sido adoptado por otros navegadores, como Opera y Microsoft Edge, y también se utiliza en servidores a través de Node.js.
	
	V8 es un motor de JavaScript de código abierto y es conocido por su rendimiento y eficiencia. Utiliza técnicas de compilación just-in-time (JIT) para compilar el código JavaScript en código nativo de la CPU, lo que reduce significativamente el tiempo de ejecución y mejora el rendimiento. Además, V8 utiliza técnicas avanzadas de gestión de memoria, como la recolección de basura incremental, para reducir el impacto de la gestión de memoria en el rendimiento del programa.
	
	En resumen, V8 ha sido una contribución importante a la evolución de JavaScript y ha permitido que se utilice en una variedad de contextos, desde aplicaciones web hasta servidores.


9. ¿Cuál es el nombre del creador de JavaScript?

	- 📌Brendan Eich


10. ¿Qué función realiza el EventLoop?

	- 📌 Es una especie de "watcher" u observador que mueve las tareas del callback queue hacía el call stack una vez que está vacío para que sean ejecutadas.

11. ¿Qué es y qué hace un motor de JavaScript?

	- 📌 Es un intérprete, que compila código JavaScript a Bytecode.

	Un motor de JavaScript es un software que interpreta y/o compila el código JavaScript en un entorno de tiempo de ejecución, como un navegador web o un servidor. Su tarea principal es ejecutar el código JavaScript y proporcionar el comportamiento definido por el lenguaje.
	
	La opción c es parcialmente correcta, ya que un intérprete es una de las formas en que un motor de JavaScript puede ejecutar el código JavaScript. Sin embargo, la afirmación de que compila el código JavaScript a Bytecode no es precisa para todos los motores de JavaScript.
	
	En lugar de compilar a Bytecode, la mayoría de los motores de JavaScript utilizan técnicas de compilación just-in-time (JIT) para compilar el código JavaScript en código de máquina nativo. Esto mejora significativamente el rendimiento del código JavaScript.

12. ¿Cuál fue el nombre de la 1er versión de JavaScript?

	- 📌Mocha

	JavaScript fue originalmente llamado "Mocha" durante su desarrollo por Brendan Eich en Netscape Communications Corporation en 1995. Posteriormente se cambió el nombre a "LiveScript" antes de su lanzamiento oficial como "JavaScript" junto con Netscape Navigator 2.0 en septiembre de 1995.


13. ¿Cuál es el navegador que creó JavaScript?

	- 📌Netscape

	El navegador que creó JavaScript fue Netscape Navigator. 
	
	JavaScript fue creado por Brendan Eich en 1995 mientras trabajaba para Netscape Communications Corporation. En ese momento, Netscape Navigator era uno de los navegadores más populares en el mercado y JavaScript fue diseñado como un lenguaje de scripting para ser utilizado en el navegador. Desde entonces, JavaScript se ha convertido en uno de los lenguajes de programación más populares y se utiliza en muchos otros contextos fuera del navegador, como servidores, dispositivos móviles y aplicaciones de escritorio.

14. ¿Qué es el Memory Heap?

	- 📌 Es el lugar donde se guardan objetos y funciones en bloques de memoria de forma arbitraria y sin un orden, los cuales pueden ser usados múltiples veces a través de una referencia única.

	El Memory Heap (o "montón de memoria" en español) es una región de memoria en el motor de JavaScript donde se almacenan los objetos y funciones creados durante la ejecución del programa. Los objetos y funciones se almacenan en bloques de memoria de forma arbitraria y sin un orden específico, lo que significa que no hay garantía de que los objetos se almacenen en ubicaciones de memoria contiguas.
	
	Los objetos y funciones almacenados en el Memory Heap pueden ser referenciados múltiples veces a través de una referencia única. Cuando un objeto o función ya no es referenciado por ninguna parte del programa, el recolector de basura del motor de JavaScript libera la memoria ocupada por ese objeto o función para que pueda ser utilizada por otros objetos y funciones.
	
	Es importante destacar que el Memory Heap es diferente a la pila de llamadas (call stack) en el motor de JavaScript, que se utiliza para realizar un seguimiento de las llamadas a funciones en el programa.

15. ¿Con qué propósito se crea JavaScript?

	- 📌 Para poder crear páginas más dinámicas

16. Cuando hablamos de window, ¿a qué nos referimos?

	- 📌Al objeto global

	Cuando hablamos de `window` en JavaScript, nos referimos al objeto global que representa la ventana del navegador en la que se está ejecutando el código JavaScript. Es un objeto incorporado en el lenguaje JavaScript que proporciona acceso a muchas características del navegador, como la barra de direcciones, los historiales de navegación, las cookies, entre otros.
	
	El objeto `window` se utiliza comúnmente en el desarrollo web para manipular la ventana del navegador y su contenido. Por ejemplo, se puede utilizar para abrir nuevas ventanas del navegador, cambiar la ubicación actual de la ventana, crear alertas y confirmaciones, y acceder a los elementos del DOM (Document Object Model) de la página web.
	
	Es importante destacar que `window` es un objeto global, lo que significa que se puede acceder a él desde cualquier parte del código JavaScript en la página web.

17. ¿Cuál fue la aplicación web que tuvo mayor provecho de V8 como motor de JavaScript?

	- 📌 Google Maps

18. ¿En qué año nace JavaScript?

	- 📌 1995


19. ¿Qué es hoisting?

	- 📌 Es el proceso que realiza el motor de JavaScript de colocar las declaraciones de variables y funciones hasta arriba de nuestro código, almacenándolas así previamente en memoria dentro de un contexto de ejecución.
	
	El hoisting es un comportamiento en el motor de JavaScript que hace que las declaraciones de variables y funciones se muevan al principio del ámbito actual antes de que se ejecute el código. Este proceso ocurre durante la fase de compilación del motor de JavaScript, antes de que se ejecute el código.
	
	En el caso de las variables, solo la declaración de la variable se mueve al principio del ámbito actual, no la asignación. Esto significa que si se intenta acceder a una variable antes de que se le asigne un valor, la variable tendrá un valor de "undefined".
	
	En el caso de las funciones, la declaración completa de la función se mueve al principio del ámbito actual, incluyendo el cuerpo de la función. Esto significa que se puede llamar a una función antes de que se defina en el código.
	
	Es importante tener en cuenta que solo se mueven las declaraciones de variables y funciones, no las asignaciones o expresiones. Por lo tanto, se recomienda declarar todas las variables y funciones al principio del ámbito para evitar errores y confusiones causados por el hoisting.


20. ¿Cómo se llama el algoritmo que nos ayuda a limpiar nuestra memoria cuando tenemos valores de variables que ya no estamos utilizando?

	- 📌 Mark and Sweep

	El algoritmo que se utiliza en los motores de JavaScript para limpiar la memoria de los valores de variables que ya no se están utilizando se llama "Mark and Sweep" (marcar y limpiar). Este algoritmo es un tipo de recolección de basura que busca y elimina los objetos que ya no son accesibles por el programa.
	
	El proceso de "Mark and Sweep" se lleva a cabo en dos etapas: la primera etapa es la marca (mark), en la cual el motor de JavaScript determina qué objetos se están utilizando actualmente y los marca para su posterior eliminación. La segunda etapa es la limpieza (sweep), en la cual se eliminan los objetos que no han sido marcados en la etapa anterior.
	
	El algoritmo de "Mark and Sweep" es utilizado por muchos motores de JavaScript, como V8 (utilizado en Google Chrome y Node.js), SpiderMonkey (utilizado en Mozilla Firefox) y JavaScriptCore (utilizado en Safari y otros navegadores de Apple). Este algoritmo ayuda a que el programa no consuma más memoria de la necesaria y evita la posibilidad de fugas de memoria (memory leaks).

</details>