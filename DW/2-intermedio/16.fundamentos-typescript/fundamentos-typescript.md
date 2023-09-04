# Curso de Fundamentos de TypeScript

> Inicio: `01-09-2023`
> Finalización: ``

[Apuntes en Notion](https://francocarrara.notion.site/Curso-de-Fundamentos-de-TypeScript-30ed370135f049a1bd6786302bea9e81)

## 1. TypeScript

### Que es TypeScript 

TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript. Es un superconjunto de JavaScript, lo que significa que cualquier código JavaScript válido también es código TypeScript válido. Sin embargo, TypeScript agrega características adicionales al lenguaje JavaScript y proporciona un sistema de tipos estático opcional.

El sistema de tipos es una de las principales características de TypeScript y permite definir tipos estáticos para variables, parámetros de función, valores de retorno y más. Esto proporciona verificación de tipos durante la compilación, lo que **ayuda a detectar y prevenir errores comunes** en el código antes de que se ejecute. El tipado estático también brinda beneficios adicionales como autocompletado inteligente en los editores de código y herramientas de desarrollo, refactorización segura y mejor mantenibilidad del código.

Además del sistema de tipos, TypeScript ofrece otras características como:

1. Soporte para características de ECMAScript más recientes: TypeScript permite utilizar características de JavaScript más modernas, incluso si el entorno de ejecución no las admite directamente. Esto se logra mediante la compilación de código TypeScript a una versión de JavaScript compatible con el objetivo deseado.

2. Orientación a objetos: TypeScript admite clases, interfaces, herencia, polimorfismo y otros conceptos de programación orientada a objetos. Esto facilita la escritura de código estructurado y modular.

3. Módulos y namespaces: TypeScript proporciona un sistema de módulos que permite organizar el código en unidades lógicas y separadas. También admite el uso de namespaces para evitar conflictos de nombres en grandes proyectos.

4. Decoradores: Los decoradores son una característica de TypeScript que permite agregar metadatos y funcionalidades adicionales a clases, métodos, propiedades, etc. Son ampliamente utilizados en frameworks como Angular.

TypeScript se puede utilizar para desarrollar aplicaciones tanto en el lado del cliente (frontend) como en el lado del servidor (backend). Es especialmente popular en el desarrollo de aplicaciones web y se utiliza ampliamente en combinación con frameworks como Angular, React y Vue.js.

En resumen, TypeScript es un lenguaje de programación que amplía las capacidades de JavaScript al agregar un sistema de tipos estático opcional y otras características avanzadas. Proporciona beneficios como detección temprana de errores, mejor herramientas de desarrollo, mejor mantenibilidad del código y soporte para características de JavaScript más modernas.

### Por qué usar TypeScript

Hay varias razones por las cuales usar TypeScript puede ser beneficioso en el desarrollo de software:

1. Tipado estático: TypeScript es un lenguaje de programación que agrega un sistema de tipos estático a JavaScript. Esto significa que puedes definir tipos para las variables, parámetros de función, valores de retorno y más. El tipado estático ayuda a detectar errores y problemas comunes durante el tiempo de compilación en lugar de descubrirlos en tiempo de ejecución, lo que mejora la calidad y confiabilidad del código.

2. Autocompletado y verificación de errores: Gracias al sistema de tipos, los editores y entornos de desarrollo integrados (IDE) pueden proporcionar autocompletado inteligente, sugerencias y verificación de errores en tiempo real. Esto ayuda a los desarrolladores a escribir código de manera más eficiente, reduciendo los errores y mejorando la productividad.

3. Mejor mantenibilidad: TypeScript permite escribir código más legible y comprensible al agregar información sobre los tipos de datos utilizados en el código. Esto facilita el mantenimiento del código a medida que el proyecto crece en tamaño y complejidad, ya que los desarrolladores pueden entender más fácilmente cómo se utilizan los diferentes elementos y realizar cambios de manera segura.

4. Refactorización segura: El sistema de tipos de TypeScript permite realizar refactorizaciones de manera segura. Puedes realizar cambios en el código, como renombrar variables o funciones, y TypeScript actualizará automáticamente todas las referencias en el código. Si hay algún lugar donde los tipos no coinciden, recibirás advertencias durante la compilación.

5. Soporte para características de ECMAScript más recientes: TypeScript es un superconjunto de JavaScript, lo que significa que admite todas las características de JavaScript y también agrega características adicionales. Esto permite utilizar características de ECMAScript más recientes, incluso si el entorno de ejecución no las admite directamente, ya que TypeScript compilará el código a una versión de JavaScript compatible.

6. Comunidad activa y herramientas de desarrollo: TypeScript cuenta con una comunidad activa y creciente, lo que significa que hay una gran cantidad de recursos, bibliotecas y herramientas disponibles. Además, muchas bibliotecas y frameworks populares, como Angular y React, tienen un excelente soporte para TypeScript.

En general, el uso de TypeScript puede mejorar la calidad del código, la productividad del desarrollo y la capacidad de mantenimiento en proyectos de cualquier tamaño. Sin embargo, es importante tener en cuenta que el uso de TypeScript implica una etapa adicional de compilación, lo que puede aumentar ligeramente el tiempo de desarrollo en comparación con JavaScript puro.

### Requisitos 

- Visual Studio Code 
- Node 
- Google Chrome 

## 2. TypeScript vs. JavaScript

¿TypeScript es diferente a JavaScript? ¿Un desarrollador en TypeScript es diferente a uno en JavaScript? La respuesta a ambas es sí, sin embargo, no hay una notable diferencia. Uno (TypeScript) se base en el otro (JavaScript) añadiendo elementos para mejorar la detección de bugs y experiencia de desarrollo.

### Panorama

JavaScript ha sufrido un incremento exponencial en su uso, pues se puede usar en Frontend, Backend, IoT, entre otros. No obstante, este no fue creado como un lenguaje maduro desde el inicio, fue con el tiempo que ha ido mejorando hasta lo que es hoy en día.

En JavaScript solo te das cuenta de que tienes un error hasta el momento en que lo ejecutas, sea en el navegador o en un entorno de ejecución como NodeJS, más no antes. Lo que queremos como desarrolladores es obtener retroalimentación lo antes posible para tener la menor cantidad de errores en producción

### El aporte de TypeScript

TypeScript abarca todo lo que tiene JavaScript, más las nuevas versiones de ECMAScript, y añade análisis estático a nuestro código.  

![¿Qué engloba Typescript?](https://static.platzi.com/media/articlases/Images/ctf-4.jpg)

#### ¿Qué significa análisis de código estático?

> Entre más rápido encuentres un error, más fácil será solucionarlo

En el libro _Software Engineering at Google_[1] señalan ciertas capas para detectar fallas en el desarrollo de programas:

1. **Análisis de código estático:** corre en el editor de código en busca de un typo (error en la escritura de un término), llamadas incorrectas a funciones y brinda autocompletado de código
2. **Pruebas Unitarias (Unit Tests):** se realiza pruebas para verificar si una parte del código hace lo que queremos que ejecute
3. **Pruebas de Integración (Integration Tests):** vemos como todo el código funciona en conjunto y que se ejecute cómo deseamos
4. **Revisión de código (Code Review):** se verifica si se ha seguido con las normas, estándares y mejores prácticas establecidas por el equipo.

[1] Software Engineering at Google. Lessons Learned from Programming Over Time - Titus Winters, Tom Manshreck y Hyrum Wright.

- [Software Engineering at Google](https://swizec.com/blog/what-i-learned-from-software-engineering-at-google/)
- [Libro: Software Engineering at Google](https://abseil.io/resources/swe-book)

## 3. Configurado nuestro proyecto

Instalaremos TypeScript solo para este proyecto, pero primero debemos tener la siguiente estructura:   

```bash
╰─ tree -L 3
.
├── node_modules
│   └── typescript
│       ├── LICENSE.txt
│       ├── README.md
│       ├── SECURITY.md
│       ├── ThirdPartyNoticeText.txt
│       ├── bin
│       ├── lib
│       └── package.json
├── package-lock.json
├── package.json
└── src
```

Para crear los archivos y carpetas podemos usar la CLI o hacerlo desde VSC. 

```bash
mkdir ts-project
cd ts-project
code .
```

Una vez en Visual Studio Code creamos los archivos `.gitignore` y `.editorconfig`. 

Para añadir todo lo necesario dentro del primer archivo podemos usar la web [gitignore.io](https://www.toptal.com/developers/gitignore) y buscar **Windows**, **macOS**, **Linux** y **Node**, luego copiamos el resultado dentro del archivo. 

Para el segundo archivo necesitamos instalar la extensión `EditorConfig for VS Code` y luego agregarle lo siguiente: 

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

Después de tener esto, abrimos la consola de VSC usando `Ctrl + ñ` y ejecutamos los siguientes comando:  

```bash
npm init -y
npm install typescript --save-dev
npx tsc --version  
	(Version 5.2.2)
```

- Plugin: EditorConfig for VS Code
- [Documentación npm-init](https://docs.npmjs.com/cli/v7/commands/npm-init)

## 4. Atrapando bugs

Dentro de la carpeta `src` creamos un archivo llamado `demo.js`, luego agregamos el código propuesto en clase e inmediatamente vemos que usando la extensión Error Lens ⚠ nos muestra solo un error, pero al agregar dentro del código `//@ts-check` ahora vemos que tenemos muchos errores. 

`src > demo.js`
```js
// @ts-check
(()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET'
    });
    const data = await rta.parseJson();
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (const i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts(); ❌👈👀 Error Lens 
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
```

Código sin errores:   
```js
// @ts-check
async () => {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch("http://api.escuelajs.co/api/v1/products", {
      method: "GET",
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }

    return total;
  }

  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);

  const total = getTotal();
  console.log(total);

  const person = {
    name: "Nicolas",
    lastName: "Molina",
  };
  const rta = `${person}: ${limit}`;
  console.log(rta);
};

```

### `//@ts-check`

La directiva `//@ts-check` es una directiva de TypeScript que se utiliza en archivos de código JavaScript para habilitar la comprobación de tipos estática en ese archivo específico, incluso si el archivo no se ha convertido completamente a TypeScript.

Cuando se incluye `//@ts-check` en la parte superior de un archivo JavaScript, el compilador de TypeScript realizará una verificación estática de tipos en ese archivo y mostrará advertencias y errores relacionados con los tipos de datos.

Esta directiva es útil cuando se trabaja en un proyecto que es principalmente JavaScript, pero se desea aprovechar las ventajas de la comprobación de tipos estática proporcionada por TypeScript. Al agregar `//@ts-check`, se pueden detectar errores de tipos y recibir sugerencias y autocompletado mejorados en el editor o entorno de desarrollo.

Es importante tener en cuenta que `//@ts-check` no convierte automáticamente el archivo JavaScript a TypeScript ni habilita todas las características de TypeScript. Simplemente habilita la comprobación de tipos estática en ese archivo en particular.

Aquí hay un ejemplo de cómo se puede utilizar `//@ts-check` en un archivo JavaScript:

```js
//@ts-check

function sum(a, b) {
  return a + b;
}

sum(10, "20"); // Error de tipos: se está intentando sumar un número y una cadena
```

En este caso, al habilitar `//@ts-check`, el compilador de TypeScript mostrará un error de tipo en la llamada a la función `sum`, ya que se está intentando sumar un número y una cadena, lo cual es incompatible.

En resumen, `//@ts-check` es una directiva de TypeScript que se utiliza en archivos JavaScript para habilitar la comprobación de tipos estática en ese archivo específico, lo que permite detectar errores de tipos y recibir sugerencias mejoradas en el editor o entorno de desarrollo.

[Working with JavaScript](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript)

## 5. El compilador de TypeScript

Creamos un nuevo archivo en la carpeta `src > 01-hello.ts` y le cambiamos la extensión al archivo `demo.js` por `demo.ts`. 

`src > 01-hello.ts`  
```ts
const my_name = 'Ale Roses';
console.log(my_name);
```
Ahora podemos convertir este archivo .ts a un archivo .js usando el siguiente comando, este creará otro archivo con el mismo nombre pero con la extensión .js: 

```bash
npx tsc src/01-hello.ts
```

Después nos dirigimos al archivo `demo.ts` el cual nos muestra un error en `.prize`, para no complicarnos solo elimínalo, además ya podemos quitarle el `//@ts-check`: 

```js
const myCart = [];
const products = [];
const limit = 2;

(async () => {
  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
      // total += products[i].prize;
      total += products[i]; 👈👀
    }

    return total;
  }

  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);

  const total = getTotal();
  console.log(total);

  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
  };
  const rta = `${person}: ${limit}`;
  console.log(rta);
})();
```

Nuevamente, convirtamos esto a un archivo .js usando el mismo comando anterior, pero añadiendo una especificación que indique que necesitamos el código en ES6: 

```bash
npx tsc src/demo.ts --target es6
```

Notemos que ahora tenemos todo poco ordenado...
```bash
╰─ tree -L 3
.      
├── node_modules       
├── package-lock.json
├── package.json
└── src
    ├── 01-hello.js 👈👀
    ├── 01-hello.ts
    ├── demo.js 👈👀
    └── demo.ts
```

Esto lo solucionamos creando una carpeta `dist` en donde enviaremos todos los archivos convertidos a formato .js. Una vez creado podemos usar los siguientes comandos: 

```bash
npx tsc src/demo.ts --target es6 --outDir dist
npx tsc src/*.ts --target es6 --outDir dist 👀👈 También *
```

Quedando de la siguiente manera:  
```bash
╰─ tree -L 3
.
├── dist
│   ├── 01-hello.js 👈👀   
│   └── demo.js  👈👀   
├── node_modules       
├── package-lock.json
├── package.json
└── src
    ├── 01-hello.ts
    └── demo.ts 👈👀 Eliminamos los archivos repetidos
```

Ahora ya podemos ejecutar el archivo que queramos con el siguiente comando: 

```bash
node dist/01-hello.js
```
Mostrando: Ale Roses ✨

### Deno: un entorno nativo para ambos lenguajes

[Deno](https://deno.land/), del mismo creador de Node.js, es un nuevo entorno de ejecución para JavaScript que puede correr también nativamente TypeScript. Sin embargo, aún no tiene la madurez en el ecosistema de Node.js


## 6. Veamos el TSConfig.json

El archivo `TSConfig.json` nos ayuda a ahorrar mucho trabajo manual como transpilar archivo por archivo, indicar el target, etc.

### Creando un archivo TSConfig.json

En la terminal, ubicándonos dentro del directorio en el que queremos que se cree el archivo, ejecutemos:

```shell
npx tsc --init
```

Esto nos muestra en consola lo siguiente...  
```shell
Created a new tsconfig.json with:                                          TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at ttps://aka.ms/tsconfig
```

Dentro del archivo `tsconfig.json` veremos mucha configuración y solo propiedades básicas activadas, por el momento solo necesitamos agregar (descomentar) lo siguiente: 

`tsconfig.json`  
```json
"outDir": "./dist",
"rootDir": "./src",
```

### Compilación en TypeScript

Nuestro código TypeScript se transpilará según las propiedades indicadas en nuestro archivo `TSConfig.json``:

```shell
npx tsc
```

### Compilación en tiempo real

Nos puede resultar tedioso estar ejecutando el comando anterior siempre después de escribir nuestro código. Para evitar esto, podemos hacer que el compilador esté detectando cada cambio que realicemos en nuestros archivos TypeScript y haga la transpilación de inmediato:

```shell
npx tsc --watch
```

Para probar el último comando creamos el archivo `02-demo2.ts` en la carpeta `src`. 

 `src > 02-demo2.ts`  
```js
const numbers = [1,2,3];
```

Ejecutamos el comando anterior y veremos que se crea un nuevo archivo .js en la carpeta `dist`
```shell
npx tsc --watch
```
Si queremos ir más allá podemos borrar todos los archivos de la carpeta `dist` y correr el comando anterior, esto creará nuevamente todos los archivos .js

## 7. Qué es el tipado en TypeScript

El tipado en TypeScript hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, conocido como **type annotation**, con esto evitamos mezclar distintos tipos de datos.

### La flexibilidad de JavaScript

Nosotros podemos declarar una variable de un tipo de valor y a lo largo del código ir cambiándolo si lo deseamos. Por lo que en un momento puede ser de tipo `string` y después de tipo `boolean`:

```js
let example = null;
example = "string";
example = 3.14;
example = true;
example = undefined;
example = [];
example = Symbol("abc");

example = {
  name: "Ale",
  last_name: "Roses",
};

example = function (a) {
  return a;
}
```

Para proyectos de software que tienen una gran escalabilidad, esto podría ser fuente de fallas en el programa.

### Controlando la flexibilidad

Gracias a TypeScript podemos manejar el tipado de las variables para evitar anomalías en el código.

En **JavaScript**, para declarar una variable constante lo realizamos así:

```js
const age = 20;
```

En **TypeScript**, para el caso anterior, es similar solo que añadimos `:` y el tipo de dato de la variable, la cual sería `number`. A esto último se le llama **type annotation** o anotación de tipo:

```ts
const miVariable: tipo = valor;
const age: number = 20;

// age: declaración 
// number: tipado
// 20: valor 
// : number: Type Annotation 
```

- [Manual de TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html),
- [Probar los ejemplos: Playground de TS](https://www.typescriptlang.org/play)

## 8. Tipos inferidos

TypeScript puede inferir (Extraer un juicio o conclusión a partir de hechos) el tipo de dato de una variable a pesar de no haberlo declarado explícitamente.

### Inferencia de tipos

A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:

`src > 03-typing.ts`

```ts
let my_product_name = 'Product 1';
let my_product_price = 123;
```

Si bien no indicamos el tipo de dato como se haría de esta manera:

```ts
let my_product_name: string = "Product 1";
let my_product_price: number = 123;
```

TypeScript infiere que las variables serán del tipo `string` o `number` y en adelante no podrá tomar un valor que no sea de este tipo de dato.

```ts
let my_product_name = 123;
//Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
```

Dato: En Visual Studio Code puedes obtener autocompletado teniendo sugerencias según el tipo de dato que sea la variable:

```ts
my_product_name.toLowerCase(); 👈👀
my_product_price.toFixed(); 👈👀
```

### Nombres de variables iguales

TypeScript señalará como **error** aquellas variables con el mismo nombre **a pesar** de estar en **archivos distintos**. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:

```ts
// Inmediately Invoked Function Expression (IIFE). ()()
( () => {
    let myName = "Ale Roses";
})();
```

Lo mismo por cada variable que desees tener el mismo nombre (`myName` para este ejemplo) deberás crear este tipo de función para evitar que te den estas advertencias.

[IIFE: Expresión de función ejecutada inmediatamente](https://developer.mozilla.org/es/docs/Glossary/IIFE)

## 9. Numbers

El tipo de dato `number` se usa para variables que contendrán números positivos, negativos o decimales.

### Operaciones

En JavaScript, una variable de tipo `number` puede fácilmente ser concatenado con otra de tipo `string`:

```js
//JavaScript
let myNumber = 30;
myNumber = myNumber + "5"; //El resultado sería '305'
```

Sin embargo, esto podría llevar confusiones y errores durante la ejecución del programa, además de estar cambiando el tipo de dato de la variable. Por ello, en TypeScript solo se pueden hacer operaciones numéricas entre números valga la redundancia:

```ts
//TypeScript
let myNumber: number = 30;

myNumber = myNumber + 10; //CORRECTO
myNumber = myNumber + "10"; //INCORRECTO
```

### Uso de variables sin inicializar

Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial:

```ts
//TypeScript
let productInStock: number;
console.log("Product in stock: " + productInStock);
```

Señalar que si no se va a inicializar aún la variable, definir explícitamente el tipo de dato, pues TypeScript no puede inferirlo si no tiene un valor inicial.

### Conversión de números de tipo string a tipo number

Para esto usaremos el método `parseInt`:

```ts
let discount: number = parseInt("123");

let numeroString: string = "100";
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString);
```

Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario, el resultado será de tipo `NaN` (Not a Number):

```ts
//TypeScript
let numeroPrueba: number = parseInt("palabra");
console.log(numeroPrueba); //NaN
```

### Binarios y Hexadecimales

TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango:

```ts
//**********TypeScript**********
//Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010; //CORRECTO
let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xfff; //CORRECTO
let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido
```

En consola, si están correctamente asignados, se hará una conversión a decimal de dichos números:

```ts
let primerHexa = 0xfff;
console.log(primerHexa); // 4095

let primerBinario = 0b1010;
console.log(primerBinario); // 10
```

### Consejo

Cuando definas una variable de tipo de dato `number`, es preferible que el nombre de tipo sea en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato `number` y **no al objeto** `Number` propio del lenguaje:

```ts
let myNumber: number = 20; // Buena practica.
let otherNumber: Number = 20; // Mala practica.
```

### Código de la clase  

`src > 04-numbers.ts`
```ts
(() => {
  let product_price = 100;
  product_price = 12;
  console.log("Price: ", product_price);

  let customer_age = 28; // let customer_age: number = 28; error 👈👀🔥
  customer_age = customer_age + 1; // 29
  console.log("Customer age: ", customer_age);

  let product_stock; // let product_stock: number; error 👈👀🔥
  console.log('Stock: ', product_stock);

  if (product_stock > 10) {
    console.log("Is greater!!!");
  }

  let discount = parseInt("100"); // "sada" NaN
  console.log("Discount: ", discount);

  if (discount <= 200) {
    console.log("Apply");
  } else {
    console.log("Not apply");
  }

	let hex = 0xfff;
	console.log('hex: ', hex);
	
	let bin = 0b1010;
	console.log('bin: ', bin);
	
	const my_number = 10;
	console.log(my_number);
	
})();
```

Al correr el código hecho en clase, la consola muestra un error que hace referencia al uso de `number`. Visual Studio Code no muestra ningún error, pero al correr el comando `node dist/04-numbers.ts` vemos: 

```bash
╰─ node dist/04-numbers.ts 
D:\Platzi\DW\ts-project\dist\04-numbers.ts:6
  let customer_age: number = 28; // let customer_age: number = 28; error 👈👀🔥
                  ^

SyntaxError: Unexpected token ':' 👈👀🔥
←[90m    at internalCompileFunction (node:internal/vm:73:18)←[39m

Node.js v18.16.1
```

Por lo que para no tener errores y mostrar los `console.log` le quité todos los **Type Annotation** como `: number` a cada variable. 

```bash
╰─ node dist/04-numbers.ts 
Price:  12
Customer age:  29
Stock:  undefined
Discount:  100
Apply
hex:  4095
bin:  10
10
```

Recuerda: 

```shell
node dist/04-numbers.ts 🦄👉 Ver resultados
npx tsc --watch 👉🦄 Pasar todo a JS
```

[Extensión Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

Luego de instalar:  
- F1: Quokka.js: Start on Current File

Podremos ver el resultado usando `console.log()` o como ejemplo `user.password //?`

[🔥 Quokka.js, Curso Práctico de Quokka.js](https://www.youtube.com/watch?v=gpEJTPaOuys)

## 10. Booleans

Este tipo de dato solo puede tomar dos valores: `true` o `false`.

```ts
let isEnable: boolean = true;
let isNew = false;
```

### Código de la clase 

`src > 05-booleans.ts`  
```ts
(() => {
  let is_enable = true;
  is_enable = false;

  let is_new: boolean = false;
  console.log("Is new:", is_new);

  is_new = true;
  console.log("Is new:", is_new);

  const random = Math.random();
  console.log("Random:", random);

  is_new = random >= 0.5 ? true : false;
  // isNew = random > 0.5
  console.log('Is new:', is_new);
})();
```

Para ver el resultado de este código tienes dos opciones:  

- 🦄 Consola: `node dist/05-booleans.js` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File

📌 Dato `: boolean` no es lo mismo que `: Boolean`. Recuerda escribirlo en minúscula

## 11. Strings

Este tipo de dato nos permite almacenar una cadena de caracteres.

Podemos definir un `string` con:

1. Comillas simples:

```ts
let myProduct = 'Soda'; //CORRECTO
let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO
```

Se pueden usar comillas dobles dentro, más no otra vez comillas simples. A menos que escapemos el carácter que está haciendo conflicto usando un backslash `\`. 

```ts
let myName = 'Hi, I\'m Ghost'
console.log(myName) // Hi, I'm Ghost
```

2. Comillas dobles:

```ts
let myProduct = "Soda"; //CORRECTO
let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO
```

Se puede usar comillas simples dentro, más no otra vez comillas dobles.

3. Usando backticks:

```ts
let myName = `Frank`;
```

Esta forma de asignar `string` trae algunas ventajas:

- Declarar valores de múltiples líneas:

```ts
let texto = `
    Nunca
    pares
    de aprender :)
`;
```

- Concatenar dentro del mismo `string`. Para esto es necesario usar este símbolo del dólar seguido de llaves `${}` y escribir lo que queremos concatenar dentro de esas llaves:

```ts
let variableTitulo = "TypeScript";
let summary = `
    title: ${variableTitulo}
`;
```

- También respeta la indentación:

```ts
let html= `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ...
  </body>
</html>
`;
```

### Código de la clase 

`src > 06-strings.ts`
```ts
(() => {
  let product_title = "My amazing product.";
  product_title = "My amazing product changed.";
  console.log("Product title:", product_title);

  const product_description = `I'm a Lorem lorem lorem`;
  console.log("Product description:", product_description);

  let product_price = 100;
  let is_new: boolean = false;

  const summary = `
	Title: ${product_title}
	Description: ${product_description}
	Price: ${product_price}
	Is_new: ${is_new}
	`;

  console.log("Summary:", summary);
})();

/* 
node dist/06-strings.ts
*/
```

## 12. Arrays

Es una colección de datos ordenada. Los definimos de la siguiente manera:

```ts
let prices = [1,2,3,4,5];

/* Método Push para agregar un elemento al final del array */
prices.push(6);
console.log(prices); // [1,2,3,4,5,6]
```

Para el **array** `prices`, **TypeScript**, de no indicarle explícitamente, va a **inferir** que este solo contendrá valores del tipo `number`, por lo que si se quiere **agregar** un valor `string`, por ejemplo, nos indicará un **error**:

```ts
//TypeScript
prices.push("texto"); //ERROR. Se espera agregar solo números al array.
```

Esto debido a que en su inicialización se le asignó un array que solo contenía números.

También nos indicará error si pretendemos hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo:

```ts
let meses = ["Mayo","Junio","Julio"];
meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.
```

### Tipado de arrays en TypeScript

Lo puedes definir así:

- Indicar explícitamente los tipos de datos que almacenará el array:

```ts
let prices: (number | string)[] = ["hola",2,4,6,"mundo"];
let otherPrices: (boolean | number)[];
```

Para este caso, a menos que la variable sea una constante, no es necesario que inicialices la variable, pues ya le indicaste el tipo de dato.

- En la inicialización de la variable, colocar datos con el tipo de dato que quieres que soporte tu array en adelante para que lo pueda inferir TypeScript:

```ts
//TypeScript
let prices = ["hola",2,4,6,"mundo"];
// "hola", "mundo" => string
// 2,4,6 => number
```

Dejamos claro que queremos que soporte los tipos de dato `string` y `number`.

### Código de la clase 

`src > 07-arrays.ts`
```ts
(() => {
  let prices = [1, 2, 2, 1, 1, 212, "hi", true];
  prices.push(123);
  prices = [1, 2, 2];

  let products = ["TV", true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ["TV", true];
  mixed.push(12);
  mixed.push("Car");
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 2, 1, 1, 212];
  let result = numbers.map((item) => item * 2);
  console.log(result);
})();
```

## 13. Any

Es un tipo de dato exclusivo de TypeScript. Su traducción sería “cualquiera”, ya que literalmente nos permite almacenar cualquier tipo de dato en una variable:

```ts
let myDynamicVar: any;

myDynamicVar = 100; // number
myDynamicVar = null;
myDynamicVar = {}; // Object
myDynamicVar = ""; // string
```

Se recomienda **no usar este tipo de dato**, por ser considerado **mala práctica**.

### Importancia del Any

La utilidad de `any` radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

### Tratar Any como un primitivo

Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:

```ts
//Caso 1
myDynamicVar = "HOLA";
const otherString = (myDynamicVar as string).toLowerCase();

//Caso 2
myDynamicVar = 1212;
const otherNumber = (<number>myDynamicVar).toFixed();
```

Como observamos, podemos tratar nuestra variable `any` como `string` en el primer caso y como `number` en el segundo. Después de esto, podemos acceder a los métodos `toLowerCase()` y `toFixed()` según el tipo de dato correspondiente.



### Código de la clase 

`src > 08-any.ts`  
```ts
(() => {
  let my_dynamic_var: any;
  my_dynamic_var = 100;
  my_dynamic_var = null;
  my_dynamic_var = {};
  my_dynamic_var = "";

	my_dynamic_var = 'Hola';
	const rta = (my_dynamic_var as string).toLowerCase();
	console.log('Respuesta:', rta);
	
	my_dynamic_var = 1212;
	const rta2 = (<number>my_dynamic_var).toFixed();
	console.log('Respuesta:', rta2);
})();

/* 
node dist/08-any.ts
*/
```

## 14. Union Types

Los `|` nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.

```ts
let userId: string | number;

userId = 10;
userId = "10";

function helloUser(id: string | number){
    console.log(`Hola usuario con el número de id ${id}`);
}
```

Aquí indicamos que **id** y **userId** pueden ser de tipo `string` o `number`.

### Una mejor práctica

El tipo de dato `any` nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.

### Código de la clase 

`src > 09-union-types.ts`  
```ts
(() => {
  let user_id: string | number;
  user_id = 1212;
  user_id = "asasa";

  function greeting(my_text: string | number) {
    if (typeof my_text === "string") {
      console.log(`String lower case: ${my_text.toLowerCase()}`);
    } else {
      console.log(`Number to fixed: ${my_text.toFixed(1)}`);
    }
  }

  greeting("Ale Roses");
  greeting(12.1212);
})();
```

- 🦄 Consola: `node dist/09-union-types.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File

[Documentación](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)  

## 15. Alias y tipos literales

Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:

```ts
type UserID = string | boolean | number;
```

¡Ahora `UserID` lo podemos usar como si fuese un tipo de dato `string`, `boolean` o `number`!

```ts
let dynamicVar: UserID = "300";

dynamicVar = true;
dynamicVar = 200;
```

Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.

```ts
type UserID = string | boolean | number;

let dynamicVar: UserID = "300";

function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
}
```

**Nota:** la palabra _type_ en los Alias es algo propio de TypeScript.

### Tipos Literales (Literal Types)

Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:

```ts
let shirtSize: "S" | "M" | "L" | "XL";

shirtSize = "M"; //CORRECTO
shirtSize = "S"; //CORRECTO
shirtSize = "qwrty"; //ERROR. No está en las opciones.
shirtSize = "SS"; //ERROR. Letra de más.
shirtSize = "m"; //ERROR. Está en minúscula.
```

Definimos que la variable `shirtSize` pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo `string` y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

### Alias + Tipos Literales

También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:

```ts
type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSize: Sizes;
shirtSize = "M";

function yourSize( userSize: Sizes ){
    console.log(`Tu medida es ${userSize}`);
}
```

Nota: Los nombres de los `type` deben estar en `PascalCase`. Otras notaciones pueden ser `camelCase` y mi favorita `snake_case` 🦄🔥


### Código de la clase 

`src > 10-alias.ts`  
```ts
(() => {
  type UserId = string | number | boolean;
  let user_id: UserId;

  // Literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirt_size: Sizes;
  shirt_size = "S";
  shirt_size = "M";
  shirt_size = "L";
  shirt_size = "XL";

  function greeting(user_id: UserId, size: Sizes) {
    if (typeof user_id === "string") {
      console.log(`String lower case: ${user_id.toLowerCase()}`);
    }
  }

	greeting(1111, 'S')
	greeting('AB', 'S')
})();
```

- 🦄 Consola: `node dist/10-alias.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File


## 16. Null y Undefined  

Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, `string` o `number`.

El tipo de dato`null` es para indicar un valor nulo y `undefined` para algo indefinido. Son tipos diferentes.

### Null y Undefined como tipo Any

En **TypeScript**, si **no especificamos** que va a ser `null` o `undefined`, estos son **inferidos** como tipo `any`:

```ts
//TypeScript
let myVar = null; //Tipo any
let otherVar = undefined; //Tipo any

let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; //Tipo undefined
```

### Union Types como emergencia

Hay casos en la que queremos que una variable sea de tipo `string` o `number` y que al inicializarlas sean de tipo `null` o `undefined` para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los [Union Types](https://platzi.com/clases/2878-typescript/47243-union-types/):

```ts
let myNumber: number | null = null;
myNumber = 50;

let myString: string | undefined = undefined;
myString = "Hola TypeScript";
```


### Código de la clase 

`src > 11-undefined-null.ts`  
```ts
(() => {
  let my_null: null = null;
  let my_undefinded: undefined = undefined;

  let my_number: number | null = null;
  my_number = 12;

  let my_string: string | undefined = undefined;
  my_string = "lol";

  function hi(name: string | null) {
    let hello = "Hola ";

    if (name) {
      hello += "name";
    } else {
      hello += "nobody";
    }

    console.log(hello);
  }

  function hi_two(name: string | null) {
    let hello = "Hola ";

    hello += name?.toLowerCase() || 'nobody';
    // Optional chaining (?.)
    console.log(hello);
  }

  hi("Ale Roses");
  hi(null);

  hi_two("Ale Roses");
  hi_two(null);
})();
```

- 🦄 Consola: `node dist/11-undefined-null.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File

## 17. Funciones

Las **funciones** son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:

- Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):

```ts
type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
){
   return {
        title,
        createdAt,
        stock,
        size
    }
}
```

En el argumento `createdAt` se indica que es de tipo Date en alusión al **objeto Date** propio de JavaScript y no a un tipo de dato como `string` o `number`. Son diferentes las definiciones.

- Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:

```ts
const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
)
```

![Ejemplo de una función en TypeScript](https://static.platzi.com/media/articlases/Images/ts10l.png)

En **Visual Studio Code**, si dejas el cursor sobre el nombre de la función que vas a invocar, te mostrará un mensaje con los detalles de la función, lo que espera como parámetros y lo que devolverá indicando además el orden y el tipo de dato de cada variable.

- Si queremos que un argumento sea opcional de enviar, podemos usar el modificador `?` junto al nombre del argumento:

```ts
type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
){
    /*Código de la función*/
}
```

**Nota:** cuando definamos **argumentos opcionales** en una función, estas **deben** ubicarse al **final**, si no **TypeScript** nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:

```ts
function randomFunc(title: string, amount?: number){} //CORRECTO

function otherFunc(title?: string, amount: number){} // ERROR
```

### Return explicito con `( )` en vez de `{ }`

```ts
const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => ({ title, createdAt, stock, size });
```


### Código de la clase 

`src > 12-functions.ts`  
```ts
(() => {
  type Sizes = "S" | "M" | "L" | "XL";

  function create_products_to_json(
    title: string,
    created_at: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      created_at,
      stock,
      size,
    };
  }

  const product_01 = create_products_to_json("P1", new Date(), 12, "XL");
  console.log(product_01);
  console.log(product_01.title);
  console.log(product_01.stock);

  const create_products_to_json_two = (
    title: string,
    created_at: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      created_at,
      stock,
      size,
    };
  };

  const product_02 = create_products_to_json_two("P2", new Date(), 12);
  console.log(product_02);
  console.log(product_02.title);
  console.log(product_02.stock);
  console.log(product_02.size);
})();
```

- 🦄 Consola: `node dist/11-undefined-null.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File

## 18. Retorno de funciones

En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno:

### Retornos tipados en TypeScript

El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:

1. **Void: funciones sin retorno**  
    Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo `void`. Se definen así:

```ts
//TypeScript
function imprimirNombre(yourName: string): void {
    console.log(`Hello ${yourName}`);
}
```

2. **Funciones con retorno**  
    Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:

```ts
//TypeScript
function suma(a: number, b: number): number {
    return a + b;
}

function holaMundo(): string {
    return "Hello, World!";
}
```

También los retornos pueden ser más de un tipo de dato:

```ts
//TypeScript
function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if( b > a ) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
}
```

### TypeScript también lo infiere

Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea `string`, `number`, etc.) o si nada es devuelto (tipo `void`).



### Código de la clase 

`src > 13-return-functions.ts`  
```ts
(() => {
  const calc_total = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const print_total = (prices: number[]): void => {
    const rta = calc_total(prices);
    console.log(`Total: ${rta}`);
  };

  // const rta = print_total([1, 2, 3, 4, 5]);
  // rta no return nada así que es void (vacío)
  print_total([1, 2, 3, 4, 5]);
})();
```

- 🦄 Consola: `node dist/13-return-functions.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File

## 19. Objetos en funciones

Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:

```ts
//TypeScript
function imprimirDatos( data: { username: string, email: string } ): void {

    console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)
    
}

imprimirDatos({
      username: 'freddier',
      email: 'freddy@email.com'
})
```

En el ejemplo, el nombre `data` hace referencia al objeto que recibirá la función `imprimirDatos`. Por ello, para acceder al valor de `username` lo definimos en el `console.log` como `data.username` y para el `email` como `data.email`, pues así es como se accede a las propiedades de un objeto.

Finalmente, cuando invocamos `imprimirDatos` y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como `data` tal como lo hicimos en la definición de la función.


### Código de la clase 

`src > 14-functions-objs.ts`  
```ts
(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({
    email: "ale@roses.co",
    password: 123,
  });

  type Sizes = "S" | "M" | "L" | "XL";
  const products: any[] = [];

  const add_product = (data: {
    title: string;
    created_at: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  add_product({
    title: "Product 01",
    created_at: new Date(),
    stock: 12,
  });
	add_product({
    title: "Product 02",
    created_at: new Date(),
    stock: 13,
		size: 'XL'
  });

	console.log(products);
	
})();
```

- 🦄 Consola: `node dist/14-functions-objs.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File

## 20. Objetos como tipos

En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:

```ts
//TypeScript
type userData = {
    username: string,
    email: string
}
```

Y luego este “nuevo tipo” puede ser usado en un `array`, por ejemplo, para definir el tipado de los objetos que queramos añadir:

```ts
//TypeScript
type userData = {
    username: string,
    email: string
}

let usersList: userData[] = [];

usersList.push({
    username: "freddier", //CORRECTO
    email: "freddy@email.com", //CORRECTO
});
usersList.push({
    username: "cvander", //CORRECTO
    email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
});
```


### Código de la clase 

`src > 15-objs.ts`  
```ts
(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string;
    created_at: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];

  const add_product = (data: Product) => {
    products.push(data);
  };

  add_product({
    title: "Product 01",
    created_at: new Date(),
    stock: 12,
  });
  add_product({
    title: "Product 02",
    created_at: new Date(),
    stock: 13,
    size: "XL",
  });

  console.log(products);
})();
```

- 🦄 Consola: `node dist/15-objs.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File


## 21. Módulos: import y export

Nuestro código puede ser dividido en varios **módulos** (archivos), por lo que para poder usar las funciones o variables que existen en uno y queramos acceder desde otro, utilizamos `import` y `export`.

### Export

```ts
/*---->  Archivo: funciones.ts  <----*/
export function suma(a: number, b: number): number {
    return a + b;
}

export function resta(a: number, b: number): number {
    return a - b;
}

export let numerosRandom = [1, 30, 40, 50];
export type Sizes = "S" | "M" | "L" | "XL";
```

Como observamos, tenemos un archivo llamado `funciones.ts` la cual contiene dos funciones: _suma_ y _resta_. Si estas queremos usarlas desde otro archivo, necesitamos usar la palabra reservada `export` justo antes de definir nuestra función (lo mismo aplica para las variables). De esta forma indicamos que serán exportados para ser utilizados desde otro archivo JavaScript/TypeScript.

### Import

```ts
/*---> Archivo: programa.ts  <---*/
import {suma, resta, Sizes} from "./funciones.ts";
```

Finalmente, las funciones o variables que queramos utilizar desde otro archivo son importadas de la siguiente manera:

1. Usamos la palabra reservada `import`
2. Entre llaves indicamos las funciones y/o variables que queremos acceder. Hacemos una separación con comas
3. Usamos la palabra reservada `from`, seguido de, entre comillas dobles o simples, la ruta de la ubicación en la que se encuentra el archivo del cual estamos importando su código.

### Nota

Si es un módulo **TypeScript** lo que estamos importando, es importante que en la **ruta** de los **import** figure la **extensión `.ts`** de dicho archivo. Si es un archivo JavaScript, colocar la **extensión `.js`** es **opcional**.


### Código de la clase 

Creamos la siguiente estructura:  
```bash
╰─ tree -L 3
.
├── 01-hello.ts
├── ...
├── 15-objs.ts
├── demo.ts
└── products 👈👀👇🔥
    ├── main.ts 
    ├── product.model.ts 
    └── product.service.ts 
```

`src > products > product.model.ts`  
```ts
export type Sizes = "S" | "M" | "L" | "XL";
export type Product = {
  title: string;
  created_at: Date;
  stock: number;
  size?: Sizes;
};
```

`src > products > product.service.ts`  
```ts
import { Product } from "./product.model";

export const products: Product[] = [];

export const add_product = (data: Product) => {
  products.push(data);
};

export const calc_stock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });

  return total;
};
```

`src > products > main.ts`  
```ts
import { products, add_product, calc_stock } from "./product.service";

add_product({
  title: "Product 01",
  created_at: new Date(),
  stock: 5,
});

add_product({
  title: "Product 02",
  created_at: new Date(),
  stock: 6,
  size: "XL",
});

console.log(products);

const total = calc_stock();
console.log(total);
```

```bash
╰─ node dist/products/main.js
[
  {
    title: 'Product 01',
    created_at: 2023-09-04T02:17:08.532Z,
    stock: 5
  },
  {
    title: 'Product 02',
    created_at: 2023-09-04T02:17:08.532Z,
    stock: 6,
    size: 'XL'
  }
]
11
```

- 🦄 Consola: `node dist/products/main.ts` y `npx tsc --watch`

### 🔥 Dato importante 

En caso de llegar a cambiar el nombre de alguna variable o función, te darás cuenta de que hace falta cambiar este mismo nombre en todos lados donde lo hayas usado, para esto tienes dos opciones que harán el trabajo por ti: 

1. Clic derecho sobre la palabra a cambiar y seleccionar `Rename Symbol`, se abrirá una ventana donde debes escribir el nuevo nombre y luego dar enter. 
2. Selecciona la palabra a cambiar y presiona F2, se te abrirá la misma ventana anterior, escribe el nuevo nombre y da enter. 

## 22. 

### Código de la clase 

`src > 11-undefined-null.ts`  
```ts

```

- 🦄 Consola: `node dist/11-undefined-null.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File




### Código de la clase 

`src > 11-undefined-null.ts`  
```ts

```

- 🦄 Consola: `node dist/11-undefined-null.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File




### Código de la clase 

`src > 11-undefined-null.ts`  
```ts

```

- 🦄 Consola: `node dist/11-undefined-null.ts` y `npx tsc --watch`
- 🦄 Quokka: F1: Quokka.js: Start on Current File