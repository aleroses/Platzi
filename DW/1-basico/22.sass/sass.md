# SASS

Sass (Syntactically Awesome Style Sheets) es un preprocesador de CSS (Cascading Style Sheets), es decir, un lenguaje de programación que se utiliza para generar hojas de estilo en cascada (CSS) de manera más eficiente y sencilla. 

En resumen, Sass no es un lenguaje de programación en sí mismo, pero se utiliza en el desarrollo web para generar código CSS.

- [Descargar Node Lts](https://nodejs.org/es)

Verifica si tienes instalado node
- node -v

## 1. Creamos estructura del proyecto

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sass Course</title>
  </head>
  <body>
    <header class="hero">
      <nav class="nav">
        <div class="nav__container">
          <a href="#" class="nav__item">Inicio</a>
          <a href="#" class="nav__item">Acerca de</a>
          <a href="#" class="nav__item">Contacto</a>
        </div>
      </nav>
      <!-- div.animation>div.circle.circle-$*5 -->
      <div class="animation">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-5"></div>
      </div>
      <section class="hero__container">
        <div class="hero__texts">
          <h2 class="hero__title">Aprende con los mejores</h2>
          <p class="hero__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias
            pariatur fugiat atque facere, adipisci eius iure. Consectetur
            cupiditate asperiores velit tempora, sapiente ut similique dicta
            delectus ex doloribus veritatis.
          </p>
        </div>
      </section>
    </header>
  </body>
</html>
```

## 2. Instalamos SASS

Dentro de nuestro proyecto abrimos una terminal para inicializar el instalador de paquetes NPM (Node Package Manager) en nuestro proyecto: 
- npm init -y

Esto creará un archivo llamado `package.json` que nos servirá para activar sass.

Instalamos sass: 
- npm install sass --save-dev

Instalar sass de manera global: 
- npm install -g sass

Creamos una carpeta llamada `sass` con un archivo `style.scss`: 

```bash
╰─ tree -L 3
.
├── index.html       
├── node_modules     
├── package-lock.json
├── package.json
└── sass👈👀
    └── style.scss👈👀
```

## 3. Referencias archivo CSS

No podemos referenciar al archivo .scss en el HTML , si no, debemos referenciar a un archivo CSS para lo cual:

1. Observamos los cambios: 
- sass --watch sass:css

Ahora tenemos esta estructura:  

```bash
╰─ tree -L 3                                                    
.
├── css 👈👀
│   ├── style.css 👈👀
│   └── style.css.map 👈👀
├── index.html
├── node_modules
├── package-lock.json
├── package.json
└── sass
    └── style.scss
```

📌Nota: Si en algún momento decides parar la terminal, solo debes presionar `Ctrl + C`

2. Agregamos un link en el HTML

```html
<link rel="stylesheet" href="./css/style.css"> 👈👀
```

3. Agregamos estilos al archivo style.scss

```scss
h2 {
    color: crimson;
    font-size: 3rem;
}
```

## 4. Variables 

```scss
$color-one: steelblue;

h2 {
    color: $color-one;
    font-size: 3rem;
}
```


## 5. Modularizar 

Crear archivos sass sin que sean compilados para esto, creamos un archivo llamado `navbar.scss` dentro de la carpeta sass, esto genera un archivo dentro de la carpeta css:  

```bash
╰─ tree -L 3                                                    
.
├── css 
│   ├── navbar.css ✨👈👀
│   ├── navbar.css.map
│   ├── style.css     
│   └── style.css.map 
├── index.html
├── node_modules
├── package-lock.json
├── package.json
└── sass
    ├── navbar.scss 👈👀
    └── style.scss
```

navbar.scss  
```scss
.nav {
    background-color: steelblue;
}
```

Para ocultar/eliminar este archivo de la carpeta css solo debemos cambiarle el nombre  `_navbar.scss` agregando un guion bajo, luego debemos eliminar el archivo `navbar.css.map`. 

```bash
╰─ tree -L 3                                                    
.
├── css 
│   ├── navbar.css.map 🔥👈👀 Borramos este archivo
│   ├── style.css     
│   └── style.css.map 
├── index.html
├── node_modules
├── package-lock.json
├── package.json
└── sass
    ├── _navbar.scss 👈👀
    └── style.scss
```

Ahora agreguemos algunas estilos al archivo `_navbar.scss`  

```scss
.nav {
    background-color: steelblue;
}
```

Lo llamamos dentro del archivo `style.scss`: 

```scss
$color-one: steelblue;

@use 'navbar';

h2 {
    color: $color-one;
    font-size: 3rem;
}

p {
    color: $color-one;
}
```

También podemos usarlo con variables: creamos un archivo `_variables.scss` 

```scss
$color: steelblue;
```

Y lo usamos de la siguiente manera dentro de `style.scss` 

```scss
@use 'variables';👈👀

h2 {
    background-color: variables.$color;👈👀
}
```
parcharts


## 6. Nesting / Anidamiento + BEM

`_navbar.scss`  
```scss
.nav {
    background-color: slateblue;

    &__container {
        width: 90%;
        margin: 0 auto;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1em;
    }

    &__item {
        color: #fff;
        text-decoration: none;
        
        &--active {
            border-bottom: underline
        }

        /* &:hover {
            color: #000;
        } */
        }

    @media (min-width: 764px) {
        &__container {
            justify-content: flex-end;
        }
    }
}
```

`style.scss`
```scss
@use 'navbar';

h2 {
    background-color: slateblue;
}
```

## 7. Interpolación 

`_navbar.scss`  
```scss
$display: 'display';👈👀
$selector: '.nav';👈👀

#{$selector} {👈👀
    background-color: slateblue;

    &__container {
        width: 90%;
        margin: 0 auto;
        height: 70px;
        /* display: flex; */
        #{$display}: flex;👈👀
        align-items: center;
        justify-content: space-evenly;
        gap: 1em;
    }

    &__item {
        color: #fff;
        text-decoration: none;
        
        &--active {
            border-bottom: underline
        }

        /* &:hover {
            color: #000;
        } */
        }

    @media (min-width: 764px) {
        &__container {
            justify-content: flex-end;
        }
    }
}
```

También si tenemos una variable y queremos pasarlo a una custom property lo hacemos de la siguiente manera:   

`_navbar.scss`  
```scss
$primary: crimson;

