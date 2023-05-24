# Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!  

## Introducción
### 1. Programemos un juego con JavaScript

- Crear repositorio en GitHub: Videogame 
	- Template: node
	- License: MIT License 
	- Clonar proyecto 

- Crear archivos:  
	- index.html: Copiar estructura de repositorio del curso
	- styles.css: Lo mismo 
	- maps.js: Igualmente 
	- game.js

```html
<body>
    <div class="game-container">
        <canvas id="game"></canvas>

        <div class="btns">
            <button id="up">Arriba</button>
            <button id="left">Izquierda</button>
            <button id="right">Derecha</button>
            <button id="down">Abajo</button>
        </div>

        <div class="messages">
            <p>Párrafo de ejemplos</p>
        </div>
    </div>
    <script src="./maps.js"></script>
    <script src="./game.js"></script>
</body>
```

```css
* {
    box-sizing: border-box;
}

body {
    background-color: indigo;
    color: #fff;  
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    padding: 0;
}

.game-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
}

canvas {
    border: 4px solid #ff6600;
    border-radius: 8px;
    background-color: #feff9d;
}

.btns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
}

button {
    background-color: #fdef05;
    border-radius: 8px;
    border-color: #ff6600;
    font-family: inherit;
    margin: 0;
    padding: 5px 20px;
    width: 100px;
}
button:not(:last-child) {
    margin-right: 10px;
}

.messages {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
    max-width: 460px;
}

p {
    display: block;
    margin: 0;
    width: 100%;
}

@media (max-width: 440px) {
    button { margin-top: 5px; }
    #up, #down { margin-left: 100%; margin-right: 100%; }
}
```

```js
/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
};

const maps = [];
maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
`);
maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
`);
```

