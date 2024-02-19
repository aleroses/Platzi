# Curso Práctico de Maquetación en CSS
> **[Diego De Granda](https://platzi.com/profesores/degranda/)** - Software Engineering Manager en Platzi

## 1. Lo que aprenderás sobre maquetación en CSS

[Recursos del Curso](https://github.com/degranda/Platzi-blog)

Este es un curso practico de CSS Grid donde trabajaras un proyecto final (blog), la idea es personalizarlo al final del curso y así compartirlo con toda la comunidad.

Necesitas haber tomado el curso **[Definitivo de HTML y CSS](https://platzi.com/clases/html-css/)**

**Herramientas que necesitaremos:**    
-   Editor de texto (VSCode, Atom, Notepad++,Sublime Text, Vim, …)
-   Navegador (Chrome, Firefox, Edge, Chromium, Opera, Brave, …)

**Recap o resumen**   
CSS (Cascading Style Sheets) **No** es un lenguaje de programación, es un lenguaje de estilos, el cual nos ayuda a agregar estilos a la maquetación realizada con HTML, por medio de:
-   Selectores: que son las etiquetas de HTML.
-   Clases: los cuales se llaman por medio de **.(nombre clase)**
-   ID: selectores mas específicos los cuales se llaman por medio de **#(nombre id)**

🎲

## 2. Chrome Devtools

**DevTools**:     
Es una serie de herramientas que facilitan el proceso de desarrollo. Podrás ver en tiempo real en lo que estás trabajando, ya sea CSS, JS, peticiones, imágenes y demás. Incluso puedes hacer debugging para hallar problemas al momento de renderizar.

[Curso de Debugging con Chrome DevTools](https://platzi.com/cursos/devtools/)

📌 Tips:
-   Con **F12** abres el inspector de elementos de manera más sencilla. Tambien pulsando **Control + Shift + i** o con Clic derecho / inspeccionar.
-   Con **Ctrl + u** puedes ver el código de cualquier sitio web.

🎲

## 3. Diseño del proyecto

[Imágenes del proyecto](https://platzi.com/clases/1744-practico-css/24712-diseno-del-proyecto/) Revisar en recursos. 

[Imágenes en Dropbox](https://www.dropbox.com/sh/skwiu9gqkr2j6yb/AABmvWbUcTgDnr1m0U1RlcLBa?dl=0)

📌 Iconos / Imágenes / 3D
- [Flaticon - Iconos - Imgs](https://www.flaticon.com/)
- [Fontawesome](https://fontawesome.com/)
- [Iconarchive](http://www.iconarchive.com/)
- [Undraw](https://undraw.co/illustrations)
- [Svgporn - Marcas](https://svgporn.com/)
- [Iconfinder](https://www.iconfinder.com/)
- [3D Icons](https://3dicons.co/)
- [Free3Dicon](free3Dicon.com)
- [Google Fonts](fonts.google.com)
- [Uxwing](uxwing.com)

🎲

## 4. Setup del proyecto
Pasamos a trabajar en VSC

**Carpetas y archivos**
- Blog
	- assets
	- css
		- main
- blog.html
- blogs.html
- index.html
- perfil.html

📌 Crear estructura html5 solo con !

🎲

## 5. Arquitectura del header en HTML
**Arquitectura de elementos de una página web**     
Cuando se empieza a _**maquetar**_ o **_diseñar_** una página web, hay que tomar en cuenta un diseño preliminar. Dicho diseño deberá ser analizado para determinar sus composiciones.  

En el desarrollo moderno web, tenemos que considerar el desarrollo **responsivo** o, inclusive, **PWA**. Determinando, en la mayoría de los casos, colores, disposiciones, etc.  

El profesor utiliza, _**section**_ y _**div**_ para agrupar elementos. Sin embargo, considero que no se debe tomar tan a la ligera ese tipo de notaciones ya que son diferentes, más en el uso estricto del texto.    
**Section**, se utiliza para agrupar elementos con algún significado y el **Div** para aquellos sin uno o como comodín.

[All The Tags](https://allthetags.com/) para un conocimiento amplio de todas las etiquetas disponibles y te des un enfoque completo. Al final son etiquetas, pero el uso correcto te permitirá realizar Patrones de Diseño, Sistemas de diseño, hasta frameworks.

🎲

## 6. Estilos en el header
`position: fixed;` es para que no haya scroll. Hay otras formas de lograr eso, pero esta es una muy sencilla.

Si quieres extraer el color de una imagen sigue los siguientes pasos:
- [Busca una imagen de ejemplo](https://static.platzi.com/media/public/uploads/aaindex-home_fda584b0-c2ae-458a-b854-53eee80b8577.png)
- Control + Shift + i
- En la parte de estilos escribir algún color
- Luego dar clic justo donde se muestra en la imagen

> ![Detectar colores](https://i.postimg.cc/8cSFXSqy/color.png)
- Se mostrara el color deseado justo donde escribiste el color anterior.

📌 **Lista de trabajo en CSS: **     
1. Posicionamiento:     
	- Static
	- Absolute
	- Relative
	- Fixed
2. Modelo de caja (Box model):  
	- Margin
	- Border
	- Padding
	- Content
3. Tipografía:
	- Tipos
	- Tamaños de fuente
	- Etc
4. Estilos visuales:
	- Box-shadow
	- Border-radius
	- Gradient
	- Etc
5. Otros:
	- Reglas CSS y más

🎲

## 7. Agregando íconos
Consigue los iconos que necesitas:    
- [Flaticon - Iconos - Imgs](https://www.flaticon.com/)

**Pack de iconos usados**    
[Flaticon Social Media](https://www.flaticon.com/packs/social-media-86)

Para esta clase usaras el archivo `flaticon.css` de donde se extraen las clases que se van a colocar en el `index.html` pero primero debemos llamarlo usando un `<link rel="stylesheet" href="./css/fonts/flaticon.css">  `  
- `class="flaticon-001-facebook"`

Para terminar, dentro del archivo `main.cs`s le damos un color a nuestros iconos según el diseño.
- `header .icons span {color: white;}`

📌 Para obtener iconos en formato svg se debe pagar 💸💰💲

🎲

## 8. Agregando imágenes al header

Proyectos de compañeros:
- [Proyect 01](https://yanisita.github.io/blog/index.html)

🎲

## 9. Manejo de Grid para posicionar contenedores
Algo muy importante que quiero resaltar :

**Por qué hacer un título con un tag/etiqueta `<p>` y no con un tag `<h1>` en nuestra página?**    

El tag `h1` es importante en el hero debido al SEO y a la experiencia de usuario.     

Este nos ayuda a indicar la cabecera mas importante en una pagina web, hace que la lectura del contenido sea de una manera rápida y clara dónde se encuentra el usuario y el contenido que se va a encontrar.

Por otro lado, a nivel _SEO_, nos ayuda a posicionar una página por la palabra clave que se desee. Se recomienda utilizar la palabra clave dentro del `h1` para mejorar el posicionamiento de la página.

📌 Ten en cuenta que por página debe haber un solo `h1`.

`letter-spacing` establece el comportamiento del espaciado horizontal entre caracteres de texto.

📌 [Documentación](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

🎲

## 10. Manejo de imágenes de Background

`background-position: bottom;` Para que se vea el cuello del robot.

🎲

## 11. Agregando fuentes

[Google Fonts](https://fonts.google.com/)
- **Roboto:** Regular 400 / Medium 500 / Bold 700 / Black 900     
- **Roboto_Mono:** Regular 400 / Medium 500 / Bold 700     
- **Roboto_Slab:** Regular 400  / Bold 700      

El profesor copió el `@import url('...')` pero la forma que en cursos anteriores recomendó fue copiar los links en el `index.html` dentro del `head`:     
- `<link rel="preconnect" href="https://fonts.googleapis.com">`     

Luego en el css solo escribes lo siguiente:    
- `font-family: 'Roboto', sans-serif;`


📌 Esto se puede resumir...
```
.home-main-text {  
	font-weight: 700;
    font-size: 30px;  
    font-family: 'Roboto Mono', monospace;
}
```

📌 En...
```
	font: 700 30px "Roboto Mono", monospace;
```

🎲

## 12. Terminando el Home
WHATWG y en W3C , son dos grandes herramientas para poder validar el markup de los html y seguir buenas practicas.      
- [W3C](https://validator.w3.org/)   
- [Whatwg](https://html5.validator.nu/)   

📌 Indagar mas al respecto...

🎲

## 13. # Blog page

Aplicando Emmet:      
`div>h3+article*6>img+p*2+a`      

📌 A que se refieren con no repetir el código?     
-   Don´t repeat yourself (DRY): No repitas tu código. Hay una librería llamada React, con ella puedes crear componentes que renderiza la sección html-css que desees donde lo desees.


🎲

## 14. Manejo de clases
**Metodología BEM**      
Son una serie de normas que buscan tener nuestro código CSS bien organizado. Existen muchas metodologías, pero BEM es de las más populares. Cubre la necesidad de tener proyectos complejos bien estructurados para evitar confusiones o redundancia.       

**BEM**      
Es una abreviación de las palabras “Block”, “Element” y “Modifier” (Bloque, elemento y modificador en español), esto es por la forma en la que trataremos cada elemento de nuestra página web.    

**Bloque**: Es un elemento que existe por si mismo, es completamente independiente. En el proyecto de esta clase, el bloque bien podría ser la sección de Noticias.     

**Elemento**: Son las partes que componen el bloque; cuadros de texto, imágenes, títulos, botones, etc.     

**Modificadores**: Son las distintas versiones de un elemento; el mejor ejemplo es cuando tienes el mismo botón en varios bloques, pero con colores distintos.     

Frecuentemente las clases se llaman con el siguiente formato: [`class="bloque__elemento--modificador"`], siendo el modificador opcional.      

Las metodologías nos permite reciclar código y conocerlas también nos va a nos facilitará integrarnos a un equipo de trabajo.      

**Puedes encontrar más información sobre BEM [aquí](http://getbem.com/)**

🎲

## 15. Estilos en blogs html
Para ahorrar tiempo al obtener el color de una página web, les recomiendo [Colorzilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp) una extensión de Chrome que simplifica el trabajo.

📌 Indagar como usarlo Colorzilla.

[Recursos interactivos para practicar](
https://platzi.com/tutoriales/1640-frontend-developer/6949-recursos-interactivos-para-practicar-flexbox-selectores-grid-layout-animaciones-y-mas/)

🎲

## 16. Agregando imagen
📌 **css** `border-bottom` vs **tag/etiqueta** `hr`      
Ambas dibujan una línea de separación.✨    

[Img or Background-img](https://stackoverflow.com/questions/492809/when-to-use-img-vs-css-background-image/1469139#1469139)

🎲

## 17. Estilos del botón
Guarda los colores en variables, en la parte inicial de `main.css` de esta manera:    
```
:root {
  --color-green: #47cfac;
  --color-light-green: #88d6c3;
  --color-white: whitesmoke;
  --color-grey: rgb(223, 221, 221);
}
```

🎲

## 18. Trabajando la sección de post

🎲

## 19. Grid Container

🎲

## 20. Crear la pantalla de blog
El procedimiento iterativo que hemos hecho y que tiene como principio Degranda es:

1. Identificar o maquetar mentalmente  
2. Estructurar  
3. Agregar clases  
4. Implementar estilos

Una vez terminado… repetir hasta finalizar nuestro proyecto.     
Me parece una muy buena guía para comenzar una maquetación. ✅✅✅

📌 La forma nativa para no repetir el código es usando [Webcompoents](https://www.webcomponents.org/) _Indagar mas al respecto._

🎲

## 21. Agregando estilos a la página de blog
dummy = ficticio 
lorem*5

📌 En la parte final de esta clase el profe comete un pequeño error al llamar:
- `blogpost-main-container section h1`

En vez de:
- `blogpost-main-container article h1`

🎲

## 22. Sección de contacto
Hay una forma de poner un email de contacto para que este abra el correo automáticamente.        

Pueden hacerlo con el siguiente atributo en la etiqueta **a**     

```
<a href="mailto:contacto@mail.com">contacto@mail.com</a>
```

🎲

## 23. Maquetando perfil HTML

🎲

## 24. Manejando estilos en la página de perfil

🎲

## 25. Media Queries

🎲

## 26. Cierre del curso

🎲

## Examen 
1. ¿Qué es emmet?
- Es un plugin que nos ayuda a escribir código HTML y CSS a base de abreviaciones.

2. ¿Qué etiqueta utilizarías para crear la barra de navegación de tu proyecto?
- nav

3. ¿Cuál de los siguientes doctype es el que utilizarías para un documento HTML5?
- `<!Doctype html>`

4. ¿Qué metodología podríamos utilizar para nombrar de mejor forma tus clases en CSS?
- 📌 BEM

5. ¿A qué nos referimos cuando hablamos de HTML5 Semántico?
- Describir con mayor precisión cuál es su contenido.

6. ¿De qué forma puedo darle el mismo estilo a más de un elemento en css?
- Utilizando la “,” después de cada selector.

7. ¿De qué forma podría generar estilos en css que pueda reutilizar para otros selectores sin que tenga que replicar propiedades?
- 📌 Utilizando variables de CSS

8. ¿Qué etiquetas de HTML5 tienen "display: block;" por defecto?   
- [Info para leer](https://dev.to/lupitacode/la-propiedad-display-en-css-1b6a#:~:text=Los%20valores%20b%C3%A1sicos%20de%20la,utiliza%20el%20valor%20de%20block.)
- 📌 header, footer, div, p, nav, h1

9. ¿Cual es la forma adecuada de llamar un media query?
- @media (condicional)

10. ¿Para qué nos puede ayudar implementar CSS Grid Layout en nuestros estilos?
- Nos facilita posicionar contenedores creando una cuadrícula y alineando elementos en filas y columnas.

11. ¿De qué forma podría crear una cuadrícula de 3 x 3 utilizando Grid Layout?
- display: grid; grid-template-columns: 1fr 1fr 1fr; grid -template-rows: 1fr 1fr 1fr;

12. ¿Para qué nos ayuda colocar el “alt” en una img?
- Ayuda a usuarios con problemas visuales que utilizan herramientas de lectura de pantalla.

13. ¿Cuál es la forma de agregar una imagen de fondo con css?
- background-image: url(" ");

14. ¿Cuál sería una forma de agregar fuentes a nuestro proyecto?
- @import url(' ');

15. ¿Cuál sería una regla en css para limitar el tamaño máximo de algún contenedor?
- max-width

16. ¿Qué podría esperar al utilizar la regla de “margin: 0 auto;”?
- Centrar de forma horizontal un contenedor.

17. ¿De qué forma podría centrar la imagen de fondo?
- 📌 background-position: center;

18. ¿Cómo puedo generar espacio entre las letras de un texto?
- letter-spacing

19. En nuestro ejemplo del Nav, ¿qué propiedad de CSS utilizamos para posicionar contenido hacia algún extremo?
- justify-items

20. ¿Cuál es la atributo que utilizamos en la etiqueta "a" para crear un hipervínculo?
- href

🎲