#  Curso de Fundamentos de Sass: Crea tu Primera Landing Page

> Ana María Díaz Solorio

## 1. ¿Qué es SASS y en qué se diferencia de otros preprocesadores?

Sass (Syntactically Awesome Style Sheets) es un preprocesador CSS que permite escribir hojas de estilo en un lenguaje más avanzado y potente que el CSS estándar. 

Sass permite agregar características como variables, anidamiento, mixins, herencia de estilos y funciones, lo que facilita la escritura y el mantenimiento de hojas de estilo CSS. Además, Sass también proporciona una sintaxis más legible y clara que facilita la lectura y comprensión del código.

Sass es compatible con CSS estándar, por lo que cualquier archivo CSS existente se puede convertir fácilmente a Sass simplemente cambiando la extensión del archivo a `.scss` o `.sass`. Además, también es compatible con la mayoría de los navegadores modernos y es utilizado ampliamente en el desarrollo web para mejorar la eficiencia y calidad de las hojas de estilo CSS.

### Características de SASS

- **Modularización:** Permite dividir los estilos en módulos más pequeños y manejables para simplificar el proceso de desarrollo y mantenimiento.  

- **Variables:** Permite definir variables para almacenar valores reutilizables en un archivo SASS, lo que facilita la creación y el mantenimiento de hojas de estilo.  

- **Mixins:** Permite definir mixins, que son bloques de código reutilizables que se pueden incluir en diferentes partes del CSS. Los mixins pueden contener variables y lógica, lo que facilita la creación de estilos más complejos y dinámicos.  

- **Selectores Anidados:** Se pueden anidar selectores y reglas de estilo, lo que ayuda a organizar y estructurar el CSS de manera más intuitiva.  

- **Herencia:** SASS permite la herencia de estilos entre selectores, lo que puede simplificar la creación y el mantenimiento de hojas de estilo.  

- **Funciones:** Admite funciones que permiten realizar cálculos y operaciones complejas en el CSS. Las funciones se pueden utilizar para definir valores dinámicos, como la altura o el ancho de un elemento en función de otros valores.  

- **Importación:** SASS admite la importación de archivos CSS y SASS, lo que facilita la organización y el mantenimiento de hojas de estilo.  

- **Directivas de control de flujo:** SASS admite directivas de control de flujo, como if/else y for, que permiten realizar operaciones condicionales y repetitivas en el CSS.  

- **Operaciones aritméticas:** SASS admite operaciones aritméticas, lo que permite realizar cálculos matemáticos directamente en el CSS.


### Diferencias entre .saas y .scss

Sass es flexible y **compatible con el CSS tradicional,** por lo tanto, cuando trabajamos con él tenemos la opción de utilizar dos diferentes extensiones

- **.SASS** = Utiliza una sintaxis identada, quitando el uso de `{ }` y el ; tras cada declaración. 
- **.SCSS** = Utiliza sintaxis tradicional de CSS, incluyendo el uso de `{ }` y el `;` tras cada declaración  

`.scss`
```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body{
	font: 100% $font-stack;
	color: $primary-color;
}
```

`.sass`
```css
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
	font: 100% $font-stack
	color: $primary-color
```

