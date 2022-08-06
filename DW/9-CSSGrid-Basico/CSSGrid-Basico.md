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
- [Documentación CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)


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
- Imágenes
- Videos

> ![Container - Item](https://i.postimg.cc/Nj7CRmxW/2-container-item.jpg)

### Líneas:
Son los elementos que dividen las filas y columnas de una grilla.

> ![Líneas](https://i.postimg.cc/XvjHLqHX/2-line.jpg)

### Celdas:
Es la unidad mínima que tenemos en una Grilla, está delimitada por 4 líneas. Ocupa 1 columna y 1 fila.

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

**Ejemplo:**  
`display: grid;`  
Convierte contenedor en grilla.

`grid-template-columns: 100px 200px 300px;`  
Crea columnas y les da ancho, en este caso se crean 3 columnas.

`grid-template-rows: 150px 250px;`  
Cambiar altura de fila, la primera es de 150px y la segunda de 250px. 

`grid-auto-rows: 150px;`  
Define altura de todas las filas.

`grid-auto-columns: 100px;`  
Crea todas las columnas de 100px.

`grid-auto-flow: column;`  
Modifica el orden de llenado de la grilla. 

`row-gap: 15px;`  
Brecha entre filas. Este espacio se crea en los espacios internos del contenedor.

`column-gap: 30px;`  
Brecha entre columnas.

`gap: 40px;`  
Da el mismo espacio entre filas y columnas.  


**Código Emmet para generar el contenedor e items:** 
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

**Ejemplo:**  
`justify-content: center;`  
Centra todo el contenido de la grilla de manera horizontal.

`align-content: center;`  
Centra el contenido de la grilla de manera vertical.

`place-content: center;`  
Centra todo el contenido tanto de manera horizontal como vertical. Es lo mismo que aplicar justify-content: center y align-content: center al mismo tiempo.

`justify-items: end;`  
Envía todo al final de cada celda (a la derecha).

`align-items: start;`  
Envía todo al inicio (parte superior)

`justify-self: start;`  
Envía solo un elemento al inicio (izquierda).

`align-self: end;`  
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

**Ejemplo:**  
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
    - 2 fila inicio / 2 columna inicio / 4 fila final de la grilla / 4 columna final

`grid-template-areas:`   
> `"header header header"`  
    `"side main main"`  
    `"side main main";`  

Especifica áreas de cuadrícula con nombre , estableciendo las celdas en la cuadrícula y asignándoles nombres. Se aplica de la siguiente manera:  
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


---
## 6. Funciones especiales

- minmax
- repeat

**Ejemplo:**  
`grid-template-columns: minmax(30px, 300px) 200px minmax(60px, 250px);`  
Define un rango de tamaño mínimo o máximo.

`grid-template-rows: repeat(3, auto);`  
Permite escribir una gran cantidad de columnas o filas que exhiben un patrón recurrente en una forma más compacta.


---
## 7. Keywords especiales

-  fr
- min-content
- max-content
- auto-fill/auto-fit

**Ejemplo:**  
`grid-template-columns: repeat(4, 1fr);`  
`grid-template-columns: 1fr 3fr 1fr 2fr;`  
Fracción es una nueva unidad de medida especial de css grid para darle ancho o alto a filas y columnas.  
1fr representa una fracción del total de columnas o filas.

`grid-template-columns: 1fr 3fr min-content 2fr;`  
Ajusta el ancho de la celda (columna) lo mínimo posible sin romper su contenido.

`grid-template-columns: 1fr 3fr max-content 2fr;`  
Ajusta el ancho de la celda lo máximo posible para mostrar su contenido.


`min-content` hará que nuestro contenido haga salto de línea en cada oportunidad que tenga, siendo tan ancho como la palabra mas larga. `max-content` no tendrá salto de línea, ocupando todo el ancho que pueda, incluso causando overflow.

`grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));`  
Fill (llenas) agrega columnas “fantasma” que rellenan el espacio sobrante del contenedor.

`grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));`  
Fit (adaptar) ensancha las columnas para que ocupen todo el espacio del contenedor.

`auto-fill y auto-fit` ayudan a la grilla a ocupar el 100% del espacio disponible.
> ![Auto fill - Auto fit](https://i.postimg.cc/fRPRMfvx/7-auto-fit-fill.png)
[Mas info](https://ishadeed.com/article/css-grid-minmax/)

---
## 8. Proyecto

> ![Proyecto](https://i.postimg.cc/Nfg5xwkF/8-reto.png)

```
----------- SOLUCIÓN PREVIA ---------------
HTML
<body>
    <header>
        <section class="header__container">
            <h1 class="header__title">Check The Best Food</h1>
            <p class="header__description">Lorem ipsum dolor sit amet adipisicing elit. Cupiditate itaque necessitatibus minima qui temporibus quas.</p>
            <button><a href="#">See more details</a></button>
        </section>
        <section class="header__img">
            
        </section>
    </header>
    <main class="main__container">
        <section class="main__title">
            <h2>OUR SERVICES</h2>
        </section>
        <section class="main__img1"></section>
        <section class="main__img2"></section>
        <section class="main__img3"></section>
        <section class="main__img4"></section>
        <section class="main__img5"></section>
    </main>
    <footer class="footer__container">
        <section class="footer__title">
            <h2>Home Menu</h2>
        </section>
        <section class="footer__img1"></section>
        <section class="footer__img2"></section>
        <section class="footer__img3"></section>
        <section class="footer__img4"></section>
        <section class="footer__img5"></section>
    </footer>
</body>
</html>

----

CSS
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

header {
    display: grid;
    grid-template-columns: repeat(2, 160px);
    grid-template-rows: repeat(1, 160px);
    place-content: center;
    place-items: center;

    margin: 20px;
}

header .header__container .header__title {
    margin-bottom: 10px;
    font-size: 2.2rem;

    color: darkslateblue;
}

header .header__container .header__description {
    margin-bottom: 10px;
    font-size: 1.1rem;
}

header .header__container button {
    width: 80px;
    height: 35px;

    background-color: orangered;
    border-radius: 15px;
}

.header__container button a {
    text-decoration: none;
    color: darkslateblue;
}

header .header__img {
    width: 160px;
    height: 160px;
    background-image: url('https://i.postimg.cc/QCrLX0Cn/8-hero.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

main {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(3, 80px);

    place-content: center;
    margin-bottom: 20px;

    gap: 10px;
}

.main__container .main__title {
    grid-column-start: 1;
    grid-column-end: 5;
    place-self: center;

    height: 20px;
}

.main__container .main__img1 {
    grid-area: 2 / 1 / 4 / 3;
    width: 160px;
    height: 170px;
    background-image: url('https://i.postimg.cc/7Pg8B8Qv/8-video.png');
    background-position: start;
    background-repeat: no-repeat;
    background-size: contain;

    justify-content: flex-start;
}

.main__container .main__img2 {
    width: 80px;
    height: 80px;
    background-image: url('https://i.postimg.cc/Gm3C87QW/8-dish1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.main__container .main__img3 {
    width: 80px;
    height: 80px;
    background-image: url('https://i.postimg.cc/nhdtv4SC/8-dish2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.main__container .main__img4 {
    width: 80px;
    height: 80px;
    background-image: url('https://i.postimg.cc/DyTFFyby/8-dish3.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.main__container .main__img5 {
    width: 80px;
    height: 80px;
    background-image: url('https://i.postimg.cc/QxJDMGpg/8-dish4.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

footer {
    display: grid;
    grid-template-columns: repeat(5, 64px);
    grid-template-rows: repeat(2, 53px);

    place-content: center;
    place-items: center;
    margin-bottom: 20px;
}

footer .footer__title {
    grid-column-start: 1;
    grid-column-end: 6;
}

footer .footer__img1 {
    width: 64px;
    height: 54px;
    background-image: url('https://i.postimg.cc/vTRy4Gqh/8-plate1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

footer .footer__img2 {
    width: 64px;
    height: 53px;
    background-image: url('https://i.postimg.cc/rsSkW77k/8-plate2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

footer .footer__img3 {
    width: 64px;
    height: 53px;
    background-image: url('https://i.postimg.cc/3rp7PDNc/8-plate3.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

footer .footer__img4 {
    width: 64px;
    height: 53px;
    background-image: url('https://i.postimg.cc/N05vbKZb/8-plate4.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

footer .footer__img5 {
    width: 64px;
    height: 53px;
    background-image: url('https://i.postimg.cc/xdhDZ02Q/8-plate5.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

```
### Resultado Mobile First
> ![Resultado](https://i.postimg.cc/T2L0xbZn/8-reto-solucion-previa.jpg)


---
## 9. Hagamos nuestra primera sección

> ![Header](https://i.postimg.cc/dQ2TfB31/9-header.jpg)  

[Extensión ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=es)

```
------------- Header ---------------
HTML
<body>
    <main>
        <section class="hero">
            <div class="info">
                <h1>Check The<br>Best Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Book a table</button>
            </div>
            <img class="hero-image" src="https://i.postimg.cc/QCrLX0Cn/8-hero.png" alt="Imagen Hero de un plato de pasta con salsa y vegetales.">
        </section>
    </main>
</body>

----

CSS
* {
    font-family: 'Roboto', sans-serif;
}

main {
    max-width: 1200px;
    margin: 0 auto;
}

.hero {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-auto-rows: 400px;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.info {
    align-self: center;
}

```


---
## 10. Creando la grilla con área

> ![Main](https://i.postimg.cc/x1CJcVRJ/10-main.jpg)  

```
------------- MAIN ---------------
HTML
<body>
    <main>
        <section class="dishes">
            <h2 class="dishes-title">OUR SERVICE</h2>
            <div class="dishes-grid">
            </div>
        </section>
        <section class="dishes">
            <h2 class="dishes-title">OUR SERVICE</h2>
            <div class="dishes-grid">
                <img class="dishes-item dishes-item__big" src="https://i.postimg.cc/7Pg8B8Qv/8-video.png" alt="Una mesa con platos de pasta">
                <img class="dishes-item" src="https://i.postimg.cc/Gm3C87QW/8-dish1.png" alt="Bowl de vegetales">
                <img class="dishes-item" src="https://i.postimg.cc/nhdtv4SC/8-dish2.png" alt="Bowl de vegetales">
                <img class="dishes-item" src="https://i.postimg.cc/DyTFFyby/8-dish3.png" alt="Bowl de vegetales">
                <img class="dishes-item" src="https://i.postimg.cc/QxJDMGpg/8-dish4.png" alt="Bowl de vegetales">
            </div>
        </section>
    </main>
</body>

----

CSS
.dishes {
    margin: 100px 0;
}

.dishes-title {
    color: #333;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
    font-size: 2rem;
}

.dishes-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(150px, 200px));
    grid-auto-rows: 1fr;
    gap: 25px;
    justify-content: center;
}

.dishes-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.dishes-item__big {
    grid-area: 1 / 1 / 3 / 3;
}

```


---
## 11. Armando el listado

> ![Footer](https://i.postimg.cc/m2TFWH1S/11-footer.jpg)  

```
------------- FOOTER ---------------
HTML
<body>
    <main>
        <section class="dishes">
            <h2 class="dishes-title">OUR SERVICE</h2>
            <div class="dishes-grid">
            </div>
        </section>
        <section class="dishes">
            <h2 class="dishes-title">OUR SERVICE</h2>
            <div class="dishes-grid">
            </div>
        </section>
        <section class="menu">
            <h2 class="menu-title">Home menu</h2>
            <div class="menu-grid">
                <div class="menu-grid-item">                    
                    <img src="https://i.postimg.cc/vTRy4Gqh/8-plate1.png" alt="Plato de pasta con salsa">
                </div>
                <div class="menu-grid-item">
                    <img src="https://i.postimg.cc/rsSkW77k/8-plate2.png" alt="Plato de pasta con salsa">
                </div>
                <div class="menu-grid-item">
                    <img src="https://i.postimg.cc/3rp7PDNc/8-plate3.png" alt="Plato de pasta con salsa">
                </div>
                <div class="menu-grid-item">
                    <img src="https://i.postimg.cc/N05vbKZb/8-plate4.png" alt="Plato de pasta con salsa">
                </div>

                <div class="menu-grid-item">
                    <img src="https://i.postimg.cc/xdhDZ02Q/8-plate5.png" alt="Plato de pasta con salsa">
                </div>
            </div>
        </section>
    </main>
</body>

----

CSS
.menu {
    margin-bottom: 200px;
}


.menu-title {
    font-size: 2rem;
    color: #333;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 50px;
}

.menu-grid {
    display: grid;
    gap: 25px;
    justify-content: center;
    grid-template-columns: repeat(5, minmax(100px, 250px));
}

.menu-grid-item {
    background-color: #dd5228;
    padding: 15px;
    border-radius: 40px 0 0 0;
}

.menu-grid-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

```


---
## 12. ¿Cómo hacer nuestro proyecto responsivo?

> Nota: En este curso el proyecto fue hecho primero en modalidad Desktop para luego pasarlo a Mobile. Esto no es lo mas optimo, por lo que dejo en mi GitHub el código de las tres modalidades mas comunes (Mobile, Tablet y Desktop).

> ![Responsive Designe](https://i.postimg.cc/sDp2H00H/12-responsive-design.jpg)


---
## 13. Más cursos de CSS Grid

- [Curso Profesional de CSS Grid Layout](https://platzi.com/cursos/css-grid-layout/)
- [Curso Práctico de Maquetación en CSS](https://platzi.com/cursos/practico-css/)
- [Curso de Animaciones con CSS](https://platzi.com/cursos/animaciones-css/)
- [Curso Práctico de Maquetación y Animaciones con CSS](https://platzi.com/cursos/animaciones-css-practico/)
