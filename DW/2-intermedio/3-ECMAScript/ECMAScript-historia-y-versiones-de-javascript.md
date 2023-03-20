# Curso de ECMAScript: Historia y Versiones de JavaScript
> Oscar Barajas @gndx

## 1. Historia de JavaScript: ¿Qué es ECMAScript?

**ECMAScript** es una especificación de lenguaje de programación con la que trabaja JavaScript. [Ecma International](https://www.ecma-international.org/) está a cargo de estandarizar este lenguaje de programación, a través de una **serie de versiones que añaden funcionalidades nuevas**.

### El primer Navegador web

La historia del primer navegador web empieza desde la necesidad de comunicar varias computadoras, a través de los siguientes acontecimientos:

-   **1950:** Las computadoras surgen para analizar temas de la **Segunda Guerra Mundial**.
-   **1969:** Surge la **Red Arpanet**, capaz de conectarse dos computadoras para compartir información.
-   **1990:** Tim Berners-lee creó las bases de la web, la **World Wide Web**.
-   **1993:** Se crea **Mosaic**, el primer navegador web.
-   **1994:** Marc Andreessen crea la empresa **Netscape**, y a su vez crea el primer navegador comercial con el mismo nombre, con enlaces e imágenes muy primitivas.

### La guerra de navegadores

La guerra de los navegadores surge por la necesidad de las empresas de **acaparar con el mercado de la web**. En la primera guerra de navegadores, entre 1995 y 2001, se enfrentaron **Netscape y Microsoft** para posicionar comercialmente su propio navegador.

Incluso llegaron a hacerse bromas muy pesadas, como llevar el logo de Internet Explorer a las oficinas de Netscape. A partir de esta guerra surgieron nuevas tecnologías que perduran hasta la actualidad.

Los acontecimientos más importantes fueron:

-   **1995:** Microsoft crea su propio navegador web, **Internet Explorer**.
-   **1996:** Microsoft crea su propuesta de estilos para la web, **CSS**.
-   **1995:** Netscape crea su propuesta de lenguaje de programación para la web, **Mocha**. Después sería nombrado **LiveScript**, y finalmente **JavaScript**. JavaScript es un nombre elegido por _marketing_, ya que Java (otro lenguaje de programación) era muy popular en aquella época.
-   **1995:** Microsoft crea su propuesta de lenguaje de programación para la web, **JScript**.
-   **1997:** Se crea **ECMA**, _European Computer Manufacturer Association_, para estandarizar los múltiples lenguajes de programación que estaban surgiendo por parte de Netscape, Microsoft, y otras empresas más. **Este estándar se denomina ECMAScript o ES.**

### Evolución de ECMAScript

A partir de 1997, ECMA empezó a lanzar versiones para estandarizar el lenguaje. Alguna abandonada, como la ES4.

![Historia de ECMAScript](https://i.postimg.cc/3Rtsx3MM/01-ecma.png)

A partir de 2015, con ECMAScript 6, fue un antes y después para el lenguaje. Se incluyen varias funcionalidades que situaron a JavaScript como uno de los mejores lenguajes de programación.

### ¿Qué puedo o no utilizar de ECMAScript?

A lo largo de este curso aprenderás nuevas características de JavaScript. Sin embargo, puede que el **navegador en el que trabajes no la soporte**, esto por el mismo hecho de ser algo nuevo.

**Cada navegador web tarda un tiempo en aplicar las nuevas características de ECMAScript.** Esto quiere decir, que si utilizas una funcionalidad nueva, el navegador no las procese y colapse tu programa.

Como buena práctica te recomiendo el sitio web _[Can I use?](https://caniuse.com/)_, que muestra qué **funcionalidades añadidas por ECMAScript están soportadas por cada navegador.**

Esto es relevante para conocer **qué puedes aplicar o qué no en tu código**. También sirve para enfocarte en qué navegadores están tus clientes objetivo, y el producto entregado esté correcto para ellos.

![Página web para conocer las características que soporta cada navegador](https://i.postimg.cc/76rRPbtQ/01-can-I-use.png)

#### ¿Qué aprenderás?

En este curso aprenderás las nuevas características de cada versión de ECMAScript como:

-   Parámetros por defecto
-   Plantillas literales
-   Declaración de variables con let y const
-   Funciones flecha
-   Promesas y async / await
-   Clases y módulos

#### 🔥 Herramientas que emplearás

-   [Visual Studio Code](https://code.visualstudio.com/download) es el editor de código que se recomienda utilizar para tus proyectos y ofrece varias características para mejorar tu experiencia en el desarrollo.
    
-   Si estás usando Visual Studio Code, instala la extensión [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) que te permite ejecutar bloques de JavaScript y mostrar el resultado en la terminal.
    
-   La **consola del navegador** es importante para ver que está pasando con el código generado. La consola se muestra con la combinación de teclas `F12` / `Ctrl + Shift + I` / `Cmd + Opt + I` o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).
    
-   Una alternativa a Visual Studio Code es [Codi.link](https://codi.link/), un editor de código para escribir HTML, CSS y JavaScript; para visualizar el resultado a tiempo real.
   

_**Contribuciones del [curso](https://platzi.com/cursos/ecmascript-nuevo/) creadas por** [Andrés Guano](https://platzi.com/p/andresguanov/)._


## 2. ¿Qué es el TC39?

**TC39** es un grupo de desarrolladores, académicos y hackers que están a cargo de revisar cada nueva propuesta o funcionalidad que cumpla con el estándar. El estándar es una serie de pasos que la nueva propuesta sigue **para publicarla en la alguna versión de ECMAScript a futuro.**

### Etapas de una nueva propuesta para ECMAScript

Las etapas de una nueva propuesta para ECMAScript son:

-   **Idea:** Una inquietud del desarrollador.
-   **Propuesta:** Cómo y por qué la idea soluciona un problema.
-   **Borrador:** Todo lo que implica la nueva funcionalidad detalladamente.
-   **Candidato:** La funcionalidad es probada y desarrollada por el comité.
-   **Preparada:** La funcionalidad está lista para ser publicada.

![Etapas que sigue una propuesta de ECMAScript](https://i.postimg.cc/qRQPvyhM/02-ES-stage.png)

En la [página de TC39](https://tc39.es/) puedes revisar qué nuevas propuestas existen y en qué etapa están. El [GitHub](https://github.com/tc39) del TC39 (aquí puedes mandar tu propuesta para mejorar el lenguaje)

_**Contribución creada por** Andrés Guano (Platzi Contributor)._


## 3. Configurando nuestras herramientas

### 1. Instalar Node JS: 
[Link a la descarga](https://nodejs.org/en/download)    
> ![Pagina](https://i.postimg.cc/L6Pry6FT/03-download-nodejs.png)
> [Tutorial de la instalación](https://www.youtube.com/watch?v=czFj5zoI5uc)    
- reiniciar maquina 
- node -v
- npm -v

### 2. Instalar Git: [[git-github#3. Instalando Git y GitBash en Windows]]
- mkdir curso-ecmascript 
- git init 
- npm init -y
	- Keywords: JavaScript, ECMAScript
	- author: Ale Vel `<ale@outlook.com>`
	- License: (ISC) MIT 
	- yes
- code .
	- carpeta: src
		- carpeta: es6
			- archivos...  

### 3. Crear cuenta en GitHub [[git-github#19. Uso de GitHub]]

### 4. Instalar VSC [[0-prework-windows#2. Instalando nuestro editor de texto]]

### 5. Curso Básico de JS [[js-basico]]

🔥 Extensiones útiles:    
- auto close tag
- code runner ✨
- error lens ✨
- guides ✨
- indent-rainbow 
- live server
- javascript (es6) code snippets 
- **_Better Comments_**:
[Resumen de la clase](https://pogolo.notion.site/3-Configurando-nuestras-herramientas-cd23420b450a46c992294285d439d82e)  

## 4. ES6: let y const, y arrow functions

En **ECMAScript 6** (ES6 o ES2015) fueron publicadas varias características nuevas que dotaron de gran poder al lenguaje, dos de estas son una nueva forma de declaración de variables con `let` y `const`, y funciones flechas.

### La nueva forma para declarar variables con _let_ y _const_

Hasta ahora aprendiste a declarar variables con `var`, sin embargo, a partir de la especificación de ES6 se agregaron nuevas formas para la declaración de variables.

Las nuevas palabras reservadas `let` y `const` resuelven varios problemas con `var` como el _scope_, _hoisting_, variables globales, re-declaración y re-asignación de variables.

#### Variables re-declaradas y re-asignadas

**La re-declaración es volver a declarar una variable, y la re-asignación es volver a asignar un valor**. Entonces cada palabra reservada tiene una forma diferente de manejar variables:

-   Una variable declarada con `var` puede ser re-declarada y re-asignada.
-   Una variable declarada con `let` puede ser re-asignada, pero no re-declarada.
-   Una variable declarada con `const` no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

En conclusión, si intentas re-declarar una variable declarada con let y const habrá un error de “variable ya declarada”; por otro lado, si intentas re-asignar una variable declarada con `const` existirá un “error de tipo”.

En los demás casos, JavaScript lo aceptará como válidos, algo problemático con `var`, por eso deja de utilizarlo.

#### Ejemplo de declaración y asignación en diferentes líneas

```js
// Declaración de variables
var nameVar 
let nameLet

// Asignación de variables
nameVar= "soy var"
nameLet = "soy let"
```

Aunque realmente lo que pasa si no asignas un valor en la declaración, JavaScript le asigna un valor `undefined`.

#### Ejemplo de declarar y asignar con _const_ en diferentes líneas de código

```js
const pi  // SyntaxError: Missing initializer in const declaration.
pi = 3.14
```

#### Ejemplo de re-declaración de variables

```js
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.

const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.
```

#### Ejemplo de re-asignación de variables

```js
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.
```

Ten en cuenta que los errores pararán la ejecución de tu programa.

### _Scope_

En el tema del _scope_, `let` y `const` **tienen un _scope_ de bloque** y `var` no.

```js
{
var nameVar = "soy var"
let nameLet = "soy let"
}

console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined
```

Todo el tema de Scope tiene su propio curso que deberías haber tomado: _[Curso de Closures y Scope en JavaScript](https://platzi.com/cursos/javascript-closures-scope/)_

### Objeto global

En variables globales, `let` y `const`no guardan sus variables en el objeto global (`window`, `global` o `globalThis`), mientras que `var` sí los guarda.

```js
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined
```

Esto es importante para que no exista re-declaración de variables.

### Funciones flecha

Las funciones flecha _(arrow functions)_ consiste en una **función anónima** con la siguiente estructura:

```js
//Función tradicional
function nombre (parámetros) {
    return valorRetornado
}

//Función flecha
const nombre = (parámetros) => {
    return valorRetornado
}
```

Se denominan función flecha por el elemento `=>` en su sintaxis.

#### Omitir paréntesis en las funciones flecha

Si existe un solo parámetro, puedes omitir los paréntesis.

```js
const porDos = num => {
    return num * 2
}
```

#### Retorno implícito

Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada `return`, para que el **código sea escrito en una sola línea**.

```js
//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2
```

Si el retorno requiere de más líneas y aún deseas utilizarlo de manera implícita, deberás envolver el cuerpo de la función entre paréntesis.

```js
const suma = (num1, num2) => (
    num1 + num2
)
```

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo de clase:  

Análisis del alcance de var, let y cont dentro de un bloque de código. Además, vemos que var puede ser declarado e inicializado mas de una vez sin problemas, let solo puede ser declarado una vez, también permite inicializarse mas de una vez y const solo permite declarar e inicializar una sola vez. 
```js
const fruits = () => {
    if (true) {
    /* Var: function scope: alcance de la f.*/
        var fruit1 = 'Apple';
        var fruit1 = 'dog';
        fruit1 = 'Orange';
        console.log(fruit1);
    /* Let: block scope */
        let fruit2 = 'Kiwi'; 
        /* let fruit2 = 'Banana'; */
        fruit2 = 'Uva';
        console.log(fruit2);
    /* Const: block scope */
        const fruit3 = 'Banana'; 
        /* const fruit3 = 'Pera'; */
        /* fruit3 = 'Sandia'; */
        console.log(fruit3);
    }
    /* Var: Su alcance es global */
    console.log(fruit1);
    /* Let y Const: Su alcance no es global: Error */
    console.log(fruit2);
    console.log(fruit3);
} 

fruits();
```

También vimos como podemos simplificar una función usando la función flecha. 
```js
function square(num) {
    return num * num;
}

/* Arrow funtion */
const square = (num) => {
    return num + num;
}

const square = num => num * num; 
```

#### Lecturas recomendadas

- [Funciones Flecha - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 

- [Curso de Closures y Scope en JavaScript - Platzi](https://platzi.com/cursos/javascript-closures-scope/)




[Resumen](https://luis-ariza.notion.site/ECMAScript-Versiones-de-JavasCript-be6daa0ae0eb406f990238a07d677a5a)