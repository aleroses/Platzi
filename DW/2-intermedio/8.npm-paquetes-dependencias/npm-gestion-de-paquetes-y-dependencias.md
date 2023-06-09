# Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript

## Introducción
### 1. Bienvenida a NPM: Administrador de paquetes de nodos

¿Qué es NPM (node package manager)? es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general.

NPM es un sistema de gestión de paquetes (o “módulos”) para el lenguaje de programación JavaScript, especialmente diseñado para ser utilizado con el entorno de ejecución JavaScript Node.js. Sirve para facilitar la instalación, actualización y eliminación de librerías y herramientas de código abierto que son útiles para desarrollar aplicaciones JavaScript. Además, permite a los desarrolladores compartir y reutilizar código, ahorrando tiempo y esfuerzo en el desarrollo de sus proyectos.  

Un sistema de gestión de **paquetes** es una herramienta informática que se encarga de automatizar el proceso de instalación, actualización y eliminación de programas o librerías en un sistema operativo. Estos paquetes suelen contener código fuente o ejecutable, así como documentación y otros recursos necesarios para su funcionamiento. 

Es importante utilizar NPM porque permite a los desarrolladores ahorrar tiempo y esfuerzo al no tener que escribir todo el código desde cero, y también les permite utilizar paquetes de código probados y confiables que han sido desarrollados y mantenidos por la comunidad de Node.js. Además, al utilizar paquetes de código preescritos, se reducen las posibilidades de errores y se mejora la calidad del software en general.

### 2. Gestión de dependencias

Un módulo es un **archivo** (de JavaScript) que contiene una parte de la solución de un problema. Un paquete o librería es el **conjunto de módulos** para resolver un problema. Una dependencia, como su nombre lo indica, es un **paquete que tu proyecto necesita** para funcionar.

**La gestión de dependencias es la forma de compartir recursos creados y validados por terceros entre la comunidad.** Los gestores de dependencias permiten organizar, administrar y brindar herramientas para el manejo de paquetes. Esta es la importancia de NPM (Node Package Manager), el gestor de dependencias más popular.

#### Breve reseña histórica

