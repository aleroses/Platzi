# Curso de API REST con Javascript: Fundamentos

> Inicio: `25-08-2023`
> Finalización: ``

## 1. ¿Qué es una API REST?

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


## 2. Flujo de comunicación entre usuarios, frontend y backend

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

## 3. Consume tu primera API REST

Web que nos muestra una fotografía de un gato diferente, cada vez que le damos al botón random. 

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

## 4. Endpoints y query parameters

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

## 5. ¿Qué son los HTTP Status Codes?

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



## 6. ¿Qué es una API KEY?

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

## 7. Maquetación del proyecto







