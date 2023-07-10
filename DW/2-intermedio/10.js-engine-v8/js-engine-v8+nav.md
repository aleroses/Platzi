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

Usarémos el navegador Google Chrome y la consola de este. La consola se muestra con la combinación de teclas `F12` / `Ctrl + Shift + I` / `Cmd+Opt+I` o clic derecho e “Inspeccionar” en tu navegador preferido.

## 2. Historia de JavaScript

En 1991 nace HTPP y en 1992 nace HTML.

- **NetScape :** Fue el segundo navegador de internet, en este punto era muy difícil poder encontrar las paginas web porque no había un buscador que indexara, al igual las paginas eran estáticas y casi sin nada de estilo y es ahí donde [NetScape](https://es.wikipedia.org/wiki/Netscape_Communications_Corporation) estaba viendo que los usuarios estaban pidiendo una evolución en la web y es por eso que nace JavaScript.

El fundador de JavaScript es Brendan Eich pero antes de ser bautizado como JS el primer lenguaje que desarrollo fue :  

1. Mocha (1995) = se desarrollo aproximadamente entre 2-3 semanas este lenguaje intentaba darle un poco de interacción a las paginas
    
2. LiveScript (1995) = dado a que mocha fue desarrollado muy rápido tuvo que evolucionar a LiveScript en el mismo año para esta evolución había mas interacción en las paginas.
    
3. JavaScript (1995) ❤️ = A finales del año es que nace JS su nombre fue mas comercial ya que Java se estaba convirtiendo en un lenguaje popular entonces solo lo acompañaron con Script por ello es JavaScript.  
   

- EMAC (1997) = Vino a poner Orden a los lenguajes que iban saliendo (era muy peligroso tener muchos estándares de programación trabajando en el navegador) y es por ello donde decidieron bautizar a JavaScript como lenguaje que corre en el Navegador.
    
- V8 (2008) = Engine de JS que corre en el navegador
    
- EMACScript = Es una especificación estandarizada por ECMA Internacional, Fue creada para estandarizar JS y par ayudar a fomentar múltiples implementaciones independientes.


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

### Event Loop

Tarea asignada para mover del Tas Queue al Stack, solo si el Stack esta vacío

#### Memory Heap (Montón)

- Donde se almacena los valores de las variables y las funciones
- Se destina un espacio en memoria para las variables.
- La información en el memory heap, No se guarda de manera lineal

**EL MONTÓN**

El primer contenedor en el entorno, que también forma parte del motor V8 JS Engine, se denomina “montón de memoria”. A medida que el motor JS V8 encuentra variables y declaraciones de funciones en el código, las almacena en el **montón** .

#### Call Stack (Pila) = El ultimo que entra es el primero en salir

- Como se mandan a llamar las variables y las funciones
- Las tareas en el callstack se apilan de abajo hacia arriba.
- Se llaman de la última que mandamos a llamar hacia abajo
- En la base de la pila reposa el Global Object
- Si una función llama a otra, la pone encima de la pila.
- Se ejecuta una tarea a la vez (sincronía)
- Una vez que se van ejecutando las tareas se van retirando de la pila
- Al ejecutar todas las tareas se retira el Global object.

**LA PILA**

El segundo contenedor en el entorno se denomina “pila de llamadas”. También es parte del motor JS V8. Cuando JS Engine encuentra un elemento procesable, como una llamada a función, lo agrega a la **pila** .

#### Task Queue (Cola) = El primer que entra es el primero en salir

Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar el **stack** (Pila). El **stack** debe de esta vacío.

#### MicroTask Queue (Micro Tareas)

Las promesas tienen otra forma de ejecutarse y una prioridad superior

#### Web APIs

JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File reader, DOM

Node: fs, https

#### Garbage Collection

limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas.

![](https://i.postimg.cc/L5pgfgVK/3-v8.png)

http://latentflip.com/loupe/

[🔥Event Loop: Entender el asincronismo en JavaScript](https://www.youtube.com/watch?v=7GeDNQRQy0Y)  


## 4. 8, el JavaScript Engine de Chrome

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

Pero, si declaras una variable y le asignas un valor en la misma linea el resultado es diferente:

```javascript
var nombre = "Platzi";
function nombre(){}

typeof nombre; // Output: "string"
```

Esto es porque JavaScript hace hoisting solo de la declaración de la variable. JavaScript trata la declaración y asignación en una sola linea como dos pasos, por lo que si escribimos:

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