[Repo del juego](https://github.com/platzi/taller-practico-javascript-videogames)

## Canvas
### 2. ¿Qué es canvas en JavaScript?

Canvas es una característica de HTML5 que permite a los desarrolladores dibujar gráficos en tiempo real en una página web utilizando JavaScript. Esencialmente, un elemento canvas es un lienzo en blanco en el que se puede dibujar cualquier cosa que se desee, como imágenes, formas, gráficos y animaciones.

Para usar canvas en JavaScript, primero se debe crear un elemento canvas en el HTML y luego se puede acceder a él en el JavaScript utilizando su ID. Una vez que se tiene acceso al elemento canvas, se puede utilizar el contexto de renderizado 2D o 3D para dibujar en él.

```html
<canvas id="game"></canvas>
```

```jsx
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
```

Ahora la variable game ya tiene las propiedades para que usemos canvas, es recomendable usar canvas una vez el HTML se ha renderizado, por eso podemos usar un escuchador de eventos en el HTML para saber cuando se cargo y poder desde ese punto usar canvas.

`fillRect()` Recibe 2 coordenadas, que son a partir de donde inicia a dibujar, y luego el ancho y el alto.

```jsx
game.fillRect( xinicial, yinicial, width, height)
```

`clearRect()` Este nos sirve especialmente para borrar, esta función también recibe 4 parámetros y son los mismos antes mencionados, en este caso tenemos un borrado de la posición en Y y en X que le demos y los últimos 2 parámetros el grosor del borrado.

```jsx
game.clearRect(0,0,50,50);
```

`fillText()` Este nos permite insertar texto, cuando usemos esta propiedad es necesario que no solo le pasemos el texto sino también las propiedades para poderlo alinear.

```jsx
game.fillText('Platzi', 100,100);
```

`game.textAlign` Nos permite alinear el texto, teniendo como referencia a los ejes X e Y.

Values  
- `"left"` The text is left-aligned.
- `"right"` The text is right-aligned.
- `"center"` The text is centered.
- `"start"` The text is aligned at the normal start of the line (left-aligned for left-to-right locales, right-aligned for right-to-left locales).
- `"end"`The text is aligned at the normal end of the line (right-aligned for left-to-right locales, left-aligned for right-to-left locales).

The default value is `"start"`.  

```jsx
game.textAling = 'rigth';
```

![textAlign](https://i.postimg.cc/bNgzvk8D/2-text-Align.jpg)

`game.font` Con la propiedad font podemos añadir todos los estilos correspondientes a un texto como el tamaño o su tipografía.

```jsx
game.font = '25px verdana';
```

`game.fillStyle` Podemos darle otros estilos como el color

```jsx
game.fillStyle = 'purple';
```

#### Dato
Para los que no les sale el auto completado de los métodos del canvas, les comparto un consejo para no cometer errores de tipados con frecuencia.

```js
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("#game");
```

Lo que hace es decir que nuestra constante “canvas” es de tipo HTMLCanvasElement, lo que nos mostrara los métodos en VSCode.

#### Código de la clase 

```js
/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    game.fillRect(0,120,20,20);
    game.clearRect(0,0,100,50);
    game.clearRect(0,0,50,50);

    // game.font = '25px Verdana';
    // game.fillStyle = 'purple';
    // game.textAlign = 'end';
    // game.fillText('Platzi', 100, 100)
}
```

#### Enlaces  
- [Canva apuntes](https://north-legal-02b.notion.site/Canvas-78616c26a864480d8bf3385076dad547)
- [Documentación](https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)  


### 3. Tamaño del canvas y sus elementos

`window.innerHeight` y `window.innerWidth` son propiedades de JavaScript que devuelven la altura y ancho de la ventana del navegador, excluyendo las barras de herramientas y otras barras de desplazamiento del navegador. Son útiles para ajustar el diseño de la página web en función del tamaño de la ventana del navegador.

`elemento.setAttribute:` Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.

```js
// Dar un ancho y un alto al canvas
canvas.setAttribute('width', canvasSize);
canvas.setAttribute('height', canvasSize);

// Cambiar nombre a la clase
x.setAttribute("class", "clasemodificada");
```

#### Código de la clase 

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // Medidas del canvas
    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    // Renderizar Bomba
    const elementsSize = (canvasSize / 10) - 1; //10%
    console.log({ canvasSize, elementsSize});

    game.font = elementsSize + 'px Verdana';
    game.textAlign = "";

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
}
```


### 4. Canvas responsive

`resize` es un evento que se activa cuando se cambia el tamaño de la ventana del navegador. 

En el código de la clase se utiliza el método `addEventListener` para agregar un oyente de eventos al objeto `window`. Cuando se produce un evento `resize`, se llama a la función `setCanvasSize`.

En este contexto, la función `setCanvasSize` se utiliza para ajustar el tamaño de un elemento canvas en la página web para que coincida con el nuevo tamaño de la ventana del navegador. Esto asegura que el canvas se ajuste correctamente al tamaño de la pantalla y que los gráficos o animaciones se muestren correctamente sin deformaciones o recortes.

En resumen, el evento `resize` en JavaScript se utiliza para detectar cambios en el tamaño de la ventana del navegador y se puede utilizar para ajustar el tamaño de los elementos en la página en consecuencia.

#### Código de la clase 
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

	startGame();
}

function startGame(){
    // Renderizar Bomba
    elementsSize = (canvasSize * 0.1) - 1;
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "";

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
}
```

#### Practice 

```js
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8;

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;

    for (let x=0; x<10; x++) {
        for (let y=1; y<11; y++) {
            game.fillText(emojis['X'], elements_size * x, elements_size * y)
        }
    }
}
```

## Mapa del juego

### 5. ¿Qué es un array bidimensional?

Un array bidimensional es una estructura de datos que almacena elementos en una matriz de filas y columnas. A diferencia de un array unidimensional, que tiene solo una dimensión (una lista lineal de elementos), un array bidimensional se organiza en filas y columnas.

Para crear un array bidimensional en JavaScript, se puede utilizar la sintaxis de corchetes dobles `[][]`. Por ejemplo, el siguiente código crea un array bidimensional de 2x3:

```js
let miArray = [
    [1, 2, 3], // 2 columnas
    [4, 5, 6] // 3 filas
];
```

Para acceder a un elemento en un array bidimensional, se debe indicar su posición en la fila y la columna. Por ejemplo, para acceder al valor `5` en el array anterior, se debe utilizar la sintaxis `miArray[1][1]`, ya que `5` está en la segunda fila (índice 1) y la segunda columna (índice 1).

Los arrays bidimensionales son útiles para almacenar datos tabulares y se utilizan comúnmente en la programación para representar matrices y tablas de datos.

Es importante tener en cuenta que la notación "2x3" se utiliza para indicar el tamaño de la matriz en términos de filas y columnas.


### 6. Arreglos multidimensionales en JavaScript

#### .split 
El método `split` se utiliza principalmente para dividir una cadena en sub-cadenas utilizando un delimitador específico y devolver un array de esas sub-cadenas separadas. Algunos de los usos más comunes del método `split` son:

1. Dividir una cadena en palabras: Se puede utilizar el método `split` para dividir una cadena en palabras, utilizando un espacio en blanco como delimitador. Por ejemplo:

```js
let miCadena = "Hola a todos";
let miArray = miCadena.split(" "); // ["Hola", "a", "todos"]
```

2. Dividir una cadena en caracteres: Se puede utilizar el método `split` para dividir una cadena en caracteres individuales, utilizando una cadena vacía como delimitador. Por ejemplo:

```js
let miCadena = "Hola";
let miArray = miCadena.split(""); // ["H", "o", "l", "a"]
```

3. Separar valores en una cadena de texto: Se puede utilizar el método `split` para separar valores en una cadena de texto, como una lista de números o elementos separados por comas. Por ejemplo:

```js
let miCadena = "1,2,3,4,5";
let miArray = miCadena.split(","); // ["1", "2", "3", "4", "5"]
```

4. Dividir una cadena en líneas: Se puede utilizar el método `split` para dividir una cadena en líneas, utilizando el carácter de salto de línea (`\n`) como delimitador. Por ejemplo:

```js
let miCadena = "Línea 1\nLínea 2\nLínea 3";
let miArray = miCadena.split("\n"); // ["Línea 1", "Línea 2", "Línea 3"]
```

5. Dividir una cadena en varias partes: Se puede utilizar el método `split` con un segundo argumento opcional para limitar el número de elementos en el array resultante. Por ejemplo:

```js
let miCadena = "1,2,3,4,5";
let miArray = miCadena.split(",", 3); // ["1", "2", "3"]
```

En este ejemplo, el método `split` divide la cadena `"1,2,3,4,5"` en un array de sub-cadenas separadas por comas, pero limita el resultado a solo los primeros 3 elementos.

En resumen, el método `split` en JavaScript es una herramienta útil para separar una cadena en subcadenas utilizando un delimitador específico y puede utilizarse de varias formas para diferentes propósitos.

#### .trim
El método `trim` se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto. Algunos de los usos más comunes del método `trim` son:

1. Eliminar espacios en blanco al principio y al final de una cadena: El uso más común del método `trim` es eliminar los espacios en blanco al principio y al final de una cadena de texto. Por ejemplo:

```js
let miCadena = "     Hola a todos     ";
let miCadenaTrim = miCadena.trim(); // "Hola a todos"
```

2. Eliminar otros caracteres al principio y al final de una cadena: Además de eliminar espacios en blanco, el método `trim` también puede eliminar otros caracteres al principio y al final de una cadena, especificados como argumentos. Por ejemplo:

```js
let miCadena = "---Hola a todos---";
let miCadenaTrim = miCadena.trim("-"); // "Hola a todos"
```

En este ejemplo, el método `trim` se utiliza para eliminar los guiones al principio y al final de la cadena, dejando solo el texto `"Hola a todos"`.

3. Normalizar el formato de una cadena: El método `trim` también se puede utilizar para normalizar el formato de una cadena, eliminando espacios en blanco adicionales entre palabras o líneas. Por ejemplo:

```js
let miCadena = "Hola    a     todos\n¡Hola    de nuevo!\n";
let miCadenaTrim = miCadena.trim().replace(/\s+/g, " "); // "Hola a todos ¡Hola de nuevo!"
```

En este ejemplo, el método `trim` se utiliza para eliminar los espacios en blanco al principio y al final de la cadena, y luego se utiliza el método `replace` para reemplazar cualquier secuencia de espacios en blanco adicionales con un solo espacio.

En resumen, el método `trim` en JavaScript se utiliza principalmente para eliminar los espacios en blanco al principio y al final de una cadena de texto, pero también puede utilizarse para eliminar otros caracteres y normalizar el formato de una cadena.

// slice: rebanada - splice: empalme curso anterior 
// .split: dividir .trim: recortar

#### Código de la clase 

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Bomba
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    for (let x=1; x<=10; x++) {
        for (let y=1; y<=10; y++) {
            game.fillText(emojis[mapRowCols[x - 1][y - 1]], elementsSize * y, elementsSize * x);
        }
    }
} 
```

#### Practice 

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8;

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;
    

    const map = maps[2];
    const map_rows = map.trim().split('\n');
    const map_row_cols = map_rows.map(row => row.trim().split(''));
    console.log({map});
    console.log({map_rows});
    console.log({map_row_cols});

    for (let x=0; x<10; x++) {
        for (let y=0; y<10; y++) {
            game.fillText(emojis[map_row_cols[x][y]], elements_size * x, elements_size * (y+1));
            console.log('x', elements_size * x, 'y', elements_size * (y+1));
        }
    }
}
```

```js
console.log({map});
map: 
'\n    I-----XXXX\n    XXXXX-XXXX\n    XX----XXXX\n    …XXX\n    XX-XXXXXXX\n    XX-----OXX\n    XXXXXXXXXX\n'

console.log({map_rows});
map_rows: Array(10)
0: "I-----XXXX"
1: "    XXXXX-XXXX"
2: "    XX----XXXX"
3: "    XX-XXXXXXX"
4: "    XX-----XXX"
5: "    XXXXXX-XXX"
6: "    XX-----XXX"
7: "    XX-XXXXXXX"
8: "    XX-----OXX"
9: "    XXXXXXXXXX"

console.log({map_row_cols});
map_row_cols: Array(10)
0: (10) ['I', '-', '-', '-', '-', '-', 'X', 'X', 'X', 'X']
1: (10) ['X', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X', 'X']
2: (10) ['X', 'X', '-', '-', '-', '-', 'X', 'X', 'X', 'X']
3: (10) ['X', 'X', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
4: (10) ['X', 'X', '-', '-', '-', '-', '-', 'X', 'X', 'X']
5: (10) ['X', 'X', 'X', 'X', 'X', 'X', '-', 'X', 'X', 'X']
6: (10) ['X', 'X', '-', '-', '-', '-', '-', 'X', 'X', 'X']
7: (10) ['X', 'X', '-', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
8: (10) ['X', 'X', '-', '-', '-', '-', '-', 'O', 'X', 'X']
9: (10) ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
```

#### Dato
Para transformar el string de los mapas en un arreglo bidimensional, también puedes usar expresiones regulares y un match. 

```js
const map = maps[0]
.match(/[IXO\-]+]/g)
.map(a=>a.split(""))

```

Explicación en

```js
.match(/[IXO\-]+]/g)
```

estamos diciendo:  
Búscame las palabras que cumplan con estas características

```js
/[IXO\-]+/g
```

desglose  
`[IXO-]+` significa  
búscame todo lo que empiece por I,X,O o -, pero como el - es una palabra reservada usamos el slash invertido -   
decimos que si o si hay 1 o más caracteres iguales, después del primero g le decimos que haga esa búsqueda en todo el string  

Resumen  
Le decimos búscame todo lo que empiece por I,X,O o -, y que todos los caracteres de ese tipo que le siguen  

Entonces como, cada fila esta separada por una espacio o salto de línea, solo devolverá esas palabras

```js
//(10)
 ['IXXXXXXXXX',
 '-XXXXXXXXX',
 '-XXXXXXXXX', 
'-XXXXXXXXX', 
'-XXXXXXXXX', 
'-XXXXXXXXX', 
'-XXXXXXXXX',
 '-XXXXXXXXX', 
'-XXXXXXXXX',
 'OXXXXXXXXX']
```

Luego ya es fácil. le pasamos un map y le decimos que por cada array recibido, vamos a revolverlo, pero ahora separado los elementos

```js
.map(a=>a.split(""))
```

[Regular Expressions Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)

### 7. Refactor del mapa de juego

El método `forEach()` es una función de orden superior que se utiliza en JavaScript para recorrer y operar sobre cada elemento de un array, uno por uno, sin necesidad de utilizar un bucle `for` o `while`.

La sintaxis básica del método `forEach()` es la siguiente:

```js
array.forEach(function(valorActual, índice, array) {
  // Cuerpo de la función
});
```

Donde `valorActual` es el valor actual del elemento que se está procesando, `índice` es la posición del elemento en el array, y `array` es el propio array que se está recorriendo.

La función que se pasa como argumento a `forEach()` se ejecuta una vez por cada elemento del array. En cada iteración, esta función toma tres argumentos opcionales: el valor del elemento actual, su índice, y el array completo. Dentro del cuerpo de la función, se puede realizar cualquier operación que sea necesaria con el elemento actual.

Por ejemplo, el siguiente código muestra cómo utilizar `forEach()` para recorrer un array y mostrar cada elemento en la consola:

```js
var miArray = [1, 2, 3, 4, 5];
miArray.forEach(function(valorActual, índice, array) {
  console.log("El valor actual es " + valorActual + " en la posición " + índice);
});
```

En este ejemplo, `forEach()` recorre cada elemento en el array `miArray` y muestra su valor y su posición en la consola. La salida esperada sería:

```js
El valor actual es 1 en la posición 0
El valor actual es 2 en la posición 1
El valor actual es 3 en la posición 2
El valor actual es 4 en la posición 3
El valor actual es 5 en la posición 4
```

El método `forEach()` es una alternativa más legible y expresiva a los bucles `for` o `while` tradicionales, y además se beneficia de la optimización interna del motor JavaScript que lo hace más rápido que los bucles convencionales.

#### Código de la clase 

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            
            game.fillText(emoji, posX, posY)
        })
    });

    /* for (let x=1; x<=10; x++) {
        for (let y=1; y<=10; y++) {
            game.fillText(emojis[mapRowCols[x - 1][y - 1]], elementsSize * y, elementsSize * x);
        }
    } */
} 
```

#### Practice: 

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d')
let canvas_size;
let elements_size;

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size)

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size()
}

function calculate_elements_size(){
    const map = maps[0];
    const map_rows = map.trim().split('\n');
    const map_rows_cols = map_rows.map(row => row.trim().split(''));

    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;

    map_rows_cols.forEach((row, ri) => { // element, indice
        // ['I', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
        row.forEach((col, ci) => {
            // I
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            game.fillText(emoji, x, y);
        })
    });

    /* for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            game.fillText(emojis[map_rows_cols[x][y]], elements_size * x, elements_size * (y+1));
        }
    } */
}

// registro de la consola: console log
```

