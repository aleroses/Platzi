Curso de Responsive Design Maquetación Mobile First
-- Diego de Granda --

1. Por qué aprender Responsive Design con Mobile First

- Es el estándar dentro de la industria de DW.
- 50% del trafico en internet se realiza a través del móvil 


2. Analizando el diseño

Figma: Herramienta de diseño para poder construir Wireframes que son especificaciones que ayudan a comenzar con la arquitectura de un proyecto para luego hacerlo crecer usando código. 

Primero analizamos el diseño que se nos es brindado para comenzar a maquetar, por lo regular los estilos que serán utilizados justamente como los colores, las fuentes, tamaños de letra entre otras cosas, que por lo regular son almacenados en variables de CSS con la pseudo clase:

:root {
	…
}

Tener en consideración que el CSS que muestra el wireframe Figma solo son sugerencias. Por lo tanto, solo se debe tener en consideración el tipo de fuente y el tamaño. No se recomienda copiar y pegas las reglas CSS.

Sin embargo, los diseñadores entregan un wireframe a los desarrolladores de lo cual es importante hacer análisis de las secciones respectivas.

Quiero poner otro hincapié en el concepto de wireframe. Este es utilizado como el ultima etapa de diseño para la elaboración de un software. Se asemeja a lo mas real a su diseño como etapa final. Algunos lo mencionan como prototipo en la fase de toma de requerimientos con el cliente.

…. 
Hola gente!
El profesor en este video habla de los prototipos que podemos ver en la clase como Wireframes, pero en realidad estos son Mockups!
Los Wireframes (su traducción en inglés es “Estructura de alambre”) representan la estructura más básica, en este caso, de una página web) es decir, estructura del contenido como textos, imágenes, componentes, etc. Sólo eso. Esto se da así, ya que en esta etapa lo más importante es la arquitectura de la información.
Una vez que este wireframe ya esté terminado, se pasa a la siguiente etapa que son los MOCKUPS, que es lo que vemos que nos muestra el profe en Figma, este es una representación de alta fidelidad del producto final que diseñamos. En el se ven colores, contenido real, imágenes, etc.


https://static.platzi.com/media/public/uploads/slides-mobile-first_f49e2c54-fe04-4d96-96af-426d1081d19f.pdf

https://platzi.com/diseno-producto/

https://www.figma.com/file/sMmlQaZldfDcLERYYWe6h4/Bata-Bit?node-id=81%3A132

https://platzi.com/cursos/brief/

Proyecto: 
https://www.figma.com/file/sMmlQaZldfDcLERYYWe6h4/Bata-Bit?node-id=44%3A593

https://www.figma.com/file/sMmlQaZldfDcLERYYWe6h4/Bata-Bit?node-id=81%3A132

Imágenes del Proyecto:
img:
https://imgur.com/gallery/CaOaMar
https://postimg.cc/gallery/Tb9BjZQ
icons:
https://postimg.cc/gallery/2LC8R9H


Inspiración: 
https://mediaqueri.es/

Comparar Dispositivos:
https://www.mydevice.io/#compare-devices

Figma para estudiantes
https://www.figma.com/education/


3. El valor de Mobile First

Ya conoces la importancia del desarrollo Mobile First, ahora aprenderás el valor que entrega más allá de estar enfocado a las vistas móviles. Recuerda que en responsive design un diseño se adaptará a distintas vistas independientemente para cuál dispositivo se desarrolló primero y con este estándar primero crearemos para dispositivos móviles.

¿Quiénes se ven beneficiados?
- Para desarrolladoras y desarrolladores: escalar es más sencillo
Pasar un desarrollo con vista de escritorio a móvil requiere de realizar diversas consideraciones, puede tornarse complejo pues además esto implica tener que eliminar elementos de la vista y generalmente es más fácil añadirlos.

Mobile First por el contrario hace de esta experiencia algo más llevadero y a nivel del código es bastante sencillo pasar de móvil a vistas más grandes, con la oportunidad de colocar componentes adicionales en el proceso.

