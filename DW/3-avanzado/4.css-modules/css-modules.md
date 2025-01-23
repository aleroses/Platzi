# CSS Modules

Los **CSS Modules** en React son una forma de escribir estilos que están **aislados por defecto** para evitar conflictos entre clases de diferentes componentes.

## Características clave:

1. **Aislamiento**: Los nombres de las clases se convierten en identificadores únicos mediante hashing, lo que evita que estilos se sobrescriban.
2. **Facilidad de uso**: Permiten usar clases como propiedades de un objeto.

## Cómo usarlos:

1. Empezamos creando nuestro proyecto en React.

```bash
npm create vite
```

2. Creamos un archivo CSS con la extensión `.module.css`:

```bash
App.module.css
```

📌 Las clases `.title` e `.increase` posteriormente se llamaran como si fueran un objeto.

```css
.title {
  font-weight: 900;
  text-decoration: underline;
  color: cornflowerblue;
}

.increase {
  color: aqua;
}
```

3. Importamos el archivo CSS en nuestro componente:

```jsx
// Le das el nombre que quieras "app"
import app from "./App.module.css";
```

4. Usamos las clases como propiedades del objeto `app`:

```jsx
import { useState } from "react";
import app from "./App.module.css"; 👈👀

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <button
        className={app.count} 👈👀
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
```

También es posible usarlo de la siguiente manera:

```jsx
import { useState } from "react";
import app from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(app);

  return (
    <>
      <h1 className={app.title}>Vite + React</h1>
      <button
        className={app["increase"]} 👈👀
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
```

🔥 En caso de crear clases compuestas usar la notación `camelCase`.

El contenido de app en consola se ve así:

![](https://i.postimg.cc/W3pb9Kjy/names.png)

[LA MEJOR FORMA DE USAR CSS EN REACT | CSS MODULES](https://www.youtube.com/watch?v=3QTL4lTpPEY)




👈👀👇
🔥
📌