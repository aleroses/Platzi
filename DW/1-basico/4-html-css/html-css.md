# Curso Definitivo de HTML y CSS
> Diego de Granda

## 1. Qué aprenderás sobre HTML y CSS

- **HTML (HyperText Markup Language)**: es el lenguaje utilizado para darle estructura a la información que va a ver el usuario en el proyecto final.

- **CSS (Cascading Style Sheets)**: Hojas de estilo en cascada, tiene que ver con todo lo estético, diseño, color, fuente, tamaño de letra, etc.

- **JavaScript (JS)**: Es el encargado de hacer que los dos conceptos anteriores se ejecuten, su función puede ir desde hacer que funcione un simple botón, hasta llenado de formularios automáticos, es un lenguaje que funciona de manera nativa dentro de los navegadores.

[Slides del curso](https://static.platzi.com/media/public/uploads/slidescss_1a0d5eaf-b5f6-4563-b80c-a073604d9628.pdf)

## 2. ¿Qué es el Frontend?

El Frontend es el desarrollador que va a manejar las cosas del lado del cliente (navegadores).

🔥 Las tecnologías que trabajan son:  
- HTML https://devdocs.io/html/
- CSS https://devdocs.io/css/
- JS https://devdocs.io/javascript/

🔥 Los frameworks de CSS que suelen manejar son:  
- Bootstrap https://getbootstrap.com/
- Foundation CSS https://get.foundation/
- Materialize CSS https://materializecss.com/

🔥 Los frameworks de JS:  
- React JS https://es.reactjs.org/
- Angular JS https://angular.io/
- Vue JS https://vuejs.org/

🔥 Preprocesadores de CSS:  
- stylus https://stylus-lang.com/
- SASS https://sass-lang.com/

🔥 Compiladores / empaquetadores de JS:  
- BABEL https://babeljs.io/
- Webpack https://webpack.js.org/


## 3. ¿Qué es Backend?

El Back-end es lo opuesto a lo que hace el Front-end, trabaja del lado del servidor.
No tiene un estándar.

🔥 Lenguajes de programación:
- NodeJS
- Python
- PHP
- Go
- Java

🔥 Frameworks:
- Django 	-> para Python
- Laravel 	-> para PHP
- Rails 	-> para Ruby 
- Express 	-> para JavaScript o NodeJS
- Spring 	-> para Java

🔥 Infraestructura: Dentro de esto uno se puede especializar como DevOps:
- Google Cloud
- Digital Ocean
- AWS
- Heroku.

🔥 Bases de Datos:
- MongoDB 	-> No relacional 
- MySQL 		-> Relacional
- PostgreSQL	-> Relacional 


## 4. ¿Qué es FullStack?

Un Full Stack es la fusión de un Front-end y todas las cosas que hace un Back-end en una sola persona.

Un full stack no maneja por completo todas las tecnologías de ambas partes, de hecho no es recomendado y no es sano. El desarrollo web evoluciona muy rápido y cada dos o tres meses tenemos algo nuevo.

Lo bueno de alguien full Stack es que entiende muy bien cómo funciona un producto web de principio a fin, desde su diseño en mockup y deploy a producción.


🦄 Pequeño resumen de la clase:    
Un Full Stack es una combinación de un Front-end y un Back-end, no maneja al 100% todas las tecnologías pero es un desarrollador que entiende bien como funciona un producto web de inicio a fin


## 5. Páginas Estáticas vs. Dinámicas

🔥 Sitos Web Estáticos:    
La información que contiene, se mantiene constante y estática. No se actualiza con la interacción del usuario.
Conveniente para landing pages (Páginas informativas) o Blogs.
Serán siempre iguales para todos los usuarios.

- Estáticas: es aquella que es más sobre lectura.
- Una vez que se publica no va a cambiar.
- Se puede conocer como landing pages.
- No están conectadas a una base de datos, porque todo se desarrolla desde el servidor.

Ejemplo de páginas estáticas:

-   Menú de un restaurante
-   Blog de viajes
-   Página informativa de un negocio

🔥 Sitios Web Dinámicos (Aplicaciones Web):    
Actualizan su información con respecto a la interacción del usuario. Dependen de una base de datos, de donde extrae e ingresa información.
Serán diferentes, dependiendo del usuario que la use.

- Son aplicaciones web.
- Si existe una interacción.
- Necesita conexión a un servidor.
- Puede haber un inició de sesión.

Ejemplo páginas dinámicas:

-   Sistema de reporte de ventas
-   LinkedIn
-   Banca en línea

![Static and Dynamic](https://i.postimg.cc/0NrB87MX/5-static-dynamic.png)


## Quiz 

1. ¿Qué hace un desarrollador Full stack?    
	Maneja tecnologías específicas tanto Back-end como Front-end, pero se especializa en un lado en particular.

2. ¿Qué tecnologías maneja principalmente un desarrollador Back-end?    
	Lenguajes de programación/frameworks que corran del lado del servidor, infraestructura en la nube y bases de datos.

3. ¿Qué tecnologías maneja principalmente un desarrollador Front-end?   
	Estándares web: HTML, CSS y JavaScript.

4. HTML da la estructura a la información que ven los usuarios y CSS el estilo a esta información ¿Qué analogía los representa mejor?   
	HTML es el esqueleto de una persona y CSS su apariencia al exterior.


## 6. HTML: anatomía de una página web

HTML (HyperText Markup Language) es un lenguaje de marcado de texto. Se utiliza para darle una estructura al sitio web que estás visitando.

Anatomía de una página Web:
- Container.- Contenedor principal
- Header.- Cabecera de la página (Logo, Navigation)
- Main content.- Estructura principal, por ejemplo el post de un red social. (Costado izquierdo)
- Sidebar.- Contenido secundario de una página. (Derecho)
- Footer.- Pie de página.

![Layout](https://i.postimg.cc/nrcMVpvG/6-anatomia-html.png)

Las etiquetas en HTML nos ayudan a diferenciar en qué parte del contenido nos encontramos.

La web se conforma de tres conceptos:

-   URL: Uniform Resource Locator. El identificador único del sitio en el navegador (por ejemplo: [https://platzi.com](https://platzi.com/)).
-   HTTP: Protocolo de transferencia de hipertexto. Es el estándar que se utiliza para enviar datos a través de paquetes entre el cliente y el servidor.
-   HTML: es el código que se emplea para estructurar el contenido de tu web, y darle sentido y propósito.

HTML son siglas que corresponden a Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto).

-   Hyper Text significa que el texto tiene interactividad, conexión con otros documentos.
-   Markup significa que le pone etiquetas a los elementos. Por eso también se le conoce como un lenguaje de etiquetas.  
    HTML es un lenguaje interpretado. Además, HTML es un estándar, así que no importa desde qué navegador o dispositivo se ejecute, el código sigue siendo el mismo en cualquier sitio.



## 7. Index y su estructura básica: head

🔥 Index y su estructura básica:  

```html
<!-- Indica que es HTML 5 -->
<!DOCTYPE html>
<!-- Contenedor padre + Lenguaje del proyecto -->
<html lang="en"> 👈👀
<!-- Importante para el navegador y no es visual para el usuario -->
<head>
	<!-- UTF-8 para que el navegador entienda caracteres especiales -->
	<meta charset="UTF-8">
	<!-- Ayuda en la parte de SEO y define descripción de la página web -->
	<meta name="description" content="Esta página muestra gatitos">
	<!-- Posicionamiento de webs en busquedas (Mayor visibilidad en la web) -->
	<meta name="robots" content="index,follow">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Webs responsive -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Titulo de la pestaña en el navegador -->
	<title>Document</title>
	<!-- Vinvular otros archivos -->
	<link rel="stylesheet" href="./style.css">
</head>
<!-- Esto si es visible para el usuario -->
<body>

</body>
</html> 👈👀
```


- **index.html**    
	Siempre es la primera página, es la que el servidor busca al abrir un proyecto
- `<head>`    
	Van las cosas importantes para el navegador que el usuario no ve, dependencias, librerías externas, fuentes y ligas CSS.
- `<meta>`     
	Información para el navegador, se cierra sola.  
- Algunas etiquetas se auto cierran  
- `<meta name="keywords" content="HTML, CSS, JavaScript">`    
	Define palabras clave para motores de búsqueda:
- `<meta name="author" content="John Doe">`   
	Define el autor de una página:
- `<meta http-equiv="refresh" content="30">`
	Actualiza el documento cada 30 segundos
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`   
	Configuración de la ventana gráfica para que su sitio web se vea bien en todos los dispositivos (Este es importante):


Documentación:   
- https://devdocs.io/html/

Etiquetas de HTML5:     
- https://lenguajehtml.com/html/introduccion/tabla-periodica-html5/
- https://allthetags.com/
- https://i.emezeta.com/weblog/html5-cheatsheet/html5-cheatsheet-2019.pdf


❄ Intentar extensión:    
	Indent-rainbow


🦄 Alt + shift + A:    
	Comentarios en Visual Studio Code.


## 8. Index y su estructura básica: body

Hay 2 tipos de etiquetas:    
- De contenido.- Son las etiquetas que llevan el texto, las imágenes y todo que se pueda renderizar en el proyecto.
- Contenedoras.- Llevan más etiquetas adentro y nos ayudan a llevar la estructura del proyecto.

Tenemos que utilizar un HTML semántico.   

```html
<!--Todo lo que viene es HTML, en DOCTYPE la etiqueta se cierra automáticamente-->

<!DOCTYPE html>
<!-- lang es el tipo de lenguaje en la que está la página -->
<html lang="es">
 
    <!--En head va todo lo que necesita el navegador para ejecutar la página-->
    <head>
        <!--Las etiquetas meta le dan información al navegador, se cierran solas-->
            <!-- charset ayudará al navegador a entender caracteres especiales -->
        <meta charset="UTF-8">
            <!-- name ayuda al CEO, content  -->
        <meta name="description" content="Esta página te mostrará fotos de gatos">
            <!-- Autorizar a los robots en buscadores para encontrar esta página -->
        <meta name="robots" content="index, follow">
            <!-- title, título de la pestaña -->
        <title>Es mi página</title>
            <!-- Dimensiones de la página -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Carga las hojas de estilo -->
        <link rel="stylesheet" href="./css/style.css">
    </head>
 
    <!--En body va todo lo que el usuario verá - texto, imágenes, etc-->
    <body>
        <!-- Header: etiqueta para el encabezado de la página-->
        <header>
            <!-- Nav se usa para la barra de navegación-->
            <nav></nav>
        </header>
        <!-- main contenido principal-->
        <main>
            <section>
                <article>
 
                </article>
            </section>
            <!-- ul Listas ordenadas-->
            <ul>
                <li>Soy una manzana</li>
            </ul>
            <!-- ol Listas desordenadas-->
            <ol>
                <li>Soy una manzana</li>
            </ol>
        </main>
        <!-- Pie de página -->
        <footer>
 
        </footer>
        <p>
            Soy un texto
        </p>
        <h1>Soy un título</h1>
        <h2>Soy otro título</h2>
        <h3>Soy otro título más</h3>
        <!--Agregar hipervínculos-->
        <a href="">Soy un link</a>
    </body>
</html>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element


## 9. Reto: crea tu lista de compras del supermercado

Emojis: https://emojipedia.org/search/?q=+Strawberry

🔥 Desafío en html:    

Soy la lista del super!

- Frutas
	1. Manzanas
	2. Plátano
- Carnes
	1. Pollo
	2. Carne molida
- Verduras
	1. Limón
	2. Zanahoria (Link receta)   
💚 Creado con amor


## 10. Anatomía de una etiqueta de HTML

![Anatomía etiqueta](https://i.postimg.cc/j260MNfv/10-anatomia-etiqueta.png)

a: ancla


## Quiz   

1. ¿Qué significa utilizar HTML semántico?     
	Que debo utilizar las etiquetas correspondientes para la parte del sitio que corresponde. Por ejemplo, crear un footer con la etiqueta `<footer>`.

2. Son etiquetas básicas que van dentro de `body`:      
	header, nav, main, section, article, div, a y footer.

3. Son las partes de una etiqueta HTML:     
	Etiqueta de apertura, atributo, nombre de atributo, valor de atributo y etiqueta de cierre (si la tiene).

4. Todas las etiquetas de HTML tienen una etiqueta de apertura y cierre.    
	Falso.

5. La anatomía de una página web generalmente tiene estas partes:     
	Header, Main content, Sidebar y Footer.

6. ¿Qué significa HTML?    
	Hyper Text Markup Language.


## 11. Tipos de imágenes

Lossy y Lossless (con pérdida / sin pérdida). Esto depende del formato de imagen.

### Lossless (sin pérdida)
Son formatos sin pérdida, la calidad de imagen no se cambia, las imágenes suelen ser pesadas.

-   Capturan todos los datos del archivo original.
-   No se pierde nada del archivo original.
-   Puede comprimirse, pero podrá reconstruir su imagen al estado original

### Lossy (con pérdida)
Pierde calidad, pero se mejora el tamaño y la carga en el navegador. Las imágenes que pierden calidad llegan a ser más pequeñas pero se cargan más rápido.

-   Se aproximan a su imagen original.
-   Podría reducir la cantidad de colores en su imagen o analizar la imagen en busca de datos innecesarios.
-   Por consiguiente puede reducir su tamaño, lo que mejora el tiempo de carga de la página, pero pierde su calidad.
-   Los archivos tipo lossy son mucho más livianos que los archivos tipo lossless, por lo que son ideales para usar en sitios en donde el tamaño del archivo y la velocidad de descarga son importantes.

🔥 Formatos:   
- **GIF (Graphics Interchange Format)**: Formato de imagen sin pérdida, no se puede comprimir
- **PNG 8 (Portable Network Graphics)**: Formato de imagen sin pérdida, uso de colores de 256, se utiliza para logotipos e iconos para la página (tienen transparencia).
- **PNG 24 (Portable Network Graphics)**: Formato de imagen sin pérdida, uso de colores ilimitados, alta calidad, si intentamos comprimir no ayudará demasiado por la gran cantidad de colores (tienen transparencia).
- **JPG / JPEG (Photographic Experts Group)**: Formato de imagen con pérdida, perdemos calidad a la hora de comprimirlas, pero llegan a ser óptimas para la carga en la página web.
- **SVG - Vector (Scalable Vector Graphics)**: Formato de imagen muy ligero sin pérdida, con svg no perdemos calidad ya que esta compuesta por vectores.

🔥 TABLA DE DIFERENCIAS

| -----  | Categoría | Paleta | Uso |
| -      |  -        | -      | - |
| GIF    | Lossless  | Máximo 256 colores  | Animaciones simples - Gráficos con colores planos |
| PNG-8  | Lossless  | Máximo 256 colores  | Uso de transparencias - Sin animación - Ideal para íconos |
| PNG-24 | Lossless  | Colores ilimitados  | Similar a PNG-8 - Maneja imágenes fijas de más colores y transparencia |
| JPG    | Lossy     | Millones de colores | Imágenes fijas - Fotografía |
| SVG    | Vector/Lossless | Colores ilimitados| Gráficos / logotipos para web - Retina / pantalla de alta- Resolución |


## 12. Optimización de imágenes

No es optimo cargar imágenes de 3 megas en nuestros proyectos, va a tardar mucho tiempo en renderizar.

Tamaño optimo:    
	- En promedio una imagen debe pesar al rededor de 70 kb.

Optimización de imágenes: 
- Mejora el tamaño de tus imágenes
	- [Tiny PNG](https://tinypng.com/)
- Retira metadatos de tus imágenes
	- [Verexif ](https://www.verexif.com/)


## 13. Etiqueta img

- Descargar Imágenes:   
	- https://www.pexels.com/es-es/
	- https://unsplash.com/
	- https://www.pexels.com/es-es/

- Reducir tamaño de las imágenes:    
	- https://tinypng.com/

```html
<body>
	<main>
		<section>
	       <figure>
                <img src="./pics/cafe-expres.gif" alt="Descripción de un cafe-expres">
            </figure>
        </section>
    </main>
</body>
```

Documentación:    
- https://devdocs.io/html/element/img


❄ Resumen:   

La etiqueta `<img>` va dentro de `<body>` + `<main>` + `<section>` y la etiqueta va así:   
> `<img src=“” alt=“”>`

La etiqueta img cuenta con dos atributos, el atributo “src” y el segundo atributo es “alt” ambos son importantes.

El atributo de “src” es para decirle en donde se encuentra la imagen que queremos mostrar, las imágenes se pueden sacar de alguna carpeta o alguna URL que tengamos en internet.

Usando src=“./  VSCode te dará el nombre en donde esta ubicada tu imagen, solo das click y listo.

NOTA: En caso de que el nombre de tu imagen lleve algún espacio deberás sustituir ese espacio con un guion o guion medio.

`<alt>` sirve para poner la descripción de nuestra imagen y también nos ayuda con temas de accesibilidad. 


## 14. Etiqueta figure

`<figure>` es una etiqueta contenedora en la cual va la etiqueta `<img>`, pueden ser una o varias imágenes y semánticamente es lo correcto para el navegador.

La etiqueta `<figcaption>` `</figcaption>` nos ayudar a dar una explicación visual de la imagen, por ejemplo que abajo de la imagen de un perrito diga “Es una imagen de perrito” puede ser una descripción, el nombre del autor de la imagen o algo referente a la imagen.

Queda de la siguiente forma:   

```html
<body>
	<main>
		<section>
	       <figure>
                <img src="./pics/cafe-expres.gif" alt="Descripción de un cafe-expres">
                <figcaption>Es una imagen de un cafe express</figcaption>
            </figure>
        </section>
    </main>
</body>
```


## 15. Etiqueta video

La etiqueta `<video>`, tiene algunos atributos como:   
- ` controls:` agrega al video los controles necesarios para reproducir, pausar y adelantar.
- `preload = auto:` hace que el navegador cargue el video, en el momento en el que se acceda a la página.

Otros atributos:   
- `preload="metadata":` Carga previa de los metadatos
- `preload="none":` No existe carga de vídeo previa

La etiqueta `<source>`, se puede colocar dentro de una etiqueta `<video>` varias veces, para especificar diferentes rutas. Esto para asegurar que cualquier navegador pueda mostrar el video.

`src=./algo-mejor.mp4#t=6,11`  -> `#t=6,11` hace referencia al segundo que quiero que empiece y finalice la reproducción de un video

Queda de la siguiente forma:   

```html
<body>
    <main>
        <section>
            <video controls preload="auto">
                <!-- Diferentes formatos de video -->
                <source src="./algo-mejor.mp4#t=10,15"/>
                <source src="./algo-mejor.mp4#t=10,15"/>
                <source src="./algo-mejor.mp4#t=10,15"/>
                <source src="./algo-mejor.mp4#t=10,15"/>
            </video>
        </section>
    </main>
</body>
```


## Quiz

1. ¿Cuál es la diferencia entre la etiqueta `<img>` y `<figure>`?    
	`<img>` nos permite solo colocar una imagen y `<figure>` permite colocar varias `<img>` con una descripción opcional.

2. Son formas de optimizar el peso de las imágenes:   
	Comprimir el tamaño y retirar los metadatos de las imágenes.

3. ¿De dónde nos permite traer imágenes el atributo src de la etiqueta `<img>`?   
	De una URL de internet o desde un directorio.

4. Configurar la etiqueta `<video>` para que reproduzca automáticamente videos es:   
	Una mala práctica, esto es penalizado en múltiples navegadores y el usuario debe decidir reproducirlo.

5. Son los dos tipos de imágenes con los que trabajarás:   
	Lossy (con pérdida) y Lossless (sin pérdida).


## 16. Etiqueta form e input

Es importante utilizar la etiqueta <form></form> para indicar que utilizaremos un formulario, además de la semántica y buenas practicas.
Dentro de estas etiquetas indicaremos los elementos del Formulario como lo son…
<label></label> que sera como nuestro “Contenedor” en esta ocasión. dentro de el pondremos la etiqueta <span></span> (No es necesario) para colocar un texto haciendo alusión al contenido esperado (nombre, contraseña, fecha etc…) y viene una de las etiquetas importantes la cual es <input> aqui es importante aclarar que hay muchos tipos de Input, los que verán en este ejemplo son text, password, date, time pero hay muchos mas…
Tambien esta el atributo placeholder para colocar un texto como guía dentro de la caja (Input) y este al hacer click sobre el se eliminara.
y Creo que es lo mas rescatable! 😄


<section>
	<form action="">
           <label for="nombre">
			<span>Cuál es tu nombre?</span>
                <input type="text" name="" id="nombre" placeholder="Your name">
		</label>
	     <label for="inicio-platzi">
			<span>Qué día comenzaste en Platzi?</span>
			<input type="date" name="" id="inicio-platzi">
		</label>
		<label for="horario">
			<span>En que horario estudias?</span>
			<input type="time" name="" id="horario">
		</label>
	</form>
</section>


## 17. Calendar

https://developer.mozilla.org/es/docs/Web/HTML/Element/input

Convertir el código en comentarios: 
CTRL+K … CTRL+C

Tambien:
CTRL + /

Seleccionar varias palabras iguales y modificarlas al mismo tiempo:
Control + D


RESUMEN.

Se usa para recibir datos de hora, día, mes, año.
El input tipo “submit” genera un botón para enviar los datos.
<form action="">
	<label for="calendar">
		<span>Calendario</span>
		<input type="datetime-local" id="calendar" name="calendar">
	</label>
	<input type="submit">

</form>
 

Clic derecho:
Open with live server


## 18. Autocomplete y require

Autocomplete
Te ayudara a completar datos dentro de un formulario que ya hayas llenado anteriormente como nombre, código postal, correo, etc.

Require
Funciona para solicitarle al usuario un dato que no lleno de forma correcta o que hace falta para que la información pueda ser enviada.


<main>
	<form action="">
		<label for="nombre">
			<span>¿Cuál es tu nombre?</span>
			<input type="text" name="nombre" id="nombre" autocomplete="name" required />
		</label>
		<label for="correo">
			<span>¿Cuál es tu correo?</span>
			<input type="email" name="correo" id="correo" autocomplete="email" required />
		</label>
		<label for="pais">
			<span>¿En qué país vives?</span>
			<input type="text" name="pais" id="pais" autocomplete="country" required />
		</label>
		<label for="cp">
			<span>¿Cuál es tu código postal?</span>
			<input type="text" name="cp" id="cp" autocomplete="postal-code" required />
		</label>
	</form>
</main>
 

## 19. Select

Select nos permite elegir una opción entre una lista de elementos posibles, pero por buen uso no debería usarse con muchos elementos de lo contrario nos crearía un scroll muy grande, o en si no usarse debido a que tenemos la etiqueta Input con un atributo “list =” " que se comporta igual, pero le brinda una mejora experiencia al usuario ayudándolo a encontrar esa opción solo con escribir las primeras letras.

<select name="cursos" id="">
	<option value="HTML5">HTML5</option>
	<option value="Java Script">Java Script</option>
	<option value="CSS3">CSS3</option>
	<option value="Python">Python</option>
</select>


<!--La manera correcta--!>
<input list="cursos">
	<datalist id="cursos">
		<option value="HTML5"></option>
		<option value="Java Script"></option>
		<option value="CSS3"></option>
		<option value="Python"></option>
	</datalist>


## 20. Input type submit vs. Button tag

Input type submit:
Se usa únicamente para formularios.

<input type="submit" value="Nombre" /> 
// Con el atributo value podremos cambiar el texto que se vera en el



Button:
Lo vamos a usar para cualquier otro tipo de botón en nuestro proyecto.

<button type="submit">Qué color te gusta?</button> 
// Para usar button en formularios debes agregar el type="submit"





Repaso:

1.
¿Cuál es la mejor práctica para generar listas de opciones en HTML?
Con <select> cuando hay pocas opciones y con <datalist> en caso de que sean muchas.

2.
¿De qué formas podemos crear campos de calendario con HTML?
Creando distintos inputs para campos específicos o con un solo <input> que incluya fecha y hora.

3.
¿Cuál es la forma correcta de crear formularios con HTML?
Con las etiquetas <form>, <label> e <input>.

4.
¿En qué tipo de interacciones es mejor utilizar la etiqueta <button> ?
En acciones de cualquier tipo como compartir, like, etc. que no correspondan a "enviar" en un formulario.
5.
Los valores del atributo `autocomplete` se fijan automáticamente en nuestros campos de formulario.
Falso.
6.
¿Por qué se dice que el mejor formulario es el que no existe?
Porque un formulario mal diseñado se vuelve una molestia para el usuario.


21. ¿Qué es CSS?

Cascading Style Sheets
Complemento que aplica estilos en forma de cascada (de arriba a abajo). Cascading también es el nombre del algoritmo que aplica el navegador al implementar todos los estilos. Este es el estándar que usaremos para estilizar nuestro proyecto.
Su extensión es “.css”

HTML sería el lápiz, CSS los colores, adornos, tijeras, etc.

La analogía de la carta es perfecta!
HTML para escribirla y CSS para darle estilos, pegar imágenes, fotos, crear objetos circulares y mucho mas!


22. ¿Cómo utilizamos CSS?: por etiqueta, selector, class y por ID

Tres métodos de hacer css:
1. En otro archivo .css
2. Usando la etiqueta style dentro del mismo html y dentro del head
3. Usando el atributo style="color:aqua" dentro de las etiquetas

Usando el método 1:
1. Mandar llamar etiquetas para agregarle los estilos
- Selector por el elemento
css
p {
    color: blue;
    font-size: 30px;
}

- Selector por clases
html
<p class="nombre">Soy un texto</p>
css
.nombre {
    color: aqua;
}

- Selector por ID
html
<p id="nombre">Otro pequeño texto</p>
css
#nombre {
    color: yellow;
    font-size: 24px;
}


/*Comentario en css*/



https://i.emezeta.com/weblog/css3-cheatsheet/css3-cheatsheet-2017-emezeta.pdf

Páginas web para practicar Flexbox y Css Grid
Flexbox: https://flexboxfroggy.com/#es
Css Grid: https://cssgridgarden.com/#es
https://mastery.games/flexboxzombies/


23. Pseudo clases y pseudo elementos

El nombre de archivo de estilos lo definimos nosotros pero casi siempre es main o estilos o styles. Cuando se trabaja con proyectos más grandes normalmente hay un archivo de CSS por pantalla y lleva el nombre de la pantalla.

¿Cómo podemos nombrar nuestras clases?

Tienen que ser acorde con lo que estamos trabajando. Vamos a usar la metodología BEM que nos va a ayudar a entender como nombrar las clases.

Ejemplo de nombres class: contenedor y contenido 
<ul class="main-nav">
	<li class="main-nav__item"><a href=""=Home</a></li>

- margin-top: Margen arriba.
- list-style: Le quita los puntos a las listas desordenadas.
- padding: Espacio interno (relleno) de un contenedor/elemento(ul). Un espacio dentro de la caja.
- background-color: Le da color de fondo.
- display: inline-block: Coloca todo en lineal (fila) y no en bloque uno sobre otro (columna).

Nota: El navegador por si solo agrega algunos estilos a los elementos.

Posibilidades:
.main-nav {
    margin-top: 10px;
    list-style: none;
    padding-left: 0;
    background-color: #13a4a4;
}
.main-nav__item {
    display: inline-block;
}
.main-nav__item a {
    color: white;
}


Ser especifico en CSS:
Aplicar estilos solo a las etiquetas “a” usando Pseudo clases.

Pseudo Clases------
Define el estilo de un estado especial de un elemento.
Agregar al final de la clase :nombreAccion

.main-nav__item a:hover {
    color: darkblue;
}
.main-nav__item a:active {
    color: darkcyan;
}


a:hover
Genera efecto al posicionar el cursor del mouse arriba del elemento. Es un efecto, un estado.

a:active
Efecto al dar Click

Pseudo Elementos----
Mandamos llamar a un elemento con “::”
Define el estilo de una parte específica de un elemento.
Agregar al final de la clase ::nombreAccion

.main-nav__item a::after {
    content: " | "; /* despues del elemento, agrega esto */
}


a::after
Agrega contenido después de la etiqueta señalada.

Diferencias

Pseudo Classes: (:class)
Define el estilo de un estado especial de un elemento
https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes


Pseudo Elementos: (::element)
Define el estilo de una parte específica de un elemento.
https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements


Metodología BEM 
https://en.bem.info/methodology/faq/#why-bem
https://blog.interactius.com/metodolog%C3%ADa-css-block-element-modifier-bem-f26e69d1de3
--> Página oficial
http://getbem.com/
http://getbem.com/naming

-------------------------------------------------


Cómo nombrar las clases:
Metodología **BEM😗* cómo nombrar correctamente las clases.
-> https://www.youtube.com/watch?v=wDUwGo98JTA

Solo usa clases. Las nombra siguiendo el siguiente patrón: BLOQUE__ELEMENTO—MODIFICADOR (son 2 guiones, se usa 1 guion para separar palabras).

Bloque: sección que puede funcionar por sí sola, son reutilizables e independientes del resto.
	.cabecera
	.mi-bloque-compuesto
	-> Botones
	-> Menu de navegación 
	
Elemento: forma una de las partes del bloque o las distintas partes de un bloque.
Modificador: variaciones de un mismo bloque/elemento.
	.bloque__elemento
	.menu__logo {}
	.menu__button {}
	-> Partes de un menú de navegación 
	
Errores:
1. Confundir bloque con elemento
- Ante la duda pregúntate, este trozo de mi página web se podría usar por si mismo? si es así se trata de un bloque o si ese trozo depende de otro o no tiene sentido por si mismo probablemente sea un elemento. 

2. Anidar cuando no es necesario
- En BEN no existe el concepto de sub elementos es decir un bloque puede contener elementos pero un elemento no puede contener bloques o sub partes 

Modificadores: aliña tus bloques y elementos. Son clases que puedes añadir para cambiar la apariencia o el comportamiento de los bloques o elementos. Se usan normalmente para diferenciar las distintas variantes de un bloque o de un elemento. 

Para modificar un bloque usaremos clases con la estructura: .bloque--modificador 	

para modificar un elemento:
.bloque__elemento--modificador

	.button {}
	.button--primary {}
	.button--secondary {}
	
	.title {}
	.title--size-regular {}
	.title--size-big {}
	
Nota: Nunca uses solo modificadores, siempre deben acompañar a una clase bloque o a una clase elemento.
	
	
<!-- BLOQUE -->
<main class="Padre">
	<!-- BLOQUE__ELEMENTO --> 
	<section class="Padre__Hijo">
		<!-- BLOQUE__ELEMENTO--MODIFICADOR -->
		<article class="Padre__Hijastro--Mayor"></article>
		<article class="Padre__Hijastro--Menor"></article>
	</section>
</main>

Crear estilos a etiquetas dentro de clases:
Si tienes etiquetas dentro de la etiqueta a la que le estás aplicando estilos y le pones una clase, puedes aplicar estilos únicamente a las etiquetas dentro de esa clase de la siguiente manera: .clase etiqueta {}


https://platzi.com/clases/2336-transformaciones-transiciones-css/38112-pseudo-clases-y-pseudo-elementos-en-las-animacione/

---------------


24. Anatomía de una regla de CSS



p {
	color: red;
}

p {} Selector
color: Property
red; Property value
color: red; Declaración 


Selector {
	Property: Property value;  <- Declaration 
}




selector: define que pieza será afectada 
propiedad
valor
declaración 

selector propiedad valor declaración


25. Modelo de caja

https://developer.mozilla.org/es/docs/Web/CSS/box-sizing

Los elementos que se renderizan se renderizan como cajas (contenedores) a las que se les pueden agregar ciertos estilos hence “Modelo de caja”.

- Margin: puede ser un espacio externo, de la caja hacía afuera.
- Border: es la línea que define a cada uno de los elementos, puede estar o no estar. Por default viene transparente pero le podemos poner color y ancho.
- Padding (relleno): es un espacio interno, de la caja hacia dentro y nos ayuda a posicionar un poco el contenido de la caja.
- Content: puede ser cualquier elemento, texto, imagen, video, etc.
- Width: largo o ancho, el tamaño del contenido.
- Height: el alto que queremos que tenga.

Dependiendo de la posición del contenido podemos jugar con:
	   - Top
- Left		- Right
	   - Bottom
	   
Hay que tener cuidado con las dimensiones extra, siempre hay que tomarlas en cuenta

* {
	selector universal
}

box-sizing: border-box; -> width - (padding + border)
Toma el 100% del width que tengamos libre. Suma el padding con el width del elemento y hace un calculo automático donde al width se le resta el padding y el border para que no se salga del navegador y tener la dimensión justa. 
Nota: box-sizing no recalcula el Margin por ende aún con esto sigue generando un excedente, solo recalcula el padding y el border.

https://www.youtube.com/watch?v=TeQgd0NS_lQ

Tener en cuenta:----
padding: 20px 35px;
20px de arriba hacia abajo y 35px de derecha a izquierda.
Nota: Si solo colocamos 20px el navegador entiendo que debe colocar los 20px arriba abajo y a los costados.


TIP: Hay una forma de hacer que CSS calcule el tamaño de un elemento (width o height, por ejemplo), restándole cierta cantidad.

Por ejemplo:
Imagina que quieres colocar 2 cajas dentro de una caja padre y quieres que cada una tome el 50% de ancho, pero que cada una tenga un margen a la izquierda de 10px. Si colocas width de 50% a cada caja y además le colocas margen, esto hará que las cajas queden una arriba de la otra, porque al agregarle 20px de espacio en márgenes, vas a hacer que ya no ajuste el 50% a cada caja.

Para hacer que ambas cajas sigan tomando el 50% contando los márgenes, puedes hacer lo siguiente:

.caja-hijo
{
	width: calc(50% - 20px);
}
Esto hará que el ancho se calcule, tomando en cuenta el 50% y los 20px que mantegan de margen.


----otro caso----
width: calc(100% - 72px);
Chau Scroll 😃


Normalize
https://necolas.github.io/normalize.css/


26. Herencia

La herencia en CSS es algo muy útil cuando quieres “reciclar” los estilos del padre, pero recuerda que todos lo que cambies en el padre también afectará a los hijos que estén heredando estilos de el.

La herencia se realiza mediante el valor inherit (heredar), que hereda el valor de la etiqueta o selector mayor más cercana que tenga la propiedad a heredar.

CSS nos permite tener un mayor control de esta herencia y nos ofrece 3 opciones para manejarla.
- Inherit que le indica a la propiedad del elemento hijo que tome la propiedad del elemento padre más cercano
- Initial es el valor que fuerza a que tome el valor por defecto que el navegador tiene definido.
- Unset es una mezcla entre la etiqueta inherit y initial, le dice a la propiedad del elemento que tome el valor del elemento padre más cercano y si no lo encuentra, a diferencia de lo que haría inherit qué es pasarse al próximo elemento padre y así hasta encontrar un valor en un elemento padre que tenga establecida esa propiedad, unset se va directo a tomar el valor por default del navegador.

Herencia

Herencia es el código CSS que se le va a pasar de un padre a un hijo.

INHERIT: Especifica que el valor que usemos herede el valor del elemento padre.

INITIAL: Este valor da el valor inicial y predefinido por el navegador en uso.

UNSET: Este es la combinación de inherit e initial, este valor se usa cuando una propiedad quiere heredar el valor de su elemento padre si este es disponible, en caso de no ser disponible este valor pondrá el valor de la propiedad en su valor inicial como si usaramos inherit e initial juntos.


---Código HTML:---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Herencia</title>
</head>
<body>
    <main>
        <h1>I'm a title</h1>
        <p>I'm a paragraph</p>
    </main>
</body>
</html>

---Código CSS:---

html{
    font-size: 75%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h1{
    font-size: inherit;
}


27. Especificidad en selectores

¿Cómo se controla el orden al declarar CSS?

1. Importancia: 
Si dos declaraciones tienen la misma importancia entonces la especificidad nos va a decir que regla se aplicará, pero si dos reglas tienen la misma especificidad es el orden el que va a decidir cual es el resultado final.
	1.1 El navegador va a cargar los estilos de forma distinta (primero aplica sus estilos).
	1.2 Después cumple las declaraciones de las normas que vienen en nuestros estilos(todos nuestros CSS).
	1.3 Por último, aplica los estilos que vienen con un “!important” al final en nuestra hoja de estilos. NO PONERLO PORQUE SI. Hay que evitarlo porque no son buenas prácticas.

2. Especificidad: 
De derecha a izquierda(menos importante a más importantes para el navegador). 

Selectores		Especificidad
!important		  1.0.0.0.0	Mala practica
Inline styles	  0.1.0.0.0	Estilos en tag html
#id			  0.0.1.0.0
.class		  0.0.0.1.0
tag etiqueta	  0.0.0.0.1	Etiquetas o selectores


Qué pasa si tenemos un conflicto?
Por ejemplo: agregamos varios estilos y ahora tenemos un conflicto que romperá otros estilos, para esto tenemos una etiqueta de html con una clase que juntas su especificidad es 0,0,0,1,1 que es más importante que solo la clase; lo mismo con un id con clase 0.0.1.1.0

https://www.codecaptain.io/tools/css-specificity-calculator

Colocar código CSS para monitorear su especificidad
nota: tocar la pantalla para refrescar.
https://jonassebastianohlsson.com/specificity-graph/

Reglas de cascada

Conflicto					
  en la					
declaración		
	|
	|
 Diferente				Utiliza la declaración
 origen o		---Sí--->	con el origen de mayor
!important				prioridad
	|	
	No
	|
¿Tiene algún			Utiliza las
Inline style?	---Sí--->	Inline declaration
	|	
	No
	|
¿Los selectores			Utiliza las declaraciones
  tienen una	---Sí--->	con mayor especificidad 
especificidad
 diferente?
 Clase o Id
	|	
	No
	|
Utiliza las declaraciones
que vienen en su fuente
	original



3. Orden en las fuentes (como mandas llamar los estilos o donde colocas el estilo):
En los estilos, las declaraciones al final del documento anularán a las que sucedan antes en caso de conflicto. Es decir, como CSS es como una cascada, los estilos que siempre se van a aplicar son los que estén hasta abajo reescribiendo los de arriba. También aplica en los .css que mandemos llamar.


Nota:
Visual Studio también te ayuda en esto.
Solo tienes que poner el mouse por encima del selector y te dará la especificad


28. Demo de especificidad y orden en selectores

Se pueden usar varias clases mientras no se exceda en la cantidad de clases y por cada etiqueta no se puede tener más de un ID. El id es único y específico, solo puede existir ese id en la página. Funciona para CSS y JS.

El inspector de elementos regresa los estilos del mas importantes al menos importante. (id, clases y hasta el ultimo las etiquetas)

NOTA Las clases son genéricas y los id son únicos y específicos, no podemos tener el mismo id en dos elementos al contrario que las clases.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class="page-header">
        <h1 id="page-title" class="title">Empresa</h1>
        <nav>
            <ul id="main-nav" class="nav">
                <li><a href="">Home</a></li>
                <li><a href="">Cursos</a></li>
                <li><a href="">Instructores</a></li>
                <li>
                    <a href="" class="blog">Blog</a>
                </li>
            </ul>
        </nav>
    </header>
</body>
</html>


----------------------

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
h1 {
    color: purple;
    font-family: serif;
    margin-bottom: 10px;
}
#page-title {
    font-family: Arial, Helvetica, sans-serif;
}
.title {
    font-size: 18px;
    font-family: monospace;
}
#main-nav {
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;
}

#main-nav li {
    display: inline-block;
}

#main-nav a {
    color: white;
    background-color: #13a4a4;
    padding: 5px;
    border-radius: 2px;
    text-decoration: none;
}

#main-nav .blog {
    background-color: red;
}


29. Más sobre selectores

https://stuffandnonsense.co.uk/archives/css_specificity_wars.html

Utilizar id’s # para estilar no son buenas practicas sobre todo porque son muy importantes para el estilo y son específicos.

No es buena practica utilizar !important, estilos embebidos y utilizar id’s para los estilos. Los id’s son únicamente para el tema de especificidad.

Todo lo podemos trabajar en CSS con clases, etiquetas y pseudo elementos.


Los 30 selectores CSS que debes memorizar
https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048

-------
1- Evitar usar !important
2- Evitar usar estilos embebidos (Estilos en la etiqueta html).
3- Evitar usar ID para dar estilos en CSS por que tienen mas peso y dan conflictos.

Si usan Visual Studio Code pueden ver que peso tiene el o los selectores que están usando.
Solo pongan el mouse sobre los selectores y podrán verlo de la siguiente manera (ID, Class, Elemento HTML)

----------
Malas Prácticas dichas en Clase Hasta Ahora
- Utilizar tanto id en CSS
- Utilizar el !important
- Utilizar la etiqueta <style> dentro del archivo html
- Utilizar el atributo style dentro de las etiquetas html
- Utilizar div para contener todo ignorando los header, nav, section, article, etc.
- No utilizar la etiqueta <form> para hacer formularios
- Utilizar las etiquetas <select> y <option> para hacer selectores o menús desplegables.
- No nombrar el primer archivo html del proyecto como index.html
- No tener archivos .css para cada pantalla de un proyecto.
- Tener todo el css junto en un solo archivo.
- No ponerle el atributo alt a una imagen
- Poner imágenes dentro de <div> en vez de <figure>
- Utilizar textos solo en mayúscula en HTML, en vez de utilizar el atributo de CSS, text-transform, con el valor uppercase. Ya que al hacer esto pareciera que estuvieras gritando.
- Poner videos que se reproduzcan solos.
- No optimizar las imágenes.
- No tener cuidado de cual es el formato ideal para las imágenes y su respectivo peso.
- No tener cuidado con la respectiva semántica de HTML, y con la sintaxis adecuada para CSS.
- No cerrar las etiquetas que se cierran en sí mismas como <br/>
- No comentar partes esenciales de tu código.
- No poner la etiqueta <meta name=”robots” content=”index,follow”> en tu proyecto para que los navegadores los puedan ubicar mejor.
- No usar la etiqueta <meta name=”viewpor” content=”width=device-width, initial-scale=1.0”> para hacer tu proyecto responsive.
- No poner el atributo autocomplete=”valor” en los campos de tu formulario para hacerle la vida más fácil al usuario
- No usar el atributo required en los campos obligatorios de tu formulario como una primera capa de seguridad


30. Combinadores: Adjacent Siblings (combinators)

https://flukeout.github.io/

Los combinadores (Combinators)
Nos permiten combinar múltiples selectores y crear una mayor especificidad.

Hermano adyacente o cercano (Adjacent sibling)
div + p {
	...
}

Hermano general (General sibling)
div ~ p {
	...			#Alt + 126 = ~
}

Hijo (Child)
div > p {
	...
}

Descendiente (Descendant)
div p {
	...
}


Esto nos permite dejar a un lado a los ID que como ya vimos nos pueden generar errores conforme avance el proyecto por el peso que tienen en CSS.
----
Hermano Adyacente o Cercano que se representa por: +
Ejemplo:
HTML
<body>
    <div>
        <h2>Soy un h2</h2>
        <p>Soy un p 1</p>
        <h2>Soy un h2</h2>
        <h3>Soy un h3</h3>
        <p>Soy un p 2</p>
        <h2>Soy un h2</h2>
        <p>Soy un p 3</p>        
    </div>
</body>

CSS
h2 + p {
  color: red;
}

Aplica estilo a todas las etiquetas párrafo que estén cerca y debajo de un etiqueta h2.
Solo afecta a los p que están cerca (Abajo del elemento) h2


Combinadores en CSS
https://medium.com/sngular-devs/combinadores-en-css-bf117a8c91f5


31. Combinadores: General Sibling

Estructura:
Hermano general (General sibling)
div ~ p {
	...
}

Este tipo de combinador nos ayuda a seleccionar a los hermanos generales, es decir a los que comparten un mismo padre. Se representa mediante el siguiente símbolo virgulilla: ~ 

Ejemplo:
<body>
    <div>
        <h2>Soy un h2</h2>
        <p>Soy un p 1</p>
        <h2>Soy un h2</h2>
        <h3>Soy un h3</h3>
        <p>Soy un p 2</p>
        <h2>Soy un h2</h2>
        <p>Soy un p 3</p>        
    </div>
</body>
En este caso div es el padre y h2 p y h3 son los hermanos generales 

CSS
h2 ~ p {
	color: red;
}

En este caso va a modificar todas las etiquetas p porque tienen como hermano general un h2

Virgulilla alt + 126 = ~
https://codigos-ascii.com/equivalencia-tilde-virgulilla/


32. Combinadores: Hijo y Descendiente (Child and Descendant)

https://flukeout.github.io/
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators

Estructura:

Hijo (Child)
div > p {
	...
}
El padre div que sea mayor a una etiqueta hijo párrafo. Párrafo debe ser "hijo directo" de la etiqueta div.

Ejemplo:
<body>
    <div>
        <article>
            <p>Soy un texto</p>
        </article>
        <article>
            <p>Soy un texto</p>
        </article>
        <section>
            <div>
                <p>Soy un texto</p> ----> Aquí
            </div>
        </section>
        <p>Soy un texto</p> ----> Aquí
    </div>
</body>
En este caso tenemos al primer div que es padre directo de un etiqueta p y otro div mas interno que tiene como hijo a otra etiqueta p, a estas etiquetas p se les aplica el estilo requerido.

CSS
div > p {
    color: red;
}

----------------------

Descendiente (Descendant)
div p {
	...
}

Todas las etiquetas que estén dentro de un contenedor o clase, Usando el html anterior vemos que pinta todos los párrafos.

div p {
    color: red;
}

Juego: https://flukeout.github.io/

33. Medidas

Diapositivas del curso
https://static.platzi.com/media/public/uploads/slidescss_1a0d5eaf-b5f6-4563-b80c-a073604d9628.pdf

Tenemos 2 tipos de medidas las Absolutas y las Relativas.

Las absolutas son aquellas que se especifican en px y estas siempre tendrán ese valor, se vean en la pantalla que se vean.
En medida de lo posible es mejor trabajar con medidas relativas, además de que al hacer Responsive Design nos sera mas flexible el sitio para modificar a nuestro gusto.

---
Absolutas vs Relativas

Medidas Absolutas: 
No cambian sin importar el tamaño de la pantalla dónde estemos viendo el proyecto.

mm=milimetros.
cm=centimetros.
in=pulgada.
pc=picas.
px=pixel.

Medidas Relativas: 
Estás si cambian dependiendo de la pantalla del dispositivo.

% = Porcentaje 
em = elemento.
rem = root em (elemento).
width y height (min y max): también son relativas porque varían dependiendo del tamaño de la pantalla en relación con la posición en la que se encuentra en ese momento.
vw y vh = viewport width y viewport height.

Cuando se genera un scroll se le llama overflow que como pudiste adivinar NO ES BUENA PRACTICA. Es importante hacerlo flexible.

main {
    background-color: red;
    width: 600px;
    height: 50%;
}


34. Medidas EM

em es un acrónimo de elemento y lo que hace es tomar el tamaño de fuente que tenga el "padre directo". Es decir, 1em= 16 pixeles que vienen por defecto en HTML, pero si cambio el tamaño de main (padre) se modifica el valor de em (en el hijo), que ahora valdrá el valor asignado al main. 

Ejemplo1:
font-size: 20px (en el padre) hará que ahora 1em sea = a 20px (en el hijo) porque toma el tamaño del "padre directo".

Ejemplo2:
<body>
    <main class="text-container">
        <p>Soy texto ejemplo</p>
        <div>
            <p>Soy otro texto ejemplo</p>
        </div>
    </main>
</body>

CSS:
.text-container { 
    font-size: 1.5em;
}----> main que hace que el párrafo en el navegador valga lo mismo porque le heredó su valor al ser hijo directo.

En este caso le estamos diciendo que main tenga un tamaño de fuente de 1.5 em = 24 pixeles (regla de 3) este valor se hereda a las etiquetas hijos.

Si le coloco a main un valor de 20px y luego al párrafo le digo que sea 1em, el valor que tome serán los 20px heredados del main padre.

Ejemplo3:
body {
    font-size: 20px;
}

.text-container {
    font-size: 1em;
}

En el inspector de elementos veremos las medidas iguales en padre e hijo


Hay que tener cuidado donde utilizamos em por lo que no es de las mejores medidas, ya que se puede comportar como una bola de nieve.


35. Medidas REM

La más recomendada. Rem SIEMPRE va a tener de referencia a la etiqueta root, en este caso siempre será el html, por lo tanto siempre será igual a 16px.

Un truco para usar rem como si fueran pixeles es:

html{
    font-size: 62.5%;
}

p{
    font-size: 1.6rem;
}
¿Qué estamos haciendo aquí?

Estamos seteando una dimensión de fuente de 62.5, quiere decir que 1rem va a ser igual SIEMPRE a 10 pixeles. Si quiero 16 pixeles pongo 1.6, si quiero 20 pixeles pongo 2 rem y así sucesivamente.

Como buenas prácticas debemos usar pixeles para tamaños de fuente y para ciertos tamaños relativos en contendores, por eso usamos rem.

Nota: ¿Cómo se llega al 62.5%?
Solución: Es una regla de tres simple
Si para 16px corresponde 100%, para 10px será:
10px * 100% / 16px = 62.5%


Adicional:
En visual studio code hay una extension para convertir pixel a rem. Se llama PX to REM, y lo que tengas en px con el comando ALT GR + Z te coloca en rem las medidas (Yo instalé la de Marco N)


36. Max/Min width

/*Para la totalidad de la pantalla*/
main {
    width: 100vw; --> viewport width (50vw)
    height: 100vh; --> viewport height (50vh)
    background-color: purple;
}

Esto lo que hace es que el contenedor de main ocupe el 100% del viewport(ventana gráfica) en el width y en el height sin importar el tamaño de la pantalla. Esto nos ayuda a poder darle ciertas dimensiones a contenedores padre como main o sections.

NOTA: 50vw o una medida menor al total de la pantalla ayuda a poder darle ciertas dimensiones a contenedores padre como main o section.

¿Qué es lo que hace el margin 0 auto?

De arriba a abajo no le agrega ningún margin pero de izquierda a derecha haz que se ajuste de manera automática, por eso lo centra.

Cuando vayamos a utilizar el min y el max en el width necesitamos tener un width base (que casi siempre va a ser en porcentaje).

Básicamente es delimitar su crecimiento colocándole un mínimo y un máximo de expansión en pantallas de  dispositivos diversos.

El height funciona de manera similar solo que sin un porcentaje inicial.

Cuando el texto empieza a salir del section se le llama overflow (Desbordamiento), es decir, tenemos más contenido que el mismo espacio del contenedor padre. Esto se soluciona usando min-height que le dice, la altura mínima que vas a tener es de N px pero si llegas a tener contenido que exceda los Npx crece con el contenido hasta que este deje de crecer.

section {
    width: 80%; -> Base
    min-width: 320px; -> Pone limite al minimizar la pantalla
    max-width: 500px; -> Limitar el crecimiento a un max de...
    height: 500px; -> Esto no escala pero el siguiente sí ...
    min-height: 500px; -> Mínimo de y luego crece si lo necesitas
    margin: 0 auto; -> Centra el section
    background-color: red;
}

Usar esta técnica en el padre del contenido 

-------------------
html

<body>
    <main>
        <section>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem iste quae unde dolorum quasi, nihil quod tempore debitis porro? Sequi fugiat vero optio atque nihil, tenetur rerum possimus molestiae?
            </p>            
        </section>
    </main>
</body>


-----
css

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

main {
    width: 100vw; -> 50vw
    height: 100vh; -> 50vh
    background-color: purple;
}

section {
    width: 80%;
    min-width: 320px;
    max-width: 500px;
    min-height: 600px; /*Para evitar el overflow*/
    height: 500px; /*No va*/
    margin: 0 auto;
    background-color: red;
}


37. Position

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://flexboxfroggy.com/#es

Forma en la que podemos posicionar los contenedores, las cajas, las etiquetas.

Valores de position
- Static: 
Posición por defecto de los elementos, conservan la posición y espacio de donde son colocados (estáticos). No se puede usar top, right, bottom y left en esta posición.

- Absolute: 
Permanecen en la posición de donde fueron colocados pero pierden su espacio físico (se sobreponen a los elementos que ocupan dicho espacio), se los puede posicionar mediante las propiedades top, right, bottom y left.

- Importante: 
Al aplicar las propiedades top, right, bottom y left se tomará de referencia al contenedor más cercano con posición relativa.

- Relative: -> Es Usable
Conservan su posición original y espacio físico pero se los puede posicionar mediante las propiedades top, right, bottom y left sin perder dicho espacio físico.

- Fixed: 
Pierden su espacio físico y permanecen de forma fija (siguen el scroll, se colocan al lado izquierdo del viewport), se los puede posicionar mediante las propiedades de top, right, bottom y left.

- Sticky: 
Conservan su espacio físico pero cuando el scroll los alcanza lo siguen (sin perder dicho espacio físico), es muy usado para barras de navegación y se lo puede posicionar con las propiedades top, right, bottom y left.


Ejemplo position static:
<body>
    <div class="parent">
        <div class="box" id="one">1</div>
        <div class="box" id="two">2</div>
        <div class="box" id="three">3</div>
        <div class="box" id="four">4</div>
    </div>
</body>

CSS
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
}
.parent {
    border: 2px aqua dotted;
    display: inline-block;
}
.box {
    display: inline-block;
    background-color: red;
    width: 100px;
    height: 100px;
}
#two {
    background-color: orange;
}


