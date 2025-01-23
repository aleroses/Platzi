# GitHub Pages

GitHub Pages es un servicio de alojamiento de sitios web estáticos que se ejecutan directamente desde un repositorio de GitHub. GitHub Pages se utiliza principalmente para alojar sitios web personales, blogs, documentación de proyectos, páginas de inicio, entre otros. 

Además, GitHub Pages es gratuito y fácil de configurar. Los usuarios pueden crear un sitio web público de forma gratuita sin necesidad de configurar un servidor web y sin tener que preocuparse por el mantenimiento de la infraestructura de alojamiento.

## Proyecto básico  

Primeros haremos un ejemplo con un proyecto muy sencillo, según esta estructura de archivos y carpetas:  

```bash
╰─ tree -L 3
.
├── .gitignore  
├── index.html      
├── node_modules    
├── package-lock.json
└── package.json
```

Después de ejecutar los comandos de los puntos siguientes deberías tener los archivos y carpetas descritos líneas arriba, por ahora solo crea un `index.html`. 

### 1. Verificar la versión de Node

Debes tener [Nodejs](https://nodejs.org/es) instalado, para verificar la versión de Node presiona `Ctrl + ñ` lo que abrirá la consola de Visual Studio Code, luego corre el siguiente comando: 

```bash
- node -v 
// también 
- node --version
```

Inicializamos el proyecto con NPM, esto creará en automático un archivo llamado `package. json` que nos servirá para crear scripts, entre otras cosas.  

```bash
npm init -y
```

 `package. json`  
```json
{
  "name": "delete",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {👈👀 //Importante
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Este es un resumen de algunos datos de nuestro proyecto como nombre, versión, etc. 

### 2. Modulo gh-pages de NPM

```bash
// Instalación: 
npm i gh-pages
```

```bash
// Con esto te aseguras que instalas la ultima versión
npm i gh-pages@latest
```

Esto nos crea una carpeta `node_modules` que al final del proyecto cuando tengamos que subir la web a GitHub Pages podemos ignorarla y para eso usamos un archivo `.gitignore` y agregamos `node_modules`. 

Si revisamos nuestro archivo `package.json` veremos la versión de `gh-pages` instalada. 

```bash
{
  "name": "delete",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gh-pages": "^5.0.0"👈👀
  }
}
```

### 3. Vulnerabilidades 

En caso la terminal te muestre algo así…

```bash
up to date, audited 43 packages in 695ms

5 packages are looking for funding
  run `npm fund` for details
👇👀
4 moderate severity vulnerabilities 👈👀

To address all issues (including breaking changes), run: 
  npm audit fix --force 👈👀

Run `npm audit` for details. 👈👀
```

Debemos ejecutar los comandos que nos muestra en el mensaje: 

```bash
// Para tener detalles 
- npm audit 
// Le damos solución a las vulnerabilidades 
- npm audit fix --force
- npm audit
	- found 0 vulnerabilities
```

- [NPM gh-pages](https://www.npmjs.com/package/gh-pages)

### 4. Uso de Git 

Inicializamos un repositorio de Git en nuestro proyecto. 

```bash
- git init 
- git status
- git add .
// Si quieres sacar los cambios de staging puedes usar cualquiera de estos dos comandos
	- git rm --cached
	- git reset HEAD
- git commit -am "Mi primer commit"
```


- [Pagina oficial de GitHub Pages](https://pages.github.com/)

### 5. GitHub 

Creamos un nuevo repositorio, solo revisa el nombre de la rama con que se está creando, estos pueden ser `main` o `master` y debe coincidir con el nombre de la rama creada localmente, debemos tenerlo en cuenta para no tener conflictos mas adelante. 

Copiamos el enlace HTTPS o SSH y enlazamos el repositorio remoto con el local: 

```bash
- git branch
- git remote add origin git@github.com:aleroses/delete-ghpages.git
- git remote -v
- git push -u origin master
```

### 6. Ejecutar modulo gh-pages

Publicamos en GitHub Pages todo lo que está al inicio o en la raíz del proyecto:  

```bash
- npx gh-pages -d .
	- Published ✨👈👀
