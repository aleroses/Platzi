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
**Ejemplo:** El z-index **Mayor** se sobrepone, siempre y cuando pertenezcan al mismo bloque o contenedor. 

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

✨ Tres guías (completas):     
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

## 9. Dinámica: ¿Qué usarías? (Parte 1

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

## 11. ¿Cuándo usar Flexbox y cuándo usar CSS Grid?

-   Flexbox
	Flexbox es mas apropiado para los componentes de una aplicación y diseños de pequeña escala

-   Grid
	CSS Grid esta diseñado para diseños de mayor escala


✨ Al momento de implementar, crear tareas para la creación de componentes en este ejemplo serían:     
1. Crear la grid principal  
2. Crear la grid de los hijos  
3. Crear 3 tipos de cards  
4. Ubicar cards   


✨ Mis 3 mejores amigos son:      
1. El Inspector    
2. La Practica    
3. La Paciencia  

[Slides Clase-11](https://www.canva.com/design/DAEQjFaoxe4/v9SlBO-AWQ0XmbI8AocYPw/view?utm_content=DAEQjFaoxe4&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 12. ¿Qué son los Modern CSS Layouts?

🔥 Lo primero que debemos saber es: ¿Qué es Layout?       
-   **Layout** viene del inglés el cual significa diseño
-   Ubicar tus cajas en el lugar que elijas con respecto a la ventana principal y el resto de cajas


🔥 Lo segundo que debemos hacer es: ¿Qué significa que sea moderno?    
-   Cuando hablamos de Modern CSS Layouts es un concepto de hace más de 10 años
-   Características de la web en 2010:
    -   Progresivamente mejorado
    -   Adaptable a diversos usuarios
    -   Modulares y eficientes
    -   Tipográficamente ricos

Algo a tener en cuenta es que en el 2010 usaban HTML5 y CSS3.   

🔥🔥 Progresivamente mejorado         
-   Base sólida e ir añadiendo estilos complejos para aquellos navegadores que pudieran soportarlo
-   En ese momento la compatibilidad entre navegadores era notorio
	- Sombras detrás del texto
	- Múltiples columnas de texto
	- Imágenes de fondo de diferentes colores 

🔥🔥 Adaptable a diversos usuarios    
-   Al tener una:
    -   Amplia gama de navegadores
    -   Dispositivos
    -   Resoluciones de pantalla
    -   Tamaños de fuente
    -   Tecnologías de asistencia
-   Se pretendía llegar de una manera óptima a todos

Se habla de columnas inteligentes con CSS Y JQuery

🔥🔥 Modulares y eficiente       
-   Que el CSS se pueda dividir en fragmentos que funcionan de forma independiente para crear componentes de diseño que se pueden reutilizar de forma independiente.
-   Se hablaba de un framework que permitiera a los desarrolladores escribir código frontend modular rápido, fácil de mantener y basado en estándares.
- Que sea tipográficamente rico 


Muchas de esas cosas son las que deseamos lograr en la actualidad       
-   CSS nació en 1996 (lanzamiento inicial)
    -   Basado en un diseño de revista

Así fue como:      

1.  Se idearon un modelo de diseño “basado en marcos” (“frame-based” layout model) en 1996
2.  Luego, lanzaron el “Advanced Layout Module” en 2005
3.  Que luego, pasó a ser “Template Layout Module” en 2016

Es decir que siempre se ha deseado lo mismo como tener control en:        
-   Columnas  
-   Filas  
-   Tipografías  
-   Contenido organizado (Header, Footer, …)  

Básicamente el layout CSS ha cambiado drásticamente, así como la forma en que desarrollamos la interfaz de nuestros sitios

Ahora tenemos una opción real en términos de los métodos de diseño que usamos en CSS para desarrollar nuestros, sitios, lo que significa que a menudo tenemos que elegir qué enfoque tomar.

Como desarrolladores debemos asegurarnos que nuestra comprensión actual del layout esté actualizada.


✨ Hoy en día existe una mejor opción a Object Oriented CSS, y se llama Storybook, aquí hay una **[→ guía de como instalarlo y usarlo ←](https://www.youtube.com/playlist?list=PLfWyZ8S-Xzeed53YOiAa1U5WUSA4cRxFQ)** hecha en youtube por un profesor de platzi **[→ Sacha Lifszyc ←](https://platzi.com/profesores/sacha-lifszyc-65/)**


[Slides Clase-12](https://www.canva.com/design/DAEP5ILaOpw/r1x0uwDErPaAOHMEVWB-RA/watch?utm_content=DAEP5ILaOpw&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 13. Patrones para usar como punto de partida

¡Hola! Para comenzar con este módulo de Modern Layouts con CSS Grid, quiero que revisemos algunos patrones para usar como punto de partida.

El link de la página que te compartiré, contiene una diversa colección de patrones que pueden ser usados tanto para el diseño de una página completa como para el diseño de un componente pequeño (así como lo hablamos en nuestra clase de: ¿Cuándo usar Flexbox y cuándo usar CSS Grid?).

Adicionalmente, en esta página podrás encontrar la explicación, tips, el chequeo de compatibilidad usando Feature Queries (que lo veremos más adelante en el curso), y las técnicas usadas para crear cada patrón.

Link: [Patrones con gridbyexample.com](https://gridbyexample.com/patterns/)

Te veo en la siguiente clase, no sin antes recordarte dos cosas:

-   Me alegra mucho que personas como tú estén leyendo esto. ¡Eso quiere decir que eres una persona que Nunca Para de Aprender y te felicito enormemente por eso!
-   Cualquier duda, por mínima que sea, ¡escríbela en los comentarios!

Bye ❤️

🎲

## 14. Layouts: Super Centered, The Deconstructed Pancake, Sidebar Says, Pancake Stack, Classic Holy Grail Layout

1. **Super Centered:** `place-items: center`   
Por mas que movamos la pantalla no se nos va a quitar del centro, tanto vertical como horizontalmente.     
	```css
	.parent {
		display: grid;
		place-items: center;
	} 
	```


2. **The Deconstructed Pancake:** `flex: 0 1 <baseWidth>`   
Reorganiza los contenedores de manera responsive, pasando de un diseño para desktop a uno para mobile. Esto se logra con 👉 `flex: grow shrink base-width`; crecer, encoger y ancho base;     
	
- **Flex-grow** ocupa equitativamente en cada elemento el espacio sobrante.

- **Flex-basis** establece un ancho alto de cada item, va a ser alto o ancho dependiendo la dirección en que este.

- **Flex-shrink** especifica el valor de contracción de un elemento, cuánto va a reducir.

	```css
	.parent {
		display: flex;
		flex-wrap: wrap; 
		justify-content: center;
	} 
	```
	```css
	.box {
		flex: 0 1 150px;
		margin: 5px;
	} 
	```


3. **Sidebar Says:** `grid-template-columns: minmax(<min>, <max>) ...`     
	```css
	.parent {
		display: grid;
		grid-template-columns: minmax(150px, 25%) 1fr;
	} 
	```


4. **Pancake Stack:** `grid-template-rows: auto 1fr auto`   
	```css
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
	} 
	```


5. **Classic Holy Grail Layout:** `grid-template: auto 1fr auto / auto 1fr auto`      
	```css
	.parent {
		display: grid;
		grid-template: auto 1fr auto / auto 1fr auto;
	} 
	```
	```css
	.header {
		padding: 2rem;
		grid-column: 1 / 4;
	} 
	```
	```css
	.left-side {
		grid-column: 1 / 2;
	} 
	```

También puedes revisar estos ejemplos mas a detalle [aquí](https://1linelayouts.glitch.me/) y [aquí también.](https://web.dev/one-line-layouts/)

[Slides Clase-14](https://www.canva.com/design/DAEQjtR-Zk8/aw3k0--GkkF5lwbNUdNP1A/watch?utm_content=DAEQjtR-Zk8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 15. Layouts: 12-Span Grid, RAM (Repeat, Auto, MinMax), Line Up, Clamping My Style, Respect for Aspect

6. **12-Span Grid:** `grid-template-columns: repeat(12, 1fr)`     
	```css
	.ex6 .parent { 
		display: grid; 
		grid-template-columns: repeat(12, 1fr); 
	}
	```
	```css
	.ex6 .span-12 { 
		grid-column: 1 / span 12; 
	}
	```
	```css
	.ex6 .span-6 { 
		grid-column: 1 / span 6; 
	}
	```
	```css
	.ex6 .span-4 { 
		grid-column: 1 / span 4; 
	}
	```
	```css
	.ex6 .span-2 { 
		grid-column: 3 / span 2; 
	}
	```
		/* centering text */
	```css 
	.ex6 .section { 
		display: grid; 
		place-items: center; 
		text-align: center;
	}
	```


7. **RAM (Repeat, Auto, Minmax):** `grid-template-columns: repeat(auto-fit, minmax(<base>, 1fr))`     
	```css 
	.ex7 .parent { 
		display: grid; 
		grid-gap: 1rem; 
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
	```


8. **Line Up** `justify-content: space-between`     
	```css 
	.ex8 .parent { 
		height: auto; display: 
		grid; grid-gap: 1rem; 
		grid-template-columns: repeat(3, 1fr); 
	}
	```
	```css 
	.ex8 .visual { 
		height: 100px; 
		width: 100%; 
		}
	```
	```css 	
	.ex8 .card { 
		display: flex; 
		flex-direction: column; 
		padding: 1rem; 
		justify-content: space-between; 
	}
	```
	```css 
	 .ex8 .h3 { 
	 margin: 0; 
	 }
	```


9. **Clamping My Style** `clamp(<min>, <actual>, <max>)`      
	```css   
	.ex9 .parent { 
		display: grid; 
		place-items: center; 
	}
	```
	```css
	.ex9 .card { 
		width: clamp(23ch, 50%, 46ch); 
		display: flex; 
		flex-direction: column; 
		padding: 1rem; 
	}
	```
	```css 
	.ex9 .visual { 
		height: 125px; 
		width: 100%; 
	}
	```


10. **Respect for Aspect** `aspect-ratio: <width> / <height>`       
	```css 
	.ex10 .parent { 
		display: grid; 
		place-items: center; 
	}
	```
	```css
	.ex10 .visual {
		aspect-ratio: 16 / 9; 
	}
	```
	```css 
	.ex10 .card {
		width: 50%;
		display: flex; 
		flex-direction: column; 
		padding: 1rem; }
	```


También puedes revisar estos ejemplos mas a detalle [aquí](https://1linelayouts.glitch.me/) y [aquí también.](https://web.dev/one-line-layouts/)


[Slides Clase-15](https://www.canva.com/design/DAEQjtR-Zk8/aw3k0--GkkF5lwbNUdNP1A/watch?utm_content=DAEQjtR-Zk8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 16. Dinámica: No puedo dejar de ver

🔥 OBJETIVO   
Entrenar nuestro ojo como desarrolladores para tener un muy buen nivel de detalle.   

CUÁL ES EL DISEÑO CORRECTO?        
1.  B✔ por la cámara 📷               
2.  A✔ por el contraste del 2h ago 📑              
3.  A✔ por el contraste - color de texto del botón 👀                      
4.  B✔ por los bordes mas redondeados ⚫               
5.  A✔ por el texto bien alineado 📑                                 
6.  B✔ la imagen tiene una correcta dimensión (`object-fit: cover;`) 🖼               
7.  A✔ por la opacidad de los iconos ◻▪                
8.  B✔ porque no resalta el SKIP como una acción importante ❗❗              
9.  B✔ porque se debe mantener el diseño, si un botón es mayúsculas, el otro igual tiene que serlo 🔡🔠                 
10.  B✔ por el tamaño de la lupa, es mas estética 🔍                     
11.  A✔ por la separación entre el nombre y el 2h ago 📰                     
12.  A✔ por la alineación de los iconos ◻▪               

 
Por cierto, `object-fit` hace que las imágenes se vean bien al darles un width y un height que las deforma.


[Slides Clase-16](https://www.canva.com/design/DAEP495rHJU/htRUusEMyRvBTexxztk6Ow/view?utm_content=DAEP495rHJU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

🎲

## 17. Design System y detalles visuales a tener en cuenta

✨ **Design System**    
Es una colección de componentes reutilizables guiados por estándares claros. 

Se puede definir como un plan maestro, el cual será la fuente de la verdad.    

Una referencia para asegurarse de que todos los que trabajan en el producto estén siempre en la misma página. A esto se le conoce como **consistencia.**   

Empresas como Airbnb, Uber e IBM han cambiado la forma en que diseñan productos digitales al incorporar sus propios sistemas de diseño únicos.     
-   Nos permite tener **consistencia**
-   Cada una de estas empresas ha podido cambiar el ritmo de creación e innovación dentro de sus equipos.     

🔥 ¿Cómo lo logran?   
-   Utilizando una colección de componentes repetibles.
-   Utilizando un conjunto de estándares que guían el uso de esos componentes.  

🔥 ¿Quiénes crean un Design System?   
-   Todo un equipo de producto (programadores, ingenieros, diseñadores, gerentes de producto, equipo C-suite, etc.)

🔥 Proceso          
-   Se hace un inventario:
	 -   Colores, logotipos, encabezados, pies de página, formularios, código, etc.
	 -   Y se llega a un consenso sobre cómo se deben diseñar, codificar, presentar y hablar de las cosas.
-   Podemos tener un boceto donde encontraremos: Ideas, Colores, Etc.
-   Los integrantes de un equipo deben tomar decisiones para el producto el cual llegara a afectar al código.
- Basado en ese tipo de decisiones las cuales se guían de las necesidades, se puede encontrar herramientas.    

🔥 ¿Por dónde comenzar a revisar estos temas?     
- [Design - Shopify Polaris](https://polaris.shopify.com/design/design) guía de recomendaciones de que cosas hacer y que otras no.
-   Una, guía de diseño que nos puede ayudar es la de Shopify (grupo de márgenes, contraste de colores, tipografías, íconos y spacing)
-   También podemos usar Frameworks CSS como Tailwind CSS que nos ayuda a guiarnos en ciertos aspectos como espaciados, breakpoints, etc.

📌 En una revisión se puede observar:       
- Mismo espaciado al lado derecho e izquierdo 
- Los elementos inferiores también se deben alinear con los elementos superiores. Esto depende del diseño.
- Llevar un estándar en la tipografía del proyecto
- Iconos de tamaño adecuado, ni muy pequeños ni muy grandes. 

📌 Leer sobre Design tokens
- [Leer en uifrommars.com](https://www.uifrommars.com/design-tokens-que-son-ventajas/)
- [Leer en css-tricks.com](https://css-tricks.com/what-are-design-tokens/)


[Slides Clase-17](https://www.canva.com/design/DAEQjsUUkws/60UJcBNwhiQDQQ1sW5Vb-w/view?utm_content=DAEQjsUUkws&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 18. Tendencias de diseño UI/UX: Fase de inspiración y creatividad

Para todo lo que tenga que ver con diseño, nos debemos poner las gafas de un(a) dev, es decir, ver los detalles de alto nivel (Navbar, Header, Hero, Section, What we are). Con esta estructura principal ya podemos armar nuestro esqueleto de html y basados en esto podemos centrarnos en los pequeños detalles.    

El detalle es importante, pero lo primero que suelo hacer, es dejar de lado los detalles. Es decir, primero resalto las partes principales de un diseño específico y luego comienzo a pensar en ellas.     

Pero, debemos PLANIFICAR antes de diseñar y antes de escribir cualquier línea de código.     

🔥 Principios de diseño para centrarnos en los detalles...    
	• Jerarquía  
	• Contraste  
	• Proximidad  
	• Balance  
	• Responsive design  
	• Ilustraciones animadas  
	• Garantizar performance  
	• Micro interaciones  
	• Realidad aumentada y realidad virtual  
	• Neo morfismo  
	• Asymmetrical layouts  
	• Storytelling


- **Jerarquía**, tener unos elementos mas grandes que otros, basados en la relevancia e importancias que le queremos dar a cada uno de ellos.

- **Contraste**, ejemplo el botón de color nos indica que nos están ayudando para poder presionarlo y ya con eso podemos jugar con el tema de contraste y de colores y ayudar también al usuario a leer sin leer prácticamente.

- **Proximidad**, que ver con el tema de consistencia por ejemplo vemos items en nuestras app que tienen mucha semejanza ya sea en colores, iconos y demás, ya sabemos que tiene que ver con una sección o una parte que es del mismo grupo, etc.

- **Balance**, El tema de contraste y de colores, también puede jugar un papel bastante importante cuando queremos hablar de importancia o relevancia de un contenido en especifico.

- **Responsive design**    
	- _Podemos buscar inspiración para poder realizar nuestros proyectos, uno de ellos es The state of UX in 2021, 100 lecciones bastante útiles a nivel de todo_

- **_Ilustraciones animadas_**, Es muy importante tener en cuenta el tema de rendimiento y de performance. Micro interacciones en iconos.

- **Garantizar performance**, también garantizar a las personas que independientemente que tengan datos o no puedan ver nuestros sitios.

- **Micro interacciones**, normalmente no son animaciones, pero es lo que le indica al usuario que si esta haciendo clic o tag en algún lado, esos pequeños detalles en la web nos indican ciertas cosas y con eso le damos un gran peso a nuestra pagina, los pequeños detalles también son importantes

- **UI**, Es tema mas que todo visual de colores y demás

- **UX**, es la experiencia o emociones que transmite el proyecto (sistema, app, etc.)

- **Realidad Virtual**, normalmente existen app que pueden decirnos como ver ciertos sitios, que si te pones tus gafas vas a ver de esta forma y de esta otra, ejemplo de que si tienes que hacer un tour virtual de de una casa o algún carro, etc.

- **Realidad aumentada**, supongamos que queremos comprar una planta, y esa planta la sumergimos en el lugar donde quisiéramos colocarla ya sea dentro de una casa, inmediatamente vamos la poder ver en el sitio que la necesitemos, todo depende el, juega un papel super interesante

- **_Neo morfismo,_** juega mucho con las sombras y también esta relacionado con otras tendencias como lo es material design y flat design que ya todo depende de la dirección de la luz.

- **_Asymmetrical layouts_**, es poder jugar con layouts asimétricos, en este caso tenemos imágenes que pueden ser muy sutil, que se vean también muy elegantes pero que sean distribuidas en diferentes partes.

- **_Storytelling_**, poder contar historias en tu página web, básicamente que el usuario vaya haciendo scroll y a medida que esto vaya sucediendo te vaya contando algo.


🔥 Tendencias UI     
-   Animated Illustrations                
-   Micro animations                   
-   3D Graphic in web & mobile UI         
-   virtual reality             
-   Augmented Reality                  
-   Neumorphism: colores pocos contrastados.              
-   Asymmetrical Layouts              
-   Storytelling             


📌 Estos tips están en estos vídeos:    
	- [UI Design Trends 2021](https://www.youtube.com/watch?v=5RluSnRPRbI)
	- [UX Design Trends 2021](https://www.youtube.com/watch?v=tPoRAL7Lm1M)


📌 La Charla de TED talks:     
	- [https://www.ted.com/talks/joe_gebbia_how_airbnb_](https://www.ted.com/talks/joe_gebbia_how_airbnb_designs_for_trust?language=es#t-149642)


✨ [Neumorphism](https://neumorphism.io/#e0e0e0) Herramienta para hacer contenedores enfocados al neomorfismo, sobre todo para nosotros los devs que normalmente se nos hace difícil el diseño. 😅 

Es una herramienta web con la que básicamente puedes ajustar sombras, redondeados, intensidad y distancia con unos scrolls y cuando se ajusta uno los demás se autoajusten dependiendo del que estás moviendo para que así siempre sea como diseño de neomorfismo.

[Slides Clase-18](https://www.canva.com/design/DAEQnJdEqpM/51ypRyMSnIjL0hquHoXu4A/view?utm_content=DAEQnJdEqpM&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

### Notas y aportes

<details>
  <summary>Haz click aquí para ver a los contribuidores 👀</summary>

  <br/>
  
**🔥 Team:**    
	- Fernando Quinteros Gutierrez              
	- John Cardenas            
	- Nazareno Aznar Altamiranda                        
	- Gonzalo Ceron Denetro                

</details>

🔥 ❄ ✨ 📌 🎲 🤴🦁 🧔🐯 🧰 👀 ✔

Sería cool primero hacer un ejemplo practico y luego definir el tema.
`/*cd /d/1-Software/Platzi/A-Apuntes/*/`