- Para usuarios: menos es más y para más personas
Sí, es cierto que cada vez es mayor la cantidad de personas navegando en dispositivos móviles y es que Mobile First no solo llega a más dispositivos por la enorme variedad de vistas disponibles en el mercado, sino también a más personas.

La simplicidad en el diseño también ayuda a que tu comunicación sea efectiva hacia tus usuarios, brindando una experiencia de navegación agradable y que junto a un diseño accesible tu alcance aumente considerablemente.

Esto también añade valor a tus usuarios con una velocidad de conexión limitada y/o dispositivos de gama baja.

- Para negocios: mejor posicionamiento en buscadores
Google comenzó a trabajar a inicios de 2018 con un algoritmo que otorga de mayor relevancia a aquellos sitios optimizados para móviles. Esto no afectará a aquellos sitios que tengan una versión de escritorio y móvil, pero sí penalizará a los que carezcan de una alternativa móvil.

Para fines de SEO esto puede significar un menor rebote de usuarios si el contenido es lo suficientemente atractivo para retener la atención de los usuarios.

Evolución progresiva
Así como avanza la tecnología también podemos apreciar los cambios en tendencias del desarrollo frontend que incluso llegan a convertirse en estándares, como ha sido Mobile First.

Primero desarrollamos para escritorio donde nuestro sitio web podía consumirse desde una computadora de escritorio y monitores en laptops. Después surgió la necesidad de adaptar estos sitios a dispositivos portátiles como teléfonos inteligentes y tablets.

Al aumentar el consumo de sitios en dispositivos móviles surgió la necesidad de desarrollar primero para estos y después escalar a otras pantallas más grandes. Esta evolución ha llevado al punto en que algunos servicios estén disponibles cómo mobile-only, donde la única forma de consumirlos es desde un dispositivo móvil como el caso de aplicaciones financieras, de entregas a domicilio y otras más.

Twitter como caso de estudio
Esta popular red social ha pasado por diversas transformaciones en su diseño y una de las más importantes es su visualización desde diversos dispositivos.

Analizando estas capturas de pantalla podrás apreciar como desde la vista móvil se mantiene bastante simplificado, conforme aumenta se le añaden otros elementos y conserva otros en común.


Conclusión
Ahora sabes cuál es la razón por la que este estándar es tan importante actualmente en tus conocimientos como desarrolladora o desarrollador web. Además de que estás asegurándote de que tus sitios lleguen a más dispositivos y personas, también estás haciendo que tu código sea más fácil de escalar y de hacer modificaciones en el futuro. Ahora, te invito a continuar con el curso y seguir aprendiendo más sobre Mobile First.


4. Arquitectura inicial

La arquitectura web se puede definir como la forma en que las páginas de un sitio web están estructuradas y enlazadas entre sí (de manera lógica y coherente). Una arquitectura web ideal ayuda a los usuarios y a los motores de búsqueda a encontrar fácilmente lo que están buscando en un sitio web.

Arquitectura del proyecto:

- Header
- Main (4 secciones)
- Footer

<body>
    <header></header>
    <main>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </main>
    <footer></footer>
</body>


Articulo EMMET:
https://coderslink.com/talento/blog/ahorra-tiempo-al-escribir-codigo-html-en-visual-studio-code-utilizando-emmet/


5. Assets de nuestro proyecto

https://github.com/degranda/batata-bit

Los assets son todos los recursos estáticos que utilizaremos en nuestro proyecto, tales como:

Imágenes
Logotipos/Isotipos (Si el logotipo y el nombre de la empresa/marca se encuentran en elementos separados, es preferible descargarlos agrupados)

Íconos
PRO TIP: podemos descargar varios assets simultáneamente. Solo debemos seleccionar varios elementos, presionando CTRL + Clic sobre el elemento, y luego presionamos Export seleccionamos el formato, ¡y Listo! nuestros assets se descargaran en un archivo .zip

Clasificamos los assets según el tipo de recurso (imagen, ícono, etc.), además es recomendable que sigamos un estándar para nombrar nuestros archivos (nombre corto, descriptivo, en minúsculas, sin espacios).

Finalmente la estructura de carpetas de nuestro proyecto debería quedar de esta forma:

- assets
	- icons
	- img
		bitcon.svg
		logo.svg
	index.html

