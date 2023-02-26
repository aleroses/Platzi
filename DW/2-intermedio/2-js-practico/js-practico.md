# Curso Práctico de JavaScript
> **Juan David Castro Gallego** / [Course Director, Facultad de Computer Science en Platzi](https://platzi.com/profes/juandc/)        
**@fjuandc** en Twitter 

[Link al curso](https://platzi.com/cursos/javascript-practico/)    
[Apuntes compañeros](https://whip-soil-3b5.notion.site/Nuevo-Curso-Pr-ctico-de-JavaScript-bb1d517f38c64cb4b1c9f64830d4b695)

## Introducción
## 1. ¿Ya tomaste el Curso Básico de JavaScript?

[Slides del curso](https://static.platzi.com/media/public/uploads/curso-practico-javascript-slides_cf4425ef-df8f-426d-b38f-c27df1fb4319.pdf)

🔥 Temario:    
- Test de JavaScript
- Manipulación del DOM
- Flujo de Trabajo Profesional 

[Editor Online para correr código JS](https://runjs.co/)

🎲

## Prueba de JavaScript
## 2. Test de JavaScript 

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

### Instrucciones para tomar esta prueba

-   Evalúa muy críticamente tu conocimiento.
-   Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
-   Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
-   Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

### Variables y operaciones

#### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-   ¿Qué es una variable y para qué sirve?
-   ¿Cuál es la diferencia entre declarar e inicializar una variable?
-   ¿Cuál es la diferencia entre sumar números y concatenar strings?
-   ¿Cuál operador me permite sumar o concatenar?

🔥 Respuestas:    
- ¿Qué es una variable y para qué sirve?      
	Una variable es un espacio en memoria que nos permite almacenar datos que después podamos usar. Leer [[js-basico#4. Variables en JavaScript]]

-   ¿Cuál es la diferencia entre declarar e inicializar una variable?     
	**Declarar:** Cuando declaramos una variable solo debemos darle nombre a esta, pero no estamos obligados a darle un valor a almacenar. `var number;`    
	**Inicializar:** Ya existiendo una variable inicializamos dándole un valor a almacenar.  `number = 10;`.      

> **Una variable se declara para indicarle al programa a partir de qué lugar empieza a existir, qué nombre tendrá y qué tipo de datos almacenará**. La asignación de un valor inicial se llama inicialización.

-   ¿Cuál es la diferencia entre sumar números y concatenar strings?    
	Lo común sería sumar números de esta manera `2 + 2` pero también podemos usar el `+` para concatenar (juntar) textos de esta manera `Hi` + ` ` + `Cyborg` lo que nos da como resultado: Hi Cyborg

-   ¿Cuál operador me permite sumar o concatenar?    
	`+`

#### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

-   Nombre
-   Apellido
-   Nombre de usuario en Platzi
-   Edad
-   Correo electrónico
-   Mayor de edad
-   Dinero ahorrado
-   Deudas

🔥 Respuestas:      
-   `let name = "ale"` string
-   `let lastName = "vel"` string
-   `let userNamePlatzi = "@ghost"` string
-   `let age = 22` number
-   `let email = "ghost@code.com"` string
-   `let adult = true` boolean
-   `let savedMoney = 10.2` number
-   `let debts = 2` number

#### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let name = "ale";
let lastName = "vel";
let userNamePlatzi = "@ghost";
let age = 22;
let email = "ghost@code.com";
let adult = true;
let savedMoney = 10.2;
let debts = 2;
```

#### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

-   Nombre completo (nombre y apellido)
-   Dinero real (dinero ahorrado menos deudas)

🔥 Respuestas:     
`console.log(name + " " + lastName);`
`console.log(savedMoney - debts);`

### Funciones  

#### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-   ¿Qué es una función?
-   ¿Cuándo me sirve usar una función en mi código?
-   ¿Cuál es la diferencia entre parámetros y argumentos de una función?

🔥 Respuestas:    
-   ¿Qué es una función?     
	Una función es una porción de código que necesita de parámetros y argumentos para funcionar o en caso de no tenerlos esta debe ser invocada para que ejecute el código que lleva dentro.

-   ¿Cuándo me sirve usar una función en mi código?     
	Sirve para crear funciones especificas que se van a estar utilizando una y otra vez pero con diferentes valores. 

-   ¿Cuál es la diferencia entre parámetros y argumentos de una función?   
	Se llama parámetro al valor requerido por una función y llamamos argumento al valor otorgado por el usuario.   

#### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

🔥 Respuestas:      
```js
function hola(name, lastname, nickname){
    const completeName = name + " " + lastname;

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

} 

hola("ale", "vel", "ghost");
```

### Condicionales

#### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-   ¿Qué es un condicional?
-   ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
-   ¿Puedo combinar funciones y condicionales?

🔥 Respuestas:      
- ¿Qué es un condicional?     
	Son palabras reservadas de JavaScript como `if - else if - else`que nos permiten ejecutar determinado código si se cumple determinada situación, basándose en true o false.   

-   ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?     
	- `if` Conocido como SI, si esto es verdad ejecuta este código.     
	- `else if` En caso el primer if sea falso, evalúa en segunda instancia si este else if es verdadero y ejecuta este código.     
	- `else` De no entrar a ninguna de las anteriores condiciones ejecutará esto como alternativa final sin evaluarlo.      
	- `Switch` En esta condicional todos los cases se comparan con una sola variable 

-   ¿Puedo combinar funciones y condicionales?  
	Claro que sí, las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales. 

#### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

🔥 Respuestas:     
```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

#### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

🔥 Respuestas:       
```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}

if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

🔥 Respuestas:    
```js
var suscripcion = [
    {cuenta: "Free", beneficio: "Solo puedes tomar los cursos gratis"},
    {cuenta: "Basic", beneficio: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {cuenta: "Expert", beneficio: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {cuenta: "ExpertPlus", beneficio: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
]; 

var suscFilter = suscripcion.filter(function(filtrados){
    return filtrados.cuenta === "Basic";
});  

console.log(suscFilter);

//Obtenemos:

0: {cuenta: 'Basic', beneficio: 'Puedes tomar casi todos los cursos de Platzi durante un mes'}
length: 1
```

### Ciclos

#### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-   ¿Qué es un ciclo?
-   ¿Qué tipos de ciclos existen en JavaScript?
-   ¿Qué es un ciclo infinito y por qué es un problema?
-   ¿Puedo mezclar ciclos y condicionales?

🔥 Respuestas:      
-   ¿Qué es un ciclo?      
	Ciclo, bucle o loop es como se le conoce a la repetición, iteración controlada de alguna acción dentro de nuestro código. Esto se ejecutará hasta que se cumpla alguna condición. 

-   ¿Qué tipos de ciclos existen en JavaScript?     
	For, For...in, For...of ForEach, While, DoWhile

-   ¿Qué es un ciclo infinito y por qué es un problema?    
	Esto pasa cuando colocamos una variable de control equivocada, cuando no agregamos un tope final para que el programa al llegar ahí se detenga. Lo que causa que el bucle nunca termine y tengamos que forzar manualmente su finalización. 

-   ¿Puedo mezclar ciclos y condicionales?   
	Es completamente normal mezclar diferentes funcionalidades del lenguaje, según lo que necesitemos hacer. 

#### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

🔥 Respuestas:      
```js
var i = 0;

while (i >= 0 && i < 5){
    console.log("El valor de i es: " + i);
    i++;
}   


var i = 10;

while (i <= 10 && i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}
```

#### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

🔥 Respuestas:     
```js
var user = prompt("Cúanto es 2 + 2?? ");

while (user != "4"){
    user = prompt("Cúanto es 2 + 2?? ");
}

console.log("\nExcelente, es ", user);
```

### Listas

#### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-   ¿Qué es un array?
-   ¿Qué es un objeto?
-   ¿Cuándo es mejor usar objetos o arrays?
-   ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

🔥 Respuestas:      
-   ¿Qué es un array?     
	Los array (lista de elementos) son porciones de código que permiten almacenar varios datos y no solo uno como las variables. Leer [[js-basico#14. Arrays]]

> `const array = [1, 'jaja', true, false, {nombre: 'ale', edad: 3}];`

-   ¿Qué es un objeto?      
	Un objeto se puede entender como algo que ya existe, ejemplo, un carro y todas sus propiedades las cuales podemos usar como molde para hacer objetos totalmente nuevos. Es una lista de elementos PERO cada elemento tiene un nombre clave (key:valor).

> `const obj = {nombre: 'ale', edad: 3, comidas: ['fruta', 'verduras']};`

-   ¿Cuándo es mejor usar objetos o arrays?     
	Los **arrays** se utilizan cuando almacenamos múltiples valores de una sola variable, mientras que un **objeto** puede contener múltiples variables con sus valores. un **array** también se puede considerar como un **objeto** y tiene la mayoría de las funcionalidades del **objeto**.    
	Array cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que usaremos un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo. 

-   ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
	Sí, los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades . 

#### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

🔥 Respuestas:      
```js
var frutas = ["Manzana", "Pera", "Uva"]

function algo(lista){
    console.log(lista[0]);
}

algo(frutas);
```

#### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

🔥 Respuestas:      
```js
var frutas = ["Manzana", "Pera", "Uva"]

for (i = 0; i < frutas.length; i++){

    function algo(lista){
        console.log(lista[i]);
    }

    algo(frutas);
}
```

```js
/* Otra solución */
var frutas = ["Manzana", "Pera", "Uva"]

function algo(lista){
    for(i=0; i < frutas.length; i++){
        console.log(lista[i]);
    }
} 

algo(frutas);
```


#### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

🔥 Respuestas:   
```js
/* CÓDIGO DE COMPAÑERO */

let myCar = {
	brand: 'Ford',
	model: 'Mustang',
	year: 1969
};

function readObject(object){
    for (let key in object) {
        console.log(key, ":", object[key]);
    }
}

readObject(myCar);
```

🔥 Otra solución: Convertir objeto a un array  
```js
const car = {
    brand: "Totoya",
    model: "Corolla",
    year: 2020,
}

// Object.values(car)
// const array = Object.values(car)

function imprimirElementos(objeto){
    const array = Object.values(objeto);

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

imprimirElementos(car);
```


### ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!

🎲

## 3. Variables

🎲

## 4. Funciones

🎲

## 5. Condicionales 

🎲

## 6. Ciclos 

🎲

## 7. Arrays y objetos 

🎲

## 8. Bonus: reducción de condicionales 

🔥 Respuesta ejercicio anterior:      
```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

Solución 01:    
```js
function algo(parametro){
    if (parametro === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return
    }
    if (parametro === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return

    }
    if (parametro == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
    }
    if (parametro == "ExpertDuo") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return
    }

    console.warn("Esta suscripción no existe")
}

algo("ExpertDuo");
```

Solución 02:      
```js
let sub = prompt("Ingrese subscripción: ");

const objeto = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

//objeto.Free
//objeto['Free']
//objeto[variable]

function algo(parametro){
    for (key in parametro){
        if (key === sub){
            console.log(parametro[sub])
            return
        }
    }
    console.warn('Subscripcion erronea...')
}

algo(objeto)
```

Solución 03:      
```js
let sub = prompt("Ingrese subscripción: ");

const objeto = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function algo(parametro){
    if (objeto[parametro]){
        console.log(objeto[parametro])
        return
    }
    console.warn('error')
}

algo(sub)
```


🎲

## Quiz prueba de JavaScript 

1. Los ciclos while primero ejecutan y después validan su condicional. Mientras que los ciclos do while primero validan su condición y luego sí ejecutan su bloque de código.
	- Falso

2. Tienes un condicional `if` dentro de una función. Si tu condicional se cumple, el resto de tu función NO se debe ejecutar. ¿Cómo lo harías?
	- Agregando un `return;` antes de que termine mi condicional.

3. Tienes el siguiente bloque de código: `console.log("Juanita")`. ¿Qué es `"Juanita"` para la función `console.log`?
	- Un argumento.

4. ¿Qué palabra reservada usarías para crear una variable que nunca pueda cambiar su valor?
	- const

🎲

## Manipulación del DOM
## 9. Cómo conectar JavaScript con HTML

**DOM** (Document Object Model)

El DOM es una representación del documento HTML como un grupo de nodos y objetos. Determinando así la forma en la cual se puede acceder y modificar la estructura, contenido y estilo de un documento HTML. En palabras mas sencillas el DOM le dice a un programa como JavaScript que nodo o parte del HTML esta leyendo (como puede ser un párrafo o un titulo o una sección, etc.) y es el mismo DOM el que modela como un objeto (con sus propiedades y métodos) esa parte del documento. Con JS se accede a esas propiedades y se invoca esos métodos para modificar, eliminar, crear, etc. elementos en una pagina web.

Pueden encontrar una definición formal y mejor estructurada en:  
[https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)


✨ Interfaz de programación en el cual podemos hacer modificaciones, tanto de su estructura, como de su estilo y contenido a algún documento HTML o XML. 


Tenemos 2 maneras:      
 - **Insertar** código JS en HTML usando la etiqueta `<script>` y agregando el código dentro. 
```html
<!-- Insertar -->
<body>
	<script>
		console.log('Hello world!');
	</script>
</body>
```

-  **Referenciar** un archivo JS.   
```html
<!-- Referenciar -->
<body>
	<script src="./script.js"></script>
</body>
```

Nombre del archivo: `script.js`   
```js
<!-- Contenido -->
console.log('Hello world!');
```

🎲

## 10. Leyendo HTML desde JavaScript  

La forma profesional de leer Código HTML desde JavaScript es crear variables que representen a los selectores de cada uno de los elementos presentes en html a los cuales se desea acceder. Una forma de acceder al código html desde JS es por medio de la función `document.querySelector()`, en el cual dentro de un string le indicamos cual es el selector al cual queremos acceder desde JS.

Con esta función `document.querySelector()` podemos acceder al html desde su etiqueta, clase o id.

Un Ejemplo de esto seria lo siguiente:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación de DOM básico</title>
</head>
<body>
    <h1>Manipulación del DOM Básico</h1>
    <p>Esto es un párrafo</p>
    <p class="parrafito">Parrafo con Clase</p>
    <p id="pid">Parrafo con Id</p>
    <input placeholder="Escribe algo" value="hola mundo">

    <script src="./9-script.js"></script>
</body>
</html>
```


```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito'); 👈👀 //.clase
const pid = document.getElementById('pid'); 👈👀 //#id
const input = document.querySelector('input');

console.log(h1);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

console.log(h1);
console.log(h1.value);
//Ingresar un valor en el input y Copiar en consola
console.log(input.value);
```

✨ Es muy importante no olvidar que `<querySelector>` solo seleccionara al primer elemento que cumpla con lo requerido. Mientras que `<querySelectorAll>` seleccionara a todos los elementos que cumplan con lo requerido.

Si usamos `<querySelector>` para llamar clases o ids se deben llamar usando `.` o `#` respectivamente. 

```js
const parrafito = document.querySelector('.parrafito'); 
const pid = document.querySelector('#pid');
```

🔥 **Emmet para HTML:**    
Si escribes una etiqueta y pegado un `.` (punto) das enter o tab; se vuelve clase.     
Ejemplo:     
```html
<!-- p.parrafo (se convierte en)-->
<p class="parrafo"></p>
```

Escribe una etiqueta y pegado un `#` das enter o tab; se vuelve id.    
Ejemplo:      
```html
<!-- p#parrafo (se convierte en)-->
<p id="parrafo"></p>
```

Escribe una etiqueta y pegado agregas un `>` más otro etiqueta, podrás tener un etiqueta dentro del mismo:     
Ejemplo:     
```html
<!-- p>p (se convierte en)-->
<p>
    <p></p>
</p>
```

Escribe una etiqueta y pegado agregas un `+` más otro elemento, podrás tener otro del mismo:      
Ejemplo:       
```html
<!-- p+p  -->
<p></p>
<p></p>

<!-- p+h+div (se convierte en)-->
<p></p>
<h></h>
<div></div>
```

Escribe una etiqueta y pegado agregas un `*` más una cantidad determinada, podrás multiplicar el elemento:  
Ejemplo:      
```html
<!-- div*3  -->
<div></div>
<div></div>
<div></div>
```

Qué puedo hacer si quiero un div con un id de “plazti”, que dentro tenga 3 div con clase de “platzitos”, con dos h1 y que cada h1 tengan un 5 **p** con clase “párrafo” y que por último cada p tenga un a. ¿Cómo le hago?

**Respuesta:**    

`div#platzi>div.platzitos*3>h1*2>p.parrafo*5>a`

🎲

## 11. Escribiendo HTML desde JavaScript

La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM. El árbol DOM incluye elementos como `<body>` y `<table>`, entre muchos otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

Existen varios métodos de Document que servirán para acceder a los elementos del DOM:

1. `querySelector:` Es un método de Document que regresa el primer elemento dentro del documento que coincide con el selector o grupo de selectores especificado. Si no se encuentran coincidencias, regresa null.
2. `getElementsByClassName:` Regresa un objeto similar a una matriz con todos los elementos secundarios que tienen todos los nombres de clase dados. Da algunos problemas al llamar a su variable con algún método.
3. `getElementById:` Devuelve una referencia al elemento por su id.
4. `document.createElement:` Crea el elemento HTML especificado por la etiqueta, o un HTMLUnknownElement si no se reconoce la etiqueta.

Ejemplo:    
```js
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let p02 = document.getElementsByClassName("p02");
let p03 = document.getElementById("p03");
let input = document.querySelector("input");

// Otra forma de manipular Clases y Ids
let p002 = document.querySelector(".p02");
let p003 = document.querySelector("#p03");

console.log(h1);
console.log(input.value);
input.value = "Texto de prueba 02";
console.log(input.value);

console.log({
    h1,
    p,
    p02,
    p03,
    input,
    p002,
    p003
});
```

```js
// Creamos Elemento HTML
console.log(document.createElement("img"));

// Almacenamos dato en una variable
let img = document.createElement("img");
img.setAttribute("src", "https://i.postimg.cc/ryQ9TLj7/10-logo-js.png");

console.log(img);

// Metemos Imagen en una variable para mostrarla en pantalla 
p002.append(img);
```

Algunos métodos de la interfaz Element:  

1.  `elemento.innerHTML:` La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva. (Permite modificar el contenido html del elemento, lo que puede ser peligroso, porque literalmente, se está modificando el HTML).  

```js
// Cambiar el contenido de las etiquetas
h1.innerHTML = "Titulo <br> innerHTML";
p.innerHTML = "Parrafo 01";
p002.innerHTML = "Parrafo 02";
```

> 📌Para **insertar el código HTML** en el documento en lugar de cambiar el contenido de un elemento, use el método [insertAdjacentHTML().](https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML)

2.  `elemento.innerText:` Representa el contenido de texto renderizado de un nodo y sus descendientes. Como getter, se aproxima al texto que el usuario obtendría si resaltara el contenido del elemento con el cursor y luego lo copiara en el portapapeles. Como setter, esto reemplazará a los hijos del elemento con el valor dado, convirtiendo cualquier salto de línea en elementos `<br>`. Inserta Texto plano en tu HTML.

```js
// Cambiamos el contenido a texto plano
h1.innerText = "Titulo <br> innerHTML";
```

3.  `elemento.getAttribute:` Devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como “”. Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en paréntesis.

```js
// Ver la clase usada
console.log(p002.getAttribute("class"));
```

4.  `elemento.setAttribute:` Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.

```js
// Cambiar nombre a la clase
p002.setAttribute("class", "clasemodificada");
```

5.  `elemento.replaceChldren:` Remplaza los elementos secundarios existentes de un nodo con un nuevo conjunto específico de elementos secundarios. Estos pueden ser objetos de cadena o de nodo.
6.  `elemento.append:` Inserta un conjunto de objetos de nodo u objetos de cadena después del último elemento secundario del elemento. Los objetos de cadena se insertan como nodos de texto equivalentes. Puede agregar al documento uno o varios elementos creado previamente al agregarlo entre paréntesis.

```js
p002.append(img, img2);
```

7. `elemento.classList.add()` Para agregar un valor a una clase existente en un elemento

```js
// Añadir otra clase
p002.classList.add("clasedos");
p002.classList.add("clasetres");
```

8. `elemento.classList.remove()`Para eliminar el valor descrito en paréntesis a la clase de un elemento

```js
// Eliminar clases
p002.classList.remove("clasedos");
```

9. `elemento.classList.toggle(‘titulo’)` Si tiene un valor descrito entre paréntesis se lo quita, o si no lo tiene se lo coloca:

```js
// Verificar si una clase existe para eliminarla: False, o de no exisitir añadirla: True
console.log(p002.classList.toggle("clasetres"));
console.log(p002.classList.toggle("clasecuatro"));
```

10. `elemento.classList.contains(‘titulo’)` Devuelve true o false Si una propiedad tiene un valor descrito entre paréntesis

```js
// Verificar si existe una clase: True / False
console.log(p002.classList.contains("clasetres"));
```

11. `elemento.value = ‘valor’` Colocarle un valor a un elemento, usualmente colocado en inputs

```js
console.log(input.value);
input.value = "Texto de prueba 02";
console.log(input.value);
```

12. `elemento.createElement()` Crea un elemento HTML _( < img >, < section >, < header >, < div >, etc )_

```js
// Creamos Elemento HTML
console.log(document.createElement("img"));

// Almacenamos dato en una variable
let img = document.createElement("img");
img.setAttribute("src", "https://i.postimg.cc/ryQ9TLj7/10-logo-js.png");

console.log(img);

// Metemos Imagen en una variable para mostrarla en pantalla 
p002.append(img);
```

13. `elemento.appendChild()` Inserta un nuevo nodo dentro de la estructura DOM de un documento. Puede agregar al documento solo un elemento creado previamente al agregarlo entre paréntesis

```js
// Crea un nuevo elemento párrafo, y lo agrega al final del cuerpo del documento
var p = document.createElement("p");
document.body.appendChild(p);
```


Ejemplo de lo visto:    
```html
<body>
    <h1>Titulo principal</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, nesciunt! Quos, molestias veniam blanditiis amet deleniti officiis itaque illum culpa, corporis ipsam beatae, mollitia facere vitae libero totam! Optio, eveniet?</p>
    <p class="p02">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptas provident cumque accusamus harum corporis nostrum, cupiditate nam ducimus ullam iste hic? Ipsa, voluptates cum. Delectus nostrum accusamus id nulla!</p>
    <p id="p03">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptas provident cumque accusamus harum corporis nostrum, cupiditate nam ducimus ullam iste hic? Ipsa, voluptates cum. Delectus nostrum accusamus id nulla!</p>
    <input placeholder="Ingresa algo" value="Texto prueba">

    <script src="./9-script.js"></script>
</body>
```

```js
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let p02 = document.getElementsByClassName("p02");
let p03 = document.getElementById("p03");
let input = document.querySelector("input");

// Otra forma de manipular Clases y Ids
let p002 = document.querySelector(".p02");
let p003 = document.querySelector("#p03");

console.log(h1);
console.log(input.value);
input.value = "Texto de prueba 02";
console.log(input.value);

console.log({
    h1,
    p,
    p02,
    p03,
    input,
    p002,
    p003
});

// Cambiar el contenido de las etiquetas
h1.innerHTML = "Titulo <br> innerHTML";
p.innerHTML = "Parrafo 01";
p002.innerHTML = "Parrafo 02";

// Cambiamos el contenido a texto plano
h1.innerText = "Titulo <br> innerHTML";

// Ver la clase usada 
console.log(p002.getAttribute("class"));
// Cambiar nombre a la clase
p002.setAttribute("class", "clasemodificada");
// Añadir otra clase
p002.classList.add("clasedos");
p002.classList.add("clasetres");
// Eliminar clases
p002.classList.remove("clasedos");
// Verificar si una clase existe para eliminarla: False, o de no exisitir añadirla: True
// console.log(p002.classList.toggle("clasetres"));
// console.log(p002.classList.toggle("clasecuatro"));
// Verificar si existe una clase: True / False
console.log(p002.classList.contains("clasetres"));

// Crear una etiqueta
console.log(document.createElement("img"));
// Meter dato en una variable
let img = document.createElement("img");
img.setAttribute("src", "https://i.postimg.cc/ryQ9TLj7/10-logo-js.png");

console.log(img);
p002.append(img);
```

Extensión para diferenciar proyectos: [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)

🎲

## 12. Eventos en JavaScript: interactuando con usuarios

En la clase pasado manipulamos el HTML desde JavaScript pero podríamos hacerlo desde el mismo HTML.    
Lo realmente interesante es que manipulemos el HTML cuando el usuario realize una acción, por eso en esta clase veremos eventos en JavaScript.

> Un evento es una acción del usuario ante la cual puede realizarse algún proceso (por ejemplo, el cambio del valor de un formulario, o la pulsación de un enlace).

### Escuchando un input
Podemos utilizar el atributo `onchange` en el input y pasarle una función que haga referencia a la función definida en tu script.

```html
<input id="numero" onchange="showNumber()" />
```

```jsx
const numero = document.querySelector("#numero");

function showNumber() {
	console.log(numero)
}
```

Esto hará que cada vez que hagamos un cambio en el input y le quitemos el focus mostrará en consola lo que se escribió.

### Escuchando un botón
Para escuchar un botón podemos hacer uso de el atributo `onclick` y pasarle una función como vimos anteriormente.

```html
<button id="btn" onclick="btnOnclick()">Haga click</button>
```

```jsx
const btn = document.getElementById("btn");

function btnOnclick() {
	console.log("Hizo click");
}
```

Entonces cada vez que haga click en el botón se mostrará ese texto en consola.

Ejemplo:    
```html
<body>
    <h1>Titulo DOM</h1>
    <input id="number1" placeholder="Ingresa algo">
    <input id="number2" placeholder="Ingresa algo" onchange="console.log('Cambió')">
    <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>
    <p id="result"></p>

    <script src="./12.script.js"></script>
</body>
```

```js
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#number1')
const input2 = document.querySelector('#number2');
let suma;
const btncalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function btnOnClick(){
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Result: " + suma;
    console.log('Click en el Bóton Calcular XD');
}
```

Diferencias entre [Number y parseInt](https://thisthat.dev/number-constructor-vs-parse-int/)


📌 Para pasar los strings a números utilizar el atributo “+” antes del string para cambiar su valor.

```js
const h1 = document.querySelector("h1"); 
const input1 = document.querySelector("#calculo1"); 
const input2 = document.querySelector("#calculo2"); 
const btn = document.querySelector("#btnCalcular"); 

function btnOnClick() { console.log(+input1.value + +input2.value); }
```

Documentación sobre el tema: [Unary plus (+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)   

Ideas para proyectos e interfaces: [https://www.frontendmentor.io/](https://www.frontendmentor.io/)

🎲

## 13. addEventListener

Este método sirve para escuchar cualquier tipo de evento que ocurra dentro de un objeto, estos objetos pueden ser un elemento HTML, una ventana, el mismo documento, un XMLhttpRequest.

Los eventos pueden ser:   
-   **blur:** Cuando el elemento pierde el foco.
-   **click:** El usuario hace clic sobre el elemento.
-   **dblclick:** El usuario hace doble clic sobre el elemento.
-   **focus:** El elemento gana el foco.
-   **keydown:** El usuario presiona una tecla.
-   **keypress:** El usuario presiona una tecla y la mantiene pulsada.
-   **keyup:** El usuario libera la tecla.
-   **load:** El documento termina su carga.
-   **mousedown:** El usuario presiona el botón del ratón en un elemento.
-   **mousemove:** El usuario mueve el puntero del ratón sobre un elemento.
-   **mouseout:** El usuario mueve el puntero fuera de un elemento.
-   **mouseover:** El usuario mantiene el puntero sobre un elemento.
-   **mouseup:** El usuario libera el botón pulsado del ratón sobre un elemento.
-   **unload:** El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.

#### Syntax    

```js
element.addEventListener(evento, funcion);
```

```js
//A QUIÉN - QUÉ ACCIÓN - CUAL FUNCION 
btn.addEventListener('click',btnOnClick);
```

### Escuchar evento desde html
Para lograr esto podemos definir una propiedad al elemento que normalmente es el nombre del evento con el prefijo “on” y como valor le pasamos la función que ejecutará.  

```html
<button id="btnCalculo" onclick="console.log("Hice click!")">Calcular</button>
```

También podríamos definir la función en un archivo script.  
```html
<button id="btnCalculo" onclick="btnOnclick()")>Calcular</button>
<script src="script.js" ></script>
```

```js
function btnOnclick() {
	console.log("Hice click");
}
```

### Escuchar un evento desde JavaScript
Escuchar un elemento desde JavaScript evita que nuestro html se vea desordenado y además es la forma que vas a encontrar mayormente en cualquier proyecto.

```html
<button id="btn">Enviar</button>
```

```jsx
const btn = document.getElementById("btn");

btn.addEventListener("click", btnClick);

function btnClick() {
	console.log("Hice click!");
}
```

Ejemplo:   
```html
<h1>Titulo del Documento</h1>
<input id="number1" placeholder="Ingresa un número">
<input id="number2" placeholder="Ingresa un número" onchange="console.log('Cambio en el input')">
<button id="btnCalcular">Calcular</button>
   
<p id="result"></p>

<script src="./13.script.js"></script>
```

```js
const h1 = document.querySelector("h1");
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
let suma;
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

btnCalcular.addEventListener('click', btnOnClick);

function btnOnClick(){
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
}
```


### Escuchando evento desde un formulario
Cuando utilizamos un botón en un formulario por defecto este lo define de tipo submit y esto ocasiona que al realizar la acción la página se recarge. Para evitar esto y poder ver los cambios al escuchar el evento de `click` utilizaremos `event.preventDefault()`.

```html
<form id="form">
	<button>Enviar</button>
</form>
```

```jsx
const form = document.getElementById("form");

form.addEventListener("submit", btnClick);

function btnClick(event) {
	event.preventDefault();
	console.log("Hice click!");
}
```

Otra forma de solucionar esto es especificarle explícitamente que nuestro botón no es un submit.

Ejemplo:   
```html
<body>
	<h1>Titulo del Documento</h1>
	<!--Para el segundo método se le agrega un ID al form-->
    <form id="form">
        <input id="number1" placeholder="Ingresa un número">
        <input id="number2" placeholder="Ingresa un número" onchange="console.log('Cambio en el input')">
        <button id="btnCalcular">Calcular</button>
        
        <p id="result"></p>
    </form>

    <script src="./13.script.js"></script>
</body>
```

```js
const h1 = document.querySelector("h1");
// Para el segundo método agregamos la variable del form
const form = document.querySelector('#form');
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
let suma;
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

form.addEventListener('submit', btnSubmit); //👈👀

function btnSubmit(event){
    console.log({event});
    //Para que la página no se recargue
    event.preventDefault();
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
}
```

Otra forma con button de tipo button, no submit que se asigna por defecto:   

```html
<body>
	<h1>Titulo del Documento</h1>
    <form id="form" action="">
        <input id="number1" placeholder="Ingresa un número">
        <input id="number2" placeholder="Ingresa un número" onchange="console.log('Cambio en el input')">
        <!--Para el tercer método cambiar a tipo button-->
        <button id="btnCalcular" type="button">Calcular</button>
        
        <p id="result"></p>
    </form>
	
    <script src="./13.script.js"></script>
</body>
```

```js
btnCalcular.addEventListener('click', btnOnClick);

function btnOnClick(event){
    suma = Number(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + suma;
}
```

🎲

## Quiz Manipulación del DOM

1. La extensión de los archivos de JavaScript es `.js`.
	- Verdadero
2. ¿Qué herramienta te permite escuchar eventos de los usuarios sin mezclar código HTML con código JavaScript?
	- addEventListener
3. ¿Cuál de los siguientes bloques de código te permite imprimir un mensaje cada vez que los usuarios presionen un botón?
	- `<button onclick="console.log('mensaje')">Botoncito</button>`
4. Ya tienes en JavaScript una variable que selecciona un elemento HTML. ¿Cuál de las siguientes herramientas te permite editar su contenido?
	- innerText
	- append
	- innerHTML
	- appendChild
	- Todas las respuestas son correctas.
6. ¿Cómo seleccionas desde JavaScript a un elemento HTML con el id perry?
	- document.querySelector('#perry')

🎲

## 14. Conectando GitHub a proyectos de JavaScript

🔥 Página: [gitignore](https://www.toptal.com/developers/gitignore/)   
- mac OS
- Windows 
- Linux
- Visual Studio Code
- Node 

Resumen de como conectarnos a GitHub: [[git-github#19. Uso de GitHub]]

🎲

## 15. Proyectos con JavaScript y GitHub desde cero

Nuevo repositorio: 
- curso-practico-js
- .gitignore template: Node
- License: MIT License 

Terminal:   
- `code ./ -r`: Abre la carpeta actual y que se abra en la misma ventana abierta

📌 “code ./ -r” puede ser reemplazado por arrastrar la carpeta donde trabajaremos dentro de VSCode.    


Resumen de como crear un proyecto: [[git-github#19. Uso de GitHub]]

🎲

## 16. Fork a proyectos en GitHub

Resumen de como hacer un fork: [[git-github#29. Creando un Fork, contribuyendo a un repositorio]]   

[Proyecto a Clonar](https://github.com/platzi/curso-frontend-developer-practico)

🎲

## 17. Analizando código de proyectos open-source

Crear un index.html, un style.css y un main.js dentro del proyecto clonado 

🎲

## 18. Fusión del menú en desktop

Primeros cambios [Repositorio](https://github.com/aleroses/curso-frontend-developer-js)

📌 Si se dan cuenta, al momento de darle muchos clicks al toggle, o al botón email, se selecciona nuestro texto. para evitar que esto pase y se comporte como un buen botón se le aplica esta propiedad:

```css
#emailLink{
    cursor: pointer;
    user-select: none;
}
```

🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲



Apuntes. 
https://whip-soil-3b5.notion.site/Nuevo-Curso-Pr-ctico-de-JavaScript-bb1d517f38c64cb4b1c9f64830d4b695   

https://nasal-zoo-be9.notion.site/Leyendo-HTML-desde-JavaScript-2c106b97980e419f8547a1eee8a67480




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