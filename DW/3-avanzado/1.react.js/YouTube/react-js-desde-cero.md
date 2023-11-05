# REACT JS desde cero

[REACT JS desde cero | Curso tutorial completo](https://www.youtube.com/watch?v=ladwC6Lrs-M)

## Instalación 

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

[Json Placeholder](https://jsonplaceholder.typicode.com/users)

## useRef()

En React, `useRef()` es un hook que se utiliza para crear una referencia mutable que se puede adjuntar a elementos del DOM o a cualquier otro valor mutable. A diferencia de las variables de estado (state), las referencias creadas con `useRef()` no provocan una nueva renderización cuando su valor cambia.

La sintaxis básica para utilizar `useRef()` es la siguiente:

```jsx
import React, { useRef } from 'react';

function Component() {
  const refContainer = useRef(initialValue);

  // Resto del código del componente

  return (
    // JSX del componente
  );
}
```

Aquí hay una explicación de los pasos involucrados:

1. Importa `useRef` desde el paquete 'react'.
2. Dentro del componente, declara una variable utilizando `const` y asigna el resultado de `useRef(initialValue)` a esa variable. `initialValue` es el valor inicial opcional que se le puede dar a la referencia.
3. Utiliza la referencia `refContainer` en el código donde la necesites.

La referencia `refContainer` es un objeto que tiene una propiedad llamada `current`. Puedes acceder y modificar el valor actual de la referencia utilizando `refContainer.current`. Por ejemplo, para adjuntar la referencia a un elemento del DOM, puedes hacer lo siguiente:

```jsx
function Component() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Enfocar input</button>
    </div>
  );
}
```

En este ejemplo, hemos creado una referencia llamada `inputRef` y la hemos adjuntado al elemento `input` utilizando la prop `ref`. Luego, en la función `handleClick`, llamamos al método `focus()` en `inputRef.current` para enfocar el campo de entrada cuando se hace clic en el botón.

Además de adjuntar referencias a elementos del DOM, `useRef()` también se puede utilizar para mantener referencias a otros valores mutables en el componente. Por ejemplo, puedes usarlo para mantener una referencia a un temporizador, a un objeto mutable o a cualquier otro dato que necesites mantener durante todo el ciclo de vida del componente.

Es importante tener en cuenta que al modificar el valor de una referencia con `refContainer.current`, React no realizará una nueva renderización del componente. Por lo tanto, si necesitas actualizar el estado del componente y provocar una renderización, debes utilizar `useState()` o `useReducer()` en su lugar.

## useMemo

En React, `useMemo()` es un hook que te permite optimizar el rendimiento de tus componentes al memorizar el resultado de una función costosa. Básicamente, `useMemo()` se utiliza para evitar cálculos innecesarios cuando los valores de entrada no han cambiado.

La sintaxis básica para utilizar `useMemo()` es la siguiente:

```jsx
import React, { useMemo } from 'react';

function Component() {
  const memorizedValue = useMemo(() => {
    // Cálculos costosos o lógica aquí
    return result;
  }, [dependencyList]);

  // Resto del código del componente

  return (
    // JSX del componente
  );
}
```

Aquí hay una explicación de los pasos involucrados:

1. Importa `useMemo` desde el paquete 'react'.
2. Dentro del componente, declara una variable utilizando `const` y asigna el resultado de `useMemo()` a esa variable. El primer argumento de `useMemo()` es una función que contiene los cálculos costosos o la lógica que deseas memorizar. El resultado de esta función se almacenará en `memoizedValue`.
3. El segundo argumento de `useMemo()` es una lista de dependencias opcional. Esta lista especifica los valores que, cuando cambian, deben volver a calcular la función pasada como primer argumento. Si alguna de las dependencias en la lista no ha cambiado desde la última renderización, el valor memorizado se devuelve directamente sin volver a calcular la función.
4. Utiliza `memoizedValue` en el código donde lo necesites.

La idea detrás de `useMemo()` es que si tienes una función costosa que se ejecuta en cada renderización del componente, puedes usar `useMemo()` para memorizar el resultado y evitar que se recalcule innecesariamente cuando las dependencias no han cambiado.

Aquí hay un ejemplo para ilustrar cómo se puede utilizar `useMemo()`:

```jsx
function Component({ list }) {
  const memorizedResult = useMemo(() => {
    const result = performExpensiveCalculation(list);
    return result;
  }, [list]);

  return (
    <div>
      <p>Resultado: {memorizedResult}</p>
    </div>
  );
}
```

En este ejemplo, tenemos un componente que recibe una prop `list`. Queremos realizar un cálculo costoso en función de `list` y mostrar el resultado en el componente. Al utilizar `useMemo()`, aseguramos que el cálculo solo se realice cuando `list` cambie. Si `list` no ha cambiado desde la última renderización, `memorizedResult` se devuelve directamente sin realizar el cálculo nuevamente.

Es importante tener en cuenta que `useMemo()` solo debe utilizarse cuando realmente necesitas optimizar el rendimiento de tu componente y cuando los cálculos sean lo suficientemente costosos como para justificar el uso de memorización. Usarlo incorrectamente puede llevar a un código más complicado y menos legible. Por lo tanto, es recomendable utilizar `useMemo()` con precaución y realizar pruebas para verificar su impacto en el rendimiento de tu aplicación.

## useCallback

En React, `useCallback()` es un hook que se utiliza para memorizar una función y evitar que se vuelva a crear en cada renderización del componente. Es útil cuando deseas pasar una función como prop a componentes hijos y quieres evitar que esos componentes se vuelvan a renderizar innecesariamente debido a cambios en la función.

La sintaxis básica para utilizar `useCallback()` es la siguiente:

```jsx
import React, { useCallback } from 'react';

function Component() {
  const memorizedCallback = useCallback((arg1, arg2) => {
    // Lógica de la función aquí
  }, [dependencyList]);

  // Resto del código del componente

  return (
    // JSX del componente
  );
}
```

Aquí hay una explicación de los pasos involucrados:

1. Importa `useCallback` desde el paquete 'react'.
2. Dentro del componente, declara una variable utilizando `const` y asigna el resultado de `useCallback()` a esa variable. El primer argumento de `useCallback()` es la función que deseas memorizar. Esta función se almacenará en `memorizedCallback`.
3. El segundo argumento de `useCallback()` es una lista de dependencias opcional. Esta lista especifica los valores que, cuando cambian, provocarán que la función se vuelva a crear. Si alguna de las dependencias en la lista no ha cambiado desde la última renderización, se devuelve la función memorizada existente en lugar de crear una nueva.
4. Utiliza `memorizedCallback` en el código donde lo necesites, por ejemplo, al pasar la función como prop a componentes hijos.

La idea detrás de `useCallback()` es que si tienes una función que se pasa como prop a un componente hijo y esa función se vuelve a crear en cada renderización del componente padre, el componente hijo también se volverá a renderizar innecesariamente. Al utilizar `useCallback()`, puedes asegurarte de que la función se memorice y solo se vuelva a crear si alguna de las dependencias cambia.

Aquí hay un ejemplo para ilustrar cómo se puede utilizar `useCallback()`:

```jsx
function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('Loading...');
  
  return (
    <button onClick={onClick}>Click me</button>
  );
}
```

En este ejemplo, `handleClick` se memoriza utilizando `useCallback()` en el componente `ParentComponent`. Luego, se pasa como prop `onClick` al componente `ChildComponent`. Debido a que `handleClick` está memorizado, el componente `ChildComponent` no se volverá a renderizar innecesariamente a menos que cambie alguna de las dependencias en la lista de dependencias (`[]` en este caso).

Es importante tener en cuenta que `useCallback()` debe utilizarse con precaución y solo cuando sea necesario optimizar el rendimiento de tu aplicación. Si la función que deseas memorizar no tiene dependencias y no se vuelve a crear en cada renderización, no es necesario utilizar `useCallback()`.

## useRef, useMemo y useCallback

useRef: Hook de React que devuelve un objeto mutable que persiste a lo largo de las renderizaciones y no provoca una actualización del componente cuando cambia.

useMemo: Hook de React que devuelve un valor memorizado que se recalcula solo cuando una de las dependencias cambia, lo que ayuda a optimizar el rendimiento evitando cálculos innecesarios.

useCallback: Hook de React que devuelve una versión memorizada de una función, lo que ayuda a optimizar el rendimiento evitando la recreación de la función en cada renderización del componente.

## useReducer

En React, `useReducer` es un hook que te permite manejar el estado de un componente utilizando un patrón de reducción similar al que se utiliza en Redux. Proporciona una alternativa a `useState` cuando tienes un estado más complejo que puede requerir múltiples acciones para actualizarlo.

La función `useReducer` toma dos argumentos: el primero es el reducer (reductor) y el segundo es el estado inicial. El reducer es una función que especifica cómo se actualiza el estado en respuesta a una acción. Toma el estado actual y la acción como argumentos y devuelve el nuevo estado.

Aquí tienes un ejemplo básico de cómo usar `useReducer`:

```jsx
import React, { useReducer } from 'react';

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Componente
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

En este ejemplo, se define un reducer que actualiza el estado del contador en respuesta a las acciones "INCREMENT" y "DECREMENT". El componente `Counter` utiliza `useReducer` para inicializar el estado con `{ count: 0 }` y obtener el estado actual y la función `dispatch` para enviar acciones al reducer.

Cuando se hace clic en los botones "Increment" y "Decrement", se llama a las funciones `increment` y `decrement`, respectivamente, que envían las acciones correspondientes al reducer a través de `dispatch`.

El reducer procesa la acción y devuelve el nuevo estado actualizado, que luego se refleja en la interfaz de usuario.

En resumen, `useReducer` es útil cuando tienes un estado más complejo que puede requerir múltiples acciones para actualizarlo. Te proporciona una forma de administrar el estado de manera más estructurada utilizando un patrón de reducción.

Otro ejemplo: 

```jsx
import { useReducer, useRef } from "react";

const NewReducer = () => {
  const inputRef = useRef();

  const [tasks, dispatch] = useReducer(
    (state = [], action) => {
      switch (action.type) {
        case "add_task":
          {
            return [
              ...state,
              {
                id: state.length,
                title: action.title,
              },
            ];
          }
          break;
        case "remove_task":
          {
            return state.filter(
              (task, index) => index != action.index
            );
          }
          break;

        default:
          return state;
          break;
      }
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "add_task",
      title: inputRef.current.value,
    });
  };

  return (
    <>
      <h1>Tasks List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task</label>
        <input
          type="text"
          name="title"
          ref={inputRef}
        />
        <input type="submit" value="Send" />
      </form>
      <div className="tasks">
        {tasks &&
          tasks.map((task, index) => (
            <div className="task" key={index}>
              <p>{task.title}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "remove_task",
                    index: index,
                  })
                }>
                Borrar
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export { NewReducer };
```


### `switch`

En JavaScript, el `switch` es una declaración que se utiliza para evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión. Proporciona una alternativa más legible y concisa a una serie de declaraciones `if-else` anidadas.

La sintaxis básica de `switch` es la siguiente:

```javascript
switch (expresion) {
  case valor1:
    // código a ejecutar si expresion es igual a valor1
    break;
  case valor2:
    // código a ejecutar si expresion es igual a valor2
    break;
  // más casos...
  default:
    // código a ejecutar si ninguno de los casos coincide con expresion
    break;
}
```

Aquí hay un ejemplo para ilustrar cómo se usa el `switch`:

```javascript
let color = 'rojo';

switch (color) {
  case 'rojo':
    console.log('El color es rojo');
    break;
  case 'azul':
    console.log('El color es azul');
    break;
  case 'verde':
    console.log('El color es verde');
    break;
  default:
    console.log('No se reconoce el color');
    break;
}
```

En este ejemplo, la variable `color` se evalúa en el `switch`. Si `color` es igual a uno de los casos especificados (en este caso, 'rojo', 'azul' o 'verde'), se ejecutará el bloque de código correspondiente. Si no hay coincidencia en ninguno de los casos, se ejecutará el bloque de código dentro de la declaración `default`.

En el ejemplo dado, como `color` es igual a `'rojo'`, se imprimirá en la consola el mensaje `'El color es rojo'`.

Es importante tener en cuenta que después de que se ejecuta un bloque de código correspondiente a un caso, es necesario usar la palabra clave `break` para salir del `switch`. De lo contrario, el flujo de ejecución continuará hacia los casos siguientes, incluso si no coinciden con la expresión.

El `switch` también puede utilizarse sin un caso `default` si no se requiere un bloque de código específico para esa situación.

En resumen, el `switch` en JavaScript se utiliza para evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión. Proporciona una forma más legible y estructurada de manejar múltiples casos en comparación con declaraciones `if-else` anidadas.

[useReducer en 20 min (y crea una lista de tareas)](https://www.youtube.com/watch?v=BACpj7GmiEo)