Guía 
https://www.youtube.com/watch?v=BVIdzytAtkg


Nota: 
La propiedad top permite desplazar un elemento respecto a su posición original tomando como referencia el borde superior del elemento. Por su propia definición, esta propiedad sólo afecta a los elementos cuya propiedad position tenga un valor de relative , absolute o fixed .

https://uniwebsidad.com/libros/referencia-css2/top#:~:text=La%20propiedad%20top%20permite%20desplazar,de%20relative%20%2C%20absolute%20o%20fixed%20.


38. Display

display: block;
Por default la etiqueta p (párrafo) y el div vienen con display: block, esto quiere decir que va a usar el 100% del espacio que tenga a su costado sin importar si el contenido tiene o no espacio (Se va apilando bloque sobre bloque o etiqueta sobre etiqueta). Así sea solo una letra.

display: inline;
Hay etiquetas como span (que puede ser comodín de p) que no tienen display: block, si no que por defecto se juntan en una sola línea (una al costado del otro). 

NOTA: A los elementos inline no se les puede agregar ni margin ni padding en la parte de arriba y en la de abajo pero si a los costados, y tampoco se puede manipular el width y el height de los elementos.

display: inline-block;
La etiqueta ul por defecto también es block pero la podemos modificar usando inline-block: que es como una fusión de lo mejor de los dos anteriores, a diferencia de inline, este si puede modificar los valores que el otro no podía.
Hacen que ocupe el 100% del tamaño del contenido y si hay espacio permite que otros hermanos se coloquen al costado y si no hay espacio se bajan (inline), permite agregar margin y padding arriba y abajo, además de permitir manipular el height y el width (block).