#### Dato
Para evitar complicarnos con el índice +1 al momento de renderizar los elementos, podemos utilizar los métodos del canvas: `game.textBaseLine` define la posición vertical del texto en el canvas, recibe varios atributos que puedes revisar en la [documentación](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline). El valor `'top'` hace que nuestro tome como superior la ubicación que le damos, de esta forma, si la coordenada y tiene el valor de 0, el texto no se pondrá por encima sino por debajo del 0, así es como quedan alineados de tal forma que se vean completamente en el canvas.

## Movimientos del jugador
### 8. Eventos y botones

`keydown` y `keyup` son eventos de teclado en JavaScript que se pueden usar para detectar cuándo se presiona o se suelta una tecla en el teclado.

Cuando se agrega un event listener (escucha de eventos) a `keydown` o `keyup` en el objeto `window`, el código dentro de la función manejadora del evento se ejecutará cuando se presione o suelte una tecla en el teclado.

En el siguiente ejemplo, cuando el usuario presiona una tecla en el teclado, se llama a la función `move_by_keys`:

```js
window.addEventListener('keydown', move_by_keys);
```

En este ejemplo, `move_by_keys` es el nombre de una función que se ejecuta cuando se presiona una tecla en el teclado. La función puede tomar la tecla presionada como argumento y realizar alguna acción basada en esa tecla.

De manera similar, se puede agregar un event listener a `keyup` para detectar cuando se suelta una tecla en el teclado:

```js
window.addEventListener('keyup', move_by_keys);

function move_by_keys(event){
    console.log(event);
}
```

En este caso, la función `move_by_keys` se ejecutará cuando se suelte una tecla en el teclado. Esto puede ser útil para detectar cuándo se deja de presionar una tecla en particular y realizar alguna acción basada en eso.

#### Código de la clase 
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            
            game.fillText(emoji, posX, posY)
        })
    });
} 

window.addEventListener('keydown', moveBykeys); //keyup 
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    console.log('arriba');
}
function moveLeft(){
    console.log('izquierda');
}
function moveRight(){
    console.log('derecha');
}
function moveDown(){
    console.log('abajo');
}
```

#### Practice: 

```js
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
let emoji;
let x;
let y;
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');

window.addEventListener('keydown', move_by_keys);
window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}
function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));
    console.log({map});

    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = elements_size * ci;
            y = elements_size * (ri+1);

            game.fillText(emoji, x, y);
        });
    });
}

function move_by_keys(event){
    /* console.log(event); */
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    console.log('Arriba');
}
function move_left(){
    console.log('Izquierda');
}
function move_right(){
    console.log('Derecha');
}
function move_down(){
    console.log('Abajo');
}
// registro de la consola: console log
```


### 9. Objeto playerPosition
#### Código de la clase 

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const playerPosition = {
    x: undefined,
    y: undefined,
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            
            if(col == 'O'){
                playerPosition.x = posX;
                playerPosition.y = posY;
                console.log({playerPosition});
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
} 

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    console.log('arriba');
    playerPosition.y -= elementsSize;
    movePlayer();
}
function moveLeft(){
    console.log('izquierda');
}
function moveRight(){
    console.log('derecha');
}
function moveDown(){
    console.log('abajo');
}
```

#### Practice:

```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let element_size;
let map;
let emoji;
let x;
let y; 
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector("#right");
const btn_down = document.querySelector('#down');
const player_position = {
    x: undefined,
    y: undefined,
}

window.addEventListener('keydown', move_by_keys);
window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    element_size = (canvas_size * 0.1) - 1;
    game.font = `${element_size}px Verdana`

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));

    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = element_size * ci;
            y = element_size * (ri + 1);
            
            if(player_position.x == undefined && col == 'O'){
	            // emoji == '🚪'
                player_position.x = x;
                player_position.y = y;
            }
            
            game.fillText(emoji, x, y);
        });
    });

    move_player();
}

function move_player(){
    game.fillText(emojis['PLAYER'], player_position.x, player_position.y);
}
function move_by_keys(event){
    // console.log(event);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    console.log('arriba');
    player_position.y -= element_size;
    /* move_player(); */
    calculate_canvas_size();
}
function move_left(){
    console.log('izquierda');
}
function move_right(){
    console.log('derecha');
}
function move_down(){
    console.log('abajo');
}
```


