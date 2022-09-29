# Curso Básico de JavaScript
> **Diego De Granda** / [Software Engineering Manager en Platzi](https://platzi.com/profesores/degranda/)     
**@degranda10** en Twitter 


[Link al curso](https://platzi.com/cursos/basico-javascript/)


## 1. ¿Qué es JavaScript?

JavaScript es un lenguaje de programación dinámico que tiene la capacidad de ser utilizado en muchos dispositivos diferentes. Puede usarse en ordenadores personales, servidores web y teléfonos inteligentes. Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

JavaScript se emplea comúnmente para el desarrollo web front-end y más recientemente para algunos desarrollos back-end a través de frameworks como Node.js. o Next.Js. Tiene características como la programación orientada a objetos, funciones y herencia basada en prototipos.

### ¿Cómo nace JavaScript?

Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros. Fue creado por Brendan Eich en 1995 y se convirtió en un estándar oficial del World Wide Web Consortium (W3C) en 1997.

### ¿Por qué decimos que JavaScript es un lenguaje dinámico?

Corre directamente en la etapa de Runtime, sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores no se muestren sino hasta que se ejecuta el programa. Lo que se ve a primera vista, cuando se analiza el código, es muy probable que no sea lo que se va a obtener cuando el programa se ejecute.

JavaScript permite declarar (por ejemplo) variables cuyo valor (y tipo) solo se conocerá al momento de su ejecución en función de las condiciones dadas al momento de correrlo en un entorno real. En cambio, los lenguajes estáticos no compilarán en código ejecutable a menos que todos los valores (o tipos de valores) se conozcan por adelantado.

### ¿Por qué es débilmente tipado?

Porque los tipos de datos no están bien definidos en el lenguaje y permite, por ejemplo, operaciones entre numerosos y letras. Esto sucede porque el lenguaje asume tipos de datos que no necesariamente fueron los que se querían representar. Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc.). Ejemplo:

```
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```

### ¿Realmente es JavaScript un lenguaje interpretado?

Sí, y la razón es que el navegador lee línea por línea nuestro código, el cual le indica lo que tiene que ir haciendo, sin la necesidad de compilar. Todo esto es controlado por el motor de JavaScript V8 del navegador

### Qué significa que JavaScript es Backwards Compatible

Todas las funciones nuevas que salen para JavaScript no dañarán el trabajo ya hecho previamente, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está [Babel](https://platzi.com/blog/que-es-babel/), que permite usar las nuevas características del lenguaje, pero lo transforma a una versión que el navegador pueda entender.

_Aporte creado por Diego Martínez_


📌 Esta guía les ayudará muchísimo con este curso   
- [**30 Días de JavaScript**](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/readme.md)

✨ Utilizar [https://jsconsole.com/](https://jsconsole.com/)


❄ Lecturas recomendadas

- [Curso de JavaScript Engine (V8) y el Navegador](https://platzi.com/clases/javascript-navegador/)
- [GitHub - degranda/jsBasico-: Ejemplos del curso de JS básico](https://github.com/degranda/jsBasico-)

🎲

## 2. ¿Por qué JavaScript?

JavaScript tiene una **comunidad enorme** de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

- Si solo estuvieras interesado en trabajar **aplicaciones web** tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React, entre otros)

- Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder **construir aplicaciones nativas** como Android y IOS.

- Puedes construir **aplicaciones de escritorio** con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.

- También puedes trabajar en la parte del **Back-end** o **IOT **(Internet Of Things) es un concepto que se refiere a una interconexión digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.


¿Porque estudiar JavaScript?

```
- FRONT:        Angular, React y VUE
- BACK:         NodeJS
- MOVIL:        React Native (Apps de Android y IOS)
- WEB DESKTOP:  Electron
```


🔥 Sitios web basados en:

1.  Angular: [Forbes](https://www.forbes.com/)
2.  React: [Airbnb](https://www.airbnb.com/)
3.  Vue: [GitLab](https://about.gitlab.com/)

🔥 Aplicaciones basadas en React Native:

1.  [UberEats](https://www.ubereats.com/)
2.  [Discord](https://discord.com/)
3.  [Instagram](https://www.instagram.com/)  

Fuente: [Enlace](https://reactnative.dev/showcase)

🔥 Aplicaciones para Escritorio basados en Electron:

1.  Visual Studio Code
2.  WhatsApp
3.  Twitch  

[Ver más aplicaciones de Electron JS](https://www.electronjs.org/apps)

🔥 Compañías que usan Node.JS para parte de su backend:

1.  Netflix
2.  LinkedIn
3.  PayPal  

Fuente: [Enlace](https://blog.techmagic.co/companies-that-use-node-js-for-backend-how-do-big-players-benefit-from-it/)

📌 Indagar sobre WebAssembly❗

🎲

## 3. Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis

Existen 2 componentes importante en JS:       
- Valores o Datos: Almacenan información 
- Funciones: realizan acciones con la información. 

🔥 VALORES PRIMITIVOS (básicos):

- Números: 
	- 40 
- String: 
	- "Texto" 
- Booleanos: 
	- true
	- false 
- Vacíos o Empty value: 
	- null
	- undefined: cuando tenemos un valor faltante o un campo vacío. 

🔥 VALORES NO-PRIMITIVOS o VALORES TIPO OBJETO:    
- Array [ ] : 
	- [1,2,3] (son valores primitivos) 
- Valor tipo objeto { }: 
	- { name: "Platzi" }

El operador `typeof` **devuelve una cadena que indica el tipo del operando sin evaluarlo**. Operando es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo.

1.  `typeof _operando_`
2.  `typeof (_operando_)`

Esto lo podemos probar en el inspector de elemento apartado Consola:
- Control + Shift + i
- Clic derecho inspeccionar 

Tambien podemos probar este operador en Run JS 👇

📌 [Run JS](https://runjs.dev/) donde pueden escribir JavaScript sin tener que usar el navegador. 

![Typeof](https://i.postimg.cc/R0Kbr4DP/3-js-console-typeof.jpg)


✨ Si desean ver los resultados desde el mismo editor de texto Visual Studio Code, descarguen la extensión llamada **Quokka**.  [Ver explicación](https://platzi.com/comentario/3244006/)

❄ Lecturas recomendadas

- [Atom](https://atom.io/)
- [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
- [Sublime Text - A sophisticated text editor for code, markup and prose](https://www.sublimetext.com/)
- [GitHub - degranda/jsBasico-: Ejemplos del curso de JS básico](https://github.com/degranda/jsBasico-)

🎲

## 4. Variables en JavaScript

Una variable es la representación de un espacio en memoria que vamos a reservar para poder guardar un valor al momento de declararla.

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: **var**, **const** y **let.**


🔥 Diferencias entre **_var_, _const_ y _let_**:

1. **var**: Es una variable que puede cambiar su valor en un futuro y su alcance es global/local. Surgió en ECMAScript5.   
    Ejemplo:    

	```js
	var name = 'Jhony Lennon';
	var age = 28;
	// Suponemos que Lennon se equivoco de nombre y luego lo quiso cambiar
	name= 'John Lennon'; 
	```

	- Se puede re-inicializar:   
	```js
	// Inicializamos  
	var name = "Jhony Lennon"
	
	// Re-inicializar  
	var name = "John Lennon" 
	```  
	Es la misma variable con diferentes datos pero el último dato predomina. 

	- Se puede re-asignar:  
	```js
	// Inicializamos    
	var name = "Jhony Lennon"
	
	// Re-asignamos       
	name = "John Lennon"
	```

	- Su alcance es función global:     
	Inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

	**const** y **let** es la forma en que se declaran las variables a partir de ECMAScript 6


2.  **const**: Es una variable constante que no puede cambiar nunca su valor en un futuro.     
    Ejemplo:

	```js
	// Lennon ya no puede cambiar el valor de const name
	const name = 'John Lennon'; 
	```

	- No se puede re-inicializar:   
		Es una const única no puede haber otra inicializada con el mismo nombre. 
	```js
	const name = 'John Lennon';
		
	// No puede haber      
	const name = 'John Lennon';
	```

	- No se pude re-asignar:     
		Una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: 
	```js
	const name = 'John Lennon';

	// No puede ejecutarse     
	name = 'John Lennon';
	``` 

    - No es inmutable:     
	    No puede cambiar con objetos:


3.  **let**: Es una variable que puede cambiar su valor pero solo funciona en un bloque donde se declare **let**.  

	```js
	// let se puede cambiar por otro valor
	let age= 28; 
	let age = 20;
	```

    - No se puede re-inicializar:    
	    Es una const única no puede haber otra inicializada con el mismo nombre.      
	```js
	let name = 'John Lennon';
	
	// No puede haber      
	let name = 'John Lennon';
	```

    - Se puede reasignar:   
	    La variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: 
	```js
	let name = 'John Lennon';

	// Ahora la reasignamos     
	name = 'John Lennon';
	``` 

    - Su contexto es de bloque:     
	    Solo funciona dentro de un bloque {}, fuera de ello no.


😃 Tendremos dos **estados**, al momento de trabajar con **variables**:

Declarar una variable significa indicarle a la computadora que existe.   

```js
//Declarar
var name;
```

Inicializar una variable significa declarar una variable y guardar información en ella, todo en la misma línea de código.

```js
//Inizializar
name = "Lennon"; 
```

Existe la posibilidad de juntarlos en una sola línea:   

```js
var name = "Lennon";
```


🦄 **Var dejó de ser recomendable desde ECMAScript 6 ya que se podía reinicializar, reasignar y su alcance era global, por lo que se tenía poco control sobre la variable** ✨

![Variables](https://i.postimg.cc/T3D6tynF/4-variables.webp)

✨ **6 atajos de teclado en Windows** para optimizar nuestra fluidez en el escritorio.

- Fijar ventana en un lateral: 
	- Tecla Windows + Izquierda o Derecha (también puede ser usada con Arriba o Abajo)  
- Cambiar entre ventanas recientes: 
	- ALT + Tabulación  
- Vista de tareas: 
	- Tecla Windows + Tabulación  
- Crear nuevo escritorio virtual: 
	- Tecla Windows + CTRL + D  
- Cerrar escritorio virtual actual: 
	- Tecla Windows + CTRL + F4  
- Cambiar entre escritorios virtuales: 
	- Tecla Windows + CTRL + Izquierda o Derecha

Info extraída desde [aquí](https://www.xatakawindows.com/windows/6-atajos-de-teclado-en-windows-10-technical-preview-cortesia-de-microsoft)

🎲

## 5. Funciones en JavaScript

Las funciones son uno de los pilares fundamentales en JavaScript. Una función es un procedimiento en JavaScript, un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una función, debe definirla en algún lugar del ámbito desde el cual desea llamarla.

La declaración de una función consiste de la palabra reservada function, seguida por:

- El nombre de la función (opcional).
- Una lista de argumentos para la función, encerrados entre paréntesis y separados por comas.
- Las sentencias JavaScript que definen la función, encerradas por llaves.

Ejemplo de una función básica:  

```js
function areaCuadrado( lado ) {
    return lado * lado;
}

// Llamado de la función para su ejecución
areaCuadrado(5);
```

Existen diferentes tipos de funciones como lo son:

• Declarativas:     
Va a inicializar un valor y lo guardamos en memoria.  

```js
//Declarativas 
function miFuncion() {
	return 3;
}

miFuncion();
```


• Expresión o Anónimas:     
Vamos a crear una variable donde guardamos la función en memoria.  

Las funciones también necesitan parámetros que esperan recibir como valor para que la función pueda hacer algo.   

```js
//Expresión
var miFuncion = function(a,b) {  
	return a + b;
}

miFuncion();
```


• De Flecha:    
Las funciones que no tienen especificado el retorno con la palabra reservada `return`, regresarán `undefined`.

Existe un tipo de declaración en los parámetros de una función en el cual no se necesitan especificar el número de parámetros que se van a recibir, eso se hace de la siguiente manera:

```js
// Trabajar con los argumentos en una función de flecha
const imprimeArgumentos = function(...args) {
    return args;
};

imprimeArgumentos(10, true, false, "Alejandra", "Hola");
```


✨ Parámetros de la función: nos ayudan a generar cálculos o resultados de la función.

Código ejemplo:     

```js
// One
function saludarEstudiantes(estudiante){
	console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego");
```

```js
// Two
function sumar(a, b) {
	var resultado = a + b;
	return resultado; // a + b;
}

sumar(1, 2);
```

Ejemplos hechos en consola. ☝   

[Documentación Función](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

📌 Busca: Lista de palabras reservadas de JS


Es importante tener en cuenta que las Functions solo admiten hasta 255 argumentos y/o parámetros. Y la principal diferencia entre las Declarativas y las de Expresión: Es que las declarativas son definidas para usarse de forma posterior en cualquier momento de su llamado. Las de Expresión solo pueden ser invocadas hasta el momento posterior a su definición.

[**Fuente:**](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052)


❄ Tips:     
- En Windows el acento invertido se escribe con ALTGR + la tecla con que escribimos la llave de cierre o  alt + 96
- Usar **CTRL + R** para **reiniciar** la **consola** del **navegador**.
- Para poder saltar de línea en la consola del navegador presionan **_shift + enter_** 
- Con la tecla **_tab _** pueden desplazar el código a la derecha dentro de la función, algo nuevo para mi.

🎲

## 6. ¿Qué es una función declarativa y una expresiva?

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

### Funciones Declarativas:

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

```js
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

#### Expresión de función:

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```js
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

### Diferencias:

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las **funciones declarativas**, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

🔥 Hoisting       
Significa que podemos llamar a una función y definirla más abajo. 

```js
//Llamado arriba y declarado abajo
nombre("Diego"); 

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
```

✨ El profesor Sacha Lifzyc, del Curso de Fundamentos de JavaScript tiene un video en YouTube explicando que es el _Hoisting_. [Un recurso imperdible:](https://www.youtube.com/watch?v=uI6o97A4IrI)

🎲

## Quiz
1. Es la palabra clave que necesita una función para devolver una salida:
	- ✔ return

2. Además de la sintaxis ¿cuál es la principal diferencia entre una función declarativa y una expresión de función?
	- ✔ Podemos llamar una función declarativa antes de ser declarada.

3. En JavaScript es posible declarar e inicializar una variable en la misma línea:
	- ✔ Verdadero.

4. Son los tipos de datos primitivos que maneja JavaScript:
	- ✔ String, Number, Boolean, Null y Undefined

5. ¿En qué tipo de proyectos podemos utilizar JavaScript?
	- ✔ Frontend, backend, aplicaciones móviles, aplicaciones de escritorio y IoT.

6. ¿Por qué nace JavaScript?
	- ✔ Para darle interacción y dinamismo a los sitios web.

🎲

## 7. Scope

El que tengas acceso a una variable o no depende mucho de donde la declares e inicialices. A esto se le conoce como Scope y hay dos tipos, uno GLOBAL y otro LOCAL.

### Global 
Universo entero.    
Se puede acceder al scope global desde cualquier parte del código pero el scope global no puede acceder a lo que esta dentro del scope local. 

     
```js
//Variable global: 
var nombre = "Diego"; 👈👀 //global  

//Función global:     
function fun(){ 👈👀 //global 
	var apellido = "De Granda"; 
👉	return nombre + " " + apellido
}   //global ☝
```

Lo que está dentro de la función podrá tener acceso a la variable global.

### Local 
Cada Planeta.    
Las variables creadas dentro de una función solo son accesibles dentro de su propio mundo (función), no es visible para los demás mundos. El scope LOCAL si puede acceder a lo que esta en GLOBAL.

Función global con var local:     
```js
function fun(){
	var apellido = "De Granda"; 👈👀 //local
👉	return nombre + " " + apellido;
} // global ☝
```

Lo que está dentro de la función va a tener acceso a la variable local y a las variables globales.

✨ Resumen: Lo que está en local puede acceder a lo que está en global pero lo que está en global no puede acceder a lo que está en local.

Código ejemplo:      
```js
//Scope global 
var miNombre = "Diego"; 

//Scope global 
function nombre(){ 
	//Scope local
	var miApellido = "De Granda"; 
	console.log(miNombre + " " + miApellido); 
} 

//Retorna "Diego De Granda"
nombre();

//Desde local se tiene alcance a la variable miNombre pero global no tiene acceso a miApellido.
```

📌 Scope: Alcance

🎲

## 8. Hoisting

El **Hoisting** es un proceso del compilador de JavaScript, que consiste en que la _declaración de las variables_ y las _funciones_ son llevadas al inicio del código, sin importar su posición, para su procesamiento, sin embargo, la inicialización de las variables no es llevada al inicio del código para su compilación, sino solo su declaración, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el código antes de haber llegado a su inicialización, lo cual nos suele dar una variable con valor **_undefined_**, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta después de su ejecución.

```js
var miNombre;  // Declaración
miNombre = "Diego"; // Inicialización
```

🔥 Código ejemplo: Variables   

```js
console.log(miNombre);

var miNombre = "Diego";
```

La salida de este código seria el siguiente:

```js
undefined
```

Y la explicación es la siguiente:   
El navegador al tener que imprimir algo en pantalla y darse cuenta que esa variable no está declarada ni inicializada, genera en la parte superior la declaración e inicialización de dicha variable de la siguiente manera:

```js
var miNombre = undefined;

console.log(miNombre);
```

Por tal razón nos da undefined como resultado.

🔥 Código ejemplo:  Variables     

Error de hoisting que siempre se comete   
```js
var miNombre = undefined;

console.log(miNombre + " Soy ese hoisting");

miNombre = "Diego";
```

Resultado:     
`undefined Soy ese Hoisting`    
y luego...    
`Diego`

🔥 Código ejemplo: Funciones     

```js
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Diego";
```

El output de este código seria el siguiente:

```js
Hola undefined
```

Debido a que como lo hemos dicho, la variable a pesar de no estar declarada ni inicializada previamente, se tomo en cuenta y se asigno en memoria, sin embargo, el compilador no la inicializo y se le dio el valor de _undefined_, y con ese valor se ingreso a la función. Finalmente después de correr la función e imprimir el valor asignado automáticamente (`undefined`) se le asigno el valor real definido por nosotros.

Este comportamiento se puede entender fácilmente si se comprenden estos dos puntos esenciales:

-   Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
-   La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

En base al segundo punto, se cometió el error de usar la variable antes de inicializarla, aún así el compilador la asigna en memoria al declararla, pero no puede inicializarla por lo que el valor real es asignado hasta después.

Básicamente por pasos, lo que hizo el compilador fue esto:

Tenemos el código así:

```js
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Diego";
```

1.  El compilador toma las funciones y variables y las “sube” en el código, sin inicializar variables:

```js
var nombre;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

var nombre = "Diego";
```

2.  Le asigna memoria a la variable y le da el valor de _undefined_ al suceder la asignación de memoria

```js
var nombre = undefined;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

nombre = "Diego";
```

Y como hemos visto, la variable se asigna como _undefined_ y posteriormente se utiliza al llegar a la línea:

```js
saludos()
```

Pues ahí lo que hace es ejecutar la función que ya fue procesada, pero con un valor de la variable que aun no se le asigno, quedando como _undefined_.

3.  Después de correr la función, le asigna el valor correcto a la variable ya declarada:

```js
var nombre = "Diego";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();
```

Pero ya es demasiado tarde, pues la función ya fue ejecutada.

✨ **_Es por eso que se tiene como buena practica declarar e inicializar tanto variables como funciones al inicio de nuestro programa, sin importar donde sean utilizadas, pues de esta manera se evita usarlas antes de ser inicializadas._**

Debemos saber que el hoisting solo sucede con las palabras claves **var** y **function**, por lo tanto esto nos dice que solo se da en las versiones de ECMAScript 5 o Inferiores, ya que en la version 6 y superiores se permite la declaración de variables con **let** y **const**, que son dos nuevas variables que no activan hoisting.

- [🔥🕺🏼 JavaScript Visualized: Hoisting](https://dev.to/lydiahallie/javascript-visualized-hoisting-478h)
- [¿Qué es el hoisting?](https://anamartinezaguilar.medium.com/qu%C3%A9-es-el-hoisting-327870f67b36)
- [Explicación Hoisting](https://www.youtube.com/watch?v=uI6o97A4IrI)

🎲

## 9. Coerción

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:  

```js
4 + "7" = "47"
4 * "7" = 28
2 + true = 3
false - 3 = -3
```

- Coerción implícita   
	Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.  

```js
//Concatenación
var a = 4 + "7" 

typeof a
//Salida: "string"
```

```js
//Js supone que el "7" es un número
var b = 4 * "7";

typeof b
//Salida: "number"
```

- Coerción explicita   
	Es cuando obligamos a que cambie el tipo de valor.

```js
var c = 20;
var d = c + "";

typeof(d);
//Salida: "string"
```

```js
var e = 20;
var f = String(e);

typeof(f);
//Salida: "string"
```

```js
var g = String(20);
var h = Number(g);

typeof(h);
//Salida: "number"
```

🔥 ParseInt vs Number

- ParseInt: 
	Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado.     
	Ejemplo:  
	
	```js
	parseInt(“123hui”) 
	
	//Salida: 123
	```  

- Number: 
	Busca convertir toda la cadena en un número, por lo que al encontrarse con un elemento que no sea digito nos dará como resultado NAN.    
	Ejemplo:     
	
	```js
	Number(“123hui”) 
	
	//Salida:NaN
	```


✨ `parseInt` en este caso puede parsear “123” porque están empezando en el string, porque de otra manera si “123” está después de “hui” el resultado sería NaN= Not-A-Number.  

Ej:     
`parseInt(“123hui”) = 123`    
`parseInt(“hui123”) = NaN`    

❄ Además de realizar las conversiones mencionadas, también convierte los números que se encuentran en otros sistemas de numeración como los binarios(base 2), octal(base 8), hexadecimal(base 16) a base 10 que el sistema de numeración normal utilizando la sintaxis  
numeroEnBase10 = parseInt(numero,base)

```js
valor = parseInt(“7b”,16) = 123
```


❄ Como dato extra, en JavaScript tenemos 8 tipos de datos únicamente en 2020:

- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol

🎲

## 10. Valores: Truthy y Falsy

Usamos la función de JS que es **_`Boolean()`_** dentro del paréntesis colocamos el valor y nos dice si el mismo el False o True.

🔥 _**Falsy**_

-   Boolean() 
	sin ningún valor es false
-   Boolean(0) 
	false
-   Boolean(null) 
	false
-   Boolean(NaN) 
	false // NaN es Not and Number
-   Boolean(Undefined)
	false
-   Boolean(false) 
	false
-   Boolean("") 
	false

🔥 _**Truthy**_

-   Boolean(1) 
	true //cualquier numero que no sea igual a cero es true
-   Boolean(“a”) 
	true
-   Boolean(" ") 
	true // siendo un espacio el valor es true
-   Boolean([])
	true // un array nos da un true
-   Boolean({}) 
	true // un objeto nos da el valor de true
-   Boolean(function() {}) 
	true //una función también es true
-   Boolean(true) 
	true

Todo esto lo vamos a usar en condiciones para validar si es verdadero o falso para ejecutar cierta acción.

_**Enlaces a documentación en Mozilla de Truthy y Falsy:**_  
- [Glossary Falsy](https://developer.mozilla.org/es/docs/Glossary/Falsy)  
- [Glossary Truthy](https://developer.mozilla.org/es/docs/Glossary/Truthy)


✨ En este punto me gustaría dejar la definición de varios tipos de datos raros que tiene JS por si aún no se han entendido bien:   

1.  **NaN**: En JS significa **Not a Number** y quiere decir que esa operación necesita de dos números o más para poder operarse.
2.  **Undefined**: Undefined es un valor especial de JavaScript que existe cuando no se le asigna un valor a una variable. Es decir, la variable si existe o ha sido creada pero no se le ha asignado ningún valor. (Su valor es indefinido).
3.  **Null**: null es cuando algo no existe. (De plano no existe para nada y ya esta). 😄

🎲

## 11. Operadores: Asignación, Comparación y Aritméticos.

### Operador de asignación

|Símbolo |Descripción|
|--------|-----------|
|=       |operador de asignación|

```js
var a = 1;
```

### Operadores aritméticos

|Símbolo        |Descripción|
|---------------|-------------------------|
|+              |operador suma este se utiliza para concatenar dos cadenas de texto.|
|-              |operador resta             |
|*              |operador de multiplicación |
|/              |operador de division       |
|%              |operador de modulo         |
|**             |operador de potenciación   |

También se les conoce como operadores binarios. por que toman dos valores y generan un resultado.

```js
3 + 2 //5
50 - 10 //40
10 * 20 //200
20 / 2 // 10
"Diego " + "De Granda" // Diego De Granda
var edad = 40; 
	edad++ //Incrementa en 1
	edad += 2 //Incrementa en 2
```

### Operadores lógicos

|Símbolo        |Descripción        |
|---------------|-------------------|
|!              |NOT niega un valor |
|&&             |AND                |
|❕❕             |OR                 |

Los dos ❕❕ en realidad significan esto, `||`. Markdown entra en conflicto al hacer la tabla así que le coloque esos emojis.😊

```js
!false //No es falso: true
a && b //Debe cumplirse a "y" b
a || b //Debe cumplirse a "o" b
```

### Operadores de comparación

|Símbolo        |Descripción|
|---------------|-------------------------|
|==             |igual que                |
|===            |estrictamente igual que  |
|> or >= or >== |mayor o mayor igual que  |
|< or <= or <== |menor o menor igual que  |
|!= or !==      |diferente que            |

Por especificar el concepto de “estrictamente igual”, añadiría la aclaración de que **== compara valor** incluso entre tipos diferentes y **=== compara tipo y valor**

```js
3 == "3"; //true
3 === "3"; //false📌
5 < 3; //false
5 > 3; //true
5 <= 6; //true
5 >= 6 //false
```


#### ❄Lecturas recomendadas

- [Expressions and operators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [GitHub - degranda/jsBasico-: Ejemplos del curso de JS básico](https://github.com/degranda/jsBasico-)

🎲

## Quiz

1. ¿Qué diferencia hay entre comparar con "'==" y "==="?
	- ✅ "==" compara valores. "===" compara valores y tipo de dato.

2. Cuál es la naturaleza de los valores booleanos?
	- ✅ true y false.

3. ¿En qué consiste la coerción explícita?
	- ✅ En obligar cambiar el tipo de una variable a otra.

4. ¿Qué valor se asigna por defecto a las variables cuando caen en hoisting?
	- ✅ undefined.

5. En el scope local de una función puedo usar variables:
	- ✅ Variables del scope global y locales de esa función.

🎲

## 12. Condicionales: If, Else, else if

Son un conjunto de reglas para validar si algo es verdadero o falso y podamos generar ciertas acciones de acuerdo al resultado de la condición.

### Tipo de Condicionales:

#### Condicional “if”:  
La estructura sería:

```js
if() { 
    
}
```

-   Dentro de los paréntesis () se evaluaría si algo es verdadero o falso.
-   Dentro de las llaves {} se encuentra la tarea a generar si la condición es verdadera.
-   Si lo que se está evaluando resulta falso, lo que está dentro de las llaves no se ejecuta, lo ignora.

_Ejemplo:_

```js
var saludo = true;

//Valida que la condición es true para procesar el código interno
if(saludo) {  
    console.log('Hola');
}

//Imprime: Hola
```

```js
if(false) {  
    console.log('Hola');
}

//Imprime: undefined
```

#### Condicional “if … else”:  
La estructura sería:

```js
if() { 
    
} else {

}
```

-   Dentro de los paréntesis () se evaluaría si algo es verdadero o falso.
-   Dentro de las primeras llaves {} se encuentra la tarea a generar si la condición es verdadera.
-   Si lo que se está evaluando resulta falso, lo que está dentro de las primeras llaves no se ejecuta, lo ignora, pero se ejecuta lo que está dentro de las llaves de **_else_**, sería el _default_ del _if_.

 _Ejemplo:_

```js
var saludo = false; 

//Si la condición resultó verdadera
if(saludo) {
    console.log('Hola');  
} else { //Si la condición resultó falsa
    console.log('Soy falso');
}

//Imprime: Soy falso
```

#### Condicional “else if”:  
La estructura sería:

```js
if() { 
    
} else if (){

} else {

}
```

-   Dentro de los primeros paréntesis () se evaluaría si algo es verdadero o falso.
-   Dentro de las primeras llaves {} se encuentra la tarea a generar si la primera condición es verdadera.
-   Si lo que se está evaluando resulta falso en la primera condición **_if_**, lo que está dentro de las primeras llaves no se ejecuta, queda ignorado, pero se evalúa la segunda condición **_else if_**.
-   Si dentro de los paréntesis del **_else if_** resulta verdadero, se ejecuta lo que está dentro de las llaves {}, de ser falso sería el _default_ y se ejecutaría la tarea del último **_else_**.

_Ejemplo:_

```js
//Cambia el valor de la edad para ver los distintos resultados
var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
    //Esta condición es verdadera, se ejecuta.
} else if(edad > 18) { 
    accion = 'Puede votar'   
    //Esta condición no es verdadera, no se ejecuta.
} else {
    accion = 'Aun no puede votar'
    //En caso ninguna de las anteriores sea verdadera
    //por defecto, se ejecutara está condición. 
}

console.log(accion);
//Imprime: Puede votar, será su 1ra votación
```


📌 Recuerda: Puedes anidar muchos else if

#### Operador ternario:  
La estructura sería:

```js
condition ? true : false; 
```

-   Inicialmente se encuentra **_condition_**, ahí se coloca la condición a evaluar.
-   Después del signo de cierre de interrogación **_?_** se encuentra la tarea a ejecutar si resulta verdadera la condición evaluada.
-   Después del signo de dos puntos **_:_** se encuentra la tarea a ejecutar de resultar falsa la condición evaluada.

 _Ejemplo:_

```js
var numero = 1; 
var resultado = numero === 1 ? 'Soy un 1' : 'No soy un 1';

console.log(resultado);  
//Dado que numero es igual a 1, imprime: "Soy un 1"
```

```js
var numero = 2; 
var resultado = numero === 1 ? 'Soy un 1' : 'No soy un 1';

console.log(resultado);  
//Dado que numero no es igual a 1, imprime: "No soy un 1"
```

#### ⚡ **RETO DEL JUEGO PIEDRA, PAPEL O TIJERA** ⚡ 🪨📄✂️

##### Solución de marigabirc
```js
// 2022, 8 de Mayo
// autora: marigabirc
// Juego Piedra - Papel - Tijera

let papel = 1;
let tijera = 2;
let piedra = 3;

function juego(movimiento_jugador) {
    let movimiento_computadora = Math.ceil(Math.random()*3);
 
    let resultado = movimiento_jugador == 1 && movimiento_computadora == 3 || movimiento_jugador == 3 && movimiento_computadora == 1 ? movimiento_jugador < movimiento_computadora ?  "Ganaste :D" : "Perdiste :(" : movimiento_jugador == movimiento_computadora ? "Empate :)" :movimiento_jugador > movimiento_computadora ?  "Ganaste :D" : "Perdiste :(";
 
    movimiento_jugador = movimiento_jugador == 1 ? "papel" : movimiento_jugador == 2 ? "tijera" : "piedra"; 
    
    movimiento_computadora = movimiento_computadora == 1 ? "papel" : movimiento_computadora == 2 ? "tijera" : "piedra"; 
    
     console.log(`Tú: ${movimiento_jugador}, Computadora: ${movimiento_computadora}, ${resultado}`);  
}

juego (piedra);
```

-   Usé condicionales con el **_operador ternario_**.
-   Para generar la jugada de la computadora, usé el método **_Math.random()_** que arroja un número aleatorio entre 0 a 1, pero como quiero que sean solo los números 1, 2 o 3 al multiplicarlo por 3 y aplicar el método **_Math.ceil()_** aleatoriamente cada vez que juegue con la computadora se puede obtener:

```js
let papel = 1
let tijera = 2
let piedra = 3
```

_**TIP:**_ además de la opción de **_inspeccionar_** se puede correr el código en el siguiente enlace: [OnlineJavaScriptCompiler](https://www.programiz.com/javascript/online-compiler/)

La siguiente imagen muestra al lado izquierdo el código y al darle al _botón_ **Run** al lado derecho aparece la salida del código ejecutado:  

![ide_online.png](https://static.platzi.com/media/user_upload/ide_online-87738e32-6756-40f2-ba16-f522692d4648.jpg)

##### Solución personal (Básico)🦄
```js
var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";  

function jugada(player, machine) {
	console.log(`🔥Jugada: Player = ${player} / Machine = ${machine}\n`);

    if (player === machine) {
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Empate`);
    }else if (player === piedra && machine === papel){
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Gana Machine`);
    }else if (player === piedra && machine === tijeras){
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Gana Player`);
    }else if (player === papel && machine === piedra){
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Gana Player`);
    }else if (player === papel && machine === tijeras){
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Gana Machine`);
    }else if (player === tijeras && machine === piedra){
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Gana Machine`);
    }else if (player === tijeras && machine === papel){
        console.log(`✨Player = ${player} vs ✨Machine = ${machine} : Gana Player`);
    }
}


//Cambia el orden para ver diferentes resultados
jugada(piedra, tijeras);


/*
Respuestas:
1.- piedra y piedra = empate
1.2.- piedra y papel = gana papel - rep2.2📌
1.3.- piedra y tijeras = gana piedra - rep3.1🔥

  
2.- papel y papel = empate
2.2.- papel y piedra = gana papel - rep1.2📌
2.3.- papel y tijeras = gana tijeras - rep3.2🟣

  
3.- tijeras y tijeras = empate
3.1.- tijeras y piedra = gana piedra - rep1.3🔥
3.2.- tijeras y papel = gana tijeras - rep2.3🟣

Tenemos:
Empates = 3
Gana piedra = 2
Gana papel = 2
Gana tijeras = 2
*/
```

#### 🦄 Math   
Este reto se pudo haber hecho con la función `Math`, la cual nos permite generar números aleatorios.   

🔥 Math.random()     
Genera números aleatorios entre 0 (incluido) y 1 (no incluido).   

Ejemplo:   

```js
function generar(){
	let num = Math.random();
	console.log(num);
}

generar()
```

Para generar números mas grandes, multiplicar por 10, 100 o 1000.

```js
function generar(){
	let num = Math.random()*10;
	console.log(num);
}

generar()
```

🔥 Math.floor / parseInt    
Si quiero generar números aleatorios enteros, utilizo el método `floor` o la función `parseInt`

```js
function generar(){
	let num = Math.floor(Math.random()*10); //3
	console.log(num);
}

generar()
```

```js
function generar(){
	let num = parseInt(Math.random()*10);
	console.log(num);
}

generar()
```

🔥 Math.round    
Este método redondea un numero a su valor entero mas cercano.

Ejemplos: 5.8 = 6    |   5.2 = 5

```js
function generar(){
	let num = Math.round(Math.random()*10);
	console.log(num);
}

generar()
```

🔥 setInterval
Esta sentencia genera números aleatorios de manera automática en bucle infinito 

```js
function generar(){
	let num = Math.floor(Math.random()*10);
	console.log(num);
}

setInterval(generar, 100);
```

🔥 Maximo y Mínimo 
Generar números aleatorios entre un valor MÁXIMO y MÍNIMO

```js
function generar(min, max){
	return Math.random() * (max - min) + min;
}

// Números entre 4 y 7
console.log(generar(4, 7)); 
```

Para incluir al 4 y 7 en los números que se generan...

```js
return Math.random() * (1 + max - min) + min;
```

🔥 Math.ceil 
En este caso para redondear, en vez de usar `Math.round`, deberíamos usar los métodos `ceil` y `floor` 

```js
function generar(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// Números entre 4 y 7
console.log(generar(4, 7)); 
```

Para comprobar que los datos que arroja Math son entre 4 y 7 usamos un for

```js
function generar(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	
	return Math.floor(Math.random() * (1 + max - min) + min);
}

for(i = 0; i < 500; i++){
	console.log(generar(4, 7))
}
```

❄ Bonus  
Generar un Array con números aleatorios    

```js
var array = [];
user_in = prompt(parseInt("Enter number: "));

while(array.length < user_in){
	array.push(Math.floor(1000*Math.random()));
	console.log(array);
}
```

[Explicación sobre Math](https://www.youtube.com/watch?v=pLNK1Y9CcoQ)

🎲

## 13. Switch  

Básicamente un switch es como un if pero con **diferente sintaxis** y usos, pero fuera de algunas ocasiones son muy parecidos.

¿Como usar switch?  
- La sintaxis de **switch** es:

```js
switch(valor a validar) {
	case opción 1:
		acción a realizar();
		break;
	default: 
		console.log(":)")
}
```

El uso de **break** es importante, ya que si no lo pones accionara todas las opciones dentro del switch, digamos que es como un puente, si no lo pones vas a tener que caminar por un lugar donde cada ‘case’ es una autopista más, mientras que break es un puente directo hacia la siguiente acera.

Un ejemplo seria:

```js
let dia = "Martes";

switch(dia) {
	case "Lunes":
		console.log("Hoy es Lunes");
		break;
	case "Martes":
		console.log("Hoy es Martes");👈👀
		break;
	case "Miercoles":
		console.log("Hoy es Miercoles");
		break;
	case "Jueves":
		console.log("Hoy es Jueves");
		break;
	case "Viernes":
		console.log("Hoy es Viernes");
		break;
	case "Sabado":
		console.log("Hoy es Sabado");
		break;
	case "Domingo":
		console.log("Hoy es Domingo");
		break;
	default:
		console.log("Es el fin de los dias");
}
```

En el caso de que ninguna de las opciones dentro del switch sea la correcta tenemos 2 opciones:

1.  Dejar el código seguir sin hacer nada.
2.  Utilizar **default** que es como si utilizáramos un else pero para switch.

Otro ejemplo: 

```js
//Para probar cambiar a 10, 100, 2 etc 
var numero = 1;

switch (numero) {
	case 1:
		console.log("Soy uno!");
		break;
	case 10:
		console.log("Soy un 10!");
		break;
	case 100:
		console.log("Soy un 100!");
		break;
	default: 
		console.log("No soy nada :/")
}
```

El break sirve para detener/romper las validaciones justo donde encuentra la coincidencia. 


#### ⚡ **RETO DEL JUEGO PIEDRA, PAPEL O TIJERA** ⚡ 🪨📄✂️

##### Solución de 

🎲

🎲🎲🎲🎲🎲

```
```

## Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Luís Hernández
- Diego Martínez
- Deborah Beatriz Rivera Olate
- MGuedez
- Nicolas Moreno
- Obed Paz
- Maria Gabriela Rodriguez Cuevas
- Saul Eduardo Acosta



</details>

🎲

## Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 👈 ☝ 👇   
- 😊 👈👀 😌 😍      
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣       
- ✔ ➕ ↕ ↔ ⬅ ✅ ▶ ❌ ❗            
- 🧰 ⛓ 💡             
- 🔅 🔆 🌚 🌗         

</details>