display: list-item;
Las etiquetas li trae por default list-item que quiere decir que son elementos de una lista y que tienen que mostrarse de forma vertical de arriba hacia abajo. Aún así las etiquetas li se comportan como un elemento block


Resumen:
inline:
El elemento no comienza en una nueva línea y solo ocupa el ancho que requiere. No puede establecer el ancho o el alto.

inline-block
Tiene el mismo formato que el elemento en línea, donde no comienza en una nueva línea. PERO, puede establecer valores de ancho y alto.

block
El elemento comenzará en una nueva línea y ocupará todo el ancho disponible. Y puede establecer valores de ancho y alto


39. Desafío: layout


40. Display Flex

Ayuda a posicionar y manipular contenedores de forma responsive (más flexible). 
SIEMPRE debemos tener un container principal para usar flex.

Display: flex;
Al aplicarlo  en el contenedor principal muestra a cada uno de sus hijos al costado del otro (en fila-row).

A pesar de haberle aplicado Display: flex; al padre contenedor sus hijos siguen siendo block.

Por defecto al aplicar flex los hijos se acomodan en row (fila) pero esto se puede modificar:
- flex-direction: column;
- flex-direction: column-reverse;
- flex-direction: row-reverse;

Siempre debemos tener un contenedor principal para utilizar flex y ese contenedor principal va a tener display flex que ayuda a cambiar las cosas.