### 10. Limpieza de movimientos
#### Código de la clase
```js
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const playerPosition = {
    x: undefined,
    y: undefined,
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            
            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({playerPosition});
                }
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
} 

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    console.log('arriba');
    playerPosition.y -= elementsSize;
    startGame();
}
function moveLeft(){
    console.log('izquierda');
    playerPosition.x -= elementsSize;
    startGame();
}
function moveRight(){
    console.log('derecha');
    playerPosition.x += elementsSize;
    startGame();
}
function moveDown(){
    console.log('abajo');
    playerPosition.y += elementsSize;
    startGame();
}
```

#### Practice: 
```js
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
let emoji;
let x;
let y;
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const player_position = {
    x: undefined,
    y: undefined,
}

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_key);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));
    
    map.forEach((row, ri) => { //element, id
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = elements_size * ci;
            y = elements_size * (ri+1);

            if(player_position.x == undefined && col == 'O'){
                player_position.x = x;
                player_position.y = y;
                // console.log(player_position);
            }
            game.fillText(emoji, x, y);
        });
    });
    move_player();
}

function move_player(){
    game.fillText(emojis['PLAYER'], player_position.x, player_position.y)
}
function move_by_key(event){
    // console.log(event);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > elements_size + 1){
        player_position.y -= elements_size;
        calculate_canvas_size();
    }
    console.log(player_position, canvas_size, elements_size);
}
function move_left(){
    if(player_position.x +1 > elements_size){
        player_position.x -= elements_size;
        calculate_canvas_size();
    }
    console.log(player_position, canvas_size, elements_size);
    
}
function move_right(){
    if(player_position.x < canvas_size*0.8){
        player_position.x += elements_size;
        calculate_canvas_size();
    }
    console.log(player_position, canvas_size * 0.8, elements_size);
}
function move_down(){
    if(player_position.y < canvas_size * 0.9){
        player_position.y += elements_size;
        calculate_canvas_size();
    }
    console.log(player_position, canvas_size, elements_size);
}
```

### 11. No te salgas del mapa
#### Código de la clase
```js
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const playerPosition = {
    x: undefined,
    y: undefined,
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            
            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({playerPosition});
                }
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
} 

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }
    
}
function moveLeft(){
    console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice: 
```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa 
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
let emoji;
let x;
let y;
const player_position = {
    x: undefined,
    y: undefined,
}

const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_key);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = window.innerWidth * 0.8
    : canvas_size = window.innerHeight * 0.8;

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = (canvas_size * 0.1) - 1;
    game.font = `${elements_size}px Verdana`;
    
    map = (maps[0].trim().split("\n")).map(x => x.trim().split(''));

    map.forEach((row, ri) => { // element y indix
        row.forEach((col, ci) => {
            emoji = emojis[col];
            x = elements_size * ci;
            y = elements_size * (ri + 1);

            if(player_position.x == undefined && col== 'O'){
                player_position.x = x;
                player_position.y = y;
            }
            
            game.fillText(emoji, x, y);
        });
    });
    move_player();
}

function move_player(){
    game.fillText(emojis['PLAYER'], player_position.x, player_position.y);
}
function move_by_key(event){
    if(event.key == 'ArrowUp'){
        move_up();
    }else if(event.key == 'ArrowLeft'){
        move_left();
    }else if(event.key == 'ArrowRight'){
        move_right();
    }else if(event.key == 'ArrowDown'){
        move_down();
    }
    /* console.log(event.key); */
}

function move_up(){
    if(player_position.y > elements_size +1){
        player_position.y -= elements_size;
        /* console.log(player_position, elements_size); */
        calculate_canvas_size();
    }
}
function move_left(){
    if(player_position.x > elements_size - 1){
        player_position.x -= elements_size;
        /* console.log(player_position.x, elements_size); */
        calculate_canvas_size();
    }
}
function move_right(){
    if(player_position.x < canvas_size * 0.8){
        player_position.x += elements_size;
        /* console.log(player_position.x, canvas_size * 0.9); */
        calculate_canvas_size();
    }
}
function move_down(){
    if(player_position.y < elements_size * 10){
        player_position.y += elements_size;
        calculate_canvas_size();
        /* console.log(player_position, elements_size * 10, canvas_size); */
    }
}
```



## Colisiones 
### 12. Detectando colisiones fijas

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const playerPosition = {
    x: undefined,
    y: undefined,
};

const giftPosition = {
    x: undefined,
    y: undefined,
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        console.log('subiste de nivel');
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }

}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    /* console.log('derecha'); */
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice:

```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
const player_position = {
    x: undefined,
    y: undefined,
}
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const gift_position = {
    x: undefined,
    y: undefined,
}

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    console.log(canvas_size);
    console.log(window.innerHeight, window.innerWidth);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor((canvas_size * 0.1) - 0.5);
    console.log(elements_size);
    game.font = `${elements_size}px Verdana`;

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));
    console.log({map});

    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = Math.floor(elements_size * ci);
            const y = Math.floor(elements_size * (ri + 1));

            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size; 
                // console.log(player_position);
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
                console.log(gift_position);
            }

            game.fillText(emoji, x, y);
        });
    });
    move_player();
}

function move_player(){
    const gift_collision_x = player_position.x == gift_position.x;
    const gift_collision_y = player_position.y == gift_position.y;
    const gift_collision = gift_collision_x && gift_collision_y;

    if (gift_collision) {
        console.log('ganaste');
    }

    game.fillText(emojis['PLAYER'], (player_position.x * elements_size), (player_position.y * elements_size));
    console.log(player_position);
}

function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp'){
        move_up();
    }else if(event.key == 'ArrowLeft'){
        move_left();
    }else if(event.key == 'ArrowRight'){
        move_right();
    }else if(event.key == 'ArrowDown'){
        move_down();
    }
}
function move_up(){
    console.log('arriba');
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();
}
function move_left(){
    console.log('izquierda');
        if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
}
function move_right(){
    console.log('derecha');
        if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
}
function move_down(){
    console.log('abajo');
        if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
}
```

### 13. Detectando colisiones con arrays

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        console.log('subiste de nivel');
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        console.log('chocaste con enemy');
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }

}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice:

```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
const player_position = {
    x: undefined,
    y: undefined,
}
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const gift_position = {
    x: undefined,
    y: undefined,
}
let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight *  0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor((canvas_size * 0.1) - 0.5);
    game.font = `${elements_size}px Verdana`;

    map = (maps[0].trim().split('\n')).map(x => x.trim().split(''));

    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            
            if(col == 'O' && (!player_position.x && !player_position.y)){
                // !player_position
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }

            game.fillText(emoji, x, y); 
        });
    });
    move_player();
}

function move_player(){
    const gift_collision_x = player_position.x == gift_position.x;
    const gift_collision_y = player_position.y == gift_position.y;
    const gift_collision = gift_collision_x && gift_collision_y;

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    })

    if(gift_collision){
        console.log('You win!!!');
    }

    if(bomb_collision){
        console.log('Game over');
    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);

    console.log(player_position);
}
function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;    
        calculate_canvas_size();
    }
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
        calculate_canvas_size();
    }
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
        calculate_canvas_size();
    }
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
        calculate_canvas_size();
    }
}
// registro de la consola
```

### 14. Victoria: subiendo de nivel

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
let level = 0;
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[level];

    if(!map){
        gameWin();
        return;
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        console.log('chocaste con enemy');
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }

}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice:

```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa (problemas con la finalización del juego)
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let map;
let level = 0;
const player_position = {
    x: undefined,
    y: undefined,
}
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const gift_position = {
    x: undefined,
    y: undefined,
}
let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight *  0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor((canvas_size * 0.1) - 0.5);
    game.font = `${elements_size}px Verdana`;
    
    map = (maps[level].trim().split('\n')).map(x => x.trim().split(''));


    bomb_position = []
    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
                
            if(col == 'O' && (!player_position.x && !player_position.y)){
                // !player_position
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }
    
            game.fillText(emoji, x, y); 
        });
    });

    move_player();
}