Recuerden usar .svg para las imágenes que no contengan tantos detalles o colores y para fotografías el mejor formato es .jpg que es una categoría lossy por lo que carga mas rápido, sin embargo este no tiene que pasar los 70 KB. 
Para mejorar el peso:
https://tinypng.com/ 

Experimentar cambiando iconos:
https://www.flaticon.es/

Nota de Binarios en GitHub: https://git-lfs.github.com/
si deseas subir mas fácil imágenes y aun así tener su control de versiones les recomiendo el uso de git-lfs el cual permite subir a un repositorio lfs (long file system) que esta directamente enlazado con el repositorio git y el repositorio en GitHub sin sobrecargar el peso de su carpeta .git 
Leer: https://docs.github.com/en/repositories/working-with-files/managing-large-files

En Linux se puede instalar:
sudo apt install git-lfs

Tutorial: https://www.youtube.com/watch?v=xPFLAAhuGy0


Otras opciones para subir imágenes:
https://imgur.com/
https://cloudinary.com/
https://postimages.org/


Notas iconos y rotación:
Encontré que hay iconos que solo cambia su rotación, hay que evitar que el sitio se sature en descargar imágenes y lo que se pueda remplazar con CSS implementarlo.
En este caso para rotar una imagen usaremos:
.miImagen{
transform: rotate(-10deg);
}

Donde el valor positivo gira a la derecha, el negativo a la izquierda seguido por un numero que indica los grados de rotación con s prefijo deg.


Visualizar imágenes dentro de VSC:
https://marketplace.visualstudio.com/items?itemName=jock.svg


6. Fuentes de nuestro proyecto

El diseño no puede tener más de dos fuentes, en el caso que existan más El editor o diseñador debe de elegir las fuentes del proyecto.

Para elegir el estilo de la fuente, mira en font-weight los valores que tiene y dependiendo de eso puedes elegir qué estilos utiliza el diseño.

Typography
Ag
Font			Montserrat
Weight		700
Style			normal
Size			18px
Line Height	21,94px
Align			Center
            
En google Fonts existen dos maneras de incorporarlo al código:

@import:No son buenas prácticas para las fuentes, sobre todo cuando existe más de una.

<link>:Es la forma más recomendable de insertar fuentes.
 

El tag de link con el valor de atributo rel=“proconnect” permite notificarle al navegador que la página requiere establecer una conexión a otro dominio y que esta debe realizarse de la forma más rápida posible. De esta forma cuando el navegador requiera hacer uso de los recursos (en este caso los tipos de fuente), la descarga de recursos será más rápido porque la conexión ya existirá de forma previa.
Esto permite mejorar el performance de la página.
Mas info aquí:
https://css-tricks.com/using-relpreconnect-to-establish-network-connections-early-and-increase-performance/

        
toggle word wrap(ctrl + z):
Alinea y organiza las líneas de código                        
   
--light:300;
--normal:500;
--bold:700; 


Combinación de fuentes
https://www.fontpair.co/   
     

7. Estilos base

Lista de trabajo en CSS: 
1. Posicionamiento --> static, absolute, relative, fixed
2. Modelo de caja (Box model) --> margin, border, padding, content
3. Tipografía --> tipos, tamaños de fuente, etc
4. Estilos visuales --> box-shadow, border-radius, gradient, etc
5. Otros --> reglas CSS y más

Nombrar variables en CSS
El nombre no debe ser igual al valor:
Cuando el nombre de la variable está ligada a su valor perdemos una de sus funciones que es la versatilidad de cambiar su valor y que todo el diseño cambie con ella por ejemplo:
Si tenemos una variable que se llama

--bitcoin-orange: #f7931a;
si luego quieres cambiar el color a un azul

--bitcoin-orange: #0000ff;
la variable pierde todo el sentido porque tiene en el nombre naranja, pero su valor es azul

El orden:

Cuando nombramos una variable es importante el orden porque cuando estamos escribiendo el código, nuestro editor tratara de autocompletarnos por eso lo mejor es nombrar la variable desde su característica más general hasta la más específica para aprovechar esta característica del editor