flex-wrap: wrap;
Hace que al hacer la pantalla mas pequeña y al no tener espacio, los bloques se van acomodando de manera automática. Al usar wrap no debemos preocuparnos por la altura o ancho del contenedor, ya que se van generando según se necesiten.

flex-wrap: wrap-reverse;
Lo mismo pero ésta vez se mueve al revés. 

Justify-content: center;
Nos ayuda a alinear el contenido de forma horizontal (centrado).
Esto lo podemos combinar con flex-wrap: wrap;

Otros:
Justify-content: flex-end; 
Alineado a la derecha 

justify-content: flex-start;
Viene por defecto alineado hacia la izquierda

justify-content: space-around; 
Al aplicar flex-start y de quedar espacio vacio a la derecha, space-around divide este espacio vacio entre cada uno de los contenedores generando una separación automática. Pero no es perfecto así que aplicamos:

justify-content: space-evenly; 
Y así nos aseguramos que el espacio entre cada bloque sea el mismo de inicio a fin.







Mini guía de flexbox:

Propiedades en contenedores padre:
display: flex;
flex-direction: row | column | row-reverse | column-reverse
flex-wrap: row wrap | wrap | wrap-reverse

Esta siguiente propiedad es un atajo para escribir el flex-direction y el flex-wrap en una sola línea de código
flex-flow: Primero escribes dirección | Luego escribes flex-wrap

