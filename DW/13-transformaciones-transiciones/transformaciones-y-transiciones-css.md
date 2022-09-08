# Curso de Transformaciones y Transiciones en CSS
> **Estefany Aguilar** - [Desarrolladora Frontend en La Haus](https://platzi.com/profesores/teffcode/)      
**@teffcode** en Twitter - GitHub - Instagram

[Link del Curso](https://platzi.com/cursos/transformaciones-transiciones-css/)

## 1. 5 razones para usar animaciones en la web

En este curso implementaremos algo muy divertido para aprender al hablar de una película muy famosa, donde la protagonista se pregunta el por qué de varias cosas.

Justamente ese nuestro punto de partida **¿Por qué hacer animaciones?**

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

🔥🔥 Lecturas recomendadas    

- [Clases del Curso de Frontend Developer - Platzi](https://platzi.com/clases/frontend-developer/)
- [Curso de CSS Grid Layout [2021] - Platzi](https://platzi.com/cursos/css-grid-layout/)
- [Curso de Flexbox y CSS Grid [2021] - Platzi](https://platzi.com/cursos/flexbox-css-grid/)
- [Cursos de Estefany Aguilar en Platzi](https://platzi.com/profesores/teffcode/)

🎲

## Propiedades para crear animaciones con CSS y propiedades animables

🔥 **Propiedades animables**

🔥🔥 **Transform**  

La propiedad `transform` sirve para **transformar un elemento HTML mediante funciones**. Estas funciones permitirán trasladar, escalar, rotar o torcer a lo largo, ancho y profundidad del elemento.

Sin embargo, el usuario mira el resultado final de esta transformación. Por ejemplo, todos mirarán a Alicia pequeña, y no sabrán que realmente era grande. Por eso, esta propiedad está relacionada con **`transition`** para crear una animación.

- [Transform Cheat Sheet](https://static.platzi.com/media/public/uploads/transformaciones_en_2d_y_3d_d712736c-5368-4c9b-8827-331dc347d536.pdf)

**Transformaciones en 2D y 3 **          
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
- transform-style perspective 
- perspective-origin 
- backface-visibility


⭐ Propiedad · transform  
- Sintaxis con 1 valor:     
`transform: none | transform-functions | initial | inherit;`

- Sintaxis con más de 1 valor:     
`transform: transform-functions transform-functions;`

 ⭐⭐ **transform-function**

|Tipo    | Trasladar   | Escalar | Rotar   | Inclinar| Matriz | Perspectiva|
|--------|-------------|---------|---------|-------- |--------|------------|
	|Múltiple|translate()  |scale()  |rotate() | skew()  |matrix()|perspective()| 
|Eje X   |translateX() |scaleX() |rotateX()| skewX() |        |             |
|Eje Y   |translateY() |scaleY() |rotateY()| skewY() |        |             |
|Eje Z   |translateZ() |scaleZ() |rotateZ()|         |        |             |
	|3D      |translate3d()|scale3d()|rotate3d()| matr   |ix3d()  |             |


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
`transform-origin: x-offset | offset-keyword | initial | inherit; `

- Sintaxis con 2 valores: 
`transform-origin: x-offset y-offset;` 
`transform-origin: y-offset x-offset-keyword;`
`transform-origin: x-offset-keyword y-offset;`
`transform-origin: x-offset-keyword y-offset-keyword;`
`transform-origin: y-offset-keyword x-offset-keyword;`

- Sintaxis con 3 valores: 
`transform-origin: x-offset y-offset z-offset;`
`transform-origin: y-offset x-offset-keyword z-offset;`
`transform-origin: x-offset-keyword y-offset z-offset;`
`transform-origin: x-offset-keyword y-offset-keyword z-offset;` 
`transform-origin: y-offset-keyword x-offset-keyword z-offset;`


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
`transform-style: flat | preserve-3d | initial | inherit;`

⭐⭐ Valores   

|Tipo  | Valor |
|------|-------|
|2D    |flat   |
|3D    |preserve-3d|


⭐ Propiedad · perspective    

- Sintaxis con 1 valor:    
`perspective: length | none;`  


⭐⭐ Valores      

|Tipo     |Se puede escribir con|
|---------|---------------------|
|Keyword  |none                 | 
| 3D      |`<length>o un <percentage>`|


⭐ Propiedad · perspective-origin    

- Sintaxis con 1 valor: 
`perspective-origin: x-axis | y-axis | initial | inherit; `

- Sintaxis con 2 valores: 
`perspective-origin: x-axis y-axis;`

⭐⭐ Valores      

|Tipo     |Se puede escribir con| 
|---------|----------------------|
|Eje X    | left, right, center, `<length>` o un `<percentage>`| 
|Eje Y    | top, bottom, center, `<length>` o un `<percentage>`| 


⭐Propiedad · backface-visibility     

- Sintaxis con 1 valor:     
`backface-visibility: visible | hidden | initial | inherit;`

⭐⭐ Valores   

|Tipo      |Se puede escribir con| 
|----------|---------------------| 
|Visible   | visible             |
|No visible| hidden              |


---
🔥🔥 **Transition**      
Nos permite ir de un lado a otro, no puede haber un cambio en la transición en el medio.

> ![Transition y transform](https://media1.giphy.com/media/gCSOFQybTbM3pome6c/giphy.gif?cid=790b76110cbeb81a6b9b97187ae16e81b578ebfbea7452bf&rid=giphy.gif&ct=g)

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
`transition: initial | inherit;`

- Sintaxis con más de 1 valor:     
`transition: [property] [duration] [timing-function] [delay];`

 
⭐ Propiedad · transition-property 

- Sintaxis con 1 valor:     
`transition-property: none | all | | initial | inherit;`

Al final te comparto la lista de propiedades de CSS que son transicionables.



⭐ Propiedad · transition-duration  

- Sintaxis con 1 valor:     
`transition-duration: | initial | inherit;`

El tiempo puede estar dado en segundos (s) o milisegundos (ms).


⭐ Propiedad · transition-timing-function

- Sintaxis con 1 valor:     
`transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int, start | end) | cubicbezier(n, n, n, n) | initial | inherit;`


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
`transition-delay: time | initial | inherit;`


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
`animation: initial | inherit;`

- Sintaxis con más de 1 valor:     
`animation: [name] [duration] [timing-function] [delay] [iterationcount] [direction] [fill-mode] [play-state];`  


⭐ Propiedad · animation-name 

- Sintaxis con 1 valor:     
`animation-name: keyframename | none | initial | inherit;`


⭐ Propiedad · animation-duration

- Sintaxis con 1 valor:     
`animation-duration: time | initial | inherit;`


⭐ Propiedad · animation-timing-function

- Sintaxis con 1 valor:     
`animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(int, start | end) | cubicbezier(n, n, n, n) | initial | inherit;`

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
`animation-delay: | initial | inherit;`

El tiempo puede estar dado en segundos (s) o milisegundos (ms).


⭐ Propiedad · animation-iteration-count   

- Sintaxis con 1 valor:     
`animation-iteration-count: | infinite | initial | inherit;`


⭐ Propiedad · animation-direction  

- Sintaxis con 1 valor:     
`animation-direction: normal | reverse | alternate | alternatereverse | initial | inherit;`


⭐ Propiedad · animation-fill-mode

- Sintaxis con 1 valor:     
`animation-fill-mode: none | forwards | backwards | both | initial | inherit;`

⭐ Propiedad · animation-play-state

- Sintaxis con 1 valor:     
`animation-play-state: paused | running | initial | inherit;`

---

**Resumen:**     

✨ **Transformación del HTML** Se refiere a transformar valores como el tamaño, posición, escala, etc.

✨ **Animable** significa que sus valores cambian gradualmente durante un periodo de tiempo determinado.


❄ **En este curso nos enfocaremos solamente en `transition` y `transform`**, después seguir con el [Curso de Animaciones con CSS](https://platzi.com/cursos/animaciones-css/), en el cual se abarcará la propiedad “animation”.

🎲

## 3. 


🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲
- 🔥 ❄ ✨ 📌 🎲 🔍 🎉 ⭐   
- 🤴🦁 🧔🐯  👀 👉 😊            
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

