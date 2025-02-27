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
                href={item.title}
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




`src/App.jsx`

```jsx
```

`src/navbar/Navbar.jsx`

```jsx
```

`src/navbar/NavListDrawer.jsx`

```jsx
```

`src/App.jsx`

```jsx
```


`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```



`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```



`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```

`src/App.jsx`

```jsx
```

⚙️
👈👀
👈👀👇