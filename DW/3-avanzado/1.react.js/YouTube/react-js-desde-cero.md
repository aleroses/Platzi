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

### new Date().getDate()

El código `new Date().getDate()` en JavaScript se utiliza para obtener el día del mes actual como un número. Aquí está la explicación paso a paso:

1. "new Date()" crea un nuevo objeto de fecha que representa la fecha y la hora actuales.
2. ".getDate()" es un método que se aplica a un objeto de fecha y devuelve el día del mes como un número entre 1 y 31.

Aquí tienes algunos ejemplos de cómo podrías usarlo:

Ejemplo 1:
```javascript
const fechaActual = new Date();
const diaDelMes = fechaActual.getDate();
console.log(diaDelMes); // Muestra el número del día actual en la consola
```
Este ejemplo crea un nuevo objeto de fecha que representa la fecha y la hora actuales. Luego, se obtiene el día del mes utilizando el método ".getDate()" y se almacena en la variable "diaDelMes". Finalmente, se muestra el número del día actual en la consola.

Ejemplo 2:
```javascript
const fechaEspecifica = new Date('2023-07-15');
const diaDelMes = fechaEspecifica.getDate();
console.log(diaDelMes); // Muestra el número del día en la fecha especificada en la consola
```
En este caso, se crea un nuevo objeto de fecha que representa la fecha especificada ('2023-07-15'). Luego, se utiliza el método `.getDate()` para obtener el día del mes de esa fecha y se almacena en la variable "diaDelMes". Finalmente, se muestra el número del día en la fecha especificada en la consola.

También:  
```javascript
const fechaEspecifica = new Date('2023-07-15');
fechaEspecifica.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00
const diaDelMes = fechaEspecifica.getDate();
console.log(diaDelMes); // Muestra el número del día en la fecha especificada en la consola
```

📌 Nota: Tal parece que hay una discrepancia en la zona horaria cuando se crea el objeto de fecha. El valor que se muestra en la consola es "Fri Jul 14 2023 19:00:00 GMT-0500", lo que indica que el objeto de fecha se crea en una zona horaria que está adelantada en horas. 

Debido a esta discrepancia, el método `.getDate()` devuelve 14, que es el día del mes correspondiente a la fecha en esa zona horaria específica.

Si deseas obtener el día del mes correctamente sin verse afectado por la interpretación de la zona horaria, puedes utilizar el método `getUTCDate()` en JavaScript o el paquete `moment.js`. Aquí tienes ejemplos de ambos enfoques:

Utilizando el método `getUTCDate()` en JavaScript:

```javascript
const fechaEspecifica = new Date('2023-07-15');
const diaDelMes = fechaEspecifica.getUTCDate();
console.log(diaDelMes); // Muestra el número del día en la fecha especificada en la consola
```

En este ejemplo, utilizamos el método `getUTCDate()` en lugar de `getDate()`. Esto nos da el día del mes en la hora universal coordinada (UTC), que no se ve afectada por la zona horaria.

Utilizando el paquete `moment.js`:

Asegúrate de tener el paquete `moment.js` instalado en tu proyecto. Puedes instalarlo a través de npm con el siguiente comando: `npm install moment`.

```javascript
const moment = require('moment');
const fechaEspecifica = moment('2023-07-15');
const diaDelMes = fechaEspecifica.date();
console.log(diaDelMes); // Muestra el número del día en la fecha especificada en la consola
```

En este ejemplo, utilizamos el paquete `moment.js` para manejar las fechas y obtener el día del mes utilizando el método `date()`. El paquete `moment.js` se encarga automáticamente de los ajustes de zona horaria y proporciona resultados consistentes en diferentes entornos.

Estos enfoques te permitirán obtener el día del mes correctamente sin verse afectado por la interpretación de la zona horaria.

Si quieres una fecha en un formato específico puedes usar lo siguiente: 

Para obtener la fecha y hora en el formato "Tue Nov 07 2023 13:02:07" en JavaScript, puedes utilizar diferentes métodos del objeto `Date` para obtener los componentes de la fecha y la hora, y luego combinarlos en la cadena de texto deseada. Aquí tienes un ejemplo de cómo hacerlo:

