# Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript

## Introducción
### 1. Bienvenida a NPM: Administrador de paquetes de nodos

¿Qué es NPM (node package manager)? es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general.

NPM es un sistema de gestión de paquetes (o “módulos”) para el lenguaje de programación JavaScript, especialmente diseñado para ser utilizado con el entorno de ejecución JavaScript Node.js. Sirve para facilitar la instalación, actualización y eliminación de librerías y herramientas de código abierto que son útiles para desarrollar aplicaciones JavaScript. Además, permite a los desarrolladores compartir y reutilizar código, ahorrando tiempo y esfuerzo en el desarrollo de sus proyectos.  

Un sistema de gestión de paquetes es una herramienta informática que se encarga de automatizar el proceso de instalación, actualización y eliminación de programas o librerías en un sistema operativo. Estos paquetes suelen contener código fuente o ejecutable, así como documentación y otros recursos necesarios para su funcionamiento. 

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

## Notas 
- [Notion](https://tianmunooz.notion.site/Nuevo-Curso-de-NPM-Gesti-n-de-Paquetes-y-Dependencias-en-JavaScript-386718a496e3473ea60811fb8a6d1242)
- [Notion](https://luis-ariza.notion.site/NPM-Gesti-n-de-Dependencias-y-Paquetes-en-JavaScript-8d621bda1a3743f6a45f068dcdc2deb3)

## Instalación de NPM

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



### Comando más comunes en NPM

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