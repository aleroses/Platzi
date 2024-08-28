# Curso de JavaScript: Web Components

## 1. Introducción a los Web Components

Necesitas primero:

- Curso Definitivo de HTML y CSS
- Curso Básico de JavaScript
- Curso de JavaScript Engine (V8) y el Navegador
- Curso de Manipulación del DOM 🚨

## 2. ¿Qué problemas resuelven los Web Components?

Los problemas están relacionados con los distintos ecosistemas o frameworks (React, Angular, Vue), puesto que estos no pueden coexistir entre sí, por lo que los Web Components al estar fundamentados en JavaScript puro, brinda más compatibilidad.

## 3. ¿Qué son los Web Components?

Los **Web Components** son una tecnología en JavaScript que permite crear componentes reutilizables y encapsulados que funcionan de manera nativa en cualquier navegador moderno. Básicamente, los Web Components permiten desarrollar elementos personalizados que tienen su propio HTML, CSS y JavaScript, y que se pueden utilizar como si fueran etiquetas estándar de HTML.

Los **Web Components** se basan en tres tecnologías principales:

1. **Custom Elements** (Elementos personalizados): Esta API permite definir nuevas etiquetas HTML personalizadas. Por ejemplo, puedes crear una etiqueta `<mi-boton>` que encapsule un botón con estilos y comportamiento específico.

   ```js
   class MiBoton extends HTMLElement {
     constructor() {
       super();
       this.innerHTML = `<button>Haz clic aquí</button>`;
     }
   }
   customElements.define('mi-boton', MiBoton);
   ```

2. **Shadow DOM**: El Shadow DOM permite encapsular el contenido y los estilos de un componente para que no se mezclen con los del resto de la página. Esto significa que los estilos de fuera no afectan al componente, y viceversa.

   ```js
   class MiComponente extends HTMLElement {
     constructor() {
       super();
       let shadow = this.attachShadow({ mode: 'open' });
       shadow.innerHTML = `
         <style>
           p {
             color: red;
           }
         </style>
         <p>Hola desde el Shadow DOM</p>
       `;
     }
   }
   customElements.define('mi-componente', MiComponente);
   ```

3. **HTML Templates**: Los elementos `<template>` y `<slot>` permiten definir fragmentos de HTML que se pueden reutilizar en el componente y renderizar de forma dinámica.

   ```html
   <template id="mi-template">
     <style>
       p {
         color: blue;
       }
     </style>
     <p>Contenido del template</p>
   </template>
   ```

### Ventajas de los Web Components:
- **Reutilización**: Puedes crear un componente una vez y usarlo en cualquier parte.
- **Encapsulamiento**: Los componentes tienen su propio espacio aislado de estilos y scripts, lo que evita conflictos con otros elementos.
- **Compatibilidad**: Los Web Components son parte del estándar web y funcionan en cualquier navegador moderno sin necesidad de librerías adicionales.

En resumen, los **Web Components** te permiten crear elementos personalizados, encapsulados y reutilizables que mejoran la modularidad y mantenibilidad del código en proyectos web.

Los webs components son como piezas de lego
Son partes de código las cuales se pueden reutilizar para obtener un gran resultado
Estan creados para ser re utilizables
Encapsulando código para poder reutilizar en un proyecto o incluso diferentes proyectos sin necesidad de repetir el código
Todos los frameworks dicen tener la filosofía de ser como piezas de lego
Los webs components logran cumplir el objetivo completo
Por qué se puede implementar web components en cualquier proyecto
Los web Components son primitivos de bajo nivel que te permiten definir tus propios elementos HMTL

Te permiten:
Generar etiquitas HTML
Utilizar Web Standards para construirlos
Las Web API's para utilizar web components son

HTML Templates
Custom Elements ⇒ Define la etiqueta
Shadow DOM ⇒ Encapsula el código
ES Modules ⇒ Módulos para importar y exportar código entre archivos JS


RESUMEN: Los web components son fragmentos de código frontend los cuales se pueden usar en cualquier circunstancia sin importar las librerías o frameworks que uses. Para realizar este objetivo están compuestos por una serie de web API's