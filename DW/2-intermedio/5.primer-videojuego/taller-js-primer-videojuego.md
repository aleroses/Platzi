# Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!  

## 1. Programemos un juego con JavaScript

- Crear repositorio en GitHub: Videogame 
	- Template: node
	- License: MIT License 
	- Clonar proyecto 

- Crear archivos:  
	- index.html: Copiar estructura de repositorio del curso
	- styles.css: Lo mismo 
	- maps.js: Igualmente 
	- game.js


[Repo del juego](https://github.com/platzi/taller-practico-javascript-videogames)

## 2. ¿Qué es canvas en JavaScript?

Lo primero que necesitamos es el elemento de HTML donde vamos a renderizar el canvas, canvas nos sirve para renderizar gráficos 2D.

Como condición tenemos que crear un contexto que es donde le decimos a canvas que queremos renderizar gráficos en 2d:  

```jsx
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
game.fillText('setso', 100,100);
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

### Dato
Para los que no les sale el auto completado de los métodos del canvas, les comparto un consejo para no cometer errores de tipados con frecuencia.

```js
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("#game");
```

Lo que hace es decir que nuestra constante “canvas” es de tipo HTMLCanvasElement, lo que nos mostrara los métodos en VSCode.

### Código de la clase 

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

### Enlaces  
- [Canva apuntes](https://north-legal-02b.notion.site/Canvas-78616c26a864480d8bf3385076dad547)
- [Documentación](https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)  