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
   
   La regla es que debes tener mínimo 2 palabras separadas por un guion.

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
   
   Otro ejemplo es la etiqueta `video`.

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
   
   Para usar esta etiqueta necesitas usar JavaScript, no funciona por si solo dentro de la estructura normal del HTML.
   
### Ventajas de los Web Components:

- **Reutilización**: Puedes crear un componente una vez y usarlo en cualquier parte.
- **Encapsulamiento**: Los componentes tienen su propio espacio aislado de estilos y scripts, lo que evita conflictos con otros elementos.
- **Compatibilidad**: Los Web Components son parte del estándar web y funcionan en cualquier navegador moderno sin necesidad de librerías adicionales.

En resumen, los **Web Components** te permiten crear elementos personalizados, encapsulados y reutilizables que mejoran la modularidad y mantenibilidad del código en proyectos web.

## 4. APIs de Web Components

La relación entre la etiqueta HTML `<video>` y el **Shadow DOM** radica en cómo ambos manejan la encapsulación y el aislamiento de contenido y estilos.

### Etiqueta `<video>` y su Encapsulación Interna

La etiqueta `<video>` es un elemento HTML estándar que permite reproducir videos en una página web. Aunque su uso parece sencillo, el `<video>` tiene una estructura interna compleja que incluye controles como play, pause, volumen, etc. Esta estructura interna está encapsulada y no es accesible directamente desde el DOM de la página, lo que se asemeja al concepto de **Shadow DOM**.

### Shadow DOM en Relación con `<video>`

1. **Encapsulación de Contenido**: Al igual que el Shadow DOM, el `<video>` encapsula sus controles y otros elementos internos. Los navegadores usan una especie de Shadow DOM interno para manejar estos controles, lo que significa que no puedes estilizar o acceder directamente a esos controles desde el DOM principal de la página.

2. **Aislamiento de Estilos**: Los estilos aplicados al contenido interno del `<video>`, como los controles, están aislados del resto de la página. Si intentas aplicar CSS a un `<video>`, solo podrás estilizar el contenedor del video, no los controles internos. Este aislamiento de estilos es una característica clave del Shadow DOM.

3. **Personalización Limitada**: Debido a esta encapsulación interna, si deseas personalizar completamente los controles del `<video>`, necesitarías crear tu propio conjunto de controles utilizando elementos personalizados y posiblemente el Shadow DOM para replicar el comportamiento encapsulado. Esto es similar a lo que haces al crear un componente web personalizado con Shadow DOM para encapsular su estructura y estilos.

### Ejemplo Práctico de Uso de Shadow DOM en una Interfaz de Video

Si quisieras crear un componente de video personalizado que tenga controles propios y que esos controles estén encapsulados para no interferir con otros elementos de la página, podrías usar el Shadow DOM. Aquí tienes un ejemplo básico:

```html
<video-control></video-control>

<script>
  class VideoControl extends HTMLElement {
    constructor() {
      super();
      // Creamos un Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });

      // Creamos la estructura HTML dentro del Shadow DOM
      shadow.innerHTML = `
        <style>
          button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
          }
        </style>
        <video src="video.mp4" width="320" height="240" controls></video>
        <button>Pausa</button>
      `;

      const video = shadow.querySelector('video');
      const button = shadow.querySelector('button');

      button.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          button.textContent = 'Pausa';
        } else {
          video.pause();
          button.textContent = 'Reproducir';
        }
      });
    }
  }

  // Definimos el elemento personalizado
  customElements.define('video-control', VideoControl);
</script>
```

En este ejemplo, el componente `video-control` encapsula un video y un botón de control dentro de un Shadow DOM, asegurando que los estilos y la funcionalidad estén aislados del resto de la página.

## 5. Beneficios de Web Components

1. Reutilización: Don't Repeat Yourself (you only have to build it once)
2. Legibilidad: Hace más fácil a los demás entender el código. Mejor semántica. `<user-profile>`
3. Mantenibilidad: Cada uno de los componentes puede ser escrito y probado de forma individual, sin comprometer la aplicación completa.
4. Interoperabilidad: Los frameworks y librerías no están hechos para coexistir entre ellos. Los Web Components sí.
5. Consistencia: Gracias a la naturaleza reutilizable e interoperable de los Web Components ya no tendrás que crear los mismos componentes en diferentes frameworks o librerías.