function move_player(){
    const gift_collision_x = player_position.x == gift_position.x;
    const gift_collision_y = player_position.y == gift_position.y;
    const gift_collision = gift_collision_x && gift_collision_y;

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    });

    if(gift_collision){
        level_win();
    }

    if(bomb_collision){
        console.log('Game over');
    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    console.log('Level win');

    if(level < maps.length - 1){
        level++;
        console.log('level', level, maps.length);
        calculate_canvas_size(); 
    }else{
        game_win();
    }
}
function game_win(){
    console.log('Terminaste el juego');
}

function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;    
        calculate_canvas_size();
    }
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
        calculate_canvas_size();
    }
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
        calculate_canvas_size();
    }
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
        calculate_canvas_size();
    }
}
```

### 15. Derrota: perdiendo vidas

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementsSize; //10%
let level = 0;
let lives = 3;
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[level];

    if(!map){
        console.log();
        gameWin();
        return;
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function levelFail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }

}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice:
```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvas_size;
let elements_size;
let level = 0;
let lives = 3;
const player_position = {
    x: undefined,
    y: undefined,
};
const gift_position = {
    x: undefined,
    y: undefined,
};
let bomb_position = [];

const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor(canvas_size * 0.1);
    game.font = `${elements_size}px Verdana`;

    const map_number = maps[level];
    if(!map_number){
        game_win();
        return;
    }

    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));
    
    bomb_position = [];
    map.forEach((row, ri) => { //elemen, index
        row.forEach((col, ci) => {
            const emoji = emojis[col]
            const x = Math.floor(elements_size * ci);
            const y = Math.floor(elements_size * (ri+1));

            game.fillText(emoji, x, y);

            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }
        });
    });
    move_player();
}

function move_player() {
    const gift_collision_x = gift_position.x == player_position.x;
    const gift_collision_y = gift_position.y == player_position.y;
    const gift_collision = gift_collision_x && gift_collision_y;
    
    const bomb_collision = bomb_position.find(bomb => {
        const bomb_position_x = bomb.x == player_position.x;
        const bomb_position_y = bomb.y == player_position.y;
        return bomb_position_x && bomb_position_y;
    });

    if(gift_collision){
        level_win();
    }
    if(bomb_collision){
        level_fail();
    }
    
    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
}
function level_fail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
    }

    player_position.x = undefined;
    player_position.y = undefined;
    calculate_canvas_size();
}
function game_win(){
    console.log('You finished the game');
}
function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
}
```

## Bonus: adictividad
### 16. Sistema de vidas y corazones
En JavaScript, la función constructora `Array()` se utiliza para crear un nuevo `array` con una longitud específica o con elementos específicos. Esta función acepta una cantidad variable de argumentos, los cuales se utilizan para inicializar los elementos del `array`. Los argumentos se pueden proporcionar en una lista separada por comas, o como un solo argumento que sea un `array`.

Al crear un `array` utilizando la función constructora `Array()`, podemos especificar la longitud del `array` de la siguiente manera:

```js
let miArray = new Array(longitud);
```

Donde `longitud` es un número entero que especifica la cantidad de elementos que tendrá el `array`. Por ejemplo:

```js
let miArray = new Array(5);
console.log(miArray); // muestra [undefined, undefined, undefined, undefined, undefined]
```

También podemos inicializar los elementos del `array` especificando los valores como argumentos separados por comas:

```js
let miArray = new Array('uno', 'dos', 'tres');
console.log(miArray); // muestra ['uno', 'dos', 'tres']
```

O podemos proporcionar un solo argumento que sea un `array`:

```js
let miArray = new Array(['uno', 'dos','tres']);
console.log(miArray); // muestra [['uno', 'dos', 'tres']]
```

En este caso, el `array` interno se convierte en el primer elemento del `array` creado por la función constructora `Array()`.

Es importante tener en cuenta que, aunque la función constructora `Array()` es una forma válida de crear un `array` en JavaScript, no es la forma más común de hacerlo. En su lugar, se utiliza más comúnmente la sintaxis de `array` literal, que es más corta y fácil de leer. Por ejemplo, en lugar de utilizar la función constructora `Array()` para crear un `array` vacío, podemos simplemente hacer lo siguiente:

```js
let miArray = [];
```

Y para inicializar un `array` con elementos, podemos hacer lo siguiente:

```js
let miArray = ['uno', 'dos', 'tres'];
```

Un ejemplo de cómo utilizar el método `fill()` con la función constructora `Array()` en JavaScript para crear un `array` con valores iniciales repetidos:

```js
let miArray = new Array(5).fill(0);
console.log(miArray); // muestra [0, 0, 0, 0, 0]
```

En este ejemplo, creamos un nuevo `array` utilizando la función constructora `Array()` y especificamos una longitud de `5`. Luego, llamamos al método `fill()` en el `array` recién creado y le pasamos un argumento de `0`. Este argumento indica que queremos inicializar todos los elementos del `array` con el valor `0`.

Como resultado, el `array` `miArray` tendrá una longitud de `5` y todos sus elementos tendrán un valor de `0`.

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives')

let canvasSize;
let elementsSize; //10%
let level = 0;
let lives = 3;

const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[level];

    if(!map){
        console.log();
        gameWin();
        return;
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    showLives();
    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function levelFail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
}

function showLives(){   
    // Array de 3 espacios que llenamos con 3 corazones
    const heartsArray = Array(lives).fill(emojis['HEART']) // [1,2,3]
    
    spanLives.innerHTML = ''; // limpiamos corazones
    heartsArray.forEach(heart => spanLives.append(heart)); // adjuntar
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }
}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

Otra forma: 
```js
function showLives() {
  spanLives.innerHTML = emojis["HEART"].repeat(lives)
}
```

#### Practice:
```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 
// 9. Mostrar vidas en pantalla

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const span_lives = document.querySelector('#lives');

let canvas_size;
let elements_size;
let level = 0;
let lives = 3;

const player_position = {
    x: undefined,
    y: undefined,
};
const gift_position = {
    x: undefined,
    y: undefined,
};

let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor(canvas_size * 0.1);
    game.font = `${elements_size}px Verdana`;

    const map_number = maps[level];
    if(!map_number){
        game_win();
        return;
    }

    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));
    
    bomb_position = [];
    map.forEach((row, ri) => { //elemen, index
        row.forEach((col, ci) => {
            const emoji = emojis[col]
            const x = Math.floor(elements_size * ci);
            const y = Math.floor(elements_size * (ri+1));

            game.fillText(emoji, x, y);

            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }
        });
    });
    move_player();
    show_lives();
}

