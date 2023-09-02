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
const my_name = 'Nicolas';
console.log(my_name);
```
Ahora podemos convertir este archivo .ts a un archivo .js usando el siguiente comando: 

```bash
npx tsc src/01-hello.ts
```

Ahora notamos que nuestro archivo demo.ts nos muestra un error en `.prize`, para no complicarnos solo elimínalo, además ya podemos quitarle el `//@ts-check`: 

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
      total += products[i];
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
Mostrando: Nicolas ✨

### Deno: un entorno nativo para ambos lenguajes

[Deno](https://deno.land/), del mismo creador de Node.js, es un nuevo entorno de ejecución para JavaScript que puede correr también nativamente TypeScript. Sin embargo, aún no tiene la madurez en el ecosistema de Node.js

_Contribución creada por: Martín Álvarez._










