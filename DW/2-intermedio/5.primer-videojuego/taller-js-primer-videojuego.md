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
Para transformar el string de los mapas en un arreglo bidimensional, también puedes usar expresiones regulares y un match

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

### 8. Eventos y botones

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

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```

```js
```