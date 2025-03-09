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

## 03. Typography

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

## 08. Práctica con styled (@emotion/styled), Box y Flexbox

**Paper** en Material UI es un componente que proporciona una superficie elevada con efecto de sombra, simulando el aspecto del papel físico. Su propósito principal es mejorar la jerarquía visual y la organización de la interfaz, ayudando a diferenciar secciones de contenido mediante elevación y bordes redondeados.

- Aplica una sombra (usando `elevation`) para dar efecto de profundidad.
- Tiene bordes redondeados por defecto.
- Sirve como base para tarjetas, modales y otros contenedores visuales.
- Se puede personalizar con `variant` (`elevation`, `outlined`), `square`, y `component` para definir su comportamiento.

`src/App.jsx`

```jsx
import { Container } from "@mui/material";
import { Product } from "./components/Product";

export const App = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};

/* 
nfn
anfn
*/
```

`src/components/Product.jsx`

```jsx
import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
} from "@mui/material";

export const Product = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://www.transparencia.unam.mx/lib/fullpage/examples/imgs/bg2.jpg"
        alt="trans"
      />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
        <Typography variant="h4" color="initial">
          Product Name
        </Typography>
        <Typography variant="body1" color="initial">
          Product Description
        </Typography>
        <Button variant="contained">Add Card</Button>
      </Box>
      <Box component="p" sx={{ mr: 2 }}>
        $19.99
      </Box>
    </Paper>
  );
};
```

Ejemplo de práctica:

`src/App.jsx`

```jsx
import { Grid2 } from "@mui/material";
import { Product } from "./components/Product";

export const App = () => {
  return (
    <Grid2
      container
      component="section"
      spacing={2}
      sx={{
        justifyContent: "center",
        p: 0.5,
        // gap: 1,
      }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
    </Grid2>
  );
};

/* 
nfn
anfn
*/
```

`src/App.jsx`

```jsx
import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
} from "@mui/material";

export const Product = () => {
  const Img = styled("img")({
    width: "50%",
    maxWidth: 420,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      component="article"
      size={{ xs: 12, sm: 6, md: 3 }}
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "primary.main",
        gap: 2,
        p: 0.5,
      }}
    >
      <Img
        src="https://www.transparencia.unam.mx/lib/fullpage/examples/imgs/bg2.jpg"
        alt="docs"
      />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 1 }}>
        <Typography variant="h6" color="initial">
          Product Name
        </Typography>
        <Typography variant="body2" color="initial">
          Product Description
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "secondary.main" }}
        >
          Add Card
        </Button>
      </Box>
      <Box component="p" sx={{ mr: 2 }}>
        $19.99
      </Box>
    </Paper>
  );
};
```