## 6. Ciclo de vida de un componente

El ciclo de vida de un Web Component en JavaScript incluye varias etapas clave, que permiten a los desarrolladores controlar lo que sucede en diferentes momentos de la existencia de un componente. Aquí te explico cada una de estas etapas:

### 1. **Constructor**

El constructor es la primera etapa en el ciclo de vida de un Web Component. Se llama cuando se crea una instancia del componente, ya sea de forma manual a través de JavaScript o cuando el navegador encuentra el elemento en el DOM por primera vez.

- **Función principal:** Inicializar el componente, configurar su Shadow DOM (si es necesario) y establecer propiedades y estados iniciales.
- **Ejemplo:**
  ```javascript
  class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<p>Hello, World!</p>`;
    }
  }
  ```

Directamente desde el JavaScript Engine, el constructor nos servirá para definir y cargar todas las variables en memoria que necesitemos, **es mala práctica pintar el componente aquí**.

### 2. **connectedCallback**

El `connectedCallback` se ejecuta cuando el componente se adjunta al DOM del documento. Esto puede ocurrir cuando el componente se inserta por primera vez en la página o cuando se mueve de un lugar a otro dentro del DOM.

- **Función principal:** Ejecutar código que dependa de que el componente esté en el DOM, como iniciar eventos, actualizar la interfaz de usuario, o hacer solicitudes de red.
- **Ejemplo:**
  ```javascript
  class MyComponent extends HTMLElement {
    connectedCallback() {
      console.log('Component added to the DOM');
    }
  }
  ```

Cuando el componente ya está pintado dentro del DOM y podemos hacer uso de él.

### 3. **attributeChangedCallback**

Este método se llama cada vez que uno de los atributos observados del componente cambia. Para usarlo, debes especificar qué atributos quieres observar definiendo un getter estático llamado `observedAttributes`.

- **Función principal:** Responder a los cambios en los atributos del componente, permitiendo que el componente actualice su estado o su interfaz en función de estos cambios.
- **Ejemplo:**
  ```javascript
  class MyComponent extends HTMLElement {
    static get observedAttributes() {
      return ['data-value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
  }
  ```

Cuando un atributo de nuestro componente cambia.

### 4. **disconnectedCallback**

El `disconnectedCallback` se ejecuta cuando el componente se elimina del DOM. Esto puede ser útil para limpiar recursos o detener tareas que no son necesarias cuando el componente ya no está en la página.

- **Función principal:** Limpiar recursos, detener timers, o desconectar listeners de eventos que se configuraron cuando el componente estaba en el DOM.
- **Ejemplo:**
  ```javascript
  class MyComponent extends HTMLElement {
    disconnectedCallback() {
      console.log('Component removed from the DOM');
    }
  }
  ```

Cuando el componente se "destruye" o se quita del DOM.

### 5. **adoptedCallback**

El `adoptedCallback` se ejecuta cuando un componente es movido a un nuevo documento, como cuando se utiliza en un documento diferente al original (por ejemplo, si se mueve entre iframes).

- **Función principal:** Adaptar el componente a su nuevo contexto, si es necesario.
- **Ejemplo:**
  ```javascript
  class MyComponent extends HTMLElement {
    adoptedCallback() {
      console.log('Component moved to a new document');
    }
  }
  ```

Cuando el componente es movido a un nuevo DOM, básicamente cuando es pintado desde un iframe por ejemplo (esto ya no se suele hacer).

### Gráfico del Ciclo de Vida

```mermaid
flowchart TD
  A[constructor]
  B[connectedCallback]
  C[attributeChangedCallback]
  D[disconnectedCallback]
  E[adoptedCallback]

  A --> B
  B --> C
  C --> D
  B --> D
  E
```

Más información sobre este lifecycle aquí (en español):
[Usando callbacks de ciclo de vida](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements#usando_callbacks_de_ciclo_de_vida) .

## 7. Custom Elements

Vamos a crear nuestro primer Web Component.

### Creando el componente

En Visual Studio Code creamos un archivo HTML y JS:

Después de crear nuestra estructura básica de HTML vamos a nuestro archivo de JavaScript y creamos una clase que será nuestro componente:

```js
class MyElement extends HTMLElement {
  constructor() {
    // Heredamos las propiedades de HTML element con "super()"
    super();
  }
}

customElements.define("my-element", MyElement);
```

Para crear un componente primero debemos crear una clase que extienda a lago llamado el `HTMLElement`, el cual nos va a permitir definir nuestro componente web.

Para convertir nuestro componente en una etiqueta HTML debemos usar el método estático de `customElements` llamado `define( )`, el cual recibe dos parámetros, el primero el nombre de como se llamará la etiqueta de nuestro componente, y el segundo la clase que utilizaremos para definir los comportamientos de nuestro componente.

En este punto ya generamos nuestra etiqueta, y podemos usarla en el HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    ...
  </head>
  <body>
    <my-element></my-element> 👈👀
    <script src="./my-element.js" type="module"></script>
  </body>
</html>
```

### Lógica de nuestro componente

Ahora vamos a empezar a definir los comportamientos de nuestro componente:

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    // Creamos una etiqueta p
    this.p = document.createElement("p");
  }
  // Creamos el método de conenxión
  connectedCallback() {
    // Introducimos texto a nuestra etiqueta
    this.p.textContent = "Hola mundo";
    // Agregamos esta etiqueta como hijo de <my-element>
    this.appendChild(this.p);
  }
}

