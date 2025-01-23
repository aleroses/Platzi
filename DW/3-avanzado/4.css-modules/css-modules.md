Creamos archivos `App.module.css` e importamos de la siguiente manera:

```css
.count {
  font-weight: 900;
  text-decoration: underline;
  color: darkslateblue;
  background-color: darkslategray;
}

.increase {
  color: aqua;
}
```

```jsx
import styles from "./App.module.css"
```

📌 Creamos las clases `.count` y `.increase` que posteriormente se llamaran como si fuera un objeto.

Ahora para poder usarlo debemos importar de la siguiente manera:

```jsx
import { useState } from "react";
import app from "./App.module.css";

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

👈👀👇
🔥
📌