[Paper](https://mui.com/material-ui/react-paper/)

## 09. Card component

El componente **Card** de Material UI es un contenedor flexible que se usa para presentar información agrupada de manera visualmente atractiva. Se basa en **Paper**, por lo que también tiene elevación y bordes redondeados. Su propósito es estructurar contenido como imágenes, textos y acciones de manera organizada.

**Subcomponentes de Card**

1. **`CardHeader`** → Encabezado con título, subtítulo y un avatar o icono opcional.
2. **`CardMedia`** → Muestra imágenes o videos en la tarjeta.
3. **`CardContent`** → Contiene el texto o elementos principales dentro de la tarjeta.
4. **`CardActions`** → Sección para botones y acciones (como "Me gusta", compartir, etc.).
5. **`CardActionArea`** → Convierte toda la tarjeta en un área clickeable.

Su objetivo es mejorar la presentación de contenido en interfaces modernas, agrupando información relevante con una estructura visual clara y estandarizada. Es ideal para mostrar perfiles, productos, publicaciones y más.

```
- Card
- CardActionArea
	- CardMedia
	- CardContent
- CardActions
	- Button
```

`src/App.jsx`

```jsx
import { Grid2 } from "@mui/material";
import { BlueCard } from "./components/BlueCard";

export const App = () => {
  return (
    <Grid2 component="section" sx={{ m: 5 }}>
      <BlueCard />
    </Grid2>
  );
};

/* 
nfn
anfn
*/
```

`src/components/BlueCard.jsx`

```jsx
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

export const BlueCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        bgcolor: "primary.main",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://lh4.googleusercontent.com/proxy/MBRijYwc-zZG_FNJPsqlbLfqE8W9wa373AI1-kfGLB1BFPPKh_GeX370IG6-8lewaoGm_gDXK7z8_f1mZdm2okb0xuoUq_z4_7HhauxbH4RHKPSXXiF4MQ"
          height="200"
          alt="iguana"
        />
        <CardContent>
          <Typography variant="h5" color="initial">
            Card Title
          </Typography>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nisi, tenetur! Minus eveniet,
            animi unde saepe iste magni pariatur rerum
            veniam similique modi in asperiores, dolore non
            magnam dignissimos. Explicabo, vero?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ pl: 2 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "secondary.main" }}
        >
          Add
        </Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  );
};
```

[Card](https://mui.com/material-ui/react-card/)

## 10. Navbar responsive (Parte #01) List component

### Lists en Material UI

El componente **List** se usa para mostrar elementos organizados en una lista, permitiendo estructurar información de forma clara y accesible. Es altamente personalizable y admite interactividad.

Subcomponentes de List

1. **List**: un contenedor para elementos de lista. Se renderiza como un `<ul>` por defecto.
2. **List Item**: un elemento común de la lista. Se renderiza como un `<li>` por defecto.
3. **List Item Button**: un elemento de acción para usar dentro de un elemento de lista.
4. **List Item Icon**: un ícono para usar dentro de un elemento de lista.
5. **List Item Avatar**: un avatar para usar dentro de un elemento de lista.
6. **List Item Text**: un contenedor dentro de un elemento de lista, utilizado para mostrar contenido de texto.
7. **List Divider**: un separador entre elementos de la lista.
8. **List Subheader**: una etiqueta para una lista anidada.

`src/navbar/NavListDrawer.jsx`

```jsx
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export const NavListDrawer = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "darkturquoise" }}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox"></ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts"></ListItemText>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#trash">
              <ListItemText>Trash</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#spam">
              <ListItemText>Spam</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
```

`src/navbar/Navbar.jsx`

```jsx
import { NavListDrawer } from "./NavListDrawer";

export const Navbar = () => {
  return (
    <>
      <NavListDrawer></NavListDrawer>
    </>
  );
};
```

`src/App.jsx`

```jsx
import { Grid2 } from "@mui/material";
import { Navbar } from "./navbar/Navbar";

export const App = () => {
  return (
    <Grid2 component="section" sx={{ m: 5 }}>
      <Navbar />
    </Grid2>
  );
};

/* 
nfn
anfn
*/
```

- [List](https://mui.com/material-ui/react-list/)

## 11. Navbar responsive (Parte #02) Drawer component

### Drawer

El componente **Drawer** de Material UI, también conocido como "navigation drawer" o "sidebar", proporciona un acceso ergonómico a diferentes secciones o funcionalidades de una aplicación, como cambiar de cuenta. Puede estar siempre visible en pantalla o ser controlado mediante un ícono de menú de navegación.

Variantes del Drawer

1. **Temporary drawer**: Se muestra sobre el contenido principal y puede ser abierto o cerrado por el usuario. Es ideal para vistas móviles o cuando se desea mantener el enfoque en el contenido principal.
2. **Permanent drawer**: Siempre visible en la interfaz, generalmente anclado al lado izquierdo o derecho de la pantalla. Se utiliza en diseños de escritorio donde el espacio lo permite, proporcionando acceso constante a las opciones de navegación.
3. **Drawer Deslizable**: Similar al temporal, pero permite abrirse mediante gestos de deslizamiento, ofreciendo una experiencia más intuitiva en dispositivos táctiles.

Propiedades Importantes

- **`anchor`**: Determina desde qué lado de la pantalla aparece el Drawer. Los valores posibles son `left` (por defecto), `right`, `top` y `bottom`.
- **`open`**: Controla si el Drawer está visible (`true`) u oculto (`false`).
- **`onClose`**: Función que se ejecuta cuando el Drawer debe cerrarse, por ejemplo, al hacer clic fuera de él o al presionar la tecla Esc.

`src/navbar/Navbar.jsx`

```jsx
import { Button, Drawer } from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="container"
        onClick={() => setOpen(true)}
        sx={{ bgcolor: "primary.main" }}
      >
        Open Drawer
      </Button>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer />
      </Drawer>
    </>
  );
};
```

[Drawer](https://mui.com/material-ui/react-drawer/)

## 12. Navbar responsive (Parte #03) AppBar component

### App Bar

La App bar muestra información y acciones relacionadas con la pantalla actual.

La App bar superior proporciona contenido y acciones vinculadas a la pantalla actual. Se utiliza para la identidad de la marca, títulos de pantalla, navegación y acciones.

Puede transformarse en una barra de acciones contextual o usarse como una barra de navegación.

### flexGrow

En Material UI, `flexGrow` es una propiedad del sistema de estilos basada en **Flexbox**. Controla cómo un elemento dentro de un contenedor flexible (con `display: flex`) crece para ocupar el espacio disponible.

Básicamente:

- **Si `flexGrow` es 0** (por defecto), el elemento no crecerá más allá de su tamaño inicial.
- **Si `flexGrow` es mayor a 0**, el elemento crecerá proporcionalmente al espacio disponible dentro del contenedor flexible.

Ejemplo 1: Distribución Equitativa

Si todos los elementos dentro de un `Box` tienen `flexGrow: 1`, ocuparán el mismo espacio disponible.

```jsx
import Box from '@mui/material/Box';

export default function FlexGrowExample() {
  return (
    <Box display="flex" sx={{ height: 100, bgcolor: 'lightgray' }}>
      <Box sx={{ flexGrow: 1, bgcolor: 'red' }}>Item 1</Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'blue' }}>Item 2</Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'green' }}>Item 3</Box>
    </Box>
  );
}
```

🡆 **Resultado**: Cada `Box` tendrá el mismo ancho dentro del contenedor.

Ejemplo 2: Distribución Desigual

Si un elemento tiene un `flexGrow` mayor, ocupará más espacio en proporción.

```jsx
import Box from '@mui/material/Box';

export default function FlexGrowExample() {
  return (
    <Box display="flex" sx={{ height: 100, bgcolor: 'lightgray' }}>
      <Box sx={{ flexGrow: 1, bgcolor: 'red' }}>Item 1</Box>
      <Box sx={{ flexGrow: 2, bgcolor: 'blue' }}>Item 2</Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'green' }}>Item 3</Box>
    </Box>
  );
}
```

🡆 **Resultado**:

- `Item 1` e `Item 3` ocuparán el mismo espacio.
- `Item 2` será el doble de ancho que los otros elementos.

Ejemplo 3: Un solo elemento que crece

Si solo un elemento tiene `flexGrow: 1`, absorberá todo el espacio disponible.

```jsx
import Box from '@mui/material/Box';

export default function FlexGrowExample() {
  return (
    <Box display="flex" sx={{ height: 100, bgcolor: 'lightgray' }}>
      <Box sx={{ bgcolor: 'red' }}>Item 1</Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'blue' }}>Item 2</Box>
      <Box sx={{ bgcolor: 'green' }}>Item 3</Box>
    </Box>
  );
}
```

🡆 **Resultado**: `Item 2` ocupará todo el espacio disponible, mientras que `Item 1` y `Item 3` mantendrán su tamaño natural.

#### **Resumen**

- `flexGrow` determina cuánto crece un elemento dentro de un contenedor `flex`.
- **Valores iguales** → Distribución equitativa.
- **Valores diferentes** → Crecimiento proporcional.
- **Si un solo elemento tiene `flexGrow: 1`**, ocupará todo el espacio restante.

Este comportamiento es muy útil en **layouts responsivos**, por ejemplo, cuando quieres que un elemento ocupe todo el espacio restante mientras otros mantienen su tamaño. 🚀

`src/navbar/Navbar.jsx`

```jsx
import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const navLinks = [
  {
    title: "Home",
    path: "#",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "#login",
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "#register",
    icon: <DraftsIcon />,
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            aria-label=""
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component="a"
                href={item.path}
                color="inherit"
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
```

`src/navbar/NavListDrawer.jsx`

```jsx
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
```

- [App bar](https://mui.com/material-ui/react-app-bar/)
- [CSS flex-grow](https://developer.mozilla.org/es/docs/Web/CSS/flex-grow)

## AppBar + React Router v.7.2 en Material UI (Navbar responsive)

Instalamos React Router:

```bash
npm i react-router
```

Estructura actual:

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
│   ├── App.jsx
│   ├── assets
│   ├── components
│   │   ├── BlueCard.jsx
│   │   └── Product.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── navbar
│   │   ├── Navbar.jsx
│   │   └── NavListDrawer.jsx
│   └── pages 👈👀👇
│       ├── Home.jsx
│       ├── Login.jsx
│       └── Register.jsx
└── vite.config.js
```

`src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { App } from "./App.jsx";

const theme = createTheme({
  palette: {
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
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter> 👈👀
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
```

`src/App.jsx`

```jsx
import { Route, Routes } from "react-router";
import { Container, Grid2 } from "@mui/material";

import { Navbar } from "./navbar/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import {
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
} from "@mui/icons-material";

const navArrayLinks = [
  {
    title: "Home",
    path: "/", 👈👀
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "/login", 👈👀
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "/register", 👈👀
    icon: <DraftsIcon />,
  },
];

export const App = () => {
  return (
    <>
      <Grid2 component="section" sx={{ m: 2 }}>
        <Navbar navArrayLinks={navArrayLinks} />
        <Container sx={{ mt: 5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </Container>
      </Grid2>
    </>
  );
};

/* 
nfn
anfn
*/
```

`src/navbar/Navbar.jsx`

```jsx
import { useState } from "react";
import { NavLink } from "react-router";
import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { NavListDrawer } from "./NavListDrawer";

export const Navbar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navArrayLinks.map((item) => (
              <Button
                key={item.title}
                component={NavLink}
                to={item.path}
                color="inherit"
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          NavLink={NavLink} 👈👀👇
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};
```

`src/navbar/NavListDrawer.jsx`

```jsx
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavListDrawer = ({
  navArrayLinks,
  NavLink, 
  setOpen, 👈👀
}) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton 👀👇
                component={NavLink}
                to={item.path} 👈👀👇
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
```

`src/pages/Home.jsx`

```jsx
export const Home = () => {
  return <h1>Home</h1>;
};
```

`src/pages/Login.jsx`

```jsx
export const Login = () => {
  return <h1>Login</h1>;
};
```

`src/pages/Register.jsx`

```jsx
export const Register = () => {
  return <h1>Register</h1>;
};
```

[React Router](https://reactrouter.com/home)

## Crear alertas personalizadas con MUI (Alert, Snackbars y Notistack)

### Stack

El componente **Stack** es un contenedor que organiza sus elementos hijos en una dirección vertical u horizontal, con opciones para espaciar y dividir entre cada elemento. Es ideal para diseños unidimensionales, mientras que el componente Grid se prefiere cuando se necesita una disposición tanto vertical como horizontal.

**Uso básico:**

```jsx
import Stack from '@mui/material/Stack';

function BasicStack() {
  return (
    <Stack spacing={2}>
      <div>Elemento 1</div>
      <div>Elemento 2</div>
      <div>Elemento 3</div>
    </Stack>
  );
}
```

En este ejemplo, los elementos se disponen verticalmente con un espacio de 2 unidades entre ellos.

**Propiedades destacadas:**

- **direction:** Define la dirección del Stack, pudiendo ser "row" (horizontal) o "column" (vertical).
- **spacing:** Establece el espacio entre los elementos hijos.
- **divider:** Permite insertar un divisor entre los elementos para una separación visual clara.

### Alert

El componente **Alert** proporciona mensajes breves y potencialmente sensibles al tiempo de manera discreta. Se utiliza para informar a los usuarios sobre procesos que una aplicación ha realizado o realizará, apareciendo temporalmente en la interfaz sin interrumpir la experiencia del usuario.

**Uso básico:**

```jsx
import Alert from '@mui/material/Alert';

function BasicAlert() {
  return (
    <Alert severity="success">
      Esta es una alerta de éxito.
    </Alert>
  );
}
```

Este ejemplo muestra una alerta con un mensaje de éxito.

**Propiedades destacadas:**

- **severity:** Indica la importancia o tipo de la alerta, como "error", "warning", "info" o "success".
- **variant:** Define el estilo de la alerta, pudiendo ser "filled", "outlined" o "standard".
- **icon:** Permite personalizar el ícono que aparece junto al mensaje de la alerta.

**Consideraciones importantes:**

Las alertas deben proporcionar información clara y concisa sin interrumpir la experiencia del usuario. No deben confundirse con los diálogos de alerta, que están diseñados para interrumpir al usuario y requerir una respuesta. Para este comportamiento, se recomienda utilizar el componente Dialog de Material UI.

### Snackbar

El componente **Snackbar** en Material UI proporciona mensajes breves y temporales que informan a los usuarios sobre procesos que una aplicación ha realizado o realizará. Aparecen temporalmente, hacia la parte inferior de la pantalla, sin interrumpir la experiencia del usuario y sin requerir interacción para desaparecer.

**Características principales:**

- **Posición:** La posición del Snackbar en la pantalla se controla mediante la propiedad `anchorOrigin`, que permite especificar la alineación vertical y horizontal.
- **Duración:** La propiedad `autoHideDuration` define el tiempo en milisegundos que el Snackbar permanece visible antes de desaparecer automáticamente.
- **Acciones:** Es posible incluir acciones en el Snackbar, como botones, utilizando la propiedad `action`.

**Ejemplo básico de uso:**

```jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

function SimpleSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Mostrar Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Acción realizada"
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            DESHACER
          </Button>
        }
      />
    </div>
  );
}
```

En este ejemplo, al hacer clic en el botón "Mostrar Snackbar", se despliega un Snackbar con el mensaje "Acción realizada" y una opción para "DESHACER" la acción.

**Consideraciones adicionales:**

- **Un solo Snackbar a la vez:** Solo debe mostrarse un Snackbar en pantalla en un momento dado para evitar saturar al usuario con múltiples mensajes.
- **No intrusivo:** Los Snackbars están diseñados para no interrumpir la experiencia del usuario y desaparecen automáticamente después de un período determinado.

### Notistack

Notistack es una biblioteca de notificaciones para React que simplifica la implementación de snackbars (mensajes breves que aparecen en la parte inferior de la pantalla) en tus aplicaciones web.

**Características principales de Notistack:**

- **Gestión de múltiples notificaciones:** Permite mostrar varias notificaciones simultáneamente, apilándolas de manera ordenada.
- **Personalización:** Ofrece opciones para personalizar la apariencia y el comportamiento de las notificaciones, incluyendo variantes como éxito, error, advertencia e información.
- **Compatibilidad con transiciones:** Facilita la implementación de animaciones de entrada y salida para las notificaciones, utilizando componentes de transición.

**Implementación básica de Notistack con animaciones:**

1. **Instalación de Notistack:**
    
    ```bash
    npm install notistack
    ```
    
2. **Configuración del `SnackbarProvider`:**
    
    Envuelve tu aplicación con el componente `SnackbarProvider` para habilitar el uso de notificaciones en toda la aplicación:
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { SnackbarProvider } from 'notistack';
    import App from './App';
    
    ReactDOM.render(
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>,
      document.getElementById('root')
    );
    ```
    
    En este ejemplo, `maxSnack={3}` indica que se pueden mostrar hasta tres notificaciones simultáneamente.
    
3. **Uso del hook `useSnackbar` para mostrar notificaciones:**
    
    Dentro de tus componentes, utiliza el hook `useSnackbar` para acceder a la función `enqueueSnackbar`, que permite mostrar notificaciones:
    
    ```jsx
    import React from 'react';
    import { useSnackbar } from 'notistack';
    import Button from '@mui/material/Button';
    
    function MyComponent() {
      const { enqueueSnackbar } = useSnackbar();
    
      const handleClick = () => {
        enqueueSnackbar('Notificación de éxito!', { variant: 'success' });
      };
    
      return (
        <Button onClick={handleClick}>
          Mostrar notificación
        </Button>
      );
    }
    
    export default MyComponent;
    ```
    

**Implementación de animaciones en Notistack:**

Notistack permite personalizar las animaciones de las notificaciones mediante la propiedad `TransitionComponent`. Puedes utilizar componentes de transición proporcionados por bibliotecas como Material-UI o crear tus propias animaciones.

Por ejemplo, para aplicar una animación de crecimiento (`Grow`) a las notificaciones:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import Grow from '@mui/material/Grow';
import App from './App';

ReactDOM.render(
  <SnackbarProvider TransitionComponent={Grow}>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);
```

En este ejemplo, todas las notificaciones utilizarán la animación de crecimiento al aparecer y desaparecer.

**Consideraciones adicionales:**

- **Gestión de transiciones personalizadas:** Si utilizas contenido personalizado en las notificaciones mediante la propiedad `content`, es importante asegurarse de que las transiciones se apliquen correctamente. Algunos desarrolladores han reportado comportamientos inesperados al combinar `TransitionComponent` con contenido personalizado. Se recomienda revisar la documentación y las discusiones en la comunidad para soluciones específicas.
    
- **Control de la posición y duración:** Notistack permite configurar la posición (`anchorOrigin`) y la duración (`autoHideDuration`) de las notificaciones para adaptarse a las necesidades de tu aplicación.
    

Para obtener más información y ejemplos detallados, puedes consultar la [documentación oficial de Notistack](https://notistack.com/).

Además, puedes ver este video que muestra cómo implementar un Snackbar simple con Notistack en React:

[https://www.youtube.com/watch?v=DQ1pX-t-kbg](🚀 Simple Snackbar With Notistack In React JS)

`src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";

import { SnackbarProvider } from "notistack";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { App } from "./App.jsx";

const theme = createTheme({
  palette: {
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
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
        >
          <CssBaseline />
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
```

`src/App.jsx`

```jsx
import { Route, Routes } from "react-router";
import { Container, Grid2 } from "@mui/material";

import { Navbar } from "./navbar/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import {
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
} from "@mui/icons-material";

const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <DraftsIcon />,
  },
];

export const App = () => {
  return (
    <>
      <Grid2 component="section" sx={{ m: 2 }}>
        <Navbar navArrayLinks={navArrayLinks} />
        <Container sx={{ mt: 5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </Container>
      </Grid2>
    </>
  );
};

/* 
nfn
anfn
*/
```

`src/pages/Home.jsx`

```jsx
import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Stack,
} from "@mui/material";
import { Check as CheckIcon } from "@mui/icons-material";
import { useState } from "react";

export const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <Stack
      sx={{ display: "grid", gap: "1rem", width: "100%" }}
      spacing={2}
    >
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        This is a success Alert.
      </Alert>
      <Alert
        variant="outlined"
        severity="info"
        icon={false}
      >
        This is an info Alert.
      </Alert>
      <Alert
        color="warning"
        severity="warning"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a warning Alert.
      </Alert>

      <Collapse in={open}>
        <Alert
          severity="error"
          onClose={() => setOpen(false)}
        >
          This is an error Alert.
        </Alert>
      </Collapse>
    </Stack>
  );
};
```

`src/pages/Login.jsx`

```jsx
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Snackbar,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Login</h1>

      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert>
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Open
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
        >
          <Alert>
            <AlertTitle>Error</AlertTitle>
            This is a customized alert
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
```

`src/pages/Register.jsx`

```jsx
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

export const Register = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("This is not easy", {
      variant: "success",
    });
  };

  return (
    <>
      <h1>Register</h1>
      <Button variant="contained" onClick={handleClick}>
        Open
      </Button>
    </>
  );
};
```

- [Alert](https://mui.com/material-ui/react-alert/)
- [Stack](https://mui.com/material-ui/react-stack/)
- [Snackbar](https://mui.com/material-ui/react-snackbar/)
- [Notistack](https://mui.com/material-ui/react-snackbar/#notistack)
- [Github Notistack](https://github.com/iamhosseindhv/notistack)
- [Notistack doc](https://notistack.com/)

## 15. Text Field y Validación de Formulario

`src/pages/Register.jsx`

```jsx
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return regex.test(email); // true or false
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      return setError({
        error: true,
        message: "Incorrect Email",
      });
    }

    setError({
      error: false,
      // message: "Correct Email",
    });
  };

  return (
    <>
      <h1>Register</h1>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          helperText={error.message}
          error={error.error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ mt: 2 }}
        >
          Register me
        </Button>
      </Box>
    </>
  );
};
```

La expresión regular vista, se usa para validar direcciones de correo electrónico. Vamos a desglosarla parte por parte:

```js
const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
```

### **Explicación de la expresión regular**:

- **`^`** → Indica el inicio de la cadena.
- **`[A-Z0-9._%+-]+`** →
    - `[A-Z0-9._%+-]` → Permite letras mayúsculas (`A-Z`), números (`0-9`), y algunos caracteres especiales (`._%+-`).
    - `+` → Indica que debe haber al menos un carácter de este conjunto (pero pueden ser más).
- **`@`** → Obliga a que haya un símbolo `@` en la dirección.
- **`[A-Z0-9.-]+`** →
    - `[A-Z0-9.-]` → Permite letras (`A-Z`), números (`0-9`), puntos (`.`) y guiones (`-`).
    - `+` → Requiere al menos un carácter de este conjunto.
- **`\.`** → Obliga a que haya un punto (`.`) después del dominio.
- **`[A-Z]{2,}`** →
    - `[A-Z]` → Requiere letras (`A-Z`).
    - `{2,}` → Debe haber al menos dos letras (para dominios como `.com`, `.net`, `.org`, etc.).
- **`$`** → Indica el final de la cadena.
- **`i`** → Hace que la expresión sea **insensible a mayúsculas y minúsculas**, por lo que también acepta letras en minúsculas (`a-z`).

#### **Ejemplo de entradas válidas**:

✔ `example@email.com`  
✔ `USER123@DOMAIN.ORG`  
✔ `test.email+alex@google.co`

#### **Ejemplo de entradas inválidas**:

✖ `example@.com` (No hay dominio antes del punto)  
✖ `@example.com` (No hay nombre antes del `@`)  
✖ `user@example` (No hay una extensión de dominio como `.com`)

#### **Uso en código**:

```js
const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const email1 = "user@example.com";
const email2 = "invalid-email@com";

console.log(regex.test(email1)); // true
console.log(regex.test(email2)); // false
```

#### **Consideraciones**:

- Esta regex no cubre todos los casos posibles de direcciones de correo electrónico válidas según la especificación de **RFC 5322**.
- Algunos dominios modernos pueden tener más caracteres especiales o extensiones de más de 2 o 3 letras.
- Para validaciones más precisas, se recomienda usar bibliotecas especializadas como `validator.js`.

[Text field](https://mui.com/material-ui/react-text-field/)

## Aplicación Meteorológica 🌩

Crear proyecto de React:

```bash
npm create vite@latest
cd mui-weather
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

Regístrate en Weather API para obtener una API_KEY. Luego entra en API Explorer y coloca la api que obtuviste:

Podemos obtener una query como esta:

```jsx
http://api.weatherapi.com/v1/current.json?key=2785a349cc4446a7b1300231250903&q=London&aqi=no
```

Estructura:

```bash
.
├── eslint.config.js
├── index.html
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
├── .env.local 👈👀
├── src
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

import { ThemeProvider } from "@mui/material/styles";

import { App } from "./App.jsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

`src/App.jsx`

```jsx
import { useState } from "react";

import {
  Container,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

// console.log(import.meta.env.VITE_API_KEY);

export const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError({
      error: false,
      message: error.message,
    });

    try {
      if (!city.trim())
        throw { message: "The city field is mandatory." };

      const response = await fetch(`${API_WEATHER}${city}`);

      const data = await response.json();

      if (data.error) throw { message: data.error.message };

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const value = e.target.value;

    setCity(value);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
      >
        Weather App
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          id="city"
          label="City"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={onChange}
          error={error.error}
          helperText={error.message}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Loading"
        >
          Search
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box
          sx={{
            mt: 2,
            display: "grid",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h2">
            {weather.city}, {weather.country}
          </Typography>
          <Box
            component="img"
            alt={weather.conditionText}
            src={weather.icon}
            sx={{ margin: "0 auto" }}
          />
          <Typography variant="h5" component="h3">
            {weather.temp} °C
          </Typography>
          <Typography variant="h6" component="h4">
            {weather.conditionText}
          </Typography>
        </Box>
      )}

      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
};

// http://api.weatherapi.com/v1/current.json?key=2785a349cc4446a7b1300231250903&q=London&aqi=no
```

`.env.local`

```jsx
VITE_API_KEY="2785a349cc4446a7b1300231250903"
```

Data de la API

```json
{
  "location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.5171,
    "lon": -0.1062,
    "tz_id": "Europe/London",
    "localtime_epoch": 1741550179,
    "localtime": "2025-03-09 19:56"
  },
  "current": {
    "last_updated_epoch": 1741549500,
    "last_updated": "2025-03-09 19:45",
    "temp_c": 13.3,
    "temp_f": 55.9,
    "is_day": 0,
    "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
    },
    "wind_mph": 4.3,
    "wind_kph": 6.8,
    "wind_degree": 87,
    "wind_dir": "E",
    "pressure_mb": 1002,
    "pressure_in": 29.59,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 54,
    "cloud": 0,
    "feelslike_c": 13.1,
    "feelslike_f": 55.6,
    "windchill_c": 11.6,
    "windchill_f": 52.9,
    "heatindex_c": 12,
    "heatindex_f": 53.7,
    "dewpoint_c": 6,
    "dewpoint_f": 42.7,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 0,
    "gust_mph": 7.5,
    "gust_kph": 12
  }
}
```

📌 Nota: en lugar de usar `LoadingButton` ahora solo usando `Button` tienes las mismas características.

### Modularizar el código

Estructura:

```bash
├── eslint.config.js
├── index.html
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
├── .env.local 👈👀
├── src
│   ├── api
│   │   └── fetchWeather.js
│   ├── App.jsx
│   ├── assets
│   ├── components
│   │   ├── ErrorMessage.jsx
│   │   ├── WeatherDisplay.jsx
│   │   └── WeatherForm.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