```

Ahora si revisamos nuestro repositorio en GitHub veremos que tenemos una rama extra llamada `gh-pages`. 

Para ver el enlace de nuestro proyecto desplegado nos vamos a `settings/Pages`. 

📌En caso no se muestre el enlace de tu web, asegurate de tener seleccionada la rama **`gh-pages` `/(root)`**

![](https://i.postimg.cc/9QYNHb0t/gh-pages.png)

### 7. Actualizando nuestro proyecto

Posteriormente necesitaremos hacer cambios a nuestro proyecto, en este caso se ve así: 

```bash
╰─ tree -L 3
.
├── index.html
├── js
│   └── main.js
├── node_modules
├── package-lock.json
├── package.json
└── styles
    └── main.css
```

Ejecutamos 

```bash
- git status
- git add .
- git commit -am "Segundo commit"
- git push origin master
- npx gh-pages -d .
	- Published ✨👈👀
```

Si quieren tener un comando personalizado y en lugar de `npx gh-pages` ejecutar tu propio comando, deben agregarlo en el archivo `package.json`.

```json
{
  "name": "delete",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "deploy": "gh-pages -d ." ✨👈👀
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gh-pages": "^5.0.0"
  }
}
```

Nuevamente guardamos cambios en git, enviamos cambios a GitHub y publicamos en GitHub Pages:  

```bash
- git status
- git add .
- git commit -am "Tercer commit"
- git push origin master
- npm run deploy ✨👈👀
	- delete@1.0.0 deploy
	- gh-pages -d .
	- Published ✨👈👀
```

📌 Nota: El despliegue en GitHub Pages **tarda un poco**, así que ten paciencia al momento de ver los cambios en el navegador. 

## Proyectos que usan Frameworks 

Esto sirve si creamos proyectos de la siguiente manera o similares:

```bash
npm create vite
```

Empezamos con la siguiente estructura:

```bash
.
├── eslint.config.js
├── index.html
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
├── src
│   ├── App.jsx
│   ├── App.module.css
│   ├── components
│   │   └── Statistics.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

En este proyecto desplegaremos usando la carpeta `dist` que se creará más adelante.

### 1. Configura el `vite.config.js`

Asegúrate de configurar el atributo `base` en tu archivo `vite.config.js` para que apunte al nombre del repositorio en GitHub. Por ejemplo, si tu repositorio se llama `mi-proyecto` o en este caso `portfolio`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", 👈👀
});
```

### 2. Instala el paquete `gh-pages`

Este paquete te permitirá desplegar fácilmente en GitHub Pages.

```bash
npm install gh-pages --save-dev
```

### 3. Configura los scripts en `package.json`

Edita tu `package.json` para agregar un `script` de despliegue. Asegúrate de que quede algo así:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview", 👀👇
  "deploy": "npm run build && gh-pages -d dist" ✨
}
```

- El script `build` generará la carpeta `dist` con los archivos listos para producción.
- El script `deploy` usará `gh-pages` para publicar el contenido de `dist` en GitHub Pages.

### 4. Asegúrate de que tu repositorio esté configurado correctamente

Inicializa el repositorio si aún no lo has hecho:

```bash
git init
git remote add origin https://github.com/tu-usuario/mi-proyecto.git
git add .
git commit -m "Primer commit"
git branch -M main
git push -u origin main
```

### 5. Ejecuta el script de despliegue

```bash
npm run deploy
```

Esto publicará tu proyecto en GitHub Pages (en la rama `gh-pages`).

---
## Plantillas de GitHub Pages para blogs

Frameworks para sitios estáticos:  
- Jekyll 
- Gatsby: React 
- HUGO

---
- [Package gh-pages](https://www.npmjs.com/package/gh-pages)
- 🔥 [Apuntes Desplegar con Vite y Yarn](https://github.com/aleroses/Platzi/blob/master/DW/2-intermedio/023.SPA-js-vanilla/spa-js-vanilla.md#14-github-pages)
- [🔥 GitHub Pages | Sitios Estáticos Gratis con gh-pages (y Nodejs)](https://www.youtube.com/watch?v=G2FoSpsq3Rw&t=683s)