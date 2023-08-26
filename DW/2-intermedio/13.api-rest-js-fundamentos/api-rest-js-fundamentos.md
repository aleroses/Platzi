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

Usando fetch:  

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