```javascript
const fecha = new Date();

const diasSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const diaSemana = diasSemana[fecha.getDay()];
const mes = meses[fecha.getMonth()];
const dia = fecha.getDate();
const anio = fecha.getFullYear();
const horas = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

const fechaFormateada = `${diaSemana} ${mes} ${dia} ${anio} ${horas}:${minutos}:${segundos}`;
console.log(fechaFormateada); // Muestra la fecha y hora en el formato especificado en la consola
```

En este ejemplo, creamos un objeto de fecha utilizando `new Date()` para obtener la fecha y hora actual. Luego, utilizamos los métodos `getDay()`, `getMonth()`, `getDate()`, `getFullYear()`, `getHours()`, `getMinutes()`, y `getSeconds()` para obtener los componentes de la fecha y la hora.

Luego, definimos dos arreglos: `diasSemana` y `meses`, que contienen las representaciones abreviadas de los días de la semana y los meses en inglés.

Finalmente, combinamos los componentes de la fecha y la hora en la cadena de texto `fechaFormateada` utilizando las variables obtenidas y el formato deseado. La cadena resultante se muestra en la consola.

Recuerda que el resultado puede variar dependiendo de la zona horaria y la configuración regional de tu entorno.

### Ejemplo de la clase 

`src > components > ListReducer.jsx`
```js
import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

export const ListReducer = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "[Tasks] Add task":
          return [...state, action.payload];

        case "[Tasks] Finish task":
          return state.map((task) => {
            if (task.id === action.payload) {
              return {
                ...task,
                finished: !task.finished,
              };
            }
            return task;
          });
        case "[Tasks] Delete task":
          return state.filter(
            (task) => task.id != action.payload
          );

        case "[Tasks] Clear tasks":
          return [];

        default:
          return state;
      }
    },
    [
      {
        id: new Date().getTime(),
        task: "Test task.......",
        finished: false,
      },
    ]
  );

  console.log(state);

  const {
    /* task, */ formState,
    handleInputChange,
  } = useForm({
    task: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "[Tasks] Add task",
      payload: {
        id: new Date().getTime(),
        task: formState.task,
        finished: false,
      },
    });
  };

  const finishTask = (id) => {
    dispatch({
      type: "[Tasks] Finish task",
      payload: id,
    });
    console.log("lol", id);
  };

  const deleteTask = (id) => {
    dispatch({
      type: "[Tasks] Delete task",
      payload: id,
    });
  };

  const clear = () => {
    dispatch({
      type: "[Tasks] Clear tasks",
      payload: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={clear}>
          Clear
        </button>
      </form>
      <ul>
        {state.map((task, index) => (
          <li key={index}>
            {task.task}
            <input
              type="checkbox"
              /* value={task.finished} */
              name=""
              id=""
              onChange={() => finishTask(task.id)}
            />
            <button
              onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
```

`src > hooks > useForm.js`
```js
import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] =
    useState(initialForm);

  const handleInputChange = ({ target }) => {
    /* console.log(target); */
    console.log(target.name);
    console.log(target.value);
    const { name, value } = target;

    /* 
    Al tener 3 inputs, por cada input al que le ingresemos texto este se va a acumular usando ...spread (operador de propagacion) primero name, luego email y al final password, para luego hacer submit
    */

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    handleInputChange,
  };
};

export { useForm };
```

## React Router DOM 

React Router DOM es una biblioteca de enrutamiento para aplicaciones de React. Permite crear rutas en una aplicación de React, lo que significa que puedes definir diferentes componentes que se renderizarán en función de la URL actual.

La biblioteca React Router DOM utiliza el enfoque de enrutamiento basado en el navegador, lo que significa que utiliza la historia del navegador para mantener el estado de la aplicación y sincronizarlo con la URL. Esto permite que la aplicación tenga una experiencia de navegación fluida sin tener que recargar la página completa cada vez que se cambia la URL.

Aquí hay una explicación básica de cómo funciona React Router DOM:

1. Instalación: Primero, debes instalar la biblioteca React Router DOM en tu proyecto de React utilizando npm o yarn.

2. Configuración de rutas: Luego, debes definir las rutas de tu aplicación. Esto se hace utilizando componentes proporcionados por React Router DOM, como `<BrowserRouter>`, `<Route>`, y `<Switch>`. El componente `<BrowserRouter>` envuelve tu aplicación y proporciona el contexto necesario para el enrutamiento.