Posicionar horizontal
justify-content: flex-star | flex-end | center | space-around | space-between

Posicionar manera vertical
align-items: flex-star | flex-end | center | stretch | baseline

align-content: flex-star | flex-end | center | stretch | space-around | space-between “Align-content solo se utiliza varias filas de elementos, pero si es una sola línea usamos align-items”

Propiedades en elemento hijo
order: ; Esto se utiliza para cambiar el orden de nuestros elementos sin cambiar el orden real semántico y correcto de html. Sencillamente colocando números.

align-self: align-items: flex-star | flex-end | center | stretch | baseline “Muy importante, si en el padre del elemento tiene declarado flex-direction: row; esta propiedad lo acomodara verticalmente. Y si es flex-direction: column lo ordenara horizontalmente”


41. Flexbox layouts

Juego:
https://flexboxfroggy.com/#es
https://codepen.io/yair-lira/pen/LYZVJdd


Flex es un tipo de display que permite que el contenedor padre sea flexible a los cambios que puedan tener los elementos hijos en su alineación.

Una vez tengamos el elemento padre con display: flex tenemos otras propiedades que podremos usar para nuestro beneficio.

- Flex-direction: Te permite elegir la alineación de los elementos hijos sea en vertical (column) u horizontal (row), esta alineación viene por defecto.