customElements.define("my-element", MyElement);
```

Si vemos nuestro archivo en el navegador podremos ver nuestro “Hola mundo”.

### Complejidad de componente

Podemos añadir muchas más cosas a nuestro componente, tales como estilos y demás, veamos un ejemplo.

```js
// Creamos un div
const template = document.createElement("div");
/* Dentro de este div podemos escribir estilos y demás cosas, recordemos que estos estilos no harán colición con otros estilos debido a que los estilos que escribamos aquí solo aplican a nuestro  componente y NO a otros elementos externos a este */
template.innerHTML = `
  <style>
    p {
      color: #9C27B0
    }
    .text {
      font-size: 1rem;
      color: #212121;
    }   
  </style>   
  <p>Hola mundo 2</p>   
  <p class="text">Texto de ejemplo</p> 
`;

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "Hola mundo";
    this.appendChild(this.p);
    // Añadimos nuestro template a nuestro componente como hijo
    this.appendChild(template);
  }
}

customElements.define("my-element", MyElement);
```

Y si todo está correcto, veremos nuestro componente en el navegador con todo lo que definimos:

### Código de la clase

```js
class MyElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hi world";
    this.appendChild(this.p);
  }
}

customElements.define("my-element", MyElement);
```

Otra forma:

```js
const template = document.createElement("div");
template.innerHTML = `
  <style>
  .text {
    color: red;
  }

  p {
    color: blue;
  }
  </style>
  <p class="text">Hi world</p>
  <p>Hi world......</p>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hi world";
    this.appendChild(this.p);
    this.append(template);
  }
}

customElements.define("my-element", MyElement);
```

Ahora en nuestro HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Custom Elements</title>
  </head>
  <body>
    <my-element></my-element>
    <script type="module" src="./my-element.js"></script>
  </body>
