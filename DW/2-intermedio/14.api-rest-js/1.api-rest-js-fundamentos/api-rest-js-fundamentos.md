# Curso de API REST con Javascript: Fundamentos

> Curso desactualizado... 
> Inicio: `25-08-2023`
> Finalización: `01-09-2023`

## **1.** ¿Qué es una API REST?

### API 
Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permite que dos aplicaciones se comuniquen entre sí. Es una interfaz que define cómo los componentes de software deben interactuar y qué operaciones pueden realizar. En resumen, una API define los métodos y formatos de datos que se pueden utilizar para solicitar y enviar información entre aplicaciones.

En JavaScript, una API se utiliza para acceder a funcionalidades y servicios externos. Puedes utilizar una API para obtener datos de un servidor, enviar datos a un servidor, interactuar con servicios web, acceder a bases de datos y mucho más. En JavaScript, generalmente se utilizan las funciones proporcionadas por el lenguaje o las bibliotecas específicas para interactuar con una API.

### API REST

Una API REST (Representational State Transfer) es un tipo de API que se basa en los principios de la arquitectura REST. REST es un estilo arquitectónico que define un conjunto de restricciones y principios para el diseño de servicios web. 

Una API REST utiliza los métodos HTTP estándar, como GET, POST, PUT y DELETE, para realizar operaciones en los recursos disponibles en el servidor. Se utiliza el formato de intercambio de datos JSON para representar los datos que se envían y reciben.

La función principal de una API REST es permitir la comunicación y la interoperabilidad entre diferentes sistemas y aplicaciones a través de Internet. Proporciona una forma estandarizada de solicitar y enviar datos, lo que facilita la integración de distintos sistemas. Las API REST se utilizan ampliamente en el desarrollo web y móvil para construir aplicaciones que se conectan con servicios externos y acceden a sus datos.

Aquí tienes algunos ejemplos de API y API REST:

1. API de Twitter: Permite acceder a datos y funcionalidades de Twitter, como obtener tweets, publicar tweets, buscar usuarios, etc.

2. API de Google Maps: Proporciona funcionalidades para integrar mapas interactivos en aplicaciones web y móviles.

3. API REST de GitHub: Permite interactuar con los repositorios de GitHub, como obtener información de un repositorio, crear y actualizar problemas (issues), realizar operaciones de control de versiones, etc.

4. API REST de Stripe: Permite realizar pagos en línea y gestionar transacciones financieras en aplicaciones web.

Estos son solo algunos ejemplos, pero existen innumerables API y API REST disponibles para una amplia variedad de servicios y plataformas.

#### Principios de la arquitectura REST

Los principios fundamentales de la arquitectura REST son los siguientes:

1. **Cliente-servidor**: Existe una separación clara entre el cliente (que solicita recursos) y el servidor (que proporciona los recursos). Esta separación permite que ambos componentes evolucionen de forma independiente.
    
2. **Sin estado (stateless)**: Cada solicitud del cliente al servidor debe contener toda la información necesaria para entender y procesar la solicitud. El servidor no mantiene ningún estado relacionado con el cliente entre solicitudes. Cada solicitud se trata de forma aislada, lo que facilita la escalabilidad y la tolerancia a fallos.
    
3. **Interfaz uniforme**: La arquitectura REST define un conjunto de restricciones para la interfaz de comunicación entre el cliente y el servidor. Esto incluye el uso de métodos HTTP estándar, como GET, POST, PUT y DELETE, para realizar operaciones sobre los recursos. Además, se promueve el uso de URIs (Identificadores de Recursos Uniformes) para identificar los recursos y el uso de hipertexto para la navegación entre los recursos.
    
4. **Sistema en capas**: El sistema puede estar compuesto por varias capas, donde cada capa tiene una funcionalidad específica. Cada capa solo puede comunicarse directamente con la capa adyacente, lo que permite una mayor flexibilidad y escalabilidad.
    
5. **Cacheable (almacenamiento en caché)**: Las respuestas del servidor pueden ser almacenadas en caché en el cliente o en capas intermedias, como servidores proxy. Esto mejora la eficiencia y la capacidad de respuesta del sistema, reduciendo la carga en el servidor.
    

Estos principios de la arquitectura REST se centran en la simplicidad, la escalabilidad, la interoperabilidad y la capacidad de evolución de los sistemas, lo que los hace adecuados para el desarrollo de APIs y servicios web.

## **2.** Flujo de comunicación entre usuarios, frontend y backend

El flujo de comunicación entre usuarios, frontend y backend en una aplicación web típica sigue generalmente los siguientes pasos:

1. El usuario interactúa con la interfaz de usuario (frontend) de la aplicación a través de un navegador web. Esto implica hacer clic en botones, introducir datos en formularios, navegar por enlaces, etc.

2. El frontend captura las acciones del usuario y envía solicitudes al backend para obtener o enviar datos. Estas solicitudes se realizan utilizando protocolos de comunicación como HTTP.

3. La solicitud del frontend llega al servidor backend, donde se encuentra la lógica de la aplicación y los datos necesarios para procesarla.

4. El backend procesa la solicitud, realiza las operaciones necesarias, como consultar una base de datos, realizar cálculos, interactuar con otros servicios externos, etc.

5. Una vez que el backend ha procesado la solicitud y ha obtenido los datos necesarios, genera una respuesta y la envía de vuelta al frontend.

6. El frontend recibe la respuesta del backend, que puede contener información solicitada, mensajes de error, actualizaciones de estado, etc.

7. El frontend utiliza la respuesta recibida para actualizar la interfaz de usuario y mostrar los datos relevantes al usuario. Esto puede implicar la actualización de elementos en la página, mostrar mensajes de confirmación o error, cargar imágenes o cualquier otra acción necesaria para reflejar el resultado de la solicitud.

8. El usuario puede continuar interactuando con la interfaz de usuario repitiendo los pasos anteriores, lo que generará nuevas solicitudes al backend y así sucesivamente.

Este flujo de comunicación entre usuarios, frontend y backend permite que la aplicación web proporcione funcionalidades dinámicas y personalizadas, ya que el backend puede procesar las solicitudes, interactuar con bases de datos y servicios externos, y enviar respuestas adecuadas al frontend para su presentación al usuario.

Es importante destacar que este flujo puede variar dependiendo de la arquitectura y tecnologías utilizadas en la aplicación web, pero la idea general de interacción entre frontend y backend se mantiene en la mayoría de los casos.

### SSR 

SSR (Server-side Rendering) es una técnica de renderizado utilizada en aplicaciones web donde el servidor genera el contenido HTML completo y lo envía al cliente (navegador) como respuesta a una solicitud. En SSR, el servidor se encarga de procesar las plantillas, datos y lógica de la aplicación para generar una página HTML completa que se envía al cliente. Esto significa que cuando el cliente recibe la respuesta del servidor, ya tiene el contenido completo de la página listo para ser mostrado. SSR es especialmente útil para mejorar el rendimiento y la velocidad de carga inicial de la página, ya que el cliente no tiene que esperar a que se descargue y se ejecute el código JavaScript para mostrar el contenido.

### SPA 

SPA (Single Page Application) es un tipo de aplicación web en la que todas las interacciones y cambios de contenido ocurren en una sola página sin necesidad de recargarla completamente. En una SPA, el cliente (navegador) inicialmente carga una página HTML básica y luego utiliza JavaScript para cambiar el contenido de la página dinámicamente sin tener que realizar nuevas solicitudes al servidor. Las SPAs suelen utilizar APIs y tecnologías como AJAX para solicitar y enviar datos al servidor de forma asíncrona. Esto proporciona una experiencia de usuario más fluida y evita la recarga completa de la página, ya que solo se actualizan los componentes necesarios.

### Isomorfismo  

Isomorfismo (también conocido como renderizado universal o aplicaciones universales) es una técnica que combina elementos de SSR y SPA. El objetivo del isomorfismo es aprovechar lo mejor de ambos enfoques. En una aplicación isomórfica, el servidor renderiza la primera carga de la página utilizando SSR, lo que proporciona un contenido HTML completo al cliente. Luego, una vez que se ha cargado la página inicial, la aplicación se comporta como una SPA, utilizando JavaScript para actualizar el contenido de forma dinámica. Esto ofrece los beneficios de un tiempo de carga inicial rápido y una experiencia de usuario interactiva sin recargas de página completas. El isomorfismo permite que la aplicación sea renderizada tanto en el servidor como en el cliente, dependiendo del contexto y las necesidades específicas.

En resumen, SSR se refiere a la técnica de renderizar el contenido en el servidor antes de enviarlo al cliente, SPA se refiere a una aplicación web que carga una sola página HTML inicial y luego actualiza el contenido dinámicamente en el cliente, y el isomorfismo combina elementos de ambos enfoques para aprovechar los beneficios de rendimiento y experiencia de usuario.

