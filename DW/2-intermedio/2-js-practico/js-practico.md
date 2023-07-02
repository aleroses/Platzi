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

🔥 **Emmet para HTML:** Ver nota: [[4.emmet]]    
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
- macOS
- Windows 
- Linux
- Visual Studio Code
- Node 
- git

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

Crear un archivo index.html, un style.css y un main.js dentro del proyecto clonado. Dentro de index y del style copiamos todo lo relacionado a la pantalla que vayamos a trabajar, así solo nos quedaría por corregir algunos estilos y crear las funcionalidades en JavaScript.  

🔥 Código CSS totalmente funcional:   
```css
/* General */
:root {
    --white: #FFFFFF;
    --black: #000000;
    --very-light-pink: #C7C7C7;
    --text-input-field: #F7F7F7;
    --hospital-green: #ACD9B2;
    --sm: 14px;
    --md: 16px;
    --lg: 18px;
  }
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }

.inactive {
    display: none;
}

/* Navbar (general) */

  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid var(--very-light-pink);
  }
  .menu {
    display: none;
  }
  .logo {
    width: 100px;
  }
  .navbar-left ul,
  .navbar-right ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 60px;
  }
  .navbar-left {
    display: flex;
  }
  .navbar-left ul {
    margin-left: 12px;
  }
  .navbar-left ul li a,
  .navbar-right ul li a {
    text-decoration: none;
    color: var(--very-light-pink);
    border: 1px solid var(--white);
    padding: 8px;
    border-radius: 8px;
  }
  .navbar-left ul li a:hover,
  .navbar-right ul li a:hover {
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
  }
  .navbar-email {
    color: var(--very-light-pink);
    cursor: pointer;
    /* Sin seleccion de texto */
    user-select: none; 
    font-size: var(--sm);
    margin-right: 12px;
  }
  .navbar-shopping-cart {
    position: relative;
  }
  .navbar-shopping-cart div {
    width: 16px;
    height: 16px;
    background-color: var(--hospital-green);
    border-radius: 50%;
    font-size: var(--sm);
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Menu en Desktop */
  .desktop-menu {
    position: absolute;
    top: 60px;
    right: 60px;
    background: var(--white);
    width: 100px;
    height: auto;
    border: 1px solid var(--very-light-pink);
    border-radius: 6px;
    padding: 20px 20px 0 20px;
  }
  .desktop-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .desktop-menu ul li {
    text-align: end;
  }
  .desktop-menu ul li:nth-child(1),
  .desktop-menu ul li:nth-child(2) {
    font-weight: bold;
  }
  .desktop-menu ul li:last-child {
    padding-top: 20px;
    border-top: 1px solid var(--very-light-pink);
  }
  .desktop-menu ul li:last-child a {
    color: var(--hospital-green);
    font-size: var(--sm);
  }
  .desktop-menu ul li a {
    color: var(--back);
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
  }


/* Menu en Mobile */
.mobile-menu {
  background-color: var(--white);
  position: absolute;
  top: 60px;
  left: 0;
  /* Quitar scroll */
  width: calc(100% - 24px);
  padding-left: 24px;
}
.mobile-menu a {
  text-decoration: none;
  color: var(--black);
  font-weight: bold;
  /* margin-bottom: 24px; */
}
.mobile-menu ul {
  padding: 0;
  margin: 24px 0 0;
  list-style: none;
}
.mobile-menu ul:nth-child(1) {
  border-bottom: 1px solid var(--very-light-pink);
}
.mobile-menu ul li {
  margin-bottom: 24px;
}
.email {
  font-size: var(--sm);
  font-weight: 300 !important;
}
.sign-out {
  font-size: var(--sm);
  color: var(--hospital-green) !important;
}

/* Aside (Product details y carrito) */
aside {
  background-color: var(--white);
  width: 360px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
}

/* ShoppingCart */
#shoppingCartContainer {
  padding: 0 24px;
}

.title-container {
  display: flex;
}
.title-container img {
  transform: rotate(180deg);
  margin-right: 14px;
}
.title {
  font-size: var(--lg);
  font-weight: bold;
}
.order {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  background-color: var(--text-input-field);
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 0 24px;
}
.order p:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.order p span:nth-child(1) {
  font-size: var(--md);
  font-weight: bold;
}
.order p:nth-child(2) {
  text-align: end;
  font-weight: bold;
}
.shopping-cart {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}
.shopping-cart figure {
  margin: 0;
}
.shopping-cart figure img {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
}
.shopping-cart p:nth-child(2) {
  color: var(--very-light-pink);
}
.shopping-cart p:nth-child(3) {
  font-size: var(--md);
  font-weight: bold;
}
.primary-button {
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
}

/* ProductDetail */
.product-detail-close {
  background: var(--white);
  width: 14px;
  height: 14px;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
.product-detail-close:hover {
  cursor: pointer;
}
#productDetail > img:nth-child(2) {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}
#productDetail .product-info {
  margin: 24px 24px 0 24px;
}
#productDetail .product-info p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
}
#productDetail .product-info p:nth-child(2) {
  color: var(--very-light-pink);
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 36px;
}
#productDetail .product-info p:nth-child(3) {
  color: var(--very-light-pink);
  font-size: var(--sm);
  margin-top: 0;
  margin-bottom: 36px;
}
.primary-button {
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
}
.add-to-cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Product List */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 26px;
  place-content: center;
  margin-top: 20px;
}
.product-card {
  width: 240px;
}
.product-card img {
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
}
.product-card .product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.product-card .product-info figure {
  margin: 0;
}
.product-card .product-info figure img {
  width: 35px;
  height: 35px;
}
.product-card .product-info div p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
}
.product-card .product-info div p:nth-child(2) {
  font-size: var(--sm);
  margin-top: 0;
  margin-bottom: 0;
  color: var(--very-light-pink);
}


  @media (max-width: 640px) {
    .menu {
      display: block;
    }
    .navbar-left ul {
      display: none;
    }
    .navbar-email {
      display: none;
    }
    .desktop-menu {
      display: none;
    }
    aside {
      width: 100%;
    }

    .cards-container {
      grid-template-columns: repeat(auto-fill, 140px);
    }
    .product-card {
      width: 140px;
    }
    .product-card img {
      width: 140px;
      height: 140px;
    }
  }

  @media (min-width: 641px) {
    .mobile-menu {
      display: none;
    }
  }
```

