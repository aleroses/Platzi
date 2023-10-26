# REACT JS desde cero

```bash
npm create vite@latest
cd proyect && npm install
npm run dev
```

react y react-dom

## Props 

Pasar a las props valores por defectos:

1. Usando la siguiente sintaxis: 

```jsx
import PropTypes from "prop-types";

const FirstComponent = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <h1> {title}</h1>
      <h2>{subtitle} </h2>
    </>
  );
};

🔥👇
FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

🔥👇
FirstComponent.defaultProps = {
  title: "React course",
  subtitle: "Props section",
};

export { FirstComponent };
```

También podemos solicitar que cierto prop si o si tenga determinado valor. 

2. Igualar la prop al valor por defecto: 

```jsx
import PropTypes from "prop-types";

const FirstComponent = ({
  title,
  subtitle = "Props section", 👈👀
}) => {
  return (
    <>
      <h1> {title}</h1>
      <h2>{subtitle} </h2>
    </>
  );
};

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export { FirstComponent };
```

## Hooks

Hay propios de React y otros que podemos crear (custom hooks)

```bash

```

```bash

```

```bash

```

## Build y Dist 

```bash
npm run build
```

## Helpers

En React, los "helpers" (ayudantes) son funciones o componentes auxiliares que se utilizan para realizar tareas comunes o simplificar el código en la construcción de aplicaciones. Estos helpers proporcionan funcionalidades adicionales y ayudan a mantener el código limpio y reutilizable.

Aquí hay algunos ejemplos comunes de helpers en React:

1. Funciones de utilidad: Estas son funciones independientes que realizan tareas específicas y pueden ser reutilizadas en diferentes partes de la aplicación. Por ejemplo, una función de formato de fecha que convierte una fecha en un formato legible o una función de ordenamiento que ordena una lista de elementos.

2. Componentes de presentación: Estos son componentes de React que se utilizan para representar una parte específica de la interfaz de usuario. Por ejemplo, un componente de botón reutilizable que muestra un botón con diferentes estilos y comportamientos según los propósitos de la aplicación.

3. Hooks personalizados: Los hooks son una característica de React que permite compartir lógica entre componentes. Puedes crear tus propios hooks personalizados para encapsular la lógica repetitiva y reutilizarla en diferentes componentes. Por ejemplo, un hook personalizado para manejar la autenticación de usuario o para realizar peticiones a una API.

Los helpers se utilizan importando y utilizando las funciones o componentes en los componentes de React donde se necesiten. Puedes importar funciones de utilidad o componentes de presentación desde archivos separados y luego utilizarlos en tu componente principal o en otros componentes. También puedes importar y utilizar hooks personalizados de la misma manera.

Aquí hay un ejemplo de cómo se puede usar un helper en un componente de React:

```jsx
import React from 'react';
import { formatFecha } from './helpers';

const MiComponente = () => {
  const fecha = new Date();
  const fechaFormateada = formatFecha(fecha);

  return <div>{fechaFormateada}</div>;
};
```

En este ejemplo, el componente `MiComponente` utiliza la función `formatFecha` del helper `helpers.js` para formatear la fecha actual y luego muestra el resultado en el renderizado del componente.

Recuerda que los helpers son simplemente funciones o componentes adicionales que puedes crear para ayudarte a mantener un código más limpio y reutilizable en tus aplicaciones React. Su uso depende de las necesidades específicas de tu proyecto y pueden variar en función de las tareas que necesites realizar.