</html>
```

## 8. Template

**Básicamente la API Template nos permite conectar un web component de forma más profesional y organizada**. También nos ayuda a clonar los elementos fácilmente _(Ya que como lo hicimos en la clase anterior el elemento no se clonaba, sino que se pasaba de etiqueta en etiqueta hasta la última en ser renderizada)_

**La etiqueta `<template>`**

Es una etiqueta que nos sirve como contenedor de código. Todo lo que escribamos adentro de esta etiqueta **no se va a renderizar**, sino que hay que activarlo mediante JavaScript. 

En el siguiente [enlace](https://www.w3schools.com/tags/tag_template.asp) vas a ver cómo se activa desde JS.

**Escribir y activar el código dentro de la clase**

De esta forma estamos armando toda la estructura HTML dentro de JavaScript, pero insertándola en la clase y fraccionando el HTML y CSS para más placer.

En este caso, creamos la clase, con su extensión y constructor, luego creamos un método que contendrá la estructura HTML `getTemplate`. Adentro insertamos la variable **template** que contiene la estructura.

```js
getTemplate() {
  const template = document.createElement("template");
  template.innerHTML = `
    <section>
      <h2>Hi world!!!</h2>
      <div>
        <p>I'm new text in JS...</p>
      </div>
    </section>
  `;

  return template;
}
```

En otro método `getStyles` todo lo que hacemos es retornar un literal string que contiene el código CSS (si queremos podemos contenerla en una variable, eso es a comodidad del programador)

```js
getStyles() {
  return `
    <style>
      h2 {
        color:red; 
      }
    </style>
  
  `;
}
```

Y luego al final del código de `getTemplate` la llamamos de esta forma:

```js
getTemplate() {
  const template = document.createElement("template");
  template.innerHTML = `
    <section>
      <h2>Hi world!!!</h2>
      <div>
        <p>I'm new text in JS...</p>
      </div>
    </section>
    ${this.getStyles()} 👈👀
  `;

  return template;
}
```

**Clonar Elementos**

Para clonar el código debemos indicar mediante el método `cloneNode` que se puede clonar. Para eso invocamos el contenido de `getTemplate`, y lo anidamos a la clase (que luego al ser invocada en el HTML se convierte en la etiqueta misma)

```js
render() {
  this.appendChild(
    this.getTemplate().content.cloneNode(true)
  );
}
```

**Y FINALMENTE**

Invocamos el `render`.

```js
connectedCallback() {
  this.render();
}
```

**Consideraciones sobre CSS**

Aunque el uso de `<template>` facilita la organización del contenido, el CSS dentro de la plantilla puede entrar en conflicto con otros estilos en la página. Para evitar esto, asegúrate de usar estilos encapsulados y específicos para tu componente, o considera el uso del Shadow DOM para mayor aislamiento de estilos.

### Código de la clase

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Custom Elements</title>
  </head>
  <body>
    <template>
      <h2>Testing...</h2>
      <div>
        <p>I'm a text...</p>
      </div>
    </template>

    <my-element></my-element>

    <script type="module" src="./my-element.js"></script>
  </body>
</html>
```

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>Hi world!!!</h2>
        <div>
          <p>I'm new text in JS...</p>
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color:red; 
        }
      </style>
    
    `;
  }

  render() {
    this.appendChild(
      this.getTemplate().content.cloneNode(true)
      // true es para que clone todos los elementos anidados
    );
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);
```

## 9. Shadow DOM

El Shadow DOM nos permite resolver problemas relacionados con la sobrescritura de estilos CSS debido a la especificidad. Al usar el Shadow DOM, creamos un encapsulamiento, un DOM independiente dentro de nuestro DOM global.

Esto significa que cualquier cosa que exista dentro del Shadow DOM no afectará ni será afectada por los elementos y estilos del DOM global. En otras palabras, el Shadow DOM actúa como una burbuja aislada, protegiendo los estilos y elementos internos de interferencias externas y viceversa.

### Código de la clase

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 👈👀
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>Hi world!!!</h2>
        <div>
          <p>I'm new text in JS...</p>
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color:red; 
        }
      </style>
    
    `;
  }

  render() { 👀👇
    this.shadowRoot.appendChild(
      this.getTemplate().content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);

// Para poder renderizar nuestros templates tenemos que cambiar el contexto 
// Del dom global cambiamos a shadow dom que es otro contexto diferente
```

Es importante activar el shadow dom para poderlo visualmente en nuestro inspector de elementos .

Settings: Preferences / Elements / Show user agent shadow DOM.

![](https://i.postimg.cc/vBrcLx04/9-show-user-agent-shadow-dom.png)

## 10. Content Slot

El `Content Slot` es una característica del Shadow DOM en Web Components que permite distribuir contenido en diferentes partes del Shadow DOM de un componente. Los `slots` actúan como marcadores de posición dentro del Shadow DOM, donde se puede insertar contenido desde el Light DOM (el contenido definido fuera del Shadow DOM en la página principal).

### Código de la clase

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body> 👀👇
    <my-element>Testing</my-element>

    <script type="module" src="./my-element.js"></script>
  </body>
</html>
```

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section> 👀👇
        <h2> <slot></slot> </h2>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color:red; 
        }
      </style>
    
    `;
  }

  render() {
    this.shadowRoot.appendChild(
      this.getTemplate().content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);
```

## 11. 

```js
```


```js
```

```js
```


```js
```

👈👀
👀👇

---