.root {
    --primary: #{$primary};
}
```

Revisamos el archivo `style.css` vemos que tiene el color que necesitamos.  
```scss
.root {
  --primary: crimson;
}
```


## 8. Ciclos y Condicionales 

Creamos un nuevo archivo en la carpeta sass: `_animaciones.scss`

```scss
/* For */
.circle {
    width: 100px;
    height: 100px;
    background-color: #000;
    border-radius: 50%;

    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@for $iterador from 1 through 100 {
    /* También podemos crear selector */
    .circle-#{$iterador} {
        animation-name: animacion#{$iterador};

        @keyframes animacion#{$iterador} {
            100% {
                transform: translate(50% * $iterador);
            }
        }

        /* If */
        @if $iterador == 5 {
            animation-direction: alternate-reverse;
        }
    }
}
```

`style.scss`
```scss
@use 'navbar';
@use 'animaciones';👈👀

h2 {
    background-color: slateblue;
}

```

## 9. Mixins  

Creamos un nuevo archivo en la carpeta sass: `_hero.scss`  

```scss
.hero {
    &__container {
        height: calc(100vh - 70px);
        background-image: linear-gradient(#7a18973f, #000000d2);
        display: flex;👈👀
        align-items: center;👈👀
        justify-content: center;
    }
}
```

Si revisamos el `_navbar.scss` creado anteriormente notamos que ahora tenemos dos archivos repitiendo estilos (display y align-items). 

```scss
$display: 'display';
$primary: crimson;

.root {
    --primary: #{$primary};
}

.nav {
    background-color: slateblue;

    &__container {
        width: 90%;
        margin: 0 auto;
        height: 70px;
        /* display: flex; */
        #{$display}: flex;👈👀
        align-items: center;👈👀
        justify-content: space-evenly;
        gap: 1em;
    }

    &__item {
        color: #fff;
        text-decoration: none;
        
        &--active {
            border-bottom: underline
        }

        /* &:hover {
            color: #000;
        } */
        }

    @media (min-width: 764px) {
        &__container {
            justify-content: flex-end;
        }
    }
}
```

Para ver los cambios no olvidar referencias el archivo `_hero.scss` en en archivo  `style.scss`. 

```scss
@use 'navbar';
/* @use 'animaciones'; */
@use 'hero';👈👀

h2 {
    background-color: slateblue;
}
```

Para ver como funcionan los mixins agregamos un nuevo archivo dentro de la carpeta sass: `_mixinsfunc.scss`

```scss
/* Podemos usarlos con o sin argumentos */
@mixin crear-flexbox {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Con argumentos... */ 👈👀
@mixin crear-flexbox($justify) {
    display: flex;
    align-items: center;
    justify-content: $justify;
}
```

Si queremos usar este mixin dentro de `_hero.scss` y `_navbar.scss` debemos referenciarlo usando `@use` e `@include` de la siguiente manera. 

`_hero.scss`
```scss
@use 'mixinsfunc';👈👀

.hero {
    &__container {
        height: calc(100vh - 70px);
        background-image: linear-gradient(#7a18973f, #000000d2), url('../img/fierro.jpg');

        @include mixinsfunc.crear-flexbox(center);👈👀
    }

    &__texts {
        width: 90%;
        color: #fff;
    }

    &__title {
        font-size: 3rem;
    }
}
```

`_navbar.scss` 
```scss
$display: 'display';
$primary: crimson;

@use 'mixinsfunc';👈👀

.root {
    --primary: #{$primary};
}

.nav {
    background-color: slateblue;

    &__container {
        width: 90%;
        margin: 0 auto;
        height: 70px;
        @include mixinsfunc.crear-flexbox(space-evenly);👈👀
        gap: 1em;
    }

    &__item {
        color: #fff;
        text-decoration: none;
        
        &--active {
            border-bottom: underline
        }

        /* &:hover {
            color: #000;
        } */
        }

    @media (min-width: 764px) {
        &__container {
            justify-content: flex-end;
        }
    }
}
```

Si nos damos cuenta, estamos usando un mixin que creamos en un archivo aparte, pero también podemos crear mixins y usarlos en el mismo archivo en el que fueron creados:  

`_hero.scss`
```scss
@use 'mixinsfunc';

@mixin arreglar-imagen {👈👀
    background: {
        size: cover;
        repeat: no-repeat;
        position: center
    };
    /* 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0; 
    */
}

.hero {
    &__container {
        height: calc(100vh - 70px);
        background-image: linear-gradient(#7a18973f, #000000d2), url('../img/fierro.jpg');

        @include mixinsfunc.crear-flexbox(center);
        @include arreglar-imagen;👈👀
    }

    &__texts {
        width: 90%;
        color: #fff;
    }

    &__title {
        font-size: 3rem;
    }
}
```


## 10. Funciones

Creamos una función dentro del archivo `_mixinsfunc.scss`

```scss
@use 'sass:math';👈👀

/* Podemos usarlos con o sin argumentos */
@mixin crear-flexbox($justify) {
    display: flex;
    align-items: center;
    justify-content: $justify;
}

/* Funciones */

@function pixeles-rem($pixeles){👈👀
    // 32/16 = 2 * 1rem = 2rem
    $resultado: math.div($pixeles, 16) * 1rem;

    @return $resultado;👈👀
}
```

Esta función convierte unidades de medida px a rem. 

📌Nota: 1rem son 16px


```scss
@use 'mixinsfunc';👈👀

@mixin arreglar-imagen {
    background: {
        size: cover;
        repeat: no-repeat;
        position: center
    };
    /* background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0; */
}

.hero {
    &__container {
        height: calc(100vh - 70px);
        background-image: linear-gradient(#7a18973f, #000000d2), url('../img/fierro.jpg');

        @include mixinsfunc.crear-flexbox(center);
        @include arreglar-imagen;
    }

    &__texts {
        width: 90%;
        color: #fff;
    }

    &__title {👈👀
        // Esto se convierte a rem
        font-size: mixinsfunc.pixeles-rem(37);
        margin-bottom: mixinsfunc.pixeles-rem(10);
    }
    
    &__paragraph {👈👀
        font-size: mixinsfunc.pixeles-rem(18);
    }
}
```

![Tutorial: SASS en 40 MINUTOS](https://www.youtube.com/watch?v=kaSVabk-jbA)