Meh 😕 Bueno
:root {
    /* Colores */
    --bitcoin-orange: #F7931A;
    --soft-orange:#FFE9D5;
    --secondary-blue: #1A9AF7;
    --soft-blue: #E7F5FF;
    --warm-black: #201E1C;
    --black: #282623;
    --grey: #BABABA;
    --off-white: #FAF8F7;
    --just-white: #FFFFFF;
}


Mejor 🧐
:root {
  /*------------------ colors --------------*/
	--primary-color: #f7931a;
    	--soft-primary-color: #ffe9d5;
    	--secondary-color: #1a9af7;
    	--soft-secondary-color: #e7f5ff;
    	--warm-dark-color: #201e1c;
    	--dark-color: #282623;
    	--darker-light-color: #bababa;
    	--background-color: #faf8f7;
   	--light-color: #ffffff;
}


Nota:
En Figma dentro de Branding podemos ver los colores usados en el prototipo. 


8. Maquetación del header

Emmet
https://docs.emmet.io/cheat-sheet/

Solo un H1 por pagina (SEO). Además, se recomienda que no tenga más de 50 o 60 caracteres.

https://platzi.com/cursos/seo/


Para agilizar el trabajo al momento de poner los textos de Figma, con darle click al texto al lado derecho tenemos la opción de copy en content.


9. Implementando BEM

https://9elements.com/bem-cheat-sheet/

## Metodología BEM

### Qué es BEM?
BEM (Block, Element, Modifier)
Es una metodología de CSS, que nos ayuda a crear componentes reutilizables, código claro y mantener la especificidad al mínimo.
Esto gracias a su nomenclatura. 

-> Mantener la especificidad al mínimo.
-> Código modular.
-> Código limpio.
-> Nomenclatura (Bloque, Elemento, Modificador)

---
### Qué es un Block?
Un bloque en BEM, es una entidad independiente, no necesita de nadie más para existir. (Header, Nav, Formulario, Footer, Contenedor)


#### Cómo nombramos a los bloques?
Se les nombre con la funcionalidad del bloque.



```
<nav class="nav"></nav>

<header class="header"></header>

<section class="container"></section>
```


---
### Qué es un Element?
Un elemento en BEM, depende directamente de un Bloque, por lo que este debe estar dentro de un bloque. (Es dependiente a un bloque y está ligado a él.)

#### Cómo nombramos a los elementos?
Se les nombra con el nombre de su bloque contenedor, dos guiones bajos y la descripción (funcionalidad) del elemento.



```
<form class="form">
	<input type="text" class="form__input">
	<input type="submit> class="form__send">
</form>

<nav class="nav">
	<a href="#" class="nav__item">Inicio</a>
	<a href="#" class="nav__item">Inicio</a>
</nav>
```


---
### Qué es un Modifier?
Un modificador en BEM, puede ser un bloque o un elemento, estos indican una modificación a dicho elemento o bloque.


#### Cómo nombrar a los modificadores?
Se les nombra, con el nombre que tenían anteriormente (bloque o elemento) se le agrega dos guiones medios y la descripción de la modificación. 



```
<nav class="nav">
	<a href="#" class="nav__link"></a>
	<a href="#" class="nav__link nav__link--disabled"></a>
</nav>

<header class="header header--blue></header>

<input type="text" class="form__input form__input--color-gray">
```


---
### Curiosidades BEM
#### Qué pasa si tengo un hijo dentro de un elemento?
Se nombran como un elemento



```
<header class="block">
	<section class="block__elem1">
		<div class="block__elem2">
		</div>
	</section>
	<div class="block__elem3">
	</div>
</header>
```



#### Una etiqueta puede tener 2 clases de un bloque?
Se le llama mix en BEM y si se puede.



```
<div class="block1 block2">
</div>
```


#### Podemos usar modificadores globales?
No se recomienda porque puede generar especificidad extra.


```
<button class="button disabled"></button>
```



---


## Ejemplo:

### index.html