- Justify-content: Esta propiedad nos permite alinear el contenido de forma horizontal
Valores:
	- Flex-start: Alinear items del flex desde el comienzo.
	- Flex-end: Alinear items desde el final.
	- Center: Alinear items en el centro del contenedor.
	- Space-between: Distribuir items uniformemente, el primer items al inicio, el último al final.
	- Space-around: Distribuir items uniformemente, estos tienen el mismo espacio a su alrededor.
	- Space-evenly: Distribuye uniformemente el espacio entre los items y su alrededor.

- Align-items: Sirve para alinear los elementos hijos de forma vertical.
Valores:
	- Flex-start: Se alinean desde arriba.
	- Flex-end: Se alinean desde abajo.
	- Center: Alinea los item al centro del eje y del contenedor.
	- Stretch: Estira el alto de los elementos hijos al 100% del alto del elemento padre.
	- Baseline: Escala el alto del elemento al tamaño de su contenido.

- Flex-wrap: Permite que un elemento cuyo tamaño sea mayor al de la página haga un salto de línea sin salirse del contenedor, pues este se agranda.

- Order: Especifica el orden utilizado para disponer los elementos en su contenedor flexible. Los elementos estarán dispuestos en orden ascendente según el valor de order.

- Flex-grow: Especifica qué cantidad del espacio restante dentro del contenedor flexible, debería ocupar el ítem en cuestión según su dirección principal, esta última determinada por flex-direction.

