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