# Material UI

[Course](https://www.youtube.com/watch?v=Un0qRgXNS9E&list=PLPl81lqbj-4J2xx_YAb97dpCG1rxl2wv-)

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

## 05. Introducción a Theming

`src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { App } from "./App.jsx";

const theme = createTheme({
  palette: { 👈👀👇
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>   👀👇
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

`src/App.jsx`

```jsx
import {
  Container,
  Typography,
  Button,
} from "@mui/material";

export const App = () => {
  return (
    <Container component="section" maxWidth="xl">
      <h1>Title JSX</h1>
      <Typography variant="h1" color="primary"👈👀>
        Title H1 MUI
      </Typography> 👀👇
      <Button variant="contained">Button MUI</Button>
    </Container>
  );
};

/* 
nfn
anfn
*/
```

- [Customization color](https://mui.com/material-ui/customization/color/)
- [Zenoo](https://zenoo.github.io/mui-theme-creator/)

## 06. Botones e Iconos

`src/App.jsx`

```jsx
import {
  Container,
  Typography,
  Button,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const App = () => {
  return (
    <Container component="section" maxWidth="xl">
      <h1>Title JSX</h1>
      <Typography variant="h1" color="primary">
        Title H1 MUI
      </Typography>
      <Button variant="contained" color="error">
        Button MUI
      </Button>
      <Button variant="outlined" startIcon={<AcUnitIcon />}>
        Button MUI
      </Button>
      <Button
        variant="contained"
        color="success"
        endIcon={<AcUnitIcon />}
      >
        Button MUI
      </Button>
    </Container>
  );
};

/* 
nfn
anfn
*/
```

- [Button](https://mui.com/material-ui/react-button/)
- [Icons](https://mui.com/material-ui/icons/)
- [Material Icons](https://mui.com/material-ui/material-icons/)

## Extensiones y Trucos de VSCode para React y Tailwind CSS

### Extensiones 
- Version lens
- Paste html as jsx

### Trucos VSC

Copiar objeto en TS: 
- `Ctrl + Shift + P` : JSON to TS: Convert from clipboard

Terminal Width total
- Settings: Workbench > Layout Control: Enabled
- Clic Icon: Panel alignment: Justify

Cambiar etiqueta inicio y final
- Settings: Linked editing [✅]

Settings: Prettier: Single Attribute Per Line

## 07. Introducción a GRID (responsive layout)

Material UI ofrece un sistema de cuadrícula (Grid) que facilita la creación de diseños responsivos en tus aplicaciones React. Este sistema se basa en una cuadrícula de 12 columnas y utiliza propiedades como `xs`, `sm`, `md`, `lg` y `xl` para definir cómo se distribuyen los elementos en diferentes tamaños de pantalla.

### Grid2 en Material UI

`Grid2` es la versión actualizada del componente de cuadrícula en Material UI. Se implementa utilizando CSS Flexbox, lo que proporciona una gran flexibilidad en la disposición de los elementos. Para crear una cuadrícula, se utiliza el componente `Grid2` con la propiedad `container`.

### Breakpoints: xs, sm, md, lg y xl

Los breakpoints (`xs`, `sm`, `md`, `lg`, `xl`) son puntos de interrupción que determinan cómo se comporta el diseño en diferentes anchos de pantalla. Cada uno corresponde a un rango de anchura específico:

- `xs` (extra pequeño): 0px o más
- `sm` (pequeño): 600px o más
- `md` (mediano): 900px o más
- `lg` (grande): 1200px o más
- `xl` (extra grande): 1536px o más

Puedes asignar valores numéricos a estos breakpoints para indicar cuántas de las 12 columnas disponibles debe ocupar un componente en cada tamaño de pantalla. Por ejemplo, `xs={12}` significa que el componente ocupará las 12 columnas (100% del ancho) en pantallas extra pequeñas, mientras que `md={6}` indica que ocupará 6 columnas (50% del ancho) en pantallas medianas.

**Ejemplo de uso**

`src/App.jsx`

```jsx
import { Grid2, Typography } from "@mui/material";

export const App = () => {
  return (
    <Grid2 container spacing={2} textAlign="center">
      <Grid2 size={{ xs: 6, md: 8 }}>
        <Typography component="span">size=8</Typography>
      </Grid2>
      <Grid2 size={{ xs: 6, md: 4 }}>
        <Typography component="span">size=4</Typography>
      </Grid2>
      <Grid2 size={{ xs: 6, md: 4 }}>
        <Typography component="span">size=4</Typography>
      </Grid2>
      <Grid2 size={{ xs: 6, md: 8 }}>
        <Typography component="span">size=8</Typography>
      </Grid2>
    </Grid2>
  );
};

/* 
nfn
anfn
*/
```

[Grid2](https://mui.com/material-ui/react-grid2/)

```bash
```

⚙️
👈👀
👈👀👇