function move_player() {
    const gift_collision_x = gift_position.x == player_position.x;
    const gift_collision_y = gift_position.y == player_position.y;
    const gift_collision = gift_collision_x && gift_collision_y;
    
    const bomb_collision = bomb_position.find(bomb => {
        const bomb_position_x = bomb.x == player_position.x;
        const bomb_position_y = bomb.y == player_position.y;
        return bomb_position_x && bomb_position_y;
    });

    if(gift_collision){
        level_win();
    }
    if(bomb_collision){
        level_fail();
    }
    
    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
}
function level_fail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
    }

    player_position.x = undefined;
    player_position.y = undefined;
    calculate_canvas_size();
}
function game_win(){
    console.log('You finished the game');
}
function show_lives(){
    /* const hearts_array = Array(lives).fill(emojis['HEART']);

    span_lives.innerText = '';
    hearts_array.forEach(heart => span_lives.append(heart)); */

    span_lives.innerText = emojis['HEART'].repeat(lives);
}
function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
}
// registro de la consola
```

### 17. Sistema de tiempo y puntajes
`setTimeout`, `setInterval` y `clearInterval`, `Date.now`

#### setTimeout(): Establecer el tiempo de espera
`setTimeout()` es una función que se utiliza para retrasar la ejecución de una función determinada durante un período de tiempo específico. La función `setTimeout()` toma dos argumentos: la función que se quiere ejecutar y el tiempo en milisegundos que se quiere retrasar la ejecución de dicha función.

La sintaxis básica de `setTimeout()` es la siguiente:

```js
setTimeout(función, tiempo);
```

Por ejemplo, si queremos ejecutar una función llamada `saludo()` después de un retraso de 2 segundos, podemos utilizar `setTimeout()` de la siguiente manera:

```js
function saludo() {
  console.log('Hola, ¿cómo estás?');
}

setTimeout(saludo, 2000);
```

En este ejemplo, la función `saludo()` se ejecutará después de un retraso de 2 segundos (2000 milisegundos) utilizando `setTimeout()`.

También es posible pasar argumentos adicionales a la función que se va a ejecutar utilizando `setTimeout()`. Por ejemplo:

```js
function saludar(nombre) {
  console.log('Hola, ' + nombre + '. ¿Cómo estás?');
}

setTimeout(saludar, 2000, 'Juan');
```

En este ejemplo, la función `saludar()` se ejecutará después de un retraso de 2 segundos (2000 milisegundos) y recibirá un argumento adicional de `nombre`, que se establece en `"Juan"`. Al ejecutarse, la función mostrará el mensaje `"Hola, Juan. ¿Cómo estás?"` en la consola.

Es importante tener en cuenta que `setTimeout()` es una función asíncrona, lo que significa que la ejecución del programa continuará mientras la función que se ha pasado a `setTimeout()` espera para ser ejecutada. En otras palabras, el código que sigue inmediatamente después de `setTimeout()` seguirá ejecutándose mientras se espera a que pase el tiempo especificado antes de que se ejecute la función.

También es posible cancelar la ejecución de una función que se ha programado con `setTimeout()` utilizando la función `clearTimeout()`. Esta función toma como argumento el identificador de tiempo devuelto por `setTimeout()`, y cancela la ejecución de la función correspondiente si aún no se ha ejecutado. Por ejemplo:

```js
let tiempo = setTimeout(saludar, 2000, 'Juan');
clearTimeout(tiempo);
```

En este ejemplo, la variable `tiempo` contiene el identificador de tiempo devuelto por `setTimeout()`. Luego, llamamos a `clearTimeout(tiempo)` para cancelar la ejecución de la función `saludar()` si aún no se ha ejecutado.

#### setInterval(): establecer intervalo
`setInterval()` es una función que se utiliza para repetir la ejecución de una función en intervalos de tiempo regulares. Esta función toma dos argumentos: la función que se quiere ejecutar y el tiempo en milisegundos que se quiere esperar entre cada ejecución de la función. 

Por ejemplo, si queremos ejecutar una función llamada `actualizarTiempo()` cada segundo, podemos utilizar la función `setInterval()` de la siguiente manera:

```js
setInterval(actualizarTiempo, 1000);
```

En este ejemplo, la función `actualizarTiempo()` se ejecutará cada segundo (1000 milisegundos) utilizando `setInterval()`.

Es importante tener en cuenta que, si no se cancela un intervalo de tiempo creado con `setInterval()`, la función programada se seguirá ejecutando a intervalos regulares hasta que se cierre la ventana del navegador o se refresque la página.

Para cancelar la ejecución del intervalo de tiempo, podemos utilizar la función `clearInterval()`, que toma como argumento el identificador del intervalo de tiempo devuelto por `setInterval()`.

#### Date.now() 
`Date.now()` es un método estático que no requiere argumentos y devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC hasta la fecha y hora actuales, lo que se conoce como el "Epoch Unix".

La sintaxis básica de `Date.now()` es la siguiente:

```js
Date.now();
```

Por ejemplo, si queremos medir el tiempo transcurrido entre dos eventos en una aplicación web, podemos utilizar `Date.now()` de la siguiente manera:

```js
let tiempoInicial = Date.now();

// aquí se realiza el primer evento

let tiempoFinal = Date.now();
let tiempoTranscurrido = tiempoFinal - tiempoInicial;

console.log('El tiempo transcurrido es:', tiempoTranscurrido, 'milisegundos.');
```

En este ejemplo, utilizamos `Date.now()` para obtener el tiempo actual en milisegundos antes y después de la realización del evento. Luego, resta el tiempo inicial del tiempo final para obtener el tiempo transcurrido entre los dos eventos.

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');

let canvasSize;
let elementsSize; //10%
let level = 0;
let lives = 3;
let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[level];

    if(!map){
        console.log();
        gameWin();
        return;
    }
    if(!timeStart){
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100);
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    showLives();
    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function levelFail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
        timeStart = undefined;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
    clearInterval(timeInterval);
}

function showLives(){   
    // Array de 3 espacios que llenamos con 3 corazones
    const heartsArray = Array(lives).fill(emojis['HEART']) // [1,2,3]
    
    spanLives.innerHTML = ''; // limpiamos corazones
    heartsArray.forEach(heart => spanLives.append(heart)); // adjuntar
}

function showTime(){
    spanTime.innerText = Date.now() - timeStart;
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }
}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice:
```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 
// 9. Mostrar vidas en pantalla
// 10. Agregar un temporizador 

// errores
// si gano y sigo moviendo los keys el tiempo incrementa 
// si pierdo las 3 vidas el cronometro arranca sin que se empiece a jugar
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const span_lives = document.querySelector('#lives')
const span_time = document.querySelector('#time')

const player_position = {
    x: undefined,
    y: undefined,
}
const gift_position = {
    x: undefined,
    y: undefined,
}

let canvas_size;
let elements_size;
let level = 0;
let lives = 3;
let time_start;
let time_player;
let time_interval;
let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    calculate_elements_size();
}

function calculate_elements_size(){
    elements_size = Math.floor((canvas_size * 0.1)-0.5);
    game.font = `${elements_size}px Verdana`
    
    const map_number = maps[level];
    
    if (!map_number) {
        game_win();
        return
    }
    /* if(!time_start){
        time_start = Date.now();
        time_interval = setInterval(show_time, 100);
    } */
    
    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));
    bomb_position = [];
    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            
            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if (col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }

            game.fillText(emoji, x, y);
        });
    });
    move_player();
    show_lives();
}

function move_player(){
    const gift_collision_x = player_position.x == gift_position.x;
    const gift_collision_y = player_position.y == gift_position.y;
    const gift_collision = gift_collision_x && gift_collision_y

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    });

    if(gift_collision){
        level_win();
    }
    if(bomb_collision){
        level_fail();
    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
    console.log('You win!!');
}
function level_fail(){
    lives--;
    if (lives == 0){
        level = 0;
        lives = 3;

        time_start = undefined;
    }

    player_position.x = undefined;
    player_position.y = undefined;

    calculate_canvas_size();
    console.log('You collided with a bomb...');
}
function game_win(){
    player_position.x = undefined;
    player_position.y = undefined;

    game.fillText('You Win!!', canvas_size*0.3, canvas_size*0.5)
    console.log('You finished the game :)');
    clearInterval(time_interval);
}
function show_lives(){
    span_lives.innerText = emojis['HEART'].repeat(lives);
    // const hearts_array = Array(lives).fill(emojis['HEART'])
    
    // span_lives.innerText = '';
    // hearts_array.forEach(heart => span_lives.append(heart));
}
function calculate_time(){
    if(!time_start){
        time_start = Date.now();
        time_interval = setInterval(show_time, 100)
    }
}
function show_time(){
    // tiempo transcurrido     
    span_time.innerText = Date.now() - time_start;
}


