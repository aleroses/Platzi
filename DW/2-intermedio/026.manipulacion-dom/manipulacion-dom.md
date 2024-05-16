# Curso de Manipulación del DOM

## 1. Y entonces nació internet...

Para estar actualizado y dominar cualquier frameworks debes dominar los fundamentos de JavaScript.

**Objetivo del curso:**

Manipular del DOM con JavaScript puro.

**Requerimientos:**

- Conocer HTML
- Conocer CSS
- Conocer JS
- Conocer programación y algoritmos
- Tener instalado Node.js

https://github.com/jonalvarezz/platzi-dom

## 2. ¿Qué es el DOM?

Es un concepto usado por los navegadores para renderizar y trabajar sobre una página web.

**Critical Rendering Path**

- Es el proceso que se encarga de convertir en pixeles el HTML, CSS y JS.
- Se puede dividir en 5 partes.
- A lo largo del proceso el navegador crea dos árboles: el DOM y el CSSOM
    - DOM: corresponde a la estructura de dato tipo árbol para el HTML
    - CSSOM: corresponde al árbol para CSS

DOM

- Es una representación del HTML
- Estructura en forma de árbol de nodos.
- Es un modelo que puede ser modificado

## 3. Web APIs modernas

Una WEB API nos permite conectar el DOM con JavaScript para que nosotros podamos (leerlo y modificarlo), actualmente existen más de 70 web APIS y el DOM solo es una de ellas.

> DOM + JS = Web API

**Existen para diferentes propósitos como:**

- Animaciones
- Drag & Drog
- Manejar de Archivos
- Trasmisión de video con web RTC
- Manejo de videojuegos como ser con OpenGL
- Incluso para manejo de pagos, sin necesidad de contar con librerías o servicios externos.

Al momento de **usar APIS** debemos tener **en cuenta:** 

**¿Cómo lo uso? → developer mozilla org**

Aquí **Podremos** encontrar bastante **información** sobre **Frontend** cuando la necesitamos

**¿Puedo usarlo? →** caniuse

También tenemos que tener en cuenta que las **API** que vayamos a usar estén **soportadas** por los **navegadores**, entonces **caniuse** podrá ayudarnos a saber sobre la compatibilidad que hay.

**Chrome** tiene **compatibilidad** con la mayoría de APIS y también de las más recientes.

### **APIs de terceros**

Twitter, por ejemplo, nos proporciona una manera sencilla de mostrar tweets de algún usuario a través de su API. Tan solo tenemos que hacer una petición GET al siguiente Endpoint:

GET [https://api.twitter.com/2/users/:id/tweets](https://api.twitter.com/2/users/:id/tweets)

### **APIs de servicios**

Si quisiéramos mostrar mapas de Google Maps, también podríamos hacerlo a través de su API.

Por ejemplo, para mostrar la ubicación de Sydney, New South Wales, Australia, lo haríamos de la siguiente manera:

 ```js
function initMap() {
  map = new google.maps.Map(
    document.getElementById("map"),
    { center: { lat: -34.397, lng: 150.644 }, zoom: 8 }
  );
}
``` 

- [MDN Web Docs](https://developer.mozilla.org/es/)
- [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)

## 4. Leer nodos

Básicamente, tenemos 4 formas de leer nodos con JS:

- `document.getElementById('id')` => nos permite obtener un elemento a través de su id.
- `parent.getElementsByClassName('class')` => obtiene un array (HTMLCollection) con todos los elementos hijos que tengan esa clase, ojo `getElementByClassName` no existe, es decir, no podremos obtener solo 1 elemento con esa clase.
- `parent.getElementsByTagName('div')` => con este método obtenemos una lista (HTMLCollection) con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar get**Elements** .

Sin embargo, existen 2 selectores más poderosos 👀:

- `parent.querySelector("")` => nos permite buscar de 3 formas, con ID, clase o tagName. A diferencia de los 2 anteriores, este nos devuelve 1 solo elemento, el primero que contenga el valor que se le pasó. 
	- Id => ('#id')
	- class => ('.class')
	- tagName ('div').
- `parent.querySelectorAll("")` => este método retorna un NodeList (parecido a un array) con todos los elementos que tengan ese selector (id, class o tagName).

Casi siempre el elemento **"padre o parent"** es **document**, ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores. 

Ejemplo:

 ```js
const button = document.querySelector('#button)
``` 