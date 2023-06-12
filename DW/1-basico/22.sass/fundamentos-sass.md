#  Curso de Fundamentos de Sass: Crea tu Primera Landing Page

> Ana María Díaz Solorio

## 1. ¿Qué es SASS y en qué se diferencia de otros preprocesadores?

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

![](https://i.postimg.cc/nLkDWBzz/1-diferencias.jpg)

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