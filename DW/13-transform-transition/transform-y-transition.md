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
🔥 Pseudos-elementos

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

📌 OJO esta propiedad debe estar puesta en el objeto; no en la la pseudoclase 😃

-   [Ejemplo usando transform-origin con diferentes transformaciones](https://codepen.io/Meowth01/pen/poVbjVN)

- [Ejemplo resumen aplicado de las propiedades 2D de transformación](https://codepen.io/AMillanir/pen/qBmWWoO)


❄ Lecturas recomendadas

- [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

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

- [Ejemplo cambiando la perspectiva.](https://codepen.io/Meowth01/pen/abGZvMK)


❄ Lecturas recomendadas

- [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

🎲

## 9. Backface visibility

La propiedad **`backface-visibility`** de CSS permite **mostrar la cara posterior de un elemento**. Esta propiedad recibe dos valores: `visible` (visible) y `hidden` (oculto); por defecto, su valor es `visible`.

```css
selector {
    backface-visibility: visible;
    backface-visibility: hidden;
}
```

La cara posterior de un elemento siempre tiene un fondo transparente, por lo que al ser visible y realizar una transformación en **un solo eje**, mostrará un **efecto de imagen espejo**. Mira la siguiente imagen y observa cómo Alicia cambia de lugar.

![Representación de la propiedad backfase-visibility](https://i.postimg.cc/9FnV2HM8/9-visible.png)

En cambio, si el valor es `hidden` no mostrará contenido. Con esto podemos realizar que un elemento se muestre al ocultarse otro, como un **efecto de voltear una carta**.

🔥 Crea el efecto de voltear una carta con _backface-visibility_

Como punto inicial, necesitarás un elemento padre con dos elementos hijos, los cuales representarán la cara frontal y posterior de la carta. Te dejo este código para que empieces, aunque no es obligatorio, ya que se hablará de manera general en la explicación.

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

3.  Al elemento que deba estar en la vista posterior, **rótalo 180 grados sobre el eje X o Y** dependiendo de lo que esperes. Observarás el efecto espejo, pero aún no está listo.

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

## 11. 

🎲

🎲🎲🎲🎲🎲🎲🎲🎲🎲
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉 ⭐ ❓   
- 🤴🦁 🧔🐯 👀 👉 👈 ☝
- 😊 👈👀 😌 😍           
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣       
- ✔ ➕ ↕ ↔ ⬅ ✅ ▶               
- 🧰 ⛓ 💡             
- 🔅 🔆 🌚 🌗 
### Notas / Aportes
<details>
	<summary>Haz clic para ver a los contribuidores 👀</summary>
	<br/>
	
**🔥 Team:**    
- Patrick Jeremy Rodriguez Sandoval
- Cecilia Riveros
- Fernando Quinteros Gutierrez
- Andrés Guano
- Carlos Mazzaroli.

</details>


</details>

### Emojis:  
<details>
  <summary>Haz click aquí para ver los emojis 👀</summary>

  <br/>

**🔥 Emojis:**        
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉     
- 🤴🦁 🧔🐯  👀 👉 😊            
- 🟥 ⬜ ⬛ ◼ ◻ 🔷 🔶 🔻 🔺 🔴 🟣       
- ✔ ➕ ↕ ↔ ⬅ ✅ ▶               
- 🧰 ⛓ 💡             
- 🔅 🔆 🌚 🌗         

</details>