- Flex-basis: Especifica el tamaño inicial de un elemento flexible.


42. Variables

Es posible usar variables en CSS en donde podemos guardar un valor que podemos reutilizar en nuestros estilos, así evitamos escribir código repetido.

Lo hacemos mediante:

:root{} → Que siempre hace referencia a nuestro html. Aquí es donde se declararán variables.

Declaración de variables:
:root {
    --primary-color: #003476;
    --secundary-color: #b4d2f7;
    --header-size: 4rem;
    --font: 1.8rem;
}

Llamado de variables:
header {
    width: 100vw;
    height: 15vh;
    background-color: var(--primary-color);
}

https://fonts.google.com/icons?selected=Material+Icons

https://fontawesome.com/

https://fonts.google.com/

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family


43. Web fonts

Los import de google fonts no son tan buenas prácticas porque pegan en el performance, a pesar del display=swap que agregó google para mitigar el daño aún así es mejor hacerlo en el head de html usando el link que nos proporciona.

Es una buena práctica cargar solo una fuente por proyecto.

Generic-families:

GENERICAS				FUENTES
serif		->	Times New Roman		Georgia
sans-serif	->	Helvetica			Verdana
cursive	->	Dancing Script		Great Vibes
monospace	->	Courier New		Roboto Mono


Verificar fuentes en la web:
- Navegador
- Tres puntos
- Configuración
- Diseño/Aspecto
- Personalizar fuentes

Paginas para buscar fuentes:
https://fonts.google.com/

- Buscar fuente y escoger una
- Seleccionar formatos o estilos que quieres en la fuente + -
- @import: Copiar lo que sale. no es buena practica.
- link: Copiar. Pegar en el html debajo del link
- CSS rules to specify families: copiar y pegar en style.css dentro de:
html { 
	font-family: 'Robotso', sans-serif;
}



Repaso: 
1.
Son los elementos que componen al modelo de caja:
Margin, Border, Padding y Content

2.
¿De qué forma podemos incluir CSS a nuestro proyecto?
Desde un archivo externo con la etiqueta <style>, como atributo en una etiqueta HTML.

3.
¿Para que sirven las variables en CSS?
Para reutilizar estilos que pueden repetirse en nuestro archivo .css y así ahorrar tiempo.
4.
¿En qué nos ayuda 'display: flex'?
En ordenar y distribuir los elementos de un contenedor horizontal o verticalmente.
5.
¿Qué tipo de display debo utilizar si quiero mantener mis elementos en forma horizontal?
inline' o inline-block', ambos tienen resultados diferentes.
6.
Son unidades de medida relativas:
em, rem, %
7.
El uso de "!important"...
Debe evitarse porque es una mala práctica. Los estilos se pueden romper o pueden ser compeljos de entender.
8.
¿Cuáles son las partes de una regla de CSS?
Selector, declaración, propiedad y valor de propiedad.
9.
Si HTML es como la estructura de una casa, CSS sería como...
Su apariencia visual, estilo de la fachada, color de la pintura, etc.


44. Responsive design: media queries

Media Queries:

@media (main-width: 48rem){ -> los pixeles se convierten en el
	…					breakpoints
}

Cuando la pantalla sea más chica que esto (48rem), el código que esté dentro va a suceder pero si la pantalla es mas grande que 48rem voy a tener un siguiente media queries que ayudará a implementar estilos diferentes y así sucesivamente dependiendo la pantalla.

Breakpoints: Son la dimensión en el viewport (o el width de la pantalla) en el que se genera un cambio. Es el cambio donde se reposicionan o redimensionan ciertos elementos o contenedores para que se vea bien sin importar el dispositivo donde estés.

Hay diferentes estrategias para responsive design, la recomendada es Mobile First o Mobile Only lo que quiere decir que los proyectos web ya tienen que estar diseñados solo para dispositivos Mobile. Siempre es mejor trabajar de pantallas chicas a grandes.

La forma de hacerlo desde el CSS es teniendo el código base (código hecho y optimizado para mobiles), luego breakpoints para los demás dispositivos. La forma de implementar media queries es iniciar desde las pantallas mas chicas y se termina con las pantallas mas grandes. No es la mejor practica.

Otra forma es aplicarlo desde el head en el html, es la mejor practica y lo que hacemos es, en lugar de mandar llamar un solo archivo de CSS, mandamos llamar varios archivos de CSS dependiendo para que dispositivo estén hechos. El primer archivo va a tener los estilos enfocados en dispositivos Mobile y así sucesivamente dependiendo el tamaño de la pantalla.

<link href="style.css" rel="stylesheet"> <!-- Estilos enfocados a mobile -->
<link href="tablet.css" rel="stylesheet" media="screen and (min-width: 768px)"> <!-- Estilo enfocado a tablets -->


https://www.mydevice.io/


45. Estrategias de responsive: mostly fluid

https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns

Estos son de los 3 patrones más usado en la industria.

Mostly Fluid
Iniciamos con columnas y en el momento en el que empieza a crecer a una tablet empezamos a reacomodar las columnas (probablemente el header se quede igual), si cambiamos la orientación de la tablet (la ponemos horizontalmente) podemos reacomodar otra vez parte de los contenedores, y si nos vamos a una desktop o laptop ya tendríamos la vista total donde están todos los contenedores por importancia.

HTML
<body>
    <main class="container">
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
        <div class="c5"></div>
    </main>
</body>

Nota: Atajo con emmet, main.container>div.c$*5

CSS
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5;
}
.container {
    display: flex;
    flex-wrap: wrap;
}
.c1, .c2, .c3, .c4, .c5 {
    width: 100%;
    min-width: 150px;
    height: 150px;
}
.c1 {
    background-color: #003476;
}
.c2 {
    background-color: #0062d2;
}
.c3 {
    background-color: #b4d2f7;
}
.c4 {
    background-color: #d5dfef;
}
.c5 {
    background-color: #dfe1e5;
}


46. Implementando mostly fluid

Si vamos a trabajar los media query’s en un solo CSS por buenas prácticas van hasta el final del documento para empezar a marcar donde existen los breakpoints y cuales son los cambios por cada uno.

Si empieza a crecer de más se hará muy flexible y nuestro contenido se va a estirar mucho, para evitar esto ponemos un limite que cuando alcance cierto tamaño se empiece a centrar.


Nota: Para estar seguros de que los estilos de media query se estan descargando de la manera que los he colocado reviso el inspector de elementos -> Network (red) y veremos todos los archivos. Para ver cambios refrescar ventana.

--Mostly Fluid en archivos diferentes---
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostly Fluid</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./tablet.css" media="screen and (min-width:600px)">
    <link rel="stylesheet" href="./desktop.css" media="screen and (min-width:800px)">
</head>


tablet.css ---
.c2, .c3, .c4 {
    width: 50%;
}


desktop.css ---
.container {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
}
.c1 {
    width: 60%;
}
.c2 {
    width: 40%;
}
.c3, .c4 {
    width: 33%;
}
.c5 {
    width: 34%;
}


--Mostly Fluid en un solo archivo---

