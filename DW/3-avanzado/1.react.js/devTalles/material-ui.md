# Material UI

## 01. Instalación y configuraciones previas

Crear proyecto en React:

```bash
npm create vite@latest
cd mui
npm i
```

Instalación de Material UI + Roboto + Icons: 

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
```

Añadir en el `main.jsx`

```jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

Labs Components

```bash
npm install @mui/lab @mui/material

# NPM displays this command
npm install @mui/lab
```

- [Web course](https://bluuweb.dev/05-react/material-ui.html)
- [NPM labs](https://www.npmjs.com/package/@mui/lab)
- [Zenoo](https://zenoo.github.io/mui-theme-creator/)

Dejamos la siguiente estructura:

```bash
.
├── eslint.config.js
├── index.html
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

`src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { App } from "./App.jsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
```

`src/App.jsx`

```jsx
import { Button } from "@mui/material";

export const App = () => {
  return <Button variant="contained">xd</Button>;
};
```

Atajos `snippets`:

- rafc
- nfn
- anfn

### Extra

Si usas `rafc` para crear un componente y te aparece el  `import React from 'react';` en la parte superior, puedes quitarlo de la siguiente manera:

- Presiona `Ctrl + ,` o ve a los ⚙️`settings` 
- Busca `import React on Top`
- Desmarca el casillero:
	- React Snippets > Settings: Import React On Top
	- [ ] Controls if snippets should add ...
- Cierra todo para tomar la nueva configuración y listo.

[Comentario DevTalles](
https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36057270-nuestro-primer-componente/discussions/11618674)

## 02. Container y the "sx" prop (CSS fácil y rápido en tus componentes)

`src/App.jsx`

```jsx
import { Button, Container } from "@mui/material";

export const App = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: 5,
        borderStyle: "dotted",
        boxShadow: "0 2px 18px rgb(156, 48, 102)",
        // boxShadow: 14,
        p: 4,
        pb: 14,
      }}
    >
      <Button variant="contained">xd</Button>
    </Container>
  );
};

/* 
nfn
anfn
*/
```

- [Container](https://mui.com/material-ui/react-container/)
- [Customization](https://mui.com/material-ui/customization/how-to-customize/)

### 03. Typography

`src/App.jsx`

```jsx
import {
  Button,
  Container,
  Typography,
} from "@mui/material";

export const App = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: 5,
        borderStyle: "dotted",
        boxShadow: "0 2px 18px rgb(156, 48, 102)",
        // boxShadow: 14,
        p: 4,
        pb: 14,
      }}
    >
      {/* The default is a "p" */}
      <Typography variant="h1" color="initial">
        Title MUI H1
      </Typography>
      <Typography
        variant="h2"
        /* The actual tag is an h4 */
        component="h4"
        color="initial"
        textAlign="center"
        /* 15x8 = 120px */
        mt={15}
      >
        Title MUI H2/H4
      </Typography>
      <h1>Title JSX</h1>
      
      <Button variant="contained">xd</Button>
    </Container>
  );
};

/* 
nfn
anfn
*/
```

- [Typography](https://mui.com/material-ui/react-typography/)

## 04. Box component

`src/App.jsx`

```jsx
import { Box, Container } from "@mui/material";

export const App = () => {
  return (
    <Container component="section" maxWidth="xl">
      <h1>Title JSX</h1>
      <Box component="article" sx={{ border: 2 }}>
        Box MUI
      </Box>
    </Container>
  );
};

/* 
nfn
anfn
*/
```

[Box](https://mui.com/material-ui/react-box/)


paste html as jsx

linked editing

```bash
```

⚙️