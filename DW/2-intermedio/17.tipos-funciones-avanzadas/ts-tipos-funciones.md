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

Lo instalaremos de forma local, es decir, solo para nuestro proyecto: 

```bash
npm i typescript --save-dev
```

#### Versión Descargada

Podemos verificar la versión instalada de TypeScript:

```bash
npx tsc --version
```

#### Configuración por defecto

Inicialicemos TypeScript con una configuración básica:

```bash
npx tsc --init

# También
npx tsc --init --target es2021
```

#### Ruta del Output

Configuremos la ruta en donde se guardarán nuestros archivos transpilados de TypeScript:

1. Vamos al archivo `tsconfig.json` del proyecto.
2. Busquemos el atributo `"outDir"` y descomentemos esa línea de código de ser necesario: ![Descomentando el atributo outDir del archivo tsconfig.json de nuestro proyecto](https://static.platzi.com/media/articlases/Images/03-descomentando-el-atributo-outdir-del-archivo-tsconfig-json-de-nuestro-proyecto-curso-de-typescript-tipos-avanzados-y-funciones.png)
    
3. Indicamos que todos los archivos transpilados sean almacenados en una carpeta llamada `dist`: ![Indicamos que el output sea guardado en una carpeta llamada dist](https://static.platzi.com/media/articlases/Images/04-indicamos-que-el-output-sea-guardado-en-una-carpeta-llamada-dist-curso-de-typescript-tipos-avanzados-y-funciones.png)
    

Para comprobar que esto funciona, vamos a crear una carpeta `src` y dentro generemos un archivo `demo.ts` con el siguiente código de ejemplo:

```ts
type UserId = string | number; 
let userId: UserId;

userId = 'string'; userId = 1; 
```

#### Transpilación

Ahora ejecutemos mediante la terminal el comando `npx tsc` para transpilar el código TypeScript. Automáticamente, se nos creará una carpeta `dist`: 

![Indicamos que el output sea guardado en una carpeta llamada dist](https://static.platzi.com/media/articlases/Images/05-archivo-demo-ts-transpilado-a-codigo-javascript-curso-de-typescript-tipos-avanzados-y-funciones.png)

Es posible también transpilar de forma constante ante cualquier cambio que hagamos en nuestros archivos TypeScript:

`npx tsc --watch`

### Librería ts-node

Esta librería nos permite ejecutar directamente TypeScript en NodeJS. Con esto nos ahorramos el tener que transpilar archivos TypeScript primero y luego ejecutar los archivos transpilados JavaScript con Node.

#### Instalación de ts-node

Ejecutamos el siguiente comando:

```bash
npm install -D ts-node
```

Antes de pasar a ejecutar nuestro código TypeScript con esta librería, agreguemos `console.log('Hoola!' + userId);` en nuestro archivo `demo.ts`:

```ts
type UserId = string | number; let userId: UserId;

userId = 'string'; userId = 1;

console.log('Hoola!' + userId); // 👈 
```

#### Ejecutando TypeScript con ts-node

Para ello, en la terminal digitamos `npx ts-node` seguido del nombre del archivo TypeScript a ejecutar o la ruta donde se encuentre dicho archivo dentro de un determinado proyecto:

```bash
npx ts-node src/demo.ts
```

En nuestro caso, nuestro archivo `demo.ts` se encuentra dentro de la carpeta `src`.

Coméntanos qué otras configuraciones realizas cuando trabajas con proyectos de TypeScript.

### Dato 

Puedes instalar la extensión **Quokka.js** luego pulsar **F1** después seleccionar **Start on Current File** o también de manera rápida puedes presionar CTRL + K y luego Q.

## **3.** Enums

Un enum es un tipo de dato que nos permite **crear un set de opciones**. Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.

### Enums en TypeScript

Veamos algunos aspectos de los _enums_ en TypeScript:

- Los declaramos usando la palabra reservada `enum` seguido del nombre que tendrá este.
- Entre llaves estarán los datos llave-valor.
- Se recomienda que el nombre del `enum` y de las llaves dentro del mismo estén en mayúscula:

```ts
// ENUM 
enum ROLES { 
  ADMIN = "admin", 
  SELLER = "seller", 
  CUSTOMER = "customer", 
}

// TIPO DE DATO USER 
type User = { 
  username: string; 
  role: ROLES; 
}

// CONSTANTE 
const nicoUser: User = { 
  // `nicoUser` es del tipo de dato User 
  username: 'nicobytes', 
  role: ROLES.ADMIN 
  // Le asignamos el rol ADMIN que es uno de los 3 roles disponibles 
} 
```

La ventaja que nos da esto es que disponemos de una lista de valores predeterminados que podemos asignar a una variable o a un atributo de la misma. Por tanto, no podemos asignar otro valor que no este dentro de las opciones que nos brinde el `enum`: 

![Los posibles valores que puede tomar el atributo role (ADMIN, SELLER o CUSTOMER) en la constante nicoUser](https://static.platzi.com/media/articlases/Images/06-los-posibles-valores-que-puede-tomar-el-atributo-role-en-la-constante-nicouser-curso-de-typescript-tipos-avanzados-y-funciones.png)

### Analizando una librería con enums

[Capacitor](https://capacitorjs.com/) es una librería que nos ayuda a implementar aplicaciones multiplataformas. Realizaremos un pequeño análisis aparte de su código para observar cómo hacen empleo de los `enums` y cómo estos nos pueden ayudar en nuestros proyectos.

Podemos realizar la instalación con el siguiente comando: `npm install @capacitor/camera`

Ahora veamos el siguiente código que podemos implementar con dicha librería:

```ts
import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => { const image = await Camera.getPhoto({ quality: 90, allowEditing: true, resultType: CameraResultType.Uri }); }; 
```

Observamos que `CameraResultType` es un `enum` que restringe al atributo `resultType` a tener un valor dentro de las opciones del `enum`. En este caso, dicho atributo recibe el valor de la llave `Uri` del `enum`.

En conclusión, un `enum` nos ayuda a no equivocarnos cuando asignemos valores a una variable reduciendo las posibilidades de asignación a una lista de opciones predefinidas.

## **4.** Tuples

Las tuplas o _tuples_ nos permiten crear un **array fuertemente tipado especificando el tipo de dato de cada elemento,** así como una cantidad definida de elementos que podrá almacenar.

Las tuplas no vienen en el conjunto de tipos de datos por defecto de JavaScript

### Tuplas en TypeScript

Las definimos indicando entre `[]` el tipo de dato que cada elemento tendrá en la tupla.

```ts
const user: [string, number] = ['nicobytes', 15];
```

Al definir el tipado de cada uno también estamos definiendo la cantidad de valores que tendrá la tupla, por tanto, no podemos agregar más elementos. 

```ts
let user: [string, number];

user = ['nico']; 
// Error: la tupla debe almacenar 2 valores (un `string` y un `number`) 
user = ['nico', true]; 
// Error: el segundo elemento de la tupla debe ser del tipo `number` 
user = ['nico', 20]; 
// Correcto: el primer elemento es del tipo `string` y el segundo de tipo `number` 
```

#### Desestructuración

Podemos aplicar desestructuración para asignar a ciertas variables respectivamente los valores dentro de una tupla.

```ts
const user: [string, number] = ['nicobytes', 15];
const [username, age] = user;
console.log(username); // nicobytes
```

#### Nota

Este tipo de desestructuración también lo podemos ver en el hook `useState` de la librería React.

## **5.** Unknown type

El _unknown type_ nos indica que una variable es de **un tipo de dato desconocido**. Es similar a `any`, pero sin quitar el análisis de código estático que nos brinda TypeScript.

El tipo `unknown` nos **fuerza a hacer una verificación de tipo**. Esta es la forma que TypeScript sugiere trabajar con variables de las cuales no sabemos de qué tipo serán. Así evitamos utilizar constantemente `any`.

### Unknown type en TypeScript

Usamos el keyword `unknown` para declarar una variable de este tipo.

```ts
let unknownVar: unknown;
```

#### Unknown vs. Any

Con `any` podemos hacer lo que queramos, no hay restricción alguna, pero con `unknown` vamos a tener advertencias al momento de utilizar alguna función o método con variables de este tipo.

```ts
let unknownVar: unknown;

unknownVar.toUpperCase(); // Nos marcará el editor una advertencia 
```

Por ejemplo, no podemos directamente aplicar un método propio de un `string` a una variable `unknown`. Para ello debemos realizar una verificación de tipo para asegurarnos que se ejecutará dicho método siempre cuando `unknownVar` sea del tipo `string` en algún punto del programa:

```ts
let unknownVar: unknown;

if (unknownVar === 'string') {
  unknownVar.toUpperCase(); 
// Ahora ya no nos marcará como error. } 
```

#### Unknown en funciones

También podemos emplear `unknown` en funciones si no sabemos exactamente que nos va a devolver.

```ts
const parse = (str: string): unknown => { 
  return JSON.parse(str) 
}
```

## **6.** Never type

El _never type_ se usa para **funciones que nunca van a terminar o que detienen el programa**. Con esto TypeScript nos ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos un mensaje de error.

### Never type en funciones infinitas

En el siguiente código, TypeScript infiere que el tipo es `never`, ya que su ejecución será infinita. 

```ts
const withoutEnd = () => { while (true) { console.log('Nunca parar de aprender'); } }
```

### Never vs. Void

Las funciones del tipo `void` son aquellas que no retornan ningún dato, simplemente ejecutan las instrucciones dentro del bloque de la función. Por tanto, no debemos confundirlas con las de tipo `never`: 

```ts
const voidFunc = () => { 
  for(let i = 1; i <= 5; i++){ 
    console.log(i) 
  } 
}

voidFunc()

// Función infinita y de tipo Never 👇 
const neverFunc = () => { 
  while (true) { 
    console.log('Nunca parar de aprender'); 
  } 
} 
```

### Never type en código con errores

Una función también puede ser del tipo `never` cuando tenemos un `throw` que lance un error y, como resultado, haga detener la ejecución.

```ts
const fail = (message: string) => { 
// TypeScript infiere que esta función se de tipo `never` 
  throw new Error(message) 
}

const example = (input:unknown) => { 
  if(typeof input === 'string'){ 
    return 'Es un string'; 
  } else if (Array.isArray(input)){ 
    return 'Es un array'; 
  } 
  
  return fail('Not Match'); 
  // Lanzamos un error 
}

console.log(example('Hola')) 
//'Es un string' 
console.log(example([1,1,1,1])) 
// 'Es un array' 
console.log(example(1212)) 
// error: Uncaught Error: Not Match
console.log(example('Hola después del fail')) 
// NUNCA SE EJECUTA, porque se lanzó un error previamente 
```

## Otros apuntes

[Notin](https://francocarrara.notion.site/Curso-de-TypeScript-Tipos-Avanzados-y-Funciones-19ee4d14e21a41558ac1e04c1fbff870)