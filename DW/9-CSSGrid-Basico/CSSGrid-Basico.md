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
- display: grid; Convierte contenedor en grilla.
- grid-template-columns: 100px 200px 300px; Crea columnas y les da ancho, en este caso se crean 3 columnas.
- grid-template-rows: 150px 250px; Cambiar altura de fila, la primera es de 150px y la segunda de 250px. 
- grid-auto-rows: 150px; Define altura de todas las filas.
- grid-auto-flow: column; Modifica el orden de llenado de la grilla. 
- grid-template-row: 100px 200px;
- grid-auto-columns: 100px; Crea todas las columnas de 100px
- row-gap: 15px; Brecha entre filas. Este espacio se crea en los espacios internos del contenedor.
- column-gap: 30px; Brecha entre columnas.
- gap: 40px; Da el mismo espacio entre filas y columnas. 



Código Emmet para generar el contenedor y items:

> `div.contenedor>(div.item{$}*6)`


[Flexbox Froggy](https://flexboxfroggy.com/#es)


### Reto
Crear un grid de 3 filas y 2 columnas con un gap de 20px entre ellas.
Los números de ítems deben coincidir con la imagen.

> ![Challenge](https://i.postimg.cc/vBTyxdcj/3-challenge.jpg)