`src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";

import { App } from "./App.jsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

`src/App.jsx`

```jsx
import { useState, useCallback } from "react";
import { Container, Typography } from "@mui/material";
import { fetchWeather } from "./api/fetchWeather";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { ErrorMessage } from "./components/ErrorMessage";

export const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = useCallback(async (city) => {
    try {
      setError("");
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Weather App
      </Typography>

      <WeatherForm onSearch={handleSearch} />
      <ErrorMessage message={error} />
      <WeatherDisplay weather={weather} />

      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
};
```

`src/api/fetchWeather.js`

```js
const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

export const fetchWeather = async (cityName) => {
  if (!cityName.trim()) throw new Error("The city field is mandatory.");

  const response = await fetch(`${API_WEATHER}${cityName}`);
  const data = await response.json();

  if (data.error) throw new Error(data.error.message);

  return {
    city: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    icon: data.current.condition.icon,
    conditionText: data.current.condition.text,
  };
};
```

`src/components/WeatherForm.jsx`

```jsx
import { TextField, Box } from "@mui/material";
import { Button } from "@mui/material";
import { useState, useCallback } from "react";

export const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
        await onSearch(city);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [city, onSearch]
  );

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ display: "grid", gap: 2 }}
    >
      <TextField
        id="city"
        label="City"
        variant="outlined"
        size="small"
        required
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Loading"
      >
        Search
      </Button>
    </Box>
  );
};
```

`src/components/WeatherDisplay.jsx`

```jsx
import { Typography, Box } from "@mui/material";

export const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <Box sx={{ mt: 2, display: "grid", gap: 2, textAlign: "center" }}>
      <Typography variant="h4">
        {weather.city}, {weather.country}
      </Typography>
      <Box
        component="img"
        alt={weather.conditionText}
        src={weather.icon}
        sx={{ margin: "0 auto" }}
      />
      <Typography variant="h5">{weather.temp} °C</Typography>
      <Typography variant="h6">{weather.conditionText}</Typography>
    </Box>
  );
};
```

`src/components/ErrorMessage.jsx`

```jsx
import { Typography } from "@mui/material";

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <Typography color="error" sx={{ textAlign: "center", mt: 2 }}>
      {message}
    </Typography>
  );
};
```

- [Examples](https://mui.com/material-ui/getting-started/example-projects/)
- [Weather API](https://www.weatherapi.com/)



`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```

`src/components/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```

⚙️
👈👀
👈👀👇