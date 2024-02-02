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


## Otros apuntes

[Notion](https://www.notion.so/Curso-Pr-ctico-de-Consumo-de-API-REST-con-JavaScript-e98bd628bc0e4af481f47e839bc82692)