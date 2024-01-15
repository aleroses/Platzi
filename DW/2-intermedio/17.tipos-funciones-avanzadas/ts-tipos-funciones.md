# Curso de TypeScript: Tipos Avanzados y Funciones

> Inicio: `14-01-2024`  
> Final: `-01-2024`  

## **1.** ¿Ya tomaste el Curso de Fundamentos de TypeScript?

Aprenderemos a **sacar ventaja al análisis de código estático de TypeScript** en diferentes casos de uso. Además, conoceremos tipos de datos avanzados como enums y tuplas.

### Qué es TypeScript

TypeScript es un superset de JavaScript, pues sobre este lenguaje se añaden características adicionales como por ejemplo el tipado estático que no viene por defecto en JS.

Te recomendamos revisar el [Curso de Fundamentos de TypeScript](https://platzi.com/cursos/typescript/) para que tengas la bases suficientes para entender lo que te enseñaremos a lo largo de este [curso](https://platzi.com/cursos/typescript-tipos-avanzados/).

## **2.** Configuración del proyecto con ts-node

Acondicionemos nuestro entorno de trabajo con los archivos y configuraciones necesarias para trabajar con TypeScript. Además, haremos uso de la librería `ts-node` la cual nos va a permitir **ejecutar directamente archivos TypeScript en NodeJS** sin necesidad de hacer un proceso de transpilación.

### Entorno para trabajar con TypeScript

Haciendo empleo de la terminal y un editor de código (utilizaremos Visual Studio Code) realizaremos las configuraciones básicas para poder ejecutar de manera sencilla nuestro código en TypeScript.

#### Carpeta para nuestro archivos

1. Usando la terminal, creamos una carpeta `ts-app` e ingresamos a la misma
    
    `mkdir ts-app`
    
    `cd ts-app`
    
2. Abrimos la carpeta en Visual Studio Code mediante la línea de comandos.
    
    `code .`

#### Archivos básicos

Dentro de Visual Studio Code, crearemos los archivos `.editorconfig` y `.gitignore`.

#### Archivo .gitignore

El código dentro de `.gitignore` lo generaremos usando el website [gitignore.io](https://www.toptal.com/developers/gitignore).

![Página Gitignoreio - Colocamos como parámetros macOS, Linux, Windows y Node, luego le damos a Crear o Create](https://static.platzi.com/media/articlases/Images/01-pagina-gitignoreio-macos-linux-windows-y-node-como-parametros-luego-damos-en-create-curso-de-typescript-tipos-avanzados-y-funciones.png)

Como parámetros colocamos **macOS**, **Linux**, **Windows** y **Node**. Luego le damos al botón **Create**. Esto nos generará un archivo como el siguiente:

![Página Gitignoreio - Copiamos el código generado y los pegamos en nuestro archivo .gitgnore de nuestro proyecto](https://static.platzi.com/media/articlases/Images/02-pagina-gitignoreio-copiamos-codigo-generado-y-pegamos-en-nuestro-archivo-gitgnore-del-proyecto-curso-de-typescript-tipos-avanzados-y-funciones.png)

Copiamos todo el contenido y lo pegamos dentro del archivo `.gitignore`.

#### Archivo .editorconfig

Pegamos la siguiente configuración dentro de `.editorconfig`:

```
# Editor configuration, see [https://editorconfig.org](https://editorconfig.org/)

root = true

[*] charset = utf-8 indent_style = space indent_size = 2 insert_final_newline = true trim_trailing_whitespace = true

[*.ts] quote_type = single

[*.md] max_line_length = off trim_trailing_whitespace = false> 
```

#### Instalando TypeScript con Node

En la terminal, ejecutemos `npm init -y` dentro de la ruta de nuestro proyecto para inicializar Node con una configuración por defecto.

#### Instalación

Lo instalaremos de forma local, es decir, solo para nuestro proyecto: `npm i typescript --save-dev`

#### Versión Descargada

Podemos verificar la versión instalada de TypeScript:

`npx tsc --version`

#### Configuración por defecto

Inicialicemos TypeScript con una configuración básica:

`npx tsc --init`

#### Ruta del Output

Configuremos la ruta en donde se guardarán nuestros archivos transpilados de TypeScript:

1. Vamos al archivo `tsconfig.json` del proyecto.
2. Busquemos el atributo `"outDir"` y descomentemos esa línea de código de ser necesario: ![Descomentando el atributo outDir del archivo tsconfig.json de nuestro proyecto](https://static.platzi.com/media/articlases/Images/03-descomentando-el-atributo-outdir-del-archivo-tsconfig-json-de-nuestro-proyecto-curso-de-typescript-tipos-avanzados-y-funciones.png)
    
3. Indicamos que todos los archivos transpilados sean almacenados en una carpeta llamada `dist`: ![Indicamos que el output sea guardado en una carpeta llamada dist](https://static.platzi.com/media/articlases/Images/04-indicamos-que-el-output-sea-guardado-en-una-carpeta-llamada-dist-curso-de-typescript-tipos-avanzados-y-funciones.png)
    

Para comprobar que esto funciona, vamos a crear una carpeta `src` y dentro generemos un archivo `demo.ts` con el siguiente código de ejemplo:

```ts
type UserId = string | number; let userId: UserId;

userId = 'string'; userId = 1; 
```

#### Transpilación

Ahora ejecutemos mediante la terminal el comando `npx tsc` para transpilar el código TypeScript. Automáticamente, se nos creará una carpeta `dist`: ![Indicamos que el output sea guardado en una carpeta llamada dist](https://static.platzi.com/media/articlases/Images/05-archivo-demo-ts-transpilado-a-codigo-javascript-curso-de-typescript-tipos-avanzados-y-funciones.png)

Es posible también transpilar de forma constante ante cualquier cambio que hagamos en nuestros archivos TypeScript:

`npx tsc --watch`

### Librería ts-node

Esta librería nos permite ejecutar directamente TypeScript en NodeJS. Con esto nos ahorramos el tener que transpilar archivos TypeScript primero y luego ejecutar los archivos transpilados JavaScript con Node.

#### Instalación de ts-node

Ejecutamos el siguiente comando:

`npm install -D ts-node`

Antes de pasar a ejecutar nuestro código TypeScript con esta librería, agreguemos `console.log('Hoola!' + userId);` en nuestro archivo `demo.ts`:

```ts
type UserId = string | number; let userId: UserId;

userId = 'string'; userId = 1;

console.log('Hoola!' + userId); // 👈 
```

#### Ejecutando TypeScript con ts-node

Para ello, en la terminal digitamos `npx ts-node` seguido del nombre del archivo TypeScript a ejecutar o la ruta donde se encuentre dicho archivo dentro de un determinado proyecto:

`npx ts-node src/demo.ts`

En nuestro caso, nuestro archivo `demo.ts` se encuentra dentro de la carpeta `src`.

Coméntanos qué otras configuraciones realizas cuando trabajas con proyectos de TypeScript.


## Otros apuntes

[Notin](https://francocarrara.notion.site/Curso-de-TypeScript-Tipos-Avanzados-y-Funciones-19ee4d14e21a41558ac1e04c1fbff870)