3. Definición de rutas: Dentro del componente `<BrowserRouter>`, puedes usar el componente `<Route>` para definir una ruta específica y el componente que se renderizará cuando se acceda a esa ruta. Por ejemplo, puedes tener una ruta `/inicio` que renderice el componente `Inicio`, y una ruta `/usuarios` que renderice el componente `Usuarios`.

4. Enlaces y navegación: Para permitir la navegación entre rutas, puedes usar el componente `<Link>` para crear enlaces en tu aplicación. Por ejemplo, puedes crear un enlace a la ruta `/usuarios` utilizando `<Link to="/usuarios">Usuarios</Link>`. Al hacer clic en ese enlace, la URL cambiará y React Router DOM renderizará el componente `Usuarios`.

5. Enrutamiento dinámico: React Router DOM también admite enrutamiento dinámico, lo que significa que puedes pasar parámetros en las URL y acceder a ellos en tus componentes. Por ejemplo, puedes tener una ruta `/usuarios/:id` que renderice el componente `Usuario` y le pase el parámetro `id` como una prop.

En resumen, React Router DOM es una biblioteca que facilita la implementación de enrutamiento en aplicaciones de React. Te permite definir rutas y componentes asociados a esas rutas, proporciona enlaces para la navegación y se encarga de mantener el estado de la aplicación sincronizado con la URL del navegador. Esto brinda una experiencia de navegación fluida y permite crear aplicaciones de una sola página (SPA) con múltiples secciones y vistas.

```bash
npm create vite@latest
npm install
```
react router dom en google

```bash

npm install react-router-dom
```

```bash
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.jsx
│   ├── assets
│   ├── main.jsx
│   └── routes
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Home.jsx
│       └── components
└── vite.config.js
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="/vite.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      type="module"
      src="/src/main.jsx"></script>
  </body>
</html>
```

`src > main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
```

`src > App.jsx`
```jsx
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { NavBar } from "./routes/components/NavBar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Home></Home>}></Route>
        <Route
          path="/about"
          element={<About></About>}></Route>
        <Route
          path="/contact"
          element={<Contact></Contact>}></Route>
        <Route
          path="/*"
          element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

export { App };
```

`src > routes > components > NavBar.jsx`
```jsx
import { React } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand">Navbar</Link>
      <button
        className="navbar-toggler"
        type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            to="/"
            className="nav-item nav-link active">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item nav-link">
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
```

`src > routes > Home.jsx`
```jsx
const Home = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export { Home };
```

`src > routes > About.jsx`
```jsx
const About = () => {
  return <div>About</div>;
};

export { About };
```

`src > routes > Contact.jsx`
```jsx

```

### Single Page Application (SPA)

Una Single Page Application (SPA), o Aplicación de Página Única en español, es un tipo de aplicación web que carga una sola página HTML inicial y, a partir de ahí, actualiza su contenido dinámicamente utilizando JavaScript. A diferencia de las aplicaciones web tradicionales, donde cada acción del usuario provoca una solicitud al servidor y una carga de página completa, una SPA carga solo los datos necesarios y actualiza la interfaz de usuario sin recargar la página completa.

En una SPA, la lógica de la aplicación se ejecuta principalmente en el lado del cliente, lo que significa que gran parte del procesamiento y la manipulación de datos se realiza en el navegador web del usuario. Las SPAs suelen utilizar tecnologías como AJAX (Asynchronous JavaScript and XML), JSON (JavaScript Object Notation) y frameworks de JavaScript como Angular, React o Vue.js para facilitar la actualización dinámica de la interfaz de usuario.

Las ventajas de las SPAs incluyen una experiencia de usuario más fluida y rápida, ya que solo se cargan los datos y recursos necesarios, evitando la recarga completa de la página. Además, permiten crear interfaces de usuario más interactivas y dinámicas, ya que pueden actualizar partes específicas de la página sin interrumpir la experiencia del usuario.