function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();
    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
    if(level < maps.length){
        calculate_time();
        show_time();
    }

}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_down() {
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
// registro de la consola
```

### 18. ¿Qué es localStorage?

`localStorage` es un objeto global en JavaScript que permite almacenar datos en el navegador web de un usuario de manera persistente. Los datos almacenados en `localStorage` permanecen disponibles incluso después de que el usuario cierra el navegador o reinicia su computadora. 

`localStorage` es una forma de almacenamiento de datos en el lado del cliente, lo que significa que los datos se almacenan en la computadora del usuario y no en el servidor. También se puede acceder a los datos almacenados en `localStorage` desde cualquier página web en el mismo dominio.

#### setItem() y getItem()
La forma de utilizar `localStorage` es mediante la API proporcionada por JavaScript, que incluye los métodos `setItem()`, `getItem()`, `removeItem()`, `clear()`, entre otros.

`localStorage` es útil para almacenar datos como preferencias del usuario, configuraciones de la aplicación, información de inicio de sesión y otra información que un usuario quiera guardar en su computadora para acceder más tarde.

#### Ejemplos

1. Para almacenar y recuperar una cadena de texto simple:

```js
// Almacenar
localStorage.setItem("nombre", "Ale");

// Recuperar
const nombre = localStorage.getItem("nombre");
console.log(nombre); // "Ale"
```

2. Para almacenar y recuperar un objeto JSON:

```js
// Almacenar
const usuario = { nombre: "Juan", edad: 30 };
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado); // { nombre: "Juan", edad: 30 }
```

3. Para eliminar un item específico de `localStorage`:

```js
localStorage.removeItem("nombre"); // Elimina el item "nombre" de localStorage
```

4. Para eliminar todos los items de `localStorage`:

```js
localStorage.clear(); // Elimina todos los items de localStorage
```

Es importante tener en cuenta que `localStorage` solo puede almacenar datos en formato de cadena de texto. Si desea almacenar otros tipos de datos, como objetos o números, debe convertirlos a cadenas de texto utilizando `JSON.stringify()` antes de almacenarlos y luego convertirlos de nuevo a su formato original utilizando `JSON.parse()` cuando recupere los datos. Además, `localStorage` tiene límites de almacenamiento que varían según el navegador y el dispositivo del usuario, por lo que es importante tener en cuenta las limitaciones de almacenamiento al utilizar esta función.

### 19. Guardando records del jugador

#### Código de la clase
```js
/**
 * @type {HTMLCanvasElement}
**/

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');
const spanRecord = document.querySelector('#record');
const pResult = document.querySelector('#result');

let canvasSize;
let elementsSize; //10%
let level = 0;
let lives = 3;
let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[level];

    if(!map){
        console.log();
        gameWin();
        return;
    }
    if(!timeStart){
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100);

        showRecord(); // mostrar record
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    showLives();
    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function levelFail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
        timeStart = undefined;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
    clearInterval(timeInterval);

    const recordTime = localStorage.getItem('record_time');
    const playerTime = Date.now() - timeStart;
    
    if(recordTime){
        if(recordTime >= playerTime){ //menor
            localStorage.setItem('record_time', playerTime);
            pResult.innerHTML = 'Superaste el record'
        }else{
            pResult.innerHTML = 'Lo siento, no superaste el record'
        }
    }else{
        localStorage.setItem('record_time', playerTime);
        pResult.innerHTML = 'Primera vez en el juego, trata de supera tu tiempo'
    }
    console.log({recordTime, playerTime});
}

function showLives(){   
    // Array de 3 espacios que llenamos con 3 corazones
    const heartsArray = Array(lives).fill(emojis['HEART']) // [1,2,3]
    
    spanLives.innerHTML = ''; // limpiamos corazones
    heartsArray.forEach(heart => spanLives.append(heart)); // adjuntar
}

function showTime(){
    spanTime.innerText = Date.now() - timeStart;
}
function showRecord(){
    spanRecord.innerText = localStorage.getItem('record_time');
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }
}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
}
```

#### Practice:
```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 
// 9. Mostrar vidas en pantalla
// 10. Agregar un temporizador 
// 11. Guardar record en el navegador
//  11.1 game_win

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const span_lives = document.querySelector('#lives')
const span_time = document.querySelector('#time');
const span_record = document.querySelector('#record');
const p_result = document.querySelector('#result')

let canvas_size;
let elements_size;
let level = 0;
let lives = 3;
let start_time;
let time_interval; // intervals

const player_position = {
    x: undefined,
    y: undefined,
};
const gift_position = {
    x: undefined,
    y: undefined,
}

let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth 
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    render_map();
}

function render_map(){
    // Calculate elements size
    elements_size = Math.ceil((canvas_size * 0.1)-1);
    game.font = `${elements_size}px Verdana`;

    const map_number = maps[level];
    if(!map_number){
        game_win();
        return
    }

    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));

    bomb_position = [];
    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);

            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                });
            }

            game.fillText(emoji, x, y);
        });
    });
    render_player();
    show_lives();
}

function render_player(){
    const gift_collision_x = gift_position.x == player_position.x;
    const gift_collision_y = gift_position.y == player_position.y;
    const gift_collision = gift_collision_x && gift_collision_y;

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    });

    if(gift_collision){
        level_win();
    }
    if(bomb_collision){
        life_counter();
        console.log('You collided with a bomb...');

    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
}
function life_counter(){
    lives--;
    
    if(lives == 0){
        level = 0;
        lives = 3;

        start_time = undefined;
    }

    player_position.x = undefined;
    player_position.y = undefined;
    calculate_canvas_size();
}
function game_win(){
    player_position.x = undefined;
    player_position.y = undefined;
    game.fillText('You Win', canvas_size*0.3, canvas_size*0.5)
    clearInterval(time_interval);

    const record_time = localStorage.getItem('new_record_time');
    const player_time = Date.now() - start_time;

    if(record_time){
        if(record_time > player_time){
            localStorage.setItem('new_record_time', player_time);
            p_result.innerText = 'You beat the record' //rompiste el record
        }else{
            p_result.innerText = "Sorry, you don't beat the record" //rompiste el record
        }
    }else{
        localStorage.setItem('new_record_time', player_time);
        p_result.innerText = "New to the game, huh! Try to beat your time..."
    }
}
function show_lives(){
    span_lives.innerText = emojis['HEART'].repeat(lives);
    // const hearts_array = Array(lives).fill(emojis['HEART']);

    // span_lives.innerText = '';
    // hearts_array.forEach(heart => span_lives.append(heart));
}
function calculate_time(){
    if(!start_time){
        start_time = Date.now();
        time_interval = setInterval(show_time, 100);

        // Va funcion show_record();
        show_record();
    }
}
function show_time(){
    span_time.innerText = Date.now() - start_time;
}
function show_record(){
    span_record.innerText = localStorage.getItem('new_record_time');
}

function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();

    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();

    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
    
    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
    
    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
// registro de la consola
```

```js
localStorage.clear()
```

## Deploy 
### 20. Depurando errores del juego

#### Código de la clase
```js
```

#### Practice:
```js
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 
// 9. Mostrar vidas en pantalla
// 10. Agregar un temporizador 
// 11. Guardar record en el navegador
//  11.1 game_win

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const span_lives = document.querySelector('#lives');
const span_time = document.querySelector('#time');
const span_record = document.querySelector('#record');
const p_result = document.querySelector('#result');

let canvas_size;
let elements_size;
let level = 0;
let lives = 3;
let start_time;
let interval_time;

const player_position = {
    x: undefined,
    y: undefined,
};
const gift_position = {
    x: undefined,
    y: undefined,
}