```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEM</title>
    <link rel="stylesheet" href="./estilos.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav__logo">
                <img src="./logo-spotify.png" class="nav__img">
            </div>
            <div class="nav__links">
                <a href="#" class="nav__link nav__link--color">Inicio</a>
                <a href="#" class="nav__link">Acerca de</a>
                <a href="#" class="nav__link">Contacto</a>
            </div>
        </nav>
    </header>
    <nav class="nav">
        <div class="nav__logo">
            <img src="./logo-spotify.png" class="nav__img">
        </div>
        <div class="nav__links">
            <a href="#" class="nav__link nav__link--color">Inicio</a>
            <a href="#" class="nav__link">Acerca de</a>
            <a href="#" class="nav__link">Contacto</a>
        </div>
    </nav>
</body>
</html>
```





### estilos.css



```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif;    
}
.nav{
    background: slateblue;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.nav__logo {
    height: 100%;
    background: #fff;
}

.nav__img {
    height: 100%;
}   

.nav__link{
    color: #fff;
}

.nav__link--color{
    color: #000;
}

```

Nota: Al usar Display: Flex en un padre, los hijos se pueden centrar con align-self: center


10. Uso de linear-gradient

Explicación funcionamiento y uso de Linear-gradient()
https://developer.mozilla.org/es/docs/Web/CSS/CSS_Images/Using_CSS_gradients
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient


Herramienta para trabajar con gradients
https://cssgradient.io/

Convertir los diferentes formatos de color.
https://www.peko-step.com/es/tool/tfcolor.html

Colección pre seleccionada de degradados:
https://uigradients.com/#Kyoto
https://uigradients.com/#Kyoto


En el gradiente ya podemos utilizar nuestras variables:
background: linear-gradient(207.8deg, var(--warm-dark) 16.69%, var(--bitcoin-color) 100%);


Distancia interlineado
line-height: 2.6rem


Otra forma de usar Gradients
Puedes usar el linear- gradient de la siguiente manera para obtener un background de dos colores: Eliges un ángulo y colocas

background: rgb(108,58,92);
background: linear-gradient(90deg, rgba(108,58,92,1) 20%, rgba(58,108,58,1) 20%, rgba(58,108,58,1) 40%, rgba(108,58,92,1) 40%, rgba(108,58,92,1) 60%, rgba(58,108,58,1) 60%, rgba(58,108,58,1) 80%, rgba(108,58,92,1) 80%);!

Este código generaría 5 columnas de 20% cada una que alternan entre los colores morado y verde.
Las posibilidades son infinitas, puedes usar más colores o combinar contenedores para obtener diferentes formas.


Otro concepto:
https://platzi.com/comentario/2222128/


11. Uso de position para botón flotante

La función CSS Calc() permite realizar operaciones con los valores de propiedades CSS.
Se puede usar para operar con medidas, frecuencias, ángulos, tiempo, porcentajes, números y enteros.

Sintaxis:

/*Propiedad: calc ( expresión)*/
width: calc(100% - 80px);
Se pueden utilizar operaciones de suma (+), resta (-), multiplicación (*) y división (/). En el caso de la suma y resta, es necesario siempre dejar espacios en blanco (whitespaces) entre los valores para que no se generen errores.


Se tiene que tomar el 50% del total del width del contenedor en este caso 229px y quedaría así:
left: calc(50% - 114.5px);