Sin embargo, las SPAs también presentan algunos desafíos, como una mayor complejidad en el desarrollo y la gestión del estado de la aplicación en el lado del cliente, así como la pérdida de ciertas funcionalidades proporcionadas por el modelo tradicional de múltiples páginas, como la navegación mediante botones "atrás" y "adelante" del navegador.

En resumen, una SPA es una aplicación web que se carga una vez y luego actualiza dinámicamente su contenido sin recargar la página completa, lo que proporciona una experiencia de usuario más fluida y rápida.

## useContext

En React, el hook `useContext` se utiliza para acceder al contexto de una aplicación. Antes de explicar `useContext`, es importante entender qué es el contexto en React.

El contexto en React es una forma de pasar datos a través del árbol de componentes sin tener que pasar explícitamente las props a lo largo de cada nivel. Esto es útil cuando se desea compartir datos entre múltiples componentes sin tener que pasarlos manualmente a través de las props. El contexto proporciona una forma de compartir datos de manera eficiente y sencilla.

El hook `useContext` es una función que se utiliza para consumir el contexto en un componente funcional. Toma un objeto `Context` creado mediante la función `createContext` y devuelve el valor actual del contexto.

Aquí hay un ejemplo básico de cómo se utiliza `useContext`:

1. Primero, se crea un contexto utilizando la función `createContext`:

```jsx
const MiContexto = React.createContext();
```

2. Luego, se proporciona un valor al contexto utilizando el componente `Provider`:

```jsx
function App() {
  const valorDelContexto = "Hola, soy el valor del contexto";
  
  return (
    <MiContexto.Provider value={valorDelContexto}>
      <ComponenteHijo />
    </MiContexto.Provider>
  );
}
```

3. Después, en un componente hijo, se puede utilizar `useContext` para acceder al valor del contexto:

```jsx
function ComponenteHijo() {
  const valorContexto = React.useContext(MiContexto);
  
  return <div>{valorContexto}</div>;
}
```

En este ejemplo, el componente `ComponenteHijo` utiliza `useContext` para acceder al valor del contexto proporcionado por el componente `App`. El valor del contexto se muestra dentro de un elemento `div`.

Es importante destacar que `useContext` solo puede utilizarse dentro de un componente funcional o de otro hook personalizado. No puede utilizarse dentro de un componente de clase.

En resumen, `useContext` es un hook de React que permite acceder al valor de un contexto proporcionado por un componente `Provider`. Facilita el acceso a datos compartidos en una aplicación sin tener que pasarlos manualmente a través de las props en todos los componentes intermedios.