let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    render_mapa();
}

function render_mapa(){
    elements_size = Math.ceil((canvas_size * 0.1)-1);
    game.font = `${elements_size}px Verdana`

    const map_number = maps[level];
    if(!map_number){
        game_win();
        return;
    }

    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));

    bomb_position = [];
    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            
            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                })
            }


            game.fillText(emoji, x, y);
        });
    });
    render_player();
    show_lives();
    show_record();
}

function render_player(){
    const gift_collision_x = gift_position.x == player_position.x;
    const gift_collision_y = gift_position.y == player_position.y; 
    const gift_collision = gift_collision_x && gift_collision_y;

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    })

    if(gift_collision){
        level_win();
        console.log('Your passed to the next level');
    }
    if(bomb_collision){
        level_fail();
        console.log('You collided with a bomb!!');
    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
}
function level_fail(){
    lives--;
    if(lives == 0){
        level = 0;
        lives = 3;
    }

    player_position.x = undefined;
    player_position.y = undefined;
    calculate_canvas_size();
}
function game_win(){
    clearInterval(interval_time);

    player_position.x = undefined;
    player_position.y = undefined;
    game.fillText('You Win 🏆', canvas_size*0.25, canvas_size*0.5);

    // Tiempo anterior vs el nuevo tiempo del jugador
    const last_record = localStorage.getItem('record_time');
    const new_player_time = Date.now() - start_time;

    if(last_record){
        // Si el record anterior es mas alto, reemplazalo por el nuevo
        if(last_record > new_player_time){
            localStorage.setItem('record_time', new_player_time);
            // Rompiste el record
            p_result.innerText = "You beat the record 😌";
        }else{
            p_result.innerText = "Sorry, you don't beat the record"
        }
    }else{
        localStorage.setItem('record_time', new_player_time);
        p_result.innerText = "New to the game, huh! Try to beat your time..."
    }
}
function show_lives(){
    span_lives.innerText = emojis['HEART'].repeat(lives);
    // Otra forma de mostrar los hearts: 
    // const hearts_array = Array(lives).fill(emojis['HEART']);

    // span_lives.innerText = '';
    // hearts_array.forEach(heart => span_lives.append(heart));
}
function calculate_time(){
    if(!start_time){
        start_time = Date.now();
        interval_time = setInterval(show_time, 100);
    }
}
function show_time(){
    span_time.innerText = Date.now() - start_time;
}
function show_record(){
    span_record.innerText = localStorage.getItem('record_time');
}


function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();

    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
}
// registro de la consola
```

#### Otros repos
- [Tommy Toala Cox](https://estrelladlm.github.io/game-with-js/)
- [Paula Inés Cudicio](https://paulaxam.github.io/taller-practico-js-videojuego/)
- [Johan Arena](https://johandev115.github.io/KittyRun/)
- [Alessandro Vido](https://vidoalessandro.github.io/10-Learning-NASA-vs-UFOS-Game/)

### 21. Desplegando el juego a GitHub Pages

[Mi repo](https://aleroses.github.io/videogame/) 

### 22. Reto: reinicio del juego 

`location.reload()`

Botón para reiniciar el juego:

```html
<p><button id="reset_button">Reiniciar Juego</button></p>
```

JAVASCRIPT:  
Accedo al botón y le añado que en el evento de clic ejecute una función resetGame()

```js
const reset_button = document.querySelector('#reset_button');

reset_button.addEventListener('click', resetGame);
```

Escribo la función que reinicia el juego

```js
function resetGame() {
    location.reload();
}
```

### 23. Reto: timeouts de victoria o derrota

```js
```

## Examen 📌

<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. Tienes el siguiente bloque de código:    
	`game.fillText('Examen', 25, 25)	`

	Necesitas darle un tamaño de fuente de 40px, asignarle la fuente Helvética y darle color azul. ¿Cómo lo harías?    
	-  📌`game.font = "40px Helvetica"; game.fillStyle = "blue"; game.fillText('Examen', 25, 25);`

2. ¿Qué método de los arrays podemos usar para separar un string por cada vez que nos encontremos un salto de línea?

	- 📌`string.split("\n")`

3. ¿Cómo podemos leer el ancho de nuestro HTML (sin contar el inspector de elementos ni el tamaño total de la ventana del navegador, SOLO el HTML)?

	- 📌 window.innerWidth

4. Los ciclos anidados nos ayudan a recorrer arrays multidimensionales.

	- 📌Verdadero

5. ¿Qué son los arrays multidimensionales?

	- 📌Arrays que por dentro tienen arrays (y estos a su vez por dentro puede que tengan más arrays… y así por cada nivel).

6. Tienes una función que define el ancho y alto que necesita nuestro canvas para ser un cuadrado perfecto y tener un tamaño saludable con respecto al tamaño de nuestro HTML. Pero al hacer resize (e.j. al abrir el inspector de elementos o rotar nuestro teléfono) ese tamaño deja de funcionar.

	¿Cómo podemos hacer el cálculo del tamaño de nuestro canvas, cada vez que cambie el tamaño de nuestro navegador?
	
	- 📌 Escuchando el evento resize de window.

7. Analiza los siguientes requerimientos:
	-   Tienes una variable size con el tamaño que deben tener los elementos del canvas.
	-   Quieres renderizar 10 elementos.
	-   Todos deben estar uno al lado del otro (es decir, alineados de forma horizontal) y en la parte superior del canvas.
	¿Cuál bloque de código elegirías para cumplir estos requerimientos?  
	
	```js
	game.textAlign = “end”;
	for (let i = 1; i menor 11; i++) {
	game.fillText(‘X’, size * i, size);
	}
	```   

8. ¿Qué método de los strings nos permite limpiar los espacios vacíos al inicio y final de un texto?

	- 📌string.trim()

9. Todo el contenido de nuestro canvas se borra cuando cambiamos sus propiedades width o height.

	- 📌Verdadero

10. Tienes el siguiente bloque de código:    
	`game.fillText('Examen', 50, 50) `    
	De esta forma tu texto se está acomodando 50px a la izquierda y 50px hacia abajo.

	Pero necesitas que tu texto **termine** en esas coordenadas.  
	¿Cómo lo harías?

	- 📌`game.textAlign = "end"; game.fillText('Examen', 50, 50);`

11. Quieres dibujar un cuadrado de 100px ubicado a 200px de la esquina superior y a 50px de la esquina de la izquierda. ¿Cómo lo harías?

	- 📌 `game.fillRect(50, 200, 100, 100)`
  
12. Tienes 2 archivos: maps.js y game.js. Desde game.js necesitas acceder a variables creadas desde maps.js. ¿Cómo lo harías?

	- 📌Creando 2 scripts desde mi HTML y asegurándose de que maps.js se ubique ANTES que game.js.

13. Necesitas un canvas cuadrado (que el ancho y alto sean exactamente iguales) y responsive (que no tenga medidas fijas, sino medidas relativas).

	¿Esto es posible con estilos de CSS?    

	- 📌 No es posible.

14. Ya creaste tu selector desde JavaScript para la etiqueta canvas, pero todavía no funcionan métodos como fillText y fillRect para dibujar.

	```js
	const canvas = document.querySelector('canvas') 
	canvas.fillRect(0,50,100,100)
	```

	¿Qué nos hace falta?

	- 📌Hace falta crear el contexto 2D. Para eso creamos una variable (e.j. game) llamando al método getContext con el argumento 2d. Y desde esa variable ahora sí podemos ejecutar los métodos para dibujar sobre canvas.

15. Cuando trabajamos con contextos 2D en canvas tenemos un eje X y otro eje Y. ¿Cuál de estos ejes nos permite movernos verticalmente?

	- 📌Eje Y

</details>