Una forma más fácil de centrar al botón sería así:

    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
}```

Creo que es más sencillo, queda perfectamente alineado sin necesidad de hacer cálculos nosotros mismos.


Documentación: 
https://developer.mozilla.org/es/docs/Web/CSS/calc


12. Estructura base de la sección de intercambio

Indagar sobre preprocesador SASS


Extension para autocompletar selectores: clases 
https://marketplace.visualstudio.com/items?itemName=solnurkarim.html-to-css-autocompletion


13. Imagen de background


14. Estructura de tabla de monedas

table>tr>td
Las etiquetas <tr> (del inglés "table row") definen cada fila de la tabla y encierran todas las columnas. Por último, la etiqueta <td> (del inglés "table data cell") define cada una de las columnas de las filas, aunque realmente HTML no define columnas sino celdas de datos.

Dato de Fecha
Para que se vea un poco mas dinámica la fecha, (ya que no estamos en Julio…) pueden usar esta línea de JS para que les cargue la fecha y hora del momento:

 <p>Actualizado el: <script> document.write(new Date().toLocaleString());</script> </p>
 

15. Estilos base de tabla de monedas

Nota para posicionamiento: 
Para centrar elementos de manera mas limpia y concisa, pueden usar “margin-inline: auto”. De esa manera evitan tener que especificar medidas para top y bottom usando únicamente “margin”.


16. Detallando estilos de tabla de monedas

Una pequeña alternativa a “border-radius”:

border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius


17. Finalizando estilos de tabla de monedas

Crear siguiente tabla


18. Estructura base de la sección de beneficios

# Dato MarkDown en el uso de Imágenes 
<img src="./assets/icons/batata.svg" width="100">


19. Estilos de la sección de beneficios

Nota Position:
Siempre que tengamos que colocar un position absolute debemos asegurarnos de que el padre directo tenga un position relative. Esto sirve en imagenes que flotan entre dos secciones.


left: calc(50% - 20px);

left(atributo): Alinea un elemento con referencia al lado izquierdo de nuestro contenedor.

calc()(función): Nos permite realizar cálculos para determinar valores de propiedades CSS.
Un Recordatorio al usar calc() respetar los espacios entre el signo y los números estuve 20 minutos buscando que clase era la que me sobre escribía mi estilo incluso usaba el tag !important o estilos inline y no me funcionaba por no respetar los espacios.

50%(parámetro): Representa la mitad del ancho del contenedor(para 320px, el 50% serían = 160px), lo cual alineará nuestro elemento 160px de izquierda(left) a derecha.

20px: Representan la mitad del ancho(width) de nuestro elemento, esto se hace con la finalidad de poder posicionarlo en el centro de nuestro contenedor.


Nota de accesibilidad en colores de contraste: 
Ten cuidado con el contraste, puede ocasionar problemas grandes de accesibilidad:
Una herramienta que utilizo para ver si dos colores tienen contraste suficiente como para usar uno de background-color y el otro como color es contrast ratio.
-> https://contrast-ratio.com/#

Según la W3C todos los textos e imágenes con texto deben tener un contraste de al menos 4.5, cosa que podemos saber con la herramienta que ya he mencionado arriba, sin embargo. Aquí hay algunas excepciones. Espero les sea de mucha utilidad:)
-> https://www.w3.org/
-> https://www.w3.org/TR/WCAG/#contrast-minimum
 

Nota sobre posiciones:
Pensé que bottom: 10px era lo mismo que top: -10px pero ahora sé que me hace falta mucho por aprender de las positions en CSS 😄.

Explicación:
Bottom 10 toma de referencia la parte inferior de la caja. Y la posoción del logo sería 10px arriba de esa línea.
.
Top toma como referencia la línea superior de la caja. Si le das top:10px, el logo estará 10px abajo de esa línea. Pero si le das -10px, el logo estará por encima de la línea superior.

Herramienta para asegurarte de cómo queda tu diseño en una gran cantidad de dispositivos:
https://responsively.app/


20. Maquetando tarjetas de beneficios


21. Maquetando sección comodín

Pagina que optimiza las imagenes hasta en un 90% Compressor:
https://compressor.io/


22. Estructura de sección de planes

Podemos generar de manera sencilla un smooth scrolling al hacer clic en el botón del header agregando al CSS: https://scrollrevealjs.org/

html {
	scroll-behavior: smooth;
}

Queda mejor una etiqueta <sup> en vez de <span> para el símbolo “$” ya que se encuentra en superscript.


23. Aplicando estilos a sección de planes

Un detalle: line-height es el interlineado de párrafo (no el alto de fuente). Se usa para establecer la distancia entre líneas de texto.


24. Aplicando estilos a las tarjetas de la sección de planes


25. Detallando estilos en tarjetas de planes

Para poner en arriba el $ agregar lo siguiente

.plan-card--price span {
    font-size: 1.2rem;
    font-weight: 300;
    vertical-align: text-top;
    vertical-align: 25px;
}```


.plan-card__price span {
    position: absolute;
    top: -7px;
    left: calc(50% - 40px);
    font-size: 1.2rem;
    font-weight: 300;
}

