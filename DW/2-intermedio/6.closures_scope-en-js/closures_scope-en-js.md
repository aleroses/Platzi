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

// Bloque de código 👀👇
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


## Apuntes

- [Notion: Curso de Closures y Scope en JavaScript](https://whip-soil-3b5.notion.site/Curso-de-Closures-y-Scope-en-JavaScript-d7e0a5f9273b439bb278e6ce6f97db5e)
- [GitHub: Curso de Closures y Scope en JS](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/6.closures_scope-en-js/closures_scope-en-js.md)
