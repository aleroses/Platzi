# Curso de Closures y Scope en JavaScript

[Curso de Closures y Scope en JavaScript](https://platzi.com/cursos/javascript-closures-scope/)   

> Inicio: `10-01-2024`
> Finalización: `-00-2024`

## **1.** Bienvenida al Curso de Closures y Scope

Bienvenido/a al curso de **[Closures](https://platzi.com/clases/3213-javascript-closures-scope/50366-que-es-un-closure/) y Scope en JavaScript**. En este curso aprenderás:

- Scope global, local, bloques y funciones
- Closures y su importancia.
- Hoisting
- Debugging utilizando Google Chrome

**Profesor:** [Oscar Barajas Tavares](https://platzi.com/profes/gndx/), Foundation Layer en Platzi.

### ¿Qué herramientas vas a conocer?

[Visual Studio Code](https://code.visualstudio.com/download) es el editor de código que se recomienda utilizar para tus proyectos y ofrece varias características para mejorar tu experiencia en el desarrollo.

Sin embargo, también puedes utilizar _codi.link_. [Codi.link](https://codi.link/) es un editor de código para escribir HTML, CSS y JavaScript, de manera que se visualice el resultado a tiempo real.

- **La consola del navegador** es importante para ver que está pasando con el código generado y forma parte de las herramientas que ofrece el navegador.
    
- La consola se despliega con la combinación de teclas `F12` / `Ctrl + Shift + I` / `Cmd+Opt+I` o clic derecho e “Inspeccionar” en tu navegador preferido (se recomienda Google Chrome).
    

Si estás utilizando Visual Studio Code, instala la extensión [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner){target="_blank"} que te permite ejecutar bloques de JavaScript y mostrar el resultado de tu código en la terminal del editor.

## **2.** Global Scope

### ¿Qué es el Scope?

El scope es el alcance que determina la accesibilidad de las variables, objetos y funciones desde diferentes partes del código.

Contexto en el que los valores y expresiones son **visibles** o pueden ser referenciados.

> 💡 Debes saber que en JavaScript, los objetos y las funciones también son variables.

Del scope derivan diferentes tipos:

- Global Scope.
- Function Scope.
- Block Scope.

### Global Scope

El **global scope** es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.

Son aquellas que se encuentran declaradas fuera de los bloques de código o funciones.

```js
// Variable global
var fruit = "Apple"; 

// Scope de función 👀👇
function bestFruit() {
  console.log(fruit);
}

bestFruit();
```

`fruit` no estaba definida en la función `bestFruit()` sin embargo pudo ser utilizada ya que fruit fue declarada globalmente.

Otra forma de declarar globalmente que puede pasar desapercibido es esta.

```jsx
function countries() {
  // Variable global
  country = "Colombia"; 
  // 👀👆 no fue declarada
  console.log(country);
}

countries();

// "Colombia" 👀👇
console.log(country); 
```

Esto ocurre por no declarar la variable con var, let o const. Lo que permite utilizar la variable desde fuera de la función.

### Recuerda

```js
// Declarar
var a;
// Declarar y asignar o inicializar
var b = "b";

// Redeclarar:
var a = "aa";
// Asignar o inicializar
a = "aaaaa";
// Reasignar o Reinicializar
b = "bb";
```

Las variables declaradas utilizando `var` se inicializan automáticamente con el valor `undefined`, a menos que se les asigne un valor explícitamente. En cambio, las variables declaradas con `let` o `const` no se inicializan automáticamente y no se pueden usar antes de su inicialización.

En resumen, declarar una variable establece su existencia y nombre, mientras que inicializar una variable asigna un valor a esa variable después de ser declarada.

```bash
# Arrancar el proyecto con:
- npm init -y
```

## **3.** Function Scope

El **_scope_ local de función** _(function scope)_ es el entorno donde las variables locales solo se pueden acceder desde una **función** del programa.

En este _scope_ **no importa** que las variables sean declaradas con `var`, `let` o `const`. Sin embargo, ten presente que se puede redeclarar una variable con var, pero no con `let` y `const`.

### Ejemplo utilizando scope de función

Observa el siguiente código y piensa cuál será el resultado.

```js
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)
```

Primeramente, al invocarse la función `saludo` imprimirá `"Andres"` por consola, pero inmediatamente después existirá un error de referencia.

```js
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo() // "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
```

Esto sucede porque la variable `nombre` tiene un scope de función, por lo que solo se puede acceder dentro de la misma.

Según la cadena de scope, si existe una función dentro de otra función, **la función hijo podrá acceder a las variables de la función padre, pero no en viceversa**. Recuerda esto en el tema de los _Closures_.

![Representación de los tipos de scope](https://i.postimg.cc/NMLbNXQk/3-function-scope.png)

### Extensión

Template String Converter

## **4.** Block Scope

El _scope_ local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un **bloque de código** del programa. Un bloque de código es todo aquello que está dentro de los caracteres de llaves `{}`.

### Hoisting en variables

Para hablar del scope de bloque, realizaré una breve explicación de _Hoisting_. Hablaré un poco más de esto en su clase respectiva.

_Hoisting_ es un término para describir que la **declaración de variables y funciones son desplazadas a la parte superior del scope más cercano**.

Mira el siguiente código y piensa cuál sería el resultado del `console.log`.

```js
console.log(nombre)
var nombre = "Andres"
```

La respuesta es `undefined`, porque al hacer referencia a una variable que aún no está declarada, JavaScript crea esta variable y le asigna un valor de `undefined`.

```js
var nombre = undefined
console.log(nombre)
nombre = "Andres"
```

De aquí el término de _Hoisting_, porque **eleva la declaración**. Pero esto solamente es cómo JavaScript interpreta el código, realmente las declaraciones siguen en el mismo lugar.

```js
console.log(nombre) //undefined
var nombre = "Andres"
```

Este efecto solo ocurre con `var`, si ejecutamos el mismo código con `let` o `const`, mostrará un **error de referencia**.

```js
console.log(nombre)
let nombre = "Andres"

//ReferenceError: nombre is not defined
```

### ¿Por qué “var” no tiene scope de bloque?

En el _scope_ de bloque, **si importa** que las variables sean declaradas con `var`, `let` o `const`. Ya que `var` no tiene un scope de bloque. ¿Esto qué quiere decir?

Mira el siguiente código y piensa cuál sería el resultado del `console.log`.

```js
if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
```

La respuesta es primero `"hola"` y luego un error de referencia. Esto sucede por el _hoisting_, la declaración de la variable `saludo` se eleva fuera del bloque en un scope superior, que puede ser un scope de función o global.

```js
var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
```

Es por eso que `var` no tiene scope de bloque y se debe tener cuidado porque puede provocar errores en el código.

### Ejemplo en un bloque de código

Mira el siguiente código y piensa cuál sería el resultado de los `console.log`.

```js
var x = 1

{
  var x = 2
  console.log(x)
}

console.log(x)
```

La respuesta es `2` y `2`, esto sucede nuevamente por el _hoisting_.

```js
# Hoisting
var x = 1
var x = undefined // redeclaración
{
  x = 2 // reasignación
  console.log(x)  // 2
}

console.log(x) // 2
```

Para solucionar esto se utilizará `let` o `const`. La primera declaración tiene un scope global; y la segunda, un scope de bloque.

```js
let x = 1

{
  let x = 2
  console.log(x) // 2
}

console.log(x) // 1
```

### Ejemplo en un bloque de código de scopes diferentes

Hay una pequeña excepción cuando invocas una variable en un scope inferior del scope de la declaración de la variable con `let` y `const`, debes asegurarte que no exista una variable igual.

Mira el siguiente código y piensa cuál sería el resultado del `console.log`

```js
let x = 5

{
  console.log(x) 
}
```

La respuesta es `5`, porque si JavaScript no encuentra la variable `x`, sigue al scope superior.

Ahora, ¿qué pasaría si existe una variable `x` declarada con `let`, después del `console.log(x)`? Existirá un _error de referencia_, porque se está accediendo a una variable antes de su declaración.

```js
let x = 5

{
  console.log(x) // ReferenceError: Cannot access 'x' before initialization
  let x = 10 
}
```

### Ejemplo en un bloque for

Mira el siguiente código y piensa cuál sería el resultado del `console.log`.

```js
function example() {
  for (var i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
```

La respuesta es diez veces `10`, y sucede por el _hoisting_. La declaración de `i` se eleva hasta arriba de la función en el scope de función, por lo que cuando termine el ciclo este tendrá un valor de 10.

```js
function example() {
 var i = undefined 

  for (i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
```

Para solucionar esto se utilizará `let` o `const`. La declaración del bloque `for` tiene un scope de bloque, en lugar de un scope de función.

```js
function example() {
  for ( let i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
```

### Dato

Solo `var` y `let` pueden ser reasignados. 

## **5.** Reasignación y redeclaración

La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

- Una variable declarada con `var` puede ser redeclarada y reasignada.
- Una variable declarada con `let` puede ser reasignada, pero no redeclarada.
- Una variable declarada con `const` no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

|Keyword           |const |let |var |
|------------------|------|----|----|
|Global scope      |NO    |NO  |YES |
|Function scope    |YES   |YES |YES |
|Block scope       |YES   |YES |NO  |
|Can be reassigned |NO    |YES |YES |

Existe un curso de [ECMAScript 6+](https://platzi.com/cursos/ecmascript-6/) para que descubras las nuevas características que agregan al lenguaje.

### Ejemplos de redeclaración y reasignación de variables

```js
// Con var
var nombre; // declaración (undefined) ✅
nombre = "Andres"; // asignación ✅
nombre = "Valeria"; // reasignación ✅
var nombre = "Oscar"; // redeclaración y reasignación ✅

// Con let
let nombre; // declaración (undefined) ✅
nombre = "Andres"; // asignación ✅
nombre = "Valeria"; // reasignación ✅
let nombre = "Oscar"; // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre; // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres"; // declaración y asignación ✅
nombre = "Valeria"; // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar"; // SyntaxError: Identifier 'nombre' has already been declared. ❌
```

### Estructuras de datos declaradas con const

Las estructuras de datos, como los _arrays_ u objetos, declaradas con `const` pueden cambiar las referencias de sus elementos, a este concepto se lo denomina **mutabilidad**. Sin embargo, siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.

```js
const array = ["manzana", "pera"] // declaración y asignación ✅
array[0] = "piña" // Cambio de valor en un elemento del array 
console.log(array) // [ 'piña', 'pera' ]
const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared. ❌
```

En React, una librería de JavaScript, puedes utilizar declaraciones con `const` para el estado de un componente, porque aunque cambie el valor, lo que sucede internamente es un re-renderizado y no una redeclaración. No te preocupes si no lo entiendes, pero tenlo presente cuando llegues a ese tema.

## **6.** Strict Mode

El **modo estricto** es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se **reduce las cosas que podemos hacer**, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

Este en el código colocando en la primera línea `"use strict"` para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.

### Ejemplo usando el modo estricto

Si realizas el siguiente código que contiene una asignación sin una declaración, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

```js
nombre = "Andres"
console.log(nombre) // "Andres"
```

En modo estricto, no te permitirá realizar esto y provocará un error.

```js
"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
```

### Ejemplo usando el modo estricto en una función

Si realizas el siguiente código que retornas una variable no declarada, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

```js
function myFunction(){
  return pi = 3.14
}

console.log(myFunction()) // 3.14
```

En modo estricto, no te permitirá realizar esto y provocará un error.

```js
"use strict";

function myFunction(){
  return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined
```

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode)

## **7.** ¿Qué es un Closure?

Un **closure** es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:

1. Genera una función que retorna una **función interna**.
2. Esta **función interna** tiene un **scope**, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el **scope** solo pueden ser accedidas por la **función interna**.
3. Como resultado, esta **función interna** _retornada_ con su **scope** será nuestro **closure**.

Veamos la siguiente imagen para entenderlo mejor. En la imagen FUNCTION es la función interna de la cual hablamos.

![Closure](https://i.postimg.cc/zXvcf36h/7-closure.png)

### Ámbito léxico

El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.

```js
function contador(i) {
  let acumulador = i;
  
  function aumentar() {
    console.log(acumulador);
    acumulador = acumulador + 1;
  }
  
  return aumentar;
}

const closure = contador(1);
// closure() es la función aumentar()
closure(); // 1
closure(); // 2
closure(); // 3

const closure2 = contador(10);
closure2(); // 10
closure2(); // 11

closure(); // 4
```

![](https://i.postimg.cc/MpXFZCyZ/7-closure-example.gif)

Podemos asignar la función `contador` a una variable (`_closure_` y `_closure2_`). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable `acumulador` que está vinculada con la función `aumentar`.

### Ejemplo de closure

La mejor manera de entender un closure es por medio de un ejemplo práctico. Cuando declaramos una función dentro de nuestro global scope, estamos usando un closure.

```js
var myVar = 'hi';

functio  myFunction() {
  console.log(myVar);
}

myFuntion(); // hi
```

Los closures son básicamente cuando aprovechamos la habilidad de JavaScript de emplear las variables que están en el scope padre de nuestro bloque de código, por eso el global scope es un closure grande. El bloque myFunction puede utilizar TODAS las variables que están disponibles en el bloque inmediato anterior. Usando el ejemplo visto en el video:

Si tú declaras la variable saveCoins en el global scope, estarías usando el mismo principio que si emplearas la segunda función que escribe el profesor porque estás usando las variables que están en el scope padre.

```js
var saveCoins = 0;

const moneyBox = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox(5); //5
moneyBox(10); //15

```

Sin embargo, está mal visto modificar variables globales, por eso es que quieres crear variables dentro de un scope cerrado y que interactúen entre ellas. Entonces, declaras las variables que vas a usar dentro del scope padre del bloque que las va a modificar para que siempre pueda acceder a ellas.

Para eso originas un nuevo “global scope” ficticio que va a conservar todas las variables que tú quieras monitorear. Ahora mira las similitudes entre el código de arriba y el que está justo abajo de aquí:

```js
const moneyBox = () => {
  var saveCoins = 0;

  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
  };
	
  return countCoins;
};

let myMoneyBox = moneyBox();
// myMoneyBox() es la arrow function countCoins
myMoneyBox(4); // 4
myMoneyBox(10); // 14
myMoneyBox(6); // 20
```

¡Si remueves `const moneyBox = () => {}` serían exactamente las mismas líneas de código!

```js
//const moneyBox = () => {
var saveCoins = 0;

const countCoins = (coins) => {
  saveCoins += coins;
  console.log(saveCoins);
};
   // return countCoins;
//}

```

Lo que estás haciendo es simplemente bajar un nivel tu scope. Quieres que la función moneyBox regrese una función que estuvo declarada dentro de sí misma porque esa función tiene acceso a ese scope que ya no va a existir para que alguien más lo utilice, solamente lo podrá emplear la función countCoins.

Al guardar el resultado de moneyBox (countCoins) en otra variable estás generando el ámbito léxico que menciona el profesor, necesario para no dejar morir ese scope.

### Tutoriales 

- [CLOSURES en JavaScript: Qué son y cómo funcionan](https://www.youtube.com/watch?v=xa8lhVwQBw4)
- [21. CLAUSURAS (Closures) EN JAVASCRIPT](https://www.youtube.com/watch?v=JXG_gQ0OF74)
- [Lectura](https://gustavodohara.com/blogangular/execution-context-contexto-ejecucion-javascript/)

## **8.** Playground: Crea un Closure para Sumar

En este desafío recibirás dos números aleatorios por parámetros.

Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

Input:

```js
// Función curried
sumWithClosure(2)(3); 👈👀
```

Output:

```json
5
```

Input:

```js
sumWithClosure(90)();
```

Output:

```json
90
```

### Solución 

```js
function add(first_number) {
  function calculate(second_number) {
    if (second_number) {
      return first_number + second_number;
    } else {
      return first_number;
    }
  }

  return calculate;
}

const result = add(2)(3);
const result_two = add(90)();

console.log(result, result_two);
```

### Dato: Currying

Una función «curried» **es una función que toma un número de argumentos uno a la vez, retornando una nueva función que toma el siguiente argumento hasta que todos los argumentos se hayan proporcionado**.

La forma de llamar a una función como `sumWithClosure(2)(3)` se conoce como "currying". El currying es una técnica en programación funcional en la que una función que normalmente toma múltiples argumentos se transforma en una secuencia de funciones que toman un solo argumento.

## **9.** Practicando Closures

Ahora que ya entiendes qué es un _closure_, te mostraré un ejemplo para emplearlo en un proyecto.

### Cómo utilizar Closure para construir una alcancía

Si creamos una alcancía de la siguiente manera, solamente mostrará el valor enviado, no guardará la información del dinero que le enviamos.

```js
function alcancia(monedas) {
  let contenido = 0;
  contenido = contenido + monedas;
  return contenido;
}

const miAlcancia = alcancia;
miAlcancia(5); // 5
miAlcancia(4); // 4
```

Si utilizamos un closure, entonces la variable en que estará en un scope más elevado que la función interior, recordará el ámbito léxico que fue creada. Por lo tanto, cada vez que invoquemos cada función, mostrará el dinero ahorrado en la alcancía.

```js
function alcancia(cantidadInicial) {
  let contenido = cantidadInicial;

  return function guardar(monedas) {
    contenido = contenido + monedas;
    return contenido;
  };
}

const miAlcancia = alcancia(2);
// miAlcancia es igual a la función guardar
miAlcancia(5); // 7
miAlcancia(4); // 11

const otraAlcancia = alcancia(5);
// otraAlcancia es igual a la función guardar
otraAlcancia(30); // 35
otraAlcancia(20); // 55

// miAlcancia y otraAlcancia son independientes
```

## **10.** Playground: Closure para Almacenar Datos de Mascotas

En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

Input:

```js
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
```

Output:

```js
["michi", "firulais"]
```

## **11.** ¿Qué es el Hoisting?

**_Hoisting_** es un término para describir que las **declaraciones de variables y funciones son desplazadas a la parte superior del _scope_ más cercano**, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones o inicializaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con `var`.

### _Hoisting_ en variables declaradas con var

En el siguiente código, la respuesta del `console.log` es `undefined`, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de `undefined`.

```js
console.log(nombre) // undefined
var nombre = "Andres" 
```

```js
// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"
```

### _Hoisting_ en scope de bloque

Mira el siguiente código y piensa cuál sería el resultado del `console.log`.

```js
if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
```

La respuesta es primero `"hola"` y luego un **error de referencia**. Esto sucede por el _hoisting_, la declaración de la variable `saludo` se eleva **fuera del bloque** en un _scope_ superior, que puede ser un _scope_ de función o global.

```js
var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
```

Es por eso que `var` no tiene scope de bloque, y se debe tener cuidado porque puede provocar errores en el código.

### _Hoisting_ en funciones

Mira el siguiente código y piensa cuál sería el resultado del `console.log`.

```js
console.log( saludar() )

function saludar() {
  return "Hola"
}
```

La respuesta es `"Hola"`, porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

```js
// Hoisting
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
```

Pero, lo que realmente sucede es que JavaScript **guarda la función en memoria** en la fase de creación de un contexto de ejecución, no asigna `undefined` como con las variables.

### _Hoisting_ de variables dentro de una función

El _hoisting_ desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.

```js
function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
```

JavaScript lo interpretaría como lo siguiente:

```js
function scope() {
  var nombre = undefined
  var edad = undefined
  var i = undefined
  
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  nombre = "Andres"
  edad = 20
  for ( i = 0; i< 6; i++) {
  
  //
  }
}
```

#### _Hosting_ en funciones asignadas a variables

Mira el siguiente código y piensa cuál sería el resultado del `console.log`.

```js
console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}
```

La respuesta es un **error de tipo** porque si asignas una función a una variable declarada con `var`, y la invocas antes declararla, la variable será de tipo `undefined` y no de función por el _hoisting_.

```js
var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}
```

### _Hoisting_ con _let_ y _const_

Aunque te haya dicho que el _hoisting_ solo ocurre con declaraciones con `var`, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con `let` y `const` a la [Temporal Dead Zone](https://www.freecodecamp.org/espanol/news/que-es-la-zona-muerta-temporal-temporal-dead-zone-tdz/).

La **_Temporal Dead Zone_** es una región del código donde la variable está declarada, pero no es posible acceder a esta, provocando un error de tipo `ReferenceError`.

```js
console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"
```

### Buenas prácticas para usar _hoisting_

- No utilices `var` en las declaraciones de variables.
- Escribe primero las funciones y luego su invocación.

## **12.** Debugging

_Debugging_ es el término para solucionar _bugs_. Los _bugs_ (“bichos” en inglés) son **errores en la aplicación**, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.

**Todo navegador dispone de _Dev tools_** o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el _debugging_.

**La consola del navegador es importante para ver qué está pasando con el código generado.** La consola se muestra con la combinación de teclas `F12` / `Ctrl + Shift + I` / `Cmd+Opt+I` o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).

### Código de ejemplo

El código de ejemplo que se usará en las _Dev Tools_ será el siguiente:

```js
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
  }
}

hello()
```

### Palabra reservada debugger

La palabra reservada _debugger_ sirve **para detener la ejecución del programa**, pero solo funciona si el panel de las herramientas de desarrollo está abierto. Este panel te mostrará información sobre el código hasta la línea del _debugger_.

Ejecuta el código de prueba que contenga la palabra reservada _debugger_ en la consola de tu navegador, puedes hacerlo en una página en blanco tan solo poniendo [about:blank](http://about:blank/) como una URL.

```js
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

hello()
```

Al momento de ejecutar el código te aparecerá el panel de _debugging_.

![Herramientas de desarrollador de Chrome](https://static.platzi.com/media/articlases/Images/scope_closure02.png)

En el panel de información, existe un apartado _“Scope”_ que muestra el *scope/ de cada variable correspondiente al punto donde la ejecución se detuvo.

![Sección de Scope de las DevTools de Chrome](https://static.platzi.com/media/articlases/Images/scope_closure03.PNG)

### _Breakpoints_

Los _breakpoints_ son **puntos donde la ejecución del programa se parará**. Para activarlos se debe dar clic en la línea de código que se desea parar.

![Breakpoints en un código JavaScript](https://static.platzi.com/media/articlases/Images/scope_closure04.PNG)

### _Closures_ en _debugging_

Si el código tiene _closures_, aparecerán en el panel _“Scope”_.  
![scope_closure05.PNG](https://static.platzi.com/media/articlases/Images/scope_closure05.PNG)

Para concluir, deberías aprender a utilizar las herramientas de desarrollo web para ser más eficiente, y de esta forma encontrar de manera eficiente la causa de un error o un comportamiento no deseado que provocaría un _bug_.

[Tutorial: Depurar en VSC](https://www.youtube.com/watch?v=YpFR8Q2lVDU&t=10s)

## **13.** Conclusiones

🎉¡Lo has logrado! 🙌 **Completaste todas las clases** del curso de **Closures y Scope en JavaScript**.

✅ Si aún no queda claro algún tema, vuelve a revisar la clase o deja tu pregunta en la sección de preguntas.

👨‍💻 Te presentamos [JavaScript Hero](https://jshero.platzi.com/), donde podrás practicar los conceptos de JavaScript en un desafío diario, en el que podrás demostrar tus conocimientos sobre lo aprendido durante el curso y mucho más.

🧾 **Realiza la prueba del curso** para recibir tu certificado y no olvides dejar tus 🌟 y tu comentario.

Y por sobre todo, **¡Nunca pares de aprender!** 💚

## Apuntes

- [Notion: Curso de Closures y Scope en JavaScript](https://whip-soil-3b5.notion.site/Curso-de-Closures-y-Scope-en-JavaScript-d7e0a5f9273b439bb278e6ce6f97db5e)
- [GitHub: Curso de Closures y Scope en JS](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/6.closures_scope-en-js/closures_scope-en-js.md)

## Examen 📌

<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. ¿Qué es Code Runner?

a

Es una función que trae Visual Studio Code para autocompletar el código que vayamos escribiendo.

b ✅

Es un plugin de Visual Studio Code que permite ejecutar el código dentro del editor.

c

Ninguna opción es correcta.

d

Es un plugin de Visual Studio Code que nos habilita el uso del scope y los closures dentro del código.

2. Es el tipo de dato que se asigna por defecto al declarar una variable.

a

String

b

Error

c ✅

Undefined

d

Null

e

Integer

3. JavaScript solo utiliza el hoisting en declaraciones, mas no en inicializaciones

a

Falso

b ✅

Verdadero

4. ¿La herramienta de Google Chrome que nos permite hacer debugging se llama?

a

Google Developer tools

b

Developer Tools

c ✅

Chrome DevTools

d

Google Dev Tools

5. Las variables declaradas con let y const, NO se pueden volver a declarar en el mismo ámbito.

a

Falso

b ✅

Verdadero

6. ¿Qué sucederá si ejecutamos el siguiente código?

```
 nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; 
```

a ✅

Se muestra en consola el siguiente mensaje: "Elmo".

b

Se muestra en el navegador un alert con el siguiente mensaje: "Elmo".

c

Se muestra en consola el siguiente mensaje: "Error, el valor no está definido".

d

Se muestra en consola el siguiente mensaje: "Variable name undefined".

7. ¿Cuál de las siguientes opciones NO se puede considerar como una variable global?

a ✅

```
const scope = "I am global";

```

b

```
let scope = "I am global";`
```

c

```
var scope = "I am global";
```

d

```
var = “I am global”;
```

8. Analiza el siguiente código e identifica la variable declarada en el alcance de la función:

```
const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }
```

a

Todas las opciones son correctas.

b

```
const fruit2 = ‘banana’;
```

c

```
var fruit1 = ‘apple’;
```

d ✅

```
let fruit3 = ‘kiwi’;
```

9. Variables declaradas con "let" y "const" son de "block scope"

a ✅

Verdadero

b

Falso

10. ¿Cuál es el alcance que tiene el function scope?

a

Se puede acceder a una variable que se ubica en el ámbito global, pero no podemos llamarla dentro de una función.

b ✅

Se puede acceder a una variable que se ubica dentro de una función, pero no podemos llamarla desde el ámbito global.

11. Término que se refiere a la accesibilidad que tiene una variable, función u objeto.

a

Function

b

Global

c

Closure

d ✅

Scope

12. ¿En qué momento se genera una closure?

a

Cuando activamos el modo estricto para definir una variable.

b

En el momento en que una variable llama a una función.

c ✅

Cuando una función accede a una variable fuera de su contexto y la recuerda.

13. ¿Para qué se utiliza el modo estricto en JavaScript?

a ✅

Es un modo de trabajo que nos asegura que cada variable está definida al momento de crear nuestro código.

b

Lo aplicamos para generar variables inmutables de forma estricta.

c

Se utiliza para lograr avanzar en nuestro desarrollo al cumplir con horarios de trabajo definidos y evita que haya distracciones.
</details>