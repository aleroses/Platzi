# Curso de Diseño Web con CSS Grid y Flexbox

> **Estefany Aguilar** - [Desarrolladora Frontend en La Haus](https://platzi.com/profesores/teffcode/)  
> **@teffcode** en Twitter - GitHub - Instagram

## 1. Todo sobre el diseño de páginas web acaba de cambiar

✨ En este curso:     
- ¿Cuándo usar Flexbox y CSS Grid?
- Todo sobre Layouts
- Uso de Figma
- Tendencias de UI/UX
- Futuro de CSS Grid


El diseño gráfico en la web ha evolucionado significativamente dúrate los últimos 25 años
    -   Inicialmente se tenía una paleta de 216 colores
    -   Las tipografías eran limitadas
Sin embargo, con la llegada y avance de CSS ha mejorado la web
    -   CSS Grid ⇒ nueva tecnología poderosa para crear layouts


🔥 CSS Grid   
Desde que CSS Grid se lanzó en marzo de 2017, tenemos, por fin, una tecnología lo suficientemente potente como para permitirnos ser realmente creativos con el diseño.   


**Consejos de @teffcode**   
1.  Absorbe, prueba y juega con las nuevas características de CSS
2.  No construir los mismos diseños antiguos con las mismas tecnologías antiguas
3.  Descubre todo lo que ha cambiado
4.  No asumas que ya sabemos en qué se convertirá la web. O que ya lo hemos dominado todo.

✨ No existe una forma “correcta” de hacer los diseños. Todo sobre el diseño web acaba de cambiar.


[Slides Clase-01](https://www.canva.com/design/DAEQFpuHLco/nb-w5JtFmlNT8jtGGPsVmw/view?utm_content=DAEQFpuHLco&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 2. La importancia de recordar las herramientas existentes

-   [Flexbox](https://flexboxfroggy.com/#es)
-   [Css Grid](https://cssgridgarden.com/)
-   [Css Dinner](https://flukeout.github.io/)

[Slides Clase-02](https://www.canva.com/design/DAEQFDCuuD8/fLp8L0dB1yRslr8m3pMPMA/view?utm_content=DAEQFDCuuD8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 3. Flujo normal del documento: display block, inline e inline-block

🔥 **Display**  
Verbo: desplegar, colocar a la vista, exhibir, lucir, mostrar, presentar. Básicamente define un tipo de visualización de un elemento.

**Flujo normal del documento**     
Como se comportan los elementos HTML por defecto

✨ Cuando usamos `display: flex;` o `display: grid;` Nos centramos más en los valores y no en la propiedad por si sola.

🔥🔥 **Block and Inline elements**

-   Block: Se extienden ocupando todo el espacio disponible para ellos.
-   Inline: Son como palabras en una oración, una después de otra. Se separan por medio de un espacio en blanco entre ellos.

> El comportamiento de los elementos en bloque y en línea es fundamental para CSS y el hecho de que un documento HTML marcado correctamente será legible por defecto. Este diseño se conoce como “Diseño de bloque y en línea” o “Flujo normal” porque esta es la forma en que los elementos se presentan si no les hacemos nada más.

🔥🔥 Inner y Outer (Interna y Externa)    

-   Block e Inline definen:
    -   Valor externo de visualización
    -   Valor interno de visualización

Lo que significa es que cuando usamos `display: grid;` estamos diciendo `display: block-grid;`

✨ Un elemento que tenga los atributos de **bloque** puede establecer:    
    -   Ancho
    -   Alto
    -   Padding
    -   Margin
    -   Estirarse en todo el espacio
✨Sin embargo, los hijos de un contenedor `display: grid;` se les da un valor interno de grid.    

Esta forma de pensar es útil porque cuando usamos `display: inline-flex;` pensaremos que el primer valor es el comportamiento externo y el segundo valor es el interno del contenedor.    

📌 Siempre volveremos al **flujo normal del documento**
    -   Si trabajamos de esta forma obtendremos:
        -   Flujo más agradable y legible
        -   CSS mucho más fácil
        -   Menos probable de tener problemas de accesibilidad (ya que está trabajando con el orden de los documentos que es exactamente lo que está haciendo un lector de pantalla o una persona que revisa el documento).


📌 **RESUMEN:** El flujo normal del documento sera la forma en que se mostraran los elementos si no modificamos nada, se basan en block e inline. Ambas propiedades se usan a lo largo del desarrollo como cuando usamos `display: grid;` o `display: inline-grid;` estarás marcando de alguna forma si el comportamiento externo es de bloque o en línea además que en la segunda propiedad indicas que comportamiento interno tendrá.

En el caso de `display: inline-flex; externo-interno;` 👀 **`inline` es el comportamiento externo del contenedor ante todo el HTML, mientras que `flex` es el comportamiento interno del contenedor**. Lo mismo pasa con `inline-grid` y también con grid y flex (que en realidad son block-grid y block-flex).  

📌 Primer valor: Comportamiento externo de un contenedor.      
📌 Segundo valor: Comportamiento interno de un contendor.   

[Slides Clase-03](https://www.canva.com/design/DAEQhmEDz9Q/h2_nIuVWdck7j14uBhcz2Q/view?utm_content=DAEQhmEDz9Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 4. Contextos de formato: Formato de Contexto de Bloque (BFC)

🔥 **Block formatting context (BFC)**       
El Formato de contexto de Bloque es un mini layout interno dentro de otro layout, que se comporta de manera independiente a como se comporta el resto de la página.    

Si bien maneja la estructura interna de un elemento, utilizando position se puede sacar al elemento del flujo normal del documento, haciendo que este se reordene de una forma distinta.

> ![Overflow - auto](https://i.postimg.cc/m2Mw6nVC/nota.png)

✨ Esto funciona porque la propiedad `overflow` crea un BFC si su valor es diferente al inicial (VISIBLE).    

Y una de las características de BFC es que contiene flotantes!     

🔥🔥 ¿Qué más crea un BFC?      

-   Utilizar `position: absolute` o `position: fixed`   
	- Con esto sacamos el contenedor del flujo normal del documento.  
-   El uso de  
    -   `display: inline-block`
    -   `display: table-cell`
    -   `display: table-caption`



🔥🔥 **¿Que pasa con flexbox y grid?**        
Ambos formatos nacieron con la intensión de facilitar el diseño de la página. Mientras flexbox se basa en un formato donde se le da flexibilidad a los elementos y al contenedor, grid adquiere un formato de cuadricula **realmente fácil de ordenar**      


Flexbox y CSS Grid también crean algo así como un BFC, excepto que se describen como:      

🔥 Flexbox      
-   Contexto de formato flexible: El elemento está participando en un diseño flexible.
-   Se basa en un formato donde se le da flexibilidad a los elementos y al contenedor

🔥 CSS Grid      
-   Contexto de formato de cuadricula: El elemento está participando en un diseño de cuadricula
-   Adquiere un formato de cuadricula realmente fácil de ordenar

🔥🔥 **¿display: inline-block?**       
Crea un BFC y su hermano `display: flow-root`. `display: inline-block` da un BFC en una caja en línea y consta en una fusión de ambas partes, donde al igual que inline-flex e inline-block, externamente el elemento se sitúa de forma inline, pero por dentro puede adoptar propiedades block como width, left, etc.    

🔥🔥 **Sobre flow-root**     
Da un BFC en una caja de bloque. Entre sus características resetea el flujo del documento, permitiendo posicionar correctamente los elementos float (que, al ser float, se descolocan del flujo, y al resetearlo lo vuelve a ubicar) esto es genial para casos donde tienes que usar elementos flotantes y no quieres que se te desordene toda la caja.    


📌 Todo se trabajo bajo los conceptos de block e inline y se explica el diseño de CSS bajo estos dos conceptos.    

📌 Podemos controlar el tipo de cuadro que se genera utilizando la propiedad `display`         

**RESUMEN:** BFC (Block Formatting Context) es un pequeño layout el cual esta aparte de todo el documento. Este mismo se puede generar a partir de la propiedad position, pero cada una tiene su característica de manejar el contexto de formato. Diferentes elementos tienen su contexto de bloque.       

Aquí dejo más documentación al respecto  
- [Conoce flow-root la solución al desborde de un elemento con float/](https://www.programandoamedianoche.com/2018/05/conoce-flow-root-la-solucion-al-desborde-de-un-elemento-con-float/)  
- [Display flow-root para limpiar floats](https://www.campusmvp.es/recursos/post/display-flow-root-para-limpiar-floats-css.aspx)    


[Slides Clase-04](https://www.canva.com/design/DAEQhjn-ddU/E28ZQQKmU5t6nC2QS8mbSw/view?utm_content=DAEQhjn-ddU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)    

🎲

## 5. Posicionamiento + Dinámica: ¿Cómo se vería?  

🔥 **mix-blend-mode**       

La propiedad mix-blend-mode define cómo debe combinarse el contenido de un elemento con su fondo.        

- Todo son cuadros en nuestros sitios web
- Podemos controlar el tipo de cuadro que se genera utilizando la propiedad display

🔥🔥 Positions     
Nos ayudan a manipular la ubicación de un elemento     
    -   En la parte superior
    -   Uno alado de otro
    -   Uno encima de otro ⇒ Estaremos hablando de **contexto de apilamiento**
    
> “El contexto de apilamiento es la conceptualización tridimensional de los elementos HTML a lo largo de un eje-Z imaginario relativo al usuario que se asume está de cara al viewport o página web. Los elementos HTML ocupan este espacio por orden de prioridad basado en sus atributos.”

✨ Cuando trabajamos con la web debemos trabajar con 3 ejes:     
     -   Ejes X & Y
     -   Eje Z imaginario: Desde la pantalla hasta la vista del usuario
		-   Cajas que se van sobreponiendo
        -   Ejemplo 👀 Un modal se pone encima de todo nuestro sitio web.

> ![Ejes](https://i.postimg.cc/XYhPXmJ1/5-ejes.jpg)
De esta forma, entre más cerca este el elemento al ojo humano, mayor prioridad tendrá.     

🔥🔥 El contexto de apilamiento es como una pila que se va ubicando por orden de prioridad. No todos los elementos pueden crearlo.   

Un contexto de apilamiento es formado, en cualquier lugar del documento, por cualquier elemento que:       
    -   Sea el elemento raíz (HTML)
    -   Tenga posición (absoluta o relativa) con un valor `z-index` distinto de `auto`
    -   `Position: fixed`
    -   Un elemento flex con un valor `z-index` distinto de `auto`, que sera el elemento padre `display: flex/inline-flex`
    -   Sean elementos con un valor `opacity` menor de 1
    -   Elementos con un valor `transform` distinto de `none`
    -   Elementos con un valor `mix-blend-mode` distinto de `normal`
    -   Elementos con un valor `filter` distinto de `none`
    -   Elementos con un valor `perspective` distinto de `none`
    -   Elementos con un valor `isolation` igual a `isolate`
    -   Especifican cualquier atributo superior en `will-change` incluso si no especificas valores para estos atributos directamente
    -   Elementos con un valor `-webkit-overflow-scrolling` igual a `touch`


✨ Documentación del [Contexto de apilamiento](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento)       

> ![Apilamiento](https://i.postimg.cc/90P39h0Y/5-apilamiento.jpg)
Ejemplo: El z-index **Mayor** se sobrepone, siempre y cuando pertenezcan al mismo bloque o contenedor. 

-   DIV #4 es renderizado debajo de DIV #1 porque el z-index (5) de DIV #1 es válido dentro del contexto de apilamiento del elemento raíz, mientras que el z-index (6) de DIV #4 es válido dentro del contexto de apilamiento de DIV #3. Así que DIV #4 está debajo de DIV #1, porque DIV #4 pertenece a DIV #3, que tiene un valor z-index menor.
    
-   Por la misma razón DIV #2 (z-index 2) es renderizado bajo DIV#5 (z-index 1) porqué DIV #5 pertenece a DIV #3, que tiene un valor z-index mayor.
    
-   El valor z-index de DIV #3 es 4, pero este valor es independiente del z-index de DIV #4, DIV #5 and DIV #6, porque pertenece a un contexto de apilamiento diferente.

Revisar dinámica de la clase 👀         

[Slides Clase-05](https://www.canva.com/design/DAEQhmoxgqg/yApl4zSE9ricNZ4u9qNnYA/view?utm_content=DAEQhmoxgqg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 6. Diferencias entre Flexbox y CSS Grid

-   🔥 Flexbox          
    -   Es un método que puede ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación
    -   Es unidimensional ⇒ Una sola dirección
    - Nos ayuda a distribuir los elementos y alinearlos, es **unidireccional**, eso quiere decir que solo va en un a dirección, va vertical o va en horizontal.

	Las propiedades que tiene un contenedor padre en flexbox son:        
	
	-   display
	-   flex-direction
	-   flex-wrap
	-   flex-flow
	-   justify-content
	-   align-items
	-   align-content
	
	Las propiedades de elementos hijos o items son:        
	
	-   order
	-   floex-grow
	-   flex-shrink
	-   flex-basis
	-   flex
	-   align-self


-   🔥 CSS Grid        
    -   Es un sistema de diseño que permite al autor alinear elementos en columnas y filas
    -   Es bidimensional
    - Nos permite alinear elementos en filas y columnas, es bidimensional, podemos alinear elementos en dos direcciones.

	Las propiedades de contenedores padre son:   
	
	-   display
	-   grid-template
	-   gap
	-   justify-items
	-   align-items
	-   justify-content
	-   align-content
	
	Propiedades de elementos hijo o items son:     
	
	-   grid-column
	-   grid-row
	-   grid-area
	-   justify-self
	-   align-self

**RESUMEN:** La principal diferencia entre flexbox y Grid es la capacidad de dimensiones que cuenta cada uno flexbox es unidimensional y CSS Grid es bidimensional.     

✨ Tres guías ( completas):     
-   [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [Learn css grid](https://learncssgrid.com/)
-   [Los apuntes de Majo en drive](https://drive.google.com/file/d/1WqIw3tPS6gNhEnma7iHl-PEfByKSIYGK/view)


[Slides Clase-06](https://www.canva.com/design/DAEQipHoNps/2pZaCBcJ6umcGrs43cNLIg/watch?utm_content=DAEQipHoNps&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 7. Similitudes entre Flexbox y CSS Grid

**Flexbox y CSS Grid tienen 2 similitudes:**      
    1. Relaciones Padres e hijos inmediatos
    2. Ejes de alineamiento

✨ Relaciones Padres e hijos inmediatos     

-   Tantos los padres tienen hijos, pero los hijos también pueden ser padres
-   Si se define correctamente que contenedores serán padre, hijos o ambos entonces sera más sencillo definir la técnica
-   Segun a eso tendremos propiedades para
    -   Padres
    -   Hijos

✨ Ejes de alineamiento        
-   CSS siempre tienen dos axis o ejes
    
    1.  Justify
        -   inline axis (row axis)
    2.  Align
        -   Block axis (column axis)
    
    -   Las propiedades tienen un inicio (start) y un final (end)
        -   Por defecto de izquierda a derecha para inline
        -   Por defecto de arriba a abajo para block

**RESUMEN:** Flexbox y CSS Grid comparten dos características las relaciones padre e hijo y los ejes de alineamiento que tiene cada una       

[Slides Clase-07](https://www.canva.com/design/DAEQigPkB18/WsdAshZB7AcMUsEfjF9Drg/watch?utm_content=DAEQigPkB18&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 8. Puedo trabajar con Flexbox y CSS Grid al tiempo?

✨ Si, pero va a depender del diseño que tengamos o necesitemos, por ejemplo, esta pantalla, si identificamos los elementos    
    
![1.png](https://i.postimg.cc/XqZSYzyn/8-ejemplo01.jpg)
-   Podremos observar que necesitaremos un contenedor     

![2.png](https://i.postimg.cc/Ss1bqhRZ/8-ejemplo02.jpg)
-   Este contenedor tendrá hijos, los cuales podemos definir por dentro con flexbox     

![4.png](https://i.postimg.cc/Px5nBxXp/8-ejemplo03.jpg)


[Slides Clase-08](https://www.canva.com/design/DAEQiq8ZCCk/8AFV-DehwDyKfK4rvn-8mA/view?utm_content=DAEQiq8ZCCk&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 9. Dinámica: ¿Qué usarías? (Parte 1)

**Primer caso:**         
![Grid or Flexbox](https://i.postimg.cc/g0WqNLzp/9-grid-or-flexbox.jpg)
-   **CSS-Grid**: Si bien hay un solo eje de trabajo, el sistema de grillas me puede ayudar a acomodar los elementos en celdas con tamaños específicos y ayudarme a manejar mejor y de forma simple el responsive. Si utilizara FlexBox me vería obligado a agregar contenedores hijos en el medio y para alinearlos por dentro tendría que volverlos también contendores FlexBox para conseguir el mismo resultado visual.

---

**Segundo caso:**     
![Grid or Flexbox](https://i.postimg.cc/g0WqNLzp/9-grid-or-flexbox.jpg)
-   **CSS-Grid**: una grilla de tres por tres, donde las primeras dos filas estarán ocupadas de punta a punta por el header y el texto y la última fila ocuparían las dos últimas columnas cada call to action. Si hubiera que trabajar responsive se haría muy fácil de modificar trabajando con grid-area.


[Slides Clase-09](https://www.canva.com/design/DAEP4guzK4E/YOOvFsNswxXdG83x7O4LNQ/view?utm_content=DAEP4guzK4E&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 10. Dinámica: ¿Qué usarías? (Parte 2) + Reto

![Reto](https://i.postimg.cc/15Lj1Kc1/10-reto.jpg)        
[Resultado](https://codepen.io/Meowth01/pen/oNqKRpb)

[Slides Clase-10](https://www.canva.com/design/DAEPy-G9uoY/wiPhWBmw2HDph6XhKMDwTw/view?utm_content=DAEPy-G9uoY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

### Notas y aportes
- Fernando Quinteros Gutierrez
- John Cardenas
- Nazareno Aznar Altamiranda
- Gonzalo Ceron Denetro

🔥 ❄ ✨ 📌 🎲 🤴🦁 🧔🐯 🧰 👀

Sería cool primero hacer un ejemplo practico y luego definir el tema.