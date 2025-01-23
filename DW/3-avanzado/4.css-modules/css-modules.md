Empezamos creando nuestro proyecto en React.

```bash
npm create vite
```

Creamos archivos CSS con la siguiente extensión:

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

Para empezar a usar estos estilos debemos importar el archivo:

```jsx
// Le das el nombre que quieras "app"
import app from "./App.module.css";
```

Ahora usémoslo:

```jsx
import { useState } from "react";
import app from "./App.module.css"; 👈👀

function App() {
  console.log(app);

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
  console.log(app);

  const [count, setCount] = useState(0);

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



👈👀👇
🔥
📌