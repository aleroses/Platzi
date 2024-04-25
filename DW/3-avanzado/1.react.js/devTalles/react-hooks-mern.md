# React (Hooks y MERN)

## 1. Introducción

### 🟣 Introducción al curso

Se recomienda hacer las tareas de cada sección.

### 🟣 ¿Cómo funcionará el curso?

Trata de ver el curso en secuencia.

### 🟣 ¿Cómo hacer preguntas?

Revisa la sección de **Discusión** y crea un **Post**.

> Trata de agregar toda la información de una sola vez y de ser necesario deja tu código en un repositorio alojado en GitHub para que pueda ser revisado por los instructores y así puedan darte mucho mejor soporte.

### 🟣 Instalaciones necesarias y recomendadas

#### Instalaciones Necesarias

* [Google Chrome](https://www.google.com/chrome/)

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)

* [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Mongo Compass](https://www.mongodb.com/try/download/compass)

* [Git](https://git-scm.com/)

* [Node](https://nodejs.org/es/)

> Revisa la configuración básica de Git: [Apuntes](https://github.com/aleroses/Platzi/blob/master/DW/1-basico/005-git-github/git-github.md#8-crea-un-repositorio-de-git-y-haz-tu-primer-commit)

```bash
git config --list
  - Configuración por defecto de git
  - Vemos que aún no está nuestro nombre ni correo

git config --global user.name "John Lennon"
  - Cambiar usuarios globales

git config --global user.email "john.l@mail.com"
  - Cambiar email
```

#### Extensiones de VSCode

[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

#### Configuración del Bracket Pair Colorizer 2

Brakcet Pair está obsoleto.
[Obsoleto - Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

Solución:

- Presiona F1 para abrir búsqueda en VS Code.
- Busca Open Settings (UI)
- En Search settings copia y pega esto: 

```
"@id:editor.bracketPairColorization.enabled [@id:editor.guides.bracketPairs](https://id:editor.guides.bracketPairs/)"
```

También puedes usar el atajo `Ctrl + ,` y pegas en el buscador lo mostrado arriba.
  
Ahora asegúrate de que: 

> Editor > Bracket Pair Colorization: Enabled está marcado con un tick mark (activo)

---

> Editor > Guides. Bracket Pairs tiene la opción de "active" seleccionada.

A continuación haz de nuevo F1 y busca Open User Settings (JSON) o usa el atajo `Ctrl + ,` y busca el icono 📄 Open Settings (JSON)

Ahora en el fichero **settings.json** añade la siguiente propiedad al objeto json:

```json
"workbench.colorCustomizations": {
	"editorBracketHighlight.foreground1": "#fafafa",
	"editorBracketHighlight.foreground2": "#9F51B6",
	"editorBracketHighlight.foreground3": "#F7C244",
	"editorBracketHighlight.foreground4": "#F07850",
	"editorBracketHighlight.foreground5": "#97c26c",
	"editorBracketHighlight.foreground6": "#C497D4",
	"editorBracketHighlight.unexpectedBracket.foreground": "#fb6165"
},
```

#### Temas que estoy usando en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

#### Instalaciones recomendadas sobre React

* [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

[Instalaciones recomendadas](https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362)

### 🟣 ¡Únete a Nuestra Comunidad de DevTalles en Discord!

**¿Cómo unirse?**

- Haz clic en el siguiente enlace de invitación: [Comunidad DevTalles](https://discord.gg/pBjEVYTC7t)

## 2. Introducción a React y conceptos generales

### 🟣 Introducción a la sección

### 🟣 Temas puntuales de la sección

**¿Qué aprenderemos en esta sección?**

- ¿Qué es React?
- Conceptos generales
- Babel
- JSX

Daremos nuestros primeros pasos y una pequeña aplicación que nos ayudará a perderle el miedo a React rápidamente

### 🟣 ¿Qué es React?

- Librería: Para aplicaciones sencillas, intermedias y robustas.
- Declarativa: Es fácil de seguir patrones de diseño y crear UI interactivas.
- Eficiente: Los cambios se hacen solo en el elemento que se modificó.
- Predecible:
- Componentes: Pequeñas piezas encapsuladas fáciles de mantener.
- Server-side con Node
- Aplicaciones móviles con React Native.

¿Cómo luce el código de React?

```html
<div id="root"></div>
```

```jsx
const root = document.querySelector("#root");
ReactDOM.render(<h1>Hola mundo cruel</h1>, root);
```

También:

```html
<div id="root"></div>
```

```jsx
const root = document.querySelector("#root");
const tag = <h1>Hola mundo cruel</h1> // JSX
ReactDOM.render(tag, root);
```

El código JSX se podría crear de la siguiente manera:

```jsx
const tag = document.createElement('h1', null, `Hola, soy ${nombre}`)
```

### 🟣

### 🟣