https://webgradients.com/

La propiedad font-weight de CSS especifica el peso o grueso de la letra. Algunos tipos de letra sólo están disponibles en normal y bold.


Otra forma de posicionar el $:

Hola a todos!
Decidí agregar el signo $ a través de un pseudo elemento creado con ::before (utilicé ::before porque el símbolo está _antes _del número).

.price-card .price-card__planPrice {
    font-size: 5.2rem;
    line-height: 6.3rem;
    font-weight: bold;
    position: relative; /*para qeu el símbolo se posicione en relación al número*/
}
.price-card .price-card__planPrice::before {
    position: absolute;
    top: 20%;
    left: calc(50% - 45px);
    content: '$';
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;  /*La altura de la línea del texto es igual a la altura del texto (sería algo así como sacarle el padding  top y bottom a una caja)*/
}


Interesante aunque es bastante complicado para algo muy simple. Al final lo realmente importante está en cosas como la accesibilidad, parece tonto y no concierne a este curso pero no está demás aprender…

Los elementos ::after y ::before sirven para insertar contenido antes o después de un elemento, pero no son muy accesibles, semánticamente hablando “no existen” y si un usuario con limitaciones visuales/cognitivas usando un screen reader pasa por ahí le va a leer “99”, cuando debería leerle “dollar sign 99”.

Detalles tontos pero que luego nos vuelven a morder la cola xD



Para poner arriba el $ yo lo hice con position absolute

