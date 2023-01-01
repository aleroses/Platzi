# Curso Práctico de JavaScript
> **Juan David Castro Gallego** / [Course Director, Facultad de Computer Science en Platzi](https://platzi.com/profes/juandc/)        
**@fjuandc** en Twitter 

[Link al curso](https://platzi.com/cursos/javascript-practico/)


## 1. ¿Ya tomaste el Curso Básico de JavaScript?

[Slides del curso](https://static.platzi.com/media/public/uploads/curso-practico-javascript-slides_cf4425ef-df8f-426d-b38f-c27df1fb4319.pdf)

🔥 Temario:    
- Test de JavaScript
- Manipulación del DOM
- Flujo de Trabajo Profesional 

[Editor Online para correr código JS](https://runjs.co/)

🎲

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






🎲

🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲










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