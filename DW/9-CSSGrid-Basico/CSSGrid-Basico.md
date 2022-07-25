![laughing](https://media.giphy.com/media/xT5LMNlcNG9grxUrFS/giphy.gif)
# Curso de CSS Grid Básico
> Estefany Salas - Product Manager y Teacher in-house de Platzi

## 1. ¿Qué es CSS Grid Layout?

Es una especificación de CSS que nació por la necesidad de hacer layouts mucho más dinámicos.

CSS Grid introdujo un sistema de grilla que es una cuadricula. Lo que hacemos es usar los ejes y espacios para ubicar elementos, entonces podemos jugar mucho mas con las posiciones, el tamaño que ocupan y como se alinean.

> ![grid](https://i.postimg.cc/SKSGm48c/1-grid-layout.jpg)

**Ejemplo:** En el siguiente layout tenemos en la parte superior un header, en la parte inferior un footer, el menu section y el main content. Esto es algo que podemos crear con CSS Grid. Cada uno de esos bloques es un elementos de nuestra grilla, los que estamos ubicando según la posición que queramos.
> ![grid](https://i.postimg.cc/jSQXV2Ws/1-grid-layout1.jpg)



- [Slides del curso](https://static.platzi.com/media/public/uploads/00_2109_clase1_slides_css_grid_basico_ffba1bad-877f-4a88-bc26-6d9f725fcb2b.pdf)


Aportes de compañeros:
> - [Notion - Apuntes](https://plaid-silver-f03.notion.site/Curso-de-CSS-Grid-B-sico-9510f9f38dbc48709b504d74aec48ef3)
> - [Comentario - Resumen](https://platzi.com/tutoriales/1229-css-grid-layout/6653-todo-lo-que-necesitas-saber-de-css-grid/)
> - [Web - Desafíos del curso](https://jeffuy.github.io/CSSGrid/) 
> - [GitHub - Repositorio del curso](https://github.com/Jeffuy/CSSGrid)
> - [GitHub - Proyecto Final](https://jeffuy.github.io/jurassic-park-landing/)
> - [GitHub - Repositorio del proyecto final](https://github.com/Jeffuy/jurassic-park-landing)


---
## 2. Conceptos para comenzar

### Container:
Es un contenedor donde se almacenan los elementos y es el elemento que se va a convertir en una grilla.

### Item:
Son los elementos que están dentro del contenedor y se convierten en Grid Items, eso quiere decir que por defecto van a tener propiedades que ayudan a trabajar con sistemas de grillas. 
Pueden ser:
- Botones
- Links
- Imagenes
- Videos

> ![Container - Item](https://i.postimg.cc/Nj7CRmxW/2-container-item.jpg)

### Lineas:
Son los elementos que dividen las filas y columnas de una grilla.

> ![Lineas](https://i.postimg.cc/XvjHLqHX/2-line.jpg)

### Celdas:
Es la unidad mínima que tenemos en una Grilla, está delimitada por 4 lineas. Ocupa 1 columna y 1 fila.

> ![Celdas](https://i.postimg.cc/4xTFKBp6/2-celda.jpg)

- Track: Los track son un grupo de celdas que están en una misma fila o una misma columna.

- Area: Pueden usar varias filas o varias columnas al mismo tiempo.

> ![Track - Área](https://i.postimg.cc/9fLxn2Kb/2-track-area.jpg)

Termino usados en Grid:
- Línea / row
- Columna / column


---
## 3. Propiedades del contenedor

- Display grid
- Grid-template
- Gaps
- Grid-auto

CSS:
- **display: grid;**  
Convierte contenedor en grilla.

- **grid-template-columns: 100px 200px 300px;**  
Crea columnas y les da ancho, en este caso se crean 3 columnas.

- **grid-template-rows: 150px 250px;**  
Cambiar altura de fila, la primera es de 150px y la segunda de 250px. 

- **grid-auto-rows: 150px;**  
Define altura de todas las filas.

- **grid-auto-columns: 100px;**  
Crea todas las columnas de 100px.

- **grid-auto-flow: column;**  
Modifica el orden de llenado de la grilla. 

- **row-gap: 15px;**  
Brecha entre filas. Este espacio se crea en los espacios internos del contenedor.

- **column-gap: 30px;**  
Brecha entre columnas.

- **gap: 40px;**  
Da el mismo espacio entre filas y columnas. 



Código Emmet para generar el contenedor e items:

> `div.contenedor>(div.item{$}*6)`


[Flexbox Froggy](https://flexboxfroggy.com/#es)  
[Grid Garden](https://cssgridgarden.com/#es)


### Reto
Crear un grid de 3 filas y 2 columnas con un gap de 20px entre ellas.
Los números de ítems deben coincidir con la imagen.

> ![Challenge One](https://i.postimg.cc/vBTyxdcj/3-challenge.jpg)


```
------------ RETO 01 -------------
HTML
<body>
    <div class="contenedor">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
</body>

--------------------------------

CSS
.contenedor {
    display: grid;
    grid-template-columns: 150px 150px;
    grid-template-rows: 150px 150px 150px;
    grid-auto-flow: column;
    gap: 20px;

    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}

.item {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    border: 5px solid #00bcd4;
    font-size: 4rem;
} 
```
> [CodePen Reto01](https://codepen.io/Meowth01/pen/GRxvqgd)


---
## 4. Propiedades de alineación 

### Propiedades de alineación de los ítems

- Justify-items
- Align-items
- Place-items

### Propiedades de alineación del contenedor

- Justify-content
- Align-content
- Place-content

### Propiedades de alineación del ítem

- Justify-self
- Align-self
- Place-self

CSS:
- **justify-content: center;**  
Centra todo el contenido de la grilla de manera horizontal.

- **align-content: center;**  
Centra el contenido de la grilla de manera vertical.

- **place-content: center;**  
Centra todo el contenido tanto de manera horizontal como vertical. Es lo mismo que aplicar justify-content: center y align-content: center al mismo tiempo.

- **justify-items: end;**  
Envia todo al final de cada celda (a la derecha).

- **align-items: start;**  
Envía todo al inicio (parte superior)

- **justify-self: start;**  
Envía solo un elemento al inicio (izquierda).

- **align-self: end;**  
Envía solo un elemento al final (parte inferior)

### Reto

Crear un grid de 2x2 donde los ítems se ubiquen en la esquina inferior derecha del contenedor, el contenedor debe estar centrado.

> ![Challenge Two](https://i.postimg.cc/NfNLhdft/4-challenge-two.jpg)

```
---------------- RETO 02 ----------------
HTML
<body>
    <div class="contenedor">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
    </div>
</body>

----------------------------------------
CSS
.contenedor {
    display: grid;
    gap: 15px;
    grid-template-columns: 150px 150px;
    grid-auto-rows: 150px;
    height: 600px;

    place-content: center;
    place-items: end;

    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}

.item {   
    width: 40px;
    height: 70px;

    border: 5px solid #00bcd4;
    font-size: 4rem;
    background-color: #00bcd4;
}
```
> [CodePen Reto02](https://codepen.io/Meowth01/pen/KKovNQr)


---
## 5. Propiedades de ubicación

grid-column
- grid-column-start
- grid-column-end

grid-row
- grid-row-start
- grid-row-end

grid-area

grid-template-areas

CSS:

`grid-column: 1 / 3;`  
Especifica el inicio y fin de un elemento de cuadrícula dentro de una columna.

`grid-column-start: 1;`  
Especifica la posición de inicio de un elemento de la cuadrícula dentro de la columna.

`grid-column-end: 4;`  
Especifica la posición final de un elemento de la cuadrícula dentro de la columna.


`grid-row: 1 / 3;`  
Especifica el inicio y fin de un elemento de la cuadrícula dentro de la fila.

`grid-row-start: 3;`  
Especifica la posición inicial de un elemento de la cuadrícula dentro de la fila.

`grid-row-end: 3;`  
Especifica la posición final de un elemento de la cuadrícula dentro de la fila.

`grid-area: 2 / 2 / 4 / 4;`  
Especifica los bordes de su área de cuadrícula .
    - 2 fila inicio / 2 columna inicio / 4 final de la grilla / 4 igual

`grid-template-areas:`   
> `"header header header"`  
    `"side main main"`  
    `"side main main";`  

Especifica áreas de cuadrícula con nombre , estableciendo las celdas en la cuadrícula y asignándoles nombres. Se llama de la siguiente manera:  
    ```
    .item-1 {
        grid-area: header;
    }
    ```




### Reto

Arma la grilla de la imagen.

> ![Challenge Three](https://i.postimg.cc/QNm9JB8y/5-challenge-three.jpg)

```
--------------- RETO 03 ----------------
HTML
<body>
    <div class="contenedor">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
    </div>
</body>

----------------------------------------
CSS
.contenedor {
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-auto-rows: 150px;
    height: 600px;

    place-content: center;

    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}

.item {
    text-align: center;
    font-size: 4rem;
    border: 5px solid #00bcd4;
    background-color: #00bcd4;
}

.item-1 {
    background-color:darkslateblue;
}

.item-2 {
    grid-column-start: 2;
    grid-column-end: 4;
    background-color: #e1bee7;
}

.item-3 {
    grid-column-start: 1;
    grid-column-end: 3;

    background-color: hotpink;
}

.item-4 {
    background-color: darkslateblue;
}

.item-5 {
    background-color: darkslateblue;
}

.item-6 {
    background-color: #e1bee7;
}

.item-7 {
    background-color: hotpink;
} 
```
> [CodePen Reto03](https://codepen.io/Meowth01/pen/NWYvMZg)