## **3.** Consume tu primera API REST

Web que nos muestra una fotografía de un gato diferente, cada vez que le damos al botón random. Revisa el [proyecto actualizado](https://github.com/alevroses/api_get-post-delete-cats) 👈👀

Usando `fetch`:  

```js
const URL = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector("button");

function cat() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].url);

      const img = document.querySelector("img");
      img.src = data[0].url;
    });
}

window.addEventListener("load", cat);
button.addEventListener("click", cat);
```

Usando `async` y `await`:  

```js
const API = "https://api.thecatapi.com/v1/images/search";
const img = document.querySelector("img");
const button = document.querySelector("button");

async function cat() {
  const resolve = await fetch(API);
  const data = await resolve.json();
  console.log(data);
  img.src = data[0].url;
}

window.addEventListener("load", cat);
button.addEventListener("click", cat);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random kittens</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
      <h1>Random kittens</h1>
    </header>
    <main>
      <img alt="Kitten pictures" />
    </main>
    <button>Random</button>
    <script src="./main.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 80vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  margin: 0 auto;
  background-color: darkslateblue;
}

header {
  width: 100%;
  margin: 1rem;
}

h1 {
  display: flex;
  justify-content: center;
}

main {
  width: 80%;
  min-width: 30rem;
  max-width: 40rem;

  height: 80%;
  min-height: 30rem;
  max-height: 40rem;
  display: flex;
  justify-self: center;
}

img {
  width: 100%;
  height: 100%;
}

button {
  border: none;
  background-color: crimson;
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin: 1rem auto;
  cursor: pointer;
}
```

![](https://i.postimg.cc/K8NtmDby/random-kittens.png)


- [Apis Publicas](https://github.com/public-apis/public-apis)
- [The cat api](https://thecatapi.com/)
- [The cat api Documentation](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=gpN-ReBkp)
- [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## **4.** Endpoints y query parameters

### Endpoints  

En el contexto de desarrollo web y las API, los "endpoints" se refieren a las URL específicas de un servidor que se utilizan para acceder a recursos o realizar operaciones en una API. Cada endpoint representa una ruta única en el servidor que está asociada con una funcionalidad específica. Los endpoints se utilizan para realizar solicitudes a la API y obtener respuestas correspondientes.

Por ejemplo, supongamos que estás construyendo una API de libros. Algunos ejemplos de endpoints podrían ser:

- `/books`: Este endpoint podría utilizarse para obtener una lista de todos los libros disponibles.
- `/books/{id}`: Este endpoint podría utilizarse para obtener información detallada sobre un libro específico, donde `{id}` representa el identificador único del libro.
- `/books/{id}/reviews`: Este endpoint podría utilizarse para obtener las reseñas de un libro específico.

### Query parameters

En cuanto a los "query parameters" (parámetros de consulta), son una forma de proporcionar información adicional en una solicitud HTTP para filtrar, ordenar o limitar los resultados de una consulta. Los query parameters se agregan a una URL después del signo de interrogación (`?`) y se especifican en forma de pares clave-valor separados por ampersand (`&`).

Por ejemplo, considera la siguiente URL con query parameters:

```
/books?genre=fiction&author=John+Doe
```

En este caso, `genre` y `author` son query parameters. El valor `fiction` del parámetro `genre` indica que solo se desean libros de género ficción, y el valor `John+Doe` del parámetro `author` indica que solo se desean libros escritos por el autor John Doe.

Los query parameters son opcionales y pueden ser utilizados según las necesidades de la API. Permiten personalizar las solicitudes y obtener resultados más específicos. En el backend, se pueden utilizar los valores de los query parameters para filtrar la información en la base de datos o realizar otras operaciones relevantes antes de devolver los resultados al cliente.

En resumen, los endpoints son las URL específicas de un servidor que representan funcionalidades particulares de una API, mientras que los query parameters son parámetros opcionales que se agregan a una URL para personalizar las solicitudes y obtener resultados específicos.

### Diferencias entre Endpoint y Query Parameter

Un query parameter (parámetro de consulta) y un endpoint son dos conceptos diferentes pero relacionados en el contexto de las API web. 

Un endpoint es una URL específica a la que se envía una solicitud HTTP para acceder a un recurso o realizar una acción en un servidor. Por ejemplo, una API de usuarios puede tener un endpoint como "https://api.example.com/users" para obtener la lista de usuarios. Los endpoints representan el punto de acceso a diferentes recursos o funcionalidades proporcionados por una API.

Por otro lado, un query parameter es una parte de la URL que se utiliza para enviar información adicional en una solicitud HTTP GET. Los query parameters se agregan a la URL después del símbolo de interrogación "?" y se componen de una clave y un valor separados por el símbolo de igual "=" (por ejemplo, "?clave=valor"). Estos parámetros son opcionales y se utilizan para filtrar, ordenar o controlar la respuesta de la solicitud.

La diferencia principal entre un query parameter y un endpoint radica en su función y ubicación dentro de una URL. Mientras que el endpoint representa la ruta general para acceder a un recurso o realizar una acción, los query parameters proporcionan una forma de enviar información adicional junto con una solicitud HTTP GET para modificar o filtrar la respuesta del servidor.

En resumen, un endpoint es una URL que representa una funcionalidad o recurso específico, mientras que los query parameters son parámetros opcionales que se utilizan para enviar información adicional en una solicitud HTTP GET. Ambos son elementos importantes en el diseño y desarrollo de API web.

### Solución PLATZI  

```html
<body>
  <h1>Random kittens</h1>

  <img id="img1" width="150" alt="Foto gatito aleatorio">
  <img id="img2" width="150" alt="Foto gatito aleatorio">
  <img id="img3" width="150" alt="Foto gatito aleatorio">
  <button onclick="reload()">Recargar</button> 👈👀

  <script src="./main.js"></script>
</body>
```

```js
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';

async function reload() {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data)
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
}

reload();
```

### Solución personal 

```html
<body>
  <header>
    <h1>Random kittens</h1>
  </header>
  <main>
    <!-- Content: Figure + img -->
  </main>
  <button onclick="reload()">Random</button>
  
  <script src="./main.js"></script>
</body>
```

A pesar de que solo necesitamos 3 imágenes, la API nos da 10,sí que es con lo que trabajaremos:  
```js
const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3";

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();

  //console.log(data);
  const container = document.querySelector('main')
  container.innerHTML = '';
  
  data.map((img) => {
    const content = document.createElement("figure");
    content.innerHTML = `<img src="${img.url}" alt="Kitten pictures">`;
    container.append(content)
  });
}

reload();
//window.addEventListener('load', reload)
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 3fr auto;
  background-color: darkslateblue;
  padding: 1rem;
}

header {
  width: 80vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

h1 {
  display: flex;
  justify-content: center;
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(160px, 100%), 1fr));
  gap: 1rem;
  width: 80vw;
  margin: 1rem auto;
}

img {
  width: 100%;
  height: 100%;
}

button {
  border: none;
  background-color: crimson;
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  cursor: pointer;
  justify-items: ;
}
```

### Dato 

Es recomendable colocar los query parameters en una variable de manera ordenada en un array:

```js
const querystring = [
  '?',
  'limit=3',
  '&order=Desc',
].join('');

const URL = `https://api.thecatapi.com/v1/images/search${querystring}`;
```

También:  
```js
const URL = [
  "https://api.thecatapi.com/v1/images/search",
  "?limit=3",
  "&order=Desc",
].join("");
```

## **5.** ¿Qué son los HTTP Status Codes?

Ver: [[asincronismo-con-js#8. XMLHTTPRequest#Códigos de estados del servidor]]  

Los códigos de estado (status codes) del servidor son una parte fundamental del protocolo HTTP, ya que indican el **resultado de una solicitud realizada por un cliente al servidor**.

Los códigos de estado más comunes:

- **`1xx` Información** → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
    - 100: Continuar
    - 101: Cambio de protocolo
- **`2xx` Éxito** → Indican que la petición fue recibida, aceptada y procesada correctamente.
    - 200: OK
    - 201: Creado
    - 202: Aceptado
    - 204: Sin contenido
- **`3xx` Redirección** → Indican que hay que tomar acciones adicionales para completar la solicitud.
    - 300: Múltiples opciones
    - 301: Movido permanentemente
    - 302: Encontrado
    - 304: No modificado
    - 307: Redirección temporal
    - 308: Redirección permanente
- **`4xx` Errores del cliente** → Indican errores del lado del cliente que hizo mal una solicitud.
    - 400: Solicitud incorrecta
    - 401: No autorizado
    - 403: Prohibido
    - 404: No encontrado
    - 405: Método no permitido
    - 408: Tiempo de espera de solicitud
    - 429: Demasiadas solicitudes
- **`5xx` Errores del servidor** → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.
    - 500: Error interno del servidor
    - 501: No implementado
    - 502: Puerta de enlace incorrecta
    - 503: Servicio no disponible
    - 504: Tiempo de espera de la puerta de enlace
    - 505: Versión de HTTP no compatible

### Los códigos más comunes a la hora de interactuar con una API son:

- **`200`** → _OK_ → Indica que todo está correcto.
- **`201`** → _Created_ → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
- **`204`** → _No Content_ → Indica que la solicitud se completó correctamente, pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
- **`400`** → _Bad Request_ → Indica que la solicitud del cliente es incorrecta o que ha habido un error en su sintaxis.
- **`401`** → _Unauthorized_ → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
- **`403`** → _Forbidden_ → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
- **`404`** → _Not Found_ → Indica que no existe el recurso que se está intentando acceder.
- **`500`** → _Internal Server Error_ → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.
- **`503`** → _Service Unavailable_: indica que el servidor no está disponible temporalmente para procesar la solicitud.


### HTTP status ranges in a nutshell: 

|HTTP status ranges in a nutshell: |Los rangos de estado HTTP en pocas palabras:|
|----------------------------------|---------------------------|
|1xx: hold on                      |1xx: espera|
|2xx: here you go                  |2xx: aquí tienes|
|3xx: go away                      |3xx: vete|
|4xx: you fucked up                |4xx: la cagaste|
|5xx: I fucked up                  |5xx: La cagué|


### Error 418  

El código de estado HTTP 418, "I'm a teapot" (Soy una tetera), es un código de estado de error humorístico y no estándar que se utiliza en situaciones inusuales o para fines de prueba. No tiene un significado específico en el protocolo HTTP y no está destinado a ser implementado en aplicaciones web reales.

El código de estado HTTP 418 fue definido en la especificación de extensión del protocolo Hyper Text Coffee Pot Control Protocol (HTCPCP). Esta especificación fue creada como una broma en 1998, haciendo referencia a la idea de que las teteras podrían ser dispositivos controlables a través de HTTP.

En resumen, el código de estado 418 no tiene una utilidad real en el protocolo HTTP y se utiliza principalmente como una broma o para pruebas. En aplicaciones web reales, los códigos de estado HTTP más comunes son los que comienzan con 1, 2, 3 o 4, como 200 (OK), 404 (No encontrado), 500 (Error del servidor), entre otros.

Es importante tener en cuenta que el código de estado 418 no debe ser utilizado en aplicaciones web reales, ya que no es reconocido como un código de estado válido y puede causar confusión en los clientes y servidores HTTP.

- [HTTP STATUS DOGS](https://httpstatusdogs.com/)
- [Error: 418](https://www.youtube.com/watch?v=mH4s5q_DpX4)



## **6.** ¿Qué es una API KEY?

Una API KEY, es un código alfanumérico único que se utiliza para **autenticar** y **autorizar** el acceso a una API. 

> Es una forma de identificación y control de acceso que permite a los desarrolladores o usuarios acceder a los recursos protegidos por la API.

Una API KEY actúa como una llave o contraseña que se incluye en las solicitudes realizadas a una API. Al proporcionar la API KEY correcta, el servidor de la API puede verificar la autenticidad y la autorización del solicitante y permitirle acceder a los recursos o realizar determinadas acciones.

La autenticación y la autorización son dos conceptos fundamentales en la seguridad de las API. Aunque están relacionados, cumplen funciones diferentes:

### Autenticación  

La autenticación verifica la identidad del usuario o la aplicación que intenta acceder a la API. El objetivo es asegurarse de que el solicitante sea quien dice ser. Hay diferentes métodos comunes de autenticación en las API:

   - API Key: Se genera una clave de API única y se proporciona al usuario o la aplicación. El solicitante debe incluir la clave de API en cada solicitud para demostrar su identidad.

   - Tokens de acceso: Utilizando protocolos como OAuth, se emiten tokens de acceso temporales después de que el usuario o la aplicación autentica exitosamente. Estos tokens se utilizan para identificar al solicitante en las solicitudes siguientes.

   - Autenticación basada en cookies o sesiones: Se utiliza un mecanismo de sesión en el que el servidor genera y mantiene una cookie o un identificador de sesión, que se envía en las solicitudes para autenticar al usuario.

   - Autenticación basada en JWT (JSON Web Tokens): Se utiliza un token en formato JWT que contiene información codificada y firmada sobre el usuario o la aplicación. El servidor verifica la autenticidad y la integridad del token para autenticar al solicitante.


### Autorización  

Una vez que el solicitante ha sido autenticado, la autorización determina qué acciones o recursos tiene permitido acceder. La autorización define los permisos y los niveles de acceso para diferentes usuarios o roles. Algunos enfoques comunes para la autorización en las API son:

   - Roles y permisos: Se definen roles predefinidos con diferentes permisos. Después de la autenticación, el servidor verifica si el usuario o la aplicación tiene los permisos adecuados para realizar la acción solicitada.

   - ACL (Access Control List): Se utiliza una lista de control de acceso que asigna permisos específicos a usuarios o aplicaciones individuales para cada recurso o acción.

   - Reglas de autorización personalizadas: Se implementan reglas lógicas específicas para determinar la autorización basada en criterios personalizados definidos por la API.


El propósito principal de utilizar una API KEY es controlar el acceso a la API y asegurarse de que solo los usuarios autorizados puedan utilizarla. Esto permite a los proveedores de la API monitorear y limitar el uso de sus recursos, y también les brinda la capacidad de revocar o regenerar las claves en caso de abuso o compromiso de seguridad.

### Formas de enviar una API KEY en una solicitud  

#### Query Parameter (Parámetro de consulta)

La API Key se incluye en la URL de la solicitud como un parámetro de consulta. 

Por ejemplo: 

```
https://api.example.com/endpoint?api_key=ABC123
``` 

Aquí, "api_key" es el nombre del parámetro y "ABC123" es el valor de la API Key. Esta forma es simple y fácil de implementar, ya que solo se necesita agregar el parámetro a la URL. Sin embargo, ten en cuenta que el uso de parámetros de consulta puede exponer la API Key en los registros del servidor, en los historiales de navegación y en otras ubicaciones sensibles.

#### Authorization Header (Encabezado de autorización)

La API Key se envía en el encabezado de autorización de la solicitud HTTP. 

Por ejemplo: 

```
Authorization: X-API-Key ABC123
```

Aquí, "X-API-Key" es el nombre del encabezado y "ABC123" es el valor de la API Key. Esta forma es más segura, ya que la API Key no se muestra directamente en la URL y no queda expuesta en lugares sensibles. Además, el encabezado de autorización es una convención comúnmente utilizada para enviar información de autenticación y autorización en las solicitudes HTTP.


```js
const apiKey = "ABC123";
const apiUrl = "https://api.example.com/weather";

fetch(apiUrl, {
  headers: {
    "Authorization": `X-API-Key ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Hacer algo con la respuesta de la API
    console.log(data);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error("Error:", error);
  });
```


La API KEY se envía generalmente como un encabezado o un parámetro en las solicitudes HTTP realizadas a la API. Dependiendo de la API y su implementación, la forma exacta de incluir la API KEY puede variar. Algunas APIs requieren que se incluya la API KEY en cada solicitud, mientras que otras pueden utilizar mecanismos de autenticación más avanzados, como OAuth, que generan tokens de acceso temporales en lugar de API KEYs estáticas.

#### Otras alternativas  

1. Authorization: Basic: Es un esquema de autenticación básico que se utiliza para enviar credenciales en una solicitud HTTP. Consiste en enviar el nombre de usuario y la contraseña codificados en base64 en el encabezado de autorización. Por ejemplo: `Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l`. Sin embargo, este método no es muy seguro, ya que las credenciales se envían en texto plano y pueden ser interceptadas si no se utiliza una conexión segura (HTTPS).

2. Authorization: Bearer Token: Se utiliza para enviar tokens de acceso en el encabezado de autorización. Los tokens de acceso son generados por un servidor de autenticación y se utilizan para autenticar y autorizar las solicitudes a una API. Por ejemplo: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`. Los tokens de acceso pueden tener una duración limitada y deben renovarse o solicitarse nuevamente una vez que expiran.

3. OAuth 2.0: Es un protocolo de autorización estándar que permite a una aplicación obtener acceso limitado a una cuenta de usuario en un servicio de terceros, sin compartir las credenciales de inicio de sesión. En lugar de compartir las credenciales, OAuth 2.0 utiliza tokens de acceso para permitir que una aplicación acceda a los recursos protegidos en nombre del usuario. El flujo de OAuth 2.0 implica la interacción entre la aplicación, el servidor de autorización y el servidor de recursos para obtener y utilizar los tokens de acceso.

4. Access Key + Secret Key: Este método se utiliza comúnmente en servicios de almacenamiento en la nube y API de proveedores. Consiste en utilizar un par de claves: una clave de acceso (Access Key) y una clave secreta (Secret Key). La clave de acceso se utiliza para identificar la aplicación o cliente que realiza la solicitud, mientras que la clave secreta se utiliza como una firma para autenticar la solicitud. Estas claves se mantienen en secreto y se utilizan para generar una firma criptográfica que se envía junto con la solicitud para demostrar la autenticidad de la solicitud.

### Application Based Authentication  

La autenticación basada en la aplicación se refiere a un método de autenticación donde la identidad y los permisos de acceso se otorgan a nivel de la aplicación en lugar de a nivel de usuario. En este enfoque, la aplicación en sí misma se autentica utilizando credenciales específicas de la aplicación, como una clave de API o un certificado digital. Una vez autenticada la aplicación, se le otorgan permisos y se le permite acceder a los recursos o realizar acciones en nombre de la aplicación. Este tipo de autenticación es comúnmente utilizado en escenarios de integración de API o servicios, donde una aplicación necesita acceder a recursos externos en nombre de los usuarios o realizar tareas automatizadas.

### User Based Authentication  

La autenticación basada en el usuario se refiere a un método de autenticación donde la identidad y los permisos de acceso se otorgan a nivel de usuario individual. En este enfoque, cada usuario tiene sus propias credenciales únicas, como un nombre de usuario y una contraseña, que se utilizan para autenticar al usuario y verificar su identidad. Una vez autenticado, el usuario tiene acceso a los recursos y funcionalidades asignados a su cuenta específica. Este tipo de autenticación es común en aplicaciones web y móviles, donde los usuarios se registran con sus propias cuentas y tienen acceso personalizado a los datos y funciones de la aplicación.



### Usando una API KEY 

Para obtener una key de **The cat api** debes dirigirte a Pricing y luego a [GignUp for Free](https://thecatapi.com/signup), colocas tu correo y una breve descripción de lo que harás con la API, luego te enviarán un correo con la key solicitada. 

```js
const querystring = ["?", "limit=3"].join("");

const API_URL = `https://api.thecatapi.com/v1/images/search${querystring}&api_key=lover_xdW5fCl0zzlol50jHsAhxdFJV6jC9RT3YY5lolcP78HvGH80daxzY`; 👈👀

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();

  //console.log(data);
  const container = document.querySelector("main");
  container.innerHTML = "";

  data.map((img) => {
    const content = document.createElement("figure");
    content.innerHTML = `<img src="${img.url}" alt="Kitten pictures">`;
    container.append(content);
  });
}

reload();
```

Esto nos mostrará 3 imágenes, aunque ya no se actualiza al recargar ni al picarle al botón Random. Para que funcione nuevamente debemos quitarle `"&order=Desc"` a la primera `const`. 

- [4 Most Used REST API Authentication Methods](https://blog.restcase.com/4-most-used-rest-api-authentication-methods/)

## **7.** Maquetación del proyecto

Mi código...  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Kittens</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Random Kittens</h1>
    <main id="random">
      <h2>Kittens List</h2>
      <section class="container">
        <!-- Content ...
        <figure>
          <img id="img1" width="150" alt="Random kittens" />
          <img class="save" src="./heart.svg" alt="Heart icon">
        </figure> -->
    </section>

      <button class="reload" onclick="reload()">Random</button>
    </main>

    <section class="favorites" id="favorites">
      <h2>Kittens Favorites</h2>
      <figure>
        <img id="img1" width="150" alt="Random kittens" />
        <button class="delete">Delete</button>
      </figure>
    </section>

    <script src="./main.js"></script>
  </body>
</html>
```

```js
const querystring = ["?", "limit=6"].join("");

const API_URL = `https://api.thecatapi.com/v1/images/search${querystring}&api_key=lover_W59yADfCl0hFZEyJV6jC9RT3YY5Q43H80daxZBiTzY`;

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();

  //console.log(data);
  const container = document.querySelector(".container");
  container.innerHTML = "";

  data.map((img) => {
    const content = document.createElement("figure");
    content.innerHTML = `
      <img src="${img.url}" alt="Kitten pictures">
      <img class="save" src="./heart.svg" alt="Heart icon">
    `;
    container.append(content);
  });
}

reload();
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 90vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 3fr auto;
  background-color: #090b10;
  padding: 1rem;
  margin: 0 auto;
}

main {
  width: 80vw;
  height: auto;
  margin: 0 auto 1rem;
}

h1, h2 {
  width: 80vw;
  display: flex;
  justify-content: center;
  justify-self: center;
  color: #cbd5e1;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(160px, 100%), 1fr));
  gap: 1rem;
  /* width: 80vw; */
  margin: 1rem auto;
}

figure {
  position: relative; ✨
  /* display: inline-block; */
}

img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  /* display: block; */
}

button {
  background-color: #EF002E;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}

.save {
  width: 2.6rem;
  height: 2rem;
  position: absolute; ✨
  top: 10px;
  right: 0;
  cursor: pointer;
}

.reload {
  width: 5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.delete {
  width: 5rem;
  height: 2rem;
}

.favorites {
  width: 80vw;
  height: auto;
}
```

[Código de la clase](https://github.com/platzi/consumo-api-rest-javascript/tree/b67034778148ecbec54241e476cec9b74427ce21)


## **8.** ¿Qué son los Métodos HTTP?

**Verbos**: También conocidos como métodos HTTP, indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor. 

### Los Verbos HTTP más comunes son:

1. **GET**: Recupera los datos identificados por el URI (Uniform Resource Identifier) proporcionado. Por lo general, se utiliza para solicitar información.

2. **POST**: Envía datos al servidor para crear o actualizar un recurso. Se utiliza para enviar información de formularios, subir archivos, etc.

3. **PUT**: Actualiza los datos identificados por el URI proporcionado. Se utiliza para actualizar la información existente.

4. **DELETE**: Elimina el recurso identificado por el URI proporcionado.

5. **HEAD**: Recupera los encabezados de respuesta que se devolverían si se realizara una solicitud GET al URI proporcionado. Se utiliza para verificar la existencia de un recurso y obtener información sobre él, sin descargar el cuerpo completo de la respuesta.

6. **OPTIONS**: Recupera los métodos HTTP que el servidor admite para un recurso determinado. Se utiliza para obtener información sobre los métodos disponibles para interactuar con un recurso.

7. **PATCH**: Realiza una actualización parcial de los datos identificados por el URI proporcionado. Es similar a PUT, pero se utiliza para realizar pequeñas actualizaciones en lugar de reemplazar completamente un recurso.

Estos son los verbos HTTP más comunes, pero también existen otros menos utilizados, como TRACE, CONNECT, PROPFIND, etc.


- Verbos [[asincronismo-con-js#8. XMLHTTPRequest#Características del protocolo HTTP#Los Verbos HTTP mas comunes son]] 
- Uso de Get, Post, Put y Delete [[get-post-put-delete]]

## **9.** GET: leyendo kittens favoritos

```js
const query_string = ["?", "limit=2"].join("");
const API_KEY = [
  "&",
  "api_key=",
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY",
].join("");

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${query_string}${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites${query_string}${API_KEY}`;

async function load_random() {
  try {
    const response = await fetch(API_URL_RANDOM);
    const container = document.querySelector(".container");
    const request_failed = document.createElement("span");

    if (response.status === 200) {
      const data = await response.json();

      /* console.log("Random");
      console.log(data); */
      container.innerHTML = "";

      data.map((img) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img src="${img.url}" alt="Kitten pictures">
        <img class="save" src="./heart.svg" alt="Heart icon">
        `;
        container.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function load_favorites() {
  try {
    const response = await fetch(API_URL_RANDOM);
    const request_failed = document.createElement("span");

    if (response.status === 200) {
      const data = await response.json();

      /* console.log("Random");
      console.log(data); */
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

load_random();
load_favorites();
```

```css
span {
  background-color: #4f46e5;
  color: #cbd5e1;
  padding: 1rem;
}
```

[Documentación](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=mkzf_eYzV)

## **10.** POST: guardando kittens favoritos

Mi código...   
```js
const query_string = ["?", "limit=2"].join("");
const API_KEY = [
  "&",
  "api_key=",
  "lover_W59yEyJV6jC9RT3YYGH80daxZBiTzY",
].join("");

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${query_string}${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites${query_string}${API_KEY}`;

async function load_random() {
  const request_failed = document.createElement("span");
  const container = document.querySelector(".container");
  try {
    const response = await fetch(API_URL_RANDOM);

    if (response.status === 200) {
      const data = await response.json();

      /* console.log("Random");
      console.log(data); */
      container.innerHTML = "";
      let n_buttons = 1;

      data.map((img) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img src="${img.url}" alt="Kitten pictures">
        <img class="save btn${n_buttons++}" onclick="save_favorites()" src="./heart.svg" alt="Heart icon">
        `;
        container.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function load_favorites() {
  const container = document.querySelector(".container");
  const request_failed = document.createElement("span");

  try {
    const response = await fetch(API_URL_FAVORITES);

    if (response.status === 200) {
      const data = await response.json();

      console.log("Favorites");
      console.log(data);
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function save_favorites() {
  const favorite_cat = document.querySelector(".favorite__cat");
  const request_failed = document.createElement("span");

  try {
    const response = await fetch(API_URL_FAVORITES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        /* "x-api-key": API_KEY, */
      },
      body: JSON.stringify({
        image_id: "dje", //cma.jpg
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(response);
      console.log(data);
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    favorite_cat.append(request_failed);
  }
}

load_random();
load_favorites();
save_favorites();
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Kittens</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Random Kittens</h1>
    <main id="random">
      <h2>Kittens List</h2>
      <section class="container">
        <!-- 
        <figure>
          <img id="img1" width="150" alt="Random kittens" />
          <img class="save" src="./heart.svg" alt="Heart icon">
        </figure> -->
      </section>

      <button class="reload" onclick="load_random()">Random</button>
    </main>

    <section class="favorites" id="favorites">
      <h2>Kittens Favorites</h2>
      <div class="favorite__cat">
        <!-- 
        <figure>
          <img id="img1" width="150" alt="Random kittens" />
          <button class="delete">Delete</button>
        </figure> -->
      </div>
    </section>

    <script src="./main.js"></script>
  </body>
</html>
```

[Código de la clase](https://github.com/platzi/consumo-api-rest-javascript/blob/4b9b69002c84dfd0a4e3dd1a9b543f22b0398eb3/main.js)

## **11.** Consultas a la API para escribir HTML dinámico

Usando mi propia API KEY nos muestra una lista de 100 imágenes como favoritos, pero usando la API KEY de la clase funciona bien. 

```js
const query_string = ["?", "limit=2"].join("");
const API_KEY = [
  //"?", ? &
  "api_key=",
  "love_W59yADfElmhFZEyJV6jC9RT3YY5Q43cP7GH80dax",
].join("");

// Api Key que si funciona: 
// c08d415f-dea7-4a38-bb28-7b2188202e46 👈👀

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${query_string}&${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites?${API_KEY}`;
const API_URL_IMAGES = `https://api.thecatapi.com/v1/images?${API_KEY}`;

const request_failed = document.createElement("span");
const container = document.querySelector(".container");
const favorite_cat = document.querySelector(".favorite__cat");

async function load_random() {
  try {
    const response = await fetch(API_URL_RANDOM);

    if (response.status === 200) {
      const data = await response.json();

      console.log("Random");
      console.log(data);
      container.innerHTML = "";
      let n = 0;

      data.map((img) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img class="img${n++}" src="${img.url}" alt="Kitten pictures">
        <img class="save btn${n}" onclick="save_favorites('${
          img.id
        }')" src="./svg/heart.svg" alt="Heart icon"> 
        `;
        container.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function load_favorites() {
  try {
    const response = await fetch(API_URL_FAVORITES);

    if (response.status === 200) {
      const data = await response.json();

      console.log("Favorites");
      console.log(data);

      let n = 0;

      data.forEach((kitten) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img class="img${n++}" src="${kitten.image.url}" alt="Kitten pictures">
        <img class="save btn${n}"    src="./svg/delete.svg" alt="Delete icon">
        `;

        favorite_cat.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function save_favorites(id) {
  try {
    const response = await fetch(API_URL_FAVORITES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify({
        image_id: id, //cma.jpg
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      //console.log('Save');
      console.log("Save ", response);
      console.log(data);
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    favorite_cat.append(request_failed);
  }
}

load_random();
load_favorites();
//save_favorites();
```

### append() vs appendChild()

En JavaScript, tanto el método `append()` como el método `appendChild()` se utilizan para agregar elementos a un elemento padre en el DOM (Documento Object Model). Sin embargo, hay una diferencia clave entre ellos.

El método `append()` es un método más reciente y más versátil que `appendChild()`. Puede aceptar múltiples argumentos separados por comas y también puede aceptar objetos DOM, cadenas de texto y otros tipos de datos. Estos argumentos se agregan al final del elemento padre en el orden en que se proporcionan.

Aquí hay un ejemplo de cómo se usa el método `append()`:

```js
const parentElement = document.getElementById('my-parent-element');
const childElement1 = document.createElement('div');
const childElement2 = document.createElement('p');
const textNode = document.createTextNode('Hello, world!');

parentElement.append(childElement1, childElement2, textNode);
```

En este ejemplo, el método `append()` agrega `childElement1`, `childElement2` y `textNode` al final del elemento padre `parentElement`.

Por otro lado, el método `appendChild()` es un método más antiguo y solo puede aceptar un solo argumento, que debe ser un objeto DOM. Este método agrega el elemento proporcionado como argumento al final del elemento padre.

Aquí hay un ejemplo de cómo se usa el método `appendChild()`:

```js
const parentElement = document.getElementById('my-parent-element');
const childElement = document.createElement('div');

parentElement.appendChild(childElement);
```

En este ejemplo, el método `appendChild()` agrega `childElement` al final del elemento padre `parentElement`.

En resumen, la principal diferencia entre `append()` y `appendChild()` radica en su capacidad para aceptar múltiples argumentos y tipos de datos. `append()` es más flexible y puede agregar varios elementos y tipos de datos al final del elemento padre, mientras que `appendChild()` solo puede agregar un objeto DOM al final del elemento padre.

## **12.** DELETE: borrando kittens favoritos

Si logras borrar las imágenes házmelo saber en este [comentario](https://platzi.com/discusiones/2985-api/332494-nuevas-api_key-al-usar-una-api_key-creada-por-estos-dias-no-funciona-lo-de-anadir-favoritos-pero-si-uso-la-api_key-del-profe-magicame/), de todas maneras dejo mi código para que lo veas. 

```js
const query_string = ["?", "limit=2"].join("");
const API_KEY = [
  //"?", ? &
  "api_key=",
  "loveAElmhFZEyJV6jYY5Q43cP78HvD8",
].join("");

// Para este caso la api del profe ya no funciona: 
// c08d415f-dea7-4a38-bb28-7b2188202e46

const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search${query_string}&${API_KEY}`;
const API_URL_FAVORITES = `https://api.thecatapi.com/v1/favourites?${API_KEY}`;
//const API_URL_IMAGES = `https://api.thecatapi.com/v1/images?${API_KEY}`;
const API_URL_FAVORITES_DELETE = (id) =>
  `https://api.thecatapi.com/v1/favourites/:${id}?${API_KEY}`;

const request_failed = document.createElement("span");
const container = document.querySelector(".container");
const favorite_cat = document.querySelector(".favorite__cat");

async function load_random() {
  try {
    const response = await fetch(API_URL_RANDOM);

    if (response.status === 200) {
      const data = await response.json();

      console.log("Random");
      console.log(data);
      container.innerHTML = "";
      let n = 0;

      data.map((img) => {
        const content = document.createElement("figure");
        content.innerHTML = `
        <img class="img${n++}" src="${img.url}" alt="Kitten pictures">
        <img class="save btn${n}" onclick="save_favorites('${
          img.id
        }')" src="./svg/heart.svg" alt="Heart icon"> 
        `;
        container.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function load_favorites() {
  try {
    const response = await fetch(API_URL_FAVORITES);

    if (response.status === 200) {
      const data = await response.json();

      console.log("Favorites");
      console.log(data);

      let n = 0;

      const content = document.createElement("figure");
      content.innerHTML = "";

      data.forEach((kitten) => {
        content.innerHTML = `
        <img class="img${n++}" src="${kitten.image.url}" alt="Kitten pictures">
        <img class="delete btn${n}" onclick="delete_favorites(${kitten.id.toString()})" src="./svg/delete.svg" alt="Delete icon">
        `;
        //console.log(kitten.id);
        favorite_cat.append(content);
      });
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      container.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    container.append(request_failed);
  }
}

async function save_favorites(id) {
  try {
    const response = await fetch(API_URL_FAVORITES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify({
        image_id: id, //cma.jpg
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      //console.log('Save');
      console.log("Save ", response);
      console.log(data);

      load_favorites();
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    favorite_cat.append(request_failed);
  }
}

async function delete_favorites(id) {
  try {
    const response = await fetch(API_URL_FAVORITES_DELETE(id), {
      method: "DELETE",
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log("Delete", response);
      console.log(data);

      load_favorites();
    } else {
      request_failed.innerText = `Request failed. Status code: ${response.status}`;
      favorite_cat.append(request_failed);
    }
  } catch (e) {
    request_failed.innerText = `An error occurred: ${e.message}`;
    favorite_cat.append(request_failed);
  }
}

load_random();
load_favorites();
//save_favorites();
```

- [Código de la clase](https://github.com/platzi/consumo-api-rest-javascript/tree/059992c2290a96254fc8ed53c7668debe6aef1a7)
- [Documentación](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=mkzf_eYzV)

## **13.** ¿Qué son los Headers HTTP?

En JavaScript, los encabezados (headers) se utilizan para comunicarse con una API (Application Programming Interface) y enviar información adicional junto con una solicitud HTTP. Los encabezados son pares clave-valor que se incluyen en la solicitud para proporcionar detalles sobre la solicitud o para controlar el comportamiento de la API.

Cuando interactúas con una API, es posible que necesites enviar ciertos encabezados para cumplir con los requisitos de autenticación, especificar el formato de los datos que esperas recibir o proporcionar metadata adicional.

Puedes agregar encabezados a una solicitud HTTP utilizando el objeto `Headers` (o encabezados) en JavaScript. Aquí hay un ejemplo básico de cómo puedes crear y agregar encabezados a una solicitud:

```js
// Crear un objeto Headers
const headers = new Headers();

// Agregar encabezados a la solicitud
headers.append('Content-Type', 'application/json'); // Establece el tipo de contenido como JSON
headers.append('Authorization', 'Bearer your_token'); // Agrega un encabezado de autorización con un token de acceso

// Realizar una solicitud HTTP utilizando los encabezados
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: headers
})
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos de la respuesta
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
  });
```

En este ejemplo, creamos un objeto `Headers` y luego usamos el método `append` para agregar dos encabezados: `Content-Type` y `Authorization`. El encabezado `Content-Type` se establece en `application/json`, lo que indica que esperamos recibir datos en formato JSON. El encabezado `Authorization` se utiliza para autenticar la solicitud y se establece con un token de acceso.

Luego, utilizamos la función `fetch` para realizar una solicitud GET a la URL `https://api.example.com/data` y pasamos el objeto `Headers` en la propiedad `headers` de la configuración de la solicitud.

Recuerda que los encabezados específicos que debes enviar pueden variar según la API con la que estés trabajando. Deberás consultar la documentación de la API para conocer los encabezados necesarios y su formato adecuado.

### Tipos de Headers  

Los encabezados HTTP son parámetros que se envían en una transacción HTTP y contienen información relevante sobre el estado de la transacción en curso.

Cuando un cliente realiza una solicitud a un servidor, este puede enviar información adicional en el encabezado de la solicitud. Esta información puede incluir detalles sobre el recurso solicitado y datos sobre el cliente que realiza la solicitud, como autenticación y políticas de caché.

#### Request Headers

Algunos ejemplos de encabezados de solicitud son:

- `Accept`: Informa al servidor sobre el tipo de datos que el cliente puede entender o aceptar. Por ejemplo, se puede especificar que se acepta contenido en formato HTML, XML o imágenes.  
```js
Accept: text/html 
Accept: application/xhtml+xml 
Accept: image/png
```

- `Accept-Encoding`: Envía información sobre el tipo de codificación que el cliente puede entender, como la compresión gzip.  
```js
Accept-Encoding: gzip
Accept-Encoding: gzip, compress
```

- `Authorization`: Se utiliza para enviar credenciales al servidor y determinar si el cliente tiene acceso a ciertos recursos. Puede incluir diferentes tipos de autenticación, como Basic o Bearer tokens.  
```js
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l 
Authorization: Bearer eyYWxhZGRpbjpvcGVuc2VzYW1l
```

- `Accept-Language`: Permite al servidor conocer el idioma preferido por el cliente para enviar respuestas localizadas, como horarios, fechas o medidas específicas del idioma.
```js
Accept-Language: fr-CH
Accept-Language: en-US
```

#### Response Headers  

Por otro lado, los encabezados de respuesta son enviados por el servidor en su respuesta al cliente y proporcionan información sobre el estado de la solicitud. 

Algunos ejemplos de encabezados de respuesta son:

- `Age`: Contiene información sobre el tiempo que un objeto ha estado en caché.
```js
Age: 24
```

- `Server`: Describe el software utilizado por el servidor que maneja la solicitud.  
```js
Server: Apache/2.4.1 (Unix)
```

- `Location`: Indica la URL a la que se debe redirigir una página, especialmente en respuestas de redireccionamiento.

#### Representation Headers  

Los Representation Headers (encabezados de representación) son un tipo de encabezados HTTP que proporcionan información sobre el cuerpo de una solicitud o respuesta. Estos encabezados están relacionados con la representación del contenido, es decir, con el formato y el tipo de datos que se envían o reciben.

Aquí hay algunos ejemplos de Representation Headers:

- `Content-Type`: Este encabezado indica el tipo de contenido o formato de archivo que se envía en el cuerpo de una solicitud o respuesta. Por ejemplo, se puede establecer como "application/json" para indicar que el contenido es un objeto JSON, o "text/html" para indicar que el contenido es una página HTML.   
```js
Content-Type: text/html; charset=UTF-8
```

- `Content-Encoding`: Este encabezado se utiliza para indicar la codificación aplicada al cuerpo de una respuesta. Puede especificar la compresión utilizada, como "gzip" o "deflate", lo que permite al cliente descomprimir correctamente el contenido.   
```js
Content-Encoding: compress 
Content-Encoding: gzip
```


- `Content-Language`: Este encabezado indica el idioma principal o los idiomas en los que está escrito el contenido del cuerpo de la respuesta. Ayuda a los clientes a determinar el idioma preferido para presentar la respuesta al usuario.  
```js
Content-Language: en-US
Content-Language: en-CA
```

- `Content-Length`: Este encabezado indica la longitud en bytes del cuerpo de la solicitud o respuesta. Es útil para que el receptor pueda determinar cuántos bytes debe leer para completar la lectura del contenido.

- `Content-Disposition`: Este encabezado se utiliza para indicar si el contenido del cuerpo de la respuesta debe mostrarse directamente al usuario o si se debe descargar como un archivo adjunto. Puede especificar el nombre de archivo sugerido y otros parámetros relacionados con la presentación del contenido.

Estos encabezados son importantes tanto para el cliente como para el servidor, ya que permiten una comunicación efectiva sobre el tipo y formato de los datos intercambiados. Al utilizar los encabezados de representación adecuados, se asegura que el cliente pueda interpretar y procesar correctamente el contenido enviado por el servidor.

Es importante tener en cuenta que los encabezados de representación pueden variar según la API o el servicio web al que estés accediendo. Consulta la documentación correspondiente para obtener detalles precisos sobre los encabezados de representación requeridos y su formato adecuado en cada caso.


- [Headers](https://apipheny.io/api-headers/)
- [Documentación](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)  

## **14.** Header de autorización

Usar la siguiente forma para proporcionar nuestra API KEY es igual de inseguro. 

```js
const response = await fetch(
'https://api.thecatapi.com/v1/favourites?limit=20&sub_id=user-123&order=DESC',{
    headers:{
        "content-type":"application/json",
        'x-api-key': 'YOUR-KEY' 👈👀
    }
});
const favourites = await response.json();
```

Para ver la API KEY utilizada en alguna web solo te vas al inspector de elementos en el apartado `Network`, veremos varias opciones en la parte inferior, en este caso necesitamos ver la de `favourites`. Verás que se muestran bastantes opciones y justo debajo encontrarás la API KEY usada.  

![](https://i.postimg.cc/x1b4J9T2/14-ver-api-key.png)


- [Rest Client | Extension de Visual Studio Code](https://www.youtube.com/watch?v=3QLcHjNp-08)
- [Extensión Rest Client](https://blog.bitsrc.io/vs-codes-rest-client-plugin-is-all-you-need-to-make-api-calls-e9e95fcfd85a)

## **15.** Header de Content-Type

El encabezado `Content-Type` es uno de los encabezados de representación más importantes en HTTP. Indica el tipo de contenido o formato de archivo que se envía en el cuerpo de una solicitud o respuesta. El valor del encabezado `Content-Type` especifica la naturaleza del contenido y permite que los agentes de usuario interpreten y procesen adecuadamente los datos.

El valor del `Content-Type` consta de dos partes: el tipo de medio (media type) y, opcionalmente, el subtipo. Estas partes están separadas por una barra diagonal (/). El tipo de medio se refiere a la categoría general del contenido, mientras que el subtipo indica una forma o variante específica dentro de esa categoría.

Aquí hay algunos ejemplos de tipos de medios y subtipos comunes utilizados en el encabezado `Content-Type`:

- `text/html`: Indica que el contenido es una página HTML, que se muestra en los navegadores web.
- `application/json`: Indica que el contenido es un objeto JSON (JavaScript Object Notation), utilizado para intercambiar datos estructurados entre aplicaciones.
- `application/xml`: Indica que el contenido es un documento XML (eXtensible Markup Language), utilizado para representar datos estructurados y compartir información entre sistemas.
- `application/pdf`: Indica que el contenido es un archivo PDF (Portable Document Format), utilizado para presentar documentos de manera independiente del software, hardware y sistema operativo utilizados.
- `image/jpeg`: Indica que el contenido es una imagen en formato JPEG (Joint Photographic Experts Group), comúnmente utilizado para almacenar fotografías y gráficos en formato comprimido.
- `audio/mp3`: Indica que el contenido es un archivo de audio en formato MP3, ampliamente utilizado para la reproducción de música y otros sonidos.
- `video/mp4`: Indica que el contenido es un archivo de video en formato MP4 (MPEG-4 Part 14), utilizado para almacenar y reproducir videos de alta calidad.

Estos son solo algunos ejemplos de tipos de medios y subtipos comunes, pero existen muchos más. Además, es posible utilizar parámetros adicionales en el encabezado `Content-Type` para proporcionar información adicional sobre la codificación de caracteres, la versión del formato, etc.

Es importante establecer correctamente el `Content-Type` para que el receptor pueda interpretar y procesar adecuadamente el contenido. Cuando se envía una solicitud, el cliente especifica el `Content-Type` que está enviando al servidor. Por otro lado, cuando el servidor envía una respuesta, incluye el `Content-Type` para indicar el tipo de contenido devuelto.

Siempre es recomendable consultar la documentación de la API o el servicio que estés utilizando para determinar los tipos de medios y subtipos específicos que admite en su implementación.


## **16.** FormData: publicando imágenes de kittens

`FormData` es una interfaz de JavaScript que proporciona una forma sencilla de construir y enviar datos de formulario HTML mediante una solicitud HTTP. Se utiliza para recopilar datos de entrada de formularios, como campos de texto, campos de archivo, casillas de verificación y botones de opción, y enviarlos de manera eficiente a un servidor.

La interfaz `FormData` permite crear un objeto que representa un conjunto de pares clave-valor correspondientes a los campos del formulario. Puedes agregar campos y sus valores utilizando los métodos proporcionados por `FormData`. Una vez que hayas agregado todos los campos que deseas enviar, puedes enviar los datos a través de una solicitud AJAX utilizando `XMLHttpRequest` u otras librerías como `fetch`.

Aquí hay un ejemplo de cómo utilizar `FormData` para recopilar y enviar datos de un formulario:

```js
// Obtener una referencia al formulario
const form = document.getElementById('myForm');

// Crear un objeto FormData y agregar campos al formulario
const formData = new FormData(form);
formData.append('additionalField', 'additionalValue');

// Enviar los datos mediante una solicitud AJAX
const xhr = new XMLHttpRequest();
xhr.open('POST', '/submit', true);
xhr.send(formData);
```

En este ejemplo, se crea un objeto `FormData` utilizando el formulario con el ID "myForm". Luego, se agrega un campo adicional utilizando el método `append()`. Finalmente, se envían los datos a través de una solicitud AJAX POST utilizando `XMLHttpRequest` y el objeto `FormData` como el cuerpo de la solicitud.

`FormData` también proporciona métodos útiles para manipular y eliminar campos, como `delete()`, `set()`, `get()`, entre otros, que te permiten modificar los datos antes de enviarlos.

Una ventaja adicional de usar `FormData` es que automáticamente maneja la codificación de caracteres y el formato adecuado para los datos enviados, incluyendo la capacidad de enviar archivos adjuntos a través de campos de entrada de archivo.

En resumen, `FormData` es una interfaz de JavaScript que facilita la recopilación y el envío de datos de formulario HTML a través de solicitudes HTTP. Es especialmente útil cuando necesitas enviar datos estructurados, incluyendo archivos, a través de una solicitud AJAX.

- [Código de la clase](https://github.com/platzi/consumo-api-rest-javascript/tree/93e7314bec42af1df8f27c88a7bfae28a41c3b26)
- [Proyecto propuesto](https://github.com/jeisonxm/Dog-App-API-REST/tree/main)
- [Colores random](https://colorhunt.co/palettes/random)


## **17.** Axios: librerías de JavaScript para consumir APIs

- Axios
- Trae.js
- node-fetch (para Node.js)
- request (para Node.js)

Axios es una biblioteca de JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador o desde Node.js. Proporciona una interfaz fácil de usar para realizar solicitudes a servidores web y manejar las respuestas de manera eficiente.

Para utilizar Axios, primero debes incluir la biblioteca en tu proyecto. Puedes hacerlo a través de una etiqueta `<script>` en tu archivo HTML o mediante un gestor de paquetes como npm o Yarn en tu entorno de desarrollo.

Aquí tienes un ejemplo de cómo utilizar Axios para realizar una solicitud GET a una API y manejar la respuesta:

```js
// Importar Axios en un entorno de desarrollo de Node.js
const axios = require('axios');

// Realizar una solicitud GET a una API
axios.get('https://api.example.com/data')
  .then(response => {
    // Manejar la respuesta exitosa
    console.log(response.data);
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
  });
```

En este ejemplo, se utiliza `axios.get()` para realizar una solicitud GET a la URL `'https://api.example.com/data'`. La función `get()` devuelve una promesa que se puede encadenar con los métodos `then()` y `catch()`.

Dentro de `then()`, puedes acceder a la respuesta utilizando `response.data`, que contiene los datos devueltos por la API.

En caso de que ocurra un error durante la solicitud, se captura en el bloque `catch()` y se puede manejar adecuadamente.

Recuerda que Axios también admite otros métodos de solicitud HTTP, como `post()`, `put()`, `delete()`, etc., que se pueden utilizar según las necesidades de tu aplicación.

Este es solo un ejemplo básico de cómo utilizar Axios para realizar una solicitud HTTP GET y manejar la respuesta. Axios ofrece una amplia gama de características adicionales, como el manejo de encabezados, la cancelación de solicitudes, la configuración de interceptores, etc., que puedes explorar en la documentación oficial de Axios.

[Documentación Axios](https://axios-http.com/docs/intro)

## **18.** CORS, caché, redirect y tu propio clon de fetch

CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad utilizado por los navegadores web para restringir las solicitudes de recursos (como archivos JavaScript, imágenes, estilos, etc.) que se realizan desde un origen (dominio, protocolo y puerto) diferente al del propio documento que realiza la solicitud. CORS permite que los servidores especifiquen qué dominios tienen permiso para acceder a los recursos y qué tipos de solicitudes están permitidas.

Mode:  
- cors 
- no-cors 
- same-origin

La caché es un mecanismo utilizado para almacenar temporalmente datos en un lugar cercano al cliente, como el navegador web, con el fin de acelerar las solicitudes posteriores para esos datos. Cuando un recurso se almacena en caché, la próxima vez que se solicite, se puede recuperar rápidamente desde la caché en lugar de tener que obtenerlo nuevamente desde el servidor. Esto puede mejorar el rendimiento y reducir la carga en el servidor.

Caché:   
- default 
- no-store 
- reload 
- no-cache 
- force-cache 
- only-if-cached 

El redirect (redireccionamiento) es una técnica utilizada para enviar a un cliente web a una ubicación diferente de la que solicitó inicialmente. Cuando un servidor recibe una solicitud, puede responder con un código de estado de redirección y una URL de destino. El cliente web luego realiza automáticamente una nueva solicitud a la URL de destino. Esto puede ser útil para redirigir a los usuarios a una nueva página después de realizar una acción o para redirigir solicitudes a un recurso en una ubicación diferente.

### Clon fetch 

Ejemplo básico de un clon de `fetch` en JavaScript:

```js
function myFetch(url, options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', url);

    // Configurar encabezados de solicitud
    if (options.headers) {
      for (let header in options.headers) {
        xhr.setRequestHeader(header, options.headers[header]);
      }
    }

    // Manejar la respuesta de la solicitud
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };

    // Manejar errores de red
    xhr.onerror = function() {
      reject(new Error('Error de red'));
    };

    // Enviar la solicitud
    xhr.send(options.body);
  });
}

// Ejemplo de uso
myFetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => {
    console.log('Respuesta:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## **19.** GraphQL, Web Sockets y Web 3.0: el mundo más allá de REST

1. `sendBeacon`: es una API proporcionada por los navegadores web que permite enviar datos al servidor de forma asíncrona antes de que el usuario abandone la página. Se utiliza principalmente para enviar datos de análisis, registros de errores u otra información importante que no debe perderse incluso si el usuario cierra la página. A diferencia de las solicitudes HTTP tradicionales, `sendBeacon` garantiza que los datos se envíen de manera confiable antes de que se descargue la página.

2. GraphQL: es un lenguaje de consultas y una especificación desarrollada por Facebook. Proporciona una forma eficiente y flexible de solicitar y entregar datos desde un servidor a través de una API. A diferencia de REST, donde se obtienen datos predefinidos en puntos finales específicos, GraphQL permite a los clientes enviar consultas específicas para obtener solo los datos necesarios en una sola solicitud. Esto reduce la cantidad de datos transferidos y evita el problema de underfetching o overfetching de información.

3. Web Sockets: Los Web Sockets son un protocolo de comunicación bidireccional en tiempo real que permite una conexión persistente entre un cliente y un servidor a través de la web. A diferencia de las solicitudes HTTP tradicionales, que siguen el modelo de solicitud-respuesta, los Web Sockets permiten una comunicación continua y en tiempo real entre el cliente y el servidor. Esto es especialmente útil para aplicaciones en tiempo real como chats, juegos en línea y actualizaciones en vivo.

4. Web 3.0: El término "Web 3.0" se refiere a una visión futura de la web en la que se espera que haya una evolución significativa en términos de interconectividad y funcionalidad. Aunque no hay una definición precisa y aceptada universalmente de Web 3.0, se espera que incluya tecnologías emergentes como inteligencia artificial, aprendizaje automático, blockchain y realidad virtual/aumentada. Se espera que Web 3.0 brinde experiencias más personalizadas, seguras y descentralizadas, y abra nuevas posibilidades en áreas como finanzas, identidad digital, Internet de las cosas y más.

Estos conceptos representan avances tecnológicos interesantes más allá del enfoque tradicional de REST y ofrecen nuevas formas de interactuar, comunicarse y desarrollar aplicaciones en la web.

### DNS - ENS 

1. DNS (Domain Name System): El Sistema de Nombres de Dominio (DNS) es un sistema fundamental en Internet que se utiliza para traducir los nombres de dominio legibles para los humanos en direcciones IP numéricas, que son las que las computadoras utilizan para comunicarse entre sí. En lugar de recordar direcciones IP complicadas, como 192.168.0.1, los usuarios pueden acceder a los sitios web utilizando nombres de dominio más fáciles de recordar, como www.ejemplo.com. Cuando un usuario ingresa un nombre de dominio en el navegador, el sistema DNS se encarga de resolver ese nombre de dominio en la dirección IP correspondiente para que la solicitud pueda dirigirse al servidor correcto y cargar el sitio web deseado.

2. ENS (Ethereum Name Service): El Servicio de Nombres Ethereum (ENS) es un sistema de nombres de dominio descentralizado basado en la tecnología blockchain de Ethereum. Similar al DNS, el ENS permite a los usuarios asociar nombres legibles para los humanos con direcciones Ethereum y otros recursos relacionados con Ethereum, como contratos inteligentes. Por ejemplo, en lugar de utilizar una dirección Ethereum larga y compleja para recibir tokens, se puede asociar un nombre de dominio legible, como "miwallet.eth", con la dirección correspondiente. Esto facilita la interacción con las aplicaciones y servicios en el ecosistema de Ethereum al eliminar la necesidad de copiar y pegar direcciones complicadas.

El ENS utiliza contratos inteligentes en Ethereum para almacenar y mantener los registros de nombres de dominio y sus correspondientes direcciones y otros datos relacionados. Además de las direcciones Ethereum, el ENS también puede asociar otros recursos como direcciones IP, metadatos y claves públicas. Proporciona una capa de abstracción adicional sobre las direcciones Ethereum subyacentes, lo que facilita la usabilidad y la adopción generalizada de aplicaciones descentralizadas en Ethereum.

En resumen, DNS es un sistema utilizado en Internet para traducir nombres de dominio en direcciones IP, mientras que ENS es un sistema similar pero basado en blockchain que permite asociar nombres legibles para los humanos con direcciones Ethereum y otros recursos relacionados con Ethereum.

## **20.** Toma el Curso Práctico de Consumo de API REST con JavaScript

## Examen 📌
<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. ¿Cuál de las siguientes herramientas nos permiten consumir una API REST desde JavaScript?

	- 📌 fetch()

2. ¿Qué son los query parameters?

	- 📌 Son información complementaria a los endpoints para específicar aún más el contenido o el tipo de contenido que necesitamos.

3. ¿Cuál es una diferencia en la navegación de páginas web con Server Side Rendering / SSR vs. con Client Side Rendering / CSR (Single Page Applications / SPA)?

	- 📌 Con SSR la página debe volver a cargar desde cero en cada navegación. Con CSR solo carga una vez y cambia su contenido dinámicamente en cada navegación gracias a JavaScript.

4. Como frontend developer es mi responsabilidad aprender (al menos) los fundamentos del desarrollo backend.

	- 📌 Verdadero

5. ¿Qué son los métodos HTTP?

	- 📌 Un indicador del tipo de consulta que debemos enviar en cada petición (GET, POST, DELETE, etc.).

6. ¿Qué nos indica el método GET en HTTP?

	- 📌 Lectura

7. ¿Qué son los HTTP Status Codes?

	- 📌 Son un indicador de cómo le fue a nuestra consulta HTTP (error, éxito, redirect, etc.).

8. ¿Qué significa un HTTP Status Code de 300?

	- 📌 Redirect: la ruta consultada nos envía a otro lugar.

9. ¿Qué son los Headers HTTP?

	- 📌 Son metainformación que indica cómo leer o responder una solicitud (Content-Type, Authorization, Set-Cookie, etc.).

10. ¿Qué nos indica el método POST en HTTP?

	- 📌 Creación

11. ¿Qué tipo de respuesta suelen entregarnos las API REST?

	- 📌 JSON

12. ¿Cuáles son las 2 responsabilidades principales del frontend development?

	- 📌 Interactuar con los usuarios y comunicarse con el backend.

13. ¿Qué nos indica el método DELETE en HTTP?

	- 📌 Eliminación

14. ¿Para qué sirven herramientas como el JSON Viewer?

	- 📌 Para ver de una forma más legible las respuesta de tipo JSON.

15. Los HTTP Status Codes son un indicador confiable para saber qué tipo de respuesta entregarle a los usuarios.

	- 📌 Falso

16. ¿Cuál es una de las diferencias entre una respuesta HTTP para humanos (usuarios) vs. para robots?

	- 📌 El servidor seguramente responde HTML para humanos y JSON para robots.

17. ¿Para qué sirve una API REST? Pista: API REST, no solo API ni interfaz.

	- Sirven exclusivamente para enviar archivos JSON del backend al frontend, no soportan ningún otro formato.

	- 📌 Mal: Son interfaces web para comunicar humanos (usuarios) con robots por HTTP.

	- Sirven exclusivamente para enviar archivos XML del backend al frontend, no soportan ningún otro formato.

	- 📌 Quizá: Son interfaces para comunicar robots con otros robots por HTTP.

18. ¿Qué son los endpoints?

	- 📌 Son las distintas rutas de una misma API que podemos consumir para obtener resultados más específicos.

19. ¿Cuál es la diferencia entre PUT y PATCH?

	- 📌 PUT indica que es una edición completa a la versión original, PATCH es solo una edición de algún detalle muy específico.

	Tanto PUT como PATCH son métodos HTTP utilizados para realizar actualizaciones en un recurso en un servidor. Sin embargo, hay una diferencia clave entre ellos en cuanto a la forma en que se maneja la actualización.
	
	PUT: El método PUT se utiliza para realizar una actualización completa de un recurso en el servidor. Al enviar una solicitud PUT, se reemplaza completamente el recurso existente con los nuevos datos proporcionados. Esto significa que se debe enviar y proporcionar todos los campos y valores del recurso, incluso aquellos que no se desean cambiar.
	
	PATCH: El método PATCH se utiliza para realizar una actualización parcial o incremental de un recurso en el servidor. Con PATCH, se envían solo los datos que deben ser modificados o actualizados, sin afectar el resto del recurso. Esto permite realizar cambios específicos y más pequeños en un recurso sin tener que enviar todos los datos nuevamente.

20. ¿Cuál es la diferencia entre autenticación y autorización?

	- 📌 Autenticación es para identificar quién es cada quien, autorización es para identificar qué permisos o accesos tiene cada quien.

</details>