- [Documentación](https://sass-lang.com/documentation/)
- [Proyecto en Figma](https://www.figma.com/file/Em1aDiIHmqozHpUAjsYhT7/Eco-Store-Mockups-(Copy)?type=design&node-id=0-1)
- [Proyecto en GitHub](https://github.com/platzi/cursos-sass)


## 2. ¿Cómo funcionan los preprocesadores? Ventajas de utilizar uno

### ¿Cómo funcionan los preprocesadores?

Un preprocesador es una herramienta que nos permite escribir pseudocódigo recibiendo como parámetro de entrada los estilos que posteriormente serán convertidos a CSS nativo. Podemos decir que funcionan de manera similar a los traductores pues al indicarle una sintaxis devuelve los valores en una sintaxis nueva.  
En SASS se incluyen características adicionales, como variables, mixins, herencia de clases, entre otras, que hacen que el proceso de escritura de CSS sea más fácil y rápido.

Para poder hacer uso de un preprocesador, primero es necesario entender cómo funcionan los estilos CSS y el navegador. Los estilos CSS son interpretados y representados por el navegador, el cual se encarga de leer el código CSS y aplicarlo a los elementos o componentes HTML de la página. Es el navegador quien recorre la hoja de estilos, línea por línea, y asigna propiedades a los elementos de la página según lo indicado en el código CSS. Este proceso es fundamental para permitir que la página se estilice de la manera deseada, teniendo control sobre el diseño y la disposición de la página, proporcionando al usuario una experiencia visual atractiva, donde todos los elementos están estilizados y presentados de una manera agradable a la vista y fácil de interactuar.

![](https://i.postimg.cc/3xLYL5jb/2-funcionamiento-css.jpg)

### Ventajas de utilizar un Preprocesador

Los principales beneficios de usar un preprocesador como SASS son la rapidez y la productividad. Permitiendo que el código se pueda escribir de manera mucho más rápida y sencilla, ayudando a los desarrolladores a ahorrar tiempo y ser más productivos. También hacen que el mantenimiento del código sea más fácil, pues todos los estilos se guardan en un solo archivo. La reutilización de código es otro de los beneficios que nos trae el uso de un preprocesador, esto significa que los mismos estilos se pueden aplicar en varias páginas sin tener que escribir el código una y otra vez.  
Finalmente el uso de preprocesadores nos permite que sea mucho más sencillo trabajar una página web de manera responsiva.

### Tipos de Preprocesadores

**[Stylus]**  
[Stylus](https://stylus-lang.com/) es un lenguaje de programación de hojas de estilo en cascada (CSS) que se compila en CSS estándar, está basado en JavaScript. Hay algunas diferencias importantes entre Stylus y SASS. La sintaxis de Stylus es más simple y clara, mientras que la sintaxis de SASS se considera más profesional y compleja. Stylus ofrece una mejor portabilidad y es más fácil de usar. Sin embargo, SASS ofrece mayor soporte al ser utilizado con una mayor cantidad de lenguajes de programación.

Conoce [Stylus](https://stylus-lang.com/)

**LESS**  
Una de las principales diferencias entre [LESS](https://lesscss.org/) y Sass es que Sass está codificado en Ruby y, por lo tanto, se procesa del lado del servidor, mientras que Less es una biblioteca de JavaScript (Como Stylus) y se procesa del lado del cliente. Un ejemplo es la forma en que ambos lenguajes manejan las variables es distinta. En LESS, los nombres de las variables se inicializan con @ y en Sass los nombres de las variables se inicializan con el símbolo $.

Conoce [LESS](https://lesscss.org/)

## 3. Anatomía de un proyecto de SASS e instalación y configuración del entorno de trabajo

### El proceso de Compilado

Para hacer uso de SASS dentro de nuestro proyecto tenemos que tener en cuenta **3 puntos importantes que forman parte del proceso de compilación**.  

- **Imput file (archivo de entrada) —>** Es donde vamos a escribir nuestros estilos haciendo uso de la sintaxis de Sass, incluyendo la extensión `.scss` en el nombre del archivo.  
- **Output file (archivo de salida) —>** Es donde se colocarán los estilos finales con CSS nativo, que provienen del archivo de entrada. _(nunca se debe editar directamente el archivo de salida)_
- **Los comandos para ejecutar y compilar Sass —>** Hay varias formas de ejecutar y compilar Sass, cada una con sus propios comandos y herramientas. La elección del método dependerá del entorno de desarrollo y las preferencias personales del desarrollador.

### Tipos de instalación 

- Instalación global en el sistema operativo 
- Haciendo uso de Node js
- Dart Sass
- Javascript API

#### Live Sass Compiler 

Extensión de VSC que nos permitirá trabajar con SASS de una manera sencilla, además de compilar nuestros estilos en tiempo real sin la necesidad de ejecutar los comandos manualmente. 

### Estructura del proyecto

- eco-store-platzi/
	- index.html
	- css
		- main.css: Archivo input / entrada
		- Tener en cuenta que **este archivo se crea automáticamente** al correr Live Sass Compile, paso que haremos mas adelante. 
	- scss
		- main.scss: Archivo output / salida 

#### Extensiones a usar 

Una vez creada la estructura de nuestro proyecto instalamos las extensiones necesarias. 

- Sass (.sass only)`v1.8.26`
- Live Sass Compiler`v6.0.5`
- Live Server`v5.7.9`

#### Configurar sass 

- Ctrl + ,
- Buscamos sass format
	- Live Sass Compile> Settings - Formats: 
		- Edit in settings.json

```json
"liveSassCompile.settings.formats": [
	{
	    "format": "expanded",
	    "extensionName": ".css",
	    "savePath": "/css",
	    "savePathReplacementPairs": null
	}
]
```

#### Abrimos Live Sass Compile 

- Ctrl + shift + p también F1
- Buscamos: Live sass > Watch Sass

Nota: Para abrir el proyecto usar go live server icono en la parte inferior de VSC. 

## 4. Estructura de la hoja de estilos y variables

### Estructura de la hoja de estilos

Algunos statements contienen bloques y se definen entre un par de llaves **{ }** , son separados mediante punto y coma **;**

#### Top-level statements

Son declaraciones que solo se pueden usar en la parte superior de la hoja de estilos

- Imports
- Definición de un Mixin
- Definición de una Función
- Módulos

#### Universal statements

Son statements que podemos usar en cualquier parte de la hoja de estilos.

- Variables, estructuras de control y las reglas **@error**, **@warn y @debug.**
- Declaraciones CSS: Reglas de estilo, At-rules y Mixis.

### Variables

Es un espacio de memoria asignado en memoria y únicamente puede almacenar un dato.

- Las variables pueden ser declaradas en cualquier parte de la hoja de estilos.

Para asignar un valor a una variable se hace uso del símbolo `$` de esta manera es posible referenciar dentro de la hoja de estilos.

```scss
$primary-color:#FFEFE7;
$secundary-color:#FFDAC6;
$tertiary-color:#BABD8D;
$primary-text-color:#7C6A0A;
$font-stack: 'IBM Plex Sans' , sans-serif;

body{
    margin: 0;
    padding: 0;
}
```

#### Diferencias en Variables en CSS y SASS

|CSS Variable|Sass Variables|
|---|---|
|Pueden tener diferentes valores para distintos elementos|Tienen un valor único correspondiente a un elemento|
|Son declarativas|Son imperativas (en el momento en el que actualicemos el valor de nuestra variables va a cambiar en automático)|

#### !default flag

Se encarga de asignar un valor a la variable si y solo si esa variable no esta definida o su valor en null.

### Tipografía 

IBM Plex Sans: 
- Regular 400
- Medium 500
- Bold 700

## 5. Uso de selectores, scope de las variables y shadowing

### Selectores 

Un selector de CSS define sobre qué elementos se aplicará un conjunto de reglas CSS. 

Existen selectores de tipo: 
- Clase
- Id
- Tipo 
- Atributo 

### Scope 

El scope dentro de Sass hace referencia al contexto en el que son declaradas las variables y donde es posible hacer uso de las mismas, hay dos tipos de variables:  

#### Locales:  

• Declaradas dentro de un bloque { }  
• Cualquier selector anidado puede acceder a las variables locales declaradas dentro del selector  

#### Globales:  

• Todas las variables declaradas fuera de un selector son globales, esto significa que se puede acceder a ellas en cualquier parte de nuestra hoja de estilos.

### Shadowing 

Shadowing: Las variables locales y globales pueden tener el mismo nombre ya que se encuentran en diferentes niveles del scope para evitar que se modifiquen por error las variables globales.

### !global flag:

!global flag: Se usa en caso de querer modificar el valor global de una variable dentro del scope de una variable local.

### Código de la clase 

```html
<body>
    <nav class="navbar"></nav>
    <main class="main-section"></main>
    <footer class="footer"></footer>
</body>
```

```scss
$primary-color: #FFEFE7;
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$font-stack: 'IBM Plex Sans', sans-serif;

body {
    margin: 0;
    padding: 0;
}

nav {
    width: 100%;
    height: 100px;
}

main{
    background-color: $primary-color;
}

footer{
    $background: #FA9500;
    background-color: $background;
    width: 100%;
    height: 250px;
}
```

## 6. Creando la estructura del proyecto

```html
<body>
    <nav>
        <p>Eco-store</p>
        <button class="profile">
            <svg></svg>
        </button>
        <button class="wishlist">
            <svg></svg>
        </button>
        <button class="car">
            <svg></svg>
        </button>
    </nav>
    <main class="main-section">
        <article>
            <div class="impact-section">
                <h1>Impacto ecológico</h1>
                <p>Debido al impacto ambiental siendo las acciones humanas las que  modifican el ambiente, Eco-store se compromete a elaborar sus productos de manera artesanal y con materiales que favorecen al cuidado del medio ambiente.</p>
                <button>Conoce más</button>
            </div>
            <div class="image-section">
                <img src="" alt="">
            </div>
        </article>
        <section class="product-section">
            <div class="healthcare">
                <h2>Cuidado de la salud</h2>
            </div>
            <div class="furniture">
                <h2>Decoración del hogar</h2>
            </div>
        </section>
        <section class="info-section">
            <div class="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div class="earth">
                    <img src="" alt="">
                    <p></p>
                </div>
                <div class="inovation">
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
            <div class="gallery">
                <h2>Galería de estilos</h2>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="location">
                <h2>Encuéntranos en</h2>
                <div class="map">
                    <img src="" alt="">
                </div>
                <p></p>
            </div>
        </section>
    </main>
    <footer>
        <h3>Eco-store</h3>
        <p>Careers</p>
        <p>Careers</p>
        <p>Careers</p>
        <div class="social-media">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </footer>
</body>
```

[Editar imagenes](https://picresize.com/)

## 7. At Rules: CSS y nesting

### At-rules CSS

Es una declaración que cumple con diferentes funciones, se inicializa con el símbolo @ y cuenta con sintaxis propia. Las at-rules dentro de Sass ayudan a mantener la compatibilidad con próximas versiones de CSS.

#### Ejemplos: 

- @use: importa, módulos estilos y funciones de otras hojas de estilos. la diferencia con @import es que import se encarga de hacer los estilos globales.
- @function: permite crear funciones personalizadas, sin embargo Sass cuenta con funciones ya existentes.
- @forward: Recibe como parámetro una URL y nos ayuda a cargar los estilos de nuestra hoja de estilos, es muy importante hacer uso de @use para que los módulos esten disponibles en nuestra hoja de estilos.
- @extend: tiene que ver con el concepto de herencia.
- @at-root: se encarga de cargar nuestros estilos en el root del css.
- @include: nos ayuda a invocar los mixins.
- @error, @warn @debug: sirven para cuando hay algún error, una advertencia o se quiere debugear, respectivamente
- @for, @if, @each, @while: tienen que ver con estructuras de control, se pueden usar dentro de una función


#### Tipos de At-rules y ejemplos

1. **At-rules de Animaciones y Transiciones:** estas at-rules permiten definir animaciones y transiciones para los elementos HTML en una página web. Ejemplos de at-rules en esta categoría incluyen **`@keyframes`**, **`@transition`**, y **`@animation`**.  
2. **At-rules de Media Queries:** estas at-rules permiten definir estilos para diferentes tamaños de pantalla y dispositivos. Ejemplos de at-rules en esta categoría incluyen **`@media`**, **`@import`**, y **`@charset`**.  
3. **At-rules de Variables y Mixins:** estas at-rules permiten definir variables y funciones reutilizables para estilos CSS. Ejemplos de at-rules en esta categoría incluyen **`@variable`**, **`@mixin`**, y **`@include`**.  
4. **At-rules de Fuentes y Tipografía:** estas at-rules permiten definir estilos para fuentes y tipografía en una página web. Ejemplos de at-rules en esta categoría incluyen **`@font-face`**, **`@font-feature-values`**, y **`@font-size-adjust`**.  
5. **At-rules de Compatibilidad con Navegadores:** estas at-rules permiten definir estilos específicos para navegadores y versiones de navegadores específicos. Ejemplos de at-rules en esta categoría incluyen **`@-webkit-keyframes`**, **`@-moz-document`**, y **`@supports`**.  
6. **At-rules de Grillas y Diseño:** estas at-rules permiten definir estilos para diseños de grillas y disposición de elementos en una página web. Ejemplos de at-rules en esta categoría incluyen **`@grid`**, **`@flexbox`**, y **`@supports`**.  
7. **At-rules de Selectores:** estas at-rules permiten definir estilos para selectores específicos en una página web. Ejemplos de at-rules en esta categoría incluyen **`@page`**, **`@namespace`**, y **`@document`**.
8. **At-rules de Colores:** estas at-rules permiten definir estilos para colores y gradientes en una página web. Ejemplos de at-rules en esta categoría incluyen **`@color-profile`**, **`@counter-style`**, y **`@mask`**.  
9. **At-rules de Imágenes y Multimedia:** estas at-rules permiten definir estilos para imágenes y multimedia en una página web. Ejemplos de at-rules en esta categoría incluyen **`@image`**, **`@media-document`**, y **`@media-rules`**.  
10. **At-rules de Estilos Generales:** estas at-rules permiten definir estilos generales para la página web. Ejemplos de at-rules en esta categoría incluyen **`@charset`**, **`@viewport`**, y **`@scope`**.  
11. **At-rules de Interactividad:** estas at-rules permiten definir estilos para la interactividad y el comportamiento de los elementos HTML en una página web. Ejemplos de at-rules en esta categoría incluyen **`@scroll-timeline`**, **`@pointer`**, y **`@input-placeholder`**.  
12. **At-rules de Debugging:** estas at-rules permiten ayudar en la depuración de los estilos CSS. Ejemplos de at-rules en esta categoría incluyen **`@debug`**, **`@warn`**, y **`@error`**.

### Nesting

Nesting o la anidación permite tener selectores dentro de otros, lo cual nos ayuda a simplificar código, escribiendo los selectores en el orden que aparecen en el HTML.

```css
nav {
    ul {
        margin: 4px;
        padding: 5px;
        list-style: none;
    }
    li {
        display: inline-block;
    }
    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

### Código de la clase

```html
<body>
    <nav>
        <p>Eco-store</p>
        <div class="icons">
            <button class="profile">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	            </svg>
            </button>
            <button class="wishlist">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="car">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </nav>
    <main class="main-section">
        <article>
            <div class="impact-section">
                <h1>Impacto ecológico</h1>
                <p>Debido al impacto ambiental siendo las acciones humanas las que  modifican el ambiente, Eco-store se compromete a elaborar sus productos de manera artesanal y con materiales que favorecen al cuidado del medio ambiente.</p>
                <button>Conoce más</button>
            </div>
            <div class="image-section">
                <img src="" alt="">
            </div>
        </article>
        <section class="product-section">
            <div class="healthcare">
                <h2>Cuidado de la salud</h2>
            </div>
            <div class="furniture">
                <h2>Decoración del hogar</h2>
            </div>
        </section>
        <section class="info-section">
            <div class="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div class="earth">
                    <img src="" alt="">
                    <p></p>
                </div>
                <div class="inovation">
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
            <div class="gallery">
                <h2>Galería de estilos</h2>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="location">
                <h2>Encuéntranos en</h2>
                <div class="map">
                    <img src="" alt="">
                </div>
                <p></p>
            </div>
        </section>
    </main>
    <footer>
        <h3>Eco-store</h3>
        <p>Careers</p>
        <p>Careers</p>
        <p>Careers</p>
        <div class="social-media">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </footer>
</body>
```

```css
$primary-color: #FFEFE7;
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$font-stack: 'IBM Plex Sans', sans-serif;

body {
    margin: 0px;
    padding: 0ps;
    background-color: $primary-color;
    font-family: $font-stack;
}

nav {
    width: auto;
    display: flex;
    justify-content: space-between;
    color: $primary-text-color;
    padding: 15px;
    p {
        font-size: 1.5em;
        /* padding: 30px; */
    }
    .icons {
        display: flex;
        gap: 15px;
        button {
            background: none;
            border-style: none;
        }
    }
}

footer{
    $background: #FA9500;
    background-color: $background;
    width: 100%;
    height: 250px;
}
```

## Quiz: Reglas y uso 

1. ¿Qué símbolo se utiliza para inicializar At Rules en CSS y Sass?
	- `&`
	- `#`
	- 📌 `@`

2. ¿Qué es la flag ‘default’ en Sass?  
	- 📌 Una flag que asigna un valor a la variable si y solo si la variable no ha sido definida o su valor es igual a nulo.
	- Una flag que cambia automáticamente los colores primarios y secundarios en Figma. 

3. ¿Qué sucede si no se establecen medidas para el main?
	- Elementos como la navbar y el footer no serán visibles.
	- 📌 El main no será visible.

4. ¿Dónde se asignan las clases a las etiquetas 'section'?
	- 📌 Dentro del atributo class en la propia etiqueta 'section'
	- En un archivo CSS separado

5. Sobre las At Rules, ¿cuál es la función de la regla @function?
	- Importar módulos y estilos globales.
	- 📌 Crear funciones personalizadas.
	- Cargar estilos en el root del CSS.

## 8. Expresiones: Literales y Operaciones

Una expresión es todo aquello que va del lado derecho de una variable, admitiendo varios tipos de valores. 

Las expresiones son mucho más poderosas que los valores CSS simples, ya que se pasan como argumentos a mixins y funciones.

### Expresiones literales  
● Números  
● Strings  
● Colores  
● Booleanos  
● Null  
● Listas  
● Mapas

### Ejemplo de CSS con expresiones

```scss
/* Números */
div {
  width: 200px; /* Valor numérico */
  opacity: 0.8; /* Valor numérico */
  font-size: 18px; /* Valor numérico */
}

/* Strings */
h1 {
  content: "Hola"; /* Valor de cadena */
  font-family: "Arial", sans-serif; /* Valor de cadena */
}

/* Colores */
p {
  color: red; /* Valor de color */
  background-color: #00ff00; /* Valor de color en formato hexadecimal */
  border: 1px solid rgb(255, 0, 0); /* Valor de color en formato de función RGB */
}

/* Booleanos */
span {
  display: none; /* Valor booleano (false) */
  visibility: visible; /* Valor booleano (true) */
}

/* Null */
section {
  --mi-variable: null; /* Valor null */
}

/* Listas */
ul {
  list-style: square inside; /* Valor de lista */
  margin: 10px 20px 30px; /* Valor de lista */
}

/* Mapas */
body {
  --mi-mapa: (primary-color: blue, secondary-color: red); /* Valor de mapa */
  color: var(--mi-mapa, primary-color); /* Uso de mapa en una propiedad */
}
```


## Quiz: Expresiones 

1. ¿Cuáles son algunas de las unidades de medida comunes para establecer estilos en páginas web?
	- Kilómetros, grados Celsius, litros
	- 📌 Pixeles, porcentaje de la pantalla, view height (vh) y view width (vw)

2. ¿Qué formatos de color se pueden utilizar al diseñar páginas web?
	- Decimal, binario, octal
	- 📌 Código hexadecimal, RGB, RGBA

## 9. Creando la estructura de la sección main

### Código de la clase 

```html
<body>
    <nav>
        <p>Eco-store</p>
        <div class="icons">
            <button class="profile">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="wishlist">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="car">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </nav>
    <main class="main-section">
        <article>
            <div class="impact-section">
                <h1>Impacto ecológico</h1>
                <p>Debido al impacto ambiental siendo las acciones humanas <br> las que  modifican el ambiente, Eco-store <br> se compromete a elaborar sus productos de manera <br> artesanal y con materiales que favorecen al cuidado <br> del medio ambiente.</p>
                <button>Conoce más</button>
            </div>
            <div class="image-section">
                <img src="./assets/img/main-2.jpg" alt="">
            </div>
        </article>
        <section class="product-section">
            <div class="healthcare">
                <h2>Cuidado de la salud</h2>
            </div>
            <div class="furniture">
                <h2>Decoración del hogar</h2>
            </div>
        </section>
        <section class="info-section">
            <div class="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div class="earth">
                    <img src="" alt="">
                    <p></p>
                </div>
                <div class="inovation">
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
            <div class="gallery">
                <h2>Galería de estilos</h2>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="location">
                <h2>Encuéntranos en</h2>
                <div class="map">
                    <img src="" alt="">
                </div>
                <p></p>
            </div>
        </section>
    </main>
    <footer>
        <h3>Eco-store</h3>
        <p>Careers</p>
        <p>Careers</p>
        <p>Careers</p>
        <div class="social-media">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </footer>
</body>
```

```scss
$primary-color: rgba(255, 239, 231, 1);
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$quaternary-color: #FA9500;
$font-stack: 'IBM Plex Sans', sans-serif;
$paragraph-size: 1.5em;

body {
    margin: 0px;
    padding: 0ps;
    background-color: $primary-color;
    font-family: $font-stack;
}

nav {
    width: auto;
    display: flex;
    justify-content: space-between;
    color: $primary-text-color;
    padding: 15px;
    p {
        font-size: $paragraph-size;
        /* padding: 30px; */
    }
    .icons {
        display: flex;
        gap: 15px;
        button {
            background: none;
            border-style: none;
        }
    }
}

article {
    width: auto;
    color: $primary-text-color;
    padding-left: 45px;
    padding-right: 45px;
    display: flex;
    justify-content: space-between;
    .impact-section {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        gap: 25px;
    }
    h1 {
        font-size: 3em;
        padding: 0px;
        margin: 0px;
    }
    p {
        font-size: $paragraph-size;
    }
    button {
        width: 12vw;
        padding: 20px;
        background-color: $quaternary-color;
        border-radius: none;
        border-radius: 35px;
        color: white;
        font-size: 1em;
    }
    img {
        width: 25vw;
        border-radius: 19px;
    }
}

footer{
    background-color: $quaternary-color;
    width: 100%;
    height: 250px;
}
```

### Borrar línea

Parra borrar la línea actual en **Windows y Linux** usar: 
- `Ctrl` + `Shift` + `K`

## Quiz: Sección main 📌

1. ¿Cómo se puede organizar elementos de una columna en un contenedor Flex?

	- Usar `grid-template-columns`
	- 📌 Cambiar la `flex-direction` a `column` y ajustar el espacio entre elementos con `gap`

2. ¿Qué propiedad CSS puede ser empleada para eliminar margen y padding existente en un elemento?

	- padding: none; margin: none;
	- inherit
	- 📌 padding: 0; margin: 0;

3. ¿Cómo se ajusta el espacio entre elementos en una columna usando CSS?

	- 📌 Usando 'gap: 25px'
	- Usando 'margin: 25px'

## 10. ¿Qué es la herencia y cómo funciona en SASS?

La herencia es un mecanismo mediante el cual un selector puede recibir estilos CSS que vienen de variables utilizadas previamente.

### Uso de la herencia en Sass

La directiva @extend de Sass nos permite organizar código y crear CSS más limpio.

```scss
.error {
    border: 1px #f00;
    background-color: #fdd;

    &--serius {
        @extend .error;
        border-width: 3px;
    }
}
```


Muchas veces al estar creando nuestros estilos podemos caer en la repetición de código, esto conlleva a dos problemas, Primero se comienza a extender bastante la hoja de estilos y se vuelve difícil de mantener a lo largo del tiempo, el otro problema que puede surgir es el desorden, entonces, si queremos arreglar o cambiar alguna parte de nuestro código va a ser más difícil hacerlo.

Por suerte tenemos SASS, piénsalo así, muchas veces usamos [patrones de diseño](https://carlosazaustre.es/los-5-patrones-del-responsive-design) que nos dan ciertas guías o convenciones para saber como organizar CSS y lo mismo pasa con [BEM: Block, Element, Modifier](https://getbem.com/).

BEM nos propone crear estilos generales con una clase y luego modificar esa clase según nos convenga, por ejemplo:

```html
<div class="error error--serious">
  Oh no! You've been hacked!
</div>
```

En este ejemplo tenemos un div con dos clases “error” y _“error–serious”_, una buena opción para estilizar este div, suponiendo que los necesitáramos reutilizar más adelante, sería de la siguiente forma:  

- Estilizamos la clase general con los estilos básicos que se repetirán a lo largo de los div
- Luego estilizamos el div en específico que tendrá otros estilos adicionales.

```css
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.error--serious {
  border-width: 3px;
}
```

Pero esto se puede simplificar a un más usando la [herencia con SASS](https://sass-lang.com/documentation/at-rules/extend)

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```

De esta manera no solo estamos organizando el código y evitando reutilizar código, si no además se puede entender de una mejor forma de donde viene los estilos heredados y a que clase hacen referencia


## 11. Creando la estructura de la sección de Cuidado de la Salud y Decoración del Hogar

```html 
<body>
    <nav>
        <p>Eco-store</p>
        <div class="icons">
            <button class="profile">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="wishlist">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="car">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </nav>
    <main class="main-section">
        <article>
            <div class="impact-section">
                <h1>Impacto ecológico</h1>
                <p>Debido al impacto ambiental siendo las acciones humanas <br> las que  modifican el ambiente, Eco-store <br> se compromete a elaborar sus productos de manera <br> artesanal y con materiales que favorecen al cuidado <br> del medio ambiente.</p>
                <button>Conoce más</button>
            </div>
            <div class="image-section">
                <img src="./assets/img/main-2.jpg" alt="">
            </div>
        </article>
        <section class="product-section">
            <div class="healthcare">
                <h2>Cuidado de la salud</h2>
                <div class="card-section">
                    <div class="product-card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                </div>
            </div>
            <div class="furniture">
                <h2>Decoración del hogar</h2>
            </div>
        </section>
        <section class="info-section">
            <div class="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div class="earth">
                    <img src="" alt="">
                    <p></p>
                </div>
                <div class="inovation">
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
            <div class="gallery">
                <h2>Galería de estilos</h2>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="location">
                <h2>Encuéntranos en</h2>
                <div class="map">
                    <img src="" alt="">
                </div>
                <p></p>
            </div>
        </section>
    </main>
    <footer>
        <h3>Eco-store</h3>
        <p>Careers</p>
        <p>Careers</p>
        <p>Careers</p>
        <div class="social-media">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </footer>
</body>
```

```scss
$primary-color: rgba(255, 239, 231, 1);
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$quaternary-color: #FA9500;
$font-stack: 'IBM Plex Sans', sans-serif;
$paragraph-size: 1.5em;

body {
    margin: 0px;
    padding: 0ps;
    background-color: $primary-color;
    font-family: $font-stack;
}

nav {
    width: auto;
    display: flex;
    justify-content: space-between;
    color: $primary-text-color;
    padding: 15px;
    p {
        font-size: $paragraph-size;
        /* padding: 30px; */
    }
    .icons {
        display: flex;
        gap: 15px;
        button {
            background: none;
            border-style: none;
        }
    }
}

article {
    width: auto;
    color: $primary-text-color;
    display: flex;
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 70px;
    justify-content: space-between;
    .impact-section {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        gap: 25px;
    }
    h1 {
        font-size: 3em;
        padding: 0px;
        margin: 0px;
    }
    p {
        font-size: $paragraph-size;
    }
    button {
        width: 12vw;
        padding: 20px;
        background-color: $quaternary-color;
        border-radius: none;
        border-radius: 35px;
        color: white;
        font-size: 1em;
        border: none;
    }
    img {
        width: 25vw;
        border-radius: 19px;
    }
}

section {
    width: 100%;
    height: auto;
    padding: 60px;
    h2 {
        color: $primary-text-color;
        font-size: 2em;
    }
    .healthcare {
        h2 {
            font-weight: 300;
            padding-bottom: 60px;
        }
        .product-card {
            width: 12vw;
            height: auto;
            background-color: $secondary-color;
            color: $primary-text-color;
            padding: 20px;
            border-radius: 8px;
            img {
                width: 150px;
                height: 250px;
                background-image: cover;
                border-radius: 6px;
            }
        }
    }
}

footer{
    background-color: $quaternary-color;
    width: 100%;
    height: 250px;
}
```

## 12. Usando flexbox en la sección de Cuidado de la Salud y Decoración del Hogar

```html
<body>
    <nav>
        <p>Eco-store</p>
        <div class="icons">
            <button class="profile">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="wishlist">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="car">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </nav>
    <main class="main-section">
        <article>
            <div class="impact-section">
                <h1>Impacto ecológico</h1>
                <p>Debido al impacto ambiental siendo las acciones humanas <br> las que  modifican el ambiente, Eco-store <br> se compromete a elaborar sus productos de manera <br> artesanal y con materiales que favorecen al cuidado <br> del medio ambiente.</p>
                <button>Conoce más</button>
            </div>
            <div class="image-section">
                <img src="./assets/img/main-2.jpg" alt="">
            </div>
        </article>
        <section class="product-section">
            <div class="healthcare">
                <h2>Cuidado de la salud</h2>
                <div class="card-section">
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                </div>
            </div>
            <div class="furniture">
                <h2>Decoración del hogar</h2>
                <div class="card-section">
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="info-section">
            <div class="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div class="earth">
                    <img src="" alt="">
                    <p></p>
                </div>
                <div class="inovation">
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
            <div class="gallery">
                <h2>Galería de estilos</h2>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div class="location">
                <h2>Encuéntranos en</h2>
                <div class="map">
                    <img src="" alt="">
                </div>
                <p></p>
            </div>
        </section>
    </main>
    <footer>
        <h3>Eco-store</h3>
        <p>Careers</p>
        <p>Careers</p>
        <p>Careers</p>
        <div class="social-media">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </footer>
</body>
```

```scss
$primary-color: rgba(255, 239, 231, 1);
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$quaternary-color: #FA9500;
$font-stack: 'IBM Plex Sans', sans-serif;
$paragraph-size: 1.5em;

body {
    margin: 0px;
    padding: 0ps;
    background-color: $primary-color;
    font-family: $font-stack;
}

nav {
    width: auto;
    display: flex;
    justify-content: space-between;
    color: $primary-text-color;
    padding: 15px;

    p {
        font-size: $paragraph-size;
        /* padding: 30px; */
    }

    .icons {
        display: flex;
        gap: 15px;

        button {
            background: none;
            border-style: none;
        }
    }
}

article {
    width: auto;
    color: $primary-text-color;
    display: flex;
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 70px;
    justify-content: space-between;

    .impact-section {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        gap: 25px;
    }

    h1 {
        font-size: 3em;
        padding: 0px;
        margin: 0px;
    }

    p {
        font-size: $paragraph-size;
    }

    button {
        width: 12vw;
        padding: 20px;
        background-color: $quaternary-color;
        border-radius: none;
        border-radius: 35px;
        color: white;
        font-size: 1em;
        border: none;
    }

    img {
        width: 25vw;
        border-radius: 19px;
    }
}

section {
    width: auto;
    height: auto;
    padding: 60px;

    h2 {
        color: $primary-text-color;
        font-size: 2em;
    }

    .healthcare {
        padding-bottom: 60px;

        h2 {
            font-weight: 300;
            padding-bottom: 60px;
        }

        .card-section {
            display: flex;
            width: auto;
            height: auto;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            column-gap: 200px;
            row-gap: 80px;
        }

        .product-card {
            width: 14vw;
            height: 45vh; //45
            background-color: $secondary-color;
            color: $primary-text-color;
            padding: 20px;
            border-radius: 8px;

            .icon {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                padding-bottom: 12px;

                svg {
                    width: 28px;
                    height: 28px;
                    stroke: #7C6A0A;
                    stroke-width: 2;
                }

            }

            .product-image {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 12vw;
                    height: 30vh;
                    object-fit: cover;
                    border-radius: 6px;
                }
            }
        }
    }

    .furniture {
        @extend .healthcare;
        .product-card {
            background-color: $tertiary-color;
            color: white;
        }
    }
}

footer {
    background-color: $quaternary-color;
    width: 100%;
    height: 250px;
}
```

## Quiz: Herencia 📌

1. ¿Qué se hace para posicionar un ícono a la derecha de una card?

	- display: block, float: right
	- 📌 display: flex, justify-content: flex-end

2. ¿Para qué sirve la herencia en el diseño web?

	- Aumentar la capacidad de almacenamiento y conexión a internet
	- 📌 Mantener la consistencia y facilitar la edición de elementos similares

## 13. ¿Qué es un mixin en CSS?

Los mixins permiten definir estilos que se pueden reutilizar en toda su hoja de estilos y facilitan evitar el uso de clases no semánticas.

### Uso de mixins en Sass

Se declara con la regla @mixin seguido del nombre que queremos asignar y se invoca con @include seguido del nombre del mixin.

```scss
@mixin horizontal-list {
    li {
        display: inline-block;
        margin: {
            left: -2px;
            right: 2em;
        }
    }
}

nav ul {
    @include horizontal-list;
}
```

### Argumentos en mixins

Un argumento es el nombre de una variable que está separada por una coma. 

La utilidad de los mixins no sería tal si no tuvieran la capacidad de recibir argumentos.

```scss
@mixin circle2 ($width, $height, $color){
    width: $width;
    height: $height;
    background: $color;
}
```

[Documentación](https://sass-lang.com/documentation/at-rules/mixin)

## 14. Implementando mixins en el proyecto

```scss
$primary-color: rgba(255, 239, 231, 1);
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$quaternary-color: #FA9500;
$font-stack: 'IBM Plex Sans', sans-serif;
$paragraph-size: 1.5em;

@mixin flexCenter($direction, $content, $align) {
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
    align-items: $align;
}
@mixin buttonStyle {
    button {
        background: none;
        border-style: none;
    }
}


body {
    margin: 0px;
    padding: 0ps;
    background-color: $primary-color;
    font-family: $font-stack;
}

nav {
    width: auto;
    @include flexCenter(row, space-between, center);
    color: $primary-text-color;
    padding: 15px;

    p {
        font-size: $paragraph-size;
        /* padding: 30px; */
    }

    .icons {
        display: flex;
        gap: 15px;
        @include buttonStyle;
    }
}

article {
    width: auto;
    color: $primary-text-color;
    @include flexCenter(row, space-between, center);
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 70px;

    .impact-section {
        @include flexCenter(column, space-evenly, flex-start);
        padding-top: 50px;
        gap: 25px;
    }

    h1 {
        font-size: 3em;
        padding: 0px;
        margin: 0px;
    }

    p {
        font-size: $paragraph-size;
    }
    @include buttonStyle;
    button {
        width: 12vw;
        padding: 20px;
        background-color: $quaternary-color;
        border-radius: none;
        border-radius: 35px;
        color: white;
        font-size: 1em;
        border: none;
    }

    img {
        width: 25vw;
        border-radius: 19px;
    }
}

section {
    width: auto;
    height: auto;
    padding: 60px;

    h2 {
        color: $primary-text-color;
        font-size: 2em;
    }

    .healthcare {
        padding-bottom: 60px;

        h2 {
            font-weight: 300;
            padding-bottom: 60px;
        }

        .card-section {
            width: auto;
            height: auto;
            @include flexCenter(row, space-evenly, center);
            flex-wrap: wrap;
            column-gap: 200px;
            row-gap: 80px;
        }

        .product-card {
            width: 14vw;
            height: 45vh; //45
            background-color: $secondary-color;
            color: $primary-text-color;
            padding: 20px;
            border-radius: 8px;

            .icon {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                padding-bottom: 12px;

                svg {
                    width: 28px;
                    height: 28px;
                    stroke: #7C6A0A;
                    stroke-width: 2;
                }

            }

            .product-image {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 12vw;
                    height: 30vh;
                    object-fit: cover;
                    border-radius: 6px;
                }
            }
        }
    }

    .furniture {
        @extend .healthcare;
        .product-card {
            background-color: $tertiary-color;
            color: white;
        }
    }
}

footer {
    background-color: $quaternary-color;
    width: 100%;
    height: 250px;
}
```

## Quiz: Mixins 📌

1. ¿Qué símbolo se utiliza para incluir mixins en Sass?

	- 📌`@include`

2. ¿Qué facilita el uso de mixins?

	- 📌 La manipulación y estilización de elementos en un diseño

3. ¿Cuál es el propósito de usar argumentos en los mixins de Sass?

	- 📌 Hacer que los mixins sean más dinámicos y reutilizables

4. ¿Para qué se utiliza la variable 'direction' en el mixin de flexbox?

	- 📌 Define la orientación de las columnas (flex direction row o flex direction column)

## 15. Creación de nuestras propias funciones

Las funciones permiten definir operaciones complejas en valores de Sass. Las funciones se definen usando la regla @function.

### Ejemplos 

Sass como preprocesador tiene una gran cantidad de funciones. Algunos de los ejemplos son: 

1. Funciones RGB 
2. Funciones HSL 
3. Funciones de opacidad 
4. Funciones sobre strings 
5. Funciones sobre números

### Operaciones

Sass es compatible con una gran cantidad de operadores útiles para trabajar con diferentes valores. Estos incluyen los operadores matemáticos estándar y operadores para varios otros tipos, por ejemplo: `==` y `!=`.

### Jerarquía de operaciones

1. Los operadores unarios `not`, `+` y `-` 
2. Operadores `*` ,` /` y `%` 
3. Operadores `+` y `-` 
4. Operadores `>`, `>=`, `<` y `<=`
5. Operadores de comparación `==` y `!=` 
6. El operador lógico `and` 
7. El operador lógico `or` 
8. El operador de asignación `=`

### Declaración de una función

Las funciones se llaman utilizando la sintaxis de función CSS normal.

```scss
@function pow($base, $exponent){
    $result: 1;
    @for $_ from 1 through $exponent {
        $result: $result * $base;
    }
    @return $result;
}

.sidebar {
    float: left;
    margin-left: pow(4, 3) * 1px;
}
```

[Documentación](https://sass-lang.com/documentation/at-rules/function)


## 16. Creando la estructura de la sección '¿Por qué nosotros?'

```
```

Revisar extension: 
- css peek 
	- F12
	- ctrl + clic
- Intellisense for css 
	- Botón ⚡

## 17. Creando la estructura de la sección Galería de Estilos


## 18. Creando la estructura de la sección Mapa y Footer

```js
<body>
    <nav>
        <p>Eco-store</p>
        <div class="icons">
            <button class="profile">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                        stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button class="wishlist">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                        stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button class="car">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                        stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </nav>
    <main class="main-section">
        <article>
            <div class="impact-section">
                <h1>Impacto ecológico</h1>
                <p>Debido al impacto ambiental siendo las acciones humanas <br> las que modifican el ambiente, Eco-store
                    <br> se compromete a elaborar sus productos de manera <br> artesanal y con materiales que favorecen
                    al cuidado <br> del medio ambiente.</p>
                <button>Conoce más</button>
            </div>
            <div class="image-section">
                <img src="./assets/img/main-2.jpg" alt="">
            </div>
        </article>
        <section class="product-section">
            <div class="healthcare">
                <h2>Cuidado de la salud</h2>
                <div class="card-section">
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                </div>
            </div>
            <div class="furniture">
                <h2>Decoración del hogar</h2>
                <div class="card-section">
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                    <div class="product-card">
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z"
                                    stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="product-image">
                            <img src="./assets/img/products/toothbrush.jpg" alt="">
                        </div>
                        <h3>Cepillo de bambú</h3>
                        <p>Paquete de 2 unidades</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="info-section">
            <div class="about-us">
                <h2>¿Por qué nosotros?</h2>
                <div class="mission-section">
                    <div class="earth">
                        <img src="./assets/img/earth.png" alt="">
                        <p>
                            Compromiso con el medio ambiente garantizando el uso de materiales 100% reciclables.
                        </p>
                    </div>
                    <div class="inovation">
                        <img src="./assets/img/ecology.png" alt="">
                        <p>
                            Innovando con estilo el diseño de nuestros muebles es único.
                        </p>
                    </div>
                </div>
            </div>
            <div class="gallery">
                <h2>Galería de estilos</h2>
                <div class="gallery-images">
                    <img src="./assets/img/gallery-1.jpg" alt="">
                    <img src="./assets/img/gallery-2.jpg" alt="">
                    <img src="./assets/img/gallery-3.jpg" alt="">
                </div>
            </div>
            <div class="location">
                <h2>Encuéntranos en</h2>
                <div class="map">
                    <img src="./assets/img/map.png" alt="">
                </div>
                <h3>Centro Mayor Centro Comercial</h3>
                <p>Cl. 38A Sur #34d-51, Bogotá, Colombia</p>
            </div>
        </section>
    </main>
    <footer>
        <h3>Eco-store</h3>
        <p>Careers</p>
        <p>Terms and conditions</p>
        <p>Eco-store inc</p>
        <div class="social-media">
            <img src="./assets/img/instagram-logo.png" alt="">
            <img src="./assets/img/twitter-logo.png" alt="">
            <img src="./assets/img/facebook-logo.png" alt="">
        </div>
    </footer>
</body>
```

```scss
$primary-color: rgba(255, 239, 231, 1);
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$quaternary-color: #FA9500;
$font-stack: 'IBM Plex Sans', sans-serif;
$paragraph-size: 1.5em;

@mixin flexCenter($direction, $content, $align) {
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
    align-items: $align;
}
@mixin buttonStyle {
    button {
        background: none;
        border-style: none;
    }
}


body {
    margin: 0px;
    padding: 0ps;
    background-color: $primary-color;
    font-family: $font-stack;
}

nav {
    width: auto;
    @include flexCenter(row, space-between, center);
    color: $primary-text-color;
    padding: 15px;

    p {
        font-size: $paragraph-size;
        /* padding: 30px; */
    }

    .icons {
        display: flex;
        gap: 15px;
        @include buttonStyle;
    }
}

article {
    width: auto;
    color: $primary-text-color;
    @include flexCenter(row, space-between, center);
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 70px;

    .impact-section {
        @include flexCenter(column, space-evenly, flex-start);
        padding-top: 50px;
        gap: 25px;
    }

    h1 {
        font-size: 3em;
        padding: 0px;
        margin: 0px;
    }

    p {
        font-size: $paragraph-size;
    }
    @include buttonStyle;
    button {
        width: 12vw;
        padding: 20px;
        background-color: $quaternary-color;
        border-radius: none;
        border-radius: 35px;
        color: white;
        font-size: 1em;
        border: none;
        &:hover {
            transform: scale(1.1);
        }
    }

    img {
        width: 25vw;
        border-radius: 19px;
    }
}

section {
    width: auto;
    height: auto;
    padding: 60px;

    h2 {
        color: $primary-text-color;
        font-size: 2em;
    }

    .healthcare {
        padding-bottom: 60px;

        h2 {
            font-weight: 300;
            padding-bottom: 60px;
        }

        .card-section {
            width: auto;
            height: auto;
            @include flexCenter(row, space-evenly, center);
            flex-wrap: wrap;
            column-gap: 200px;
            row-gap: 80px;
        }

        .product-card {
            width: 14vw;
            height: 45vh; //45
            background-color: $secondary-color;
            color: $primary-text-color;
            padding: 20px;
            border-radius: 8px;

            .icon {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                padding-bottom: 12px;

                svg {
                    width: 28px;
                    height: 28px;
                    stroke: #7C6A0A;
                    stroke-width: 2;
                }

            }

            .product-image {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 12vw;
                    height: 30vh;
                    object-fit: cover;
                    border-radius: 6px;
                }
            }
        }
    }

    .furniture {
        @extend .healthcare;
        .product-card {
            background-color: $tertiary-color;
            color: white;
        }
    }
}

.about-us {
    padding-bottom: 60px;
    h2 {
        font-weight: bold;
        padding-bottom: 60px;   
    }
    .mission-section {
        @include flexCenter(row, space-evenly, center);
        .earth {
            $text-color: #E86424;
            width: 30vw;
            display: flex;
            gap: 40px;
            color: $text-color;
            img {
                object-fit: contain;
            }

            p {
                text-align: center;
                font-size: $paragraph-size;
            }
        }
    }
    .inovation {
        @extend .earth;
    }
}

.gallery {
    h2 {
        font-weight: bold;
        padding-bottom: 60px;   
    }
    .gallery-images {
        @include flexCenter(row, space-between, center);
        img {
            width: 28vw;
            height: 45vh;
            object-fit: conver;
            object-position: 5px 35%;
            border-radius: 16px;
            &:hover {
                transform: scale(1.1);
                transition-duration: 0.3s;
                // animation: aumento 10s ease-in-out infinite 20s;
            }
        }
    }
}

.location {
    $text-color: #E86424;
    color: $text-color;
    h2 {
        padding-bottom: 60px;
        padding-top: 60px;
    }
    .map {
        @include flexCenter(row, center, center);
        padding-bottom: 50px;
    }
    h3, p {
        font-size: $paragraph-size;
    }
}

footer {
    background-color: $quaternary-color;
    width: 100%;
    height: auto;
    padding: 40px;
    color: white;
    .social-media {
        @include flexCenter(row, center, center);
        gap: 40px;
        padding-bottom: 40px;
    }
}
```

## Quiz: Proyecto 

1. ¿Qué se necesita modificar para ajustar el tamaño de las imágenes en una clase?

	- Cambiar los valores de `width` y `height` según sea necesario

2. ¿Qué se crea para organizar mejor una sección?

	- Div

3. ¿Qué función se utiliza para acomodar íconos horizontalmente y centrados?

	- justify-content: center;


## 19. Presentación de Github pages y deploy


## Quiz: Deploy 

1. ¿Cuál es el primer paso para desplegar un proyecto en GitHub Pages?

	 - Seleccionar el repositorio del proyecto público en tu perfil de GitHub

2. ¿En qué sección de la configuración del repositorio puedes encontrar la opción 'GitHub Pages'?

	- En 'Settings'

3. ¿Qué es GitHub Pages?

	- Es un servicio gratuito de alojamiento web

## 20. Aprende a instalar y configurar Sass mediante Node.js

### Instrucciones 

1. Abre una terminal y navega hasta la carpeta raíz de tu proyecto.

Asegúrate de tener Node.js instalado en tu sistema. Puedes verificarlo escribiendo node -v en la terminal. Si no lo tienes instalado, ve al [sitio web oficial](https://nodejs.org/en) de Node.js para descargarlo e instalarlo.

2. Ejecuta el siguiente comando para instalar Sass a nivel global:

```shell
npm install -g sass
```

3. Ahora que tienes Sass instalado a nivel global, puedes compilar tus archivos Sass en CSS con el siguiente comando en la terminal:

```bash
sass input.scss output.css
```

4. Reemplaza “input.scss” con la ruta y el nombre de tu archivo Sass, y “output.css” con la ruta y el nombre de tu archivo CSS de salida. Por ejemplo:

```shell
sass styles/main.scss styles/main.css
```

5. Si quieres compilar automáticamente tus archivos Sass en CSS cada vez que hagas cambios, puedes usar la opción --watch:

```shell
sass --watch input.scss:output.css
```

6. Si estás utilizando Node.js en tu proyecto, también puedes usar un paquete de npm llamado sass para compilar tus archivos Sass en CSS. Para instalarlo, ejecuta el siguiente comando:

```shell
npm install sass
```

7. En tu archivo de configuración de Node.js (como package.json) agrega un script para compilar tus archivos Sass en CSS. Por ejemplo:

```json
"scripts": {
  "build:css": "sass input.scss output.css"
}
```

8. Ahora puedes ejecutar el script con el siguiente comando:

```shell
npm run build:css
```

Eso es todo. Con estas instrucciones deberías poder instalar y configurar Sass en tu proyecto de Node.js.

## Examen: 📌

<details>
  <summary>Haz click aquí para ver los resultados 👀</summary>
  <br/>

1. Selecciona la opción correcta

	- 📌Para hacer uso de la herencia en Sass es necesario utilizar la regla @extend seguido del nombre de la clase.

2. Selecciona la opción correcta

	- 📌El uso de HTML semántico incluye etiquetas como: `<section>`,`<article>` y `<main>`.

3. Son ejemplos de expresiones simples

	- 📌Números, strings y booleanos.

	Las expresiones simples son aquellas que no están compuestas por otras expresiones más complejas. En este caso, los números, strings y booleanos son tipos de datos simples en muchos lenguajes de programación. 
	
	Los caracteres especiales, las operaciones aritméticas, los booleanos, las listas y los mapas son elementos más complejos que pueden ser utilizados en expresiones más complejas. Sin embargo, en su forma individual, no se consideran expresiones simples.

4. ¿Cómo se utilizan los mixins en Sass?

	- 📌Se declaran con la directiva @mixin y se invocan con @include seguido del nombre del mixin.

5. Para inicializar el uso de flexbox debemos utilizar la propiedad de CSS display: flex

	- 📌 Verdadero

6. Selecciona la opción correcta

	- 📌La anidación dentro de Sass permite tener selectores dentro de otros y nos ayudan a simplificar el código.

7. Selecciona la opción correcta

	- 📌Las variables en Sass se declaran de la siguiente manera: $primary-color: red;

8. Los mixins permiten definir estilos que se pueden reutilizar en toda su hoja de estilos y facilitan evitar el uso de clases no semánticas

	- 📌 Verdadero

9. Las declaraciones universales se pueden utilizar en cualquier parte de la hoja de estilos.

	- 📌 Verdadero

10. ¿Qué es un preprocesador?

	- 📌 Un preprocesador es una herramienta que nos permite traducir nuestros estilos escritos a una sintaxis específica a CSS nativo.

11. ¿Para qué sirven las at-Rules?

	- 📌 Son reglas de CSS que cumplen con diferentes funciones y cuenta con su sintaxis propia.

	Las at-rules son reglas de CSS que comienzan con el símbolo "@". Estas reglas cumplen con diferentes funciones y tienen su propia sintaxis, lo que les permite modificar el comportamiento de los estilos. Algunos ejemplos de at-rules comunes incluyen "@media", "@import", "@font-face", "@keyframes", entre otros.
	
	Sass, por otro lado, es un preprocesador de CSS que permite a los desarrolladores escribir código CSS más eficiente y flexible. Aunque Sass tiene su propia sintaxis y características adicionales, las at-rules en Sass se utilizan principalmente para extender la funcionalidad de las at-rules de CSS estándar, como por ejemplo para utilizar variables en ellas.

12. Selecciona la opción correcta

	- 📌 La herencia es un mecanismo mediante el cual un selector puede recibir estilos utilizados previamente.

13. Selecciona la opción correcta

	- 📌 Un proyecto de Sass se compone de un archivo de entrada (Input) un archivo de Salida (Output) y el comando de compilación.

	En un proyecto típico de Sass, se tiene un archivo de entrada (Input) que contiene el código Sass y se utiliza para escribir estilos más eficientes y flexibles. Luego, se utiliza un comando de compilación para compilar el archivo de entrada y generar un archivo de salida (Output) en formato CSS. El archivo de salida es el que se utiliza en el sitio web para aplicar los estilos.
	
	Es importante destacar que, aunque el archivo de salida puede tener cualquier nombre y ubicación deseada, es importante seguir una estructura de carpetas organizada para evitar confusiones. Además, se pueden utilizar herramientas como automatizadores de tareas, como Gulp o Grunt, para automatizar el proceso de compilación y ahorrar tiempo en el desarrollo.
	
	El comando de compilación de Sass se utiliza para convertir un archivo de entrada en formato Sass a un archivo de salida en formato CSS. 

	El comando de compilación puede variar dependiendo de la herramienta o el entorno de desarrollo que se esté utilizando. Sin embargo, uno de los comandos de compilación más comunes es el siguiente:
	
	`sass [ruta-del-archivo-de-entrada]/[nombre-del-archivo-de-entrada].scss [ruta-del-archivo-de-salida]/[nombre-del-archivo-de-salida].css`
	
	En este comando, se debe reemplazar "[ruta-del-archivo-de-entrada]", "[nombre-del-archivo-de-entrada]", "[ruta-del-archivo-de-salida]" y "[nombre-del-archivo-de-salida]" con las rutas y nombres de los archivos correspondientes en el proyecto.
	
	También existen herramientas y entornos de desarrollo que automatizan el proceso de compilación y no requieren que se ejecute el comando manualmente cada vez que se realice un cambio en el archivo de entrada.

14. ¿Qué es el Scope?

	- 📌El scope hace referencia al contexto en el que son declaradas las variables.

	En Sass, el scope se refiere al alcance o contexto en el que se pueden utilizar las variables. Al igual que en otros lenguajes de programación, las variables en Sass solo son accesibles en el ámbito o contexto en el que se declaran.
	
	En la mayoría de los casos, las variables se definen en el nivel superior del archivo Sass o dentro de un bloque o selector anidado específico. Las variables definidas en el nivel superior del archivo Sass tienen un alcance global y pueden ser utilizadas en cualquier parte del archivo. Las variables definidas dentro de un bloque o selector anidado tienen un alcance local y solo pueden ser utilizadas dentro de ese bloque o selector.

	Por ejemplo, en el siguiente código Sass:
	
	```scss
	$color: blue; // variable global
	
	.container {
	  $background: red; // variable local
	  background-color: $background;
	  color: $color;
	}
	```

	La variable `$color` se declara en el nivel superior del archivo Sass y, por lo tanto, tiene un alcance global. La variable `$background` se declara dentro del bloque `.container` y, por lo tanto, tiene un alcance local. En la regla de estilo `background-color: $background;`, se utiliza la variable `$background`, que solo es accesible dentro del bloque `.container`. En cambio, en la regla de estilo `color: $color;`, se utiliza la variable `$color`, que es accesible en cualquier parte del archivo Sass.
	
	En resumen, el scope en Sass se refiere al alcance o contexto en el que se pueden utilizar las variables, y se determina por el nivel de anidamiento en el que se declaran.

15. ¿Qué significa la sigla Sass?

	- 📌Syntactically Awesome Style sheets

16. Es una ventaja de utilizar preprocesadores.

	- 📌Aumentan la productividad y permiten tener un código más mantenible.

17. Selecciona la opción correcta referente a la definición de Sass.

	- 📌 Es un preprocesador de CSS que se utiliza para agregar características adicionales a CSS.

</details>