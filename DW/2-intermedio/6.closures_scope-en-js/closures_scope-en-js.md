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



## Apuntes

- [Notion: Curso de Closures y Scope en JavaScript](https://whip-soil-3b5.notion.site/Curso-de-Closures-y-Scope-en-JavaScript-d7e0a5f9273b439bb278e6ce6f97db5e)
- [GitHub: Curso de Closures y Scope en JS](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/6.closures_scope-en-js/closures_scope-en-js.md)