[useContext en 20 minutos](https://www.youtube.com/watch?v=Ae33_gdJgnQ)

## Project 1: App Clima

Crear cuenta para recibir API Key:  
- [Weather API](https://openweathermap.org/api)
- [Other features](https://openweathermap.org/current)

[Built-in API request by city name](https://openweathermap.org/current#name)  
```js
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

[Weather icons](https://openweathermap.org/weather-conditions)  
```js
https://openweathermap.org/img/wn/10d@2x.png
```


Para convertir una temperatura de Kelvin (K) a Celsius (°C), puedes utilizar la siguiente fórmula:

°C = K - 273.15

Simplemente resta 273.15 a la temperatura en Kelvin para obtener el equivalente en Celsius. Por ejemplo, si tienes una temperatura de 300 Kelvin, la conversión a Celsius sería:

°C = 300 - 273.15 = 26.85°C

Por lo tanto, 300 Kelvin es equivalente a 26.85 grados Celsius.

```bash
npm create vite@latest
cd weather-app
npm i
code .
```

`src > main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./stylesheets/styles.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src > App.jsx`
```jsx
import React, { useState } from "react";

const App = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY =
    "Key que te enviaron al correo";

  const difKelvin = 273.15;

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.length > 0) fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      // ?lat={lat}&lon={lon}&appid={API key}
      const response = await fetch(
        `${url}?q=${city}&appid=${API_KEY}`
      );
      const dataFetch = await response.json();
      setData(dataFetch);
    } catch (error) {
      console.error("An error occurred!! ", error);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChangeCity}
        />
        <button type="submit">Search</button>
      </form>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>
            Temperature:{" "}
            {parseInt(data?.main?.temp - difKelvin)}
            °C
          </p>
          <p>
            Weather conditions:
            {data.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export { App };
```

## Despliegue Vite + Github Pages

### Install gh-pages

-   [más info](https://ull-esit-pl-1617.github.io/tareas-iniciales-Edu-Guille-Oscar-Sergio/Tutorial/gh-pages/gh-pages.html): El módulo gh-pages es un módulo de NPM (Node Package Manager) que **permite automatizar la publicación de archivos en una rama gh-pages** de un repositorio de GitHub (o cualquier otra rama u otro servicio).

```sh
npm i gh-pages -D
```

### vite.config.js

-   [ver punto 1](https://vitejs.dev/guide/static-deploy.html#github-pages)

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/el-nombre-de-tu-repositorio/", 👈👀
});
```

### package.json

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist" 👈👀
}
```

### Git

```sh
git init
git add .
git commit -m "first commit"
```

### Crear repositorio en GitHub

Subir el proyecto a GitHub

```sh
git remote add origin https://github.com/${nombre-cuenta}/${nombre-repositorio}.git
git branch -M main
git push -u origin main
```

### npm run build && npm run deploy

Estos comandos se repiten por cada actualización del proyecto:

```sh
npm run build
npm run deploy
```

🔥 Esperar... y listo!

- [Despliega tu proyecto en GitHub Pages con Vite](https://www.youtube.com/watch?v=igCO5i4NnfU)
- [Guía para publicar tu sitio web](https://github.com/bluuweb/example-deploy-vite-github-pages/blob/main/README.md)

## Project 2: Movie search 

[The movie DB API](https://www.themoviedb.org/)

[Search](https://developer.themoviedb.org/docs/search-and-query-for-details)

[Img](https://developer.themoviedb.org/docs/image-basics)


```js
# Get
https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=Key que te proporcionaron
# Img
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```

```bash
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── movie-search.png
│   │   └── react.svg
│   ├── main.jsx
│   └── stylesheets
│       └── App.css
```

`src > main.jsx`  
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src > App.jsx`
```jsx
import { useState } from "react";
import "./stylesheets/App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const URL =
    "https://api.themoviedb.org/3/search/movie";
  const API_KEY =
    "Key que te proporcionaron";

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchMovies();
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${URL}?query=${search}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("An error occurred!!!", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Movie search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name of your movie"
          value={search}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="search-button">
          Search
        </button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { App };
```

## Project 3: Shopping cart

[Repositorio Original](https://github.com/sergiecode/carrito-compras-react)

[Fake Store API](https://fakestoreapi.com/)
[Material UI](https://mui.com/)
[Barge]()

[Instalación Material UI](https://mui.com/material-ui/getting-started/installation/)

```bash
npm install react-router-dom

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material
```


```bash
https://fakestoreapi.com/products 
```


`Estructura del Proyecto`  
```bash
.
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Card.jsx
│   │   └── NavBar.jsx
│   ├── context
│   │   ├── CartContext.jsx
│   │   ├── CartProvider.jsx
│   │   ├── ProductsContext.jsx
│   │   └── ProductsProvider.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── Cart.jsx
│   │   └── Purchases.jsx
│   └── stylesheets
│       ├── App.css
│       ├── card.css
│       └── list.css
└── vite.config.js
```

`src > main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
```

`src > App.jsx`
```jsx
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./stylesheets/App.css";
import { NavBar } from "./components/NavBar";
import { Cart } from "./pages/Cart";
import { Purchases } from "./pages/Purchases";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Purchases></Purchases>
              }></Route>
            <Route
              path="/cart"
              element={<Cart></Cart>}></Route>
            <Route
              path="/*"
              element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export { App };
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="./src/assets/react.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous" />
    <title>Shopping Cart</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      type="module"
      src="/src/main.jsx"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"></script>
  </body>
</html>
```

`src > components > Card.jsx`  
```jsx
import React, { useState } from "react";
import "../stylesheets/card.css";

const Card = ({
  image,
  title,
  description,
  price,
  handleAdd,
  handleRemove,
  handleIncrease,
  handleDelete,
}) => {
  const [added, setAdded] = useState(false);

  const clickAdd = () => {
    handleAdd();
    setAdded(true);
  };
  const clickRemove = () => {
    handleRemove();
    setAdded(false);
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-img"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {description}
        </p>
        <p className="card-price">{price}</p>

        {added ? (
          <button
            type="button"
            className="button-remove"
            onClick={clickRemove}>
            Remove from cart
          </button>
        ) : (
          <button
            type="button"
            className="button-add"
            onClick={clickAdd}>
            Add from cart
          </button>
        )}
      </div>
    </div>
  );
};

export { Card };
```

`src > components > NavBar`  
```jsx
import React, { useContext } from "react";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { purchasesList } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand"
          href="#">
          Cart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active"
                href="#">
                Purchases
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <Badge
              badgeContent={purchasesList.length}
              color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
```

`src > context > CartContext.jsx`
```jsx
import { createContext } from "react";

const CartContext = createContext();

export { CartContext };
```

`src > context > CartProvider.jsx`
```jsx
import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

const CartProvider = ({ children }) => {
  const purchasesReducer = (
    state = initialState,
    action = {}
  ) => {
    switch (action.type) {
      case "[CART] Add purchase":
        return [...state, action.payload];

      case "[CART] Increase amount purchase":
        return state.map((item) => {
          const quantity = item.amount + 1;
          if (item.id === action.payload)
            return { ...item, amount: quantity };

          return item;
        });

      case "[CART] Decrease amount purchase":
        return state.map((item) => {
          const quantity = item.amount - 1;
          if (
            item.id === action.payload &&
            item.amount > 1
          )
            return { ...item, amount: quantity };
        });

      case "[CART] Delete purchase":
        return state.filter(
          (purchase) =>
            purchase.id !== action.payload
        );

      default:
        return state;
    }
  };
  const [purchasesList, dispatch] = useReducer(
    purchasesReducer,
    initialState
  );

  const addPurchase = (purchase) => {
    purchase.amount = 1;
    const action = {
      type: "[CART] Add purchase",
      payload: purchase,
    };

    dispatch(action);
  };
  const increaseAmount = (id) => {
    const action = {
      type: "[CART] Increase amount purchase",
      payload: id,
    };
    dispatch(action);
  };
  const decreaseAmount = (id) => {
    const action = {
      type: "[CART] Decrease amount purchase",
      payload: id,
    };

    dispatch(action);
  };
  const deletePurchase = (id) => {
    const action = {
      type: "[CART] Delete purchase",
      payload: id,
    };

    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        purchasesList,
        addPurchase,
        increaseAmount,
        decreaseAmount,
        deletePurchase,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
```

`src > context > ProductsContext.jsx`  
```jsx
import { createContext } from "react";

const ProductsContext = createContext();

export { ProductsContext };
```

`src > context > ProductsProvider.jsx`
```jsx
import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products`
    );
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
```


`src > pages > Cart.jsx`
```jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    purchasesList,
    addPurchase,
    increaseAmount,
    decreaseAmount,
    deletePurchase,
  } = useContext(CartContext);

  const calculateTotal = () => {
    return purchasesList
      .reduce(
        (total, item) =>
          total + item.price * item.amount,
        0
      )
      .toFixed(2);
  };

  const handlePrint = () => {
    print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {purchasesList.map((item) => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() =>
                    decreaseAmount(item.id)
                  }>
                  -
                </button>
                <button className="btn btn-primary">
                  {item.amount}
                </button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() =>
                    increaseAmount(item.id)
                  }>
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>
                    deletePurchase(item.id)
                  }>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th>
              <b>Total: </b>
            </th>
            <td>-</td>
            <td>-</td>
            <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handlePrint}
          disabled={purchasesList < 1}>
          Buy
        </button>
      </div>
    </>
  );
};

export { Cart };
```

`src > pages > Purchases.jsx`
```jsx
import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const Purchases = () => {
  const { products } = useContext(ProductsContext);
  const { addPurchase, deletePurchase } =
    useContext(CartContext);

  const handleAdd = (purchase) => {
    addPurchase(purchase);
  };
  const handleRemove = (id) => {
    deletePurchase(id);
  };

  return (
    <>
      <h1>Purchases: </h1>
      <hr />
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handleAdd={() => handleAdd(product)}
          handleRemove={() =>
            handleRemove(product.id)
          }></Card>
      ))}
    </>
  );
};

export { Purchases };
```