🎲

## 18. Fusión del menú en desktop

Copiamos el código html y css para crear el header y el nav del proyecto:    
![Header](https://i.postimg.cc/wxPWmF25/header.png)

🔥 Header principal:   
```html
<nav>
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>
        <!-- 01 Modificación con JS -->
    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li> 👈👀
        <li class="navbar-shopping-cart">
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>
    <div class="desktop-menu inactive"> 👈👀
        <ul>
          <li>
            <a href="/" class="title">My orders</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
    </div>
</nav>
```

🔥 Código JS del menú en desktop   
```js
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
```


📌 Si se dan cuenta, al momento de darle muchos clicks al toggle, o al botón email, se selecciona nuestro texto. para evitar que esto pase y se comporte como un buen botón se le aplica esta propiedad:

```css
#emailLink{
    cursor: pointer;
    user-select: none;
}
```

Primeros cambios [Repositorio](https://github.com/aleroses/curso-frontend-developer-js)   

🎲

## 19. Fusión del menú en mobile

Según vimos en la clase pasada debemos volver a copiamos el código html y css para crear el menú del proyecto pero esta vez del diseño mobile:

![Carrito de compras](https://i.postimg.cc/8P0RzMb5/carrito.png)

```html
<nav>
	<!-- 02 Modificación con JS -->
    <img src="./icons/icon_menu.svg" alt="menu" class="menu"> 👈👀

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>
    <div class="desktop-menu inactive">
        <ul>
          <li>
            <a href="/" class="title">My orders</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
    </div>
		<!-- 02 Modificación con JS -->
    <div class="mobile-menu inactive"> 👈👀
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
</nav>
```

🔥 Código JS del menú en mobile     
```js
/* 01 Modificación */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* 02 Modificación */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/* 01 Modificación */
menuEmail.addEventListener('click', toggleDesktopMenu); 
/* 02 Modificación */
menuHamIcon.addEventListener('click', toggleMobileMenu);

/* 01 Modificación */
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
/* 02 Modificación */
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
```

🎲

## 20. Carrito de compras

![Carrito](https://i.postimg.cc/gcR67Y12/car.png)

```html
<nav>
    <!-- 02 Modificación con JS -->
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

        <!-- 01 Modificación con JS -->
    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
        <!-- 03 Modificación con JS -->
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"> 👈👀
          <div>2</div>
        </li>
      </ul>
    </div>
    

    <div class="desktop-menu inactive">
        <ul>
          <li>
            <a href="/" class="title">My orders</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
    </div>
<!-- 02 Modificación con JS -->
    <div class="mobile-menu inactive">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
</nav>
<!-- 03 Modificación con JS -->
<aside id="shoppingCartContainer" class=" inactive"> 👈👀
  <div class="title-container">
    <img src="./icons/flechita.svg" alt="arrow">
    <p class="title">My order</p>
  </div>

  <div class="my-order-content">
    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="order">
      <p>
        <span>Total</span>
      </p>
      <p>$560.00</p>
    </div>

    <button class="primary-button">
      Checkout
    </button>
  </div>
</aside>
```

🔥 Código JS del menú My Order     
```js
// VARIABLES  ----------------
/* 01 Modificación */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* 02 Modificación */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/* 03 Modificación */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')

// ADDEVENTLISTENER ----------------
/* 01 Modificación */
menuEmail.addEventListener('click', toggleDesktopMenu); 
/* 02 Modificación */
menuHamIcon.addEventListener('click', toggleMobileMenu);
/* 03 Modificación */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// FUNCIONES  ----------------
/* 01 Modificación */
function toggleDesktopMenu(){
    // Cada vez que entre a esta función cerrar la ventana My order, luego abrir la ventana del Email
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}
/* 02 Modificación */
function toggleMobileMenu(){
    // Al entrar a esta función cerrar ventana My Order y abrir menú del icono hamburguesa 
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
}
/* 03 Modificación */
function toggleCarritoAside(){
    // Al entrar a esta función cerrar ventana del icono hamburguesa y abrir menú My Order
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}
```

🎲

## 21. Lista de productos: HTML a partir de arrays

Creamos estructura html desde JavaScript.    
![Productos](https://i.postimg.cc/Wz26s4dg/products.png)

```html
<nav>
    <!-- 02 Modificación con JS -->
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

        <!-- 01 Modificación con JS -->
    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <!-- 03 Modificación con JS -->
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>
    

    <div class="desktop-menu inactive">
        <ul>
          <li>
            <a href="/" class="title">My orders</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
    </div>
<!-- 02 Modificación con JS -->
    <div class="mobile-menu inactive">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
</nav>
<!-- 03 Modificación con JS -->
<aside id="shoppingCartContainer" class="inactive">
  <div class="title-container">
    <img src="./icons/flechita.svg" alt="arrow">
    <p class="title">My order</p>
  </div>

  <div class="my-order-content">
    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="order">
      <p>
        <span>Total</span>
      </p>
      <p>$560.00</p>
    </div>

    <button class="primary-button">
      Checkout
    </button>
  </div>
</aside>

<!-- 04 Modificación con JS -->
<section class="main-container">
  <div class="cards-container"> 👀👈

    <!-- <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> -->
  </div>
</section>
```

🔥 Código JS de la vista de productos:       
```js
// VARIABLES  ----------------
/* 01 Modificación */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* 02 Modificación */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/* 03 Modificación */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
/* 04 Modificación */
const cardsContainer = document.querySelector('.cards-container')

// ADDEVENTLISTENER ----------------
/* 01 Modificación */
menuEmail.addEventListener('click', toggleDesktopMenu); 
/* 02 Modificación */
menuHamIcon.addEventListener('click', toggleMobileMenu);
/* 03 Modificación */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// FUNCIONES  ----------------
/* 01 Modificación */
function toggleDesktopMenu(){
    // Cada vez que entre a esta función cerrar la ventana My order, luego abrir la ventana del Email
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}
/* 02 Modificación */
function toggleMobileMenu(){
    // Al entrar a esta función cerrar ventana My Order y abrir menú del icono hamburguesa 
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
}
/* 03 Modificación */
function toggleCarritoAside(){
    // Al entrar a esta función cerrar ventana del icono hamburguesa y abrir menú My Order
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

// ARRAYS + FUNCION + CICLO FOR  ----------------
/* 04 Modificación */
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'car',
    price:12000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Plane',
    price:120000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(array){
    for (product of array){
        /* Creamos elementos y su clase 
        -- div>img+div>(div>p+p)+figure>img */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        /* img+div> */
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);

        /* +div>(div>p+p)+figure>img */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        /* >(div>p+p) */
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        /* +figure>img */
        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        /* Metemos todo en la variable principal */
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
```


📌 Para comentar con `//` usar Ctrl + K (VSC queda a la espera), luego pulsa Ctrl + C y después para descomentar Ctr + U

🎲

## 22. Detalles de un producto

![Detalles del producto](https://i.postimg.cc/KjGMZJH5/product-details.png)

```html
<nav>
    <!-- 02 Modificación con JS -->
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

        <!-- 01 Modificación con JS -->
    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <!-- 03 Modificación con JS -->
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>
    

    <div class="desktop-menu inactive">
        <ul>
          <li>
            <a href="/" class="title">My orders</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
    </div>
<!-- 02 Modificación con JS -->
    <div class="mobile-menu inactive">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
</nav>
<!-- 03 Modificación con JS -->
<aside id="shoppingCartContainer" class="inactive">
  <div class="title-container">
    <img src="./icons/flechita.svg" alt="arrow">
    <p class="title">My order</p>
  </div>

  <div class="my-order-content">
    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="shopping-cart">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="./icons/icon_close.png" alt="close">
    </div>

    <div class="order">
      <p>
        <span>Total</span>
      </p>
      <p>$560.00</p>
    </div>

    <button class="primary-button">
      Checkout
    </button>
  </div>
</aside>
<!-- 05 Modificación con JS -->
<aside id="productDetail" class="inactive"> 👀👈
  <div class="product-detail-close">
    <img src="./icons/icon_close.png" alt="close">
  </div>
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
  <div class="product-info">
    <p>$35,00</p>
    <p>Bike</p>
    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    <button class="primary-button add-to-cart-button">
      <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
      Add to cart
    </button>
  </div>
</aside>
<!-- 04 Modificación con JS -->
<section class="main-container">
  <div class="cards-container">

    <!-- <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> -->
  </div>
</section>
```

🔥 **Tip de Visual Studio Code:** Replace all para reemplazar el nombre de cada clase:   

1.  Presionar `control + f` en el primer apartado buscas el nombre (inactive)   
	![Tip vsc](https://i.postimg.cc/bvJt7VK0/tip-vsc-01.png)
2.  Desplegar la flecha y en el siguiente colocas el nuevo nombre que vas a reemplazar,
3.  En la parte derecha le das a **replace all** y listo, reemplaza cada línea de forma automatizada!   
	![Tip vsc 02](https://i.postimg.cc/NM7vDkB3/tip-vsc-02.png)

🎲

## 23. Interacción entre todos los componentes 

🔥 Código JS completo:   
```js
// VARIABLES  ----------------
/* 01 Modificación */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* 02 Modificación */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/* 03 Modificación */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
/* 04 Modificación */
const cardsContainer = document.querySelector('.cards-container');
/* 05 Modificación 👆👀*/
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// ADDEVENTLISTENER ----------------
/* 01 Modificación */
menuEmail.addEventListener('click', toggleDesktopMenu); 
/* 02 Modificación */
menuHamIcon.addEventListener('click', toggleMobileMenu);
/* 03 Modificación */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
/* 05 Modificación */
cardsContainer.addEventListener('click', toggleProductDetailAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailIcon);

// FUNCIONES  ----------------
/* 01 Modificación */
function toggleDesktopMenu(){
    // Cada vez que entre a esta función cerrar la ventana My order, ventana Detalles del producto, luego abrir la ventana del Email
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}
/* 02 Modificación */
function toggleMobileMenu(){
    // Al entrar a esta función cerrar ventana My Order, ventana Detalles del producto y abrir menú del icono hamburguesa 
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
}
/* 03 Modificación */
function toggleCarritoAside(){
    // Al entrar a esta función cerrar ventana del icono hamburguesa, ventana Detalles del producto y abrir menú My Order
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}
/* 05 Modificación */
function toggleProductDetailAside(){
    // Al entrar a esta función cerrar menú My Order, ventana del Email y abrir ventana de Detalles del producto 
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailIcon(){
    productDetailContainer.classList.add('inactive');
}

// ARRAYS + FUNCION + CICLO FOR  ----------------
/* 04 Modificación */
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'car',
    price:12000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Plane',
    price:120000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(array){
    for (product of array){
        /* Creamos elementos y su clase 
        -- div>img+div>(div>p+p)+figure>img */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        /* img+div> */
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);

        /* +div>(div>p+p)+figure>img */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        /* >(div>p+p) */
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        /* +figure>img */
        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        /* Metemos todo en la variable principal */
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
```

🎲

## 24. Pull Requests: aportando código a proyectos en GitHub

[[git-github#27. Flujo de trabajo profesional con Pull requests]]

🎲

## Quiz Contribución a proyectos

1. El primer paso para hacer contribuciones a proyectos open-source es:
	- Entender su código, estructura y arquitectura.
2. Siempre que hagamos contribuciones a proyectos open-source debemos imponer nuestras buenas prácticas y forma de trabajar.
	- Falso
3. ¿Cómo podemos hacer contribuciones a proyectos open-source?
	- Haciendo fork del proyecto y luego pull requests.

🎲

## 25. Deploy con GitHub Pages

Resumen: [[git-github#34. Tu sitio web público con GitHub Pages]]

🎲

## Quiz Despliegue

1. Todas las aplicaciones web desplegadas en internet necesitan backend.
	- Verdadero

🎲


🎲🎲🎲



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

## Examen 
<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. ¿Cuál de las siguientes formas NO FUNCIONA para ejecutar código JavaScript AUTOMÁTICAMENTE cada vez que abrimos un documento HTML?
	- 📌 Copiando y pegando manualmente el código en la consola del navegador cada vez que abrimos o recargamos una página.
	- Escribiendo la ruta de nuestro archivo JavaScript en el atributo `src` de una etiqueta `script` en el documento HTML.
	- Escribiendo el código JavaScript en una etiqueta `script` dentro del documento HTML.

2. ¿Cuál es la diferencia principal entre arrays y objetos?
	- 📌 En los arrays cada elemento se puede diferenciar por su índice o posición. En los objetos cada elemento tiene su propio nombre clave.

3. Ya tienes en JavaScript una variable `input1` que selecciona un input de tu HTML. ¿Cómo puedes leer el valor que escriban los usuarios en ese input?
	- Ambas respuestas son correctas.
	- 📌 Mal Ambas respuestas son INCORRECTAS.
	- input1.getAttribute('value')
	- input1.value

4. ¿Qué herramienta de JavaScript nos permite editar elementos de HTML?
	- append
	- innerHTML
	- innerText
	- appendChild
	- 📌 Todas las respuestas son correctas.

4. ¿Cuál es la diferencia entre parámetro y argumento?
	- 📌 Las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

5. ¿Cuál será el resultado de la siguiente operación: `123 + "456"`?
	- 📌 123456

6. ¿Cuál será el resultado de la siguiente operación: `"Juan David" + "Castro Gallego"`?

	- 📌 Juan DavidCastro Gallego

7. ¿Cuál es la diferencia entre declarar e inicializar?
	- 📌 Declarar es indicarle a JavaScript que crearemos una variable con cierto nombre. Inicializar (o reinicializar) es asignarle un valor a esa variable.

8. ¿Cuál método o propiedad de los arrays nos permite leer la cantidad de elementos de un array en JavaScript?
	- 📌 .length

9. ¿Qué palabra reservada usarías para crear una variable que pueda cambiar su valor en el futuro?
	- 📌 let

10. ¿Cómo podemos convertir un objeto en un array?
	- 📌 Object.values(nombreObjeto) u Object.keys(nombreObjeto)

11. ¿Qué herramienta de JavaScript nos permite crear un elemento HTML de tipo img?
	- 📌document.createElement('img')

12. ¿Para qué sirve el `event.preventDefault`?
	- 📌 Para evitar que los eventos ejecuten su acción por defecto (por ejemplo, recargar la página al completar un formulario).

13. ¿Cuál es la diferencia entre declarar e inicializar?
	- 📌 Declarar es indicarle a JavaScript que crearemos una variable con cierto nombre. Inicializar (o reinicializar) es asignarle un valor a esa variable.

14. ¿Es posible crear variables a partir de otras variables?
	- 📌 Verdadero

15. ¿Qué herramienta de JavaScript nos permite seleccionar elementos de HTML?
	- document.querySelector
	- 📌 Todas las respuestas son correctas.
	- document.getElementsByClassName
	- document.getElementById

</details>