.price span {
    position: absolute;
    top: 65px;
    left: 25%;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5rem;
    font-family: "Inter", sans-serif;
 
}```



La primera solución que se me ocurrió fue usar la posición absoluta y colocar un top y left.
Al principio puse ⚠ left: -60px; pero al hacer más grande la resolución de la página esto se corría de lugar por lo cual no era viable. Entonces usé el siguiente código que nos enseño Diego en las clases anteriores.

.plan-card__price {
    position: relative;
    padding: 5px 0;
    font-size: 5.2rem;
    font-weight: bold;
    line-height: 5.3rem;
    color: black;
}

.plan-card__price span {
    position: absolute;
    top: -7px;
    left: calc(50% - 40px);
    font-size: 1.2rem;
    font-weight: 300;
}
Usando calc podemos mover el elemento desde la línea central del elemento, y como la línea central nunca va a variar porque el centro siempre será el centro, entonces no se mueve del lugar a pesar de cambiar el tamaño de la página. En cambio, tomando como referencia los costados como left o right porque estos pueden variar al hacer más grande la pantalla.


26. Aplicando estilos al botón de call to action

Para que los números del “99” queden unidos pueden usar:

letter-spacing: -0.08em;


27. Scroll horizontal con CSS

overflow-x 
La propiedad de CSS overflow-x establece lo que se muestra cuando el contenido desborda los bordes izquierdo y derecho de un elemento a nivel de bloque. Puede que no sea nada, una barra de desplazamiento o el contenido adicional.
-> https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x

overscroll-behavior
la propiedad de css overscroll-behabior establece lo que hace un navegador cuando alcanza el límite de un área de desplazamiento. Es una abreviatura de overscroll-behavior-x y overscroll-behavior-y.
-> https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior

scroll-snap-type
La propiedad CSS scroll-snap-type establece qué tan estrictamente se aplican los puntos de snap en el contenedor de desplazamiento en caso de que haya uno
-> https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type


Ejemplo:
https://ed.team/blog/personaliza-el-scroll-de-tu-web-solo-con-css


Indagar sobre Gap:
https://caniuse.com/


28. Footer


29. Aplicando media queries

https://vanseodesign.com/web-design/3-breakpoint-types/
https://www.youtube.com/watch?v=T-_4YTAfmbA


Página de referencia copiar diseño:
https://didacticode.com/

Editor Online para compartir código:
https://codepen.io/

Tutorial:
https://www.youtube.com/watch?v=h4ZuuZTwzvU

Mi cuenta:
https://codepen.io/your-work

30. Análisis con Lighthouse

Picarle a las 2 flechas del inspector de elementos
- Performance
- Best practices
- Accessibility 

-Mobile

*Generar reporte


Utilicen esta herramienta en modo incognito, según he visto las extensiones que tenemos instaladas ralentizan el proceso de carga de las páginas y baja la puntuación.


31. Cierre y próximos pasos



https://github.com/PabloLUC9832/Platzi-Examenes/blob/main/cursoMobileFirst.md


John Steven Bernal Gonzalez
Angel leon
Dayse Poma
Juan Pablo Jimenez
Carlos Alberto Escobedo Moreno
one_cata
MGuedez



Curso de Responsive Design: Maquetación Mobile First
Resumen

Estas son tus respuestas
Puedes revisar y cambiar las respuestas. Al terminar presiona “Calificar respuestas” para enviar las preguntas y conocer tu puntuación.
1.
¿Qué es y para qué nos sirve Figma?
Figma es una web based herramienta que nos ayuda a diseñar y prototipar mayormente interfaces de aplicaciones.
CAMBIAR
2.
¿A qué nos referimos cuando hablamos de HTML Semántico?
Es construir la estructura de nuestro documento utilizando las etiquetas de HTML para las partes o secciones específicas para las que fueron creadas.
CAMBIAR
3.
Si voy a utilizar muchos iconos, ¿Cuál es el formato que más me conviene utilizar?
SVG
CAMBIAR
4.
Si estoy utilizando imágenes tipo fotografías, ¿Cuál es el mejor formato?
JPG
CAMBIAR
5.
¿Qué es una variable de CSS?
Son entidades definidas en CSS que contienen valores específicos para ser reutilizados en un documento
CAMBIAR
6.
¿Para qué nos sirve utilizar metodologías tipo BEM?
Es una convención que nos ayuda a nombrar nuestras clases de CSS de forma que al momento de dar estilos evitemos pisar estilos de otros elementos.
CAMBIAR
7.
¿Cómo hacemos una esquina redondeada usando CSS?
border
CAMBIAR
8.
¿Qué son los degradados en CSS?
Es una propiedad de CSS que le permite mostrar una transformación suave entre dos o más de dos colores específicos.
CAMBIAR
9.
¿Cuál es la diferencia entre Margin y Padding?
En CSS, el Margin es la propiedad mediante la cual podemos crear un espacio exterior alrededor de los elementos. El Padding es la propiedad mediante la cual podemos generar el espacio interior de un elemento.
CAMBIAR
10.
¿Qué tipo de Position utilizamos cuando decimos que el elemento se saca completamente del flujo normal del diseño de página?
Absolute
CAMBIAR
11.
¿Cuál es la forma de cambiar elementos inline a elementos block?
display: block;
CAMBIAR
12.
¿Qué propiedad de CSS utilizamos para asegurar que el width y height de un elemento sea el mismo que definimos sin importar el padding y border que tenga el elemento?
box-sizing: border-box;
CAMBIAR
13.
¿Con qué position, no puedo utilizar las propiedades de top, right, bottom y left en css?
static
CAMBIAR
14.
¿Cuántas etiquetas de encabezado existen en HTML?
6
CAMBIAR
15.
¿Qué propiedad tendría que utilizar para alinear al centro los elementos de un contenedor que está como display flex?
justify-content: center;
CAMBIAR
16.
¿Para qué sirven los media queries?
Es la forma en la que puedo marcar break points para cambios en el layout dependiendo del tamaño de la pantalla del dispositivo.

CAMBIAR
17.
Cuando estás trabajando con tablas en HTML ¿Qué etiqueta utilizamos para representar la fila de la tabla?
tr
CAMBIAR
18.
Cuando estás trabajando con tablas en HTML ¿Qué etiqueta utilizamos para representar la celda de la tabla?
td
CAMBIAR
19.
¿Cuál es la medida base que toma rem en CSS?
rem toma la medida de font-size del root element, que en este caso sería html
CAMBIAR
20.
¿Cuál es unos de los beneficios de utilizar medidas relativas en font-size?
Nos ayuda en temas de accesibilidad, la fuente podría hacerse más grande si el usuario incrementa el tamaño de fuente desde su navegador

