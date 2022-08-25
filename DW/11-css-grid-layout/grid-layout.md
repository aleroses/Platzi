# Curso Profesional de CSS Grid Layout
> **Estefany Aguilar** - [Desarrolladora Frontend en La Haus](https://platzi.com/profesores/teffcode/)
> **@teffcode** en Twitter - GitHub - Instagram

## 1. Tips para llevar tu conocimiento de CSS a otro nivel + Quices

- [Slides del Curso](https://static.platzi.com/media/public/uploads/sliides-curso-de-css-grid-layout_5d392acf-26ce-4cf6-9fde-262064f0e019.pdf)
- [Repo con la documentación del Curso](https://github.com/platzi/CSS2020/blob/main/README.md#1-tips-para-que-lleves-tus-conocimientos-de-CSS-a-otro-nivel--quices)

🔥 **Tips:**     
- No es necesario memorizar todas las propiedades y valores :)
- Conoce los conceptos fundamentales
	- Layout
	- Selectores
	- Responsive
	- Flujo normal
	- Modelo de caja
	- Herencia y cascada
	- Formatting Contexts
- Usar DevTools para encontrar errores y hacer pruebas rápidas
- Saber qué herramientas te sirven para aprender


✨ En este curso veremos:      
- Historia
- Conceptos
- Retos
- Quices
- Proyecto creativo


[Slides Clase-01](https://www.canva.com/design/DAEQFfekgdU/0jutcPgG2ibsiVm_JON5yg/view?utm_content=DAEQFfekgdU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#1)

🎲

## 2. ¿Cómo fue pensado CSS cuando se creó?

🔥 Viajemos al pasado     
Muchas de las suposiciones actuales sobre el diseño se basan en lo que sucedió antes.      

✨ Tim Berners Lee creó WWW y HTML en 1991:     
(el tenía un hoja de estilos **NO CSS**, pero no quería compartirlo ya que pensaba que un feature así tenia que ser NATIVO).  

**1993:**    
-   Viola (navegador), tenía su propio lenguaje de estilos y quería convertirlo en un lenguaje estándar para la web.  

**1994:**        
-   NSCA Mosaic (navegador), tenía a Marc Andreessen como co-creador, les dijo a los desarrolladores que no había forma de trabajar con algo así (CSS).  
- **håkon wium lie**: sacó una propuesta para algo así **CHSS** .
-  Se dio a la luz presentando dicha propuesta inicial. debatiendo si cualquier usuario pudiera manipular los estilos.  

**1995:**       
-   **håkon y Bert Bos:** se unen y responder al 1er borrador en la conf de WWW en 1995. (algo que término siendo muy importante fue que sacaron la “H” y término siendo CSS)
-   Se siguió debatiendo el control del usuario sobre los estilos, esta idea término siendo rechazada.
-   **W3C:** saca una junta, ya que era de su interés.  

**1996:**     
-   **_EL NACIMIENTO DE CSS:_** Nace por recomendación de _W3C_.  


**Primeros navegadores Compatibles:**
-   Internet Explorer 3
-   NETSCAPE
-   OPERA  

**CSS 2:** nace en 1998, con correcciones con las limitaciones y el problema de los elementos **FLOTANTES.**


[Slides Clase-02](https://www.canva.com/design/DAEQE_Q6irY/D-8q5MwKUdXQxdFsaCoNjg/view?utm_content=DAEQE_Q6irY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#1)

🎲

## 3. Limitaciones de CSS y el problema de los elementos flotantes

Los primeros diseños de CSS eran una mezcla entre elementos flotantes y posicionados. 

Noodle Incident         
> ![Elementos flotantes](https://i.postimg.cc/2SKzFs1C/2-limitaciones.png)

Existía una frustración por la falta de columnas de altura completa, para solucionarlo se creó una técnica de **columnas falsas**.

✨ Columnas Falsas por Dan Cederholm    
Es una técnica que hace una ilusión cuando una columna es más pequeña que otra se la rellena de un background de tipo imagen.  
> ![Columns Falsas](https://i.postimg.cc/SxgKBRD4/2-columns-falsas.jpg)

Luego, se empieza a hablar de Diseño Responsivo    

✨ Diseño responsivo por Ethan Marcotte     
> ![Responsive](https://i.postimg.cc/K88TkdWZ/2-responsive.jpg)

Después, se empieza a trabajar con elementos flotantes.     

🔥 El problema de los elementos flotantes       
Esto funciona bien si se calcula con precisión el ancho y si el contenido tiene la misma altura.    
> ![Flotantes](https://i.postimg.cc/wTpWRjHD/2-flotantes.jpg)

-   La solución fue que se comenzó a trabajar con columnas a través de contenedores para cada una y no con elementos independientes
-   Tambien se comienza a usar display: table que también se pueden utilizar para elementos que no son elementos de tablas.

✨ `display: table`      
Los valores se pueden ampliar a otros elementos de HTML diferentes a `<tr>` y `<td>` como los `<div>`, `<ul>`, etc.   


Existen una gran cantidad de técnicas que son simplemente TRUCOS, gracias a eso, el diseño con CSS parece difícil y frágil porque no habían herramientas de diseño.


[Slides Clase-03](https://www.canva.com/design/DAEQKtu0pgw/0_OUYnbKV5OCsD7Tek97bw/view?utm_content=DAEQKtu0pgw&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton#1)

🎲

## 4. Herramientas que nos han facilitado el camino

La comunidad desarrolló herramientas para facilitar el camino como técnicas 🧰
    
**OBJETIVOS:**     
_Evaluar un panorama actual, ya que las herramientas tienen un impacto en la forma en la que diseñamos y desarrollamos._     
  
-   **Arquitecturas**  
    -   Es tener una regla general en CSS
    -   Usando sistema de clases como BEM

-   **Pre y Post procesadores**
    -   Pre procesadores ⇒ Cambia la sintaxis de CSS permitiendo trabajar más rápido.
    -   Post procesadores ⇒ Agregar pequeños prefijos o propiedades independiente del navegador en el que se está programando, que son necesarias a la hora de trabajar

-   **Diseño de componentes**
    -   Ej. Atomic Design
    -   Lo que se busca ya no es trabajar con páginas enteras sino con componentes

-   **Frameworks**
    -   Muchos sitios iguales se deben a frameworks como Bootstrap y Foundation
    -   Permiten trabajar de una manera sencilla con los estilos

-   **Performance**
    -   Es importante revisar cuanto pesa nuestro navegador

-   **Accesibilidad**
    -   Actualmente se busca que todo tipo de personas puedan acceder a nuestros sitios web

-   **Evergreen Browsers**
    -   Navegadores compatibles con nuevas características de la web


📌 Post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales


[Slides Clase-04](https://www.canva.com/design/DAEQFDCuuD8/fLp8L0dB1yRslr8m3pMPMA/view?utm_content=DAEQFDCuuD8&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 5. ¿CSS Grid es una idea nueva? La evolución de la especificación

CSS comenzó como algo muy simple. Era solo una forma de crear una vista de un documento en una pantalla pequeña muy simple en ese momento.   

Hace veinte años, las pantallas eran muy pequeñas. Entonces, cuando vimos que podíamos hacer una hoja de estilo para documentos, pensamos… Bueno, ¿qué más podemos hacer ahora que tenemos un sistema para hacer hojas de estilo?   

✨ Cuando comenzaron en CSS pensaron tomar un diseño similar a las revistas.
    -   Las imágenes, textos, pie de páginas tenían ciertos lugares
    -   Todo el documento tenía un sentido
	-   Se tenía la idea de un sistema de layout

🔥 ¿Por qué surgió la necesidad de trabajar en esta especificación?    
Microsoft necesitaba urgentemente una herramienta de diseño robusto y flexible para la web si la web iba a ser una opción para el desarrollo de aplicaciones nativas en windows.

🔥 **Rachel Andrew**    
Fue una de las mujeres que empezó a contribuir para la comunidad de CSS alrededor del año 2012

 Hubo 3 ideas fundamentales   
 1.  Idea de Microsoft
 2.  Diseño avanzado de Bos
 3.  Adición de líneas de cuadricula de Linss

Antes de que una recomendación candidata (Borrador Final) pueda convertirse en una recomendación propuesta, la W3C necesita ver al menos dos implementaciones independientes e interoperables
    
Hubo un cambio fundamental con CSS Grid

 🔥 **Jen Simmons**    
Fue una mujer muy importante en esta comunidad, ya que coloco demasiadas contribuciones para CSS de Grid en la web.

✨ Sin el entusiasmo de los desarrolladores, proveedores de navegadores son reacios a gastar dinero para ver si la idea gana terreno

Los navegadores empezaron a sacar su compatible con los navegadores

**RESUMEN:** La adopción de CSS Grid fue progresiva, fue algo que se tenía la idea de crear un layout de este tipo. Gracias al gran recibimiento que tuvo los proveedores de navegadores decidieron invertir en esta característica.


[Slides Clase-05](https://www.canva.com/design/DAEQN8YEp4w/v1Z88OOvAodndxddKS4BBQ/view?utm_content=DAEQN8YEp4w&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 6. ¿Qué significa Grid para CSS?

Grid es una forma nueva de pensar sobre como realizar un diseño de distribución de elementos con CSS. Muchos desarrolladores afirman que CSS grid es un gran paso para el diseño en CSS, ya que tumbo todos esos trucos planteando una forma nueva de hacerlo con el mismo o mejor resultado.


[Slides Clase-06](https://www.canva.com/design/DAEQOVE8yQU/-irgEI-4MpOp4FHYqJmlZg/view?utm_content=DAEQOVE8yQU&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 7. Técnicas de alineamiento antes de CSS Grid: margin y line-height

Tenemos 4 técnicas de alineamiento:    
-   margin
-   line-height
-   table-cell
-   positions

Es importante conocer muy bien las propiedades que necesitamos para cada técnica.    

Este es el resultado que se quiere lograr.        
![Margin-Line-Height](https://i.postimg.cc/Hk7tct6W/7-margin-line-height.jpg)

🔥 Margin    
Empezamos con la técnica “Margin”, necesitamos estas prioridades:   
-   margin-top
-   margin-right
-   margin-bottom
-   margin-left

Podemos declarar uno a uno, o podemos utilizar un Shorthand que seria  
"`margin: top right bottom left`" en sentido de las manecillas del reloj. ⏰  

Al igual se puede utilizar solo 2 propiedades que sera para ahorrar tiempo y tendrían el valor de “`top-bottom & left-right`”.

Ejercicio practico:     
- [Alignment techniques · margin · initial](https://codepen.io/teffcode_/pen/YzGNOgQ)
- [Alignment techniques · margin · final](https://codepen.io/teffcode_/pen/oNzBPVB)

🔥 Line-height         
Existe otra propiedad que se llama Line-Height, en la que tenemos 3 propiedades:      
-   text-aling: Nos permite alinear textos de forma horizontal.
-   vertical-align: Nos permite alinear de forma vertical.
-   line-height: Nos va a permitir de forma vertical y controlar los altos en los textos.

Ejercicio practico:     
-   [Alignment techniques · line-height · initial](https://codepen.io/teffcode_/pen/JjREaVK?editors=1100)
-   [Alignment techniques · line-height · final](https://codepen.io/teffcode_/pen/ExgZeJV?editors=1100)

📌 Revisar links con los ejemplo :3

[Slides Clase-07](https://www.canva.com/design/DAEPvl0m0Zs/o4ZuT2i7lVDw3QX1yLpDUg/view?utm_content=DAEPvl0m0Zs&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 8. Técnicas de alineamiento antes de CSS Grid: table-cell y positions

En esta clase nos enfocaremos en:     
-   Table-Cell
-   Positions

Es importante conocer las propiedades que tienen estas técnicas para poder posicionar bien.   

🔥 Table-Cell     
En la técnica de Table-Cell tenemos las propiedades de:     
- display: table-cell: Hace que cualquier elemento se comporte como una tabla.
- text-align: Estos últimos dos, los vimos en la clase anterior.
- vertical-align

Ejercicio practico:     
-   [Alignment techniques · table-cell · initial](https://codepen.io/teffcode_/pen/MWjJqdM?editors=1100)
-   [Alignment techniques · table-cell · final](https://codepen.io/teffcode_/pen/oNzBPRB)

🔥 Positions    
La ultima técnica a ver es la de Positions, que tiene las siguientes propiedades:  
-   position: relative
-   position: absolute
-   top
-   right
-   bottom
-   left
-   transform: translate ()

Hay una tabla que coincide con todos los valores de positions, debido a eso podemos ver sus características dependiendo de su valor.  

Esto tiene una sintaxis donde va primero.   
-   Top: Longitud, Porcentaje, Valor por Defecto, Hereda Del Padre
-   Transform: none, transform-functions, ,initial, inherit
-   Transform: translate(x.y)

Ejercicio practico:     
-   [Alignment techniques · positions · initial](https://codepen.io/teffcode_/pen/bGwgxXm)
-   [Alignment techniques · positions · final](https://codepen.io/teffcode_/pen/gOwgdVe?editors=1100)

[Slides Clase-08](https://www.canva.com/design/DAEPv-8YXhU/f-h1db2rteK-JrSBlWQCmQ/view?utm_content=DAEPv-8YXhU&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton)

🎲

## 9. Técnicas de alineamiento antes de CSS Grid: pros y contras

No hay ninguna propiedad especifica para alinear elementos de bloque en CSS2. Lo visto anteriormente se hicieron en base a trucos. Y gracias a esto hay muchas personas que no quieren trabajar en CSS por su complejidad.

Ventajas y desventajas de los métodos vistos anteriormente:   

🔥 Margin:     
-   Ventaja:     
    El valor “auto” alinea horizontalmente cualquier elemento con cualquier ancho.

-   Desventaja:    
    Para alinear verticalmente en todos los casos tendremos que calcular estos valores y evitar el margin collapsing.

Colapso de márgenes      
> ![Margin Collapsing](https://i.postimg.cc/B61mRYZR/9-margin-collapsing.jpg)

- Sucede cuando  
	Esto sucede con elementos de tipo block en los que sus margin, en el eje ordenas (y), no se suman sino que se solapan o sobrepone una con otra.  

- No sucede cuando   
	No sucede cuando tenemos un elemento contenedor con el display ya sea flex o grid, ya no se colapsan los márgenes aún teniendo elementos block porque tenemos un wraper o contenedor con grid o flexbox.  

✨ Los márgenes colapsados ocurren cuando dos márgenes verticales entran en contacto entre sí. Si un margen es mayor que el otro, ese margen anula al otro, dejando un margen.

Es tipo:       
50px + (-25px) = 25px    


🔥 Line-Heigh      
-   Ventaja:     
    Se puede alinear correctamente.

-   Desventaja:   
    Si el texto ocupa mas de una línea, el elemento toma un alto mas grande que lo necesario para los cálculos.
    

🔥 Table-Cell     
- Ventaja:   
    La alineación vertical no esta condicionada por fuentes o el tamaño de estas mismas.

- Desventaja:    
    Vertical-Align solo se puede aplicar en elementos Inline.


📌 La mayor limitante de estas técnicas son las propiedades físicas como margin-top, bottom, left, etc. Hoy en día ya deberíamos traducirlo a propiedades lógicas.    

Modos de Escritura / Propiedades Lógicas    

[Sitio para indagar sobre trucos antiguos de posicionamiento](https://www.wextensible.com/temas/css3-alinear/block.html)      

[Slides Clase-09](https://www.canva.com/design/DAEPx_rxzag/bZs1WSOkdrs4i9brspUiTA/view?utm_content=DAEPx_rxzag&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)     

🎲

## 10. Modos de escritura y ejes de alineamiento + Reto

Nosotros por nuestro modo de escritura que es el sistema Latin, que es de izquierda a derecha, el origen de nuestro navegador es el Top Left. Pero existen otros sistemas de escritura que pueden ser totalmente diferente. Por este tipo de cosas, surge una nueva propiedad llamada: `“Writing Mode”`. Donde tenemos diferentes valores como:    
-   Horizontal TB
-   Vertical LR
-   Vertical RL
-   Sideways LR
-   Sideways RL

[Documentación de Writing mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)

📌 LAS ULTIMAS DOS LETRAS, DEFINEN DE QUE DIRECCION A QUE DIRECCION VA ESCRITO.

ESTA PROPIEDAD NO ES APTA PARA TABLAS, NI ROW, NI COLUMN

> ![Formas de Escritura](https://i.postimg.cc/T3RRpgJ1/11-modos-escritura.png)

Las cosas que tenemos que tener en cuenta son:     
-   Modo De Escritura
-   La Dirección
-   La orientación del texto.

Sabemos que en el display cuando es:
- En Block es ⬇️ 
- y cuando es Inline es ➡️.

Este tipo de valores afectan a nuestros modelos en Flexbox y Grid.


Otro resumen:     
🔥 writing-mode    
La propiedad writing-mode define si los renglones de texto se disponen horizontal o verticalmente y la dirección en que avanzan los bloques.  

- **horizontal-tb**    
	El contenido fluye horizontalmente de izquierda a derecha y verticalmente de arriba hacia abajo. El próximo renglón horizontal se posiciona debajo del renglón anterior.

- **vertical-rl**    
	El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de derecha a izquierda. El próximo renglón vertical se posiciona a la izquierda del renglón anterior.

- **vertical-lr**   
	El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de izquierda a derecha. El próximo renglón vertical se posiciona a la derecha del renglón anterior.

- **sideways-rl**    
	El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la derecha.

- **sideways-lr**  
	El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la izquierda.



🔥 Cosas a tener en cuenta a la hora de usar writing mode:   

- El modo de escritura.  
- La dirección.  
- La orientación del texto.

Para esto hay que ver los elementos bloque y elementos en línea.

- **display-block:** (horizontal)   
	-   Ocupan todo el espacio de su elemento padre (contenedor).  
	- Fuerzan un salto de línea (ocupan todo el ancho disponible).  
	- Respetan el width, el height, el margin-top y el margin-bottom indicados por el usuario.  
	- Algunos son:  
		- div, p, h1, h2, h3, h4, h5, h6, hr, ol, ul, table, li.

- **display-inline:** (vertical)  
	- Son apilables.  
	- No tienen ni margin-top ni margin-bottom (por mucho que se lo indiques en el CSS).  
	- Si tienen margin-left y margin-right.  
	
	No respetan ni width ni height.  
	- Estas medidas dependerán del tamaño en pixels de su contenido.  
	- Algunos son: a, span, label, strong, br, input, textarea, abbr,

> ![Display](https://i.postimg.cc/tJXMKd1b/10-display-block-inline.jpg)

[Can I use: Propiedades soportadas en navegadores](https://caniuse.com/)


📌 `overflow: hidden;` sirve para **ocultar** cualquier elemento hijo que se salga del elemento padre (siempre y cuando el elemento padre tenga dicha propiedad). Por ejemplo, si tu elemento padre tiene una altura de 500px, pero dentro tienes un texto que rebasa esos 500px, con un `overflow: hidden;` en el padre puedes hacer que se oculte todo lo que se salga 😄.    

Los valores que puede tomar son:    
overflow: hidden; scroll; visible;
> ![Overflow](https://i.postimg.cc/nV2hrB89/10-overflow.jpg)


[Documentación: overflow](https://developer.mozilla.org/es/docs/Web/CSS/overflow)  


📌 [Reto](https://codepen.io/teffcode_/pen/YzGZGNw?editors=1100)   


📌 Checando el reto de la profesora, me topé que sólo funciona (por ahora) el sideways-rl y sideways-lr en Fire Fox, pero no en Edge ni Chrome, digo hablando de los navegadores más usados. 😮


[Slides Clase-10](https://www.canva.com/design/DAEPwdLmsWI/GfZVmQN4tivhrfzEMRSjkw/view?utm_content=DAEPwdLmsWI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)   

🎲

## 11. Propiedades físicas y lógicas en CSS + Quiz

**MODELOS DE CAJA (Físicas - Lógicas)**    

🔥 **Propiedades físicas**        
-   **MARGIN:**  
	- margin-top 
	- margin-left 
	- margin-right
	- margin-bottom

-   **PADDING:** 
	- padding-top 
	- paddding-left
	- padding-right
	- padding-bottom

-   **BORDER (-size-style-color):** 
	- border-top
	- border-left
	- border-right
	- border-bottom

-   **POSITIONS** 
	- top
	- left
	- right
	- bottom.

🔥 **Propiedades Lógicas**        
-   **MARGIN:** 
	- margin-block-start 
	- margin-inline-start
	- margin-inline-end
	- margin-block-end
    
-   **PADDING**  
	- padding-block-start 
	- paddding-inline-start
	- padding-inline-end 
	- padding-block-end
    
-   **BORDER (-size-style-color):** 
	- border-block-start
	- border-inline-start
	- border-inline-end
	- border-block-end.
    
-   **POSITIONS:**  
	- inset-block-start 
	- inset-inline-start 
	- inset-inline-end
	- inset-block-end

> ![Propiedades Lógicas](https://i.postimg.cc/0jmRr249/11-pro-logicas.jpg)

| Propiedad | ✨ | ✨ |
|------------|------|-----|
| margin | block | start |
| padding | `or` | `or` |
| border | inline | end|

[Slides Clase-11](https://www.canva.com/design/DAEPwadrvmg/ldmhPG0L9qzRRhjTaYO9KQ/view?utm_content=DAEPwadrvmg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)   

🎲

## 12. Técnicas de alineamiento con Flexbox

Las propiedades que tenemos que tener en cuenta para el alineamiento son estas 3:

-   Display: Flex
-   Justify-content: Es para los elementos en su alineación horizontal
-   align-items: Es para alinear los elementos de forma vertical.

📌 ESTOS ELEMENTOS SOLO SON PARA LOS ELEMENTOS PADRES

**Código ejemplo:**
-   [Alignment techniques · Flexbox · inital](https://codepen.io/teffcode_/pen/mdrRzJX?editors=1100)
-   [Alignment techniques · Flexbox · final](https://codepen.io/teffcode_/pen/dypNgoR)


[Slides Clase-12](https://www.canva.com/design/DAEPwlhbCcE/TI_WagM_hIe6RoURIJOJeA/view?utm_content=DAEPwlhbCcE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)  

🎲

🔥 ❄ ✨ 📌 🎲 🤴🦁 🧔🐯 🧰 ⏰

Joel Eduardo Sánchez Herrera

Paolo Joaquin Pinto Perez

Liza Fernanda Castrillón Díaz

John Steven Bernal Gonzalez

Fernando Quinteros Gutierrez

Giselly Romero Nuñez

Jose Manuel Montaño Saenz

resumen 

apuntes

notas