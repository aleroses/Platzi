# Curso de API REST con Javascript: Ejemplos con APIs reales

> Inicio: 31/01/2024  
> Final: /02/204

## **1.** TheMovieDB: análisis de su API

Debes crearte una cuenta en [The Movie DB](https://www.themoviedb.org/) para obtener una API KEY.

## **2.** Bocetos en papel y diseño en Figma

Crea tu prototipo en Figma o donde desees. También puedes buscar diseños ya realizados en Pinterest, Dribbble o Behance. 

### Recomendaciones

- [Curso de Figma: Prototipado e Interfaces](https://platzi.com/cursos/figma-basico/)
- [Curso de Figma: Técnicas Avanzadas de Diseño](https://platzi.com/cursos/figma-tecnicas-avanzadas/)
  - [Prototipo propuesto en el curso](https://www.figma.com/proto/0xoaBRUNgYu9Uot6eUVUws/PlatziMovies?node-id=1-2&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A1)
  - [Paleta de colores](https://colorhunt.co/)
  - [Generador de Paleta de colores](https://mybrandnewlogo.com/es/generador-de-paleta-de-colores)

## **3.** Configuración del entorno de desarrollo

- Crea un nuevo repo en GitHub y clónalo

```bash
code ./ -r
npm init -y
```

### Variables de entorno

En JavaScript, las variables de entorno son variables especiales que se utilizan para almacenar valores que pueden ser accedidos por una aplicación en tiempo de ejecución. Estas variables se configuran fuera del código fuente de la aplicación y generalmente se definen en el sistema operativo o en el entorno de ejecución en el que se está ejecutando la aplicación.

Las variables de entorno son útiles para almacenar información sensible o configuraciones específicas del entorno, como claves de API, rutas de archivos, nombres de host de bases de datos, etc. Al utilizar variables de entorno, puedes evitar que esta información confidencial se incluya directamente en el código fuente de tu aplicación, lo que puede ser una buena práctica de seguridad.

En JavaScript, el acceso a las variables de entorno se realiza mediante el objeto `process.env`. Este objeto proporciona acceso a todas las variables de entorno definidas en el entorno de ejecución actual. Puedes acceder a una variable de entorno específica utilizando su nombre como una propiedad del objeto `process.env`. Por ejemplo, si tienes una variable de entorno llamada `API_KEY`, puedes acceder a su valor de la siguiente manera:

```javascript
const apiKey = process.env.API_KEY;
```

Es importante tener en cuenta que las variables de entorno son específicas del entorno de ejecución y pueden variar según el sistema operativo o el entorno en el que se esté ejecutando la aplicación.

### Usando API's key

Para utilizar una API_KEY como variable de entorno y asegurarte de que no aparezca en el código fuente cuando se suba a GitHub Pages, puedes seguir los siguientes pasos:

1. Define una variable de entorno llamada `API_KEY` en tu sistema operativo o en el entorno de ejecución en el que estás trabajando. Asigna a esta variable el valor de tu clave de API. Ver explicación completa en el siguiente subtitulo.

2. En tu código JavaScript, puedes acceder a la variable de entorno `API_KEY` utilizando `process.env.API_KEY`:

```javascript
const apiKey = process.env.API_KEY;
```

3. Utiliza la variable `apiKey` en tu código para realizar las solicitudes a la API que requieren la clave:

```javascript
// Código para realizar una solicitud a la API utilizando la apiKey
fetch(`https://api.example.com/data?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos recibidos de la API
  })
  .catch(error => {
    // Manejar el error de la solicitud
  });
```

4. Para asegurarte de que la API_KEY no se incluya en el código fuente cuando se suba a GitHub Pages, debes utilizar un archivo `.env` para almacenar las variables de entorno. Crea un archivo llamado `.env` en la raíz de tu proyecto y define las variables de entorno allí:

```js
API_KEY=TuClaveDeAPI
```

5. Asegúrate de agregar el archivo `.env` a tu archivo `.gitignore` para evitar que se suba al repositorio de GitHub. Esto garantizará que la clave de API no esté disponible públicamente:

```
# .gitignore

.env
```

6. En el entorno de desarrollo local, puedes utilizar un paquete como `dotenv` para cargar las variables de entorno desde el archivo `.env` en tu código. Instala el paquete `dotenv` utilizando npm o yarn:

```bash
npm install dotenv
```

7. En tu archivo JavaScript principal (por ejemplo, `index.js`), agrega el siguiente código al comienzo para cargar las variables de entorno desde el archivo `.env`:

```javascript
require('dotenv').config();
```

Con esto, cuando ejecutes tu aplicación localmente, las variables de entorno definidas en el archivo `.env` estarán disponibles en `process.env`.

Recuerda que al utilizar GitHub Pages, no puedes ejecutar código del lado del servidor, por lo que no podrás utilizar las variables de entorno directamente en GitHub Pages. Sin embargo, puedes configurar un flujo de trabajo de CI/CD (integración continua/distribución continua) que se encargue de hacer el despliegue a GitHub Pages y configure las variables de entorno en el entorno de ejecución adecuado.

#### Definir variables de entorno 

Los pasos para definir una variable de entorno en diferentes sistemas operativos:

**En Windows:**

1. Haz clic derecho en el menú Inicio y selecciona "Sistema".
2. En la ventana de Configuración del sistema, ve a la pestaña "Avanzado".
3. Haz clic en el botón "Variables de entorno".
4. En la sección "Variables del sistema", haz clic en "Nuevo".
5. Ingresa el nombre de la variable, por ejemplo, "API_KEY".
6. Luego, ingresa el valor de la clave de la API en el campo "Valor de la variable".
7. Haz clic en "Aceptar" para guardar la nueva variable de entorno.

**En macOS y Linux:**

1. Abre una terminal.
2. Utiliza el siguiente comando para abrir el archivo de perfil del shell (por ejemplo, `.bash_profile`, `.bashrc`, `.zshrc`):
    
    ```bash
    nano ~/.bash_profile
    ```
    
    (Si estás utilizando otro shell, como `zsh`, reemplaza `.bash_profile` con el archivo correspondiente).
3. Agrega la siguiente línea al archivo para definir la variable de entorno:
    
    ```js
    export API_KEY=TuClaveDeAPI
    ```
    
    Reemplaza `TuClaveDeAPI` con el valor real de tu clave de API.
4. Guarda los cambios y cierra el archivo (en nano, presiona Ctrl + X, luego Y y Enter).
5. Reinicia la terminal o ejecuta el siguiente comando para aplicar los cambios:
    
    Copiar
    
    ```js
    source ~/.bash_profile
    ```
    

Una vez que hayas definido la variable de entorno en tu sistema operativo, podrás acceder a ella desde tu código JavaScript utilizando `process.env.API_KEY`, como se mencionó anteriormente.

Recuerda que estos pasos son para definir variables de entorno en el sistema operativo local. Para configurar variables de entorno en un entorno de ejecución en la nube o en un servicio de hosting específico, deberás consultar la documentación correspondiente o seguir los pasos proporcionados por el proveedor del servicio.

##### En Visual Studio Code 

Si estás utilizando Visual Studio Code (VSC) como tu entorno de desarrollo y quieres definir una variable de entorno llamada `API_KEY`, puedes hacerlo siguiendo estos pasos:

1. Crea un archivo llamado `.env` en el directorio raíz de tu proyecto. Puedes hacerlo directamente en VSC haciendo clic derecho en el explorador de archivos y seleccionando "New File" (Nuevo archivo).
    
2. Abre el archivo `.env` y define la variable `API_KEY` con su respectivo valor. Por ejemplo:
    
    ```js
    API_KEY=TuClaveDeAPI
    ```
    
3. Guarda el archivo `.env`.
    
4. Asegúrate de tener instalada la extensión "dotenv" en Visual Studio Code. Puedes buscarla en la pestaña de extensiones y asegurarte de que esté instalada. Esta extensión nos permitirá cargar las variables de entorno definidas en el archivo `.env` en nuestro código.
    
5. En el archivo JavaScript donde deseas utilizar la variable `API_KEY`, agrega el siguiente código al principio del archivo:
    
    ```js
    require('dotenv').config();
    ```
    
6. Ahora puedes acceder a la variable `API_KEY` en tu código utilizando `process.env.API_KEY`. Por ejemplo:
    
    ```js
    const apiKey = process.env.API_KEY;
    console.log(apiKey);
    ```
    

Al cargar el archivo `.env` con `require('dotenv').config()`, las variables de entorno definidas en el archivo se cargarán en el objeto `process.env`, lo que te permitirá acceder a ellas en tu código.

Recuerda que el archivo `.env` debe mantenerse fuera del control de versiones, ya que contiene información sensible. Asegúrate de agregarlo al archivo `.gitignore` para evitar que se suba a un repositorio público.

### 📒 Agregando variables de entorno para trabajar en React

1. Agrega un archivo .env en el nivel donde se encuentra tu .gitignore.

2. Declara tu(s) variable(s) de entorno dentro de tu archivo .env, dichas variables siempre deben comenzar por “REACT_APP_”, sin las comillas y agregando el nombre de tu variable en mayúsculas espaciada por guiones bajos, posteriormente asígnale un valor a esta variable usando un “=”.

Ejemplo de una variable de entorno:  

```
REACT_APP_API_KEY=abcd1726gy57
```

3. Para usar tu variable de entorno simplemente declara: “process.env.” Sin las comillas y seguido del nombre de tu variable.

Ejemplo de uso:

```js
console.log(process.env.REACT_APP_API_KEY)
```

4. Ahora en tu archivo .gitignore agrega: “.env”, sin comillas y en cualquier parte del documento, eso ignorará los archivos .env y mantendrá a salvo tus secretos.

### Nota:

Ten en cuenta que las variables de entorno se ejecutan al iniciar el servidor, así que no te alteres si tu variable no se muestra a la primera, esto puede pasar porque ya te encontrabas trabajando dentro de tu servidor antes de agregar las variables de entorno, la solución es detener el servidor y volverlo a iniciar con el clásico “npm start”.

Si quieres saber más sobre este tema, consulta [la documentación aquí.](https://create-react-app.dev/docs/adding-custom-environment-variables/) 👈

## **4.** Maquetación del proyecto: HTML y CSS

## **5.** Lista de películas en tendencia

[Trending: All](https://developer.themoviedb.org/reference/trending-all)

Elige el lenguaje y usa el código mostrado en la misma web.

```js
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRjZWZhYzNhM2QyMzRjNThlZjQ2OTAzY2U3ZWJkMyIsInN1YiI6IjY1NjIxMjMyYTZjMTA0MDBmZWIwYjc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w49IQG4OZJuFx_It37mXvTWZtbyWPFHotHB0yEA2dP0'
  }
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

Para obtener imagenes revisa:

[Images Basics](https://developer.themoviedb.org/docs/image-basics)

Notarás que los objetos de películas, TV y personas contienen referencias a diferentes rutas de archivos. Para generar una URL de imagen completamente funcional, necesitará 3 datos. Esas piezas son a `base_url`, a `file_size` y a `file_path`.

```js
// Ejemplo
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```

## **6.** Lista de categorías

Para obtener la lista de géneros o categorías entra a [Movie List](https://developer.themoviedb.org/reference/genre-movie-list) copia el código que te dan y adáptalo.

## **7.** Migración a Axios

Copia el cdn del repo de GitHub: [CDN jsDelivr](https://github.com/axios/axios?tab=readme-ov-file#cdn)

Agregar encima de las otras llamadas de archivos JS. 

```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
```

La sintaxis es la siguiente:

```js
const apiaxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  /* 
	headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: authorization,
  }, */
});

export { apiaxios };
```

Reemplazamos el `fech` por `apiaxios`.

```js
import { authorization } from "../parameters.mjs";
import { apiaxios } from "./axios.mjs";

const getCategories = async () => {
  const { data } = await apiaxios( 👈👀
    "genre/movie/list?language=en",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization,
      },
    }
  );

  return data;
};

export { getCategories };
```

## **8.** Location y hash navigation

En JavaScript, `location` es un objeto que representa la información sobre la ubicación actual del documento cargado en el navegador. Proporciona una interfaz para acceder y manipular diversas partes de la URL, como el dominio, el protocolo, el puerto, la ruta y los parámetros de consulta.

El objeto `location` se puede acceder a través de la propiedad `window.location` en los navegadores web. Aquí tienes algunos ejemplos de cómo se puede utilizar:

1. Obtener la URL completa:
```javascript
console.log(window.location.href);
```

2. Obtener el dominio:
```javascript
console.log(window.location.hostname);
```

3. Obtener la ruta:
```javascript
console.log(window.location.pathname);
```

4. Obtener los parámetros de consulta:
```javascript
console.log(window.location.search);
```

El objeto `location` también proporciona métodos para redirigir la página a una nueva URL. Por ejemplo, puedes utilizar el método `assign()` para cargar una nueva página:

```javascript
window.location.assign('https://www.example.com');
```

Ahora, en cuanto a la "hash navigation", se refiere al uso del fragmento de URL conocido como "hash" (#) para realizar cambios en la página sin tener que recargarla por completo. Cuando se utiliza la navegación basada en hash, los cambios en la parte de hash de la URL no provocan una solicitud al servidor, lo que permite actualizar solo una parte específica de la página.

Por ejemplo, supongamos que tienes una página con una lista de elementos y deseas permitir que los usuarios naveguen entre ellos sin recargar la página. Puedes usar la hash navigation para lograrlo. Al hacer clic en un enlace, puedes cambiar el valor de la hash en la URL y luego detectar ese cambio utilizando el evento `hashchange` en JavaScript. Aquí tienes un ejemplo:

```javascript
window.addEventListener('hashchange', function() {
  var hash = window.location.hash;
  // Realizar acciones basadas en el valor de la hash
});

// Cambiar la hash en la URL
window.location.hash = 'item1';
```

En este ejemplo, cuando se cambia la hash en la URL (por ejemplo, al hacer clic en un enlace que apunta a `#item1`), se activará el evento `hashchange` y puedes realizar las acciones necesarias en respuesta al cambio. Esto te permite actualizar dinámicamente el contenido de la página según el valor de la hash sin tener que recargarla por completo.

### startsWith()

La expresión `location.hash.startsWith("#example=")` es una condición en JavaScript que verifica si la parte de la hash de la URL actual comienza con el texto `#example=`.

Aquí está la explicación de cada componente de la expresión:

- `location.hash`: Es una propiedad del objeto `Location` que devuelve la parte de la URL que sigue al símbolo de almohadilla (#). Esto incluye cualquier texto después del # en la URL actual.

- `startsWith()`: Es un método de la clase `String` en JavaScript que verifica si una cadena comienza con un determinado texto. Recibe como argumento la cadena que se desea verificar.

- `#example=`: Es el texto que se está buscando en la parte de la hash de la URL.

En resumen, `location.hash.startsWith("#example=")` devuelve `true` si la parte de la hash de la URL actual comienza con `#example=`, y devuelve `false` en caso contrario.

Por ejemplo, si la URL actual es `https://www.example.com/#example=123`, entonces `location.hash.startsWith("#example=")` será `true` porque la parte de la hash comienza con `#example=`.

### load vs DOMContentLoaded

En JavaScript, tanto `DOMContentLoaded` como `load` son eventos que se utilizan para controlar el momento en el que se ha cargado completamente el contenido de una página web. Sin embargo, existen diferencias importantes entre ellos.

1. DOMContentLoaded:
`DOMContentLoaded` es un evento que se dispara cuando el documento HTML ha sido completamente cargado y analizado por el navegador, lo que significa que el árbol DOM (Document Object Model) ha sido construido. Esto ocurre antes de que se hayan cargado y renderizado los recursos externos adicionales, como imágenes, hojas de estilo CSS o scripts externos.

Este evento es útil cuando deseas ejecutar código JavaScript que interactúa con el DOM, como manipulación de elementos o asignación de eventos, antes de que se hayan cargado todos los recursos externos de la página. Puedes utilizar el evento `DOMContentLoaded` de la siguiente manera:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Código a ejecutar cuando el DOM esté completamente cargado
});
```

2. load:
`load` es un evento que se dispara cuando todos los recursos externos de la página, incluyendo imágenes, hojas de estilo CSS, scripts externos y otros elementos, se han cargado por completo. Esto significa que tanto el árbol DOM como los recursos externos están disponibles y listos para ser utilizados.

Este evento es útil cuando necesitas asegurarte de que todos los recursos de la página se han cargado antes de ejecutar cierto código JavaScript. Puedes utilizar el evento `load` de la siguiente manera:

```javascript
window.addEventListener('load', function() {
  // Código a ejecutar cuando todos los recursos estén cargados
});
```

Es importante tener en cuenta que el evento `load` se dispara después de que `DOMContentLoaded` haya ocurrido. Por lo tanto, si solo necesitas acceder al DOM, puedes utilizar `DOMContentLoaded` para mejorar el rendimiento, ya que se dispara antes.

En resumen, `DOMContentLoaded` se dispara cuando el DOM ha sido construido, mientras que `load` se dispara cuando todos los recursos externos se han cargado. Puedes elegir el evento adecuado dependiendo de tus necesidades específicas en relación con la carga de recursos y la interacción con el DOM.

### Modo de propagación del evento

Considerando los siguientes ejemplos: 

```js
window.addEventListener("load", navigator, false);
window.addEventListener(
  "hashchange",
  navigator,
  false
);
```

El tercer argumento en la función `addEventListener` en JavaScript se refiere a las opciones de configuración del evento. Puede ser `true` o `false` y afecta al comportamiento de cómo se maneja el evento.

En el contexto de los ejemplos proporcionados, aquí está la explicación:

1. `window.addEventListener("load", navigator, false);`

El evento `"load"` se dispara cuando se han cargado completamente todos los recursos de una página, como imágenes, hojas de estilo CSS y scripts externos. En este caso, se está utilizando `addEventListener` en el objeto `window` para escuchar el evento `"load"` y ejecutar la función `navigator` cuando ocurra.

El tercer argumento, `false`, indica que el evento se manejará en el modo de propagación normal, es decir, el evento se propagará desde el elemento objetivo hacia los elementos padre. Esto significa que el evento se ejecutará primero en el elemento objetivo y luego se propagará hacia los elementos padre del DOM. Esta es la opción por defecto si no se especifica ningún valor.

2. `window.addEventListener("hashchange", navigator, false);`

El evento `"hashchange"` se dispara cuando cambia la parte de hash de la URL. En este caso, se está utilizando `addEventListener` en el objeto `window` para escuchar el evento `"hashchange"` y ejecutar la función `navigator` cuando ocurra.

Nuevamente, el tercer argumento, `false`, indica que el evento se manejará en el modo de propagación normal, donde el evento se propaga desde el elemento objetivo hacia los elementos padre.

El tercer argumento también puede ser `true`, lo que indica que el evento se manejará en el modo de captura, donde el evento se propaga desde el elemento padre hacia el elemento objetivo. Sin embargo, en estos ejemplos, se ha utilizado el valor `false`, lo que significa que se utiliza el modo de propagación normal.

En resumen, el tercer argumento `false` en `addEventListener` indica que el evento se manejará en el modo de propagación normal, donde el evento se propaga desde el elemento objetivo hacia los elementos padre.

### Bubble: Propagación de eventos

La propagación de eventos burbujeante, ascendente o Bubble, se produce cuando se define un evento en un elemento (padre) que contiene otros elementos (hijos). Por ejemplo:

```html
<div id="div1">
  <div id="div2">
    <div id="div3">
      Hola
    </div>
  </div>
</div>
```

Si definimos un `eventListener` en `div3` y le das clic, aparentemente estás dando clic a los elementos  `div2` y  `div1`. Esto se debe a que JS está pensado para que el evento interno se propague hacia arriba hasta llegar a su máximo contenedor DOM. Similar a una burbuja que asciende desde el fondo hasta el tope del líquido.

La forma de detener el ascenso de eventos, es usando el método `stopPropagation()`. Que viene dentro del argumento `event` que cualquier evento nos provee, por tanto, yo puedo decirle al `div3`: 

> “Oiga, yo solo lo quiero clicar a usted, no a los demás, sí, ya sé que usted está dentro de los demás, pero yo solo lo quiero a usted”, 

De tal forma que al `eventListener` del `programation` le puedo declarar como:

```js
div3.addEventListener("click", event => {
  event.stopPropagation()
});
```

De esta forma, el evento de `div2` y `div1` no serán ejecutados.

📌 Dato curioso, cuando defines un elemento con un ID en HTML, en JavaScript se crea automáticamente una variable con ese id que creaste, por eso es completamente posible que yo pueda usar la variable `div3` sin tener que seleccionar el elemento.

En la definición de la escucha de un evento, este tiene tres parámetros, el evento, la función que ejecutara cuando se detecte el evento y el modo **burbble (false)** que es el modo por defecto o el modo **capturing (true).**

```js
div3.addEventListener("click",funcion, false);
```

### Capturing

Hay otra fase del procesamiento de eventos llamada “captura”. Rara vez se usa en código real, pero a veces puede ser útil.

Los eventos del DOM estándar describen 3 fases de propagación de eventos:

1. Fase de captura: el evento se reduce al elemento.
2. Fase objetivo: el evento alcanzó el elemento objetivo.
3. Fase burbujeante: el evento emerge del elemento hacia todos sus padres.

Podemos decir que el evento en modo **captura,** es la contra parte del burbujeante, de tal manera que también se le denomina **goteo.** En este caso el evento se captura en el elemento padre y este lo desencadena los eventos en los elementos hijos.

Para verlo en nuestro ejemplo, para activar este modo de trabajo definimos:

```jsx
div1.addEventListener("click",funcion, false);
```

```jsx
<div id="div1">
  <div id="div2">
    <div id="div3">
      Hola
    </div>
  </div>
</div>
```

En este caso el evento se detecta en el elemento `div1` y después se ejecutará en los elementos `div2` y `div1`.

[Apuntes del dominio del DOM](https://denim-roll-f1a.notion.site/Manipulaci-n-del-DOM-con-JS-fdd3de3e7b444d19bf61b39d1bacb1e0)

### Pruebas en consola 

```js
// Agrega a la url un #algo luego prueba lo siguiene en consola:
location
location.hash
location.hash = "lolcat";
window.addEventListener("hashchange", () => {
  console.log(location.hash)
});
location.hash = "new hash";
location.hash = "#home"
```

- [Documentación: location](https://developer.mozilla.org/es/docs/Web/API/Location)
- [Documentación: hashchange](https://developer.mozilla.org/es/docs/Web/API/Window/hashchange_event)

## **9.** Mostrando y ocultando secciones

```js
location.hash = "#category"
location.hash = "#home"
```

## **10.** Error: carga duplicada de datos

## **11.** Filtrando películas por categoría

[Filtrar](https://developer.themoviedb.org/reference/discover-movie)

## **12.** Retos: scrollTop y DRY

[scrollTop property](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)

## **13.** Buscador de películas

[Buscar películas](https://developer.themoviedb.org/reference/search-movie)

## **14.** Retos: historial de navegación y página de tendencias


## **15.** Endpoint de detalles de una película

## **16.** Lista de películas recomendadas

[Recomendaciones](https://developer.themoviedb.org/reference/movie-recommendations)

## **17.** Toma el Curso Profesional de Consumo de API REST con JavaScript

## Otros apuntes

[Notion](https://www.notion.so/Curso-Pr-ctico-de-Consumo-de-API-REST-con-JavaScript-e98bd628bc0e4af481f47e839bc82692)

## Examen 📌
<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. ¿Cuál es la principal ventaja de usar Axios?

	- ✅ Reduce las líneas de código repetitivas para hacer consultas HTTP (baseURL, headers, params, etc.).

2. ¿Cómo escuchamos el evento de cambio de hash en la URL de nuestra aplicación?

	- ✅ `window.addEventListener(‘hashchange’, navigationFunction)`

3. ¿Cuál de los siguientes es un ejemplo de manipulación del DOM?

	- ✅
	```js
	const container = document.querySelector(‘container’);  
	const child = document.createElement(‘div’);  
	child.innerHTML = childContent  
	container.append(child)
	```

4. En ciertas vistas de tu aplicación aparece una flecha de ir atrás que nos lleva a la vista principal.

	Pero el equipo de QA reporta que al navegar entre vistas que no sean la principal (por ejemplo, de tendencias a detalles de una película) y luego usar el botón de ir atrás, el resultado no es el adecuado porque los usuarios terminan en el home y no en la vista anterior.
	
	¿Cómo lo solucionas?

	- ✅ history.back()

5. Al entrar a una URL específica de tu aplicación se hace una consulta a la API y renderiza información en el DOM.

	Pero el equipo de QA reporta que al navegar a otra sección y luego volver a la vista original, se repite el mismo proceso (consulta a la API + renderizado de información) y el usuario está viendo información duplicada.
	
	¿Cómo lo solucionas?

	- ✅ Limpiando el contenedor HTML donde se renderiza la información antes de cada consulta a la API.

6. ¿Por qué algunas APIs tienen versionamiento (v1, v2, etc.)?

	- ✅ Para evitar que el frontend u otras aplicaciones se rompan con el cambio de endpoints, pero permitiendo la migración a la versión más moderna.

6. ¿Es posible consumir más de una API REST (o hacer consultas a distintos endpoints de una misma API) en la misma ruta o vista frontend?

	- ✅ Verdadero

8. ¿Cómo ejecutamos un mismo código para distintas URLs cuando todas ellas empiezan con #search=?

	- ✅ `location.hash.startsWith(’#search’)`

9. ¿Qué es primero: frontend, backend o diseño?

	- ✅ Diseño

10. ¿Cómo evitamos que información sensible (como una API KEY) aparezca en nuestro repositorio de GitHub (aun siendo público)?

	- ✅ Separando la información sensible a un nuevo archivo y ese agregarlo al .gitignore.

11. "Dado el siguiente contenido HTML:

	```html
	<script src=""./secrets.js""></script>
	<script src=""./main.js""></script>
	```
	
	¿Puede el archivo main.js leer las variables ““globales”” del archivo secrets.js?"

	- ✅ Verdadero

12. ¿Es posible ejecutar cierto código de JavaScript SOLO cuando el hash de nuestra aplicación es #trends?

	- ✅ Verdadero

13. ¿Cómo modificamos el hash de la URL de nuestra aplicación?

	- ✅ `location.hash = “nuevoHash”`

14. ¿Por qué crear un archivo package.json si no utilizaremos dependencias de NPM?

	- ✅ Para agregar la información (para humanos) de nuestro proyecto.

15. ¿Es posible implementar flujos de navegación y distintas vistas en un solo archivo HTML?

	- ✅ Verdadero: es lo que llamamos Single Page Applications (SPA).

</details>