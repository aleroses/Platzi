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

En **ECMAScript 6** (ES6 o ES2015) fueron publicadas varias características nuevas que dotaron de gran poder al lenguaje, dos de estas son una nueva forma de declaración de variables con `let` y `const`, y funciones flechas. [[js-basico#4. Variables en JavaScript]]

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

En el tema del _scope_, `let` y `const` **tienen un _scope_ de bloque** y `var` no. [[js-basico#7. Scope]]

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


## 5. ES6: strings

Las **plantillas literales** _(template literals)_ consisten en **crear cadenas de caracteres que puedan contener variables** sin utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código.

### Concatenación de caracteres

Antes de ES6, si querías crear una cadena larga o un mensaje elaborado, debías utilizar la concatenación. La concatenación de caracteres consiste en unir uno o varios caracteres, como si fuera una suma.

```js
var nombre = "Andres"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```

Esto trae varios **problemas en la legibilidad y mantenibilidad del código**. Se convierte cada vez más complejo en mensajes más extensos o el estar pendiente de agregar espacios antes o después de cada variable concatenada.

### Cómo utilizar las plantillas literales

Las plantillas literales añadidas en ES6, se emplea el carácter [acento grave](https://elcodigoascii.com.ar/codigos-ascii/acento-grave-codigo-ascii-96.html) ( **`**), que no es una comilla simple ( **’** ), para envolver el mensaje.   

Alt + 96  
![Alt 96](https://i.postimg.cc/tgMDCd2L/alt-96.gif)

Para incluir las variables se utiliza la sintaxis:   
```js
`${variable}`
```

```js
var nombre = "Andres"
var edad = 23

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```

De esta manera el código es más legible y que pueda mantenerse.

#### Plantilla multilínea

La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando las [plantillas literales](https://platzi.com/clases/1815-ecmascript-6/26121-default-params-y-concatenacion/). Antes de ES6, la forma de crear una plantilla multilínea era agregar `\n` al `string`.

```js
var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1
// línea 2'
```

Con ES6 solamente necesitas utilizar las plantillas literales.

```js
const mensaje = `Línea 1
línea 2`

console.log(mensaje)
// Línea 1
// línea 2
```

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Lecturas recomendadas

- [Plantillas literales (plantillas de cadenas) - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
- [Símbolo de acento grave](https://www.tecnolopedia.com/ascii/acento-grave/) 


## 6. ES6: parámetros por defecto

Los **parámetros por defecto** _(default params)_ **consisten en establecer un valor por defecto a los parámetros de una función**, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.

### ¿Cómo era utilizar valores por defecto antes de ES6?

Tal como puedes ver en el siguiente código, la función `sumar` recibe dos parámetros y retorna el valor total. Sin embargo, si alguien no decide poner alguno o todos los parámetros necesarios, pues que el programa no funcionará correctamente.

```js
function sumar(number1, number2){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // NaN  
sumar()    // NaN
```

Antes de ES6, se debía establecer una variable y utilizar el operador OR ( `||`) con el valor por defecto necesario. El carácter guion bajo ( `_`) lo utilizo para diferenciar el parámetro de la función de la variable declarada.

```js
function sumar(number1, number2){
  var _number1 = number1 || 0
  var _number2 = number2 || 0
  
  return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
```

### Cómo utilizar los parámetros por defecto

Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:

```js
function sumar(number1 = 0, number2 = 0){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
```

Puedes utilizar cualquier valor, siempre que sea necesario.

#### Posición de los parámetros por defecto

Si obligatoriamente necesitas el valor como argumento, ten presente que los parámetros por defecto siempre deben estar en las **posiciones finales**.

```js
// ❌ Mal
function sumar(number1 = 0, number2) { ... }
sumar(3)   // number1 = 3 y number2 = undefined 

// ✅ Bien
function sumar(number1, number2 = 0) { ... }
sumar(3)   // number1 = 3 y number2 = 0
```

![Parámetros predeterminados](https://i.postimg.cc/q7f0zFjT/6-default-arguments.webp)  

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

[Documentación Parámetros predeterminados](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)   


## 7. ES6: asignación de desestructuración  

La **desestructuración** _(destructuring)_ consiste en **extraer los valores de _arrays_ o propiedades de objetos en distintas variables**.

### Desestructuración de objetos

La desestructuración de objetos implica extraer las propiedades de un objeto en variables. Mediante el mismo nombre de la propiedad del objeto con la siguiente sintaxis:

```js
const objeto = { 
    prop1: "valor1",
    prop2: "valor2",
    ... 
} 

// Desestructuración
const { prop1, prop2 } = objeto
```

Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente.

```js
var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
```

Con la desestructuración puedes realizar lo mismo, pero en una sola línea, provocando que el código seas más legible y mantenible.

```js
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
```

#### Cambiar el nombre de las variables con desestructuración

Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando la siguiente sintaxis:

```js
const objeto = { prop1: "valor1", prop2: "valor2", ... } 

// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto
```

Por ejemplo:

```js
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined
```

#### Desestructuración en parámetros de una función

Si envías un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.

```js
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'
```

### Desestructuración de _arrays_

La desestructuración de _arrays_ consiste en extraer los valores de un _array_ en variables, utilizando la **misma posición del _array_** con una sintaxis similar a la desestructuración de objetos.

```js
const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3
```

#### Desestructuración para valores retornados de una función

Cuando una función retorna un _array_, puedes guardarlo en una variable. Por ende, puedes utilizar la desestructuración para utilizar esos valores por separado de manera legible.

En el siguiente ejemplo, la función `useState` retorna un _array_ con dos elementos: un valor y otra función actualizadora.

```js
function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)
```

#### Lo que puedes hacer con desestructuración, pero no es recomendable

Si necesitas un elemento en cierta posición, puedes utilizar **la separación por comas** para identificar la variable que necesitas.

```js
const array = [ 1, 2, 3, 4, 5 ]

const [ ,,,,  cinco ] = array

console.log(cinco) // 5
```

Como los _arrays_ son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el **índice y utilizando un nombre para la variable**.

```js
const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5
```

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo hecho en clase:   

```js
// Arrays destructuring 
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b, fruits[1]);

// Object destructuring 
let user = { username: 'Oscar', age: 34, country: 2};
let { username, age, country } = user;
console.log(username, age, country, user.age);
```

![Ejemplo](https://i.postimg.cc/Ls11dG0g/7-desestructuracion.webp)

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


## 8. ES6: spread operator

El **operador de propagación** _(spread operator)_, como su nombre lo dice, consiste en **propagar los elementos de un iterable**, ya sea un _array_ o _string_ utilizando tres puntos (`...`) dentro de un array.

```js
// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]
```

También se utiliza para **objetos**, pero esta característica fue añadida en versiones posteriores de ECMAScript y es denominada _[propiedades de propagación](https://platzi.com/clases/3504-ecmascript-nuevo/51771-expresiones-regulares/)_.

### Cómo copiar arrays utilizando el operador de propagación

Para realizar una copia de un _array_, deberás tener cuidado de la **referencia en memoria**. Los _arrays_ se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto, **si cambias algo en la copia, también lo harás en el original.**

```js
const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

console.log(originalArray);
console.log(copyArray);

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true
```

Para evitar esto, utiliza el operador de propagación para crear una copia del _array_ que utilice una **referencia en memoria diferente al original**.

```js
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

console.log(originalArray);
console.log(copyArray);

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false
```

### Cómo unir arrays y añadir elementos con el operador de propagación

Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un _array_.

```js
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]
```

#### Cuidado con la copia en diferentes niveles de profundidad

El operador de propagación sirve para producir una copia en **un solo nivel de profundidad**, esto quiere decir que si existen objetos o _arrays_ dentro del _array_ a copiar. Entonces los sub-elementos en cada nivel, tendrán la **misma referencia de memoria en la copia y en el original**.

```js
const originalArray = [1, [2,3] ,4,5]
const copyArray = [...originalArray]

originalArray[1] === copyArray[1] // true
```

La manera de solucionar es más compleja, tendrías que emplear el operador de propagación para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de producir una copia profunda con [StructuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone), aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.

```js
const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

originalArray === copyArray  // false
originalArray[1] === copyArray[1] // false
```

Este comportamiento también sucede para objetos dentro de otros objetos, u objetos dentro de arrays.

### Parámetro _rest_

El parámetro _rest_ consiste en **agrupar el residuo de elementos** mediante la sintaxis de tres puntos (`...`) seguido de una variable que contendrá los elementos en un _array_.

Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un _array_.

```js
function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)
```

También sirve para obtener los elementos restantes de un _array_ u objeto usando [desestructuración](https://platzi.com/clases/3504-ecmascript-nuevo/51756-asignacion-de-destructuracion/).

```js
const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
}

const {plataforma, ...usuario} = objeto
// usuario: { nombre: 'Andres', age: 23 }
// plataforma: Platzi
console.log(objeto);
console.log(plataforma);
console.log(usuario);

const array = [0,1,2,3,4,5]
const [cero, ...positivos] = array
// cero: 0
// positivos: [ 1, 2, 3, 4, 5 ]
console.log(cero);
console.log(positivos);
```

#### Posición del parámetro _rest_

El parámetro _rest_ **siempre deberá estar en la última posición** de los parámetros de la función, caso contrario existirá un error de sintaxis.

```js
// ❌ Mal
function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 
```

#### Diferencias entre el parámetro _rest_ y el operador de propagación

Aunque el parámetro _rest_ y el operador de propagación utilicen la misma sintaxis, son diferentes.

El parámetro _rest_ agrupa el **residuo de elementos** y siempre debe estar en la última posición, mientras que el operador de propagación **expande los elementos de un iterable en un _array_** y no importa en que lugar esté situado.

```js
const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")
```

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo hecho en clase:   

```js
// spread operator 
let person = { name: 'oscar', age: 28 };
let country = 'MX';

let data = { ...person, country, id: 2};
console.log(data);

// rest 
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
```

Ejemplo loco:   
```js
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)
```

- [Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)    
- [Cómo clonar un Array en JavaScript de forma correcta y sin problemas](https://midu.dev/como-clonar-un-array-en-javascript/)


## 9. Combina objetos JSON con el Spread Operator

En este desafío recibirás dos objetos JSON por parámetros.

Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

**JSON 1:**

```json
{
    name: "Mr. Michi",
    food: "Pescado"
}
```

**JSON 2:**

```json
{
    age: 12,
    color: "Blanco"
}
```

La solución deberá tener un input y output como la siguiente, recuerda que se te pueden o no enviar los parámetros.

Input:

```js
solution({
    name: "Bigotes",
    food: "Pollito"
}),
```

Output:

```json
{
    name: "Bigotes",
    food: "Pollito",
    age: 12,
    color: "Blanco"
}
```

### 🔥 Mi solución: No tan bien...   

```js
function solution(json1, json2) {
    var json1 = json1 || {name: 'Mr. Michi', food: 'Pescado'}
    var json2 = json2 || {age: 12, color: 'Blanco'}
    var data = {...json1, ...json2}

    console.log(data);
}

solution({name: 'Mr. Bigotes', food: 'Pollito'}, { age: 12, color: 'Blanco'});
```

### ✨ Solución ofrecida: bien...   

```js
export function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado",
    },
    json2 = {
        age: 12,
        color: "Blanco",
    }
) {
/* return {...json1, ...json2}; */
console.log({...json1, ...json2});
}

solution({
    name: "Bigotes",
    food: "Pollito"
})

```


## 10. ES6: object literals

Los **objetos literales** consiste en crear objetos a partir de variables **sin repetir el nombre**. Antes de ES6, para crear un objeto a partir de variables consistía en la siguiente manera:

```js
const nombre = "Andres"
const edad = 23

const objeto = {
    nombre: nombre, 
    edad: edad
}

objeto // { nombre: 'Andres', edad: 23 }
console.log(objeto);
```

### Cómo utilizar objetos literales

Con los parámetros de objeto puedes **obviar la repetición de nombres**, JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor.

```js
const nombre = "Andres"
const edad = 23

const objeto = {nombre, edad}

objeto // { nombre: 'Andres', edad: 23 }
```

El resultado es el mismo, pero sin la necesidad de repetir palabras. Puedes combinarlo con variables que su propiedad tiene un nombre diferente.

```js
const nombre = "Andres"
const edad = 23
const esteEsUnID = 1

const objeto = {
    nombre, 
    edad,
    id: esteEsUnID
}

objeto // { nombre: 'Andres', edad: 23, id: 1 }
```

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo hecho en clase:    

Forma anterior:   
```js
function newUser(user, age, country, uId) {
    return {
        user: user,
        age: age,
        country: country,
        id: uId
    }
}

console.log(newUser('ghost', 16, 'PE', 1));
```

Nueva forma:   
```js
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('ghost', 16, 'PE', 1));
```


## 11. ES6: promesas

Una **promesa** es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

### Cómo utilizar las promesas

Solamente ten presente que la clase `Promise` y sus métodos `then` y `catch` fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con _callbacks_, llamado _[Callback Hell](https://miro.medium.com/max/721/0*iiecmuTLPBqbxd5V.jpeg)_.

El argumento de la clase `Promise` es una función que recibe dos parámetros:

-   `resolve`: cuando la promesa es **resuelta**.
-   `reject`: cuando la promesa es **rechazada**.

Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.

```js
const promesa = () => {
  return new Promise((resolve, reject) => {
    if (something) {
      //true o false
      resolve("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)) //En caso que se ejecute reject
```

### Cursos para entender el asincronismo en JavaScript

Si aún no sabes en qué consiste el asincronismo, no te preocupes, existen cursos completos de este tema.

-   [Curso de JavaScript Engine (V8) y el Navegador](https://platzi.com/cursos/javascript-navegador/)
-   [Curso de Asincronismo con JavaScript](https://platzi.com/cursos/asincronismo-js-2019/)

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

- Este [video](https://youtu.be/rKK1q7nFt7M?t=36) ayuda a entender más claramente las promesas.
- Les dejo un video para entender un poco mejor este tema de las promesas  [Curso JavaScript: 47. Promesas - #jonmircha](https://www.youtube.com/watch?v=ppzrpTjwEC8)


## 12. ES6: clases

### Bases teóricas sobre la _Programación Orientada a Objetos_

Comencemos por el aspecto **teórico**:  

-   **Clases:** Es una plantilla. Una definición genérica de algo que tiene atributos (datos/variables) y métodos (acciones/funciones) y desde la cual se pueden crear objetos.
-   **Objetos:** Un elemento real que fue creada con base en una clase (plantilla) y que hereda (contiene) sus atributos y métodos.  

¿Lo vemos con un ejemplo?:   
Tenemos una clase _Animal_ que tiene como atributos: _especie_, _edad_, _patas_ y tiene como métodos: _dormir_, _comer_, _caminar_. A partir de esa clase genérica podemos instanciar objetos de ese tipo, como los siguientes:  

-   **Objeto _perro_:** especie: canino, edad: 3, patas: 4. Puede dormir, comer y caminar.
-   **Objeto _paloma_:** especie: ave, edad: 1, patas: 2. Puede dormir, comer y caminar.
-   **Objeto _gato_:** especie: felino, edad: 2, patas: 4. Puede dormir, comer y caminar.  
    ㅤ  
    _Estos tres objetos fueron creados con base en la clase Animal (a esto se le llama instanciar un objeto a partir de una clase), y por ende, cada uno es un objeto de tipo Animal y cada uno tiene los atributos y métodos definidos en la clase._

Ahora, a nivel más **técnico**, utilizamos los siguientes conceptos:  

-   **Constructor:** Es un método que contiene una serie de instrucciones que se encargan de inicializar un objeto cuando es instanciado a partir de esa clase. Básicamente, asigna los valores de los atributos que le enviemos a ese objeto nuevo. Es una función que se ejecuta automáticamente.
-   **Getter y Setter:** Son funciones sencillas de entender: obtener el valor de un atributo o establecerlo. Se crean de esta manera por un concepto de la POO denominado _encapsulamiento_, que consiste, entre otras cosas, en limitar el acceso a las clases para tener mayor control sobre ellas.
-   **This:** Con este objeto de contexto hacemos referencia al propio objeto que se está instanciando y no a la clase.  
    ㅤ  
    Llevemos entonces el ejemplo de los animales a JavaScript para poder aterrizar todos estos conceptos teóricos de las clases:

```js
// Declaración de la clase Animal
class Animal {

	// Constructor: le enviamos a la clase los valores para los atributos del nuevo objeto (como argumentos) y el constructor se encarga de asignarlos:
	// (Recordar: this hace referencia al objeto).
	constructor(especie, edad, patas) {
		this.especie = especie; // Asignar atributo especie al objeto
		this.edad = edad; // Asignar atributo edad al objeto
		this.patas = patas; // Asignar atributo patas al objeto
	}

	// Métodos de la clase: pueden contener cualquier lógica.
	dormir() {
		return 'Zzzz';
	}

	comer() {
		return 'Yummy!';
	}

	caminar() {
		return '¡Caminando!, la la la';
	}

	// Getter y Setter (solo para edad para no alargar)
	// (Recordar: this hace referencia al objeto)
	get getEdad() {
		return this.edad;
	}

	set setEdad(newEdad) {
		this.edad= newEdad;
	}
}

// Ahora instanciemos los objetos: tendremos perro, paloma y gato como objetos de tipo Animal. Al enviar el valor de los atributos como argumentos, el constructor automáticamente los asigna al nuevo objeto.
const perro = new Animal('canino', 3, 4);
const paloma = new Animal('ave', 1, 2);
const gato = new Animal('felino', 2, 4);

// Podemos acceder a los métodos desde cada objeto:
perro.dormir();	// Retorna 'Zzzz'
paloma.comer(); // Retorna 'Yummy!'
gato.caminar(); // Retorna '¡Caminando!, la la la'

// Usamos los getter para obtener los valores de los atributos y los setters para reasignarlos.
perro.getEdad; // Retorna 3 👈👀
gato.setEdad = 3; // Cambia su atributo edad a 3 👈👀
```
ㅤ  
`Algo interesante que noté` - NO se requieren los paréntesis para ejecutar los métodos getters & setters de una clase. 


## 13. ES6: module  

Para que el código de JavaScript sea más ordenado, legible y mantenible; ES6 introduce una forma de manejar código en **archivos de manera modular**. Esto involucra **exportar** funciones o variables de un archivo, e **importarlas** en otros archivos donde se necesite.

### Cómo utilizar los módulos de ECMAScript

Para explicar cómo funciona las exportaciones e importaciones de código, debes tener mínimo dos archivos, uno para **exportar** las funcionalidades y otro que las **importe** para ejecutarlas.

Además, si iniciaste un proyecto con NPM _(Node Package Manager)_ con Node.js, necesitas especificar que el código es modular en el archivo `package.json` de la siguiente manera:

```json
// package.json
{   ...
    "type": "module"
}
```

✨ Puedes evitar la configuración del JSON usando la extensión `.mjs`, esta le indica a JavaScript que es un módulo:    
![hello.PNG](https://i.postimg.cc/65CqP7Yq/13-module.webp)

En caso de que estés trabajando en un proyecto muy básico sin dependencias y no tienes un archivo JSON, puedes agregar el atributo type=“module” al script en tu html.

```html
<script src="./index.js" type="module"></script>
```


#### Qué son las exportaciones de código

Las exportaciones de código consisten en **crear funciones o variables para utilizarlas en otros archivos** mediante la palabra reservada `export`.

Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves `{}`.

Por ejemplo, en el archivo `math_function.js` declaramos una función para sumar dos valores, el cual lo exportaremos.

```js
//math_function.js
export const add = (x,y) => {
    return x + y
}
```

```js
//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction, ... }
```

#### Qué son las importaciones de código

Las importaciones de código consiste en **usar funciones o variables de otros archivos** mediante la palabra reservada `import`, que deberán estar siempre lo más arriba del archivo y utilizando el **mismo nombre que el archivo original**.

Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves `{}`.

Por ejemplo, importamos la función `add` del archivo `math_function.js` para utilizarla en un archivo `main.js`.

```js
// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4
```

Si importamos el módulo con un nombre diferente, existirá un error de sintaxis.

```js
// Erróneo
import { suma } from './math_functions.js'

suma(2,2) //SyntaxError: The requested module '/src/archivo1.js' does not provide an export named 'suma'
```

**Para importar todas las funcionalidades de un archivo se utiliza un asterisco** (`*`) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada `as`.

```js
// main.js
import * as myMathModule from './math_functions.js';

myMathModule.add(2,2) //4
myMathModule.otherFunction()
...
```

#### Exportaciones por defecto

**Si solo UN valor será exportado**, entonces se puede utilizar `export default`. De esta manera no es necesario las llaves `{}` al exportar e importar.

```js
//math_function.js
export default function add (x,y){
    return x + y;
}
```

Adicionalmente, no se puede usar `export default` antes de declaraciones `const`, `let` o `var`, pero puedes exportarlas al final.

```js
// ❌ Erróneo
export default const add  = (x,y) => {
    return x + y;
}

// ✅ Correcto
const add  = (x,y) => {
    return x + y;
}

export default add;
```

#### Importaciones por defecto

Si únicamente un valor será importado, entonces se puede utilizar **cualquier nombre en la importación**. De esta manera no es necesario las llaves `{}`.

```js
//Las siguientes importaciones son válidas
import  add  from './math_functions.js'
import  suma  from './math_functions.js'
import  cualquierNombre  from './math_functions.js'
```

Sin embargo, es recomendable utilizar siempre el nombre de la función, para evitar confusiones.

#### Combinar ambos tipos de exportaciones e importaciones

Teniendo las consideraciones de importaciones y exportaciones, nombradas y por defecto, entonces podemos combinarlas en un mismo archivo.

```js
// module.js
export const myExport = "hola"
function myFunction() { ... }

export default myFunction

// main.js
import myFunction, { myExport } from "/module.js"
```

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo hecho en clase:     

```js
// module.js
const saludo = () => {
    console.log('Hello!');
}

export default saludo;
```

```js
// 08-module.js
import saludo from "./module.js";

saludo();
```

- [Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
- [Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
- [Documentación](https://es.javascript.info/import-export)

## 14. Obtén una lista de películas

En este desafío tendrás un archivo llamado `api.js` que estará al mismo nivel que tu archivo `exercise.js`.

Este archivo tendrá una función asíncrona `getData()` que te retornará una lista de resultados misteriosa.

Tu función `solution()` deberá retornar la misma lista de resultados que te brinda la función `getData()`.

```js
// api.js
export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}
```

```js
// exercise.js
export function solution() {
  // Tu código aquí 👈
}
```

**Input:**

```js
solution();
```

**Output:**

```json
[{
    movie: "El despertar de los michis",
    year: 2021,
    protagonist: "Mr. Michi"
}, {
    movie: "101 Michis",
    year: 2019,
    protagonist: "Tommy Michiguire"
}]
```

### 🔥 Mi solución: No tan bien...   

```js
import { getData } from "./api.js";

/* export */ function solution() {
    // Tu código aquí 👈
    return getData()
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error));
}

solution();
```

### ✨ Solución ofrecida: bien...   

```js
import { getData } from "./api";

export function solution() {
	return getData().then(movies => movies);
}

solution();
```


## 15. ES6: generator 

Los **generadores** son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su _scope_ y seguir retornando valores.

Estos se utilizan para guardar la **totalidad de datos infinitos**, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un _array_ u objeto.

### Cómo utilizar generadores

La sintaxis de los generadores comprende lo siguiente:

-   La palabra reservada `function*` (con el asterisco al final).
-   La palabra reservada `yield` que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
-   Crear una variable a partir de la función generadora.
-   El método `next` devuelve un objeto que contiene una propiedad `value` con cada valor de `yield`; y otra propiedad `done` con el valor `true` o `false` si el generador ha terminado.

Si el generador se lo invoca y ha retornado todos sus valores de `yield`, entonces devolverá el objeto con las propiedades `value` con `undefined` y un `done` con `true`.

```js
// Declaración
function* nombre(parámetros){
    yield (primer valor retornado)
    yield (segundo valor retornado)
    ...
    yield (último valor retornado)

}

//Crear el generador
const generador = nombre(argumentos)

// Invocacioens
generador.next().value //primer valor retornado
generador.next().value //segundo valor retornado
...
generador.next().value //último valor retornado
```

### Ejemplo de un generador

Por ejemplo, creemos un generador para retornar tres valores.

```js
function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}
```

-   [Documentación de generadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator)

### Cómo utilizar _for of_ y _for in_

Existen dos nuevas formas de utilizar ciclos repetitivos. El bucle `for valor of iterable` **recorre iterables**, como arrays, `Map`, `Set` e incluso un generador.

El valor de cada elemento del iterable puede tener cualquier nombre, por eso se inicia con `let nombre`.

```js
const array = [5, 4, 3, 2, 1]

for (let numero of array) {
  console.log(numero) // 5 4 3 2 1
}
```

Sin embargo, debes tener en cuenta que solo podrás acceder a sus **valores**, y no a sus referencias, por lo que si quieres cambiar los elementos del array, necesitarás un índice `array[indice]`.

```js
for (let numero of array) {
  valor *= 2 // numero
  console.log(numero) // 10 8 6 4 2
}
 
console.log(array) // [ 5, 4, 3, 2, 1 ]
```

Si intentas recorrer un objeto de esta forma `for elemento of objeto`, te ocurrirá un error, porque **un objeto no es un iterable**. En su lugar puedes utilizar `for elemento in objeto`, que recorrerá las propiedades del objeto.

```js
const objeto = { a: 1, b: 2, c: 3 }

for (let elemento in objeto) {
  console.log(elemento) // 'a' 'b' 'c'
}
```

Sin embargo, si utilizas `for elemento in array`, no dará un error, pero el resultado no será el esperado, ya que los arrays son un tipo de objeto donde cada propiedad es el índice del valor del array o del iterable. Por lo que debes tener cuidado.

```js
const array = [5, 4, 3, 2, 1]

for (let elemento in array) {
  console.log(elemento) // '0' '1' '2' '3' '4'
}

/* const array = {
	'0': 5,
  '1': 4,
  '2': 3,
  '3': 2,
  '4': 1
}*/
```

-   [Documentación de Iteradores y generadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators)

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo hecho en clase:     

```js
function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);

console.log(it.next().value); // Oscar
console.log(it.next().value); // David
console.log(it.next().value); // Ana
console.log(it.next().value); // Ulises
console.log(it.next().value); // Jennifer
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined
```

[Video sobre Generadores](https://www.youtube.com/watch?v=tEkWs8RCkQQ)  


## 16. Generador de identificadores para michis

En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.

Tu tarea será proveer de una función `getId()` que se encargue de generar dichos identificadores y, a través de un método `.next()` se pueda pasar al siguiente identificador, y a través de la propiedad `.value` se pueda obtener el valor del nuevo identificador.

Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

```js
const id = getId();
id.next().value
```

El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

**Ejemplo 1:**

**Input:**

```js
const id = getId()
id.next().value
id.next().value
id.next().value
```

**Output:**

```js
1
2
3
```

**Ejemplo 2:**

**Input:**

```js
const id = getId()
id.next().value
id.next().value
id.next().value
```

**Output:**

```js
AX6SF5S
G7QNW01
KH3BR02
```

### 🔥 Mi solución: No tan bien...  

```js
function* getId(){
    const cats = ["one", "two", "three", "four"];
    let counter = 1;

    for (let id of cats){
        yield `${counter++} ${id}`;
    }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
```

### ✨ Solución Platzi: bien...   
```js
function* getId() {
    let lastId = 1;
    while (true) {
        yield lastId++;
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
```

### 🤯 Soluciones de Compañeros:  
```js
export function* getId() {
    while (true) {
        yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id = getId()
console.log(id.next().value); // 7DXUTKNB
console.log(id.next().value); // AUB3ZQ3
console.log(id.next().value); // DWFIDM7V
console.log(id.next().value); // 8R6180RO
console.log(id.next().value); // 4QPFE7A
console.log(id.next().value); // PUE2PM0D
```

```js
export function* getId() {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 1; i > 0; i++){
        for (const letter in arr) {
        yield i + arr[letter];
        }
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
```

## 17. ES6: set-add  

`Set` es una nueva estructura de datos para almacenar **elementos únicos**, es decir, sin elementos repetidos.

### Cómo utilizar los Sets

Para iniciar un `Set`, se debe crear una instancia de su clase a partir de un iterable. Generalmente, un iterable es un _array_.

```js
const set = new Set(iterable)
```

### Cómo manipular los Sets

Para manipular estas estructuras de datos, existen los siguientes métodos:

-   `add(value)`: añade un nuevo valor.
-   `delete(value)`: elimina un elemento que contiene el `Set`, retorna un booleano si existía o no el valor.
-   `has(value)`: retorna un booleano si existe o no el valor dentro del `Set`.
-   `clear(value)`: elimina todos los valores del `Set`.
-   `size`: retorna la cantidad de elementos del `Set`.

_**Contribución creada por** Andrés Guano (Platzi Contributor)._

#### Ejemplo hecho en clase:   

```js
const list = new Set();

list.add('item 01');
list.add('item 02').add('item 03');

console.log(list);
```

#### Cómo quitar los elementos repetidos en una sola línea

👨‍💻 Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:

```js
const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
```

1.  Se realiza la conversión de Array a Set. Set es una estructura que no admite elementos repetidos. Por lo tanto, tenemos un Set con los elementos del `array` sin repetidos.
2.  Como tenemos una estructura Set, debemos convertirlo a Array.
3.  El operador de propagación, como su nombre lo indica, propaga los elementos de un iterable en otro iterable. Los Sets son iterables como los Arrays, por lo que sus elementos pueden propagarse dentro de un iterable array `[... new Set(array)]`. Lo que se asemeja a propagar los elementos de un array dentro de otro array.

```js
const array = [1, 1, 2, 2, 3, 4, 4, 5]
// 1. Convertir de Array a Set
const set = new Set(array) // Set(5) {1, 2, 3, 4, 5}
// 2. Convertir de Set a Array
const arraySinRep = Array.from(set) // [1, 2, 3, 4, 5]
// 3. Propagar los elementos del Array dentro de otro Array
const sinRepetidos = [ ...arraySinRep] // [1, 2, 3, 4, 5]
```

Para entender mejor ver:   
-   [Curso de Manipulación de Arrays en JavaScript](https://platzi.com/cursos/arrays/)
-   [Curso de Estructuras de Datos con JavaScript](https://platzi.com/cursos/estructuras-datos/)
-   Maps y Sets - [JavaScript.info](https://es.javascript.info/map-set)
-   [Sets](https://platzi.com/clases/2397-python-profesional/39535-sets/) (Pero en Python 😛)


[Resumen 01](https://luis-ariza.notion.site/ECMAScript-Versiones-de-JavasCript-be6daa0ae0eb406f990238a07d677a5a)   
[Resumen 02](https://pogolo.notion.site/Nuevo-Curso-de-ECMAScript-Historia-y-Versiones-de-JavaScript-eecb774125e7434f98eed2473a1be389)
