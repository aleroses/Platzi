# Curso Práctico de Frontend Developer

> **Estefany Aguilar** Desarrolladora Frontend en La Haus

## Introducción
### 1. ¿Ya tomaste el Curso de Frontend Developer?

Para tomar este recurso te sugerimos realizar primero el [Curso de Frontend Developer](https://platzi.com/cursos/frontend-developer/) donde aprenderás los fundamentos de HTML y CSS.

Al finalizarlo dominarás:

-   Las **bases** de HTML y CSS
-   La **anatomía** de un documento HTML, sus elementos y las propiedades de CSS
-   **Maquetación** con responsive design

#### ¡A practicar!

En este curso desarrollaremos el proyecto de una tienda. Implementarás lo aprendido y adicional algunos puntos de [CSS Grid](https://platzi.com/cursos/css-grid-layout/) y [Flexbox](https://platzi.com/clases/2008-html-css/31231-flexbox-layouts/).

![yardsale.png](https://i.postimg.cc/63xyTbLD/yardsale.png)

#### Aclaración sobre los siguientes pasos

Este es el **primero de cuatro** cursos, en los que Platzi te llevará de la mano para que puedas tener construir una aplicación web o tienda virtual.

1.  Maquetado → estás aquí
2.  [React](https://platzi.com/cursos/react-practico/)
3.  [API REST con Express.js](https://platzi.com/cursos/backend-nodejs/)
4.  [Base de Datos con PostgreSQL](https://platzi.com/cursos/backend-nodejs-postgres/)

Podrás entender a cabalidad todos los conceptos si sigues el orden de la [Ruta de Aprendizaje de JavaScript](https://platzi.com/javascript-full-stack/)

_Contribución creada por Guadalupe Monge Barale._

#### Lecturas recomendadas

[Curso de Flexbox y CSS Grid [2021] - Platzi](https://platzi.com/cursos/flexbox-css-grid/)

[Curso de Frontend Developer - Platzi](https://platzi.com/cursos/frontend-developer/)

[GitHub - platzi/curso-frontend-developer-practico](https://github.com/platzi/curso-frontend-developer-practico)


### 2. Buenas prácticas de CSS: reflexión y advertencias

¡Hola, Platzinauta! ¡Qué alegría que estés por iniciar el **Curso Práctico de Frontend Developer**! 🌈

En esta lectura quiero ayudarte a aclarar algunos conceptos sobre las próximas clases, tus posibles rutas de aprendizaje y el proyecto del curso. 💚

#### ¿Qué es una buena práctica?

Antes de seguir, responde la siguiente pregunta (mentalmente o en la sección de comentarios): ¿Qué significa seguir “buenas prácticas”?

Para mí **las buenas prácticas son un conjunto de costumbres, acciones, decisiones y/o herramientas que agilizan, mejoran el rendimiento, legibilidad, mantenimiento y/o escalabilidad de nuestros proyectos en un CONTEXTO muy específico**.

La palabra clave es **contexto**. Las buenas prácticas NO son absolutas. Así como funcionan en ciertas situaciones, dejan de tener sentido en otras circunstancias.

Es un error común hablar de buenas o malas prácticas sin entender correctamente su contexto. Yo mismo he caído en esa falacia. Por fortuna, mis líderes, profes, compañeras y amigos han tenido la paciencia y empatía de explicarme cómo analizar el contexto de cada situación antes de llegar a una conclusión.

#### El contexto de este curso

El Curso Práctico de Frontend Developer pertenece a dos escuelas en Platzi:

-   [La ruta profesional de JavaScript](https://platzi.com/javascript-full-stack/): es la más corta para aprender desarrollo web desde cero hasta nivel muy avanzado con el Stack PERNN (PostgreSQL, Express.js, React.js, Next.js y Node.js).
-   [Escuela de Desarrollo Web](https://platzi.com/escuela/escuela-web/): la ruta de aprendizaje más larga y completa para dominar y profundizar en todas las herramientas o stacks de programación más importantes del desarrollo web.

> 💡 [Escuela de JavaScript vs. Escuela de Desarrollo Web: ¿Cuál elegir? ¿Cuál es mejor?](https://platzi.com/blog/escuela-javascript-vs-desarrollo-web/)

Junto al [Curso de Frontend Developer](https://platzi.com/cursos/frontend-developer/), este curso es la introducción al gran mundo de la maquetación con HTML y CSS que estudiaremos en la Escuela de JavaScript. Luego de este curso seguirán las bases de JavaScript, frontend con React.js y backend con Node.js.

En cambio, en la Escuela de Desarrollo Web tenemos muchísimos más cursos para [practicar HTML y CSS](https://platzi.com/cursos/html-css/), crear aún más [proyectos para tu portafolio profesional](https://platzi.com/cursos/html-practico/) y profundizar en herramientas complejas como [responsive design](https://platzi.com/cursos/mobile-first/), [CSS Grid](https://platzi.com/cursos/css-grid/), [flexbox](https://platzi.com/cursos/flexbox-css-grid/) y [animaciones con CSS](https://platzi.com/cursos/transformaciones-transiciones-css/).

#### Etiqueta style vs. archivos .css

Mi nombre es [JuanDC](https://platzi.com/profes/juandc/), Course Director de este curso y la Escuela de JavaScript 2.0. También soy el responsable de que en este curso escribamos el HTML y CSS de cada página en el mismo archivo usando la etiqueta style.

En las próximas clases puede surgirte la duda de por qué decidimos no separar los estilos en sus propios archivos .css si supuestamente es una “mala práctica”. Pero recuerda que las buenas o malas prácticas NO son absolutas, siempre dependen de un contexto. 😅

Teniendo eso en cuenta: **¿por qué crees que es una mala práctica escribir el CSS en etiquetas style en vez de archivos .css?**

Durante la etapa de planeación discutimos mucho junto a Teffcode, Oscar Barajas y Nico Molina para encontrar la mejor manera de conectar todos sus cursos en la Escuela de JavaScript y construir el mismo proyecto progresivamente.

Más adelante en tu ruta de aprendizaje vas a tomar el [Curso Práctico de React.js](https://platzi.com/cursos/react-practico/). Uno de sus objetivos es enseñarte cómo convertir páginas en HTML y CSS a componentes en React. Vas a darte cuenta que allí descargamos el proyecto de este Curso Práctico de Frontend Developer para separarlo entre vistas, componentes y contenedores.

La razón de mantener el HTML y CSS de cada sección de nuestra tienda en un solo archivo .html es para facilitar nuestro trabajo de separar y unir todo ese código cuando tomemos el curso de React.

No es un error. ¡Y tampoco una mala práctica!

#### Conclusiones

Si tu proyecto con HTML y CSS es la **versión final** de la aplicación que desplegarás a producción (la que publicarás en internet y será usada por usuarios reales), entonces definitivamente es muy buena práctica separar tus estilos en archivos .css.

En cambio, si tu maquetación con HTML y CSS es **apenas el principio** de tu desarrollo frontend y más adelante convertirás estos elementos en componentes con alguna herramienta como Web Components, React.js, Angular, Svelte o Vue.js, entonces NO es una mala práctica separar cada elemento en su respectivo archivo ni mantener su HTML y CSS en el mismo lugar.

Espero que esta explicación te haya ayudado un poco a entender el flujo de desarrollo y decisiones que tomamos de este curso. **Recuerda siempre tener muy claro el contexto de cada situación antes de determinar si es una buena o mala práctica.**

Cuéntame sobre cualquier duda que tengas sobre buenas prácticas en la maquetación web. ¡Mucha suerte completando este curso!


## Layout y componentes
### 3. Identifica las pantallas de tu proyecto

La **maquetación o diagramación web** consiste en transformar un diseño gráfico —boceto— (hecho por UX/UI en Figma o Scketch) en una interfaz funcional en términos de programación que entienda un navegador o dispositivo específico.

![shopping-cart.jpg](https://i.postimg.cc/vHg2n9DL/3-shopping-cart.webp)

El área de diseño nos proporcionó el bosquejo del proyecto en [Figma](https://scene.zeplin.io/project/60afeeed20af1378ed046538).

Podemos identificar las vistas de:

-   Inicio
-   Creación de cuenta
-   Acceso
-   Carrito de compras
-   Orden de compra
-   Detalle de producto
-   Menú

![proyecto.png](https://i.postimg.cc/63xyTbLD/yardsale.png)

Desde aquí puedes ver cómo es la interacción entre las diferentes pantallas.

-   [Desktop version](https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A999&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A998&amp%3Bstarting-point-node-id=5%3A2808)
    
-   [Mobile version](https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A462&amp!%5Bshopping-cart.jpg%5D(https://static.platzi.com/media/user_upload/shopping-cart-4d77fd41-9393-4883-b66b-2ee40682f1ea.jpg)//platzi.com/categorias/diseno/)
    
-   [Curso de diseño para developers](https://platzi.com/cursos/diseno-programadores/)
    
-   [Curso de Figma](https://platzi.com/cursos/figma/)
    
-   [Curso de diseño web con CSS Grid y Flexbox](https://platzi.com/cursos/flexbox-css-grid/)
    

_Contribución creada por Porfirio González y Guadalupe Monge Barale._

#### Lecturas recomendadas

[Yard Sale | Zeplin Scene](https://scene.zeplin.io/project/60afeeed20af1378ed046538)

[Figma Diseño Mobile](https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A684&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A719)

[Figma Diseño Desktop](https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=3%3A2112&amp;scaling=scale-down&amp;page-id=0%3A998&amp;starting-point-node-id=5%3A2808)


### 4. Sistema de diseño, assets y variables de CSS

¡Comenzamos a trabajar! Seguiremos un sistema de diseño que permitirá conseguir un proyecto uniforme. Para esto, **declararemos variables en CSS** con los colores que utilizaremos y ordenaremos en carpetas los íconos y logos.

#### ¿Cuál es la utilidad de un sistema de diseño?

La principal ventaja de implementar un sistema de diseño es que **facilita las tareas** de diseñadores y desarrolladores en el proceso de **creación**. También **agiliza la toma de decisión** entre equipos.

Profundiza en este tema:

-   [Curso de sistemas de diseño](https://platzi.com/cursos/sistemas-diseno/)
-   [Curso de sistemas de diseño para desarrolladores](https://platzi.com/cursos/diseno-desarrolladores/)

#### Variables en CSS

En CSS, llamamos variables a las **propiedades personalizadas**.  
Contienen **valores específicos** que se pueden reutilizar muchas veces en un documento.

Se establecen mediante la **notación** de dos guiones

```css
--nombre-variable: valor;
```

Se **acceden** mediante la función var()

```css
propiedad: var(--nombre-variable);
```

Normalmente las declaramos dentro del selector **_:root_** para que su alcance (scope) sea global.

**Nuestro proyecto quedaría así:**

```css
:root {
    --black:#000000;
    --white: #FFFFFF;
    --very-light-pink: #C7C7C7;
    --text-input-field: #F7F7F7;
    --dark: #232830;
    --hospital-green: #ACD9B2;
}
```

_También puedes **nombrar a tus variables según su función**.  
Ejemplos: `--background-color, --primary-color`, etcétera._

#### Fonts

Buscaremos las fuentes propuestas por diseño en [Google fonts](https://fonts.google.com/specimen/Quicksand)  
Colocamos los links dentro de la etiqueta **_head_** del HTML

```html
<head>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">
</head>
```

Dentro de la etiqueta **_style_** le decimos a CSS que la implemente

```css
body {
    font-family: 'Quicksand', sans-serif;
}
```

[_Aprende más sobre web fonts_](https://platzi.com/clases/2008-html-css/31229-web-fonts/)

#### Assets

Desde aquí puedes [descargar](https://github.com/platzi/curso-frontend-developer-practico) los íconos y logotipos que usaremos en nuestra tienda.

_Contribución creada por Guadalupe Monge Barale con los aportes de Reynaldo Lenin Fuentes Garcia y Brandon Argel Verdeja Dominguez_


#### Lecturas recomendadas

[Design - Shopify Polaris](https://polaris.shopify.com/design/design)

[GitHub - platzi/curso-frontend-developer-practico](https://github.com/platzi/curso-frontend-developer-practico)


## Maquetación responsiva: pantallas de autenticación
### 5. Crear nueva contraseña: HTML


### 6. Crear nueva contraseña: CSS

Una recomendación que dejó Diego De Granda en el Curso de Responsive Design: Maquetación Mobile First, es escribir los estilos ordenados según su propósito de la siguiente forma:

1.  Posicionamiento
2.  Box Model
3.  Tipografía
4.  Visuales
5.  Otros  
    Y cada categoría se separa con un espacio, de forma que resulta mas legible. Por ejemplo:

```css
display: grid;
place-items: center;
width: 100%;
height: 100vh;

font-size: 1rem;
```

📌 Aporte: En el botón que tenemos con la clase “.primary-button” no toma la fuente de “Quicksand”, en su lugar usa su fuente por defecto que es Arial.

Investigué un poco y encontré que los inputs no heredan las fuentes, asi que debemos definirlas en cada uno:

```css
.primary-button{
	font-family: 'Quicksand', sans-serif;
}
```

Como aporte adicional, también debemos realizar lo mismo con los inputs de las contraseñas para que así todos tengan nuestra fuente principal 😃

```css
.input{
	font-family: 'Quicksand', sans-serif;
}
```


### 7. Email enviado


### 8. Login


### 9. Crear y editar mi cuenta 

### 10. Mi cuenta


## Maquetación responsiva: vistas principales

### 11. Página de inicio: HTML

### 12. Página de inicio: CSS

### 13. Menú desktop

### 14. Menú mobile 

### 15. Mi orden: HTML 

### 16. Mi orden: CSS

### 17. Mis ordenes 

### 18. Navbar: HTML

### 19. Navbar: CSS

### 20. Detalle de producto 

### 21. Carrito de compras: HTML

### 22. Cómo continuar aprendiendo desarrollo frontend


### Examen:     

<details>
  <summary>Haz click aquí para ver los resultados 👀</summary>

  <br/>

1. La propiedad que usamos para crear únicamente columnas en una grid es:
	- grid-areas
	- grid-template
	- grid-template-rows
	- 📌 grid-template-columns

2. text-decoration: none; la usamos para: 
	- 📌 Remover la línea de la parte inferior de la etiqueta `<a>`
	- Remover los estilos de los textos.
	- Remover los puntos que se crean por defecto en las listas.   

3. `font-weight` es la propiedad que nos da el:
	- 📌 Grosor del texto
	- Color del texto
	- Interlineado del texto
	- Tamaño del texto

4. `:nth-child()` es:
	- 📌 Una pseudoclase
	- Un pseudoelemento

5. Padding es el espacio:
	- 📌 Entre el contenido y el borde.
	- Del borde hacia afuera.

6. Usamos display: grid; y place-items: center; en el elemento contenedor para:
	- Centrar los elementos hijos horizontalmente.
	- Mal 📌 Centrar el contenedor tanto vertical como horizontalmente en el espacio disponible.
	- Centrar los elementos hijos verticalmente.
	- 📌 Centrar los elementos hijos tanto vertical como horizontalmente.

7. La propiedad flex-direction es por defecto:
	- Column
	- 📌 Row

8. `margin: 24px 0 0;` es lo mismo que decir:
	```css 📌
	margin-top: 24px;
	margin-right: 0;
	margin-bottom: 0;
	margin-left: 0;
	```
1. `justify-content` es una propiedad de los elementos:
	- Hijos
	-  📌 Contenedores

2. `@media (max-width: 640px)` nos indica que el código dentro de él será para:
	- 📌 Pantallas desde 0px hasta 640px
	- Pantallas desde 640px en adelante

3. `:root` nos permite definir variables y usarlas mediante la función var():
	- Falso
	- 📌 Verdadero

4. `email-image img`, selecciona:
	- 📌 Todas las imágenes que estén dentro de .email-image
	- Todas las imágenes que tengan como clase .email-image
	- La primera imagen que esté dentro de .email-image

5. `.product-info div p:nth-child(1)` se lee como:   
	- 📌 El primer hijo de tipo p que está dentro del div que está dentro de .product-info

6. La etiqueta `<link>` se debe colocar dentro de la etiqueta:
	- `<style>`
	- `<body>`
	- 📌` <head>`
</details>