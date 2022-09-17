# Curso de Transformaciones y Transiciones en CSS
> **Estefany Aguilar** - [Desarrolladora Frontend en La Haus](https://platzi.com/profesores/teffcode/)      
**@teffcode** en Twitter - GitHub - Instagram

[Link del Curso](https://platzi.com/cursos/transformaciones-transiciones-css/)

## 1. 5 razones para usar animaciones en la web

En este curso implementaremos algo muy divertido para aprender al hablar de una película muy famosa, donde la protagonista se pregunta el por qué de varias cosas.

Justamente ese es nuestro punto de partida **¿Por qué hacer animaciones?**

-   Tienen beneficios para el cerebro
-   Comunican
-   Conectan los contextos
-   Generan una coreografía de UI
-   Llaman la atención

1. Las animaciones tienen beneficios para el cerebro    
	Las animaciones **permiten reducir el esfuerzo que hace el usuario** al entrar a una página web con varios elementos, por consiguiente, **elevamos la atención en lo más importante**.


 2. Las animaciones comunican    
	Las animaciones sirven para **elaborar un hilo conductor** que esté asociado a la vida real, caso contrario, puede generar confusión o frustración.

3. Las animaciones conectan los contextos    
	Las animaciones **relacionan las características únicas de cualquier aplicación, independiente de la plataforma** en la que se usa o el lenguaje que fue construido.

	En conjunto con las imágenes y la tipografía, las animaciones son relevantes para que el usuario tenga la **sensación de que está en el mismo lugar**.

	Por ejemplo, Platzi, independiente de la versión en Android, Apple o en la web, sus animaciones son las mismas haciendo que el usuario reconozca la aplicación.

4. Coreografía de UI    
	Las animaciones deben tener **coherencia en el movimiento y la duración**. Una pelota rebotando suavemente no transmite lo mismo que una pelota rebotando rápidamente.

5. Las animaciones llaman la atención    
	Esta es la intercepción de las razones anteriores, las animaciones reducen la carga cognitiva para comunicar y expresar varias situaciones de la vida real de manera ordenada, **pensando en el futuro de aquello que estamos creando**.


📌 [Codi.link](https://codi.link/) es un editor de código para escribir HTML, CSS y JavaScript, y visualizar el resultado a tiempo real. A lo largo del curso observarás ejemplos con esta herramienta. Utilízalo para dañar o crear nuevos ejemplos que te ayuden a reforzar los temas aprendidos.


[Diapositivas del Curso](https://static.platzi.com/media/public/uploads/transiciones-y-transformaciones-css_8955c7f8-93a1-4b22-b926-2c00936642b2.pdf)

❄ Lecturas recomendadas    

- [Clases del Curso de Frontend Developer - Platzi](https://platzi.com/clases/frontend-developer/)
- [Curso de CSS Grid Layout [2021] - Platzi](https://platzi.com/cursos/css-grid-layout/)
- [Curso de Flexbox y CSS Grid [2021] - Platzi](https://platzi.com/cursos/flexbox-css-grid/)
- [Cursos de Estefany Aguilar en Platzi](https://platzi.com/profesores/teffcode/)

🎲

## 2. Propiedades para crear animaciones con CSS y propiedades animables

🔥 **Propiedades animables**

🔥🔥 **Transform**  

La propiedad `transform` sirve para **transformar un elemento HTML mediante funciones**. Estas funciones permitirán trasladar, escalar, rotar o torcer a lo largo, ancho y profundidad del elemento.

Sin embargo, el usuario mira el resultado final de esta transformación. Por ejemplo, todos mirarán a Alicia pequeña, y no sabrán que realmente era grande. Por eso, esta propiedad está relacionada con **`transition`** para crear una animación.

- [Transform Cheat Sheet](https://static.platzi.com/media/public/uploads/transformaciones_en_2d_y_3d_d712736c-5368-4c9b-8827-331dc347d536.pdf)

**Transformaciones en 2D y 3**          
✨Cheatsheet by @teffcode & @platzi          


📌 Visión general de las animaciones con CSS      

|Transformaciones   |Transiciones        |Animaciones          |
|-------------------|--------------------|---------------------|
|transform          |transition          |animation            |
|transform-origin   |transition-property |animation-name       |
|transform-style    |transition-duration |animation-duration   |
|perspective        |transition-timing-function (opcional)|animation-timing-function (opcional)|
|perspective-origin |transition-delay (opcional)|animation-delay (opcional)|
|backface-visibility|                    |animation-iteration-count (opcional)|
|Untitled           |                    |animation-direction (opcional) |
|Untitled           |                    |animation-fill-mode (opcional) |
|Untitled           |                    |animation-play-state (opcional)|



Propiedades que veremos en este apartado:     
- transform 
- transform-origin 
- transform-style 
- perspective 
- perspective-origin 
- backface-visibility


⭐ Propiedad · transform  
- Sintaxis con 1 valor:     
	- `transform: none | transform-functions | initial | inherit;`

- Sintaxis con más de 1 valor:     
	- `transform: transform-functions transform-functions;`

 ⭐⭐ **transform-function**          

|Tipo     | Trasladar    | Escalar | Rotar    | Inclinar| Matriz   | Perspectiva |
|---------|--------------|---------|----------|-------- |----------|-------------|
|Múltiple | translate()  |scale()  |rotate()  | skew()  |matrix()  |perspective()| 
|Eje X    | translateX() |scaleX() |rotateX() | skewX() |          |             |
|Eje Y    | translateY() |scaleY() |rotateY() | skewY() |          |             |
|Eje Z    | translateZ() |scaleZ() |rotateZ() |         |          |             |
|3D       | translate3d()|scale3d()|rotate3d()|         |matrix3d()|             |


⭐⭐ Valores que reciben las transform-functions

|Valor        |Valor con los argumentos que recibe |Se puede escribir con|
|------------ |------------------------|---------------------------------|
|translate()  | translate(x, y)        | `<length>o un <percentage>`       |
|translateX() | translateX(x)          | `<length>o un <percentage>`       | 
|translateY() | translateY(y)          | `<length>o un <percentage>`       |
|translateZ() | translateZ(z)          | `<length>o un <percentage>`       | 
|translate3d()| translate3d(x, y, z)   | `<length>o un <percentage>`       | 
|scale()      | scale(x, y)            |     `<number>`                   |
|scaleX()     | scaleX(x)              | `<number>`                       |
|scaleY()     | scaleY(y)              | `<number>`                       |
|scaleZ()     | scaleZ(z)              | `<number>`                       |
|scale3d()    | scale3d(x, y, z)       | `<number>`                       |
|rotate()     | rotate(angle)          |  `<angle>(p.e. -20deg)`           | 
|rotateX()    | rotateX(angle)         |  `<angle>(p.e. 45deg)`            |
|rotateY()    | rotateY(angle)         |  `<angle>(p.e. -45deg)`           |
|rotateZ()    | rotateZ(angle)         |  `<angle>(p.e. 20deg)`            |
|rotate3d()   | rotate3d(x, y, z, angle)| `<number> y <angle> (p.e. 45deg)` |
|skew()       | skew(x-angle, y-angle) |  `<angle>(p.e. -90deg)`            |
|skewX()      | skewX(angle)           |  `<angle>(p.e. 90deg)`             |
|skewY()      | skewY(angle)           |  `<angle>(p.e. 180deg)`            |
|matrix()     | matrix(n, n, n, n, n, n)| `<number>`                       |
|matrix3d()   |matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n)| `<number>`|
|perspective()| perspective(n)         | `<length>`                       |


⭐ Propiedad · transform-origin            

- Sintaxis con 1 valor:     
	- `transform-origin: x-offset | offset-keyword | initial | inherit; `

- Sintaxis con 2 valores:        
	- `transform-origin: x-offset y-offset;` 
	- `transform-origin: y-offset x-offset-keyword;`
	- `transform-origin: x-offset-keyword y-offset;`
	- `transform-origin: x-offset-keyword y-offset-keyword;`
	- `transform-origin: y-offset-keyword x-offset-keyword;`

- Sintaxis con 3 valores:       
	- `transform-origin: x-offset y-offset z-offset;`
	- `transform-origin: y-offset x-offset-keyword z-offset;`
	- `transform-origin: x-offset-keyword y-offset z-offset;`
	- `transform-origin: x-offset-keyword y-offset-keyword z-offset;` 
	- `transform-origin: y-offset-keyword x-offset-keyword z-offset;`


 ⭐⭐ Valores   

|Tipo            | Se puede escribir con            |
|----------------|----------------------------------|
|offset-keyword  | left, right, top, bottom o center| 
|x-offset        |`<length>o un <percentage>`         | 
|x-offset-keyword| left, right o center             | 
|y-offset        | `<length>o un <percentage>`        |
|y-offset-keyword| top, bottom o center             |
|z-offset        | `<length>o un <percentage>`        |



⭐ Propiedad · transform-style    

- Sintaxis con 1 valor:       
	- `transform-style: flat | preserve-3d | initial | inherit;`

⭐⭐ Valores   

|Tipo  | Valor |
|------|-------|
|2D    |flat   |
|3D    |preserve-3d|


⭐ Propiedad · perspective    

- Sintaxis con 1 valor:      
	- `perspective: length | none;`  


⭐⭐ Valores      

|Tipo     |Se puede escribir con|
|---------|---------------------|
|Keyword  |none                 | 
| 3D      |`<length>o un <percentage>`|


⭐ Propiedad · perspective-origin    

- Sintaxis con 1 valor:    
	- `perspective-origin: x-axis | y-axis | initial | inherit; `

- Sintaxis con 2 valores:       
	- `perspective-origin: x-axis y-axis;`

⭐⭐ Valores      

|Tipo     |Se puede escribir con| 
|---------|----------------------|
|Eje X    | left, right, center, `<length>` o un `<percentage>`| 
|Eje Y    | top, bottom, center, `<length>` o un `<percentage>`| 


⭐Propiedad · backface-visibility     

- Sintaxis con 1 valor:     
	- `backface-visibility: visible | hidden | initial | inherit;`

⭐⭐ Valores   

|Tipo      |Se puede escribir con| 
|----------|---------------------| 
|Visible   | visible             |
|No visible| hidden              |


---
🔥🔥 **Transition**      
Nos permite ir de un lado a otro, no puede haber un cambio en la transición en el medio.

> ![Transition y transform](https://media.giphy.com/media/gCSOFQybTbM3pome6c/giphy.gif)

Cabe recalcar, con `transform` y `transition` solamente podemos manipular la posición inicial y la final, no las posiciones intermedias. Si se requiere crear una animación manipulando las posiciones intermedias, es necesario usar `animation`.

-   [Transition Cheat Sheet](https://static.platzi.com/media/public/uploads/transiciones_2093f06d-4937-4ba1-999d-73e1b9a56cca.pdf)

**Transiciones**          
✨Cheatsheet by @teffcode & @platzi          


📌 Visión general de las animaciones con CSS        

|Transformaciones   |Transiciones        |Animaciones          |
|-------------------|--------------------|---------------------|
|transform          |transition          |animation            |
|transform-origin   |transition-property |animation-name       |
|transform-style    |transition-duration |animation-duration   |
|perspective        |transition-timing-function (opcional)|animation-timing-function (opcional)|
|perspective-origin |transition-delay (opcional)|animation-delay (opcional)|
|backface-visibility|                    |animation-iteration-count (opcional)|
|Untitled           |                    |animation-direction (opcional) |
|Untitled           |                    |animation-fill-mode (opcional) |
|Untitled           |                    |animation-play-state (opcional)|



Propiedades que veremos en este apartado:    
- transition 
- transition-property 
- transition-duration 
- transition-timing-function (opcional) 
- transition-delay (opcional)


⭐ Propiedad · transition

- Sintaxis con 1 valor:     
	- `transition: initial | inherit;`

- Sintaxis con más de 1 valor:     
	- `transition: [property] [duration] [timing-function] [delay];`

 
⭐ Propiedad · transition-property 

- Sintaxis con 1 valor:     
	- `transition-property: none | all | | initial | inherit;`

Al final te comparto la lista de propiedades de CSS que son transicionables.



⭐ Propiedad · transition-duration  

- Sintaxis con 1 valor:     
	- `transition-duration: | initial | inherit;`

El tiempo puede estar dado en segundos (s) o milisegundos (ms).


⭐ Propiedad · transition-timing-function

- Sintaxis con 1 valor:     
	- `transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int, start | end) | cubicbezier(n, n, n, n) | initial | inherit;`


⭐⭐ Valores

|Propiedad               | Significado          | 
|------------------------|----------------------|
|linear                  | El elemento se mueve a una aceleración constante. |
|ease                    | Es el valor predeterminado si no se especifica la propiedad transition-timingfunction. El elemento acelera inicialmente pero presenta mucha desaceleración.| 
|ease-in                 | El elemento empieza lento pero termina rápido.| 
|ease-out                | El elemento empieza rápido pero termina lento.| 
|ease-inout              | Es la combinación de ease-in y ease-out: El elemento empieza lento, a medida que avanza va acelerándose, pero termina lento. |
|step-start              | steps(1, jump-start) |
|step-end                | steps(1, jump-end)   |
|steps(int, start, end)  | steps( n, `<jumpterm>`) Muestra la transición a lo largo de n paradas, mostrando cada parada durante períodos de tiempo iguales. `<jumpterm>` puede tener estos valores: · **jump-start:** Denota una función continua a la izquierda, de modo que el primer salto ocurre cuando comienza la transición. · **jump-end:** Denota una función continua a la derecha, de modo que el último salto ocurre cuando termina la animación. · **jump-none:** No hay salto en ninguno de los extremos. En su lugar, mantenerse en la marca del 0% y en la marca del 100%, cada uno durante 1 / n de la duración. · **jump-both:** Incluye pausas en las marcas 0% y 100%, agregando efectivamente un paso durante el tiempo de transición. **· start:** Igual que jump-start. **· end:** Igual que jump-end. 
|cubicbezier(n, n, n, n) | Se necesitan 4 números, que representan 2 puntos de control para formar la curva de aceleración deseada.



⭐ Propiedad · transition-delay   
- Sintaxis con 1 valor:     
	- `transition-delay: time | initial | inherit;`


El tiempo puede estar dado en segundos (s) o milisegundos (ms).  

- animation 
- animation-name 
- animation-duration 
- animation-timing-function (opcional) 
- animation-delay (opcional) 
- animation-iteration-count (opcional) Transiciones 5 
- animation-direction (opcional) 
- animation-fill-mode (opcional) 
- animation-play-state (opcional)


---
🔥🔥 **Animation**      
La propiedad `animation` sirve para cambiar estilos CSS a lo largo de un intervalo, consiste en reglas para un estado inicial, final e intermedios que conformarán una animación.

Es similar a `transition`, a diferencia que este te permite tener cambios intermedios

- [Animation Cheat Sheet](https://static.platzi.com/media/public/uploads/animaciones_5bda2325-fb2e-4060-9751-5863d226fcf1.pdf)]


**Animaciones**          
✨Cheatsheet by @teffcode & @platzi          


📌 Visión general de las animaciones con CSS   

|Transformaciones   |Transiciones        |Animaciones          |
|-------------------|--------------------|---------------------|
|transform          |transition          |animation            |
|transform-origin   |transition-property |animation-name       |
|transform-style    |transition-duration |animation-duration   |
|perspective        |transition-timing-function (opcional)|animation-timing-function (opcional)|
|perspective-origin |transition-delay (opcional)|animation-delay (opcional)|
|backface-visibility|                    |animation-iteration-count (opcional)|
|Untitled           |                    |animation-direction (opcional) |
|Untitled           |                    |animation-fill-mode (opcional) |
|Untitled           |                    |animation-play-state (opcional)|


Propiedades que veremos en este apartado:       
- animation 
- animation-name 
- animation-duration 
- animation-timing-function (opcional) 
- animation-delay (opcional) 
- animation-iteration-count (opcional)
- animation-direction (opcional) 
- animation-fill-mode (opcional) 
- animation-play-state (opcional)

⭐ Propiedad · animation

- Sintaxis con 1 valor:     
	- `animation: initial | inherit;`

- Sintaxis con más de 1 valor:     
	- `animation: [name] [duration] [timing-function] [delay] [iterationcount] [direction] [fill-mode] [play-state];`  


⭐ Propiedad · animation-name 

- Sintaxis con 1 valor:     
	- `animation-name: keyframename | none | initial | inherit;`


⭐ Propiedad · animation-duration

- Sintaxis con 1 valor:     
	- `animation-duration: time | initial | inherit;`


⭐ Propiedad · animation-timing-function

- Sintaxis con 1 valor:     
	- `animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int, start | end) | cubicbezier(n, n, n, n) | initial | inherit;`

⭐⭐ Valores   

|Propiedad            |Significado     |
|---------------------|----------------|
|linear      | El elemento se mueve a una aceleración constante. 
|ease        | Es el valor predeterminado si no se especifica la propiedad transition-timingfunction. El elemento acelera inicialmente pero presenta mucha desaceleración. 
|ease-in     | El elemento empieza lento pero termina rápido. 
|ease-out    | El elemento empieza rápido pero termina lento. 
|ease-in-out | Es la combinación de ease-in y ease-out: El elemento empieza lento, a medida que avanza va acelerándose, pero termina lento. 
|step-start  | steps(1, jump-start) 
|step-end    | steps(1, jump-end)
|steps(int, start, end)  | steps( n, `<jumpterm>`) Muestra la transición a lo largo de n paradas, mostrando cada parada durante períodos de tiempo iguales. `<jumpterm>` puede tener estos valores: · **jump-start:** Denota una función continua a la izquierda, de modo que el primer salto ocurre cuando comienza la transición. · **jump-end:** Denota una función continua a la derecha, de modo que el último salto ocurre cuando termina la animación. · **jump-none:** No hay salto en ninguno de los extremos. En su lugar, mantenerse en la marca del 0% y en la marca del 100%, cada uno durante 1 / n de la duración. · **jump-both:** Incluye pausas en las marcas 0% y 100%, agregando efectivamente un paso durante el tiempo de transición. **· start:** Igual que jump-start. **· end:** Igual que jump-end. 
|cubicbezier(n, n, n, n) | Se necesitan 4 números, que representan 2 puntos de control para formar la curva de aceleración deseada.



⭐ Propiedad · animation-delay

- Sintaxis con 1 valor:     
	- `animation-delay: | initial | inherit;`

El tiempo puede estar dado en segundos (s) o milisegundos (ms).


⭐ Propiedad · animation-iteration-count   

- Sintaxis con 1 valor:     
	- `animation-iteration-count: | infinite | initial | inherit;`


⭐ Propiedad · animation-direction  

- Sintaxis con 1 valor:     
	- `animation-direction: normal | reverse | alternate | alternatereverse | initial | inherit;`


⭐ Propiedad · animation-fill-mode

- Sintaxis con 1 valor:     
	- `animation-fill-mode: none | forwards | backwards | both | initial | inherit;`

⭐ Propiedad · animation-play-state

- Sintaxis con 1 valor:     
	- `animation-play-state: paused | running | initial | inherit;`

---

**Resumen:**     

✨ **Transformación del HTML** Se refiere a transformar valores como el tamaño, posición, escala, etc.

✨ **Animable** significa que sus valores cambian gradualmente durante un periodo de tiempo determinado.


❄ **En este curso nos enfocaremos solamente en `transition` y `transform`**, después seguir con el [Curso de Animaciones con CSS](https://platzi.com/cursos/animaciones-css/), en el cual se abarcará la propiedad “animation”.

🎲

## 3. Pseudo-clases y pseudo-elementos en las animaciones

**Un _trigger_ es un accionador de animaciones**, es decir, el evento inicial que desencadena una animación. Algunos ejemplos son:

-   Pasar el _mouse_ sobre un elemento.
-   Dar clic a un elemento.
-   Al deslizar la pantalla.
-   Al recargar la página web.

Las pseudo-clases y pseudo-elementos ayudan a activar las animaciones.

🔥 Pseudo-clases

Una pseudo-clase define el estilo de **un estado** especial de un elemento.

-   [Índice de pseudo-clases estándar](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes#indice_de_las_pseudo-clases_est%C3%A1ndar)

🔥🔥 Sintaxis

```css
selector:pseudo-clase { 
	propiedad: valor; 
}
```

⭐ :link

La pseudo-clase `:link` representa el estado de un elemento que **no ha sido visitado**.

```html
<a href="#">Clickeame</a>
```

```css
a {
  font-size: 3rem;
}

a:link {
  color: red;
}
```

-   [Ejemplo usando :link](https://codepen.io/Meowth01/pen/dyeMPoy)

⭐ :visited

La pseudo-clase `:visited` representa el estado de un elemento que **ya ha sido visitado**.

```html
<a href="#">Clickeame</a>
```

```css
a {
  font-size: 3rem;
}

a:visited {
  color: red;
}
```

-   [Ejemplo usando :visited](https://codepen.io/Meowth01/pen/yLjOyYj)

⭐ :hover

La pseudo-clase `:hover` representa el estado en el cual **el cursor está encima del elemento**.

```html
<div>Señálame</div>
```

```css
div {
  font-size: 3rem;
  cursor: pointer;
}

div:hover {
  color: red;
}
```

-   [Ejemplo usando :hover](https://codepen.io/Meowth01/pen/WNJwbrZ)

⭐ :not()

La pseudo-clase `:not()` representa el estado en el cual **no coinciden los selectores que se indiquen**.

```html
<div>Azul</div>
<div>Azul</div>
<div class="ignorar">Negro</div>
<div>Azul</div>
<div>Azul</div>
```

```css
div {
  font-size: 3rem;
}

div:not(.ignorar) {
  color: blue;
}
```

-   [Ejemplo usando :not()](https://codi.link/PGRpdj5BenVsPC9kaXY+DQo8ZGl2PkF6dWw8L2Rpdj4NCjxkaXYgY2xhc3M9Im5lZ3JvIj5OZWdybzwvZGl2Pg0KPGRpdj5BenVsPC9kaXY+DQo8ZGl2PkF6dWw8L2Rpdj4=%7CZGl2IHsNCiAgZm9udC1zaXplOiAzcmVtOw0KfQ0KDQpkaXY6bm90KC5uZWdybykgew0KICBjb2xvcjogYmx1ZTsNCn0=%7C)

⭐ :nth-child()

La pseudo-clase `:nth-child()` representa el estado en el cual **coinciden los hijos del elemento según el valor indicado**.

**Valores de palabras clave:**

-   **`odd`:** Los elementos hijos en posiciones impares.
-   **`even`:** Los elementos hijos en posiciones pares.

**Fórmula matemática:** `An+B` donde A y B son números enteros.

```html
<div>1 Negro</div>
<div>2 Azul</div>
<div>3 Negro</div>
<div>4 Negro</div>
<div>5 Negro</div>
```

```css
div {
  font-size: 3rem;
} 

div:nth-child(2) {
  color: blue;
}
```

-   [Ejemplo usando :nth-child()](https://codi.link/PGRpdj4xIE5lZ3JvPC9kaXY+DQo8ZGl2PjIgQXp1bDwvZGl2Pg0KPGRpdj4zIE5lZ3JvPC9kaXY+DQo8ZGl2PjQgTmVncm88L2Rpdj4NCjxkaXY+NSBOZWdybzwvZGl2Pg==%7CZGl2IHsNCiAgZm9udC1zaXplOiAzcmVtOw0KfQ0KDQpkaXY6bnRoLWNoaWxkKDIpIHsNCiAgY29sb3I6IGJsdWU7DQp9%7C)

✨[Ejemplo resumen](https://codepen.io/Meowth01/pen/JjvXjJB)

---
🔥 Pseudo-elementos

Un pseudo-elemento define el estilo de **una parte específica** de un elemento.

-   [Lista de pseudo-elementos](https://developer.mozilla.org/es/docs/web/css/pseudo-elements#lista_de_pseudoelementos)

🔥🔥 Sintaxis

```css
selector::pseudo-elemento { 
	propiedad: valor; 
}
```

⭐ ::before

La pseudo-elemento `::before` sirve para agregar un contenido **antes del elemento**. El contenido es agregado mediante la propiedad CSS `content`.

```html
<h1>Título</h1>
<h2>Subtítulos</h2>
<h2>Subtítulos</h2>
<h2>Subtítulos</h2>
<h2>Subtítulos</h2>
<h2>Subtítulos</h2>
```

```css
h2::before {
  content: " * ";
  color: red;
}
```

-   [Ejemplo usando ::before](https://codi.link/PGgxPlTDrXR1bG88L2gxPg0KPGgyPlN1YnTDrXR1bG9zPC9oMj4NCjxoMj5TdWJ0w610dWxvczwvaDI+DQo8aDI+U3VidMOtdHVsb3M8L2gyPg0KPGgyPlN1YnTDrXR1bG9zPC9oMj4NCjxoMj5TdWJ0w610dWxvczwvaDI+DQo=%7CaDI6YmVmb3JlIHsNCiAgY29udGVudDogIiAqICI7DQogIGNvbG9yOiByZWQ7DQp9%7C)

⭐ ::after

La pseudo-elemento `::after` sirve para agregar un contenido **después del elemento**. El contenido es agregado mediante la propiedad CSS `content`.

```html
<nav>
  <ul>
    <li>Home</li>
    <li>Destacados</li>
    <li>Elementos</li>
    <li>Clases</li>
    <li>Más...</li>
  </ul>
</nav>
```

```css
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}

nav ul li::after {
  content: "|";
  margin: 1rem;
  color: red;
}
```

-   [Ejemplo usando ::after](https://codi.link/PCEtLSBOYXZiYXIgaW1wcm92aXNhZGEgLS0+DQo8bmF2Pg0KICA8dWw+DQogICAgPGxpPkhvbWU8L2xpPg0KICAgIDxsaT5EZXN0YWNhZG9zPC9saT4NCiAgICA8bGk+RWxlbWVudG9zPC9saT4NCiAgICA8bGk+Q2xhc2VzPC9saT4NCiAgICA8bGk+TcOhcy4uLjwvbGk+DQogIDwvdWw+DQo8L25hdj4NCg==%7CbmF2IHVsIHsNCiAgbGlzdC1zdHlsZTogbm9uZTsNCiAgZGlzcGxheTogZmxleDsNCiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7DQogIGN1cnNvcjogcG9pbnRlcjsNCn0NCg0KbmF2IHVsIGxpOjphZnRlciB7DQogIGNvbnRlbnQ6ICJ8IjsNCiAgbWFyZ2luOiAxcmVtOw0KICBjb2xvcjogcmVkOw0KfQ==%7C)


📌Al momento de usar pseudo-clases, es necesario tener en cuenta que estas llevan un order, de acuerdo a `LVHA-order`  

Entonces, para que funcionen correctamente, necesitan ir en el siguiente orden (en caso de que se ocupen todas las mencionadas)

-   :link
-   :visited
-   :hover
-   :active


❄ Lecturas recomendadas

- [HTML Color Codes](https://htmlcolorcodes.com/)[
- [:hover - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)[
- [:focus - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)[
- [:active - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)[
- [:disabled - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)

🎲

## 4. Timing functions, planos y ejes

Una _timing function_ es la **representación de la progresión en función del tiempo de cada ciclo de la animación**. Representa la aceleración del elemento desde un punto A hasta un punto B.

En [esta página web](https://easings.net/) podrás observar varias “timing functions” y cómo es su animación haciendo hover en cada bloque. No es necesario aprendértelas de memoria, solo conocerlas.

🔥 Cubic-bezier

_Cubic-bezier_ es una función de CSS para representar una timing function mediante **cuatro puntos a lo largo de la curva**, de los cuales únicamente ingresamos los dos puntos intermedios.

-   [Página web para crear una función Cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)

🔥 Planos y ejes

El navegador está constituido de tres planos y ejes: **el ancho o X; el alto o Y; y el de profundidad o Z**.

El eje X positivo está hacia la derecha; el eje Y positivo está hacia abajo; y el eje Z positivo está hacia el usuario.

![Planos y ejes de un navegador web](https://i.postimg.cc/XYhPXmJ1/5-ejes.jpg)

Estos son muy importantes para mover los elementos del HTML desde un punto inicial hacia un punto final.

🔥 Contexto de apilamiento

El contexto de apilamiento consiste en la **superposición de capas o elementos a lo largo del eje Z**. Esto es importante para evitar que un elemento esté ocultando a otro o colocar una imagen de fondo a la página web.

![Animación sobre el contexto de apilamiento](https://media.giphy.com/media/1IvbqeWg7gLlRi2TAC/giphy.gif)


❄ Lecturas recomendadas

- [cubic-bezier.com](https://cubic-bezier.com/)
- [Easing Functions Cheat Sheet](https://easings.net/)
- [easing-function - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)[
- [El contexto de apilamiento - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

🎲

## 5. Transform translate

_Transform_ es una propiedad CSS que sirve para **transformar un elemento HTML mediante funciones**. Estas funciones permitirán trasladar, escalar, rotar o torcer a lo largo, ancho y profundidad del elemento.

Primero, revisaremos las propiedades para transformaciones 2D, es decir en un solo plano. Después, con algunas otras propiedades CSS aplicaremos transformaciones 3D.

🔥 Translate para transformaciones

_Translate_ es una función de la propiedad “transform” que te permite **trasladar un elemento HTML a través de los ejes del navegador**. El valor que recibe puede ser una **longitud** (px, rem, etc.) o un **porcentaje**.

```css
selector {
    transform: translate(10px, -10px);
    transform: translate(20%, -20%);
}
```

![Representación de la función translate](https://i.postimg.cc/GmBD9QW2/5-translate.png)

Dependiendo del eje en el que traslades el elemento, existe una función.

|**Tipo**  |**Valor con los argumentos que recibe**|
|----------|-------------------|
|Eje X y Y | translate(x,y)    |
|Eje X     | translateX(x)     |
|Eje Y     | translateY(y)     |
|Eje Z     | translateZ(z)     |
|Múltiple  | translate3d(x,y,z)|

✨ Translate(x, y)

```html
<div class="shadow">
	<div class="circle"></div>
</div>
```

```css
.shadow {
    width: 100px;
    height: 100px;

    border-radius: 50%;
    background-color: black;
}

.circle {
    width: 100px;
    height: 100px; 

    border-radius: 50%;
    background-color: aqua;
}

.circle:hover {
    transform: translate(20px, -20px);
}

```

Otra forma:     
```css
.circle:hover {
    transform: translateX(-20px);
}
```

-   [Ejemplo usando translate(x,y)](https://codepen.io/Meowth01/pen/oNdxgOz).
    
-   [Ejemplo usando translateX(x) y translateY(y)](https://codepen.io/Meowth01/pen/eYrZmoq).


✨ Emuladores para que se distraigan haciendo sus diseños      

- [Angry Tools](https://angrytools.com/css-generator/transform/)  
- [Gradient Animator](https://www.gradient-animator.com/)  
- [Transform](https://html-css-js.com/css/generator/transform/)  
- [Marking](https://makingcss.com/transform)



❄ Lecturas recomendadas

- [Gradient Backgrounds – 🌈 The Best Gradient Sites All in One Place](https://cssgradient.io/gradient-backgrounds/)
- ["transform" | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=transform)

🎲

## 6. Transform rotate, scale, skew y matrix

Además de `translate`, existen otras funciones que permiten transformar el elemento HTML para iniciar una animación.

![Funciones de transformación](https://media.giphy.com/media/KRRSOKFINjskbRNENr/giphy.gif)

🔥 Rotate para transformaciones

_Rotate_ es una función de la propiedad `transform` que te permite **rotar un elemento HTML a través de los ejes del navegador**. El valor que recibe es un **ángulo**, por ejemplo, “45deg” (45 grados) o “2rad” (2 radianes). Los ángulos positivos están en sentido horario, y los negativos en sentido antihorario.

```css
selector {
    transform: rotate(45deg);
}
```

![Representación de la función rotate](https://i.postimg.cc/rFKVCMQq/6-rotate.png)

Dependiendo del eje en el que rotes el elemento, existe una función.

|**Tipo**   |**Valor con los argumentos que recibe**|
|-----------|---------------------------------------|
|Eje X y Y  | rotate(angle)                  |
|Eje X      | rotateX(angle)                 |
|Eje Y      | rotateY(angle)                 |
|Eje Z      | rotateZ(angle)                 |
|Múltiple   | rotate3d(x,y,z,angle)          |


```html
<div></div>
```

```css
div {
    width: 150px;
    height: 100px;
    background-color: aqua;
}

div:hover {
    transform: rotate(20deg);
}
```

Otras formas:      
```css
div:hover {
    transform: rotateY(20deg);
}
```


-   [Ejemplo usando rotate](https://codepen.io/Meowth01/pen/oNdLXVG)

🔥 Scale para transformaciones

_Scale_ es una función de la propiedad `transform` que te permite **escalar un elemento HTML a través de sus ejes**. El valor que recibe es un **número multiplicador al elemento original**.

Si el elemento es igual a 1 entonces sigue como el original; mayor a 1 aumenta de tamaño; y, menor a 1 disminuye de tamaño.

```css
selector {
    transform: scale(0.8);
}
```

![Representación de la función scale](https://i.postimg.cc/QxLcK8QW/6-escale.png)

Dependiendo del eje en el que escales el elemento, existe una función.

|**Tipo**   |**Valor con los argumentos que recibe**|
|-----------|---------------------------------------|
|Eje X y Y  | scale(x)                 |
|Eje X      | scaleX(x)                |
|Eje Y      | scaleY(y)                |
|Eje Z      | scaleZ(z)                |
|Múltiple   | scale3d(x,y,z)           |


```html
<div class="circle">
</div>
```

```css
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: aqua;
}

.circle:hover {
    transform: scale(1.2);
}
```

Otras formas:      
```css
.circle:hover {
    transform: scale(0.8, 1.2);
}
```

```css
.circle:hover {
    transform: scaleX(1.2);
}
```

-   [Ejemplo usando scale](https://codepen.io/Meowth01/pen/bGMedyJ)

🔥 Skew para transformaciones

_Skew_ es una función de la propiedad `transform` que te permite **torcer un elemento HTML a través de sus ejes en dos dimensiones**. El valor que recibe es un **ángulo** para cada eje en el que el elemento se distorsionará.

```css
selector {
    transform: skew(45deg, 45deg);
}
```

![Representación de la función skew](https://i.postimg.cc/kgbZFXz3/6-skew.png)

Dependiendo del eje en el que tuerzas el elemento, existe una función.

|**Tipo**   |**Valor con los argumentos que recibe**|
|-----------|---------------------------------------|
|Eje X y Y  | skew(angleX, angleY)          |
|Eje X      | skewX(angle)                  |
|Eje Y      | skewY(angle)                  |


```html
<div></div>
```

```css
div {
    width: 100px;
	height: 100px;
	border-radius: 20%;
	background-color: aqua;
}

div:hover {
    transform: skew(20deg);
}
```

Otras formas:      
```css
div:hover {
    transform: skewX(20deg);
}
```

```css
div:hover {
    transform: skewY(20deg);
}
```


-   [Ejemplo usando skew](https://codepen.io/Meowth01/pen/abGZOeW)

🔥 Matrix para transformaciones

_Matrix_ es una función de la propiedad `transform` que te permite realizar varios efectos en uno solo.

-   [Documentación de matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)

✨ Orden en el código para transformaciones   

Solamente puede existir una **sola propiedad `transform`** en el código de CSS, por lo que si escribimos otra regla CSS con otra transformación, esta se sobrescribirá y solo ejecutará la última. Por ende, utiliza varias funciones en la misma propiedad `transform` para realizar varias transformaciones.

```css
/*Mal (solo rotará el elemento)*/

selector {
    transform: translate(100px,  100px);
    transform: rotate(45deg);
 }
```

```css
/*Bien (realizará ambas transformaciones)*/

selector {
    transform: translate(100px, 100px) rotate(45deg);
}
```


📌 [Pagina Open Source](https://tympanus.net/codrops/) para que aprendas nuevas formas de implementar lo aprendido.

📌 [Slicebox:](https://tympanus.net/Development/Slicebox/index.html) un nuevo control deslizante de imágenes en 3D con un elegante respaldo. 

- [Otro resumen](https://sasohdz.github.io/TransformacionesTransicionesCSS/)

❄ Lecturas recomendadas   

- [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

- [Gradient Backgrounds – 🌈 The Best Gradient Sites All in One Place](https://cssgradient.io/gradient-backgrounds/)

🎲

## 7. Transform origin

El origen es el punto en el cual la transformación se ejecutará. La propiedad **`transform-origin`** permite cambiar el origen de las transformaciones, que por defecto está en el centro del elemento.

![Representación de la propiedad transform-origin](https://i.postimg.cc/3NRBnYrH/7-origin.png)

Revisa la [Cheat Sheet](https://static.platzi.com/media/public/uploads/transformaciones_en_2d_y_3d_d712736c-5368-4c9b-8827-331dc347d536.pdf) para conocer la sintaxis y los valores que recibe o **_revisa la clase 2_** ☝.


```html
<div></div>
```

```css
div {
    width: 150px;
    height: 100px;
    transform-origin: left top;👈👀
    background-color: aqua;
} 

div:hover {
    transform: rotate(30deg);
}
```

Otras formas:

```css
div {
    transform-origin: center;👈👀
}
```

```css
div {
    transform-origin: 50px 50px;👈👀
}
```

Esta ultima mueve el punto de origen de rotación en X 50px y en Y 50px

![Transform-origin](https://i.postimg.cc/SNJPrnK7/11-transform-origin.png)

📌 OJO esta propiedad debe estar puesta en el objeto; no en la pseudoclase 😃

-   [Ejemplo usando transform-origin con diferentes transformaciones](https://codepen.io/Meowth01/pen/poVbjVN)

- [Ejemplo resumen aplicado de las propiedades 2D de transformación](https://codepen.io/AMillanir/pen/qBmWWoO)


❄ Lecturas recomendadas

- [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
🎲

## 8. Transform style y perspective

Ya revisaste las propiedades para realizar transformaciones en 2D, si te fijaste bien, habrás notado que cuando se realiza una transformación en un solo eje (por ejemplo `rotateX`) el elemento permanece en un **solo plano**.

Con las transformaciones 3D observaremos el elemento transformarse en diferentes planos.

Por lo tanto, es momento para aplicar **transformaciones en 3D**. Las propiedades CSS para esto serán: `transform-style` y `perspective`.

🔥 Transform style para transformaciones en 3D

La propiedad **`transform-style`** de CSS establece si un **elemento hijo** está en el plano 2D (`flat`) o 3D (`preserve-3d`). Por defecto, el elemento está con valor `flat`.

```css
selector {
    transform-style: preserve-3d;
}
```

🔥 Perspective para transformaciones en 3D

La propiedad **`perspective`** se utiliza para proveer de profundidad a un elemento con respecto al usuario y dar la sensación de 3D.

El valor que recibe la propiedad es una longitud (px, rem, etc.) que representa la profundidad del plano para construir la perspectiva.

![Animación de la propiedad perspective](https://media.giphy.com/media/xQRWVJPqdj32zdQKGr/giphy.gif)

Por defecto, el origen para las transformaciones 3D está en el centro, pero se puede modificar con la propiedad **`perpective-origin`**.

```html
<div class="container">
	<div class="item"></div>
</div>
```

```css
.container {
    position: relative;
    width: 100px;
    height: 100px;
    border: 5px solid aqua;
    
    perspective: 100px;👀
}

.item {
    position: absolute;
    width: 95px;
    height: 95px;

    transform-style: preserve-3d;👀
    opacity: 0.5;

    border: 3px solid black;
    background-color: darkslateblue;
} 

.item:hover {
    transform: rotateX(20deg);👀
}
```

-   [Ejemplo empleando transformaciones 3D.](https://codepen.io/Meowth01/pen/ZEoObwX)

🔥 Cambiar el origen de la perspectiva.

La propiedad **`perspective-origin`** es la encargada de cambiar el origen de la perspectiva, por lo que el usuario percibirá de diferente forma el elemento.

![Perspectiva](https://i.postimg.cc/PrRjbQzC/8-perspective.png)

Código ejemplo:   

```html
<div class="shadow">
	<div class="transform">Señálame</div>
</div>
```

```css
.shadow{
	width: 100px;
	height: 100px;
	/* Perspectiva */
	perspective: 100px;
	perspective-origin: left top;👈👀

	border: 1px solid transparent;
	background-color: grey;
}

.transform{
	width: 100px;
	height: 100px;
	/* Transform */
	transform-style: preserve-3d;👈👀

	font-size: 1.5rem;
	border: 1px solid black;
	background-color: skyblue;
	cursor: pointer;
}

/* Transformaciones */
.transform:hover {
	transform: rotateY(15deg);
}
```


- [Ejemplo cambiando la perspectiva.](https://codepen.io/Meowth01/pen/abGZvMK)


❄ Lecturas recomendadas

- [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Perspective-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)

🎲

## 9. Backface visibility

La propiedad **`backface-visibility`** de CSS permite **mostrar la cara trasera de un elemento**. Esta propiedad recibe dos valores: `visible` (visible) y `hidden` (oculto); por defecto, su valor es `visible`.

```css
selector {
    backface-visibility: visible;
    backface-visibility: hidden;
}
```

La cara trasera de un elemento siempre tiene un fondo transparente, por lo que al ser visible y realizar una transformación en **un solo eje**, mostrará un **efecto de imagen espejo**. Mira la siguiente imagen y observa cómo Alicia cambia de lugar.

![Representación de la propiedad backfase-visibility](https://i.postimg.cc/9FnV2HM8/9-visible.png)

En cambio, si el valor es `hidden` no mostrará contenido. Con esto podemos realizar que un elemento se muestre al ocultarse otro, como un **efecto de voltear una carta**.

🔥 Crea el efecto de voltear una carta con _backface-visibility_

Como punto inicial, necesitarás un elemento padre con dos elementos hijos, los cuales representarán la cara del frente y trasera de la carta. Te dejo este código para que empieces, aunque no es obligatorio, ya que se hablará de manera general en la explicación.

-   [Punto de partida](https://codepen.io/Meowth01/pen/VwxjevJ)

Ahora sigamos los siguientes pasos:

1.  **Al elemento padre agrega una posición relativa; y a los hijos, una posición absoluta**. Esto provocará que los elementos hijos estén uno sobre el otro con respecto al eje Z dentro del elemento padre.

```css
.padre {
    position: relative;
}

.hijos{
    position: absolute;
}
```

2.  Al elemento padre agrega la propiedad para que la transformación sea en 3D.

```css
.padre {
    transform-style: preserve-3d;
}
```

3.  Al elemento que deba estar en la vista trasera, **rótalo 180 grados sobre el eje X o Y** dependiendo de lo que esperes. Observarás el efecto espejo, pero aún no está listo.

```css
.cara-posterior  {
    transform: rotateY(180deg);
}
```

4.  A los elementos hijos, agrega la propiedad **`backface-visibility` con el valor `hidden`**. Observarás que el contenido frontal y posterior se han situado como una tarjeta. Solo faltaría añadir un accionador para la animación.

```css
.hijos {
    backface-visibility: hidden;
}
```

5.  Al elemento padre, agrega un accionador para la animación que consista en **rotar todo el contenido** para mostrar la vista posterior al usuario.

```css
.padre:hover {
  transform: rotateY(180deg);
}
```

Y listo, tienes el efecto de voltear una tarjeta mediante la propiedad `backface-visibility`.

Código ejemplo:          

```html
<div class="card">
	<div class="face front"></div>
	<div class="face back"></div>
</div>
```

```css
.card {
    position: relative;👀
    width: 200px;
    height: 200px;

    transform-style: preserve-3d;👀
}

.card:hover {
    transform: rotateY(180deg);👀
}

.face {
    position: absolute;👀
    width: 100%;
    height: 100%;  

	border-radius: 20px;
    backface-visibility: hidden;👀
}

.face.front {👈👀❓
    background-color: aqua;
} 

.face.back {👈👀❓
    transform: rotateX(180deg);👀
    background-color: darkslateblue;
}
```

-   [Ejercicio completo del efecto de voltear una tarjeta.](https://codepen.io/Meowth01/pen/xxjOZZm)


📌 Explicación de uso: Clases `.face .front`:   

Al estar escritos de esa manera `.face .front`, CSS **esta buscando un elemento con clase** `.front` **dentro de un elemento con clase** `.face`. Ese espacio entre un selector y otro es lo que ocasiona este comportamiento. Es como si hiciéramos lo siguiente:

```html
<div class="padre">
	<div class="hijo"></div>
</div>
```

```css
.padre .hijo {
	background-color: red;
}
```

En el CSS anterior, gracias a ese espacio entre selectores es que podemos acceder al elemento con clase `.hijo` **dentro** del elemento con clase `.padre`  

PERO ese no es el HTML que tenemos en el ejemplo de arriba. Lo que tenemos es lo siguiente:   

```html
<div class="card">
	<div class="face front"></div>👈👀
	<div class="face back"></div>👈👀
</div>
```

Entonces, ¿cómo seleccionamos esos div en CSS? **Quitándole el espacio entre selectores.**

```css
.face.front {😌😍
	background-color: red;
}
```

De esta manera, al escribir los selectores sin espacios (todo junto), le estamos diciendo a CSS que queremos aplicar esos estilos al elemento que tenga **las dos clases, tanto** `.face` **como** `.front`.


❄ Lecturas recomendadas

- [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)[
- [backface-visibility - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/backface-visibility)

🎲

## 10. Efecto parallax: estructura HTML

El **efecto de paralaje o parallax** es una técnica en la que el fondo se mueve a una **velocidad distinta que la del contenido**. El resultado es un ligero **efecto de profundidad**, dejando ver partes que antes no podías visualizar. Te ayuda a sumergirte totalmente en el contenido, similar al efecto 3D.

-   [30 Webs con efecto Parallax](https://www.awwwards.com/30-webs-con-efecto-parallax.html)

🔥 Estructura HTML para el efecto parallax

Crea un contenedor con elementos hijos, estos serán las capas del contenedor para crear el efecto. En este caso, agrega tres elementos que representen la capa del fondo (_background_), del medio (_middle_) y de primer plano (_foreground_). Cada elemento debe tener una clase general y una que las diferencie.

```html
<div class="parallax-container">
  <div class="image image_background"></div>
  <div class="image image_middle"></div>
  <div class="image image_foreground"></div>
</div>
```

En la capa del medio, crea tres elementos hijos que representen tres cartas.

```html
<div class="image image_middle">
    <div class="card one"></div>
    <div class="card two"></div>
    <div class="card three"></div>
</div>
```

Para las demás capas, agrega una imagen de fondo y una en primer plano de Alicia. Te dejo los enlaces de las imágenes, utiliza una etiqueta de imagen con su respectivo atributo `alt`.

* [Alicia](https://i.ibb.co/vJdbRkj/Alice.png)
* [Imagen de fondo](https://i.ibb.co/jbLKgvX/Background.png)

```html
<div class="parallax-container">
	<div class="image__background">
		<img src="https://i.postimg.cc/QN6Dc4wr/10-background.png" alt="Background">
	</div>
    <div class="image__middle">
		<div>
			<div class="card one"></div>
			<div class="card two"></div>
			<div class="card three"></div>
		</div>
    </div>
    <div class="image__foreground">
		<img src="https://i.postimg.cc/j2krK2Pj/10-alice.png" alt="Alice">
    </div>
</div>
```

Y listo, ya tienes la estructura del efecto parallax, no importa si las imágenes están sobredimensionadas. Ahora utilizaremos CSS para dar estilos a las capas.

- [Estructura HTML preliminar](https://codepen.io/Meowth01/pen/dyeXMXO)


✨ **HISTORIA**  
el Parallax es en realidad un truco con mucha historia, inventado por [**Disney**](https://www.youtube.com/watch?v=86zPz3J4MdM) para dotar a sus películas de dibujos animados de una ligera tridimensionalidad, intentando lograr con ello un mayor realismo. El invento se bautizó como **«cámara multiplano»**

🎲

## 11. Efecto parallax: estilos CSS

Ahora que ya está la estructura HTML para el efecto parallax, es momento de agregar los estilos CSS.

🔥 Estilos CSS para el efecto parallax

Quita el margin que está por defecto establecido por el navegador.

```css
body {
  margin: 0;
}
```

Dimensiona las imágenes para que ocupen el espacio del contenedor.

```css
img{
  max-width: 100%;
  height: auto;
}
```

En el elemento contenedor (parallax-container) agrega: 

-   Posición relativa para que las capas puedan posicionarse con respecto al contenedor del efecto.
-   Medidas para que ocupe el ancho y alto de la pantalla.
-   Perspectiva de 8 píxeles (recuerda este valor).📌
-   En este caso, el exceso de contenido deberá estar oculto para el eje X y desplazable para el eje Y, pero lo puedes cambiar a tu gusto.

```css
.parallax-container {
	position: relative;
	width: 100%;
	height: 100vh;
	perspective: 8px;
	overflow-x: hidden;
	overflow-y: scroll;
}
```

Agrega la posición absoluta a todos los elementos hijos o capas del efecto.

```css
.image{
	position: absolute;
} 
```

Para cada capa del efecto vamos a realizar lo siguiente:

-   Medidas según sean necesarias.
-   Trasladar la capa en eje Z, desde 0 hasta el valor de la perspectiva (8px).
-   Escalar el elemento según su profundidad. Para calcular este valor utiliza la siguiente fórmula: `(perspective - translateZ) / perspective`, por ejemplo para la capa del medio, `(8-5)/8 = 0.375`.
-   Modificar el origen según sea necesario.

Algunos valores no son necesarios colocar, pero es recomendable tener un control del código y de las propiedades CSS.

```css
.image_background{
	width: 100%;
	height: auto;
	transform: translateZ(0px) scale(1);
	transform-origin: 0 50%;
}

.image_middle{
	width: 100%;
	height: 100%;
	transform: translateZ(5px) scale(0.375);
	transform-origin: 50%;
}

.image_foreground{
	width: 100%;
	height: auto;
	transform: translateZ(2px) scale(0.75);
	transform-origin: top;
}
```

Para las cartas de la segunda capa agrega dos estilos importantes: las medidas y la posición absoluta.

```css
.card {
	position: absolute;
	width: 80px;
	height: 100px;
	/* Estilos propios de la carta */
	background: white;
	border-radius: 8px;
	transform: rotate(-20deg);
}
```

La posición sirve para posicionar cada carta como deseemos.

```css
/* Valores al azar, modificálos a tu gusto. */
.one{
	left: 30%;
	top: 90;
}

.two{
	right: 20%;
	top: 200px;

}

.three{
	right: 20%;
	bottom: -700px;
}
```

¡Y listo! Ya está construido el efecto parallax.


El código estaría quedando así:     

```html
<div class="parallax-container">
	<div class="image image_background">
	    <img src="https://i.ibb.co/jbLKgvX/Background.png" alt="background">
	</div>
	<div class="image image_middle">
		<div class="card one"></div>
		<div class="card two"></div>
		<div class="card three"></div>
	</div>
	<div class="image image_foreground">
		<img src="https://i.ibb.co/vJdbRkj/Alice.png" alt="Alice">
	</div>
</div>
```

```css
body {
	margin: 0;
}

.parallax-container {
	position: relative;
	width: 100%;
	height: 100vh;
	/* Profundidad */
	perspective: 8px;
	/*Vista desde arriba igual que Center*/
	perspective-origin: 50%; 
	/* Scroll oculto */
	overflow-x: hidden;
	overflow-y: scroll;
}

/* Con la propiedad overflow la imagen se corta así que aplicamos estilos a las imagenes*/

div img {
	width: 100%;
	height: 100%;
}

.image {
	/* Una imagen sobre otra */
	position: absolute; /* una imagen sobre otra */
	margin: 0 auto;
	/* transform: 0 50%; Error no se está aplicando:
	Translate - Rotate - Scale???? */
}  

.image__background {
    width: 100%;
    height: auto;
    /* Añade capas en el eje Z */
    transform: translateZ(0px) scale(1);
    /* En X 0 y en Y 50% - Punto Origin está centrado a la izquierda */
	transform-origin: 0 50%;
}

.image__middle {
	width: 100%;
	height: 100%;
	/* Scale =
	(perspective - translateZ) / perspective */
	transform: translateZ(5px) scale(0.375);
	/* Igual que aplicar un center */
	transform-origin: 50%; 
}

.card {
	position: absolute;
	width: 80px;
	height: 100px;
	background-color: white;
	border-radius: 8px;
	/* Siempre en Grados:deg */
	transform: rotate(-20deg);
}

/* Agrega tus propios valores */
.one {
	left: 20px;
	top: 90px;
}

.two {
	right: 10%;
	top: 200px;
}

.three {
	right: 20%;
	bottom: -150px;
	background-color: aqua;
}

.image__foreground {
	/* Scale = (8-2)/8 = 0.75 */
	transform: translateZ(2px) scale(0.75);
	/* Img Alice en posición Top*/
	transform-origin: top;
}
```

✨ Copia el código y pruébalo ☝.      

-   [Efecto Parrallax.](https://codepen.io/Meowth01/pen/MWGjKjE)

📌 Explicación de `transform: translateZ(2px) scale(0.75);`           

A nuestra capa contenedora parallax-container le aplicamos perspective: 8px… es como decirle, tu tendrás una profundidad en el eje Z de 8 pixeles.

Luego a la capa image__background le decimos, translateZ(0px), esto es como decirle, tu te quedaras en el fondo, en el pixel 0.

Después, a la capa foreground le decimos translateZ(2), esto quiere decir que en nuestra perspectiva de 8 pixeles de profundidad, esta la ubicamos en el 2, esto hace que sea mas grande y por lo tanto ajustamos su tamaño con scale.


Para calcularlo es simple:       
p= perspective del container           
z= translate del elemento en el eje z        

p - z / p = scale correcto          

(aunque el scale es subjetivo, todo depende del diseño que desees)


✨[Ejemplo Rocket-parallax](https://github.com/RetaxMaster/rocket-parallax)

![Rocket parallax](https://media.giphy.com/media/fhst7TZlW8Y9SWiU3B/giphy.gif)



Videos para aclarar dudas sobre parallax.      
- [¿Qué es el efecto parallax css? ¿Cómo funciona? Tutorial con 3 ejemplos 🛠️](https://www.youtube.com/watch?v=QeRg4t3I2zc)  
- [This Simple Trick Makes Your Website 83% Better Looking](https://www.youtube.com/watch?v=mxHoPYFsTuk)


✨ Para no tener que escribir siempre width o height vs nos deja auto completar con solo escribir:  
- h100px  
- w100px  
- bxb = box-sizing: border-box

🎲

## 12. Transition property y duration

Recapitulando, las transformaciones ocurren instantáneamente, sin embargo, estos cambios no permiten crear una animación. La propiedad `transition` de CSS sirve para **agregar un intervalo de tiempo a un elemento HTML** para visualizar los cambios de una transformación.

```css
transition: [property] [duration] [timing-function] [delay];
```

-   `transition-property` (obligatoria)
-   `transition-duration` (obligatoria)
-   `transition-timing-function` (opcional)
-   `transition-delay` (opcional)

🔥 Propiedades obligatorias para una transición   

- **`transition-property`**: esta propiedad sirve para especificar el elemento HTML de la transición. Si la transición es para todos los elementos, su valor es `all`.
- **`transition-duration`**: esta propiedad sirve para agregar un intervalo de tiempo en segundos o milisegundos (1s = 1000ms).

```css
selector {
    transition: transform 100ms;
    transition: all 2s;
}
```


Código ejemplo:    

```html
<div class="container">
	<div class="box box1"></div>
	<div class="box box2"></div>
	<div class="box box3"></div>
    </div>
```

```css
.container {
	margin: 30px;
	width: 400px;
	height: 100px;
	display: flex;
	justify-content: space-between;

	background-color: aqua;
}

.container:hover .box {
	transform: scale(1.2);
}

.box {
	width: 100px;
	height: 100px;
} 

.box1 {
	transition: transform 500ms;

	background-color: darkslategrey;
}

.box2 {
	transition: transform 1s;
  
	background-color: hotpink;
}

.box3 {
	transition: transform 1.5s;

	background-color: springgreen;
}
```


- [Ejemplo sin transiciones.](https://codepen.io/Meowth01/pen/eYrgjPm)

- [Ejemplos](https://cricadev.github.io/Desktop/curso-transform-transition/transition-property/index.html)
- [Otros ejemplos](https://codepen.io/Janet11/pen/yLXojEa?editors=1100)
- [Otros ejemplos](https://bl4ky113.github.io/Platzi_CSS_Transforms_Transitions/transform_examples.html)

❄ Lecturas recomendadas

- [HTML Color Codes](http://htmlcolorcodes.com/)[
- [transition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

🎲

## 13. Transition timing function y delay

Recapitulando, una _timing function_ es la **representación de la progresión en función del tiempo de cada ciclo de una animación**. Representa la aceleración del elemento desde un punto A hasta un punto B.

-   **`linear`**: El elemento se mueve a una aceleración constante.
-   **`ease`**: Es el valor predeterminado si no se especifica. El elemento acelera inicialmente, pero presenta mucha desaceleración.
-   **`ease-in`**: El elemento empieza lento pero termina rápido.
-   **`ease-out`**: El elemento empieza rápido pero termina lento.
-   **`ease-in-out`**: Es la combinación de `ease-in` y `ease-out`. El elemento empieza lento, a medida que avanza va acelerándose, pero termina lento.
-   **`cubic-bezier`**: Se necesitan cuatro números, que representan dos puntos de control para formar la curva de aceleración deseada.

🔥 Propiedades opcionales para una transición

-   **`transition-timing-function`**: propiedad que establece una _timing function_ para especificar una forma de aceleración de la transición.

-   **`transition-delay`**: propiedad que establece un intervalo de tiempo desde la acción que desencadena la animación hasta su inicio.


Código ejemplo:    

```html
<div class="container">
	<div class="circle one"></div>
	<div class="circle two"></div>
	<div class="circle three"></div>
	<div class="circle four"></div>
	<div class="circle five"></div>
	<div class="circle six"></div>
</div>
```

```css
.container:hover .circle {
	transform: translateX(200px);
}

.circle {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}

.one {
	transition: transform 1s linear;
	transition-delay: 0.5s;
	background: darkslateblue;
}

.two {
	transition: transform 1s ease;
	transition-delay: 1s;
	background: aqua;
}

.three {
	transition: transform 1.5s ease-in;
	transition-delay: 1.5s;
	background: darkslateblue;
}

.four {
	transition: transform 2s ease-out;
	transition-delay: 2s;
	background: aqua;
}

.five {
	transition: transform 1s ease-in-out;
	transition-delay: 2.5s;
	background: darkslateblue;
}

.six {
	transition: transform 1s cubic-bezier(51,.72,.91,.26);
	transition-delay: 3s;
	background: aqua;
}
```


- [Ejemplo usando transition-timing-fuction.](https://codepen.io/Meowth01/pen/LYmxJzd)

- [Ejemplo usando transition-delay](https://codepen.io/Meowth01/pen/poVROdy).

- [Otro ejemplo](https://codepen.io/camilo315853/pen/KKWQyye?editors=1010)

- [Otro ejemplo](https://codepen.io/osoriodev/pen/poepaqa)


❄ Lecturas recomendadas

- [transition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

🎲

## 14. Movimiento impulsado por la acción

Los tips de **UX** son recomendaciones para que tus animaciones sean mejores para la experiencia de usuario. Estudiaremos tres, los cuales son:

-   Movimiento impulsado por la acción.
-   Tiempos de espera.
-   Problemas de parpadeo.

🔥 Movimiento impulsado por la acción

Al momento de crear una transición, el tiempo del punto A al punto B es el mismo. El movimiento impulsado por la acción consiste en **modificar los tiempos de la transición**, para que el tiempo de regreso (de B a A) sea mayor, para que la animación repose y no exista un movimiento abrupto.

Esto se consigue añadiendo la transición en el accionador de la animación y en el elemento, pero con diferentes tiempos. Ten en cuenta que la animación primero sucede con el evento.

```css
/* De A a B */
selector:hover {
    transition: transform 1s;
}

/* De B a A */
selector {
    transition: transform 1.5s;
}
```

Código ejemplo:      

```html
<div></div>
```

```css
div {
	width: 100px;
	height: 100px;
	transition: transform 1.8s linear;
	border-radius: 50%;
	background-color: darkslateblue;
}

div:hover {
	transform: translateX(200px);
	transition: transform 1s linear;
}
```


-   [Ejemplo empleando el movimiento impulsado por la acción](https://codepen.io/Meowth01/pen/bGMgmzo)


❄ Lecturas recomendadas

- [transition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

🎲

## 15. Tiempos de espera

En algunos menús desplegables, intentas seleccionar una opción pero se cierra el menú y debes hacer el mismo hasta seleccionar lo que deseas.

Los tiempos de espera solucionan este problema, se refiere a **usar una duración entre que el usuario deje de seleccionar el elemento y se cierre el menú**. Usar tiempos de espera ayuda al usuario a no frustrarse con los menús.

Utiliza la propiedad `transition-delay` para que los elementos esperen un tiempo determinado entre que el usuario deje de seleccionar el menú hasta que se cierre completamente.

Código ejemplo:    

```html
<ul class="nav">
	<li>
	    <a href="/">Woman</a>
	    <ul>
	        <li>
		        <a href="/">T-shirts</a>
		    </li>
	        <li>
		        <a href="/">Pants</a>
		    </li>
	        <li>
	            <a href="/">Shorts</a>
				<ul>
	                <li>
		                <a href="/">Size S</a>
		            </li>
	                <li>
		                <a href="/">Size M</a>
		            </li>
	                <li>
		                <a href="/">Size L</a>
		            </li>
	            </ul>
	        </li>
	    </ul>
	</li>
	<li>
		<a href="">Man</a>
	</li>
	<li>
		<a href="">Child</a>
	</li>
</ul>
```

```css
body {
	box-sizing: border-box;
	margin: 0;
} 

ul {
	list-style: none;
}

a {
	font-weight: 800;
	text-decoration: none;
	color: darkslateblue;
}

.nav {
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	width: 80vw;
}

.nav li {
	padding-top: 5px;
	width: 25vw;
	height: 25px;
	text-align: center;
	border: 1px solid darkslateblue;
	border-radius: 15px;
	background-color: black;
}

.nav li ul {
	position: absolute;
	margin-top: 10px;
	display: block;
	opacity: 0;
	transition: opacity 400ms;
	transition-delay: 300ms;
}

.nav li:hover > ul {
	opacity: 1;
	transition: opacity 400ms;
	transition-delay: 300ms;
}

.nav li ul li {
	position: relative;
	right: -30px;
}
```

- [Ejemplo usando tiempos de espera en menús desplegables](https://codepen.io/Meowth01/pen/BaxpGrV)

El ejemplo no es perfecto, usa tus conocimientos de CSS para crear tu propio menú desplegable con tiempos de espera. ¡Comparte tu trabajo en la sección de aportes!

_**Contribución creada por** Andrés Guano._

- [Otro ejemplo](https://codepen.io/joalbert-milano/pen/qBjmqxb)
- [Otro ejemplo](https://codepen.io/gonzocd/pen/RwVqRNe?editors=1100)

🎲

## 16. Problemas de parpadeo

El problema del parpadeo sucede cuando un **accionador no se encuentra en el lugar donde debería por la transformación**. Por ejemplo, al realizar una animación pasa lo siguiente:

-   Al mover el cursor sobre un elemento se traslada hacia la izquierda.
-   Al trasladarse, deja de estar el cursor sobre el elemento, por lo que vuelve a su posición inicial.
-   Al estar en su posición inicial, el cursor está sobre el elemento, entonces accionará nuevamente la transformación.

La animación entró en un **ciclo** que se observará como un parpadeo, porque las transiciones entre _hover_ y no _hover_ son rápidas.

```css
/* Mal */
div {
  width: 100px;
  height: 100px;
  background-color: purple;
}

div:hover {
  transform: translateX(45px);
}
```

-   [Ejemplo de parpadeo.](https://codepen.io/Meowth01/pen/LYmWNEg)

🔥 ¿Cómo solucionar este problema?

Para solucionar el problema de parpadeo, coloca el elemento que se transformará **dentro de un contenedor**. Después, utiliza el **elemento contenedor como el accionador** de la transformación del elemento. De esta manera, siempre se estará haciendo _hover_ en el sitio adecuado sin importar que el elemento cambie.

```css
/* Bien */
/* Elemento contenedor */
.container {
  width: 100px;
  height: 100px;
}

/* Elemento a transformar */
.item {
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-color: purple;
}

/* Trigger */ 
.container:hover .item {
  transform: translateX(45px);
}
```

-   [Ejemplo para solucionar el problema del parpadeo.](https://codepen.io/Meowth01/pen/oNdZxXQ)

🎲

## 17. Propiedades recomendadas y no recomendadas para animar

Al hacer animaciones debemos fijarnos que no sean demasiado costosas computacionalmente para que no parezcan inestables y poco fluidas.

Para ello, debemos comprender un concepto clave llamado: **el proceso de renderizado.**

Resulta que, como el navegador no entiende el código que hacemos, debe hacer una transformación de ese código para que finalmente pueda ser entendido y visualizado en la pantalla.

Esa transformación se hace en una serie de pasos como los que puedes ver a continuación:

![browser-rendering](https://i.postimg.cc/4yQ2wY7s/17-browser-renderin.webp)

Sin embargo, los pasos que nos interesan en este momento son los últimos 3: **Layout**, **Paint** y **Composite**. Cada uno cumple un papel muy importante, pero no todas las propiedades pasan por estos 3 procesos.

Si una propiedad debe pasar por el paso de Layout, obligatoriamente debe pasar por Paint y Composite también. Si una propiedad debe pasar por el paso de Paint, obligatoriamente debe pasar por Composite también. Pero, si una propiedad debe pasar por el paso de Composite, no debe pasar por ningún otro paso.

Con lo anterior, podemos darnos cuenta de que hay propiedades que requieren un costo mayor que otras al tener que pasar por más pasos. Puedes revisar el proceso de renderizado que realiza cada propiedad en esta página: [csstriggers](https://csstriggers.com/). Revisemos algunas de ellas:

-   **Propiedad height:** En cada uno de los motores de renderizado, podemos darnos cuenta por la imagen de abajo que requiere de los pasos de Layout, Paint y Composite, lo cual es bastante costoso.

![Height](https://i.postimg.cc/cHm5BK8Z/17-height.webp)

-   **Propiedad background-color:** Es una propiedad que no afecta el diseño (Layout) pero requiere una nueva capa de pintura (Paint), lo cual la hace una propiedad también costosa.

![background-color](https://i.postimg.cc/LXC3sj1q/17-background-color.webp)

-   **Propiedades transform y opacity:** Estas dos propiedades sólo requieren del paso de Composite, lo cual las hace muy baratas de animar. Si necesitas modificar propiedades como width y left (propiedades costosas), puedes reemplazarlas usando la propiedad transform para tratar de lograr el mismo efecto.

![transform](https://i.postimg.cc/TYrQV58s/17-transform.webp)

![opacity](https://i.postimg.cc/h4m0nQGG/17-opacity.webp)

Finalmente, si sabemos por cuáles pasos de renderizado pasa cada una de las propiedades, sabremos con exactitud cuáles propiedades son más costosas y menos recomendadas para animar (como `height`, `width` y `background-color`), como también, cuáles propiedades son menos costosas y más recomendadas para animar (como `transform` y `opacity`).

Te comparto esta lectura por si quieres conocer más a profundidad cómo trabaja el motor de cada navegador con cada uno de los pasos que describimos anteriormente: [Hacks.mozilla](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/)


📌 Extension para vscode de csstriggers que sirve mucho para estos casos.
- css-triggers

Mover algo cambiando left/top/etc es una mala practica, por eso es muy útil utilizar el translate. Es solo un ejemplo de que propiedades animar/transicionar

✨ Otra buena propiedad que se puede utilizar y con la cual se pueden obtener muy buenos efectos es **clip-path**  
Les comparto su [documentación](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

🎲

## 18. Aceleración de hardware y la propiedad will-change

La aceleración por hardware permite usar **componentes específicos de tu ordenador para quitar trabajo al procesador de tu dispositivo**. Uno de estos componentes puede ser una tarjeta gráfica, que puede usarse para renderizar o mostrar el contenido del navegador en tu pantalla.

🔥 Propiedades al animar

En la [clase anterior](https://platzi.com/clases/2336-transformaciones-transiciones-css/38126-propiedades-recomendadas-y-no-recomendadas-para-an/), aprendiste que existen propiedades que se deben animar y otras que no, esto se debe a un **proceso de renderizado**, este proceso consta de varios pasos: JavaScript, Style, Layout y Composite. Los tres últimos determinan si son adecuados para una animación, con respecto al rendimiento. Las propiedades recomendables son `opacity` y `transform`, porque estas solo necesitan del último paso.

🔥 Problemas de la aceleración por hardware

-   Las imágenes no cargan correctamente.
-   En los vídeos, la imagen o el sonido no se reproduce correctamente.
-   Algunas partes del navegador aparecen mal diseñadas.

🔥 Propiedad _will-change_

La propiedad `will-change` de CSS sirve para **anticipar y preparar los cambios de una transformación**. Este tipo de optimizaciones puede aumentar la capacidad de respuesta de una página al realizar un trabajo potencialmente costoso en rendimiento.

En el siguiente ejemplo, observa la transición con una propiedad no recomendable y luego agregando la propiedad `will-change`. ¿Notaste que la transición no es fluida? ¿Qué tanto tiembla el elemento?

Código ejemplo:  

```html
<div class="container">
	<button class="better"></button>
	<button class="worst"></button>
</div>
```

```css
button {
	width: 100px;
	height: 30px;

	background-color: aqua;
}

.better { /* Mejor */
	will-change: transform;
	transition: transform 500ms;
}

.better:hover {
	transform: translateY(5px);
}

.worst { /* Peor */
	will-change: margin-top;
	transition: margin-top 500ms;
}

.worst:hover {
	margin-top: 5px;
}
```

-   [Ejemplo comparativo para usar “will-change”.](https://codepen.io/Meowth01/pen/WNJpxRJ)

El elemento con la propiedad no recomendable tiembla un poco porque la animación no es fluido y requiere de más recursos, impactando en el rendimiento de la animación.

🔥🔥 Documentación de _will-change_

-   [Documentación de will change - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
-   [will-change Propiedad css para anticipar y preparar los cambios](https://escss.blogspot.com/2014/05/will-change-propiedad-css.html)

_**Contribución creada por** Andrés Guano, **con aportes de** Carlos Mazzaroli._


✨ Conclusiones de la clase

Hay algunas propiedades que no son buenas de _animar o transicionar_, pero esto porque pasa?, no todas las propiedades son lo mismo?  

La principal diferencia es que algunas propiedades tienen que lidiar con sus posiciones en la pantalla, lo que significa que el navegador tiene que modificar al DOM y mover algunos pixeles para que algunas propiedades funcionen, esto se debe a que el CSS `engine` funciona en 5 pasos:

-   **Parse**: Aquí solo identifica todas las etiquetas del `archivo.html`
-   **Style**: Aquí el `engine` agrega las etiquetas que vienen en el `documento.css`
-   **Layout**: Aquí el `engine` identifica donde debería aparecer un nodo en la pantalla (aquí es donde se lidia con pixeles, tamaño de monitor, etc.)
-   **Paint**: Aquí también se lidia con pixeles, ya que si un elemento tiene el background rojo, todos los pixeles dentro de ese elemento cambian.
-   **Composite & render**: Esto es la parte final, aquí ya solo se renderiza y se muestran todos los pixeles en la pantalla.


Sabiendo esto, si nuestros elementos a _transicionar_ lidian con pixeles y cambian de cierta forma el DOM, van a causar un mayor esfuerzo a nuestra computadora. Lo que se hace es trabajar con elementos que no dañen al DOM, como lo son `opacity` y `transform.`  

Por ultimo, porque nosotros somo buena onda y el navegador nos cae bien, le podemos decir que se ponga trucha y que empiece a prepararse para optimizar ciertas transformaciones que nosotros sabemos se van a tener que hacer, eso lo hacemos con la propiedad `will-change`


📌 Para que lo tengan en cuenta:

```css
transition: transform 500ms ease;
```

es lo mismo que decir:

```css
transition-property: transform;
transition-duration: 500ms;
transition-timing-function: ease;
```

🎲

## 19. Preferencias de movimiento reducido

Las preferencias de movimiento reducido consisten en que el usuario notifica al sistema que **prefiere eliminar o reemplazar las animaciones de la página web**.

Si tenemos animaciones que muestran un contenido específico después de un accionador de eventos (voltear la carta, mostrar algo, menús desplegables, etc.), esto provoca que el usuario no pueda verlo.

🔥 Media query “prefers-reduced-motion”

La _media query_ **`prefers-reduced-motion`** si el usuario tiene alguna opción para eliminar o reemplazar animaciones. Los dos posibles valores que recibe son:

-   **`no-preference`:** indica que el usuario no tiene preferencias para reducir las animaciones.
-   **`reduce`:** indica que el usuario tiene preferencias para reducir las animaciones.

```css
@media (prefers-reduced-motion: no-preference) {
    /* Código de animaciones */
}

/* Código sin animaciones */
```

En esta _media query_ nos permitirá colocar el código que tiene animaciones, y dejar afuera el código sin animaciones como forma de accesibilidad. De esta manera, la página web será **más accesible** a todo el mundo.

🔥🔥 Ejemplo de voltear la tarjeta de manera accesible

-   [Con animaciones.](https://codepen.io/Meowth01/pen/GRdWjRd)

-   [Sin animaciones, usando opacity.](https://codepen.io/Meowth01/pen/oNdZzge)

Código ejemplo:   

```html
<div class="container">
	<div class="front">Señálame</div>
	<div class="back">🤯</div>
</div>
```

```css
html, body{
	padding: 0;
	margin: 0;
	height: 100vh;
	display: grid;
	place-content: center;
	font-size: 1.5rem;
}

.container{
	width: 200px;
	height: 200px;
	cursor: pointer;
	position: relative;
}

.container div{
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
	position: absolute;
}

.front{
	background-color: aqua;
}

.back{
	background-color: grey;
	opacity: 0;
}

.container:hover .back{
	/* Propieadad agregada */
    opacity: 1;
}

@media (prefers-reduced-motion: no-preference) {
.container{
	transform-style: preserve-3d;
	transition: transform 1s;
}

.container div{
	backface-visibility: hidden;
}

.back{
	transform: rotateY(180deg);
	opacity: 1;
}

.container:hover{
	transform: rotateY(180deg);
}

}
```

-   [Ejemplo usando la media query “prefers-reduced-motion”](https://codepen.io/Meowth01/pen/JjvWRdW).


_**Contribución creada por** Andrés Guano._


✨ Un muy buen modo de hacer que un usuario que tenga preferencias de movimiento reducido tenga una buena experiencia de usuario es usar este pequeña pieza de CSS que permite hacer que todas las animaciones se reduzcan:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

```

Si, se que el !important parece raro pero es un excelente modo de anular cualquier animación en caso de que el usuario prefiera las animaciones reducidas sin tener que preocuparse por cada animación en específico que tenemos en nuestro sitio.  

Esto hace parte de un reset stylesheet que suelo usar bastante por si quieren verlo [A modern css reset/](https://piccalil.li/blog/a-modern-css-reset/)


✨ Windows 10 animaciones

Para activar o desactivar las animaciones en Windows 10 presionamos “Win+U” y buscamos “Mostrar animaciones en Windows”.

Esto para poder probar lo que estamos viendo en esta clase, cumple la misma función de “Reduce motion” que tenemos en MAC.

🎲

## 20. Continúa en el Curso de Animaciones con CSS

🎉 ¡Lo has logrado! 🙌 **Completaste todas las clases** del curso de **Transformaciones y Transiciones en CSS**.

❔ Si aún no queda claro algún tema, vuelve a revisar la clase o deja tu pregunta en la sección de preguntas.

🧾 **Realiza la prueba del curso** para recibir tu certificado y no olvides dejar tus 🌟 y tu comentario.

✅ Comparte tu certificado en [Twitter](https://twitter.com/teffcode), estaremos gustosos de ver tus resultados.

📚📕 Te recomiendo el libro [Val Head - Designer & Interface Animation Consultant](https://valhead.com/), es de pago, así que si puedes permitírtelo será una buena inversión.

👉 Las transformaciones y transiciones son una parte de las animaciones de CSS, así que continúa con el [Curso de Animaciones en CSS](https://platzi.com/cursos/animaciones-css/).

Y por sobre todo, **¡Nunca pares de aprender!** 💚

_Contribuciones del [curso](https://platzi.com/cursos/transformaciones-transiciones-css/) creadas por Andrés Guano_

❄ Lecturas recomendadas

- [Curso de Animaciones con CSS - Platzi](https://platzi.com/cursos/animaciones-css-practico/)[
- [Curso de Animaciones con CSS - Platzi](https://platzi.com/cursos/animaciones-css/)[
- [Val Head - Designer & Interface Animation Consultant](http://valhead.com/)

- Recomiendo el [E-book CSS Animations 101](https://cssanimation.rocks/css-animation-101/) es gratis.  



 ✨ [Video](https://www.youtube.com/watch?v=vCAT-yH08GQ) sobre cómo usar transiciones para crear un formulario animado. Es básicamente un formulario que inicia siendo un circulito y se abre dando una vuelta al hacerle click a un botón, por si a alguien le interesa aquí se los dejo 👀

🎲

## Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Patrick Jeremy Rodriguez Sandoval
- Cecilia Riveros
- Fernando Quinteros Gutierrez
- Andrés Guano
- Carlos Mazzaroli

</details>

🎲

## Examen:     
<details>
  <summary>Haz click aquí para ver los resultados 👀</summary>

  <br/>

1. Cuál de los siguientes valores no hacen parte de las funciones de aceleración:
	- ease-in
	- ease
	- ease-in-out
	- ✅ lineal


2. El potencial de la animación para comunicarse, conectarse, llamar la atención y reducir cosas como la carga cognitiva, sienta las bases de lo que la animación puede ofrecer al diseño de interfaces
	- ✅ Verdadero


3. Al hacer el efecto Parallax, el fondo parece moverse a una velocidad distinta que el contenido. Esto se logra colocando:
	- ✅ Elementos uno encima del otro en el eje Z. También conocido como el contexto de apilamiento.


4. transform: translate(20px, -20px) hace que:
	- ✅ Un elemento se mueva 20px hacia la derecha y 20px hacia arriba


5. Las propiedades indispensables para hacer una transición son:
	- 🟣 transition-property y transition-duration


6. ¿Qué hace una transformación?
	- 🟣 Mueve o cambia la apariencia de un elemento


7. Un valor X positivo mueve el elemento hacia:
	- ✅ La derecha


8. ¿Qué hace una transición?
	- 🟣 Hace que el elemento cambie de forma suave y gradual de un estado a otro


9. transition-delay es:
	- ✅ El tiempo que tarda en comenzar la transición


10. Un valor Y positivo mueve el elemento hacia:
	- ✅ Abajo


11. Las pseudo-clases en las animaciones nos permiten:
	- ✅ Accionar/Detonar la transformación o transición deseada


12. ¿Con qué propiedad podemos especificar las funciones de aceleración que están disponibles para nosotros en CSS?
	- 🟣 transition-timing-function


13. Las propiedades transform y opacity son:
	- ✅ Recomendadas para animar


14. cubic-bezier(n, n, n, n) necesita 4 números que representan:
	- 🟣 2 puntos de control para formar la curva de aceleración deseada


15. La propiedad will-change nos permite:
	- ✅ Optimizar las animaciones al permitir que el navegador sepa qué propiedades y elementos están a punto de ser animados.

</details>

🎲

## Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 👈 ☝    
- 😊 👈👀 😌 😍      
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣       
- ✔ ➕ ↕ ↔ ⬅ ✅ ▶ ❌              
- 🧰 ⛓ 💡             
- 🔅 🔆 🌚 🌗         

</details>