@media (min-width: 600px){ 
    .c2, .c3, .c4 {
        width: 50%;
    }
}
@media (min-width: 800px){
    .container {
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    .c1, .c2 {
        width: 50%;
    }
    .c3, .c4 {
        width: 33%;
    }
    .c5 {
        width: 34%;
    }
}


47. Layout shifter CSS

Empiezas desde el diseño móvil pero según va creciendo, el layout puede cambiar de una manera drástica según el orden que le des.


48. Column Drop

Hace que todos los contenedores vayan subiendo a la primera fila según el orden que les des.


49. Buenas prácticas y ejemplos de responsive

Separa siempre tus archivos de CSS por break point.
- mobile.css / style.css
- tablet.css
- desktop.css

Para ver medidas de dispositivos 
https://www.mydevice.io/


50. Imágenes responsive

<picture> y <source> 
Nos ayudan a trabajar imágenes responsive y de diferentes pesos para diferentes dispositivos. 

La etiqueta <source/> debe ir dentro de <picture>
Esto permite ir ordenando de mayor tamaño a menor con el argumento media y srcset, para al final mostrar la imagen con la etiqueta <img> que debe ser la imagen pensada para dispositivos móviles.

La etiqueta <source> recibe como parámetros media y el srcset. media recibe las medidas en las cuales se van a mostrar diferente imágenes dependiendo del tamaño de la pantalla. Y srcset recibe la ruta de la imagen y el navegador decide cuál cargar dependiendo del peso. srcset se comunica con el navegador y le da opciones para escoger la mejor imagen para ese dispositivo. Recibe una imagen como parámetro.


HTML:
<picture>
	<source media="(min-width: 1300px)" srcset="./imgs/girlLarge.jpg">
     <source media="(min-width: 1000px)" srcset="./imgs/girlMedium.jpg">            
     <img src="./imgs/girlSmall.jpg" alt="Descripción en caso no cargue la imagen">
</picture>

CSS:
img {
    width: 100%;
}


Recuerda: width: 100%; Es tu mejor amigo, úsalo sin problemas.


Preguntas:
1.
¿Cómo puedo saber que se están aplicando mis media queries desde archivos externos?
Verificando que se llaman los archivos en el apartado “Networking” del inspector de elementos, y en qué orden.

2.
¿Qué significa que un proyecto sea "mobile-first"?
Que su diseño está enfocado a dispositivos móviles y se parte de aquí para adaptarlo a vistas más grandes.
3.
¿Cuántos breakpoints debería haber en tu proyecto idealmente?
Máximo 3.
4.
¿Cómo es mejor dividir nuestros media queries?
Un archivo con los estilos generales y otro archivo por cada media querie que utilicemos.

5.
Es la principal característica del patrón Layout Shifter:
Se inicia en un diseño vertical y al crecer la pantalla se reposicionan los elementos para dar un layout diferente.

6.
¿Dónde se recomienda colocar los media queries en CSS en caso usar un solo archivo?
Al final del archivo después de todos los estilos.


51. Semántica

https://platzi.com/clases/accesibilidad-web/

https://platzi.com/clases/basico-javascript/

Tabla periódica HTML:
https://allthetags.com/

Es utilizar las etiquetas de HTML y dejar de utilizar muchos div.
Etiquetas que nos indican donde estamos. Esto es importante porque existen ciertos softwares (si tenemos alguna discapacidad) que nos ayudan a leer la pantalla y si tiene buena semántica le puede decir al usuario en que sección de la pagina están. 

Debes construir un Layout con las etiquetas para cada una de las secciones que vas a necesitar para el proyecto y usar los <div> cuando tengamos contenedores de algo muy específico.


52. Textos

Aquí nos referimos a la medida de los textos. Todos los developers están acostumbrados a usar pixeles para sus fuentes lo que genera un problema de accesibilidad, porque si queremos aumentar el texto de un proyecto esto no va a poder pasar (porque es absoluta).

Es importante que usemos medidas relativas como rem. De esta manera les damos a las personas con alguna discapacidad una oportunidad

html {
    font-style: 62.5%;
}

h1 {
    font-size: 3rem;
}
p {
    font-size: 1.8rem;
}


53. Labels, alt y title

Son algunos atributos que se le agregan a las etiquetas.
- Label: 
Como es el contenedor de todo el input al darle click al label y automáticamente pone un focus en el input. Por ejemplo cuando un software de lectura, al momento que se pare en el label automáticamente se selecciona el input. SIMPRE USARLO PARA LOS INPUTS/FORMULARIOS.

<form action="">
	<label for="name">
           <span>¿Cuál es tu nombre?</span>
		<input id="name" type="text">
	</label>
     <label for="started-studying">
		<span>¿Qué día comenzaste con platzi?</span>
           <input id="started-studying" type="date">
	</label>
	<label for="time-to-study">
		<span>¿En que horario estudias?</span>
		<input id="time-to-study" type="time">
	</label>
</form>

- Alt:
Al igual que en el anterior, al llegar el software a la imagen lo que hará es que leerá la descripción que venga dentro del alt. Hay que ser descriptivos. Que también sirve cuando la imagen no carga como vimos en clases pasadas.

- Title:
Este se puede agregar a diferentes etiquetas como por ejemplo <a> o <img> esta es otra pequeña descripción que sale al momento de hacer un hover en la imagen o hipervínculo.

<section>
	<img 
		src="./alleksana.jpg" 
           alt="Chica de Londres Alleksana" 
           title="Descripción cuando posas el puntero sobre la imagen"
	/>
</section>



















RESUMEN:
https://www.notion.so/Curso-definitivo-de-HTML-y-CSS-7196d473c6b046d2b8de4a0edaa82dc6






Autoprefixer CSS online
Devuelve todos los prefijos de los atributos necesarios para que los estilos de tu web se adapten bien a las características particulares de cada navegador.

https://autoprefixer.github.io/










Combinar colores:
https://coolors.co/ffffff-e36588-011638-2978a0-9bc53d


Para hacer apuntes con MarkDown
https://typora.io/
https://www.youtube.com/results?search_query=typora+tutorial

Hacer apuntes en VSC
Yo por mi parte llevo los apuntes en un repositorio de github y para editarlos uso vscode con los plugins:

- Markdown All in One
- markdownlint
- Code Spell Checker
- Spanish - Code Spell Checker





Colocar fuentes:
https://fonts.google.com/


Recortar imágenes:
https://www.remove.bg/


Apuntes
https://losapuntesdemajo.vercel.app/


Marcelo Vinicio Chavarría Ugalde
Joel Dominguez Merino
Christian Juan Tambo Coaquira
Juan Pablo Jimenez


María Del Pilar Chávez Gutiérrez




---. Examen .---

1.
¿Cuál es el tamaño promedio de una imagen para su uso en la web?
70kb

2.
¿Cuál es una de las principales diferencias de una página estática a una dinámica?
Las páginas estáticas son sólo informativas.

3.
¿Cuál es la etiqueta de HTML que se utiliza como contenedor del contenido principal?
main

4.
¿Qué formato de imagen utilizaremos para fotos?
JPG

5.
¿Qué formato de imagen es ideal para utilizar con transparente?
PNG-8

6.
¿A qué nos referimos cuando decimos que una imagen es categoría Lossy?
Son imágenes que reducen la cantidad de colores y eliminan datos necesarios para recortar su tamaño.

7.
¿Cuál es la paleta de colores en una imagen PNG 8?

Máximo 256 colores

8.
¿Cuál es la paleta de colores en una imagen JPG?
Millones de colores

9.
¿Cuál es la principal diferencia de una pseudo clase?
Definen el estilo de un estado especial de un elemento.

10.
¿Cuál es la principal diferencia de un pseudo elemento?
Definen el estilo de una parte específica de un elemento.

11.
¿Cuál es el orden correcto de declaración en CSS?
Importancia, especificidad y orden en las fuentes

12.
¿Cuál de estos selectores es más importante para CSS?
!important

13.
¿Cuál de estas declaraciones tiene más peso en CSS?
.clase .clase -> No es
REPASAR CLASE

14.
¿Qué símbolo representa al combinador General Sibling (Hermano general)?
~

15.
¿Qué símbolo representa al combinador Adjacent Sibling (Hermano cercano)?
+

16.
¿Qué significa REM?
Root element font-size

17.
¿Cuáles de estas es una medida absoluta?

px
18.
¿Cuál es la posición que viene por defecto en todos los elementos de HTML?
Static

19.
¿Cuál es la diferencia entre display block e inline?
Inline: muestra en la misma línea (respetando el flujo) todos los elementos y no acepta las propiedades width, height ni márgenes verticales. Block: muestra los elementos en líneas independientes y acepta las propiedades width, height y márgenes verticales.

20.
¿Al estar utilizando Display Flex, cómo puedo alinear de forma vertical a los elementos hijos?
flex-wrap: wrap; -> No es
REPASAR CLASE

21.
¿Por qué es importante utilizar siempre medidas relativas en fuentes?
Para que usuarios con problemas de visibilidad puedan incrementar el tamaño de fuente en caso de que lo necesiten.

22.
¿Para qué utilizamos la regla de box-sizing: border-box; en nuestros estilos?
Nos ayuda a decirle al navegador que tenga en cuenta el border y padding en los valores que especifique para el width y height de un elemento. Esto normalmente hace que sea mucho más fácil dimensionar elementos.

23.
¿Cuál es la diferencia entre rem y em?
rem toma como medida base el tamaño de fuente que está en el elemento root que sería la etiqueta html, y em toma como medida base el tamaño de fuente de su padre directo.

24.
Si estoy creando un formulario y quiero preguntar por una fecha y hora exacta, cuál sería la mejor forma de hacerlo?
Input type=”datetime-local”

25.
¿Cuál es la forma de pedirle al navegador que nos ayude en llenar la información que el usuario utiliza de forma frecuente en formularios?
Utilizando el atributo autocomplete y el valor que buscamos.

26.
¿Qué meta utilizamos para asegurar una buena experiencia en responsive?
meta name="viewport" content="width=device-width, initial-scale=1"

27.
¿Para qué utilizamos el atributo alt en las etiquetas img?
Nos ayuda para poder tener una descripción en la imagen en caso de que por algo no se pueda renderizar, y nos ayuda en temas de discapacidad, para que softwares que leen pantallas para personas con alguna discapacidad visual puedan escuchar la descripción de la imagen que están pasando.

28.
¿Cuál es la diferencia entre posición absoluta y relativa?
Con position: relative; podemos posicionar un elemento respecto al flujo normal de la página. Con position: absolute; el elemento no estará dentro del flujo normal de la página y tomará como referencia la ventana del navegador o el elemento padre posicionado más cercano.

29.
¿Cuál es el tamaño de fuente que viene por defecto en el navegador?
16px

30.
¿Cuál de estos no es un patrón de diseño responsive?
Layout fluid