En 1995, se crea JavaScript, uno de los lenguajes más populares y el único para la interactividad en páginas web. En 2009, se crea [Nodejs](https://nodejs.org/es/), un entorno de ejecución de JavaScript en el lado del servidor. En este año también se crea **NPM, el gestor de dependencias que nace junto a Nodejs.**

#### Importancia de los gestores de dependencias

**Los gestores de dependencias, por ejemplo NPM, permiten organizar, administrar y brindar herramientas para el manejo de paquetes.** Esto permite a los desarrolladores trabajar sobre sus propios problemas, sin preocuparse de solucionar otros problemas ya resueltos.

Según sea el caso, puedes utilizar paquetes y módulos en tu proyecto. Sin embargo, **el abuso de estos puede generar problemas en tu proyecto**, desde la inclusión de _bugs_, problemas de seguridad, o que el paquete deje de ser mantenido y validado.

**La [página oficial de NPM](https://www.npmjs.com/) permite conocer toda la información de un paquete**. Por ejemplo, React es un paquete para construir interfaces gráficas, en la [página del paquete de React](https://www.npmjs.com/package/react) tendrás información de instalación, participantes, versiones, documentación y posibles soluciones de errores.

Existen otros gestores de dependencias, como [Yarn](https://yarnpkg.com/) o [PNPM](https://pnpm.io/). No obstante, en este curso se tratará sobre NPM, ya que es el más popular. Aunque estos gestores comparten funcionalidades en común.

## Instalación de NPM

### 3. Instalación de NPM en MacOS

#### Pasos para instalar NPM en MacOS

1. **Dirígete a la página oficial de [Nodejs](https://nodejs.org/es/)**. Te encontrarás con la siguiente pantalla:

![Página Web para la instalación de Nodejs en MacOS](https://i.postimg.cc/rsZkrnNm/03-npm.webp)

2. **Selecciona la versión LTS**.

La versión LTS _(Long Term Support)_ es más estable y con menos errores. La versión actual tiene las últimas características añadidas a Nodejs, pero no está validada y puede provocar errores y _bugs_.

3. **Ejecuta** el archivo descargado.
4. **Sigue los pasos de la instalación de Nodejs**, en la cual instalará Nodejs y NPM en sus respectivas versiones.

¡Listo! Ya está instalado Nodejs y NPM en tu computador.

#### Cómo validar que NPM están instalados en MacOS

Para validar que NPM y Nodejs están instalados, dirígete a una terminal de comandos, ejecuta el comando `node -v` y `npm -v` y te mostrará las **versiones instaladas de Nodejs y NPM**, respectivamente. Si no lo muestra, es porque no están instaladas.

Para **actualizar NPM**, ejecuta el comando `npm install -g npm@latest`.

### 4. Instalación de NPM en Windows

Ver en Obsidian [[ECMAScript-historia-y-versiones-de-javascript#3. Configurando nuestras herramientas#1. Instalar Node JS]]

#### Instalación en WSL 

Si estás usando WSL [mirar la documentación](https://learn.microsoft.com/es-mx/windows/dev-environment/javascript/nodejs-on-wsl). Esto te ayudará a instalar nvm, node.js y npm. 

## Configuración de dependencias 

### 5. Primeros pasos en NPM

Creamos un espacio de trabajo para poder trabajar con npm: 
- mkdir npm
- cd npm
- mkdir npm-init
- cd npm-init
- git init 

Inicializamos nuestro proyecto, para lo que tenemos dos opciones: 
1. npm init 
	- Permite configurar
2. npm init -y
	- Hace una configuración rápida 

- code . 

Esta es la configuración que podemos agregar con el primer comando, después también podremos editarla.

```json
{
  "name": "npm-init",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "javascript",
    "angular",
    "node"
  ],
  "author": "ale roses <ale@vrs.com>",
  "license": "MIT"
}
```

- **“name”: “npm-init”** —> Podemos ponerle un nombre sin embargo toma por defecto el de la carpeta.
- **“version”: “1.0.0”** —> Podemos cambiar segun el caso, dependiendo un cambio mayor o uno menor
- **“description”:""** —> Podemos hacer una breve descripcion del proyecto.
- **“main”: “(index.js)”** —> Punto de entrada del proyecto.
- - **"scripts":** —> Indica los **comandos** a ejecutar del proyecto. Podemos incluir los comandos para validar nuestro código.
- **“git repository”:** —> Podemos incluir el repositorio para mantenerlo en la nube
- **“keywords”: [“javascript”, “angular”, “node”]** —> Tecnologías que va a utilizar nuestro proyecto.
- **“author”: "ale roses `<ale@vrs.com>`** —> Nombre y el email de la persona que crea el proyecto
- **“license”: “MIT”** —> Licencias, la mas utilizada es MIT, permite distribuir nuestro código.

[Más sobre configuración de NPM](https://codeburst.io/setting-global-npm-defaults-for-quick-starting-new-projects-ed06ed22edb3)

### 6. Instalación de dependencias

#### Dependencias de desarrollo

Las **dependencias de desarrollo** son aquellos paquetes que necesitamos en un proyecto mientras estamos desarrollándolo, pero una vez tenemos el código generado del proyecto, no vuelven a hacer falta. Los paquetes instalados con el flag **`--save-dev`** o **`-D`** se instalan en esta modalidad, guardándolos en la sección **`devDependences`** del fichero **`package.json`**.  

Las dependencias de desarrollo son aquellas que **no son obligatorias para el proyecto**, es decir, sin estas la aplicación servirá. Estas dependencias ofrecen una ayuda para construir código de forma óptima, por ejemplo, formatear el código, agregar estilos, levantar un servidor para observar los cambios.

Dentro del proyecto de trabajo:  

- npm install eslint --save-dev
- npm install eslint -D 
- npm install gh-pages --save-dev 

Tomando como ejemplo el paquete [gh-pages](https://github.com/tschaub/gh-pages), que es una librería y comando CLI (interfaz de línea de _comandos_) para desplegar fácilmente un proyecto en **GitHub Pages**. Como se trata de un paquete que no es necesario incluir en la web final (_se utiliza en desarrollo para desplegar_), pues lo instalamos con los flags **`--save-dev`** o **`-D`**.

#### Dependencias de producción o locales

Por otro lado, las **dependencias de producción** son aquellos paquetes que necesitamos tener en la web final generada, como librerías JavaScript necesarias para su funcionamiento o paquetes similares. Los paquetes instalados con el flag **`--save-prod`**, **`-P`** o directamente sin ningún flag se instalan en esta modalidad, guardándolos en la sección **`dependences`** del fichero **`package.json`**.

Las dependencias locales son aquellas que son **obligatorias para el proyecto**, es decir, son las necesarias para que la aplicación funcione en producción. Producción significa que tu aplicación está disponible para usarse.

Dentro del proyecto de trabajo: 

- npm install noment
- npm install react -S
- npm install react --save 
- npm install howler

En este caso, estamos instalando el paquete [Howler](https://howlerjs.com/), una librería JavaScript que permite manipular y gestionar archivos multimedia de audio desde el navegador. En este caso se trata de una librería JS que si estará incluida en la versión definitiva de la página, por lo que la instalaremos con el flag **`--save-prod`**, **`-P`** o sin indicar ninguno, ya que es la opción por defecto.

#### Dependencias globales 

Las dependencias globales son aquellas que están **disponibles para todos los proyectos en tu computador**, pero no aparecen el archivo de configuración `package.json`.

Ligados al sistema operativo y no al proyecto.

- npm install -g cowsay
- cowsay
- couwsay javascript 

#### Visualizar los paquetes instalados

Ver la lista de los paquetes instalados en el proyecto: 
- npm list

Ver la lista de los paquetes instalados de forma global: 
- npm list -g
- npm list -g --depth 0

### 7. Instalación de dependencias de versiones específicas

En ciertas situaciones es necesario instalar **una versión específica de un paquete**, ya sea porque el proyecto no puede actualizarse a versiones recientes, o porque el equipo necesita trabajar sobre una misma versión. Saber instalar cualquier versión de un paquete es fundamental para la gestión de dependencias de tu proyecto.

Para **instalar una versión exacta** de una dependencia, utiliza el siguiente comando, donde es el nombre del paquete y es la versión exacta.

- `npm install <paquete>@<versión>`
- npm install json-server@0.15.0

También puedes usar la versión `latest` para asegurarte que está instalando la última versión disponible del paquete.
- `npm install <paquete>@latest`
- npm install json-server@latest

Este comando instalará la versión exacta del paquete desde el repositorio de NPM. Esto sirve para manejar diferentes versiones del paquete instalado donde sea compatible con el proyecto actual y no provoque errores.

#### Instalar dependencias opcionales

- `npm install --save-optional <paquete>`
- `npm install -O <paquete>`
- npm install eslint -O

Ten en cuenta la `O` mayúscula, si utilizas la `o` minúscula, el paquete se instalará como dependencia local.

```json
$ npm install estlint -O // Instalación opcional 
$ npm install eslint -o // Instalación local
```

Las dependencias de desarrollo se encuentran en el `package.json` en la propiedad `"optionalDependencies"`, seguido de la versión que fue instalada.

```json 
{ 
... 
"optionalDependencies": 
	{ 
		"paquete": "1.0.0" 
	} 
}
```

#### Simular la instalación de una dependencia

- `npm install --dry-run <paquete>`
- npm install react-dom --dry-run

Este comando mostrará el resultado de instalación sin instalarlo en el proyecto.

#### Comando `npm install`

El archivo `package.json` contiene la información de las dependencias del proyecto, pero si no tienes instaladas esas dependencias, **la manera para instalarlas todas en un solo comando es `npm install` o la forma corta `npm i`.** De este modo, instalarás cada paquete con su respectiva versión indicada en el `package.json`.

Si únicamente tenías el archivo `package.json` después de ejecutar el comando, aparte de instalar todas las dependencias, **se generará un archivo `package-lock.json` y un directorio llamado `node_modules`**.

**El archivo `package-lock.json` muestra todo el árbol de dependencias de tu proyecto.** ¿Qué significa esto? Cada dependencia instalada también tiene sus respectivas dependencias, a estas se las denomina sub-dependencias. El árbol de dependencias muestra todas las sub-dependencias como si de ramas se tratasen.

**El directorio `node_modules` contiene todos los archivos ejecutables de Nodejs y los módulos que contiene cada dependencia.** Este directorio es ignorado por los repositorios de Git, por eso es importante el archivo `package.json`, ya que te permitirá instalar las dependencias con `npm install` cuando realices un _fork_ de cualquier repositorio.

- npm install 
- npm list 


### Datos 

#### Sudo y NPM
Se recomienda no utilizar sudo con NPM ni ejecutarlo como root. Les dejo un articulo en donde está bien explicado en como darle solución a este problema por permisos de manera de no tener otros tipos de inconvenientes con las dependencias instaladas a nivel global: [Problemas de permisos con NPM](https://lenguajejs.com/npm/introduccion/problemas-permisos-npm/)

#### Versionamiento y el uso de (^)

[Documentación](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)

### 8. Comandos en NPM (Scripts)

Dentro de la carpeta npm-init creamos una carpeta para ejecutar un script simple que nos muestre un Hi world!

- mkdir src
- code .
- src
	- index.js

```js
console.log('Hi world!');
```

El apartado de `"scripts"` en el `package.json` es el que **indica los comandos a ejecutar del proyecto**. Esta sección es la que utilizarás para crear comandos que optimicen el desarrollo de tu aplicación.

#### Creando comandos 

Para crear un comando en tu proyecto, utiliza la siguiente estructura.

```json 
"scripts": { 
	"<nombre>": "<comando>" 
}
```

Queda así: 
```json
"scripts": {
    "start": "node src/index.js",
    "node": "node src/index.js && node src/index.js"
  },
```

Una vez hayas escrito el comando en el archivo `package.json`, la manera de ejecutarlo en la terminal será con el comando `npm run <nombre>`.

Dentro de la carpeta npm-init corremos los comando definidos en el archivo `package.json` para ver un **Hi world!** por consola
- npm run `start` 
- npm `start` 
- npm run `node` 

NPM provee algunos alias, como `npm start` que ejecuta lo mismo que `npm run start`.

#### Ejecutar un paquete de manera directa

NPM te permite instalar paquetes en tu proyecto, sin embargo, **NPX (Node Package Execute) permite ejecutar un comando de NPM remotamente**.

Ejemplos de este comportamiento son los paquetes React y Nextjs, para iniciar un proyecto en estos se puede ejecutar los siguientes comandos:

- `npx create-react-app <nombre-project>`
- `npx create-next-app <nombre-project>`

Creamos un proyecto nuevo dentro de la carpeta npm:   

- npx create-react-app `react-npm` 
	- Instala y muestra comandos de referencia
- cd react-npm
- npm start
	- Ejecuta el script 
- Ctrl + c para finalizar el proceso
- code .


> NP**M**: Management  
> NP**X**: Execute 

#### Datos: 
[Iniciar un nuevo proyecto de React](https://es.react.dev/learn/start-a-new-react-project)

### 9. Actualización de dependencias

Conocer cómo actualizar dependencias es muy importante para **mantener tus proyectos actualizados y libres de vulnerabilidades de seguridad**.

**El comando `npm outdate` mostrará los paquetes que están desactualizados**. Con el comando `npm outdate --dd` verás de manera más detallada esta información.

#### Ejemplo: 

Entramos al repo en GitHub [react-base](https://github.com/gndx/react-base) y copiamos el enlace **HTTPS**.

Dentro de nuestra terminal desde la carpeta npm clonamos el proyecto:   
- git clone enlace-https
- cd react-base
- code .

**Para actualizar todas las dependencias utiliza el siguiente comando:**

`npm update`

Ten en cuenta que **actualizar varios paquetes no es recomendable**, solamente deberías actualizar un paquete si estás muy seguro de que no afectará al proyecto y que realizaste los cambios pertinentes.

`npm update <paquete>`

Utiliza el siguiente comando para actualizar a la última versión _(latest)_ de la dependencia, donde es el nombre del paquete.

`npm install <paquete>@latest`

En la clase se hizo de la siguiente manera:  
- npm list
- npm install 
- npm list 
- npm outdate
- npm install react@latest
- npm install react-dom@latest


### 10. Seguridad y solución de problemas

**La seguridad de tu proyecto puede ser vulnerada por paquetes desactualizados**. Al momento de instalar tus paquetes con el comando `npm install` muestra una serie de advertencias _(NPM WARN)_ de las dependencias desactualizadas.

- Moderates: pueden dejarse pasar, pues no tendrán mayor efecto.
- High: podemos considerarlas, esto puede volverse crítico.
- Critical: son las que si o si hay que reparar.

#### Auditar tus dependencias

**El comando `npm audit` muestra una descripción de las dependencias instaladas**. Si se encuentran vulnerabilidades, se calculará el impacto al proyecto.

Si se requiere un informe más detallado en formato JSON (JavaScript Object Notation), utiliza el comando `npm audit --json`.

**El comando `npm audit fix` proporciona una actualización de los paquetes**, similar al comando `npm update <paquete>`. El comando `npm audit fix --force` proporciona una actualización de los subpaquetes de cada paquete, en todos sus niveles de profundidad.

Si el problema persiste, es necesario [actualizar el paquete](https://platzi.com/clases/3578-npm/52460-actualizacion-de-dependencias/) a su última versión (ver clase anterior).

`npm install <paquete>@latest`

#### Solución de problemas

Cuando estés desarrollando un proyecto con NPM, puede que generes errores que no permitan seguir con tu trabajo. **Saber manejar los errores es fundamental para solucionarlos y seguir con tus tareas** (y no entrar en pánico). Alguno de estos errores pueden ser:

- Errores en la configuración del archivo `package.json`
- Errores de dependencias en `node_modules`
- Errores del sistema operativo
- Configuración errónea de Git o GitHub
- Errores de escritura _(typos)_
- Errores que no estén ligados directamente a NPM

#### Error de dependencias en _node_modules_

**Existen situaciones en las que instalas una dependencia con una versión que no corresponde a la deseada.** Esto ocurre porque NPM guarda en el caché una versión previamente instalada de un paquete, esto para mejorar los tiempos de instalación.

En esta situación, puedes utilizar los siguientes comandos, el primero para borrar el caché de NPM y el segundo para verificar si están eliminados correctamente.

- `npm cache clean --force`
- `npm cache verify`


#### Ejemplo de actualización

Seguimos con le proyecto anterior:  

- npm install 
- npm audit
- npm audit --json
- npm audit fix 
- npm audit fix --force
- npm list 
- npm install webpack@latest
- npm install webpack-cli@latest
- npm install webpack-dev-server@latest
- npm list 
- npm audit 

#### Dato: 

##### Comando Phoenix

🔥 Puede que existan valores corruptos o una instalación incorrecta de una dependencia, deberás eliminar el directorio de `node_modules` y después ejecutar el comando `npm install` para instalar correctamente los paquetes.  

Puedes utilizar el siguiente comando `phoenix` en el `package.json` para evitar escribir demasiado cada vez que lo necesites. Lo aprendí de Midudev. 🙌

```json
// package.json
{
 "scripts": {
   "phoenix": "rm -f package-lock.json && rm -rf ./node_modules && npm install --no-fund --no-audit"
 }
}
```


##### Reparar paquetes específicos 

Básicamente lo que nos da a entender el profe Oscar, es que una vez que ejecutamos todas las herramientas NPM que nos permiten auditar y fixear aquellas vulnerabilidades que nos saltan por consola, empezar a buscar aquellas más especificas que nos podrían estar causando problemas… como lo hace en el ejemplo de la clase con WEBPACK.


### 11. Eliminación de dependencias y Package lock

Conocer cómo eliminar dependencias, también es importante para mantener **tus proyectos sin paquetes que no aporten la solución a tu problema, que ya no sean actualizados, o que exista una mejor implementación**.

#### Eliminar paquetes

Existen dos formas de eliminar paquetes:

- Eliminando el paquete con el siguiente comando: `npm uninstall <paquete>`
- Eliminarlo manualmente del archivo package.json. Al eliminar un paquete de manera manual, es necesario actualizar el directorio de `node_modules`.

Para el proyecto que venimos trabajando (react-base) sería de la siguiente forma:   
- npm uninstall webpack-dev-server
- code .

Ahora eliminamos desde el archivo `package.json` 

```js
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.15.0",
    "babel-eslint": "10.1.0",
    "eslint": "7.32.0",
    "eslint-config-airbnb": "18.2.1",
    "eslint-config-prettier": "8.3.0",
    "eslint-plugin-import": "2.24.0",
    "eslint-plugin-jsx-a11y": "6.4.1",
    "eslint-plugin-prettier": "3.4.0",
    "eslint-plugin-react": "7.24.0",
    // Borramos esto
    "husky": "7.0.1", 👈👀
    "lint-staged": "11.1.2", 👈👀
    "mini-css-extract-plugin": "2.2.0",
    "prettier": "2.3.2"
  }, // Todo esto también 
  "husky": { 👈👀
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": { 👈👀
    "*.{js,jsx}": [
      "npm run format",
      "npm run lint",
      "git add"
    ]
  }
```

#### Actualizar node_modules

Actualizar el directorio node_modules sirve para limpiar las dependencias que previamente estaban en el proyecto. También cuando existe algún archivo corrupto o una mala instalación.

Por lo tanto, deberás eliminar el directorio de node_modules y después ejecutar el comando npm install para instalar correctamente los paquetes. En ciertas situaciones, también es necesario eliminar el archivo package-lock.json.

Puedes utilizar el siguiente comando de NPM para evitar escribir demasiado cada vez que lo necesites.

```json
 // package.json 
 { 
  "scripts": { 
    "phoenix": "rm -f package-lock.json && rm -rf ./node_modules && npm i --no-fund --no-audit" 
    }
}
```

Ejecutamos lo siguiente para el proyecto en el que estamos trabajando, con esto eliminaremos el directorio node_modules y volvemos a instalar las dependencias:  

- rm -rf node_modules
- ls -l
- npm install

#### Mostrar los pasos ejecutados por un comando de NPM

Para identificar el error que puede existir en tu proyecto, es necesario analizar cada paso que ejecuta un comando, para saber en qué punto específico ocurre el problema.

El _flag_ `--dd` en un comando de NPM, te mostrará de manera detallada cada paso ejecutado. De esta manera podrás observar si existe un error para solucionarlo.

`npm [comando] --dd`

Otra forma, es ejecutar el comando de NPM. Si existe un error, la terminal te mostrará los diferentes errores que encontró. **Al final de este resumen, existirá una ruta con los detalles del error, puedes abrir tal archivo para observar los pasos que ejecutó.**

En nuestro proyecto sería:  

- npm run build
- npm run build --dd

Con el siguiente comando podremos ver algunas cosas como librerías deprecadas o que ya no van a tener actualizaciones. 
- npm ci

Este comando puede sincronizar el package.json y el package-log.json

#### Qué es el archivo _package-lock.json_

**El archivo `package-lock.json` describe todo el árbol de dependencias de cada paquete instalado**.

Cuando alguien hace _fork_ de un repositorio no tiene el directorio `node_modules` por el archivo `.gitignore`. Mediante el comando `npm install`, instalarán las dependencias indicadas en el `package.json` con la versión indicada. También, se instalarán las sub-dependencias indicadas en `package-lock.json` con la versión indicada.

Esto es importante para tener instaladas siempre la versión adecuada del paquete a utilizar en el proyecto.

## Creación y publicación de paquetes 

### 12. Crear un paquete

Al crear un paquete para NPM, podrás compartir tu trabajo a varios desarrolladores e [instalar tu paquete](https://platzi.com/clases/3578-npm/52457-instalacion-de-dependencias/) mediante `npm install <tuPaquete>` (ver clase 6).

#### Colocando un nombre a tu paquete

Al publicar un paquete, es necesario que **el nombre sea único**, es decir, no debe existir ningún otro paquete publicado con el mismo nombre en NPM.

Sin embargo, no agregues números, ya que NPM lo detecta como _spam_. Es válido agregar tu nombre de usuario para diferenciarlo,

Asegúrate de eso buscando en la [página oficial de NPM](https://www.npmjs.com/) el nombre del paquete, si no hay coincidencias lo puedes publicar.

#### Proyecto de mensajes aleatorios

Como buena práctica, crea un repositorio remoto en GitHub y clónalo en tu computador. Después, inicia un proyecto con NPM con el comando `npm init -y`. **Con esto ya tienes todo listo para empezar el proyecto.**

Dentro del proyecto crea la siguiente estructura de archivos:

- Un directorio llamado `src` que contenga el archivo principal del proyecto `index.js`
- Un directorio llamado `bin` que contenga un archivo ejecutable `global.js`

![Directorio base](https://i.postimg.cc/02pgpdWd/12-project-npm.webp)

##### Creando el archivo `index.js`

En el archivo `index.js` agrega el siguiente código:

- Un _array_ llamado `messages` que contiene los mensajes
- Una función `funnyCommit` que mostrará de manera aleatoria los elementos del _array_, es decir, los mensajes aleatorios.
- Al final, exporta la función mediante `module.exports`.

```js
const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};
```

##### Creando el archivo `global.js`

En el archivo `global.js` agrega el siguiente código, en el que importamos el la función del archivo `index.js` y la ejecutamos.

```js
!/usr/bin/env node
let random = require('../src/index.js');

random.funnyCommit();
```
⠀⠀  
`#!/usr/bin/env node` es una instrucción que sirve para indicar que este archivo se ejecutará con Nodejs. Después realizamos la importación de nuestro archivo `index.js`. Finalmente, ejecutamos la función de mensajes aleatorios `funnyCommit`.

##### Modificar el archivo _package.json_ para el proyecto
⠀⠀  
En el archivo `package.json`, agrega `"bin"` haciendo referencia a nuestro archivo `global.js` y `"preferGlobal"` en `true`.

```json
{
    ...
    "bin": {
        "random-str-msg": "./bin/global.js"
    },
    "preferGlobal": true
}
```

El nombre que especifiquemos dentro de `"bin"` será el que utilicemos en la terminal cuando el paquete esté instalado.

¡Listo! Ya tienes un paquete para publicarlo en NPM.


#### Dato:  

La diferencia entre un módulo local y un módulo global es que el local se guarda DENTRO de la carpeta del proyecto, por lo cual, si quieres ejecutar el script en una terminal, tendrás que viajar primero a la carpeta.

El global, en cambio, lo guarda en un path “universal” (tú mismo puedes personalizarlo) el punto es que puedes ejecutar los scripts de este módulo sin importar en dónde estés ubicado dentro de tu terminal.

Según he leído, se recomienda siempre mantener módulos locales para evitar bugs tremendos de compatibilidad entre tus proyectos y realmente son pocos los módulos que merecen la pena trabajar globales, solo aquellos que te brindan comandos de terminal que frecuentes mucho o que uses en la mayoría de tus proyectos, de resto, es mejor manejar módulos locales.


### 13. Publicar un paquete

Antes de publicar el [proyecto de mensajes aleatorios](https://platzi.com/clases/3578-npm/52463-crear-un-paquete/) (clase anterior), debes asegurarte de que el paquete funcione correctamente.

#### Comando `npm link`

El comando `sudo npm link` crea un enlace simbólico para reconocer este paquete dentro del listado de NPM, **sin publicarlo todavía.**

Si no presenta errores, está listo para ser publicado.

#### Simular la instalación de tu paquete

Para simular la instalación de tu paquete de manera local, identifica el directorio en el que te encuentras con el comando `pwd`, **debe ser el mismo del proyecto**.

Después, ejecuta `npm install -g <ruta>`, donde es la ruta del directorio de tu proyecto. Esto sirve para [instalarlo de manera global](https://platzi.com/clases/3578-npm/52457-instalacion-de-dependencias/).

`sudo npm install -g /Users/tuUsuario/tu-paquete`

De esta manera, ya puedes ejecutar el programa con el comando que creamos en `"bin"`, `random-str-msg` y funcionará de forma global en el sistema.

- `random-str-msg`
	- Commit committed
- `random-str-msg`
	- Here be Dragons

#### Cómo publicar un paquete en NPM

Una vez revisado que el paquete funcione correctamente, debes asegurarte de cumplir con los siguientes requisitos: * Asegurar que el programa funcione reduciendo en lo posible los _bugs_ * Revisar que la configuración del archivo package.json sea correcta * Tener un nombre único para el proyecto, usando guiones (-) para separar palabras y evitando números * [Crear una cuenta](https://www.npmjs.com/signup) en NPM, ya que aquí estarán tus paquetes a tu nombre. Después, debes utilizar el comando `npm adduser` para iniciar sesión en la terminal. Llena los datos, si no aparece tu contraseña, no te preocupes, es una forma de seguridad.

Una vez hayas cumplido los requisitos, **ejecuta el comando `npm publish`** y si no existen errores, tu paquete será publicado.

#### Validar con qué usuario publicar un paquete en NPM

Para validar el usuario con el que publicarás un paquete en NPM, debes utilizar el comando `npm whoami` para visualizar el usuario actual, **esto es importante si tienes varias cuentas de NPM**.

### 14. Versionado de paquetes y paquetes privados

El versionado semántico consiste en la estructura que debemos seguir para colocar una versión a nuestro paquete.

#### Qué es el versionado semántico

El versionado semántico está conformado por tres valores:

- **Major:** el valor que muestra la versión que contiene los cambios importantes del paquete
- **Minor:** el valor que muestra la versión que contiene los cambios en funcionalidades, pero no representan un cambio significativo
- **Patch:** el valor que muestra la versión que contiene cambios rápidos para solucionar problemas de seguridad o _bugs_

![version](https://i.postimg.cc/rwkgRzpK/14-version.webp)

##### Símbolos ^ y ~ para actualizar las versiones minor y patch

**Existen dos símbolos que acompañan al versionado sirven para actualizar las versiones _minor_ y _patch_ del paquete.**

- **Caret (^):** Permite actualizar las versiones _minor_ y _patch_
- **Tilde (~):** Permite actualizar las versiones _patch_

Por ejemplo, tenemos la versión `5.2.3`:

- Si tiene el _carret_ `^5.2.3`, actualizará la versión _minor_ y _patch_, por lo que tendrás versiones como `^5.3.3`, `^5.4.3`, `^5.4.4`, y así sucesivamente. Pero no versiones mayores a `6.0.0`.
- Si tiene la _tilde_ `~5.2.3`, actualizará la versión de _patch_, por lo que tendrás versiones como `~5.2.4`, `~5.2.5`, `~5.2.6`, y así sucesivamente. Pero no versiones mayores a `5.3.0`.

#### Buenas prácticas en el versionado de paquetes

**Lo recomendable es eliminar estos símbolos y tener la versión exacta** (sin símbolos) para evitar problemas de versionado, principalmente con paquetes que los mantienen pocas personas o no son fiables.

Debes manejar las actualizaciones cuando sea pertinente y asegurándote que no entrará en conflicto la nueva versión con la antigua.

#### Cómo realizar cambios a la versión de tu paquete de NPM

**Si realizas cambios en tu código, tienes que cambiar la versión de tu paquete.** Debes utilizar los siguientes comandos, según la versión que desees cambiar:

```bash
// Aumenta una version path (1.0.0) -> (1.0.1)
$ npm version patch

// Aumenta una version minor (1.0.0) -> (1.1.0)
$ npm version minor

// Aumenta una version major (1.0.0) -> (2.0.0)
$ npm version major

// Aumenta una version específica (1.0.0) -> (3.1.1)
$ npm version 
```

Una vez actualizada la versión de tu paquete, puedes ejecutar nuevamente el comando `npm publish` para actualizarlo en los repositorios de NPM.


#### Paquetes privados

Para usar paquetes privados necesitas:

- Una versión igual o superior a la 2.7.0 de NPM
- Tener una cuenta de **usuario u organización de pago**

En un paquete privado de NPM, solo pueden participar el propietario y los colaboradores autorizados. De esta manera, puedes seguir construyendo el paquete con una combinación de **código privado y dependencias públicas**.

#### Actualizar tu paquete en NPM con buenas prácticas

Tu paquete debe contener toda la información posible para que el usuario puede instalarlo, utilizarlo y hasta colaborar para solucionar posibles _bugs_. Por ende, **es necesario que tengas configurado, por lo menos, un archivo `README.md`** y un repositorio remoto (GitHub, GitLab, etc.).

Una vez tengas estos requisitos, puedes actualizar tu paquete a una nueva versión, luego publícalo nuevamente.

#### Cómo crear un archivo _README.md_ para tu paquete

Para crear un archivo _README.md_ puedes utilizar esta [estructura base](https://gist.github.com/gndx/1b2c8482049c6d3b521dffcf33337558) y adecuarla a tu proyecto. Puedes mirar el código haciendo clic en el botón "Raw".

![estructura](https://i.postimg.cc/V6hTM1S5/14-readme-estructura.png)


[Documentación sobre versionado](https://semver.org/lang/es/)


## Comando más comunes en NPM

Hay muchos comandos disponibles en NPM, pero algunos de los más comunes son:

1. `npm init`: Inicia un nuevo proyecto de Node.js y crea un archivo `package.json` con la configuración básica.
2. `npm install`: Instala todos los paquetes y dependencias necesarios para un proyecto de Node.js.
3. `npm install <paquete>`: Instala un paquete específico de NPM y lo agrega al archivo `package.json` como una dependencia.
4. `npm install --save-dev <paquete>`: Instala un paquete específico de NPM y lo agrega al archivo `package.json` como una dependencia de desarrollo.
5. `npm update`: Actualiza todos los paquetes instalados a la última versión disponible.
6. `npm outdated`: Muestra una lista de paquetes instalados que tienen una versión más reciente disponible.
7. `npm uninstall <paquete>`: Desinstala un paquete específico de NPM y lo elimina del archivo `package.json`.
8. `npm run <script>`: Ejecuta un script definido en el archivo `package.json`.
9. `npm search <palabra clave>`: Busca paquetes de NPM que contengan la palabra clave especificada.
10. `npm publish`: Publica un paquete de Node.js en el registro de NPM para que otros desarrolladores puedan instalarlo y utilizarlo.
11. `npm audit`: Escanea las dependencias del proyecto en busca de problemas de seguridad y proporciona una lista de problemas identificados.
12. `npm ls`: Muestra una lista de todas las dependencias instaladas en el proyecto.
13. `npm view <paquete>`: Muestra información detallada sobre un paquete específico de NPM, como su versión, autor, descripción, dependencias, etc.
14. `npm init <tipo>`: Inicia un nuevo proyecto de Node.js con una configuración predefinida para un tipo específico de proyecto, como una aplicación web o una biblioteca.
15. `npm config`: Permite configurar opciones de npm como el registro de paquetes por defecto, el proxy HTTP, etc.
16. `npm cache clean`: Limpia la caché de npm para liberar espacio en disco y eliminar archivos de paquetes antiguos que ya no se utilizan.
17. `npm prune`: Elimina las dependencias que ya no se utilizan en el proyecto y las elimina del archivo `package.json`.
18. `npm link <paquete>`: Crea un enlace simbólico entre el paquete actual y otro paquete local para que el paquete local pueda ser utilizado como una dependencia, pero en lugar de agregarlo como una dependencia en el archivo `package.json`, lo agrega como un enlace simbólico.
19. `npm version <tipo>`: Actualiza la versión del paquete en el archivo `package.json` y crea una etiqueta de versión correspondiente en Git. El tipo puede ser `patch`, `minor` o `major`.
20. `npm login`: Inicia sesión en el registro de NPM para poder publicar paquetes y administrar el perfil de usuario.
21. `npm whoami`: Muestra el nombre de usuario actualmente conectado al registro de NPM.
22. `npm deprecate <paquete> <versión> <mensaje>`: Marca una versión específica de un paquete como obsoleta y muestra un mensaje de advertencia cuando alguien intenta instalarla.

Estos son solo algunos de los comandos más comunes en NPM, pero hay muchos más disponibles dependiendo de las necesidades específicas del proyecto.


### Inicializar un proyecto

- `npm init`: Inicializa un proyecto. Luego tienes que responder preguntas básicas del proyecto
- `npm init -y`: Inicializa un proyecto con una descripción por defecto de las preguntas bases

### Instalando dependencias

- `npm install`: Instala las dependencias escritas del `package.json`
- `npm install package-name`: Instala el paquete de nombre **package-name** y lo guarda como dependencia para producción
- `npm install package-name --save-dev`: Instala el paquete y lo guarda como dependencia de desarrollo
- `npm install package-name@version`: Instala una versión específica del paquete
- `npm install package-name@latest`: Instala una versión más reciente del paquete
- `npm install pacakge-name -g`: Instala el paquete de forma global
- `npm uninstall package-name`: Con eso elimina la dependencia y los paquetes de los cuales depend

### Listando dependencias

- `npm list`: Lista los paquetes instalados en el proyecto
- `npm list -g`: Lista los paquetes instalados de forma global
- `npm outdate`: Nos permite mostrar los paquetes que estan desactualizados

### Auditando y corrigiendo vulnerabilidades

- `npm audit`: Audita las dependencias que tenemos instaladas en busca de vulnerabilidades
- `npm audit fix`: Audita e intenta arreglar las vulnerabilidades de nuestras dependencias
- `npm audit --json`: Muestra los resultados de la auditoría a manera más profunda en formato json
- `npm audit fix --force`: Corrige los problemas encontrados en las librerías instalando otras dependencias por debajo si es necesario

### Build de los proyectos

- `npm run build --dd`: Activa el build en formato verbose. Lo cual entrega una información más robusta de lo que se creó en el build
- `npm ci`: también llamado `npm clean install`. Este comando es similar al comando `npm install`. Con la diferencia que está pensado para ser utilizado en ambientes automatizados.

### Publicar un paquete a npm

- `npm link`: Crea un enlace simbólico para reconocer este paquete dentro del estado de paquete que contiene npm, pero sin publicarlo. De esta forma se puede probar el paquete y garantizar que cumple con lo que se programó
- `npm adduser`: Inicia sesión en npm desde la terminal
- `npm publis`: Publica el proyecto creado
- `npm version x.x.x`: Cambia la version del proyecto a x.x.x



## Notas 
- [Notion](https://tianmunooz.notion.site/Nuevo-Curso-de-NPM-Gesti-n-de-Paquetes-y-Dependencias-en-JavaScript-386718a496e3473ea60811fb8a6d1242)
- [Notion](https://luis-ariza.notion.site/NPM-Gesti-n-de-Dependencias-y-Paquetes-en-JavaScript-8d621bda1a3743f6a45f068dcdc2deb3)

## Examen 📌

<details>
	<summary>Haz clic para ver los resultados 👀</summary>
	<br/>

1. Identifica cuál es una instalación de una dependencia global

	- 📌`npm install -g nodemon`


2. ¿Cuál es el comando que nos permite inicializar nuestros proyectos con npm?

	- 📌`npm init`

3. ¿Para qué nos sirve el flag '--save-optional' o '-O'?

	- 📌El paquete aparecerá en “optionalDependencies”.

4. ¿Cuál es el comando que nos permite publicar un paquete en npmjs.com?

	- 📌`npm publish`

5. ¿Para qué se usa el comando `'npm init -y'`?

	- 📌Establece la configuración por defecto para el archivo package.json.

6. ¿Cuál es el comando para agregar el nombre del autor a la configuración por defecto de NPM?

	- 📌`npm set init.author.name "example_user"`

7. #### ¿Cuál es el comando que nos permite ver todo el output en la terminal/consola?

	- 📌`npm run build --dd`

La opción `--dd` significa "verbose debugging output", lo que permite ver todo el output detallado del comando `npm run build`. De esta manera, podemos ver cualquier mensaje de error, advertencia o información que se genere durante la ejecución del comando.

8. ¿Cuál es el comando para listar los paquetes y módulos instalados?

	- 📌`npm list`

9. ¿Para quá nos sirve el flag `'--save'`?

	- 📌Instala y agrega la entrada a las dependencias del archivo package.json.

10. ¿Cuál es el alias de 'npm run start'?

	- 📌`npm start`

11. ¿Cuál es el comando que nos permite inicializar nuestros proyectos en git?

	- 📌`git init`

12. ¿Cuál es comando que nos permite identificar las dependencias globales instaladas en nuestro sistema?

	- 📌`npm list -g --depth 0`

El comando que nos permite identificar las dependencias globales instaladas en nuestro sistema es: `npm list -g --depth 0`

La opción `-g` indica que se deben listar los paquetes globales instalados. La opción `--depth` se utiliza para especificar la profundidad de la lista de dependencias que se mostrará. En este caso, `--depth 0` indica que solo se deben mostrar los paquetes de nivel superior y no las dependencias de segundo nivel o posteriores.

Este comando mostrará una lista de los paquetes globales instalados en el sistema junto con su versión. Por ejemplo:

```bash
/usr/local/lib
├── create-react-app@4.0.3
├── npm@7.20.3
├── serve@12.0.0
└── nodemon@2.0.12
```

13. ¿Cuál es el comando que nos permite ver una auditoría en formato json?

	- 📌`npm audit --json`

14. ¿Qué funcionalidad tiene el archivo 'package.json'?

	- 📌Contiene la información general del proyecto: scripts, dependencias y configuraciones de un proyecto.

15. ¿Cuál es el ejemplo correcto para instalar la versión más reciente de un paquete?

	- 📌`npm install json-server@latest`

</details>